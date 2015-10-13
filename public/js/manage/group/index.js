define([
        'jquery',
        'angular',
        'angular-bootstrap',
        '../../services/dialog',
        '../../services/taskService'
    ],function($, angular){

		var app = angular.module('tdc/manage/groupApp', ['taskServiceModule', 'dialogModule']);


	app.controller('indexCtrl', ['$scope', 'taskApi', 'dialogService', function($scope, taskApi, dialogService){

		

        $scope.outerTypeList = [];
        // 获取分组类型
        taskApi.getGroupTypes(function(result){

            $scope.outerTypeList = result.data;    
        });

        $scope.groups = [];
    	// 获取分组列表
    	taskApi.getGroups(function(result){
            if(result.status === 0){
	    		var records = result.data;
	    		var groups = [];
	    		records.forEach(function(item){

	    			groups.push({
	    				id: item.id,
	                    outerType: item.outerType,
	                    outerTypeName: item.outerTypeName,
	    				name: item.name,
	    				outerType: item.outerType,
	    				memberCount: item.memberList.length,
	    				unDoneCount: item.taskCount - item.doneTaskCount,

	    			});
	    		});
	    		$scope.groups = groups;
			} else {
				dialogService.alert("获取分组", "获取分组失败:: " + result.message);
			}
    	});


        /**
         * 创建新分组
         */

        $scope.createGroup = function(){

            var result = dialogService.modal('groupCreate.html', {group:{ name:'', outerType: ''}, typeList: $scope.outerTypeList});

            result.then(function(data){
                // click OK button

                taskApi.createGroup(data.group, function(result){

                    if(result.status === 0){
                        dialogService.alert("新建分组", data.group.name + " 新建成功");
                        var item = result.data;
                        $scope.groups.unshift({
                            id: item.id,
                            outerType: item.outerType,
                            outerTypeName: item.outerTypeName,
                            name: item.name,
                            outerType: item.outerType,
                            memberCount: (item.memberList ? item.memberList.length : 0),
                            unDoneCount: (item.taskCount - item.doneTaskCount),

                        });

                    } else {
                        dialogService.alert("新建分组", data.group.name + " 新建失败<br/>" + result.message);
                    }    

                });

            }, function(){
                // cancel modal
            });

        };


        /**
         * 删除确认
         */

        $scope.deleteGroup = function(groupObj){
			
			var msg = "您确认要删除该分组 " + groupObj.outerTypeName + " " + groupObj.name + "吗？";
			
			if(groupObj.unDoneCount > 0) {
				msg = "请问你确定要删除：" +groupObj.outerTypeName+ " " +groupObj.name+ "吗？目前此分组中仍有" + groupObj.unDoneCount + "个未处理任务，删除后任务将无法被获取和处理。您确认要删除该分组吗？"
			}
			
            var result = dialogService.confirm({title:"删除分组", message: msg, group: groupObj});

            result.then(function(data){
                // click OK button

                taskApi.deleteGroup({groupId: data.group.id}, function(result){
                    if(result.status === 0){
                        dialogService.alert("删除分组", data.group.name + "已经被删除");
                    } else {
                        dialogService.alert("删除分组", data.group.name + " 删除失败<br/>" + result.message);
                    }
                });

            }, function(){
                // cancel modal
            });            

        };




	}]);


	return {
		init: function(){
			angular.bootstrap(document, ['tdc/manage/groupApp']);
		}
	};

});