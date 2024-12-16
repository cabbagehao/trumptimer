import React from 'react';
import { Globe, Users2, Landmark } from 'lucide-react';
import PolicySection from './PolicySection';

export default function ForeignPolicy() {
  return (
    <div id="foreign-policy" data-section>
      <h2 className="text-3xl font-bold mb-8">Foreign Policy</h2>

      <PolicySection
        id="china-policy"
        icon={<Globe className="w-6 h-6 text-red-600" />}
        title="China Policy"
        content={
          <>
            <p className="mb-4">
              Trump's approach to China emphasizes economic competition and strategic containment:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Continued tariffs on Chinese imports</li>
              <li>Technology export restrictions</li>
              <li>Supply chain independence initiatives</li>
              <li>Enhanced support for Taiwan</li>
            </ul>
          </>
        }
      />

      <PolicySection
        id="allies-relations"
        icon={<Users2 className="w-6 h-6 text-red-600" />}
        title="Relations with Allies"
        content={
          <>
            <p className="mb-4">
              Trump's "America First" approach reshapes relationships with traditional allies:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>NATO funding renegotiation</li>
              <li>Bilateral trade agreement reviews</li>
              <li>Military cooperation reassessment</li>
              <li>European Union trade relations</li>
            </ul>
          </>
        }
      />

      <PolicySection
        id="middle-east-policy"
        icon={<Landmark className="w-6 h-6 text-red-600" />}
        title="Middle East Policy"
        content={
          <>
            <p className="mb-4">
              Middle East strategy focuses on energy security and regional stability:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Support for traditional allies</li>
              <li>Iran sanctions enforcement</li>
              <li>Israel-Arab normalization</li>
              <li>Energy market influence</li>
            </ul>
          </>
        }
      />
    </div>
  );
}