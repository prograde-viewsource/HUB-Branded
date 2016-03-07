four51.app.directive('traditionalnavigation', function() {
	var obj = {
		restrict: 'E',
		templateUrl: 'partials/controls/traditionalnav.html',
		controller: 'TraditionalNavCtrl'
	};
	return obj;
});

four51.app.directive('accountnavigation', function() {
    var obj = {
        restrict: 'E',
        templateUrl: 'partials/controls/accountnav.html',
        controller: 'NavCtrl'
    };
    return obj;
});

/*four51.app.directive('backStep', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click', function () {
                history.back();
                scope.$apply();
            });
        }
    };
});*/