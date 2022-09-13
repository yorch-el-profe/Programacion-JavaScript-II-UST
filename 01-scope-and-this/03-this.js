/**
 * In Java "this" refers to the internal object reference
 public class Dog {
  private String name;
  private String breed;

  public Dog(String name, String breed) {
    this.name = name;
    this.breed = breed;
  }

  public String barkYourName() {
    String name = "Another name";
    System.out.println("Woof! " + this.name); <-- Refers to "name" property
  }
 }
 */
 const dog = {
  name: 'Dinky',
  breed: 'Electrico',
  barkYourName: function () {
    console.log("Woof!", this.name);
  }
 }

 const barkYourName = dog.barkYourName;

 dog.barkYourName();
 barkYourName(); // <-- Refers to the global context (globalThis in Node.js & window in Browser)

 const cat = {
  name: 'Michi',
  meowYourName: barkYourName
 }

 cat.meowYourName();

 /**
  * "this" in JavaScript is called Function Context.
  * 
  * "this" takes the value of the object that invokes the function.
  */