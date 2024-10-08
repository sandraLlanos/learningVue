const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    reset() {
      this.name = '';
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert('Submitted');
    },
    setName(event) {
      this.name = event.target.value;
    },
    // setName(event, last) {
    //   this.name = event.target.value + ' ' + last;
    // },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
  },
  computed: {
    fullName() {
      console.log('Running again');
      return this.name + ' ' + 'Llanos';
    },
  },
});

app.mount('#events');
