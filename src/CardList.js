import React from 'react';
import {Card} from './Card';

export const CardList = ({robots}) =>{
		const cards =robots.map(robot=>{
			return (
					<Card 	key={robot.id}
							id={robot.id}
							name={robot.name}
							email={robot.email}
					/>
					)
		})
		return (
			<div>
				{cards}
			</div>
			);
	}