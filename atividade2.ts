interface Usuario {
  id: number;
  nome: string;
  email: string;
  telefone: number;
  cpf: string;
}

const user1: Usuario = {
  id: 1,
  nome: "Gabiru",
  email: "gab@iru.com",
  telefone: 123456789,
  cpf: "12345678910",
};

const user2: Usuario = {
  id: 1,
  nome: "Generation",
  email: "gen@nation.com",
  telefone: 987654321,
  cpf: "10987654321",
};

console.log(user1, user2);
