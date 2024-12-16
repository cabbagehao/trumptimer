import React from 'react';
import Layout from '../../components/Layout/Layout';
import TableOfContents from '../../components/TableOfContents/TableOfContents';
import PageContent from '../../components/PageContent/PageContent';
import { aboutSections } from './sections';
import BasicInfo from './components/BasicInfo';
import PoliticalCareer from './components/PoliticalCareer';
import KeySpeeches from './components/KeySpeeches';
import AdditionalResources from './components/AdditionalResources';

export default function AboutTrump() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-8">
          <TableOfContents sections={aboutSections} />
          <PageContent>
            <BasicInfo />
            <PoliticalCareer />
            <KeySpeeches />
            <AdditionalResources />
          </PageContent>
        </div>
      </div>
    </Layout>
  );
}