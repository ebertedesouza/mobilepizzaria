import axios from 'axios';

// Configurar a URL do seu backend
const api = axios.create({
  baseURL: 'https://pizzaria-orpin.vercel.app//', // Substitua pela URL do seu backend
});

// Define a interface para as credenciais
interface Credentials {
  email: string;
  password: string;
}

// Função para fazer login
const login = async (credentials: Credentials) => {
  try {
    // Usando POST para enviar as credenciais
    const response = await api.post('/session', {
      email: credentials.email,
      password: credentials.password,
    });
    
    
    // Trate a resposta aqui, por exemplo, armazenando o token
    console.log('Login bem-sucedido:', response.data);
    return response.data; // Retorna os dados do usuário ou token, se necessário
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Erro na requisição:', error.response?.data || error.message);
      // Aqui você pode lidar com o erro, como atualizar o estado ou exibir uma mensagem
    } else {
      console.error('Erro inesperado:', error);
    }
  }
};

export { api, login }; // Exporte a função de login
