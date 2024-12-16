import React from 'react';
import Layout from '../../components/Layout/Layout';
import TableOfContents from '../../components/TableOfContents/TableOfContents';
import PageContent from '../../components/PageContent/PageContent';
import { inaugurationSections } from './sections';
import { Ceremony } from './Ceremony';

export default function Inauguration() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-8">
          <TableOfContents sections={inaugurationSections} />
          <PageContent>
            <Ceremony />
          </PageContent>
        </div>
      </div>
    </Layout>
  );
}