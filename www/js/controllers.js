angular.module('davinciapp.controllers', [])

.controller('ComunidadCtrl',  function ($scope, $http, $ionicModal, $ionicSideMenuDelegate) {
    $scope.openMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
})

.controller('SolicitudesCtrl',  function ($scope, $http, $ionicModal, $ionicSideMenuDelegate) {
    $scope.openMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
})


.controller('ExcusasCtrl',  function ($scope, $http, $ionicModal, $ionicSideMenuDelegate) {
    $scope.openMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
})


.controller('ExcusasEstudiantesCtrl',  function ($scope, $http, $ionicModal, $ionicSideMenuDelegate) {
    $scope.openMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };
})

.controller('ConfiguracionCtrl',  function ($scope, $http, $ionicModal, $ionicPopup, $ionicSideMenuDelegate, Auth, md5, $ionicHistory, $state) {
    
    $scope.openMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.usuario = {};
    $scope.passForm = {};

     $scope.$on('$ionicView.enter', function() {
         
    $scope.usuario = Auth.getLoggedInUser();
        console.log($scope.usuario);
    })        

    $scope.showAlert = function(message) {
        var alertPopup = $ionicPopup.alert({
            title: 'Aviso',
            template: message,
            buttons: [{
                text: 'OK',
                type: 'button-energized'
            }]
        })
        alertPopup.then(function(res) { console.log('showing alert'); });
    }

    
    $ionicModal.fromTemplateUrl('templates/modal-contrasena.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modalContrasena = modal;
    });

    $scope.openModalPassword = function() {
        $scope.modalContrasena.show();
    };

    $scope.closeModalPassword = function() {
        $scope.modalContrasena.hide();
    };    


    $scope.cambiarContrasena = function() {
        $scope.familia = Auth.getLoggedInUser();
        if($scope.passForm.password === $scope.passForm.confirmPassword) {
            $scope.familia.Contraseña = md5.createHash($scope.passForm.password);
            $http({
                method: 'PUT',
                url: 'http://leonardo-da-vinci.edu.do:3515/api/usuarios/' + $scope.familia.id,
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization': $scope.familia.token },
                data: $.param($scope.familia)
            })
            .success(function(data) {
                console.log(data);
                console.log('exito'); 
                $scope.showAlert('Su contraseña ha sido actualizada.');
                $ionicHistory.nextViewOptions({
                    disableBack: true
                });             
            })
            .error(function(data) {
                console.log('error');
                console.log(data);
                $scope.showAlert('Hubo un error al intentar cambiar su contraseña.' + data);
                return;
            })
        }
        else {
            $scope.showAlert('Las contraseñas no coinciden.');
            return;
        }
    }

    $scope.logout = function() {
        Auth.setLoggedInUser(null);
        $ionicHistory.nextViewOptions({
            disableBack: true
        });        
        $state.go('login');
    }
})

.controller('ApadaviCtrl', function ($scope, $http, $ionicModal, $location, $ionicHistory, $state, $ionicSideMenuDelegate, Auth) {
  if(!Auth.isLoggedIn()) {
    console.log('is not loggedin');
    $ionicHistory.nextViewOptions({
        disableBack: true
    });        
    $state.go('login');        
  }   

 $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };

    $scope.apadavi = [];
    $scope.url = "http://leonardo-da-vinci.edu.do/";

    $scope.getApadavi = function() {
        $http.get('http://leonardo-da-vinci.edu.do/apadavi.json?nocache=' + (new Date()).getTime()).success(function(data) {    
            $scope.apadavi = data;
        }); 
    }

    $scope.getApadavi();

    $scope.doRefresh = function() {
        $scope.getApadavi();
        $scope.$broadcast('scroll.refreshComplete');
    }

})

.controller('DeportivasCtrl', function ($scope, $http, $ionicModal, $ionicHistory, $state, $ionicSideMenuDelegate, Auth) {
  if(!Auth.isLoggedIn()) {
    console.log('is not loggedin');
    $ionicHistory.nextViewOptions({
        disableBack: true
    });        
    $state.go('login');        
  }

 $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };

    $scope.deportivas = [];
    $scope.url = "http://leonardo-da-vinci.edu.do/";

    $scope.getDeportivas = function() {
        $http.get('http://leonardo-da-vinci.edu.do/deportivas.json?nocache=' + (new Date()).getTime()).success(function(data) {    
            $scope.deportivas = data;
        }); 
    }

    $scope.doRefresh = function() {
        $scope.getDeportivas();
        $scope.$broadcast('scroll.refreshComplete');
    }    

})

