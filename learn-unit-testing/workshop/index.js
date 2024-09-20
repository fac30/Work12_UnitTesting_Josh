// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name;
}

function searchParamsToObject(queryString) {
  const params = new URLSearchParams(queryString);
  
  const result = {};
  for (const [key, value] of params.entries()) {
    result[key] = value;
  }
  
  return result;
}
