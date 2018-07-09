import {SOME_MUTATION} from '../mutation-type'
import axios from 'axios'
const state = {
  count: 20,
  todos: [
    { id: 1, text: '...', done: true },
    { id: 1, text: '...', done: true },
    { id: 2, text: '...', done: false },
    { id: 2, text: '...', done: false }
  ]
}
const mutations = {
  [SOME_MUTATION] (state, payload) {
    state.count += payload.amount
  }
}
const getters = {
  doneTodos: state => {
    return state.todos.filter(todo => todo.done)
  },
  doneTodosCount: (state, getters) => {
    return getters.doneTodos.length
  }
}
const actions = {
  incrementAsync ({commit}, amount) {
    setTimeout(() => {
      commit('SOME_MUTATION', amount)
    }, 1000)
  },
  test () {
    axios({
      method: 'post',
      url: '/api/test',
      data: ''
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions
}
