import React from 'react';
const Icon = ({ name, size, color, onclick }) => {
  return (
    <div>
      <i
        className={`fa fa-${name} fa-${size}`}
        style={{ color: color }}
        onClick={onclick}></i>
    </div>
  );
};
export default Icon;
