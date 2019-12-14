const main = function (element, namespace) {
  let result =  ''
  if (element) {
    const t = element.getElementsByTagNameNS(namespace, 't')
    if (t && t.length > 0) {
      result = t[0].childNodes[0].nodeValue
    }
  }

  return result
}

module.exports = main
