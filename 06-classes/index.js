class Disciplina {
    constructor(ano, nome) {
        if (ano < 1 || ano > 4) throw `ano ${ano} inválido`;
            this.ano = ano;
            this.nome = nome;
    }       
}
class Aluno { // onjetos do tipo Aluno devem ter matricula e nome com pelomenos 5 caracteres
    //construtor
    constructor(matricula, nome) {
        if(nome.length < 5) throw 'nome inválido < 5 chars';
        //atributo ou propriedade
        this.matricula = matricula;
        this.nome = nome;
        // Aluno agrega disciplinas
        this.disciplinas = [];
    }

    matricular(d) {
        this.disciplinas.push(d);
    }
    // método (função que age sobre um objeto)
        //diferença do método e a função convencional: o método não precisa de parâmetros quando está dentro da classe. Basta que ele esteja inserido na classe que ele passa a ter acesso ao que a classe tem.
    toHTML(){
        return `<b>${this.matricula}</b>&nbsp;<i>${this.nome}</i>`;
    }

}

let a = new Aluno('112233', 'Guido van Rossum');
console.log(a.matricula);
document.querySelector('div').innerHTML = a.toHTML();

let mat2 = new Disciplina(2, 'Matemática 2');
let log = new Disciplina(1, 'Lógica de Programação');

a.matricular(mat2);
a.matricular(log);
 



/*

// SUPERCLASSIFICAÇÃO/ SUBCLASSIFICAÇÃO -> HERANÇA!!!

//SUPERCLASSES + ABSTRATA + GENÉRICO
//SUBCLASSES + CONCRETA + ESPECÍFICA
class Aluno {
    constructor(matricula, nome, email) {
        this.matricula = matricula;
        this.nome = nome;
        this.email = email;
    }

    toHTML() {
        return `<b>${this.matricula}</b>&nbsp;<i>${this.nome}</i>`;        
    }
}

class Professor {
    constructor(siape, nome, email) {
        this.siape = siape;
        this.nome = nome;
        this.email = email;
    }

    toHTML() {
        return `<b>${this.siape}</b>&nbsp;<i>${this.nome}</i>`;        
    }
}



*/