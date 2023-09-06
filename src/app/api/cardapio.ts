import axios from "axios";
import {load} from "cheerio";
import NodeCache from 'node-cache';

const fetchUrl = async () => {  
  // Configure o cache com um tempo de expiração, por exemplo, 1 hora (3600 segundos)
  const cache = new NodeCache({ stdTTL: 3600 });
  
  const url = 'https://educacao.prefeitura.rio/cardapio/';
  
  // Verifique se a resposta está no cache
  const cachedResponse = cache.get(url);
  
  if (cachedResponse) {
    // Se a resposta estiver em cache, use-a
    console.log('Usando resposta em cache:');
    processResponse(cachedResponse);
  } else {
    // Se a resposta não estiver em cache, faça uma solicitação HTTP e coloque-a em cache
    axios.get(url)
      .then(response => {
        if (response.status === 200) {
          const html = response.data;
          const $ = load(html);
  
          const linkText = 'Plano Alimentar - Cardápio da Semana';
          const linkElement = $(`a:contains("${linkText}")`);
  
          if (linkElement.length > 0) {
            const href = linkElement.attr('href');
  
            if (href) {
              const cachedResponse = { href };
              cache.set(url, cachedResponse);
              processResponse(cachedResponse);
            } else {
              console.log('Href não encontrado');
            }
          } else {
            console.log('Link não encontrado');
          }
        }
      })
      .catch(error => {
        console.error('Erro ao fazer a solicitação HTTP:', error);
      });
  }
}
  
function processResponse(response: any) {
  console.log('Href do link:', response.href);
}
  

export {fetchUrl}