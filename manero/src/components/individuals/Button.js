import React from 'react';

const Button = ({ btnType = 'submit', btnText, handleClick }) => {
	return (
		/* knappen har width: 100%; . Den bör alltså ha ett föräldra-element med en begränsad vidd (tex max-width: 430px;) */

		<button
			className='btn rounded-pill my-3 w-100 custom-btn'
			type={btnType}
			onClick={handleClick}
		>
			{btnText}
		</button>
	);
};

export default Button;
