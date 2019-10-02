"use strict";

let LS = () => {
    LS.prototype.get = (what) => {
        return JSON.parse(localStorage.getItem(what));
    }

    LS.prototype.set = (where, what) => {
        localStorage.setItem(where, JSON.stringify(what));
        setInterval(() => { return true }, 100);
    }

    LS.prototype.delete = (what) => {
        localStorage.removeItem(what);
        setInterval(() => { return true }, 100);
    }

    LS.prototype.clear = () => {
        localStorage.clear();
        setInterval(() => { return true }, 100);
    }

    LS.prototype.check = (what) => {
        if(
            !localStorage.getItem(what) 
            || localStorage.getItem(what) === '' 
            || localStorage.getItem(what) === 'undefined' 
            || localStorage.getItem(what) === null
        ){ return false; } 
        return true;
    }
};

module.exports = new LS;