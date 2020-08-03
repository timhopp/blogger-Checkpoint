<template>
  <div class="Post">
    <div class="bg-dark text-white border border-warning">
      <h1>{{singlePost.title}}</h1>
      <h5>Author: {{singlePost.creatorEmail}}</h5>
      <p>{{singlePost.body}}</p>
      <form @submit.prevent="addComment">
      <div class="form-group">
    <input type="text" class="form-control" placeholder="Enter Comment Here..." v-model="newComment.comment">
   </div>
    <button class="btn btn-block btn-info text-white" type="submit" >AddComment</button>
        </form>
     
     </div>
    <comments v-for="singleComment in comments" :commentData="singleComment" :key="singleComment.Id"/> 
  </div>
</template>


<script>
import comments from "../components/comments"
// import singlepost from "../components/singlepost"
export default {
  name: 'Post',
  props: [
   'singlePostData',
   "commentData"
  ],
  data(){
    return {
      newComment: {
          }
    }
  },
  mounted(){
    debugger
  this.$store.dispatch("setCurrentComments", this.$route.params.postId)
  },
  computed:{
    comments() {
      return this.$store.state.comments;
    },
     singlePost() {
     return this.$store.state.currentPost;
   }
  },
  methods:{
    addComment(){ 
    
      this.$store.dispatch("addComment",
    {
      body: this.newComment.comment,
      blogId: this.$store.state.currentPost.id,
      creatorEmail: this.$store.state.currentPost.creatorEmail,
    })
    },

  },

  components:{
    comments,
    // singlepost
}
}
</script>
