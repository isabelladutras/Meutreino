// ============================================================
//  DADOS DO APP — edite aqui. O app lê tudo deste arquivo.
//  SAUDE = remédios e rotina do dia · PROTOCOLO = treinos
//  Posologias transcritas das receitas de 31/10/2026. Na dúvida, vale a receita.
// ============================================================

const SAUDE = {
  // Sua rotina: os horários de cada remédio partem daqui
  rotina: { acordar: "07:00", dormir: "22:45", cafe: "07:30" },
  // Remédios de uso diário (aparecem todo dia no "Hoje")
  diarios: [
    { id: "polivit",   periodo: "manha", hora: "07:30", nome: "Polivitamínico", detalhe: "1 por dia, com o café da manhã (ajuste se a endócrino indicou outro horário)" },
    { id: "topiramato", periodo: "noite", hora: "22:00", nome: "Topiramato 25 mg", detalhe: "1 comprimido à noite" },
    { id: "magnesio",  periodo: "noite", hora: "22:00", inicio: "2026-11-02", nome: "Magnésio dimalato 300 mg", detalhe: "1 cápsula, 30 a 60 min antes de deitar · uso contínuo por 3 meses" }
  ],
  // Tratamentos com começo e fim: o app calcula a dose de cada dia a partir da data de início
  cursos: [
    { id: "pantoprazol", periodo: "manha", hora: "07:00", ordem: 0, nome: "Pantoprazol 40 mg", detalhe: "1 comprimido em jejum, antes do café · enquanto usar a prednisona",
      inicioDe: "prednisona", dias: 12 },
    { id: "prednisona", periodo: "manha", hora: "07:30", ordem: 2, nome: "Prednisona 20 mg", detalhe: "juntos, após o café da manhã",
      etapas: [
        { dias: 3, dose: "3 comprimidos (60 mg)", comp: 3 },
        { dias: 3, dose: "2 comprimidos (40 mg)", comp: 2 },
        { dias: 3, dose: "1 comprimido (20 mg)", comp: 1 },
        { dias: 3, dose: "½ comprimido (10 mg)", comp: 0.5 }
      ] },
    { id: "vagifem", periodo: "noite", hora: "22:30", ordem: 9, nome: "Vagifem", detalhe: "dose de ataque · 1 por dia (aplicação vaginal, ao deitar)",
      dias: 14, depois: "Fim da dose de ataque: pergunte à ginecologista/endócrino como continuar." }
  ],
  // Uso semanal: aparece sempre no mesmo dia da semana da primeira aplicação
  semanais: [
    { id: "ozivy", hora: "09:00", nome: "Ozivy", detalhe: "1 aplicação por semana · sempre agulha nova", aviso: "Começar só depois de se recuperar do resfriado." }
  ],
  // Só à noite e só se tiver dor
  noiteSeDor: [
    { id: "ciclobenzaprina", hora: "22:30", nome: "Ciclobenzaprina 5 mg", detalhe: "1 comprimido ao deitar, em caso de dor · no máximo 10 dias de uso", limiteDias: 10 }
  ],
  // Remédios de crise (SOS). Regras contadas em 24 h corridas.
  sos: [
    { id: "zolmitriptana", tenho: false, nome: "Zolmitriptana 2,5 mg", grupo: "triptano", quando: "Crise que começa rápida e intensa",
      regra: "1 comprimido no primeiro sinal de crise moderada a forte. Se persistir após 2 h, pode tomar mais 1. Máximo 10 mg (4 comprimidos) em 24 h.",
      repetirHoras: 2, max24h: 4 },
    { id: "naratriptana", nome: "Naratriptana 2,5 mg", grupo: "triptano", quando: "Crise que vem devagar, dura muitas horas ou volta",
      regra: "1 comprimido no primeiro sinal de crise moderada a forte. Se persistir ou voltar após 4 h, pode tomar mais 1. Máximo 5 mg (2 comprimidos) em 24 h.",
      repetirHoras: 4, max24h: 2 },
    { id: "naproxeno", nome: "Naproxeno sódico 500 mg", quando: "No início da crise de dor",
      regra: "1 comprimido no início da crise. Pode repetir após 8 a 12 h se necessário. Máximo 2 comprimidos por dia.",
      repetirHoras: 8, max24h: 2 },
    { id: "passiflora", nome: "Passiflora 300 mg", quando: "Estresse, ansiedade, agitação ou dificuldade para relaxar à noite",
      regra: "1 a 2 comprimidos quando precisar, ou 1 h antes de deitar. Máximo 4 comprimidos em 24 h.",
      doses: [1, 2], max24h: 4 }
  ],
  // Estoque contado em 01/11 (foto). null = não estava na foto: preencha na aba Remédios.
  estoque: {
    data: "2026-11-01",
    qtd: { polivit: 90, topiramato: 120, magnesio: null, pantoprazol: null, prednisona: 20, vagifem: null, ozivy: null,
           ciclobenzaprina: 30, zolmitriptana: null, naratriptana: 16, naproxeno: 40, passiflora: 20 },
    nomeCaixa: { polivit: "Lavitan A-Z Mulher", prednisona: "Prednisolona 20 mg (EMS)", passiflora: "Sintocalmy 300 mg" },
    unidade: { vagifem: "aplicações", ozivy: "aplicações" }
  },
  avisoPrednisolona: "Veio prednisolona 20 mg, e a receita é de prednisona 20 mg. Confirme com a farmácia ou com a neuro se pode usar na mesma dose.",
  validadeReceitas: "2026-11-30",
  regraOuro: "Nunca misturar triptanos no mesmo dia: depois de Zolmitriptana, nada de Naratriptana por 24 h (e vice-versa). Escolha apenas um triptano por crise.",
  refeicoes: [
    { id: "cafe", nome: "Café da manhã" },
    { id: "almoco", nome: "Almoço" },
    { id: "lanche", nome: "Lanche" },
    { id: "jantar", nome: "Jantar" }
  ],
  lembretesEndocrino: [
    "Proteína adequada todos os dias — whey diário se precisar.",
    "Bioimpedância no consultório em dezembro.",
    "Exames de sangue no início de dezembro, antes do retorno.",
    "Avaliação ginecológica (investigação de possível DIP)."
  ]
};

