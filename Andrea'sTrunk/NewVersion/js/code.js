    var iterBlank = 0, iterImgFolder = 0;

    const section__content = document.querySelectorAll(".section__content");
    const folder = document.querySelector(".folder");


    /* List Links */
    nameLink("Meraki", "https://beacons.ai/merakioficial", "link");
    nameLink("Colección Atlas", "https://drive.google.com/drive/folders/17At8m6UwpyqVTG39QSHH_ho-wAoGbqLF?usp=sharing", "link");
    nameLink("Colección Manhattan", "https://drive.google.com/drive/mobile/folders/1808lwft25zM3myYCWelEsgBHq0BTjJ5H?usp=sharing", "link");
    nameLink("Sin colocar nombre", "https://mega.nz/folder/mxZzFagK#xVbCjYiIQJuKp8wO09iC4A", "link");
    nameLink("Megapack", "https://drive.google.com/drive/folders/1yJUCYwSVxkdA4BUXtgQVwDl-26bfU8dc?usp=sharing", "link");
    nameLink("134 libros - MIR", "https://drive.google.com/drive/folders/119-dBJ7phe9XOkBs5dB5NrHDu_EvWB00", "link");
    nameLink("Biblioteca Preuniversitaria", "https://drive.google.com/drive/folders/1jPFVf9JqA5gRxgDrVTC_mdnh7xOhPQO2?usp=sharing", "link");
    nameLink("Sin colocar nombre", "https://mega.nz/folder/rl1EUZpA#7hjNkcDyi53jQ8AJtghqnQ", "link");

    /* List PDF*/
    nameLink("PDF#01", "Excretor", "pdf");
    nameLink("PDF#02", "Coquito Clasico I", "pdf");
    nameLink("PDF#03", "1_4913517808681222377", "pdf");

    /* List Folder*/
    namePasswordLink("Academia Thales 📚", "Contraseña: 0220-NYT", "https://1drv.ms/u/s!Aq-7NVDS5_yUv0vDWRYKBHIjt2eE?e=8WNwFc");
    namePasswordLink("Academia Thales Medicina 🩺", "Contraseña: 20.02-11.09-02.12-12.11", "https://1drv.ms/f/s!Aq-7NVDS5_yUwRFoD04mvhwevllc");
    namePasswordLink("Thales Medicina - Nuevo 🩺", "Contraseña: 0220-NYT", "https://1drv.ms/u/s!Aq-7NVDS5_yU-E7cdiLxKhY31v29?e=McoYO0");
    namePasswordLink("Espacio Libre 📥", "Contraseña: 0220-NYT", "https://1drv.ms/u/s!Aq-7NVDS5_yU7UyMcgtTRespsXL4?e=WNr5sP");
    
    function nameLink(nm, lnk, tp) {
        let section__row = document.createElement("DIV");
        section__row.classList.add("section__row");
        section__row.innerHTML = `
            <input class="section__column nm__${tp}" type="text" value="${nm}" readonly>
            <a class="section__column" href="${tp == "pdf" ? ("pdf/" + lnk + ".pdf"):lnk}" target="_BLANK${iterBlank}">
                <input class="lnk__${tp}" type="text" value="${lnk}" readonly>
            </a>
        `;
        if (tp == "link") {
            section__content[0].appendChild(section__row);
        } else if (tp == "pdf"){
            section__content[1].appendChild(section__row);
        }
        iterBlank++;
    }

    function namePasswordLink(nm, psswrd, lnk) {
        let folder__block = document.createElement("DIV");
        folder__block.classList.add("folder__block");
        folder__block.innerHTML = `
            <a class="folder__a" href="${lnk}" target="_BLANK${iterBlank}">
                <img class="folder__img" src="img/folder${iterImgFolder}.png">
                <div class="folder__description">
                    <div class="folder__name">${nm}</div>
                    <div class="folder__password">${psswrd}</div>
                </div>
            </a>
        `;
        folder.appendChild(folder__block);
        iterBlank++;
        iterImgFolder++;
    }


