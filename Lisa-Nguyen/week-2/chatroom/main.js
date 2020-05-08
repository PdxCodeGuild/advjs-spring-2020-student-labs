
/* URLs
POST to /newMessage
GET to /messages */

/* Metadata
- timestamp
- message
- sender
- receiver */

// Modules
const csv = require('csv-parser');
const fs = require('fs');

// Variables
const file = 'messages.csv'

fs.createReadStream(file)
  .pipe(csv())
  .on('data', function (row) {
    console.log(row);
  })
  .on('end', function(){
    console.log('Message history complete.')
  })