import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import {subVariable}  from '../screens/SubCategoria/changeSubs'
import { wWidth } from '../configs/dimensions'



export var contentArray = [];
export var photoArray = [];

//sessão PRC
var contentArrayAdulto = ["Antes de prestar socorro, verifique se você e o ambiente a sua volta estão seguros.",
"Caso a vítima não responda, ou seja, não se mexa, não abra os olhos ou não faça nenhum barulho ligue, imediatamente, para o serviço móvel de urgência (SAMU - 192) e siga para o próximo passo.",
"Cheque a Responsividade dando tapinhas no tórax e chamando pela vítima.",
"Verifique a respiração olhando a elevação do tórax e/ou abdômen.",
"Caso a vítima esteja respirando, coloque ela na posição lateral de segurança, espere o SAMU (192) ou leve até o pronto atendimento - avalie continuamente sua respiração. Caso ela não esteja,  inicie as manobras de reanimação.",
"Coloque a vítima em uma superfície rígida. Ajoelhe-se ao lado dela. entrelace os dedos de sua mão dominante com a sua outra mão, como na imagem.",
"Posicione suas mãos entrelaçadas sobre o tórax da vítima, no centro da linha imaginária que liga os mamilos.",
"Faça 30 compressões aprofundando cerca de ⅓ do tórax na velocidade de 100 a 120 compressões minuto, lembre de usar o peso do seu corpo e deixar o braço reto e os cotovelos travados.",
"Após as 30 compressões, posicione-se atrás da vítima e levante um pouco o queixo dela, deixando o pescoço estendido como na imagem.",
"Mantendo a cabeça da vítima estendida, envolva, com a sua boca, a boca da vítima e deixe o ar da sua boca passar para a dela por duas vezes, evitando soprar. Se o tórax se eleva, a manobra está correta.",
"Continue realizando a manobra de 30 compressões para 2 respirações até que a vítima responda ou o serviço móvel de urgência chegue.",
"Caso tenha alguém que possa o ajudar, faça 30 compressões e a outra pessoa 2 respirações, revezando a cada 5 ciclos de 30 compressões e 2 respirações.",
"Caso você não se sinta confortável ou seguro para realizar as respirações, faça apenas a massagem de forma ininterrupta."];
var contentArrayPhotoAdulto = [require('../../assets/Prc2/01.png'),require('../../assets/Prc2/02.png'),require('../../assets/Prc2/192.png'),
null, require('../../assets/Prc3/05.png'),
require('../../assets/Prc3/07.png'),null,require('../../assets/Prc2/07.png'),require('../../assets/Prc2/09.png'),
require('../../assets/Prc2/10.png'),null,null,null];

var contentArrayPrcLac = ["Antes de prestar socorro, verifique se você e o ambiente a sua volta estão seguros.","Cheque a resposta do bebê dando tapinhas na planta do pé e chamando pela criança.",
"Caso a criança não responda, ou seja, não se mexa, não abra os olhos e não faça nenhum barulho, ligue imediatamente para o serviço móvel de urgência (SAMU - 192) e siga para o próximo passo.",
"Verifique a respiração olhando a elevação do tórax e/ou abdômen. Caso a criança esteja respirando, coloque ela na posição lateral de segurança, espere o SAMU (192) ou leve até o pronto atendimento.",
"Continue avaliando a respiração. Caso ela não esteja respirando, inicie as manobras de reanimação.", "Coloque a criança em uma superfície rígida.","Com o dedo indicador e médio faça compressões no centro do tórax da criança, um pouco abaixo dos mamilos, ou envolva a criança com as duas mãos e use os polegares para realizar a compressão.",
"Faça 30 compressões aprofundando cerca de 1/3 (um terço) do tórax na velocidade de 100 a 120 compressões por minuto.",
"Após as 30 compressões, posicione-se atrás da criança e levante um pouco o queixo dela, deixando como na imagem.",
"Mantendo a cabeça da criança estendida, envolva, com a sua boca, a boca e nariz da criança e deixe o ar da sua boca passar para a criança, por duas vezes, evitando soprar. Se o tórax se eleva, a manobra está correta.",
"Continue realizando a manobra de 30 compressões para 2 respirações até que a criança responda ou o serviço móvel de urgência chegue.",
"Caso tenha alguém que possa o ajudar, faça 15 compressões e a outra pessoa 2 respirações, revezando a cada 10 ciclos de 15 compressões e 2 respirações.",
"Caso você não se sinta confortável ou seguro para realizar as respirações, faça apenas a massagem de forma ininterrupta."];
var contentArrayPhotoPrcLac = [require('../../assets/Prc1/01.png'),require('../../assets/Prc1/02.png'),
require('../../assets/Prc1/03.png'),require('../../assets/Prc1/04.png'),require('../../assets/Prc1/05.png'),
require('../../assets/Prc1/06.png'),require('../../assets/Prc1/07.png'),require('../../assets/Prc1/08.png'),require('../../assets/Prc1/09.png'),
require('../../assets/Prc1/10.png'),null,null,null];

