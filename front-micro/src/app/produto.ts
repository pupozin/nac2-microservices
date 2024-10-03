export class Produto {
  id?: number;
  nome: string | undefined;
  preco: number | undefined;
  quantidadeEstoque: number | undefined;
  dataCriacao?: string; // ou Date, se preferir
}
