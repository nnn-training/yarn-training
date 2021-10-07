'use strict';

// モジュールとして取得
const axios = require('axios');

// HTTPレスポンスを受け取った際に無名関数を渡す
axios.get('http://www.google.com').then(res => {
    console.log(res.data);
});