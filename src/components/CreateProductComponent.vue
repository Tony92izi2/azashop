<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Ajouter un produit</h3>
            <form @submit.prevent="handleSubmitForm">
                <div class="form-group">
                    <label>Nom : </label>
                    <input type="text" class="form-control" v-model="product.name" required>
                </div>

                <!-- <div class="form-group">
                    <label>Type</label>
                    <input type="text" class="form-control" v-model="product.type" required>
                </div> -->


                <div class="form-group">
                    <label for="productType">Type de produit : </label>
                    <select name="productTypes" id="cars" class="form-control"  v-model="product.type" required>
                    <optgroup label="Ordinateurs">
                        <option value="Ordinateur portable">Ordinateur portable</option>
                        <option value="Ordinateur fixe">Ordinateur fixe</option>
                    </optgroup>
                    <optgroup label="Smartphones">
                        <option value="Iphone">Iphone</option>
                        <option value="Galaxy">Galaxy</option>
                    </optgroup>
                    </select>
                </div>

                <div class="form-group">
                    <label>Prix :</label>
                    <input type="number" class="form-control" v-model="product.price" required>
                </div>

                 <label for="description">Description du produit :</label>
                <div class="form-group">
                    <textarea id="description" name="description"
                            rows="5" cols="66" v-model="product.description" required>
                    Saisir la description du nouveau produit...
                    </textarea>
                </div>

                <div class="form-group">
                    <label>Image : </label>
                    <input type="file" @change="onFileUpload" required>
                      <div id="preview">
                        <img v-if="previewImage" :src="previewImage" />
                      </div>
                </div>

                <div class="form-group">
                    <button class="btn btn-success btn-block">Create</button>
                </div>
            </form>
            <router-link :to="{name: 'products'}" class="btn btn-danger">Annuler</router-link>
        </div>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        name: 'createProduct',
        data() {
            return {
                product: {
                   name: '',
                   type: '',
                   price: '',
                   description: ''
                },
                FILE: null,
                previewImage: null
            }
        },
        methods: {
                    onFileUpload (e) {
         const image = e.target.files[0];
         this.FILE = image
         this.previewImage = URL.createObjectURL(image);
        },
            handleSubmitForm() { 

         // upload file
                const formData = new FormData()
                let fileName = Math.floor(Date.now() / 1000) + '-' + this.FILE.name.trim()  
                formData.append('avatar', this.FILE, fileName)
                formData.append('name', this.product.name)
                formData.append('type', this.product.type)
                formData.append('price', this.product.price)
                formData.append('description', this.product.description)
                formData.append('image1', fileName)
                let apiURL = 'http://localhost:4000/api/products/create-product';
                
                axios.post(apiURL, formData).then(() => {
                  this.$router.push('/products')
                  this.product = {
                    name: '',
                    type: '',
                    price: '',
                    FILE: null
                  }
                }).catch(error => {
                    console.log(error)
                });
            }
        }
    }
</script>
