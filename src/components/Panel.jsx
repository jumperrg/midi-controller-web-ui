import './Action.css';
import "./Panel.css";
import Action from './Action';
import NoteSection from './NoteSection';

export default function Panel({ panelId, note, dropdowns, colors, updatePanelState }) {
  // console.log(panelId);
  return (
    <>
      <div className="btn-panel-container">
        <div className='flexRow'>
          {/* <div className='panelHeader'> */}

            <Action dropdowns={dropdowns} colors={colors} updatePanelState={updatePanelState}></Action>
            <Action dropdowns={dropdowns} colors={colors} updatePanelState={updatePanelState}></Action>
            <Action dropdowns={dropdowns} colors={colors} updatePanelState={updatePanelState}></Action>
            {/* <NoteSection panelId={panelId} note={note}></NoteSection> */}
          </div>
        {/* </div> */}
      </div>
    </>
  )
}


