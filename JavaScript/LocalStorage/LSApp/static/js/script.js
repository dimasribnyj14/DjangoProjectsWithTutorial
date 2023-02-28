let copyBlock = document.querySelector('.copied');
let OnAnimation = true
function copycode(event){
    var target = event.target || event.srcElement;
    console.log(target.innerHTML)
    if (event.target.classList.value == 'code') {
        var copyTextarea = document.createElement("textarea");
        copyTextarea.style.position = "fixed";
        copyTextarea.style.opacity = "0";
        copyTextarea.textContent = target.innerHTML;
        document.body.appendChild(copyTextarea);
        copyTextarea.select();
        document.execCommand("copy");
        document.body.removeChild(copyTextarea);
        if (OnAnimation == true) {
            copyBlock.style.left = '-3%';
            OnAnimation = false
            setTimeout(offAnimation,2000);
        }
    }
}
function offAnimation(event){
    OnAnimation = true;
    copyBlock.style.transition.duration = "1s";
    copyBlock.style.left = '-100%';
}

document.addEventListener('click',copycode)