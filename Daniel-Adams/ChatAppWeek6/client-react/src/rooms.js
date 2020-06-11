import React from 'react'
import {
  useHistory
} from 'react-router-dom'

export default function Rooms (props) {
  const history = useHistory()
  return <div id='rooms'>
    <button onClick={props.handleAddRoom}>Add Room</button>
    <label htmlFor='room-select'>Change Room:</label>
    <select onChange={(evt) => { props.handleChangeRoom(evt); setRoomURL(history, evt) }} name='room' id='room-select' value={props.room}>
      <option value=''>--Select a Room--</option>
      {props.rooms.map(room => <option key={room} value={room}>{room}</option>)}
    </select>
  </div>
}

const setRoomURL = (history, evt) => {
  const currentRoom = '/rooms/' + evt.target.value
  return (
    history.push(currentRoom)
  )
}