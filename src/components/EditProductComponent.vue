<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Modifier un produit</h3>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label>Nom</label>
                    <input type="text" class="form-control" v-model="product.name" required>
                </div>

                <div class="form-group">
                    <label for="productType">Type de produit :</label>
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
                    <label>Prix</label>
                    <input type="number" class="form-control" v-model="product.price" required>
                </div>

                 <label for="description">Description du produit :</label>
                <div class="form-group">
                    <textarea id="description" name="description"
                            rows="5" cols="66" v-model="product.description">
                    </textarea>
                </div>

                <div class="container">
                <label>Image</label>
                <img
                    v-if="product.image1"
                    :src="require(`../assets/products/${product.image1}`)"
                />
                </div>
                <div class="form-group">
                    <button class="btn btn-success btn-block">Modifier</button>
                </div>
            </form>
             <router-link :to="{name: 'products'}" class="btn btn-danger">Annuler</router-link>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'editProduct',
    data() {
        return {
            product: { }
        }
    },
    created() {
        let apiURL = `http://localhost:4000/api/products/edit-product/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
            this.product = res.data;
        })
    },
    methods: {
        handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/products/update-product/${this.$route.params.id}`;

            axios.post(apiURL, this.product).then((res) => {
                console.log(res)
                this.$router.push('/products')
            }).catch(error => {
                console.log(error)
            });
        }
    },
  beforeRouteUpdate(to, from, next) {
    const url = '/'+to.params.id;
    next(url);
    
  }
}
</script>