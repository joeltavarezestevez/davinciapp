angular.module('davinciapp.services', [])

.factory('Auth', ['$rootScope', '$localStorage', '$http', 'md5', function ($rootScope, $localStorage, $http, md5) {    
  return {
    login: function (user) {
        return $http({
            method: 'GET',
            url: "http://50.116.97.38:8000/api/Usuarios?_where=((NombreUsuario,eq," + user.username +")~and(Contrase%C3%B1a,eq," + md5.createHash(user.password) + "))"
        });
    },
    getLoggedInUser: function () {
      if ($rootScope.user === undefined || $rootScope.user == null) {
        var userStr = $localStorage.getObject('usuario','[]');
        if (userStr) {
          $rootScope.user = angular.fromJson(userStr);
        }
      }
      console.log($rootScope.user);
      return $rootScope.user;
    },
    isLoggedIn: function () {
      return this.getLoggedInUser() != undefined;
    },
    setLoggedInUser: function (user) {
      $rootScope.user = user;
      if (user == null) {
        $localStorage.storeObject('usuario',user);
      } else {
        $localStorage.storeObject('usuario',angular.toJson($rootScope.user));
      }
    }
  };
}])

.factory('$localStorage', ['$window', function($window) {
  return {
    store: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    storeObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key,defaultValue) {
      return JSON.parse($window.localStorage[key] || defaultValue);
    },
    deleteObject: function(key,defaultValue) {
      $window.localStorage[key] = null;
    }        
  }
}])