<template>
<div class="row" >
<div class="col-md-4" v-for="product in Products" :key="product._id">
	<figure class="card card-product">
        <div class="container">
		<img :src="require(`../assets/products/${ product.image1 }`)" style="height:150px">

		<figcaption class="info-wrap">
				<h4 class="title">{{ product.name }}</h4>
				<p class="desc">{{ product.type }}</p>
				<div class="rating-wrap">
					<div class="label-rating">132 reviews</div>
					<div class="label-rating">154 orders </div>
				</div> <!-- rating-wrap.// -->
		</figcaption>
		<div class="bottom-wrap">
			<a href="" class="btn btn-sm btn-primary float-right">Order Now</a>	
			<div class="price-wrap h5">
				<span class="price-new">${{ product.price }}</span> <del class="price-old">$10000</del>
			</div> <!-- price-wrap.// -->
		</div> <!-- bottom-wrap.// -->
                </div>
	</figure>
        <router-link :to="{name: 'viewProduct', params: { id: product._id }}" class="btn btn-success">Afficher</router-link>
        <router-link :to="{name: 'editProduct', params: { id: product._id }}" class="btn btn-success">Modifier</router-link>
        <button @click.prevent="deleteProduct(product._id)" class="btn btn-danger">Supprimer</button>
    <div></div>
</div> <!-- col // -->
</div> <!-- col // -->

</template>

<script>
    import axios from "axios";
    var imgPreUrl  = '';
    imgPreUrl  = '../assets/products/';
    console.log(imgPreUrl);
    export default {
        name : 'products',
        data() {
            return {
                Products: []
            }
        },
        created() {
            let apiURL = 'http://localhost:4000/api/products';
            axios.get(apiURL).then(res => {
                this.Products = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteProduct(id){
                let apiURL = `http://localhost:4000/api/products/delete-product/${id}`;
                let indexOfArrayItem = this.Products.findIndex(i => i._id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.Products.splice(indexOfArrayItem, 1);
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