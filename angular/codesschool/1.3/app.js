(function(){
	var app = angular.module("gemStore", []);
	app.controller('storeController', function(){
		this.product =  gem;		
	});

	var gem = {
		name: 'Docecahedron',
		price:2.95,
		description: '...',
	}
})();
