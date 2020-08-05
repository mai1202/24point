function count(n) {
    const s = ["+", "-", "*", "/"];
    var trueFormulaList = [];
    var nList1 = Array.from(n);
    for (var ni1 = 0; ni1 < nList1.length; ni1++) {
        var n1 = nList1[ni1];
        for (var si1 = 0; si1 < s.length; si1++) {
            var s1 = s[si1];
            var nList2 = Array.from(nList1);
            nList2.splice(ni1, 1);
            for (var ni2 = 0; ni2 < nList2.length; ni2++) {
                var n2 = nList2[ni2];
                for (var si2 = 0; si2 < s.length; si2++) {
                    var s2 = s[si2];
                    var nList3 = Array.from(nList2);
                    nList3.splice(ni2, 1);
                    for (var ni3 = 0; ni3 < nList3.length; ni3++) {
                        var n3 = nList3[ni3];
                        for (var si3 = 0; si3 < s.length; si3++) {
                            var s3 = s[si3];
                            var nList4 = Array.from(nList3);
                            nList4.splice(ni3, 1);
                            for (var ni4 = 0; ni4 < nList4.length; ni4++) {
                                var n4 = nList4[ni4];
                                var formulaList = [];
                                formulaList.push(String(n1) + s1 + String(n2) + s2 + String(n3) + s3 + String(n4));
                                formulaList.push("(" + String(n1) + s1 + String(n2) + ")" + s2 + String(n3) + s3 + String(n4));
                                formulaList.push(String(n1) + s1 + "(" + String(n2) + s2 + String(n3) + ")" + s3 + String(n4));
                                formulaList.push(String(n1) + s1 + String(n2) + s2 + "(" + String(n3) + s3 + String(n4) + ")");
                                formulaList.push("(" + String(n1) + s1 + String(n2) + ")" + s2 + "(" + String(n3) + s3 + String(n4) + ")");
                                formulaList.push("(" + String(n1) + s1 + String(n2) + s2 + String(n3) + ")" + s3 + String(n4));
                                formulaList.push(String(n1) + s1 + "(" + String(n2) + s2 + String(n3) + s3 + String(n4) + ")");
                                formulaList.push("((" + String(n1) + s1 + String(n2) + ")" + s2 + String(n3) + ")" + s3 + String(n4));
                                formulaList.push("(" + String(n1) + s1 + "(" + String(n2) + s2 + String(n3) + "))" + s3 + String(n4));
                                formulaList.push(String(n1) + s1 + "((" + String(n2) + s2 + String(n3) + ")" + s3 + String(n4) + ")");
                                formulaList.push(String(n1) + s1 + "(" + String(n2) + s2 + "(" + String(n3) + s3 + String(n4) + "))");
                                console.log(formulaList);
                                for (i = 0; i < formulaList.length; i++) {
                                    if (eval(formulaList[i]) === 24 && !trueFormulaList.includes(formulaList[i])) {
                                        trueFormulaList.push(formulaList[i]);
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(trueFormulaList);
    return trueFormulaList;
}

function output(list) {
    var outputObj = document.getElementById("output");
    outputObj.innerHTML = "";
    if (list.length <= 0) {
        outputObj.innerHTML = outputObj.innerHTML + "无结果";
    }
    else {
        for (i = 0; i < list.length; i++) {
            outputObj.innerHTML = outputObj.innerHTML + list[i] + "<br>";
        }
    }
    var progressObj = document.getElementById("progress");
    progressObj.style.display = "none";
}

function getForm() {
    try {
        var progressObj = document.getElementById("progress");
        progressObj.style.display = "block";
        var numbers = [];
        var numbersObj = document.getElementsByClassName("numbers");
        for (i = 0; i < numbersObj.length; i++) {
            numbers.push(numbersObj[i].value);
        }
        console.log(numbers);
        output(count(numbers));
    }
    catch (err) {
        var progressObj = document.getElementById("progress");
        progressObj.style.display = "none";
        var outputObj = document.getElementById("output");
        outputObj.innerHTML = "诶呀，出错了。错误内容：" + err;
    }
}