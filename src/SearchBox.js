import React from 'react';

import './css/searchBox.css';

export const SearchBox = ({onChange}) => {
	return(
		<div>
			<input className="searchBox" type ="search" onChange={onChange} />
		</div>
		)
}