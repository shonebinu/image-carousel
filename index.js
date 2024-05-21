let currIndex = 0;
const slides = document.querySelectorAll(".slides img");
const prevButton = document.querySelector("button.prev");
const nextButton = document.querySelector("button.next");
const dots = document.querySelector(".dots");

window.addEventListener("DOMContentLoaded", showSlide);

setInterval(() => {
	currIndex++;
	showSlide();
}, 5000);

for (let i = 0; i < slides.length; i++) {
	const span = document.createElement("span");

	span.addEventListener("click", () => {
		currIndex = i;
		showSlide();
	});

	dots.appendChild(span);
}

prevButton.addEventListener("click", () => {
	currIndex--;
	showSlide();
});

nextButton.addEventListener("click", () => {
	currIndex++;
	showSlide();
});

function showSlide() {
	if (currIndex >= slides.length) {
		currIndex = 0;
	} else if (currIndex < 0) {
		currIndex = slides.length - 1;
	}

	prevActive = document.querySelector(".active");
	if (prevActive) {
		prevActive.classList.remove("active");
	}
	slides[currIndex].classList.add("active");
}
