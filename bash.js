const pwd = require('./pwd')
const ls = require('./ls')
const curl = require('./curl')

process.stdin.on('data', (command) => {
  const cmd = command.toString().trim();
  if (cmd === "pwd"){
    pwd()
  }
});

process.stdin.on('data', (command) => {
  const cmd = command.toString().trim();
  if(cmd === 'ls'){
    ls.lsFunc()
  }
})

process.stdin.on('data', (command) => {
  const cmd = command.toString().trim();
  let args = cmd.split(" ");
  let firstArg = args[0]
  let secondArg = args[1]
  if(firstArg === 'cat'){
    ls.fileInfo(secondArg)
  }
})

process.stdin.on('data', (command) => {
  const cmd = command.toString().trim();
  let args = cmd.split(" ");
  let firstArg = args[0]
  let secondArg = args[1]
  if(firstArg === 'curl'){
    curl.curlFunc(secondArg);
  }
})

