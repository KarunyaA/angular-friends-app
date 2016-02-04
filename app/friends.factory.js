/**
 * Factory definition file
 * friendsFactory 
 */

(function(){
    
    'use strict';
    
    var setFriendsFactory = function( localStorageService, randomString ){
        
        var objFactory = {}
        
        objFactory.getFriendsList = function(){
        
            var lsKeys = localStorageService.keys();
            
            var friends = [];
            
            angular.forEach(lsKeys, function(value, i){
             
                friends.push( localStorageService.get(value) );
             
            });
            
                        
               return friends;             
         };
         
         objFactory.saveFriend = function(objFriendData){
             
             var rand = randomString(32);
            
             return localStorageService.set(rand, objFriendData);   
            
         };
         
         
         objFactory.deleteFriends = function(){
             
             localStorageService.clearAll();
         };
         
         
         return objFactory;
     
     };
    
    
    angular
          .module('friendsapp')
          .factory('friendsFactory', setFriendsFactory);
    
    setFriendsFactory.$inject = ['localStorageService', 'randomString'];
    
})();