import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { portfolioConfig } from '../../config/portfolioConfig';
import SectionWrapper from '../common/SectionWrapper';
import SectionTitle from '../common/SectionTitle';
import GlassCard from '../common/GlassCard';
import {
  FiMail, FiMapPin, FiGithub, FiLinkedin,
  FiTwitter, FiSend, FiCheckCircle, FiAlertCircle,
} from 'react-icons/fi';

type Status = 'idle' | 'loading' | 'success' | 'error';

const Contact: React.FC = () => {
  const { email, social, location, emailjs: ejsConfig } = portfolioConfig;
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('loading');
    try {
      await emailjs.sendForm(
        ejsConfig.serviceId,
        ejsConfig.templateId,
        formRef.current,
        ejsConfig.publicKey,
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus('idle'), 5000);
  };

  const contactInfo = [
    { icon: <FiMail size={18} className="text-blue-400" />, label: 'Email', value: email, href: `mailto:${email}` },
    { icon: <FiMapPin size={18} className="text-purple-400" />, label: 'Location', value: location, href: null },
  ];

  const socials = [
    { icon: <FiGithub size={18} />, href: social.github, label: 'GitHub', color: 'hover:text-white hover:border-gray-400/40' },
    { icon: <FiLinkedin size={18} />, href: social.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400 hover:border-blue-400/40' },
    { icon: <FiTwitter size={18} />, href: social.twitter, label: 'Twitter', color: 'hover:text-cyan-400 hover:border-cyan-400/40' },
  ];

  const inputClass =
    'w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all text-sm';

  return (
    <SectionWrapper id="contact" className="bg-gradient-to-b from-transparent via-blue-950/5 to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a project in mind or want to collaborate? Let's talk!"
          gradient="from-blue-400 via-purple-400 to-pink-400"
        />

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left panel */}
          <div className="lg:col-span-2 space-y-5">
            {/* Info card */}
            <GlassCard className="p-6" hover={false}>
              <h3 className="text-lg font-bold text-white mb-2">Let's Connect</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                I'm always open to interesting conversations, collaborations, and new opportunities.
                My inbox is always open — I'll do my best to reply promptly.
              </p>

              <div className="space-y-4">
                {contactInfo.map(info => (
                  <div key={info.label} className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-white/5">{info.icon}</div>
                    <div>
                      <p className="text-xs text-gray-500">{info.label}</p>
                      {info.href ? (
                        <a href={info.href} className="text-sm text-gray-300 hover:text-blue-400 transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-sm text-gray-300">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Social card */}
            <GlassCard className="p-6" hover={false}>
              <p className="text-sm font-semibold text-gray-300 mb-4">Find me on</p>
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
                    className={`p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 transition-all ${s.color}`}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </GlassCard>

            {/* Availability */}
            <GlassCard className="p-5" hover={false}>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <div>
                  <p className="text-sm font-semibold text-white">Available for Work</p>
                  <p className="text-xs text-gray-500">Full-time & freelance opportunities</p>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            <GlassCard className="p-6 md:p-8" hover={false}>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-400 mb-2">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Let's work together!"
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    required
                    rows={6}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Status message */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-green-400 text-sm bg-green-500/10 border border-green-500/20 rounded-xl px-4 py-3"
                  >
                    <FiCheckCircle size={16} />
                    Message sent! I'll get back to you soon.
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
                  >
                    <FiAlertCircle size={16} />
                    Something went wrong. Please try emailing me directly.
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
                    <>
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend size={16} /> Send Message
                    </>
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
