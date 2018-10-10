angular.module('starter.controllers', [])

.controller('AppCtrl', ['$scope', '$http', '$ionicModal', '$ionicSideMenuDelegate', function ($scope, $http, $ionicModal, $ionicSideMenuDelegate) {
}])

.controller('ComunidadCtrl', ['$scope', '$http', '$ionicModal', '$ionicSideMenuDelegate', function ($scope, $http, $ionicModal, $ionicSideMenuDelegate) {

 $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };

}])

.controller('ApadaviCtrl', ['$scope', '$http', '$ionicModal', '$ionicSideMenuDelegate', function ($scope, $http, $ionicModal, $ionicSideMenuDelegate) {

 $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };

    $scope.apadavi = [];
    $scope.url = "http://leonardo-da-vinci.edu.do/";

    $scope.getApadavi = function() {
        $http.get('http://leonardo-da-vinci.edu.do/apadavi.json').success(function(data) {    
            $scope.apadavi = data;
        }); 
    }

    $scope.getApadavi();

    $scope.doRefresh = function() {
        $scope.getApadavi();
        $scope.$broadcast('scroll.refreshComplete');
    }

}])

.controller('DeportivasCtrl', ['$scope', '$http', '$ionicModal', '$ionicSideMenuDelegate', function ($scope, $http, $ionicModal, $ionicSideMenuDelegate) {

 $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };

    $scope.deportivas = [];
    $scope.url = "http://leonardo-da-vinci.edu.do/";

    $scope.getDeportivas = function() {
        $http.get('http://leonardo-da-vinci.edu.do/deportivas.json').success(function(data) {    
            $scope.deportivas = data;
            console.log($scope.deportivas);
        }); 
    }

    //$scope.getDeportivas();

    $scope.doRefresh = function() {
        $scope.getDeportivas();
        $scope.$broadcast('scroll.refreshComplete');
    }    

}])

.controller('FilosofiaCtrl', ['$scope', '$http', '$ionicModal', '$ionicSideMenuDelegate', function ($scope, $http, $ionicModal, $ionicSideMenuDelegate) {
 $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
  
}])

.controller('SociedadHonorCtrl', ['$scope', '$http', '$ionicModal', '$ionicSideMenuDelegate', function ($scope, $http, $ionicModal, $ionicSideMenuDelegate) {

 $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
  
}])

.controller('CircularesCtrl', ['$scope', '$http', '$ionicModal', '$ionicSideMenuDelegate', function ($scope, $http, $ionicModal, $ionicSideMenuDelegate) {

    $scope.circulares = [];
    $scope.url = "http://leonardo-da-vinci.edu.do/";

    $scope.getCirculares = function() {
        $http.get('http://leonardo-da-vinci.edu.do/circulares.json').success(function(data) {    
            $scope.circulares = data;
        });        
    }

    $scope.getCirculares();

    $scope.doRefresh = function() {
        $scope.getCirculares();
        $scope.$broadcast('scroll.refreshComplete');
    }
}])

.controller('PromocionesCtrl', ['$scope', '$http', '$ionicModal', '$ionicSideMenuDelegate', function ($scope, $http, $ionicModal, $ionicSideMenuDelegate) {

    $scope.promociones = [];

    $scope.getPromociones = function() {
        $http.get('http://leonardo-da-vinci.edu.do/promociones.json').success(function(data) {    
            $scope.promociones = data;
        });        
    }

    $scope.getPromociones();

    $scope.doRefresh = function() {
        $scope.getPromociones();
        $scope.$broadcast('scroll.refreshComplete');
    }    
}])

.controller('HorariosCtrl', ['$scope', '$http', '$ionicModal', '$ionicSideMenuDelegate', function ($scope, $http, $ionicModal, $ionicSideMenuDelegate) {

    $scope.openMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.horarios = [];
    $scope.url = "http://leonardo-da-vinci.edu.do/";
    $http.get('http://leonardo-da-vinci.edu.do/horarios.json').success(function(data) {
        $scope.horarios = data;
        console.log($scope.horarios[0].niveles);
    });

    $ionicModal.fromTemplateUrl('templates/modal-fotoHorario.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modalHorario = modal;
    }); 

    $scope.openModalHorario = function() {
        $scope.modalHorario.show();
    };

    $scope.closeModalHorario = function() {
        $scope.modalHorario.hide();
    };    

    $scope.toggleGroup = function(nivel) {
        nivel.show = !nivel.show;
    };
    $scope.isGroupShown = function(nivel) {
        return nivel.show;
    };    
}])

