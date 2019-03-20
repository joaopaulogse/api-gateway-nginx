const http = require("http");


const server = http.createServer((req, res)=> {
  res.end('<Service 1>')
})

server.listen(3001, '0.0.0.0', ()=>{
  console.info('Service 1 running...')
})
