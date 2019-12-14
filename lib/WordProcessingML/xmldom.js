var DOMParserXML = require('xmldom').DOMParser;

const main = function (xml) {
  return new DOMParserXML().parseFromString(xml.toString(), 'text/xml')
}

module.exports = main
