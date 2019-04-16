
export const http = axios.create({
  baseURL:'http://localhost:8080/contatos/'
});
export default {
  getContatos:()=>{
    return http.get('/')
  },
  createContato:(contato)=>{
    return http.post('/cadastrar',{
      nome: 'maria',
      telefone: '111',
      email: 'www',
      id: '11'
      })

  },
  updateContato:(contato)=>{
    return http.put('/atualizar', contato)
  },
  deleteContato:(contato)=>{
    return http.delete('/deletar', {data:contato})

  }
}
