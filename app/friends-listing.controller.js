/**
 * Jhon papa's style guide followed here
 * FriendsListingCtrl
 */

(function(){
    
    'use strict';
    
    var setFriendsLisingController = function(friendsFactory, objCountries){
        
        var vm = this;
        
        vm.showLising = false;
        vm.showForm = true;
        
        vm.countriesList = objCountries;
        
        // Add friend form data
        
        vm.friendData = {
                            firstname : '',
                            lastname : '',
                            email : '',
                            country : '',
                            rm : '',
                            desk : '',
                            mobile: '',
                            isAgreed : false
                         }
        
        vm.message = {  text : '', success : true }
        
        vm.friendsList = friendsFactory.getFriendsList();
        
        vm.toogleListing = function(){
            
            vm.showLising = !vm.showLising;
            vm.showForm = !vm.showForm;
            
        };
        
        vm.formSubmit = function(){
            
            if( vm.friendData.isAgreed ){
                
                if(friendsFactory.saveFriend(vm.friendData))
                {
                    vm.message = {text : "Friend data saved successfully!!!", success : true };
                    vm.friendsList = friendsFactory.getFriendsList();
                }
                
                else{
                    vm.message = { text : 'Problem in saving. Please try again', success : false }
                }
            }
            
            else{
                
                vm.message = { text : 'Please agree to the terms & conditions.', success : false }
            }
        };
        
        vm.clearAll = function(){
         
            friendsFactory.deleteFriends();
            vm.friendsList = [];
        }
        
    };
    
    
    
    angular
            .module('friendsapp')
            .controller('FriendsListingCtrl', setFriendsLisingController);
            
      setFriendsLisingController.$inject = ['friendsFactory', 'objCountries'];      
    
})();