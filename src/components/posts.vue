<template>
  <div  class="posts col-11 rounded text-white bg-dark m-2 border border-warning">
  <h2 class="mt-3">{{postData.title}}</h2>
  <h5>Author- {{postData.creatorEmail}}</h5>
  <p>{{postData.body}}</p>
  <button class="btn btn-block btn-warning mb-3" @click="viewComments(postData)">View Comments</button>
  </div>
</template>


<script>
export default {
  name: 'posts',
  props: [
    "postData",
  ],
  data(){
    return {}
  },
  computed:{},
  methods: {
    viewComments(postData) {
      this.$router.push({name: 'Post', params: { postId: postData._id } })
      this.$store.dispatch("setCurrentComments", postData._id)
      // let currentPost = this.$store.state.posts.filter(post => postData._id == post._id)
      
    },

  },
  components:{}
}
</script>


<style scoped>

</style>