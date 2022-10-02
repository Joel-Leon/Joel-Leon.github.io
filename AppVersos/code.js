var wallpaperCSS = [];

window.onload = ()=> {
	const section = document.querySelectorAll(".section");
	const wallpaper = document.querySelector(".wallpaper");

	const square__content = document.querySelector(".square__content");
	const circle__content = document.querySelector(".circle__content");
	const square__verse = document.querySelector(".square__verse");
	const square__quote = document.querySelector(".square__quote");
	const sectionDiv = document.querySelectorAll(".section__div");
	const buttons__container = document.querySelectorAll(".buttons__container");
	const FP__buttons = document.querySelectorAll(".buttons__square");
	const buttons__img = document.querySelectorAll(".buttons__img");
	const CF__verse = document.querySelector(".content-form__verse");
	const CF__quote = document.querySelector(".content-form__quote");
	const CF__url = document.querySelector(".content-form__url");
	const CF__buttons = document.querySelectorAll(".content-form__button");
	const CF__img = document.querySelectorAll(".content-form__img");


	changeOnResizeOnload();
	window.addEventListener('resize', ()=> {changeOnResizeOnload()});

	// Animation
	function activeAnimation(element) {
		element.style.animationPlayState = "running";
		setTimeout(()=> {
			element.style.animationPlayState = "paused";
		},600);
	}

	// Buttons Format and Position
	sectionDiv[0].addEventListener("click", () => {
		if (document.documentElement.scrollWidth < 800) {
			buttons__container[0].style.visibility = "visible";
			buttons__container[1].style.visibility = "hidden";
		}
	});

	sectionDiv[1].addEventListener("click", () => {
		if (document.documentElement.scrollWidth < 800) {
			buttons__container[1].style.visibility = "visible";
			buttons__container[0].style.visibility = "hidden";
		}
	});

	// Buttons Format
	FP__buttons[0].addEventListener("click", () => {
		activeAnimation(buttons__img[0]);

		addAndReplaceClass(square__verse, "frmt", "SWBG");
		addAndReplaceClass(square__quote, "frmt", "SWBG");

		addRemoveInCircle(false);
	});
	FP__buttons[1].addEventListener("click", () => {
		activeAnimation(buttons__img[1]);

		addAndReplaceClass(square__verse, "frmt", "SWOBG");
		addAndReplaceClass(square__quote, "frmt", "SWOBG");

		addRemoveInCircle(false);
	});
	FP__buttons[2].addEventListener("click", () => {
		activeAnimation(buttons__img[2]);

		addRemoveInCircle(true);

		addAndReplaceClass(square__verse, "frmt", "CWBG");
		addAndReplaceClass(square__quote, "frmt", "CWBG");
	});
	FP__buttons[3].addEventListener("click", () => {
		activeAnimation(buttons__img[3]);

		addRemoveInCircle(true);

		addAndReplaceClass(square__verse, "frmt", "CWOBG");
		addAndReplaceClass(square__quote, "frmt", "CWOBG");
	});

	// Buttons Position
	FP__buttons[4].addEventListener("click", () => {
		activeAnimation(buttons__img[4]);

		if (circle__content.classList.contains("circle__content--default")) {
			addAndReplaceClass(circle__content, "pstn", "compress");
			addAndReplaceClass(square__verse, "pstn", "compress");
		}
		addAndReplaceClass(square__content, "pstn", "left");
	});
	FP__buttons[5].addEventListener("click", () => {
		activeAnimation(buttons__img[5]);

		if (circle__content.classList.contains("circle__content--default")) {
			addAndReplaceClass(circle__content, "pstn", "expand");
			addAndReplaceClass(square__verse, "pstn", "expand");
		}
		addAndReplaceClass(square__content, "pstn", "expand");
	});
	FP__buttons[6].addEventListener("click", () => {
		activeAnimation(buttons__img[6]);

		if (circle__content.classList.contains("circle__content--default")) {
			addAndReplaceClass(circle__content, "pstn", "compress");
			addAndReplaceClass(square__verse, "pstn", "compress");
		}
		addAndReplaceClass(square__content, "pstn", "right");
	});
	FP__buttons[7].addEventListener("click", () => {
		activeAnimation(buttons__img[7]);

		if (circle__content.classList.contains("circle__content--default")) {
			addAndReplaceClass(circle__content, "pstn", "compress");
			addAndReplaceClass(square__verse, "pstn", "compress");
		}
		addAndReplaceClass(square__content, "pstn", "center");
	});

	//

	function addAndReplaceClass(element, change, type) {
		// element--change-type
		let auxItem, item;
		for (let i = 0; i < element.classList.length; i++) {
				if (element.classList.item(i).includes(change)) {
				auxItem = element.classList.item(i);
			}
		}
		type = `${element.classList.item(0)}--${change}-${type}`;
		element.classList.replace(auxItem, type);
	}

	function addRemoveInCircle(action){
		if (action) {
			circle__content.classList.add("circle__content--default");
			if (circle__content.classList.item(3) == null) {
				if (square__content.classList.contains("square__content--pstn-expand")) {
					circle__content.classList.add("circle__content--pstn-expand");
					square__verse.classList.add("square__verse--pstn-expand");
				} else {
					circle__content.classList.add("circle__content--pstn-compress");
					square__verse.classList.add("square__verse--pstn-compress");
				}
			}
		} else {
			/* default values*/
			circle__content.classList.value = 'circle__content';
			square__verse.classList.remove("square__verse--pstn-expand","square__verse--pstn-compress");
			
		}
		
	}

	// Buttons Verse, quote, and link
	CF__buttons[0].addEventListener("click", ()=> {
		activeAnimation(CF__img[0]);

		if (CF__verse.value != "") {
			square__verse.textContent = CF__verse.value; 
		} else {
			alert("Debe ingresar un versículo, por favor.");
		}
	});

	CF__buttons[1].addEventListener("click", ()=> {
		activeAnimation(CF__img[1]);

		if (CF__quote.value != "") {
			square__quote.textContent = CF__quote.value; 
		} else {
			alert("Debe ingresar una cita, por favor.");
		}
	});

	CF__buttons[2].addEventListener("click", ()=> {
		activeAnimation(CF__img[2]);

		if (CF__url.value != "") {
			wallpaperCSS[1] = `--imgURL: url(${CF__url.value});`
			wallpaper.style = wallpaperCSS[0] + wallpaperCSS[1];
		} else {
			alert("Debe ingresar un enlace, por favor.");
		}
	});

	function changeOnResizeOnload() {
		console.log(section[1].clientWidth);
		changeInSecondSection();
		changeInButtonsFP();
		changeInQuote();
	}

	function changeInSecondSection() {
		wallpaperCSS[0] = `--wallpaper__WH: ${section[1].clientWidth}px;`;
		if (wallpaperCSS[1] == undefined) {
			wallpaper.style = wallpaperCSS[0];
		} else {
			wallpaper.style = wallpaperCSS[0] + wallpaperCSS[1];
		}
	}

	function changeInButtonsFP() {
		if (document.documentElement.scrollWidth >= 800) {
			buttons__container[0].style.visibility = "visible";
			buttons__container[1].style.visibility = "visible";
		}
	}

	function changeInQuote() {
		console.log(square__quote.clientHeight + "px");
		square__quote.style = `--square__quote__HT: ${square__quote.clientHeight}px;`;
	}
}



// Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.