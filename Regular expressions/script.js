//96
// 1
// let str1 = 'ahb acb aeb aeeb adcb axeb';
// let regex1 = /a.b/g;
// console.log(str1.match(regex1)); // ['ahb', 'acb', 'aeb']

// // 2
// let str2 = 'aba aca aea abba adca abea';
// let regex2 = /a..a/g;
// console.log(str2.match(regex2)); // ['abba', 'adca', 'abea']

// // 3
// let str3 = 'aba aca aea abba adca abea';
// let regex3 = /a..a/g;
// console.log(str3.match(regex3)); // ['abba', 'abea']

//97
//1
// let str = 'aa aba abba abbba abca abea';
// let res = str.replace(/ab+a/g, '!');
// console.log(res)

//2
// let str = 'aa aba abba abbba abca abea';
// let res = str.replace(/ab*a/g, '!');
// console.log(res)

//3
// let str = 'aa aba abba abbba abca abea';
// let regex = /ab+a/g;
// let matches = str.match(regex);
// console.log(matches); 

//98
// let str = 'ab abab abab abababab abea';
// let regex = /(ab)+/g;
// let matches = str.match(regex);
// console.log(matches); 

//99
//1
// let str = 'a.a aba aea';
// let regex = /a\.a/g;
// let matches = str.match(regex);
// console.log(matches); 

//2
// let str = '2+3 223 2223';
// let regex = /2\+3/g;
// let matches = str.match(regex);
// console.log(matches); 

//3
// let str = '23 2+3 2++3 2+++3 345 567';
// let regex = /2\++3/g;
// let matches = str.match(regex);
// console.log(matches); 

//4
// let str = '23 2+3 2++3 2+++3 445 677';
// let regex = /\b\d+\+*3\b/g;
// let matches = str.match(regex);
// console.log(matches); 

//5
// let str = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
// let regex = /\*\w+\+/g;
// let matches = str.match(regex);
// console.log(matches); 

//6
// let str = '[abc] {abc} abc (abc) [abc]';
// let res = str.replace(/\[[^\]]+\]/g, '!');
// console.log(res);

//100
//1
// let str = 'aa aba abba abbba abbbba abbbbba';
// let regex = /ab{2,4}a/g;
// let matches = str.match(regex);
// console.log(matches); 

//2
// let str = 'aa aba abba abbba abbbba abbbbba';
// let regex = /ab{1,3}a/g;
// let matches = str.match(regex);
// console.log(matches); 

//3
// let str = 'aa aba abba abbba abbbba abbbbba';
// let regex = /ab{4,}a/g;
// let matches = str.match(regex);
// console.log(matches); 

//101
// let str = 'aba accca azzza wwwwa';
// let res = str.replace(/a.+?a/g, '!');
// console.log(res);

//102
//1
// let str = 'a1a a2a a3a a4a a5a aba aca';
// let res = str.replace(/a\d{1}a/g, '!');
// console.log(res);

//2
// let str = 'a1a a22a a333a a4444a a55555a aba aca';
// let res = str.replace(/a\d{1,}a/g, '!');
// console.log(res);

//3
// let str = 'a1a a22a a333a a4444a a55555a aba aca';
// let res = str.replace(/a\d{0,}a/g, '!');
// console.log(res);

//4
// let str = 'avb a1b a2b a3b a4b a5b abb acb';
// let res = str.replace(/a[^\d\s]b/g, '!');
// console.log(res);

//5
// let str = 'ave a#b a2b a$b a4b a5b a-b acb';
// let res = str.replace(/a\Wb/g, '!');
// console.log(res);

//6
// let str = 'ave a#a a2a a$a a4a a5a a-a aca';
// let res = str.replace(/\s/g, '!');
// console.log(res)

//103
//1
// let str = 'aba aea aca aza axa';
// let res = str.replace(/a[bex]a/g, '!');
// console.log(res)

//2
// let str = 'a1a a3a a7a a9a aba';
// let res = str.replace(/a[3-6]a/g, '!');
// console.log(res)

//3
// let str = 'aba aea afa aha aga';
// let res = str.replace(/a[a-g]a/g, '!');
// console.log(res)

//4
// let str = 'aba aea afa aha aga';
// let res = str.replace(/a[a-fj-z]a/g, '!');
// console.log(res)

//5
// let str = 'aAa aea aEa aJa a3a';
// let res = str.replace(/a[a-fA-D]a/g, '!');
// console.log(res)

//6
// let str = 'aAXa aeffa aGha aza ax23a a3sSa';
// let res = str.replace(/a[a-z]+a/g, '!');
// console.log(res)

