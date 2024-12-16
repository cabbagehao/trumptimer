import React from 'react';
import DomesticPolicy from './components/DomesticPolicy';
import ForeignPolicy from './components/ForeignPolicy';
import SocialCultural from './components/SocialCultural';
import VoterFocus from './components/VoterFocus';
import SocialMedia from './components/SocialMedia';
import References from './components/References';

export function Policy() {
  return (
    <>
      <DomesticPolicy />
      <ForeignPolicy />
      <SocialCultural />
      <VoterFocus />
      <SocialMedia />
      <References />
    </>
  );
}