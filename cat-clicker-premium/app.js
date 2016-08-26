	var model =
		[{
			name: 'Salem',
		    clickCount: 0,
		    imgURL: 'http://placekitten.com/g/400/300'
				}, {
					name: 'Keeta',
		    clickCount: 0,
		    imgURL: 'images/keeta.jpg'
				}, {
					name: 'Twix',
		    clickCount: 0,
		    imgURL: 'http://placekitten.com/g/700/500'
				}, {
					name: 'Cato',
		    clickCount: 0,
		    imgURL: 'images/cato.jpg'
				}, {
					name: 'Gordi',
		    clickCount: 0,
		    imgURL: 'http://placekitten.com/g/600/300'
		}];

	var octopus = {
		init: function() {
            listView.init();
            // detailsView.render();
        },

        //grabs the cat info from the model array
		getList: function(){
			return model;
		},

		displayList: function(){
			return listView.render();
		},

		showDetails: function(){
			return detailsView.render();
		},
		increaseCounter: function(){
			//tell model to update the click counter for the current cat
			//tell the view to update the counter displayed
		}
		//change cat
		//set current cat
	};

	var listView = {
		//asks the octopus for the cat info
		init: function(){
			var catList = octopus.getList();
			listView.render();
			//list gets populated
		},

		render: function() {
			for (var cat = 0; cat < catList.length; cat++) {
				$('ul').append('<li><button id="cat'+ cat + '">' + catList[cat].name + '</button></li>');
			}
			//list shows up on screen
		}

	};

	var detailsView = {
		render: function() {

		}

	};

	octopus.init();