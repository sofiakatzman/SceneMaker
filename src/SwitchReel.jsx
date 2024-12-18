import { useState } from 'react';

function SwitchReel({ categoryName, data, zindex }) {
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
           <div className="nav-buttons" style={{ position: 'relative', bottom: '10px', left: '10px', zIndex: 1000,}}>

        <button 
            className="nav-button"
            onClick={goBack}>
                Back
        </button>

        <p>
          {categoryName}: Item {item}
        </p>

        <button 
            className="nav-button"
            onClick={goForth}>
                Forward
        </button>
      </div>
    </>
  );
}

export default SwitchReel;
