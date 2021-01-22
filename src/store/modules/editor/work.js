import Work from 'core/models/work'
import Page from 'core/models/page'
import Element from 'core/models/element'


export const actions = {
  updateWork ({ commit, state }, payload = {}) {
    const work = {
      ...state.work,
      ...payload
    }
    commit('setWork', work)
  },
}

export const mutations = {
  setWork (state, work) {
    window.__work = work
    work.pages = work.pages.map(page => {
      page.elements = page.elements.map(element => new Element(element))
      return new Page(page)
    })
    state.work = new Work(work)
  },
}
