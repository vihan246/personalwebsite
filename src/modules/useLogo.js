import { defineStore } from "pinia";
const API = require("../API.js");

export const useLogo = defineStore("logos", {
  state: () => ({
    loading: false,
    logoUrls: new Map(),
  }),
  actions: {
    async fetchLogo(title) {
      this.loading = true;
      const { data } = await API.fetchLogo(title);
      this.logoUrls.set(title, data.publicUrl);
      this.loading = false;
    },
  },
  getters: {
    getLogoByTitle: (state) => {
      return (title) => state.logoUrls.get(title);
    },
  },
});
