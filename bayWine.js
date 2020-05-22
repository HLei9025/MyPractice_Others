

// 【题目】：酒每瓶2元，每两个酒瓶可以换一瓶酒，每4个瓶盖可以换一瓶酒，问10块钱能喝多少瓶酒
/**
 * 
 * @param {number} money 
 * @return {number}
 */
function bayWine(money) {
    let current_p = money / 2; // 当前的瓶子数量
    let current_g = money / 2; // 当前的盖子数量
    let result = current_p;
    while (parseInt(current_p / 2) !== 0 || parseInt(current_g / 4) !== 0) { // 不管是瓶子还是盖子，只要还能继续换，就不停止
        let changeByP = parseInt(current_p / 2); // 用空瓶换到的新酒
        let changeByG = parseInt(current_g / 4); // 用空盖换到的新酒
        result += changeByG + changeByP; // 在原有的数量上累加新换到的
        current_p = current_p % 2 + changeByP + changeByG; // 更改现有的空瓶数
        current_g = current_g % 4 + changeByG + changeByP; // 更改现有的空盖数
    }
    return result;
}
console.log(bayWine(10));


