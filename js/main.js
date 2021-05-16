var myIndex = 0;
carousel();

var description = "I am a self-motivated software engineer with 7 years of industry experience. I always look for new challenges and environments to grow both personally and professionally. Being a software engineer has always been my dream job, so I am truly passionate about it. As I possess 7 years of experience I have lots to learn and improve, but I can guarantee my determination and professionalism. I am a quick learner and I can adapt to any situation. I believe learning and exploring new things only happen when you are out of your comfort zone so working in a challenging workplace will make me stay away from my comfort zone. That is the most important thing what I really excited about. And my life philosophy is continuous development of myself so every day I try to be better than yesterday. Along with that as you can see in this web page I spend my other time with photography :)";

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
