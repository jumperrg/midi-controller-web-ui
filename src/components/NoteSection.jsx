import { useEffect, useRef } from 'react'
import './NoteSection.css';

export default function NoteSection({ panelId, note }) {
  return (
    <>
      <div className="note-container">
        <div>{panelId}</div>
        <div className='horisontal-line'></div>
        <div>{note}</div>
      </div>
    </>
  )
}
