# Use uma imagem base do Node.js
FROM node:16

# Define o diretório de trabalho no container
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos
COPY . .

# Exponha a porta em que o backend será executado
EXPOSE 3000

# Comando para iniciar o backend
CMD ["npm", "start"]