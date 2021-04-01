import React, { useState } from 'react';

/** Component for each word controlling highlight state. */
export function TextItem({ data, value, getRow, rowNumber }) {
  const [infoData] = useState(data.text);

  const getHighlight = () => {
    if (Math.floor(data.info.start / 2000) % value === 0) {
      return 'bg-purple-700 text-white font-medium';
    }
    return '';
  };

  /**
   * @description: function that validate enter key
   */
  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      getRow(rowNumber);
      e.preventDefault();
    }
  };

  return (
    <span
      className={getHighlight()}
      contentEditable={true}
      suppressContentEditableWarning={true}
      onKeyPress={onKeyPress}
    >
      {infoData}
    </span>
  );
}
