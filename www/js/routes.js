angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.home', {
    url: '/Home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('menu.aPropos', {
    url: '/About',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aPropos.html',
        controller: 'aProposCtrl'
      }
    }
  })

  .state('menu', {
    url: '/MeDocs',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

  .state('menu.theme1', {
    url: '/Theme1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/theme1.html',
        controller: 'theme1Ctrl'
      }
    }
  })

  .state('menu.theme2', {
    url: '/Theme2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/theme2.html',
        controller: 'theme2Ctrl'
      }
    }
  })

  .state('menu.theme3', {
    url: '/Theme3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/theme3.html',
        controller: 'theme3Ctrl'
      }
    }
  })

  .state('meDocs', {
    url: '/Loading',
    templateUrl: 'templates/meDocs.html',
    controller: 'meDocsCtrl'
  })

  .state('menu.sousThMe1', {
    url: '/Stheme1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sousThMe1.html',
        controller: 'sousThMe1Ctrl'
      }
    }
  })

$urlRouterProvider.otherwise('/MeDocs/Home')

  

});