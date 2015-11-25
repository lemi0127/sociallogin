angular.module('starter.services', [])
.factory('FacebookService', function($auth, $http, $ionicPopup){
    
    var facebookApiURL = 'https://graph.facebook.com/v2.2';

return{
    me: function(){
        if ($auth.isAuthenticated()){
            return $http.get(facebookApiURL + '/me',
                            {
                params:{
                    access_token: $auth.getToken(),
                                                fields: 'id, name, link, gender, location, website, picture, relationship_status', 
                                                format: 'json'
                }
            });
        }else{
            $ionicPopup.alert({
                title:'error',
                content: 'User Not Authorized'
            })
        }
    
},
    friends: function(userId){
        if($auth.isAuthenticated()&& userId){
            return $http.get(facebookApiURL + '/' + userId + '/myFriends',
                            {
                                params: {
                                    access_token: $auth.getToken()
                                }
            });
        } else {
            $ionicPopup.alert({
                title: 'error',
                content: 'User Not Authorized'
            });
        }
    }
}});