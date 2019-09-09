import Person from "./modules/DataObject.js";

//IIFE - Immedietly Invoced Function Expression 

(() => {
    console.log('fired!')

    console.log(Person); 

    debugger;
})();