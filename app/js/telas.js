/* MODELED-EN */
/* telas.js: telas principais (primeiro acesso, hoje, 21 dias, receitas, balanço, guia). */
var UI = {
  unlockAberto: null, unlockMsg: null,
  onb: 0, aceite: false,
  diaVisto: null,
  filtro: { camada: '', ess: false, fav: false, obj: '', q: '' },
  desafioDia: null, comprasAba: 'kit', checkAba: 'folha', checkSemana: 1, checkDia: 0
};

/* ---------- componentes ---------- */
function ico(id, cls) { return '<svg class="ic' + (cls ? ' ' + cls : '') + '" aria-hidden="true"><use href="#i-' + id + '"/></svg>'; }
function ck(attrs, marcado, rotulo) {
  return '<span class="ck"><input type="checkbox" ' + attrs + (marcado ? ' checked' : '') + ' aria-label="' + esc(rotulo) + '"><span class="caixa"><svg aria-hidden="true"><use href="#i-check"/></svg></span></span>';
}
function rlink(n) {
  var r = rec(n); if (!r) return '';
  return '<a class="rlink" href="#receita-' + n + '">' + esc(r.nome) + ico('seta') + '</a>';
}
function topo(voltar, titulo) {
  var plano = CONFIG.planos[planoAtual()];
  var esq = voltar
    ? '<button class="voltar" data-acao="voltar" data-para="' + esc(voltar) + '">' + ico('voltar') + 'Voltar</button>'
    : '<span class="marca"><i>Método Pele de Seda Coreana</i></span>';
  return '<header class="topo">' + esq + (titulo ? '' : '') + '<span class="plano">' + esc(plano ? plano.nome : '') + '</span></header>';
}
function rodape() {
  return '<p class="rodape">' + esc('Método Pele de Seda Coreana') + ' · conteúdo informativo e de bem-estar. <a href="#g-aviso">Aviso importante</a></p>';
}
function lembreteSol() {
  var r = GUIA.regrasDeOuro[1];
  return '<div class="lembrete" role="note">' + ico('sol') + '<div><b>' + esc(r.titulo) + '</b>' + esc(r.texto) + '</div></div>';
}
function paragrafos(arr) { return (arr || []).map(function (t) { return '<p class="mt">' + esc(t) + '</p>'; }).join(''); }
function listaUL(arr) { return '<ul class="lista">' + (arr || []).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>'; }
function listaOL(arr) { return '<ol class="lista">' + (arr || []).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ol>'; }

/* ---------- 1. primeiro acesso ---------- */
function telaOnboarding() {
  var bolas = '<div class="passos-onb" aria-hidden="true">' + [0, 1, 2].map(function (i) { return '<i class="' + (i <= UI.onb ? 'on' : '') + '"></i>'; }).join('') + '</div>';
  var h = '<div class="onb">' + bolas;
  if (UI.onb === 0) {
    var bv = GUIA.boasVindas;
    h += '<div class="foto"><img src="img/mulher-retrato.webp" width="400" height="535" alt="Mulher sorrindo com a pele bem cuidada"></div>' +
      '<p class="hand mt" style="text-align:center">seu ritual de 21 dias</p>' +
      '<h1 style="text-align:center;margin-top:6px">' + esc(bv.titulo) + '</h1>' + paragrafos(bv.texto) +
      '<div class="btns"><button class="btn block" data-acao="onb" data-p="1">Continuar' + ico('seta') + '</button></div>';
  } else if (UI.onb === 1) {
    h += '<p class="kicker mt">Antes de começar</p><h1>As 6 regras de ouro</h1>' +
      '<div class="card">' + GUIA.regrasDeOuro.map(function (r) {
        return '<div class="regra"><span class="n">' + r.n + '</span><div><b>' + esc(r.titulo) + '</b>' + esc(r.texto) + '</div></div>';
      }).join('') + '</div>' +
      '<label class="aceite">' + ck('id="aceite" data-acao="aceite"', UI.aceite, 'Li e entendi as regras de ouro') + '<span>Li e entendi as 6 regras de ouro</span></label>' +
      '<div class="btns"><button class="btn block" data-acao="onb" data-p="2"' + (UI.aceite ? '' : ' disabled') + '>Continuar' + ico('seta') + '</button>' +
      '<button class="btn ghost block" data-acao="onb" data-p="0">Voltar</button></div>';
  } else {
    h += telaDia0Corpo() +
      '<div class="btns"><button class="btn block" data-acao="comecar">Começar meu dia 1' + ico('seta') + '</button>' +
      '<button class="btn ghost block" data-acao="depois">Meu teste em pequena área de 24 horas ainda está em andamento</button></div>' +
      '<p class="peq muted mt">O Dia 1 começa na data em que você tocar em "Começar meu dia 1".</p>';
  }
  return h + '</div>' + rodape();
}
function telaDia0Corpo() {
  var dz = DESAFIO.diaZero, tc = DESAFIO.vespera.testeDeContato;
  return '<p class="kicker mt">' + esc(dz.titulo) + '</p><h1>' + esc(tc.titulo) + '</h1>' +
    '<p class="mt">' + esc(dz.subtitulo) + '</p>' +
    '<div class="foto"><img src="img/ritual-cozinha.webp" width="960" height="717" alt="Ingredientes do ritual na bancada da cozinha" loading="lazy"></div>' +
    '<div class="card"><h3>Como fazer</h3><p>' + esc(tc.instrucao) + '</p>' +
    '<h3 class="mt">Ingredientes para testar em pequena área</h3>' + listaUL(tc.ingredientes) + '</div>' +
    '<div class="atencao" role="note">' + ico('alerta') + '<div><b>Atenção</b>' + esc(GUIA.regrasDeOuro[4].texto) + '</div></div>';
}

/* ---------- 2. hoje ---------- */
function telaHoje() {
  var atual = diaAtual();
  var h = topo();
  if (!atual) {
    h += '<section class="hero"><p class="kicker">Hoje</p><h1>Comece seu dia 1</h1>' +
      '<p class="mt">Faça um teste em pequena área de 24 horas e comece quando tudo parecer e estiver bem.</p>' +
      '<div class="btns"><button class="btn claro block" data-acao="ir-dia0">Ver o Dia 0 e começar' + ico('seta') + '</button></div></section>' +
      lembreteSol() + previaRitual() + rodape();
    return h;
  }
  var d = UI.diaVisto && UI.diaVisto <= atual ? UI.diaVisto : atual;
  var total = CONFIG.plano21.totalDias;
  var p = planoDoDia(d), r = verDia(d) || { feitos: {}, concluido: false };
  var c = contagemDia(d);
  var titulo = d <= total ? 'Dia ' + d + '<small>de ' + total + '</small>' : 'Dia ' + d + '<small>ritual por conta própria</small>';
  var data = dataDoDia(d);
  h += '<section class="hero" aria-label="Seu dia">' +
    '<p class="kicker">' + (d === atual ? 'Hoje' : 'Dia anterior') + ' · ' + esc(dataBR(data).replace(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/, '$2/$1/$3')) + '</p>' +
    '<div class="dia-num">' + titulo + '</div>' +
    (d > total ? '<p class="mt">Os 21 dias estão completos. Seu ritual da manhã e da noite continua aqui, todos os dias.</p>' : '') +
    '<div class="barra" role="progressbar" aria-valuemin="0" aria-valuemax="' + c.tot + '" aria-valuenow="' + c.feitos + '"><span style="transform:scaleX(' + (c.tot ? c.feitos / c.tot : 0) + ')"></span></div>' +
    '<div class="linha-info"><span id="contador-hoje">' + c.feitos + ' de ' + c.tot + ' concluídos hoje</span>' + (r.concluido ? '<span class="chip-d">' + ico('check') + 'Dia concluído</span>' : '') + '</div>' +
    '<div class="navdia"><button data-acao="dia-ant"' + (d <= 1 ? ' disabled' : '') + '>' + ico('voltar') + 'Dia ' + Math.max(1, d - 1) + '</button>' +
    '<button data-acao="dia-prox"' + (d >= atual ? ' disabled' : '') + '>' + (d >= atual ? 'Hoje' : 'Dia ' + (d + 1)) + ico('seta') + '</button></div>' +
    '</section>';
  h += lembreteSol();
  if (p.desafio) {
    h += '<div class="card plano-card"><p class="kicker" style="color:var(--ouro-d)">Desafio de 7 Dias · Dia ' + d + '</p>' +
      '<h3>' + esc(p.desafio.titulo) + '</h3><p>' + esc(p.desafio.foco) + '</p>' +
      '<p class="peq muted mt">Uma sequência de cuidados com a pele, sem promessa de resultados.</p>' +
      '<div class="btns"><a class="btn ghost block" href="#desafio-' + d + '">Ver o dia completo do desafio' + ico('seta') + '</a></div></div>';
  }
  h += blocoRitual('manha', p.manha, d, r) + blocoRitual('noite', p.noite, d, r);
  h += blocoFoco(d, r);
  h += '<div class="card pastel"><h3>Quando seu dia fica corrido</h3><p>' + esc(p.desafio ? p.desafio.seODiaApertar : GUIA.rotinasProntas.dica) + '</p></div>';
  h += blocoCheckin(d, r);
  h += '<div class="card"><label class="lbl" for="nota-dia" style="margin-top:0">Anotação do dia</label>' +
    '<textarea id="nota-dia" data-campo="nota-dia" data-dia="' + d + '" placeholder="Como sua pele estava e se sentia, o que você percebeu...">' + esc(r.nota || '') + '</textarea></div>';
  h += '<div class="btns mt2"><button class="btn block' + (r.concluido ? ' feito' : '') + '" data-acao="concluir" data-dia="' + d + '" aria-pressed="' + (r.concluido ? 'true' : 'false') + '">' +
    (r.concluido ? ico('check') + 'Dia concluído (toque para desfazer)' : 'Dia concluído') + '</button></div>';
  return h + rodape();
}
function previaRitual() {
  var RP = GUIA.rotinasProntas;
  return '<div class="card"><h3>Como será seu ritual</h3><p><b>' + esc(RP.manha.nome) + '</b> · ' + esc(RP.manha.duracao) + '</p>' +
    '<p class="mt"><b>' + esc(RP.noite.nome) + '</b> · ' + esc(RP.noite.duracao) + '</p>' +
    '<div class="btns"><a class="btn ghost block" href="#g-regras">Rever as regras de ouro</a></div></div>';
}
function blocoRitual(qual, b, d, r) {
  var titulo = qual === 'manha' ? 'Manhã' : 'Noite';
  var h = '<section class="secao"><h2>' + ico(qual === 'manha' ? 'sol' : 'lua') + titulo + '</h2>' +
    '<p class="sub"><b>' + esc(b.nome) + '</b> · ' + esc(b.duracao) + '</p><div class="card" style="margin-top:8px"><ul class="passos">';
  b.passos.forEach(function (ps) {
    var marcado = !!(r.feitos && r.feitos[ps.chave]);
    var avisos = ps.conta.map(function (n) { return avisoLimite(n, d, marcado); }).filter(Boolean);
    h += '<li class="passo' + (marcado ? ' ok' : '') + '">' +
      ck('data-acao="passo" data-dia="' + d + '" data-chave="' + ps.chave + '" data-conta="' + ps.conta.join(',') + '" id="ck-' + d + '-' + ps.chave + '"', marcado, ps.titulo) +
      '<div class="corpo"><div class="t">' + tituloPasso(ps) + '</div><div class="d">' + esc(ps.texto) + '</div>';
    if (ps.escolha) {
      h += '<div class="escolha"><div class="rot">Máscara de hoje (troque se quiser):</div><div class="seg">' +
        ps.escolha.map(function (n) {
          return '<button data-acao="mascara" data-dia="' + d + '" data-n="' + n + '" data-chave="' + ps.chave + '" aria-pressed="' + (ps.receitas[0] === n ? 'true' : 'false') + '">' + esc(nomeRec(n)) + '</button>';
        }).join('') + '</div></div>';
    }
    var outras = ps.receitas.filter(function (n) { return !(ps.receitas.length === 1 && nomeRec(n) === ps.titulo); });
    if (outras.length) h += '<div class="rlinks">' + outras.map(rlink).join('') + '</div>';
    avisos.forEach(function (a) { h += '<div class="aviso-lim" role="note">' + ico('alerta') + '<span>' + esc(a) + '</span></div>'; });
    h += '</div></li>';
  });
  return h + '</ul></div></section>';
}
function tituloPasso(ps) {
  if (ps.receitas.length === 1 && nomeRec(ps.receitas[0]) === ps.titulo) return '<a class="tlink" href="#receita-' + ps.receitas[0] + '">' + esc(ps.titulo) + ico('seta') + '</a>';
  return esc(ps.titulo);
}
function blocoFoco(d, r) {
  var aPartir = CONFIG.plano21.focoAPartirDoDia;
  if (d < aPartir) return '';
  var obj = objetivoAtual();
  if (!obj) {
    return '<div class="card plano-card"><h3>Escolha uma rotina por objetivo</h3>' +
      '<p>A partir do dia ' + aPartir + ', seu ritual da manhã e da noite continua, e você pode adicionar uma rotina por objetivo como foco.</p>' +
      '<div class="btns"><a class="btn ghost block" href="#g-objetivos">Ver rotinas por objetivo' + ico('seta') + '</a></div></div>';
  }
  var h = '<section class="secao"><h2>' + ico('estrela') + 'Seu foco</h2><p class="sub"><b>' + esc(obj.nome) + '</b> · ' + esc(obj.para) + '</p>' +
    '<div class="card" style="margin-top:8px"><p class="peq muted">Marque o que fizer hoje. Siga as instruções de cada receita.</p><ul class="passos">';
  obj.itens.forEach(function (it) {
    var chave = 'f' + it.receita, marcado = !!(r.feitos && r.feitos[chave]);
    var av = avisoLimite(it.receita, d, marcado);
    h += '<li class="passo' + (marcado ? ' ok' : '') + '">' +
      ck('data-acao="passo" data-dia="' + d + '" data-chave="' + chave + '" data-conta="' + it.receita + '" id="ck-' + d + '-' + chave + '"', marcado, nomeRec(it.receita)) +
      '<div class="corpo"><div class="t"><a class="tlink" href="#receita-' + it.receita + '">' + esc(nomeRec(it.receita)) + ico('seta') + '</a></div><div class="d">Uso: ' + esc(it.uso) + '</div>' +
      (av ? '<div class="aviso-lim" role="note">' + ico('alerta') + '<span>' + esc(av) + '</span></div>' : '') + '</div></li>';
  });
  return h + '</ul><div class="btns"><a class="btn ghost block" href="#g-objetivos">Mudar seu foco</a></div></div></section>';
}
function blocoCheckin(d, r) {
  var ci = CHECKLIST.checkInDaPele, sel = null;
  var h = '<section class="secao"><h2>' + ico('gota') + 'Balanço da pele</h2><p class="sub">' + esc(ci.perguntaPrincipal) + '</p><div class="estados">';
  ci.estados.forEach(function (e) {
    if (r.pele === e.id) sel = e;
    h += '<button class="estado ' + esc(e.cor) + '" data-acao="pele" data-dia="' + d + '" data-v="' + esc(e.id) + '" aria-pressed="' + (r.pele === e.id ? 'true' : 'false') + '"><span class="bola" aria-hidden="true"></span><span>' + esc(e.rotulo.charAt(0).toUpperCase() + e.rotulo.slice(1)) + '<br><span class="peq muted" style="font-weight:600">' + esc(e.quando) + '</span></span></button>';
  });
  h += '</div>';
  if (sel) h += '<div class="oque" role="status"><b>' + esc(sel.titulo) + '</b>' + esc(sel.oQueFazer) + '</div>';
  return h + '</section>';
}

/* ---------- 3. 21 dias ---------- */
function telaDias() {
  var atual = diaAtual(), total = CONFIG.plano21.totalDias;
  var feitos = diasConcluidos(), pct = Math.round(feitos / total * 100);
  var h = topo() + '<p class="kicker">Sua jornada</p><h1>21 dias</h1>';
  if (!atual) h += '<div class="card pastel"><p>Seu dia 1 ainda não começou.</p><div class="btns"><button class="btn block" data-acao="ir-dia0">Começar meu dia 1</button></div></div>';
  h += '<div class="resumo"><div><b>' + pct + '%</b><span>conclu?do</span></div><div><b>' + feitos + '</b><span>de ' + total + ' dias</span></div><div><b>' + sequencia() + '</b><span>dias seguidos</span></div></div>' +
    '<div class="barra clara" style="margin-top:12px" aria-hidden="true"><span style="transform:scaleX(' + feitos / total + ')"></span></div>' +
    '<div class="legenda"><span><i style="background:var(--cta);border-color:var(--cta)"></i>feito</span><span><i style="background:var(--ouro-p);border-color:var(--ouro)"></i>hoje</span><span><i></i>pendente</span></div>';
  for (var w = 1; w <= 3; w++) h += blocoSemana(w, atual);
  return h + rodape();
}
function blocoSemana(w, atual) {
  var ds = diasDaSemana(w), feitos = ds.filter(function (d) { var r = verDia(d); return r && r.concluido; }).length;
  var fim = ds[6], passou = atual && atual >= fim;
  var marco = feitos === 7 ? '<span class="marco ok">' + ico('check') + 'Semana concluída</span>' : '<span class="marco">' + feitos + ' de 7 dias</span>';
  var h = '<div class="card"><div class="semana-h"><h3 style="margin:0">Semana ' + w + ' <span class="muted peq" style="font-family:var(--body)">· dias ' + ds[0] + ' a ' + fim + '</span></h3>' + marco + '</div><div class="grade">';
  ds.forEach(function (d) {
    var r = verDia(d), cls = 'cel', st = 'pendente';
    if (r && r.concluido) { cls += ' feito'; st = 'feito'; }
    if (atual && d === atual) { cls += ' hoje'; st = (r && r.concluido) ? 'feito' : 'hoje'; }
    else if (atual && d < atual && !(r && r.concluido)) { cls += ' perdido'; }
    if (!atual || d > atual) {
      h += '<div class="' + cls + ' futuro" aria-label="Dia ' + d + ', ainda não chegou"><b>' + d + '</b><span>em breve</span></div>';
    } else {
      h += '<a class="' + cls + '" href="#dia-' + d + '" aria-label="Dia ' + d + ', ' + st + (d === atual ? ', hoje' : '') + '"><b>' + d + '</b><span>' + st + '</span></a>';
    }
  });
  h += '</div>' + blocoDomingo(w, passou) + '</div>';
  return h;
}
function blocoDomingo(w, aberto) {
  var bd = CHECKLIST.balancoDeDomingo, reg = S.domingo[String(w)] || {}, notas = reg.notas || {}, resp = reg.resp || [];
  var cores = ['verde', 'amarelo', 'vermelho'];
  var h = '<details class="dobra"' + (aberto && !reg.cor ? ' open' : '') + '><summary><span>' + esc(bd.titulo) + ' · semana ' + w + (reg.cor ? ' <span class="pill">' + esc({ verde: 'verde', amarelo: 'amarelo', vermelho: 'vermelho' }[reg.cor] || reg.cor) + '</span>' : '') + '</span>' + ico('seta') + '</summary><div class="dentro">' +
    '<p class="peq muted">No fim da semana, faça um balanço e anote.</p><div class="estados">';
  bd.escalaCor.forEach(function (txt, i) {
    var c = cores[i];
    h += '<button class="estado ' + c + '" data-acao="dom-cor" data-w="' + w + '" data-v="' + c + '" aria-pressed="' + (reg.cor === c ? 'true' : 'false') + '"><span class="bola" aria-hidden="true"></span>' + esc(txt) + '</button>';
  });
  h += '</div><p class="mt"><b>Avaliações de ' + esc(bd.notas.escala) + '</b></p><div class="notas5">';
  bd.notas.itens.forEach(function (it) {
    h += '<div class="nota5"><div class="rot">' + esc(it) + '</div><div class="seg" role="group" aria-label="' + esc(it) + '">';
    for (var n = 1; n <= 5; n++) h += '<button data-acao="dom-nota" data-w="' + w + '" data-item="' + esc(it) + '" data-v="' + n + '" aria-pressed="' + (notas[it] === n ? 'true' : 'false') + '">' + n + '</button>';
    h += '</div></div>';
  });
  h += '</div>';
  bd.perguntas.forEach(function (q, i) {
    var id = 'dom-' + w + '-' + i;
    h += '<label class="lbl" for="' + id + '">' + esc(q) + '</label><textarea id="' + id + '" data-campo="dom-resp" data-w="' + w + '" data-i="' + i + '">' + esc(resp[i] || '') + '</textarea>';
  });
  return h + '</div></details>';
}

/* ---------- 4. receitas ---------- */
function telaReceitas() {
  var f = UI.filtro;
  var h = topo() + '<p class="kicker">Todas as 30 receitas</p><h1>Receitas</h1>' +
    '<div class="busca">' + ico('busca') + '<label class="sr" for="busca">Busque por nome ou ingrediente</label><input id="busca" type="search" data-campo="busca" placeholder="Busque por nome ou ingrediente" value="' + esc(f.q) + '" autocomplete="off"></div>' +
    '<div class="filtros" role="group" aria-label="Camada">' +
    [['', 'Todas'], ['hidratar', 'Hidratar'], ['nutrir', 'Nutrir'], ['rejuvenescer', 'Rejuvenescer']].map(function (c) {
      return '<button class="filtro" data-acao="f-camada" data-v="' + c[0] + '" aria-pressed="' + (f.camada === c[0] ? 'true' : 'false') + '">' + c[1] + '</button>';
    }).join('') + '</div>' +
    '<div class="filtros"><button class="filtro" data-acao="f-ess" aria-pressed="' + f.ess + '">Essenciais</button>' +
    '<button class="filtro" data-acao="f-fav" aria-pressed="' + f.fav + '">Favoritos</button></div>' +
    '<label class="lbl" for="f-obj">Por objetivo</label><select id="f-obj" data-campo="f-obj"><option value="">Todos os objetivos</option>' +
    GUIA.rotinasObjetivo.map(function (o) { return '<option value="' + esc(o.id) + '"' + (f.obj === o.id ? ' selected' : '') + '>' + esc(o.nome) + '</option>'; }).join('') + '</select>' +
    '<div id="rlista-box">' + listaReceitasHTML() + '</div>';
  return h + rodape();
}
function receitasFiltradas() {
  var f = UI.filtro, q = norm(f.q).trim(), obj = null;
  if (f.obj) GUIA.rotinasObjetivo.forEach(function (o) { if (o.id === f.obj) obj = o; });
  var usoObj = {};
  if (obj) obj.itens.forEach(function (it) { usoObj[it.receita] = it.uso; });
  return RECEITAS.filter(function (r) {
    if (f.camada && r.camada !== f.camada) return false;
    if (f.ess && !r.essencial) return false;
    if (f.fav && !(S.receitas[r.n] && S.receitas[r.n].fav)) return false;
    if (obj && !usoObj[r.n]) return false;
    if (q) {
      var alvo = norm(r.nome + ' ' + r.subtitulo + ' ' + (r.ingredientes || []).join(' '));
      var termos = q.split(/\s+/);
      for (var i = 0; i < termos.length; i++) if (alvo.indexOf(termos[i]) < 0) return false;
    }
    return true;
  }).map(function (r) { return { r: r, uso: usoObj[r.n] || '' }; });
}
function listaReceitasHTML() {
  var lista = receitasFiltradas();
  if (!lista.length) return '<p class="vazio" id="rcont">Nenhuma receita encontrada. Tente outra palavra ou limpe os filtros.</p>';
  var avTxt = { funcionou: 'funcionou para mim', mais: 'mais ou menos', nao: 'não funcionou para mim' };
  return '<p class="peq muted mt" id="rcont">' + lista.length + (lista.length === 1 ? ' receita' : ' receitas') + '</p><ul class="rlista">' + lista.map(function (x) {
    var r = x.r, st = S.receitas[r.n] || {};
    return '<li class="rcard cam-' + r.camada + '" data-n="' + r.n + '"><span class="num" aria-hidden="true">' + r.n + '</span><div class="info">' +
      '<a class="nome" href="#receita-' + r.n + '">' + esc(r.nome) + '</a><div class="st">' + esc(r.subtitulo) + '</div>' +
      '<div class="pills"><span class="pill cam-' + r.camada + '">' + CAMADAS[r.camada] + '</span>' + (r.essencial ? '<span class="pill ess">Essencial</span>' : '') +
      (x.uso ? '<span class="pill">' + esc(x.uso) + '</span>' : '') +
      (st.aval ? '<span class="pill av-' + st.aval + '">' + avTxt[st.aval] + '</span>' : '') + '</div></div>' +
      '<button class="fav" data-acao="fav" data-n="' + r.n + '" aria-pressed="' + (st.fav ? 'true' : 'false') + '" aria-label="' + (st.fav ? 'Remover dos favoritos: ' : 'Adicionar aos favoritos: ') + esc(r.nome) + '">' + ico('coracao') + '</button></li>';
  }).join('') + '</ul>';
}

function telaReceita(n) {
  var r = rec(n);
  if (!r) return topo('receitas') + '<p class="vazio">Receita não encontrada.</p>';
  var st = S.receitas[n] || {}, cd = CARDAPIO[n];
  var h = topo('receitas') + '<section class="rhero cam-' + r.camada + '"><p class="kicker">Receita ' + r.n + ' · ' + CAMADAS[r.camada] + (r.essencial ? ' · Essencial' : '') + '</p>' +
    '<h1>' + esc(r.nome) + '</h1><p class="st">' + esc(r.subtitulo) + '</p>' +
    '<div class="btns"><button class="btn ghost block" data-acao="fav" data-n="' + n + '" aria-pressed="' + (st.fav ? 'true' : 'false') + '">' + ico('coracao') + (st.fav ? 'Nos favoritos' : 'Adicionar aos favoritos') + '</button></div></section>';
  if (r.atencao) h += '<div class="atencao" role="note" id="atencao">' + ico('alerta') + '<div><b>Atenção</b>' + esc(r.atencao) + '</div></div>';
  h += '<p class="mt">' + esc(r.porQue) + '</p>';
  h += '<dl class="fatos"><div><dt>Tempo de ação</dt><dd>' + esc(r.tempoAcao) + '</dd></div><div><dt>Frequência</dt><dd>' + esc(r.frequencia) + '</dd></div>' +
    '<div><dt>Melhor momento para usar</dt><dd>' + esc(r.melhorMomento) + '</dd></div><div><dt>Validade</dt><dd>' + esc(r.validade) + '</dd></div></dl>';
  var max = maxSemana(n), atual = diaAtual();
  if (max != null && atual) {
    var usos = usosNaSemana(n, atual, null);
    h += '<p class="peq mt"><b>Nesta semana do seu ritual:</b> usada ' + usos + (usos === 1 ? ' vez' : ' vezes') + ' (o livro recomenda no máximo ' + max + ').</p>';
  }
  if (cd && cd.limiteSemanal) h += '<p class="peq muted mt">Limite na programação do checklist: ' + esc(cd.limiteSemanal) + '.</p>';
  h += '<div class="card"><h3>Ingredientes</h3>' + listaUL(r.ingredientes) + '</div>' +
    '<div class="card"><h3>Preparo</h3>' + listaOL(r.passos) + '</div>' +
    '<div class="card"><h3>Como usar</h3><p>' + esc(r.comoUsar) + '</p></div>';
  var objs = GUIA.rotinasObjetivo.filter(function (o) { return o.itens.some(function (it) { return it.receita === n; }); });
  if (objs.length) {
    h += '<div class="card pastel"><h3>Incluída nestas rotinas por objetivo</h3>' + listaUL(objs.map(function (o) {
      var it = o.itens.filter(function (i) { return i.receita === n; })[0];
      return o.nome + ': ' + it.uso;
    })) + '</div>';
  }
  h += '<div class="card"><h3>Como funcionou para sua pele?</h3><div class="aval" role="group" aria-label="Avaliação">' +
    [['funcionou', 'Funcionou para mim'], ['mais', 'Mais ou menos'], ['nao', 'Não funcionou para mim']].map(function (a) {
      return '<button class="a-' + a[0] + '" data-acao="aval" data-n="' + n + '" data-v="' + a[0] + '" aria-pressed="' + (st.aval === a[0] ? 'true' : 'false') + '">' + a[1] + '</button>';
    }).join('') + '</div><label class="lbl" for="nota-rec">Minha anotação sobre esta receita</label>' +
    '<textarea id="nota-rec" data-campo="nota-rec" data-n="' + n + '" placeholder="Ex.: minha pele gostou mais desta à noite">' + esc(st.nota || '') + '</textarea></div>';
  h += '<div class="card pastel"><h3>' + esc(GUIA.regrasDeOuro[0].titulo) + '</h3><p>' + esc(GUIA.regrasDeOuro[0].texto) + '</p></div>';
  return h + rodape();
}

/* ---------- 5. meu balanço ---------- */
function telaBalanco() {
  var h = topo() + '<p class="kicker">Só para você</p><h1>Meu balanço</h1>' +
    '<div class="resumo"><div><b>' + diasConcluidos() + '</b><span>dias concluídos</span></div><div><b>' + sequencia() + '</b><span>dias seguidos</span></div><div><b>' + contarFav() + '</b><span>favoritos</span></div></div>';
  var grupos = { funcionou: [], mais: [], nao: [] };
  RECEITAS.forEach(function (r) { var s = S.receitas[r.n]; if (s && s.aval && grupos[s.aval]) grupos[s.aval].push(r); });
  function bloco(lista, vazio) {
    if (!lista.length) return '<p class="muted peq">' + vazio + '</p>';
    return '<div class="bloco-res">' + lista.map(function (r) {
      var nt = (S.receitas[r.n] || {}).nota;
      return '<a href="#receita-' + r.n + '">' + esc(r.nome) + (nt ? '<small>' + esc(nt) + '</small>' : '') + '</a>';
    }).join('') + '</div>';
  }
  h += '<div class="card"><h3>O que funcionou para mim</h3>' + bloco(grupos.funcionou, 'Marque as receitas que funcionaram para você.') + '</div>';
  h += '<div class="card"><h3>Mais ou menos</h3>' + bloco(grupos.mais, 'Nada por aqui ainda.') + '</div>';
  h += '<div class="card"><h3>O que não funcionou para mim</h3>' + bloco(grupos.nao, 'Nada por aqui ainda.') + '</div>';
  var favs = RECEITAS.filter(function (r) { return S.receitas[r.n] && S.receitas[r.n].fav; });
  h += '<div class="card"><h3>Favoritos</h3>' + bloco(favs, 'Toque no coração de uma receita para salvá-la aqui.') + '</div>';

  var atual = diaAtual();
  h += '<div class="card"><h3>Balanços da pele desta semana</h3>';
  if (!atual) h += '<p class="muted peq">Eles aparecem a partir do seu dia 1.</p>';
  else {
    var est = {}; CHECKLIST.checkInDaPele.estados.forEach(function (e) { est[e.id] = e; });
    var linhas = diasDaSemana(semanaDoDia(atual)).filter(function (d) { return d <= atual; }).map(function (d) {
      var r = verDia(d), e = r && r.pele ? est[r.pele] : null;
      return '<div><b>Dia ' + d + '</b><span>' + (e ? esc(e.rotulo) : 'sem balanço') + '</span></div>';
    });
    h += '<div class="tabela-mini">' + linhas.join('') + '</div>';
  }
  h += '</div>';
  var notas = Object.keys(S.dias).map(Number).sort(function (a, b) { return a - b; }).filter(function (d) { return S.dias[d].nota; });
  h += '<div class="card"><h3>Anotações diárias</h3>' + (notas.length ? '<div class="bloco-res">' + notas.map(function (d) {
    return '<a href="#dia-' + d + '">Dia ' + d + '<small>' + esc(S.dias[d].nota) + '</small></a>';
  }).join('') + '</div>' : '<p class="muted peq">As anotações que você escreve em Hoje aparecem aqui.</p>') + '</div>';

  h += '<section class="secao"><h2>' + ico('escudo') + 'Salvar meu progresso</h2>' +
    '<p class="sub">Tudo fica salvo apenas neste dispositivo. Exporte seu progresso para trocar de celular ou manter um backup.</p>' +
    '<div class="card"><h3>Arquivo</h3><div class="btns"><button class="btn block" data-acao="exportar">' + ico('baixar') + 'Exportar arquivo</button>' +
    '<label class="btn ghost block" for="arquivo-imp">' + ico('subir') + 'Importar arquivo</label>' +
    '<input id="arquivo-imp" class="sr" type="file" accept=".json,application/json" data-campo="arquivo-imp"></div></div>' +
    '<div class="card"><h3>Código de texto</h3><p class="peq muted">Copie e salve em um app de notas ou envie para você mesma.</p>' +
    '<label class="lbl" for="codigo-exp">Seu código</label><textarea id="codigo-exp" class="codigo" readonly></textarea>' +
    '<div class="btns"><button class="btn ghost block" data-acao="gerar-codigo">' + ico('copiar') + 'Gerar e copiar código</button></div>' +
    '<label class="lbl" for="codigo-imp">Cole um código para restaurar seu progresso</label><textarea id="codigo-imp" class="codigo" placeholder="Cole aqui o código que começa com PP1:"></textarea>' +
    '<div class="btns"><button class="btn ghost block" data-acao="restaurar-codigo">Restaurar pelo código</button></div></div>' +
    '<div class="card"><h3>Zerar tudo</h3><p class="peq muted">Apaga a data de início, marcações, anotações e favoritos deste dispositivo.</p>' +
    '<div class="btns"><button class="btn perigo block" data-acao="zerar">' + ico('lixo') + 'Zerar tudo</button></div></div></section>';
  return h + rodape();
}
function contarFav() { var n = 0; for (var k in S.receitas) if (S.receitas[k] && S.receitas[k].fav) n++; return n; }

/* ---------- guia ---------- */
function telaGuia() {
  var itens = [
    ['g-metodo', 'folha', GUIA.metodo.titulo, GUIA.metodo.subtitulo],
    ['g-essenciais', 'estrela', 'Os 6 Rituais Essenciais', 'Por onde começar'],
    ['g-objetivos', 'coracao', 'Rotinas por objetivo', 'Escolha seu foco a partir do dia ' + CONFIG.plano21.focoAPartirDoDia],
    ['g-ingredientes', 'gota', 'Guia de ingredientes', 'Para que serve cada ingrediente e quais cuidados tomar'],
    ['g-kit', 'tigela', 'Kit básico', 'Utensílios para preparar receitas em casa'],
    ['g-faq', 'livro', 'Perguntas frequentes', ''],
    ['g-regras', 'escudo', 'As 6 regras de ouro', 'Teste em pequena área, protetor solar e mais'],
    ['g-aviso', 'alerta', 'Aviso importante', 'Leia antes de usar']
  ];
  function li(x, cls) {
    return '<li><a class="' + (cls || '') + '" href="#' + x[0] + '"><span class="ico">' + ico(x[1]) + '</span><span>' + esc(x[2]) +
      (cls ? '<span class="tag-prem">Premium</span>' : '') + (x[3] ? '<small>' + esc(x[3]) + '</small>' : '') + '</span>' + ico('seta', 'seta') + '</a></li>';
  }
  var h = topo('materials') + '<p class="kicker">Ler no app</p><h1>Método Pele de Seda Coreana: Ritual das 3 Camadas</h1>' +
    '<div class="foto"><img src="img/ritual-mascara-02.webp" width="960" height="717" alt="Um momento de ritual com máscara facial caseira" loading="lazy"></div>';
  h += acoesLivro(LIVROS_EXTRAS.method, true) + '<ul class="menu-g">' + itens.map(function (x) { return li(x); }).join('') + '</ul>' +
    '<div class="card pastel mt2"><p class="hand">' + esc(GUIA.mensagemFinal.titulo) + '</p><p>' + esc(GUIA.mensagemFinal.texto) + '</p></div>';
  return h + rodape();
}
function telaGuiaPagina(id) {
  var h = topo('metodo'), G = GUIA;
  if (id === 'g-metodo') {
    var M = G.metodo;
    h += '<p class="kicker">Método</p><h1>' + esc(M.titulo) + '</h1><p class="mt">' + esc(M.subtitulo) + '</p>';
    M.camadas.forEach(function (c) {
      h += '<div class="card cam-' + c.id + '"><div class="camada"><p class="kicker">Camada ' + c.n + '</p><h3>' + esc(c.nome) + '</h3><p><b>' + esc(c.foco) + '</b></p><p class="mt">' + esc(c.texto) + '</p><p class="peq muted mt">' + esc(c.tipos) + '</p></div></div>';
    });
    h += '<div class="card pastel"><h3>A sequência</h3><div class="seq">' + M.sequencia.map(function (s, i) { return '<span>' + (i + 1) + '. ' + esc(s) + '</span>'; }).join('') + '</div><p class="mt">' + esc(M.regraDaSequencia) + '</p></div>';
    if (G.inspiracao) h += '<p class="peq muted mt">' + esc(G.inspiracao) + '</p>';
  } else if (id === 'g-essenciais') {
    h += '<p class="kicker">Por onde começar</p><h1>Os 6 Rituais Essenciais</h1><ul class="rlista">' + G.essenciais.map(function (n) {
      var r = rec(n);
      return '<li class="rcard cam-' + r.camada + '"><span class="num" aria-hidden="true">' + r.n + '</span><div class="info"><a class="nome" href="#receita-' + n + '">' + esc(r.nome) + '</a><div class="st">' + esc(r.subtitulo) + '</div><div class="pills"><span class="pill cam-' + r.camada + '">' + CAMADAS[r.camada] + '</span></div></div></li>';
    }).join('') + '</ul>';
  } else if (id === 'g-objetivos') {
    h += '<p class="kicker">Rotinas por objetivo</p><h1>Escolha seu foco</h1><p class="mt">Seu ritual da manhã e da noite continua todos os dias. A rotina escolhida se torna seu foco a partir do dia ' + CONFIG.plano21.focoAPartirDoDia + ', na tela Hoje.</p>';
    G.rotinasObjetivo.forEach(function (o) {
      var sel = S.objetivo === o.id;
      h += '<div class="card' + (sel ? ' plano-card' : '') + '"><h3>' + esc(o.nome) + '</h3><p class="muted">' + esc(o.para) + '</p><div class="tabela-mini">' +
        o.itens.map(function (it) { return '<div><a href="#receita-' + it.receita + '" style="font-weight:800">' + esc(nomeRec(it.receita)) + '</a><span>' + esc(it.uso) + '</span></div>'; }).join('') + '</div>' +
        '<div class="btns"><button class="btn ' + (sel ? 'feito' : 'ghost') + ' block" data-acao="objetivo" data-v="' + esc(o.id) + '" aria-pressed="' + sel + '">' + (sel ? ico('check') + 'Este é meu foco (toque para desmarcar)' : 'Escolher como meu foco') + '</button></div></div>';
    });
  } else if (id === 'g-ingredientes') {
    h += '<p class="kicker">Guia de ingredientes</p><h1>Para que serve cada ingrediente</h1>';
    G.ingredientes.forEach(function (i) {
      h += '<div class="card"><h3>' + esc(i.nome) + '</h3><p>' + esc(i.paraQueServe) + '</p><div class="aviso-lim">' + ico('alerta') + '<span><b>Atenção:</b> ' + esc(i.cuidado) + '</span></div></div>';
    });
  } else if (id === 'g-kit') {
    h += '<p class="kicker">Kit básico</p><h1>O que separar em casa</h1><div class="card">' + listaUL(String(G.kitBasico).replace(/\.\s*$/, '').split(/\s*·\s*/)) + '</div>' +
      '<div class="card pastel"><h3>' + esc(G.regrasDeOuro[2].titulo) + '</h3><p>' + esc(G.regrasDeOuro[2].texto) + '</p></div>';
  } else if (id === 'g-faq') {
    h += '<p class="kicker">Dúvidas</p><h1>Perguntas frequentes</h1><div class="card faq">' + G.faq.map(function (f) {
      return '<details><summary><span>' + esc(f.p) + '</span>' + ico('seta') + '</summary><p>' + esc(f.r) + '</p></details>';
    }).join('') + '</div>';
  } else if (id === 'g-regras') {
    h += '<p class="kicker">Sempre</p><h1>As 6 regras de ouro</h1><div class="card">' + G.regrasDeOuro.map(function (r) {
      return '<div class="regra"><span class="n">' + r.n + '</span><div><b>' + esc(r.titulo) + '</b>' + esc(r.texto) + '</div></div>';
    }).join('') + '</div>';
  } else if (id === 'g-aviso') {
    h += '<p class="kicker">Leia com atenção</p><h1>Aviso importante</h1><div class="atencao">' + ico('alerta') + '<div><b>Aviso</b>' + esc(G.avisoImportante) + '</div></div>' +
      '<div class="card"><h3>' + esc(G.regrasDeOuro[4].titulo) + '</h3><p>' + esc(G.regrasDeOuro[4].texto) + '</p><h3 class="mt">' + esc(G.regrasDeOuro[5].titulo) + '</h3><p>' + esc(G.regrasDeOuro[5].texto) + '</p></div>';
  } else {
    h += '<p class="vazio">Página não encontrada.</p>';
  }
  return h + rodape();
}
