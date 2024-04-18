
import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  const data = "I am currently in Parent Component";

  return (
    <div>
      <ChildComponent propData={data} />
    </div>
  );
}

export default ParentComponent;
