<template>
  <div class="comments bg-dark text-white border border-info">
       <h3>{{commentData.creatorEmail}}</h3>
     <h3>{{commentData.body}}</h3>


  </div>
</template>


<script>
export default {
  name: 'comments',
  props: [
    'commentData',
  ],
  data(){
    return {}
  },
  computed:{},
  methods:{},
  components:{}
}
</script>


<style scoped>

</style>