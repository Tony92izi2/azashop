<template>
  <div class="hello">
<nav class="navbar navbar-expand-lg navbar-light bg-primary">
  <a class="navbar-brand" href="#">Azarmet</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link class="nav-link" to="/">Accueil <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="products">Produits</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="createProduct">Ajouter Produit</router-link>
      </li>      
      <li class="nav-item">
        <router-link class="nav-link" to="about">A propos</router-link>
      </li>
       <li class="nav-item">
        <router-link class="nav-link" to="createUser">Ajouter Utilisateur</router-link>
      </li>     
       <li class="nav-item">
        <router-link class="nav-link" to="users">Utilisateurs</router-link>
      </li>     
       <li class="nav-item">
        <router-link class="nav-link" to="userLogin">userLogin</router-link>
      </li> 
      <li class="nav-item">
        <router-link class="nav-link" to="Smartphones, Tablettes & Gadgets">Smartphones, Tablettes & Gadgets</router-link>
      </li> 
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Alimentation
        </a>
        <div class="dropdown-menu" aria-labelledby="Alimentation">
          <a class="dropdown-item" href="#">Boisson</a>
          <a class="dropdown-item" href="#">Boites de conserve</a>
          <a class="dropdown-item" href="#">Charcuterie</a>
          <a class="dropdown-item" href="#">Epices-Condiments-Assaisonnements</a>
          <a class="dropdown-item" href="#">Lait-Sucre</a>
          <a class="dropdown-item" href="#">Riz-Pâtes</a>
          <a class="dropdown-item" href="#">Santé & Beauté</a>
          <div class="dropdown-divider"></div>
        </div>
      </li>   
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Electroménagers
        </a>
        <div class="dropdown-menu" aria-labelledby="Electroménagers">
          
          <a class="dropdown-item" href="#">Gros Electroménagers</a>
          <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Gros Electroménagers
        </a>
        <div class="dropdown-menu" aria-labelledby="Gros ">
          
          <a class="dropdown-item" href="#">Climatiseurs</a>
            
          <div class="dropdown-divider"></div>
        </div>
      </li>  
            
          <a class="dropdown-item" href="#">Petits Electroménagers</a>
          <div class="dropdown-divider"></div>
        </div>
      </li>  
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Informatique
        </a>
        <div class="dropdown-menu" aria-labelledby="Informatique">
          <a class="dropdown-item" href="#">Composants-Périphériques</a>
          <a class="dropdown-item" href="#">Impression-Bureautique</a>
          <a class="dropdown-item" href="#">Stockage-Réseau</a>
          <div class="dropdown-divider"></div>
        </div>
      </li>   
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Mode
        </a>
        <div class="dropdown-menu" aria-labelledby="Mode">
          <a class="dropdown-item" href="#">Accessoire de mode</a>
          <a class="dropdown-item" href="#">Mode femme</a>
          <a class="dropdown-item" href="#">Mode homme</a>
          <a class="dropdown-item" href="#">Mode enfant</a>
          <div class="dropdown-divider"></div>
        </div>
      </li> 
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Meuble Déco
        </a>
        <div class="dropdown-menu" aria-labelledby="Meuble Déco">
          <a class="dropdown-item" href="#">Armoires</a>
          <a class="dropdown-item" href="#">Bureau & Rangement</a>
          <a class="dropdown-item" href="#">Canapés</a>
          <a class="dropdown-item" href="#">Coiffeuses</a>
          <a class="dropdown-item" href="#">Décoration</a>
          <a class="dropdown-item" href="#">Lits</a>
          <a class="dropdown-item" href="#">Luminaires</a>
          <a class="dropdown-item" href="#">Tables</a>
          <a class="dropdown-item" href="#">Tapis</a>
          <div class="dropdown-divider"></div>
        </div>
      </li> 
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Sports & Loisirs
        </a>
        <div class="dropdown-menu" aria-labelledby="Sports & Loisirs">
          <div class="dropdown-divider"></div>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">RECHERCHER</button>
    </form>
  </div>
</nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
