$(function(){
	var model = {
		init: function() {
			[{
				name: 'Salem'.
				clickCount = 0;
				imgURL = 'http://placekitten.com/g/400/300'
			}, {
				name: 'Keeta'.
				clickCount = 0;
				imgURL = 'images/keeta.jpg'
			}, {
				name: 'Twix'.
				clickCount = 0;
				imgURL = 'http://placekitten.com/g/700/500'
			}, {
				name: 'Cato'.
				clickCount = 0;
				imgURL = 'images/cato.jpg'
			}, {
				name: 'Gordi'.
				clickCount = 0;
				imgURL = 'http://placekitten.com/g/600/300'
			}]
		}
	};

	var octopus = {
		init: function() {
            model.init();
            listView.render();
            detailsView.render();
        },

		showList: function(){
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
		init: function(){
			//list gets populated
		},
		render: function() {
			//list shows up on screen
		}

	};

	var detailsView = {
		render: function() {

		}

	};

});