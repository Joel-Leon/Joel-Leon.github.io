    var iterAassessment = 1;
    
    const mssgSoonAvailable = `⛔ Esta evaluación pronto estará disponible.`;
	function mssgAvailable(date, start, end) {return ` ✔️ Esta evaluación estará disponible el <b>${date}</b> a las <b>${start}</b> hasta las <b>${end}</b> Una vez acabada la evaluación podrá ver su calificación 🏅.`;};
    const mssgNotAvailable = `❌ Esta evaluación ya no está disponible. Sin embargo, ahora puede ver su calificación 🏅.`;
    const assessment = document.querySelector(".assessment");

    /* List Assessment */

    setAssessment(mssgAvailable(`24/10/22`,`9:00 a.m.`, `28/10/22.`), "https://forms.office.com/r/rsfviTx20Q");
    setAssessment(mssgAvailable(`28/10/22`,`9:00: a.m.`, `04/11/22.`), "https://forms.office.com/r/Pp16dSF6Yx");
    setAssessment(mssgAvailable(`##/##/##`,`##:## p.m.`, `##:## p.m.`), "#");
    setAssessment(mssgAvailable(`##/##/##`,`##:## p.m.`, `##:## p.m.`), "#");
    setAssessment(mssgSoonAvailable);
    setAssessment(mssgSoonAvailable);


    
    function setAssessment(mssg, lnk) {
        let assessment__block = document.createElement("DIV");
        assessment__block.classList.add("assessment__block");
        assessment__block.innerHTML = `
            <div class="assessment__number">#${iterAassessment < 10 ? ("0" + iterAassessment) : iterAassessment}</div>
            <div class="assessment__description">
                <div class="assessment__info">
                    ${mssg}
                </div>
                <div class="assessment__link">
                    ${setMssg(mssg, lnk)}
                </div>
            </div>
        `;
        assessment.appendChild(assessment__block);
        iterAassessment++;
    }

    function setMssg(type, lnk) {
        switch (type) {
            case mssgSoonAvailable: {
                return ``;
            }
            case mssgNotAvailable: {
                return `
                <a href="${lnk}" target="_blank">
                    Ver Resultados
                </a>`;
            }
            default: {
                return `
                <a href="${lnk} target="_blank">
                    Dar Examen
                </a>`;
            }
        }
    }