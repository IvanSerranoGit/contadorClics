import React from 'react';
import '../stylesheet/Contador.css';
function Contador({ numClics}) {
  return(
    <div className='count'>
      {numClics}
    </div>
  );
}
export default Contador