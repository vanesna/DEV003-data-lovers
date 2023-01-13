// estas funciones son de ejemplo

//Filtro por género
export const filterGender = (dataCharacters,filterSelected) => {
  const filteredArray = dataCharacters.filter((charac) => charac.gender === filterSelected); 
  console.log(filteredArray);
  const newArray = dataCharacters.filter((charac) => charac.gender === "Female Male");
  console.log(newArray);
  const nuevoArray = filteredArray.concat(newArray); 
  console.log(nuevoArray);
  return nuevoArray;
  
}

//Filtro por casa de estudio
export const filterHouse = (dataCharacters,houseSelected) => {
  const nuevoArray = dataCharacters.filter((charac) => charac.house === houseSelected); 
  console.log(nuevoArray);
  return nuevoArray;
  
}

