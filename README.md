# Meu Treino

App de treino para usar no celular, sem instalar nada.

**O programa**: 3 treinos de corpo inteiro em sequência (**A → B → C → A…**), mais um **Express de 30 min** para os dias corridos. Não importa o dia da semana: quando for à academia, faça o treino marcado como PRÓXIMO.

Cada treino (~50 min) tem: aquecimento (5 min) → 2 bi-sets de força → circuito de suor por tempo → finalizador de cardio intervalado.

**Fase de adaptação (padrão):** 2 rodadas em vez de 3 e cardio contínuo moderado no lugar dos tiros (~40 min). Quando estiver se sentindo bem por 3–4 semanas seguidas, toque em **Completo**.

**Dia difícil:** marque a caixa e o treino vira só aquecimento + os 2 bi-sets de força (~25 min). Conta no histórico e na sequência normalmente.

**📋 Hoje (diário de sintomas):** 30 segundos por dia — dor de cabeça, tontura, calorões, energia, rouquidão, remédio, treino, pressão e observação. Embaixo aparece o resumo dos últimos 14 dias e o botão **Copiar resumo** para mandar no WhatsApp da médica ou mostrar na consulta. Dá para preencher dias anteriores com a seta ‹.

**O que o app faz**
- Marca o PRÓXIMO treino da sequência, com base no histórico
- Circuitos e cardio com cronômetro guiado: ▶ Iniciar e ele avisa (bipe + vibração) quando trocar de exercício, descansar e voltar. Mantém a tela acesa.
- Descanso automático nos bi-sets (começa quando você termina o par)
- "Como fazer" + botão de vídeo em todos os exercícios, com cuidados para a lombar
- Registro de carga por exercício, relógio do treino e histórico

## Colocar no ar pelo GitHub (uns 5 minutos)

1. Crie uma conta em github.com (se ainda não tiver).
2. Clique em **New repository** → nome: `meu-treino` → marque **Public** → **Create repository**.
3. Na página do repositório, clique em **uploading an existing file** e arraste **todos** os arquivos desta pasta (`index.html`, `treino.js`, `manifest.webmanifest`, `icon.svg`, `icon-180.png`, `icon-512.png`, `README.md`) → **Commit changes**.
4. Vá em **Settings → Pages**. Em *Branch*, escolha `main` e a pasta `/ (root)` → **Save**.
5. Espere 1–2 minutos. O link aparece no topo da página: `https://SEU-USUARIO.github.io/meu-treino/`

## Colocar na tela inicial do celular

- **iPhone (Safari):** abra o link → botão de compartilhar → **Adicionar à Tela de Início**.
- **Android (Chrome):** abra o link → menu ⋮ → **Adicionar à tela inicial**.

O app abre em tela cheia, como um aplicativo.

## Como mudar o treino

Tudo está no arquivo **`treino.js`**. No GitHub, abra o arquivo → ícone de lápis ✏️ → edite → **Commit changes**. Em 1–2 minutos o app atualiza.

Exemplo, para mudar as repetições de um exercício:
```js
series: ["15", "12", "10", "8"],   // uma entrada por série
descanso: 60,                      // segundos
```

## Versão anterior

A versão enxuta do protocolo Corpo de Musa (T1–T4) está em `versoes/treino-corpo-de-musa-enxuto.js`. Para voltar a ela, renomeie esse arquivo para `treino.js` e substitua o atual. O "Como fazer" desses exercícios está no fim do próprio arquivo.

## Observações

- As cargas e o histórico ficam salvos **no navegador do celular**. Se você limpar os dados do navegador ou trocar de celular, eles começam do zero.
- O arquivo também abre direto no computador (duplo clique no `index.html`), sem precisar do GitHub.
