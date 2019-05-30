<template>
  <div class="home">
       <b-container class="bv-example-row">
              <b-col sm="6" offset='3'>
                  <b-list-group>
                        <b-list-group-item 
                        class="flex-column align-items-start"
                        variant="light"
                        v-for='(friend, index) in friendList'
                        :key='index'
                        :to="{name:'friend',params:{id:`${index}`}}"
                        >
                        <div class="d-flex w-100 flex-row align-items-center name-tag" >
                            <img :src="`${friend.picture}`">
                            <h3 align-v="center">{{friend.name.first}} {{friend.name.last}}</h3>
                        </div>
                        </b-list-group-item>
                    </b-list-group>
                </b-col>
       </b-container>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'home',
  components: {
   
  },
  data: function(){
      return {
        friends:[]
      }
  },
  computed:{
    ...mapState([
      'friendList'
    ])
  },
  methods:{
    ...mapActions([
      'fetchFriends'
    ])
  },
  mounted:function(){
    this.fetchFriends()
  }
}
</script>

<style scopped>
img {
  border-radius: 100%;
  width: 100px ;
  height: 100px ;
}
.name-tag h3{
  padding-left:20px;
}

</style>