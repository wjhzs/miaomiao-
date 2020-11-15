const state = {
    name: localStorage.getItem('name')||'北京',
    cityId : localStorage.getItem('cityId')||110100
}
const mutations = {
  CITY_INFO(state,payload){
    state.name = payload.name;
    state.cityId = payload.cityId;
  }
}
const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

