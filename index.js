var recipes = {cake: '4 tier'};

function updateObjectWithKeyAndValue(object, key, value) {
  Object.assign({}, object[key] = value);
  
  return object;
}

updateObjectWithKeyAndValue(recipes, 'Cupcakes', '4 boxes')