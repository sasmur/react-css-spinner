import React from 'react';

import css from 'Spinner.css'

const Spinner = () => {
  return (
    <div className={css.root}>
      <div className={css.spinnerFragment}></div>
      <div className={css.spinnerFragment}></div>
    </div>
  )
};

export default Spinner;