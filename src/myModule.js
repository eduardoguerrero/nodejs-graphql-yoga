

const message = 'Some message from myModule.js';

const name = 'Rene';

const location = 'San Salvador';

const getGreeting = (name) => {
  return `Welcome to the course ${name}!`
}

export { message, name, getGreeting, location as default }
