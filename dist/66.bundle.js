(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{3466:function(t,c,s){(t.exports=s("JPst")(!1)).push([t.i,"",""])},"4ZpK":function(t,c,s){"use strict";s.r(c);var e=s("L2JU"),a=s("IfgB"),n=s("Gbp+"),o=s("sZoq"),i=s.n(o),l=s("F+MN");s("8olR");var u={data:()=>({account:null,qr:null,Blockchains:l.Blockchains}),computed:{...Object(e.c)(["accounts"])},mounted(){this.$route.query.account&&this.selectedAccount(this.accounts.find(t=>t.identifiable()===this.$route.query.account)),this.account||this.selectedAccount(this.accounts.sort((t,c)=>c.totalFiatBalance()-t.totalFiatBalance())[0])},methods:{selectAccount(){a.a.push(n.a.selectAccount(t=>{t&&this.selectedAccount(t)}))},async selectedAccount(t){this.account=t;const c={account:t.sendable(),blockchain:t.network().blockchain,chainId:t.network().chainId};this.qr=await i.a.createUnEncryptedQR(c)},copy(){this.copyText(this.account.sendable())}}},r=(s("oAjA"),s("KHd+")),d=Object(r.a)(u,(function(){var t=this,c=t.$createElement,s=t._self._c||c;return s("section",{staticClass:"receive"},[s("section",{staticClass:"scroller"},[t.account?s("section",{staticClass:"greyback"},[s("section",{staticClass:"limit-width"},[s("label",[t._v(t._s(t.$t("receive.receiver")))]),t._v(" "),s("section",{staticClass:"boxes"},[s("section",{staticClass:"box account-selector",on:{click:t.selectAccount}},[s("section",[s("figure",{staticClass:"name"},[t._v(t._s(t.account.sendable()))]),t._v(" "),s("figure",{staticClass:"network"},[t._v(t._s(t.account.network().name))])]),t._v(" "),s("figure",{staticClass:"chevron fas fa-caret-square-down"})])])])]):t._e(),t._v(" "),t.account?s("section",{staticClass:"whiteback"},[s("section",{staticClass:"limit-width"},[s("section",{staticClass:"boxes"},[t.qr?s("section",{staticClass:"box nested auto-width"},[s("img",{attrs:{src:t.qr}})]):t._e(),t._v(" "),s("section",{staticClass:"box nested data-box"},[s("section",[s("label",[t._v(t._s(t.$t("receive.sendTo")))]),t._v(" "),s("figure",{staticClass:"receiver"},[t._v(t._s(t.account.sendable()))])]),t._v(" "),s("section",[t.account.blockchain()===t.Blockchains.EOSIO?s("figure",{staticClass:"small-info"},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.$t("receive.forEosio"))+"\n\t\t\t\t\t\t\t")]):t._e(),t._v(" "),s("Button",{attrs:{blue:"1",text:t.$t("generic.copy")},nativeOn:{click:function(c){return t.copy(c)}}})],1)])])])]):t._e()])])}),[],!1,null,"03be49ea",null);c.default=d.exports},Dqqd:function(t,c,s){var e=s("3466");"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);(0,s("SZ7m").default)("1a13e509",e,!0,{})},oAjA:function(t,c,s){"use strict";var e=s("Dqqd");s.n(e).a}}]);