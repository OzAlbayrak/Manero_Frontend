import React from 'react';

const InputField = ({
	placeholder,
	nameid,
	name,
	type,
	value,
	onChange,
	style,
	labelName,
}) => {
	return (
		<div className='text-center mx-auto'>
			<label className='baselabel' htmlFor={nameid}>
				{labelName}
			</label>
			<input
				className='baseinput'
				type={type}
				id={nameid}
				value={value}
				placeholder={placeholder}
				onChange={onChange}
				style={style}
				name={name}
			/>
		</div>
	);
};

export default InputField;
