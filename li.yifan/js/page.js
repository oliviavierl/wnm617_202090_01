
// go look up async and await
const ListPage = async() => {
   let d = await query({type:'moods_by_user_id',params:[sessionStorage.userId]});

   console.log(d);

   // let ddate = new Date(d.result[0].date_create);
   // console.log(ddate.toLocaleString()) 


    $("#list-page .filter-list").html(makeFilterList(d.result));

   drawJournalList(d.result);


   // $("#list-page .moodlist").html(
      // d.result.length ?
         // makeMoodList(d.result) :
         // "You need to add some journals."
   // )
}






const RecentPage = async() => {
   let d = await query({type:'recent_locations',params:[sessionStorage.userId]});

   // makeMap("#map-page .map");

   console.log(d)

   let valid_moods = d.result.reduce((r,o)=>{
      o.icon = o.img;
      if(o.lat && o.lng) r.push(o);
      return r;
   },[]);

   let map_el = await makeMap("#recent-page .map");

   makeMarkers(map_el,valid_moods);

   map_el.data("markers").forEach((o,i)=>{
      o.addListener("click",function(){

         /*
         // SIMPLE EXAMPLE
         sessionStorage.animalId = valid_animals[i].animal_id;
         $.mobile.navigate("#animal-profile-page")
         */

         
         //INFOWINDOW EXAMPLE
         map_el.data("infoWindow")
            .open(map_el.data("map"),o);
         map_el.data("infoWindow")
            .setContent(makeMoodPopup(valid_moods[i]));
         

         /*
         // ACTIVE EXAMPLE
         $("#recent-drawer").addClass("active");
         $("#recent-drawer .modal-body")
            .html(makeAnimalPopup(valid_animals[i]));
         */   
      })
   });
}

const UserProfilePage = async() => {
   let d = await query({type:'user_by_id',params:[sessionStorage.userId]});

   console.log(d);

   $("#user-profile-page .profile").html(makeUserProfile(d.result))
}


const UserEditPage = async() => {
   let d = await query({type:'user_by_id',params:[sessionStorage.userId]});

   console.log(d);

   $("#user-edit-form")
      .html(makeUserEditForm(d.result[0]))
}

const UserUploadPage = async() => {
   query({
      type:'user_by_id',
      params:[sessionStorage.userId]
   }).then(d=>{
      makeUploaderImage({
         namespace:'user-upload',
         folder:'',
         name:d.result[0].img
      })
   })
}



const JournalPage = async() => {
   query({type:'mood_by_id',params:[sessionStorage.moodId]})
   .then(d=>{
      console.log(d);
      $("#journal-page .profile")
         .html(makeJournal(d.result))
   });

   query({type:'locations_by_mood_id',params:[sessionStorage.moodId]})
   .then(d=>{
      console.log(d);
      makeMap("#journal-page .map").then(map_el=>{
         makeMarkers(map_el,d.result)
      });
   });


   
}


const JournalEditPage = async() => {
   let d = await query({type:'mood_by_id',params:[sessionStorage.moodId]});

   console.log(d);

   $("#mood-edit-form")
      .html(makeJournalEditForm(d.result[0]))
}


const LocationAddPage = async() => {
   let map_el = await makeMap("#location-add-page .map");
   makeMarkers(map_el,[]);

   let map = map_el.data('map');

   map.addListener("click",function(e){
      console.log(e)
      let posFromClick = {lat:e.latLng.lat(),lng:e.latLng.lng()};
      let posFromCenter = {lat:map.getCenter().lat(),lng:map.getCenter().lng()};
      console.log(posFromClick,posFromCenter)
      $("#location-add-lat").val(posFromClick.lat)
      $("#location-add-lng").val(posFromClick.lng)

      makeMarkers(map_el,[posFromClick])
   });


}
// My design
