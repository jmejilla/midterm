angular.module('ToDo',[]).
    controller('todoController',['$scope',function($scope){
        $scope.todos = [
            {'title':'Build a todo app','date':'','done':false}
        ];
        
        $scope.addToDo = function(){
            $scope.todos.push({'title':$scope.newTodo,'date':$scope.newDate,'done':false})
            $scope.newTodo = ''
            $scope.newDate = ''
            
        }
        $scope.clearCompleted = function(){
            $scope.todos = $scope.todos.filter(function(item){
                return !item.done
            })
        }

    }])