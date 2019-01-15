process.stdout.write('promt > ')

// const pwdCall = () => process.stdout.write(process.cwd());

module.exports = function (){
  process.stdout.write(process.cwd());
}
