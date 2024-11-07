/*
	The action component represents a single action which happens after footswitch press
	Each FS can have multiple actions, which you choose from the menus
	The actions are storen in the array and execute in the order they are stored
*/

import './Action.css';
import { useState, useEffect, useRef } from 'react';
import DropDown from './DropDown';
import im from '../assets/recycleBin.svg';

export default function Action({ action }) {
	// let
	// console.log('action ', action); // ok
	const [actionState, setActionState] = useState({});
	const [currChoice, setCurrChoice] = useState({});


	useEffect(() => {
		updateLabel(actionState);
		console.log('actionState ', actionState);
	}, [actionState]);


	// return json with the selected options
	function getChoice(data) {
		// setActionState({ ...actionState, ...event })
		console.log('choice ', data);
		// setCurrChoice(event.value);
	}

	function updateLabel(labelName) {
		//if the name is 'send' change the label of the next dropdown
		if (labelName.value === 'Note On') {
			console.log('note on ', labelName);
			console.log('action ', action);
		}
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
						onChange={updateLabel}
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


