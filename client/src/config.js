const dev = {
  apiUrl: 'http://127.0.0.0'
}
const prod = {
  apiUrl: 'test'
}

export default process.env.NODE_ENV === 'production' ? prod : dev;
