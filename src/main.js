import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);


let names = [];

let nameList="";

document.getElementById("characters").addEventListener("click",showCharacters);

function mapData(){
  
  const dataCharacters = data.characters;
    
  names = dataCharacters.map(({name}) => ({name}));

  console.log(names);

  
}


function showCharacters(){
  nameList=document.getElementById("main");

  names.forEach(function(data){
    const linew= document.createElement("p");  
    const contenido = document.createTextNode(data.name);
    nameList.appendChild(linew);
    nameList.appendChild(contenido);
  })

}

mapData();
