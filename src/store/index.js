import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    userEmail: {},
    posts: {},
    comments: {},
    currentPost: {},
    profilePosts: {},
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setUserEmail(state, userEmail){
      state.userEmail = userEmail
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
        console.log('got user', res.data)
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
        commit("setUserEmail", res.data[0])
        console.log(this.state.userEmail)
      } catch(error){
        console.error(error)
      } 
    },
    async getComments({commit, dispatch}, postId) {
      try {
        this.state.currentPost = {}
        this.state.comments = {}
        let res = await api.get("/blogs/" + postId)
        commit("setComments", res.data.comments);
        commit("setCurrentPost" , res.data.blog)
      } catch(error){
        console.error(error)
      }
    },

    async deleteComment({commit, dispatch}, payload) {
         try{
        let res = await api.delete("comments/" + payload.id, payload)
        dispatch('getComments')
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

    async addComment({commit, dispatch}, payload) {
      try{
        let res = api.post("comments/" , payload )
        dispatch('getComments', payload.blogId)
        console.log(payload)
      } catch(error){
        console.error(error)
      }
    },

    async editComment({commit, dispatch}, payload){
      try {
         let res = api.put("comments/"+ payload.Id, payload)
         dispatch('getComments', payload.blogId)
         console.log(payload)
      } catch(error){
        console.error(error)
      }

    },

    async editPost({commit, dispatch}, payload){
      try {
         let res = api.put("blogs/"+ payload.blogId, payload)
         dispatch('getPostsByProfile', payload.blogId)
         console.log(payload)
      } catch(error){
        console.error(error)
      }

    },

    async deletePost({commit, dispatch}, payload) {
      try{
        console.log(payload)
        let res = await api.delete("blogs/" + payload)
        dispatch('getPostsByProfile', payload.id)
        console.log("deleted post!")
      } catch(error){
        console.error(error)
      }
    },
    
   async setCurrentComments({commit, dispatch}, postDataId){
     try {
       this.state.currentPost = {}
       this.state.comments = {}
       let res = await api.get("/blogs/" + postDataId)

       console.log("current post comments", res.data.comments)
       console.log("prifle", this.state.profile)
       commit("setComments", res.data.comments) 
       commit("setCurrentPost", res.data.blog)

     } catch(error){
       console.error(error)
     }
  
    //   let currentPost = this.state.posts.find(post => postDataId == post._id)
    //  commit("setCurrentPost", currentPost)
    //  console.log("currentpost",this.state.currentPost)
    },


 
  },
});
