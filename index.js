var recipes = {cake: '4 tier'};

function updateObjectWithKeyAndValue(object, key, value) {
  
  return Object.assign({}, object, {[key]: value});
}

updateObjectWithKeyAndValue(recipes, 'Cupcakes', '4 boxes')