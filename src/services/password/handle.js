import permittedCharacters from "./utils/permitted-characters.js";

async function handle() {
  let password = "";

  const characters = await permittedCharacters();
  const passwordLength = parseInt(process.env.PASSWORD_LENGTH);

  if (characters.length === 0) {
    throw new Error("Nenhum tipo de caractere permitido foi selecionado no .env.");
  }

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password += characters[index];
  }

  return password;
}

export default handle;
