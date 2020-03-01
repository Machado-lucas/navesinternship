# Teste técnico da Nave por Lucas Machado

#### Este repositório tem como objetivo resolver exercícios propostos pela empresa Nave para mostrar minhas habilidades e concorrer a uma vaga de estágio, . Foram realizados 11 exercícios e dois desafios extras, sendo estes um de back-end e outro relacionado a banco de dados.


### Exercício 1: 
##### Aqui utilizaremos a função whoIsBigger() e seus parâmetros serão duas strings. Exemplo:
##### whoIsBigger('Eu sou o maior', 'Não, eu acho que sou maior que você')

### Exercício 2: 
##### Aqui utilizaremos a função applyAnother() e seus parâmetros serão uma função e duas strings. Como a gente vai passar uma função como parâmetro e ela precisa utilizar as duas strings passadas anteriormente, vamos utilizar a função anterior: whoIsBigger(). Exemplo:
##### applyAnother(whoIsBigger, 'Eu sou o maior', 'Não, eu acho que sou maior que você')

### Exercício 3: 
##### Aqui utilizaremos a função allForOne() e seus parâmetros serão uma quantidade infinita de strings. Exemplo:
##### allForOne('Oi,', 'eu sou o Goku', 'e sou dublado pelo', 'Wendel Bezerra!')

### Exercício 4: 
##### Aqui utilizaremos a função remove() e seu parâmetro será uma string que possua valores numéricos. Exemplo:
##### remove('teste 1 de 2 string 3')

### Exercício 5: 
##### Aqui utilizaremos a função dictionary() e seu parâmetro será uma string que possua os seguintes valores numéricos: 1, 3, 4 e 5 para que possam ser substituídos por letras. Exemplo:
##### dictionary('T35t3 d3 35t4g1o')

### Exercício 6: 
##### Aqui utilizaremos a função findAddress() e seu parâmetro será dois inteiros, sendo eles um CEP e um número residencial. Exemplo:
##### findAddress(96030250, 223)

### Obs: A partir do exercício 7 utilizaremos um array de objetos que está definido no arquivo scripts.js da pasta normal test. Qualquer coisa dá uma olhada lá

### Exercício 7: 
##### Aqui utilizaremos a função capitalizeFirst() e nenhum parâmetro será passado. Exemplo:
##### capitalizeFirst()

### Exercício 8: 
##### Aqui utilizaremos a função sum() e os parâmetros serão um objeto, aqui utilizaremos clients, e uma propriedade deste objeto, utilizaremos idade. Exemplo:
##### sum(clients, 'idade')

### Exercício 9: 
##### Aqui utilizaremos a função printLessThan25() e nenhum parâmetro será passado. Exemplo:
##### printLessThan25()

### Exercício 10: 
##### Aqui utilizaremos a função printLessThan30() e nenhum parâmetro será passado. Exemplo:
##### printLessThan30()

### Exercício 11: 
##### Aqui utilizaremos a função orderArray() e nenhum parâmetro será passado. Exemplo:
##### orderArray()

## Desafio back-end
### Nota: Para rodar o código, precisaremos estar com o yarn ativado. Para isto, basta abrir o terminal (aqui eu abri pelo vs.code mesmo) e digitar o comando yarn dev e pronto! 

### Criando o banco de dados
##### Primeiramente precisamos definir as credenciais do nosso banco de dados, no arquivo /src/config/database.js e colocar os dados do seu banco

![banco de dados](https://github.com/Machado-lucas/navesinternship/blob/master/database.png)

##### Depois foram criados e definidos os campos de cada uma das tabelas nas migrations e rodados através do comando yarn sequelize db:migrate. Com isto podemos finalmente manipular os dados.
##### Como não temos interface gráfica, eu utilizei um programa chamado Insomnia para me auxiliar a manipular e visualizar meus dados.
##### Vamos começar criando duas pastas, uma com o nome de Posts e outra de Comments

![criando pasta no insomnia](https://github.com/Machado-lucas/navesinternship/blob/master/createFolder.png)

##### Agora que criamos as pastas, vamos criar duas requisições dentro da pasta Posts. A primeira requisição que vamos criar é uma de escrita e vamos chama-lá de Create. Para criar uma requisição, basta clicar com o botão direito em cima da pasta e ir em New Request.

![criando as requisições](https://github.com/Machado-lucas/navesinternship/blob/master/newRequest.png)

##### Vamos configurar nossa requisição desta maneira

![configurando a requisição](https://github.com/Machado-lucas/navesinternship/blob/master/createRequest.png)

##### Agora vamos criar uma nova requisição chamada Index e ao invés de POST, ela será um GET. É nela que iremos visualizar nossos dados da tabela post. Mas antes disso, precisamos configurar as URLs de cada uma das requisições, vamos deixar elas desta maneira:

![inserindo a url nos posts](https://github.com/Machado-lucas/navesinternship/blob/master/urlPosts.png)

##### Mas para visualizar, precisamos alimentar nosso banco de dados, insira os dados na requisição Create da mesma maneira que foi inserido abaixo e clicar em SEND:

![alimentando o banco](https://github.com/Machado-lucas/navesinternship/blob/master/feeding.png)

##### E para visualizar os dados basta ir no Index do Posts e clicar em SEND e lá estará os nossos dados!
##### Agora, para visualizar os comentários de cada post, iremos fazer o mesmo processo de criar requisições Create e Index, só que nessa vez na pasta Comments mas com algumas alterações, a primeira delas será a URL:

![url para manipular os comments dos posts](https://github.com/Machado-lucas/navesinternship/blob/master/urlComments.png)

##### Aqui mudamos a URL pelo seguinte motivo: queremos salvar os comentários de um post específico, até ai ok. Porém, como fazemos para trazer este post específico? Por isto marquei o número 2, pois neste caso eu estou tentando salvar os comentários do post que possui o id 2, se você quiser trazer o post de id 1 basta mudar o 2 pelo 1, se quiser o de id 15 muda para 15 e assim vai. Para criar os comentários vamos na requisição Create e escrever alguns dados, utilizei este modelo

![criando comentários](https://github.com/Machado-lucas/navesinternship/blob/master/createComment.png)

##### E para visualizar os comentários iremos utilizar a mesma ideia de URL usada no Create só que agora no Index. Iremos puxar os comentários dos posts pelo id de cada post, então é só ir na url e mudar o id que desejar visualizar. E pronto, desafio back-end feito =)

##### Agora apenas umas observações em relação ao desafio de banco de dados: 
##### - Eu não achei necessário explicar os scripts por aqui pois não há muito o que se explicar, somente aplicar
##### - Não falaram nada sobre o uso de functions e triggers nos enunciados dos exercícios mas eu utilizei para não deixar os campos de created_at e updated_at em branco, fora que ficou bem mais legal desse jeito, é uma coisa que eu não utilizava antes e que com certeza vou usar daqui pra frente

##### Agradeço pela oportunidade dada a mim de mostrar minhas habilidades! Serei eternamente grato!
