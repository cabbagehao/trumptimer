import React from 'react';
import { Vote, Heart } from 'lucide-react';
import PolicySection from './PolicySection';

export default function VoterFocus() {
  return (
    <div id="voter-focus" data-section>
      <h2 className="text-3xl font-bold mb-8">Voter Focus Issues</h2>

      <PolicySection
        id="election-reform"
        icon={<Vote className="w-6 h-6 text-red-600" />}
        title="Election Reform"
        content={
          <>
            <p className="mb-4">
              Proposed changes to election procedures and security:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Strict voter ID requirements</li>
              <li>Limited mail-in voting</li>
              <li>Election integrity measures</li>
              <li>Voting machine security</li>
            </ul>
          </>
        }
      />

      <PolicySection
        id="health-pandemic"
        icon={<Heart className="w-6 h-6 text-red-600" />}
        title="Health and Pandemic Response"
        content={
          <>
            <p className="mb-4">
              Healthcare and public health policies prioritize individual choice:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Opposition to vaccine mandates</li>
              <li>Healthcare price transparency</li>
              <li>Prescription drug cost reduction</li>
              <li>Personal freedom in health choices</li>
            </ul>
          </>
        }
      />
    </div>
  );
}