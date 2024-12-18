function scrolToMiddle(){
var middle =document.body.scrollHeight/2;
window.scrollTo({
    top:middle,
    behavior:'smooth'
});
}
function scrollToEnd() {
    var end = document.body.scrollHeight;
    window.scrollTo({
        top: end,
        behavior: 'smooth'
    });
}
const pass_field = document.querySelector(".pass-key");
const showBtn = document.querySelector(".show");
showBtn.addEventListener("click"),function(){
    if(pass_field.type="password"){

        pass_field.type="text";
        showBtn.textContent="اخفاء";
        showBtn.style.color="#3498db";
    }else{
        pass_field.type="password";
        showBtn.textContent="ظهور";
        showBtn.style.color="#222";
    }
}

