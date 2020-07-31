<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/navbar";
import { onAuth } from "@bcwdev/auth0-vue";
import { setBearer, api } from "./store/AxiosStore";
export default {
  name: "App",
  async beforeCreate() {
    await onAuth();
    if (this.$auth.isAuthenticated) {
      setBearer(this.$auth.bearer);
      //NOTE if you want to do something everytime the user logs in, do so here
    }
  },
  components: {
    Navbar,
  },
};
</script>
<style lang="scss">
@import "./assets/_variables.scss";
@import "bootstrap";
@import "./assets/_overrides.scss";
body{
  background-image: url('https://cdn.theatlantic.com/thumbor/YeiRCoq8L9pTxxNF2L0XDPDFcg8=/900x551/media/img/photo/2015/03/aoshima-japans-cat-island/c01_RTR4RUGT/original.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'Caveat', cursive;
}
</style>
