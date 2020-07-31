<template>
  <div  class="profile col-11 rounded text-white bg-dark m-3 border border-warning">
  <h2>{{profileData.title}}</h2>
  <h5>Author- {{profileData.creatorEmail}}</h5>
  <p>{{profileData.body}}</p>
  <button class="btn btn-block btn-warning" @click="viewComments(profileData)"> </button>
  </div>
</template>


<script>
export default {
  name: 'profile',
  props: [
    "profileData",
  ],
  data(){
    return {}
  },
  computed:{},
  methods: {
    viewComments(profileData) {
      debugger
      this.$router.push({name: 'Post', params: { postId: profileData._id } })
      this.$store.dispatch("setCurrentPost", profileData._id)
      let currentPost = this.$store.state.posts.filter(post => profileData._id == post._id)
      
    },

  },
  components:{}
}
</script>


<style scoped>

</style>