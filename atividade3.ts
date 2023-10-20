interface Produto {
  nome: string;
  descricao: string;
  quantidade: number;
}

const p1: Produto = {
  nome: "doritos",
  descricao: "salgadinho",
  quantidade: 3,
};

const p2: Produto = {
  nome: "fini",
  descricao: "bala",
  quantidade: 5,
};

const listaProdutos: Array<Produto> = [{ ...p1 }, { ...p2 }];

console.log(listaProdutos);
