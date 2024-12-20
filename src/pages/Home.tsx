import React from 'react';
import Layout from '../components/Layout/Layout';
import CountdownTimer from '../components/CountdownTimer';
import Timeline from '../components/Timeline';
import SocialShare from '../components/SocialShare';
import Hero from '../components/Home/Hero';
import HistoricalContext from '../components/Home/HistoricalContext';
import FAQ from '../components/Home/FAQ';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-12">
        <CountdownTimer />
        <Timeline />
        <Hero />
        <HistoricalContext />
        <FAQ />
        <SocialShare />
      </div>
    </Layout>
  );
}