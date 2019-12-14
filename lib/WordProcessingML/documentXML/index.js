const pPr = require('./pPr')
const { getListNameSpaceURI } = require('../utils')

const getDocument = function (doc) {
  let result = ''
  if (doc) {
    // Get all xml namespaces
    const namespaces = getListNameSpaceURI(doc)
    let body = null
    let activeNamespaceURI = null
    // Get document body
    if (namespaces.length > 0) {
      for (let index = 0; index < namespaces.length; index++) {
        let temp = doc.documentElement.getElementsByTagNameNS(
          namespaces[index],
          'body'
        )

        if (temp && temp.length > 0) {
          activeNamespaceURI = namespaces[index]
          body = temp
          break
        }
      }
    } else {
      body = doc.documentElement.getElementsByTagName('body')
    }
    
    if (body && body.length > 0) {
      // Get all child nodes inside body
      const childNodes = body[0].childNodes
      console.log(pPr(childNodes['0'], activeNamespaceURI))
    }
  }

  return result
}

module.exports = {
  getDocument
}
