import React, { useState } from 'react';


function Icon() {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="App">
      <div className="background">
        <div className="box">
          <button
            className={`heart-button ${liked ? 'liked' : ''}`}
            onClick={handleClick}
          >
            ❤
          </button>
        </div>
      </div>
    </div>
  );
}

export default Icon;