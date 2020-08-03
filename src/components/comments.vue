<template>
  <div class="comments bg-dark text-white border border-info">
       <h3>{{commentData.creatorEmail}}</h3>
     <h3>{{commentData.body}}</h3>
   <button type="button" class="btn btn-warning text-white text-center mb-2" data-toggle="modal" data-target=".bd-example-modal-lg">Edit Comment</button>
     <form @submit.prevent="editComment(commentData)">
<div id="commentModal" class="modal fade bd-example-modal-lg p-5" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg p-5">
    <div class="modal-content p-5">
      Edit Post
      <div class="input-group input-group-lg m-3">
  <input type="text" class="form-control" placeholder="enter edited post.." v-model="Comment.body">
</div>
<div class="modal-footer">
        <button type="submit" class="btn btn-success">Submit Edited Post</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
     
  </div>
 
</div>
</form>
     <button class="btn btn-danger" @click="deleteComment(commentData)">Delete</button>

  </div>
</template>


<script>
export default {
  name: 'comments',
  props: [
    'commentData',
  ],
  data(){
    return{
    Comment: {}
    }
  },
  //  mounted(){
  // this.$store.dispatch("setCurrentComments", this.$route.params.postId )
  // },
  computed:{
    comments() {
      return this.$store.state.comments;
    },
     singlePost() {
     return this.$store.state.currentPost;
   }
  },
  methods:{ 
    editComment(commentData){
      this.$store.dispatch('editComment', {
      body: this.Comment.body,
      blogId: this.commentData.id,
      creatorEmail: this.commentData.creatorEmail,
      id: this.commentData.id,

      })
      $("#commentModal").modal("hide");
      this.$store.dispatch("setCurrentComments", this.commentData.id)
    },
    deleteComment(commentData){
      this.$store.dispatch("deleteComment", {
        body: this.commentData.body,
        blogId: this.commentData.blogId,
        creatorEmail: this.commentData.creatorEmail,
        id: this.commentData.id,
      }
      )
      this.$store.dispatch("setCurrentComments", this.commentData.id)
  },
  },
  components:{}
}
</script>


<style scoped>

</style>