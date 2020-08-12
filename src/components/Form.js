import React, { Fragment, useState } from 'react';
import {calculateTotal} from '../helpers';

const Form = (props) => {

  const { quantity, saveQuantity, deadline, saveDeadline, saveTotal, saveLoading } = props;

  const [error, saveError] = useState(false);

  const calculateLoan = e => {
    e.preventDefault();

    if (quantity === 0 && deadline === '') {
      saveError(true);
      return;
    }
    saveError(false);

    saveLoading(true);

    setTimeout( () => {
      const total = calculateTotal(quantity, deadline);
      saveTotal(total);
      saveLoading(false);
    }, 3000)
    

  }

  return (

    <Fragment>

      <form onSubmit={calculateLoan}>
        <div className="row">
          <div>
            <label>Loan Amount</label>
            <input className="u-full-width" type="number" placeholder="Example: 3000"
              onChange={e => saveQuantity(parseInt(e.target.value))} />
          </div>
          <div>
            <label>Deadline to Pay</label>
            <select className="u-full-width" onChange={e => saveDeadline(parseInt(e.target.value))}>
              <option value="">Select deadline</option>
              <option value="3">3 months</option>
              <option value="6">6 months</option>
              <option value="12">12 months</option>
              <option value="24">24 months</option>
            </select>
          </div>
          <div>
            <input type="submit" value="Calcular" className="button-primary u-full-width" />
          </div>
        </div>
      </form>

      { (error) ? <p className="error">All fields are required</p> : null }
        
    </Fragment>
  );
}

export default Form