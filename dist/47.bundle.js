(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{"/WVu":function(t,e,i){(t.exports=i("JPst")(!1)).push([t.i,".app-login[data-v-4557679a]{display:flex;justify-content:center;align-items:center;border:1px solid #dadada;border-top:0;height:calc(100vh - 40px)}.app-login .app-details[data-v-4557679a]{margin-top:-60px}.app-login .requirements[data-v-4557679a]{min-width:400px;text-align:left;max-width:80%;margin:10px auto}.app-login .requirements .authorities .select[data-v-4557679a]{margin-top:-7px}.app-login .requirements .dangerous-authority[data-v-4557679a]{background:#ff0707;border:1px solid #cb0606;color:#fff;font-size:10px;margin-bottom:10px;margin-top:-7px;padding:10px;border-radius:4px}.app-login .requirements .boxes[data-v-4557679a]{width:100%}.app-login .requirements .boxes .box[data-v-4557679a]{width:100%}.app-login .requirements .requirement[data-v-4557679a]{padding:10px 0;display:flex;align-items:center;position:relative}.app-login .requirements .requirement label[data-v-4557679a]{font-size:10px;padding-top:2px}.app-login .requirements .requirement .icon[data-v-4557679a]{padding-right:5px;align-self:flex-start;color:#7a7a7a;margin-left:-8px}.app-login .requirements .requirement .icon.bubble[data-v-4557679a]{padding:3px 2px;border-radius:50%;background:#0799ff;border:1px solid #0778dd;color:#fff;font-size:9px;cursor:pointer}.app-login .requirements .requirement .icon.bubble:hover ~ .bubble-explainer[data-v-4557679a]{display:block}.app-login .requirements .requirement .bubble-explainer[data-v-4557679a]{position:absolute;right:-10px;bottom:calc(100% - 10px);width:380px;font-size:10px;background:#fff;color:#333;box-shadow:0 2px 4px rgba(7,155,232,0.23),0 8px 24px rgba(7,155,232,0.23);padding:20px;border-radius:4px;display:none;z-index:999999}.app-login .requirements .requirement .text[data-v-4557679a]{flex:1;font-size:10px}.app-login .requirements .requirement.all-accounts[data-v-4557679a]{margin-top:10px;padding-top:20px;border-top:1px solid #dfe0e1}.app-login .requirements .requirement.all-accounts .icon[data-v-4557679a]:first-child{color:#0799ff}.app-login .requirements .requirement.all-accounts .network-accounts-list[data-v-4557679a]{max-height:100px;overflow-y:auto}.app-login .requirements .requirement.all-accounts .network-accounts[data-v-4557679a]{font-size:10px;font-weight:bold;display:inline-block;margin-right:5px}.app-login .requirements .requirement.all-accounts .network-accounts .name[data-v-4557679a]{color:#0799ff;text-decoration:underline}.app-login .requirements .requirement.personal[data-v-4557679a]{margin-top:10px;padding-top:20px;border-top:1px solid #dfe0e1}.app-login .requirements .requirement.no-accounts[data-v-4557679a]{text-align:center;width:350px;display:flex;justify-content:center;align-items:center;flex-direction:column;border:1px solid #0799ff;border-radius:4px;margin:20px auto 10px;padding:20px}.app-login .requirements .requirement.no-accounts .network-name[data-v-4557679a]{font-size:14px;font-weight:bold;margin-bottom:5px}.app-login .actions[data-v-4557679a]{margin-top:30px;position:absolute;bottom:30px;right:30px;left:30px;display:flex;justify-content:space-between}\n",""])},IeaP:function(t,e,i){"use strict";var n=i("L2JU"),a={components:{Scatter:i("wg2a").a},props:["app","suffix"],computed:{...Object(n.d)(["appReputation"]),...Object(n.c)(["ridlEnabled"]),unknownReputation(){return void 0===this.appReputation},trusted(){return this.appReputation&&parseFloat(this.appReputation.decimal)>0},untrusted(){return this.appReputation&&parseFloat(this.appReputation.decimal)<0}}},s=(i("tL4a"),i("KHd+")),o=Object(s.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"app-details"},[t.untrusted?i("figure",{staticClass:"logo scam"},[i("i",{staticClass:"icon-attention"})]):i("figure",{staticClass:"logo",class:{border:"Scatter"!==t.app.applink&&!t.app.img}},["Scatter"===t.app.applink?i("Scatter"):t.app.img?i("img",{attrs:{src:t.app.img}}):i("span",[t._v(t._s(t.$t("popouts.popoutApp.noImage")))])],1),t._v(" "),t.ridlEnabled&&"Scatter"!==t.app.applink?i("section",[!1===t.appReputation?i("figure",{staticClass:"reputation"},[i("i",{staticClass:"icon-spin4 animate-spin"}),t._v(" loading reputation")]):i("section",[t.unknownReputation?i("figure",{staticClass:"reputation"},[t._v(t._s(t.$t("popouts.popoutApp.reputation.unknown")))]):t._e(),t._v(" "),t.trusted?i("figure",{staticClass:"reputation trusted"},[t._v(t._s(t.$t("popouts.popoutApp.reputation.trusty")))]):t._e(),t._v(" "),t.untrusted?i("figure",{staticClass:"reputation untrusted"},[t._v(t._s(t.$t("popouts.popoutApp.reputation.scam")))]):t._e()])]):t._e(),t._v(" "),i("figure",{staticClass:"name"},[i("b",[t._v(t._s(t.app.name))]),t._v(" "),t.suffix?i("span",[t._v(t._s(t.suffix))]):t._e()])])}),[],!1,null,"3c121449",null);e.a=o.exports},J8XJ:function(t,e,i){var n=i("y5zb");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i("SZ7m").default)("1a4d8aa0",n,!0,{})},L6xj:function(t,e,i){var n=i("p7K2");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i("SZ7m").default)("c9a2862e",n,!0,{})},Wcjy:function(t,e,i){var n=i("/WVu");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);(0,i("SZ7m").default)("3ee17790",n,!0,{})},h0p9:function(t,e,i){"use strict";var n=i("Wcjy");i.n(n).a},leBm:function(t,e,i){"use strict";i.r(e);var n=i("L2JU"),a=i("EY8S"),s=i("78si"),o=i.n(s),r=i("psvp"),l=i("IfgB"),c=i("Gbp+"),p=(i("F+MN"),i("+nw1")),u=i("IeaP");i("8olR");var d={props:["popup","expanded"],components:{PopOutApp:u.a,RequiredFields:r.a},data:()=>({account:null,selectedAccounts:[],searchTerms:"",selectedLocation:null,selectedIdentity:null,showingAll:!1,loginAll:!1,reputation:null}),created(){this.loginAll=this.popup.data.type===p.LOGIN_ALL,this.validAccounts.length&&(this.account=this.validAccounts[0]),this.selectIdentity(this.identities.sort((t,e)=>e.id===this.scatter.keychain.lastUsedIdentity?1:t.id===this.scatter.keychain.lastUsedIdentity?-1:0)[0])},computed:{...Object(n.d)(["scatter","balances"]),...Object(n.c)(["identity","identities","accounts","networks","locations"]),appData(){return this.popup.data.props.appData},validAccounts(){if(!this.accountRequirements.length)return[];return this.accountRequirements.map(t=>o.a.fromJson(t))[0].accounts().sort((t,e)=>"active"===e.authority?1:0).sort((t,e)=>e.logins-t.logins)},requestedNetworks(){return this.accountRequirements.map(t=>{const e=o.a.fromJson(t);return this.networks.find(t=>t.unique()===e.unique())})},network(){return o.a.fromJson(this.accountRequirements[0]||{})},savedNetwork(){return this.networks.find(t=>t.unique()===this.network.unique())},payload(){return this.popup.payload()},isValidIdentity(){return this.selectedIdentity.hasRequiredFields(this.fields,this.selectedLocation)},fields(){return a.IdentityRequiredFields.fromJson(this.payload.fields)},personalFields(){return this.fields.personal},locationFields(){return this.fields.location},missingFields(){return!(!this.personalFields.length&&!this.locationFields.length)&&!this.identity.hasRequiredFields(this.fields)},identityRequirements(){return this.fields.personal.concat(this.fields.location).join(", ")},accountRequirements(){return this.fields.accounts||[]},allRequirementsMet(){return!this.accountRequirements.length||!!this.validAccounts.length},onlyIdentityLogin(){return!this.fields.personal.length&&!this.fields.location.length&&!this.fields.accounts.length}},methods:{returnResult(t){this.$emit("returned",t)},selectTokenAndAccount(){l.a.push(c.a.selectAccount(t=>{t&&(this.account=t)},this.validAccounts))},login(){this.returnResult({identity:this.selectedIdentity,location:this.selectedLocation,accounts:this.account?[this.account]:[],missingFields:this.missingFields})},selectIdentity(t){this.selectedIdentity=t.clone(),t.getLocation()?this.selectedLocation=t.getLocation().clone():this.locations.length&&(this.selectedLocation=this.locations[0].clone())}}},g=(i("h0p9"),i("KHd+")),f=Object(g.a)(d,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",[i("PopOutHead",{attrs:{"id-selector":"1",identity:t.selectedIdentity},on:{closed:t.returnResult,identity:t.selectIdentity}}),t._v(" "),i("section",{staticClass:"app-login"},[i("section",[i("PopOutApp",{attrs:{app:t.appData,suffix:t.account?t.$t("popouts.login.suffix"):""}}),t._v(" "),i("section",{staticClass:"requirements"},[!t.loginAll&&t.validAccounts.length?i("section",{staticClass:"requirement account"},[i("section",{staticClass:"boxes"},[i("section",{staticClass:"box account-selector",on:{click:t.selectTokenAndAccount}},[i("section",[i("figure",{staticClass:"name"},[t._v(t._s(t.account.sendable()))]),t._v(" "),i("figure",{staticClass:"network"},[t._v(t._s(t.account.network().name))])]),t._v(" "),i("figure",{staticClass:"chevron fas fa-caret-square-down"})])])]):t._e(),t._v(" "),!t.loginAll&&t.account&&"owner"===t.account.authority?i("section",{staticClass:"dangerous-authority"},[t._v("\n\t\t\t\t\t"+t._s(t.$t("popouts.login.dangerousPermission"))+"\n\t\t\t\t")]):t._e(),t._v(" "),!t.loginAll&&t.account&&t.account.authorities(!1).length>1?i("section",{staticClass:"authorities"},[i("Select",{attrs:{bordered:"1",options:t.account.authorities(!1),parser:function(t){return t.authority},iconparser:function(t){return"owner"===t.authority?{class:"icon-attention red"}:""},selected:t.account},on:{selected:function(e){return t.account=e}}})],1):t.loginAll&&t.validAccounts.length?i("section",{staticClass:"requirement all-accounts"},[i("figure",{staticClass:"icon icon-network"}),t._v(" "),i("section",{staticClass:"text"},[i("label",[t._v(t._s(t.$t("popouts.login.allAccountsFor")))]),t._v(" "),i("section",{staticClass:"network-accounts-list"},t._l(t.requestedNetworks,(function(e,n){return i("section",{staticClass:"network-accounts"},[i("span",{staticClass:"name"},[t._v(t._s(e.name)+" ("+t._s(e.accounts(!0).length)+" "+t._s(t.$tc("generic.accounts",e.accounts(!0).length))+")")]),t._v(" "),n+1<t.requestedNetworks.length?i("span",[t._v(",")]):t._e()])})),0)]),t._v(" "),i("figure",{staticClass:"icon bubble icon-help"}),t._v(" "),i("section",{staticClass:"bubble-explainer"},[t._v("\n\t\t\t\t\t\t"+t._s(t.$t("popouts.login.allAccountsDescription",{app:t.appData.name}))+"\n\t\t\t\t\t")])]):t._e(),t._v(" "),t.onlyIdentityLogin?i("section",{staticClass:"requirement personal"},[i("figure",{staticClass:"icon icon-check"}),t._v(" "),i("figure",{staticClass:"text"},[i("b",[t._v(t._s(t.$t("popouts.login.noInfoNeededTitle")))]),t._v(" "),i("br"),t._v("\n\t\t\t\t\t\t"+t._s(t.$t("popouts.login.noInfoNeededDescription"))+"\n\t\t\t\t\t")])]):t._e(),t._v(" "),t.requestedNetworks.length&&!t.validAccounts.length?i("section",{staticClass:"requirement no-accounts"},[t.savedNetwork?i("figure",{staticClass:"network-name"},[t._v(t._s(t.savedNetwork.name))]):t._e(),t._v(" "),i("figure",{staticClass:"text"},[i("b",[t._v(t._s(t.$t("popouts.login.noAccountsTitle")))]),t._v(" "),i("br"),t._v("\n\t\t\t\t\t\t"+t._s(t.$t("popouts.login.noAccountsDescription"))+"\n\t\t\t\t\t")])]):t._e(),t._v(" "),t.allRequirementsMet&&t.identityRequirements.length?i("section",{staticClass:"requirement personal"},[i("figure",{staticClass:"icon icon-user"}),t._v(" "),i("figure",{staticClass:"text"},[i("label",[t._v(t._s(t.$t("popouts.login.personalInformation")))]),t._v("\n\t\t\t\t\t\t"+t._s(t.identityRequirements)+"\n\t\t\t\t\t")]),t._v(" "),i("figure",{staticClass:"icon bubble icon-help"}),t._v(" "),i("section",{staticClass:"bubble-explainer"},[t._v("\n\t\t\t\t\t\t"+t._s(t.$t("popouts.login.requestingPersonalInformation",{app:t.appData.name}))+"\n\t\t\t\t\t")])]):t._e()])],1),t._v(" "),i("section",{staticClass:"actions"},[i("Button",{attrs:{big:"1",text:t.$t("generic.cancel")},nativeOn:{click:function(e){return t.returnResult(null)}}}),t._v(" "),i("Button",{staticStyle:{padding:"0 20px"},attrs:{big:"1",disabled:!t.allRequirementsMet,blue:"1",text:t.$t("generic.allow")},nativeOn:{click:function(e){return t.login(e)}}})],1)])],1)}),[],!1,null,"4557679a",null);e.default=f.exports},p7K2:function(t,e,i){(t.exports=i("JPst")(!1)).push([t.i,".fields-title[data-v-586a6aca]{margin:-20px -30px 0;padding:20px 30px;background:linear-gradient(180deg, #007fd7 0%, #0799ff 100%);color:#fff;font-size:18px;margin-bottom:20px}.required-fields[data-v-586a6aca]{padding:20px 0 0}\n",""])},pNnu:function(t,e,i){"use strict";var n=i("L6xj");i.n(n).a},psvp:function(t,e,i){"use strict";i("L2JU");var n={props:["fields","identity","selectedIdentity","selectedLocation","clonedLocation"],data:()=>({}),computed:{identityRequirements(){return this.personalFields.concat(this.locationFields).join(", ")},personalFields(){return this.fields.personal},locationFields(){return this.fields.location}},methods:{fieldValueFor(t,e=!1){return e?this.identity.getPropertyValueByName(t,this.selectedLocation):this.selectedIdentity.getPropertyValueByName(t,this.clonedLocation)}}},a=(i("pNnu"),i("KHd+")),s=Object(a.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"required-fields"},[i("section",{staticClass:"fields-title"},[t._v("\n\t\t"+t._s(t.$t("popouts.requiredFields.title"))+"\n\t")]),t._v(" "),i("section",[i("label",[t._v(t._s(t.$t("popouts.requiredFields.personalInformation")))]),t._v(" "),i("figure",{staticClass:"text"},[t._v("\n\t\t\t"+t._s(t.identityRequirements)+"\n\t\t")])])])}),[],!1,null,"586a6aca",null);e.a=s.exports},tL4a:function(t,e,i){"use strict";var n=i("J8XJ");i.n(n).a},wg2a:function(t,e,i){"use strict";var n=i("KHd+"),a=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"88px",height:"88px",viewBox:"0 0 88 88",version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[e("g",{attrs:{id:"welcome_scatter",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd","stroke-linecap":"round","stroke-linejoin":"round"}},[e("g",{attrs:{id:"Group",stroke:"#00A8FF"}},[e("g",{attrs:{id:"Icon"}},[e("circle",{attrs:{id:"Base",cx:"44",cy:"44",r:"43.7079646"}})]),this._v(" "),e("path",{attrs:{d:"M40.8188559,71.5932203 C39.3040178,71.5932203 38.0455559,71.423153 37.0434322,71.0830131 C36.0413085,70.7428732 35.2489436,70.3616877 34.6663136,69.9394451 C34.0836835,69.5172025 33.6758486,69.1125594 33.4427966,68.7255037 C33.2097446,68.338448 33.0932203,68.0862791 33.0932203,67.9689895 C33.0932203,67.5467469 33.1864397,67.0951887 33.3728814,66.6143013 C33.559323,66.1334139 33.7923715,65.68772 34.0720339,65.2772064 C34.3516963,64.8666928 34.6546594,64.5206936 34.9809322,64.2391985 C35.307205,63.9577035 35.5985157,63.816958 35.8548729,63.816958 C36.1811457,63.816958 36.4491515,64.0280762 36.6588983,64.4503188 L37.0084746,64.8021858 C37.1949162,64.9898492 37.4570958,65.1833742 37.7950212,65.3827665 C38.1329466,65.5821588 38.5524339,65.763955 39.0534958,65.9281605 C39.5545576,66.0923659 40.1430051,66.1744674 40.8188559,66.1744674 C42.2870836,66.1744674 43.4872835,65.7229092 44.4194915,64.8197792 C45.3516996,63.9166492 45.8177966,62.6909911 45.8177966,61.1427683 C45.8177966,60.0637039 45.5672695,59.1019435 45.0662076,58.2574583 C44.5651458,57.4129731 43.9067837,56.6271445 43.0911017,55.8999489 C42.2754197,55.1727533 41.3432256,54.4631618 40.2944915,53.7711531 C39.2457575,53.0791444 38.1737343,52.3578241 37.0783898,51.6071706 C35.9830454,50.8565171 34.9110222,50.0472309 33.8622881,49.1792878 C32.8135541,48.3113447 31.88136,47.314398 31.065678,46.1884177 C30.2499959,45.0624374 29.5916339,43.7898643 29.090572,42.37066 C28.5895102,40.9514557 28.3389831,39.3270189 28.3389831,37.497301 C28.3389831,35.9256202 28.6069888,34.3422342 29.1430085,32.7470955 C29.6790281,31.1519568 30.4189571,29.6330792 31.3628178,28.190417 C32.3066784,26.7477547 33.4194851,25.3989445 34.7012712,24.1439456 C35.9830573,22.8889468 37.3696959,21.7981698 38.8612288,20.8715818 C40.3527617,19.9449939 41.9083605,19.2178092 43.528072,18.690006 C45.1477835,18.1622028 46.7732969,17.8983051 48.404661,17.8983051 C49.8029731,17.8983051 51.0614351,18.121152 52.1800847,18.5668525 C53.2987344,19.012553 54.2425809,19.640043 55.0116525,20.4493414 C55.7807242,21.2586397 56.3749979,22.2321288 56.7944915,23.3698381 C57.2139851,24.5075473 57.4237288,25.7801205 57.4237288,27.1875958 C57.4237288,28.5246974 57.1906803,29.8383213 56.7245763,31.128507 C56.2584722,32.4186927 55.6408937,33.6384864 54.871822,34.7879246 C54.1027504,35.9373627 53.2346447,36.9988178 52.2674788,37.9723216 C51.300313,38.9458253 50.3098568,39.7902979 49.2960805,40.5057645 C48.2823043,41.2212311 47.2976743,41.7783484 46.342161,42.1771331 C45.3866478,42.5759178 44.5476731,42.7753071 43.8252119,42.7753071 C43.1959714,42.7753071 42.6308288,42.6286973 42.1297669,42.3354733 C41.6287051,42.0422492 41.2092178,41.6786569 40.8712924,41.2446853 C40.533367,40.8107138 40.2711874,40.3532912 40.0847458,39.8724038 C39.8983042,39.3915164 39.8050847,38.9634157 39.8050847,38.5880889 C39.8050847,38.283136 39.8458682,38.0837466 39.9274364,37.9899149 C40.0090046,37.8960832 40.1255289,37.8550325 40.2770127,37.8667614 C40.4284965,37.8784904 40.6207615,37.9136768 40.8538136,37.9723216 C41.0868656,38.0309664 41.3548714,38.0602883 41.657839,38.0602883 C42.6366574,38.0602883 43.720333,37.7201536 44.9088983,37.0398738 C46.0974636,36.3595941 47.2160965,35.491664 48.2648305,34.4360575 C49.3135646,33.380451 50.1933227,32.2193013 50.9041314,30.9525735 C51.61494,29.6858457 51.970339,28.4543232 51.970339,27.2579692 C51.970339,26.0381573 51.6732021,25.0763969 51.0789195,24.3726592 C50.4846369,23.6689216 49.476702,23.317058 48.0550847,23.317058 C47.1694871,23.317058 46.208162,23.4871254 45.1710805,23.8272653 C44.1339991,24.1674051 43.0911069,24.6424209 42.0423729,25.2523269 C40.9936388,25.8622329 39.9798778,26.6011463 39.0010593,27.4690895 C38.0222409,28.3370326 37.1599614,29.2929286 36.4141949,30.3368061 C35.6684285,31.3806836 35.0683285,32.506647 34.6138771,33.71473 C34.1594257,34.922813 33.9322034,36.1836574 33.9322034,37.497301 C33.9322034,38.8813184 34.1827305,40.1187053 34.6837924,41.2094986 C35.1848542,42.300292 35.8490425,43.2913744 36.6763771,44.1827754 C37.5037118,45.0741764 38.441732,45.8951914 39.4904661,46.6458449 C40.5392002,47.3964984 41.6112233,48.1412763 42.7065678,48.8802008 C43.8019123,49.6191254 44.8739354,50.3814964 45.9226695,51.1673368 C46.9714035,51.9531772 47.9094238,52.8211073 48.7367585,53.7711531 C49.5640931,54.721199 50.2282814,55.7767896 50.7293432,56.9379568 C51.230405,58.0991239 51.4809322,59.430341 51.4809322,60.931648 C51.4809322,62.3860392 51.2071002,63.7641715 50.659428,65.0660861 C50.1117557,66.3680008 49.3601743,67.4998286 48.404661,68.4616034 C47.4491478,69.4233782 46.3188625,70.1857492 45.0137712,70.7487394 C43.7086799,71.3117295 42.3103888,71.5932203 40.8188559,71.5932203 Z",id:"Scatter"}})])])])}),[],!1,null,null,null);e.a=a.exports},y5zb:function(t,e,i){(t.exports=i("JPst")(!1)).push([t.i,".reputation[data-v-3c121449]{padding:5px 12px;font-size:10px;margin-bottom:10px;margin-top:-5px;font-weight:bold;background:#f3f6f7;color:#c8c8c8}.reputation.trusted[data-v-3c121449]{background:#159F00;color:#fff}.reputation.untrusted[data-v-3c121449]{background:#ff0707;color:#fff}.app-details[data-v-3c121449]{text-align:center;display:flex;flex-direction:column;justify-content:center;align-items:center}.app-details .logo[data-v-3c121449]{display:flex;align-items:center;justify-content:center;height:100px;width:100px;border-radius:4px;padding:5px;margin-bottom:20px}.app-details .logo.border[data-v-3c121449]{background:#f3f6f7;border:1px solid #dfe0e1}.app-details .logo img[data-v-3c121449]{height:100%;width:100%}.app-details .logo span[data-v-3c121449]{font-size:10px;font-weight:bold;color:#7a7a7a}.app-details .logo.scam[data-v-3c121449]{font-size:48px;border-radius:50%;color:#ff0707;background:#f3f6f7;border:1px solid #dfe0e1;animation:pulsate 0.5s ease infinite}.app-details .name[data-v-3c121449]{font-size:14px}\n",""])}}]);