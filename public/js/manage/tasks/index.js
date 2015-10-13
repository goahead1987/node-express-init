define([
        'jquery',
        'angular',
        'angular-bootstrap',
        '../../services/dialog',
        '../../services/taskService'
    ],function($, angular){

    var app = angular.module('tdc/manage/tasksApp', ['taskServiceModule', 'dialogModule']);
	
	app.controller('indexCtrl', ['$scope', 'taskApi', 'dialogService', function($scope, taskApi, dialogService){
		
		
		
		
		$scope.tasks = [];
		$scope.group = null;
		$scope.taskPageSize = 100;
		
		$scope.pageSizeOptions = [10, 50, 100, 200];
		
		$scope.$watch('taskPageSize', function(newValue, oldValue){
			getTasks(1, $scope.taskPageSize);
		});
		
		// 获取任务信息
		function getTasks(pno, psize){
			
			taskApi.getTasksByGroupId({groupId: GD.groupId, pageNo: pno, pageSize: psize}, function(result){
		        if(result.status === 0){
		            //dialogService.alert("获取分组信息", data.group.name + "已经被删除");
					$scope.tasks = result.data;

					$scope.page = result.page;
					// 清楚已经选中的ID
					$scope.selected = [];
					
		        } else {
		            dialogService.alert("获取分组信息", "获取分组信息失败  " + result.message);
		        }
			});
		}
		
		
		function init(){
			//获取分组信息
			taskApi.getGroupInfo({groupId: GD.groupId}, function(result){
			
	            if(result.status === 0){
	                //dialogService.alert("获取分组信息", data.group.name + "已经被删除");
					$scope.group = result.data;
	            } else {
	                dialogService.alert("获取分组信息", "获取分组信息失败  " + result.message);
	            }
			});
			
			// 获取分组下的任务列表
			getTasks(1, $scope.taskPageSize);
		}
		
		function createTask(ids){
			var poiIds = ids.split(",");
			var items = [];
			var group = $scope.group;
			angular.forEach(poiIds, function(item){
				items.push({
					groupId: group.id,
					outerType: group.outerType,
					outerPoiId: item
				});
			});
			taskApi.addTask(items, function(result){
				
				if(result.status === 0){
					dialogService.alert("添加ID",  "已经被成功添加");
					getTasks(1, $scope.taskPageSize);
				} else {
					dialogService.alert("添加ID", "添加失败::  " + result.message);
				}
			});
		}
		
		
		$scope.pageChanged = function(){
			
			// 获取分组下的任务列表
			var pno = $scope.page.pageNo;
			getTasks(pno, $scope.taskPageSize);
		};
		
		/**
		 * 添加酒店ID到分组
		 * @param poiIds  Array<Integer>
		 */
		
		$scope.addTasks= function(ids){
			
			createTask(ids);
		};
		
		$scope.batchAdd = function(){
			
            var result = dialogService.modal('batchAdd.html', {
				ids: '',
				idsVal: 0,
				isIdsValid: function(ids){
					if(/^(\d+(,)?)*\d+$/.test(ids)){
						this.idsVal = 1;
					} else {
						this.idsVal = -1;
					}
				}
			});
			
            result.then(function(data){
				
				createTask(data.ids);
					
			}, function(){
				// close dialog;
			});
		};
		
		
		$scope.selected = [];
		// 批量删除任务
		$scope.deleteTasks = function(){
			taskApi.deleteTasks({taskIds:$scope.selected.join(",")}, function(result){
				
	            if(result.status === 0){
	                dialogService.alert("删除任务",  "选中任务已经被成功删除");
					// 清楚已经选中的ID
					$scope.selected = [];
					getTasks(1, $scope.taskPageSize);

	            } else {
	                dialogService.alert("删除任务", "删除失败::  " + result.message);
	            }
				
			});
		};
		
		var updateSelected = function(action, id) {
		  if (action === 'add' && $scope.selected.indexOf(id) === -1) {
		    $scope.selected.push(id);
		  }
		  if (action === 'remove' && $scope.selected.indexOf(id) !== -1) {
		    $scope.selected.splice($scope.selected.indexOf(id), 1);
		  }
		};

		$scope.updateSelection = function($event, id) {
		  var checkbox = $event.target;
		  var action = (checkbox.checked ? 'add' : 'remove');
		  updateSelected(action, id);
		};

		$scope.selectAll = function($event) {
		  var checkbox = $event.target;
		  var action = (checkbox.checked ? 'add' : 'remove');
		  for ( var i = 0; i < $scope.tasks.length; i++) {
		    var entity = $scope.tasks[i];
		    updateSelected(action, entity.id);
		  }
		};

		$scope.isSelected = function(id) {
		  return $scope.selected.indexOf(id) >= 0;
		};

		//something extra I couldn't resist adding :)
		$scope.isSelectedAll = function() {
		  return $scope.selected.length === $scope.tasks.length  && $scope.tasks.length !== 0;
		};
		
		
		init();
	}]);


	return {
		init: function(){
			angular.bootstrap(document, ['tdc/manage/tasksApp']);
		}
	};

});