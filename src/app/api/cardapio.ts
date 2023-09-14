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

      if (linkElement.length > 0) {
        const href = linkElement.attr("href");

        if (href !== undefined) {
          return { success: true, href };
        } else {
          return { success: false, href: "Href não encontrado." };
        }
      } else {
        return { success: false, href: "Link não encontrado." };
      }
    }
  } catch (error) {
    return { success: false, href: "Falha ao buscar link do PDF." };
  }
}
  
function processResponse(response: any) {
  console.log('Href do link:', response.href);
}
  

export {fetchUrl}