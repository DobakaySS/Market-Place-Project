import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IProdutoCarrinho[] = [];

  constructor() { }

  obtemCarrinho() {
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]");
    return this.itens;
  }

  salvarCarrinho(){
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

  adicionarAoCarrinho(produto: IProdutoCarrinho) {
    const itemEncontrado = this.itens.find(item => item.id === produto.id);

    if (!itemEncontrado) {
      this.itens.push(produto);
    } else {
      produto.quantidade += itemEncontrado.quantidade;
      this.removerProdutoCarrinho(produto.id);
      this.itens.push(produto);
    }

    localStorage.setItem("carrinho", JSON.stringify(this.itens));
}

  limparCarrinho() {
    this.itens = [];
    localStorage.clear();
  }

  removerProdutoCarrinho(produtoId: number) {
    this.itens = this.itens.filter(item => item.id !== produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }

}
