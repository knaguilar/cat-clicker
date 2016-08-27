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
            octopus.currentCat();
        },

        //grabs the cat info from the model array
		getList: function(){
			return model;
		},

		getCount: function(i){
			return model[i].clickCount;
		},

		updateCount: function(count, i){
			model[i].clickCount = count;
		},

		increaseCounter: function(name, count, i){
			var displayCat = document.getElementById(octopus.current); //cat image id
			displayCat.addEventListener('click', (function(name, count) {
				return function() {
					count++;
					//tell model to update the click counter for the current cat
					octopus.updateCount(count, i);
					//tell the view to update the counter displayed
					detailsView.renderClicks(name, count);

    			}; //return
				})(name, count));
		},

		//set current cat
		currentCat: function() {
			for (var i = 0; i < model.length; i++) {
				var cat = model[i];
				var name = cat.name;
				var iden = name + i;
				var pic = cat.imgURL;
				var chosenCat = document.getElementById(name);

				chosenCat.addEventListener('click', (function(name, iden, pic, i) {
				return function() {
					//render the image and info
					var count = octopus.getCount(i);
					detailsView.render(name, iden, pic, count);
					octopus.increaseCounter(name, count, i);

    			}; //return
				})(name, iden, pic, i)); //listener
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
		render: function(name, iden, pic, count) {
			//check to make sure another cat isn't displaying
			if(octopus.current !== "" && octopus.currentImg !== ""){
				detailsView.resetView();
			}

			$('.inner-container').append('<h2>' + name + '</h2><img class="cat-image" id="' + iden + '" src="'
				+ pic + '" width="350" height="250"><p>Clicks: <a id="click' + name +'">' + count + '</a></p>');
			octopus.current = iden;
			octopus.currentImg = pic;
		},
		renderClicks: function(name, count) {
			$('#click' + name).html(count);
		},
		resetView: function() {
			//removing current cat
			var child = document.getElementById(octopus.current);
			$(child).remove();
			$('h2').remove();
			$('p').remove();
			octopus.current = "";
			octopus.currentImg = "";
		}

	};

	octopus.init();