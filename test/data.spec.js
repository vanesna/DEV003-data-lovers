import { filterGender, filterHouse, sortBooks, ordercharacters, Calcular} from '../src/data.js';

const dataBooks=[
  {"id": 3},
  {"id": 1},
  {"id": 4},
  {"id": 2}];

describe('filterGender', () => {
  it('is a function', () => {
    expect(typeof filterGender).toBe('function');
  });

  it('returns filtro de genero', () => {
    const dataCharacters =[{"name": "Euan Abercrombie","gender": "Male"},{"name": "Hannah Abbott's mother","gender": "Female"},{"name": "Fallen Fifty", "gender": "Female Male"},];
    const filterSelected = "Female";
    expect(filterGender(dataCharacters,filterSelected)).toEqual([{"name": "Hannah Abbott's mother","gender": "Female"}, {"name": "Fallen Fifty", "gender": "Female Male"}]);
  });
});


describe('filterHouse', () => {
  it('is a function', () => {
    expect(typeof filterHouse).toBe('function');
  });

  it('returns filtro de casas', () => {
    const dataCharacters=[{"name": "Euan Abercrombie","house": "Gryffindor"}];
    const houseSelected = "Gryffindor";
    expect(filterHouse(dataCharacters,houseSelected)).toEqual([{"name": "Euan Abercrombie","house": "Gryffindor",}]);
  });
});

describe('ordercharacters', ()=>{
  it ('is a function', ()=>{
    expect(typeof ordercharacters).toEqual('function');
  });

  it('orden de characters', () => {
    const dataCharacters=
    [{"name": "Euan Abercrombie"},
      {"name": "Agnes's son"},
      {"name": "African prince"}];
    expect(ordercharacters(dataCharacters)).toEqual([
      {"name": "African prince"},
      {"name": "Agnes's son"},
      {"name": "Euan Abercrombie"},
    ]);
  });
})

describe('sort books', () => {
  it('is a function', () => {
    expect(typeof sortBooks).toBe('function');
  });

  it('returns libros recientes', () => {
    expect(sortBooks(dataBooks, "Newest")).toEqual([{"id": 4}, {"id": 3}, {"id": 2}, {"id": 1}]);
  });
  it('returns libros antiguos', () => {
    expect(sortBooks(dataBooks, "Oldest")).toEqual([{ "id": 1}, {"id": 2}, {"id": 3}, {"id": 4}]);
  });
  it('returns libros recientes', () => {
    expect(sortBooks(dataBooks.reverse(), "Oldest")).toEqual([{ "id": 1}, {"id": 2}, {"id": 3}, {"id": 4}]);
  });
});

describe('Calcular', () => {
  it('is a function', () => {
    expect(typeof Calcular).toBe('function');
  });

  it('returns porcentaje de personajes', () => {
    const dataCharacters =["Emeric the Evil","Errol","Mark Evans"];
    const datafiltrada=["Errol"];
    expect(Calcular(dataCharacters,datafiltrada)).toEqual(33);
  });
});
