import './Action.css';
import { useState } from 'react';
import DropDown from './DropDown';
import im from '../assets/recycleBin.svg';

export default function Action({ action }) {
	console.log('action ', action); // ok
	const [choice, setChoice] = useState({});

	function getChoice(event){
		console.log('event', event );
	}

	function deleteAction() {
		console.log('delete action');
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


