<template>
    <div class="input-wrapper">
        <div class="label">
            <label :for="name"> {{name}} </label>
            <div class="error">{{error}}</div>
        </div> 
        <input 
        :type="typeInput" 
        :id="name"
        :value="value"
        @input="input"/>
    </div>
</template>

<script>
import MyButton from './MyButton.vue'
export default {
    props: {
        name: {
            type: String, 
            required: true
        },
        rules: {
            type: Object // min, required
        },
        typeInput: {
            type: String
        },
        value: {
            type: String
        }
    },
    
    computed: {
        error() {
            return this.validate(this.value)
        }
    },
    methods: {
        validate(value){
            if(this.rules.required && !value) {
                return 'Required'
            }

            if(this.rules.min && value.length < this.rules.min) {
                return `Minimum length is ${this.rules.min}`
            }
        },

        input($evt) {
            this.$emit('update', {
                value : $evt.target.value,
                name : this.name,
                valid: this.validate($evt.target.value) ? false : true
            })
        }
    }
}
</script>

<style scoped>
.input-wrapper {
    display: flex;
    flex-direction: column;
}

.label {
    display: flex;
    justify-content: space-between;
}

.error {
    color: red;
}

input {
        background: none;
        color: black;
        border: 1px solid silver;
        border-radius: 5px;
        padding: 10px;
        margin: 5px 0;
        font-size: 16px;
        cursor: pointer;
    }
</style>
