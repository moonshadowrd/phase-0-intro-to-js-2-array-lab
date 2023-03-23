const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(ralf) {
    cats.push(ralf);
  }
  
  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }
  
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  
  function destructivelyRemoveFirstCat() {
    cats.shift();
  }
  
  function appendCat(name) {
    return [...cats, name];
  }
  
  function prependCat(jay) {
    return [jay, ...cats];
  }

  function removeLastCat() {
    return cats.slice(0, -1);
  }
  function removeLastCat() {
    return cats.slice(0, -1);
  }

  function removeLastCat() {
    return cats.slice(0, -1);
  }
  
  function removeLastCat() {
    return cats.slice(0, -1);
  }

  function removeFirstCat() {
    return cats.slice(1);
  }
  