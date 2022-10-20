window.onload = () => {
	const msjNotAvailable = `❌ Esta evaluación ya no está disponible. Sin embargo, ahora puede ver su calificación 🏅.`;
	let date = `##/##/##`;
	let start = `##:## p.m.`;
	let end = `##:## p.m.`;
	function msjAvailable(date, start, end) {
		return ` ✔️ Esta evaluación estará disponible el <b>${date}</b> a las <b>${start}</b> hasta las <b>${end}</b> Una vez acabada la evaluación podrá ver su calificación 🏅.`;
	}
	const msjSoonAvailable = `⛔ Esta evaluación pronto estará disponible.`;

	const mssg__assessment = document.querySelectorAll(".mssg__assessment");
	const nmbr__assessment = document.querySelectorAll(".nmbr__assessment")
	
	mssg__assessment[0].innerHTML = msjAvailable(date, start, end);
	mssg__assessment[1].innerHTML = msjAvailable(date, start, end);

	for (let i = 2; i < mssg__assessment.length; i++) {
		mssg__assessment[i].innerHTML = msjSoonAvailable;
	}

}