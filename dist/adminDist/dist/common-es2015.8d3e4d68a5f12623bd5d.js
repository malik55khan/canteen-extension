(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{K41V:function(t,r,e){"use strict";e.d(r,"a",function(){return h});var i=e("LRne"),n=e("JIr8"),s=e("AytR"),a=e("8Y7J"),o=e("IheW"),p=e("iInd");const h=(()=>{class t{constructor(t,r){this.http=t,this.router=r,this.apiUrl=s.a.API_ENDPOINT}add(t){return this.http.post(`${this.apiUrl}admin/questionnaire/add`,t).pipe(Object(n.a)(this.handleError("getUser",[])))}getAll(t){return this.http.post(`${this.apiUrl}questionnaire`,t).pipe(Object(n.a)(this.handleError("getUser",[])))}getOne(t){return this.http.get(`${this.apiUrl}admin/questionnaire/`+t).pipe(Object(n.a)(this.handleError("getUser",[])))}update(t,r){return this.http.post(`${this.apiUrl}admin/questionnaire/`+t,r).pipe(Object(n.a)(this.handleError("getUser",[])))}handleError(t="operation",r){return t=>(console.error(t),Object(i.a)(r))}}return t.ngInjectableDef=a.Nb({factory:function(){return new t(a.Rb(o.c),a.Rb(p.l))},token:t,providedIn:"root"}),t})()},ai0T:function(t,r,e){"use strict";e.d(r,"a",function(){return h});var i=e("LRne"),n=e("JIr8"),s=e("AytR"),a=e("8Y7J"),o=e("IheW"),p=e("iInd");const h=(()=>{class t{constructor(t,r){this.http=t,this.router=r,this.apiUrl=s.a.API_ENDPOINT}getOrderStatus(){return["Processing","Received","Shipped","Delivered"]}getUserStatus(){return[{label:"Active",value:!0},{label:"De-Active",value:!1}]}uploadFile(t){return this.http.post(`${this.apiUrl}admin/uploadfile`,t).pipe(Object(n.a)(this.handleError("getUser",[])))}handleError(t="operation",r){return t=>(console.error(t),Object(i.a)(r))}}return t.ngInjectableDef=a.Nb({factory:function(){return new t(a.Rb(o.c),a.Rb(p.l))},token:t,providedIn:"root"}),t})()},fmSa:function(t,r,e){"use strict";e.d(r,"a",function(){return i});class i{transform(t,r=5){return t?t.replace(t.substring(0,r),"*****"):""}}},ufwk:function(t,r,e){"use strict";e.d(r,"a",function(){return h});var i=e("LRne"),n=e("JIr8"),s=e("AytR"),a=e("8Y7J"),o=e("IheW"),p=e("iInd");const h=(()=>{class t{constructor(t,r){this.http=t,this.router=r,this.apiUrl=s.a.API_ENDPOINT}getAll(t){return this.http.post(`${this.apiUrl}admin/order/get-all-order`,t).pipe(Object(n.a)(this.handleError("getUser",[])))}getOne(t){return this.http.get(`${this.apiUrl}order/get/`+t).pipe(Object(n.a)(this.handleError("getUser",[])))}updateOrderStatus(t,r){return this.http.post(`${this.apiUrl}admin/order/update-order-status/`+t,r).pipe(Object(n.a)(this.handleError("getUser",[])))}handleError(t="operation",r){return t=>(console.error(t),Object(i.a)(r))}}return t.ngInjectableDef=a.Nb({factory:function(){return new t(a.Rb(o.c),a.Rb(p.l))},token:t,providedIn:"root"}),t})()},zicG:function(t,r,e){"use strict";e.d(r,"a",function(){return h});var i=e("LRne"),n=e("JIr8"),s=e("AytR"),a=e("8Y7J"),o=e("IheW"),p=e("iInd");const h=(()=>{class t{constructor(t,r){this.http=t,this.router=r,this.apiUrl=s.a.API_ENDPOINT}add(t){return this.http.post(`${this.apiUrl}admin/speciality/add`,t).pipe(Object(n.a)(this.handleError("getUser",[])))}removeSpeciality(t){return this.http.post(`${this.apiUrl}admin/speciality/remove-subspeciality`,t).pipe(Object(n.a)(this.handleError("getUser",[])))}update(t,r){return this.http.post(`${this.apiUrl}admin/speciality/update/`+t,r).pipe(Object(n.a)(this.handleError("getUser",[])))}getList(t={}){return this.http.post(`${this.apiUrl}speciality`,t).pipe(Object(n.a)(this.handleError("getUser",[])))}getOne(t){return this.http.get(`${this.apiUrl}speciality/get/`+t).pipe(Object(n.a)(this.handleError("getUser",[])))}handleError(t="operation",r){return t=>(console.error(t),Object(i.a)(r))}}return t.ngInjectableDef=a.Nb({factory:function(){return new t(a.Rb(o.c),a.Rb(p.l))},token:t,providedIn:"root"}),t})()}}]);