var app = new Vue ({
    el : "#app",

    data : { // Pour y déclarer nos variables 
        
        message: 'Ecris ce que tu veux =)',
        active: false,
        messages: 'Vous avez affiché cette page le message'  + new Date().toLocaleString()
    },

})
new Vue({
    el: '#app-3',
    data: {
      active: false
    }
  })
methods : { //Pour y déclarer nos méthodes. 

    // d'ici, on peut utiliser un "this. ..." pour accéder aux variable de nos data

}