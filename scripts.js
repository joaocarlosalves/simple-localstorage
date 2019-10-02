import LS from './ls';

let ls = LS;

ls.clear();

let name = "John Doe";
var person = {
    "name": name,
    "adress": [
        "256, Rounded Square Avenue", 
        "New York", 
        "NY"
    ],
    "age": 36,
    "email": "john@doe.com"
};

ls.set('name', name);
ls.set('person_object', person);

console.log(ls.get('name'));

setTimeout(() => {
    if(ls.check('person_object')) {
        console.log(ls.get('person_object'));
    } else {
        console.log("Local Storage item not found");
    }
}, 1000);