import React from 'react';

const Box: React.FC<ReactChildComponent> = ({ title, children }) => {
  return (
    <div>
      {title}
      {children}
    </div>
  );
};

export default Box;