.controller('FilosofiaCtrl', function ($scope, $http, $ionicModal, $ionicSideMenuDelegate) {
 $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
 };
  
})

.controller('SociedadHonorCtrl', function ($scope, $http, $ionicModal, $ionicSideMenuDelegate) {

 $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  };
  
})

.controller('CircularesCtrl', function ($scope, $http, $ionicModal, $ionicHistory, $state, $ionicSideMenuDelegate, Auth) {
    
    $scope.openMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };

  if(!Auth.isLoggedIn()) {
    console.log('is not loggedin');
    $ionicHistory.nextViewOptions({
        disableBack: true
    });        
    $state.go('login');        
  } 

    $scope.circulares = [];
    $scope.url = "http://leonardo-da-vinci.edu.do/";

    $scope.getCirculares = function() {
        $http.get('http://leonardo-da-vinci.edu.do/circulares.json?nocache=' + (new Date()).getTime()).success(function(data) {    
            $scope.circulares = data;
        });        
    }

    $scope.getCirculares();

    $scope.doRefresh = function() {
        $scope.getCirculares();
        $scope.$broadcast('scroll.refreshComplete');
    }
})

.controller('PromocionesCtrl', function ($scope, $http, $ionicModal, $ionicSideMenuDelegate) {

    $scope.promociones = [];

    $scope.getPromociones = function() {
        $http.get('http://leonardo-da-vinci.edu.do/promociones.json?nocache=' + (new Date()).getTime()).success(function(data) {    
            $scope.promociones = data;
        });        
    }

    $scope.getPromociones();

    $scope.doRefresh = function() {
        $scope.getPromociones();
        $scope.$broadcast('scroll.refreshComplete');
    }    
})

