import React, { useState } from 'react';



function Section() {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="App">
      <div className="background">
        <button
          className={`heart-button ${liked ? 'liked' : ''}`}
          onClick={handleClick}
        >
          ❤
        </button>
      </div>
    </div>
  );
}

export default Section;