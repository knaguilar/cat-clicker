var catNames = ['Keeta', 'Salem', 'Cato', 'Twix', 'Gordi'];
var catImages = ["images/keeta.jpg", "http://placekitten.com/g/400/300", "images/cato.jpg", "http://placekitten.com/g/600/300", "http://placekitten.com/g/500/400"];
var name, titleId;

for (var i = 0; i < catNames.length; i++) {
	name = catNames[i];
	titleId = "title" + i;
	clickId = "click" + i;

	$('ul').append('<li id="'+ name + '">' + name + '</li>');
	$('.inner-container').append('<h2 id ="' + titleId + '"style="display:none">' + name + '</h2>');
	$('.inner-container').append('<img class="cat-image" id="' + name + i + '" src="' + catImages[i] + '" style="display:none;" width="350" height="250">');
	$('.inner-container').append('<p id="' + i + '" style="display:none">Clicks: <a id="' + clickId +'"></a></p>');
	$('#' + clickId).html('0');
	var id = '' + name + i;
	var chosenCat = document.getElementById(name);
	var titles = document.getElementsByTagName('h2');
    var allCats = document.getElementsByClassName('cat-image');
    var likes = document.getElementsByTagName('p');

	chosenCat.addEventListener('click', (function(id, titleId, clickId, i) {
    return function() {
		//function that hides all previous content  eg. cat name, image and clicker
		reset(allCats);
    	reset(titles);
    	reset(likes);

		document.getElementById(id).style.display = "block";
        document.getElementById(titleId).style.display = "block";
        document.getElementById(i).style.display = "block";

        var clicks = Number($('#' + clickId).text());
        $('#' + id).click(function() {
	    	clicks++;
	        $('#' + clickId).html(clicks);
	    });
    };
})(id, titleId, clickId, i));
}

function reset (group) {
	for (var head = 0; head < group.length; head++) {
    		if(group[head].style.display = "block") {
    			group[head].style.display = "none";
    		}
    	}
}
