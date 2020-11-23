
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
   
   <h4 class="journal-title">${o.date}</h4>
   <div class="journal-row">
      <img src="${o.mood}" class="list-mood" style="margin-left: 3em;">
      <h8>${o.title}</h8>
   </div>
      <div class="overscroll" style="padding-bottom: 6em;">
      <div class="card soft journal-img" style="padding: 0; height: 11em;"><img src="${o.img}"></div>
      <p style="text-align: left; font-weight: normal;">${o.description}</p>
   </div>
   `);


const makeMoodPopup = o => `
<div class="display-flex mood-popup" style="flex-wrap:wrap">
   <div class="flex-none">
      <div class="mood-image">
         <img src="${o.mood}" alt="">
      </div>
   </div>
   <div class="flex-none mood-popup-description">
      <div>${o.title}</div>
      <div>${o.address}</div>
   </div>
   <div class="form-button js-mood-jump" data-id="${o.mood_id}" style="width:100%">Visit</div>
</div>
`;





const FormControl = ({namespace,name,displayname,type,placeholder,value}) => {
   return `<div class="form-control">
   <label for="${namespace}-${name}" class="form-label">${displayname}</label>
   <input id="${namespace}-${name}" type="${type}" class="form-input" data-role="none" placeholder="${placeholder}" value="${value}">
   </div>`;
}

const makeUserProfileUpdateForm = o => `
${FormControl({
   namespace:'user-edit',
   name:'username',
   displayname:'Username',
   type:'text',
   placeholder:'Type your user name',
   value:o.username
})}
${FormControl({
   namespace:'user-edit',
   name:'name',
   displayname:'Name',
   type:'text',
   placeholder:'Type your full name',
   value:o.name
})}
${FormControl({
   namespace:'user-edit',
   name:'email',
   displayname:'Email',
   type:'text',
   placeholder:'Type your email',
   value:o.email
})}
`;




const makeJournalUpdateForm = o => `
<!--<div class="user-profile-image">
   <img src="${o.img}">
</div>-->
${FormControl({
   namespace:'mood-edit',
   name:'date',
   displayname:'Date',
   type:'text',
   placeholder:'Type the date',
   value:o.name
})}
${FormControl({
   namespace:'mood-edit',
   name:'title',
   displayname:'Title',
   type:'text',
   placeholder:'Type the title',
   value:o.name
})}

<div class="form-control">
   <label for="mood-edit-description" class="form-label">Description</label>
   <textarea id="mood-edit-description" class="form-input" data-role="none" placeholder="Type a description" style="height:6em">${o.description}</textarea>
</div>
`;

// My deesign below
