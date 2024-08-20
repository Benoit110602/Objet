function Voiture(marque, annee, couleur) {
    this.marque = marque,
    this.annee = annee,
    this.couleur = couleur,

    Voiture.prototype.afficherDetails = function() {
        return this.marque + this.annee + this.couleur
    } 
}

let voiture1 = new Voiture('Toyota' , '2010' , 'Blanc')
let voiture2 = new Voiture('Tesla' , '2019' , 'Noir')
let voiture3 = new Voiture('Volkswagen' , '2004' , 'Bleu')

console.log(voiture1.afficherDetails())
console.log(voiture2.afficherDetails())
console.log(voiture3.afficherDetails())