//7
// let str = 'aAXa aeffa aGha aza ax23a a3sSa';
// let res = str.replace(/a[a-zA-Z]+a/g, '!');
// console.log(res)

//8
// let str = 'aAXa aeffa aGha aza ax23a a3sSa';
// let res = str.replace(/a[a-z\d]+a/g, '!');
// console.log(res)

//105
//1
// let str = 'wйw wяw wёw wqw';
// let res = str.replace(/w[а-яё]w/g, '!');
// console.log(res)

//2
// let str = 'ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ';
// let res = str.replace(/[а-яёА-ЯЁ]+/g, '!');
// console.log(res)

//106
//1
// let str = 'aba aea aca aza axa a.a a+a a*a';
// let res = str.replace(/a[.+*]a/g, '!');
// console.log(res)

//2
// let str = 'xaz x.z x3z x@z x$z xrz';
// let res = str.replace(/x[^\w]z/g, '!');
// console.log(res)

//108
//1
// let str = 'x[]z x[[]]z x()z';
// let res = str.replace(/x[\[\]]+z/g, '!');
// console.log(res);

//2
// let str = 'x[]z x{}z x.z x()z x([])z';
// let res = str.replace(/x[\[\]\{\}\(\)]+z/g, '!');
// console.log(res);

//109
//1
// let str = '^xx axx ^zz bkk @ss';
// let regex = /[\^@][a-zA-Z]{2}/g;
// let result = str.match(regex);
// console.log(result);

//2
// let str = '^xx axx ^zz bkk @ss';
// let regex = /[^\^@][a-zA-Z]{2}/g;
// let result = str.match(regex);
// console.log(result);

//3
// let str = '^xx axx ^zz bkk';
// let regex = /[^\^ ]+[a-zA-Z]{2}/g;
// let result = str.match(regex);
// console.log(result);

//110
//1
// let str = 'xaz xBz xcz x-z x@z';
// let res = str.replace(/x[a-zA-Z-]z/g, '!');
// console.log(res)

//2
// let str = 'xaz x$z x-z xcz x+z x%z x*z';
// let res = str.replace(/x[$+-]z/g, '!');
// console.log(res)

//111
// let res = str.replace(/[a-z]+/ig, '!');

//112
//1
// let str = 'abc def xyz';
// let result = str.match(/[a-z]+/)[0];
// console.log(result);

//2
// let str = 'abc def xyz';
// let result = str.match(/[a-z]+$/)[0];
// console.log(result);

//113
//1
// let str = 'abc def xyz';
// let res = str.replace(/\b/g, '#');
// console.log(res);

//2
// let str = 'abc def xyz';
// let res = str.replace(/\B/g, '+');
// console.log(res);

//115
//1
// let str = 'aeeea aeea aea axa axxa axxxa';
// let res = str.replace(/a(e+|x+)a/g, '!');
// console.log(res);

//2
// let str = 'aeeea aeea aea axa axxa axxxa';
// let res = str.replace(/a(e{2}|x+)a/g, '!');
// console.log(res);

//116
// let str = 'a aa aaa aaaa aaaa';
// let reg = /a+/;
// let res = str.replace(reg, '!');
// console.log(res);

//117
//1
// let str = 'http://example.com';
// let isMatch = /^http:\/\//.test(str);
// console.log(isMatch);


//2
// let str = 'https://example.com';
// let isMatch = /^(http:\/\/|https:\/\/)/.test(str);
// console.log(isMatch);


//3
// let str = 'file.txt';
// let isMatch = /\.(txt|html|php)$/.test(str);
// console.log(isMatch);


//4
// let str = 'image.jpg';
// let isMatch = /\.(jpg|jpeg)$/.test(str);
// console.log(isMatch);


//5
// let str = 'image.png';
// let isMatch = /\.(jpg|jpeg|png)$/.test(str);
// console.log(isMatch);


//6
// let str = '123456789012';
// let isMatch = /^\d{1,12}$/.test(str);
// console.log(isMatch);


//7
// let str = '2022-01-01';
// let isMatch = /^\d{4}-\d{2}-\d{2}$/.test(str);
// console.log(isMatch);


//8
// let str = '01.01.2022';
// let isMatch = /^\d{2}.\d{2}.\d{4}$/.test(str);
// console.log(isMatch);

//9
// let str = '12:34:56';
// let isMatch = /^\d{2}:\d{2}:\d{2}$/.test(str);
// console.log(isMatch);

