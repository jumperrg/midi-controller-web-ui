import { useState } from 'react';
import './Action.css'
import ColorPicker from './ColorPicker';
import ToggleSwitch from './ToggleSwitch';
import './Switch.css'


export default function Switch({ label, index }) {
	const [isMomentary, setIsMomentary] = useState(false);

	return (
		<>
			<div className='switch'>
				<div>Switch {index}</div>
				<input type='text' className='btn_label' value={label} />
				<ToggleSwitch
					checked={isMomentary}
					onChange={setIsMomentary}
					offLabel="LATCH"
					onLabel="MOM"
				/>
				<ColorPicker color={'Color On'}></ColorPicker>
				<ColorPicker color={'Color Off'}></ColorPicker>
			</div>
		</>
	)
}


