import React from 'react';
import Layout from '../../components/Layout/Layout';
import TableOfContents from '../../components/TableOfContents/TableOfContents';
import PageContent from '../../components/PageContent/PageContent';
import { policySections } from './sections';
import { Policy } from './Policy';

export default function TrumpPolicies() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-8">
          <TableOfContents sections={policySections} />
          <PageContent>
            <Policy />
          </PageContent>
        </div>
      </div>
    </Layout>
  );
}