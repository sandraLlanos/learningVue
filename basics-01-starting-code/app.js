Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: 'Master Vue and build amazing apps!',
            courseGoalC: '<h2 style="color: black;">Master Vue and build amazing apps!</h2>',
            vueLink: 'https://vuejs.org/',
            goals: [],
            enteredValue: '',
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalC;
            }
        },
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        },
    },
}).mount('#user-goal')