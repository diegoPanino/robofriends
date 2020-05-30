import React from 'react';

import './css/scrollBox.css';

export const ScrollBox =(props)=>{
	return(
		<div className="scroll">
			{props.children}
		</div>
		);
}