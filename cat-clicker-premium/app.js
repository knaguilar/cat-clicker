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
			octopus.current = "";
			octopus.currentImg = "";
            listView.init();
            console.log("this is being called once right?");
            octopus.currentCat();
            // detailsView.render();
        },

        //grabs the cat info from the model array
		getList: function(){
			return model;
		},

		showDetails: function() {
			return detailsView.render();
		},
		increaseCounter: function(){
			//tell model to update the click counter for the current cat
			//tell the view to update the counter displayed
		},
		//change cat
		//set current cat
		currentCat: function() {
			for (var i = 0; i < model.length; i++) {
				var cat = model[i];
				var name = cat.name;
				var iden = name + i;
				var pic = cat.imgURL;
				var click = cat.clickCount;
				var chosenCat = document.getElementById(name);

				chosenCat.addEventListener('click', (function(id, image, click) {
				return function() {
					//render the image and info
					detailsView.render(id, image);
    			}; //return
				})(iden, pic, click)); //listener
			} //for loop
		} //current cat
	};

	var listView = {
		//asks the octopus for the cat info
		init: function(){
			var catList = octopus.getList();
			listView.render(catList);
			//list gets populated
		},

		render: function(catList) {
			for (var cat = 0; cat < catList.length; cat++) {
				var catName = catList[cat].name;
				$('ul').append('<li><button id="'+ catName + '">'
					+ catName + '</button></li>');
			}
			//list shows up on screen
		}

	};

	var detailsView = {
		render: function(id, image) {
			//check to make sure another cat isn't displaying
			if(octopus.current !== "" && octopus.currentImg !== ""){
				detailsView.resetView();
			}

			$('.inner-container').append('<img class="cat-image" id="' + id + '" src="'
				+ image + '" style="display:block;" width="350" height="250">');
			octopus.current = id;
			octopus.currentImg = image;
		},
		resetView: function() {
			//removing current cat
			var child = document.getElementById(octopus.current);
			$(child).remove();
			octopus.current = "";
			octopus.currentImg = "";
		}

	};

	octopus.init();