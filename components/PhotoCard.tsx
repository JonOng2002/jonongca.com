import React from 'react';

export const PhotoCard: React.FC = () => {
  return (
    <div className="glass rounded-[2rem] h-full overflow-hidden">
      <img
        src="/images/pfp.jpeg"
        alt="Jonathan Ong"
        className="w-full h-full object-cover"
      />
    </div>
  );
};
