

$(()=>{


   checkUserId();

   // event delegation
   $(document)




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





   // ANCHOR CLICKS

   .on("click",'.js-logout',function(e){
      sessionStorage.removeItem('userId');
      checkUserId();
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




