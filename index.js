let estudantes = [
    {
        nome: 'Gabriel',
        ap1: 9,
        ap2: 10
    },
    {
        nome: 'Antonio',
        ap1: 8.5,
        ap2: 7
    },
    {
        nome: 'Pedro',
        ap1: 6,
        ap2: 7
    },
    {
        nome: 'André',
        ap1: 8,
        ap2: 6.5
    }
];

const calcMedia = (est) => (est.ap1+est.ap2)/2;

for(let est of estudantes) {
    let media = calcMedia(est);
    let msg = `A média do(a) aluno(a) ${est.nome} foi ${media}\n`;
    if (media < 7) {
        msg += 'Reprovado. Tente novamente.';
    } else {
        msg += 'Aprovado! Parabéns!';
    }
    alert(msg);
}