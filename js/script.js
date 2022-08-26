function verificarString(idInput, idErro) {
    let inString = document.getElementById(idInput);
    let string = inString.value.trim();

    if (string == "") {
        document.getElementById(idErro).classList.remove("hide");
        document.getElementById(idErro).classList.add("show");
    } else {
        document.getElementById(idErro).classList.remove("show");
        document.getElementById(idErro).classList.add("hide");
    }
}

function verificarNome(idInput, idErro) {
    let inString = document.getElementById(idInput);
    let string = inString.value.trim();

    if (string == "" || string.match(/[\d]/g)) {
        document.getElementById(idErro).classList.remove("hide");
        document.getElementById(idErro).classList.add("show");
    } else {
        document.getElementById(idErro).classList.remove("show");
        document.getElementById(idErro).classList.add("hide");
    }
}

function verificarEmail(idInput, idErro) {
    let inEmail = document.getElementById(idInput);
    let email = inEmail.value.trim();

    if (email == "" || !email.includes("@") || !email.includes(".")) {
        document.getElementById(idErro).classList.remove("hide");
        document.getElementById(idErro).classList.add("show");
    } else {
        document.getElementById(idErro).classList.remove("show");
        document.getElementById(idErro).classList.add("hide");
    }
}

function confirmarEmail(idEmailOriginal, idEmailConfirmacao, idErro) {
    let inEmail1 = document.getElementById(idEmailOriginal);
    let email1 = inEmail1.value.trim();

    let inEmail2 = document.getElementById(idEmailConfirmacao);
    let email2 = inEmail2.value.trim();

    if (email2 == "" || !email2.includes("@") || !email2.includes(".") || email2 != email1) {
        document.getElementById(idErro).classList.remove("hide");
        document.getElementById(idErro).classList.add("show");
    } else {
        document.getElementById(idErro).classList.remove("show");
        document.getElementById(idErro).classList.add("hide");
    }
}

function verificarCelular(idInput, idErro) {
    let inCelular = document.getElementById(idInput);
    let celular = inCelular.value;

    if (celular == "" || celular.length < 10) {
        document.getElementById(idErro).classList.remove("hide");
        document.getElementById(idErro).classList.add("show");
    } else {
        document.getElementById(idErro).classList.remove("show");
        document.getElementById(idErro).classList.add("hide");
    }
}

function verificarCEP(idInput, idErro) {
    let inCEP = document.getElementById(idInput);
    let cep = inCEP.value;

    if (cep == "" || cep.length != 8) {
        document.getElementById(idErro).classList.remove("hide");
        document.getElementById(idErro).classList.add("show");
    } else {
        document.getElementById(idErro).classList.remove("show");
        document.getElementById(idErro).classList.add("hide");
    }
}


function formatarNumero(idInput) {
    let inString = document.getElementById(idInput);
    let string = inString.value;

    if (string.match(/\D/g)) {
        document.getElementById(idInput).value = string.replace(/\D/g, "");
    }
}
