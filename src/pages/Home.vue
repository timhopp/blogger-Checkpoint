<template>
  <div class="home">
    <h1 class="text-white bg-dark">Welcome Cat Lovers</h1>
   <div class="container bg-dark">
    <div class="row justify-content-center">
      <button type="button" class="btn btn-block btn-warning btn-lrg col-6 text-white text-center m-2" data-toggle="modal" data-target=".bd-example-modal-lg">Create A Blog Post</button>
<form @submit.prevent="addPost">
<div id="newPostModal" class="modal fade bd-example-modal-lg p-5" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg p-5">
    <div class="modal-content p-5">
      Make a Post!
      <div class="input-group input-group-lg m-3">
  <input type="text" class="form-control" placeholder="Enter Title Here..." v-model="newPost.title">
</div>
      <div class="input-group input-group-lg m-3">
  <input type="text" class="form-control" placeholder="Enter Post Here..." v-model="newPost.body">
</div>
<div class="modal-footer">
        <button type="submit" class="btn btn-primary">Submit Post</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
     
  </div>
 
</div>
</form>
      <posts v-for="singlePost in posts" :postData="singlePost" :key="singlePost._id"/>
    </div> 
     </div>
  </div>



</template>

<script>
import posts from "../components/posts";
export default {
  name: "home",
  props: [],
  data(){
    return {
      newPost: {}
    }
  },
  mounted(){
  this.$store.dispatch('getPosts')
  },
  computed: {
   posts() {
     return this.$store.state.posts;
   }
  },
  methods: {
    addPost(){
      this.$store.dispatch("addPost", {
        body: this.newPost.body,
        title: this.newPost.title,
      });
      $("#newPostModal").modal("hide");
    }
  },
  components: {
    posts,
  }
};
</script>
