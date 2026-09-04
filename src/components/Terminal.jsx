import React, { useEffect, useState } from 'react';

const Terminal = () => {
  const [content, setContent] = useState([]);
  
  useEffect(() => {
    const codeText = `const eslam = {
  role: 'Full Stack Developer',
  stack: ['React', 'Node.js', 'MySQL', 'MongoDB', 'Firebase'],
  deployed: 4,
  users: '10,000+',
  available: true
};

console.log(\`Ready to build next project\`);`;

    let currentText = '';
    let i = 0;
    let isDeleting = false;
    let timeout;

    const loop = () => {
      if (isDeleting) {
        if (i > 0) {
          i--;
          currentText = codeText.substring(0, i);
          setContent(currentText);
          timeout = setTimeout(loop, 10);
        } else {
          isDeleting = false;
          timeout = setTimeout(loop, 500);
        }
      } else {
        if (i < codeText.length) {
          currentText = codeText.substring(0, i + 1);
          setContent(currentText);
          i++;
          timeout = setTimeout(loop, 25);
        } else {
          isDeleting = true;
          timeout = setTimeout(loop, 4000);
        }
      }
    };

    loop();
    
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="glass-card rounded-xl overflow-hidden terminal-shadow animate-float">
      {/* Terminal Header */}
      <div className="bg-surface-container-high px-4 py-2 flex items-center gap-2 border-b border-outline-variant">
        <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
        <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
        <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
        <span className="ml-4 text-xs font-code-snippet text-on-surface-variant">eslam.js</span>
      </div>
      
      {/* Terminal Body */}
      <div className="p-6 font-code-snippet text-sm bg-surface-container-lowest/80 min-h-[250px] relative overflow-hidden">
        <pre className="text-on-surface whitespace-pre-wrap font-code-snippet m-0 bg-transparent absolute top-6 left-6 right-6">
          {content}
          <span className="animate-pulse bg-on-surface inline-block w-2 h-4 ml-1 align-middle"></span>
        </pre>
      </div>
    </div>
  );
};

export default Terminal;
