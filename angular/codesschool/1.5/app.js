(function(){
	
	var app = angular.module("gemStore", []);
	app.controller('storeController', function(){
		this.products =  gems;		
	});

	var gems = [
	{
		name: 'Docecahedron',
		price:2.95,
		description: '...',
		canPurchase:false,
	},
	{
		name: 'Docecahedron2',
		price:3.95,
		description: '...',
		canPurchase:true,
	}
	]
})();
