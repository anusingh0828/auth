import http from 'http'
import app from './app.js';
let PORT=process.env.PORT || 5000
let server=http.createServer(app)

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}...`);
})