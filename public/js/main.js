function calculer() 
{ 
    let first = document.querySelector("input").value 
    let second = eval(first) 
    document.querySelector("input").value = second 
} 
//fonction qui affiche la valeur
function afficher(val) 
{ 
    document.querySelector("input").value+=val 
} 
//fonction qui efface l'écran 
function effacer() 
{ 
    document.querySelector("input").value = "" 
} 



