import React from 'react';
import '../App.css';


const Events = () => {
  return (
    <div>
      <div class="events">
        <h2>Найближчі танцювальні події</h2>
        <div className='event_position'>
            <p>Світлана Сакаль, Львів</p>
            <p>14 липня</p>
            <button>Купити квитки</button>
        </div>
        <div className='event_position'>
            <p>Global Dance Camp, Львів</p>
            <p>15-21 липня</p>
            <button>Детальніше</button>
        </div>
    </div>
    
    </div>
  );
};
export default Events;