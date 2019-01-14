process.stdout.write('promt > ')

const pwdCall = () => process.stdout.write(process.cwd());
const variable = "hello"

// const pwdCall = process.stdin.on('data', (data) => {
//   const cmd = data.toString().trim();
//   if (cmd === "pwd"){
//     process.stdout.write(process.cwd());
//   }

//   // alternative we found:
//   //if (cmd === 'pwd) {
//   //   process.stdout.write(__dirname);
//   //}
//   // process.stdout.write('You typed: ' + cmd);
//   process.stdout.write('\nprompt > ');
// });

module.export = {
  pwdCall: pwdCall,
  variable: variable
}
