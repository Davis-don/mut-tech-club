import React from 'react';
import Typewriter from 'typewriter-effect';

const TypingComponent = () => {
  const startTypewriter = (typewriter) => {
    typewriter
    .typeString("Cyber Security")
      .pauseFor(1000)
      .deleteAll()
      .typeString("UI/UX Designs")
      .pauseFor(1000)
      .deleteAll()
      .typeString("Web Development")
      .pauseFor(1000)
      .deleteAll()
      .typeString("Mobile apps development")
      .pauseFor(1000)
      .deleteAll()
      .typeString("Cloud engineering")
      .pauseFor(1000)
      .deleteAll()
      .typeString("Power platform")
      .start();
    //   .pauseFor(1000)
    //   .deleteAll()
    //   .typeString('Welcomes You')
    //   .start();
  };

  const onComplete = (typewriter) => {
    // Reset and start the typewriter again on completion
    typewriter.reset();
    startTypewriter(typewriter);
  };

  return (
    <div className="overall-typewritter-component">
      <Typewriter
        options={{
          loop: true, // Enable looping
          onComplete: onComplete, // Callback when typing completes
        }}
        onInit={startTypewriter}
      />
    </div>
  );
};

export default TypingComponent;