'use strict';
const axios = require('axios');
//then->処理が完了(axios.get)したら次の処理を行わせる
axios.get('http://www.google.com').then(res => {
    console.log(res.data);
});