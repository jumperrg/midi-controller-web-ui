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
		console.log('currChoice ', currChoice);
		setActionState({ ...actionState, ...currChoice });
		// updateLabel(actionState);
	}, [currChoice]);

	function updateLabel(labelName) {
		console.log(labelName);

		//if the name is 'send' change the label of the next dropdown
		// if (labelName.Send === 'Note On') {
		// 	console.log('note on ', labelName);
		// 	console.log('action ', action);
		// }
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
						getChoice={setCurrChoice}
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


