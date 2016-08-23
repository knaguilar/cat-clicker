var clickOne = 0;

$('#my-cat').click(function() {
	clickOne++;
  	$("#click-one").html(clickOne);
});

$('#cat-one').append(myCatName);
