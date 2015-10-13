define([
        'jquery',
        'angular',
        'angular-bootstrap',
        '../../services/dialog',
        '../../services/taskService'
    ],function($, angular){

    var app = angular.module('tdc/manage/assignApp', ['taskServiceModule', 'dialogModule']);


	app.controller('indexCtrl', ['$scope', 'taskApi', 'dialogService', function($scope, taskApi, dialogService){

    	// TODO:: put your code here
		
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
						members: item.memberList,
	    				memberCount: item.memberList.length,
	    				unDoneCount: item.taskCount - item.doneTaskCount

	    			});
	    		});
	    		$scope.groups = groups;
			} else {
				dialogService.alert("获取分组", "获取分组失败:: " + result.message);
			}
    	});
		
		$scope.getEmployees = function(login_name){
			
			return taskApi.searchEmployee({name: login_name, login: login_name}).$promise.then(function(result){
				return result.data || [];
			});
		};
		
		$scope.addEmployee = function(item){
			
			taskApi.addMember({
				mtUserId: item.newMember.id,
				groupId: item.id,
				misAccount: item.newMember.login,
				cnName: item.newMember.name
			}, function(result){
				
				if(result.status === 0){
					item.members.push(result.data);
					item.newMember = null;
					dialogService.alert("添加组员", "添加组员成功！");
				} else {
					dialogService.alert("添加组员失败", result.message);
				}
				
			});
				
		};
		
		// 删除组员
		$scope.deleteMember = function(group, member){
			
			var result = dialogService.confirm({title:"删除组员", message: "您确认删除组员 "+ member.cnName + "（" + member.misAccount + "）" + " 吗？", member: member});
			
			result.then(function(data){
				taskApi.deleteMember({misId: data.member.mtUserId}, function(result){
					if(result.status === 0){
						dialogService.alert("删除组员", "组员 " + member.cnName + "（" + member.misAccount + "） 已经被从分组 “" + group.name + "” 删除");
						var list = group.members;
						var index = list.indexOf(member);
						list.splice(index, 1);	
					} else {
						dialogService.alert("删除组员", "删除组员 " + member.cnName + "（" + member.misAccount + "） 失败:: " + result.message);
					}
				
				
				});
			});
		};
	}]);


	return {
		init: function(){
			angular.bootstrap(document, ['tdc/manage/assignApp']);
		}
	};

});