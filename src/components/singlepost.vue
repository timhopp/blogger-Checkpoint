<template>
  <div  class="posts col-11 rounded text-white bg-dark m-3 border border-warning">
  <h2>{{singlePostData.title}}</h2>
  <h5>Author- {{singlePostData.creatorEmail}}</h5>
  <p>{{singlePostData.body}}</p>
  </div>
</template>


<script>
export default {
  name: 'singlepost',
  props: [
    "sinlgePostData",
  ],
  data(){
    return {}
  },
  computed:{},
  methods: {
    },

  components:{}
}
</script>


<style scoped>

</style>