<template>
  <div class="about text-center">
    <h1>Welcome, {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt="" />
    <p>{{ profile.email }}</p>
    <div class= "row justify-content-center">
  <div class="profilePosts col-10 bg-dark text-white"> 
    <profilePosts  v-for="singlePost in profilePosts" :profileData="singlePost" :key="singlePost._id"/>
    </div>
    </div>
  </div>
  
</template>

<script>
import profilePosts from "../components/profilePosts"
export default {
  name: "Profile",
  data(){
    return {

    }
  },
  mounted(){
  this.$store.dispatch('getPostsByProfile')
  },
  computed: {
    profilePosts() {
      return this.$store.state.profilePosts;
      console.log(profilePosts)
    },
    profile(){
      return this.$store.state.profile;
    }
   },
  components: {
    profilePosts,
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
