function getRooms (messages) {
  const rooms = messages.map(msg => msg.room)
  // rooms.push(currentRoom) // we have to add the currentRoom to the list, otherwise it won't be an option if there isn't already a message with that room
  const filtered = rooms.filter(room => room) // filter out undefined or empty string
  return Array.from(new Set(filtered)) // filters out the duplicates
}

export default getRooms
