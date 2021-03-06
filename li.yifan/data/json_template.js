// MY USER TEMPALTE

[
  '{{repeat(10)}}',
  {
    id:'{{index(1)}}',
    name: '{{firstName()}} {{surname()}}',
    username: function(){
      return 'user'+this.id;
    },
    email: function() {
      return this.username+'@gmail.com';
    },
    // quote: function (tags) {
      // var quote = ['If you want the rainbow, you gotta put up with the rain.', 'Love life, enjoy everyday~', 'If life were predictable it would cease to be life, and be without flavor.','Life is what happens when you are busy making other plans.'];
      // return quote[tags.integer(0, quote.length - 1)];
    // },
    quote:'{{random("If you want the rainbow, you gotta put up with the rain.", "Love life, enjoy everyday~", "If life were predictable it would cease to be life, and be without flavor.","Life is what happens when you are busy making other plans.")}}',
    password: 'md5(pass)',
    img:function(tags) {
      return 'https://via.placeholder.com/400/'+
        tags.integer(700,999) + '/fff/?text=' + this.username;
    },
    phone: '+1 {{phone()}}',
    address: '{{integer(100, 999)}} {{street()}}, {{integer(10000, 99999)}}',
    // favorite: function (tags) {
      // var favorite = ['Si-fi Movies', 'Cooking', 'Outdoor Activities'];
      // return favorite[tags.integer(0, favorite.length - 1)];
    // },
    favorite:'{{random("Si-fi Movies", "Cooking", "Outdoor Activities")}}',
    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'
  }
]

// MY MOOD TEMPLATE

[
  '{{repeat(50)}}',
  {
    id:'{{index(1)}}',
    user_id:'{{integer(1,10)}}',

    mood:'{{random("happy", "smile", "normal","sad","angry")}}',
    icon:function(){return 'img/'+this.mood+'.png';},
    
    /*mood: function (tags) {
      var mood = ['img/happy.png', 'img/smile.png', 'img/normal.png','img/sad.png','img/angry.png'];
      return mood[tags.integer(0, mood.length - 1)];
    },*/
    week:'{{random("Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friiday","Saturday")}}',
    // date:'{{date(new Date(2020, 0, 1), new Date(), "MM-DD-YYYY")}}',
    date: '{{date(new Date(2020, 0, 1), new Date(), "MM-dd-YYYY")}}',
    location: '{{integer(100, 999)}} {{street()}}',
    title: '{{lorem(4, "words")}}',
    img:function(tags) {
      return 'http://via.placehold.com/400/'+
        tags.integer(700,999) + '/fff/?text=' + this.mood;
    },
    // description: '{{lorem(3,"sentences")}}',
    description: '{{lorem(2,"paragraphs")}}',
    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'
  }
]


// MY LOCATION TEMPLATE
[
  '{{repeat(250)}}',
  {
    id:'{{index(1)}}',
    mood_id:'{{integer(1,50)}}',
    
    
    lat:'{{floating(37.79801, 37.690455)}}',
    lng:'{{floating(-122.511241, -122.373676)}}',
    
    description: '{{lorem(3,"sentences")}}',
    
    // photo choose only one from bottom
    /* photos:[
      '{{repeat(1,5)}}',
      'https://via.placeholder.com/400/'
    ], */
    photo: 'https://via.placeholder.com/400/',
    icon: 'https://via.placeholder.com/100/?text=ICON',
    
    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'
  }
]

// https://json-generator.com
// https://konbert.com/convert


// USER TEMPLATE

[
  '{{repeat(10)}}',
  {
    id:'{{index(1)}}',
    name: '{{firstName()}} {{surname()}}',
    username: function(){
      return 'user'+this.id;
    },
    email: function() {
      return this.username+'@gmail.com';
    },
    password: 'md5(pass)',
    img:function(tags) {
      return 'https://via.placeholder.com/400/'+
        tags.integer(700,999) + '/fff/?text=' + this.username;
    },
    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'
  }
]


// ANIMAL TEMPLATE
[
  '{{repeat(50)}}',
  {
    id:'{{index(1)}}',
    user_id:'{{integer(1,10)}}',
    
    name:'{{company()}}',
    // most will use this
    type:'{{random("dog","horse","cat")}}',
    // most won't use this
    breed: function(tags){
      var breeds = {
        dog:["labrador","pitbull","dachsund"],
        horse:["shetland","andalusian","unicorn"],
        cat:["calico","ginger","tuxedo","siamese"]
      };
      var chosen_type = breeds[this.type];
      var chosen_index = tags.integer(0,chosen_type.length-1);
      return chosen_type[chosen_index];
    },
    
    description: '{{lorem(3,"sentences")}}',
    
    img:function(tags) {
      return 'https://via.placeholder.com/400/'+
        tags.integer(700,999) + '/fff/?text=' + this.name;
    },
    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'
  }
]


// LOCATION TEMPLATE
[
  '{{repeat(250)}}',
  {
    id:'{{index(1)}}',
    animal_id:'{{integer(1,50)}}',
    
    
    lat:'{{floating(37.79801, 37.690455)}}',
    lng:'{{floating(-122.511241, -122.373676)}}',
    
    description: '{{lorem(3,"sentences")}}',
    
    // photo choose only one from bottom
    /* photos:[
      '{{repeat(1,5)}}',
      'https://via.placeholder.com/400/'
    ], */
    photo: 'https://via.placeholder.com/400/',
    icon: 'https://via.placeholder.com/100/?text=ICON',
    
    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'
  }
]

// TEMPLATE EXAMPLE

[

  '{{repeat(5, 7)}}',
  {
    _id: '{{objectId()}}',
    index: '{{index()}}',
    guid: '{{guid()}}',
    isActive: '{{bool()}}',
    balance: '{{floating(1000, 4000, 2, "$0,0.00")}}',
    picture: 'http://placehold.it/32x32',
    age: '{{integer(20, 40)}}',
    eyeColor: '{{random("blue", "brown", "green")}}',
    name: '{{firstName()}} {{surname()}}',
    gender: '{{gender()}}',
    company: '{{company().toUpperCase()}}',
    email: '{{email()}}',
    phone: '+1 {{phone()}}',
    address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
    about: '{{lorem(1, "paragraphs")}}',
    registered: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    latitude: '{{floating(-90.000001, 90)}}',
    longitude: '{{floating(-180.000001, 180)}}',
    tags: [
      '{{repeat(7)}}',
      '{{lorem(1, "words")}}'
    ],
    friends: [
      '{{repeat(3)}}',
      {
        id: '{{index()}}',
        name: '{{firstName()}} {{surname()}}'
      }
    ],
    greeting: function (tags) {
      return 'Hello, ' + this.name + '! You have ' + tags.integer(1, 10) + ' unread messages.';
    },
    favoriteFruit: function (tags) {
      var fruits = ['apple', 'banana', 'strawberry'];
      return fruits[tags.integer(0, fruits.length - 1)];
    }
  }
]