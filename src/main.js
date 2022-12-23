/* eslint-disable no-unused-vars */
//import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);

/*function characters(){
  posActual = 0;

  document.getElementById("pantallapersonajes").style.display = "block";
  document.getElementById("pantalladelibros").style.display = "none";
}
*/
ocultapersonajes();
document.getElementById("characters").addEventListener("click",aparecepersonajes);

function ocultapersonajes(){
  document.getElementById("pantallapersonajes").style.display="none";
}
function aparecepersonajes(){
  document.getElementById("pantallapersonajes").style.display="block";
}
let allcharacters = [];

let nameList="";

document.getElementById("characters").addEventListener("click",showCharacters);
function mapData(){

  const dataCharacters = data.characters;

  allcharacters = dataCharacters.map(({name,birth,species,house, gender}) => ({name,birth,species,house, gender}));

  //console.log(names);

}
// seccion de personajes

function showCharacters(){
  nameList=document.getElementById("main");

  allcharacters.forEach(function(data){
    const linew= document.createElement("p");
    const contenido = document.createTextNode( "Name: " + data.name + " Date of birth: " + data.birth +  " Specie :" + data.species +  " House: " + data.house + " Gender " + data.gender);
    nameList.appendChild(linew);
    nameList.appendChild(contenido);
  })

}

mapData();

document.getElementById("gender").addEventListener("change", gendermale);
const genderm = allcharacters.filter(function(males) {
  return males.gender === "Male";

})
let maleList="";
//console.log(genderm);
function gendermale (){
  maleList=document.getElementById("main");

  allcharacters.forEach(function(data){
    const linew= document.createElement("p");
    const contenido = document.createTextNode( "Name: " + data.name +  " Specie :" + data.species +  " House: " + data.house + " Gender " + data.gender);
    maleList.appendChild(linew);
    maleList.appendChild(contenido);
  })

}
gendermale();
