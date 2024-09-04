/* 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA? */

//Resolução em JavaScript

const questao01 = () => {
    let indice = 13;
    let soma = 0;
    let k = 0;

    while (k < indice) {
        k = k + 1;
        soma = soma + k;
    }

    console.log(soma);
}

console.log("Resposta da questão 1:\n");
questao01(); //Exibirá o valor 91 no console

console.log("==========x==========x==========\n");

/* 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor 
sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 
21, 34...), escreva um programa na linguagem que desejar onde, informado um 
número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando 
se o número informado pertence ou não a sequência. */

//Resolução em JavaScript
const questao02 = (numero) => {
    let sequencia = [0, 1];

    while (sequencia[sequencia.length - 1] < numero) {
        sequencia.push(sequencia[sequencia.length - 2] + sequencia[sequencia.length - 1]);
    }
    const resposta = sequencia.includes(numero);

    if (resposta) {
        console.log("O número informado faz parte dasequencia de Fibonacci");
        console.log(`Numero informado: ${numero}`);
        console.log(`Sequencia de Fibonacci: ${sequencia}`);
        return true;
    }

    console.log("O número informado não faz parte dasequencia de Fibonacci");
    console.log(`Numero informado: ${numero}`);
    console.log(`Sequencia de Fibonacci: ${sequencia}`);
    return false
}

console.log("Resposta da questão 2:\n");
/* Cada chamada de função exibirá a mensagem informando se o numero faz parte ou
não da sequencia de Fibonacci e como prova exibirá o numero informado e a 
sequencia calculada */
questao02(8);
questao02(5);
questao02(15);
questao02(34);
questao02(87);

console.log("==========x==========x==========\n");

/* 3) Dado um vetor que guarda o valor de faturamento diário de uma 
distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à 
média mensal. */

const questao03 = () => {
    const dadosFaturamento = [
        {
            "dia": 1,
            "valor": 22174.1664
        },
        {
            "dia": 2,
            "valor": 24537.6698
        },
        {
            "dia": 3,
            "valor": 26139.6134
        },
        {
            "dia": 4,
            "valor": 0.0
        },
        {
            "dia": 5,
            "valor": 0.0
        },
        {
            "dia": 6,
            "valor": 26742.6612
        },
        {
            "dia": 7,
            "valor": 0.0
        },
        {
            "dia": 8,
            "valor": 42889.2258
        },
        {
            "dia": 9,
            "valor": 46251.174
        },
        {
            "dia": 10,
            "valor": 11191.4722
        },
        {
            "dia": 11,
            "valor": 0.0
        },
        {
            "dia": 12,
            "valor": 0.0
        },
        {
            "dia": 13,
            "valor": 3847.4823
        },
        {
            "dia": 14,
            "valor": 373.7838
        },
        {
            "dia": 15,
            "valor": 2659.7563
        },
        {
            "dia": 16,
            "valor": 48924.2448
        },
        {
            "dia": 17,
            "valor": 18419.2614
        },
        {
            "dia": 18,
            "valor": 0.0
        },
        {
            "dia": 19,
            "valor": 0.0
        },
        {
            "dia": 20,
            "valor": 35240.1826
        },
        {
            "dia": 21,
            "valor": 43829.1667
        },
        {
            "dia": 22,
            "valor": 18235.6852
        },
        {
            "dia": 23,
            "valor": 4355.0662
        },
        {
            "dia": 24,
            "valor": 13327.1025
        },
        {
            "dia": 25,
            "valor": 0.0
        },
        {
            "dia": 26,
            "valor": 0.0
        },
        {
            "dia": 27,
            "valor": 25681.8318
        },
        {
            "dia": 28,
            "valor": 1718.1221
        },
        {
            "dia": 29,
            "valor": 13220.495
        },
        {
            "dia": 30,
            "valor": 8414.61
        }
    ];

    const dadosZeradosExcluidos = dadosFaturamento.filter(obj => obj.valor == 0 ? false : obj);

    const valoresFaturados = dadosZeradosExcluidos.map(diaFaturado => diaFaturado.valor);

    const maiorFaturamento = valoresFaturados.reduce((valorAcc, valorAtual) => {
        return valorAcc > valorAtual ? valorAcc : valorAtual
    });

    const menorFaturamento = valoresFaturados.reduce((valorAcc, valorAtual) => {
        return valorAcc < valorAtual ? valorAcc : valorAtual
    });

    const mediaFaturamento = () => {
        const valorTotal = valoresFaturados.reduce((valorAcc, valorAtual) => {
            return valorAcc + valorAtual
        }, 0);
        return valorTotal / valoresFaturados.length
    }

    const dadosMaiorFaturamento = dadosFaturamento.find(obj => obj.valor == maiorFaturamento);
    const dadosMenorFaturamento = dadosFaturamento.find(obj => obj.valor == menorFaturamento);

    const mensagemMenorFaturamento = `Menor valor Faturado foi encontrado no dia 
    ${dadosMenorFaturamento.dia} onde o valor faturado foi R$ ${dadosMenorFaturamento.valor.toFixed(2)}`;

    const mensagemMaiorFaturamento = `Maior valor Faturado foi encontrado no dia 
    ${dadosMaiorFaturamento.dia} onde o valor faturado foi R$ ${dadosMaiorFaturamento.valor.toFixed(2)}`;

    const diasSuperioresMedia = dadosZeradosExcluidos.filter(obj => obj.valor > mediaFaturamento() ? obj : false);

    const mensagemMediaFaturamento = `Tivemos ${diasSuperioresMedia.length} 
    dias onde o valor de faturamento diário foi superior à média mensal, que foi 
    de R$ ${mediaFaturamento().toFixed(2)}
    `;

    console.log(`
    ${mensagemMenorFaturamento}
    ${mensagemMaiorFaturamento}
    ${mensagemMediaFaturamento}
    `);
}

console.log("Resposta da questão 3:\n");
questao03();

console.log("==========x==========x==========\n");

/* 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53
Escreva um programa na linguagem que desejar onde calcule o percentual de 
representação que cada estado teve dentro do valor total mensal da distribuidora. */

const questao04 = () => {
    const dados = [
        { estado: "SP", valor: 67836.43 },
        { estado: "RJ", valor: 36678.66 },
        { estado: "MG", valor: 29229.88 },
        { estado: "ES", valor: 27165.48 },
        { estado: "Outros", valor: 19849.53 }
    ];

    const valoresFaturados = dados.map(dado => dado.valor);
    const faturamentoTotal = valoresFaturados.reduce((valorAcc, proxValor) => {
        return valorAcc + proxValor
    }, 0);


    dados.forEach(dado => dado.percentual = `${((dado.valor * 100) / faturamentoTotal).toFixed(0)}%`);

    console.log(`
    ${dados.map(dado => `${dado.estado} teve ${dado.percentual} de representação do valor total mensal da distribuidora.\n`)}
    `);
};

console.log("Resposta da questão 4:\n");
questao04();

console.log("==========x==========x==========\n");

/* 4) 5) Escreva um programa que inverta os caracteres de um string. */

const questao05 = (string) => {
    let stringInvertida = "";

    for (let i = string.length - 1; i >= 0; i--) {
        stringInvertida += string[i];
    }

    console.log(stringInvertida);
}

console.log("Resposta da questão 5:\n");
questao05("Palavra");
questao05("Frase maior para ser invertida");