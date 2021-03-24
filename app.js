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
            inputValue: '',
            notes: ['Заметка 1', 'Заметка 2']
        }
    },
    methods: {
        // inputChangeHandler(event) {
        //     this.inputValue = event.target.value
        // },
        addNewNote() {
            if (this.inputValue !== '') {
                this.notes.push(this.inputValue);
                this.inputValue = ''
            }
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        // inputKeyPress(event) {
        //     console.log(event.key);
        //     if (event.key === 'Enter') {
        //         this.addNewNote();
        //     }
        // }
        removeNote(index) {
            console.log('removeNote', index);
            this.notes.splice(index, 1);
        }
    },
    computed: {
        doubleCount() {
            console.log('doubleCount')
            return this.notes.length * 2;
        },
    },
    watch: {
        inputValue(value) {
            if (value.length > 10) {
               this.inputValue = ''
            }
            console.log('input Value changed', value)
        }
    }
}

Vue.createApp(App).mount('#app')