// exemplo de arrow functions
var sum = (a, b) => a + b; // return implicito quando tem statements necessario ter chaves
console.log(sum(5, 15));

var soma = a => a; // quanto tiver um argumento apenas nao precisa parenteses

var createObj = () => ({ test: 123 });
console.log(createObj());



var obj = {
    sleep: function() {
      setTimeout(() => {
        console.log(this);
      }, 1000);
    }
  }
  
  console.log(obj.sleep());