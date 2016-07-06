angular.module('starter.controllers', [])

.controller('LoginCtrl', 
	function($scope,  $stateParams, $state, $ionicPopup, $http, $sce, $ionicModal,$ionicLoading){

     var uuid=localStorage.getItem('uuid');
     console.log(uuid);
    if(localStorage.getItem('nameccl') == null){
       //Quitamos la propiedad display none del id del div principal
       $('#Autenticación').css('display','block');
    }else{

    }

    //funcion para mostrar cargando cuando se envian los datos
    $scope.show = function() {
    $ionicLoading.show({
      template: 'Cargando.. <ion-spinner class="spinner-energized"></ion-spinner>'
    }).then(function(){
       console.log("The loading indicator is now displayed");
    });
  };
  //funcion para ocultar el cargando

  $scope.hide = function(){
    $ionicLoading.hide().then(function(){
       console.log("The loading indicator is now hidden");
    });
  };

   

    //obtenemos los datos de los input del formulario
	  $scope.login = {
	  		usuario	:'',
	  		password:''
	  };

    //funcion para enviar la peticion al servidor
	  $scope.authenticate = function() {
	  	console.log($scope.login.usuario +" - "+$scope.login.password)
	    var link = 'https://app.emsivoz.co/funciones/prod/usuario-app/copia.login.php';
 
        $http.post(link, {usname: $scope.login.usuario,uspass : $scope.login.password}).then(function (res){
        	console.log(res);
          $scope.hide();
        	/*var print = JSON.parse(res);
            if(print[0]['mensaje'] == '1'){
                $state.go('app.activity');  
            }else{
                var alertPopup = $ionicPopup.alert({
                  title: 'Error!',
                  template: 'Por favor verifique la información!'
                });
            }*/
        });
	  };

    /*
      //funcion para utilizar los modales
    */
    $ionicModal.fromTemplateUrl('templates/modal-privacidad.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });
    $scope.openModal = function() {
      $scope.modal.show();
    };
    $scope.closeModal = function() {
      $scope.modal.hide();
    };
    // Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hidden', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });
    /*
      //se cierran los modales
    */

	}
)

.controller('ListCtrl', function($scope, EventsService) {
  $scope.events = EventsService.all();
})

.controller('AccountCtrl', function($scope) {
  $scope.logout = function() {
    console.log('TODO: logout');
  };
})




