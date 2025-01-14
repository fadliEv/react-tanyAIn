import React from 'react';

function ResponseFormatter({ text }) {
  const formatText = (rawText) => {
    const lines = rawText.split('\n');
    const formattedElements = [];
    let isCodeBlock = false;
    let codeBlockContent = [];

    const copyToClipboard = (content) => {
      navigator.clipboard.writeText(content).then(() => {
        alert('Code copied to clipboard!');
      });
    };

    lines.forEach((line, index) => {
      if (line.startsWith('```')) {
        // Toggle code block mode
        if (isCodeBlock) {
          // Close the code block
          const codeContent = codeBlockContent.join('\n');
          formattedElements.push(
            <div key={`code-block-${index}`} className="relative group">
              <pre className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-3 overflow-x-auto">
                {codeBlockContent.map((codeLine, codeIndex) => (
                  <div key={`code-line-${codeIndex}`}>{codeLine}</div>
                ))}
              </pre>
              <button
                onClick={() => copyToClipboard(codeContent)}
                className="absolute top-1 right-1 text-xs bg-blue-500 text-white px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Copy
              </button>
            </div>
          );
          codeBlockContent = [];
        }
        isCodeBlock = !isCodeBlock;
      } else if (isCodeBlock) {
        // Collect lines for code block
        codeBlockContent.push(line);
      } else if (line.startsWith('**')) {
        // Bold text
        formattedElements.push(
          <strong key={`bold-${index}`} className="block mb-2">{line.replace(/\*\*/g, '')}</strong>
        );
      } else if (line.trim() !== '') {
        // Regular paragraph
        formattedElements.push(
          <p key={`paragraph-${index}`} className="mb-2">{line}</p>
        );
      }
    });

    return formattedElements;
  };

  return <>{formatText(text)}</>;
}

export default ResponseFormatter;