var contentArrayPrcCrianca = ["Antes de prestar socorro, verifique se você e o ambiente a sua volta estão seguros.",
"Cheque a Responsividade dando tapinhas no tórax e chamando pela criança.",
"Caso a Criança não responda, ou seja, não se mexa, não abra os olhos ou não faça nenhum barulho ligue, imediatamente, para o serviço móvel de urgência (SAMU - 192) e siga para o próximo passo.",
"Verifique a respiração olhando a elevação do tórax e/ou abdômen.",
"Caso a criança esteja respirando, coloque ela na posição lateral de segurança, espere o SAMU (192) ou leve até o pronto atendimento - avalie continuamente sua respiração. Caso ela não esteja,  inicie as manobras de reanimação.",
"Coloque a criança em uma superfície rígida.",
"Ajoelhe-se ao lado da criança. posicione sua mão de força sobre o tórax dela, no centro da linha imaginária que liga os mamilos.",
"Faça 30 compressões aprofundando cerca de ⅓ do tórax na velocidade de 100 a 120 compressões minuto, lembre de usar o peso do seu corpo e deixar o braço reto e os cotovelos travados.",
"Após as 30 compressões, posicione-se atrás da criança e levante um pouco o queixo dela, deixando o pescoço estendido como na imagem.",
"Mantendo a cabeça da criança estendida, envolva, com a sua boca, a boca da criança e deixe o ar da sua boca passar para a criança, por duas vezes, evitando soprar. Se o tórax se eleva, a manobra está correta.",
"Continue realizando a manobra de 30 compressões para 2 respirações até que a criança responda ou o serviço móvel de urgência chegue.",
"Caso tenha alguém que possa o ajudar, faça 30 compressões e a outra pessoa 2 respirações, revezando a cada 5 ciclos de 30 compressões e 2 respirações.",
"Caso você não se sinta confortável ou seguro para realizar as respirações, faça apenas a massagem de forma ininterrupta."];
var contentArrayPhotoPrcCrianca = [require('../../assets/Prc2/01.png'),require('../../assets/Prc2/02.png'),require('../../assets/Prc2/192.png'),
null, require('../../assets/Prc2/05.png'), require('../../assets/Prc2/06.png'),require('../../assets/Prc2/08.png'),
require('../../assets/Prc2/07.png'),require('../../assets/Prc2/09.png'),
require('../../assets/Prc2/10.png'),null,null,null];

//sessão Quedas
 var contentArrayFratura = ["Você deve suspeitar de quebra de algum osso quando a criança sente dor, que piora à compressão e à movimentação, além de inchaço e hematomas na região.",
"Em caso de suspeita de fratura, evite ao máximo a movimentação do membro, pode se utilizar de talas, papelão, madeira etc. para tentar imobilizar a região.",
"Se houver ferimento limpe com água corrente ou soro fisiológico e cubra com material limpo até a chegada no hospital.",
"Transporte a criança de forma mais confortável e cuidadosa para atendimento médico de urgência ou, caso não seja possível, ligue para o SAMU (192).",
"Se há uma lesão que o osso visível, para fora ou está sangrando abundantemente, não tente colocar o osso para dentro.",
"Cubra o ferimento e aplique uma compressão moderada no ferimento com material limpo, por exemplo com uma gaze, para conter o sangramento."];
var contentArrayPhotoFratura = [null,null,null,require('../../assets/queda/fratura/192.png'),require('../../assets/queda/fratura/nao.png'),require('../../assets/queda/fratura/enfaixar.png')];

