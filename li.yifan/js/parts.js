
const makeMoodList = templater(o=>`
   <div class="moodlist-item js-mood-jump" data-id="${o.id}">

      <div class="card soft">
         <a href="#mood-page" class="card-row">
            <div class="journal-mood-image"><img src="${o.icon}" class="list-mood"></div>
            <div>
                     
               <h8>${o.week}, ${o.date}</h8>
               <div class="journal-row">
                  <div><img src="img/address.png" class="icon"></div>
                  <div class="moodlist-address"><h7>${o.location}</h7></div>
               </div>
                    
            </div>
         </a>
      </div>

   </div>
   `);

   

const makeUserProfile = templater(o=>`
   <div class="card soft photo">
      <div class="photo-circle"><img src="${o.img}" alt=""></div>
      <h1>${o.name}</h1>
      <h6>${o.quote}</h6>
   </div>
   <div class="card soft">
      <ul  class="profile-list">
         <li class="row">
            <div class="flex-none"><img src="img/phone.png" class="profile-icon"></div>
            <div class="flex-stretch"><h7>${o.phone}</h7></div>
         </li>
         <li class="row">
            <div class="flex-none"><img src="img/mail.png" class="profile-icon"></div>
            <div class="flex-stretch"><h7>${o.email}</h7></div>
         </li>
         <li class="row">
            <div class="flex-none"><img src="img/address.png" class="profile-icon"></div>
            <div class="flex-stretch"><h7>${o.address}</h7></div>
         </li>
         <li class="row">
            <div class="flex-none"><img src="img/favorite.svg" class="profile-icon"></div>
            <div class="flex-stretch"><h7>${o.favorite}</h7></div>
         </li>
      </ul>
   </div>
   `);

const makeMood = templater(o=>`
   
   <h4 class="journal-title">${o.week}, ${o.date}</h4>
   <div class="journal-row">
      <img src="${o.icon}" class="list-mood" style="margin-left: 3em;">
      <h8>${o.title}</h8>
   </div>
      <div class="overscroll" style="padding-bottom: 6em;">
      <div class="card soft journal-img" style="padding: 0; height: 11em;"><img src="${o.img}"></div>
      <p style="text-align: left; font-weight: normal;">${o.description}</p>
      </div>
   </div>
   `);


const makeMoodPopup = o => `
<div class="display-flex mood-popup" style="flex-wrap:wrap">
   <div class="flex-none">
      <div class="mood-image">
         <img src="${o.icon}" alt="">
      </div>
   </div>
   <div class="flex-none mood-popup-description">
      <div style="color: black;">${o.title}</div>
      <div style="color: black;">${o.location}</div>
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

const makeUserEditForm = o => `
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
   name:'qoute',
   displayname:'Quote',
   type:'text',
   placeholder:'Type your quote',
   value:o.quote
})}
${FormControl({
   namespace:'user-edit',
   name:'phone',
   displayname:'Phone Number',
   type:'text',
   placeholder:'Type your phone number',
   value:o.phone
})}
${FormControl({
   namespace:'user-edit',
   name:'email',
   displayname:'Email',
   type:'text',
   placeholder:'Type your email',
   value:o.email
})}
${FormControl({
   namespace:'user-edit',
   name:'address',
   displayname:'Address',
   type:'text',
   placeholder:'Type your address',
   value:o.address
})}
${FormControl({
   namespace:'user-edit',
   name:'favorite',
   displayname:'Favorite',
   type:'text',
   placeholder:'Type your favorite thing',
   value:o.favorite
})}
`;




const makeMoodEditForm = o => `
<input type="hidden" id="mood-edit-image" value="${o.img}">
<label class="image-uploader thumbnail picked" style="background-image:url('${o.img}')">
   <input type="file" data-role="none" id="mood-edit-input">
</label>


${FormControl({
   namespace:'mood-edit',
   name:'title',
   displayname:'Title',
   type:'text',
   placeholder:'Type the title',
   value:o.title
})}
${FormControl({
   namespace:'mood-edit',
   name:'description',
   displayname:'Description',
   type:'text',
   placeholder:'Type the journal description',
   value:o.description
})}

<div class="form-control">
   <label for="mood-edit-description" class="form-label">Description</label>
   <textarea id="mood-edit-description" class="form-input" data-role="none" placeholder="Type a description" style="height:6em">${o.description}</textarea>
</div>
`;


const drawMoodList = (a,empty_phrase="No journals yet, you should add some.") => {
   $("#list-page .moodlist").html(
      a.length ? makeMoodList(a) : empty_phrase
   )
}



const capitalize = s => s=='' ? '' : s[0].toUpperCase()+s.substr(1);

const filterList = (moods,mood) => {
   let a = [...(new Set(moods.map(o=>o[mood])))];
   return templater(o=>`<div class="filter" data-field="${mood}" data-value="${o}">${capitalize(o)}</div>`)(a);
}

const makeFilterList = (moods) => {
   return `
   <div class="filter" data-field="mood" data-value="">All</div>
   |
   ${filterList(moods,'mood')}
   `
}






const makeUploaderImage = (el, name, folder='') => {

   $(el).parent().css({'background-image':`url(${folder+name}`}).addClass('picked')
      .prev().val(folder+name);
}
// My deesign below