.controller('HorariosCtrl', function ($scope, $http, $ionicModal, $ionicHistory, $state, $ionicSideMenuDelegate, Auth) {
    
      if(!Auth.isLoggedIn()) {
        console.log('is not loggedin');
        $ionicHistory.nextViewOptions({
            disableBack: true
        });        
        $state.go('login');        
      } 

    $scope.openMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.horarios = [];
    $scope.url = "http://leonardo-da-vinci.edu.do/";
    $http.get('http://leonardo-da-vinci.edu.do/horarios.json?nocache=' + (new Date()).getTime()).success(function(data) {
        $scope.horarios = data;
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
})

.controller('PromocionDetailCtrl', function ($scope, $http, $stateParams, $ionicModal, $ionicSideMenuDelegate, Auth) {

      if(!Auth.isLoggedIn()) {
        console.log('is not loggedin');
        $ionicHistory.nextViewOptions({
            disableBack: true
        });        
        $state.go('login');        
      } 

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
})

.controller('HorarioDetailCtrl', function ($scope, $http, $stateParams, $ionicHistory, $state, $ionicModal, $ionicSideMenuDelegate, Auth) {

      if(!Auth.isLoggedIn()) {
        console.log('is not loggedin');
        $ionicHistory.nextViewOptions({
            disableBack: true
        });        
        $state.go('login');        
      } 

    $scope.openMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.horarios = [];
    $scope.horario = {};
    $scope.url = "http://leonardo-da-vinci.edu.do/";
    $http.get('http://leonardo-da-vinci.edu.do/horarios.json?nocache=' + (new Date()).getTime()).success(function(data) {
        $scope.horarios = data;
        for (var i = 0; i < $scope.horarios[0].niveles.length; i++) {
            for(var j = 0; j < $scope.horarios[0].niveles[i].horarios.length; j++)
            if ($scope.horarios[0].niveles[i].horarios[j].id === parseInt($stateParams.Id)) {
                $scope.horario = $scope.horarios[0].niveles[i].horarios[j];
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
})

.controller('ApadaviDetailCtrl', function ($scope, $http, $stateParams, $ionicModal, $ionicHistory, $state, $ionicSideMenuDelegate, Auth) {
      
      if(!Auth.isLoggedIn()) {
        console.log('is not loggedin');
        $ionicHistory.nextViewOptions({
            disableBack: true
        });        
        $state.go('login');        
      } 

    $scope.openMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.apadavi = [];
    $scope.informacion = {};
    $scope.url = "http://leonardo-da-vinci.edu.do/";
    $http.get('http://leonardo-da-vinci.edu.do/apadavi.json?nocache=' + (new Date()).getTime()).success(function(data) {
        $scope.apadavi = data;
        for (var i = 0; i < $scope.apadavi.length; i++) {
            if ($scope.apadavi[i].id === parseInt($stateParams.Id)) {
                $scope.informacion = $scope.apadavi[i];
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
})

.controller('CircularDetailCtrl', function ($scope, $http, $stateParams, $ionicModal, $ionicHistory, $state, $ionicSideMenuDelegate, Auth) {

      if(!Auth.isLoggedIn()) {
        console.log('is not loggedin');
        $ionicHistory.nextViewOptions({
            disableBack: true
        });        
        $state.go('login');        
      } 

    $scope.openMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.circulares = [];
    $scope.circular = {};
    $scope.url = "http://leonardo-da-vinci.edu.do/";
    $http.get('http://leonardo-da-vinci.edu.do/circulares.json?nocache=' + (new Date()).getTime()).success(function(data) {
        $scope.circulares = data;
        for (var i = 0; i < $scope.circulares.length; i++) {
            if ($scope.circulares[i].id === parseInt($stateParams.Id)) {
                $scope.circular = $scope.circulares[i];
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
})

.controller('DeportivaDetailCtrl', function ($scope, $http, $stateParams, $ionicModal, $ionicHistory, $state, $ionicSideMenuDelegate, Auth) {

      if(!Auth.isLoggedIn()) {
        console.log('is not loggedin');
        $ionicHistory.nextViewOptions({
            disableBack: true
        });        
        $state.go('login');        
      } 

    $scope.openMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };

    $scope.deportivas = [];
    $scope.deportiva = {};
    $scope.url = "http://leonardo-da-vinci.edu.do/";

    $scope.getCalendario = function() {
        $http.get('http://leonardo-da-vinci.edu.do/deportivas.json?nocache=' + (new Date()).getTime()).success(function(data) {
            $scope.deportivas = data;
            for (var i = 0; i < $scope.deportivas.length; i++) {
                if ($scope.deportivas[i].id === parseInt($stateParams.Id)) {
                    $scope.deportiva = $scope.deportivas[i];
                }
            }        
        })
    }

    $scope.getCalendario();

    $scope.doRefresh = function() {
        $scope.getCalendario();
        $scope.$broadcast('scroll.refreshComplete');
    }
})

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
                $scope.rss = data;
                angular.forEach($scope.rss, function(entry) {
                    entry.publishedDate = new Date(entry.date);
                    $scope.entries.push(entry);
                })
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

.controller('AppCtrl', function($scope, $ionicHistory, $state, Auth, $location) {

    $scope.$on('$ionicView.enter', function() {   
        $scope.user = Auth.getLoggedInUser();
    })

    $scope.logout = function() {
        Auth.setLoggedInUser(null);
        $ionicHistory.nextViewOptions({
            disableBack: true
        });        
        $state.go('login');
    }
})

.controller('LoginCtrl', function($scope, md5, $ionicPopup, $ionicHistory, $state, $location, Auth) {

      // Form data for the login modal
      $scope.loginData = {};

      $scope.showAlert = function(message) {
        var alertPopup = $ionicPopup.alert({
            title: 'Aviso',
            template: message,
            buttons: [{
                text: 'OK',
                type: 'button-energized'
            }]
        })
        alertPopup.then(function(res) { console.log('showing alert'); });
      }

      // Perform the login action when the user submits the login form
      $scope.doLogin = function() {

        if(!$scope.loginData.username) {
            $scope.showAlert('Debe ingresar el codigo de la familia.');
            return;
        }

        if(!$scope.loginData.password) {
            $scope.showAlert('Debe ingresar la contraseña.');
            return;
        }
        Auth.login($scope.loginData)
        .then(function(response) {
            console.log(response);
            $scope.user = response.data.user;
            $scope.user.token = response.data.token;
            Auth.setLoggedInUser($scope.user);
            if($scope.user.Accesado !== 0) {
                $ionicHistory.nextViewOptions({
                    disableBack: true
                });        
                $state.go('dashboard');                       
            }
            else {
                $location.path("app/contrasena/" + $scope.user.id);
            }
        }, function(error) {
            console.log(error);
            if(error.status == 401) {
                $scope.showAlert('Usuario y/o Contraseña Incorrecto.');
                $scope.loginData.password = "";
            }
        });
    }
})

.controller('ContrasenaCtrl', function($scope, $http, md5, $ionicPopup, $ionicHistory, $location, $state, Auth, $stateParams) {

    $scope.usuario = {};
    $scope.passForm = {};

    $scope.showAlert = function(message) {
        var alertPopup = $ionicPopup.alert({
            title: 'Aviso',
            template: message,
            buttons: [{
                text: 'OK',
                type: 'button-energized'
            }]
        })
        alertPopup.then(function(res) { console.log('showing alert'); });
      }    

    $scope.cambiarContrasena = function() {
        $scope.familia = Auth.getLoggedInUser();
        if($scope.passForm.password === $scope.passForm.confirmPassword) {
            $scope.familia.Contraseña = md5.createHash($scope.passForm.password);
            $scope.familia.Accesado = 1;
            console.log($scope.familia);
            $http({
                method: 'PUT',
                url: 'http://leonardo-da-vinci.edu.do:3515/api/usuarios/' + $scope.familia.id,
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization': $scope.familia.token },
                data: $.param($scope.familia)
            })
            .success(function(data) {
                console.log(data);
                console.log('exito'); 
                $scope.showAlert('Su contraseña ha sido actualizada.');
                $ionicHistory.nextViewOptions({
                    disableBack: true
                });        
                $state.go('dashboard');                
            })
            .error(function(data) {
                console.log('error');
                console.log(data);
                $scope.showAlert('Hubo un error al intentar cambiar su contraseña.' + data);
                return;
            })
        }
        else {
            $scope.showAlert('Las contraseñas no coinciden.');
            return;
        }
    }
})

.controller('DashboardController', function($scope, $state, $ionicHistory, $state, Auth) {
    
    console.log(Auth.isLoggedIn());

    $scope.verifyLogin = function() {
        if(!Auth.isLoggedIn()) {
            console.log('is not loggedin');
            $ionicHistory.nextViewOptions({
                disableBack: true
            }); 
            $state.go('login');        
        }
        else {
            console.log('is loggedin');
        }
    }

    if(!Auth.isLoggedIn()) {
        console.log('is not loggedin');
        $ionicHistory.nextViewOptions({
            disableBack: true
        }); 
        $state.go('login');        
    }
    else {
        console.log('is loggedin');
    }

    $state.reload();

    $scope.notas = function (){
      $ionicHistory.nextViewOptions({
        disableBack: true
      });        
      $state.go('app.notas');
    }

     $scope.$on('$ionicView.enter', function() {
         
        $scope.verifyLogin();
    })     
})

.controller('CalendarioCtrl', function($scope, $ionicSideMenuDelegate, $http, $ionicModal) {

 $scope.openMenu = function () {
    $ionicSideMenuDelegate.toggleLeft();
  }
  $scope.imgsrc = "";

    $ionicModal.fromTemplateUrl('templates/modal-fotoCalendario.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.modalCalendario = modal;
    });

    $scope.openModalCalendario = function(src) {
        $scope.imgsrc=src;
        $scope.modalCalendario.show();
    };

    $scope.closeModalCalendario = function() {
        $scope.modalCalendario.hide();
        $scope.imgsrc="";
    };    
})

.controller('EstudiantesCtrl', function($scope, $http, $ionicHistory, $state, $ionicSideMenuDelegate, Auth) {
    
    $scope.openMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    }

     $scope.$on('$ionicView.enter', function() {
         
        $scope.init();
    })    
    
    if(!Auth.isLoggedIn()) {
        console.log('is not loggedin');
        $ionicHistory.nextViewOptions({
            disableBack: true
        });        
        $state.go('login');        
    }

    $state.reload();

    $scope.init = function() {
        $scope.familia = Auth.getLoggedInUser();
        $scope.getEstudiantes();
    }
    
    $scope.estudiantes = [];

    $scope.getEstudiantes = function() {
        console.log($scope.familia);
        $scope.familia = Auth.getLoggedInUser();
        $scope.result = $http({
            method: 'GET',
            url: 'http://leonardo-da-vinci.edu.do:3515/api/familias/' + $scope.familia.IdFamilia + '/estudiantes',
            headers: {'Authorization': $scope.familia.token }
        })
        .success(function(estudiantes) {
            console.log('exito'); 
            console.log(estudiantes);
            $scope.estudiantes = estudiantes.data;
        })
        .error(function(error) {
            console.log('error');
            console.log(error);
        })
    }

    $scope.doRefresh = function() {
        $scope.getEstudiantes();
        $scope.$broadcast('scroll.refreshComplete');
    }    
})

.controller('EstudiantesDetailCtrl', function($scope, $http, $ionicHistory, $state, $stateParams, Auth, $ionicSideMenuDelegate, $ionicLoading) {

    $scope.openMenu = function () {
        $ionicSideMenuDelegate.toggleLeft();
    }


    if(!Auth.isLoggedIn()) {
        console.log('is not loggedin');
        $ionicHistory.nextViewOptions({
            disableBack: true
        });        
        $state.go('login');        
    }
    else {
        console.log('is loggedin');
    }

    $scope.familia = Auth.getLoggedInUser();

    $scope.notas = [];
    $scope.evaluaciones = {};
    $scope.publicaciones = {};
    $scope.publicada = {};

    $scope.estudiante = {};

    $scope.getPublicaciones = function() {
        var url = 'http://leonardo-da-vinci.edu.do/publicaciones.json?nocache=' + (new Date()).getTime();
        console.log(url);
        $http.get(url).success(function(data) {
            $scope.publicaciones = data; 
            $scope.getEstudiante();
        })
    }

    $scope.getEstudiante = function() {
        $scope.familia = Auth.getLoggedInUser();
        $ionicLoading.show({ template: '<ion-spinner icon="spiral"></ion-spinner>Cargando Datos del Estudiante...'});
        $scope.result = $http({
            method: 'GET',
            url: 'http://leonardo-da-vinci.edu.do:3515/api/estudiantes/' + $stateParams.Id,
            headers: {'Authorization': $scope.familia.token }
        })
        .success(function(estudiante) {
            $scope.estudiante = estudiante.data[0];
            console.log($scope.estudiante);
            console.log($scope.publicaciones);

            if($scope.estudiante.IdNivel == 5) {
                $scope.evaluaciones.ev1 = 1;
                $scope.evaluaciones.ev2 = 2;
                $scope.evaluaciones.ev3 = 4;
                $scope.evaluaciones.ev4 = 5;
            }
            else if($scope.estudiante.IdNivel == 4) {
                $scope.evaluaciones.ev1 = 6;
                $scope.evaluaciones.ev2 = 7;
                $scope.evaluaciones.ev3 = 8;
                $scope.evaluaciones.ev4 = 9;            
            }
            else if($scope.estudiante.IdNivel == 3) {
                $scope.evaluaciones.ev1 = 10;
                $scope.evaluaciones.ev2 = 11;
                $scope.evaluaciones.ev3 = 12;
                $scope.evaluaciones.ev4 = 13;            
            }
            if($scope.estudiante.IdNivel >= 3) {

                if($scope.estudiante.IdNivel == 5 || $scope.estudiante.IdNivel == 4) {
                    //Nivel Secundario I/II
                    $scope.publicada.ev1 = $scope.publicaciones.evaluaciones_ns.ev1;
                    $scope.publicada.ev2 = $scope.publicaciones.evaluaciones_ns.ev2;
                    $scope.publicada.prom1 = $scope.publicaciones.evaluaciones_ns.prom1;
                    $scope.publicada.ev3 = $scope.publicaciones.evaluaciones_ns.ev3;
                    $scope.publicada.ev4 = $scope.publicaciones.evaluaciones_ns.ev4;
                    $scope.publicada.prom2 = $scope.publicaciones.evaluaciones_ns.prom2;
                    $scope.publicada.promf = $scope.publicaciones.evaluaciones_ns.promf;
                    $scope.publicada.prom70 = $scope.publicaciones.evaluaciones_ns.prom70;
                    $scope.publicada.pru = $scope.publicaciones.evaluaciones_ns.pru;
                    $scope.publicada.pru30 = $scope.publicaciones.evaluaciones_ns.pru30;
                    $scope.publicada.cf = $scope.publicaciones.evaluaciones_ns.cf;
                    $scope.publicada.asi = $scope.publicaciones.evaluaciones_ns.asi;
                    $scope.publicada.nivel = $scope.publicaciones.evaluaciones_ns.nivel;
                }
                else if($scope.estudiante.IdNivel == 3) {
                    //Nivel Primario II
                    $scope.publicada.ev1 = $scope.publicaciones.evaluaciones_np.ev1;
                    $scope.publicada.ev2 = $scope.publicaciones.evaluaciones_np.ev2;
                    $scope.publicada.prom1 = $scope.publicaciones.evaluaciones_np.prom1;
                    $scope.publicada.ev3 = $scope.publicaciones.evaluaciones_np.ev3;
                    $scope.publicada.ev4 = $scope.publicaciones.evaluaciones_np.ev4;
                    $scope.publicada.prom2 = $scope.publicaciones.evaluaciones_np.prom2;
                    $scope.publicada.promf = $scope.publicaciones.evaluaciones_np.promf;
                    $scope.publicada.prom70 = $scope.publicaciones.evaluaciones_np.prom70;
                    $scope.publicada.pru = $scope.publicaciones.evaluaciones_np.pru;
                    $scope.publicada.pru30 = $scope.publicaciones.evaluaciones_np.pru30;
                    $scope.publicada.cf = $scope.publicaciones.evaluaciones_np.cf;
                    $scope.publicada.asi = $scope.publicaciones.evaluaciones_np.asi;
                    $scope.publicada.nivel = $scope.publicaciones.evaluaciones_np.nivel;            
                }
                $scope.getNotas();
            }     
        })
        .error(function(data) {
            console.log('error');
            console.log(data);
        })

        $ionicLoading.hide();
    }

    $scope.getNotas = function() {
        console.log($scope.estudiante);
        $scope.familia = Auth.getLoggedInUser();
        $ionicLoading.show({ template: '<ion-spinner icon="spiral"></ion-spinner>Cargando Notas...'});
        $scope.result = $http({
            method: 'GET',
            url: 'http://leonardo-da-vinci.edu.do:3515/api/estudiantes/' + $stateParams.Id + '/notas',
            headers: {'Authorization': $scope.familia.token },
            params: {
                ev1: $scope.evaluaciones.ev1, 
                ev2: $scope.evaluaciones.ev2,
                ev3: $scope.evaluaciones.ev3,
                ev4: $scope.evaluaciones.ev4,
                curso: $scope.estudiante.IdCurso
            }

        })
        .success(function(notas) {
            for (var i = 0; i < notas.data.length; i++) {
                notas.data[i].prom1 = 0;
                notas.data[i].prom2 = 0;
                if(notas.data[i].EV2 > 0)
                {
                    notas.data[i].prom1 = (notas.data[i].EV1 + notas.data[i].EV2)/2;
                }
                else 
                {
                    notas.data[i].prom1 = notas.data[i].EV1;
                }

                if(notas.data[i].EV4 > 0)
                {
                    notas.data[i].prom2 = (notas.data[i].EV4 + notas.data[i].EV3)/2;
                }
                else 
                {
                    notas.data[i].prom2 = notas.data[i].EV3;
                }
            }
            $scope.notas = notas.data;
            console.log($scope.notas);
        })
        .error(function(data) {
            console.log('error');
            console.log(data);
        })
        $ionicLoading.hide();
    }

    $scope.init = function() { 
        $scope.getPublicaciones();
    }

    $scope.$on('$ionicView.enter', function() {
         
        $scope.init();
    })

    $scope.doRefresh = function() {
        $scope.init();
        $scope.$broadcast('scroll.refreshComplete');
    } 
})