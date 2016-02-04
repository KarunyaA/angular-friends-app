/**
 * Jhon papa's style guide followed here
 * 
 */

(function(){
    
    'use strict';
    
    var setAppConfig = function(){
                
    };
    
        
    angular
            .module('friendsapp', [ 'LocalStorageModule', 'angularRandomString' ])
            .config(setAppConfig)
            .value('objCountries', [ 
                                       { code : 'IN', label : 'India' } ,
                                       { code : 'US', label : 'Unites States' } ,
                                       { code : 'BR', label : 'Brazil' } ,
                                       { code : 'SL', label : 'Sri Lanka' } ,
                                       { code : 'AU', label : 'Australia' },
                                       { code : 'ZA', label : 'South Africa' },
                                       { code : 'CN', label : 'China' }  
                                    
                                    ]);
            
        
})();