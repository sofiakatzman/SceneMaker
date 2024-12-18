import { useState } from 'react';

function SwitchReel({ categoryName, data, zindex, buttonHeight }) {
  const [item, setItem] = useState(0);

  //Navigation Functions
  function goBack() {
    if (item === 0) {
      setItem(3); 
    } else {
      setItem(item - 1); 
    }
  }

  function goForth() {
    if (item === 3) {
      setItem(0); 
    } else {
      setItem(item + 1); 
    }
  }

  return (
  
    <>
    <img
        src={data[item].src}
        alt={`${categoryName} ${item}`}
        style={{ 
            zIndex: zindex, 
            position: 'absolute',
            top: 0,
            left: 0,
         }}
      />
    <div  className="reel"
          style={{ 
            top: `${buttonHeight}px`,
      }}>
      
           <div className="nav-buttons">

        <button 
            className="nav-button"
            onClick={goBack}>
                ←
        </button>

        <p
          className="nav-name">
          {categoryName}
        </p>

        <button 
            className="nav-button"
            onClick={goForth}>
                →
        </button>
      </div>
    </div>
    </>
  );
}

export default SwitchReel;
