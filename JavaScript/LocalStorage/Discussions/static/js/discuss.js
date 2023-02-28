const name = document.querySelector(".name-author");
const post = document.querySelector('.post')
// Добавляем LocalStorage
let myStorage = window.localStorage;
function onChange() {
    if (name.value == '' && name.value == ' ') {
        console.log("nothing");
    } else {
        myStorage.setItem('name', name.value);
    }
}
// function onChangePost() {
//     if (post.innerHTML.length > 50) {
//         post.style.font.size = 'xx-large'
//     } else if (post.innerHTML.length > 100) {
//         post.style.font.size = 'x-large'
//     } else if (post.innerHTML.length > 250) {
//         post.style.font.size = 'large'
//     } else if (post.innerHTML.length > 500) {
//         post.style.font.size = 'medium'
//     } else if (post.innerHTML.length > 1000) {
//         post.style.font.size = 'small'
//     } else if (post.innerHTML.length < 50) {
//         post.style.font.size = 'xxx-large'
//     } else {
//         post.style.font.size = 'x-small'
//     }
// }
window.onload = function () {
    name.value = myStorage.getItem('name');
    // onChangePost()
}
name.addEventListener('change', onChange)