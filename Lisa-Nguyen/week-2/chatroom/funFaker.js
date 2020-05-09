const characters = ['Harry', 'Ron', 'Hermione', 'Draco', 'Ginny', 'Neville', 'Luna']
const sender = characters[Math.floor(Math.random() * characters.length)];
let receiver = characters[Math.floor(Math.random() * characters.length)];

while (sender === receiver) {
  receiver = characters[Math.floor(Math.random() * characters.length)];
}

formatData(sender, receiver, "This is a test.")