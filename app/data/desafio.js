/* MODELED-EN */
/*
Adapted for American women in their 40s, 50s, and beyond, with US measurements and appearance-only language.
Used packaged aloe, jojoba, and sunflower oil; replaced tea eye compresses with cool-water washcloths and rose water with distilled water.
Removed photo comparisons and unsupported storage claims; kept recipe references and added fresh-portion guidance, daily SPF 30+, and stronger testing precautions.
Safety references: [FDA cosmetic contamination guidance](https://www.fda.gov/cosmetics/potential-contaminants-cosmetics/microbiological-safety-and-cosmetics), [AAD product testing guidance](https://www.aad.org/public/everyday-care/skin-care-secrets/prevent-skin-problems/test-skin-care-products/), [AAD sunscreen guidance](https://www.aad.org/public/everyday-care/sun-protection/shade-clothing-sunscreen/how-to-apply-sunscreen).
*/
var DESAFIO = {
  "titulo": "Desafio de 7 Dias de Conforto da Pele do Método Pele de Seda Coreana",
  "subtitulo": "Seu ritual completo, um dia de cada vez",
  "marca": "Método Pele de Seda Coreana",
  "intro": {
    "boasVindas": {
      "titulo": "Sete dias. Um pouco de tempo para você.",
      "texto": "Com 30 receitas no ebook, descobrir por onde começar pode parecer a parte mais difícil. Este Desafio traz um guia de sete dias, com uma ordem clara para seguir. Cada dia inclui seu plano para manhã e noite, o que separar com antecedência e as receitas de hoje com ingredientes e instruções. Marque o que fizer, anote como sua pele está e faça um balanço ao final. Aos 40, 50 anos ou mais, deixe o conforto da sua pele definir o ritmo. Introduza uma mistura nova por vez, após testar, e estenda a programação conforme a necessidade. Cuidados caseiros são cuidados cosméticos opcionais, e os resultados variam. Nos dias corridos, fique com a limpeza suave, seu hidratante habitual e protetor solar. A constância importa mais que a perfeição.",
      "fecho": "Sete dias de cuidado, no seu ritmo."
    },
    "ritmoPorDia": { "manha": "5 a 8 min", "noite": "20 a 40 min" },
    "diasEmUmOlhar": [
      { "n": 1, "titulo": "Refrescar e Hidratar" },
      { "n": 2, "titulo": "Viço de Rosto Fresco" },
      { "n": 3, "titulo": "Conforto Nutritivo" },
      { "n": 4, "titulo": "Descanso" },
      { "n": 5, "titulo": "Textura Suave" },
      { "n": 6, "titulo": "Toque Suave" },
      { "n": 7, "titulo": "Celebre" }
    ],
    "comoFunciona": {
      "titulo": "Como o Desafio Funciona",
      "subtitulo": "Quatro orientações simples. Um passo de cada vez.",
      "combinados": [
        { "n": 1, "titulo": "Dois momentos por dia", "texto": "Uma rotina curta pela manhã, o Ritual Matinal Refrescante, e uma máscara noturna opcional. Pule qualquer passo que sua pele não aceite bem." },
        { "n": 2, "titulo": "Prepare-se na noite anterior", "texto": "Confira os ingredientes de amanhã e limpe seus utensílios. Prepare porções frescas para uso único quando necessário; estas misturas caseiras não têm prazos de armazenamento verificados." },
        { "n": 3, "titulo": "Teste em uma pequena área primeiro", "texto": "Antes do Dia 1, teste os ingredientes novos e cada mistura pronta em uma pequena área e observe por pelo menos 24 horas. Esta é a primeira regra de segurança do ebook. Uma avaliação de 24 horas não descarta reações tardias; reserve mais tempo para testes antes de começar." },
        { "n": 4, "titulo": "Protetor solar, todos os dias", "texto": "Finalize todas as manhãs com protetor solar SPF 30+ de amplo espectro, faça chuva ou sol. Reaplique conforme o rótulo, pelo menos a cada 2 horas ao ar livre e após nadar ou suar." }
      ]
    },
    "sobreODesafio": {
      "titulo": "Sobre o Desafio de 7 Dias",
      "ritmo": "Uma introdução completa: explore as 3 camadas ao longo de 7 dias, com tempo extra sempre que sua pele precisar.",
      "boaEscolhaPara": "Explorar o ritual, retomar uma rotina aos poucos ou abrir espaço para um pouco de cuidado diário. Evite experimentar misturas novas logo antes de uma ocasião especial.",
      "comoEOrganizado": "Seu plano diário e as receitas de hoje, lado a lado, com 21 das 30 receitas do ebook.",
      "umCaminhoPorVez": "Siga uma programação por vez para perceber como sua pele responde. Dê tempo a cada mistura nova antes de adicionar outra. Mais passos podem significar mais irritação."
    },
    "ritualDespertarDaPele": {
      "duracao": "5 a 8 min",
      "passos": [
        { "ordem": 1, "titulo": "Limpe suavemente", "texto": "Use água fresca a morna ou seu produto de limpeza suave habitual. Seque com toques leves.", "receitas": [] },
        { "ordem": 2, "titulo": "Água de Arroz Refrescante", "texto": "Prepare uma porção fresca. Aplique com toques leves de um disco de algodão limpo, evitando os olhos. Pare se sentir ressecamento.", "receitas": [1] },
        { "ordem": 3, "titulo": "Gel de Conforto de Aloe Vera", "texto": "Aplique uma camada fina e deixe absorver por 2 minutos. Em seguida, use seu hidratante habitual se precisar.", "receitas": [3] },
        { "ordem": 4, "titulo": "Toque de Conforto para a Área dos Olhos", "texto": "Aplique uma quantidade mínima com toques leves ao longo do osso orbital externo, fora das pálpebras e longe dos cílios.", "receitas": [23] },
        { "ordem": 5, "titulo": "Protetor solar SPF 30+ de amplo espectro", "texto": "Aplique todas as manhãs conforme o rótulo. Reaplique pelo menos a cada 2 horas ao ar livre e após nadar ou suar.", "receitas": [] }
      ]
    }
  },
  "diaZero": {
    "titulo": "Dia 0 · Prepare-se",
    "subtitulo": "Separe seus essenciais antes do Dia 1. Comece os testes cedo o suficiente para reservar tempo extra."
  },
  "vespera": {
    "testeDeContato": {
      "titulo": "Teste em Pequena Área · Pelo Menos 24 Horas",
      "instrucao": "Teste uma pequena quantidade de cada ingrediente novo e de cada mistura pronta em pontos separados da parte interna do antebraço. Siga o tempo de contato indicado e enxágue as misturas com enxágue; não deixe uma máscara por 24 horas. Observe por pelo menos 24 horas e pule qualquer coisa que cause coceira, ardor, vermelhidão ou inchaço. Uma avaliação inicial de 24 horas não descarta reações tardias. Reserve mais tempo para testes antes do uso facial, seguindo a orientação de um dermatologista. Prepare uma porção fresca para cada teste. Não teste alérgenos conhecidos. Se tiver pele sensível, alguma condição de pele ou estiver grávida, consulte um dermatologista antes de começar.",
      "ingredientes": [
        "Gel de aloe vera industrializado com aloe 100% puro como base, sem fragrância, corantes ou álcool que resseca adicionados",
        "Manteiga de karité pura",
        "Gel de linhaça",
        "Mel puro",
        "Aveia em flocos, bem moída",
        "Água destilada para a Bruma de Rosto Fresco",
        "Óleo de jojoba puro",
        "Iogurte natural sem açúcar",
        "Óleo de semente de rosa-mosqueta, se usar"
      ]
    },
    "prepareHoje": {
      "titulo": "Prepare Hoje",
      "itens": [
        { "receita": 1, "nome": "Água de Arroz Refrescante", "texto": "Separe os ingredientes hoje à noite e prepare uma porção fresca amanhã. Reserve 30 min para deixar de molho na geladeira. Use imediatamente após coar e descarte o restante.", "ebookPag": 8 },
        { "receita": 12, "nome": "Creme de Conforto Nutritivo", "texto": "Reserve cerca de 35 min, incluindo o resfriamento, ao preparar. Separe os ingredientes para os Dias 1, 4 e 5; prepare uma porção fresca para uso único a cada vez. A alegação original de armazenamento por 30 dias não foi verificada.", "ebookPag": 20 }
      ],
      "nota": "Vá um dia de cada vez. Cada dia informa o que separar em seguida. Preparar-se com antecedência significa separar ingredientes e utensílios limpos, em vez de guardar misturas caseiras para depois."
    },
    "pontoDePartida": {
      "titulo": "Seu Ponto de Partida",
      "instrucao": "Avalie cada item de 1 (baixo) a 5 (alto). Você vai rever estas anotações no Dia 7 para refletir sobre sua experiência.",
      "escala": { "min": 1, "max": 5 },
      "itens": ["Quanto conforto minha pele sente", "Maciez ao toque", "Quanto frescor minha pele aparenta", "Quanto me sinto pronta para o ritual"],
      "fotoOpcional": "Anotação pessoal opcional: descreva como sua pele está hoje e o que você gostaria deste tempo para si. Mantenha o foco no conforto e na sua experiência."
    },
    "listaDeCompras": {
      "titulo": "Sua Lista de Compras do Desafio",
      "subtitulo": "Ingredientes estimados para os 7 dias. Você vai preparar porções frescas ao longo do caminho.",
      "mercadoEFeira": [
        { "item": "Arroz branco ou jasmim", "tag": "essencial", "para": "Água de Arroz Refrescante, todos os dias", "vaiUsar": "3½ cups", "compre": "O arroz puro que você já tem na despensa" },
        { "item": "Farinha de arroz bem moída", "tag": "essencial", "para": "Máscara Cremosa de Arroz e Esfoliante Suave de Aveia e Arroz", "vaiUsar": "3 tbsp", "compre": "1 pacote pequeno" },
        { "item": "Aveia em flocos pura, bem moída", "tag": "", "para": "Máscara Nuvem de Aveia e Esfoliante Suave de Aveia e Arroz", "vaiUsar": "2 tbsp", "compre": "1 recipiente pequeno" },
        { "item": "Leite ou bebida vegetal pura sem açúcar", "tag": "fresco", "para": "Máscara Nuvem de Aveia", "vaiUsar": "2 tbsp", "compre": "Use o que tem, desde que tolere os ingredientes" },
        { "item": "Iogurte natural integral sem açúcar", "tag": "", "para": "Máscara de Conforto de Mel e Iogurte e Máscara Cremosa de Iogurte", "vaiUsar": "3 tbsp", "compre": "1 recipiente pequeno" },
        { "item": "Mel puro", "tag": "essencial", "para": "Máscara de Conforto de Mel e Iogurte, Máscara de Conforto Noturno e Máscara Cremosa de Arroz", "vaiUsar": "1 tbsp mais 2 tsp", "compre": "1 pote pequeno" },
        { "item": "Óleo de girassol puro", "tag": "", "para": "Máscara de Conforto de Mel e Iogurte", "vaiUsar": "1 tsp", "compre": "Um frasco pequeno de óleo de girassol sem sabor adicionado" },
        { "item": "Chá verde puro em sachês ou folhas soltas", "tag": "", "para": "Tônico Leve de Chá Verde", "vaiUsar": "1 sachê de chá", "compre": "1 caixa pequena de sachês de chá sem sabor" },
        { "item": "Panos de rosto limpos e macios", "tag": "", "para": "Compressa Matinal Refrescante para os Olhos", "vaiUsar": "2 panos de rosto", "compre": "Panos macios reservados para uso facial" },
        { "item": "Linhaça em grãos inteiros", "tag": "", "para": "Gel de linhaça nos Dias 2 e 6", "vaiUsar": "4 tbsp", "compre": "1 pacote pequeno" }
      ],
      "farmaciaELojasNaturais": [
        { "item": "Gel de aloe vera industrializado com aloe 100% puro como base", "tag": "essencial", "para": "Gel de Conforto de Aloe Vera, Toque de Conforto para a Área dos Olhos, Máscara de Conforto Noturno, sérum e máscara de iogurte", "vaiUsar": "Cerca de 2.8 oz", "compre": "Um recipiente de 5.3 a 8.8 oz sem fragrância, corantes ou álcool que resseca adicionados" },
        { "item": "Óleo de jojoba puro", "tag": "essencial", "para": "Creme de Conforto Nutritivo, Creme de Conforto para Pescoço e Colo, bálsamo labial, máscara noturna, toque para a área dos olhos e Óleo de Acabamento Sedoso", "vaiUsar": "Cerca de 0.9 fl oz", "compre": "Um frasco de 2 fl oz" },
        { "item": "Manteiga de karité pura", "tag": "essencial", "para": "Creme de Conforto Nutritivo e Creme de Conforto para Pescoço e Colo", "vaiUsar": "3 tbsp", "compre": "Um recipiente de 1.8 a 3.5 oz" },
        { "item": "Óleo de coco puro", "tag": "", "para": "Bálsamo de Lábios Macios", "vaiUsar": "1 tbsp", "compre": "O menor pote disponível" },
        { "item": "Cera de abelha de grau cosmético", "tag": "", "para": "Bálsamo de Lábios Macios", "vaiUsar": "1 tsp", "compre": "A menor embalagem disponível; evite cera de vela" },
        { "item": "Água destilada", "tag": "", "para": "Bruma de Rosto Fresco", "vaiUsar": "3 tbsp", "compre": "A menor garrafa lacrada disponível; meça apenas o necessário" },
        { "item": "Óleo de semente de rosa-mosqueta puro", "tag": "opcional", "para": "Creme de Conforto para Pescoço e Colo e Óleo de Conforto Noturno", "vaiUsar": "6 gotas", "compre": "Um frasco pequeno de 0.34 a 1 fl oz" },
        { "item": "Discos de algodão", "tag": "", "para": "Água de Arroz Refrescante e Máscara de Tecido Hidratante Caseira", "vaiUsar": "Cerca de 8 discos", "compre": "1 pacote pequeno" }
      ],
      "nota": "São totais aproximados de receitas para os 7 dias, usando cups, tbsp e tsp dos EUA. As estimativas de aloe e jojoba incluem Gel de Conforto de Aloe Vera e Toque de Conforto para a Área dos Olhos, com 1 tsp de aloe por porção preparada, não por aplicação na área dos olhos. Use apenas um toque mínimo perto do osso orbital. O preparo de porções frescas e os testes em pequena área podem exigir ingredientes extras. Os tamanhos de embalagem variam. Tenha à mão seu produto de limpeza suave, hidratante e protetor solar SPF 30+ de amplo espectro habituais."
    },
    "receitasDaVespera": {
      "titulo": "Receitas para Rever Hoje à Noite",
      "subtitulo": "Reveja estas duas antes do Dia 1. Separe os ingredientes agora e prepare porções frescas quando necessário.",
      "receitas": [1, 12]
    },
    "utensilios": {
      "titulo": "Utensílios para os 7 Dias",
      "itens": [
        "Tigelas pequenas e um prato raso",
        "Uma colher ou espátula e um garfo",
        "Uma peneira de malha fina",
        "Uma panela pequena para banho-maria e gel de linhaça",
        "3 potes pequenos de vidro limpos com tampa",
        "2 recipientes limpos e tampados para esfriar na geladeira",
        "Um borrifador pequeno e limpo para uma porção de uso único; esvazie, lave e seque depois",
        "Uma faixa de cabelo macia",
        "Tesoura limpa e um pano macio de rosto"
      ]
    },
    "checklist": {
      "titulo": "Seu Checklist de Preparação",
      "itens": [
        "Testes iniciais em pequena área concluídos com pelo menos 24 horas de observação; tempo extra para testes reservado",
        "Ingredientes da Água de Arroz Refrescante medidos para preparo fresco amanhã",
        "Ingredientes do Creme de Conforto Nutritivo e um recipiente limpo prontos",
        "Utensílios lavados, secos e separados",
        "Protetor solar SPF 30+ de amplo espectro ao alcance",
        "Um pano macio de rosto e uma toalha limpa prontos para amanhã"
      ]
    }
  },
  "dias": [
    {
      "n": 1,
      "titulo": "Refrescar e Hidratar",
      "foco": "Comece aos poucos com água de arroz, aveia e um pouco de conforto.",
      "porQueHoje": "O primeiro dia é para se adaptar à rotina. Limpe suavemente, experimente camadas leves que sua pele já tolera e finalize com hidratação onde precisar. A pele pode ficar mais seca aos 40 e 50 anos, então deixe o conforto guiar você. Vá com calma e mantenha as misturas novas opcionais.",
      "manha": {
        "nome": "Ritual Matinal Refrescante",
        "duracao": "5 a 8 min",
        "passos": [
          { "ordem": 1, "titulo": "Limpe suavemente", "texto": "Use água fresca a morna ou seu produto de limpeza suave habitual. Seque com toques leves.", "receitas": [] },
          { "ordem": 2, "titulo": "Água de Arroz Refrescante", "texto": "Prepare uma porção fresca. Aplique com toques leves de um disco de algodão limpo, evitando os olhos. Pare se sentir ressecamento.", "receitas": [1] },
          { "ordem": 3, "titulo": "Gel de Conforto de Aloe Vera", "texto": "Aplique uma camada fina e deixe absorver por 2 minutos. Em seguida, use seu hidratante habitual se precisar.", "receitas": [3] },
          { "ordem": 4, "titulo": "Toque de Conforto para a Área dos Olhos", "texto": "Aplique uma quantidade mínima com toques leves ao longo do osso orbital externo, fora das pálpebras e longe dos cílios.", "receitas": [23] },
          { "ordem": 5, "titulo": "Protetor solar SPF 30+ de amplo espectro", "texto": "Aplique todas as manhãs conforme o rótulo. Reaplique pelo menos a cada 2 horas ao ar livre e após nadar ou suar.", "receitas": [] }
        ]
      },
      "noite": {
        "nome": "Máscara de Hoje à Noite",
        "duracao": "Cerca de 25 min",
        "passos": [
          { "ordem": 1, "titulo": "Retire a maquiagem e limpe", "texto": "Use seu produto de limpeza suave habitual.", "receitas": [] },
          { "ordem": 2, "titulo": "Água de Arroz Refrescante", "texto": "Prepare uma porção fresca e aplique com toques leves de um disco de algodão limpo, evitando os olhos.", "receitas": [1] },
          { "ordem": 3, "titulo": "Máscara Nuvem de Aveia", "texto": "Aplique uma camada uniforme por até 15 minutos, conforme a tolerância. Enxágue com água morna sem esfregar.", "receitas": [6] },
          { "ordem": 4, "titulo": "Creme de Conforto Nutritivo", "texto": "Aqueça uma quantidade do tamanho de uma ervilha entre as pontas dos dedos limpas e pressione suavemente no rosto e pescoço. Prepare uma porção fresca para uso único.", "receitas": [12] }
        ]
      },
      "preparoNaVespera": [
        { "quando": "Antes de dormir", "texto": "Separe os ingredientes do Tônico Leve de Chá Verde de amanhã. Ele precisa de 5 min de infusão e depois de tempo para esfriar completamente. Prepare na hora amanhã e descarte as sobras.", "receitas": [4] },
        { "quando": "Antes de dormir", "texto": "Meça o arroz da Água de Arroz Refrescante de amanhã. Amanhã, deixe uma porção fresca de molho por 30 min na geladeira.", "receitas": [1] }
      ],
      "receitasDoDia": [3, 23, 6, 4],
      "gestoDoDia": { "titulo": "Mãos Limpas", "texto": "Lave as mãos antes de tocar no rosto ou manusear uma mistura. Use utensílios limpos em cada passo. Esta é a terceira regra de segurança do ebook." },
      "seODiaApertar": "Dia corrido? Limpe suavemente, use seu hidratante habitual, aplique protetor solar SPF 30+ de amplo espectro e marque o dia. Hoje à noite, limpeza suave e hidratante são suficientes. A Máscara Nuvem de Aveia é um extra opcional se você já a testou.",
      "observacoes": [
        "Pele oleosa ou com tendência à acne: pule o Creme de Conforto Nutritivo. Use seu hidratante leve habitual; uma camada fina já testada de Gel de Conforto de Aloe Vera é opcional."
      ],
      "perguntasParaAnotar": ["Feito!", "Como me senti:"]
    },
    {
      "n": 2,
      "titulo": "Viço de Rosto Fresco",
      "foco": "Uma máscara de tecido caseira e um momento tranquilo.",
      "porQueHoje": "A máscara opcional de discos de algodão de hoje combina água de arroz fresca com chá verde leve para uma sensação fresca de spa. Uma camada fina de sérum de linhaça e aloe pode deixar a pele temporariamente mais lisa ao toque. Use apenas misturas já testadas e pause a programação sempre que precisar.",
      "manha": {
        "nome": "Ritual Matinal Refrescante",
        "duracao": "5 a 8 min",
        "passos": [
          { "ordem": 1, "titulo": "Limpe suavemente", "texto": "Use água fresca a morna ou seu produto de limpeza suave habitual. Seque com toques leves.", "receitas": [] },
          { "ordem": 2, "titulo": "Água de Arroz Refrescante", "texto": "Prepare uma porção fresca. Aplique com toques leves de um disco de algodão limpo, evitando os olhos. Pare se sentir ressecamento.", "receitas": [1] },
          { "ordem": 3, "titulo": "Gel de Conforto de Aloe Vera", "texto": "Aplique uma camada fina e deixe absorver por 2 minutos. Em seguida, use seu hidratante habitual se precisar.", "receitas": [3] },
          { "ordem": 4, "titulo": "Toque de Conforto para a Área dos Olhos", "texto": "Aplique uma quantidade mínima com toques leves ao longo do osso orbital externo, fora das pálpebras e longe dos cílios.", "receitas": [23] },
          { "ordem": 5, "titulo": "Protetor solar SPF 30+ de amplo espectro", "texto": "Aplique todas as manhãs conforme o rótulo. Reaplique pelo menos a cada 2 horas ao ar livre e após nadar ou suar.", "receitas": [] }
        ]
      },
      "noite": {
        "nome": "Máscara de Hoje à Noite",
        "duracao": "Cerca de 20 min",
        "passos": [
          { "ordem": 1, "titulo": "Retire a maquiagem e limpe", "texto": "Use seu produto de limpeza suave habitual.", "receitas": [] },
          { "ordem": 2, "titulo": "Máscara de Tecido Hidratante Caseira", "texto": "Coloque discos de algodão recém-umedecidos nas bochechas e na testa, longe dos olhos, narinas e boca. Relaxe por 10 a 15 minutos, conforme a tolerância. Retire antes de os discos secarem.", "receitas": [7] },
          { "ordem": 3, "titulo": "Sérum Sedoso de Linhaça", "texto": "Prepare uma porção fresca. Pressione suavemente uma camada fina com as palmas limpas e deixe absorver. Descarte as sobras.", "receitas": [22] },
          { "ordem": 4, "titulo": "Creme de Conforto Nutritivo", "texto": "Opcional: finalize com uma porção fresca para uso único se sua pele estiver seca e já tolerar.", "opcional": true, "receitas": [12] }
        ]
      },
      "preparoNaVespera": [
        { "quando": "Hoje à tarde", "texto": "Reserve 8 a 10 min no fogão para o gel de linhaça e depois deixe esfriar completamente. Programe o preparo perto do passo do sérum de hoje à noite; use fresco e descarte as sobras.", "receitas": [21] },
        { "quando": "Antes de dormir", "texto": "Separe os ingredientes da Água de Arroz Refrescante fresca de amanhã.", "receitas": [1] }
      ],
      "receitasDoDia": [21, 7, 22],
      "gestoDoDia": { "titulo": "Uma Fronha Limpa", "texto": "Troque sua fronha hoje. Um tecido limpo e macio deixa o final do ritual um pouco mais agradável." },
      "seODiaApertar": "Dia corrido? Limpe suavemente, use seu hidratante habitual, aplique protetor solar SPF 30+ de amplo espectro e marque o dia. Hoje à noite, limpeza suave e hidratante são suficientes. Adicione a Máscara de Tecido Hidratante Caseira apenas se já estiver testada e for confortável.",
      "observacoes": [
        "Pele sensível: consulte um dermatologista antes de começar. Teste o Sérum Sedoso de Linhaça pronto bem antes desta noite, mesmo que já tenha usado linhaça ou aloe separadamente. Reserve pelo menos 24 horas de observação e tempo extra para reações tardias."
      ],
      "perguntasParaAnotar": ["Feito!", "Como me senti:"]
    },
    {
      "n": 3,
      "titulo": "Conforto Nutritivo",
      "foco": "Mel, iogurte natural e um pouco de óleo de girassol.",
      "porQueHoje": "Hoje há espaço para texturas mais nutritivas, principalmente se sua pele estiver seca. A Máscara de Conforto de Mel e Iogurte pode deixar a pele mais macia, enquanto um pouco de óleo sobre seu hidratante habitual pode dar um toque acetinado. Ajuste cada passo ao conforto da sua pele.",
      "manha": {
        "nome": "Ritual Matinal Refrescante",
        "duracao": "5 a 8 min",
        "passos": [
          { "ordem": 1, "titulo": "Limpe suavemente", "texto": "Use água fresca a morna ou seu produto de limpeza suave habitual. Seque com toques leves.", "receitas": [] },
          { "ordem": 2, "titulo": "Água de Arroz Refrescante", "texto": "Prepare uma porção fresca. Aplique com toques leves de um disco de algodão limpo, evitando os olhos. Pare se sentir ressecamento.", "receitas": [1] },
          { "ordem": 3, "titulo": "Gel de Conforto de Aloe Vera", "texto": "Aplique uma camada fina e deixe absorver por 2 minutos. Em seguida, use seu hidratante habitual se precisar.", "receitas": [3] },
          { "ordem": 4, "titulo": "Toque de Conforto para a Área dos Olhos", "texto": "Aplique uma quantidade mínima com toques leves ao longo do osso orbital externo, fora das pálpebras e longe dos cílios.", "receitas": [23] },
          { "ordem": 5, "titulo": "Protetor solar SPF 30+ de amplo espectro", "texto": "Aplique todas as manhãs conforme o rótulo. Reaplique pelo menos a cada 2 horas ao ar livre e após nadar ou suar.", "receitas": [] }
        ]
      },
      "noite": {
        "nome": "Máscara de Hoje à Noite",
        "duracao": "Cerca de 20 min",
        "passos": [
          { "ordem": 1, "titulo": "Retire a maquiagem e limpe", "texto": "Use seu produto de limpeza suave habitual.", "receitas": [] },
          { "ordem": 2, "titulo": "Máscara de Conforto de Mel e Iogurte", "texto": "Aplique uma camada uniforme por até 15 minutos, conforme a tolerância. Enxágue com água morna sem esfregar. Descarte o restante da mistura.", "receitas": [13] },
          { "ordem": 3, "titulo": "Óleo de Acabamento Sedoso", "texto": "Aqueça 3 a 4 gotas de óleo de jojoba puro entre as palmas limpas e pressione suavemente na pele levemente úmida, evitando os olhos. Use seu hidratante habitual antes, se precisar.", "receitas": [18] }
        ]
      },
      "preparoNaVespera": [
        { "quando": "Antes de dormir", "texto": "Separe panos de rosto limpos e macios para a Compressa Matinal Refrescante para os Olhos de amanhã. Amanhã, umedeça com água limpa e resfrie em um recipiente tampado na geladeira por 15 min. Não precisa de chá.", "receitas": [24] },
        { "quando": "Antes de dormir", "texto": "Separe os ingredientes da Água de Arroz Refrescante fresca de amanhã.", "receitas": [1] }
      ],
      "receitasDoDia": [13, 18, 24],
      "gestoDoDia": { "titulo": "Um Prato Colorido", "texto": "Experimente adicionar 3 cores de frutas ou vegetais ao prato hoje. Aproveitar uma refeição variada pode fazer parte de reservar tempo para você." },
      "seODiaApertar": "Dia corrido? Limpe suavemente, use seu hidratante habitual, aplique protetor solar SPF 30+ de amplo espectro e marque o dia. Hoje à noite, limpeza suave e hidratante são suficientes. Adicione a Máscara de Conforto de Mel e Iogurte apenas se já a testou.",
      "observacoes": [
        "Pele oleosa: deixe a Máscara de Conforto de Mel e Iogurte por no máximo 10 minutos e use apenas 1 ou 2 gotas de óleo nas áreas secas se precisar. Pule o iogurte completamente se tiver alergia ao leite."
      ],
      "perguntasParaAnotar": ["Feito!", "Como me senti:"]
    },
    {
      "n": 4,
      "titulo": "Descanso",
      "foco": "Um respiro no meio do caminho.",
      "porQueHoje": "Hoje é uma chance de desacelerar. Uma compressa limpa de água fresca oferece uma pausa refrescante pela manhã, e a máscara noturna opcional pode deixar a pele mais macia. Sua rotina suave habitual é sempre uma boa escolha se a pele precisar de uma pausa.",
      "manha": {
        "nome": "Manhã Tranquila",
        "duracao": "Cerca de 15 min",
        "passos": [
          { "ordem": 1, "titulo": "Compressa Matinal Refrescante para os Olhos", "texto": "Umedeça panos de rosto limpos e macios com água limpa e resfrie na geladeira. Apoie um levemente sobre cada olho fechado por até 10 minutos, conforme o conforto. Use panos frescos, nunca gelo, e não pressione.", "receitas": [24] },
          { "ordem": 2, "titulo": "Limpe suavemente", "texto": "Use água fresca a morna ou seu produto de limpeza suave habitual. Seque com toques leves.", "receitas": [] },
          { "ordem": 3, "titulo": "Água de Arroz Refrescante", "texto": "Prepare uma porção fresca e aplique com toques leves de um disco de algodão limpo, evitando os olhos. Adicione seu hidratante habitual se precisar.", "receitas": [1] },
          { "ordem": 4, "titulo": "Protetor solar SPF 30+ de amplo espectro", "texto": "Aplique todas as manhãs, inclusive nos dias de descanso. Reaplique pelo menos a cada 2 horas ao ar livre e após nadar ou suar.", "receitas": [] }
        ]
      },
      "noite": {
        "nome": "Máscara de Hoje à Noite",
        "duracao": "Cerca de 40 min",
        "passos": [
          { "ordem": 1, "titulo": "Retire a maquiagem e limpe", "texto": "Use seu produto de limpeza suave habitual.", "receitas": [] },
          { "ordem": 2, "titulo": "Máscara de Conforto Noturno", "texto": "Aplique uma camada fina cerca de 30 minutos antes de dormir, longe dos olhos. Use uma faixa para afastar o cabelo, enxágue com água morna e descarte as sobras. Não durma com a mistura; enxágue antes se sentir desconforto.", "receitas": [14] },
          { "ordem": 3, "titulo": "Toque de Conforto para a Área dos Olhos", "texto": "Aplique uma quantidade mínima com toques leves ao longo do osso orbital externo, fora das pálpebras e longe dos cílios.", "receitas": [23] },
          { "ordem": 4, "titulo": "Creme de Conforto Nutritivo", "texto": "Finalize com uma porção fresca para uso único se sua pele tolerar, ou use seu hidratante habitual.", "receitas": [12] }
        ]
      },
      "preparoNaVespera": [
        { "quando": "Hoje à tarde, cerca de 20 min", "texto": "Reveja o Creme de Conforto para Pescoço e Colo e o Bálsamo de Lábios Macios e separe os ingredientes para os Dias 6 e 7. Prepare porções frescas para uso único quando necessário; os prazos originais de armazenamento de 30 dias não foram verificados.", "receitas": [25, 9] },
        { "quando": "Antes de dormir", "texto": "Separe os ingredientes da Água de Arroz Refrescante fresca de amanhã.", "receitas": [1] }
      ],
      "receitasDoDia": [14, 25, 9],
      "gestoDoDia": { "titulo": "Uma Hora de Dormir Mais Tranquila", "texto": "Deixe as telas de lado 30 minutos antes de dormir e relaxe. Procure reservar espaço para 7 horas de sono ou mais." },
      "seODiaApertar": "Dia corrido? Limpe suavemente, use seu hidratante habitual, aplique protetor solar SPF 30+ de amplo espectro e marque o dia. Hoje à noite, limpeza suave e hidratante são suficientes. Mantenha a Máscara de Conforto Noturno opcional.",
      "observacoes": [
        "Pele oleosa: pule o Creme de Conforto Nutritivo e use seu hidratante leve habitual. O Toque de Conforto para a Área dos Olhos é opcional e não substitui o hidratante facial."
      ],
      "perguntasParaAnotar": ["Feito!", "Como me senti:"]
    },
    {
      "n": 5,
      "titulo": "Textura Suave",
      "foco": "Um toque suave e uma máscara cremosa de arroz.",
      "porQueHoje": "O foco de hoje é a sensação da pele ao toque. O passo de aveia e arroz é opcional e deve ser macio e suave, seguido da máscara de arroz apenas se ambos já forem tolerados. A pele seca ou delicada costuma se dar melhor com menos passos.",
      "manha": {
        "nome": "Ritual Matinal Refrescante",
        "duracao": "5 a 8 min",
        "passos": [
          { "ordem": 1, "titulo": "Limpe suavemente", "texto": "Use água fresca a morna ou seu produto de limpeza suave habitual. Seque com toques leves.", "receitas": [] },
          { "ordem": 2, "titulo": "Água de Arroz Refrescante", "texto": "Prepare uma porção fresca. Aplique com toques leves de um disco de algodão limpo, evitando os olhos. Pare se sentir ressecamento.", "receitas": [1] },
          { "ordem": 3, "titulo": "Gel de Conforto de Aloe Vera", "texto": "Aplique uma camada fina e deixe absorver por 2 minutos. Em seguida, use seu hidratante habitual se precisar.", "receitas": [3] },
          { "ordem": 4, "titulo": "Toque de Conforto para a Área dos Olhos", "texto": "Aplique uma quantidade mínima com toques leves ao longo do osso orbital externo, fora das pálpebras e longe dos cílios.", "receitas": [23] },
          { "ordem": 5, "titulo": "Protetor solar SPF 30+ de amplo espectro", "texto": "Aplique todas as manhãs conforme o rótulo. Reaplique pelo menos a cada 2 horas ao ar livre e após nadar ou suar.", "receitas": [] }
        ]
      },
      "noite": {
        "nome": "Máscara de Hoje à Noite",
        "duracao": "Cerca de 25 min",
        "passos": [
          { "ordem": 1, "titulo": "Retire a maquiagem e limpe", "texto": "Use seu produto de limpeza suave habitual.", "receitas": [] },
          { "ordem": 2, "titulo": "Esfoliante Suave de Aveia e Arroz", "texto": "Opcional: use apenas ingredientes bem moídos em uma pasta macia e bem umedecida. Espalhe levemente sobre a pele úmida por até 30 segundos sem esfregar ou pressionar e enxágue com água morna. Pule se a mistura estiver granulosa.", "receitas": [17] },
          { "ordem": 3, "titulo": "Máscara Cremosa de Arroz", "texto": "Aplique uma camada por até 15 minutos, conforme a tolerância, evitando a área dos olhos. Enxágue com água morna. Pule este passo se a pele ficar desconfortável após o esfoliante.", "receitas": [11] },
          { "ordem": 4, "titulo": "Creme de Conforto Nutritivo", "texto": "Aqueça uma quantidade do tamanho de uma ervilha de uma porção fresca para uso único entre as pontas dos dedos limpas e pressione suavemente. Use seu hidratante habitual se preferir.", "receitas": [12] }
        ]
      },
      "preparoNaVespera": [
        { "quando": "Antes de dormir", "texto": "Separe os ingredientes da Água de Arroz Refrescante fresca de amanhã.", "receitas": [1] }
      ],
      "receitasDoDia": [17, 11],
      "gestoDoDia": { "titulo": "Faça do Protetor Solar um Hábito Diário", "texto": "Todas as manhãs, aplique protetor solar SPF 30+ de amplo espectro conforme as instruções. Reaplique pelo menos a cada 2 horas ao ar livre e após nadar ou suar. Acrescente sombra e chapéu quando estiver fora." },
      "seODiaApertar": "Dia corrido? Limpe suavemente, use seu hidratante habitual, aplique protetor solar SPF 30+ de amplo espectro e marque o dia. Hoje à noite, limpeza suave e hidratante são suficientes. Se quiser um extra já testado, escolha a Máscara Cremosa de Arroz e pule o esfoliante.",
      "observacoes": [
        "Pele sensível, acne inflamada, cortes ou irritação: pule o esfoliante. Consulte seu dermatologista antes de experimentar máscaras se tiver alguma condição de pele. Pele oleosa: pule o Creme de Conforto Nutritivo. Evite o esfoliante ao usar retinoides, ácidos esfoliantes ou outros produtos que deixam a pele mais sensível."
      ],
      "perguntasParaAnotar": ["Feito!", "Como me senti:"]
    },
    {
      "n": 6,
      "titulo": "Toque Suave",
      "foco": "Gel de linhaça, uma massagem leve e cuidado para o pescoço.",
      "porQueHoje": "Hoje é sobre um toque temporariamente mais liso e relaxante. O gel de linhaça pode deixar uma película leve que faz a pele parecer mais lisa enquanto está aplicado. A massagem suave oferece uma pausa tranquila, e o creme também dá atenção ao pescoço e ao colo. Esses passos não mudam a estrutura da pele nem proporcionam um efeito lifting duradouro.",
      "manha": {
        "nome": "Ritual Matinal Refrescante",
        "duracao": "5 a 8 min",
        "passos": [
          { "ordem": 1, "titulo": "Limpe suavemente", "texto": "Use água fresca a morna ou seu produto de limpeza suave habitual. Seque com toques leves.", "receitas": [] },
          { "ordem": 2, "titulo": "Água de Arroz Refrescante", "texto": "Prepare uma porção fresca. Aplique com toques leves de um disco de algodão limpo, evitando os olhos. Pare se sentir ressecamento.", "receitas": [1] },
          { "ordem": 3, "titulo": "Gel de Conforto de Aloe Vera", "texto": "Aplique uma camada fina e deixe absorver por 2 minutos. Em seguida, use seu hidratante habitual se precisar.", "receitas": [3] },
          { "ordem": 4, "titulo": "Toque de Conforto para a Área dos Olhos", "texto": "Aplique uma quantidade mínima com toques leves ao longo do osso orbital externo, fora das pálpebras e longe dos cílios.", "receitas": [23] },
          { "ordem": 5, "titulo": "Protetor solar SPF 30+ de amplo espectro", "texto": "Aplique todas as manhãs conforme o rótulo. Reaplique pelo menos a cada 2 horas ao ar livre e após nadar ou suar.", "receitas": [] }
        ]
      },
      "noite": {
        "nome": "Máscara de Hoje à Noite",
        "duracao": "Cerca de 25 min",
        "passos": [
          { "ordem": 1, "titulo": "Retire a maquiagem e limpe", "texto": "Use seu produto de limpeza suave habitual.", "receitas": [] },
          { "ordem": 2, "titulo": "Máscara de Linhaça de Toque Suave", "texto": "Aplique uma camada fina com os dedos limpos, longe dos olhos. Deixe por até 15 minutos, conforme a tolerância. Enxágue com água morna antes de secar; enxágue imediatamente se sentir repuxamento ou desconforto.", "receitas": [21] },
          { "ordem": 3, "titulo": "Massagem Facial Suave de 5 Minutos", "texto": "Use 3 a 4 gotas de Óleo de Acabamento Sedoso para deslizar e siga os 5 movimentos da receita com um toque bem leve. Não pressione a parte da frente do pescoço e pare se a pele for puxada ou sentir desconforto.", "receitas": [28, 18] },
          { "ordem": 4, "titulo": "Creme de Conforto para Pescoço e Colo", "texto": "Espalhe suavemente uma porção fresca para uso único com movimentos leves para cima. Evite pressão e puxões.", "receitas": [25] }
        ]
      },
      "preparoNaVespera": [
        { "quando": "Fim da tarde", "texto": "Prepare gel de linhaça fresco perto do passo da Máscara de Linhaça de Toque Suave de hoje à noite e deixe esfriar completamente. Use imediatamente e descarte as sobras. A receita está no Dia 2.", "receitas": [21] },
        { "quando": "Antes de dormir", "texto": "Separe a água destilada e um recipiente limpo para a Bruma de Rosto Fresco de amanhã, que leva 2 min para preparar. Separe também os ingredientes da Água de Arroz Refrescante fresca.", "receitas": [2, 1] }
      ],
      "receitasDoDia": [28, 2],
      "gestoDoDia": { "titulo": "Relaxe os Ombros", "texto": "Durante a massagem, relaxe os ombros e a mandíbula, com o queixo paralelo ao chão. Termine com uma respiração lenta e confortável." },
      "seODiaApertar": "Dia corrido? Limpe suavemente, use seu hidratante habitual, aplique protetor solar SPF 30+ de amplo espectro e marque o dia. Hoje à noite, limpeza suave e hidratante são suficientes. Se for agradável, adicione a Massagem Facial Suave de 5 Minutos com um óleo já testado.",
      "observacoes": [
        "Mantenha esta ordem: aplique gel de linhaça fresco na pele limpa, enxágue e depois massageie com óleo. Evite massagear áreas com irritação, acne inflamada ou pele ferida."
      ],
      "perguntasParaAnotar": ["Feito!", "Como me senti:"]
    },
    {
      "n": 7,
      "titulo": "Celebre",
      "foco": "Uma sensação fresca, lábios macios e tempo para refletir.",
      "porQueHoje": "O último dia mantém tudo simples: uma bruma opcional de água fresca pela manhã, uma máscara cremosa à noite e um pouco de conforto labial antes de dormir. Depois, reserve um momento para perceber quais passos se encaixaram na sua vida e fizeram bem à sua pele.",
      "manha": {
        "nome": "Manhã Tranquila",
        "duracao": "Cerca de 3 min",
        "passos": [
          { "ordem": 1, "titulo": "Limpe suavemente", "texto": "Use água fresca a morna ou seu produto de limpeza suave habitual. Seque com toques leves.", "receitas": [] },
          { "ordem": 2, "titulo": "Bruma de Rosto Fresco", "texto": "Use uma porção fresca de água destilada para uso único. Umedeça levemente a pele limpa a cerca de 8 inches de distância, evitando os olhos e a inalação, ou aplique com toques das mãos limpas. Em seguida, use seu hidratante habitual.", "receitas": [2] },
          { "ordem": 3, "titulo": "Protetor solar SPF 30+ de amplo espectro", "texto": "Aplique todas as manhãs conforme o rótulo. Reaplique pelo menos a cada 2 horas ao ar livre e após nadar ou suar.", "receitas": [] }
        ]
      },
      "noite": {
        "nome": "Máscara de Hoje à Noite",
        "duracao": "Cerca de 20 min",
        "passos": [
          { "ordem": 1, "titulo": "Retire a maquiagem e limpe", "texto": "Use seu produto de limpeza suave habitual.", "receitas": [] },
          { "ordem": 2, "titulo": "Máscara Cremosa de Iogurte", "texto": "Aplique uma camada por até 15 minutos, conforme a tolerância. Enxágue com água morna sem esfregar e use seu hidratante habitual se precisar. Descarte as sobras.", "receitas": [10] },
          { "ordem": 3, "titulo": "Óleo de Conforto Noturno", "texto": "Opcional: pressione suavemente sobre a pele levemente úmida, focando nas áreas secas. Use apenas se já testou o óleo. Pule este passo se não tiver óleo de semente de rosa-mosqueta.", "opcional": true, "receitas": [29] },
          { "ordem": 4, "titulo": "Bálsamo de Lábios Macios", "texto": "Espalhe uma camada confortável nos lábios limpos e secos antes de dormir. Use uma porção fresca para uso único ou seu bálsamo labial sem fragrância habitual.", "receitas": [9] }
        ]
      },
      "preparoNaVespera": [
        { "quando": "Hoje", "texto": "Não é preciso misturar com antecedência. Prepare porções frescas da Água de Arroz Refrescante ou do Bálsamo de Lábios Macios opcionais que escolher usar e preencha sua reflexão.", "receitas": [1, 9] }
      ],
      "receitasDoDia": [10, 29],
      "gestoDoDia": { "titulo": "Perceba Uma Coisa Boa", "texto": "Escreva uma coisa de que gostou nestes 7 dias. Um pequeno momento conta." },
      "seODiaApertar": "Dia corrido? Limpe suavemente, use seu hidratante habitual, aplique protetor solar SPF 30+ de amplo espectro e marque o dia. Hoje à noite, limpeza suave e hidratante são suficientes. Adicione a Máscara Cremosa de Iogurte apenas se já estiver testada e for confortável.",
      "observacoes": [
        "Pele oleosa: deixe a Máscara Cremosa de Iogurte por no máximo 10 minutos. Pule completamente se tiver alergia ao leite ou se causar ardor."
      ],
      "perguntasParaAnotar": ["Feito!", "Como me senti:"]
    }
  ],
  "seOdiaApertar": {
    "titulo": "Quando a Vida Fica Corrida",
    "subtitulo": "Sua rotina pode caber na vida real.",
    "versaoEssencial": {
      "diaCorrido": { "titulo": "Um Dia Corrido", "texto": "Simplifique: limpe suavemente, use seu hidratante habitual e aplique protetor solar SPF 30+ de amplo espectro todas as manhãs. A Água de Arroz Refrescante é opcional e deve ser preparada na hora. Marque o dia. A constância importa mais que a perfeição.", "receitas": [1] },
      "esqueciUmDia": { "titulo": "Pulei um Dia", "texto": "Dê um pouco de espaço a si mesma. Retome de onde parou quando estiver pronta. Reserve tempo suficiente para testar qualquer mistura nova e evite dobrar as máscaras." },
      "peleReagiu": { "titulo": "Minha Pele Repuxa, Arde ou Está Vermelha", "texto": "Enxágue suavemente com água fresca a morna e pare de usar a mistura. Pause o Desafio e evite aplicar produtos caseiros na pele irritada. Entre em contato com um dermatologista se os sintomas persistirem ou tiver dúvidas. Procure ajuda médica urgente em caso de dificuldade para respirar ou inchaço dos lábios ou da língua." }
    },
    "trocas": {
      "titulo": "Falta um Ingrediente? Substituições Simples",
      "itens": [
        { "emVezDe": "Arroz branco puro", "podeUsar": "Arroz jasmim puro", "emQualReceita": "Água de Arroz Refrescante", "receitas": [1] },
        { "emVezDe": "Leite", "podeUsar": "Bebida vegetal pura sem açúcar com ingredientes que você tolera; pule a receita se tiver alergia à aveia", "emQualReceita": "Máscara Nuvem de Aveia", "receitas": [6] },
        { "emVezDe": "Óleo de amêndoas doces", "podeUsar": "Óleo de jojoba puro, usado em toda esta versão", "emQualReceita": "Óleo de Acabamento Sedoso", "receitas": [18] },
        { "emVezDe": "Sachês de camomila ou chá verde sobre os olhos", "podeUsar": "Panos de rosto limpos e macios umedecidos com água limpa e fresca", "emQualReceita": "Compressa Matinal Refrescante para os Olhos", "receitas": [24] },
        { "emVezDe": "Cera de abelha", "podeUsar": "Seu bálsamo labial sem fragrância habitual se evitar cera de abelha; ceras vegetais não são intercambiáveis na mesma quantidade", "emQualReceita": "Bálsamo de Lábios Macios", "receitas": [9] },
        { "emVezDe": "Óleo de semente de rosa-mosqueta", "podeUsar": "Deixe de fora do creme e pule o passo opcional de óleo", "emQualReceita": "Creme de Conforto para Pescoço e Colo e Óleo de Conforto Noturno", "receitas": [25, 29] },
        { "emVezDe": "Água de Arroz Refrescante, 1 tsp", "podeUsar": "Água destilada recém-servida; prepare uma porção para uso único e descarte as sobras", "emQualReceita": "Gel de Conforto de Aloe Vera e Máscara Cremosa de Iogurte", "receitas": [3, 10] }
      ]
    },
    "cadaPeleUmAjuste": {
      "titulo": "Abra Espaço para as Necessidades da Sua Pele",
      "itens": [
        { "pele": "Pele Oleosa", "texto": "Pule o Creme de Conforto Nutritivo e use seu hidratante leve habitual. Deixe a Máscara de Conforto de Mel e Iogurte e a Máscara Cremosa de Iogurte por no máximo 10 minutos, conforme a tolerância. Se usar óleo, experimente apenas 1 ou 2 gotas nas áreas secas." },
        { "pele": "Pele Seca", "texto": "As opções mais nutritivas da Camada 2, Máscara de Conforto de Mel e Iogurte, Máscara de Conforto Noturno e Creme de Conforto Nutritivo, podem trazer conforto se já forem toleradas. Mantenha seu hidratante habitual na rotina. Se a Água de Arroz Refrescante deixar a pele repuxando, pare de usar." },
        { "pele": "Pele Sensível", "texto": "Converse com um dermatologista antes de começar e pule o Esfoliante Suave de Aveia e Arroz. Teste cada ingrediente novo e mistura pronta, observe por pelo menos 24 horas e reserve mais tempo para reações tardias. Busque orientação individual se tiver acne inflamatória, rosácea, dermatite, outra condição de pele ou estiver grávida." }
      ],
      "usarComOutrosProdutos": "Posso continuar usando meus produtos habituais? Mantenha seu produto de limpeza suave, hidratante e protetor solar SPF 30+ de amplo espectro. Introduza apenas uma mistura nova por vez. Evite sobrepor máscaras caseiras ou o esfoliante com retinoides, ácidos esfoliantes ou outros produtos potencialmente irritantes. Pergunte ao dermatologista como encaixar os passos caseiros opcionais junto aos cuidados prescritos."
    }
  },
  "balancoFinal": {
    "titulo": "Minha Reflexão",
    "subtitulo": "Olhe para trás com um pouco de carinho.",
    "perguntas": [
      "O que mais gostei nestes 7 dias:",
      "O que pareceu confortável para minha pele:",
      "O que gostaria de manter na rotina:"
    ],
    "meus7Dias": "Marque cada um dos 7 dias: 1 Refrescar e Hidratar, 2 Viço de Rosto Fresco, 3 Conforto Nutritivo, 4 Descanso, 5 Textura Suave, 6 Toque Suave, 7 Celebre.",
    "compareComODia0": {
      "instrucao": "Avalie cada item de 1 (baixo) a 5 (alto). Reveja suas anotações iniciais para refletir sobre conforto e satisfação. Estas avaliações pessoais não são evidência da eficácia de produtos.",
      "escala": { "min": 1, "max": 5 },
      "itens": ["Quanto conforto minha pele sente", "Maciez ao toque", "Quanto frescor minha pele aparenta", "Quanto me sinto pronta para o ritual"]
    },
    "meuProximoPasso": [
      "Mantenha os 6 Essenciais do Dia a Dia, ebook p. 5",
      "Escolha uma rotina por preferência, ebook p. 41",
      "Repetir apenas os passos que minha pele tolerou e dos quais gostei"
    ],
    "lembrete": "Os efeitos descritos dizem respeito à aparência ou à sensação da pele, como maciez temporária, aparência fresca ou conforto. Os resultados variam, e você pode não notar mudança. É autocuidado cosmético, não orientação médica.",
    "oQueVemDepois": {
      "titulo": "Depois dos 7 Dias",
      "subtitulo": "Continue a partir do que trouxe conforto.",
      "opcoes": [
        { "n": 1, "titulo": "Escolha Seu Foco", "texto": "Escolha o que importa para você: uma aparência mais fresca, texturas confortáveis aos 40 anos ou hidratação mais nutritiva aos 50 anos ou mais. Deixe as necessidades da sua pele guiarem você. Ebook p. 41." },
        { "n": 2, "titulo": "6 Essenciais do Dia a Dia", "texto": "Mantenha os passos simples de que gostou e que tolerou. Limpeza diária, hidratante e protetor solar podem continuar no centro. Ebook p. 5." }
      ],
      "quantoDuraCadaPreparo": [
        { "preparo": "Água de Arroz Refrescante", "receitas": [1], "validade": "Prepare na hora, use imediatamente e descarte as sobras; sem prazo de armazenamento verificado" },
        { "preparo": "Tônico Leve de Chá Verde", "receitas": [4], "validade": "Prepare a infusão na hora, deixe esfriar completamente, use imediatamente e descarte as sobras" },
        { "preparo": "Bruma de Rosto Fresco", "receitas": [2], "validade": "Sirva uma porção de água destilada para uso único; descarte o restante e lave e seque o recipiente" },
        { "preparo": "Gel de Linhaça e Sérum Sedoso de Linhaça", "receitas": [21, 22], "validade": "Prepare na hora, deixe esfriar completamente, use imediatamente e descarte as sobras" },
        { "preparo": "Creme de Conforto Nutritivo, Creme de Conforto para Pescoço e Colo e Bálsamo de Lábios Macios", "receitas": [12, 25, 9], "validade": "Porções frescas para uso único; os prazos originais de armazenamento de 30 dias não foram verificados" },
        { "preparo": "Máscaras e Toque de Conforto para a Área dos Olhos", "receitas": [23], "validade": "Prepare uma porção fresca para uso único e descarte as sobras imediatamente" }
      ],
      "fechamento": {
        "titulo": "Sete Dias de Cuidado. Mantenha o que se Encaixa.",
        "texto": "Dê o próximo passo no seu ritmo. Mantenha seus essenciais diários, dê pausas à pele e repita apenas as receitas opcionais que testou e gostou."
      },
      "calendarioDe21Dias": {
        "observacao": "Conteúdo ligado a um produto separado, o Calendário de 21 Dias. Exiba apenas se esse produto estiver disponível no app.",
        "opcao": { "titulo": "Calendário de 21 Dias", "texto": "Uma forma mais suave de continuar, explorando as 3 camadas com mais espaço para respirar." },
        "comoEntrarSemAtrito": [
          { "n": 1, "titulo": "Tire um Dia de Descanso", "texto": "Depois do Dia 7, fique com a limpeza suave, seu hidratante habitual e protetor solar SPF 30+ de amplo espectro. Pule misturas extras se sua pele estiver seca ou sensível." },
          { "n": 2, "titulo": "Comece pelo Dia 1", "texto": "Comece pela Semana 1. Seu ritmo mais leve dá espaço para se adaptar ao hábito e terminar os testes de ingredientes novos." },
          { "n": 3, "titulo": "Use os Ingredientes que Já Tem", "texto": "As alegações originais de armazenamento de 30 dias do Creme de Conforto Nutritivo, Bálsamo de Lábios Macios e Creme de Conforto para Pescoço e Colo não foram verificadas. Quando o Calendário pedir esses itens nos Dias 8, 7 e 15, prepare porções frescas para uso único com ingredientes armazenados corretamente. Cheiro e aparência não confirmam a segurança." },
          { "n": 4, "titulo": "Compre Apenas o que Falta", "texto": "Se tiver as Listas de Compras do Ritual, confira os ingredientes restantes e seus rótulos antes de comprar. Reserve o necessário para porções frescas e testes em pequena área." }
        ],
        "jaFazendoOCalendario": "Já está seguindo o Calendário? Continue até o Dia 21 no ritmo que sua pele tolerar. Você pode revisitar o Desafio depois se quiser, mantendo misturas novas opcionais e reservando dias de descanso."
      }
    }
  },
  "avisos": [
    "Teste cada ingrediente novo e cada mistura pronta em pequenas áreas separadas da parte interna do antebraço antes do uso facial. Siga o tempo de contato indicado, enxágue as misturas com enxágue e observe por pelo menos 24 horas. Reserve mais tempo para reações tardias; uma avaliação de 24 horas não estabelece segurança. Pule qualquer coisa que cause coceira, ardor, vermelhidão ou inchaço e nunca teste um alérgeno conhecido.",
    "Se tiver pele sensível, acne inflamatória, rosácea, dermatite, outra condição de pele ou estiver grávida, converse com um dermatologista antes de começar. Não aplique misturas caseiras em cortes, pele ferida ou áreas irritadas.",
    "Use protetor solar SPF 30+ de amplo espectro todas as manhãs, faça chuva ou sol, seguindo o rótulo. Reaplique pelo menos a cada 2 horas ao ar livre e após nadar ou suar. Escolha protetor resistente à água para atividades ao ar livre e use também sombra e roupas de proteção. Receitas caseiras não oferecem proteção solar confiável.",
    "Água de Arroz Refrescante: deixe uma porção fresca de molho na geladeira, use imediatamente após coar e descarte as sobras. Não fermente. Pare se deixar a pele repuxando. A refrigeração e um cheiro normal não estabelecem que uma mistura caseira é segura.",
    "Creme de Conforto Nutritivo: esta textura nutritiva pode não ser adequada à pele oleosa ou com tendência à acne. Use uma espátula limpa e prepare uma porção fresca para uso único. A alegação original de armazenamento de 30 dias não foi verificada.",
    "Gel de Conforto de Aloe Vera: use gel de aloe vera industrializado com aloe 100% puro como base, sem fragrância, corantes ou álcool que resseca adicionados, e siga o rótulo. Evite folhas cruas de aloe e a seiva amarela. Após misturar com outros ingredientes, prepare apenas uma porção fresca para uso único.",
    "Toque de Conforto para a Área dos Olhos: use apenas uma quantidade mínima ao longo do osso orbital externo. Mantenha misturas caseiras fora das pálpebras e longe dos cílios e olhos. Seu produto sem fragrância habitual para os olhos é uma alternativa. Se houver ardor, vermelhidão ou lacrimejamento, enxágue com água limpa e pare de usar.",
    "Máscara Nuvem de Aveia: pule se tiver alergia à aveia. Se tiver alergia ao leite, use apenas uma bebida vegetal pura cujos ingredientes você tolere. Não substitua por outro alérgeno conhecido. Moa bem a aveia, enxágue sem esfregar e descarte as sobras.",
    "Tônico Leve de Chá Verde: use chá puro sem sabor e mantenha a infusão leve. Deixe esfriar completamente antes de usar. Prepare uma porção fresca para uso único e descarte as sobras; uma infusão forte pode ressecar.",
    "Gel de linhaça, a base da Máscara de Linhaça de Toque Suave: use gel recém-preparado e completamente frio. Enxágue antes de secar completamente e imediatamente se sentir repuxamento, coceira ou desconforto. Qualquer aparência mais lisa é temporária.",
    "Máscara de Tecido Hidratante Caseira: use líquido fresco e discos de algodão limpos, longe dos olhos, narinas e boca. Não durma com a máscara nem deixe secar sobre a pele. Descarte os discos e o líquido restante após usar.",
    "Sérum Sedoso de Linhaça: prepare apenas uma porção fresca para uso único e descarte as sobras. Não confie no cheiro, na textura ou na refrigeração para determinar a segurança.",
    "Máscara de Conforto de Mel e Iogurte: use iogurte natural sem açúcar e um pouco de óleo de girassol puro no lugar do azeite. Pule a receita se tiver alergia a algum ingrediente. Para pele oleosa, deixe por no máximo 10 minutos, conforme a tolerância. Enxágue antes se sentir desconforto.",
    "Óleo de Acabamento Sedoso: esta versão usa óleo de jojoba puro no lugar do óleo de amêndoas doces. Teste em pequena área primeiro. Para pele oleosa, use apenas 1 ou 2 gotas nas áreas secas se precisar. Mantenha longe dos olhos e pare se causar irritação ou acne.",
    "Compressa Matinal Refrescante para os Olhos: use panos de rosto limpos e macios umedecidos com água limpa e fresca em vez de sachês de chá. Apoie levemente sobre os olhos fechados sem pressão. Evite gelo e panos congelados. Pare se sentir desconforto e lave os panos após cada uso.",
    "Máscara de Conforto Noturno: enxágue antes de dormir. Não durma com a mistura no rosto. Mantenha longe dos olhos, use uma faixa para afastar o cabelo e descarte as sobras.",
    "Creme de Conforto para Pescoço e Colo: prepare uma porção fresca para uso único e teste em pequena área o óleo opcional de semente de rosa-mosqueta. Use movimentos leves sem puxar nem pressionar a frente do pescoço. Aplique SPF 30+ de amplo espectro no pescoço e colo expostos todos os dias.",
    "Bálsamo de Lábios Macios: use ingredientes de grau cosmético e uma espátula limpa e seca. Mantenha água fora, deixe qualquer mistura derretida esfriar completamente antes de aplicar e use uma porção fresca para uso único. A alegação original de armazenamento de 30 dias não foi verificada. Seu bálsamo labial sem fragrância habitual é uma alternativa.",
    "Esfoliante Suave de Aveia e Arroz: pule se tiver pele sensível, acne inflamada, cortes, irritação ou usar produtos que aumentam a sensibilidade da pele. Use apenas ingredientes bem moídos em uma pasta macia e bem umedecida. Evite esfregar, pressionar e misturas granulosas.",
    "Máscara Cremosa de Arroz: evite a área dos olhos e enxágue imediatamente se a pele repuxar, coçar ou ficar desconfortável. Prepare uma porção fresca para uso único e descarte as sobras.",
    "Massagem Facial Suave de 5 Minutos: use um toque bem leve e óleo suficiente para deslizar. Evite puxões, áreas irritadas e pressão na frente do pescoço. Pare se sentir desconforto. A massagem não proporciona efeito lifting duradouro nem muda a estrutura da pele.",
    "Bruma de Rosto Fresco: esta versão substitui água de rosas por água destilada recém-servida para evitar fragrância adicionada e exposição a componentes botânicos. Prepare uma porção para uso único, evite os olhos e a inalação e finalize com hidratante. Descarte as sobras e lave e seque o recipiente.",
    "Máscara Cremosa de Iogurte: pule se tiver alergia ao leite. Para pele oleosa, deixe por no máximo 10 minutos, conforme a tolerância. Enxágue imediatamente se arder. Use uma porção fresca para uso único e descarte as sobras.",
    "Óleo de Conforto Noturno: teste o óleo de semente de rosa-mosqueta em pequena área antes de usar e pule se sua pele reagir. Mantenha longe dos olhos. Aplique SPF 30+ de amplo espectro todas as manhãs, usando ou não este óleo.",
    "Se a pele repuxar, arder, coçar ou ficar vermelha, enxágue suavemente com água fresca a morna e pare de usar a mistura. Pause o Desafio e entre em contato com um dermatologista se os sintomas persistirem ou tiver dúvidas. Procure ajuda médica urgente em caso de dificuldade para respirar ou inchaço dos lábios ou da língua.",
    "Introduza uma mistura nova por vez e reserve testes adequados antes de adicionar outra. Evite combinar máscaras caseiras ou o esfoliante com retinoides, ácidos esfoliantes ou outros produtos potencialmente irritantes. Consulte seu dermatologista sobre o uso junto aos cuidados prescritos.",
    "As descrições se referem apenas à aparência e à sensação da pele, como maciez temporária, aparência fresca ou conforto. Os resultados variam, e algumas pessoas podem não notar benefício. Não há promessa de redução duradoura de rugas, lifting ou mudança relacionada à idade.",
    "Este é autocuidado cosmético informativo, não orientação médica nem substituto da orientação de um dermatologista. As receitas se inspiram livremente em rotinas de cuidados de estilo coreano e não representam tradições autênticas específicas. As quantidades são estimativas baseadas no ebook. As receitas citadas não são reproduzidas aqui; aplique as substituições, precauções de teste e orientações de porções frescas desta versão sempre que diferirem do ebook. Misturas caseiras não foram testadas quanto à estabilidade ou segurança microbiana. Refrigeração, utensílios limpos e cheiro ou aparência normais não estabelecem segurança, e os conservantes do aloe industrializado não conservam de forma confiável uma mistura diluída. Prepare porções frescas para uso único e descarte as sobras."
  ]
};
