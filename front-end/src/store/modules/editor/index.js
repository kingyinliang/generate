import Work from 'core/models/work'
import { actions as workActions, mutations as workMutations } from './work'
import { actions as pageActions, mutations as pageMutations } from './page'
import { actions as elementActions, mutations as elementMutations } from './element'

const state = {
  work: new Work(),
  editingPage: { elements: [] },
  editingElement: null,
}
const getters = {}
const actions = {
  ...workActions,
  ...pageActions,
  ...elementActions,
}
const mutations = {
  ...workMutations,
  ...pageMutations,
  ...elementMutations,
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