.controller('PromocionDetailCtrl', ['$scope', '$http', '$stateParams', '$ionicModal', '$ionicSideMenuDelegate', function ($scope, $http, $stateParams, $ionicModal, $ionicSideMenuDelegate) {

    $scope.openMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.promociones = [];
    $scope.promocion = {};

    $http.get('data/promociones.json').success(function(data) {
        $scope.promociones = data;
        for (var i = 0; i < $scope.promociones.length; i++) {
            if ($scope.promociones[i].id === parseInt($stateParams.Id)) {
                $scope.promocion = $scope.promociones[i];
            }
        }        
    });

    $ionicModal.fromTemplateUrl('templates/modal-fotoCuadro.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modalCuadro = modal;
    });

    $ionicModal.fromTemplateUrl('templates/modal-fotoCollage.html', {
        scope: $scope,
        animation: 'slide-in-up',
        controller: 'PromocionDetailCtrl'
    }).then(function(modal) {
        $scope.modalCollage = modal;
    });    

    $scope.openModalCuadro = function() {
        $scope.modalCuadro.show();
    };

    $scope.closeModalCuadro = function() {
        $scope.modalCuadro.hide();
    };

    $scope.openModalCollage = function() {
        $scope.modalCollage.show();
    };

    $scope.closeModalCollage= function() {
        $scope.modalCollage.hide();
    };

    $scope.toggleGroup = function(curso) {
        curso.show = !curso.show;
    };
    $scope.isGroupShown = function(curso) {
        return curso.show;
    };    
}])

.controller('HorarioDetailCtrl', ['$scope', '$http', '$stateParams', '$ionicModal', '$ionicSideMenuDelegate', function ($scope, $http, $stateParams, $ionicModal, $ionicSideMenuDelegate) {

    $scope.openMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.horarios = [];
    $scope.horario = {};
    $scope.url = "http://leonardo-da-vinci.edu.do/";
    $http.get('http://leonardo-da-vinci.edu.do/horarios.json').success(function(data) {
        $scope.horarios = data;
        for (var i = 0; i < $scope.horarios[0].niveles.length; i++) {
            for(var j = 0; j < $scope.horarios[0].niveles[i].horarios.length; j++)
            if ($scope.horarios[0].niveles[i].horarios[j].id === parseInt($stateParams.Id)) {
                $scope.horario = $scope.horarios[0].niveles[i].horarios[j];
                console.log($scope.horario);
            }
        }        
    });

    $ionicModal.fromTemplateUrl('templates/modal-fotoHorario.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modalHorario = modal;
    }); 

    $scope.openModalHorario = function() {
        $scope.modalHorario.show();
    };

    $scope.closeModalHorario = function() {
        $scope.modalHorario.hide();
    };
}])

.controller('ApadaviDetailCtrl', ['$scope', '$http', '$stateParams', '$ionicModal', '$ionicSideMenuDelegate', function ($scope, $http, $stateParams, $ionicModal, $ionicSideMenuDelegate) {

    $scope.openMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.apadavi = [];
    $scope.informacion = {};
    $scope.url = "http://leonardo-da-vinci.edu.do/";
    $http.get('http://leonardo-da-vinci.edu.do/apadavi.json').success(function(data) {
        $scope.apadavi = data;
        for (var i = 0; i < $scope.apadavi.length; i++) {
            if ($scope.apadavi[i].id === parseInt($stateParams.Id)) {
                $scope.informacion = $scope.apadavi[i];
                console.log($scope.informacion);
            }
        }        
    });

    $ionicModal.fromTemplateUrl('templates/modal-fotoApadavi.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modalApadavi = modal;
    });

    $scope.openModalApadavi = function() {
        $scope.modalApadavi.show();
    };

    $scope.closeModalApadavi = function() {
        $scope.modalApadavi.hide();
    };
}])

.controller('CircularDetailCtrl', ['$scope', '$http', '$stateParams', '$ionicModal', '$ionicSideMenuDelegate', function ($scope, $http, $stateParams, $ionicModal, $ionicSideMenuDelegate) {

    $scope.openMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.circulares = [];
    $scope.circular = {};
    $scope.url = "http://leonardo-da-vinci.edu.do/";
    $http.get('http://leonardo-da-vinci.edu.do/circulares.json').success(function(data) {
        $scope.circulares = data;
        for (var i = 0; i < $scope.circulares.length; i++) {
            if ($scope.circulares[i].id === parseInt($stateParams.Id)) {
                $scope.circular = $scope.circulares[i];
                console.log($scope.circular);
            }
        }        
    });

    $ionicModal.fromTemplateUrl('templates/modal-fotoCircular.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modalCircular = modal;
    });

    $scope.openModalCircular = function() {
        $scope.modalCircular.show();
    };

    $scope.closeModalCircular = function() {
        $scope.modalCircular.hide();
    };
}])

