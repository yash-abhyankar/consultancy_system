'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
  .module('sbAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'ui.toggle'
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', function ($stateProvider, $urlRouterProvider, $ocLazyLoadProvider) {

      $ocLazyLoadProvider.config({
          debug: false,
          events: true,
      });

      $urlRouterProvider.otherwise('/dashboard/home');

      $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'views/dashboard/main.html',
            resolve: {
                loadMyDirectives: function ($ocLazyLoad) {
                    return $ocLazyLoad.load(
                    {
                        name: 'sbAdminApp',
                        files: [
                        'scripts/directives/header/header.js',
                        'scripts/directives/header/header-notification/header-notification.js',
                        'scripts/directives/sidebar/sidebar.js',
                        'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                        ]
                    }),
                    $ocLazyLoad.load(
                    {
                        name: 'toggle-switch',
                        files: ["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                               "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                        ]
                    }),
                    $ocLazyLoad.load(
                    {
                        name: 'ngAnimate',
                        files: ['bower_components/angular-animate/angular-animate.js']
                    })
                    $ocLazyLoad.load(
                    {
                        name: 'ngCookies',
                        files: ['bower_components/angular-cookies/angular-cookies.js']
                    })
                    $ocLazyLoad.load(
                    {
                        name: 'ngResource',
                        files: ['bower_components/angular-resource/angular-resource.js']
                    })
                    $ocLazyLoad.load(
                    {
                        name: 'ngSanitize',
                        files: ['bower_components/angular-sanitize/angular-sanitize.js']
                    })
                    $ocLazyLoad.load(
                    {
                        name: 'ngTouch',
                        files: ['bower_components/angular-touch/angular-touch.js']
                    })
                }
            }
        })
        .state('dashboard.home', {
            url: '/home',
            controller: 'MainCtrl',
            templateUrl: 'views/dashboard/home.html',
            resolve: {
                loadMyFiles: function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'sbAdminApp',
                        files: [
                        'scripts/controllers/main.js',
                        'scripts/directives/timeline/timeline.js',
                        'scripts/directives/notifications/notifications.js',
                        'scripts/directives/chat/chat.js',
                        'scripts/directives/dashboard/stats/stats.js'
                        ]
                    })
                }
            }
        })

        .state('login', {
            templateUrl: 'views/pages/login.html',
            url: '/login'
        })

        .state('dashboard.notifications', {
            templateUrl: 'views/ui-elements/notifications.html',
            url: '/notifications'
        })


        .state('dashboard.positions', {
            templateUrl: 'views/positions.html',
            url: '/positions',
            controller: 'positionsController',
            resolve: {
                loadMyFile: function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'sbAdminApp',
                        files: ['scripts/controllers/positionsController.js']
                    })

                }
            }

        })







        .state('dashboard.job', {
            templateUrl: 'views/job.html',
            url: '/job/:jobId',
            controller: 'jobController',
            resolve: {
                loadMyFile: function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'sbAdminApp',
                        files: ['scripts/controllers/jobController.js']
                    })

                }
            }
        })
          .state('dashboard.downloadCV', {
              templateUrl: 'views/downloadCV.html',
              url: '/downloadCV/:candidateId',
              controller: 'downloadCVController',
              resolve: {
                  loadMyFile: function ($ocLazyLoad) {
                      return $ocLazyLoad.load({
                          name: 'sbAdminApp',
                          files: ['scripts/controllers/downloadCVController.js']
                      })

                  }
              }
          })

//below is to view all jobs in candidate dropdown

           .state('dashboard.allCandidates', {
               templateUrl: 'views/allCandidates.html',
               url: '/allCandidates',
               controller: 'allCandidatesController',
               resolve: {
                   loadMyFile: function ($ocLazyLoad) {
                       return $ocLazyLoad.load({
                           name: 'sbAdminApp',
                           files: ['scripts/controllers/allCandidatesController.js']
                       })

                   }
               }
           })


        .state('dashboard.candidate', {
            templateUrl: 'views/candidate.html',
            url: '/candidate/:jobId/:candidateId',
            controller: 'candidateController',
            resolve: {
                loadMyFile: function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'sbAdminApp',
                        files: ['scripts/controllers/candidateController.js',
                        'scripts/directives/enterEvent/enterEvent.js']
                    })

                }
            }
        })

           .state('dashboard.viewJd', {
               templateUrl: 'views/viewJd.html',
               url: '/viewJd/:jdId',
               controller: 'viewJdController',
               resolve: {
                   loadMyFile: function ($ocLazyLoad) {
                       return $ocLazyLoad.load({
                           name: 'sbAdminApp',
                           files: ['scripts/controllers/viewJdController.js']
                       })

                   }
               }
           })

           .state('dashboard.editJd', {
               templateUrl: 'views/editJd.html',
               url: '/editJd/:jobId',
               controller: 'editJdController',
               resolve: {
                   loadMyFile: function ($ocLazyLoad) {
                       return $ocLazyLoad.load({
                           name: 'sbAdminApp',
                           files: ['bower_components/summernote/dist/summernote.min.js',
                           'bower_components/summernote/dist/summernote.css',
                               'scripts/controllers/editJdController.js',
                               'scripts/directives/enterEvent/enterEvent.js'
                           ]

                       })

                   }
               }
           })


            .state('dashboard.calender', {
                templateUrl: 'views/calender.html',
                url: '/calender',
                controller: 'calenderController',
                resolve: {
                    loadMyFile: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'sbAdminApp',
                            files: ['scripts/controllers/calenderController.js']
                        })

                    }
                }
            })



            .state('dashboard.statistics', {
                templateUrl: 'views/statistics.html',
                url: '/statistics',
                controller: 'statisticsController',
                resolve: {
                    loadMyFile: function ($ocLazyLoad) {
                        return $ocLazyLoad.load({
                            name: 'sbAdminApp',
                            files: ['scripts/controllers/statisticsController.js']
                        })

                    }
                }
            })


        .state('dashboard.newCandidates', {
            templateUrl: 'views/newCandidates.html',
            url: '/newCandidates',
            controller: 'newCandidatesController',
            resolve: {
                loadMyFile: function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'sbAdminApp',
                        files: ['scripts/controllers/newCandidatesController.js']
                    })

                }
            }
        })
        .state('dashboard.newjd', {        //for posting/uploading new job description
            templateUrl: 'views/newjd.html',
            url: '/newjd',
            controller: 'jdController',
            resolve: {
                loadMyFile: function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'sbAdminApp',
                        files: ['scripts/controllers/jdController.js',
                        'bower_components/summernote/dist/summernote.min.js',
                        'bower_components/summernote/dist/summernote.css',
                        'scripts/directives/enterEvent/enterEvent.js'


                        ]
                    })

                }
            }
        })


  }]);


