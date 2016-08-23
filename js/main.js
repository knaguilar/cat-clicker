var clickOne = 0;
var clickTwo = 0;

$('#my-cat').click(function() {
	clickOne++;
  	$("#click-one").html(clickOne);
});

$('#your-cat').click(function() {
    clickTwo++;
    $("#click-two").html(clickTwo);
});

var myCatName = "Keeta";
var yourCatName = "Cato";

$('#cat-one').append(myCatName);
$('#cat-two').append(yourCatName);
