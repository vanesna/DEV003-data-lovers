// estas funciones son de ejemplo

//Filtro por género
export const filterGender = (dataCharacters,filterSelected) => {
  const filteredArray = dataCharacters.filter((charac) => charac.gender === filterSelected);
  //console.log(filteredArray);
  const newArray = dataCharacters.filter((charac) => charac.gender === "Female Male");
  //console.log(newArray);
  const nuevoArray = filteredArray.concat(newArray);
  //console.log(nuevoArray);
  return nuevoArray;

}

//Filtro por casa de estudio
export const filterHouse = (dataCharacters,houseSelected) => {
  const nuevoArray = dataCharacters.filter((charac) => charac.house === houseSelected);
  //console.log(nuevoArray);
  return nuevoArray;

}
//ordenar libros
export const sortBooks = (dataBooks, sortSelected) => {
  let arraySort = [];
  if(sortSelected === "Newest"){
    arraySort =dataBooks.sort((a, b) => {
      if(a.id > b.id) { // a debe ser mayor que b
        return -1;     // a antes que b
      }
      return 1;    //b antes que a
    })}

  else if(sortSelected === "Oldest")
    arraySort =dataBooks.sort((a, b) => {
      if(a.id < b.id) { //a debe ser menor que b
        return -1;
      }
      return 1
    });
  //console.log(arraySort);
  return arraySort;
}


//ordenar personajes
export const ordercharacters = (dataCharacters) => {
  let sortArray=[];
  sortArray=dataCharacters.sort((a,b) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    //console.log(sortArray);
  });
  return sortArray
}

//calcular
export const Calcular =(dataCharacters, datafiltrada) =>{
  const porcentaje= Math.round(datafiltrada.length*100/dataCharacters.length);
  return porcentaje
};
