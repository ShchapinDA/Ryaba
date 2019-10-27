const dataURL = "https://api.myjson.com/bins/jcmhn";

function handleButton() {
  $.getJSON(dataURL,handleData); //беру данные по ссылке и передаю в функцию handleData
}

function handleData(data) {
	let finalMessage = "";

	let var1 = $("input[name=var1]")[0].value;
	let var2 = $("input[name=var2]")[0].value;
	let var3 = $("input[name=var3]")[0].value;
	let var4 = $("input[name=var4]")[0].value;
	let var5 = $("input[name=var5]")[0].value;
	let var6 = $("input[name=var6]")[0].value;
	let speach = $("input[name=speach]")[0].value;

	data["text"].forEach(function(item,index) {

		item = item.replace("{var1}",var1);
		item = item.replace("{var2}",var2);
		item = item.replace("{var3}",var3);
		item = item.replace("{var4}",var4);
		item = item.replace("{var5}",var5);
		item = item.replace("{var6}",var6);
		item = item.replace("{speach}",speach);

		finalMessage = finalMessage + item + "<br>";
	});
  	$("div#result").html(finalMessage); //вписываю содержимое finalMessage в result
 }


function init() {
	$("#button-fetch").click(handleButton); //нахожу кнопку по id и по клику выполняю фукцию handleButton
}

$(document).ready(init); //запускаем функцию при полной загрузке страницы


/*
{
	"text": [
		"Жили-были {var1} да {var2}",
		"Была у них {var3}",
		"Снесла {var3} {var4}, не простое - золотое",
		"- {var1} бил, бил - не разбил",
		"- {var2} била, била - не разбила",
		"{var5} бежала, {var6} задела, {var4} упало и разбилось.",
		"{var1} плачет, {var2} плачет, а {var3} кудахчет:",
		"{speach}"
	]
}
*/
