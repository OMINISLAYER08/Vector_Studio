# WORKFLOW: CRIAÇÃO E DEPLOY DE NOVOS SITES (PADRÃO VECTOR)

Este guia explica como transformar uma ideia em um site online e integrado ao portfólio da Vector, usando a Lovable para o "trabalho bruto" e o método Vector para o "acabamento premium".

---

### FASE 1: CRIAÇÃO RÁPIDA (Lovable) 🚀
1.  Acesse a Lovable e peça o site: *"Crie uma landing page para [Projeto X] com seções de Hero, Sobre e Contato..."*
2.  Aprove o visual básico. Não perca tempo refinando detalhes finos lá.
3.  **Exportação:**
    *   No topo direito, clique em **Download code** (ou Export).
    *   Você receberá um arquivo `.zip` ou uma pasta com o código.

---

### FASE 2: INTEGRAÇÃO NO VECTOR (A "Casa") 🏠
1.  **Prepare a Pasta:**
    *   Vá até a pasta do projeto Vector: `Meus Documentos > PROJETOS DE SITES > VECTOR SITE > vector-studios > projects`.
    *   Crie uma NOVA pasta com o nome do projeto (sem espaços, ex: `ecovolt` ou `terraviva`).
2.  **Copie os Arquivos:**
    *   Pegue o conteúdo que você baixou da Lovable (extraia o ZIP).
    *   Copie TUDO para dentro dessa pasta nova (`projects/ecovolt`).
    *   *Nota:* Se houver arquivos soltos na raiz do zip, jogue na raiz da pasta `ecovolt`.

---

### FASE 3: O REFINAMENTO (A "Mágica") ✨
1.  Abra o chat comigo (ou sua IA de confiança).
2.  **Comando Mágico:**
    Anexe o arquivo `VEX.txt` e diga:
    > "Estou adicionando o projeto `projects/ecovolt`. Aplique o padrão visual Vector (fontes luxuosas, dourado, fundos animados) e integre ao portfólio."
3.  **O que eu farei por você:**
    *   Ajustar o `vite.config.ts` (para evitar erro 404).
    *   Instalar dependências e corrigir ícones.
    *   Aplicar as texturas e animações premium.

---

### FASE 4: PUBLICAÇÃO (Deploy Vercel) 🌍
1.  **Gerar Link do Projeto:**
    *   Vá no [Dashboard da Vercel](https://vercel.com/dashboard).
    *   Clique em **Add New... > Project**.
    *   Importe o repositório **`vector-studios`**.
    *   **IMPORTANTE:** Em "Root Directory", clique em Edit e selecione a pasta do seu novo site (ex: `projects/ecovolt`).
    *   Clique em **Deploy**. Salve a URL gerada (ex: `ecovolt.vercel.app`).

2.  **Adicionar ao Portfólio Vector:**
    *   Me mande a URL nova.
    *   Eu criarei o card no portfólio com a imagem correta.

---

### RESUMO RÁPIDO
1.  **Crie** no Lovable -> **Baixe**.
2.  **Crie a pasta** em `projects/NOMEDOPROJETO` -> **Cole**.
3.  **Me chame** para polir.
4.  **Vercel** -> Importar Repo -> Root Directory = `projects/NOMEDOPROJETO`.
