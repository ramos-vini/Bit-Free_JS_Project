function iniciarQuiz() {
    document.getElementById("quiz").classList.remove("hide");
    document.getElementById("quiz").classList.add("show");
}

let gabarito = ["b", "a", "d", "a"];

let respostas = ["0", "0", "0", "0"];

let contAcertos = 0;

function selecionarOpcao(q, op) {

    switch (q) {
        case "1": {
            respostas[0] = op;
            break;
        }
        case "2": {
            respostas[1] = op;
            break;
        }
        case "3": {
            respostas[2] = op;
            break;
        }
        case "4": {
            respostas[3] = op;
            break;
        }

        default:
            break;
    }
}

function mudarCores(op, alt1, alt2, alt3) {
    document.getElementById(op).classList.add("opSelecionada");
    document.getElementById(alt1).classList.remove("opSelecionada");
    document.getElementById(alt2).classList.remove("opSelecionada");
    document.getElementById(alt3).classList.remove("opSelecionada");
}

function mostrarResultado() {
    if (respostas.includes("0")) {
        alert("Selecione uma alternativa para todas as questões antes de ver o seu resultado! ¯\\_(ツ)_/¯");
        return;
    }
    for (let i = 0; i < respostas.length; i++) {
        if (respostas[i] == gabarito[i]) {
            contAcertos++;
        }
    }


    document.getElementById("quiz").classList.remove("show");
    document.getElementById("quiz").classList.add("hide");

    document.getElementById("divCover").classList.remove("show");
    document.getElementById("divCover").classList.add("hide");


    if (contAcertos == 4) {
        document.getElementById("outh1").innerHTML = "Sensacional!"
    } else {
        if (contAcertos == 3) {
            document.getElementById("outh1").innerHTML = "Parabéns!"
        } else {
            if (contAcertos == 2) {
                document.getElementById("outh1").innerHTML = "Quase lá!"
            } else {
                document.getElementById("outh1").innerHTML = "Continue tentando!"
            }
        }
    }

    document.getElementById("outh3").innerHTML = "Você Acertou <b>" + contAcertos + "/4</b> questões"


    document.getElementById("containerResultado").classList.remove("hide");
    document.getElementById("containerResultado").classList.add("show");
}

function verRespostas() {
    document.getElementById("gabarito").classList.remove("hide");
    document.getElementById("gabarito").classList.add("show");

    document.getElementById("btGabarito").classList.add("hide");
}

function reiniciarQuiz() {
    location.reload();
}