import React from 'react';
import AboutSection from './AboutSection2';
import TakshashilaLabs from './TakshilaSection2';
import CommitmentSection from './CommitSection2';
import VisualRepresentation from './VisualSection2';

function Section2() {
  return (
    <div className="w-full flex flex-col">
      {/* Row 1 */}
      <div className="grid grid-cols-3">
        <AboutSection />
        <TakshashilaLabs />
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-3">
        <CommitmentSection />
        <VisualRepresentation />
      </div>
    </div>
  );
}

export default Section2;
