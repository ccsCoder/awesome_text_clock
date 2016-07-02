

$(function() {
	//grab the template script
	var templScript = $("#address-template").html();
	//compile
	var template = Handlebars.compile(templScript);

	//get the data object promise.
	var gettingData = $.Deferred();
	gettingData.then(function(data) {
		var compiledHTML = template(data);
		//add compiled html to page
		$(".address-holder").html(compiledHTML);
	}, function(failedData){
		alert("OOPS! Shit happens");
	});

	gettingData.resolve({

		// "description": {
		// 	"escaped": "Using {{}} brackets will result in escaped HTML",
		// 	"unescaped": "Using {{{}}} will leave the context as it is"	
		// },
		// "example": "<button>Click Me to Update Address</button>"
	    // "city": "London",
	    // "street": "Baker Street",
	    // "number": "221B"
	    // 
	    people: [ 
		      { firstName: 'Homer', lastName: 'Simpson' },
		      { firstName: 'Peter', lastName: 'Griffin' },
		      { firstName: 'Eric', lastName: 'Cartman' },
		      { firstName: 'Kenny', lastName: 'McCormick' },
		      { firstName: 'Bart', lastName: 'Simpson' }
	    ]
	});
	

});
