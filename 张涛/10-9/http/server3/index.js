window.onload=function(){
	var h=document.querySelector('h1');
	// console.log(h);
	h.onclick=function () {
		// console.log(this.style.color);
		if(this.style.color=="red"){
			this.style.color="blue";
		}
	    else{
	    	this.style.color="red";
	    }
	}
}

