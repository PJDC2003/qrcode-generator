import chalk from "chalk";

const mainPrompt = [
    {
        name: "select",
        description: chalk.yellow("Escolha a ferramenta 1) QRCODE ou 2) PASSWORD"),
        pattern: /^[1-2]+$/,     // faz com o usuario só possa escolher a opção (escrever) 1 ou 2 --> regex
        message: chalk.red("Escolha apenas entre 1 e 2"), // mensagem de erro caso o usuario não escolha 1 ou 2
        required: true,
    },
];    // arquivo de configuração

export default mainPrompt