const PROTOCOLO = {
  titulo: "Meu Bem-Estar",
  rotacao: ["A", "S", "B"],
  notas: [
    "Fase de controle da enxaqueca (orientação da neuro, 3 a 4 semanas a partir de 31/10): o principal é o cardio leve contínuo, 30 a 45 min, 3 a 5 vezes por semana.",
    "Intensidade: um ritmo em que dá para conversar sem ficar muito ofegante.",
    "Nada de HIIT, tiros, alto impacto, Crossfit, nem treino até a falha.",
    "Musculação leve (A, S, B) só se a neuro liberar: cargas leves, pare 3 repetições antes de não conseguir mais, solte o ar ao fazer força e nunca prenda a respiração.",
    "Zero pré-treino, termogênico ou cafeína concentrada antes do treino."
  ],
  seguranca: [
    "Beba ~500 mL de água 1 h antes de treinar e dê goles a cada 10–15 min durante o treino.",
    "Em crise ou com dor forte, não treine hoje. O treino pode piorar a dor nessa fase.",
    "Tontura, piora da dor, visão turva, palpitação ou falta de ar fora do normal: pare, sente e beba água.",
    "Levante do chão devagar. Mudança rápida de posição piora tontura."
  ],
  dias: [
    {
      id: "C", nome: "Cardio leve", tempo: "30–45 min", fora: true, principal: true,
      exercicios: [
        { intervalo: true, tipo: "Aquecimento", nome: "Aquecimento", fases: [{ label: "Bem leve", seg: 300 }], repetir: 1,
          texto: "5 min começando devagar: caminhada, bike ou elíptico." },
        { intervalo: true, tipo: "Cardio", nome: "Cardio contínuo · 30 min", fases: [{ label: "Ritmo de conversa · a cada bipe, um gole de água", seg: 600 }], repetir: 3,
          texto: "Caminhada ritmada, bike ergométrica moderada, elíptico ou natação leve. Ritmo em que dá para conversar. O app apita a cada 10 min para lembrar da água." },
        { intervalo: true, tipo: "Opcional", nome: "Mais 15 min (se estiver bem)", fases: [{ label: "Ritmo de conversa", seg: 900 }], repetir: 1,
          texto: "Só se a cabeça estiver tranquila. Fecha 45 min, o máximo que a neuro indicou." },
        { intervalo: true, tipo: "Volta à calma", nome: "Desacelerar", fases: [{ label: "Bem leve", seg: 180 }], repetir: 1,
          texto: "3 min reduzindo o ritmo até parar. Depois, alongamento leve." }
      ]
    },
    {
      id: "A", nome: "Inferiores · Glúteo", tempo: "~35 min", leve: true,
      exercicios: [
        { intervalo: true, tipo: "Aquecimento", nome: "Aquecimento", fases: [{ label: "Esteira ou bike leve", seg: 300 }], repetir: 1,
          texto: "5 min leves + 15 pontes de glúteo no chão." },
        {
          nome: "Elevação Pélvica", musculo: "Glúteo máximo", series: ["12 a 15", "12 a 15", "12 a 15"], descanso: 75,
          carga: 25, alerta: true,
          obs: [
            "Carga leve nesta fase: pare 3 repetições antes de não conseguir mais.",
            "Solte o ar ao subir, puxe ao descer. Não prenda a respiração.",
            "Banco logo abaixo das escápulas, canela na vertical no topo.",
            "Olhar para os joelhos, costela fechada, quadril \"encaixado\" no topo.",
            "Parar quando joelho, quadril e ombro formarem uma linha reta."
          ]
        },
        { nome: "Agachamento Goblet", musculo: "Pernas / Glúteos", series: ["12 a 15", "12 a 15", "12 a 15"], descanso: 75 },
        { nome: "Stiff com Halteres", musculo: "Posterior de coxa / Glúteos", series: ["12 a 15", "12 a 15", "12 a 15"], descanso: 75 },
        { nome: "Cadeira Abdutora 45°", musculo: "Glúteo médio", series: ["15 a 20", "15 a 20", "15 a 20"], descanso: 60, carga: 35 }
      ]
    },
    {
      id: "S", nome: "Superiores", tempo: "~35 min", leve: true,
      exercicios: [
        { intervalo: true, tipo: "Aquecimento", nome: "Aquecimento", fases: [{ label: "Esteira ou bike leve", seg: 300 }], repetir: 1,
          texto: "5 min leves + 10 rotações de ombro para frente e para trás." },
        { nome: "Remada Sentada no Triângulo", musculo: "Costas", series: ["12 a 15", "12 a 15", "12 a 15"], descanso: 75, carga: 20 },
        { nome: "Pull Down com Corda", musculo: "Dorsal", series: ["15", "15", "15"], descanso: 75, carga: 15 },
        { nome: "Supino Reto com Halter", musculo: "Peitoral", series: ["12 a 15", "12 a 15", "12 a 15"], descanso: 75, carga: 5 },
        { nome: "Desenvolvimento com Halteres no Banco 90°", musculo: "Ombros", series: ["12 a 15", "12 a 15"], descanso: 75, carga: 7 },
        { nome: "Elevação Lateral", musculo: "Ombros", series: ["15", "15"], descanso: 60, carga: 4 }
      ]
    },
    {
      id: "B", nome: "Inferiores · Coxas", tempo: "~35 min", leve: true,
      exercicios: [
        { intervalo: true, tipo: "Aquecimento", nome: "Aquecimento", fases: [{ label: "Esteira ou bike leve", seg: 300 }], repetir: 1,
          texto: "5 min leves + 10 agachamentos sem peso." },
        { nome: "Leg Press 45°", musculo: "Quadríceps / Glúteos", series: ["12 a 15", "12 a 15", "12 a 15"], descanso: 75, carga: 40 },
        { nome: "Afundo Reverso com Halteres", musculo: "Pernas / Glúteos", series: ["10 cada perna", "10 cada perna"], descanso: 75 },
        { nome: "Cadeira Extensora", musculo: "Quadríceps", series: ["15", "15", "15"], descanso: 60, carga: 35 },
        { nome: "Mesa Flexora", musculo: "Posterior de coxa", series: ["12 a 15", "12 a 15", "12 a 15"], descanso: 60, carga: 30 }
      ]
    }
  ]
};

