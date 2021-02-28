import { undoRedoHistory } from '@/utils'
import { cloneDeep } from 'lodash'

const recordHistoryMutationTypes = [
  'editor/recordRect',
  'editor/addElement',
  'editor/setEditingPage'
]

const vuexHistory = (store) => {
  undoRedoHistory.init(store)

  store.subscribe((mutation, state) => {
    const { type } = mutation
    if (!recordHistoryMutationTypes.includes(type)) return
    undoRedoHistory.addState(cloneDeep(state))
  })
}

export default vuexHistory;
