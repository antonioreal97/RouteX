# Use uma imagem Node como base
FROM node:16

# Defina o diretório de trabalho dentro do container
WORKDIR /app

# Copie os arquivos package.json e package-lock.json para instalar dependências
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .

# Exponha a porta padrão do React
EXPOSE 3000

# Comando para iniciar o servidor de desenvolvimento
CMD ["npm", "start"]
