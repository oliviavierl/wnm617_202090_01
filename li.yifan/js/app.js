

$(()=>{


   checkUserId();

   // event delegation
   $(document)

   .on("pagecontainerbeforeshow",function(e,ui) {
      // console.log(ui.toPage[0].id)

      // Page Routing
      switch(ui.toPage[0].id) {
         case "map-page": MapPage(); break;
         case "list-page": ListPage(); break;

         case "user-profile-page": UserProfilePage(); break;
         case "user-profile-edit-page": UserProfileEditPage(); break;

         case "journal-page": JournalPage(); break;
         case "journal-edit-page": JournalEditPage(); break;

         case "location-add-page": LocationAddPage(); break;
      }
   }) 




	//$('a').on('click',function(e){
		//console.log("event data", e)
	//})

	//$(document)
	//.on('click','a', function(e){
		//console.log("event data", e)
	//})



   // FORM SUBMITS

   .on("submit","#signin-form",function(e){
      e.preventDefault();
      checkSigninForm();
   })

   .on("submit","#signup-form",function(e){
      e.preventDefault();
      checkSignupForm();
   })

   // FORM SUBMIT CLICKS

   .on("click",'.js-user-edit',function(e){
      checkUserProfileEditForm();
   })
   .on("click",'.js-mood-add',function(e){
      checkMoodAddForm();
   })
   .on("click",'.js-mood-edit',function(e){
      checkMoodEditorm();
   })
   .on("click",'.js-location-add',function(e){
      checkLocationAddForm();
   })





   // ANCHOR CLICKS

   .on("click",'.js-logout',function(e){
      sessionStorage.removeItem('userId');
      checkUserId();
   })


   //.on("click",'.js-animal-jump',function(e){
     // sessionStorage.animalId = $(this).data("id");
     // $.mobile.navigate('#animal-profile-page');
   //})
    .on("click",'.js-mood-jump',function(e){
      sessionStorage.moodId = $(this).data("id");
      $.mobile.navigate('#journal-page');
   })
    .on("click",'.js-mood-delete',function(e){
      checkMoodDelete($(this).data("id"));
   })





   .on('click','[data-activate]',function(e){
      let target = $(this).data('activate');
      $(target).addClass("active")
   })
   .on('click','[data-deactivate]',function(e){
      let target = $(this).data('deactivate');
      $(target).removeClass("active")
   })
   .on('click','[data-toggle]',function(e){
      let target = $(this).data('toggle');
      $(target).toggleClass("active")
   })


   // CLEAR INPUT

   $('.ydr').on('click',function () {
      $(this).prev().val('')
      // $(':input','form-input')
      //    .not(':button, :submit, :reset, :hidden')
      //    .val('')
      //    .removeAttr('checked')
      //    .removeAttr('selected');
   });
})




