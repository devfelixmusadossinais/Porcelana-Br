/* MODELED-EN */
/*
Adapted for American women 40+ and 50+, with appearance-only language and consistent recipe names.
Replaced fresh aloe with store-bought gel; removed guaranteed storage periods and boiling-water bottle cleaning.
Preserved all keys, IDs, numeric data, references, and list counts. Recipe formulas were not supplied.
Safety references: [AAD sunscreen guidance](https://www.aad.org/public/everyday-care/sun-protection/shade-clothing-sunscreen/how-to-apply-sunscreen), [FDA cosmetic hygiene guidance](https://www.fda.gov/cosmetics/potential-contaminants-cosmetics/microbiological-safety-and-cosmetics).
*/
var GUIA = {
  boasVindas: {
    titulo: "Seu ritual começa aqui",
    texto: [
      "Cuidar da pele pode ser simples e ainda parecer um tempinho só para você.",
      "O Método Pele de Seda Coreana reúne 30 receitas caseiras e rituais inspirados nos cuidados coreanos, com uma abordagem simples: hidratar primeiro, adicionar conforto e depois focar no viço fresco e na aparência de uma pele mais lisa. Aos 40, 50 anos ou mais, deixe o conforto da sua pele guiar você.",
      "Você não precisa decorar 30 receitas. Comece pelos 6 Rituais Essenciais, introduzindo um de cada vez, e explore os outros quando quiser um pouco de variedade.",
      "Você vai encontrar ingredientes conhecidos de supermercado e farmácia, com passos curtos e fáceis. Comece com um teste em pequena área antes de experimentar algo novo. Depois, respire, pegue uma tigela limpa e abra um espacinho para você."
    ]
  },

  regrasDeOuro: [
    { n: 1, titulo: "Teste em uma pequena área primeiro", texto: "Aplique uma pequena quantidade na parte interna do antebraço ou atrás da orelha. Siga o tempo de contato da receita, enxágue se indicado e espere 24 horas antes de usar em uma área maior. Se houver coceira, ardor, vermelhidão ou inchaço, enxágue e pare. Um teste em pequena área não garante que uma reação não ocorrerá depois." },
    { n: 2, titulo: "Protetor solar, todos os dias", texto: "Aplique protetor solar SPF 30+ de amplo espectro todas as manhãs, faça chuva ou sol. Siga o rótulo e reaplique conforme as instruções, principalmente ao ar livre ou após nadar ou suar. Cuidados caseiros nunca substituem o protetor solar." },
    { n: 3, titulo: "Mantenha tudo limpo", texto: "Lave as mãos e use tigelas, colheres e recipientes bem limpos e secos. Tigelas de vidro ou cerâmica funcionam bem. Limpe borrifadores conforme as instruções de cuidado e deixe secar completamente; não presuma que suportam água fervente. Utensílios limpos não tornam uma mistura estéril." },
    { n: 4, titulo: "Prepare na hora", texto: "Prepare apenas o suficiente para um uso e descarte as sobras. Misturas com água, chá, frutas, iogurte ou aloe não têm um sistema de conservação testado. Misturas de óleo e manteiga também não têm prazo de validade garantido. A geladeira não torna uma mistura caseira confiavelmente segura para guardar." },
    { n: 5, titulo: "Dê atenção extra à pele sensível", texto: "Mantenha misturas caseiras longe da pele ferida, irritada ou queimada pelo sol e dos olhos. Se tiver pele sensível, uma condição de pele como acne inflamatória, rosácea ou eczema, ou estiver grávida, consulte um dermatologista antes de começar." },
    { n: 6, titulo: "Mantenha expectativas leves", texto: "Estes rituais são sobre a aparência e a sensação da pele: maciez, viço fresco e conforto. Os efeitos podem ser temporários, e os resultados variam. São cuidados cosméticos, não orientação médica." }
  ],

  inspiracao: "Estas receitas se inspiram na ênfase dos cuidados coreanos em hidratação, suavidade e constância. São interpretações caseiras acessíveis, não uma afirmação de que cada receita representa uma tradição coreana autêntica.",

  metodo: {
    titulo: "O método de 3 camadas",
    subtitulo: "Uma ordem simples para escolher seus cuidados.",
    camadas: [
      { n: 1, id: "hidratar", nome: "Hidratar", foco: "Maciez, viço fresco e aparência descansada",
        texto: "Comece leve. Estas águas faciais, tônicos, géis e máscaras leves podem deixar a pele mais fresca e macia, com aparência mais descansada.",
        tipos: "Águas faciais · Tônicos · Géis · Máscaras leves" },
      { n: 2, id: "nutrir", nome: "Nutrir", foco: "Conforto e textura com aparência mais lisa",
        texto: "Depois, adicione conforto onde precisar. Máscaras cremosas, cremes e óleos podem deixar a pele seca mais macia e dar à superfície uma aparência mais lisa.",
        tipos: "Máscaras nutritivas · Cremes · Óleos · Esfoliação suave" },
      { n: 3, id: "rejuvenescer", nome: "Renovar", foco: "Uma aparência fresca em qualquer idade",
        texto: "Finalize com um pouco de atenção extra a um rosto com aparência fresca, pele confortável e áreas muitas vezes esquecidas, como pescoço e colo. Mantenha misturas caseiras longe dos olhos.",
        tipos: "Pele com aparência mais lisa · Cuidados para a área dos olhos · Pescoço e colo · Massagem" }
    ],
    sequencia: ["Limpar", "Hidratar", "Nutrir", "Renovar", "Protetor solar"],
    regraDaSequencia: "Aplique produtos sem enxágue do mais leve ao mais denso: águas faciais e géis primeiro, depois cremes ou óleos. Use máscaras com enxágue após a limpeza e enxágue completamente antes dos passos sem enxágue. As camadas organizam suas escolhas; você não precisa de todas as camadas ou receitas em uma sessão. Introduza uma receita por vez e siga as instruções. Todas as manhãs, finalize com protetor solar SPF 30+ de amplo espectro."
  },

  essenciais: [1, 11, 12, 14, 3, 23],

  rotinasProntas: {
    manha: {
      nome: "Ritual Matinal de Começo Fresco", duracao: "Manhã · 5 a 8 minutos",
      passos: [
        { titulo: "Limpe seu rosto", detalhe: "Use água morna ou seu produto de limpeza suave habitual. Seque com toques leves, sem esfregar.", receita: null },
        { titulo: "Água Facial de Arroz", detalhe: "Aplique uma porção recém-preparada com um disco de algodão, evitando os olhos. Deixe secar.", receita: 1 },
        { titulo: "Gel de Viço Fresco", detalhe: "Aplique uma camada fina. Espere 2 minutos para assentar.", receita: 3 },
        { titulo: "Creme de Conforto para a Área dos Olhos", detalhe: "Aplique uma quantidade mínima com toques leves nas maçãs do rosto externas, bem longe dos olhos, pálpebras e linhas dos cílios.", receita: 23 },
        { titulo: "Protetor solar", detalhe: "Aplique SPF 30+ de amplo espectro conforme o rótulo. Faça dele seu passo final diário.", receita: null }
      ]
    },
    noite: {
      nome: "Ritual Noturno de Pele Macia", duracao: "Noite · 15 a 25 minutos",
      passos: [
        { titulo: "Retire a maquiagem e limpe", detalhe: "Use seu produto de limpeza suave e demaquilante habituais conforme a necessidade.", receita: null },
        { titulo: "Tônico Suave de Chá Verde", detalhe: "Ou experimente Água Facial de Arroz recém-preparada. Deixe qualquer uma das opções esfriar completamente antes de aplicar.", receita: 4, alternativas: [1] },
        { titulo: "Escolha uma máscara noturna", detalhe: "Experimente a Máscara Cremosa de Arroz, a Máscara de Conforto Noturno ou a Máscara para uma Aparência Lisa. Siga o tempo de contato e enxágue conforme as instruções; não estenda o uso durante a noite.", receita: 11, alternativas: [14, 21] },
        { titulo: "Sérum de Toque Sedoso", detalhe: "Aplique uma camada fina com pressões suaves das palmas. Evite esfregar ou puxar.", receita: 22 },
        { titulo: "Creme de Conforto para a Área dos Olhos", detalhe: "Use uma quantidade mínima nas maçãs do rosto externas, longe dos olhos, pálpebras e linhas dos cílios.", receita: 23 },
        { titulo: "Creme de Conforto Nutritivo", detalhe: "Para o pescoço e o colo, escolha o Creme de Conforto para Pescoço e Colo se preferir.", receita: 12, alternativas: [25] },
        { titulo: "Bálsamo de Lábios Sedosos", detalhe: "Espalhe uma camada confortável nos lábios antes de dormir, seguindo as instruções da receita.", receita: 9 }
      ]
    },
    dica: "Nos dias corridos, simplifique: limpe suavemente, use um hidratante que já tolera e aplique SPF 30+ de amplo espectro todas as manhãs. Um passo de água de arroz recém-preparada é opcional. A constância importa mais que uma rotina longa."
  },

  rotinasObjetivo: [
    { id: "opaca", nome: "Rotina para Pele com Aparência Opaca", para: "Para um viço mais fresco. Estas frequências são pontos de partida opcionais, não um checklist.",
      itens: [{ receita: 1, uso: "diariamente, se for confortável" }, { receita: 17, uso: "1 vez por semana, apenas se tolerado" }, { receita: 11, uso: "1 a 2 vezes por semana" }, { receita: 3, uso: "3 a 4 vezes por semana" }] },
    { id: "cansada", nome: "Rotina de Aparência Descansada", para: "Para uma sensação renovada e aparência mais descansada. Escolha o que trouxer conforto.",
      itens: [{ receita: 24, uso: "conforme a necessidade, longe dos olhos" }, { receita: 2, uso: "conforme a necessidade durante o dia; prepare na hora a cada vez" }, { receita: 14, uso: "2 a 3 vezes por semana, se tolerado" }, { receita: 23, uso: "manhã e noite, se tolerado" }] },
    { id: "firmeza40", nome: "Rotina de Aparência Lisa 40+", para: "Para a pele que precisa de um toque mais macio e aparência mais lisa.",
      itens: [{ receita: 22, uso: "diariamente, se tolerado" }, { receita: 28, uso: "3 a 5 vezes por semana, se for confortável" }, { receita: 21, uso: "1 a 2 vezes por semana" }, { receita: 12, uso: "à noite, conforme a necessidade" }] },
    { id: "nutricao50", nome: "Rotina de Conforto Extra 50+", para: "Para a pele que quer texturas mais nutritivas e um pouco mais de conforto.",
      itens: [{ receita: 15, uso: "1 vez por semana" }, { receita: 13, uso: "1 vez por semana" }, { receita: 29, uso: "2 a 3 vezes por semana, se tolerado" }, { receita: 25, uso: "todas as noites, se for confortável" }] },
    { id: "hidratacao", nome: "Rotina para Pele com Sensação de Ressecamento", para: "Para a pele que repuxa ou pede hidratação. Comece devagar e use menos passos se precisar.",
      itens: [{ receita: 1, uso: "até 2 vezes por dia, se for confortável; prepare na hora a cada vez" }, { receita: 7, uso: "2 vezes por semana, se tolerado" }, { receita: 10, uso: "1 a 2 vezes por semana" }, { receita: 3, uso: "3 a 4 vezes por semana" }] },
    { id: "noturna", nome: "Rotina de Relaxamento Noturno", para: "Para terminar o dia com conforto. Alterne receitas em vez de usar tudo junto.",
      itens: [{ receita: 4, uso: "todas as noites, se tolerado" }, { receita: 26, uso: "1 vez por semana, apenas se for confortável" }, { receita: 29, uso: "2 a 3 vezes por semana" }, { receita: 12, uso: "3 a 5 noites por semana, se precisar" }] }
  ],

  ingredientes: [
    { nome: "Arroz (água e farinha)", paraQueServe: "Pode deixar a pele macia e sedosa", cuidado: "Use arroz jasmim puro ou farinha de arroz pura. Prepare a água de arroz na hora, use imediatamente e descarte as sobras; nunca fermente." },
    { nome: "Gel de aloe vera 100% puro", paraQueServe: "Uma base de gel leve que pode trazer uma sensação fresca e refrescante", cuidado: "Escolha um produto comprado pronto com o rótulo de gel de aloe vera 100% puro, sem fragrância, corantes ou álcool que resseca adicionados. Não use gel ou seiva amarela de uma folha recém-cortada." },
    { nome: "Chá verde", paraQueServe: "Tônicos e compressas refrescantes", cuidado: "Use chá puro de infusão leve. Deixe esfriar completamente, use imediatamente e descarte as sobras." },
    { nome: "Mel", paraQueServe: "Pode deixar a pele mais macia e confortável", cuidado: "Escolha mel puro sem sabores adicionados. Evite se tiver alergia conhecida ao mel ou a produtos de abelha." },
    { nome: "Aveia em flocos", paraQueServe: "Uma textura macia para máscaras suaves e confortáveis", cuidado: "Escolha aveia pura sem sabor e moa bem quando indicado. Não esfregue e evite se tiver alergia à aveia." },
    { nome: "Iogurte natural", paraQueServe: "Uma textura cremosa e fresca para máscaras com enxágue", cuidado: "Use iogurte natural sem açúcar feito com leite pasteurizado. Evite se tiver alergia ao leite e descarte as sobras." },
    { nome: "Linhaça", paraQueServe: "Um gel que pode dar à pele uma aparência temporariamente mais lisa", cuidado: "Use linhaça pura. Prepare o gel na hora, deixe esfriar completamente e descarte as sobras." },
    { nome: "Manteiga de karité e óleo de amêndoas doces", paraQueServe: "Texturas nutritivas que podem amaciar a pele com sensação de ressecamento", cuidado: "Escolha produtos sem fragrância. Evite óleo de amêndoas se tiver alergia a amêndoas; use pouco se as texturas nutritivas parecerem pesadas." },
    { nome: "Abacate e banana", paraQueServe: "Máscaras cremosas que podem deixar a pele mais macia", cuidado: "Use frutas frescas e maduras e siga o tempo de contato da receita. Evite alérgenos conhecidos; não substitua por suco de limão, lima ou outras frutas ácidas." },
    { nome: "Óleo de rosa-mosqueta", paraQueServe: "Um óleo de finalização opcional para um toque mais macio", cuidado: "Escolha um óleo cosmético sem fragrância e use pouco. Siga o rótulo de armazenamento e use SPF 30+ de amplo espectro todos os dias." }
  ],
  kitBasico: "Tigelas pequenas de vidro ou cerâmica · colher ou espátula de silicone · recipientes pequenos de vidro com tampa para preparar porções de uso único · borrifador fácil de limpar, se necessário · discos de algodão · pano macio de rosto e toalha limpa · faixa de cabelo.",

  faq: [
    { p: "Posso usar todas as receitas na mesma semana?", r: "Não precisa. Comece pelos 6 Rituais Essenciais como um cardápio de opções, introduzindo uma receita por vez após um teste em pequena área de 24 horas. As frequências das rotinas são opcionais, não metas a atingir. Use menos passos se sua pele estiver seca, repuxando ou desconfortável." },
    { p: "Devo guardar as misturas para depois?", r: "Prepare uma porção para uso único e descarte as sobras. A geladeira não substitui um sistema de conservação testado, mesmo para água de arroz ou tônico. Misturas de óleo e manteiga também não têm prazo de validade garantido de 30 dias. Sem testes de segurança e estabilidade específicos da fórmula, não presuma que uma mistura caseira é segura para guardar. Prepare uma nova porção após o período de espera do teste em pequena área." },
    { p: "Como escolher para meu tipo de pele?", r: "Use os cuidados de cada receita e o conforto atual da pele como guia. A pele com sensação de ressecamento pode preferir as texturas mais nutritivas da Camada 2; a pele oleosa pode ficar mais confortável com as opções mais leves da Camada 1. A pele mista pode usar texturas diferentes em áreas diferentes. Suas preferências podem mudar com o tempo, então comece com pouco em vez de seguir apenas a idade." },
    { p: "E se eu tiver alergias ou pele sensível?", r: "Evite qualquer ingrediente ao qual tenha alergia, mesmo que seja um alimento conhecido. Sempre teste em pequena área e espere 24 horas antes de usar em uma área maior. Se tiver pele sensível, uma condição de pele como acne inflamatória, rosácea ou eczema, ou estiver grávida, consulte um dermatologista antes de começar. Pare e enxágue se houver irritação." },
    { p: "Quando posso notar diferença?", r: "Você pode notar um toque mais macio ou aparência renovada após o uso, mas os efeitos podem ser temporários e algumas pessoas não notam mudança. Os resultados variam e não há prazo prometido. Estes rituais são para aparência cosmética e conforto; o protetor solar diário continua fazendo parte da rotina." },
    { p: "Posso usar com meus produtos habituais?", r: "Mantenha seu produto de limpeza suave, hidratante e protetor solar SPF 30+ de amplo espectro habituais. Introduza apenas uma receita nova por vez. Se usar retinoides, ácidos esfoliantes ou cuidados prescritos, pergunte ao dermatologista como encaixar os cuidados caseiros na rotina. Não misture ingredientes caseiros no protetor solar ou em outros produtos industrializados." }
  ],

  avisoImportante: "Este guia fornece informações gerais sobre cuidados cosméticos com a pele e bem-estar pessoal, não orientação médica. Não se destina a diagnosticar ou tratar doenças ou condições de pele e não substitui cuidados profissionais. Os benefícios se referem apenas à aparência ou à sensação da pele; os efeitos podem ser temporários, e os resultados variam. Teste cada mistura nova em pequena área e espere 24 horas antes de usar em uma área maior. Use protetor solar SPF 30+ de amplo espectro todos os dias. Se tiver pele sensível, alguma condição de pele ou estiver grávida, consulte um dermatologista antes de começar. Mantenha misturas caseiras longe dos olhos, pálpebras, linhas dos cílios e pele ferida ou irritada. Prepare porções para uso único e descarte as sobras. Estas receitas se inspiram nos cuidados coreanos e não representam tradições autênticas específicas. Pare de usar se houver irritação e busque orientação profissional em caso de reação ou dúvida.",

  mensagemFinal: {
    titulo: "Sua pele merece um pouco de cuidado.",
    texto: "Explore os 6 Rituais Essenciais e escolha um para começar após o teste em pequena área. Faça do cuidado com a pele um pequeno momento só seu: simples, sem pressa e guiado pelo que traz conforto."
  }
};
