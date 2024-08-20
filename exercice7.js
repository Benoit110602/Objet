function Article(nom, prix, description) {
this.nom = nom,
this.prix = prix,
this.description = description,



Article.prototype.information = function() {
    return 'il s"agis d"une' + this.nom + '' + this.prix + '' + this.description
}
}


let article1 = new Article('PS5' , '550€' , 'une console de jeu');
let article2 = new Article('Xbox Series X' , '550€' , 'une console de jeu');

console.log(article1.information())
console.log(article2.information())


