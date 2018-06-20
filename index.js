import React from 'react';

import css from './Spinner.css'

const Spinner = () => {
  return (
    <div className={css.rootSpinner}>
      <div className={css.fragmentSpinner}></div>
      <div className={css.fragmentSpinner}></div>
    </div>
  )
};

export default Spinner;