// ============================================================
//  COMO FAZER — pontos de execução de cada exercício.
//  A chave é o nome do exercício. Se o exercício tiver "obs"
//  próprio lá em cima, ele tem prioridade.
// ============================================================
const COMO_FAZER = {
  "Agachamento Goblet": [
    "Segure um halter em pé, colado no peito, cotovelos para baixo.",
    "Pés na largura dos ombros, pontas levemente para fora.",
    "Desça sentando entre as pernas, tronco em pé; cotovelos passam por dentro dos joelhos.",
    "Suba empurrando o chão com o pé inteiro.",
    "O peso na frente ajuda a manter a coluna reta — por isso é mais seguro para a lombar."
  ],
  "Remada Sentada no Triângulo": [
    "Pés apoiados, joelhos levemente dobrados, coluna reta.",
    "Puxe o triângulo até a barriga, cotovelos para trás e colados ao corpo.",
    "No final, aperte as escápulas (como se segurasse um lápis entre elas).",
    "Erro comum: jogar o tronco para trás para puxar o peso."
  ],
  "Pull Down com Corda": [
    "Em pé de frente para a polia alta, tronco levemente inclinado, braços quase retos.",
    "Puxe a corda em arco até as coxas, sem dobrar o cotovelo.",
    "Sinta a lateral das costas fazendo a força; volte devagar.",
    "Erro comum: dobrar os cotovelos e virar um tríceps."
  ],
  "Step-up no Banco": [
    "Suba no banco (ou caixote) com um pé inteiro apoiado, empurrando com o calcanhar.",
    "Fique em pé lá em cima, desça controlando e troque a perna.",
    "Tronco levemente à frente; o joelho acompanha a direção do pé.",
    "Ficou fácil? Segure um halter em cada mão."
  ],
  "Polichinelo": [
    "Salte abrindo pernas e braços ao mesmo tempo e volte.",
    "Aterrisse na ponta dos pés, joelhos destravados.",
    "Sem impacto: abra uma perna de cada vez, levantando os braços."
  ],
  "Dead Bug": [
    "Deitada, braços para o teto, joelhos dobrados a 90° no ar.",
    "Cole a lombar no chão e mantenha colada o tempo todo.",
    "Estique braço e perna opostos devagar, volte e troque.",
    "É o melhor exercício de core para quem tem dor lombar: treina a barriga a segurar a coluna."
  ],
  "Escalador": [
    "Posição de prancha alta, mãos embaixo dos ombros.",
    "Traga os joelhos alternados em direção ao peito, no ritmo que der.",
    "Quadril na linha do corpo — não empine o bumbum.",
    "Mais leve: mãos apoiadas no banco."
  ],
  "Leg Press 45°": [
    "Costas e quadril colados no encosto o tempo todo.",
    "Pés no meio da plataforma, na largura do quadril.",
    "Desça até os joelhos formarem ~90° e empurre com o pé inteiro.",
    "Não trave o joelho em cima.",
    "Erro comum: descer demais e o quadril descolar do encosto (força a lombar)."
  ],
  "Supino Reto com Halter": [
    "Deitada no banco, pés no chão, escápulas encaixadas para trás e para baixo.",
    "Halteres descem na linha do meio do peito, cotovelos a ~45° do corpo.",
    "Empurre para cima aproximando os halteres.",
    "Erro comum: abrir os cotovelos em T — sobrecarrega o ombro."
  ],
  "Afundo Reverso com Halteres": [
    "Em pé, halteres ao lado do corpo. Dê um passo grande para trás.",
    "Desça o joelho de trás em direção ao chão; joelho da frente acima do tornozelo.",
    "Volte empurrando com o calcanhar da perna da frente.",
    "Faça todas de uma perna e depois troque.",
    "Para trás é mais fácil de equilibrar e mais leve no joelho do que o afundo para frente."
  ],
  "Desenvolvimento com Halteres no Banco 90°": [
    "Costas inteiras apoiadas no banco, barriga firme.",
    "Halteres na altura das orelhas, cotovelos um pouco à frente do corpo.",
    "Empurre para cima sem travar o cotovelo; desça até a orelha.",
    "Erro comum: arquear a lombar e tirar as costas do banco."
  ],
  "Agachamento Livre no Ritmo": [
    "Sem peso, braços à frente para equilibrar.",
    "Desça até onde a coluna fica reta e suba rápido, num ritmo constante.",
    "Quer mais intenso? Termine cada subida na ponta dos pés ou com um saltinho."
  ],
  "Flexão de Braço Inclinada no Banco": [
    "Mãos no banco, um pouco mais abertas que os ombros, corpo reto da cabeça ao pé.",
    "Desça o peito até perto do banco, cotovelos a ~45°.",
    "Empurre o banco para longe.",
    "Mais fácil: banco mais alto ou apoiar na barra do Smith alta. Mais difícil: banco mais baixo."
  ],
  "Corrida Parada": [
    "Corra no lugar elevando os joelhos até a altura do quadril.",
    "Braços acompanham o ritmo.",
    "Sem impacto: marcha rápida elevando os joelhos."
  ],
  "Prancha com Toque no Ombro": [
    "Prancha alta, pés um pouco afastados para dar estabilidade.",
    "Toque a mão no ombro oposto, alternando.",
    "O quadril não pode balançar — barriga firme.",
    "Mais fácil: joelhos no chão."
  ],
  "Stiff com Halteres": [
    "Pés na largura do quadril, joelhos levemente dobrados e fixos.",
    "Empurre o quadril para trás; halteres descem rentes às pernas.",
    "Coluna reta, desça só até sentir alongar atrás da coxa (geralmente um pouco abaixo do joelho).",
    "Suba apertando o glúteo.",
    "Erro comum: arredondar as costas para descer mais — é o que machuca a lombar."
  ],
  "Remada Serrote": [
    "Mão e joelho do mesmo lado apoiados no banco, costas retas.",
    "Puxe o halter em direção ao quadril, cotovelo colado ao corpo.",
    "Desça devagar até esticar o braço.",
    "Com o tronco apoiado, a lombar fica protegida."
  ],
  "Cadeira Abdutora 45°": [
    "Tronco inclinado à frente (~45°), quadril bem encaixado no banco.",
    "Abra as pernas empurrando com a lateral dos joelhos.",
    "Segure 1 s aberta e feche devagar, sem deixar o peso bater."
  ],
  "Crucifixo Invertido": [
    "Na máquina (voador invertido) ou na polia, braços estendidos à frente.",
    "Abra os braços para os lados, cotovelos levemente dobrados.",
    "Foco na parte de trás do ombro; pare na linha do corpo.",
    "Erro comum: carga alta e puxar com as costas."
  ],
  "Ponte de Glúteo no Chão": [
    "Deitada, joelhos dobrados, pés no chão perto do bumbum.",
    "Suba o quadril apertando o glúteo até alinhar joelho, quadril e ombro.",
    "Costela fechada — não arqueie a lombar no alto.",
    "Mais difícil: halter apoiado no quadril."
  ],
  "Rosca Bíceps com Halteres": [
    "Em pé, cotovelos colados na lateral do corpo.",
    "Suba os halteres só dobrando o cotovelo; desça devagar.",
    "Erro comum: balançar o tronco para jogar o peso."
  ],
  "Tríceps no Banco": [
    "Mãos na borda do banco, dedos para frente, pernas dobradas e pés no chão.",
    "Desça dobrando os cotovelos para trás até ~90° e suba.",
    "Costas pertinho do banco.",
    "Mais difícil: pernas esticadas."
  ],
  "Remada com Halteres no Banco Inclinado": [
    "Deitada de barriga para baixo no banco inclinado (~30–45°), halteres pendurados.",
    "Puxe os halteres em direção ao quadril, apertando as escápulas.",
    "O banco apoia o peito, então a lombar não trabalha."
  ]
};

