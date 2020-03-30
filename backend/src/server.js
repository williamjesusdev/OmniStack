import app from "./app";

// Importa as variaveis de ambiente .env
const { LOCALE, HOME_URL, WORK_URL, PORT } = process.env;

// Passamos a porta e endereço onde o servidor ficará ouvindo
app.listen(PORT || 3333, () => {
  console.log(
    "\x1b[34m%s\x1b[0m",
    `[running] server on http://localhost:${PORT} | http://${
      LOCALE === "HOME" ? HOME_URL : WORK_URL
    }:${PORT}`
  );
});
