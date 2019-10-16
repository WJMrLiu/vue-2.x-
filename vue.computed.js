new Vue({
  el: document.getElementsByTagName("div")[0],
  data: {
    firstName: "Foo",
    lastName: "Bar"
  },
  computed: {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
});
