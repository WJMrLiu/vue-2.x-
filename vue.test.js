new Vue({
  el: document.getElementsByTagName("div")[0],
  data() {
    return {
      name: "你好"
    };
  },
  methods: {
    diffValue() {
      this.name = "我是新的内容";
    }
  }
});