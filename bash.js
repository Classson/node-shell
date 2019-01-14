const pwd = require('./pwd')
console.log(pwd)

process.stdout.write('promt > ')

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd"){
    pwd[pwdCall]();
  }

  // alternative we found:
  //if (cmd === 'pwd) {
  //   process.stdout.write(__dirname);
  //}
  // process.stdout.write('You typed: ' + cmd);
  // process.stdout.write('\nprompt > ');
});

