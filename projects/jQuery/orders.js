$(function() {
	
//Creates a counter variable for the ID
var OrderID = 1;
var Total = 0;

//Event handler that adds a row when clicked
$('input[type="submit"]').on('click', function(e){
	//Prevents the form from being submitted
	e.preventDefault();

	//Finds the values of the text fields
	var product = $('#productNum').val();
	var description = $('#description').val();
	var price = $('#price').val();
	
	if($.isNumeric(product) && $.isNumeric(price) && description != ''){
	
		removePreviousSuccess();
		
		//Adds a row to the table //class="success" to make it green
		$('table').append(
			'<tr class="success">' + 
			'<td><button class="btn btn-danger">Delete</button></td>' + 
			'<td>' + OrderID + '</td>' + 
			'<td>' + product + '</td>' + 
			'<td>' + description + '</td>' + 
			'<td>' + price + '</td>' + 	
			'<tr>');
		
		OrderID++;
		
		//Calculates the total
		Total += Number(price);
		$('#Total').text(Total.toFixed(2));	
	}
});

//Removes the buttons and takes adjusts the Total
$('table').on('click','.btn', function(e){
	var price = e.target.parentNode.parentNode.lastChild.textContent;
	e.target.closest('tr').remove();
	Total -= Number(price);
	$('#Total').text(Total);
});

//Removes the class "success" from all elements
function removePreviousSuccess(){
	$('.success').removeClass('success');
}


});