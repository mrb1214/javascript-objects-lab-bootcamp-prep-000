var recipes= {
  eggs: "3",
  flour: "1 cup",
  vanilla: "1 tablespoon",
  butter: "1 stick",
}
function updateObjectWithKeyAndValue( object, key, value){
  return Object.assign( {}, object, {[key]: value})
}
function destructivelyUpdateObjectWithKeyAndValue (object, key, value){
  object[key]=value;
  return object
}