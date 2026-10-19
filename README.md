# Meu Treino

App de treino (funciona no celular, sem instalar nada) com os 4 treinos da versão enxuta do protocolo Corpo de Musa.

**O que ele faz**
- Abas T1 a T4, com séries para marcar ✓
- Cronômetro de descanso automático ao marcar a série (apita e vibra no fim). Nos bi-sets, ele só começa depois que você termina o par.
- Registro de carga por exercício (fica salvo no celular)
- Relógio do treino e histórico dos treinos concluídos
- Ajustes da elevação pélvica para proteger a lombar, mais o plano B

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

## Observações

- As cargas e o histórico ficam salvos **no navegador do celular**. Se você limpar os dados do navegador ou trocar de celular, eles começam do zero.
- O arquivo também abre direto no computador (duplo clique no `index.html`), sem precisar do GitHub.
