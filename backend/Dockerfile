# Use uma imagem base oficial do Node.js (versão LTS)
FROM node:16

# Define o diretório de trabalho no container
WORKDIR /app

# Copia os arquivos de dependências com cache otimizado
COPY package*.json ./

# Instala as dependências de produção
RUN npm install --production

# Copia o restante dos arquivos para o container
COPY . .

# Exponha a porta do backend
EXPOSE 5000

# Comando para iniciar o backend
CMD ["npm", "start"]
