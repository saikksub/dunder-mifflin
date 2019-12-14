const main = function (element, namespace) {
  const result = {}
  if (element) {
    const pPr = element.getElementsByTagNameNS(namespace, 'pPr')
    if (pPr && pPr.length > 0) {
      Object.keys(pPr[0].childNodes).forEach(key => {
        console.log(Object.keys(pPr[0].childNodes[key]))
      })
    }
  }

  return result
}

module.exports = main