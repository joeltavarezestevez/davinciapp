angular.module('davinciapp.services', [])

.factory('Auth', ['$rootScope', '$localStorage', '$http', 'md5', function ($rootScope, $localStorage, $http, md5) {    
  return {
    login: function (user) {
      user.password = md5.createHash(user.password);
        return $http({
          method: 'POST',
          url: 'http://localhost:3515/api/usuarios/signin',
          headers: { 'Content-Type' : 'application/x-www-form-urlencoded' },
          data: $.param(user)
        });
    },
    getLoggedInUser: function () {
      if ($rootScope.user === undefined || $rootScope.user == null) {
        var userStr = $localStorage.getObject('usuario','[]');
        if (userStr) {
          $rootScope.user = angular.fromJson(userStr);
        }
      }
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