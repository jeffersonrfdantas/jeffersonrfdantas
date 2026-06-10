# English Quest RPG — Plataforma EdTech Gamificada

## Visão geral do produto

**English Quest RPG** é uma plataforma web interativa para estudantes do Ensino Médio aprenderem inglês por meio de missões narrativas, desafios rápidos e progressão inspirada em RPG. A experiência combina objetivos pedagógicos claros com mecânicas de jogo como XP, moedas virtuais, atributos, inventário, mapas de missão e recomendações adaptativas.

### Público-alvo

- **Alunos do Ensino Médio:** precisam de uma interface visual, responsiva, direta e motivadora.
- **Professores:** precisam acompanhar evolução por habilidade, tempo de prática, recorrência de erros e missões recomendadas.
- **Coordenação pedagógica:** pode usar indicadores agregados para avaliar engajamento e evolução por turma.

## Arquitetura das páginas principais

| Página | Objetivo | Principais componentes |
| --- | --- | --- |
| **Landing Page** | Apresentar a proposta da plataforma para escola, professor e aluno. | Hero com CTA, trilhas de habilidades, benefícios, depoimentos e acesso rápido. |
| **Login / Cadastro** | Permitir entrada por aluno, professor ou administrador. | Login social/institucional, seleção de perfil, recuperação de senha e consentimento LGPD. |
| **Dashboard do Aluno** | Centralizar a jornada do estudante como uma ficha de personagem. | Avatar, nível, XP, moedas, sequência de estudos, próximas missões e alertas de reforço. |
| **Mapa de Missões** | Organizar os jogos em uma jornada narrativa. | Mapa por capítulos, missões bloqueadas/desbloqueadas, dificuldade, recompensas e pré-requisitos. |
| **Missões de Vocabulary** | Trabalhar repertório lexical em contexto. | Associação de cartas, enigmas, inventário de palavras, loot vocabular e revisões espaçadas. |
| **Missões de Grammar** | Praticar estrutura de frases de forma aplicada. | Construção de sentenças, desbloqueio de caminhos, puzzles de ordem, escolhas com feedback. |
| **Missões de Listening** | Desenvolver compreensão oral com diálogos curtos. | NPCs com áudio, decisões narrativas, replay controlado, legendas opcionais e checagem de intenção. |
| **Missões de Reading** | Treinar interpretação com pistas e textos contextualizados. | Cartas, diários, mensagens, pistas com tempo, perguntas inferenciais e busca de evidências. |
| **Painel de Progresso do Aluno** | Mostrar evolução individual e recomendações. | Tempo de jogo, tempo por missão, gráfico radar de habilidades, histórico, pontos fortes/fracos. |
| **Dashboard do Professor** | Acompanhar turmas e intervir pedagogicamente. | Ranking saudável, filtros por turma, alunos em risco, média por habilidade e exportação de relatórios. |
| **Biblioteca de Conteúdos** | Permitir curadoria e criação de missões. | Editor de missões, banco de vocabulário, rubricas, níveis CEFR e alinhamento à BNCC. |
| **Perfil / Loja Cosmética** | Reforçar motivação sem interferir na aprendizagem. | Personalização de avatar, títulos, insígnias, pets, temas visuais e conquistas. |

## Diretrizes de UI/UX

- **Visual moderno e dinâmico:** fundo em gradientes escuros, cards translúcidos, microinterações e contraste alto.
- **Responsividade:** cards em grid flexível, navegação lateral que se adapta para barra superior em telas menores e gráficos redimensionáveis.
- **Foco no aluno:** o painel inicial usa metáforas de RPG — ficha de personagem, XP, atributos, moedas e missões recomendadas.
- **Feedback pedagógico imediato:** cada missão deve explicar erro/acerto, habilidade treinada e próxima ação sugerida.
- **Gamificação com propósito:** recompensas desbloqueiam cosméticos, capítulos e autonomia, sem punir excessivamente erros.
- **Acessibilidade:** textos legíveis, estados de foco, cores acompanhadas por rótulos, botões grandes e alternativa textual para gráficos.

## Categorias de jogos como missões

### Vocabulary

- **Associação de runas:** combinar palavra, imagem, áudio e frase de exemplo.
- **Inventário de palavras:** coletar vocabulário durante capítulos e usar itens corretos em diálogos.
- **Enigmas lexicais:** resolver códigos, sinônimos, antônimos e falsos cognatos para abrir baús.

### Grammar

- **Construção de portais:** ordenar palavras para formar frases que liberam caminhos.
- **Feitiços condicionais:** escolher tempos verbais e estruturas para produzir efeitos narrativos.
- **Correção de pergaminhos:** identificar erros em mensagens de NPCs e reescrever corretamente.

### Listening

- **Diálogos de NPCs:** ouvir instruções curtas para escolher a próxima ação.
- **Rádio da guilda:** compreender avisos, pistas e descrições com ruído leve e velocidade ajustável.
- **Escolhas narrativas:** decisões baseadas no que foi ouvido, com feedback por intenção comunicativa.

### Reading

- **Cartas cronometradas:** interpretar mensagens, e-mails ou pistas antes que o evento termine.
- **Diário de missão:** localizar evidências no texto para responder perguntas inferenciais.
- **Investigação textual:** comparar pistas e deduzir o significado de palavras pelo contexto.

## Sistema de tracking e analytics

- **Tempo de jogo:** registra tempo total, tempo semanal, tempo por missão e sessões interrompidas.
- **Habilidades desenvolvidas:** calcula atributos em Reading, Listening, Speaking, Writing e Grammar com base em acertos, dificuldade, repetição e consistência.
- **Histórico pedagógico:** mapeia padrões de erro, pontos fortes e pontos fracos para sugerir missões de reforço.
- **Recomendações adaptativas:** prioriza missões de menor domínio, mas mantém variedade para evitar fadiga.
- **Relatórios para professores:** destaca alunos com baixa frequência, evolução acelerada, dificuldade persistente ou necessidade de desafio extra.

## Protótipo entregue

O arquivo [`index.html`](index.html) contém uma tela completa e semântica do **Painel de Progresso do Aluno**, com CSS embutido, layout responsivo e JavaScript para renderizar dados fictícios de tempo de jogo e um gráfico radar de habilidades usando Chart.js via CDN.
