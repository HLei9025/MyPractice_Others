/**
 *演示promise案例
 promise对象有三种状态：
 pending(进行中)
 fulfilled（已成功）
 rejected(已失败)
 promise的状态改变只有2种可能：
 从pending变为fulfilled
 从pending变为rejected
 一旦状态改变就不会再变
 */
const test = new Promise((resolve, reject) => {
    resolve(666)
    reject(555)
});
test.then((res)=>{
    console.log('res:',res) //执行这个。输出666
}).catch((err)=>{
    console.log('err:',err)
})

const test2 = new Promise((resolve, reject) => {
    reject(55555555)
    resolve(66666666)
});
test2.then((res)=>{
    console.log('res---',res)
}).catch((err)=>{
    console.log('err---',err) //执行这个。输出55555555
})