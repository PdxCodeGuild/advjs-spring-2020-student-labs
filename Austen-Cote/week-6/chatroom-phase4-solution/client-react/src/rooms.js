import React from 'react'
import {
  useHistory
} from 'react-router-dom'

export default function Rooms (props) {
  const history = useHistory()
  function handleChangeRoom (evt) {
    const room = evt.target.value
    history.push(`/rooms/${room}`)
    console.log(history, 'this is history')
  }
  return <div id='rooms'>
    <h1>Hi {props.nick}</h1>
    <button onClick={props.handleAddRoom}>Add Room</button>
    <label htmlFor='room-select'>Change Room:</label>
    <select onChange={handleChangeRoom} name='room' id='room-select' value={props.room}>
      <option value=''>--Select a Room--</option>
      {props.rooms.map(room => <option key={room} value={room}>{room}</option>)}
    </select>
  </div>
}
