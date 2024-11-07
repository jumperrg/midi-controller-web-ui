/*
	The action component represents a single action which happens after footswitch press
	Each FS can have multiple actions, which you choose from the menus
	The actions are storen in the array and execute in the order they are stored
*/

import './Action.css';
import { useState } from 'react';
import DropDown from './DropDown';
import im from '../assets/recycleBin.svg';

export default function Action({ action }) {
	// console.log('action ', action); // ok
	const [actionState, setActionState] = useState({});

	function getChoice(event) {
		setActionState({ ...actionState, ...event })
		// console.log('event ', event.value);
		console.log('actionState ', actionState);
	}

	function deleteAction(e) {
		console.log('delete action ', e);
	}

	return (
		<>
			<div className="grid-container">
				{action.map((dd, i) => (
					<DropDown
						key={i}
						opt={dd.opt}
						name={dd.name}
						getChoice={getChoice}
					/>
				))}
				<img src={im} width='24' style={{
					justifySelf: 'end',
					alignSelf: 'end',
					margin: '10px'
				}} onClick={deleteAction} />
			</div>
		</>
	)
}


