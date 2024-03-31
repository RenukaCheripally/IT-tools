function capitalize(value) {
  if (!value) return '';
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
}

function reverse(value) {
  if (!value) return '';
  value = value.toString()
  return value.split('').reverse().join('');
}

function trim(value) {
  if (!value) return '';
  value = value.toString()
  return value.slice(0, 40) + '...';
}

export default {
  capitalize,
  reverse,
  trim
}