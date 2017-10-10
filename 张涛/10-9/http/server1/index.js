var tit = document.querySelector("h1");
console.log(tit);
tit.onclick = function(){
    this.style.color='deeppink';
}
tit.ondblclick = function(){
    this.style.color='cyan';
}