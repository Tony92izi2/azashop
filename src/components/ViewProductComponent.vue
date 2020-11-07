<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Fiche produit : </h3>
      <form @submit.prevent="handleSubmitForm">
        <div>
          <label>Nom</label>
          <h4 class="title">{{ product.name }}</h4>
        </div>

        <label for="description">Description du produit :</label>
        <div class="form-group">
            <textarea id="description" name="description"
                    rows="5" cols="66" v-model="product.description" disabled>
            </textarea>
        </div>

        <!-- <div>
          <label>Type</label>
          <h5 class="title">{{ product.type }}</h5>
        </div> -->
        
        <div class="container">
          <label>Image</label>
          <img
            v-if="product.image1"
            :src="require(`../assets/products/${product.image1}`)"
            style="height:330px"/>
        </div>

        <div>
          <label>Prix</label>
          <h5 class="title">{{ product.price }}</h5>
        </div>

        <div class="container" style="position: absolute; bottom: -50;">
          <button class="btn btn-success btn-block">Acheter</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "viewProduct",
  data() {
    return {
      product: {},
    };
  },
  created() {
    let apiURL = `http://localhost:4000/api/products/edit-product/${this.$route.params.id}`;
    axios
      .get(apiURL)
      .then((res) => {
        this.product = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {},
  beforeRouteUpdate(to, from, next) {
    const url = '/'+to.params.id;
    next(url);
    
  }
};
</script>

<style>
.btn-success {
  margin-right: 10px;
}
</style>
