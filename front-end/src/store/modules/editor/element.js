import { getVM, elementClone } from '@/utils'
import Element from 'core/models/element.js'

export const actions = {
  setEditingElement({ commit }, payload) {
    commit('setEditingElement', payload)
  },
  setElementCommonStyle ({ commit }, payload) {
    commit('setElementCommonStyle', payload)
  },
  addElement({ commit }, payload) {
    commit('addElement', payload)
  },
  copyElement({ commit }) {
    commit('copyElement')
  },
  deleteElement({ commit }) {
    commit('deleteElement')
  },
  recordRect ({ commit }, payload = {}) {
    commit('recordRect', payload)
  },
}

export const mutations = {
  setEditingElement (state, payload) {
    state.editingElement = payload
  },
  setElementCommonStyle (state, payload) {
    state.editingElement.commonStyle = {
      ...state.editingElement.commonStyle,
      ...payload
    }
  },
  addElement(state, payload){
    const vm = getVM(payload.name)
    vm.$options.dragStyle = payload.dragStyle
    vm.$options.zindex = state.editingPage.elements.length
    const element = new Element(vm.$options)
    state.editingPage.elements.push(element)
  },
  copyElement(state){
    const element = elementClone(state.editingElement, state.editingPage.elements.length)
    state.editingPage.elements.push(element)
  },
  deleteElement(state){
    const index = state.editingPage.elements.findIndex(e => e.uuid === state.editingElement.uuid)
    if (index !== -1) {
      state.editingPage.elements.splice(index, 1)
    }
    state.editingElement = null
  },
  recordRect (state, { type, value }) {
  }
}
