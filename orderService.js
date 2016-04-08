/*global angular*/
/*global console*/
(function () {
    "use strict";
    angular.module('app').service("OrderService", ['$http', 'HHProvider', 'HHConstant', function ($http, HHProvider, HHConstant) {
        var OrderService = {};



        OrderService.getOrderList = function () {
            console.log('HHProvider11111111111111111111111');
            console.log(HHProvider);
            console.log(HHProvider.appContext + '/api/values/GetAllOrder');
            return $http.get(HHProvider.HHProvider.apiServiceURL + '/api/values/GetAllOrder').success(function (data) {});
        };
        console.log("OrderService");
        console.log(OrderService);
        return OrderService;
    }]);
    angular.module('app').service("CalendarService", ['HHProvider', 'HHConstant', function (HHProvider, HHConstant) {
        var CalendarService = {};
        CalendarService.init = function () {
            CalendarService.format = 'dd-MMM-yyyy';
        };
        CalendarService.init();
        CalendarService.getBroadCastStartAndEndDate = function (data) {
            var broadCastStartDay, broadCastEndDay;
            var d = data;
            var d1 = new Date(d.getTime());
            var d2 = new Date(d.getTime());
            d1.setMonth(d1.getMonth() + 1);
            d1.setDate(1);
            d1.setDate(d1.getDate() - 1);
            while (d1.getDay() !== 1) {
                d1.setDate(d1.getDate() - 1);
            }
            if (d1.getTime() <= d.getTime()) {
                broadCastStartDay = new Date(d1.getTime());
            } else {
                d2.setDate(1);
                while (d2.getDay() != 1) {
                    d2.setDate(d2.getDate() - 1);
                }
                broadCastStartDay = new Date(d2.getTime());
            }
            var d3 = new Date(d.getTime());
            d3.setMonth(d3.getMonth() + 1);
            d3.setDate(1);
            d3.setDate(d3.getDate() - 1);
            while (d3.getDay() !== 0) {
                d3.setDate(d3.getDate() - 1);
            }
            broadCastEndDay = d3;
            return {
                'broadCastStartDay': broadCastStartDay,
                'broadCastEndDay': broadCastEndDay
            };
        };
        return CalendarService;
    }]);
}());