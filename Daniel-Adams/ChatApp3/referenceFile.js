
THE GAME PLAN

-Convert to express
  -Routing
  -Event handling
-Add SocketIO
  -Add event handling functionality




// in HTML

<!doctype html>
<html>
  <head>
    <title>Socket.IO chat</title>
    <style>
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body { font: 13px Helvetica, Arial; }
      form { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; }
      form input { border: 0; padding: 10px; width: 90%; margin-right: 0.5%; }
      form button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
      #messages { list-style-type: none; margin: 0; padding: 0; }
      #messages li { padding: 5px 10px; }
      #messages li:nth-child(odd) { background: #eee; }
    </style>
  </head>
  <body>
    <ul id="messages"></ul>
    <form action="">
      <input id="m" autocomplete="off" /><button>Send</button>
    </form>
    <script src="/socket.io/socket.io.js"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script>
      $(function () {
        var socket = io();
        $('form').submit(function(e){
          e.preventDefault(); // prevents page reloading
          socket.emit('chat message', $('#m').val());
          $('#m').val('');
          return false;
        });
        socket.on('chat message', function(msg){
          $('#messages').append($('<li>').text(msg));
        });
      });
    </script>
  </body>
</html>

// in index.js
const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
  console.log('a user connected')
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
  socket.on('chat message', (msg) => {
    // fs.appendFile(deps.messagesPath, function() )
    io.emit('chat message', msg)
  })
})

http.listen(3000, () => {
  console.log('listening on *:3000')
})



// example Express post
app.post('/form', function (req, res) {
  let newBody = req.body.str.split('').reverse().join('')
  res.end(newBody)
})
app.listen(process.argv[2])

// example Express routing

app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book')
  })
  .post(function (req, res) {
    res.send('Add a book')
  })
  .put(function (req, res) {
    res.send('Update the book')
  })




  io.on('connection', (socket) => {
    console.log('a user connected')
    socket.on('disconnect', () => {
      console.log('user disconnected')
    })
    socket.on('chat message', (msg) => {
      app.post('/messages', function (req, res, next) {
        fs.appendFile(deps.messagesPath, '\n' + msg, err => {
          if (err) {
            res.statusCode = 500
            return res.end(err)
          }
          res.statusCode = 200
          res.end('Error failed successfully')
        })
      io.emit('chat message', msg)
    })
  })