// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'davinciapp.controllers', 'davinciapp.services', 'angular-md5'])

.run(function($ionicPlatform, $rootScope, $state, $location, Auth) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

    // Enable to debug issues.
    // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  
    var notificationOpenedCallback = function(jsonData) {
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    };

    window.plugins.OneSignal
      .startInit("235f314d-64d9-4615-87d6-f7dbef0ae4ff")
      .handleNotificationOpened(notificationOpenedCallback)
      .endInit();
    // Sync hashed email if you have a login system or collect it.
    //   Will be used to reach the user at the most optimal time of day.
    // window.plugins.OneSignal.syncHashedEmail(userEmail);
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'index.html',
    controller: 'AppCtrl'
  })

  .state('contacto', {
    url: '/app/contacto',
    templateUrl: 'templates/contacto.html',
    controller: 'ContactoCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  .state('facebook', {
    url: '/app/facebook',
    views: {
      'menuContent': {
        templateUrl: 'templates/facebook.html'
      }
    }
  })

  .state('comunidad', {
    url: '/app/comunidad',
    templateUrl: 'templates/comunidad.html',
    controller: 'ComunidadCtrl'
  })

  .state('estudiantes', {
    url: '/app/estudiantes',
    templateUrl: 'templates/estudiantes.html',
    controller: 'EstudiantesCtrl'
  })

  .state('app.contrasena', {
    url: '/contrasena/:Id',
    templateUrl: 'templates/contrasena.html',
    controller: 'ContrasenaCtrl'
  })  

.state('estudiantes-detail', {
    url: '/app/estudiantes/:Id',
    templateUrl: 'templates/notas.html',
    controller: 'EstudiantesDetailCtrl'
  })

  // Each tab has its own nav history stack:

  .state('comunidad.filosofia', {
    url: '/filosofia',
    views: {
      'tab-filosofia': {
        templateUrl: 'templates/tab-filosofia.html',
        controller: 'FilosofiaCtrl'
      }
    }
  })

  .state('comunidad.apadavi', {
    url: '/apadavi',
    views: {
      'tab-apadavi': {
        templateUrl: 'templates/tab-apadavi.html',
        controller: 'ApadaviCtrl'
      }
    }
  })

  .state('comunidad.sociedadhonor', {
    url: '/sociedadhonor',
    views: {
      'tab-sociedadhonor': {
        templateUrl: 'templates/tab-sociedadhonor.html',
        controller: 'SociedadHonorCtrl'
      }
    }
  })    

  .state('comunidad.promociones', {
    url: '/promociones',
    views: {
      'tab-promociones': {
        templateUrl: 'templates/tab-promociones.html',
        controller: 'PromocionesCtrl'
      }
    }
  })

  .state('comunidad.promociones-detalle', {
    url: '/promociones/:Id',
    views: {
      'tab-promociones': {
        templateUrl: 'templates/tab-promociones-detail.html',
        controller: 'PromocionDetailCtrl'
      }
    }
  })  

  .state('calendario', {
      url: '/app/calendario',
      templateUrl: 'templates/calendario.html',
      controller: 'CalendarioCtrl'            
    })
  
  .state('horarios', {
    url: '/app/horarios',
    templateUrl: 'templates/horarios.html',
    controller: 'HorariosCtrl'
  })

  .state('horarios-detalle', {
    url: '/app/horarios/:Id',
    templateUrl: 'templates/horario-detail.html',
    controller: 'HorarioDetailCtrl'
  })   

  .state('circulares', {
    url: '/app/circulares',
    templateUrl: 'templates/circulares.html',
    controller: 'CircularesCtrl'
  }) 

     .state('circulares-detalle', {
    url: '/app/circulares/:Id',
    templateUrl: 'templates/circular-detail.html',
    controller: 'CircularDetailCtrl'
  })   

  .state('noticias', {
    url: '/app/noticias',
    templateUrl: 'templates/noticias.html',
    controller: 'FeedCtrl'
  })
  
    .state('dashboard', {
      url: '/app/dashboard',
      templateUrl: 'templates/dashboard.html',
      controller: 'DashboardController'
    })

    .state('apadavi', {
      url: '/app/apadavi',
      templateUrl: 'templates/apadavi.html',
      controller: 'ApadaviCtrl'
    })

  .state('apadavi-detalle', {
    url: '/app/apadavi/:Id',
    templateUrl: 'templates/apadavi-detail.html',
    controller: 'ApadaviDetailCtrl'
  })      

    .state('deportivas', {
      url: '/app/deportivas',
      templateUrl: 'templates/deportivas.html',
      controller: 'DeportivasCtrl'
    })

  .state('deportivas-detalle', {
    url: '/app/deportivas/:Id',
    templateUrl: 'templates/deportiva-detail.html',
    controller: 'DeportivaDetailCtrl'
  })

  .state('configuracion', {
    url: '/app/configuracion',
    templateUrl: 'templates/configuracion.html',
    controller: 'ConfiguracionCtrl'
  })  ;     
    
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/dashboard');
})
/**
 * Handle Google Maps API V3+
 */
