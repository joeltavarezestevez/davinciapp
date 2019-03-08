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
        console.log($scope.usuario);
        console.log($scope.passForm);
        if($scope.passForm.password == $scope.passForm.confirmPassword) {
            console.log('Contrasena correcta');
            $scope.usuario.Contraseña = md5.createHash($scope.passForm.password);
            //$scope.usuario.Accesado = 1;
            console.log($scope.usuario);
            $http({
                method: 'PATCH',
                url: 'http://leonardo-da-vinci.edu.do:8000/api/Usuarios/'+$scope.usuario.Id,
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param($scope.usuario)
            })
            .success(function(data) {
                $scope.showAlert('Su contraseña ha sido actualizada.');
                $scope.closeModalPassword();              
            })
            .error(function(data) {
                console.log('error');
                console.log(data);
                $scope.showAlert('Hubo un error al intentar cambiar su contraseña.' + data);
                return;
            })
        }
        else {
            console.log('Contrasena incorrecta');
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

.controller('ApadaviCtrl', function ($scope, $http, $ionicModal, $rootScope, $location, $ionicHistory, $state, $ionicSideMenuDelegate, Auth) {
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
        $http.get('http://leonardo-da-vinci.edu.do/apadavi.json').success(function(data) {    
            $scope.apadavi = data;
        }); 
    }

    $scope.getApadavi();

    $scope.doRefresh = function() {
        $scope.getApadavi();
        $scope.$broadcast('scroll.refreshComplete');
    }

})

