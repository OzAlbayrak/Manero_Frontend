import React from 'react';

const InputField = ({ placeholder, nameid, name, type, value, setValue }) => {
	return (
		<div className='text-center mx-auto'>
			<label className='baselabel' htmlFor={nameid}>
				{name}
			</label>
			<input
				className='baseinput'
				type={type}
				id={nameid}
				value={value}
				placeholder={placeholder}
				onChange={(event) => setValue(event.target.value)}
			/>
		</div>
	);
};

export default InputField;
