import React from 'react';
import {Card, AddCard} from './Card';

export const CardList = ({robots,set}) =>{
		const cards =robots.map(robot=>{
			return (
					<Card 	key={robot.id}
							set = {set}
							id={robot.id}
							name={robot.name}
							email={robot.email}
					/>
					)
		})
		return (
			<div>
				{cards}
				<AddCard />
			</div>
			);
	}