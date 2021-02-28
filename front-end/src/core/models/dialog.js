import Element from './element'

class Dialog {
  constructor(dialog = {}) {
    this.uuid = dialog.uuid || + new Date()
    this.title = dialog.title || ''
    this.height = dialog.height || 667
    this.elements = dialog.elements || []
  }

  clone() {
    const elements = this.elements.map(element => new Element(element))
    return new Dialog({title: this.title, elements})
  }
}

export default Dialog
