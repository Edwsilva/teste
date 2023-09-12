import axios from "axios";
import { load } from "cheerio";

const fetchUrl = async () => {
  const url = "https://educacao.prefeitura.rio/cardapio/";

  try {
    const response = await axios.get(url);

    if (response.status === 200) {
      const html = response.data;
      const p = load(html);

      const linkText = "Plano Alimentar - Cardápio da Semana";
      const linkElement = p(`a:contains("${linkText}")`);
      console.log("ANTES IF");

      if (linkElement.length > 0) {
        const href = linkElement.attr("href");

        if (href !== undefined) {
          console.log("IF HREF", href);
          return { success: true, href };
        } else {
          console.log("Href não encontrado");
          return { success: false, href: "Href não encontrado." };
        }
      } else {
        console.log("Link não encontrado");
        return { success: false, href: "Link não encontrado." };
      }
    }
  } catch (error) {
    console.error("Falha ao buscar link do PDF:", error);
    return { success: false, href: "Falha ao buscar link do PDF." };
  }

  // Return a default value if none of the conditions are met
  return { success: false, href: "Não foi possível obter o link do PDF." };
};

export { fetchUrl };