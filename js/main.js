var myIndex = 0;
carousel();

var description = "I consider myself as a self-motivated and passionate software engineer with 5 years of industry experience. One of my goals is to become a Software Architect and other is contribute as much as I can to open-source community. To achieve my goals, I work hard at both work and home. Along with that, I spend my time with Java, Spring, Python, JavaScript, React.js and web development. Also, I have always interest in learning new technologies and tools. Along with that as you can see in this web page I spend my other time with photography :)";

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
