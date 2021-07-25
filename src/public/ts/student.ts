import Professor from "./professor";

export default class Student {
  name: string;
  favProfessor: Professor;
  constructor(name: string, professor: Professor) {
    this.name = name;
    this.favProfessor = professor;
  }

  getFavProfessor = () => {
     return this.favProfessor
  }

}
