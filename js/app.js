angular.module('ToDo',[]).
    controller('todoController',['$scope','myLocalStorage',function($scope, myLocalStorage){
        console.log(myLocalStorage)
        $scope.todos = myLocalStorage.get('item') || [
            
        ];
        
        console.log($scope.todos)
        $scope.addToDo = function(){
            $scope.todos.push({'title':$scope.newTodo,'date':$scope.newDate,'done':false})
            myLocalStorage.set('item', $scope.todos)
            $scope.newTodo = ''
            $scope.newDate = ''
            
        }
        $scope.clearCompleted = function(){
            $scope.todos = $scope.todos.filter(function(item){
                return !item.done
            })
            myLocalStorage.remove('item', $scope.todos)
            myLocalStorage.set('item', $scope.todos)
        }
        
        $scope.saveNew = function(){
            console.log($scope.todos)
            $scope.editing = false
            myLocalStorage.set('item', $scope.todos)
        }

    }])