let alunos = [
    { nome: "Rafael Cardoso", descricao: "CTO do Banco Inovar", src: "../assets/img/aluno_rafael.jpg" },
    { nome: "Clara Malibu", descricao: "Desenvolvedora na Rocket Growth", src: "../assets/img/aluna_clara.jpg" },
    { nome: "Leandro Boligni", descricao: "Co-Fundador da Yellow Shark", src: "../assets/img/aluno_leandro.jpg" },
    { nome: "Monique Chaves", descricao: "Cientista de Dados na Fundação Tecnolivre", src: "../assets/img/aluna_monique.jpg" },
    { nome: "Pedro Hartmann", descricao: "Engenheiro de Software na Platipus", src: "../assets/img/aluno_pedro.jpg" },
    { nome: "Thomas Gontijo", descricao: "Pentester na Omega Corporation", src: "../assets/img/aluno_thomas.jpg" },
    { nome: "Wellington Silva", descricao: "Analista de Sistemas na Brasil Seguradora", src: "../assets/img/aluno_wellington.jpg" },
    { nome: "Simone Machado", descricao: "CEO da Multitech", src: "../assets/img/aluna_simone.jpg" }
];

let indexImg = [0, 1, 2, 3];

function avancarCarrosel() {
    for (let i = 0; i < indexImg.length; i++) {
        indexImg[i]++;

        if (indexImg[i] == 8) {
            indexImg[i] = 0;
        }
    }
    exibirCarrossel();
}

function recuarCarrosel() {
    for (let i = 0; i < indexImg.length; i++) {
        indexImg[i]--;

        if (indexImg[i] == -1) {
            indexImg[i] = 7;
        }
    }
    exibirCarrossel();
}

function exibirCarrossel() {
    document.getElementById("img1").src = alunos[indexImg[0]].src;
    document.getElementById("nome1").innerHTML = alunos[indexImg[0]].nome;
    document.getElementById("descricao1").innerHTML = alunos[indexImg[0]].descricao;

    document.getElementById("img2").src = alunos[indexImg[1]].src;
    document.getElementById("nome2").innerHTML = alunos[indexImg[1]].nome;
    document.getElementById("descricao2").innerHTML = alunos[indexImg[1]].descricao;

    document.getElementById("img3").src = alunos[indexImg[2]].src;
    document.getElementById("nome3").innerHTML = alunos[indexImg[2]].nome;
    document.getElementById("descricao3").innerHTML = alunos[indexImg[2]].descricao;

    document.getElementById("img4").src = alunos[indexImg[3]].src;
    document.getElementById("nome4").innerHTML = alunos[indexImg[3]].nome;
    document.getElementById("descricao4").innerHTML = alunos[indexImg[3]].descricao;
}