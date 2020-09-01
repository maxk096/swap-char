function isValidIndex(index, strLength) {
  return index >= 0 && index < strLength && !isNaN(index) && isFinite(index)
}

function swapChar(str, from, to) {
  if (str === undefined || str === null) {
    return ''
  }

  str = String(str)
  from = Math.floor(from)
  to = Math.floor(to)
  const strLength = str.length
  if (from < 0) {
    from = strLength + from
  }
  if (to < 0) {
    to = strLength + to
  }

  if (!isValidIndex(from, strLength) || !isValidIndex(to, strLength)) {
    return str
  }

  if (from === to) {
    return str
  }
  const min = Math.min(from, to)
  const max = Math.max(from, to)
  // prettier-ignore
  const newStr =
      str.slice(0, min) +
      str[max] +
      str.slice(min + 1, max) +
      str[min] +
      str.slice(max + 1)
  return newStr
}

module.exports = swapChar
