const main = function (element, namespace) {
    const result = {}
    if (element) {
      const pPr = element.getElementsByTagNameNS(namespace, 'rPr')
      if (pPr && pPr.length > 0) {
        Object.keys(pPr[0].childNodes).forEach(key => {
          const temp = pPr[0].childNodes[key]
          switch (temp.nodeName) {
            case 'w:b':
              result['bold'] = true
              break
            case 'w:i':
              result['italic'] = true
              break
            case 'w:caps':
              result['uppercase'] = temp.attributes.length > 0 && temp.attributes[0].value
              ? temp.attributes[0].value
              : false
              break
            case 'w:color':
              result['color'] =  temp.attributes.length > 0 && temp.attributes[0].value
              ? `#${temp.attributes[0].value}`
              : null
              break
            case 'w:dstrike':
              result['dstrike'] = temp.attributes.length > 0 && temp.attributes[0].value
                ? temp.attributes[0].value
                : false
              break
            case 'w:emboss':
              result['emboss'] = temp.attributes.length > 0 && temp.attributes[0].value
                ? temp.attributes[0].value
                : false
              break
            case 'w:imprint':
              result['imprint'] = temp.attributes.length > 0 && temp.attributes[0].value
                ? temp.attributes[0].value
                : false
              break
            case 'w:outline':
              result['outline'] = temp.attributes.length > 0 && temp.attributes[0].value
                ? temp.attributes[0].value
                : false
              break
            case 'w:shadow':
              result['shadow'] = temp.attributes.length > 0 && temp.attributes[0].value
                ? temp.attributes[0].value
                : false
              break
            case 'w:smallCaps':
              result['smallCaps'] = temp.attributes.length > 0 && temp.attributes[0].value
                ? temp.attributes[0].value
                : false
              break
            case 'w:strike':
              result['strike'] = temp.attributes.length > 0 && temp.attributes[0].value
                ? temp.attributes[0].value
                : false
              break
            case 'w:sz':
              result['sz'] = temp.attributes.length > 0 && temp.attributes[0].value
                ? temp.attributes[0].value
                : null
              break
            case 'w:u':
              result['underline'] = temp.attributes.length > 0 && temp.attributes[0].value
                ? temp.attributes[0].value
                : null
              break
            default: break
          }
        })
      }
    }
  
    return result
  }
  
  module.exports = main
  