//listens for button click
document.getElementById("madLibButton").addEventListener("click", madLib)

function madLib(){
    //input
    let pluralNoun = document.getElementById("pluralNoun").value;
    let adjective = document.getElementById("adjective").value;
    let presentTenseVerb = document.getElementById("presentTenseVerb").value;
    let noun = document.getElementById("noun").value;

    document.getElementById("pluralNounOutput").innerHTML = pluralNoun;
    document.getElementById("adjectiveOutput").innerHTML = adjective;
    document.getElementById("presentTenseVerbOutput").innerHTML = presentTenseVerb;
    document.getElementById("nounOutput").innerHTML = noun;
}