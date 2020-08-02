<template>
  <div  class="profile col-11 rounded text-white bg-dark m-3 border border-warning">
  <h2>{{profileData.title}}</h2>
  <h5>Author- {{profileData.creatorEmail}}</h5>
  <p>{{profileData.body}}</p>
  <button class="btn btn-block btn-info" @click="viewComments(profileData)">View Comments</button>
   <button type="button" class="btn btn-warning btn-block text-white text-center mb-2" data-toggle="modal" data-target=".bd-example-modal-lg">Edit Post</button>
  <form @submit.prevent="editPost(profileData)">
<div id="editModal" class="modal fade bd-example-modal-lg p-5" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg p-5">
    <div class="modal-content p-5">
      Edit Post
      <div class="input-group input-group-lg m-3">
  <input type="text" class="form-control" placeholder="Enter Title Here..." v-model="editPost.title">
</div>
      <div class="input-group input-group-lg m-3">
  <input type="text" class="form-control" placeholder="enter edited post.." v-model="editPost.body">
</div>
<div class="modal-footer">
        <button type="submit" class="btn btn-success">Submit Edited Post</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
     
  </div>
 
</div>
</form>
  <button class="btn btn-block btn-danger mb-2" @click ="deletePost(profileData)">Delete Post</button>
  </div>
</template>


<script>
export default {
  name: 'profile',
  data(){
    return {
      editPost: {

      }
    }
  },
  props: [
    "profileData",
  ],
  data(){
    return {}
  },
  computed:{


  },
  methods: {
    viewComments(profileData){
    this.$router.push({name: 'Post', params: { postId: profileData._id } })
    this.$store.dispatch("setCurrentComments", profileData._id)
    },
    editPost(profileData){
      this.$store.dispatch("setCurrentComments", profileData._id)
      this.$store.dispatch('editPost', {
      body: this.editPost.body,
      title: this.editPost.title, 
       blogId: this.profileData.id,
      creatorEmail: this.profileData.creatorEmail,

      })
      $("#editModal").modal("hide");
    },
    deletePost(profileData){
      this.$store.dispatch('deletePost', profileData._id)
      console.log(profileData.id)
    }

    
    // viewComments(profileData) {
    //   debugger
    //   this.$router.push({name: 'Post', params: { postId: profileData._id } })
    //   this.$store.dispatch("setCurrentPost", profileData._id)
    //   let currentPost = this.$store.state.posts.filter(post => profileData._id == post._id)
      
    // },

  },
  components:{}
}
</script>


<style scoped>

</style>