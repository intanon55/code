(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{279:function(t,e,r){var content=r(353);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("3c3f809b",content,!0,{sourceMap:!1})},352:function(t,e,r){"use strict";var o=r(279);r.n(o).a},353:function(t,e,r){(e=r(20)(!1)).push([t.i,".v-form[data-v-31b20854]{padding:0 10px}.set-birthday[data-v-31b20854]{position:relative}.set-birthday[data-v-31b20854]  .v-input__prepend-outer{position:absolute;right:0}",""]),t.exports=e},384:function(t,e,r){"use strict";r.r(e);var o=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,n=/^[0]([0-9]{9})*$/,l=/^[0-9]*$/,c={data:function(){var t=this;return{form:{email:this.$store.getters.getRegister.email,phone:this.$store.getters.getRegister.phone,birthday:this.$store.getters.getRegister.birthday},modal:!1,emailValidated:!1,phoneValidated:!1,emailRules:[function(e){return t.emailValidator(e)}],phoneRules:[function(e){return t.phoneValidator(e)}]}},methods:{phoneValidator:function(t){return this.phoneValidated=!1,""==t?"required":n.test(t)&&10==t.length?(this.phoneValidated=!0,!0):"please input phone number"},emailValidator:function(t){return this.emailValidated=!1,""==t?"required":o.test(t)?(this.emailValidated=!0,!0):"email is Invalid"},onlyNumber:function(t,e){if(0==t.target.value.length){if(0!=t.key)return t.preventDefault()}else if(!l.test(t.key)||t.target.value.length==e)return t.preventDefault()},validate:function(){var t=this,e=!0,r=[];return["email","phone"].forEach((function(o){""==t.form[o]&&(e=!1,r.push("".concat(o," can not be null")))})),this.emailValidated||(e=!1,r.push("email is Invalid")),this.phoneValidated||(e=!1,r.push("please input phone number")),e||this.$store.dispatch("setDialog",{isShow:!0,title:"Form is error",message:r.map((function(t){return t+"<br/>"})).join("")}),e},back:function(){this.$router.push("/register")},register:function(){var t=this;this.validate()&&(this.$store.dispatch("setRegister",this.form),this.$axios.patch("https://ionic-5a65a.firebaseio.com/members/".concat(this.$store.getters.getLine.userId,"/profile.json"),this.$store.getters.getRegister).then((function(e){t.$router.push("/register/done")})).catch((function(t){return console.log(t)})))}}},d=(r(352),r(36)),m=r(55),h=r.n(m),f=r(385),v=r(259),y=r(374),x=r(375),V=r(379),_=r(267),k=r(376),$=r(377),w=r(266),R=r(283),C=r(271),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-app-bar",{attrs:{color:"primary",dense:"",flat:"",dark:""}},[r("v-toolbar-title",[t._v("Register")])],1),t._v(" "),r("v-container",{staticClass:"pt-0 pb-0"},[r("v-row",[r("v-col",{attrs:{cols:"12"}},[r("div",{staticClass:"mt-8 text-primary text-title text-center"},[t._v("\n          Step 2 of 2\n        ")])]),t._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-form",[r("p",{staticClass:"text-center text-main mb-0 mt-4"},[t._v("Tell us more a bit")]),t._v(" "),r("v-text-field",{attrs:{type:"email",dense:"",rules:t.emailRules,label:"Email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),r("v-text-field",{attrs:{dense:"",rules:t.phoneRules,label:"Phone"},on:{keypress:function(e){return t.onlyNumber(e,10)}},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}}),t._v(" "),r("v-dialog",{ref:"dialog",attrs:{persistent:"",width:"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[r("v-text-field",t._g({staticClass:"set-birthday",attrs:{label:"Birthday","prepend-icon":"event",readonly:""},model:{value:t.form.birthday,callback:function(e){t.$set(t.form,"birthday",e)},expression:"form.birthday"}},o))]}}]),model:{value:t.modal,callback:function(e){t.modal=e},expression:"modal"}},[t._v(" "),r("v-date-picker",{attrs:{max:(new Date).toISOString().substr(0,10),scrollable:""},model:{value:t.form.birthday,callback:function(e){t.$set(t.form,"birthday",e)},expression:"form.birthday"}},[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){t.modal=!1}}},[t._v("Cancel")]),t._v(" "),r("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.$refs.dialog.save(t.form.birthday)}}},[t._v("OK")])],1)],1),t._v(" "),r("v-btn",{staticClass:"w-100 mt-10 my-btn",attrs:{rounded:"",color:"primary",dark:""},on:{click:t.register}},[t._v("Register")]),t._v(" "),r("div",{staticClass:"w-100 text-center my-btn text-primary",on:{click:t.back}},[t._v("Back")])],1)],1)],1)],1)],1)}),[],!1,null,"31b20854",null);e.default=component.exports;h()(component,{VAppBar:f.a,VBtn:v.a,VCol:y.a,VContainer:x.a,VDatePicker:V.a,VDialog:_.a,VForm:k.a,VRow:$.a,VSpacer:w.a,VTextField:R.a,VToolbarTitle:C.a})}}]);