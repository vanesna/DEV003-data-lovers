/* eslint-disable no-unused-vars */
import { filterGender, filterHouse } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';


//let allcharacters = [];
const dataCharacters = data.characters;

const nameList=document.querySelector("#main");


ocultapersonajes();

function ocultapersonajes(){
  document.getElementById("pantallapersonajes").style.display="none";
  
}


//Botón personajes
document.getElementById("characters").addEventListener("click",function(){
  showCharacters(dataCharacters);
});
//console.log(dataCharacters);



//Crea un arreglo con los personajes y sus datos
/*function mapData(){

//Crea un arreglo con los personajes y sus datos
/*function mapData(){
  allcharacters = dataCharacters.map(({name,birth,species,house, gender}) => ({name,birth,species,house, gender}));
  //verPersonajes();
  console.log(allcharacters);

}*/



//Crea la lista con los personajes
function showCharacters(data){
  document.getElementById("pantallapersonajes").style.display="block";
  
  //allcharacters.forEach(function(data){

  data.forEach((charac) => {
    const line = document.createElement('li');
    const content = document.createTextNode( "Name: " + charac.name + ", Date of birth: " + charac.birth +  ", Specie :" + charac.species +  ", House: " + charac.house + ", Gender: " + charac.gender);
    line.appendChild(content); // para que aparezca lo creado
    nameList.appendChild(line);
  });
}


//mapData();

const filterSelected = document.getElementById("gender");
//console.log(filterSelected);

filterSelected.addEventListener("change", function (){
  nameList.innerHTML = "";
  if(filterSelected.value==="Selecciona")
    showCharacters(dataCharacters);
  else
    showCharacters(filterGender(dataCharacters, filterSelected.value));

});

const houseSelected = document.getElementById("filterhouse");
//console.log(filterSelected);

houseSelected.addEventListener("change", function (){
  nameList.innerHTML = "";
  if(houseSelected.value==="Selecciona")
    showCharacters(dataCharacters);
  else
    showCharacters(filterHouse(dataCharacters, houseSelected.value));

});

