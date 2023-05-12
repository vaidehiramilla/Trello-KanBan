import React, { useState } from 'react';

const Title = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [headingText, setHeadingText] = useState('Editable Heading');

  const handleHeadingClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setHeadingText(e.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={headingText}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          autoFocus
        />
      ) : (
        <h1 onClick={handleHeadingClick}>{headingText}</h1>
      )}
    </div>
  );
};

export default Title; 


