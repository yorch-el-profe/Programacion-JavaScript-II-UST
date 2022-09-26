/*
  Versión en Java:

  public class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
      this.name = name;
      this.age = age;
    }

    String getName() {
      return name;
    }
  }

  Person person = new Person("Gabriel", 20);
  person.name; // Error
  person.getName();
*/

class Person {
  // Declarando una propiedad privada
  #name;

  constructor(name, age) {
    this.#name = name;
    this.age = age;
  }

  getName() {
    return this.#name;
  }
}

const person = new Person('Gabriel', 20);

console.log(person.getName());