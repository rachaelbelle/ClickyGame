(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,image:"public/images/Snake.jpg"},{id:2,image:"images/Jack.jpg"},{id:3,image:"public/images/MacReady.jpg"},{id:4,image:"public/images/CaptainRon.jpg"},{id:5,image:"public/images/Cash.jpg"},{id:6,image:"public/images/Overboard.jpg"},{id:7,image:"public/images/Soldier.jpg"},{id:8,image:"public/images/StarGate.jpg"},{id:9,image:"public/images/StuntManMike.jpg"},{id:10,image:"public/images/Swanson.jpg"},{id:11,image:"public/images/UsedCars.jpg"},{id:12,image:"public/images/WyattEarp.jpg"}]},function(e,a,t){},,function(e,a,t){},,,,,,,function(e,a,t){e.exports=t(19)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),c=t(5),r=t.n(c),s=t(6),l=t(7),o=t(9),m=t(8),u=t(10),g=(t(2),function(e){return i.a.createElement("div",{className:"NavBar row"},i.a.createElement("div",{className:"score col-md-3"},"Score ",e.score),i.a.createElement("div",{className:"score col-md-6"},"Message ",e.message),i.a.createElement("div",{className:"score col-md-3"},"Top Score ",e.topScore))}),p=function(){return i.a.createElement("div",{className:"instructions"},i.a.createElement("h1",{className:"instructions"},"Clicky Game!"),i.a.createElement("h5",{className:"instructions"},"Click on an image to earn points, but don't click on any more than once!"))};t(17);var d=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)},f=(t(4),function(e){var a=e.image,t=e.name,n=e.onHandleShuffle,c=e.id;return i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{src:a,alt:t,onClick:function(){return n(c)},className:"Kurt"}))});var h=function(e){var a=e.images,t=e.onHandleShuffle,n=a.map(function(e){return i.a.createElement(f,{className:"wrapper",key:e.id,id:e.id,name:e.name,image:e.image,onHandleShuffle:t})});return i.a.createElement("div",null,n)},S=function(){return i.a.createElement("div",{className:"footer text-center"},"Rachaelbelle 2k19")},E=t(1),b=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(i)))).state={images:E,score:0,topScore:0,totalScore:0,imagesClick:[],messageClick:"Click an image to start"},t.onHandleShuffle=function(e){var a=t.state.imagesClick;if(a.includes(e))t.setState({imagesClick:[],score:0,totalScore:t.state.topScore,message:" You guessed incorrectly! "});else{a.push(e),t.state.score>=t.state.totalScore&&t.setState({topScore:t.state.score+1}),12===a.length&&t.setState({imagesClick:[]}),t.setState({score:a.length,totalScore:t.state.topScore,message:" You guessed correctly! "});for(var n,i,c=E.length;--c>0;)n=Math.floor(Math.random()*(c+1)),i=E[n],E[n]=E[c],E[c]=i}},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(g,{score:this.state.score,message:this.state.message,topScore:this.state.topScore}),i.a.createElement(p,null),i.a.createElement(d,null,i.a.createElement(h,{onHandleShuffle:this.onHandleShuffle,images:this.state.images})),i.a.createElement(S,null))}}]),a}(i.a.Component);t(18);r.a.render(i.a.createElement(b,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.ebef3ced.chunk.js.map