// SUPERCLASSIFICAÇÃO/ SUBCLASSIFICAÇÃO -> HERANÇA!!!

//SUPERCLASSES + ABSTRATA + GENÉRICO
//SUBCLASSES + CONCRETA + ESPECÍFICA

class Pessoa { // Superclasse/abstração de aluno/professor/etc
    constructor(nome, email){
        this.nome = nome;
        this.email = email;
    }

    //campo calculado e não um campo armazenado
    get username() { //a.username em vez de a.username()
        return this.email.split('@')[0];
    }

    get registro() { // abstração
        throw 'get registro() não implementado';
    }

    toHTML() {
        return `<b>${this.registro}</b>&nbsp;<i>${this.nome}</i>`;        
    }
}

// aluno estende pessoa (HERANÇA)
class Aluno extends Pessoa{  
    constructor(matricula, nome, email) {
        super(nome,email);
        this.matricula = matricula;
    }
    
    get registro() {
        return this.matricula;
    }
}

class Professor extends Pessoa {
    constructor(siape, nome, email) {
        super(nome,email);
        this.siape = siape;
    }

    get registro() {
        return this.siape;
    }
}

let p = new Professor ('662233', 'Marcio', 'marcio@ifrs.edu.br');
let a = new Aluno('223344', 'Um Aluno Também', 'umaluno@tambem.com');
document.querySelector('div').innerHTML = p.toHTML();
document.querySelector('div').innerHTML += `<br>${a.toHTML()}`;
console.log(a.toHTML());


console.log(p.username); // propriedade getter
console.log(a.username); 