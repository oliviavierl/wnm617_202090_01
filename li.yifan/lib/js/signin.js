
const checkSigninForm = () => {
   let user = $("#signin-username").val();
   let pass = $("#signin-password").val();

   console.log(user,pass)

   if(user == 'user' && pass == 'pass') {
      // logged in
      console.log("success");
      sessionStorage.userId = 3;
   } else {
      // not logged in
      console.log("failure");
      sessionStorage.removeItem('userId');

      // DO SOMETHING HERE
      //$.mobile.navigate("#login-failure");
      //$('#login-failure').modal("show");
      alert('Please check youremail address and the password.');
      //alert("#login-failure");
      //$('#login-failure').modal('show');
      //$("#login-failure").modal('show');
      //$(function() {
      //   $("#login-failure") .modal('show');
      //})
      //$("#login-failure").modal();
      //("#login-failure").modal('show');
      //window.$("#login-failure").modal("show");
      //.on('click','btn-signin',functiom(e){
      //   $("#login-failure").modal("show");
      //})
      //Window.showModal("#login-failure");
      //$.openModal("#login-failure");  
      //.openModal("#login-failure");   
      //$.modal.openModal("#login-failure");
      //modal.openModal("#login-failure");

   }

   checkUserId();
}


const checkUserId = () => {
   let p = ['#signin-page','#signup-page',''];

   if(sessionStorage.userId === undefined) {
      // not logged in
      if(!p.some(o=>window.location.hash===o))
         $.mobile.navigate("#signin-page");
   } else {
      // logged in
      if(p.some(o=>window.location.hash===o))
         $.mobile.navigate("#map-page");
   }
}