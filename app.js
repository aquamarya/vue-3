// const App = {
//     data() {
//         return {
//             counter: 0,
//             title: 'Счетчик'
//         }
//     }
// }

// const app = Vue.createApp(App)
//
// app.mount('#app')

const App = {
    data() {
        return {
            placeholderString: 'Введите название заметки',
            title: 'Список заметок',
            inputValue: ''
        }
    },
    methods: {
        inputChangeHandler(event) {
            this.inputValue = event.target.value
        }
    }
}

Vue.createApp(App).mount('#app')