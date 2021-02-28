import Page from 'core/models/page'
import Dialog from 'core/models/dialog'

export const actions = {
  setEditingPage ({ commit }, pageIndex = 0) {
    commit('setEditingPage', pageIndex)
  },
  setEditingDialog ({ commit }, pageIndex = 0) {
    commit('setEditingDialog', pageIndex)
  },
  updateEditingPageHeight ({ commit }, payload = {}) {
    commit('updateEditingPageHeight', payload.height)
  },
  addPage({ commit }, payload = {}){
    commit('addPage', payload)
  },
  addDialog({ commit }, payload = {}){
    commit('addDialog', payload)
  }
}
export const mutations = {
  setEditingPage (state, pageIndex = 0) {
    state.editingPage = state.work.pages[pageIndex]
  },
  setEditingDialog (state, pageIndex = 0) {
    state.editingPage = state.work.dialog[pageIndex]
  },
  updateEditingPageHeight(state, height){
    state.editingPage.height = height
  },
  addPage(state){
    const page = new Page()
    state.work.pages.push(page)
  },
  addDialog(state){
    const dialog = new Dialog()
    state.work.dialog.push(dialog)
  },
}
