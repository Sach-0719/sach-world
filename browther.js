// ユーザーエージェントを取得
var userAgent = window.navigator.userAgent.toLowerCase();
var browserName = '';
var deviceType = '';
var message = '';

// 📌 ブラウザ判定
if (userAgent.indexOf('msie') != -1 || userAgent.indexOf('trident') != -1) {
    // Internet Explorer の場合
    browserName = 'Internet Explorer';
    message = '現在お使いのブラウザは ' + browserName + ' です。早めに他のブラウザーに乗り換えてください。会社のシステムなどがIEを想定した作りの場合、EdgeのIEをモードをご利用ください。';
} else if (userAgent.indexOf('edge') != -1) {
    browserName = 'Microsoft Edge';
} else if (userAgent.indexOf('chrome') != -1) {
    browserName = 'Google Chrome';
} else if (userAgent.indexOf('safari') != -1) {
    browserName = 'Safari';
} else if (userAgent.indexOf('firefox') != -1) {
    browserName = 'Mozilla Firefox';
} else if (userAgent.indexOf('opera') != -1 || userAgent.indexOf('opr') != -1) {
    browserName = 'Opera';
} else {
    browserName = '不明';
}

// IE以外の場合に通常のメッセージを設定
if (browserName !== 'Internet Explorer') {
    message = '現在お使いのブラウザは ' + browserName + ' です。';
}


// 📌 HTMLに表示
document.getElementById('browser-info').innerText = message;
document.getElementById('device-info').innerText = deviceType;
