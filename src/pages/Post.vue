<template>
  <div class="Post">
    <!-- <div class="bg-dark text-white border border-warning">
      <h1>{{singlePostData.title}}</h1>
      <h5>{{singlePostData.creatorEmail}}</h5>
      <p>{{singlePostData.body}}</p>
     </div> -->
    <comments v-for="singleComment in comments" :commentData="singleComment" :key="singleComment.blogId"/> 
  </div>
</template>


<script>
import comments from "../components/comments"
import singlepost from "../components/singlepost"
export default {
  name: 'Post',
  props: [
   'singlePostData',
   "commentData"
  ],
  data(){
    return {}
  },
  mounted(){
    // this.$store.dispatch('getPostById')
    this.$store.dispatch('getComments', this.$store.state.currentPost._id)
  },
  computed:{
    comments() {
      return this.$store.state.comments;
    }
  },
  methods:{},
  components:{
    comments,
    singlepost
}
}
</script>
