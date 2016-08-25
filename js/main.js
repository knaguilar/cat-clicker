// var clickOne = 0;
// var clickTwo = 0;

var catNames = ['Keeta', 'Salem', 'Cato', 'Twix', 'Gordi'];
var catImages = ["images/keeta.jpg", "http://placekitten.com/g/400/300", "images/cato.jpg", "http://placekitten.com/g/600/300", "http://placekitten.com/g/500/400"];
var name;

//give each an idea to later be able to control their clicks
for (var i = 0; i < catNames.length; i++) {
	name = catNames[i];
	$('ul').append('<li id="'+ name + '">' + name + '</li>');
	$('.inner-container').append('<img class="cat-image" id="' + name + i + '" src="' + catImages[i] + '" style="display:none;" width="350" height="250">');

	var id = '' + name + (i);
	var chosenCat = document.getElementById(name);

	chosenCat.addEventListener('click', (function(id) {
    return function() {
    	var allCats = document.getElementsByTagName('img');
    	if(allCats) {
    		for (var cat = 0; cat < allCats.length; cat++) {
	    		console.log("This means allCats = " + allCats[cat]);
	    		allCats[cat].style.display = "none";
	    	}
    	}
        document.getElementById(id).style.display = "block";
    };
})(id));
}

// $('#your-cat').click(function() {
//     clickTwo++;
//     $("#click-two").html(clickTwo);
// });

// var myCatName = "Keeta";
// var yourCatName = "Cato";

// $('#cat-one').append(myCatName);
// $('#cat-two').append(yourCatName);