.controller('DeportivaDetailCtrl', ['$scope', '$http', '$stateParams', '$ionicModal', '$ionicSideMenuDelegate', function ($scope, $http, $stateParams, $ionicModal, $ionicSideMenuDelegate) {

    $scope.openMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.deportivas = [];
    $scope.deportiva = {};
    $scope.url = "http://leonardo-da-vinci.edu.do/";

    $scope.getCalendario = function() {
        $http.get('http://leonardo-da-vinci.edu.do/deportivas.json').success(function(data) {
            $scope.deportivas = data;
            for (var i = 0; i < $scope.deportivas.length; i++) {
                if ($scope.deportivas[i].id === parseInt($stateParams.Id)) {
                    $scope.deportiva = $scope.deportivas[i];
                    console.log($scope.deportiva);
                }
            }        
        })
    }

    $scope.getCalendario();

    $scope.doRefresh = function() {
        $scope.getCalendario();
        $scope.$broadcast('scroll.refreshComplete');
    }
}])

.controller('ContactoCtrl', ['$scope','$ionicPlatform', '$location', '$ionicModal', '$timeout', '$http', '$ionicSideMenuDelegate', function($scope, $ionicPlatform, $location, $ionicModal, $timeout, $http, $ionicSideMenuDelegate) {



  // Form data for the login modal
  $scope.contact = {};

 $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/mensaje.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeMensaje = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.mensaje = function() {
    $scope.modal.show();
    console.log('modal open');
  };

  // Perform the login action when the user submits the login form
  $scope.sendContact = function() {
    console.log('Sending Message', $scope.contact);
    $http.post('http://www.leonardo-da-vinci.edu.do/sendmail.php', $scope.contact)
    .success(
      function(data){
        $scope.response = data;
        $scope.closeMensaje();
        console.log('Message sended');
        console.log($scope.response);
      })
    .error(
      function(data){
        $scope.response = data;
        $scope.closeMensaje();
        console.log('Error sending message', $scope.response);
      })
  }
    
	// init gps array
    $scope.whoiswhere = [];
    $scope.basel = { lat: 19.4587846, lon: -70.6593584 };

    // some points of interest to show on the map
    // to be user as markers, objects should have "lat", "lon", and "name" properties
    $scope.whoiswhere = [
        { "name": "Instituto Leonardo Da Vinci", "lat": $scope.basel.lat, "lon": $scope.basel.lon, "icon": "img/davinci-logo-marker.png" }
	];
}])

.controller("FeedCtrl", function($http, $scope, $ionicSideMenuDelegate) {
 
    $scope.rss = [];
    $scope.entries = [];
    $scope.init = function() {
        $http.jsonp("http://www.leonardo-da-vinci.edu.do/feed/json", {cache: true, params: {callback: 'JSON_CALLBACK'}})
            .success(function(data) {
                console.log(data);
                $scope.rss = data;
                angular.forEach($scope.rss, function(entry) {
                    entry.publishedDate = new Date(entry.date);
                    $scope.entries.push(entry);
                })

                console.log($scope.entries);
               /* $scope.rssTitle = data.title;
                $scope.rssUrl = data.responseData.feed.feedUrl;
                $scope.rssSiteUrl = data.responseData.feed.link;
                $scope.entries = data.responseData.feed.entries;*/
            })
            .error(function(data) {
                console.log("ERROR: " + data);
            });
    }
    
 /*
  * Metodo doRefresh() - Sirve para refrescar el listado de los usuarios almacenados en la BD. 
  * (El Ion-Content debe tene la propiedad scroll="true").
  */
  $scope.doRefresh = function(){
    //Ejecutar el metodo init.
    $scope.init();
    //Completar refresh.
    $scope.$broadcast('scroll.refreshComplete');
  }
    
    $scope.openURL = function(link) {
        try {
            window.open(link, '_system', 'location=no');
        } catch (err) {
            alert(err);
        }
    }

     $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
 
})

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('DashboardController', function($scope, $state, $ionicHistory) {
    $scope.notas = function (){
      $ionicHistory.nextViewOptions({
        disableBack: true
      });        
      $state.go('app.notas');
    }
})

