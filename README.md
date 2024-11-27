# RouteX Dashboard

## 📋 Descrição

O **RouteX Dashboard** é uma aplicação web que permite o monitoramento de veículos em tempo real, exibindo localizações em um mapa, estatísticas em um painel e notificações de alertas. O projeto foi desenvolvido com foco em simplicidade, eficiência e escalabilidade.

## 🛠️ Tecnologias Utilizadas

Este projeto utiliza as seguintes tecnologias e ferramentas:

- **Frontend**: 
  - React.js
  - Socket.IO (para comunicação em tempo real)
  - CSS para estilização
- **Backend**:
  - Node.js
  - Express.js
  - Mongoose (MongoDB)
  - SQLite (armazenamento local)
  - Socket.IO
- **Banco de Dados**:
  - MongoDB (armazenamento principal)
  - SQLite (armazenamento auxiliar para dados locais)
- **Containerização**:
  - Docker
  - Docker Compose

## 🚀 Funcionalidades

1. **Mapa em Tempo Real**  
   Receba atualizações de localização em tempo real dos veículos monitorados.

2. **Painel de Controle (Dashboard)**  
   Exibição de estatísticas importantes e dados de desempenho.

3. **Alertas e Notificações**  
   Veja notificações e alertas relacionados a eventos críticos.

## 📂 Estrutura do Projeto

A estrutura principal do projeto é organizada da seguinte forma:

RouteX/ │ ├── backend/ # Código do servidor Node.js │ ├── src/ # Lógica da aplicação backend │ ├── package.json # Dependências do backend │ └── Dockerfile # Configuração do container backend │ ├── frontend/ # Código do cliente React.js │ ├── src/ # Lógica da aplicação frontend │ ├── public/ # Recursos públicos (ícones, index.html, etc.) │ ├── package.json # Dependências do frontend │ └── Dockerfile # Configuração do container frontend │ ├── docker-compose.yml # Configuração para orquestrar os containers └── README.md # Documentação do projeto

bash
Copiar código

## ⚙️ Configuração e Execução

### Pré-requisitos

- Docker e Docker Compose instalados na sua máquina
- Node.js (opcional, apenas se quiser rodar o projeto fora de containers)

### Passos para Rodar o Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/RouteX.git
   cd RouteX

2.Configure as variáveis de ambiente:

Crie um arquivo .env no diretório backend/ com as seguintes variáveis:

env
Copiar código
MONGO_URI=mongodb://mongo:27017/routex
PORT=5000
Crie um arquivo .env no diretório frontend/ com as seguintes variáveis:

env
Copiar código
REACT_APP_BACKEND_URL=http://localhost:5000
Suba os containers com Docker Compose:

bash
Copiar código
docker-compose up --build
Acesse o frontend no navegador:

Local: http://localhost:3000
O backend estará disponível na porta 5000:

Local: http://localhost:5000


