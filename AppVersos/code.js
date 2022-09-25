var wallpaperCSS = [];

window.onload = ()=> {
	let section = document.querySelectorAll(".section");
	let wallpaper = document.querySelector(".wallpaper");

	let square__verse = document.querySelector(".square__verse");
	let square__quote = document.querySelector(".square__quote");
	let sectionDiv = document.querySelectorAll(".section__div");
	let buttons__container = document.querySelectorAll(".buttons__container");
	let FP__buttons = document.querySelectorAll(".buttons__square");
	let CF__verse = document.querySelector(".content-form__verse");
	let CF__quote = document.querySelector(".content-form__quote");
	let CF__url = document.querySelector(".content-form__url");
	let CF__buttons = document.querySelectorAll(".content-form__button");


	resizeSquare(wallpaper, section, buttons__container);
	window.addEventListener('resize', ()=> {resizeSquare(wallpaper, section, buttons__container);});

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
		square__verse.classList.add("square__verse--SWBG");
		square__quote.classList.add("square__quote--SWBG");
		square__verse.classList.remove("square__verse--CWBG");
		square__quote.classList.remove("square__quote--CWBG");
	});
	FP__buttons[1].addEventListener("click", () => {
		square__verse.classList.remove("square__verse--SWBG");
		square__quote.classList.remove("square__quote--SWBG")
	});
	FP__buttons[2].addEventListener("click", () => {
		square__verse.classList.add("square__verse--CWBG");
		square__quote.classList.add("square__quote--CWBG");
		square__verse.classList.remove("square__verse--SWBG");
		square__quote.classList.remove("square__quote--SWBG");
	});
	FP__buttons[3].addEventListener("click", () => {
		square__verse.classList.remove("square__verse--SWBG");
		square__quote.classList.remove("square__quote--SWBG");
	});

	// Buttons Position
	FP__buttons[4].addEventListener("click", () => {
		console.log("HOLA MUNDO");
	});
	FP__buttons[5].addEventListener("click", () => {
		console.log("HOLA MUNDO");
	});
	FP__buttons[6].addEventListener("click", () => {
		console.log("HOLA MUNDO");
	});
	FP__buttons[7].addEventListener("click", () => {
		console.log("HOLA MUNDO");
	});


	// Buttons Verse, quote, and link
	CF__buttons[0].addEventListener("click", ()=> {
		if (CF__verse.value != "") {
			square__verse.textContent = CF__verse.value; 
		} else {
			alert("Debe ingresar un versículo, por favor.");
		}
	});

	CF__buttons[1].addEventListener("click", ()=> {
		if (CF__quote.value != "") {
			square__quote.textContent = CF__quote.value; 
		} else {
			alert("Debe ingresar una cita, por favor.");
		}
	});

	CF__buttons[2].addEventListener("click", ()=> {
		if (CF__url.value != "") {
			wallpaperCSS[1] = `--imgURL: url(${CF__url.value});`
			wallpaper.style = wallpaperCSS[0] + wallpaperCSS[1];
		} else {
			alert("Debe ingresar un enlace, por favor.");
		}
	});

}

function resizeSquare(wllppr, sctn, btnContainer) {
	wallpaperCSS[0] = `--wallpaper__WH: ${sctn[1].clientWidth}px;`;
	if (wallpaperCSS[1] == undefined) {
		wllppr.style = wallpaperCSS[0];
	} else {
		wllppr.style = wallpaperCSS[0] + wallpaperCSS[1];
	}

	if (document.documentElement.scrollWidth >= 800) {
		btnContainer[0].style.visibility = "visible";
		btnContainer[1].style.visibility = "visible";
	}
	console.log(sctn[1].clientWidth);
}

// Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito, para que todo aquel que en él cree, no se pierda, mas tenga vida eterna.