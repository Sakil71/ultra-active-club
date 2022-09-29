// use local storage to manage time data
const addToDb = id =>{
    let setTimeToLocalStorage = {};

    //get the time from local storage
    const storedCart = localStorage.getItem('time');
    if(storedCart){
        setTimeToLocalStorage = JSON.parse(storedCart);
    }

    // add quantity
    const quantity = setTimeToLocalStorage[id];
    if(quantity){
        const newQuantity = quantity + 1;
        setTimeToLocalStorage[id] = newQuantity;
    }
    else{
        setTimeToLocalStorage[id] = 1;
    }
    localStorage.setItem('time', JSON.stringify(setTimeToLocalStorage));
}

export {
    addToDb,
}