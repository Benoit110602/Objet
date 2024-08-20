let jeu = new Object(); {

    jeu.nom = 'Astro Bot',
    jeu.prix = '59.99€',
    jeu.quantite = '5',

    jeu.acheter = function(nombre) {
        this.quantite -= nombre;

    }
    console.log(jeu)
    console.log(jeu.acheter)
}