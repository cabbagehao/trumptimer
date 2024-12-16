import React from 'react';
import { Building2, Users, Scale } from 'lucide-react';
import PolicySection from './PolicySection';

export default function DomesticPolicy() {
  return (
    <div id="domestic-policy" data-section>
      <h1 className="text-3xl font-bold mb-8">Donald Trump's Domestic Policy</h1>
      
      <PolicySection
        id="economic-policy"
        icon={<Building2 className="w-6 h-6 text-red-600" />}
        title="Economic Policy"
        content={
          <>
            <p className="mb-4">
              Trump's "America First" economic strategy focuses on manufacturing revival, tax reforms, and energy independence:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Manufacturing return to America with increased tariffs on foreign goods</li>
              <li>Tax reductions for middle class and businesses</li>
              <li>Support for fossil fuel industry development</li>
              <li>"Buy American, Hire American" initiatives</li>
            </ul>
          </>
        }
      />

      <PolicySection
        id="immigration-policy"
        icon={<Users className="w-6 h-6 text-red-600" />}
        title="Immigration Policy"
        content={
          <>
            <p className="mb-4">
              Border security and immigration control remain central to Trump's domestic agenda:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Expansion of border wall construction</li>
              <li>Enhanced entry screening measures</li>
              <li>Revival of "Remain in Mexico" policy</li>
              <li>Merit-based immigration system</li>
            </ul>
          </>
        }
      />

      <PolicySection
        id="justice-social-policy"
        icon={<Scale className="w-6 h-6 text-red-600" />}
        title="Justice and Social Policy"
        content={
          <>
            <p className="mb-4">
              Law enforcement support and conservative social values guide Trump's justice policies:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Increased funding for police departments</li>
              <li>Tougher penalties for violent crimes</li>
              <li>Second Amendment rights protection</li>
              <li>Conservative Supreme Court appointments</li>
            </ul>
          </>
        }
      />
    </div>
  );
}