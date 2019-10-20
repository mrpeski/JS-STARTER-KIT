export default function getBaseUrl () {
  const isDev = window.location.hostname === 'localhost';
  return isDev ? 'http://localhost:4001' : ''
}
