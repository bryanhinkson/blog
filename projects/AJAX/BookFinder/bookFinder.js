//Using JQuery  Know Type: url: dataContent: and success
$(function () {
	
	//Clears the wishlist when you click on Clear Local Storage
	$('#clear').on('click', function (e) {
		e.preventDefault();
		localStorage.removeItem('wishlist');
		console.log('You cleared the wishlist');
		console.log(localStorage.getItem('wishlist'));
	});

	var titleValues = [];
	var authorValues = [];

	$('#submit').on('click', function (e) {
		e.preventDefault();
		var URL = 'https://www.googleapis.com/books/v1/volumes?q=';
		var title = $('#Title').val();
		var author = $('#Author').val();
		var flag = true;

		//Adds value to the local storage array
				
		
		if (title) {
			URL += title;
			flag = false;
		}
		else if (author) {
			URL += author;
			flag = false;
		}
		// Checks to see if both fields are filled out
		
		if (title && author) {
			flag = true;
		}
		
		// Checks to see if no fields are filled out
		// Displays error if filled out incorrectly
		if (flag == true) {
			$('#errorDisplay').html('<p style="color:red;">You need to enter in a Title or Author but not both.</p>');
		}
		else {
			$('#errorDisplay').html('');
		}



		if (flag == false) {
			$.ajax({
				type: 'GET',
				url: URL,
				dataContent: 'JSON',
				success: function (data) {

					var numBooks = [];
					for (var mainKey in data.items) {
						for (var item in mainKey) {
							numBooks.push(item);
						}

					}
					var itemsDisplayed = numBooks.length;
					var itemCount = data.totalItems;

					$('#Display').append('<h2>Displaying ' + itemsDisplayed + ' of ' + itemCount + ' results</h2><br />');

					for (var i = 0; i < itemsDisplayed; i++) {
						var title = data.items[i].volumeInfo.title;
						var image = data.items[i].volumeInfo.imageLinks.thumbnail;
						var numAuthors = data.items[i].volumeInfo.authors.length;
						
						//This block handles there being a different amount of authors.
						var authors = '';
						if (numAuthors == 0) {
							authors = null;
						}
						else {
							for (var j = 0; j < numAuthors; j++) {
								if (j == 0) {
									authors = data.items[i].volumeInfo.authors[j];
								}
								else {
									authors += ', ' + data.items[i].volumeInfo.authors[j];
								}
							} //End for(var j=0; j<numAuthors; j++){
						} //End else {
						
						var description = data.items[i].volumeInfo.description;
						var infoLink = data.items[i].volumeInfo.infoLink;


						$('#Display').append(
							'<div class="row">' +
							'<div class="col-xs-12">' +
							'<div class="col-xs-2">' +
							'<img src="' + image + '" alt="' + title + '">' +
							'</div>' +
							'<div class="col-xs-8">' +
							'<h4>' + title + '<audio src="http://tts-api.com/tts.mp3?q=' + title + '"</audio></h4>' +
							'<p>' + authors + '</p>' +
							'<p>Description: ' + description + '</p>' +
							'<br /><a href="' + infoLink + '">Google Books</a>' +
							'</div>' +
							'<div class="col-xs-2">' +
							'<button class="btn btn-warning wishList"><b>+</b> Add to wish list</button>' +
							'</div>' +
							'</div>' +
							'</div><hr />');
					}
					
					// Checks to see if there is already something in localStorage
					if (!window.localStorage.getItem('titles')) {
						localStorage.setItem("titles", JSON.stringify(titleValues));
					}

					titleValues = JSON.parse(localStorage.getItem("titles")); //Gets array from localstorage
					titleValues.push($('#Title').val()); //Adds the new value
					localStorage.setItem("titles", JSON.stringify(titleValues)); //Sets the array (with new value) to local storage
					
					if (!window.localStorage.getItem('authors')) {
						localStorage.setItem("authors", JSON.stringify(authorValues));
					}

					authorValues = JSON.parse(localStorage.getItem("authors")); //Gets array from localstorage
					authorValues.push($('#Author').val()); //Adds the new value
					localStorage.setItem("authors", JSON.stringify(authorValues)); //Sets the array (with new value) to local storage

				} //end of success
			}); //end of $.ajax({	
		} //End of if(flag == false){		
	}); //end of event listener $('#submit').on('click', function (e) {
	
	//The following two lines are for auto-complete using jQuery UI
	$('#Title').autocomplete({ source: JSON.parse(localStorage.getItem("titles")) });
	$('#Author').autocomplete({ source: JSON.parse(localStorage.getItem("authors")) });
	
	//This makes the title read it allowed when clicked on
	$('#Display').on('click', 'h4', function () {
		$(this).children().trigger('play');
	});
	
	//This adds Items to the wish list (just captures the Title and Author(s))
	$('#Display').on('click', '.wishList', function (e) {
		var title = e.target.parentNode.previousSibling.firstChild.textContent;
		var authors = e.target.parentNode.previousSibling.firstChild.nextSibling.textContent;
		var wishListItems = [];

		if (!window.localStorage.getItem('wishlist')) {
			wishListItems = [title, authors];
			window.localStorage.setItem('wishlist', JSON.stringify(wishListItems));
		}
		else {
			wishListItems = JSON.parse(window.localStorage.getItem('wishlist')); //get the previous array from local storage
			wishListItems.push(title, authors); // add on the new title and author to the array
			window.localStorage.setItem('wishlist', JSON.stringify(wishListItems)); //Put the new array back in local storage
		}

		console.log(JSON.parse(localStorage.getItem('wishlist')));
	}); //end of event listener for the Add to wishlist button

	$('#viewWishlist').on('click', function () {
		$('#wishlistResults').html(''); // Clears out the HTML
		var wishlist = JSON.parse(window.localStorage.getItem('wishlist'));
		if (wishlist) {
			var wishlistLength = wishlist.length;

			for (var i = 0; i < wishlistLength; i += 2) {
				$('#wishlistResults').append(
					'<h4>Title: ' + wishlist[i] + '</h4>'
					);

				$('#wishlistResults').append(
					'Author: ' + wishlist[i + 1] + '<br /><br />'
					);
			}//End for loop
		}//End if (wishlist) {


	}); //End event listener for View wishlist $('#viewWishlist').on('click', function () {


}); //end checking if document is loaded $(function () {