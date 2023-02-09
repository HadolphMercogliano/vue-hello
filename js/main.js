const app = Vue.createApp({
  data() {
    return {
      h1Message: "Ciao sono un h1",
      MyUrl: "",
    };
  },
  methods: {
    mostraImmagine() {
      if (!this.MyUrl) {
        this.MyUrl = "./img/homer.webp";
      } else {
        this.MyUrl = "";
      }
    },
  },
});
app.mount("#root");
