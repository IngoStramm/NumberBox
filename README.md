# NumberBox
Script para campo númerico customizado com botão de somar e subtrair o valor. 

O objetivo é providenciar um código que funcione em uma estrutura HTML simples, que permita a fácil customização do CSS de uma maneira direta e fácil.

## Dependências:
[jQuery] (https://github.com/jquery/jquery)

##Estrutura HTML
```
<div class="numberbox">
    <input type="text">
    <a href="#" class="mais">
    <a href="#" class="menos">
</div>
```

## Classes CSS
- ```.numberbox``` elemento HTML conteiner
- ```.mais``` link que dispara o evento para somar
- ```.menos``` link que dispara o evento para subtrair

##Funcionamento
1. O campo verifica se o valor é um número quando a telcla é pressionada. 
2. Se o valor não for um número, verifica se já existe algum caracter antes do valor digitado; em caso negativo, retorna zero; em caso afirmativo, não escreve o número no campo.
3. Se o valor for um número, executa o cálculo referente à classe do link clicado.
4. Quando for uma subtração, verifica se o resultado retorna um número negaivo, interrompendo a operação em caso afirmativo.
