

//----------This block is for form validation

$('input[type="text"]').on('blur', function (e) {
	if (!e.target.value) {
		$(this).attr('style', 'border-color:red');
	}
	else {
		$(this).attr('style', '');
	}
})
//-------------------------------------------			
						
// ---------The following code populates the year field with years			
			
document.getElementById('Year').addEventListener('load', loadYears(), false);

function loadYears() {
	for (i = 1920; i <= 1999; i++) {
		var node = document.createElement("OPTION");
		node.innerHTML = '<option value="' + i + '">' + i + '</option>';
		document.getElementById("Year").appendChild(node);
	}
}
//----------------------------------------------------------------
			
//--------This block prevents the submit button from loading a new page
//--------And Then displays the content that was in the form
document.getElementById("Submit").addEventListener('click', displayContent, false);

function displayContent(event) {
	event.preventDefault();
						
	//Get the value that were submitted from the form and store them in variables
	var firstName = $('#firstName').val();
	var middleI = $('#middleI').val();
	var lastName = $('#lastName').val();
	var Month = $('#Month').val();
	var Day = $('#Day').val();
	var Year = $('#Year').val();
	var Male = $('#Male').val();
	var Female = $('#Female').val();
	var School = $('#School').val();
	var Major = $('#Major').val();
	var Gender = $('input[name="gender"]:checked').val();

	$('#FormDetails').text(' ' + firstName + ' ' + middleI + '.' + ' ' + lastName
	+ ' ' + Month + '/' + Day + '/' + Year + ' '
	+ Gender + ' ' + School + ' ' + Major);
}
//---------------------------------------------------------------------
				