//const fs=require('fs');

//fs.writeFile('home.txt',"welcome to the home",()=>{
//    console.log('written file')
//})
//fs.readFile('file.txt','utf8',(err,data)=>{
  //  console.log(err,data)
//})
//fs.open('file.js','a',function(err,file){
  //  console.log('saved')
//})
//fs.appendFile('file.js','hello ,this is node file',function(err){
    //if(err)throw err;
  //  console.log('updated')
//})
//fs.rename('file.txt','balbir.txt',function(err){
  //  console.log('renamed')
//})
//fs.unlink('balbir.txt',function(err){
  //  if(err)throw err;
 //   console.log('file  deleted')
//})

//dir module

//const path=require('path');
//const nituPath=path.join(__dirname,'crud')
//const filePath=`${nituPath}/excel.txt`;

//fs.writeFileSync(filePath,'this is data')
//fs.readFileSync(filePath,'utf8',function(err,data){
  //  console.log(err,data)
//})
//fs.open(filePath,'a',function(err){
  //  console.log('saved')
//})
//fs.appendFile(filePath,'hii this is data',function(err){
    //if(err)throw err;
  //  console.log('updated')
//})
//fs.rename(filePath,`${nituPath}/index.js`,(err)=>{
  //  console.log('renamed')
//})
//fs.unlinkSync(`${nituPath}/index.js`)
//    console.log('deleted')

//http module

//const http=require('http');

//http.createServer((req,res)=>{
  //res.write('hello world')
  //res.end();
//}).listen(4502);

//router http module
/*const http=require('http');

http.createServer((req,res)=>{
  if(req.url=="/")
{
  res.end('hello gud morning')
}
else if(req.url=="/about")
{
  res.end('gud afternoon')
}
else{
  res.writeHead(404)
  res.end('error 404 are not found')
}
}).listen(8082);*/

//http module and fs.module sa file ko read kaise kru

//const http=require('http');
//const fs=require('fs');
//const nitu=fs.readFileSync('hello.html','utf-8')

// http.createServer((req,res)=>{
 // console.log('server')
  //res.setHeader('Content-Type','text/html')
  //res.end(nitu);
//}).listen(8080);

/*const http=require('http');
const fs=require('fs');
const style=fs.readFileSync('api1.html','utf-8')

http.createServer((req,res)=>{
  console.log('STARTED SERVER');
  res.setHeader('Content-Type','text/json')
  res.end(style);
}).listen(9090);*/

/*const http=require('http');
const data=require('./data');


http.createServer((req,res)=>{
  console.log('STARTED SERVER');

  res.writeHead(200,{'Content-Type':'appication\json'});

  res.write(JSON.stringify(data))
  res.end();
}).listen(4505);*/

//express module
// const express=require('express');
// const app=express();

// app.get('/',(req,res)=>{
//      res.send(`<h1>welcome to home page</h1> `)
// })
// app.get('/about',(req,res)=>{
//   res.send(`<h1> welcome to about page</h1>`)
// })
// app.get('/login',(req,res)=>{
//   res.send(`<h1>welcome to login page</h1>`)
// })
// app.listen(6565);

//express module method 

// const express=require('express');
// const server=express();

// server.use((req,res,next)=>{
//   console.log(req.method,req.ip,req.hostname,new Date())
//   next();
// })

// server.get('/',(req,res)=>{
//   res.json({type:'GET'})
// })
// server.put('',(req,res)=>{
//   res.json({type:'PUT'})
// })
// server.patch('/',(req,res)=>{
//   res.json({type:'PATCH'})
// })
// server.delete('/',(req,res)=>{
//   res.json({type:'DELETE'})
// })
// server.post('/',(req,res)=>{
//   res.json({type:'POST'})
// })

// server.listen(5056,()=>{
//   console.log('STARTED')
// })

//statics method used
// const express=require('express');
// const server=express();
// const path=require('path');
// const publicpath=path.join(__dirname,'public');
// server.use(express.static(publicpath))//bulit in middleware

