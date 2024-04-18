// NewParentComponent.js
import React from 'react';
import NewChildComponent from './NewChildComponent';

function NewParentComponent() {
  const handleNewEventClick = (data) => {
    // Handle the new event raised by the NewChildComponent
    console.log(`New Event button clicked with data: ${data}`);
  };

  return (
    <div>
      <NewChildComponent onNewEvent={handleNewEventClick} />
    </div>
  );
}

export default NewParentComponent;
