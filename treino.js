// ============================================================
//  DADOS DO TREINO — edite aqui para mudar exercícios, séries,
//  repetições, descanso e observações. O app lê tudo deste arquivo.
//
//  Campos de cada exercício:
//    nome, musculo, series (lista de repetições, uma por série),
//    descanso (segundos), tecnica (opcional), obs (opcional),
//    carga (carga inicial sugerida, em kg — opcional),
//    confirmar: true  -> dado que não apareceu no protocolo original
//  Bi-set: { biset: true, descanso, itens: [exercicioA, exercicioB] }
// ============================================================

const PROTOCOLO = {
  titulo: "Meu Treino",
  subtitulo: "Corpo de Musa · versão enxuta (~50 min)",
  finalizacao: {
    nome: "Esteira inclinada (opcional)",
    texto: "10–15 min no fim do treino. Inclinação 8–12%, ritmo de caminhada forte."
  },
  bonus: [
    "Mobilidade: antes do treino, para preparar as articulações.",
    "Alongamento: 5 a 10 minutos no final."
  ],
  dias: [
    {
      id: "T1",
      nome: "Glúteos & Posterior",
      tempo: "~50 min",
      exercicios: [
        {
          nome: "Elevação Pélvica",
          musculo: "Glúteo máximo",
          series: ["20 (aquecimento)", "15", "15", "20"],
          descanso: 60,
          carga: 25,
          cargaNota: "Sugestão: carga reduzida para acertar a técnica",
          obs: [
            "Banco logo abaixo das escápulas — o tronco gira na borda como dobradiça.",
            "No topo, canela na vertical (joelho em cima do tornozelo).",
            "Olhar para os joelhos, queixo levemente para dentro. Nunca olhar para o teto.",
            "Costela fechada e quadril \"encaixado\" (esconder o bumbum) no topo.",
            "Parar quando joelho, quadril e ombro formarem uma linha reta.",
            "Segurar 1–2 s apertando o glúteo e descer com controle.",
            "Carga reduzida por 2 semanas (era 40 kg) até a técnica ficar automática.",
            "Sentiu a lombar? Diminua a subida. Se continuar doendo: troque por Ponte de Glúteo no chão (mesmas séries) ou elevação pélvica no aparelho."
          ],
          alerta: true
        },
        {
          nome: "Agachamento Sumô no Smith ou Halteres",
          musculo: "Glúteos / Adutores",
          series: ["12", "12", "12", "10 + falha"],
          descanso: 60,
          carga: 24,
          tecnica: "Rest-pause na última série: faça 10 repetições, descanse 20 segundos e continue até a falha."
        },
        {
          nome: "Stiff com Halteres ou Barra",
          musculo: "Posterior de coxa",
          series: ["12 a 15", "12 a 15", "12 a 15", "12 a 15"],
          descanso: 60,
          carga: 30
        },
        {
          nome: "Mesa Flexora",
          musculo: "Posterior de coxa",
          series: ["15", "12", "10", "8"],
          descanso: 60,
          carga: 30,
          tecnica: "Aumente a carga a cada série."
        },
        {
          nome: "Extensão do Quadril na Polia",
          musculo: "Glúteo máximo",
          series: ["15", "15", "15"],
          descanso: 45
        },
        {
          nome: "Abdução do Quadril na Polia",
          musculo: "Glúteo médio",
          series: ["15", "15", "12"],
          descanso: 45
        }
      ]
    },
    {
      id: "T2",
      nome: "Superiores",
      tempo: "~50 min",
      exercicios: [
        {
          nome: "Remada Sentada (triângulo ou V)",
          musculo: "Costas média",
          series: ["15", "15", "15"],
          descanso: 45,
          carga: 20
        },
        {
          nome: "Pull Down com Corda",
          musculo: "Dorsal",
          series: ["15", "15", "15"],
          descanso: 45,
          carga: 15
        },
        {
          nome: "Remada Curvada com Halteres",
          musculo: "Costas / Dorsal",
          series: ["12 a 15", "12 a 15", "12 a 15"],
          descanso: 45,
          carga: 7
        },
        {
          nome: "Supino Reto com Halter",
          musculo: "Peitoral",
          series: ["12", "12", "12"],
          descanso: 45,
          carga: 5
        },
        {
          nome: "Desenvolvimento com Halteres no Banco 90°",
          musculo: "Ombros",
          series: ["15", "15"],
          descanso: 45,
          carga: 7
        },
        {
          biset: true,
          descanso: 40,
          itens: [
            { nome: "Elevação Lateral", musculo: "Ombros", series: ["12 a 15", "12 a 15", "12 a 15"], carga: 4 },
            { nome: "Crucifixo Invertido", musculo: "Ombro posterior", series: ["12 a 15", "12 a 15", "12 a 15"], carga: 20 }
          ]
        },
        {
          biset: true,
          descanso: 40,
          itens: [
            { nome: "Rosca Bíceps", musculo: "Bíceps", series: ["15", "15", "15"] },
            { nome: "Tríceps na Polia Alta", musculo: "Tríceps", series: ["15", "15", "15"], carga: 15 }
          ]
        }
      ]
    },
    {
      id: "T3",
      nome: "Quadríceps & Glúteos",
      tempo: "~50 min",
      exercicios: [
        {
          nome: "Cadeira Extensora",
          musculo: "Quadríceps",
          series: ["20", "15", "12", "10", "8"],
          descanso: 45,
          carga: 35
        },
        {
          nome: "Agachamento no Smith ou Livre",
          musculo: "Quadríceps / Glúteos",
          series: ["12", "12", "15", "15"],
          descanso: 75,
          carga: 20
        },
        {
          nome: "Leg Press 45°",
          musculo: "Quadríceps",
          series: ["12", "12", "12"],
          descanso: 60,
          carga: 40,
          tecnica: "Faça a descida em 3 segundos."
        },
        {
          nome: "Agachamento Afundo",
          musculo: "Pernas / Glúteos",
          series: ["20 (peso do corpo)", "12", "12", "10 + 10"],
          descanso: 60,
          tecnica: "Drop set na última série: depois das 10 repetições, reduza 20% da carga e faça mais 10."
        },
        {
          biset: true,
          descanso: 45,
          itens: [
            { nome: "Cadeira Flexora", musculo: "Posterior isolado", series: ["12 a 15", "12 a 15"], carga: 40 },
            { nome: "Stiff com Halteres", musculo: "Posterior de coxa", series: ["12 a 15", "12 a 15"] }
          ]
        },
        {
          nome: "Panturrilha em Pé",
          musculo: "Panturrilhas",
          series: ["12", "12", "12", "12"],
          descanso: 40
        }
      ]
    },
    {
      id: "T4",
      nome: "Glúteo Médio & Core",
      tempo: "~35–40 min",
      exercicios: [
        {
          nome: "Cadeira Abdutora 45°",
          musculo: "Glúteo médio",
          series: ["15 a 20", "15 a 20", "15 a 20", "15 a 20"],
          descanso: 40,
          carga: 35
        },
        {
          nome: "Cadeira Abdutora 110°",
          musculo: "Glúteo médio superior",
          series: ["15 a 20", "15 a 20", "15 a 20", "15 a 20"],
          descanso: 40
        },
        {
          nome: "Abdução de Quadril no Banco 45° com Caneleira",
          musculo: "Glúteo médio",
          series: ["15 cada lado", "15 cada lado", "15 cada lado"],
          descanso: 40,
          tecnica: "Pico de contração: segure 1 a 2 segundos com a perna no alto."
        },
        {
          nome: "Perdigueiro",
          musculo: "Core / Estabilidade",
          series: ["10 cada lado", "10 cada lado", "10 cada lado"],
          descanso: 30,
          tecnica: "Segure 2 segundos com braço e perna estendidos antes de trocar de lado.",
          obs: [
            "Mãos embaixo dos ombros, joelhos embaixo do quadril.",
            "Estenda braço e perna opostos até a linha do tronco — não acima.",
            "Barriga firme e quadril parado, sem girar. A lombar não pode afundar.",
            "Imagine um copo d'água nas costas que não pode cair."
          ]
        },
        {
          biset: true,
          descanso: 30,
          itens: [
            { nome: "Abdominal Supra", musculo: "Abdômen superior", series: ["15 a 20", "15 a 20", "15 a 20", "15 a 20"] },
            { nome: "Abdominal Infra", musculo: "Abdômen inferior", series: ["15 a 20", "15 a 20", "15 a 20", "15 a 20"] }
          ]
        }
      ]
    }
  ]
};

