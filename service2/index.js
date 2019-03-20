const http = require("http");


const server = http.createServer((req, res)=> {
  res.end('<Service 2>')
})

server.listen(3002, '0.0.0.0', ()=>{
  console.info('Service 2 running...')
})
