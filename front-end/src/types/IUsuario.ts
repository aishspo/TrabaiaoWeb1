export enum Ocupaçao {
    Aluno = "aluno",
    Professor = "professor"
}

export default interface IAluno {
    email: string,
    nome: string,
    senha: string,
    Ocupaçao
}