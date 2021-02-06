import { createStore } from 'vuex'
import actions from './actions';
import mutations from './mutations'
// import todos from './moduls/todos';

export default createStore({
  state: {
    rightItems:[
      {id:1,header:'Computer',showLink:true,part:[
        {id:1,name:'hardeare',router:'/'},
        {id:1,name:'software',router:'/software'},
        {id:1,name:'Netwrok',router:'/network'},
      ]},
      {id:2,header:'Anothter',showLink:true,part:[
        {id:1,name:'another part one',router:'/another1'},
        {id:1,name:'another part two',router:'/another2'},
      ]},
      {id:3,header:'Image',showLink:true,part:[
        {id:1,name:'image part one',router:'/image1'},
        {id:1,name:'image part two',router:'/image2'},
      ]},

    ],
    // rightItems:[
    //   {id:2,title:'part1',name:'SoftWare',router:'/software'},
    //   {id:1,title:'part1',name:'HardWare',router:'/'},
    //   {id:3,title:'part2',name:'Programing',router:'/programing'},
    //   {id:4,title:'part2',name:'Graphic',router:'/graphic'},
    // ],
    rightHeader:[
      {id:1,header:'Computer Course'},
      {id:2,header:'JobCourse'},
    ],
    navItems:[
      {id:1,name:'Python',router:'/'},
      {id:2,name:'java',router:'/software'},
      {id:3,name:'C#',router:'/another1'},
      {id:4,name:'JS',router:'/another2'},
    ],
    tableItems:[
      {id:1,title:'title one ',completed:true},
      {id:2,title:'title two ',completed:true},
      {id:3,title:'title three ',completed:true},
      {id:4,title:'title four ',completed:true},
    ],
    tableHeader:[
      {id:1,header:'ID'},
      {id:2,header:'Title'},
      {id:3,header:'Compoleted'},
    ],
    // images:[
    //   {id:1,url:'../image/1.jpg',alt:'alt one image'},
    //   {id:2,url:'../image/1.jpg',alt:'alt two image'},
    //   {id:3,url:'../image/1.jpg',alt:'alt three image'},
    //   {id:3,url:'../image/1.jpg',alt:'alt three image'},
    //   {id:3,url:'../image/1.jpg',alt:'alt three image'},
    // ]
    images: [
      { id:1,url: '../statphotoic/1.jpg', alt: 'I love you nature' },
      { id:1,url: '../photo/2.jpg', alt: 'Now with dog - Rosé' },
      { id:1,url: '../photo/3.jpg', alt: 'Jeg er i Danmark' },
      { id:1,url: '../photo/4.jpg', alt: 'Badabimbadabum' },
      { id:1,url: '../photo/5.jpg', alt: 'Goodmorning el mundo' },
      { id:1,url: '../photo/6.jpg', alt: 'My white and rosé with paella' },
      { id:1,url: '../photo/7.jpg', alt: 'Hopla' },
      // { url: '../static/8.jpg', alt: 'Watering by night' },
      // { url: '../static/9.jpg', alt: 'Life aint so bad at all...' },
      // { url: '../static/10.jpg', alt: 'My whitewine' },
      // { url: '../static/11jpg', alt: 'First time for everything...winefair!' },
      // { url: '../static/12.jpg', alt: 'Lost around 20% of this years yield!' }
  ],
  images2: [
    { id:1,url: '../photo/1.jpg', alt: 'I love you nature' },
    { id:1,url: '../photo/2.jpg', alt: 'Now with dog - Rosé' },
    { id:1,url: '../photo/3.jpg', alt: 'Jeg er i Danmark' },
    { id:1,url: '../photo/4.jpg', alt: 'Badabimbadabum' },
    { id:1,url: '../photo/5.jpg', alt: 'Goodmorning el mundo' },
    { id:1,url: '../photo/6.jpg', alt: 'My white and rosé with paella' },
    { id:1,url: '../photo/7.jpg', alt: 'Hopla' },
    // { url: '../static/8.jpg', alt: 'Watering by night' },
    // { url: '../static/9.jpg', alt: 'Life aint so bad at all...' },
    // { url: '../static/10.jpg', alt: 'My whitewine' },
    // { url: '../static/11jpg', alt: 'First time for everything...winefair!' },
    // { url: '../static/12.jpg', alt: 'Lost around 20% of this years yield!' }
]
    
  },
  getters:{
  },
  actions,
  mutations,
  modules: {
    // todos
  }
})
