import React from 'react';
import CeremonySchedule from './components/CeremonySchedule';
import KeyParticipants from './components/KeyParticipants';
import InauguralSpeech from './components/InauguralSpeech';
import PublicReaction from './components/PublicReaction';
import InternationalImpact from './components/InternationalImpact';
import MediaCoverage from './components/MediaCoverage';
import References from './components/References';

export function Ceremony() {
  return (
    <>
      <CeremonySchedule />
      <KeyParticipants />
      <InauguralSpeech />
      <PublicReaction />
      <InternationalImpact />
      <MediaCoverage />
      <References />
    </>
  );
}