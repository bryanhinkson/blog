var button = document.getElementById('generate');
var creator = document.getElementById('creator');
creator.innerHTML = "<hr />";
var questionCount = 0;

document.getElementById('reset').addEventListener('click', function(e){
	e.preventDefault();
	if(confirm('Are you sure you want to start over?  This will delete all work done so far?')){
		creator.innerHTML = '';
	}
});

button.addEventListener('click', function (e) {
	e.preventDefault();
	var numQuestions = document.getElementById('numQuestions').value;
	if(numQuestions <= 100){
		for (var i = 1; i <= numQuestions; i++) {
			questionCount++;
			creator.innerHTML += '<div id="q' + questionCount + '">' +
			'<strong>Question ' + questionCount + '</strong>' + '<br />' +
			'What type of question do you want? <br />' +
			'<form>' +	
				'<input id="Question ' + questionCount + '" type="radio" name="type" value="MC">' +
				'Multiple Choice<br />' +
				
				'<input id="Question ' + questionCount + '" type="radio" name="type" value="TF">' +
				'True/False<br />' +
		
				'<input id="Question ' + questionCount + '" type="radio" name="type" value="MA">' +
				'Select All that apply(Multiple Answer)<br />' +
		
				'<input id="Question ' + questionCount + '" type="radio" name="type" value="FR">' +
				'Free Response<br />' +
		
				'<input id="Question ' + questionCount + '" type="radio" name="type" value="SA">' +
				'Short Answer<br />' +	
			'</form>' +
			'</div><hr />';
		}
	}
	else if(numQuestions > 100 && numQuestions <=200) {
		alert("The Maximum amount of questions you can have is 100.");
	}
	else if(numQuestions > 200) {
		alert("Really...Seriously????  Nobody wants to answer that many questions!");
	}
});

	creator.addEventListener('click', function (e) {
			if(e.target.value == 'MC'){
				e.target.parentNode.parentNode.innerHTML = '<strong>' + e.target.id + '</strong>' + '<br />' +
				'<form>' +
				
						'<br /><p contenteditable = "true"> <strong>InsertQuestionHere</strong> </p><br />' +
				
						'<input id="' + e.target.id +'Option1" type="radio" name="type" value="A"> A. ' +
						'<label contenteditable = "true">ClickToEdit</label><br />' +
						
						'<input id="' + e.target.id +'Option2" type="radio" name="type" value="B"> B. ' +
						'<label contenteditable = "true">ClickToEdit</label><br />' +
				
						'<input id="' + e.target.id +'Option3" type="radio" name="type" value="C"> C. ' +
						'<label contenteditable = "true">ClickToEdit</label><br />' +
				
						'<input id="' + e.target.id +'Option4" type="radio" name="type" value="D"> D. ' +
						'<label contenteditable = "true">ClickToEdit</label><br />' +
				
						'<input id="' + e.target.id +'Option5" type="radio" name="type" value="E"> E. ' +
						'<label contenteditable = "true">ClickToEdit</label><br />' +		
				'</form>';				
			}
			
			else if(e.target.value == 'TF'){
				e.target.parentNode.parentNode.innerHTML = '<strong>' + e.target.id + '</strong>' + '<br />' +
				'<form>' +				
						'<br /><p contenteditable = "true"> <strong>InsertQuestionHere</strong> </p><br />' +
				
						'<input id="' + e.target.id +'Option1" type="radio" name="type" value="True">' +
						'<label>True</label><br />' +
						
						'<input id="' + e.target.id +'Option2" type="radio" name="type" value="False">' +
						'<label>False</label><br />' +	
				'</form>';				
			}
			
			else if(e.target.value == 'MA'){
				e.target.parentNode.parentNode.innerHTML = '<strong>' + e.target.id + '</strong>' + '<br />' + 
				'<form>' +				
						'<br /><p contenteditable = "true"> <strong>InsertQuestionHere</strong> </p><br />' +
					
					'<div>' +
						'<div>' +
							'<input type="checkbox" name="type" value="">' +
							'<label contenteditable = "true">ClickToEdit</label><br />' +
							
							'<input type="checkbox" name="type" value="">' +
							'<label contenteditable = "true">ClickToEdit</label><br />' +	
						'</div>' +					
						'<button class="btn btn-success" value="addOption">Add Option</button>' +
					'</div>' +
				'</form>';
			}
			
			else if(e.target.value == 'FR'){
				e.target.parentNode.parentNode.innerHTML = '<strong>' + e.target.id + '</strong>' + '<br />' + 
				'<br /><p contenteditable = "true"> <strong>InsertQuestionHere</strong> </p><br />' +
				'<textarea rows="2" class="col-xs-12">' + 
				'</textarea><br /><br />';
			}
			
			else if(e.target.value == 'SA'){
				e.target.parentNode.parentNode.innerHTML = '<strong>' + e.target.id + '</strong>' + '<br />' + 
				'<br /><p contenteditable = "true"> <strong>InsertQuestionHere</strong> </p><br />' +
				'<input class="col-xs-12" type="text" name="" value=""><br />';
			}
			
			if(e.target.value == 'addOption'){
				e.preventDefault();
				e.target.parentNode.firstChild.innerHTML += '<input type="checkbox" name="type" value="">' +
							'<label contenteditable = "true">ClickToEdit</label><br />';
			}
	});
	
	

	
	
	
	document.getElementById('addQuestion').addEventListener('click', function(e){
		questionCount++;
		creator.innerHTML += '<div id="q' + questionCount + '">' +
		'<strong>Question ' + questionCount + '</strong>' + '<br />' +
		'What type of question do you want? <br />' +
			'<form>' +	
				'<input id="Question ' + questionCount + '" type="radio" name="type" value="MC">' +
				'Multiple Choice<br />' +
				
				'<input id="Question ' + questionCount + '" type="radio" name="type" value="TF">' +
				'True/False<br />' +
		
				'<input id="Question ' + questionCount + '" type="radio" name="type" value="MA">' +
				'Select All that apply(Multiple Answer)<br />' +
		
				'<input id="Question ' + questionCount + '" type="radio" name="type" value="FR">' +
				'Free Response<br />' +
		
				'<input id="Question ' + questionCount + '" type="radio" name="type" value="SA">' +
				'Short Answer<br />' +	
			'</form>' +
			'</div><hr />';
});

document.getElementById('submit').addEventListener('click', function(e){
	
	e.preventDefault();
	alert('The form was submitted successfully!!!');
	
});