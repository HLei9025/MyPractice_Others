/* const A = 123;
const B = 456;

function func(A, B){
    console.log('A:',A) // undefined
    console.log('B:',B) // undefined
}
func()

function func(A, B){
    console.log('A:',A) // A: 123
    console.log('B:',B) // B: 456
}
func(A, B)

function func(){
    console.log('A:',A) // A: 123
    console.log('B:',B) // B: 456
}
func() */

var a;
var b;
function test(){
    // console.log('test(this):',this) // global
    function box(){
        a = 1;
        b = 2;
        // console.log('box(this):',this) // global
    }
    box()
}
test()
console.log('a:',a) // a: 1
console.log('b:',b) // b: 2

function Person(){
    this.name = 'zs';
    this.run = function(){
        console.log(this.name)
    }
}
Person.prototype.age = 20;
Person.prototype.eat = function(){
    console.log(this.name+ 'hehe')
}

const zhangsan = new Person();
console.log(zhangsan.name);
console.log(zhangsan.age);
zhangsan.run();
zhangsan.eat();


class App {
    sex = 'men';
    constructor(){
        this.name = 'ls';
        this.age = 30
        this.tiao = function(){
            console.log(this.age)
        }
    }
    pao(){
        console.log(this.name)
    }
    static aaa(){
        console.log('hello')
    }
    ttt(){
        console.log(this.sex)
    }
}

class Abb extends App {
    constructor(){
        super()
    }
}

const box = new App();
const pox = new Abb();

console.log(box.name)
console.log(box.age)
// console.log(box.sex)
box.pao()
box.tiao()

console.log(pox.name)
console.log(pox.age)
pox.pao()
pox.tiao()
// console.log(pox.sex)

App.aaa()
Abb.aaa()

console.log(App.sex)
