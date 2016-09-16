(function () {
'use strict';

	angular.module('ShoppingListCheckOff', [])
		.controller('ToBuyShoppingController', ToBuyShoppingController)
		.controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
		.service('ShoppingListCheckOffService', ShoppingListCheckOffService)
		;

	ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
	function ToBuyShoppingController(ShoppingListCheckOffService) {

		var toBuy = this;

		toBuy.items = ShoppingListCheckOffService.getToBuyItems();

		toBuy.transferItem = function (itemIndex) {
		    ShoppingListCheckOffService.transferItem(itemIndex);
		};

		/*
		toBuy.toBuyMessage = function () {
			if (toBuy.items.length == 0) {
				return true;
			}
			else {
				return false;
			}
		}*/

	}

	AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
	function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {

		var alreadyBought = this;

		alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();

		/*
		alreadyBought.alreadyBoughtMessage = function () {
			if (alreadyBought.items.length == 0) {
				return true;
			}
			else {
				return false;
			}
		}*/

	}

	function ShoppingListCheckOffService() {

		var service = this;

		var toBuyList = [
		    {
		    	name: "Water",
		    	quantity: "2"
		    },
		    {
		    	name: "Donuts",
		    	quantity: "2"
		    },
		    {
		    	name: "Cookies",
		    	quantity: "3"
		    },
		    {
		    	name: "Chocolate",
		    	quantity: "5"
		    },
		    {
		    	name: "Honey",
		    	quantity: "7"
		    },
		    {
		    	name: "Mayonnaise",
		    	quantity: "15"
		    }
		];

		var alreadyBought = [];

		service.getToBuyItems = function () {
		    return toBuyList;
		};

		service.getAlreadyBoughtItems = function () {
		    return alreadyBought;
		};
		
		service.transferItem = function (itemIdex) {

			var it = {
		        name: toBuyList[itemIdex].name,
		        quantity: toBuyList[itemIdex].quantity
		    };

		    toBuyList.splice(itemIdex, 1);
		    alreadyBought.push(it);

		};


	}




})();