//carol bertoldo

let tempoPipoca = 10
let tempoMacarrao = 8
let tempoCarne = 15
let tempoFeijao = 12
let tempoBrigadeiro = 8

function pipoca(tempo){

    if (tempo>3*tempoPipoca) {
        console.log('Kabumm!')
    }else if (tempo<tempoPipoca) {
      console.log('Tempo insuficiente')
    }else if  (tempo>2*tempoPipoca && tempo<3*tempoPipoca) {
        console.log('A comida queimou!')
    }else if (tempo==tempoPipoca || tempo<2*tempoPipoca)
        {console.log('Prato pronto, bom apetite!')
    }
    else {
        console.log('Prato inexistente');
    }
  }

//(pipoca (19));

function macarrao(tempo){
    if (tempo>3*tempoMacarrao) {
        console.log('Kabumm!')
    }else if (tempo<tempoMacarrao) {
      console.log('Tempo insuficiente')
    }else if  (tempo>2*tempoMacarrao && tempo<3*tempoMacarrao) {
        console.log('A comida queimou!')
    }else if (tempo==tempoMacarrao || tempo<2*tempoMacarrao)
    {console.log('Prato pronto, bom apetite!')
    }
    else {
        console.log('Prato inexistente');
    }
  }
  //(macarrao (27))

  function carne(tempo){
    if (tempo>3*tempoCarne) {
        console.log('Kabumm!')
    }else if (tempo<tempoCarne) {
      console.log('Tempo insuficiente')
    }else if  (tempo>2*tempoCarne && tempo<3*tempoCarne) {
        console.log('A comida queimou!')
    }else if (tempo==tempoCarne || tempo<2*tempoCarne)
    {console.log('Prato pronto, bom apetite!')
    }
    else {
        console.log('Prato inexistente');
    }
  }

  //(carne (21))
  function feijao(tempo){
    if (tempo>3*tempoFeijao) {
        console.log('Kabumm!')
    }else if (tempo<tempoFeijao) {
      console.log('Tempo insuficiente')
    }else if  (tempo>2*tempoFeijao && tempo<3*tempoFeijao) {
        console.log('A comida queimou!')
    }else if (tempo==tempoFeijao || tempo<2*tempoFeijao)
    {console.log('Prato pronto, bom apetite!')
    }
    else {
        console.log('Prato inexistente');
    }
  }
  //(feijao (39))

  function brigadeiro(tempo){
    if (tempo>3*tempoBrigadeiro) {
        console.log('Kabumm!')
    }else if (tempo<tempoBrigadeiro) {
      console.log('Tempo insuficiente')
    }else if  (tempo>2*tempoBrigadeiro && tempo<3*tempoBrigadeiro) {
        console.log('A comida queimou!')
    }else if (tempo==tempoBrigadeiro || tempo<2*tempoBrigadeiro)
    {console.log('Prato pronto, bom apetite!')
    }
    else {
        console.log('Prato inexistente');
    }
  }

  (brigadeiro (19))
