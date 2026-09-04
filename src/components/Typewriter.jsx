import React, { useState, useEffect } from 'react';

const texts = [
  "Full Stack Developer",
  "React.js & Node.js Expert",
  "Architecting Scalable Systems"
];

const Typewriter = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    } else {
      timeout = setTimeout(() => {
        const nextCharIndex = isDeleting ? charIndex - 1 : charIndex + 1;
        setText(currentText.substring(0, nextCharIndex));
        setCharIndex(nextCharIndex);
      }, isDeleting ? 50 : 75);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex]);

  return <span className="font-code-snippet text-headline-sm text-primary-fixed">{text}<span className="animate-pulse opacity-70">|</span></span>;
};

export default Typewriter;
