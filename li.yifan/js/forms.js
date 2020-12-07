
const checkSignupForm = () => {
   let username = $("#signup-username").val();
   let email = $("#signup-email").val();
   let password = $("#signup-password").val();
   let passwordconfirm = $("#signup-password-confirm").val();

   if(password!=passwordconfirm) {
      throw "Passwords don't match";
      return;
   } else {
      query({type:'insert_user',params:[username,email,password]})
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
   let email = $("#user-edit-email").val();
   let phone = $("#user-edit-phone").val();
   let addres = $("#user-edit-address").val();
   let favorite = $("#user-edit-favorite").val();

   query({
      type:'update_user',
      params:[username,name,email,phone,address,favorite,sessionStorage.userId]
   }).then(d=>{
      if(d.error) {
         throw d.error;
      }
      window.history.go(-2);
   })
}



const checkMoodAddForm = () => {
   let name = $("#mood-add-name").val();
   let title = $("#mood-add-title").val();
   let description = $("#mood-add-description").val();

   query({
      type:'insert_mood',
      params:[sessionStorage.userId,name,title,description]
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
   let name = $("#mood-edit-name").val();
   let title = $("#mood-edit-title").val();
   let description = $("#mood-edit-description").val();

   query({
      type:'update_mood',
      params:[name,title,description,sessionStorage.moodId]
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

   drawMoodList(r.result,"Search produced no results.");

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