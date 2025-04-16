import React from 'react';

export default function HightlightText(text: string, keyword: string) {
  if (!keyword) return text;
  const regex = new RegExp(keyword, 'gi');
  const words = text.split(regex);
  return words.map((word, i) => {
    if (i) {
      return (
        <React.Fragment key={i}>
          <span style={{ backgroundColor: '#7CFC00' }}>{keyword}</span>
          <span>{word}</span>
        </React.Fragment>
      );
    } else {
      return <span key={i}>{word}</span>;
    }
  });
}
