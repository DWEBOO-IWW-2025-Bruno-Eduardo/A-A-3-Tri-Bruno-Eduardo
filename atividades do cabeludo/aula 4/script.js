const conceitos = [
    prompt("1º trimestre:").toUpperCase(),
    prompt("2º trimestre:").toUpperCase(),
    prompt("3º trimestre:").toUpperCase()
];

const frequencias = [
    Number(prompt("Frequência do 1º trimestre:")),
    Number(prompt("Frequência do 2º trimestre:")),
    Number(prompt("Frequência do 3º trimestre:"))
];

function calcularConceito() {
    let somaConceito = 0;

    for (let i = 0; i < conceitos.length; i++) {
        const conc = conceitos[i];

        if (conc == "A") {
            somaConceito += 4;
        } else if (conc == "B") {
            somaConceito += 3;
        } else if (conc == "C") {
            somaConceito += 2;
        } else {
            somaConceito += 1;
        }
    }

    let media = somaConceito / 3;
    let conceitoFinal = "";

    if (media >= 3.5) {
        conceitoFinal = "A";
    } else if (media >= 2.5) {
        conceitoFinal = "B";
    } else if (media >= 1.5) {
        conceitoFinal = "C";
    } else {
        conceitoFinal = "D";
    }

    if (conceitoFinal != "D" && frequencias[0] >= 75 && frequencias[1] >= 75 && frequencias[2] >= 75) {
        console.log("Aprovado! Conceito final: " + conceitoFinal);
    } else {
        console.log("Reprovado! Conceito final: " + conceitoFinal);
    }
}

calcularConceito();