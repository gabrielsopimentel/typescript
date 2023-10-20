interface TurmaModelo {
  nome: string;
  qtd: number;
  materia: string;
  p_instrutora: string;
}

const Turma1: TurmaModelo = {
  nome: "Turma .net",
  qtd: 32,
  materia: "Fullstack c#",
  p_instrutora: "Jacque",
};
const Turma2: TurmaModelo = {
  nome: "Turma JS",
  qtd: 28,
  materia: "JS",
  p_instrutora: "Yuri",
};

console.log(Turma1);
console.log(Turma2);
