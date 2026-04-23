module.exports = [
  {
    testName: 'login exitoso',
    username: 'standard_user',
    password: 'secret_sauce',
    expected: 'success'
  },
  {
    testName: 'password incorrecto',
    username: 'standard_user',
    password: 'wrong_password',
    expected: 'error'
  },
  {
    testName: 'usuario incorrecto',
    username: 'wrong_user',
    password: 'secret_sauce',
    expected: 'error'
  }
];