<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in Users" :key="user._id">
                        <td>{{ user.name }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.phone }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: user._id }}" class="btn btn-success">Edit
                            </router-link>
                            <button @click.prevent="deleteUser(user._id)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from "axios";

    export default {
        name : 'users',
        data() {
            return {
                Users: []
            }
        },
        created() {
            let apiURL = 'http://localhost:4000/api/users';
            axios.get(apiURL).then(res => {
                this.Users = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteUser(id){
                let apiURL = `http://localhost:4000/api/users/delete-user/${id}`;
                let indexOfArrayItem = this.Users.findIndex(i => i._id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.Users.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>

<style>
    .btn-success {
        margin-right: 10px;
    }
</style>