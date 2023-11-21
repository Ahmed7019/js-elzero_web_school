/*  Challenge 1 */

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
// console.log(++a + -b + +c++ - -a++ + +a);
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/**  first one
 ** [++a] [+]
 ** [++a]
 ** - Value: 11
 ** - Explain: Pre increment
 ** [+]
 ** - Explain: Arethmatic opration [plus]
 ** [+b++]
 ** - Value : 20
 ** - Explain : Unary plus & post increment
 ** [+]
 ** - Explain : Arethmatic operation 
 ** [+c++]
 ** - Value : 80
 ** - Explain : Unary plus & post increment
 ** [-]
 ** - Explain : Arethmatic operation [minus] 
 ** [+a++]
 ** - Value : 11
 ** - Explain : Unary plus & post increment
 */
/**  second one
 ** [++a] [+]
    - Value:
    - Explain:
    [+]
    - Explain:
 * 
*/
/**  third one
 ** [++a] [+]
    - Value:
    - Explain:
    [+]
    - Explain:
 * 
*/
