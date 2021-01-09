const lefttabbar ={
    path: '/home',
    name: 'home',
    redirect:"/index",
    meta:{title:"首页"},
    component: ()=>import('../../layout/index.vue'),
    children:[
      {
        path:"/index",
        name:"index",
        meta:{title:"首页"},
        component:()=>import('../../views/Home/home/index.vue')
      },
      {
        path:"/loan-input",
        name:"loan-input",
        meta:{title:"导航四"},
        component:()=>import('../../views/Home/loan-input/loan-input.vue')
      },
      {
        path:"/MsgShow",
        name:"MsgShow",
        meta:{title:"展示"},
        component:()=>import('../../views/Home/msg-show/MsgShow.vue')
      },
      {
        path:"/outcom",
        name:"outcom",
        meta:{title:"下级"},
        component:()=>import('../../views/Home/have-dist/outcom.vue'),
        children:[
          {
            path:"/first",
            name:"first",
            meta:{title:"1"},
            component:()=>import('../../views/Home/have-dist/first.vue')
          },
          {
            path:"/second",
            name:"second",
            meta:{title:"2"},
            component:()=>import('../../views/Home/have-dist/second.vue')
          },
        ]
      },
    ]
  }

export default lefttabbar