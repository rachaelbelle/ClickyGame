(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"/images/Snake.jpg"},{id:2,image:"/images/Jack.jpg"},{id:3,image:"/images/MacReady.jpg"},{id:4,image:"/images/CaptainRon.jpg"},{id:5,image:"/images/Cash.jpg"},{id:6,image:"/images/Overboard.jpg"},{id:7,image:"/images/Soldier.jpg"},{id:8,image:"/images/StarGate.jpg"},{id:9,image:"/images/StuntManMike.jpg"},{id:10,image:"/images/Swanson.jpg"},{id:11,image:"/images/UsedCars.jpg"},{id:12,image:"/images/WyattEarp.jpg"}]},function(e,a,t){},,function(e,a,t){},,,,,,,function(e,a,t){e.exports=t(19)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(5),i=t.n(s),c=t(6),o=t(7),l=t(9),m=t(8),g=t(10),u=(t(2),function(e){return r.a.createElement("div",{className:"NavBar row"},r.a.createElement("div",{className:"score col-md-3"},"Score ",e.score),r.a.createElement("div",{className:"score col-md-6"},"Message ",e.message),r.a.createElement("div",{className:"score col-md-3"},"Top Score ",e.topScore))}),d=function(){return r.a.createElement("div",{className:"instructions"},r.a.createElement("h1",{className:"instructions"},"Clicky Game!"),r.a.createElement("h5",{className:"instructions"},"Click on an image to earn points, but don't click on any more than once!"))};t(17);var p=function(e){return r.a.createElement("div",{className:"wrapper"},e.children)},f=(t(4),function(e){var a=e.image,t=e.name,n=e.onHandleShuffle,s=e.id;return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{src:a,alt:t,onClick:function(){return n(s)},className:"Kurt"}))});var h=function(e){var a=e.images,t=e.onHandleShuffle,n=a.map(function(e){return r.a.createElement(f,{className:"wrapper",key:e.id,id:e.id,name:e.name,image:e.image,onHandleShuffle:t})});return r.a.createElement("div",null,n)},S=function(){return r.a.createElement("div",{className:"footer text-center"},"Rachaelbelle 2k19")},E=t(1),v=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(l.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(r)))).state={images:E,score:0,topScore:0,totalScore:0,imagesClick:[],messageClick:"Click an image to start"},t.onHandleShuffle=function(e){var a=t.state.imagesClick;if(a.includes(e))t.setState({imagesClick:[],score:0,totalScore:t.state.topScore,message:" You guessed incorrectly! "});else{a.push(e),t.state.score>=t.state.totalScore&&t.setState({topScore:t.state.score+1}),12===a.length&&t.setState({imagesClick:[]}),t.setState({score:a.length,totalScore:t.state.topScore,message:" You guessed correctly! "});for(var n,r,s=E.length;--s>0;)n=Math.floor(Math.random()*(s+1)),r=E[n],E[n]=E[s],E[s]=r}},t}return Object(g.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u,{score:this.state.score,message:this.state.message,topScore:this.state.topScore}),r.a.createElement(d,null),r.a.createElement(p,null,r.a.createElement(h,{onHandleShuffle:this.onHandleShuffle,images:this.state.images})),r.a.createElement(S,null))}}]),a}(r.a.Component);t(18);i.a.render(r.a.createElement(v,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.e20c5075.chunk.js.map