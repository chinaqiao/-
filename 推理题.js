
// 2018年刑侦科推理题
var answer = ['答案', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A']; // 答案数组


function log(s) {
    // console.log(s);
}

/**
 * 本题的答案是
 */
function question1() {
    log('第一题答案' + answer[1]);
    return true;
}

/**
 * 第五题的答案是
 */
function question2() {
    var a = answer[2];
    switch(a) {
        case 'A':
            log('第二题答案' + a);
            return answer[5] == 'C';
        case 'B':
            log('第二题答案' + a);
            return answer[5] == 'D';
        case 'C':
            log('第二题答案' + a);
            return answer[5] == 'A';
        case 'D':
            log('第二题答案' + a);
            return answer[5] == 'B';
    }
}

/**
 * 一下选项中哪一题的答案与其他三项不同
 */
function question3() {
    var a = answer[3];
    
    var a3 = answer[3];
    var a6 = answer[6];
    var a2 = answer[2];
    var a4 = answer[4];

    var result = false;

    switch(a) {
        case 'A':
        result = (a6 == a2 && a2 == a4);
        break;
        case 'B':
        result = (a3 == a2 && a2 == a4);
        break;
        case 'C':
        result = (a3 == a6 && a6 == a4);
        break;
        case 'D':
        result = (a3 == a6 && a6 == a2);
        break;
    }
    return result;
}

/**
 * 以下选项中那两题的答案相同
 */
function question4() {
    var a = answer[4];
    var result = false;
    switch(a) {
        case 'A':
            result = (answer[1] == answer[5]);
            break;
        case 'B':
            result = (answer[2] == answer[7]);
            break;
        case 'C':
            result = (answer[1] == answer[9]);
            break;
        case 'D':
            result = (answer[6] == answer[10]);
            break;
    }
    return result;
}

/**
 * 5.
 * 以下选项中哪一题的答案与本题相同
 */
function question5() {
    var a = answer[5];
    var result = false;
    var num = 0;
    switch(a) {
        case 'A':
            num = 8;
            break;
        case 'B':
            num = 4;
            break;
        case 'C':
            num = 9;
            break;
        case 'D':
            num = 7;
            break;
    }
    result = (a == answer[8]);
    return result;
}


/**
 * 6.
 * 以下选项中哪一题的答案与第八题相同
 */
function question6() {
    var a = answer[6];
    var a8 = answer[8];
    var result = false;
    switch(a) {
        case 'A':
            result = (a8 == answer[2] && a8 == answer[4]);
            break;
        case 'B':
            result = (a8 == answer[1] && a8 == answer[6]);
            break;
        case 'C':
            result = (a8 == answer[3] && a8 == answer[10]);
            break;
        case 'D':
            result = (a8 == answer[5] && a8 == answer[9]);
            break;
    }
    return result;
}


/**
 * 7.
 * 在这10题中杯被选中最少选项的字母为
 */
function question7() {
    var a = answer[7];
    var minLetter = checkMinCount();
    var result = false;
    switch(a) {
        case 'A':
            result = ('C' == minLetter);
            break;
        case 'B':
            result = ('B' == minLetter);
            break;
        case 'C':
            result = ('A' == minLetter);
            break;
        case 'D':
            result = ('D' == minLetter);
            break;
    }
    return result;
}

/**
 * 8.
 * 一下选项中哪一题的答案与第一题在字母中不相邻
 */
function question8() {
    var a = answer[8];
    var result = false;
    var a1 = answer[1];
    var code1 = a1.charCodeAt();
    var num = 0;
    switch(a) {
        case 'A':
            num = 7;
            break;
        case 'B':
            num = 5;
            break;
        case 'C':
            num = 2;
            break;
        case 'D':
            num = 10;
            break;
    }
    var abs = Math.abs(code1 - answer[num].charCodeAt());
    result = (abs != 1);
    return result;

}

/**
 * 9.
 * 已知“第一题与第6题的答案相同” 与 “第X题与第五题的答案相同” 的真假性相反，那么X为
 */
function question9() {
    var a = answer[9];
    var condition1 = (answer[1] == answer[6]);
    var condition2 = (answer[1] != answer[6]);
    var result = false;
    
    switch(a) {
        case 'A':
            var num = 6;
            break;
        case 'B':
            var num = 10;
            break;
        case 'C':
            var num = 2;
            break;
        case 'D':
            var num = 9;
            break;
    }
    
    condition1 != ((answer[num] == answer[5]));
    condition2 != ((answer[num] != answer[5]));
    result = (condition1 || condition2);
    return result;
}

/**
 * 10.
 * 在此10题中，ABCD四个字母出现次数最多与最少者的差为
 */
function question10() {
    var a = answer[10];
    var obj = checkMinCount('obj');
    var max = Math.max(obj.a, obj.b, obj.c, obj.d);
    var min = Math.min(obj.a, obj.b, obj.c, obj.d);
    var result = false;
    switch(a) {
        case 'A':
            var num = 3;
            break;
        case 'B':
            var num = 2;
            break;
        case 'C':
            var num = 4;
            break;
        case 'D':
            var num = 1;
            break;
    }
    result = ((max - min) == num);
    return result;
    
}


/**
 * 检查答案中出现次数最少的字母
 */
function checkMinCount(obj) {
    var result = {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
    };
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    for(var i = 1; i < answer.length; i++) {
        switch(answer[i]){
            case 'A':
            a++;
            break;
            case 'B':
            b++;
            break;
            case 'C':
            c++;
            break;
            case 'D':
            d++;
            break;
        }
    }
    if(obj === 'obj') {
        // 为第十题提供结果，返回出现次数
        result['a'] = a,
        result['b'] = b,
        result['c'] = c,
        result['d'] = d;
        return result;
    }else{

        console.log('A出现' + a + '次，B出现' + b + '次，C出现' + c + '次，D出现' + d + '次，');
        var min = Math.min(a, b, c, d);
        if (a == min) {
            console.log('A出现次数最少');
            return 'A';
        }
        if (b == min) {
            console.log('B出现次数最少');
            return 'A';
        }
        if (c == min) {
            console.log('C出现次数最少');
            return 'A';
        }
        if (d == min) {
            console.log('D出现次数最少');
            return 'D';
        }
        
    }
}

function check() {
    console.log(answer);
    if( 
        question1()
        && question2()
        && question3()
        && question4()
        && question5()
        && question6()
        && question7()
        && question8()
        && question9()
        && question10()
    ){
        console.log('验证通过');
        console.log(answer);
        return true;
    }else {
        console.log('验证不通过');
        return false;
    }
}


function start() {
    for(var i = 1; i < answer.length; i ++) {
        answer[i] = 'A'
        if(check()) return true;
        answer[i] = 'B'
        if(check()) return true;
        answer[i] = 'C'
        if(check()) return true;
        answer[i] = 'D'
        if(check()) return true;
    }
}
//answer = ['kaishi'];

// var answerNum = ['答案', 65, 65, 65, 67, 65, 67, 68, 65, 66, 65]; // 答案数组
var answerNum = ['答案', 64, 65, 65, 65, 65, 65, 65, 65, 65, 65]; // 答案数组
function bootstart() {
    var startTime = new Date().getTime();
    var count = 1;
    var i = 65;     // A
    var end = 68;   // D
    
    while(answerNum.length <= 11) {
        i++;
        answerNum[1] = i;
        jinwei(1);
        if(i > 68) {
            i = 64;
        }
        count++;
        console.log('[' + count + ']', answerNum);
        answer = formatLetter();
        if (check() ) break;
    }
    
    var endTime = new Date().getTime();
    console.log('总共循环' + count + '次');
    console.log('总耗时 ' + (endTime - startTime) + ' 毫秒');
}

function jinwei(index) {
    if(answerNum[index] > 68){
        answerNum[index] = 65;
        answerNum[index + 1] = answerNum[index + 1]?answerNum[index + 1] + 1 : 65;
        jinwei(index + 1);
    }
}

function formatLetter() {
    var result = ['答案'];
    for(var i=1; i < answerNum.length; i++){
        result[i] = String.fromCharCode(answerNum[i]);
    }
    console.log(result);
    return result;
}
bootstart()

// var answer = ['答案', 'B', 'C', 'A', 'C', 'A', 'C', 'D', 'A', 'B', 'A']; // 答案数组
// check();

console.log(answer);