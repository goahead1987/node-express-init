/**
 * dev by liangkuaisheng@meituan.com on 15/08/12.
 * 员工监控页
 */


define([
        'jquery',
        'angular',
        'angular-bootstrap',
		'../../services/dialog',
		'../../services/taskService'
    ],function($, angular){

	'use strict';
    var app = angular.module('tdc/manage/monitorApp', ['taskServiceModule', 'dialogModule']);

	app.controller('staffMonitorCtrl', ['$scope', 'taskApi', 'dialogService', function($scope, taskApi, dialogService){

		//选中的行数，从0开始
		$scope.selectedRow = -1;

		// 点击列表条目中的查看，将本条样式置为选中状态
		$scope.clickRow = function (index) {
			$scope.selectedRow = index;
		}

		// 获取监控员工任务信息
		$scope.staffMonitorData = [];
		taskApi.getStaffMoniter(function (result) {
			$scope.staffMonitorData = getStaffData(result);
		}, function (result) {
			dialogService.alert("获取员工信息","请求失败，请刷新！");
		});

		/*
		* 从返回数据中获取data信息
		* */
		function getStaffData (res) {
			if (res.status === 0){
				return res.data;
			}else{
				// 请求失败返回错误信息message
				dialogService.alert("请求失败",res.status + ' : ' + res.message);
				return [];
			}
		}


	}])

	return {
		init: function(){
			angular.bootstrap(document, ['tdc/manage/monitorApp']);
		}
	};

});