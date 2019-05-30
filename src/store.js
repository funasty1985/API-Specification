import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      friendList : []
  },
  mutations: {
    setFriendsList:(state, payload)=>{
        state.friendList = payload
        console.log('friendList is set', state.friendList )
    }
  },
  actions: {
     fetchFriends:(context)=>{
        fetch('https://next.json-generator.com/api/json/get/41P1_UhSI',{
          method:"get"
        })
          .then(response=>response.json())
          .then(jsonData=>
              {context.commit('setFriendsList',jsonData)}
          )
      }
     }
  
})
