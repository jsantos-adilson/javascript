var a = 3 /* atribuição */

/* o "var" permite a redeclaração da variável, o "let" não */
var a = 30
let b = 4

/* let b = 40  saída da IDE: Não é possível declarar novamente a variável de escopo de bloco 'b'.ts(2451)
 */

/* constantes */

const c = 10 /* atribuições não permitidas */

console.log(a, b, c) /* saída no terminal */