.controller('DeportivasCtrl', function ($scope, $http, $ionicModal, $rootScope, $ionicHistory, $state, $ionicSideMenuDelegate, Auth) {
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
        $http.get('http://leonardo-da-vinci.edu.do/deportivas.json').success(function(data) {    
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

.controller('CircularesCtrl', function ($scope, $http, $ionicModal, $rootScope, $ionicHistory, $state, $ionicSideMenuDelegate, Auth) {
    
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
        $http.get('http://leonardo-da-vinci.edu.do/circulares.json').success(function(data) {    
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
        $http.get('http://leonardo-da-vinci.edu.do/promociones.json').success(function(data) {    
            $scope.promociones = data;
        });        
    }

    $scope.getPromociones();

    $scope.doRefresh = function() {
        $scope.getPromociones();
        $scope.$broadcast('scroll.refreshComplete');
    }    
})

.controller('HorariosCtrl', function ($scope, $http, $ionicModal, $rootScope, $ionicHistory, $state, $ionicSideMenuDelegate, Auth) {
    
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
    $http.get('http://leonardo-da-vinci.edu.do/horarios.json').success(function(data) {
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

.controller('HorarioDetailCtrl', function ($scope, $http, $stateParams, $rootScope, $ionicHistory, $state, $ionicModal, $ionicSideMenuDelegate, Auth) {

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
    $http.get('http://leonardo-da-vinci.edu.do/horarios.json').success(function(data) {
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

.controller('ApadaviDetailCtrl', function ($scope, $http, $stateParams, $ionicModal, $rootScope, $ionicHistory, $state, $ionicSideMenuDelegate, Auth) {
      
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
    $http.get('http://leonardo-da-vinci.edu.do/apadavi.json').success(function(data) {
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

.controller('CircularDetailCtrl', function ($scope, $http, $stateParams, $ionicModal, $rootScope, $ionicHistory, $state, $ionicSideMenuDelegate, Auth) {

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
    $http.get('http://leonardo-da-vinci.edu.do/circulares.json').success(function(data) {
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

.controller('DeportivaDetailCtrl', function ($scope, $http, $stateParams, $ionicModal, $rootScope, $ionicHistory, $state, $ionicSideMenuDelegate, Auth) {

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
        $http.get('http://leonardo-da-vinci.edu.do/deportivas.json').success(function(data) {
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

        Auth.login($scope.loginData).
        then(function(response) {
            $scope.user = response.data;
            if($scope.user.length > 0) {
                if($scope.user[0].NombreUsuario == $scope.loginData.username && $scope.user[0].Contraseña == md5.createHash($scope.loginData.password)) {
                    Auth.setLoggedInUser($scope.user[0]);
                    if($scope.user[0].Accesado !== 0) {
                        $ionicHistory.nextViewOptions({
                            disableBack: true
                        });        
                        $state.go('dashboard');                       
                    }
                    else {
                        $location.path("app/contrasena/" + $scope.user[0].Id);
                    }
                }
                else {
                    $scope.showAlert('Usuario y/o Contraseña Incorrecto.');
                    return;
                } 
            }
            else {
                $scope.showAlert('Usuario y/o Contraseña Incorrecto.');
                return;
            }
        })
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

    $scope.getUserData = function() {
        $http.get('http://leonardo-da-vinci.edu.do:8000/api/Usuarios/'+$stateParams.Id).success(function(data) {
            $scope.usuario = data[0]
        });
    }

    $scope.cambiarContrasena = function() {
        console.log($scope.usuario);
        if($scope.passForm.password === $scope.passForm.confirmPassword) {
            $scope.usuario.Contraseña = md5.createHash($scope.passForm.password);
            $scope.usuario.Accesado = 1;
            $http({
                method: 'PATCH',
                url: 'http://leonardo-da-vinci.edu.do:8000/api/Usuarios/'+$stateParams.Id,
                headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
                data: $.param($scope.usuario)
            })
            .success(function(data) {
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

.controller('DashboardController', function($scope, $state, $rootScope, $ionicHistory, $state, Auth) {
    
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
        $scope.query = 'select Estudiantes.Id, Estudiantes.Nombre1, Estudiantes.Nombre2, Estudiantes.Apellido1, Estudiantes.Apellido2, Estudiantes.IdCurso From Estudiantes INNER JOIN Inscripciones ON Estudiantes.Id = Inscripciones.IdEstudiante INNER JOIN Secciones ON Inscripciones.IdSeccion = Secciones.Id INNER JOIN Cursos ON Secciones.IdCurso = Cursos.Id and Cursos.Id > 12 INNER JOIN Niveles ON Cursos.IdNivel = Niveles.Id where Estudiantes.IdFamilia = ' + $scope.familia.IdFamilia;
        console.log($scope.query);
        $scope.result = $http({
            method: 'POST',
            url: 'http://leonardo-da-vinci.edu.do:8000/dynamic',
            headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
            data: $.param({ 'query': $scope.query })

        })
        .success(function(data) {
            console.log('exito'); 
            console.log(data);
            $scope.estudiantes = data;
        })
        .error(function(data) {
            console.log('error');
            console.log(data);
            console.log($scope.query);
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
        $http.get('http://leonardo-da-vinci.edu.do/publicaciones.json').success(function(data) {
            $scope.publicaciones = data; 
            $scope.getEstudiante();
        })
    }

    $scope.getEstudiante = function() {

        $ionicLoading.show({ template: '<ion-spinner icon="spiral"></ion-spinner>Cargando Datos del Estudiante...'});

        $scope.query = 'select Estudiantes.Id, Estudiantes.Matricula, Estudiantes.Nombre1, Estudiantes.Nombre2, Estudiantes.Apellido1, Estudiantes.Apellido2, Cursos.Descripcion as Curso, Secciones.Codigo as Seccion, Niveles.Id as IdNivel, Niveles.Descripcion as Nivel from Estudiantes INNER JOIN Inscripciones ON Estudiantes.Id = Inscripciones.IdEstudiante INNER JOIN Secciones ON Inscripciones.IdSeccion = Secciones.Id INNER JOIN Cursos ON Secciones.IdCurso = Cursos.Id and Cursos.Id > 12 INNER JOIN Niveles ON Cursos.IdNivel = Niveles.Id where Estudiantes.IdFamilia = ' + $scope.familia.IdFamilia + ' and Estudiantes.Id = ' + $stateParams.Id;
        console.log($scope.query);
        $scope.result = $http({
            method: 'POST',
            url: 'http://leonardo-da-vinci.edu.do:8000/dynamic',
            headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
            data: $.param({ 'query': $scope.query })

        })
        .success(function(data) {
            $scope.estudiante = data[0];
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
        })
        .error(function(data) {
            console.log('error');
            console.log(data);
            console.log($scope.query);
        })

        $ionicLoading.hide();
    }

    $scope.getNotas = function() {
        $ionicLoading.show({ template: '<ion-spinner icon="spiral"></ion-spinner>Cargando Notas...'});
        $scope.query = "SELECT sn1.Promedio as EV1, sn2.Promedio as EV2, sn3.Promedio as EV3,  sn4.Promedio as EV4, Asignaturas.Nombre as Asignatura FROM CalificacionesNumericas INNER JOIN CalificacionesNumericasSemestrales cs1 ON CalificacionesNumericas.Id = cs1.IdCalificacionNumerica and cs1.Semestre = 1 INNER JOIN CalificacionesNumericasSemestrales cs2 ON CalificacionesNumericas.Id = cs2.IdCalificacionNumerica and cs2.Semestre = 2 RIGHT JOIN SubCalificacionesNumericas sn1 ON cs1.Id = sn1.IdCalificacionSemestral and sn1.IdEvaluacion = " + $scope.evaluaciones.ev1 + " RIGHT JOIN SubCalificacionesNumericas sn2 ON cs1.Id = sn2.IdCalificacionSemestral and sn2.IdEvaluacion = " + $scope.evaluaciones.ev2 + " LEFT JOIN SubCalificacionesNumericas sn3 ON cs2.Id = sn3.IdCalificacionSemestral and sn3.IdEvaluacion = " + $scope.evaluaciones.ev3 + " LEFT JOIN SubCalificacionesNumericas sn4 ON cs2.Id = sn4.IdCalificacionSemestral and sn4.IdEvaluacion = " + $scope.evaluaciones.ev4 + " INNER JOIN  Asignaturas ON CalificacionesNumericas.IdAsignatura = Asignaturas.Id and Asignaturas.Estado = 1 INNER JOIN Inscripciones ON CalificacionesNumericas.IdInscripcion = Inscripciones.Id and Inscripciones.IdAnio = 1 INNER JOIN Estudiantes e ON Inscripciones.IdEstudiante = e.Id WHERE e.Id = " + $stateParams.Id + " order by Asignaturas.Orden";
        console.log($scope.query);
        $scope.result = $http({
            method: 'POST',
            url: 'http://leonardo-da-vinci.edu.do:8000/dynamic',
            headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
            data: $.param({ 'query': $scope.query })

        })
        .success(function(data) {
            
            if(data.EV2 > 0)
            {
                data.prom1 = (data.EV1 + data.EV2)/2;
            }
            else 
            {
                data.prom1 = data.EV1;
            }

            if(data.EV4 > 0)
            {
                data.prom2 = (data.EV4 + data.EV3)/2;
            }
            else 
            {
                data.prom2 = data.EV3;
            }
            $scope.notas = data;
            console.log($scope.notas);
        })
        .error(function(data) {
            console.log('error');
            console.log(data);
            console.log($scope.query);
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