import React, { useState } from 'react';

const ButtonGroup = ({ item, isTool = false, isReverse = false }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyle = {
    color: isHovered ? 'white' : item.color,
    borderColor: item.color,
    backgroundColor: isHovered ? item.color : 'transparent',
  };

  const reverseStyle = {
    color: item.color,
    // color: isHovered ? item.color : item.color,
  };

  return (
    <button
      className={`${isTool ? 'text-sm' : 'mx-2' } px-3 my-1 py-1 ${isReverse ? '' : 'border-2'} rounded-3xl`}
      style={isReverse ? reverseStyle : buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {item.text}
    </button>
  );
}

export default ButtonGroup