// - Documentation: https://developers.google.com/maps/documentation/
.directive("appMap", function ($window, $rootScope) {
    return {
        restrict: "E",
        replace: true,
        template: "<div></div>",
        scope: {
            center: "=",        // Center point on the map (e.g. <code>{ latitude: 10, longitude: 10 }</code>).
            markers: "=",       // Array of map markers (e.g. <code>[{ lat: 10, lon: 10, name: "hello" }]</code>).
            width: "@",         // Map width in pixels.
            height: "@",        // Map height in pixels.
            zoom: "@",          // Zoom level (one is totally zoomed out, 25 is very much zoomed in).
            mapTypeId: "@",     // Type of tile to show on the map (roadmap, satellite, hybrid, terrain).
            panControl: "@",    // Whether to show a pan control on the map.
            zoomControl: "@",   // Whether to show a zoom control on the map.
            scaleControl: "@"   // Whether to show scale control on the map.
        },
        link: function (scope, element, attrs) {
            var toResize, toCenter;
            //var map;
            var infowindow;
            var currentMarkers;
   	        var callbackName = 'InitMapCb';

   			// callback when google maps is loaded
			$window[callbackName] = function() {
				console.log("map: init callback");
				createMap();
				updateMarkers();
				};

			if (!$window.google || !$window.google.maps ) {
				console.log("map: not available - load now gmap js");
				loadGMaps();
				}
			else
				{
				console.log("map: IS available - create only map now");
				createMap();
				}
			function loadGMaps() {
				console.log("map: start loading js gmaps");
				var script = $window.document.createElement('script');
				script.type = 'text/javascript';
				script.src = 'http://maps.googleapis.com/maps/api/js?key=AIzaSyB1Td_pMED3L7rLo_EBKFf3orhjoQE3wHE&v=3.exp&callback=InitMapCb';
				$window.document.body.appendChild(script);
				}

			function createMap() {
				console.log("map: create map start");
				var mapOptions = {
					zoom: 16,
					center: new google.maps.LatLng(19.4592846, -70.6593584),
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					panControl: false,
          fullscreenControl: false,
					zoomControl: true,
					mapTypeControl: false,
					scaleControl: false,
					streetViewControl: false,
					navigationControl: false,
					//disableDefaultUI: true,
					//overviewMapControl: true,
                    draggable:true
					};
				if (!($rootScope.map instanceof google.maps.Map)) {
					console.log("map: create map now as not already available ");
					$rootScope.map = new google.maps.Map(element[0], mapOptions);
          // EDIT Added this and it works on android now
          // Stop the side bar from dragging when mousedown/tapdown on the map
          google.maps.event.addDomListener(element[0], 'mousedown', function(e) {
            e.preventDefault();
            return false;
            });
					infowindow = new google.maps.InfoWindow(); 
					}
				}

			scope.$watch('markers', function() {
				updateMarkers();
				});

			// Info window trigger function 
			function onItemClick(pin, label, datum, url) { 
				// Create content  
				var contentString = "<b>Instituto Leonardo Da Vinci</b><br/> Carretera Don Pedro, Esq. Calle El Guano, Km.1, Santiago, Rep. Dom.<br>Tel. 809-734-1535<br>Correo Electrónico: info@leonardo-da-vinci.edu.do";
				// Replace our Info Window's content and position
				infowindow.setContent(contentString);
				infowindow.setPosition(pin.position);
				infowindow.open($rootScope.map)
				google.maps.event.addListener(infowindow, 'closeclick', function() {
					//console.log("map: info windows close listener triggered ");
					infowindow.close();
					});
				} 

			function markerCb(marker, member, location) {
			    return function() {
					//console.log("map: marker listener for " + member.name);
					var href="http://maps.apple.com/?q="+member.lat+","+member.lon;
					$rootScope.map.setCenter(location);
					onItemClick(marker, member.name, member.date, href);
					};
				}

			// update map markers to match scope marker collection
			function updateMarkers() {
				if ($rootScope.map && scope.markers) {
					// create new markers
					//console.log("map: make markers ");
					currentMarkers = [];
					var markers = scope.markers;
					if (angular.isString(markers)) markers = scope.$eval(scope.markers);
					for (var i = 0; i < markers.length; i++) {
						var m = markers[i];
						var loc = new google.maps.LatLng(m.lat, m.lon);
						var mm = new google.maps.Marker({ position: loc, map: $rootScope.map, title: m.name, icon: 'img/davinci-logo-marker.png' });
						//console.log("map: make marker for " + m.name);
						google.maps.event.addListener(mm, 'click', markerCb(mm, m, loc));
						currentMarkers.push(mm);
            console.log('marker added!');
						}
					}
				}

			// convert current location to Google maps location
			function getLocation(loc) {
				if (loc == null) return new google.maps.LatLng(19.4589846, -70.6593584);
				if (angular.isString(loc)) loc = scope.$eval(loc);
				return new google.maps.LatLng(loc.lat, loc.lon);
				}

			} // end of link:
		}; // end of return
});