var contentArrayLuxCotovelo = ["A suspeita de luxação (separação dos ossos que formam uma articulação) do cotovelo ocorre quando, após o trauma, os ossos claramente estão fora de lugar - podendo ter aparência disforme - ao movimentar há grande dor e a área se apresenta inchada.",
"Se há suspeita de luxação de cotovelo, imobilize o braço lesionado com uma tipóia ou uma tala improvisada e apoiá-lo em uma almofada.",
"Se possível elevar o membro acima do nível do coração para conter o inchaço.",
"Colocar compressa fria (gelo envolvido por pano) no local para aliviar dor e limitar inchaço.",
"Ligar para o Samu 192, acionando o serviço de emergência, ou transportar a criança de maneira mais confortável e segura até o pronto-socorro."];
var contentArrayPhotoCotovelo = [null,require('../../assets/queda/cotovelo/tipoia.png'),null,
require('../../assets/queda/cotovelo/compressa.png'),require('../../assets/queda/cotovelo/192.png')];

var contentArrayLuxClavicula = ["Nesse tipo de fratura por trauma, a área da clavícula fica dolorida e inchada, geralmente com hematomas visíveis, e pode-se observar instabilidade e movimento do osso, com uma protuberância no local da fratura.",
"Se há suspeita de fratura da clavícula, imobilize o braço junto ao corpo com tipoia e bandagem. Não tente colocar o osso de volta no lugar.",
"Acione o Serviço Móvel de Urgência (SAMU 192) ou transporte a vítima de forma mais confortável e segura até o pronto-socorro."];
var contentArrayPhotoLuxClavicula = [null,require('../../assets/queda/clavicula/tipoia.png'),require('../../assets/queda/clavicula/192.png')];

var contentArrayTraumaQuadril = ["As fraturas de quadril são muito dolorosas, com dor na virilha, ou até no joelho. A perna pode parecer encurtada ou virada para fora e podem aparecer hematomas arroxeados na região.",
"Se há sinais de fratura de quadril na ocorrência de sangramento, comprimir firmemente com um pano limpo.",
"Acionar o Serviço de Atendimento Pré-Hospitalar: disque 192 para o Serviço Móvel de Urgência (SAMU).",
"Realize a imobilização do quadril: fornecer acolchoamento entre as coxas e enfaixar coxas e pernas juntas. Cuidado para não rolar a vítima."];
var contentArrayPhotoTraumaQuadril = [null,null,require('../../assets/queda/quadril/192.png'),require('../../assets/queda/quadril/quadril.png')];

var contentArrayTraumaCranio = ["Após queda com impacto na cabeça, verifique as seguintes situações de alerta para o Traumatismo Crânioencefálico: ·   Perda de consciência ·   Perda da memória ou confusão ·   Vômitos imediatamente ou horas após a queda · Choro excessivo, contínuo e irritado. · Olhos arroxeados ·   Sangramento pelo ouvido ·   Queixas de visão alterada ·   Mudanças comportamentais (como agitação, impulsividade e falta de motivação).",
"Leve a criança para o médico caso: ·   Caso a criança apresente alguma das situações de alerta listadas anteriormente ·   Queda em bebê menor de 3 meses ·   Queda de uma altura maior que 1 metro em crianças menores de 2 anos, e maior que 1,5 metros em crianças acima de 2 anos - ou de altura maior que a da própria criança ·   Queda de escada com mais de 4 degraus ·   Acidente de bicicleta sem capacete",
"Caso a criança esteja não responsiva, ou seja, não se movimenta, não emite barulho, nem abra os olhos, ligue para o Serviço Móvel de Urgência (SAMU 192) imediatamente e inicie o passo a passo da reanimação cardiorrespiratória atentando-se para não realizar a etapa de extensão do pescoço.",
"Caso a criança não apresentar nenhum desses sinais, tente, inicialmente, acalmar a criança.",
"Coloque uma compressa fria (gelo protegido por um pano) no local da lesão.",
"Fique observando a criança por 24 horas, caso ela apresente qualquer anormalidade, procure sempre o serviço de emergência."];
var contentArrayPhotoTraumaCranio = [null,null,require('../../assets/queda/clavicula/192.png'),null,null];

