import type fr from './fr'

const pt: typeof fr = {
  app: {
    name: 'bloub',
    title: 'bloub — avatar SVG animado',
    botAria: 'Avatar bloub animado'
  },

  gallery: {
    back: 'Voltar ao leitor'
  },

  rail: {
    nav: 'Seções',
    customize: 'Personalizar',
    animations: 'Animações',
    settings: 'Configurações'
  },

  panel: {
    animations: 'Animação',
    shape: 'Forma',
    expression: 'Expressão',
    color: 'Cor'
  },

  export: {
    action: 'Exportar como PNG',
    more: 'Outros formatos',
    png: 'Baixar PNG',
    svg: 'Baixar SVG',
    anime: 'Baixar animação SVG',
    gif: 'Baixar GIF animado',
    cycleDetail: 'O vídeo é mais leve e fluido; o GIF funciona em qualquer lugar.',
    cycleFormat: 'Formato',
    cycle_mp4: 'Vídeo MP4',
    cycle_mp4_aide: 'Leve e fluido, fundo obrigatório',
    cycle_gif: 'GIF animado',
    cycle_gif_aide: 'Funciona em qualquer lugar, mais pesado',
    cycleProgress: 'Exportando…',
    cycleReessayer: 'Tentar novamente',
    gifTitle: 'Baixar GIF animado',
    gifDetail:
      'O GIF só gerencia a transparência de forma total: sem fundo, a borda da bola fica um pouco dura.',
    gifBackground: 'Fundo',
    fond_blanc: 'Fundo branco',
    fond_blanc_aide: 'Borda lisa, para superfícies claras',
    fond_transparent: 'Fundo transparente',
    fond_transparent_aide: 'Adapta-se a qualquer fundo, borda um pouco dura',
    gifConfirm: 'Baixar',
    copie: 'Copiar imagem',
    copieSvg: 'Copiar SVG',
    done: 'Exportado',
    copied: 'Copiado',
    failed: 'Falha na exportação'
  },

  preview: {
    exit: 'Sair da visualização',
    key: 'Esc'
  },

  timeline: {
    play: 'Iniciar reprodução',
    pause: 'Parar reprodução',
    addAnimation: 'Adicionar animação',
    preview: 'Visualização',
    export: 'Exportar montagem',
    zoom: 'Zoom da trilha',
    blockAria: '{state}, {duration}',
    blockDurationAria: 'Duração de {state}, {duration}',
    blockRemoveAria: 'Remover {state}'
  },

  dialog: {
    cancel: 'Cancelar',
    nameCreateTitle: 'Novo ciclo',
    nameRenameTitle: 'Renomear ciclo',
    nameField: 'Nome do ciclo',
    nameCreate: 'Criar',
    nameRename: 'Renomear',
    removeTitle: 'Excluir "{name}"?',
    removeDetail:
      'Esta montagem será perdida, junto com sua animação. | Esta montagem será perdida, junto com suas {n} animações.',
    removeConfirm: 'Excluir'
  },

  cycles: {
    defaultName: 'Ciclo padrão',
    newName: 'Meu ciclo',
    menuNew: 'Novo ciclo',
    menuRenameAria: 'Renomear {name}',
    menuRemoveAria: 'Excluir {name}'
  },

  units: {
    seconds: '{n} s',
    secondsShort: '{n}s'
  },

  settings: {
    title: 'Configurações',
    language: 'Idioma',
    about: 'Sobre',
    credits: 'Criado com ❤️ por {name}',
    creditsAria: 'Jérémy no X, em uma nova aba',
    github: 'Ver projeto no GitHub',
    githubAria: 'O repositório do projeto no GitHub, em uma nova aba'
  },

  states: {
    idle: 'Repouso',
    thinking: 'Pensando',
    wink: 'Piscada',
    wide: 'Olhos arregalados',
    alert: 'Alerta',
    notify: 'Notificação',
    exclaim: 'Exclamação',
    sleep: 'Sono',
    egg: 'Ovo',
    hexagon: 'Hexágono',
    play: 'Reprodução',
    orbit: 'Órbita',
    burst: 'Explosão',
    comet: 'Cometa',
    swirl: 'Redemoinho'
  },

  shapes: {
    cercle: 'Círculo',
    galet: 'Seixo',
    squircle: 'Squircle',
    capsule: 'Cápsula',
    triangle: 'Triângulo',
    hexagone: 'Hexágono',
    nuage: 'Nuvem',
    goutte: 'Gota'
  },

  colors: {
    encre: 'Tinta',
    creme: 'Creme',
    brun: 'Marrom',
    rouge: 'Vermelho',
    orange: 'Laranja',
    ambre: 'Âmbar',
    vert: 'Verde',
    turquoise: 'Turquesa',
    bleu: 'Azul',
    violet: 'Roxo',
    rose: 'Rosa',
    gris: 'Cinza'
  },

  expressions: {
    neutre: 'Neutro',
    attentif: 'Atento',
    surpris: 'Surpreso',
    excite: 'Animado',
    heureux: 'Feliz',
    hilare: 'Hilariante',
    colere: 'Com raiva',
    triste: 'Triste',
    effraye: 'Assustado',
    mefiant: 'Desconfiado',
    confus: 'Confuso',
    curieux: 'Curioso',
    fier: 'Orgulhoso',
    timide: 'Tímido',
    blase: 'Desinteressado',
    somnolent: 'Sonolento'
  }
}

export default pt
