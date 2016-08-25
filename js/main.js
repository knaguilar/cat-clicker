// var clickOne = 0;
// var clickTwo = 0;

var catNames = ['Keeta', 'Cato', 'Salem', 'Twix', 'Gordi'];
var name;

//give each an idea to later be able to control their clicks
for (var i = 0; i < catNames.length; i++) {
	name = catNames[i];
	$('ul').append('<li id="'+ name + '">' + name + '</li>');
}

	// $('ul').append('<img src="images/keeta.jpg" width="350" height="250">');






// $('#my-cat').click(function() {
// 	clickOne++;
//   	$("#click-one").html(clickOne);
// });

// $('#your-cat').click(function() {
//     clickTwo++;
//     $("#click-two").html(clickTwo);
// });

// var myCatName = "Keeta";
// var yourCatName = "Cato";

// $('#cat-one').append(myCatName);
// $('#cat-two').append(yourCatName);
