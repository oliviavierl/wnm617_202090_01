const makeWarning = (target,message) => {
   $(target).addClass("active")
      .find('.message').html(message);
   setTimeout(()=>{
      $(target).removeClass("active");
   },2000);
}


const checkSigninForm = () => {
   let user = $("#signin-username").val();
   let pass = $("#signin-password").val();

   if(user=='' || pass=='') {
      makeWarning("#signin-warning","Please fill in Useername and Password");
      return;
   }

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
      //$.mobile.navigate("#login-failure"); fail
      //$('#login-failure').modal("show"); fail
      //alert('Please check youremail address and the password.'); success

      //$('#login-failure').addClass("active"); teacher

      makeWarning("#signin-warning","Login Failed");
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