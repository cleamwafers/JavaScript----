console.log(document.querySelector('#colorPicker').value);
document.querySelector('#colorText').textContent ='カラーコード:';
/*<h1>を代入('')に入れてしまうと文字列として表示されてしまう。 */
/*HTMLタグも含めたいならinnerHTMLが使える
document.querySelector('#colorText').innerHTML = '<h1>カラーコード</h1>'
*/