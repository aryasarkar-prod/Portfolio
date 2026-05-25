import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { portfolioConfig } from '../../config/portfolioConfig';
import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../common/SectionTitle';
import GlassCard from '../common/GlassCard';
import {
  FiMail, FiMapPin, FiGithub, FiLinkedin,
  FiFacebook, FiSend, FiCheckCircle, FiAlertCircle,
} from 'react-icons/fi';

type Status = 'idle' | 'loading' | 'success' | 'error';

const Contact: React.FC = () => {
  const { email, social, location, emailjs: ejsConfig, availableForWork } = portfolioConfig;
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('loading');
    try {
      // Email 1 — sends message to YOU
      await emailjs.sendForm(
        ejsConfig.serviceId,
        ejsConfig.templateId,
        formRef.current,
        ejsConfig.publicKey,
      );

      // Email 2 — auto-reply to the SENDER (only if autoReplyTemplateId is set)
      if (ejsConfig.autoReplyTemplateId) {
        await emailjs.send(
          ejsConfig.serviceId,
          ejsConfig.autoReplyTemplateId,
          {
            name:    formData.name,
            email:   formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          ejsConfig.publicKey,
        );
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch { setStatus('error'); }
    setTimeout(() => setStatus('idle'), 5000);
  };

  const inputBase =
    'w-full px-4 py-3 rounded-xl text-sm transition-all outline-none ' +
    'bg-gray-100 dark:bg-white/5 border border-gray-300 dark:border-white/10 ' +
    'text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-600 ' +
    'focus:border-blue-500 dark:focus:border-blue-500/50 focus:bg-white dark:focus:bg-blue-500/5 ' +
    'focus:ring-2 focus:ring-blue-500/10';

  const contactInfo = [
    { icon: <FiMail size={18} className="text-blue-500" />,   label: 'Email',    value: email,    href: `mailto:${email}` },
    { icon: <FiMapPin size={18} className="text-purple-500" />, label: 'Location', value: location, href: null },
  ];
  const socials = [
    { icon: <FiGithub size={18} />,   href: social.github,    label: 'GitHub',   hover: 'hover:text-gray-900 dark:hover:text-white   hover:border-gray-400/40' },
    { icon: <FiLinkedin size={18} />, href: social.linkedin,  label: 'LinkedIn', hover: 'hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400/40'  },
    { icon: <FiFacebook size={18} />, href: social.facebook,  label: 'Facebook', hover: 'hover:text-blue-700 dark:hover:text-blue-400 hover:border-blue-500/40'  },
  ];

  return (
    <SectionWrapper id="contact" className="bg-gradient-to-b from-transparent via-blue-50/40 dark:via-blue-950/5 to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? Let's talk!"
          gradient="from-blue-500 via-purple-500 to-pink-500"
        />

        <div className="grid lg:grid-cols-5 gap-8">

          {/* ── Left panel ── */}
          <div className="lg:col-span-2 space-y-5">
            <GlassCard className="p-6" hover={false}>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Let's Connect</h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6">
                I'm always open to interesting conversations, collaborations, and new opportunities.
                My inbox is open — I'll reply promptly.
              </p>
              <div className="space-y-4">
                {contactInfo.map(info => (
                  <div key={info.label} className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-gray-100 dark:bg-white/5">{info.icon}</div>
                    <div>
                      <p className="text-xs text-gray-400 dark:text-gray-500">{info.label}</p>
                      {info.href
                        ? <a href={info.href} className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">{info.value}</a>
                        : <p className="text-sm text-gray-700 dark:text-gray-300">{info.value}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6" hover={false}>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">Find me on</p>
              <div className="flex gap-3">
                {socials.map(s => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-500 dark:text-gray-400 transition-all ${s.hover}`}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </GlassCard>

            {availableForWork && (
              <GlassCard className="p-5" hover={false}>
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">Available for Work</p>
                    <p className="text-xs text-gray-500">Full-time & freelance opportunities</p>
                  </div>
                </div>
              </GlassCard>
            )}
          </div>

          {/* ── Right — form ── */}
          <div className="lg:col-span-3">
            <GlassCard className="p-6 md:p-8" hover={false}>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">Your Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required className={inputBase} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">Your Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required className={inputBase} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Let's work together!" required className={inputBase} />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">Message</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." required rows={6} className={`${inputBase} resize-none`} />
                </div>

                {status === 'success' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 rounded-xl px-4 py-3">
                    <FiCheckCircle size={16} /> Message sent! I'll get back to you soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-xl px-4 py-3">
                    <FiAlertCircle size={16} /> Something went wrong. Please email me directly.
                  </motion.div>
                )}

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  whileHover={{ scale: status !== 'loading' ? 1.02 : 1 }}
                  whileTap={{ scale: status !== 'loading' ? 0.98 : 1 }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/20 hover:from-blue-500 hover:to-purple-500 transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {status === 'loading' ? (
                    <><svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg> Sending...</>
                  ) : (
                    <><FiSend size={16} /> Send Message</>
                  )}
                </motion.button>
              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
