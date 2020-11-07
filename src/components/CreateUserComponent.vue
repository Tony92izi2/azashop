<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Create user</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>Name</label>
                    <input type="text" class="form-control" v-model="user.name" required>
                </div>

                <div class="form-group">
                    <label>Email</label>
                    <input type="email" class="form-control" v-model="user.email" required>
                </div>

                <div class="form-group">
                    <label>Phone</label>
                    <input type="text" class="form-control" v-model="user.phone" required>
                </div>

                <div class="form-group">
                    <button class="btn btn-danger btn-block">Create</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        name: 'createUser',
        data() {
            return {
                user: {
                   name: '',
                   email: '',
                   phone: ''
                }
            }
        },
        methods: {
            handleSubmitForm() { 

                let apiURL = 'http://localhost:4000/api/users/create-user';
                
                axios.post(apiURL, this.user).then(() => {
                  this.$router.push('/users')
                  this.user = {
                    name: '',
                    email: '',
                    phone: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>
