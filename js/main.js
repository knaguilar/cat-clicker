// var clickOne = 0;
// var clickTwo = 0;

var catNames = ['Keeta', 'Cato', 'Salem', 'Twix', 'Gordi'];
var name;

//give each an idea to later be able to control their clicks
for (var i = 0; i < catNames.length; i++) {
	name = catNames[i];
	$('ul').append('<li id="'+ name + '">' + name + '</li>');
	$('.inner-container').append('<img id="' + name + i + '" src="images/keeta.jpg" style="display:none;" width="350" height="250">');

	var id = '' + name + (i);
	$('#' + name).click(function() {
		document.getElementById(id).style.display = "block";
	});
}


//maybe add a switch?

// 	addEventListener('click', (function(numCopy) {
//     return function() {
//         alert(numCopy)
//     };
// })(num));

// $('#your-cat').click(function() {
//     clickTwo++;
//     $("#click-two").html(clickTwo);
// });

// var myCatName = "Keeta";
// var yourCatName = "Cato";

// $('#cat-one').append(myCatName);
// $('#cat-two').append(yourCatName);
