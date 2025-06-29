import chalk from "chalk";

const PromptSchemaMain = [
  {
    name: "select",
    description: chalk.yellow.bold("Escolha a ferramenta (1: QrCode, 2: Passwords)"),
    pattern: /^[1 - 2]+$/,
    message: chalk.red.italic("Escolha apenas entre 1 e 2"),
    required: true,
  },
];

export default PromptSchemaMain;
