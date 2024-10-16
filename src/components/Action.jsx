import './Action.css'
import DropDown from './DropDown';
import im from '../assets/recycleBin.svg'

export default function Action({ dropdowns, colors, updatePanelState }) {
	// console.log('dropdowns ', dropdowns); // ok
	function deleteAction() {
		console.log('click');
	}

	return (
		<>
			<div className="grid-container">
				{dropdowns.map((dd, i) => (
					<DropDown
						key={i}
						opt={dd.opt}
						name={dd.name}
						updatePanelState={updatePanelState} />
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


