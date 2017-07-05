angular.module('ToDo').service('myLocalStorage', function () {

function setAnItem(key, value) {
localStorage.setItem(key, JSON.stringify(value));
}

function getAnItem(key) {
return JSON.parse(localStorage.getItem(key));
}

function deleteAnItem(key) {
localStorage.removeItem(key);
}
    
    //INTERFACE

return {
set: setAnItem,
get: getAnItem,
remove: deleteAnItem,
}

});