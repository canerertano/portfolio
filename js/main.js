var myIndex = 0;
carousel();

var description = "I’m a self-motivated and passionate software developer with 3+ years of industry experience. I’m currently in the J2EE world as a full time worker. Alongside of working time I spend my remaining time with Python and web development. I always have interest to learning new technologies and tools. Also as you can see in this web page I spend my other time with photography :)";

document.getElementById("desc-text").innerHTML  = description;
document.getElementById("desc-text2").innerHTML  = description;

function carousel() {
	var x = document.getElementsByClassName('carouselImage');

	for (var i = 0; i < x.length; i++) {
	   x[i].style.display = "none";
	}

	myIndex++;

	if (myIndex > x.length) {
		myIndex = 1
	}

	x[myIndex-1].style.display = "block";

	setTimeout(carousel, 6000);
}