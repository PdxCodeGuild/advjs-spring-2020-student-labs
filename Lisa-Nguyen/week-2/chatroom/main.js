
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

// Variables
const file = 'messages.csv'

let data = '';

// functions
function formatData (sender, receiver, message) {
  const timestamp = Date.now()

  data = ('\n' + timestamp) + ',' + sender + ',' + receiver + ',' + message

  return data
}

// message history
function messageHistory (file) {
  console.log("\nMessage history...\n")
  fs.readFile(file, 'utf8', function (err, data) {
    if (err) throw err
    console.log(data);
  })

  // fs.createReadStream(file)
  // .pipe(csv())
  // .on('data', function (row) {
  //   console.log(row);
  //   return row
  // })
  // .on('end', function(){
  //   console.log('Message history complete.')
  // })
}

function sendMessage(data){
  console.log("\nSending message...")
  fs.appendFile(file, data, 'utf8', function(err) {
    if (err) throw err;
    //console.log('Message saved.')
  })
}

// fake data //
const characters = ['Harry', 'Ron', 'Hermione', 'Draco', 'Ginny', 'Neville', 'Luna']
const sender = characters[Math.floor(Math.random() * characters.length)];
let receiver = characters[Math.floor(Math.random() * characters.length)];

while (sender === receiver) {
  receiver = characters[Math.floor(Math.random() * characters.length)];
}

formatData(sender, receiver, "This is a test.")

// end fake data //

sendMessage(data)
messageHistory(file)

