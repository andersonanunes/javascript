#language: pt
#encoding: UTF-8
#author: Anderson Nunes
#date: 12/10/21
#version: 1.0
#last update:
#status:

Funcionalidade:  Validar Página
  Como usuário do site VR
  Quero acessar a página onde aceita
  Para validar se o mapa do Google abriu em tela

  Cenario: Validar Mapa Google
    Dado que acesso a aplicação
    Quando seleciono a página onde aceita
    Então valido se o mapa do Google aparece na tela 