// server.get('',(req,res)=>{
//   res.sendFile(`${publicpath}/home.html`)
// })
// server.get('/about',(req,res)=>{
//   res.sendFile(`${publicpath}/about.html`)
// })
// server.get('/service',(req,res)=>{
//   res.sendFile(`${publicpath}/service.html`)
// })
// server.listen(8080,()=>{
//   console.log('STARTED')
// })

//router express
// const express=require('express');
// const server=express();

// server.get('',(req,res)=>{
//   res.send(`<h1>hello welcome to home page</h1><a href="/about">go to about page</a>`)
// })
// server.get('/about',(req,res)=>{
//   res.send(`<input type="text" placeholder="entr your name" value="${req.query.name}"/><br><br>
  
// <button>on click</button><br><br>
// <a href='/'> back to home page</a>`)
// });
// server.get('/login',(req,res)=>{
//   res.send([
//     {
//       name:'balbir',
//       email:'balbirt062@gmail.com',
//     },
//     {
//       name:'gourav',
//       email:'gourav1212@gmail.com',
//     },
//   ])
// });
// server.listen(7878,()=>{
//   console.log('SERVER')
// })

//middleware
// const express=require('express');
// const server=express();

// const filter=((req,res,next)=>{
//   if(!req.query.country){
//     res.send('provide country')
//   }
//   else if(req.query.country=="china"){
//     res.send('u not access yhis page')
//   }
//   else{
//     next();
//   }
// })
// server.use(filter)
// server.get('',(req,res)=>{
//   res.send('welcome to home page')
// })
// server.get('/user',(req,res)=>{
//   res.send('welcome to user page')
// })
// server.listen(9022,()=>{
//   console.log('SERVER START')
// })

//middleware route with password sa open hoga yeh
const express=require('express');
const server=express();

server.use((req,res,next)=>{
  console.log(req.method,req.ip,req.hostname,new Date())
  next();
})
//route middleware
const auth=(req,res,next)=>{
  console.log(req.query)
  if(req.query.password=='4545'){
    next()
  }
  else{
    res.sendStatus(401);
  }
  next();
}
server.use(auth)
//api router
server.get('/',auth,(req,res)=>{
  res.json({type:'GET'})
})
server.post('',(req,res)=>{
  res.json({type:'POST'})
})
server.patch('',(req,res)=>{
  res.json({type:'PATCH'})
})
server.delete('',(req,res)=>{
  res.json({type:'DELETE'})
})
server.put('',(req,res)=>{
  res.json({type:'PUT'})
})
server.listen(1230);

//os module the os module provides operating system-related utility methods and properties
//os    operating system module
// const os=require('os');

// console.log(os.homedir());
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.cpus());
// console.log(os.hostname());
// console.log(os.totalmem())
// console.log(os.networkInterfaces());


//view engine
// const express=require('express');
// const server=express();
// const path=require('path')

// server.set('view engine','ejs');

// server.get('',(req,res)=>{
//   const user={
//     name:'Balbir',
//     email:'thakur12@gmail.com',
//     state:'Himanchal Pradesh',
//     mobileno:'6230786248',
//     skills:['html','javascript','bootstrap','css','node.js','github']
//   }
//   res.render('profile',{user})
// })

// server.listen(6002);

//event emitter
// const express=require('express');
// const EventEmitter=require('events');
// const server=express();
// const event=new EventEmitter();

// let count=0

// event.on("countAPI",()=>{
//   count++;
//   console.log("api called",count)
// })

// server.get('/',(req,res)=>{
//   res.send("api called")

//   event.emit("countAPI")
// })

// server.get('/search',(req,res)=>{
//   res.send("api called")

//   event.emit("countAPI")
// })

// server.get('/update ',(req,res)=>{
//   res.send("api called")

//   event.emit("countAPI")
// })

// server.listen(9080);