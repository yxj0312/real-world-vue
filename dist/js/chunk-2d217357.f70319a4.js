(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d217357"],{c66d:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"profile-page"},[s("div",{staticClass:"user-info"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[s("img",{staticClass:"user-img",attrs:{src:t.profile.image,alt:"Profile image"}}),s("h4",[t._v(t._s(t.profile.username))]),s("p",[t._v(t._s(t.profile.bio))]),t.isCurrentUser()?s("div",[s("router-link",{staticClass:"btn btn-sm btn-outline-secondary action-btn",attrs:{to:{name:"settings"}}},[s("i",{staticClass:"ion-gear-a"}),t._v(" Edit Profile Settings\n            ")])],1):s("div",[t.profile.following?s("button",{staticClass:"btn btn-sm btn-secondary action-btn",on:{click:function(e){return e.preventDefault(),t.unfollow()}}},[s("i",{staticClass:"ion-plus-round"}),t._v("  Unfollow\n              "+t._s(t.profile.username)+"\n            ")]):t._e(),t.profile.following?t._e():s("button",{staticClass:"btn btn-sm btn-outline-secondary action-btn",on:{click:function(e){return e.preventDefault(),t.follow()}}},[s("i",{staticClass:"ion-plus-round"}),t._v("  Follow\n              "+t._s(t.profile.username)+"\n            ")])])])])])]),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-xs-12 col-md-10 offset-md-1"},[s("div",{staticClass:"articles-toggle"},[s("ul",{staticClass:"nav nav-pills outline-active"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"profile"}}},[t._v("\n                My Articles\n              ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{"active-class":"active",exact:"",to:{name:"profile-favorites"}}},[t._v("\n                Favorited Articles\n              ")])],1)])]),s("router-view")],1)])])])},n=[],r=(s("8e6e"),s("ac6a"),s("456d"),s("ade3")),a=s("2f62"),o=s("6c33");function c(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,i)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?c(Object(s),!0).forEach((function(e){Object(r["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var u={name:"RwvProfile",mounted:function(){this.$store.dispatch(o["n"],this.$route.params)},computed:l({},Object(a["b"])(["currentUser","profile","isAuthenticated"])),methods:{isCurrentUser:function(){return!(!this.currentUser.username||!this.profile.username)&&this.currentUser.username===this.profile.username},unfollow:function(){this.$store.dispatch(o["p"],this.$route.params)},follow:function(){this.isAuthenticated&&this.$store.dispatch(o["o"],this.$route.params)}},watch:{$route:function(t){this.$store.dispatch(o["n"],t.params)}}},f=u,p=s("2877"),v=Object(p["a"])(f,i,n,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d217357.f70319a4.js.map