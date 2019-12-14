const pPr = require('./pPr')
const r = require('./r')
const tblPr = require('./tblPr')
const { getListNameSpaceURI } = require('../utils')

const getDocument = function (doc) {
  let result = []
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
      Object.keys(childNodes).forEach(key => {
        const temp = childNodes[key]
        let entryItem = {
          type: '',
          style: {},
          content: {}
        }
        switch (temp.nodeName) {
          case 'w:p':
            entryItem.type = 'paragraph'
            Object.assign(entryItem.style, { ...pPr(temp, activeNamespaceURI) })
            Object.assign(entryItem.content, { ...r(temp, activeNamespaceURI) })
            result.push(entryItem)
            break
          case 'w:tbl':
            entryItem.type = 'table'
            Object.assign(entryItem.style, { ...tblPr(temp, activeNamespaceURI) })
            break
          default: break;
        }
      })
    }
  }

  return result
}

module.exports = {
  getDocument
}
