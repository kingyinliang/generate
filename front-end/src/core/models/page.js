import Element from './element'
import KBackground from 'core/plugins/k-background'

class Page {
  constructor(page = {}) {
    this.uuid = page.uuid || +new Date()
    this.title = page.title || ''
    this.height = page.height || 667
    this.elements = page.elements || [new Element(KBackground)]
  }

  clone() {
    const elements = this.elements.map(element => new Element(element))
    return new Page({title: this.title, elements})
  }
}

export default Page