//10
// let str = 'user@example.com';
// let isMatch = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(str);
// console.log(isMatch);

//11
// let str = 'example.com';
// let isMatch = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(str);
// console.log(isMatch);

//118
//1
// let str = '1 23 456 789';
// let res = str.search(/\d{3}/);
// console.log(res);

//119
// let str = '2025-12-31 12:59:59';
// let res = str.split(/[- :]/);
// console.log(res);

//121
//1
// let str = 'sss domain.ru zzz';
// let result = str.match(/(\S+)\.(\S+)/);
// if (result) {
//   let domainName = result[1];
//   let domainZone = result[2];
//   console.log(domainName);
//   console.log(domainZone);
// } 

//2
// let str = '31.12.2025';
// let result = str.match(/(\d{2})\.(\d{2})\.(\d{4})/);
// if (result) {
//   let day = result[1];
//   let month = result[2];
//   let year = result[3];
//   console.log(day);
//   console.log(month);
//   console.log(year);
// } 

//124
// let str = '12:37:57 15:48:58 17:59:59';
// let reg = /(\d{2}):(\d{2}):(\d{2})/g;
// let res;
// while (res = reg.exec(str)) {
//   let hours = res[1];
//   let minutes = res[2];
//   let seconds = res[3];
//   console.log(hours, minutes,seconds);
// }

//125
// let str = '12:37 15:48 17:59';
// let reg = /(\d{2}):(\d{2})/g;
// reg.lastIndex = 4;
// let res;
// while (res = reg.exec(str)) {
//   let hours = res[1];
//   let minutes = res[2];
//   console.log(hours, minutes);
// }

//126
//1
// let str = '12 34 56 78';
// let res = str.replace(/\b(\d)(\d)\b/g, '$2$1');
// console.log(res); 

//2
// let str = '31.12.2025';
// let res = str.replace(/(\d{2})\.(\d{2})\.(\d{4})/g, '$3.$2.$1');
// console.log(res); 

//127
//1
// let str = 'aaa [2] bbb [3] ccc [12] ddd';
// let result = str.replace(/\[(\d+)\]/g, function(match, num) {
//     return '[' + (2 * Number(num)) + ']';
// });
// console.log(result); 

//2
// let str = '123 456 789';
// let result = str.replace(/\d+/g, function(match) {
//     return match.split('').reverse().join('');
// });
// console.log(result);

//3
// let str = '31.12.2025 30.11.2024 29.10.2023';
// let result = str.replace(/(\d{2})\.(\d{2})\.(\d{4})/g, function(match, day, month, year) {
//     return year + '-' + month + '-' + day;
// });
// console.log(result); 

//128
//1
// let str = 'a1b2c3';
// let result = str.replace(/\d/g, '$&$&');
// console.log(result); 

//2
// let str = 'sss site.ru zzz site.com kkk';
// let result = str.replace(/\b(\w+\.\w+)\b/g, '<a href="http://$1">$1</a>');
// console.log(result);

//129
//1
// let str = 'aaa bbb ccc xyz';
// let result = str.replace(/([a-z])\1\1/g, '!');
// console.log(result);

//2
// let str = 'a aa aaa aaaa aaaaa';
// let result = str.replace(/([a-z])\1+/g, '!');
// console.log(result); 

//3
// let str = 'aaa aaa bbb bbb ccc ddd';
// let result = str.replace(/(\b\w+\b) \1/g, '!');
// console.log(result); 

//131
// let str = '12:59:59 12:59:12 09:45:09';
// let result = str.replace(/(?<time>\d{2}):\d{2}:\k<time>/g, '!');
// console.log(result); 

//133
//1
// let str = 'func1() func2() func3()';
// let functionNames = str.match(/\w+(?=\()/g);
// console.log(functionNames); 

//2
// let str = '<a href="" class="eee" id="zzz">';
// let attributeNames = str.match(/\w+(?==)/g);
// console.log(attributeNames); 

// №3
// let str = '$aaa $bbb $ccc xxxx';
// let variableNames = str.match(/\$(\w+)/g);
// console.log(variableNames);

//134
//1
// let tlds = 'ru|by|ua';
// let reg1 = new RegExp(`^[a-z]+\.(${tlds})$`);
// let res1 = reg1.test(str);
// console.log(res1);

//2
// let tldsArray = ['ru', 'by', 'ua'];
// let tldsPattern = tldsArray.join('|');
// let reg2 = new RegExp(`^[a-z]+\.((${tldsPattern}))$`);
// let res2 = reg2.test(str);
// console.log(res2);



