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
    console.log('test(this):',this) // global
    function box(){
        a = 1;
        b = 2;
        console.log('box(this):',this) // global
    }
    box()
}
test()
console.log('a:',a) // a: 1
console.log('b:',b) // b: 2