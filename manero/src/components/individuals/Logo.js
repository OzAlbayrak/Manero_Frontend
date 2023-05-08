import React from 'react';

const Logo = ({ title }) => {
	let className = 'mx-auto';
	switch (title) {
		case 'MANERO':
			className += ' logo';
			break;
		case 'search':
			className += ' search';
			break;
		default:
			className += ' page-heading';
			break;
	}
	let html;

	{
		if (title === 'search') {
			html = (
				<div className={className}>
					<i className='fa-light fa-magnifying-glass 2xs'></i>
					<input type='text' placeholder='Search'></input>
				</div>
			);
		} else {
			html = <h1 className={className}>{title}</h1>;
		}
	}
	return <>{html}</>;
};

export default Logo;
