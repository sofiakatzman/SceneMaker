import { useState } from 'react';

function SwitchReel({ categoryName }) {
  const [item, setItem] = useState(1);

  function goBack() {
    if (item === 1) {
      setItem(4); 
    } else {
      setItem(item - 1); 
    }
  }

  function goForth() {
    if (item === 4) {
      setItem(1); 
    } else {
      setItem(item + 1); 
    }
  }

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      {/* Placeholder image that updates dynamically */}
      {/* <img
        src={`https://via.placeholder.com/150?text=Item+${item}`}
        alt={`Item ${item}`}
        style={{ display: 'block', margin: '0 auto 10px' }}
      /> */}
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
