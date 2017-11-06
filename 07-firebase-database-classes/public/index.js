console.log('index');
// todas as classes que estenderem
// Persistente poderão salvar no Firebase

class Persistente { // SUPERCLASS
    constructor(ref, id) {
        this.ref = ref;
        this.id = id;
    }
    get dados() {
        throw new Error("dados não disponíveis, necessário sobrescrever get dados()");
    }
    adicionar() {
        let firebaseRef = firebase.database()
                    .ref(this.ref + '/' + (this.id || ''))
                    .push();
        this.id = firebaseRef.key; // lembrar o ID gerado!
        firebaseRef.set(this.dados);
    }
    salvar() {
        firebase.database()
            .ref(this.ref + '/' + (this.id || ''))
            .set(this.dados);
    }
    excluir() {
        firebase.database()
            .ref(this.ref + '/' + (this.id || ''))
            .set(null);
    }
}

class Perfil extends Persistente {
    constructor(id, nome, idade) {
        super('/perfil', id); // "alimentando" a superclasse
        this.nome = nome;
        this.idade = idade;
    }
    // sobrescrevendo o `get dados()`
    get dados() {
        return {
            nome: this.nome,
            idade: this.idade
        }
    }
}

class Post extends Persistente {
    constructor(texto) {
        super('/posts');
        this.texto = texto;
    }
    get dados() {
        return {
            texto: this.texto
        }
    }
}




