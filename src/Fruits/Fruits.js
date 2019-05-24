import React from 'react';
import './Fruits.css';

const fruits = (prop) => {

    return (
        <div className="card" >
            <h6 onClick={prop.delete}>I am Fruit and My name is {prop.name}</h6>
            <input type="text" onChange={prop.changed} value={prop.name} />
        </div>
    );

}
export default fruits;