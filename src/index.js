import React from 'react';
import PropTypes from 'prop-types';
import css from './style.css';

const Spinner = (props) => {
	const { size, borderWidth } = props;
	const PropStyles = {
		size: {
			height: `${size}px`,
			width: `${size}px`,
		},
		border: {
			borderWidth: `${borderWidth}px`		
		}		
	}
	return (
		<div className={css.rootSpinner} style={PropStyles.size}>
			<div className={css.fragmentSpinner} style={PropStyles.border}></div>
			<div className={css.fragmentSpinner} style={PropStyles.border}></div>
		</div>
	)
};

Spinner.propTypes = {
	size: PropTypes.number,
	borderWidth: PropTypes.number
}

export default Spinner;