COMO_FAZER["Cadeira Extensora"] = [
  "Joelho alinhado com o eixo do aparelho; rolo na frente do tornozelo.",
  "Costas no encosto, segure nas alças.",
  "Estique a perna toda, segure 1 s em cima e desça devagar.",
  "Erro comum: descer rápido deixando o peso cair."
];
COMO_FAZER["Mesa Flexora"] = [
  "Joelho alinhado com o eixo do aparelho; rolo logo acima do calcanhar.",
  "Quadril colado no banco o tempo todo — segure nas alças.",
  "Suba até o máximo que conseguir e desça devagar (2–3 s).",
  "Erro comum: levantar o quadril do banco para ajudar a subir."
];
COMO_FAZER["Elevação Lateral"] = [
  "Em pé, joelhos destravados, halteres ao lado do corpo.",
  "Suba os braços para o lado até a altura dos ombros, cotovelos levemente dobrados.",
  "Pense em levar o halter \"para longe\", não para cima; desça devagar.",
  "Erro comum: subir os ombros em direção às orelhas ou dar impulso com o corpo."
];

// ============================================================
//  DIETA — plano alimentar da nutricionista (05/11/2026)
//  Cada refeição tem opções; cada opção tem grupos.
//  grupo com "escolhas": escolha 1 · "fixo": item que vai sempre · "livre": à vontade
// ============================================================
const FRUTAS = [
  "Uva Itália (7 unidades médias = 56 g)", "Pera (½ unidade grande = 90 g)", "Maçã Fuji (1 unidade pequena = 100 g)",
  "Banana (1 unidade pequena = 50 g)", "Mamão (1 xícara de chá em pedaços = 120 g)", "Melão (1 fatia média = 150 g)",
  "Morango (10 unidades médias = 150 g)", "Kiwi (1 unidade média = 75 g)", "Abacaxi (1 fatia média = 100 g)"
];
const OPCOES_CAFE = [
  { nome: "Pão + proteína", grupos: [
    { nome: "Carboidrato", escolhas: ["Pão francês (1 unidade = 50 g)", "Pão de forma (2 fatias = 50 g)", "Flocão de milho/cuscuz (10 colheres de sopa = 40 g)", "Torrada (3 unidades)", "Rap10 (1 unidade)", "Magic Toast (2 pacotinhos)", "Goma de tapioca (45 g)", "Farelo de aveia (40 g)"] },
    { nome: "Proteína", escolhas: ["Atum ao natural (3 colheres de sopa = 60 g)", "Ovo (1 unidade + 2 claras = 100 g)", "Queijo minas frescal (2 fatias = 60 g)", "Queijo muçarela (1½ fatia = 35 g)", "Frango desfiado (3 colheres de sopa = 60 g)"] },
    { nome: "Cremoso", escolhas: ["Requeijão light (1 colher de sopa = 20 g)", "Creme de ricota light (1 colher de sopa = 20 g)"] },
    { nome: "Café preto", fixo: true },
    { nome: "Fruta", escolhas: FRUTAS }
  ] },
  { nome: "Tapioca com ovos", grupos: [
    { nome: "Goma de tapioca (40 g)", fixo: true },
    { nome: "Ovo (2 unidades)", fixo: true },
    { nome: "Doce de leite (1 colher de sopa rasa = 20 g)", fixo: true },
    { nome: "Fruta", escolhas: FRUTAS }
  ] },
  { nome: "Iogurte com whey", grupos: [
    { nome: "Iogurte desnatado (1 unidade)", fixo: true },
    { nome: "Aveia em flocos (2 colheres de sopa cheias = 20 g)", fixo: true },
    { nome: "Whey concentrado (1 medidor = 30 g)", fixo: true },
    { nome: "Fruta", escolhas: FRUTAS }
  ] },
  { nome: "Shake proteico", grupos: [
    { nome: "Whey concentrado (1 medidor = 30 g)", fixo: true },
    { nome: "Leite desnatado (1 copo = 200 ml)", fixo: true },
    { nome: "Fruta congelada", escolhas: FRUTAS }
  ] },
  { nome: "Mingau", grupos: [
    { nome: "Leite desnatado (1 copo = 200 ml)", fixo: true },
    { nome: "Aveia em flocos (4 colheres de sopa cheias = 40 g)", fixo: true },
    { nome: "Whey concentrado (1 medidor = 30 g)", fixo: true },
    { nome: "Fruta", escolhas: FRUTAS }
  ] }
];
const ALMOCO = { nome: "Prato do almoço", grupos: [
  { nome: "Folhas", livre: true },
  { nome: "Legumes", livre: true },
  { nome: "Carboidrato", escolhas: ["Arroz branco cozido (4 colheres de sopa cheias = 100 g)", "Batata inglesa assada em cubos (6 colheres de sopa cheias = 140 g)", "Batata inglesa cozida (11 colheres de sopa cheias = 245 g)", "Macarrão cozido (4 colheres de sopa cheias = 100 g)", "Flocão de milho/cuscuz (3,5 colheres de sopa cheias = 35 g)", "Batata-doce cozida (5 colheres de sopa cheias = 125 g)", "Batata-doce assada (4 colheres de sopa cheias = 100 g)", "Mandioquinha cozida (5 colheres de sopa cheias = 125 g)", "Abóbora cabotiá cozida (8 colheres de sopa cheias = 160 g)"] },
  { nome: "Leguminosa", escolhas: ["Feijão carioca ou preto (5 colheres de sopa cheias = 85 g)", "Grão-de-bico cozido (2 colheres de sopa = 48 g)", "Lentilha cozida (2 colheres de sopa cheias = 54 g)"] },
  { nome: "Proteína", escolhas: ["Carne bovina magra — alcatra, coxão duro/mole, filé mignon, peixinho ou patinho (3 colheres de sopa cheias = 105 g)", "Filé-mignon suíno (1 bife = 100 g)", "Lombo suíno (100 g)", "Tilápia (1 filé médio = 120 g)", "Atum ao natural (5 colheres de sopa cheias = 100 g)", "Filé de frango (1 filé pequeno = 100 g)", "Sobrecoxa de frango sem pele (1 unidade média = 120 g)"] }
] };

