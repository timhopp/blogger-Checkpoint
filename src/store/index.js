import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    posts: {},
    comments: {},
    currentPost: {},
    profilePosts: {},
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setPosts(state, posts) {
      state.posts = posts;
    }, 
    setComments(state, comments){
      state.comments = comments;
    },
    setCurrentPost(state, currentPost){
      state.currentPost = currentPost;
    },
    setPostsByProfile(state, profilePosts){
      state.profilePosts = profilePosts
    }

  },
  actions: {
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async getPosts({commit, dispatch}) {
      try {
        let res = await api.get("/blogs");
        commit("setPosts", res.data);
        console.log(res.data)
      } catch (error){
        console.error(error);
      }
    },
    async getPostsByProfile({commit, dispatch}) {
      try {
        let res = await api.get("/profile/blogs");
        commit("setPostsByProfile", res.data);
        console.log(res.data)
      } catch(error){
        console.error(error)
      } 
    },
    async getComments({commit, dispatch}, postId) {
      try {
        let res = await api.get("/blogs/" + postId)
        commit("setComments", res.data.comments);
        commit("setCurrentPost" , res.data.blog)
      } catch(error){
        console.error(error)
      }
    },

    async addPost({commit, dispatch}, payload) {
      try{
        let res = await api.post("blogs",  payload)
        dispatch('getPosts')
      } catch(error){
        console.error(error)
      }
    },
    
    setCurrentPost({commit, dispatch}, postDataId){
      let currentPost = this.state.posts.find(post => postDataId == post._id)
     commit("setCurrentPost", currentPost)
     console.log("currentpost",this.state.currentPost)
    },


 
  },
});
