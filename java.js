function RefreshPX() {
    let csuszka = document.getElementById("border_width");
    let kijelzo = document.getElementById("px");
    kijelzo.textContent = csuszka.value + " px";
}

function AddTable() {
    let sorok = document.getElementById("rows").value;
    let oszlopok = document.getElementById("columns").value;
    let vastagsag = document.getElementById("border_width").value;
    let osszezarva = document.getElementById("collapse").checked;
    let kellKiemeles = document.getElementById("kiemeles").checked;
    let tartaly = document.getElementById("container");

    let tabla = document.createElement("table");

    if (osszezarva) {
        tabla.style.borderCollapse = "collapse";
    }

    for (let i = 0; i < sorok; i++) {
        let ujSor = document.createElement("tr");

        for (let j = 0; j < oszlopok; j++) {
            let cella;
            
            if (kellKiemeles && (i === 0 || j === 0)) {
                cella = document.createElement("th");
            } else {
                cella = document.createElement("td");
            }

            let szam = Math.floor(Math.random() * 9000) + 1000;
            cella.textContent = szam;

            cella.style.border = vastagsag + "px solid black";
            
            ujSor.appendChild(cella);
        }
        tabla.appendChild(ujSor);
    }

    tartaly.appendChild(tabla);
    tartaly.appendChild(document.createElement("hr"));
}

function Torles() {
    document.getElementById("container").innerHTML = "";
}
