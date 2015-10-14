var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  	var Basewords = new Array("Lane","top","mid","Bot","AD","Harass","Push","Tower Dive","Tower Hug");

	var Actionwords = new Array("Ganko","deu Push","estava na Lane","upou","tankou","farmou","upou","estava de Jungle","feedou","fez um call","counterou","levou um burst","ultou","deu um backdoor","");

	var Itenswords = new Array("o Blue","o Red","o Jungle deles","a torre do bot","a torre do mid","o inibidor","o Drag","o Barão");

	var Characterswords = new Array("O Aatrox","A Ahri","A Akali","O Amummu","A Annie", "O Darius", "O Draven", "O Garen", "A Elise", "A Leona","A Lulu");

	var randBase = Math.floor((Math.random() * (Basewords.length - 1)) + 1);
	var randAction = Math.floor((Math.random() * (Actionwords.length - 1)) + 1);
	var randItens = Math.floor((Math.random() * (Itenswords.length - 1)) + 1);
	var randCharacters = Math.floor((Math.random() * (Characterswords.length - 1)) + 1);

	console.log(Characterswords[randCharacters]+' '+Actionwords[randAction]+" pra pegar "+ Itenswords[randItens]);
 
	  res.render('generate', { lolrota: Characterswords[randCharacters]+' '+Actionwords[randAction]+" pra pegar "+ Itenswords[randItens] });
  // res.send(Characterswords[randCharacters]+' '+Actionwords[randAction]+" pra pegar "+ Itenswords[randItens]);
});

module.exports = router;
