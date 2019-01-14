process.stdout.write('promt > ')

process.stdin.on('data', (data) => {
  // const cmd = data.toString().trim();
  if(data === "pwd"){
    process.stdout.write("r");
  }


  // process.stdout.write('You typed: ' + cmd);
  // process.stdout.write('\nprompt > ');
});
