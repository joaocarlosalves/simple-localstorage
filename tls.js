// Tiny Local Storage by João Carlos Alves © 2019
// www.joaocarlosalves.com / www.cleevemorris.com

class tinyLocalStorage {
    get(what) {
        return JSON.parse(global.localStorage.getItem(what));
    }

    set(where, what) {
        global.localStorage.setItem(where, JSON.stringify(what));        
    }

    del(what) {
        global.localStorage.removeItem(what);
    }

    chk(what) {
        if(
            !global.localStorage.getItem(what) 
            || global.localStorage.getItem(what) === '' 
            || global.localStorage.getItem(what) === 'undefined' 
            || global.localStorage.getItem(what) === null
        ){ return false; } 
        return true;
    }

    clr() {
        global.localStorage.clear();        
    }
};

let TLS = new tinyLocalStorage();

module.exports = TLS;