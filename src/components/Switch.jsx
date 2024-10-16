import './Action.css'
import ColorPicker from './ColorPicker';
import './Switch.css'


export default function Switch({ label, index }) {

	return (
		<>
			<div className='switch'>
				<div>Switch {index}</div>
				<input type='text' className='btn_label' value={label} />
				<ColorPicker color={'Color On'}></ColorPicker>
				<ColorPicker color={'Color Off'}></ColorPicker>
			</div>
		</>
	)
}


