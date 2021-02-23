export const actions = {
  setEditingPage ({ commit }, pageIndex = 0) {
    commit('setEditingPage', pageIndex)
  },
  updateEditingPage ({ commit, state }, payload = {}) {
    commit('updateEditingPageHeight', payload.height)
  }
}
export const mutations = {
  setEditingPage (state, pageIndex = 0) {
    state.editingPage = state.work.pages[pageIndex]
  },
  updateEditingPageHeight(state, height){
    state.editingPage.height = height
  }
}