//sessão Queimadura
var contentArrayPrimeiroGrau = ["As queimaduras de 1º grau se apresentam com dor e vermelhidão no local da lesão. Inicialmente, afaste a criança da fonte de calor.",
"Lave o local da queimadura com água corrente fria por 5 a 20 minutos. Nunca aplique gelo ou água gelada no local da queimadura.",
"Não aplique receitas caseiras, pasta de dente ou manteiga no ferimento. Só use pomadas ou cremes na lesão se o médico indicar.",
"Envolva o ferimento com um curativo seco e limpo. Mantenha o local da lesão em repouso.",
"Leve a criança para o médico se a queimadura apresente bolhas, a superfície queimada for muito extensa, haja queimaduras em rosto, pescoço e genitálias ou a criança apresente tosse ou dificuldade de respirar."];
var contentArrayPhotoPrimeiroGrau = [require('../../assets/queimadura/primeiro.png'),
require('../../assets/queimadura/lavar.png'),null,require('../../assets/queimadura/enfaixar.png'),null];

var contentArraySegundoGrau = ["As queimaduras de 2º grau se apresentam com dor, vermelhidão, inchaço e formação de bolhas.",
"Afaste a criança da fonte de calor. Em seguida, remova pulseiras, anéis e roupas que estão perto do local do ferimento e que não estão aderidos à pele.",
"Lave o local da queimadura com água corrente fria por 5 a 20 minutos. Nunca aplique gelo ou água gelada no local da queimadura.",
"Nunca fure a bolha da queimadura. Não aplique receitas caseiras, pasta de dente ou manteiga no ferimento. Só use pomadas ou cremes na lesão se o médico indicar.",
"Envolva o ferimento com um curativo seco e limpo, mas com cuidado para cobrir as bolhas sem estourá-las. Em segudia, agasalhe a criança.",
"Leve a criança para o médico se a queimadura apresente bolhas, a superfície queimada for muito extensa, haja queimaduras em rosto, pescoço e genitálias ou a criança apresente tosse ou dificuldade de respirar."];
var contentArrayPhotoSegundoGrau = [require('../../assets/queimadura/segundo.png'),null,
require('../../assets/queimadura/lavar.png'),null,require('../../assets/queimadura/enfaixar.png'),null];

var contentArrayTerceiroGrau = ["As queimaduras de 3º podem atingir camadas mais profundas da pele, deixando visível músculos ou ossos. A pele apresenta aparência pálida e seca. A criança pode não sentir dor no local, apenas ao redor da queimadura.",
"Inicialmente, afaste a criança da fonte de calor. Em seguida, remova pulseiras, anéis e roupas que estão perto do local do ferimento e que não estão aderidos à pele.",
"Lave o local da queimadura com água corrente fria por 5 a 20 minutos. Nunca aplique gelo ou água gelada no local da queimadura. Nunca fure a bolha da queimadura.",
"Não aplique receitas caseiras, pasta de dente ou manteiga no ferimento. Só use pomadas ou cremes na lesão se o médico indicar.",
"Envolva o ferimento com um curativo seco e limpo, mas com cuidado para cobrir as bolhas sem estourá-las. Em seguida, agasalhe a criança.",
"Leve a criança para o médico se a queimadura apresente bolhas, a superfície queimada for muito extensa, haja queimaduras em rosto, pescoço e genitálias ou a criança apresente tosse ou dificuldade de respirar."];
var contentArrayPhotoTerceiroGrau = [require('../../assets/queimadura/terceiro.png'),null,require('../../assets/queimadura/lavar.png'),
null,require('../../assets/queimadura/enfaixar.png'),null];

//sessão Engasgo
var contentArrayEngasLac = ["Se o bebê estiver consciente, mas não consegue tossir nem chorar, tem cada vez mais dificuldade para respirar, podendo até ficar com os lábios em uma coloração azulada (cianose), ele está com uma obstrução total da via aérea. Faça os seguintes passos para ajudá-lo a expelir o objeto.",
"Sente-se ou se ajoelhe. Se for fácil, tire a roupa que cobre o tórax do bebê.",
"Segure o bebê no seu antebraço com a barriga para baixo, ele deve ficar levemente inclinado, com cabeça mais baixa que o corpo. Sustente sua cabeça e mandíbula com a mão, cuidado para não cobrir sua boca nem comprimir seu pescoço. Apoie o seu braço na coxa, para dar mais segurança.",
"Dê 5 pancadas na metade superior das costas do bebê usando a base da sua mão com força o suficiente para tentar expulsar o objeto.",
"Depois das pancadas, segure a parte de trás da cabeça do bebê com sua mão livre, apoiando as costas com seu antebraço (nesse momento você estará segurando o bebê com os dois braços, um na frente e um atrás dele).",
"Vire o bebê de barriga para cima, mantendo sua cabeça mais baixa que o resto do seu corpo (seu braço que antes estava por cima agora deve estar por baixo). Apoie o bebê na sua outra coxa e tome cuidado para apoiar bem sua cabeça.",
"Repita essa sequência de 5 pancadas nas costas e 5 compressões no tórax até conseguir expelir o objeto ou o bebê ficar inconsciente - seguir para a categoria: crianças menores de 1 ano inconscientes."];
var contentArrayPhotoEngasLac = [];

