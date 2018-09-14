function change_dig(bit) {
    element = document.getElementById("b" + bit);
    if (element.innerHTML == "0") {
        element.innerHTML = "1";
        element.style.color = "#e8308c";
    } else {
        element.innerHTML = "0";
        element.style.color = "#3080e8";
    }
    result = document.getElementById("result");
    var array = [];
    for (var i = 0; i < 8; i++) {
        array.push(document.getElementById("b" + i).innerHTML)
    }
    var sum = 0
    var calc = "";
    for (var i = 0; i < array.length; i++) {
        sum += array[i]*Math.pow(2, i);
    }
    var is_f = false;
    for (var i = array.length-1; i >= 0 ; i--) {
        if(array[i] == "1") is_f = true;
        if(is_f) {
            calc += array[i] +
             " * <span style='color:gray;'>2<sup>" +
              i +
               "</sup></span> ";
            if (i != 0) calc += "+ ";
        }
    }
    document.getElementById("calc").innerHTML = calc;
    result.innerHTML = sum.toString();
}
