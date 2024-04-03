import React, { useState, useEffect } from 'react';

const BackgroundMusic = ({ src }) => {
  const [audio] = useState(new Audio(src));
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    const handleUserInteraction = () => {
      setUserInteracted(true);
    };

    document.addEventListener('click', handleUserInteraction);
    return () => {
      document.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  useEffect(() => {
    if (userInteracted) {
      audio.loop = true;
      audio.play();
    }

    return () => {
      audio.pause();
    };
  }, [audio, userInteracted]);

  return null;
};

export default BackgroundMusic;