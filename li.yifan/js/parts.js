const makeMoodList = templater(o=>`
   <div class="moodlist-item js-mood-jump" data-id="${o.id}">

      <div class="card soft">
         <a href="#journal-page" class="card-row">
            <div class="journal-mood-image"><img src="${o.mood}" class="list-mood"></div>
            <div>
                     
               <h8>${o.date}</h8>
               <div class="journal-row">
                  <div><img src="img/address.png" class="icon"></div>
                  <div><h7>${o.address}</h7></div>
               </div>
                    
            </div>
         </a>
      </div>

   </div>
   `);

   

const makeUserProfile = templater(o=>`
   <div class="card soft photo">
      <div class="photo-circle"></div>
      <h1>${o.name}</h1>
      <h6>${o.quote}</h6>
   </div>
   <div class="card soft">
      <ul  class="profile-list">
         <li class="row">
            <div class="flex-none"><img src="img/phone.png" class="profile-icon"></div>
            <div class="flex-stretch"><h7>(628)219-6375</h7></div>
         </li>
         <li class="row">
            <div class="flex-none"><img src="img/mail.png" class="profile-icon"></div>
            <div class="flex-stretch"><h7>${o.email}</h7></div>
         </li>
         <li class="row">
            <div class="flex-none"><img src="img/address.png" class="profile-icon"></div>
            <div class="flex-stretch"><h7>888 Ofarell Street, 94109</h7></div>
         </li>
         <li class="row">
            <div class="flex-none"><img src="img/favorite.svg" class="profile-icon"></div>
            <div class="flex-stretch"><h7>${o.favorite}</h7></div>
         </li>
      </ul>
   </div>
   `);

const makeJournal = templater(o=>`
   <ul class="back-icon">
      <a href="#" data-rel="back"><img src="img/back.png"></a>
   </ul>
   <h4 class="journal-title">${o.date}</h4>
   <div class="journal-row">
      <img src="${o.mood}" class="list-mood" style="margin-left: 3em;">
      <h8>${o.title}</h8>
   </div>
      <div class="overscroll" style="padding-bottom: 6em;">
      <div class="card soft journal-img" style="padding: 0; height: 11em;"><img src="${o.photo}"></div>
      <p style="text-align: left; font-weight: normal;">${o.description}</p>
   </div>
   `);

// My deesign below
