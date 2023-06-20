console.log(document.querySelector('#colorPicker').value);
document.querySelector('#colorText').textContent = `カラーコード:${document.querySelector('#colorPicker').value}`;
/*<h1>を代入('')に入れてしまうと文字列として表示されてしまう。 */
/*HTMLタグも含めたいならinnerHTMLが使える
document.querySelector('#colorText').innerHTML = '<h1>カラーコード</h1>'*/
/*テンプレート文字列(テンプレートリテラル):最終的に表示したい内容をバックティック`で囲む。
式や値、次節から登場する変数や定数など、文字列以外のコードは${}で囲む。 */