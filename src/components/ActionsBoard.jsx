import './Action.css';
import "./ActionsBoard.css";
import { useState, useRef, useEffect } from 'react';
import Action from './Action';
import SeparatorV from './SeparatorV'
import NoteSection from './NoteSection';
import im from '../assets/recycleBin.svg';

export default function ActionsBoard({ panelId, buttonIndex, name, note, action, colors, updatePanelState, onRename, onRenumber, onDeletePanel, initialActionCount = 3 }) {
  // console.log(panelId);
  const [actions, setActions] = useState(() =>
    Array.from({ length: initialActionCount }, (_, i) => i)
  );
  const nextId = useRef(initialActionCount);
  const [nameDraft, setNameDraft] = useState(name);
  const [numberDraft, setNumberDraft] = useState(String(buttonIndex));
  const [isFiring, setIsFiring] = useState(false);
  const firingTimeout = useRef(null);

  useEffect(() => {
    setNameDraft(name);
  }, [name]);

  useEffect(() => {
    setNumberDraft(String(buttonIndex));
  }, [buttonIndex]);

  useEffect(() => {
    return () => clearTimeout(firingTimeout.current);
  }, []);

  const commitName = () => {
    const trimmed = nameDraft.trim();
    if (trimmed) {
      onRename?.(trimmed);
    } else {
      setNameDraft(name);
    }
  }

  const commitNumber = () => {
    const parsed = parseInt(numberDraft, 10);
    if (Number.isInteger(parsed) && parsed >= 0) {
      onRenumber?.(parsed);
    }
    setNumberDraft(String(buttonIndex));
  }

  const testHandler = (e) => {
    console.log('getPanelData', e.target);
    setIsFiring(true);
    clearTimeout(firingTimeout.current);
    firingTimeout.current = setTimeout(() => setIsFiring(false), 300);
  }

  const addAction = () => {
    setActions([...actions, nextId.current++]);
  }

  const deleteAction = (id) => {
    const remaining = actions.filter((a) => a !== id);
    if (remaining.length === 0) {
      onDeletePanel?.();
      return;
    }
    setActions(remaining);
  }

  return (
    <>
      <div className="btn-panel-container">
        <div className='panelHeader'>
          <span className='panelHeaderPrefix'>Button</span>
          <input
            className='panelHeaderNumberInput'
            type='number'
            min='0'
            value={numberDraft}
            onChange={(e) => setNumberDraft(e.target.value)}
            onBlur={commitNumber}
            onKeyDown={(e) => {
              if (e.key === 'Enter') e.target.blur();
              if (e.key === 'Escape') { setNumberDraft(String(buttonIndex)); e.target.blur(); }
            }}
          />
          <span className='panelHeaderPrefix'>:</span>
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
          <img
            src={im}
            width='20'
            className='panelHeaderDelete'
            title='Delete footswitch'
            onClick={() => onDeletePanel?.()}
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
            <button
              className={`btn-secondary${isFiring ? ' is-firing' : ''}`}
              onClick={testHandler}
            >
              Test Fire
            </button>
          </div>
        </div>
      </div>
    </>
  )
}


