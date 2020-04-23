var a = 0;
var b = 1;
var g = (1 + 5 ** (0.5)) / 2;
// **表運算子^
for (var i = 1; i < 10000; i++) {
    c = a + b;
    a = b;
    b = c;
    console.log(c);
    var result = (b / a) - g;
    console.log(result);
    if ((b / a) < (g + 0.00001) && (b / a) > (g - 0.00001)) {
        break;
    }
}


