import { getVM } from '@/utils'
import Element from 'core/models/element.js'

export const actions = {
  addElement({ commit }, payload) {
    commit('addElement', payload)
  },
  copyElement({ commit }, payload) {
    commit('copyElement', payload)
  },
  deleteElement({ commit }, payload) {
    commit('deleteElement', payload)
  },
}

export const mutations = {
  addElement(state, payload){
    const vm = getVM(payload.name)
    vm.$options.dragStyle = payload.dragStyle
    console.log(vm.$options);
    const element = new Element(vm.$options)
    state.editingPage.elements.push(element)
  },
  copyElement(state){
    const len = state.editingPage.elements.length
    const element = state.editingElement.clone({ zindex: len + 1 })
    state.editingPage.elements.push(element)
  },
  deleteElement(state){
    const index = state.editingPage.elements.findIndex(e => e.uuid === state.editingElement.uuid)
    if (index !== -1) {
      state.editingPage.elements.splice(index, 1)
    }
    state.editingElement = null
  }
}
