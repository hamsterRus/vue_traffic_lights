import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
state: {
  color:['red', 'yellow', 'green'],
  currentColor: localStorage.getItem('currentColor'),
  step: 1,
  nextLigth:null
  }
,
mutations: {
  updateCurrentColor(state, currentColor){
    state.currentColor = currentColor;
    localStorage.setItem('currentColor', state.currentColor);
  },
  setNextLigth(state,currentColor){
    const index = state.color.findIndex(color =>{ 
     return color === currentColor
    })
    const length = index + state.step;
    if(length === state.color.length || length < 0){
      state.step *= -1;
    }
    state.nextLigth = state.color[index + state.step];
  }
},
actions: {
  changeCurrentColor({commit}, currentColor){
    commit('updateCurrentColor',currentColor)
  },
  changeLight({commit}, currentColor){
    commit('setNextLigth',currentColor)
  }
}
})
