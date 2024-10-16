import Switch from '../components/Switch';
import './Switches.css'

export default function Switches({ label, colorOn, colorOff }) {
  return (<>
    <div className="switch_container">

      <Switch index={0} label={'Delay'}></Switch>
      <Switch index={1} label={'Clean'}></Switch>
      <Switch index={2} label={'Dirty'}></Switch>
      <Switch index={3} label={'Blues'}></Switch>
      <Switch index={4} label={'Looper'}></Switch>
      <Switch index={5} label={'Reverb'}></Switch>
    </div>
  </>)
}