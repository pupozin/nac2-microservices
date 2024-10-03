import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {
  produtos: Produto[] = [];
  novoProduto: Produto = new Produto();
  produtoEditando: Produto | null = null; // Para armazenar o produto que está sendo editado

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.loadProdutos();
  }

  loadProdutos() {
    this.produtoService.getProdutos().subscribe((data) => {
      this.produtos = data;
    });
  }

  addProduto() {
    this.produtoService.addProduto(this.novoProduto).subscribe(() => {
      this.loadProdutos();
      this.novoProduto = new Produto(); // Limpa o formulário
    });
  }

  deleteProduto(id: number) {
    this.produtoService.deleteProduto(id).subscribe(() => {
      this.loadProdutos();
    });
  }

  editarProduto(produto: Produto) {
    this.produtoEditando = { ...produto }; // Cria uma cópia do produto para editar
  }

  saveEdit() {
    if (this.produtoEditando) {
      this.produtoService.updateProduto(this.produtoEditando).subscribe(() => {
        this.loadProdutos();
        this.produtoEditando = null; // Limpa a edição
      });
    }
  }
}
