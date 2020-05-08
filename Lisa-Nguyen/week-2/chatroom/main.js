
/* URLs
POST to /newMessage
GET to /messages */

/* Metadata
- timestamp
- message
- sender
- receiver */

// Modules
const fs = require('fs');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Variables
const file = 'messages.csv'

const csvWriter = createCsvWriter({
  path: file,
  header: [
    { id: 'timestamp', title: 'Timestamp' },
    { id: 'sender', title: 'Sender' },
    { id: 'receiver', title: 'Receiver' },
    { id: 'message', title: 'Message' }
  ]
});

let data = {};

// functions
function formatData (sender, receiver, message) {
  data = [
    {
      timestamp: Date.now(),
      sender: sender,
      receiver: receiver,
      message: message
    }
  ]

  return data
}

function messageHistory(file){
  fs.createReadStream(file)
  .pipe(csv())
  .on('data', function (row) {
    console.log(row);
    return row
  })
  .on('end', function(){
    console.log('Message history complete.')
  })
}

function sendMessage(data){
  csvWriter
    .writeRecords(data)
    .then(function () {
      console.log('Message saved.')
    })
}

//// fake data
const characters = ['Harry', 'Ron', 'Hermione', 'Draco', 'Ginny', 'Neville', 'Luna']
const sender = characters[Math.floor(Math.random() * characters.length)];
let receiver = characters[Math.floor(Math.random() * characters.length)];

while (sender === receiver) {
  receiver = characters[Math.floor(Math.random() * characters.length)];
}
////

console.log('Format data...')
formatData(sender, receiver, "This is a test.")

console.log('Sending message...')
sendMessage(data)

console.log('Message history...')
messageHistory(file)