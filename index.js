function balikKata(kata) {
    // tulis jawabanmu di sini
    var o = '';
    for (var i = kata.length - 1; i >= 0; i--) {
        o += kata[i];
    }
    return o;
}

// testCase
console.log(balikKata("Niomic!"))
console.log(balikKata("JavaScript"))
console.log(balikKata("alohahola"))
console.log(balikKata("Jawa_Barat"))