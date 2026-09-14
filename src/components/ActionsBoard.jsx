import './Action.css';
import "./ActionsBoard.css";
import { useState, useRef, useEffect } from 'react';
import Action from './Action';
import SeparatorV from './SeparatorV'
import NoteSection from './NoteSection';

export default function ActionsBoard({ panelId, name, note, action, colors, updatePanelState, onRename }) {
  // console.log(panelId);
  const [actions, setActions] = useState([0, 1, 2]);
  const nextId = useRef(3);
  const [nameDraft, setNameDraft] = useState(name);

  useEffect(() => {
    setNameDraft(name);
  }, [name]);

  const commitName = () => {
    const trimmed = nameDraft.trim();
    if (trimmed) {
      onRename?.(trimmed);
    } else {
      setNameDraft(name);
    }
  }

  const testHandler = (e) => {
    console.log('getPanelData', e.target);
  }

  const addAction = () => {
    setActions([...actions, nextId.current++]);
  }

  const deleteAction = (id) => {
    setActions(actions.filter((a) => a !== id));
  }

  return (
    <>
      <div className="btn-panel-container">
        <div className='panelHeader'>
          <input
            className='panelHeaderInput'
            value={nameDraft}
            onChange={(e) => setNameDraft(e.target.value)}
            onBlur={commitName}
            onKeyDown={(e) => {
              if (e.key === 'Enter') e.target.blur();
              if (e.key === 'Escape') { setNameDraft(name); e.target.blur(); }
            }}
          />
        </div>
        <div className='flexRow'>
          {actions.map((id) => (
            <Action
              key={id}
              action={action}
              updatePanelState={updatePanelState}
              onDelete={() => deleteAction(id)}
            ></Action>
          ))}
          <div className='btnContainer'>
            <button onClick={addAction}>Add action</button>
            <button onClick={testHandler}>Test Fire </button>
          </div>
        </div>
      </div>
    </>
  )
}


