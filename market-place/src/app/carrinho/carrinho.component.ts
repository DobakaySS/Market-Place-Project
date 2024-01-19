import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../carrinho.service';
import { IProdutoCarrinho } from '../produtos';
import { NotificacaoService } from 'src/app/notificacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  itensCarrinho: IProdutoCarrinho[] = [];
  valorTotal = 0;

  constructor(
    public carrinhoService: CarrinhoService,
    private notificacaoService: NotificacaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.carrinhoService.obtemCarrinho();
    this.calcularTotal();
  }

  removerProdutoCarrinho(produtoId: number) {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.carrinhoService.removerProdutoCarrinho(produtoId);
    this.calcularTotal();
  }

  calcularTotal() {
    this.valorTotal = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
  }

  updateQuantidadeProduto(index: number,itemCarrinho: IProdutoCarrinho){
    this.carrinhoService.itens[index].quantidade = itemCarrinho.quantidade;
    this.carrinhoService.salvarCarrinho();
  }

  comprar(){
    this.notificacaoService.notificar("Sua compra foi realizada com sucesso!");
    this.carrinhoService.limparCarrinho();
    this.router.navigate(["produtos"])

  }

}
