<template>
    <form @submit.prevent="submit" class="form">
        <my-input 
        name="Username"
        typeInput="text"
        :value="username.value"
        :rules="{ required: true, min: 5 }"
        @update="update"
        />

        <my-input 
        name="Password"
        typeInput="password"
        :value="password.value"
        :rules="{ required: true, min: 8 }"
        @update="update"
        />
        
        <my-button 
            color="white"
            background="darkslateblue"
            :disabled="!valid"
        />
    </form>
</template>

<script>
import MyButton from './MyButton.vue'
import MyInput from './MyInput.vue'

export default {
    components: {
        MyButton,
        MyInput
    },
    data() {
        return {
            valid: true,
            username: {
                value: '',
                valid: false
            },
            password: {
                value: '',
                valid: false
            }
        }
    },
    computed: {
        valid() {
            return this.username.valid && this.password.valid
        }
    },
    methods: {
        submit() {
            console.log('Submit')
        },
        
        update(payload) {
            this[payload.name.toLowerCase()] = {
                value : payload.value,
                valid : payload.valid
            }
        }
    }
}
</script>
 
<style>
    body {
        font-family: Arial;
    }

    .form {
        max-width: 400px;
        widows: 50%;
    }
</style>