var contentArrayEngasInconsistente = ["Se o bebê engasgado estiver inconsciente, não respondendo mais a qualquer estímulo, faça os seguintes passos.",
"Grite por ajuda e, se tiver alguém por perto, peça para essa pessoa chamar o serviço de emergência (SAMU 192).",
"Coloque a vítima em uma superfície firme e plana com cuidado e Inicie a Reanimação Cardiopulmonar (RCP) com compressões torácicas. Não verifique o pulso.",
"Sempre que for fazer as ventilações, procure o objeto que causou o engasgo. Se conseguir ver o objeto e ele puder ser facilmente removido, remova-o com os dedos em forma de gancho. Se não conseguir ver o objeto, continue a RCP.",
"Não tente retirar o corpo estranho às cegas, ou seja, não tente colocar os dedos na boca da vítima e procurar o objeto apenas com o tato para retirá-lo, pois isso pode empurrar ainda mais o corpo estranho e piorar a obstrução."];
var contentArrayPhotoEngasInconsistente = [];

var contentArrayEngasCrianca = ["Se uma criança engasgada estiver conseguindo falar e respirar e estiver tossindo vigorosamente para tentar expelir o objeto, não interfira, fique ao lado dela observando a situação e estimule-a a continuar tossindo. Caso ela piore, aja conforme o orientado abaixo.",
"Se a criança está consciente, mas não consegue tossir, nem falar, tem cada vez mais dificuldade para respirar, podendo até ficar com os lábios em uma coloração azulada (cianose), ela está com uma obstrução total da via aérea. Faça os seguintes passos para ajudá-la a expelir o objeto.",
"Fique em pé atrás da vítima, para crianças menores (geralmente abaixo dos 5 anos) fique ajoelhado.",
"Envolva a criança com os braços ao redor do abdome. Feche uma das mãos e coloque um pouco acima do umbigo da vítima, na região da “boca do estômago”.",
"Com a outra mão, segure ou cubra a mão fechada, como em um abraço. Aplique compressão forte e rápida no abdome da criança, puxando para dentro e para cima (como um “J”) (manobra de Heimlich)",
"Repita as compressões até que o objeto seja expelido ou a vítima fique inconsciente - seguir para categoria: crianças maiores de 1 ano incoscientes."];
var contentArrayPhotoEngasCrianca  = [];

var contentArrayEngasInconsistenciaCrianca = ["Se a criança engasgada estiver inconsciente, não respondendo mais a qualquer estímulo, faça os seguintes passos.",
"Grite por ajuda e, se tiver alguém por perto, peça para essa pessoa chamar o serviço de emergência ou faça você mesmo (SAMU  192).",
"Coloque a vítima no chão com cuidado e inicie a Reanimação Cardiopulmonar (RCP) com compressões torácicas. Não verifique o pulso.",
"Sempre que for fazer as ventilações, procure o objeto que causou o engasgo. Se conseguir ver o objeto e ele puder ser facilmente removido, remova-o com o dedo em forma de gancho. Se não conseguir ver o objeto, continue a RCP."];
var contentArrayPhotoEngasInconsistenciaCrianca= [];

