/* let obj = new Object();
obj.name = 'saber';
obj.age = '2';
console.log(obj); */
/* let obj = {
    name: 'build',
    age: '5'
}
console.log(obj);*/
function Person(name, age) {
    this.name = name
    this.age  = age
    this.sayname = () => {
      console.log(this.name)
    }
  }
  let name1=["kiva"];
  let age1=["12"]
  
  let Person1=new Person(name1,age1)
  console.log(Person1)