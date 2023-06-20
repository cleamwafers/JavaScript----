console.log(document.querySelector('#colorPicker').value);
document.querySelector('#colorText').textContent = document.querySelector('#colorPicker').value;
/*<h1>を代入('')に入れてしまうと文字列として表示されてしまう。 */
/*HTMLタグも含めたいならinnerHTMLが使える
document.querySelector('#colorText').innerHTML = '<h1>カラーコード</h1>'
*/