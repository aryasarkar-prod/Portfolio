import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { portfolioConfig } from './config/portfolioConfig';

import Layout from './components/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import GitHubRepos from './components/sections/GitHubRepos';
import Education from './components/sections/Education';
import Achievements from './components/sections/Achievements';
import Contact from './components/sections/Contact';

const App: React.FC = () => {
  const { seo } = portfolioConfig;

  return (
    <HelmetProvider>
      <ThemeProvider>
        {/* SEO */}
        <Helmet>
          <title>{seo.title}</title>
          <meta name="description" content={seo.description} />
          <meta name="keywords" content={seo.keywords} />
          <meta name="author" content={portfolioConfig.name} />

          {/* Open Graph */}
          <meta property="og:title" content={seo.title} />
          <meta property="og:description" content={seo.description} />
          <meta property="og:image" content={seo.ogImage} />
          <meta property="og:url" content={seo.siteUrl} />
          <meta property="og:type" content="website" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seo.title} />
          <meta name="twitter:description" content={seo.description} />
          <meta name="twitter:image" content={seo.ogImage} />

          {/* Canonical */}
          <link rel="canonical" href={seo.siteUrl} />
        </Helmet>

        <Layout>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <GitHubRepos />
          <Education />
          <Achievements />
          <Contact />
        </Layout>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
