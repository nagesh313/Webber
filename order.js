/*global angular*/
/*global console*/
/*global orderList*/
(function () {
    "use strict";
    angular.module('app').controller("OrderListController", ['$scope', '$uibModal', '$http', '$location', 'HHConstant', 'orderList', function ($scope, $uibModal, $http, $location, HHConstant, orderList) {
        $scope.loadOrderList = function () {
            console.log("here123123");
            console.log(orderList);
            $scope.orderList = orderList.data;
            $scope.currentPage = 1;
            $scope.totalItems = $scope.orderList.length;
            $scope.entryLimit = HHConstant; // items per page
            $scope.noOfPages = Math.ceil($scope.totalItems / $scope.entryLimit);
            console.log($scope.noOfPages);
        };

        /* code to redirect to some other view inside a function
         * 
         * $scope.takeMeToHome = function () {
             $location.path('/home');
         };*/
        /*
         * code to display items on a modal by giving a service call
         * 
         * $scope.viewLineItems = function (index) {
            $http.get('http://localhost:56948/api/values/GetAllOrder').success(function (data) {
                console.log("Ajax Call successful");
                var modalInstance = $uibModal.open({
                    templateUrl: '../../partials/viewOrderLineItems.html',
                    size: 'lg',
                    resolve: {
                        lineItems1: function () {
                            //  console.log($scope.orderList[index]);
                            return data;
                        }
                    },
                    controller: ['$scope', 'lineItems1', '$location', function ($scope, lineItems1, $location) {
                        // console.log($scope);
                        $scope.lineItems = lineItems1;
                        $scope.viewOrder = function () {
                            modalInstance.close();
                            
                        };
                    }]
                });
            });
        };*/
    }]);
    angular.module('app').controller("SearchOrderController", ['$scope', '$uibModal', '$http', '$location', function ($scope, $uibModal, $http, $location) {
        $scope.items = ['item1', 'item2', 'item3'];
        $scope.takeToOrderList = function () {
            $location.path('/orderList');
        };
        $scope.searchOrder = function () {
            /* $http.post('http://localhost:8080/BlogApp1/rest/searchOrder').success(function (data) {
                 // $scope.orderData = data;
                 var modalInstance = $uibModal.open({
                     templateUrl: 'partials/viewOrderModal.html',
                     size: 'lg'
                 });
             });*/
        };
    }]);
    angular.module('app').controller("ViewOrderController", ['$scope', '$uibModal', '$http', function ($scope, $uibModal, $http) {
        /* $scope.viewOrder = function () {
             $http.post('http://localhost:8080/BlogApp1/rest/viewOrder').success(function (data) {

             });
         };*/
    }]);
    angular.module('app').controller("CreateOrderController", ['$scope', '$uibModal', '$http', 'HHConstant', 'HHProvider', 'CalendarService', function ($scope, $uibModal, $http, HHConstant, HHProvider, CalendarService) {
        $scope.order = {};
        $scope.startingDay = 0;
        this.CalendarService = CalendarService;
        $scope.init = function () {
            CalendarService.init();
            /*$scope.order.startDate = new Date();*/
            $scope.adjustOrderStartDateCalendar()
            $scope.adjustOrderEndDateCalendar();
            console.log("asdfasdfasdf");
            $scope.orderStartDateInlineOptions = {
                showWeeks: true,
                minMode: 'day',
                maxMode: 'day'
            };
            $scope.orderEndDateInlineOptions = {
                showWeeks: true,
                minMode: 'day',
                maxMode: 'day'
            };
            $scope.order.calendarType = "0";
        };
        $scope.adjustOrderStartDateCalendar = function (dates) {
            var today=new Date();
            if (typeof (dates) !== 'undefined') {
                $scope.orderStartDateStartLimit =today.getTime()>dates.broadCastStartDay?today:dates.broadCastStartDay;
                $scope.orderStartDateEndLimit =dates.broadCastEndDay
            }else {
                var today = new Date();
                $scope.orderStartDateStartLimit = new Date();
            }

            /*$scope.orderStartDateEndLimit = new Date();*/


            /*  
              
              $scope.orderStartDateEndLimit.setFullYear($scope.orderStartDateEndLimit.getFullYear() + 2);
              if ($scope.order.calendarType === "1" && typeof (dates) !== 'undefined') {
                  var today = new Date();
                  $scope.orderStartDateStartLimit = dates.broadCastStartDay.getTime() < today.getTime() ? today : dates.broadCastStartDay;
                  $scope.orderStartEndStartLimit = dates.broadCastEndDay.getTime() < $scope.orderStartDateEndLimit.getTime() ? dates.broadCastEndDay : $scope.orderStartDateEndLimit;
                  'broadCastStartDay': broadCastStartDay,
                  'broadCastEndDay': broadCastEndDay
              }*/
        };
        $scope.adjustOrderEndDateCalendar = function (dates) {/*
            if (typeof (dates) !== 'undefined') {
                

            } else if ($scope.order.calendarType === "1") {
                var today = new Date();
                

            } else {
                var today = new Date();
                $scope.orderEndDateStartLimit = typeof ($scope.order.startDate) === 'undefined' ? new Date() : today.getTime();
                var endDate=new Date($scope.orderEndDateStartLimit.getTime());
                endDate.setMonth(endDate.getMonth()+3);
                endDate.setDate(15);
                endDate.setDate(endDate.getDate()-1);
                $scope.orderEndDateEndLimit = endDate;
            }*/

            /*  var today = new Date();
              $scope.orderEndDateStartLimit = new Date($scope.order.startDate.getTime());
              $scope.orderEndDateEndLimit = new Date($scope.orderEndDateStartLimit.getTime());
              $scope.orderEndDateEndLimit.setMonth($scope.orderEndDateEndLimit.getMonth() + 3);
              $scope.orderEndDateEndLimit.setDate(1);
              $scope.orderEndDateEndLimit.setDate($scope.orderEndDateEndLimit.getDate() - 1);


              if ($scope.order.calendarType === "1" && typeof (dates) !== 'undefined') {
                  var today = new Date();
                  $scope.orderEndDateStartLimit = dates.broadCastStartDay.getTime() > today.getTime() ? dates.broadCastStartDay : today;
                  $scope.orderEndDateStartLimit = $scope.orderEndDateStartLimit.getTime() > $scope.order.startDate.getTime() ? $scope.orderEndDateStartLimit : new Date($scope.order.startDate.getTime());
                  $scope.orderEndDateEndLimit = $scope.orderEndDateEndLimit.getTime() < dates.broadCastEndDay.getTime() ? $scope.orderEndDateEndLimit : dates.broadCastEndDay;
              }*/
        };
        $scope.toggleCalendar = function (scopeVar) {
            $scope[scopeVar + 'InlineOptions'].isOpen = !$scope[scopeVar + 'InlineOptions'].isOpen;
        };
        $scope.calendarTypeChange = function () {
            $scope.order.startDate = null;
            $scope.order.endDate = null;
            $scope.startingDay = $scope.startingDay === 0 ? 1 : 0;
            if($scope.order.calendarType === "1"){
                  var d = new Date();
                    d.setDate(15);
                    dates = CalendarService.getBroadCastStartAndEndDate(d);
                    $scope.adjustOrderStartDateCalendar(dates);
                    $scope.adjustOrderEndDateCalendar(dates);
            }
            else{
            $scope.adjustOrderStartDateCalendar();
            $scope.adjustOrderEndDateCalendar();
            }
        };
        $scope.countOfMove = 0;
        var dates = {};
        $scope.$watch('orderStartInlineOptions.isOpen', function () {
            console.log("inside  orderStartInlineOptions.isOpen" + $scope.countOfMove);
            $scope.countOfMove = 0;
        });
        $scope.$watch('orderStartInlineOptions.isOpen', function () {
            console.log("inside  orderStartInlineOptions.isOpen" + $scope.countOfMove);
            $scope.countOfMove = 0;
        });
        $scope.$watch('countOfMove', function (newVal, OldVal) {
            if ($scope.order.calendarType === "1" && typeof (newVal) !== 'undefined') {
                if (newVal !== OldVal) {
                    console.log(newVal);
                    var d = new Date();
                    d.setDate(15);
                    d.setMonth(d.getMonth() + newVal);
                    dates = CalendarService.getBroadCastStartAndEndDate(new Date(d.getTime()));
                    $scope.adjustOrderStartDateCalendar(dates);
                    $scope.adjustOrderEndDateCalendar(dates);
                }
            }
        });
    }]);
}());