//sessão afogamento 
var contentArrayAfogamento = ["A vítima em afogamento é comumente reconhecida por estar em posição vertical, com os braços estendidos lateralmente, batendo com os mesmos na água (pode parecer que está brincando na água).  Pode afundar e retornar a cabeça pra superfície muitas vezes, e é incapaz de gritar por socorro ou chorar.",
"Ao reconhecer que uma criança está se afogando, LIGUE para 193 (Corpo de Bombeiros) ou para 192 (SAMU), avise o que está acontecendo, onde é o incidente, quantas pessoas estão envolvidas e o que já fez ou pretende fazer.",
"Forneça flutuação com bóias ou coletes para interromper o afogamento.  Caso não haja esses dispositivos, pode-se improvisar usando garrafas de plástico vazias, pranchas de surf, coolers ou outros materiais de isopor. Tome precauções para não se tornar uma segunda vítima na hora de ajudar.",
"Em seguida, caso seja seguro, deve-se tentar remover a criança da água. Primeiramente, oferecendo corda, galhos ou dispositivos que auxiliem a puxar a vítima. Caso essa medida não seja eficaz, considere a entrada na água para a retirada da vítima, levando um objeto para flutuação.",
"Se for observado que a criança se encontra inconsciente e sem respiração durante o resgate, inicie respiração boca-boca ainda na água, fazendo 1 ventilação a cada 3-5 segundos.",
"Caso não haja equipamento para a flutuação (boias, coletes ou dispositivos improvisados), a ventilação dentro da água só é recomendada com dois socorristas.",
"Transporte a criança, até uma região seca, o mais próximo possível da posição vertical, mantendo a cabeça acima do nível do corpo.",
"Ao chegar em uma área distante o suficiente da água, posicione a criança deitada com a barriga voltada para cima, o mais horizontal possível. Não realize manobras para tentar desengasgar a vítima, nem tente drenar a água aspirada.",
"Classificar a gravidade da vítima: Verifique se a criança está consciente, por meio de estímulos vigorosos e perguntando “Você está me ouvindo?”. Em seguida, coloque dois dedos da mão direita no queixo e a mão esquerda na testa, e estenda o pescoço, para abrir as vias aéreas. Cheque se há respiração e pulso.",
"Classifique a vítima segundo as opções a seguir: I. PARADA CARDIORRESPIRATÓRIA: Pulso e Respiração Ausentes. Execute 5 ventilações iniciais , uma a cada 3-5 segundos. Em seguida, inicie o protocolo para PCR (disponível na seção de Parada Cardiorrespiratória)",
"II. PARADA RESPIRATÓRIA: Pulso Presente e Respiração Ausente. Execute 1 ventilação a cada 3-5 segundos e verifique o pulso a cada 2 minutos",
"III. PULSO E RESPIRAÇÃO PRESENTES. Mantenha a vítima sob observação e aguarde a chegada da equipe de emergência"];
var contentArrayPhotoAfogamento = [require('../../assets/afogamento/afogamento01.png'),
require('../../assets/afogamento/192.png'),
require('../../assets/afogamento/afogamento03.png'),null,null,null, 
require('../../assets/afogamento/afogamento07.png'),
require('../../assets/afogamento/afogamento08.png'),
require('../../assets/afogamento/afogamento09.png'),null,null,null];

//sessã choque
var contentArrayChoque = ["Antes de socorrer a vítima, é necessário cortar a fonte de corrente elétrica. Seja pelo desligamento da chave geral de força, seja pela retirada do fio da tomada (somente quando estiver devidamente encapado).",
"Caso não seja possível esse desligamento, o ideal é o afastamento da vítima, mas nunca tocando diretamente nela. O uso de materiais isolantes e secos é indicado, como luvas de borracha grossas e cabos de vassoura.",
"Acione o Serviço Móvel de Urgência (SAMU 192).",
"Cheque se a vítima está consciente e respirando. Para saber se a vítima está consciente, chame-a em voz alta, fazendo um estímulo tátil vigoroso. Para checar a respiração, aproxime-se da boca e do nariz do indivíduo, observando se há movimentos respiratórios no tórax.",
"Se a vítima estiver inconsciente, mas respirando, coloque-a na posição lateral de segurança e aguarde o serviço de emergência.",
"Caso a vítima esteja inconsciente e sem respirar, seguir o protocolo, já descrito, de Reanimação Cardiorrespiratória. Mesmo caso a vítima apresente-se responsiva e aparentemente bem, é de suma importância o atendimento médico. A passagem de uma pequena corrente elétrica pode causar, por exemplo, a fibrilação auricular, a qual deve ser devidamente tratada no hospital para evitar eventual risco à vida da vítima."];
var contentArrayPhotoChoque = [require('../../assets/choque/choque01.png'),
require('../../assets/choque/choque02.png'),require('../../assets/choque/192.png'),
require('../../assets/choque/choque04.png'),null,null];

export function ChangeStepPCR(textIndex){
    return (
          contentArray[textIndex]
      );
}

