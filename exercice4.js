let personne = new Object(); {

personne.nom = 'Patrick',
personne.age = '43',
personne.adresse = '1 Avenue du pont',

personne.anniversaire = function() {
    this.age + this.age + 1;
}

console.log(personne);
} 


