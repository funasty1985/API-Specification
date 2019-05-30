<template>
    <b-container class="bv-example-row">
        <b-row>
            <b-col >
                <div>
                <b-card-group deck>
                <b-card 
                border-variant="secondary"
                header-border-variant="secondary"
                >
                    <h2>{{friend.name.first}} {{friend.name.last}}</h2>   
                    <Map :location="friendLocation"/>
                </b-card>
                </b-card-group>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Map from '@/components/Map.vue'
import {mapState, mapActions} from 'vuex'
export default {
    components : {Map},
    data() {
        return {}
    },
    computed:{
        ...mapState([
            'friendList'
        ]),
        friend(){
            return this.friendList[this.$route.params.id]
        },
        friendLocation(){
            return [this.friendList[this.$route.params.id].location.latitude,this.friendList[this.$route.params.id].location.longitude]
        }
    },methods:{
    ...mapActions([
      'fetchFriends'
    ])},
    mounted(){
        this.fetchFriends()
        .then(any=>console.log('friendList is :', this.friendList))
}
}
</script>