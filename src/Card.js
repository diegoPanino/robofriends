import React from 'react';

import './css/Card.css'

export const Card = ({id,name,email}) =>{
	return(
		<div className="card">
			<img src = {`https://robohash.org/${id}?set=set2&size=200x200`}
				 alt={`Robot ${name}`} />
			<h2>{name}</h2>
			<p>{email}</p>
		</div>	
		);
}