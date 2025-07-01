const salvarNaFila = (nome, telefone) => {
  const fila = JSON.parse(localStorage.getItem("fila") || "[]");
  fila.push({ nome, telefone });
  localStorage.setItem("fila", JSON.stringify(fila));
};

const exibirFila = () => {
  const listaFila = document.getElementById("listaFila");
  if (!listaFila) return;

  const fila = JSON.parse(localStorage.getItem("fila") || "[]");
  listaFila.innerHTML = fila.map((pessoa, index) =>
    `<li>${index + 1}. ${pessoa.nome} - ${pessoa.telefone || 'sem telefone'}</li>`
  ).join("");
};

const chamarProximo = () => {
  let fila = JSON.parse(localStorage.getItem("fila") || "[]");
  if (fila.length === 0) {
    alert("Nenhuma pessoa na fila.");
    return;
  }
  const proximo = fila.shift();
  alert(`Chamando: ${proximo.nome}`);
  localStorage.setItem("fila", JSON.stringify(fila));
  exibirFila();
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formFila");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const nome = document.getElementById("nome").value;
      const telefone = document.getElementById("telefone").value;
      salvarNaFila(nome, telefone);
      document.getElementById("mensagem").textContent = "Você entrou na fila!";
      form.reset();
    });
  }
  exibirFila();
});
