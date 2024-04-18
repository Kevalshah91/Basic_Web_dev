
import React from 'react';

function NewChildComponent(props) {
  const handleNewEvent = () => {
    props.onNewEvent('Data to be sent to the parent from NewChildComponent');
  };

  return (
    <button onClick={handleNewEvent}>New Event Button</button>
  );
}

export default NewChildComponent;
