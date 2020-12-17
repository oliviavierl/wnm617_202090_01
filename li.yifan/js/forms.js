
const checkSignupForm = () => {
   let username = $("#signup-username").val();
   let name = $("#signup-name").val();
   let quote = $("#signup-quote").val();
   let phone = $("#signup-phone").val();
   let email = $("#signup-email").val();
   let address = $("#signup-address").val();
   let favorite = $("#signup-favorite").val();
   let password = $("#signup-password").val();
   let passwordconfirm = $("#signup-password-confirm").val();

   if(password!=passwordconfirm) {
      throw "Passwords don't match";
      return;
   } else {
      query({type:'insert_user',params:[username,name,quote,phone,email,address,favorite,password]})
      .then(d=>{
         if(d.error) {
            throw d.error;
         }
         console.log(d);
         $.mobile.navigate("#signin-page");
      })
   }
}

const checkUserEditForm = () => {
   let username = $("#user-edit-username").val();
   let name = $("#user-edit-name").val();
   let quote = $("#user-edit-quote").val();
   let phone = $("#user-edit-phone").val();
   let email = $("#user-edit-email").val();
   let address = $("#user-edit-address").val();
   let favorite = $("#user-edit-favorite").val();

   query({
      type:'update_user',
      params:[username,name,quote,phone,email,address,favorite,sessionStorage.userId]
   }).then(d=>{
      if(d.error) {
         throw d.error;
      }
      window.history.go(-2);
   })
}



const checkMoodAddForm = () => {
   let mood = $("[name='mood-add-mood']:checked").val();
   let img = $("#mood-add-image").val();
   let week = $("#mood-add-week").val();
   let date = $("#mood-add-date").val();
   let location = $("#mood-add-location").val();
   let title = $("#mood-add-title").val();
   let description = $("#mood-add-description").val();
    
   let icon = "img/" + $("[name='mood-add-mood']:checked").val() + ".png";


  

   

   query({
      type:'insert_mood',
      params:[sessionStorage.userId,mood,img,week,date,location,title,description]
   }).then(d=>{
      if(d.error) {
         throw d.error;
      }

      $("#mood-add-form")[0].reset();

      console.log(d);
      sessionStorage.moodId = d.id;
      $.mobile.navigate($("#mood-add-destination").val());
   })

}


const checkMoodEditForm = () => {
   
   let title = $("#mood-edit-title").val();
   let location = $("#mood-edit-location").val();
   let description = $("#mood-edit-description").val();
   let image = $("#mood-edit-image").val();

   query({
      type:'update_mood',
      params:[title,location,description,sessionStorage.moodId]
   }).then(d=>{
      if(d.error) {
         throw d.error;
      }
      window.history.back();
   })
}



const checkLocationAddForm = () => {
   let lat = $("#location-add-lat").val();
   let lng = $("#location-add-lng").val();
   let description = $("#location-add-description").val();

   query({
      type:'insert_location',
      params:[sessionStorage.moodId,lat,lng,description]
   }).then(d=>{
      if(d.error) {
         throw d.error;
      }

      $("#location-add-form")[0].reset();

      console.log(d);

      window.history.go(-2);
   })
}


const checkMoodDelete = id => {
   query({
      type:'delete_mood',
      params:[id]
   }).then(d=>{
      if(d.error) {
         throw d.error;
      }
      window.history.back();
   })
}



const checkSearchForm = async() => {
   let s = $("#list-search-input").val()
   console.log(s);

   let r = await query({
      type:"search_moods",
      params:[s,sessionStorage.userId]
   })

   drawJournalList(r.result,"Search produced no results.");

   console.log(r)
}



const checkListFilter = async ({field,value}) => {
   let r = value=="" ?
      await query({
         type:'moods_by_user_id',
         params:[sessionStorage.userId]
      }) :
      await query({
         type:'filter_moods',
         params:[field,value,sessionStorage.userId]
      });

   drawMoodList(r.result,"Search produced no results.");
}








const checkUpload = file => {
   let fd = new FormData();
   fd.append("image",file);

   return fetch('data/api.php',{
      method:'POST',
      body:fd
   }).then(d=>d.json());
}

const checkUserUploadForm = () => {
   let upload = $("#user-upload-image").val()
   if(upload=="") return;

   query({
      type:'update_user_image',
      params:[upload,sessionStorage.userId]
   }).then(d=>{
      if(d.error) {
         throw d.error;
      }
      window.history.back();
   })
}