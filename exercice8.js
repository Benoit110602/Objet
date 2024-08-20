function Eleve(nom, age, niveau) {
    this.nom = nom,
    this.age = age,
    this.niveau = niveau,

    Eleve.prototype.information = function() {
        return "Je suis" + this.nom + "j'ai" + this.age + "et j'etudie en" + this.niveau    
    }
}

let eleve1 = new Eleve('Benjamin' , '15 ans' , '5eme')
let eleve2 = new Eleve('Léa' , '16 ans' , '3eme')
let eleve3 = new Eleve('Sebastien' , '13 ans' , '6eme')

console.log(eleve1.information())
console.log(eleve2.information())
console.log(eleve3.information())