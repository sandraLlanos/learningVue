const app = Vue.createApp({
    data() {
        return {
            name: 'Sandra',
            age: 30,
            image: 'data:image/jpeg;base64,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'
        }
    },
    methods: {
        agePlus5() {
            return this.age + 5;
        },
        randomNumber() {
            const randomNumber = Math.random();
            if (randomNumber > 0.5) {
                return Math.random();
            } else {
                return 5;                
            }
        }
    }
}).mount('#assignment')