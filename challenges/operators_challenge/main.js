/*  Challenge 1 */

let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

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
 ** - Value: 12
 ** - Explain: Pre increment
 ** [+]
 ** - Explain: Arethmatic operation [plus]
 ** [-b]
 ** - Value : -21
 ** - Explain : Unary negation
 ** [+]
 ** - Explain : Arethmatic operation [plus]
 ** [+c++] c
 ** - Value : 81
 ** - Explain : Unary plus & post increment
 ** [-]
 ** - Explain : Arethamtic operation [minus]
 ** [-a++]
 ** - Value : -12
 ** - Explain : Unary minus & post increment
 ** [+]
 ** - Explain : Arethmatic operation [plus]
 ** [+a]
 ** - Value : -10
 ** - Explain : Unary plus
 */
/**  third one
 ** [++a] [+]
    - Value:
    - Explain:
    [+]
    - Explain:
 * 
*/
