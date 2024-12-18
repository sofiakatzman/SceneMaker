import { useState } from 'react';

function SwitchReel({ categoryName, data }) {
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
    <div>
      <img
        src={data[item].src}
        alt={`${categoryName} ${item}`}
      />
      <div>
        <button onClick={goBack}>Back</button>
        <p>
          {categoryName}: Item {item}
        </p>
        <button onClick={goForth}>Forward</button>
      </div>
    </div>
  );
}

export default SwitchReel;
