// ============================================================
// B.1. DEFINIÇÃO DOS DADOS (JSON)
// ============================================================
 
const catalogo = [
  {
    id: 1,
    titulo: "Interestelar",
    tipo: "filme",
    ano: 2014,
    generos: ["ficção científica", "drama", "aventura"],
    nota: 9.5,
    assistido: true,
  },
  {
    id: 2,
    titulo: "Breaking Bad",
    tipo: "serie",
    ano: 2008,
    generos: ["drama", "crime", "thriller"],
    nota: 9.8,
    assistido: true,
  },
  {
    id: 3,
    titulo: "O Poderoso Chefão",
    tipo: "filme",
    ano: 1972,
    generos: ["drama", "crime"],
    nota: 9.2,
    assistido: false,
  },
  {
    id: 4,
    titulo: "Stranger Things",
    tipo: "serie",
    ano: 2016,
    generos: ["ficção científica", "terror", "drama"],
    nota: 8.7,
    assistido: true,
  },
  {
    id: 5,
    titulo: "Parasita",
    tipo: "filme",
    ano: 2019,
    generos: ["thriller", "drama", "comédia"],
    nota: 8.5,
    assistido: false,
  },
  {
    id: 6,
    titulo: "Dark",
    tipo: "serie",
    ano: 2017,
    generos: ["ficção científica", "thriller"],
    nota: 8.9,
    assistido: false,
  },
  {
    id: 7,
    titulo: "Clube da Luta",
    tipo: "filme",
    ano: 1999,
    generos: ["drama", "thriller"],
    nota: 8.8,
    assistido: true,
  },
  {
    id: 8,
    titulo: "The Last of Us",
    tipo: "serie",
    ano: 2023,
    generos: ["drama", "ação", "terror"],
    nota: 9.0,
    assistido: false,
  },
];
 
 
// ============================================================
// B.2. ACESSO E LEITURA DOS DADOS
// ============================================================
 
console.log("=== CATÁLOGO COMPLETO ===");
console.log(catalogo);
 
console.log("\n--- Acessos individuais ---");
console.log("Título do primeiro item:", catalogo[0].titulo);
console.log("Ano do último item:", catalogo[catalogo.length - 1].ano);
 
const terceiroItem = catalogo[2];
if (terceiroItem.generos.length >= 2) {
  console.log("Segundo gênero do terceiro item:", terceiroItem.generos[1]);
} else {
  console.log("O terceiro item tem apenas 1 gênero:", terceiroItem.generos[0]);
}
 
 
// ============================================================
// B.3. ITERAÇÕES COM ITERATORS
// ============================================================
 
// ----------------------------
// A) forEach — listagem de títulos
// ----------------------------
console.log("\n=== A) LISTAGEM COM forEach ===");
catalogo.forEach((item) => {
  console.log(`- [${item.tipo}] ${item.titulo} (${item.ano})`);
});
 
 
// ----------------------------
// B) map — títulos em caixa alta
// ----------------------------
console.log("\n=== B) TÍTULOS EM CAIXA ALTA (map) ===");
const titulosEmCaixaAlta = catalogo.map((item) => item.titulo.toUpperCase());
console.log(titulosEmCaixaAlta);
 
 
// ----------------------------
// C) filter — não assistidos
// ----------------------------
console.log("\n=== C) NÃO ASSISTIDOS (filter) ===");
const naoAssistidos = catalogo.filter((item) => item.assistido === false);
console.log(`Quantidade de itens não assistidos: ${naoAssistidos.length}`);
naoAssistidos.forEach((item) => console.log(` • ${item.titulo}`));
 
 
// ----------------------------
// D) find — nota >= 9
// ----------------------------
console.log("\n=== D) PRIMEIRO ITEM COM NOTA >= 9 (find) ===");
const destaque = catalogo.find((item) => item.nota >= 9);
if (destaque) {
  console.log(`Encontrado: "${destaque.titulo}" com nota ${destaque.nota}`);
} else {
  console.log("Nenhum item com nota >= 9 foi encontrado.");
}
 
 
// ----------------------------
// E) reduce — médias de notas
// ----------------------------
console.log("\n=== E) MÉDIAS DE NOTAS (reduce) ===");
 
const somaGeral = catalogo.reduce((acc, item) => acc + item.nota, 0);
const mediaGeral = somaGeral / catalogo.length;
console.log(`Média geral das notas: ${mediaGeral.toFixed(2)}`);
 
const assistidos = catalogo.filter((item) => item.assistido === true);
const somaAssistidos = assistidos.reduce((acc, item) => acc + item.nota, 0);
const mediaAssistidos =
  assistidos.length > 0 ? somaAssistidos / assistidos.length : 0;
console.log(`Média das notas dos assistidos: ${mediaAssistidos.toFixed(2)}`);
 
 
// ----------------------------
// F) some e every — checagens
// ----------------------------
console.log("\n=== F) CHECAGENS (some / every) ===");
 
const temAntigoSome = catalogo.some((item) => item.ano < 2000);
console.log(`Existe algum item com ano < 2000? ${temAntigoSome ? "SIM" : "NÃO"}`);
 
const todosTemGenero = catalogo.every((item) => item.generos.length >= 1);
console.log(`Todos os itens têm ao menos 1 gênero? ${todosTemGenero ? "SIM" : "NÃO"}`);
 
 
// ============================================================
// B.4. SAÍDA NA TELA (DOM)
// ============================================================
 
const totalItens = catalogo.length;
const totalFilmes = catalogo.filter((i) => i.tipo === "filme").length;
const totalSeries = catalogo.filter((i) => i.tipo === "serie").length;
const totalNaoAssistidos = naoAssistidos.length;
 
// Top 3 por nota (sort não muta o original graças ao spread)
const top3 = [...catalogo]
  .sort((a, b) => b.nota - a.nota)
  .slice(0, 3);
 
const medalhas = ["gold", "silver", "bronze"];
const rankingHTML = top3
  .map(
    (item, i) => `
    <li class="ranking-item">
      <span class="rank-pos ${medalhas[i]}">${i + 1}</span>
      <span class="rank-title">
        ${item.titulo}
        <span class="badge badge-${item.tipo}">${item.tipo}</span>
      </span>
      <span class="rank-nota">${item.nota}</span>
    </li>`
  )
  .join("");
 
document.getElementById("output").innerHTML = `
  <div class="card">
    <p class="card-title">Visão Geral</p>
    <div class="stats-grid">
      <div class="stat">
        <div class="stat-value">${totalItens}</div>
        <div class="stat-label">Total de itens</div>
      </div>
      <div class="divider"></div>
      <div class="stat">
        <div class="stat-value">${totalFilmes}</div>
        <div class="stat-label">Filmes</div>
      </div>
      <div class="divider"></div>
      <div class="stat">
        <div class="stat-value">${totalSeries}</div>
        <div class="stat-label">Séries</div>
      </div>
      <div class="divider"></div>
      <div class="stat">
        <div class="stat-value">${totalNaoAssistidos}</div>
        <div class="stat-label">Não assistidos</div>
      </div>
      <div class="divider"></div>
      <div class="stat">
        <div class="stat-value">${mediaGeral.toFixed(2)}</div>
        <div class="stat-label">Média de notas</div>
      </div>
    </div>
  </div>
 
  <div class="card">
    <p class="card-title">🏆 Mini Ranking — Top 3 Notas</p>
    <ul class="ranking-list">
      ${rankingHTML}
    </ul>
  </div>
`;