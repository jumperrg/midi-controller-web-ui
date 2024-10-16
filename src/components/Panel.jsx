import './Action.css';
import "./Panel.css";
import Action from './Action';
import NoteSection from './NoteSection';

export default function Panel({ panelId, note, dropdowns, colors, updatePanelState }) {
  // console.log(panelId);
  return (
    <>
      <div className="btn-panel-container">
        <div className='panelHeader'>Foot switch 1: Name</div>
        <div className='flexRow'>
          <Action dropdowns={dropdowns} updatePanelState={updatePanelState}></Action>
          <Action dropdowns={dropdowns} updatePanelState={updatePanelState}></Action>
          <Action dropdowns={dropdowns} updatePanelState={updatePanelState}></Action>
          <button>+</button>
        </div>
      </div>
    </>
  )
}


