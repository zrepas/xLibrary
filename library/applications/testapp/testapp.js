/**
*	TestApp.js
*	require: hbs, jquery, handlebars
*	elsodleges cel a tesztelese az eszkozeimnek es MVC mukodes osszeollozasa
*	2015-06-05
*	Répás Zoltán
**/

define(function () {
	var ENTER_KEY = 13;
	var ESCAPE_KEY = 27;
	var App = {
		init: function (data) {
			var self = this;
			dataset = {
				data1: {
					ajax: false,
					adjective: "kommentek vannak, ketten", 
					comments: [
						{
							title: "My First Blog Post!",
							author: {
							id: 47,
							name: "Yehuda Katz"
							},
							body: "My first post. Wheeeee!"
						},
						{
							title: "My First Blog Post!",
							author: {
							id: 47,
							name: "Yehuda Katz"
							},
							body: "My first post. Wheeeee2!"
						},
					],
					comment: "ez van a commentek helyett.", 
				},
				data2: {
					ajax: false,
					adjective: "kommentek nincsenek", 
					comment: "ez van a commentek helyett.", 
				},
				data3: {
					ajax: true,
					url: "http://webservice.primelife.hu/Serenity/LMWebAPI/GetHotelsList/",
					request: {
						adult: 2,
						agent: 348275315,
						board: 0,
						categories_id: 3,
						category: 3,
						child: [],
						cid: 196,
						departure: "VIE",
						end: "2015-12-18",
						nights: 8,
						order: "asc",
						page: 0,
						room: 0,
						sorting: "price",
						start: "2015-12-10",
						traveltype: 2
					}
				}
			};
			
			if (dataset[data.dataset].ajax == true){
				$.ajax({
					type: 'POST',
					url: dataset[data.dataset].url,
					data: dataset[data.dataset].request,
					success: function(response){
						data.vars = response;
						self.set(data);
					}
				});
				
			} else {
				data.vars = dataset[data.dataset];
				self.set(data);
			}
		},
		set: function (data) {
			console.log("SET!");
			console.log(data);
			
			require(['hbs!applications/testapp/tests/'+data.template], function (tmplOne) {
				var template = tmplOne(data.vars);
				console.log(ESCAPE_KEY);
				$(template).appendTo(data.container);
			});
		}
	};
	return App;
});
