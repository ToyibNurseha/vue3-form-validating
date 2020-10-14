import {createApp} from 'vue/dist/vue.esm-browser.js'

const Num = {
    props: {
        number: {
            type: Number,
            required: true
        }
    },
    template: `
        <button :class="getClass(number)" @click="handleClick()">
            {{ number }}
        </button>
    `,
    methods: {
        handleClick() {
            this.$emit('chosen', { number: this.number })
        },
        getClass(number) {
            if(this.isEven(number)) {
                return 'blue'
            }
            return 'green'
        },
        isEven(number){
            return number %2 === 0
        }
    },
}

const app = createApp({
    components: {
        Num
    },
    template: `
    
        <num v-for="number in randomNumbers" :number="number" @chosen="putInArray"/>
        
        <h4> Clicked Number List </h4>
        
        <num v-for="number in clickedNumbers" :number="number" />

    `,
    data() {
        return {
            randomNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            clickedNumbers: []
        }
    },
    methods: {
        putInArray(payload) {
            this.clickedNumbers.push(payload.number)
        }
    }
}).mount('#app')

window.app

// @click is shortcut for v-on:click
// :class is shortcut for v-bind:class