// ============================================================
//  COMO FAZER — pontos de execução de cada exercício.
//  A chave é o nome do exercício (igual ao campo "nome" acima).
//  Se o exercício tiver "obs" próprio lá em cima, ele tem prioridade.
// ============================================================
const COMO_FAZER = {
  "Agachamento Sumô no Smith ou Halteres": [
    "Pés bem mais abertos que o quadril, pontas viradas para fora (~45°).",
    "Joelhos apontam na mesma direção dos pés o tempo todo.",
    "Tronco em pé, peito aberto; desça sentando entre as pernas.",
    "Suba empurrando o chão e apertando o glúteo no final.",
    "Erro comum: joelhos caindo para dentro na subida."
  ],
  "Stiff com Halteres ou Barra": [
    "Pés na largura do quadril, joelhos levemente dobrados e fixos.",
    "Empurre o quadril para trás, como se fosse fechar uma porta com o bumbum.",
    "Peso desliza rente às pernas; coluna reta e olhar para o chão à frente.",
    "Desça até sentir alongar atrás da coxa (geralmente um pouco abaixo do joelho) e suba apertando o glúteo.",
    "Erro comum: arredondar as costas para descer mais — é o que machuca a lombar."
  ],
  "Stiff com Halteres": [
    "Pés na largura do quadril, joelhos levemente dobrados e fixos.",
    "Empurre o quadril para trás; halteres descem rentes às pernas.",
    "Coluna reta, desça só até sentir alongar atrás da coxa.",
    "Erro comum: arredondar as costas para descer mais."
  ],
  "Mesa Flexora": [
    "Joelho alinhado com o eixo do aparelho; rolo logo acima do calcanhar.",
    "Quadril colado no banco o tempo todo — segure nas alças.",
    "Suba até o máximo que conseguir e desça devagar (2–3 s).",
    "Erro comum: levantar o quadril do banco para ajudar a subir."
  ],
  "Extensão do Quadril na Polia": [
    "Caneleira no tornozelo, mãos apoiadas na polia, tronco levemente inclinado.",
    "Leve a perna para trás com o joelho quase reto, movimento saindo do glúteo.",
    "Pare quando sentir o glúteo apertar — não precisa subir muito.",
    "Erro comum: arquear a lombar para a perna ir mais alto."
  ],
  "Abdução do Quadril na Polia": [
    "Caneleira na perna de fora, de lado para a polia, apoio firme com a mão.",
    "Leve a perna para o lado e um pouco para trás, ponta do pé para frente.",
    "Tronco parado; volte devagar sem deixar o peso bater.",
    "Erro comum: inclinar o tronco para o lado para a perna subir mais."
  ],
  "Remada Sentada (triângulo ou V)": [
    "Pés apoiados, joelhos levemente dobrados, coluna reta.",
    "Puxe o triângulo até a barriga, levando os cotovelos para trás e colados ao corpo.",
    "No final, aperte as escápulas (como se segurasse um lápis entre elas).",
    "Erro comum: jogar o tronco para trás para puxar o peso."
  ],
  "Pull Down com Corda": [
    "Em pé de frente para a polia alta, tronco levemente inclinado, braços quase retos.",
    "Puxe a corda em arco até as coxas, sem dobrar o cotovelo.",
    "Sinta a lateral das costas (dorsal) fazendo a força; volte devagar.",
    "Erro comum: dobrar os cotovelos e virar um tríceps."
  ],
  "Remada Curvada com Halteres": [
    "Joelhos levemente dobrados, tronco inclinado ~45°, coluna reta.",
    "Puxe os halteres em direção ao quadril, cotovelos rentes ao corpo.",
    "Aperte as costas em cima e desça com controle.",
    "Cansou a lombar? Troque por remada serrote (um braço, outro apoiado no banco).",
    "Erro comum: arredondar as costas ou dar tranco com o corpo."
  ],
  "Supino Reto com Halter": [
    "Deitada no banco, pés no chão, escápulas \"encaixadas\" para trás e para baixo.",
    "Halteres descem na linha do meio do peito, cotovelos a ~45° do corpo (não abertos em T).",
    "Empurre para cima aproximando os halteres, sem bater um no outro.",
    "Erro comum: abrir demais os cotovelos — sobrecarrega o ombro."
  ],
  "Desenvolvimento com Halteres no Banco 90°": [
    "Costas inteiras apoiadas no banco, barriga firme.",
    "Halteres na altura das orelhas, cotovelos um pouco à frente do corpo.",
    "Empurre para cima sem travar totalmente o cotovelo; desça até a orelha.",
    "Erro comum: arquear a lombar e tirar as costas do banco."
  ],
  "Elevação Lateral": [
    "Em pé, joelhos destravados, halteres ao lado do corpo.",
    "Suba os braços para o lado até a altura dos ombros, cotovelos levemente dobrados.",
    "Pense em levar o halter \"para longe\", não para cima; desça devagar.",
    "Erro comum: subir os ombros em direção às orelhas ou dar impulso com o corpo."
  ],
  "Crucifixo Invertido": [
    "Tronco inclinado à frente (ou no aparelho/polia), braços estendidos à frente.",
    "Abra os braços para os lados, cotovelos levemente dobrados.",
    "Foco na parte de trás do ombro; pare na linha do corpo.",
    "Erro comum: usar carga alta e puxar com as costas."
  ],
  "Rosca Bíceps": [
    "Em pé, cotovelos colados na lateral do corpo.",
    "Suba o peso só dobrando o cotovelo; aperte o bíceps em cima.",
    "Desça devagar até o braço quase esticar.",
    "Erro comum: balançar o tronco para jogar o peso."
  ],
  "Tríceps na Polia Alta": [
    "De frente para a polia, cotovelos colados ao corpo e parados.",
    "Empurre a barra/corda para baixo até esticar o braço.",
    "Volte só até o antebraço ficar paralelo ao chão.",
    "Erro comum: deixar os cotovelos subirem e abrirem."
  ],
  "Cadeira Extensora": [
    "Joelho alinhado com o eixo do aparelho; rolo na frente do tornozelo.",
    "Costas no encosto, segure nas alças.",
    "Estique a perna toda, segure 1 s em cima e desça devagar.",
    "Erro comum: descer rápido deixando o peso cair."
  ],
  "Agachamento no Smith ou Livre": [
    "Pés na largura dos ombros, pontas levemente para fora.",
    "Desça empurrando o quadril para trás e para baixo, peito aberto.",
    "Joelhos acompanham a direção dos pés; desça até onde a coluna fica reta.",
    "Suba empurrando o chão com o pé inteiro.",
    "Erro comum: calcanhar saindo do chão ou lombar \"quebrando\" no fundo."
  ],
  "Leg Press 45°": [
    "Costas e quadril colados no encosto o tempo todo.",
    "Pés no meio da plataforma, na largura do quadril.",
    "Desça em 3 s até os joelhos formarem ~90° e empurre com o pé inteiro.",
    "Não trave o joelho em cima.",
    "Erro comum: descer demais e o quadril descolar do encosto (força a lombar)."
  ],
  "Agachamento Afundo": [
    "Passo largo; tronco em pé, peso na perna da frente.",
    "Desça o joelho de trás em direção ao chão, joelho da frente acima do tornozelo.",
    "Suba empurrando com o calcanhar da perna da frente.",
    "Erro comum: passo curto demais — o joelho da frente passa muito do pé."
  ],
  "Cadeira Flexora": [
    "Joelho alinhado com o eixo do aparelho, coxa presa pelo apoio.",
    "Dobre a perna até o máximo e volte devagar.",
    "Erro comum: soltar o peso na volta."
  ],
  "Panturrilha em Pé": [
    "Ponta dos pés no degrau/plataforma, calcanhar livre.",
    "Desça o calcanhar até alongar e suba o máximo na ponta dos pés.",
    "Segure 1 s em cima; movimento lento.",
    "Erro comum: fazer rápido e curtinho, \"quicando\"."
  ],
  "Cadeira Abdutora 45°": [
    "Tronco inclinado à frente (~45°), quadril bem encaixado no banco.",
    "Abra as pernas empurrando com a lateral dos joelhos.",
    "Segure 1 s aberta e feche devagar, sem deixar o peso bater.",
    "Erro comum: fechar rápido e perder a tensão."
  ],
  "Cadeira Abdutora 110°": [
    "Tronco encostado no banco reclinado (~110°), segurando nas alças.",
    "Abra as pernas o máximo e segure 1 s.",
    "Volte devagar, sem deixar o peso encostar.",
    "Pega mais a parte de cima do glúteo."
  ],
  "Abdução de Quadril no Banco 45° com Caneleira": [
    "Deitada de lado no banco inclinado, apoio firme no antebraço.",
    "Suba a perna de cima com o pé levemente virado para baixo.",
    "Segure 1–2 s no alto e desça devagar.",
    "Erro comum: girar o quadril para trás para subir mais."
  ],
  "Abdominal Supra": [
    "Deitada, joelhos dobrados, mãos atrás da cabeça sem puxar o pescoço.",
    "Suba só até tirar as escápulas do chão, soltando o ar.",
    "Desça devagar sem relaxar totalmente.",
    "Erro comum: puxar a cabeça com as mãos."
  ],
  "Abdominal Infra": [
    "Deitada, mãos embaixo do quadril, lombar colada no chão.",
    "Suba as pernas (ou leve os joelhos ao peito) tirando o quadril levemente do chão.",
    "Desça devagar só até onde a lombar continua colada.",
    "Erro comum: descer as pernas demais e a lombar descolar — aí dói."
  ]
};
