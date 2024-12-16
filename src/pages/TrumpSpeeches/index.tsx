import React from 'react';
import Layout from '../../components/Layout/Layout';
import TableOfContents from '../../components/TableOfContents/TableOfContents';
import PageContent from '../../components/PageContent/PageContent';
import { speechesSections } from './sections';
import Statistics from './components/Statistics';
import Timeline from './components/Timeline';
import SpeechList from './components/SpeechList';
import References from './components/References';

export default function TrumpSpeeches() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-8">
          <TableOfContents sections={speechesSections} />
          <PageContent>
            <h1 className="text-3xl font-bold mb-8">Donald Trump's Notable Speeches</h1>
            <Statistics />
            <Timeline />
            <SpeechList />
            <References />
          </PageContent>
        </div>
      </div>
    </Layout>
  );
}