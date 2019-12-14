const rPr = require('./rPr')
const t = require('./t')

const main = function (element, namespace) {
  const result =  {
    style: {},
    text: ''
  }
  if (element) {
    const r = element.getElementsByTagNameNS(namespace, 'r')
    if (r && r.length > 0) {
      Object.keys(r[0].childNodes).forEach(key => {
        const temp = r[0].childNodes[key]
        switch (temp.nodeName) {
          case 'w:rPr':
            Object.assign(result.style, { ...rPr(element, namespace) })
            break
          case 'w:t':
            result.text = t(element, namespace)
            break
          default: break
        }
      })
    }
  }

  // console.log(result)
  return result
}

module.exports = main
