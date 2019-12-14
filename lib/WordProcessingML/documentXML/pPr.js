const rPr = require('./rPr')

const main = function (element, namespace) {
  const result = {}
  if (element) {
    const pPr = element.getElementsByTagNameNS(namespace, 'pPr')
    if (pPr && pPr.length > 0) {
      Object.keys(pPr[0].childNodes).forEach(key => {
        const temp = pPr[0].childNodes[key]
        switch (temp.nodeName) {
          case 'w:jc':
            result['justifyContent'] = temp.attributes.length > 0 && temp.attributes[0].value
              ? temp.attributes[0].value
              : null
            break
          case 'w:rPr':
            Object.assign(result, { ...rPr(element, namespace) })
            break
          default: break
        }
      })
    }
  }

  return result
}

module.exports = main
