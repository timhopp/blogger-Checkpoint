<template>
  <div class="home">
    <h1 class="text-white bg-dark">Welcome Cat Lovers</h1>
   <div class="container bg-dark">
    <div class="row justify-content-center">
      <div class="col-6 text-white text-center">Create A Blog Post</div>
    </div> 
     </div>







  </div>
</template>

<script>
import posts from "../components/posts";
export default {
  name: "home",
  props: [],
  mounted(){
  this.$store.dispatch('getPosts')
  },
  computed: {
   posts() {
     return this.$store.state.posts;
   }
  },
  methods: {
    // addPost(){
    //   this.$store.dispatch("addPost", this.newPost);
    // }
  },
  components: {
    posts,
  }
};
</script>
