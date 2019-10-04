// Tiny Local Storage by João Carlos Alves © 2019
// www.joaocarlosalves.com / www.cleevemorris.com

class tinyLocalStorage {
    get(what) {
        return JSON.parse(localStorage.getItem(what));
    }

    set(where, what) {
        global.localStorage.setItem(where, JSON.stringify(what));        
    }

    delete(what) {
        global.localStorage.removeItem(what);
    }

    clear() {
        global.localStorage.clear();        
    }

    check(what) {
        if(
            !global.localStorage.getItem(what) 
            || global.localStorage.getItem(what) === '' 
            || global.localStorage.getItem(what) === 'undefined' 
            || global.localStorage.getItem(what) === null
        ){ return false; } 
        return true;
    }
};

let TLS = new tinyLocalStorage();

module.exports = TLS;