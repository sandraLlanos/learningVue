const app = Vue.createApp({
    data() {
        return {
            textAlert: 'Hello World!',
            textParagraph:'',
            textParagraph2: ''
        }
    },
    methods: {
        showAlert() {
            alert(this.textAlert);
        },
        showTextParagraph(event) {
            this.textParagraph = event.target.value;
        },
        showTextParagraph2(event) {
            this.textParagraph2 = event.target.value;
        }
    }
}).mount('#assignment');