(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{185:function(e,t,n){"use strict";(function(e){var a=n(2),r=n.n(a),s=n(12),i=n(186),c=n(187),o=n(189),l=n(188),u=n(190),h=(n(201),n(0)),f=n.n(h),d=n(66),p=n.n(d),m=n(43),g=n(67),_=new p.a("10000000000000000000000"),b={networkId:"mainnet",nodeUrl:"https://rpc.mainnet.near.org",contractName:"berryclub.ek.near",walletUrl:"https://wallet.near.org"},x=function(e){return"#".concat(e.toString(16).padStart(6,"0"))},v=function(e,t){return"rgba(".concat((e>>16)/1,", ").concat((e>>8&255)/1,", ").concat((255&e)/1,", ").concat(t,")")},C=function(e){for(var t=[],n=0;n<31;++n)t.push("hsl(".concat(e,", 100%, ").concat(100*n/30,"%)"));return t},y=function(t){var n=e.from(t,"base64");if(404!==n.length)throw new Error("Unexpected encoded line length");for(var a=[],r=4;r<n.length;r+=8){var s=n.readUInt32LE(r),i=n.readUInt32LE(r+4);a.push({color:s,ownerIndex:i})}return a},k=function(e){function t(e){var n;Object(i.a)(this,t),n=Object(o.a)(this,Object(l.a)(t).call(this,e));var a=["#000000","#666666","#aaaaaa","#FFFFFF","#F44E3B","#D33115","#9F0500","#FE9200","#E27300","#C45100","#FCDC00","#FCC400","#FB9E00","#DBDF00","#B0BC00","#808900","#A4DD00","#68BC00","#194D33","#68CCCA","#16A5A5","#0C797D","#73D8FF","#009CE0","#0062B1","#AEA1FF","#7B64FF","#653294","#FDA1FF","#FA28FF","#AB149E"].map((function(e){return e.toLowerCase()})),r=parseInt(a[Math.floor(Math.random()*a.length)].substring(1),16);return n.state={connected:!1,signedIn:!1,accountId:null,balance:0,numPixels:0,pendingPixels:0,boardLoaded:!1,selectedCell:null,currentColor:r,pickerColor:x(r),colors:a,gammaColors:C(0),pickingColor:!1},n._balanceRefreshTimer=null,n.canvasRef=f.a.createRef(),n._context=!1,n._lines=!1,n._queue=[],n._pendingPixels=[],n._refreshBoardTimer=null,n._sendQueueTimer=null,n._stopRefreshTime=(new Date).getTime()+6e5,n._initNear().then((function(){n.setState({connected:!0,signedIn:!!n._accountId,accountId:n._accountId})})),n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.canvasRef.current;this._context=t.getContext("2d"),t.addEventListener("mousemove",(function(t){var n=Math.trunc(t.offsetX/t.target.clientWidth*50),a=Math.trunc(t.offsetY/t.target.clientHeight*50),i=null;n>=0&&n<50&&a>=0&&a<50&&(i={x:n,y:a}),JSON.stringify(i)!==JSON.stringify(e.state.selectedCell)&&e.setState({selectedCell:i},Object(s.a)(r.a.mark((function n(){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.renderCanvas(),!(null!==e.state.selectedCell&&(1&t.buttons)>0)){n.next=9;break}if(!e.state.pickingColor){n.next=6;break}e.pickColor(e.state.selectedCell),n.next=9;break;case 6:return e.saveColor(),n.next=9,e.drawPixel(e.state.selectedCell);case 9:case"end":return n.stop()}}),n)}))))})),t.addEventListener("mousedown",function(){var t=Object(s.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===e.state.selectedCell){t.next=8;break}if(!e.state.pickingColor){t.next=5;break}e.pickColor(e.state.selectedCell),t.next=8;break;case 5:return e.saveColor(),t.next=8,e.drawPixel(e.state.selectedCell);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),document.addEventListener("keydown",(function(t){t.altKey&&e.setState({pickingColor:!0},(function(){e.renderCanvas()}))})),document.addEventListener("keyup",(function(t){!t.altKey&&e.setState({pickingColor:!1},(function(){e.renderCanvas()}))}))}},{key:"pickColor",value:function(e){var t=this;if(this.state.signedIn&&this._lines&&this._lines[e.y]){var n=this._lines[e.y][e.x].color;this.setState({currentColor:n,pickingColor:!1},(function(){t.renderCanvas()}))}}},{key:"_sendQueue",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t,n=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this._queue.slice(0,30),this._queue=this._queue.slice(30),this._pendingPixels=t,e.prev=3,e.next=6,this._contract.draw({pixels:t},new p.a("300000000000000"));case 6:e.next=12;break;case 8:e.prev=8,e.t0=e.catch(3),console.log("Failed to send a transaction",e.t0),this._queue=this._queue.concat(this._pendingPixels);case 12:return e.prev=12,e.next=15,Promise.all([this.refreshBoard(!0),this.refreshAccountStats()]);case 15:e.next=19;break;case 17:e.prev=17,e.t1=e.catch(12);case 19:this._pendingPixels.forEach((function(e){n._pending[e.y][e.x]===e.color&&(n._pending[e.y][e.x]=-1)})),this._pendingPixels=[];case 21:case"end":return e.stop()}}),e,this,[[3,8],[12,17]])})));return function(){return e.apply(this,arguments)}}()},{key:"_pingQueue",value:function(){var e=Object(s.a)(r.a.mark((function e(t){var n=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._sendQueueTimer&&(clearTimeout(this._sendQueueTimer),this._sendQueueTimer=null),0!==this._pendingPixels.length||!(this._queue.length>=30||t)){e.next=4;break}return e.next=4,this._sendQueue();case 4:this._queue.length>0&&(this._sendQueueTimer=setTimeout(Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._pingQueue(!0);case 2:case"end":return e.stop()}}),e)}))),500));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"drawPixel",value:function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.signedIn&&this._lines&&this._lines[t.y]){e.next=2;break}return e.abrupt("return");case 2:if(!(this.state.balance-this.state.pendingPixels<1)){e.next=4;break}return e.abrupt("return");case 4:if(this._pending[t.y][t.x]===this.state.currentColor||this._lines[t.y][t.x].color===this.state.currentColor){e.next=8;break}this._pending[t.y][t.x]=this.state.currentColor,e.next=9;break;case 8:return e.abrupt("return");case 9:return this._queue.push({x:t.x,y:t.y,color:this.state.currentColor}),this._stopRefreshTime=(new Date).getTime()+6e5,e.next=13,this._pingQueue(!1);case 13:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"refreshAccountStats",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t,n,a,s,i=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=parseFloat,e.next=3,this._contract.get_account_balance({account_id:this._accountId});case 3:return e.t1=e.sent,t=(0,e.t0)(e.t1),e.next=7,this._contract.get_account_num_pixels({account_id:this._accountId});case 7:n=e.sent,this._balanceRefreshTimer&&(clearInterval(this._balanceRefreshTimer),this._balanceRefreshTimer=null),a=(new Date).getTime(),s=(n+1)*this._pixelCost/864e5,this.setState({balance:t/this._pixelCost,pendingPixels:this._queue.length,numPixels:n}),this._balanceRefreshTimer=setInterval((function(){var e=(new Date).getTime();i.setState({balance:(t+(e-a)*s)/i._pixelCost,pendingPixels:i._pendingPixels.length+i._queue.length})}),100);case 13:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"_initNear",value:function(){var e=Object(s.a)(r.a.mark((function e(){var t,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new m.keyStores.BrowserLocalStorageKeyStore,e.next=3,m.connect(Object.assign({deps:{keyStore:t}},b));case 3:return n=e.sent,this._keyStore=t,this._near=n,this._walletConnection=new m.WalletConnection(n,b.contractName),this._accountId=this._walletConnection.getAccountId(),this._account=this._walletConnection.account(),this._contract=new m.Contract(this._account,b.contractName,{viewMethods:["get_lines","get_line_versions","get_pixel_cost","get_account_balance","get_account_num_pixels","get_account_id_by_index"],changeMethods:["draw","buy_tokens"]}),e.t0=parseFloat,e.next=13,this._contract.get_pixel_cost();case 13:if(e.t1=e.sent,this._pixelCost=(0,e.t0)(e.t1),!this._accountId){e.next=18;break}return e.next=18,this.refreshAccountStats();case 18:return this._lineVersions=Array(50).fill(-1),this._lines=Array(50).fill(!1),this._pending=Array(50).fill(!1),this._pending.forEach((function(e,t,n){return n[t]=Array(50).fill(-1)})),e.next=24,this.refreshBoard(!0);case 24:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"refreshBoard",value:function(){var e=Object(s.a)(r.a.mark((function e(t){var n,a,i,c,o,l,u,h,f,d=this;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this._refreshBoardTimer&&(clearTimeout(this._refreshBoardTimer),this._refreshBoardTimer=null),(new Date).getTime()<this._stopRefreshTime&&(this._refreshBoardTimer=setTimeout(Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.refreshBoard(!1);case 2:case"end":return e.stop()}}),e)}))),1e3)),t||!document.hidden){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,this._contract.get_line_versions();case 7:for(n=e.sent,a=[],i=0;i<50;++i)n[i]!==this._lineVersions[i]&&a.push(i);for(c=[],o=0;o<a.length;o+=10)c.push(a.slice(o,o+10));return e.next=14,Promise.all(c.map((function(e){return d._contract.get_lines({lines:e})})));case 14:for(l=(l=e.sent).flat(),c=c.flat(),u=0;u<c.length;++u)h=c[u],f=y(l[u]),this._lines[h]=f;this._lineVersions=n,this.renderCanvas();case 20:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"renderCanvas",value:function(){if(this._context&&this._lines){for(var e=this._context,t=0;t<50;++t){var n=this._lines[t];if(n)for(var a=0;a<50;++a){var r=n[a];e.fillStyle=x(r.color),e.fillRect(16*a,16*t,16,16)}}if(this._pendingPixels.concat(this._queue).forEach((function(t){e.fillStyle=x(t.color),e.fillRect(16*t.x,16*t.y,16,16)})),this.state.selectedCell){var s=this.state.selectedCell;if(this.state.pickingColor){var i=this._lines[s.y]?this._lines[s.y][s.x].color:0;e.beginPath(),e.strokeStyle=e.fillStyle=v(i,.5),e.lineWidth=64,e.arc(16*(s.x+.5),16*(s.y+.5),64,0,2*Math.PI),e.stroke(),e.closePath(),e.beginPath(),e.strokeStyle=e.fillStyle=v(i,1),e.lineWidth=32,e.arc(16*(s.x+.5),16*(s.y+.5),64,0,2*Math.PI),e.stroke(),e.closePath()}else e.fillStyle=v(this.state.currentColor,.2),e.fillRect(16*s.x,0,16,16*s.y),e.fillRect(16*s.x,16*(s.y+1),16,16*(50-s.y-1)),e.fillRect(0,16*s.y,16*s.x,16),e.fillRect(16*(s.x+1),16*s.y,16*(50-s.x-1),16),e.beginPath(),e.lineWidth=3,e.fillStyle=x(this.state.currentColor),e.strokeStyle=x(this.state.currentColor),e.rect(16*s.x,16*s.y,16,16),e.stroke(),e.closePath()}this.state.boardLoaded||this.setState({boardLoaded:!0})}}},{key:"requestSignIn",value:function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"Berry Club",e.next=3,this._walletConnection.requestSignIn(b.contractName,"Berry Club");case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"logOut",value:function(){var e=Object(s.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._walletConnection.signOut(),this._accountId=null,this.setState({signedIn:!!this._accountId,accountId:this._accountId});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"hueColorChange",value:function(e){this.setState({gammaColors:C(e.hsl.h)}),this.changeColor(e)}},{key:"saveColor",value:function(){var e=x(this.state.currentColor),t=this.state.colors.indexOf(e);t>=0&&this.state.colors.splice(t,1),this.setState({colors:[e].concat(this.state.colors).slice(0,31)})}},{key:"changeColor",value:function(e){var t=this,n=65536*e.rgb.r+256*e.rgb.g+e.rgb.b;this.setState({pickerColor:e,currentColor:n},(function(){t.renderCanvas()}))}},{key:"buyTokens",value:function(){var e=Object(s.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=_.muln(t),e.next=3,this._contract.buy_tokens({},new p.a("30000000000000"),n);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state.connected?this.state.signedIn?f.a.createElement("div",null,f.a.createElement("div",{className:"float-right"},f.a.createElement("button",{className:"btn btn-outline-secondary",onClick:function(){return e.logOut()}},"Log out (",this.state.accountId,")")),f.a.createElement("div",{className:"balances"},"Balance: ",f.a.createElement("span",{className:"font-weight-bold"},(this.state.balance-this.state.pendingPixels).toFixed(3)),"\ud83e\udd51 (+",f.a.createElement("span",{className:"font-weight-bold"},this.state.numPixels+1),"\ud83e\udd51/day)",this.state.pendingPixels>0?f.a.createElement("span",null," (",this.state.pendingPixels," pending)"):""),f.a.createElement("div",{className:"buttons"},f.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.buyTokens(10)}},"Buy ",f.a.createElement("span",{className:"font-weight-bold"},"25\ud83e\udd51")," for ",f.a.createElement("span",{className:"font-weight-bold"},"\u24c30.1"))," ",f.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.buyTokens(40)}},"Buy ",f.a.createElement("span",{className:"font-weight-bold"},"100\ud83e\udd51")," for ",f.a.createElement("span",{className:"font-weight-bold"},"\u24c30.4"))," ",f.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.buyTokens(100)}},"Buy ",f.a.createElement("span",{className:"font-weight-bold"},"250\ud83e\udd51")," for ",f.a.createElement("span",{className:"font-weight-bold"},"\u24c31"))," ",f.a.createElement("button",{className:"btn btn-success",onClick:function(){return e.buyTokens(500)}},"DEAL: Buy ",f.a.createElement("span",{className:"font-weight-bold"},"1500\ud83e\udd51")," for ",f.a.createElement("span",{className:"font-weight-bold"},"\u24c35"))),f.a.createElement("div",{className:"color-picker"},f.a.createElement("div",null,"Select a color to draw"),f.a.createElement(g.HuePicker,{color:this.state.pickerColor,width:"100%",disableAlpha:!0,onChange:function(t){return e.hueColorChange(t)}}),f.a.createElement(g.GithubPicker,{className:"circle-picker",colors:this.state.gammaColors,color:this.state.pickerColor,triangle:"hide",width:"100%",onChangeComplete:function(t){return e.changeColor(t)}}),f.a.createElement(g.GithubPicker,{className:"circle-picker",colors:this.state.colors,color:this.state.pickerColor,triangle:"hide",width:"100%",onChangeComplete:function(t){return e.hueColorChange(t)}}))):f.a.createElement("div",{style:{marginBottom:"10px"}},f.a.createElement("button",{className:"btn btn-primary",onClick:function(){return e.requestSignIn()}},"Log in with NEAR Wallet")):f.a.createElement("div",null,"Connecting... ",f.a.createElement("span",{className:"spinner-grow spinner-grow-sm",role:"status","aria-hidden":"true"}));return f.a.createElement("div",{className:"px-5"},f.a.createElement("h1",null,"\ud83e\udd51 Berry Club"),t,f.a.createElement("div",null,this.state.signedIn?f.a.createElement("div",null,"Draw here - one \ud83e\udd51 per pixel. Hold ",f.a.createElement("span",{className:"badge badge-secondary"},"ALT")," key to pick a color from board."):"",f.a.createElement("canvas",{ref:this.canvasRef,width:800,height:800,className:this.state.boardLoaded?"pixel-board":"pixel-board c-animated-background"})))}}]),t}(f.a.Component);t.a=k}).call(this,n(9).Buffer)},191:function(e,t,n){e.exports=n(192)},192:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(184),i=n.n(s),c=(n(197),n(185));i.a.render(r.a.createElement(c.a,null),document.getElementById("root"))},197:function(e,t,n){},201:function(e,t,n){},202:function(e,t){},206:function(e,t){},214:function(e,t){},227:function(e,t){},229:function(e,t){}},[[191,1,2]]]);
//# sourceMappingURL=main.7d9da88a.chunk.js.map