const DIETA = {
  data: "2026-11-05",
  profissional: "Nutricionista",
  aguaMeta: 3,
  suplementos: [ { id: "creatina", nome: "Creatina 5 g", detalhe: "Todos os dias, depois de alguma das refeições" } ],
  proximaConsulta: "Agendar para 20 a 30 dias depois de 05/11 (entre 25/11 e 05/12).",
  refeicoes: [
    { id: "cafe", nome: "Café da manhã", hora: "07:30", regra: "Escolha 1 opção", opcoes: OPCOES_CAFE },
    { id: "almoco", nome: "Almoço", hora: "12:30", regra: "1 alimento de cada grupo", opcoes: [ALMOCO] },
    { id: "lanche", nome: "Lanche da tarde", hora: "16:00", regra: "Uma das opções do café da manhã", opcoes: OPCOES_CAFE },
    { id: "jantar", nome: "Jantar", hora: "19:30", regra: "Escolha 1 opção", opcoes: [
      { ...ALMOCO, nome: "Repetir o almoço" },
      { nome: "Crepioca", grupos: [
        { nome: "1 ovo (50 g)", fixo: true },
        { nome: "Goma de tapioca (2 colheres de sopa rasas = 30 g)", fixo: true },
        { nome: "Recheio", escolhas: ["Atum ao natural (2 colheres de sopa = 40 g)", "Frango desfiado (2 colheres de sopa = 45 g)"] },
        { nome: "Salada", livre: true }
      ] },
      { nome: "Hambúrguer", grupos: [
        { nome: "Pão", escolhas: ["1 pão de hambúrguer", "1 pão francês", "1 Rap10", "2 pães de forma"] },
        { nome: "Carne bovina magra moída ou grelhada (105 g cozida = 140 g crua)", fixo: true },
        { nome: "Salada", livre: true }
      ], obs: "Ketchup, mostarda e maionese light: com moderação." }
    ] }
  ],
  chas: "Melissa, camomila, capim-limão, erva-cidreira, cavalinha, hibisco…",
  observacoes: [
    "Evitar beber líquidos durante as refeições, principalmente refrigerante e suco de caixinha.",
    "Acompanhar o intestino: quantas evacuações por semana e a consistência.",
    "Anotar melhoras, facilidades e dificuldades com o plano para a próxima consulta.",
    "Se tiver aversão a algum alimento, não precisa comer.",
    "Quer incluir algum alimento ou saber a quantidade? Anote para a próxima consulta."
  ],
  receitas: [
    { nome: "Batata chips", texto: "Fatiar a batata em rodelas finas, secar bem com papel-toalha, temperar a gosto (sal, páprica, pimenta-do-reino, orégano…) e levar para a airfryer.", usar: "Almoço ou jantar, no lugar do carboidrato. Porção parecida: batata inglesa assada, 6 colheres de sopa cheias (140 g). Confirmar com a nutri." },
    { nome: "Crepioca", texto: "Bater o ovo com a goma de tapioca e temperos a gosto (sal, páprica, pimenta-do-reino, orégano…).", usar: "Jantar: já é uma das opções. 1 ovo (50 g) + 2 colheres de sopa rasas de goma (30 g) + atum (40 g) ou frango (45 g) + salada à vontade." },
    { nome: "Macarrão crocante", texto: "Cozinhar o macarrão até ficar al dente, temperar a gosto e levar para a airfryer.", usar: "Almoço ou jantar, no lugar do carboidrato: macarrão cozido, 4 colheres de sopa cheias (100 g)." },
    { nome: "Molho para salada 1", texto: "1 colher de sopa de ketchup + 1 colher de sopa de mostarda + pimenta-do-reino + páprica defumada.", usar: "Nas folhas e legumes do almoço ou do jantar. Use 1 porção da receita por refeição." },
    { nome: "Molho para salada 2", texto: "1 colher de sopa de mostarda + ½ colher de sopa de mel.", usar: "Nas folhas e legumes do almoço ou do jantar. Use 1 porção da receita por refeição." },
    { nome: "Molho para salada 3", texto: "1 colher de sopa de shoyu light + 1 limão espremido.", usar: "Nas folhas e legumes do almoço ou do jantar. Use 1 porção da receita por refeição." },
    { nome: "Molho para salada 4", texto: "1 colher de sopa de creme de ricota light (ou creme de queijo minas frescal light) + 1 limão espremido + lemon pepper + 1 colher de sobremesa de mostarda. Para render mais, um pouco de água.", usar: "Nas folhas e legumes do almoço ou do jantar. Use 1 porção da receita por refeição." },
    { nome: "Torrada com ovo doce", texto: "Bater o ovo com um garfo e temperar com canela. Levar para a frigideira. Misturar água ao whey até virar uma caldinha e jogar por cima.", usar: "Café da manhã ou lanche, opção Pão + proteína: 3 torradas + 1 ovo e 2 claras. A calda de whey é um extra: confirmar com a nutri." },
    { nome: "Mini pizza Rap10", texto: "Molho de tomate, atum ou frango + muçarela, e levar para a frigideira.", usar: "Café da manhã ou lanche, opção Pão + proteína: 1 Rap10 + uma proteína só (atum 60 g, frango 60 g ou muçarela 35 g). Atum ou frango junto com muçarela: confirmar com a nutri." }
  ],
  medidas: ["Braço", "Cintura", "Quadril", "Coxa medial"]
};
