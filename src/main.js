/* eslint-disable no-unused-vars */
import { filterGender } from './data.js';
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

let allcharacters = [];

let nameList=""; 

ocultapersonajes();

function ocultapersonajes(){
  document.getElementById("pantallapersonajes").style.display="none";
}

document.getElementById("characters").addEventListener("click",showCharacters);

function mapData(){

  const dataCharacters = data.characters;

  allcharacters = dataCharacters.map(({name,birth,species,house, gender}) => ({name,birth,species,house, gender}));

  //console.log(names);

}



function showCharacters(){
  document.getElementById("pantallapersonajes").style.display="block";

  nameList=document.querySelector("#main");

  allcharacters.forEach(function(data){
    //document.querySelector("#main").innerHTML+"<main>${nameList}</main>";

    const linew= document.createElement("p");
    const contenido = document.createTextNode( "Name: " + data.name + " Date of birth: " + data.birth +  " Specie :" + data.species +  " House: " + data.house + " Gender " + data.gender);
    nameList.appendChild(linew); 
    nameList.appendChild(contenido);
    //linew.appendChild(contenido)
  })

}

mapData();
//filterGender(allcharacters);

const filterSelected = document.getElementById("gender");
//console.log(filterSelected);

filterSelected.addEventListener("change", function (){
  nameList.innerHTML = "";
  filterGender(allcharacters, filterSelected.value);
  showResults(filterGender);
  
});

function showResults(nuevoArray){
  //document.getElementById("pantallapersonajes").style.display="none";

  nameList=document.getElementById("main");

  nuevoArray.forEach(function(data){
    const linew= document.createElement("p");
    const contenido = document.createTextNode( "Name: " + data.name + " Date of birth: " + data.birth +  " Specie :" + data.species +  " House: " + data.house + " Gender " + data.gender);
    nameList.appendChild(linew);
    nameList.appendChild(contenido);
  })

}
