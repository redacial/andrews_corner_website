import React, { useState, useRef } from 'react';

interface BibleTooltipProps {
  reference: string; // e.g. "John 12:20"
  display: string;   // text shown in the paragraph
}

const BibleTooltip: React.FC<BibleTooltipProps> = ({ reference, display }) => {
  const [text, setText] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const fetchedRef = useRef(false);

  const handleMouseEnter = async () => {
    setVisible(true);
    if (fetchedRef.current) return;
    fetchedRef.current = true;
    setLoading(true);
    try {
      const encoded = encodeURIComponent(reference);
      const res = await fetch(`https://bible-api.com/${encoded}?translation=web`);
      const data = await res.json();
      setText(data.text?.trim() ?? 'Verse not found.');
    } catch {
      setText('Could not load verse.');
    } finally {
      setLoading(false);
    }
  };

  const handleClick = () => {
    setVisible(v => !v);
    if (!fetchedRef.current) {
      handleMouseEnter();
    }
  };

  return (
    <span
      className="bible-tooltip-wrap"
      tabIndex={0}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
      onClick={handleClick}
    >
      <span className="bible-ref">{display}</span>
      {visible && (
        <span className="bible-tooltip">
          <span className="bible-tooltip-ref">{reference} (WEB)</span>
          <span className="bible-tooltip-text">
            {loading ? 'Loading…' : text}
          </span>
        </span>
      )}
    </span>
  );
};

export default BibleTooltip;
