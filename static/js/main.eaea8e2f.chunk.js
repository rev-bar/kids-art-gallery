(this["webpackJsonpkids-art-gallery"]=this["webpackJsonpkids-art-gallery"]||[]).push([[0],{354:function(e,t,n){},355:function(e,t,n){},356:function(e,t,n){},360:function(e,t,n){},361:function(e,t,n){},594:function(e,t){},596:function(e,t){},607:function(e,t){},609:function(e,t){},636:function(e,t){},638:function(e,t){},639:function(e,t){},644:function(e,t){},646:function(e,t){},665:function(e,t){},677:function(e,t){},680:function(e,t){},724:function(e,t,n){},725:function(e,t,n){},726:function(e,t,n){},727:function(e,t,n){},728:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n(0),a=n.n(c),i=n(105),s=n.n(i),l=(n(353),n(354),n(58)),o=(n(355),n(159)),j=n(19),u=n(733),b=n(735),d=Object(c.createContext)(null);n(356);var O=function(e){var t=e.onLogout,n=Object(c.useContext)(d);return n&&console.log(n.role),Object(r.jsxs)(u.a,{bg:"light",expand:"lg",children:[Object(r.jsx)(u.a.Brand,{href:"#",children:"Logo"}),Object(r.jsx)(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(r.jsxs)(u.a.Collapse,{id:"basic-navbar-nav",children:[Object(r.jsxs)(b.a,{className:"mr-auto",children:[n&&"artist"===n.role?Object(r.jsx)(b.a.Link,{href:"#",children:"About me"}):null,n&&"artist"===n.role?Object(r.jsx)(b.a.Link,{href:"#/ArtistGalleries",children:"My galleries"}):null,n&&"galleryOwner"===n.role?Object(r.jsx)(b.a.Link,{href:"#/GalleryOwner",children:"Galleries"}):null,n&&"galleryOwner"===n.role?Object(r.jsx)(b.a.Link,{href:"#/GalleryOwnerArtists",children:"Artists"}):null]}),Object(r.jsxs)(b.a,{className:"ml-auto",children:[n?null:Object(r.jsx)(b.a.Link,{href:"#/Login",children:"LogIn"}),n?null:Object(r.jsx)(b.a.Link,{href:"#",children:"SignIn"}),n?Object(r.jsx)(b.a.Link,{href:"#",onClick:function(){return t()},children:"LogOut"}):null]})]})]})};n(360);var h=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(O,{}),Object(r.jsx)("p",{children:"HomePage"})]})},x=n(106),g=n.n(x),f=n(162),p=n(730),v=n(734),m=n(731),y=(n(361),n(38)),w=n.n(y),L=n(104),k=function e(t){Object(L.a)(this,e),this.id=t.id,this.createdAt=t.get("createdAt"),this.role=t.get("role"),this.email=t.get("email"),this.picture=t.get("picture")};var G=function(e){var t=Object(c.useState)("rev@rev.com"),n=Object(l.a)(t,2),a=n[0],i=n[1],s=Object(c.useState)("1234"),o=Object(l.a)(s,2),u=o[0],b=o[1],d=e.onLogin,O=Object(c.useState)(!1),h=Object(l.a)(O,2),x=h[0],y=h[1],L=Object(c.useState)(!1),G=Object(l.a)(L,2),A=G[0],C=G[1];function I(){return(I=Object(f.a)(g.a.mark((function e(){var t,n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.User.logIn(a,u);case 3:t=e.sent,n=new k(t),d(n),"artist"===n.role&&y(!0),"galleryOwner"===n.role&&C(!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.error("Error while logging in , "+e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return A?Object(r.jsx)(j.a,{to:"/GalleryOwner"}):x?Object(r.jsx)(j.a,{to:"/ArtistGalleries"}):Object(r.jsx)("div",{className:"p-login",children:Object(r.jsx)(p.a,{children:Object(r.jsxs)(v.a,{children:[Object(r.jsxs)(v.a.Group,{controlId:"formBasicEmail",children:[Object(r.jsx)(v.a.Label,{children:"Email address"}),Object(r.jsx)(v.a.Control,{type:"email",value:a,onChange:function(e){return i(e.target.value)},placeholder:"Enter email"}),Object(r.jsx)(v.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(r.jsxs)(v.a.Group,{controlId:"formBasicPassword",children:[Object(r.jsx)(v.a.Label,{children:"Password"}),Object(r.jsx)(v.a.Control,{type:"password",value:u,onChange:function(e){return b(e.target.value)},placeholder:"Password"})]}),Object(r.jsx)(m.a,{variant:"primary",type:"button",onClick:function(){return I.apply(this,arguments)},children:"Submit"})]})})})};n(724);var A=function(e){var t=e.onLogout;return Object(c.useContext)(d),Object(r.jsxs)("div",{children:[Object(r.jsx)(O,{onLogout:t}),Object(r.jsx)("p",{children:"GalleryOwnerPage"})]})},C=(n(725),function e(t){Object(L.a)(this,e),this.id=t.id,this.name=t.get("name"),this.createdAt=t.get("createdAt"),this.createdBy=t.get("createdBy"),this.img=t.get("artwork").url(),this.galleryId=t.get("galleryId")}),I=n(736);n(726);var B=function(e){var t=e.artwork;return console.log(t.img),Object(r.jsx)("div",{className:"c-pic-card",children:Object(r.jsxs)(I.a,{children:[Object(r.jsx)(I.a.Body,{children:Object(r.jsx)(I.a.Title,{children:t.name})}),Object(r.jsx)(I.a.Img,{variant:"bottom",src:t.img})]})})},E=n(347),P=n(732),S=function e(t){Object(L.a)(this,e),this.id=t.id,this.name=t.get("name"),this.createdAt=t.get("createdAt"),this.createdBy=t.get("createdBy")};var N=function(e){var t=e.onLogout,n=Object(c.useContext)(d),a=Object(c.useState)([]),i=Object(l.a)(a,2),s=(i[0],i[1]),o=Object(c.useState)([]),u=Object(l.a)(o,2),b=u[0],h=u[1];if(Object(c.useEffect)((function(){function e(){return(e=Object(f.a)(g.a.mark((function e(){var t,n,r,c,a,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=w.a.Object.extend("Gallery"),n=new w.a.Query(t),e.next=5,n.find();case 5:return r=e.sent,console.log("Galleries found",r),s(r.map((function(e){return new S(e)}))),c=w.a.Object.extend("ArtWork"),(a=new w.a.Query(c)).include("galleryId",r),e.next=13,a.find();case 13:i=e.sent,console.log("ArtWork found",i),h(i.map((function(e){return new C(e)}))),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.error("Error while fetching data",e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})))).apply(this,arguments)}n&&function(){e.apply(this,arguments)}()}),[n]),!n)return Object(r.jsx)(j.a,{to:"#/"});var x=b.map((function(e){return Object(r.jsx)(E.a,{lg:3,md:6,children:Object(r.jsx)(B,{artwork:e})},e.id)}));return Object(r.jsxs)("div",{className:"p-artistGalleries",children:[Object(r.jsx)(O,{onLogout:t}),Object(r.jsxs)(p.a,{children:[Object(r.jsx)("p",{children:"Gallery 1"}),Object(r.jsx)(P.a,{children:x})]})]})};n(727);var F=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(O,{}),Object(r.jsx)("p",{children:"GalleryByIdPage"})]})};var U=function(e){var t=e.onLogout;return Object(r.jsxs)("div",{children:[Object(r.jsx)(O,{onLogout:t}),Object(r.jsx)("p",{children:"GalleryOwnerArtistsPage"})]})};var T=function(){var e=Object(c.useState)(w.a.User.current()?new k(w.a.User.current()):null),t=Object(l.a)(e,2),n=t[0],a=t[1];function i(){a(null),w.a.User.logOut()}return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(d.Provider,{value:n,children:Object(r.jsx)(o.a,{children:Object(r.jsxs)(j.d,{children:[Object(r.jsx)(j.b,{exact:!0,path:"/",children:Object(r.jsx)(h,{})}),Object(r.jsx)(j.b,{exact:!0,path:"/Login",children:Object(r.jsx)(G,{onLogin:function(e){a(e)}})}),Object(r.jsx)(j.b,{exact:!0,path:"/GalleryOwner",children:Object(r.jsx)(A,{onLogout:i})}),Object(r.jsx)(j.b,{exact:!0,path:"/GalleryOwnerArtists",children:Object(r.jsx)(U,{onLogout:i})}),Object(r.jsx)(j.b,{exact:!0,path:"/ArtistGalleries",children:Object(r.jsx)(N,{onLogout:i})}),Object(r.jsx)(j.b,{exact:!0,path:"/ArtistGalleries/:id",children:Object(r.jsx)(F,{onLogout:i})})]})})})})},Q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,737)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};w.a.serverURL="https://parseapi.back4app.com",w.a.initialize("QhROuOfnzEEICGNC3Bzqw8dkXva20GYFeBVrljX9","wmkjaeQ7aDAEUHIHtCmZ3cmaqaA6LsILBPrrlIjE"),s.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(T,{})}),document.getElementById("root")),Q()}},[[728,1,2]]]);
//# sourceMappingURL=main.eaea8e2f.chunk.js.map