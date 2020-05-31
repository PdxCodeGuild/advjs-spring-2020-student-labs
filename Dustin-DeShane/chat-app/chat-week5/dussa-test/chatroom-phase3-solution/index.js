const port = 8000
const MESSAGES_PATH = './dussa-test-chat/src/test-messages-file.json'

const app = require('./app')({ messagesPath: MESSAGES_PATH })

app.listen(port)

console.log('server listening on port:', port)
