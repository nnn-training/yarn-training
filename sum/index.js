'use strict';

/**
 * 数値の配列を受け取って、その要素の合計を返す関数
 */
function add(numbers) {
    let result = 0;
    for(const num of numbers) {
        result = result + num;
    }
    return result;
}

//モジュールとして他のファイルから使えるようにする時
//①module.exportsにオブジェクトとして代入する
//②プロパティは外から見える名前,値は中身(関数)
//③プロパティと値の名前が一致するときはプロパティ名を省略した方が良い
module.exports = {
    add
};