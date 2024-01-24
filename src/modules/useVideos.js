import { defineStore } from "pinia";
const API = require("../API.js");

export const useVideos = defineStore("videos", {
  state: () => ({
    loading: false,
    url: "",
  }),
  actions: {
    async fetchVideo(title) {
      this.loading = true;
      const { data } = await API.fetchVideo(title);
      this.url = data.publicUrl;
      this.loading = false;
    },
  },
});
