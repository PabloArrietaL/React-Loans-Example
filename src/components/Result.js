import React from 'react';

const Result = ({ quantity, total, deadline }) => (

    <div className="u-full-width result">
        <h2>Summary</h2>
        <p>The requested quantity is: ${quantity}</p>
        <p>To pay in: {deadline} months</p>
        <p>Your monthly payment is: ${ (total/deadline).toFixed(2) }</p>
        <p>Total to pay: ${ (total).toFixed(2) }</p>
    </div>
);


export default Result;