// ============================================================
//  DADOS DO TREINO — edite aqui. O app lê tudo deste arquivo.
//
//  Tipos de bloco:
//   1) Exercício normal: { nome, musculo, series:[...], descanso, carga?, tecnica?, obs? }
//   2) Bi-set: { biset:true, nome?, descanso, itens:[exA, exB] }   (exA/exB com series)
//   3) Circuito (por tempo): { circuito:true, nome, rodadas, trabalho, pausa, descanso, itens:[{nome, musculo}] }
//        trabalho = segundos fazendo cada exercício; pausa = segundos para trocar;
//        descanso = segundos entre as rodadas
//   4) Intervalo / cardio: { intervalo:true, nome, tipo, fases:[{label, seg}], repetir, texto? }
//
//  "rotacao" define a ordem sugerida dos treinos (o app mostra qual é o próximo).
// ============================================================

const PROTOCOLO = {
  titulo: "Meu Treino",
  subtitulo: "Corpo inteiro · dinâmico · ~50 min",
  rotacao: ["A", "B", "C"],
  notas: [
    "Foi à academia? Faça o próximo treino da sequência A → B → C → A… Não importa o dia da semana.",
    "Dia corrido (30 min)? Faça o Express. Ele não conta na sequência.",
    "Progressão: quando fizer todas as repetições de todas as rodadas com folga, suba a carga na próxima vez.",
    "Bi-set: faça os dois exercícios seguidos e só descanse ao terminar o par.",
    "Circuito: aperte ▶ Iniciar e siga o cronômetro — ele avisa quando trocar."
  ],
  // Diário de sintomas (aba "Hoje")
  diario: {
    remedio: "Espironolactona 50 mg"
  },
  // Fase de adaptação: menos rodadas e cardio contínuo moderado no lugar dos tiros.
  adaptacao: {
    rodadas: 2,
    finalizador: { label: "Ritmo moderado contínuo", seg: 480,
      texto: "8 min em ritmo em que dá para conversar. Esteira inclinada (5–8%), bike ou escada leve — sem tiros nesta fase." }
  },
  seguranca: [
    "Tontura, dor de cabeça forte, visão turva, palpitação ou falta de ar fora do normal: pare, sente, beba água. Não volte a treinar pesado nesse dia.",
    "Levante do chão devagar (depois de dead bug, ponte, prancha) — mudança rápida de posição piora tontura.",
    "Não treine em jejum. Leve garrafa de água e beba entre os blocos.",
    "Calorão durante o treino: diminua o ritmo, respire e retome só quando passar."
  ],
  dias: [
    // ------------------------------------------------------------ A
    {
      id: "A",
      nome: "Glúteo + Costas",
      tempo: "~50 min",
      exercicios: [
        {
          intervalo: true, tipo: "Aquecimento", nome: "Aquecimento",
          fases: [{ label: "Esteira ou bike leve", seg: 180 }, { label: "Mobilidade", seg: 120 }],
          repetir: 1,
          texto: "Mobilidade: 8 gato-camelo, 15 pontes de glúteo no chão, 10 agachamentos sem peso."
        },
        {
          biset: true, nome: "Força 1", descanso: 45,
          tecnica: "Rodada 1 um pouco mais leve, para aquecer.",
          itens: [
            { nome: "Agachamento Goblet", musculo: "Pernas / Glúteos", series: ["12", "12", "12"] },
            { nome: "Remada Sentada no Triângulo", musculo: "Costas", series: ["12", "12", "12"], carga: 20 }
          ]
        },
        {
          biset: true, nome: "Força 2", descanso: 45,
          itens: [
            {
              nome: "Elevação Pélvica", musculo: "Glúteo máximo", series: ["12", "12", "12"],
              carga: 25, cargaNota: "Sugestão: carga reduzida para acertar a técnica", alerta: true,
              obs: [
                "Banco logo abaixo das escápulas — o tronco gira na borda como dobradiça.",
                "No topo, canela na vertical (joelho em cima do tornozelo).",
                "Olhar para os joelhos, queixo levemente para dentro. Nunca olhar para o teto.",
                "Costela fechada e quadril \"encaixado\" (esconder o bumbum) no topo.",
                "Parar quando joelho, quadril e ombro formarem uma linha reta.",
                "Segurar 1–2 s apertando o glúteo e descer com controle.",
                "Sentiu a lombar? Diminua a subida. Se continuar doendo: troque por Ponte de Glúteo no chão ou elevação pélvica no aparelho."
              ]
            },
            { nome: "Pull Down com Corda", musculo: "Dorsal", series: ["15", "15", "15"], carga: 15 }
          ]
        },
        {
          circuito: true, nome: "Circuito de suor", rodadas: 3, trabalho: 40, pausa: 20, descanso: 60,
          itens: [
            { nome: "Step-up no Banco", musculo: "Pernas / Glúteos (alternando)" },
            { nome: "Polichinelo", musculo: "Cardio" },
            { nome: "Dead Bug", musculo: "Core" },
            { nome: "Escalador", musculo: "Cardio / Core" }
          ]
        },
        {
          intervalo: true, tipo: "Finalizador", nome: "Esteira intervalada",
          fases: [{ label: "Rápido / inclinado", seg: 60 }, { label: "Leve", seg: 60 }],
          repetir: 5,
          texto: "Rápido: caminhada forte com 8–12% de inclinação ou trote. Leve: caminhada plana para recuperar."
        }
      ]
    },
    // ------------------------------------------------------------ B
    {
      id: "B",
      nome: "Pernas + Empurrar",
      tempo: "~50 min",
      exercicios: [
        {
          intervalo: true, tipo: "Aquecimento", nome: "Aquecimento",
          fases: [{ label: "Esteira ou bike leve", seg: 180 }, { label: "Mobilidade", seg: 120 }],
          repetir: 1,
          texto: "Mobilidade: 10 rotações de ombro com braço esticado, 10 agachamentos sem peso, 8 afundos sem peso."
        },
        {
          biset: true, nome: "Força 1", descanso: 45,
          tecnica: "Rodada 1 um pouco mais leve, para aquecer.",
          itens: [
            { nome: "Leg Press 45°", musculo: "Quadríceps / Glúteos", series: ["12", "12", "12"], carga: 40 },
            { nome: "Supino Reto com Halter", musculo: "Peitoral", series: ["12", "12", "12"], carga: 5 }
          ]
        },
        {
          biset: true, nome: "Força 2", descanso: 45,
          itens: [
            { nome: "Afundo Reverso com Halteres", musculo: "Pernas / Glúteos", series: ["10 cada perna", "10 cada perna", "10 cada perna"] },
            { nome: "Desenvolvimento com Halteres no Banco 90°", musculo: "Ombros", series: ["12", "12", "12"], carga: 7 }
          ]
        },
        {
          circuito: true, nome: "Circuito de suor", rodadas: 3, trabalho: 40, pausa: 20, descanso: 60,
          itens: [
            { nome: "Agachamento Livre no Ritmo", musculo: "Pernas" },
            { nome: "Flexão de Braço Inclinada no Banco", musculo: "Peito / Tríceps" },
            { nome: "Corrida Parada", musculo: "Cardio" },
            { nome: "Prancha com Toque no Ombro", musculo: "Core / Ombros" }
          ]
        },
        {
          intervalo: true, tipo: "Finalizador", nome: "Bike intervalada",
          fases: [{ label: "Forte", seg: 30 }, { label: "Leve", seg: 30 }],
          repetir: 8,
          texto: "Forte: aumente a carga da bike e pedale rápido. Leve: pedale solto para recuperar."
        }
      ]
    },
    // ------------------------------------------------------------ C
    {
      id: "C",
      nome: "Posterior + Braços",
      tempo: "~50 min",
      exercicios: [
        {
          intervalo: true, tipo: "Aquecimento", nome: "Aquecimento",
          fases: [{ label: "Esteira ou bike leve", seg: 180 }, { label: "Mobilidade", seg: 120 }],
          repetir: 1,
          texto: "Mobilidade: 8 gato-camelo, 10 \"bom dia\" sem peso (mão no quadril, empurrando o quadril para trás), 15 pontes de glúteo."
        },
        {
          biset: true, nome: "Força 1", descanso: 45,
          tecnica: "Rodada 1 um pouco mais leve, para aquecer.",
          itens: [
            { nome: "Stiff com Halteres", musculo: "Posterior de coxa / Glúteos", series: ["12", "12", "12"] },
            { nome: "Remada Serrote", musculo: "Costas", series: ["12 cada braço", "12 cada braço", "12 cada braço"], carga: 7 }
          ]
        },
        {
          biset: true, nome: "Força 2", descanso: 45,
          itens: [
            { nome: "Cadeira Abdutora 45°", musculo: "Glúteo médio", series: ["15 a 20", "15 a 20", "15 a 20"], carga: 35 },
            { nome: "Crucifixo Invertido", musculo: "Ombro posterior", series: ["15", "15", "15"], carga: 20 }
          ]
        },
        {
          circuito: true, nome: "Circuito de suor", rodadas: 3, trabalho: 40, pausa: 20, descanso: 60,
          itens: [
            { nome: "Ponte de Glúteo no Chão", musculo: "Glúteos" },
            { nome: "Rosca Bíceps com Halteres", musculo: "Bíceps" },
            { nome: "Tríceps no Banco", musculo: "Tríceps" },
            { nome: "Polichinelo", musculo: "Cardio" }
          ]
        },
        {
          intervalo: true, tipo: "Finalizador", nome: "Escada ou esteira inclinada",
          fases: [{ label: "Ritmo forte contínuo", seg: 600 }],
          repetir: 1,
          texto: "10 min sem parar. Escada (simulador) em ritmo que dá para falar frases curtas, ou esteira com 10–12% de inclinação, sem segurar no apoio."
        }
      ]
    },
    // ------------------------------------------------------------ Express
    {
      id: "X",
      nome: "Express 30 min",
      tempo: "~30 min",
      fora: true,
      exercicios: [
        {
          intervalo: true, tipo: "Aquecimento", nome: "Aquecimento",
          fases: [{ label: "Esteira ou bike leve", seg: 180 }],
          repetir: 1
        },
        {
          circuito: true, nome: "Circuito corpo inteiro", rodadas: 4, trabalho: 40, pausa: 20, descanso: 60,
          itens: [
            { nome: "Agachamento Goblet", musculo: "Pernas / Glúteos" },
            { nome: "Remada com Halteres no Banco Inclinado", musculo: "Costas" },
            { nome: "Ponte de Glúteo no Chão", musculo: "Glúteos" },
            { nome: "Flexão de Braço Inclinada no Banco", musculo: "Peito / Tríceps" },
            { nome: "Escalador", musculo: "Cardio / Core" }
          ]
        }
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
