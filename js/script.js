// alert("Bienvenue sur le quizz");
// alert("Vous allez répondre a une série de question par vrai ou faux, à la fin vous aurz votre résultat");
// let result = 0;

// let first = prompt("vrai ou faux, a sa conception un humain a une queue ?");
// if(first == "vrai"){
//     result = result + 1;
//     alert("Bonne réponse,La présence d'une queue chez un nouveau-né humain représente donc le reliquat d'une structure embryonnaire vouée à disparaître bien avant la naissance.")
// } else {
//     alert("Mauvaise réponse,La présence d'une queue chez un nouveau-né humain représente donc le reliquat d'une structure embryonnaire vouée à disparaître bien avant la naissance.")
// }

// let second = prompt("vrai ou faux, La france a une frontère avec le brésil ?");
// if(second == "vrai"){
//     result = result + 1;
//     alert("Bonne réponse,La frontière entre le Brésil et la France est une frontière internationale délimitant les 'État brésilien de l'Amapá de la Guyane, qui est à la fois une région et un département d'outre-mer.")
// } else {
//     alert("Mauvaise réponse,La frontière entre le Brésil et la France est une frontière internationale délimitant les 'État brésilien de l'Amapá de la Guyane, qui est à la fois une région et un département d'outre-mer.")
// }

// let three = prompt("vrai ou faux, Google est une société anglaise ?");
// if(three == "false"){
//     result = result + 1;
//     alert("Bonne réponse,Google est une filiale D'alphabet Qui est situer en californie.")
// } else {
//     alert("Mauvaise réponse,Google est une filiale D'alphabet Qui est situer en californie.")
// }

// let four = prompt("vrai ou faux, Une tomate est un fruit et un légume ?");
// if(four == "false"){
//     result = result + 1;
//     alert("Bonne réponse,Google est une filiale D'alphabet Qui est situer en californie.")
// } else {
//     alert("Mauvaise réponse,Google est une filiale D'alphabet Qui est situer en californie.")
// }

// alert(`Bravo vous avez fini le test. Voici votre résultat: ${result} points`);

let question = document.getElementById("question");
let score = 0;
let answer;
let tower = 1;
let reponse = document.getElementById("reponse");
let next1 = document.getElementById("next");
let result = document.getElementById("result");
let congrulation = document.getElementById("congrulation");
let table= [ 
    {quest:"vrai ou faux, a sa conception un humain a une queue ?",
     rep:"La présence d'une queue chez un nouveau-né humain représente donc le reliquat d'une structure embryonnaire vouée à disparaître bien avant la naissance.`;" , res: "true"},

    {quest:"vrai ou faux, La france a une frontère avec le brésil ?", 
    rep: "La frontière entre le Brésil et la France est une frontière internationale délimitant les 'État brésilien de l'Amapá de la Guyane, qui est à la fois une région et un département d'outre-mer.;", res:"true"}, 

    {quest:"vrai ou faux, Google est une société anglaise ?",
    rep: "Google est une filiale D'alphabet Qui est situer en californie.", res: "false"},

    {quest:"vrai ou faux, Une tomate est un fruit et un légume ?",
    rep: "malgré qu’elles soient des fruits en termes botaniques, les tomates sont habituellement préparées dans des plats salés, et c’est pourquoi d’un point de vue culinaire, elles sont souvent décrites comme légumes.", res: "false"}]
let Reponse=[,
,,""]
i = tower;
function Question(){
    
    question.innerHTML= table[i].quest;
}
function play(arg,){
    if(arg === table[i].res){
        answer = "Bonne réponse";
        score ++
    }
    else{
        answer ='Mauvaise réponse';
    }
    i=tower;
    reponse.innerHTML= answer,table[i].rep;
    tower++
    next()
    };    
    function next(){
        next1.innerHTML = `<button onClick="next"()">Suivant</button>`;
            tower++;
            Question()
        
    }
next.innerHTML = `<button><a href="result.html">Résultat</a></button>`;
result.innerHTML = `Votre score: ${score} points`;
if(score <= 2){
    congrulation.innerHTML = "Vous êtes mauvais";
}else{
    congrulation.innerHTML = "Vous êtes trop fort";
};


