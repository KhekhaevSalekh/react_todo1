import React, { useState, useEffect } from 'react'
import './App.css'
import { v4 } from 'uuid'
import { randomColor } from 'randomcolor'
import Dragable from 'react-draggable'

function App() {

  let [note, noteSet] = useState('')
  let [notes, notesSet] = useState(
    JSON.parse(localStorage.getItem('notes')) || []
  )
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])
  const enterButton = () => {
    console.log(note)
    console.log(notes)
    notesSet([...notes, note])
    noteSet('')
    console.log(note)
    console.log(notes)
  }

  return (
    <>
    <div className='wrapper'>
      <input
        placeholder='Enter something ...'
        value={note}
        onChange={(e) => noteSet(e.target.value)}
        type='text' />
      <button
        onClick={enterButton}
      >ENTER</button>

    </div>
    <div className='todo_item'>
    {notes.map((note, index) => {
        return ( 
          <Dragable><div>{note}</div></Dragable>
          
)
      })}
      </div>
    </>
  )
}

export default App;