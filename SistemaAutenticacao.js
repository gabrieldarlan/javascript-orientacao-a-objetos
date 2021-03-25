/* 
Ser autenticavel significar ter um metodo autenticar
*/
export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        return autenticavel.autenticar(senha);
    }
}