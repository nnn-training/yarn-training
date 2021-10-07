'use strict';

/**
 * 数値の配列を受け取って、その要素の合計を返す関数
 * @param {Number} numbers 数値の配列 
 * @returns 要素の合計
 */
function add(numbers) {
    let result = 0;
    for (const num of numbers){
        result = result + num;
    }
    return result;
}

// 使えるようにしたい関数やオブジェクトを代入する
module.exports = { add };