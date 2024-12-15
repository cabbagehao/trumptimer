import React from 'react';
import Layout from './components/Layout/Layout';
import CountdownTimer from './components/CountdownTimer';
import Timeline from './components/Timeline';
import SocialShare from './components/SocialShare';

export default function App() {
  return (
    <Layout>
      <CountdownTimer />
      <Timeline />
      <SocialShare />
    </Layout>
  );
}