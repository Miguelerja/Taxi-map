import React from 'react';



const Toggler = (props) => {
  const handleClick = () => {
    
  };

  return (
    <div className='toggler' data-test='toggler'>
      <button 
        onClick={handleClick}
        className='btn' 
        data-test='taxis'>MyTaxi</button>
      <button 
        onClick={handleClick}
        className='btn' 
        data-test='cars'>Car2Go</button>
    </div>
  );
};

export default Toggler;
