import './Action.css';
import "./ActionsBoard.css";
import { useState } from 'react';
import Action from './Action';
import SeparatorV from './SeparatorV'
import NoteSection from './NoteSection';

export default function ActionsBoard({ panelId, note, action, colors, updatePanelState }) {
  // console.log(panelId);
  const [actions, setActions] = useState([]);

  const testHandler = (e) => {
    console.log('getPanelData', e.target);
  }

  const addAction = (newAct) => {
    setActions([...actions, {}])
  }

  return (
    <>
      <div className="btn-panel-container">
        <div className='panelHeader'>Foot switch 1: Name</div>
        <div className='flexRow'>
          <Action action={action} updatePanelState={updatePanelState}></Action>
          <SeparatorV></SeparatorV>
          <Action action={action} updatePanelState={updatePanelState}></Action>
          <SeparatorV></SeparatorV>
          <Action action={action} updatePanelState={updatePanelState}></Action>
          {/* <SeparatorV></SeparatorV> */}
          <div className='btnContainer'>
            <button>+</button>
            <button onClick={testHandler}>test</button>
          </div>
        </div>
      </div>
    </>
  )
}


