define([
        'jquery',
        'angular',
        'angular-bootstrap',
        '../../services/dialog',
        '../../services/taskService',
		'../../services/utilFilter'
    ],function($, angular){

    var app = angular.module('tdc/manage/groupConfApp', ['taskServiceModule', 'dialogModule', 'filterModule']);


	app.controller('indexCtrl', ['$scope', 'taskApi', 'dialogService', function($scope, taskApi, dialogService){
		
		$scope.group = null;
		$scope.allFiledList =  [];
		$scope.allSourceList = [];
		function init(){
			//获取分组信息
			taskApi.getGroupInfo({groupId: GD.groupId}, function(result){
			
	            if(result.status === 0){
					var group = result.data;
					$scope.group = group;
					
					$scope.allFiledList =  dealOuterOperateFieldList(group);
					$scope.allSourceList = initSource(group.competitorList, group.outerCompetitorList);
	            } else {
	                dialogService.alert("获取分组信息", "获取分组信息失败  " + result.message);
	            }
			});
		}
		
		/**
		 * 初始化数据来源
		 */
		function initSource(selectedSource, source){
			
			var source_copy = angular.copy(source);
			var hash = {};
			angular.forEach(selectedSource, function(item){
				hash[item.outerCompetitorId] = true;
			});
			
			angular.forEach(source_copy, function(item){
				if(hash[item.outerCompetitorId]){
					item.selected = true;
				}
			});
			
			return source_copy;
		};
		
		function getSelectedSource(source){
			
			var arr = [];
			angular.forEach(source, function(item){
				if(item.selected){
					var copy = angular.copy(item);
					delete copy.selected;
					arr.push(copy);
				}
			});
			
			return arr;
		};
		
		
		/**
		 * initOperateAttrs 初始化已选中的可操作字段
		 **/
		function initOperateAttrs(arr, obj){	
			angular.forEach(arr, function(item){
				
				if(item.node && item.node.length > 0){
					obj[item.outerId] = initOperateAttrs(item.node, {});
				} else {
					obj[item.outerId] = true;
				}
			});
			
			return obj;
		}
		
		// 递归处理可操作字段
		function recursionOperateFilds(arr, selectdFilds){
			
			angular.forEach(arr, function(item){
				
				var selected_filed = selectdFilds[item.outerId];
				if(selected_filed){
					
					if(!item.node){
						item.selected = true;
					} else {
						
						recursionOperateFilds(item.node, selected_filed);
					}
				}
				
			});
			
		}
		
		
		// 处理全部可操作字段
		function dealOuterOperateFieldList(group){
			// 已设置的可操作字段
			var selectFileds = initOperateAttrs(group.operateFieldList, {});
			
			// 可以操作的全部字段集合
			var copyAllFiledList = angular.copy(group.outerOperateFieldList);
			
			// 删除扩展字段中的房屋设施
			for(var i = 0, l = copyAllFiledList.length; i < l; i++){
				var item = copyAllFiledList[i];
				var roomFacilitiesIndex;
				if(item.outerId === 'poiExtAttrs'){
					for(var j = 0, k = item.node.length; j < k; j++){
						if(item.node[j].outerId === 'roomFacilities'){
							roomFacilitiesIndex = j;
							break;
						}
					}
					item.node.splice(j, 1);
				}
			}
			
			recursionOperateFilds(copyAllFiledList, selectFileds);
			
			return copyAllFiledList;
		};
		
		// 获取已配置的字段
		function getSelectedFields(arr, array){
			var arr_copy = angular.copy(arr);
			angular.forEach(arr_copy, function(item){
				
				if(item.node){
				
					var subarray = getSelectedFields(item.node, []);
					if(subarray.length > 0){
						var item_copy = angular.copy(item);
						delete item_copy.node;
						item_copy.node = subarray;
						array.push(item_copy);
					}
					
				} else if(item.selected){
					array.push(item);
					delete item.selected;
				}
			});
			
			return array;
		}
		
		
		$scope.saveConfiguration = function(){
			var group = $scope.group;
			var fields = getSelectedFields($scope.allFiledList ,[]);
			var sources = getSelectedSource($scope.allSourceList);
			taskApi.updateGroup({groupId: group.id}, {id:group.id, outerType: group.outerType, operateFieldList: fields, competitorList: sources}, function(result){
				
	            if(result.status === 0){
	                dialogService.alert("配置字段", "配置字段成功");
	            } else {
	                dialogService.alert("配置字段", "配置字段失败::  " + result.message);
	            }
			});
			
		};
		
		init();
	}]);


	return {
		init: function(){
			angular.bootstrap(document, ['tdc/manage/groupConfApp']);
		}
	};

});