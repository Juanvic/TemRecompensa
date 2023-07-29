# TemRecompensa

## Objetivo
Este pequeno projeto tem a finalidade de apenas exibir as recompensas semanais do saipark presentes no jogo **Temtem**, não espere atualizações a este projeto, já que foi desenvolvido como um hobby em um curto periodo de tempo entre os intervalos do trabalho (sim o código não segue nenhum padrão famoso do React por conta de falta de tempo e apenas funciona)

## Desenvolvimento
Este projeto foi desenvolvido com React Native com Expo SDK Versão 48, utilizando Javascript e o método fetch para consultar a api que obtive neste site (https://temtem-api.mael.tech/) todos os créditos da api vão para o respectivo criador. 

## Disclaimer
O jogo **Temtem** é um MMO da categoria de Monster Taming cujo o objetivo é capturar e gerenciar monstros em batalhas de turno contra outros jogadores ou bots, o jogo se encontra disponível para computadores e consoles (todos os direitos da marca são reservados para a desenvolvedora Crema Games e a distribuidora Humble Games), este projeto não visa lucros com a marca.

## Instruções de build

Neste projeto foram utilizados a versão do node **18.20 ~ 20.4.0**

1. Execute o comando **npm install** ou **yarn install** para instalar os pacotes necessários
2. Execute o comando **npm start** ou **yarn start** 
3. Execute o comando **npm install** ou **yarn install** -g eas-cli && eas login, necessário para realizar o build com o Expo
4. Para gerar o apk utilize o comando: eas build -p android --profile preview, caso queria gerar apenas o .apk
