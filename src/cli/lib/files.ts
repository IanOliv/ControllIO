import fs from 'fs'

class TemplateFiles {
  getEventFile (name) {
    return `
    {
    "${name}":{
        "settings":"${name}:settings"
         }
    }`
  }

  getJsFile (name, hasEventFile) {
    const capitalize = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    const loadEventFile = ` const {${name}:${name}Events}= require('./events.json')`
    return `
        const log = require('debug')("controller:mod:${name}")
       ${hasEventFile ? loadEventFile : ''}

        class ${capitalize}{

            constructor(){

            }

        }

        module.exports = new ${capitalize.trim()}()

        `
  }
}

class Files {
  constructor ({ name, hasItsOwnEvents, hasItsOwnJsFile }) {
    this.name = name
    this.path = `${__dirname}/../../modules/${this.name}`
    this.templateFiles = new TemplateFiles()
    console.log(name)

    const existsDir = this.dirAlreadyExists()
    !existsDir && this.createDir()
    hasItsOwnJsFile.toUpperCase() === 'Y' && this.createJsFile(hasItsOwnEvents.toUpperCase() === 'Y')
    hasItsOwnEvents.toUpperCase() === 'Y' && this.createEvents()
  }

  dirAlreadyExists () {
    try {
      const response = fs.accessSync(this.path, fs.constants.F_OK)
      return true
    } catch (error) {
      return false
    }
  }

  createDir () {
    try {
      fs.mkdirSync(this.path)
      return true
    } catch (error) {
      return false
    }
  }

  createJsFile (hasEventFile) {
    try {
      const contentFile = this.templateFiles.getJsFile(this.name, hasEventFile)
      fs.appendFileSync(`${this.path}/index.js`, contentFile)
      console.log('Foi')
    } catch (error) {
      console.log('N Foi')
    }
  }

  createEvents () {
    try {
      const contentFile = this.templateFiles.getEventFile(this.name)
      fs.appendFileSync(`${this.path}/events.json`, contentFile)
    } catch (error) {

    }
  }
}

export default Files
