const name = document.querySelector(".name-author");
// Добавляем LocalStorage
let myStorage = window.localStorage;
function onChange(){
    if (name.value == '' && name.value == ' ') {
        console.log("nothing");
    }else{
        myStorage.setItem('name',name.value);
    }
}
window.onload = function () {
    name.value = myStorage.getItem('name');
}
name.addEventListener('change',onChange)