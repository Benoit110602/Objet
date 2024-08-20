let livre = new Object(); {

livre.titre = "Harry Potter à l'école des sorciers",
livre.auteur = "J. K. Rowling",
livre.pages = '305',

livre.info = function() {
    return 'Livre de magie' + this.titre + 'de' + this.auteur + 'contient' + this.pages
}


console.log(livre);
}