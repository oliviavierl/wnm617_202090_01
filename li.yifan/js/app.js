

$(()=>{


   checkUserId();

   // event delegation
   $(document)

   .on("pagecontainerbeforeshow",function(e,ui) {
      // console.log(ui.toPage[0].id)

      // Page Routing
      switch(ui.toPage[0].id) {
         case "recent-page": RecentPage(); break;
         case "list-page": ListPage(); break;

         case "user-profile-page": UserProfilePage(); break;
         case "user-edit-page": UserEditPage(); break;
         case "user-upload-page": UserUploadPage(); break;

         case "mood-page": MoodPage(); break;
         case "mood-edit-page": MoodEditPage(); break;

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

   .on("submit","#list-search-form",function(e){
      e.preventDefault();
      checkSearchForm();
   })


   // FORM SUBMIT CLICKS

   .on("click",'.js-user-edit',function(e){
      checkUserEditForm();
   })
   .on("click",'.js-mood-add',function(e){
      checkMoodAddForm();
   })
   .on("click",'.js-mood-edit',function(e){
      checkMoodEditForm();
   })
   .on("click",'.js-location-add',function(e){
      checkLocationAddForm();
   })
   .on("click",'.js-user-upload',function(e){
      checkUserUploadForm();
   })


   .on("click",".filter",function(){
      checkListFilter($(this).data());
   })
   .on("change",".image-uploader input",function(){
      checkUpload(this.files[0])
      .then(d=>{
         console.log(d)
         makeUploaderImage(this,d.result,'uploads/')
      })
   })


   .on("click","[name='mood-add-mood']",function(){
      $.mobile.navigate("#mood-add-page");
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
      $.mobile.navigate('#mood-page');
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




