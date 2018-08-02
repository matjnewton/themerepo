(function () {
    "use strict";
    var wqs_3 = angular.module("wqs_3", ['ngAnimate','angular.filter',]);


// config
    wqs_3.config(['$httpProvider', function( $httpProvider) {
              $httpProvider.defaults.useXDomain = true;
              //$httpProvider.defaults.withCredentials = true;
              delete $httpProvider.defaults.headers.common["X-Requested-With"];
              $httpProvider.defaults.headers.common["Accept"] = "application/json";
              $httpProvider.defaults.headers.common["Content-Type"] = "application/json; charset=UTF-8";
         }
    ]);


// controler
    wqs_3.controller('wqs_search_controller', function ($scope, $http, $q, dataService, dataServiceAjax, dataServiceAjaxmore, $timeout, $filter) {



    $scope.scripts = [];
 
    $scope.runscript = function() {
        $scope.scripts = [
            "jQuery(function($) { jQuery('#startTime').daterangepicker({locale: {format: 'YYYY-MM-DD'},singleDatePicker: true,select: Array("+$scope.selects+"), }); jQuery('#endTime').daterangepicker({locale: {format: 'YYYY-MM-DD'},singleDatePicker: true,select: Array("+$scope.selects+"), }); });"

             ];
    };



	// load cpt product
	    // var wqs_api_url = jQuery('#wqs_api_url').val(); 
	    //   $http.get(wqs_api_url)
	    //     .then(function(response){
	    //     	var cpt_product ={};
	    //     	cpt_product = response.data;
	    //         $scope.cpt_product = response.data;
	    //         return cpt_product;
	    // });

	// var
		var data = {};
        var promises = [];
		var promises_click = [];
		var wqs_productcode = $('#wqs_productcode').val();
		$scope.wqs_productcode = wqs_productcode;
		
		//enable group tour function 
		var rezdy_group_tours = js_var.rezdy_group_tours;
		if (rezdy_group_tours) {
			$scope.rezdy_group_tours = true;
		} else {
			$scope.rezdy_group_tours = false;
		}

		// load new cpt product
		//var wqs_api_url = jQuery('#wqs_api_url').val();
	    var wqs_api_url = js_var.wqs_api_url; 
		var getCPT = function() { 
	    	var deferred = $q.defer();
		    $http.get(wqs_api_url)
		        .then(function(response){
		        	deferred.resolve(response.data);
		    });
		    return deferred.promise;
		}

	    $q.all([getCPT()]).then(function(value) {
	        $scope.cpt_product = value[0]; 
    		console.log('promis cpt load');
    		
    		//LOCAL! load group
			//if (rezdy_group_tours) { $scope.LoadGroup();}
			
			// $scope.message();
			// $scope.messageGroup();
            console.log($scope);
            
            //console.log($scope);     
	    }, function(reason) {
	        $scope.cpt_product = reason;
		});



		// load group id
		var group_cpt_id = jQuery('#group_cpt_id').val();
		$scope.group_cpt_id = group_cpt_id;
		//console.log(group_cpt_id);

	    //group product 
	    $scope.group = function(cptproducts, api_availability,timearrays, group_cpt_id) {
	    	var groups = [];
	    	var groups_id = [];
	    		//console.log('start group');
		    	angular.forEach(api_availability, function(products, key) {
		    		//console.log('forEach api_availability');console.log(key);
			    	angular.forEach(products, function(productss, key) {
			    		//console.log('productss');console.log(productss);
			    		//console.log('productss.startTimeLocal');console.log(productss.startTimeLocal);
			    		if (  $filter('asDate')(productss.startTimeLocal)  == $filter('asDate')(timearrays) ) {
					    	angular.forEach(cptproducts, function(cptproductss, key) {
					    		//console.log(cptproductss);
						         angular.forEach(cptproductss.productcode_group, function(group_codes, key) {
						         	//console.log(group_codes);
						         	if (group_codes == productss.productCode && cptproductss.id == group_cpt_id) {
						         		groups.push({ cpt_id : cptproductss.id, seats : productss.seatsAvailable, code : productss.productCode, time : $filter('asDate')(timearrays), product : productss, term : cptproductss.term.term_id, });
						         		groups_id.push(cptproductss.id);
						         	}
								 });
								 
							 });
						}
				    });
				 });	    	

	  //   	console.log('groups load');
	  //   	console.log(timearrays);
			// console.log(groups);

			console.log($scope);
			return groups;
		}
		//group Load
		$scope.LoadGroup = function(){
		    var obj = {};
			angular.forEach($scope.timearray, function(time, key) {
				obj[time] = $scope.group($scope.cpt_product, $scope.api_availability,time, group_cpt_id);
				obj['allseats'] = '';
	        });
	        $scope.groupsTimeArray_ = obj;
			$scope.getGroupSeats(group_cpt_id, $scope.timearray[0]);
		}

		// get all seats for group
		$scope.getGroupSeats = function(cpt_id, timearrays) {
			var allseats = 0;
			angular.forEach($scope.groupsTimeArray_, function(group, key) {
				//console.log(key);console.log(timearrays);
				if(key == timearrays){
					//console.log(key);
					angular.forEach(group, function(thisgroup) {
						//if(thisgroup.cpt_id == cpt_id){
							console.log(thisgroup);
							allseats += thisgroup.seats;
						//}
					});

				}

			});
			$scope.groupsTimeArray_allseats = allseats;
			return allseats;
		}

		$scope.select = function() {
			var ss = [];
			                    angular.forEach( $scope.api_availability , function(products, key) {
                            		angular.forEach( products , function(productss, key) {
                            			if($scope.wqs_productcode == productss.productCode && productss.seatsAvailable != 0) {
                            				ss.push('"'+$filter('date')(new Date(productss.startTime), 'yyyy-MM-dd', 'UTC')+'"');
                            			}
                            		});
                            	});

			return ss;
		}
	// load api key
        //console.log(js_var.apikey);

    // enable load animations
         $scope.loading = true;

    // load rezdy category
    	//console.log(js_var.rezdy_cat_id);
    	var rezdy_cat_id = js_var.rezdy_cat_id;
    	var rezdy_category = '';
    	if (rezdy_cat_id) {
    		rezdy_category = '/categories/'+rezdy_cat_id;
    	} else {
    		rezdy_category = '';
    	}
	
	// get rezdy product list  
	    $http.get('https://cors-anywhere.herokuapp.com/https://api.rezdy.com/v1'+rezdy_category+'/products?limit=100&apiKey='+js_var.apikey+'')
		// load api_products
	    .then(function(response){
	        var api_products = {};
	        api_products = response.data;
	        $scope.api_products = api_products;
	        return api_products;
		// load available use factory dataService.getData
	    }).then(function(api_products){
	         angular.forEach(api_products.products, function(products, key) {
	         	//var wqs_productcode = $('#wqs_productcode').val();
	            var promiseObj=dataService.getData(products.productCode);
	            promiseObj.then(function(value) { 
	            });
	            promises.push(promiseObj);
	        });
          
		// promise api_availability
	        $q.all(promises).then(function(e){
	          $scope.api_availability = e;
				$timeout(function(){
		            $scope.loading = false;
		        },2000);

				$scope.selects = $scope.select();
				$scope.runscript();
				$scope.initAvailable();
				if (rezdy_group_tours) { $scope.LoadGroup();}
	        });

	    }); //end then
		console.log($scope);
    // end auto load part

	$scope.initAvailable = function() {
		//console.log('initAvailable crossfix');
		// init seats available for first time
			$scope.timeSelected = '';
			angular.forEach($scope.api_availability, function(api_availability, key) {
	        	angular.forEach(api_availability, function(api_availability2, key) {
	        			var index = 0;
	        			//console.log('api_availability2.startTimeLocal = ');console.log(moment(api_availability2.startTimeLocal).format('YYYY-MM-DD'));
	        			//console.log('$scope.timearray+moment = ');console.log(moment($scope.timearray[0]).format('YYYY-MM-DD'));
	        			//if ( $scope.wqs_productcode==api_availability2.productCode &&  $filter('date')(new Date(api_availability2.startTimeLocal), 'yyyy-MM-dd')==$filter('date')(new Date($scope.timearray), 'yyyy-MM-dd') ){ //crossfix
	        			if ( $scope.wqs_productcode==api_availability2.productCode &&  moment(api_availability2.startTimeLocal).format('YYYY-MM-DD') == moment($scope.timearray[0]).format('YYYY-MM-DD') ){ //crossfix
	        				//console.log('api_availability2.startTimeLocal');console.log(moment(api_availability2.startTimeLocal).format('YYYY-MM-DD'));
	        				//console.log('$scope.timearray[0]');console.log(moment($scope.timearray[0]).format('YYYY-MM-DD'));
	        				$scope.timeSelected = api_availability2.seatsAvailable;
	        			}
	        			


	        	 });
	        });
	}
	

	$scope.productUndefined = function() {
		var undefinedd;

		angular.forEach($scope.api_availability, function(api_availability, key) {
        	angular.forEach(api_availability, function(api_availability2, key) {

          			if ($scope.wqs_productcode===api_availability2.productCode) {
						undefinedd = true;
        			} else {
						
        			}
        	 });
        });
        //console.log(undefinedd);
        return undefinedd;
	}

	$scope.changedValue = function(item,timearray){ 
		$scope.loading = true;      
	    //console.log('item');console.log(item);
		//console.log('timearray');console.log(timearray);
	   angular.forEach($scope.api_availability, function(api_availability, key) {
	        	angular.forEach(api_availability, function(api_availability2, key) {
	        			if ($scope.wqs_productcode==api_availability2.productCode && $filter('date')(new Date(api_availability2.startTimeLocal)) == $filter('date')(new Date(timearray)) ) {
	        				//console.log(api_availability2);
	        				angular.forEach(api_availability2.priceOptions, function(priceOptions, key) {
	        					//console.log(priceOptions.id);
	        					if(priceOptions.id ==item) {
	        						$scope.timeSelected = api_availability2.seatsAvailable/priceOptions.seatsUsed;
	        					}
	        				});
	        				
	        			}
	        	 });
	        });

	   // $scope.timeSelected = item;
	   //console.log($scope.timeSelected);
	   console.log($scope);
		$timeout(function(){
	        $scope.loading = false;
	    },1000);
	}



	    $scope.changedValueNext = function(item, time){
	       $scope.loading = true;       
		   //console.log(item);
	       var correct = moment.utc(item).add(time, 'days').format('YYYY-MM-DD'); //crosfix
	       console.log(correct);
	       //$('#startTime_check').val(correct);
	       $('#startTime_check').data('daterangepicker').setStartDate(correct);
	       $('#startTime_check').data('daterangepicker').setEndDate(correct);
		   $scope.timeSelected = correct;
		   $scope.check_availability_angular();
			$timeout(function(){
		        $scope.loading = false;
		    },2000);
		   console.log($scope);
		}
		$scope.changedValuePrev = function(item, time){
	       $scope.loading = true;       
		   //console.log(item);
	       var correct = moment.utc(item).subtract(time, 'days').format('YYYY-MM-DD'); //crosfix
	       console.log(correct);
	       //$('#startTime_check').val(correct);
	       $('#startTime_check').data('daterangepicker').setStartDate(correct);
	       $('#startTime_check').data('daterangepicker').setEndDate(correct);
		   $scope.timeSelected = correct;
		   $scope.check_availability_angular();
			$timeout(function(){
		        $scope.loading = false;
		    },2000);
		   console.log($scope);
		}
    //duration 
    $scope.duration = function(start, end ) {
		var timestamp1 = new Date(start).getTime();
		var timestamp2 = new Date(end).getTime();
		var diff = timestamp1 - timestamp2
		return $filter('date')(new Date(diff), 'h', 'UTC');
	}

    // click availability use factory dataServiceAjax.getData
		$scope.check_availability_angular= function() {
		    console.log('click');
		    var promises_click = [];

		    $scope.loading = true;

			$http.get('https://cors-anywhere.herokuapp.com/https://api.rezdy.com/v1'+rezdy_category+'/products?limit=100&apiKey='+js_var.apikey+'')
			    .then(function(response){
			        var api_products = {};
			        api_products = response.data;
			        $scope.api_products = api_products;
			        return api_products;
			    }).then(function(api_products){
			         angular.forEach(api_products.products, function(products, key) {
			            var promiseObj2=dataServiceAjax.getData(products.productCode);
			            promiseObj2.then(function(value) { 
			            });
			            promises_click.push(promiseObj2);
			        });
		          

			        $q.all(promises_click).then(function(e){
			          $scope.api_availability = e;
						$timeout(function(){
				            $scope.loading = false;
				        },2000);
						$scope.initAvailable();
						if (rezdy_group_tours) { $scope.LoadGroup();}
			        });
			    }); //end then
			console.log($scope);
		}; 
	//end click check_availability_angular

	// infinite loadmore availability use factory dataServiceAjaxmore.getData
		$scope.check_availability_angular_more= function() {
		    console.log('check_availability_angular_more');
		    var promises_click = [];

		    $scope.loading = true;

			$http.get('https://cors-anywhere.herokuapp.com/https://api.rezdy.com/v1'+rezdy_category+'/products?limit=100&apiKey='+js_var.apikey+'')
			    .then(function(response){
			        var api_products = {};
			        api_products = response.data;
			        $scope.api_products = api_products;
			        return api_products;
			    }).then(function(api_products){
			         angular.forEach(api_products.products, function(products, key) {
			            var promiseObj2=dataServiceAjaxmore.getData(products.productCode);
			            promiseObj2.then(function(value) { 
			            });
			            promises_click.push(promiseObj2);
			        });
		          

			        $q.all(promises_click).then(function(e){
			          $scope.api_availability_more = e;
						$timeout(function(){
				            $scope.loading = false;
				        },2000);
			        });
			    }); //end then
			//console.log($scope);
			scrollLoad = true;
		}; 
	//end infinite check_availability_angular_more

    //infinite scroll js
        var scrollLoad = true;
        var scrollindex = 0;
        $scope.scrollindex = 1;
        var load = 0;
        $(window).scroll(function (){
		      if (scrollLoad && $(window).scrollTop() >=  $('#mainContentAng').height() -400 && load ) {
			      	console.log('infinite js');
			      	
			      	//show loadmore block
			      	//$('.timearrayLoadmore').show();

			      	$scope.loading = true;
			        scrollLoad = false;

			        $scope.check_availability_angular_more(); // check available 
			        $('#ang_moreloading').trigger('click'); // load template



			        //setup next start and end time
			        //$scope.timearrayLoadmore.push();

			        var start = $scope.timearrayLoadmore[0];
			        var next = $scope.timearrayLoadmore[0];
			        next = new Date(next);
			        next.setDate(next.getDate() + 10*$scope.scrollindex);
			        //next =  $filter('date')(new Date(next), 'yyyy-MM-dd');
					var new_timearrayLoadmore = [];
					for (var d = new Date(start); d <= next; d.setDate(d.getDate() + 1)) {
					    new_timearrayLoadmore.push( $filter('date')(new Date(d), 'yyyy-MM-dd') );
					}
					$scope.timearrayLoadmore = new_timearrayLoadmore;

					scrollindex = $scope.scrollindex + 1;
			        $scope.scrollindex = scrollindex;

			        console.log($scope);
		       }
        });
    // end infinite js
	    
	// load template for infinite   
	    var searchtemplate = [
	      "search_result_list.php.html"
	    ];
	    
	   $scope.displayedtemplate = [];
	    
	   $scope.addTemplate = function(formIndex) {
	      $scope.displayedtemplate.push(searchtemplate[formIndex]);
		    $timeout(function(){
	            $scope.loading = false;
	        },2000);
	    }
	// end template


    });
//end controler

/*factory*/

//dataService starttime and endtime get URLparametr
    wqs_3.factory('dataService', function($http, $q, $filter){
        return{
            getData: function(productCode,startTime,endTime){
                var deferred = $q.defer();
        
		        // helper getUrlParameter 
			    var getUrlParameter = function getUrlParameter(sParam) {
			        var sPageURL = decodeURIComponent(window.location.search.substring(1)),

			            sURLVariables = sPageURL.split('&'),
			            sParameterName,
			            i;
			            

			        for (i = 0; i < sURLVariables.length; i++) {
			            sParameterName = sURLVariables[i].split('=');

			            if (sParameterName[0] === sParam) {
			                return sParameterName[1] === undefined ? true : sParameterName[1];
			            }
			        }
			    };

			    //console.log($location.url());
			    var search_tour_cat = getUrlParameter('search_tour_cat');
			    if (search_tour_cat) {
			    	angular.element('[ng-controller=wqs_search_controller]').scope().search_tour_cat = search_tour_cat;
			    }else {
			    	angular.element('[ng-controller=wqs_search_controller]').scope().search_tour_cat = 'all';
			    }
			    // startTime
			    var startTime = getUrlParameter('check_date');
			    //console.log(startTime+' startTime');
			    
			    if(!startTime){
			    	//console.log('startTime undefined');
			    	startTime = $('#startTime_check').val();
			    } else {
			    	$('#startTime_check').val(startTime);
			    }
			    //console.log(startTime+' startTime2');

			    //startTime = $filter('date')(new Date(startTime), 'yyyy-MM-dd'); //crossfix
			    
			    //startTime_minus1
			    // var startTime_minus1 = new Date(startTime); //crossfix
			    // startTime_minus1.setDate(startTime_minus1.getDate() - 1); //crossfix
			    var startTime_minus1 = moment(startTime).subtract(1, 'days'); //crossfix
 				startTime_minus1 = $filter('date')(new Date(startTime_minus1), 'yyyy-MM-dd');
			    


			    // endTime
			    
			    
			    
			    
			    
			    
			    
			    
			    
			    var endTime = startTime;
			    
			    // endTime + 1
			    // var endTime_plus1 = new Date(endTime); //crossfix
			    // endTime_plus1.setDate(endTime_plus1.getDate() + 1); //crossfix
			    var endTime_plus1 = moment(endTime).add(1, 'days'); //crossfix
 				endTime_plus1 = $filter('date')(new Date(endTime_plus1), 'yyyy-MM-dd');

 				// load timearray
			    //var now = new Date(endTime); //crossfix
				var daysOfYear = [];
				// for (var d = new Date(startTime); d <= now; d.setDate(d.getDate() + 1)) { //crossfix
				//     daysOfYear.push( $filter('date')(new Date(d), 'yyyy-MM-dd') ); //crossfix
				// } //crossfix
				daysOfYear.push( startTime ); //crossfix
				angular.element('[ng-controller=wqs_search_controller]').scope().timearray = daysOfYear;

				// load timearray for Loadmore 
				var daysOfYearMore = [];
				//var endTime_plus2 = new Date(endTime_plus1); //crossfix
				//endTime_plus2.setDate(endTime_plus2.getDate() + 1); //crossfix
				
				daysOfYearMore.push( endTime_plus1 );
				angular.element('[ng-controller=wqs_search_controller]').scope().timearrayLoadmore = daysOfYearMore;

				//hide loadmore
				//$('.timearrayLoadmore').hide();

				// get
                $http({method: 'GET', url: 'https://cors-anywhere.herokuapp.com/https://api.rezdy.com/v1/availability?limit=100&offset=0&productCode='+productCode+'&startTime='+startTime_minus1+'&endTime='+endTime_plus1+'&apiKey='+js_var.apikey}).
                 success(function(data, status, headers, config) {
                    deferred.resolve(data.sessions);
                }).
                error(function(data, status, headers, config) {
                    deferred.reject(status);
                });

                return deferred.promise;
            }

        }
    });

// dataServiceAjax for click 
    wqs_3.factory('dataServiceAjax', function($http, $q, $filter){
        return{
            getData: function(productCode,startTime,endTime){
                var deferred = $q.defer();
        
            // jQuery('.availability_checker_col').css('opacity', '0.5');   
             
	        var datepicker_from = $('#startTime_check').val();
	        var datepicker_to = $("#datepicker-to-input").val();
	        var tour_cat_arr = $(".checkbox_term:checked").map(function() {
	            return $(this).val();         
	        }).get();

	        //console.log(tour_cat_arr);
		    //var search_tour_cat = getUrlParameter('search_tour_cat');
		    if (tour_cat_arr && tour_cat_arr != 0) {
		    	angular.element('[ng-controller=wqs_search_controller]').scope().search_tour_cat = tour_cat_arr;
		    }else {
		    	angular.element('[ng-controller=wqs_search_controller]').scope().search_tour_cat = 'all';
		    }

			    
			    //var startTime = getUrlParameter('startTime');
			    var startTime = datepicker_from;
			    //console.log(startTime);
			    //startTime = $filter('date')(new Date(startTime), 'yyyy-MM-dd'); //crossfix

			    //startTime_minus1
			    //var startTime_minus1 = new Date(startTime); //crossfix
			    //startTime_minus1.setDate(startTime_minus1.getDate() - 1); //crossfix
			    var startTime_minus1 = moment(startTime).subtract(1, 'days'); //crossfix
 				startTime_minus1 = $filter('date')(new Date(startTime_minus1), 'yyyy-MM-dd');
			    
			    //var endTime = getUrlParameter('endTime');
				var endTime = startTime;
				//console.log(endTime);
			    
			    //var endTime_plus1 = new Date(endTime); //crossfix
			    //endTime_plus1.setDate(endTime_plus1.getDate() + 1); //crossfix
			    var endTime_plus1 = moment(endTime).add(1, 'days'); //crossfix
 				endTime_plus1 = $filter('date')(new Date(endTime_plus1), 'yyyy-MM-dd');

			    //var now = new Date(endTime); //crossfix
				var daysOfYear = [];
				// for (var d = new Date(startTime); d <= now; d.setDate(d.getDate() + 1)) { //crossfix
				//     daysOfYear.push( $filter('date')(new Date(d), 'yyyy-MM-dd') ); //crossfix
				// } //crossfix
				daysOfYear.push( startTime ); //crossfix



                $http({method: 'GET', url: 'https://cors-anywhere.herokuapp.com/https://api.rezdy.com/v1/availability?limit=100&offset=0&productCode='+productCode+'&startTime='+startTime_minus1+'&endTime='+endTime_plus1+'&apiKey='+js_var.apikey}).
                 success(function(data, status, headers, config) {
                    deferred.resolve(data.sessions);
                }).
                error(function(data, status, headers, config) {
                    deferred.reject(status);
                });
				// angular.element('[ng-controller=wqs_search_controller]').scope().start = startTime;
				// angular.element('[ng-controller=wqs_search_controller]').scope().end = endTime;
				angular.element('[ng-controller=wqs_search_controller]').scope().timearray = daysOfYear;
                return deferred.promise;
            }
        }
    });

// dataServiceAjaxmore for infinite
    wqs_3.factory('dataServiceAjaxmore', function($http, $q, $filter){
        return{
            getData: function(productCode,startTime,endTime){
                var deferred = $q.defer();
        	
        	console.log('factory dataServiceAjaxmore');

        	// load category
		        var tour_cat_arr = $(".checkbox_term:checked").map(function() {
		            return $(this).val();         
		        }).get();

			    if (tour_cat_arr && tour_cat_arr != 0) {
			    	angular.element('[ng-controller=wqs_search_controller]').scope().search_tour_cat = tour_cat_arr;
			    }else {
			    	angular.element('[ng-controller=wqs_search_controller]').scope().search_tour_cat = 'all';
			    }
			// end category

			// load start time
			    var startTime = angular.element('[ng-controller=wqs_search_controller]').scope().timearrayLoadmore[0];
			    console.log(startTime);
			    //startTime = $filter('date')(new Date(startTime), 'yyyy-MM-dd');

			// load endtime
			    var length = angular.element('[ng-controller=wqs_search_controller]').scope().timearrayLoadmore.length;
				var endTime = angular.element('[ng-controller=wqs_search_controller]').scope().timearrayLoadmore[length-1];
				console.log(endTime);
			    
			    var endTime_plus1 = new Date(endTime);
			    endTime_plus1.setDate(endTime_plus1.getDate() + 1);
 				endTime_plus1 = $filter('date')(new Date(endTime_plus1), 'yyyy-MM-dd');

			// get
                $http({method: 'GET', url: 'https://cors-anywhere.herokuapp.com/https://api.rezdy.com/v1/availability?limit=100&offset=0&productCode='+productCode+'&startTime='+startTime+'&endTime='+endTime_plus1+'&apiKey='+js_var.apikey}).
                 success(function(data, status, headers, config) {
                    deferred.resolve(data.sessions);
                }).
                error(function(data, status, headers, config) {
                    deferred.reject(status);
                });

                return deferred.promise;
            }
        }
    });

/* filters */

	wqs_3.filter("asDate", function ($filter) {
	    return function (input) {
	    	return moment.utc(input).format('YYYY-MM-DD');
	        //return $filter('date')(new Date(input), 'yyyy-MM-dd', 'UTC');
	    }
	});
 	wqs_3.filter("asTime", function ($filter) {
	    return function (input) {
	        return $filter('date')(new Date(input), 'hh:mm a', 'UTC');
	    }
	});
	wqs_3.filter("asTimeLocal", function ($filter) {
	    return function (input) {
	        //return $filter('date')(new Date(input), 'hh:mm a');
	        return moment.utc(input).format('hh:mm A');
	    }
	});
	wqs_3.filter("asDateTitle", function ($filter) {
	    return function (input) {
	        return $filter('date')(new Date(input), 'dd MMMM', 'UTC');
	    }
	});
	wqs_3.filter("asDateTitleYears", function ($filter) {
	    return function (input) {
	        //return $filter('date')(new Date(input), 'dd MMMM yyyy', 'UTC');
	        return moment.utc(input).format('DD MMMM YYYY');
	    }
	});
	wqs_3.filter("trust", ['$sce', function($sce) {
	  return function(htmlCode){
	    return $sce.trustAsHtml(htmlCode);
	  }
	}]);


	wqs_3.directive("otcScripts", function() {
	 
	    var updateScripts = function (element) {
	        return function (scripts) {
	            element.empty();
	            angular.forEach(scripts, function (source, key) {
	                var scriptTag = angular.element(
	                    document.createElement("script"));
	                source = "//@ sourceURL=" + key + "\n" + source;
	                scriptTag.text(source)
	                element.append(scriptTag);
	            });
	        };
	    };
	 
	    return {
	        restrict: "EA",
	        scope: {
	          scripts: "=" 
	        },
	        link: function(scope,element) {
	            scope.$watch("scripts", updateScripts(element));
	        }
	    };
	});

})();

