new Vue({
  el: document.getElementsByTagName("div")[0],
  data() {
    return {
      name: "你好",
      firstName: "Foo",
      lastName: "Bar"
    };
  },
  computed: {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  },
  methods: {
    diffValue() {
      this.name = "我是新的内容";
    }
  }
});
