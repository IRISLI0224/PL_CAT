import { useState, useEffect } from 'react';

const BackgroundMusic = ({ src }) => {
  const [audio] = useState(new Audio(src));

  useEffect(() => {
    audio.loop = true; 
    audio.play();

    return () => {
      audio.pause();
    };
  }, [audio]);

  return null; 
};

export default BackgroundMusic;