export function ChangeTextArray() {
    return(
        //PRC
        subVariable === "pcrLac" ? (contentArray = contentArrayPrcLac, photoArray = contentArrayPhotoPrcLac)
        : subVariable === "pcrCrianca" ? (contentArray = contentArrayPrcCrianca, photoArray = contentArrayPhotoPrcCrianca)
        : subVariable === "pcrAdulto" ? (contentArray = contentArrayAdulto, photoArray = contentArrayPhotoAdulto)
        //Queda
        : subVariable === "fratura" ? (contentArray = contentArrayFratura, photoArray = contentArrayPhotoFratura)
        : subVariable === "luxCotovelo" ? (contentArray = contentArrayLuxCotovelo, photoArray = contentArrayPhotoCotovelo)
        : subVariable === "luxClavicula" ? (contentArray = contentArrayLuxClavicula, photoArray = contentArrayPhotoLuxClavicula)
        : subVariable === "traumaQuadril" ? (contentArray =  contentArrayTraumaQuadril, photoArray = contentArrayPhotoTraumaQuadril )
        : subVariable === "traumaCranio" ? (contentArray = contentArrayTraumaCranio, photoArray = contentArrayPhotoTraumaCranio)
        //Queimadura
        : subVariable === "primeiroGrau" ? (contentArray = contentArrayPrimeiroGrau, photoArray = contentArrayPhotoPrimeiroGrau)
        : subVariable === "segundoGrau" ? (contentArray = contentArraySegundoGrau, photoArray = contentArrayPhotoSegundoGrau)
        : subVariable === "terceiroGrau" ? (contentArray = contentArrayTerceiroGrau , photoArray = contentArrayPhotoTerceiroGrau)
        //Engasgo
        :subVariable === "engasLac" ? (contentArray = contentArrayEngasLac, photoArray = contentArrayPhotoEngasLac)
        :subVariable === "engasInconsistente" ? (contentArray = contentArrayEngasInconsistente, photoArray = contentArrayPhotoEngasInconsistente)
        :subVariable === "engasCrianca" ? (contentArray = contentArrayEngasCrianca, photoArray = contentArrayPhotoEngasCrianca)
        :subVariable === "engasInconsistenciaCrianca" ? (contentArray = contentArrayEngasInconsistenciaCrianca, photoArray = contentArrayPhotoEngasInconsistenciaCrianca)
        //Choque
        :subVariable === "choques" ? (contentArray = contentArrayChoque, photoArray = contentArrayPhotoChoque)
        //Afogamento 
        : (contentArray = contentArrayAfogamento, photoArray = contentArrayPhotoAfogamento)
    );
}

export function ImageStep({indexStep}) {  
    if (photoArray[indexStep] != null) {
        return(
            <View style={styles.containerImage}>
            <Image
                style={styles.image}
                source={photoArray[indexStep]}
            />
        </View>
        );
    } else {
        return(null);
    }
}





const containerWidth = (84 / 100) * wWidth;

// CSS
const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#F4FFFE'
    },
    container: {
        flex: 1,
        alignSelf: "center",
        width: containerWidth,
        backgroundColor: '#F4FFFE',
        paddingTop: 40                                                                                       /**COLOQUEI ESSE PADDING PODE OU NAO AFETAR RESPONSIVIDADE */
    },
    /**Conteúdo da página de PaP (Passo a Passo) */
    tag: {
        alignSelf: 'center',
        width: '50%',
        height: '8%',
        backgroundColor: '#AADAE5',
        marginBottom: 16,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        justifyContent: 'center',
    },
    textTag: {
        textAlign: "center",
        fontFamily: "Poppins-Regular",
        fontSize: 22,
        color: '#4B4B4B'
    },
    containerImage: {
        /*backgroundColor: '#C4C4C4',*/
        height: (19 / 30) * containerWidth,
        borderRadius: 5,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: "contain"
    },
    textPaP: {
        fontSize: 17,
        fontFamily: 'Poppins-Regular',
        backgroundColor: "#F4FFFE",
        height: '40%',
        paddingTop: 10
    },

    /**Botões */
    buttonContainer: {                                                    /**Responsividade zoadíssima */
        flex: 1,
        flexDirection: 'row',
        backgroundColor: "#F4FFFE",
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonPaP: {
        width: '27%',
        height: '75%',
        backgroundColor: '#22CDCD',
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
        elevation: 5
    },
    countPages: {                                                    /**Responsividade zoadíssima */
        backgroundColor: '#22CDCD',
        width: '30%',
        height: '50%',
        borderRadius: 8,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontFamily: 'Poppins',
        fontSize: 30,
        paddingTop: 4,
        color: '#4B4B4B'
    }

})