import React from 'react';

import '../css/searchBox.css';

export const SearchBox = ({onChange, onChangeRadio}) => {
	const loop = [1,2,3,4,5];
	const radioBtn = loop.map(i=>{return (
		<label key={i} className="radioInput">
			<input type="radio"
					 value={i}
					 name="setChoice"
					 onChange={onChangeRadio} />Set {i}
		</label>)})
	

	return(

		<div>
			<input className="searchBox" type ="search" onChange={onChange} />
			<form className="radioForm">
			{radioBtn}
			</form>
		</div>
		)
}