// Tiny Local Storage by João Carlos Alves © 2019
// www.joaocarlosalves.com / www.cleevemorris.com

class tinyLocalStorage {
    get(what) {
        return JSON.parse(localStorage.getItem(what));
    }

    set(where, what) {
        global.localStorage.setItem(where, JSON.stringify(what));
        setInterval(() => { return true }, 100);
    }

    delete(what) {
        global.localStorage.removeItem(what);
        setInterval(() => { return true }, 100);
    }

    clear() {
        global.localStorage.clear();
        setInterval(() => { return true }, 100);
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