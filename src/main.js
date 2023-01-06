/* eslint-disable no-unused-vars */
import { filterGender, filterHouse } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';


const dataCharacters = data.characters;
const dataBooks = data.books;
const nameList=document.querySelector("#characterscontenido");

//boton home
document.getElementById("home").addEventListener("click",function(){
  showhome();
});
function showhome(){
  nameList.innerHTML="";
  document.getElementById("pantallapersonajes").style.display="none";
  document.getElementById("filtrobooks").style.display="none";
  document.getElementById("cajaHome").style.display="block";

}
//Botón personajes
document.getElementById("characters").addEventListener("click",function(){
  showCharacters(dataCharacters);
  document.getElementById("cajaHome").style.display="none";

});
//console.log(dataCharacters);

//Crea la lista con los personajes
function showCharacters(data){
  document.getElementById("cajadefiltros").style.display="block";
  document.getElementById("pantallapersonajes").style.display="block";
  document.getElementById("filtrobooks").style.display="none";
  nameList.innerHTML="";
  //allcharacters.forEach(function(data){

  data.forEach((charac) => {
    const line = document.createElement('li');
    const content = document.createTextNode( "Name: " + charac.name + ", Date of birth: " + charac.birth +  ", Specie :" + charac.species +  ", House: " + charac.house + ", Gender: " + charac.gender);
    line.appendChild(content); // para que aparezca lo creado
    nameList.appendChild(line);
  });
}

const filterSelected = document.getElementById("gender");
//console.log(filterSelected);

filterSelected.addEventListener("change", function (){
  nameList.innerHTML = "";
  if(filterSelected.value==="Selected")
    showCharacters(dataCharacters);
  else
    showCharacters(filterGender(dataCharacters, filterSelected.value));

});

const houseSelected = document.getElementById("filterhouse");
//console.log(filterSelected);

houseSelected.addEventListener("change", function (){
  nameList.innerHTML = "";
  if(houseSelected.value==="Selected")
    showCharacters(dataCharacters);
  else
    showCharacters(filterHouse(dataCharacters, houseSelected.value));

});

//boton libros
document.getElementById("books").addEventListener("click",function(){
  showbooks(dataBooks);
});
function showbooks(data){
  nameList.innerHTML="";
  document.getElementById("cajadefiltros").style.display="block";
  document.getElementById("pantallapersonajes").style.display="none";
  document.getElementById("filtrobooks").style.display="block";
  document.getElementById("cajaHome").style.display="none";


  data.forEach((charac) => {
    const line = document.createElement('li');
    const content = document.createTextNode( "Title: " + charac.title + ", ReleaseDay: " + charac.releaseDay );
    line.appendChild(content); // para que aparezca lo creado
    nameList.appendChild(line);
  });
}