.controller('CalendarioCtrl', function($scope, $ionicSideMenuDelegate, $http) {

 $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  }

  $scope.calendario = [];

  $http.get('http://leonardo-da-vinci.edu.do/calendario.json').success(function(data) {
    $scope.calendario = data;
  });  
    
    console.log($scope.calendario);
})

.controller('NotasCtrl', function($scope) {
    
    $scope.alumno = "PICHARDO ESTEVEZ JUAN JOSE";
    $scope.matricula = "2015-3616";
    $scope.curso = "DECIMO";
    $scope.nivel = "SECUNDARIO";
    $scope.seccion = "A";
    $scope.ano_escolar = "2015-2016";
    
    $scope.data = [
        {
            asignatura: "LENGUA ESPANOLA",
            ev1: 85,
            ev2: 90,
            ev3: 80,
            ev4: 85,
            promsem: 85,
            prom70: 60,
            prusem: 90,
            pru30: 27,
            cfs: 87,
            asi: 100
        },
        {
            asignatura: "LENG. EXTR. (INGLES)",
            ev1: 85,
            ev2: 90,
            ev3: 80,
            ev4: 85,
            promsem: 85,
            prom70: 60,
            prusem: 90,
            pru30: 27,
            cfs: 87,
            asi: 100
        },
        {
            asignatura: "LENG. EXTR. (FRANCES)",
            ev1: 85,
            ev2: 90,
            ev3: 80,
            ev4: 85,
            promsem: 85,
            prom70: 60,
            prusem: 90,
            pru30: 27,
            cfs: 87,
            asi: 100
        },
        {
            asignatura: "MATEMATICA",
            ev1: 85,
            ev2: 90,
            ev3: 80,
            ev4: 85,
            promsem: 85,
            prom70: 60,
            prusem: 90,
            pru30: 27,
            cfs: 87,
            asi: 100
        },
        {
            asignatura: "CIENCIAS SOCIALES",
            ev1: 85,
            ev2: 90,
            ev3: 80,
            ev4: 85,
            promsem: 85,
            prom70: 60,
            prusem: 90,
            pru30: 27,
            cfs: 87,
            asi: 100
        },
        {
            asignatura: "CIENCIAS NATURALES",
            ev1: 85,
            ev2: 90,
            ev3: 80,
            ev4: 85,
            promsem: 85,
            prom70: 60,
            prusem: 90,
            pru30: 27,
            cfs: 87,
            asi: 100
        },
        {
            asignatura: "EDUCACION MORAL Y CIVICA",
            ev1: 85,
            ev2: 90,
            ev3: 80,
            ev4: 85,
            promsem: 85,
            prom70: 60,
            prusem: 90,
            pru30: 27,
            cfs: 87,
            asi: 100
        },
        {
            asignatura: "EDUCACION ARTISTICA",
            ev1: 85,
            ev2: 90,
            ev3: 80,
            ev4: 85,
            promsem: 85,
            prom70: 60,
            prusem: 90,
            pru30: 27,
            cfs: 87,
            asi: 100
        },
        {
            asignatura: "CIENCIAS NATURALES",
            ev1: 85,
            ev2: 90,
            ev3: 80,
            ev4: 85,
            promsem: 85,
            prom70: 60,
            prusem: 90,
            pru30: 27,
            cfs: 87,
            asi: 100
        },
        {
            asignatura: "EDUCACION FISICA",
            ev1: 85,
            ev2: 90,
            ev3: 80,
            ev4: 85,
            promsem: 85,
            prom70: 60,
            prusem: 90,
            pru30: 27,
            cfs: 87,
            asi: 100
        },
        {
            asignatura: "LABORATORIO DE INFORMATICA",
            ev1: 85,
            ev2: 90,
            ev3: 80,
            ev4: 85,
            promsem: 85,
            prom70: 60,
            prusem: 90,
            pru30: 27,
            cfs: 87,
            asi: 100
        },
        {
            asignatura: "FORMACION INTEGRAL HUMANA Y RELIGIOSA",
            ev1: 85,
            ev2: 90,
            ev3: 80,
            ev4: 85,
            promsem: 85,
            prom70: 60,
            prusem: 90,
            pru30: 27,
            cfs: 87,
            asi: 100
        }  
    ];
});