/* eslint-disable no-unused-vars */
import { filterGender, filterHouse, sortBooks, ordercharacters, Calcular} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';


const dataCharacters = data.characters;
ordercharacters(dataCharacters);
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

//Crea la lista con los personajes

function showCharacters(data){
  document.getElementById("cajadefiltros").style.display="block";
  document.getElementById("pantallapersonajes").style.display="block";
  document.getElementById("filtrobooks").style.display="none";
  nameList.innerHTML="";

  let charactersBox="";
  let divFrontCharacters="";
  let nameCharacter="";
  let divBackCharacter="";
  let infoCharacter="";

  for(let i=0; i<data.length; i++){
    //console.log(ordercharacters);
    charactersBox =document.createElement('div');
    charactersBox.setAttribute("class","charactersBox");

    divFrontCharacters = document.createElement('div');
    divFrontCharacters.setAttribute("class","characterDesignFront");
    nameCharacter = document.createElement('p');
    nameCharacter.append(data[i].name);
    divFrontCharacters.append(nameCharacter); // para que aparezca lo creado

    divBackCharacter = document.createElement('div');
    divBackCharacter.setAttribute("class","characterDesignBack");
    infoCharacter = document.createElement('p'); 
    infoCharacter.append("Birth: " + data[i].birth + " Specie: " + data[i].species + " House: " + data[i].house + " Gender: " + data[i].gender);
    divBackCharacter.append(infoCharacter); // para que aparezca lo creado

    charactersBox.append(divFrontCharacters, divBackCharacter);
    nameList.append(charactersBox);
    //console.log(content);

  }
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


const covers = [{"id": 1, "img": "./imagenes/book1.jpg"},
  {"id": 2, "img": "./imagenes/book2.jpg"},
  {"id": 3, "img": "./imagenes/book3.jpg"},
  {"id": 4, "img": "./imagenes/book4.jpg"},
  {"id": 5, "img": "./imagenes/book5.jpg"},
  {"id": 6, "img": "./imagenes/book6.jpg"},
  {"id": 7, "img": "./imagenes/book7.jpg"},
  {"id": 8, "img": "./imagenes/book8.jpg"}];

//boton libros
document.getElementById("books").addEventListener("click",function(){
  showbooks(dataBooks, covers);
});



function showbooks(data, cover){
  nameList.innerHTML="";
  document.getElementById("cajadefiltros").style.display="block";
  document.getElementById("pantallapersonajes").style.display="none";
  document.getElementById("filtrobooks").style.display="block";
  document.getElementById("cajaHome").style.display="none";


  let booksBox="";
  let divFront="";
  let img="";
  let divBack="";
  let lineBack="";


  for(let i=0; i<covers.length; i++){

    booksBox =document.createElement('div');
    booksBox.setAttribute("class","booksBox");

    divFront = document.createElement('div');
    divFront.setAttribute("class","bookDesignFront");
    img = document.createElement('img');
    img.setAttribute("src",cover[i].img);
    divFront.append(img); // para que aparezca lo creado

    divBack = document.createElement('div');
    divBack.setAttribute("class","bookDesignBack");
    lineBack = document.createElement('p');
    lineBack.append("Release Day: " + data[i].releaseDay + " Description: " + data[i].description);
    divBack.append(lineBack); // para que aparezca lo creado

    booksBox.append(divFront, divBack);
    nameList.append(booksBox);

    //console.log(booksBox);
  }
}

//console.log(dataBooks);

const sortSelected = document.getElementById("Sort");
//console.log(filterSelected);


sortSelected.addEventListener("change", function (){
  nameList.innerHTML = "";
  showbooks(sortBooks(dataBooks, sortSelected.value),sortBooks(covers, sortSelected.value))});

//Calcular personajes
document.getElementById("Statistics").addEventListener("click",function(){
  showStatistics(dataCharacters,data);

});
function showStatistics(){
  nameList.innerHTML="";
  document.getElementById("filtrobooks").style.display="none";
  document.getElementById("cajadefiltros").style.display="none";
  document.getElementById("pantallapersonajes").style.display="none";
  document.getElementById("cajaHome").style.display="none";

  const divStatistics = document.createElement('div');
  divStatistics.setAttribute("class","divStatistics");

  const contar = filterGender(dataCharacters, "Female");
  const contarmale = filterGender(dataCharacters, "Male");
  const porcentajeMujer= Calcular(dataCharacters,contar);
  const porcentajeHombre=Calcular(dataCharacters,contarmale);

  const line = document.createElement('p');
  const content = document.createTextNode("There are a total of " + dataCharacters.length + " characters, " +contar.length + " \nare female and " + contarmale.length + " are Male." );
  const line2= document.createElement('p');
  const content2=document.createTextNode("There are " + porcentajeHombre +" % Males" + " and there are " + porcentajeMujer +" % Females");

  line.append(content); // para que aparezca lo creado
  line2.append(content2);
  divStatistics.append(line, line2);
  nameList.append(divStatistics);



}
//Diseño responsive
document.getElementById("btn-menu").addEventListener("click", mostrarmenu);
document.getElementById("back-menu").addEventListener("click", ocultarmenu);
const nav = document.getElementById("nav");
const background_menu= document.getElementById("back-menu");

function mostrarmenu(){
  nav.style.right ="0px";
  background_menu.style.display="block";

}
function ocultarmenu(){
  nav.style.right ="-250px";
  background_menu.style.display="none";

}
