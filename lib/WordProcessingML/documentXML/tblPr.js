const main = function (element, namespace) {
  let result =  {}
  if (element) {
    const tblPr = element.getElementsByTagNameNS(namespace, 'tblPr')
    if (tblPr && tblPr.length > 0) {
      Object.keys(tblPr[0].childNodes).forEach(key => {
        const temp = tblPr[0].childNodes[key]
        switch (temp.nodeName) {
          case 'w:jc':
            result['justifyContent'] = temp.attributes.length > 0 && temp.attributes[0].value
              ? temp.attributes[0].value
              : null
            break
          case 'w:shd':
            if (temp.attributes.length > 0) {
              result['shading'] = {}
              Object.keys(temp.attributes).forEach(shadingAttrKey => {
                switch (temp.attributes[shadingAttrKey].nodeName) {
                  case 'w:val':
                    Object.assign(
                      result['shading'],
                      {
                        patternType: temp.attributes[shadingAttrKey].value || null
                      }
                    )
                    break
                  case 'w:color':
                    Object.assign(
                      result['shading'],
                      {
                        color: temp.attributes[shadingAttrKey].value || null
                      }
                    )
                    break
                  case 'w:fill':
                    Object.assign(
                      result['shading'],
                      {
                        fill: temp.attributes[shadingAttrKey].value || null
                      }
                    )
                    break
                  default: break
                }
              })
            }
            break
          case 'w:tblBorders':
            break
          case 'w:tblCaption':
            break
          case 'w:tblCellMar':
            break
          case 'w:tblCellSpacing':
            break
          case 'w:tblInd':
            break
          case 'w:tblLayout':
            break
          case 'w:tblLook':
            break
          case 'w:tblOverlap':
            break
          case 'w:tblpPr':
            break
          case 'w:tblStyle':
            break
          case 'w:tblStyleColBandSize':
            break
          case 'w:tblStyleRowBandSize':
            break
          case 'w:tblW':
            if (temp.attributes.length > 0) {
              result['tableWidth'] = {}
              Object.keys(temp.attributes).forEach(tableWidthAttrKey => {
                switch (temp.attributes[tableWidthAttrKey].nodeName) {
                  case 'w:w':
                    Object.assign(
                      result['tableWidth'],
                      {
                        w: temp.attributes[tableWidthAttrKey].value || null
                      }
                    )
                    break
                  case 'w:type':
                    Object.assign(
                      result['tableWidth'],
                      {
                        type: temp.attributes[tableWidthAttrKey].value || null
                      }
                    )
                    break
                  default: break
                }
              })
            }
            break
          default: break
        }
      })
    }
  }

  console.log('=>', result)
  return result
}

module.exports = main
