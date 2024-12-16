import React from 'react';
import { MessageSquare, GraduationCap } from 'lucide-react';
import PolicySection from './PolicySection';

export default function SocialCultural() {
  return (
    <div id="social-cultural" data-section>
      <h2 className="text-3xl font-bold mb-8">Social and Cultural Issues</h2>

      <PolicySection
        id="free-speech-tech"
        icon={<MessageSquare className="w-6 h-6 text-red-600" />}
        title="Free Speech and Tech Regulation"
        content={
          <>
            <p className="mb-4">
              Trump's stance on social media and tech companies focuses on free speech protection:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Legislation to limit social media content moderation</li>
              <li>Section 230 reform proposals</li>
              <li>Tech company antitrust measures</li>
              <li>Protection of conservative voices online</li>
            </ul>
          </>
        }
      />

      <PolicySection
        id="education-policy"
        icon={<GraduationCap className="w-6 h-6 text-red-600" />}
        title="Education Policy"
        content={
          <>
            <p className="mb-4">
              Education reforms emphasize parental rights and traditional values:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>School choice initiatives</li>
              <li>Opposition to Critical Race Theory</li>
              <li>Patriotic education programs</li>
              <li>Support for religious schools</li>
            </ul>
          </>
        }
      />
    </div>
  );
}