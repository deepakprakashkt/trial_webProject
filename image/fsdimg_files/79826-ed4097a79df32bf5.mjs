"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[79826],{762587:e=>{e.exports=function(e,t,i,n){t=t||"&",i=i||"=";var r={};if("string"!=typeof e||0===e.length)return r;var a=/\+/g;e=e.split(t);var s=1e3;n&&"number"==typeof n.maxKeys&&(s=n.maxKeys);var o=e.length;s>0&&o>s&&(o=s);for(var l=0;l<o;++l){var _,d,c,u,p=e[l].replace(a,"%20"),E=p.indexOf(i);(E>=0?(_=p.substr(0,E),d=p.substr(E+1)):(_=p,d=""),c=decodeURIComponent(_),u=decodeURIComponent(d),Object.prototype.hasOwnProperty.call(r,c))?Array.isArray(r[c])?r[c].push(u):r[c]=[r[c],u]:r[c]=u}return r}},712361:e=>{var t=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,i,n,r){return(i=i||"&",n=n||"=",null===e&&(e=void 0),"object"==typeof e)?Object.keys(e).map(function(r){var a=encodeURIComponent(t(r))+n;return Array.isArray(e[r])?e[r].map(function(e){return a+encodeURIComponent(t(e))}).join(i):a+encodeURIComponent(t(e[r]))}).join(i):r?encodeURIComponent(t(r))+n+encodeURIComponent(t(e)):""}},817673:(e,t,i)=>{t.decode=t.parse=i(762587),t.encode=t.stringify=i(712361)},431705:(e,t,i)=>{i.d(t,{$N:()=>I,Cu:()=>A,GY:()=>c,MZ:()=>l,NR:()=>u,S9:()=>o,bC:()=>T,fm:()=>n,id:()=>a,kM:()=>s,q6:()=>r,qp:()=>d,uV:()=>p,ug:()=>E,xL:()=>_});let n={DOWNLOAD_TEMPLATE:"DOWNLOAD_TEMPLATE",UPLOAD_TEMPLATE:"UPLOAD_TEMPLATE",HISTORY:"HISTORY",BULK_ID_LIBRARY:"BULK_ID_LIBRARY",RESOURCES:"RESOURCES"},r={GENERAL:"GENERAL",CAMPAIGNS:"CAMPAIGNS",AD_GROUPS:"AD_GROUPS",ADS:"ADS",KEYWORDS:"KEYWORDS",PRODUCT_GROUPS:"PRODUCT_GROUPS",ERROR_CODES:"ERROR_CODES"},a={INTEREST:"INTEREST",DEVICE:"DEVICE",LANGUAGE:"LANGUAGE",LOCATION:"LOCATION",LOCATION_COUNTRY:"LOCATION_COUNTRY",LOCATION_METRO:"LOCATION_METRO",LOCATION_REGION:"LOCATION_REGION",AUDIENCE:"AUDIENCE",TARGETING_TEMPLATE:"TARGETING_TEMPLATE",CONVERSION_TAG:"CONVERSION_TAG"},s={BILLING_HISTORY:"BILLING_HISTORY",BILLING_FORMS:"BILLING_FORMS",ORDER_LINES:"ORDER_LINES",PROMOTIONS:"PROMOTIONS",TAX_DOCUMENTS:"TAX_DOCUMENTS",DOCUMENTS:"DOCUMENTS",PREPAID_CAMPAIGN_SPEND:"PREPAID_CAMPAIGN_SPEND_SUMMARY"},o={CREATE:"CREATE",VIEW_RESULTS:"VIEW_RESULTS",VIEW_REPORT:"VIEW_REPORT"},l={GOOGLE_TAG_MANAGER:"Google Tag Manager",SHOPIFY:"Shopify",WOO_COMMERCE:"WooCommerce",WORDPRESS:"WordPress",SQUARESPACE:"Squarespace",WEEBLY:"Weebly",TEALIUM:"Tealium",MAGENTO:"Magento",ECWID:"Ecwid",BIG_COMMERCE:"BigCommerce",PREMMERCE:"Premmerce",SEGMENT:"Segment",BRANCH:"Branch",HIGHTOUCH:"Hightouch",EULERIAN:"Eulerian",ADOBE_CDP:"Adobe Real-Time CDP",ADOBE_COMMERCE:"Adobe Commerce",SALESFORCE_COMMERCE_CLOUD:"Salesforce Commerce Cloud",PINTEREST_CAPI_CONNECT:"Pinterest CAPI Connect"},_={GTM:"GTM",SHOPIFY:"SHOPIFY",WORDPRESS:"WORDPRESS",WOOCOMMERCE:"WOOCOMMERCE",TEALIUM:"TEALIUM"},d={PINTEREST_TAG:"PINTEREST_TAG",PINTEREST_TAG_MANUAL_SETUP_FLOW:"PINTEREST_TAG_MANUAL_SETUP_FLOW",PINTEREST_TEST_EVENTS:"PINTEREST_TEST_EVENTS",PINTEREST_TAG_HEALTH:"PINTEREST_TAG_HEALTH",CONVERSION_HEALTH:"CONVERSION_HEALTH",CONVERSION_UPLOAD:"CONVERSION_UPLOAD",UPLOAD_HISTORY:"UPLOAD_HISTORY",PCA_UPLOAD_HISTORY:"PCA_UPLOAD_HISTORY",PCA_UPLOAD:"PCA_UPLOAD",CONVERSIONS_API:"CONVERSIONS_API",CONVERSIONS_API_ACCESS_TOKEN:"CONVERSIONS_API_ACCESS_TOKEN",CONVERSIONS_API_DEDUPLICATION:"CONVERSIONS_API_DEDUPLICATION",CONVERSIONS_API_PARTNER_SETUP_FLOW:"CONVERSIONS_API_PARTNER_SETUP_FLOW",CONVERSIONS_API_MANUAL_SETUP_FLOW:"CONVERSIONS_API_MANUAL_SETUP_FLOW",PINTEREST_EVENTS_OVERVIEW:"PINTEREST_EVENTS_OVERVIEW",CONVERSIONS:"CONVERSIONS",PINTEREST_EVENTS_OVERVIEW_BEFORE_SETUP:"PINTEREST_EVENTS_OVERVIEW_BEFORE_SETUP",PINTEREST_SETUP_API:"PINTEREST_SETUP_API",NOCODE_CONVERSIONS_API_SETUP_FLOW:"NOCODE_CONVERSIONS_API_SETUP_FLOW",PINTEREST_EVENTS_OVERVIEW_CAPI_TAB:"PINTEREST_EVENTS_OVERVIEW_CAPI_TAB",PINTEREST_EVENT_HISTORY_CAPI_TAB:"PINTEREST_EVENT_HISTORY_CAPI_TAB"},c={PINTEREST_TAG_DASHBOARD:"PINTEREST_TAG_DASHBOARD",PINTEREST_TAG_LANDING:"PINTEREST_TAG_LANDING",PINTEREST_TAG_INSTRUCTIONS:"PINTEREST_TAG_INSTRUCTIONS",CONVERSION_UPLOAD_LANDING:"CONVERSION_UPLOAD_LANDING",CONVERSION_UPLOAD_VALIDATION:"CONVERSION_UPLOAD_VALIDATION",CONVERSION_UPLOAD_HISTORY:"CONVERSION_UPLOAD_HISTORY",PCA_UPLOAD_HISTORY:"PCA_UPLOAD_HISTORY",PCA_UPLOAD_LANDING:"PCA_UPLOAD_LANDING",PCA_UPLOAD_VALIDATION:"PCA_UPLOAD_VALIDATION"},u={DESTINATION:"destination",EXPIRY:"expiry",SOURCE:"attributionsrc",SOURCE_EVENT_ID:"source_event_id",SOURCE_EVENT_TYPE:"source_event_type",PRIORITY:"priority",CLICK_PRIORITY:"2",VIEW_PRIORITY:"1",HOSTNAME:"hostname",CAMPAIGN_ID:"campaign_id",ADVERTISER_ID:"advertiser_id"},p="604800",E="86400",I={ATTRIBUTION_SOURCE_ID:"attributionsourceid",ATTRIBUTE_DESTINATION:"attributiondestination",ATTRIBUTE_ON:"attributeon"},T="click",A="view"},829196:(e,t,i)=>{i.d(t,{YS:()=>o,eF:()=>l,m_:()=>s});var n=i(431705),r=i(194093),a=i(415787);function s(e,t,i,r,s){let o=new URLSearchParams,l=t.reduce((e,t)=>{if(null!=t){let i=function(e){let t;try{t=decodeURIComponent(e)}catch(i){t=e}t.startsWith("http")?t.startsWith("http://")&&(t=t.replace("http://","https://")):t="https://"+t;try{return new URL(t).origin}catch(n){let i=t.match(/^(https?:\/\/[^\/]+)(\/|$)/);if(i&&i.length>1)return i[1];return e}}(t);return e.add(i)}return e},new Set);o.append(n.NR.SOURCE_EVENT_ID,e??"0"),o.append(n.NR.DESTINATION,JSON.stringify([...l])),o.append(n.NR.EXPIRY,i?n.uV:n.ug),o.append(n.NR.PRIORITY,i?n.NR.CLICK_PRIORITY:n.NR.VIEW_PRIORITY),s&&o.append(n.NR.ADVERTISER_ID,s),r&&o.append(n.NR.CAMPAIGN_ID,r),o.append(n.NR.SOURCE_EVENT_TYPE,i?n.bC:n.Cu);try{let{hostname:e}=new URL(window.location.href);"www.pinterest.com"!==e&&o.append(n.NR.HOSTNAME,e)}catch(e){(0,a.nP)("webapp.arapi.generateARASourceEventURL",{sampleRate:.1,tags:{status:"failed",href:window&&window.location&&window.location.href}})}return"https://www.pinterest.com/attribution_source/?"+o.toString()}async function o(e,t,i,n,o,l,_,d,c){let u;let{appType:p,osType:E}=l||{},I="",T="";if(["Pin","pinImpressions"].includes(e)&&t&&(n||d||c)){(0,a.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"start",appType:p,osType:E}});try{if(!window.document.featurePolicy?.allowsFeature("attribution-reporting")){(0,a.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"skipped",message:"attribution-reporting is not enabled",appType:p,osType:E}});return}I=s(i,[n,d,c],!1,o,_);try{T=new URL(window.location.href).hostname}catch(e){(0,a.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"hostname_parse_failed",href:window&&window.location&&window.location.href}})}if(T&&"www.pinterest.com"!==T)document.createElement("img").setAttribute("attributionsrc",I),(0,a.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"international",appType:p,osType:E,hostname:T}});else if(!(u=await window.fetch(I,{keepalive:!0,attributionReporting:{eventSourceEligible:!0,triggerEligible:!1}})).ok)throw Error("server request failed.");(0,a.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"success",appType:p,osType:E}})}catch(e){(0,a.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"failed",error:(0,r.Z)(e,"name"),message:(0,r.Z)(e,"message"),appType:p,osType:E,hostname:T,responseStatus:u&&u.status}})}}else(0,a.nP)("webapp.arapi.view.funnel",{sampleRate:.1,tags:{status:"missing_param",appType:p,osType:E}})}function l(e){if(e){let t=e.toLowerCase();if(t.includes("windows"))return"windows xp"===t?1:"windows vista"===t?2:"windows 7"===t?3:"windows 8"===t?4:12;if(t.includes("mac os"))return 5;if(t.includes("android"))return 7;if(t.includes("ios"))return 6;if(t.includes("ubuntu"))return 8;if(t.includes("chromium os"))return 13}return 0}},60033:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(883119),r=i(793874),a=i(785893);let s=e=>{let t=(0,r.vs)(),{disabled:i}=e,s={...e};return t&&i&&(s.disabled=!1,s.color="gray"),/*#__PURE__*/(0,a.jsx)(n.zx,{accessibilityControls:s.accessibilityControls,accessibilityExpanded:s.accessibilityExpanded,accessibilityHaspopup:s.accessibilityHaspopup,accessibilityLabel:s.accessibilityLabel,color:s.color,dataTestId:s.dataTestId,disabled:s.disabled,fullWidth:s.fullWidth,iconEnd:s.iconEnd,iconStart:s.iconStart,name:s.name,onClick:({event:e})=>{if(i){e.preventDefault(),e.stopPropagation();return}s.onClick&&s.onClick({event:e})},selected:s.selected,size:s.size,tabIndex:s.tabIndex,text:s.text,type:s.type})}},264147:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(191855),r=i(914896),a=i(937304);function s(e,t){let i=Math.round(1e3*Math.random())+"",s=Math.round(1e3*Math.random())+"";r.t8((0,n.GS)(i),s);let o={token:`${i}-${s}`,url:e,...t&&!t.params?t.queryParams:t?.params&&{pin:t.params.pinId??void 0,isThirdPartyAd:t.params.isThirdPartyAd??void 0,csr:t.params.csrId&&!t.params.pinId?t.params.csrId:void 0,client_tracking_params:t.params.clientTrackingParams,aux_data:t.params.auxData?JSON.stringify(t.params.auxData):void 0}};return`/offsite/?${(0,a.Z)(o)}`}},526789:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(400416),r=i(786974),a=i(604759);let s=async({clientTrackingParams:e,href:t,isMounted:i,pinId:s,spamCheckCallback:o})=>{let l=await function(e){let t=(0,r.Z)(e),i=a.y8.get("ApiResource",t);if(i)return i;let s=(0,n.Z)(e);return a.y8.add("ApiResource",t,s),s}({url:"/v3/offsite/",data:{check_only:!0,client_tracking_params:e,pin_id:s,url:t}});if(!l.resource_response.error&&i){let{message:e,redirect_status:t,url:i}=l.resource_response.data||{};o({blocked:["blocked","suspicious","porn"].includes(t),message:e,redirectStatus:t,sanitized_url:i})}}},353096:(e,t,i)=>{i.d(t,{Z:()=>n});function n({isOffsiteUrl:e,event:t}){return!e&&(t.metaKey||t.ctrlKey)}},937637:(e,t,i)=>{i.d(t,{Z:()=>_});var n=i(449112),r=i(564573);let a=e=>"string"!=typeof e&&e?e.state:null;var s=i(723184),o=i(809604),l=i(592174);let _=({event:e,onHistoryChange:t,href:i,history:_,target:d})=>{let c=(0,r.Z)(i),u=a(i)??{},p=(0,s.Z)(c);p===l.Z.TRUSTED_DIFFERENT_ORIGIN||"blank"===d?(0,n.Z)(c,"blank"===d):_&&p===l.Z.SAME_ORIGIN&&(_.push((0,o.Z)({url:c}),{from:_.location,...u}),t&&t({event:e}))}},256277:(e,t,i)=>{i.d(t,{Z:()=>a});var n=i(449112),r=i(264147);function a(e,t){(0,n.Z)((0,r.Z)(e,t),!0,t?.features)}},125265:(e,t,i)=>{i.d(t,{Z:()=>r});var n=i(225669);function r({location:e,pinId:t,surface:i}){return!!i&&!n.ZF.includes(i)||e.pathname.includes(t)}},343583:(e,t,i)=>{i.d(t,{Z:()=>E});var n=i(667294),r=i(616550),a=i(526789),s=i(353096),o=i(937637),l=i(125265),_=i(853559),d=i(564573),c=i(648089),u=i(638966),p=i(415787);function E(e){let{clientTrackingParams:t,externalData:i,href:E,onHistoryChange:I,target:T}=e,[A,O]=(0,n.useState)(null),[S,P]=(0,n.useState)(!1),R=(0,r.k6)(),N=(0,r.TH)(),m=(0,d.Z)(E),h=(0,c.Z)({url:m}),{showWarning:g}=(0,u.s)()??{},{pin:C,surface:b}=i||{},f=t||C?.trackingParams,y=(0,_.Z)();return(0,n.useEffect)(()=>(P(!0),()=>{P(!1)}),[]),(0,n.useEffect)(()=>{h&&C&&null===A&&S&&(!C.promoter||C.isDownstreamPromotion)&&(0,l.Z)({location:N,pinId:C.entityId,surface:b})&&(0,a.Z)({clientTrackingParams:f,isMounted:S,pinId:C.entityId,spamCheckCallback:e=>O(e),href:m})},[f,C,b,m,h,S,N,A]),({event:e})=>{if(!(0,s.Z)({isOffsiteUrl:h,event:e})){if(e.preventDefault(),!E||"string"==typeof E&&E.startsWith("#")){(0,p.nP)("link_navigation_empty_href",{sampleRate:1,tags:{route:N.pathname,href:E}});return}h||i?.dangerouslyForceOffsiteUrl?y({auxData:i?.auxData,clientTrackingParams:f,pin:i?.pin&&{attributionSourceId:i.pin.attributionSourceId,campaignId:i.pin.campaignId,isPromoted:i.pin.isPromoted,pinPromotionId:i.pin.pinPromotionId,isThirdPartyAd:i.pin.isThirdPartyAd,advertiserId:i.pin.advertiserId,destinationUrl:i.pin.destinationUrl,link:i.pin.link,domain:i.pin.domain},pinId:i?.pin?.entityId,queryParams:i?.queryParams,showWarning:g,spamCheck:A,url:m}):(0,o.Z)({event:e,href:E,history:R,onHistoryChange:I,target:"blank"===T?"blank":null})}}}},853559:(e,t,i)=>{i.d(t,{Z:()=>E});var n=i(548466),r=i(431705),a=i(829196),s=i(118755),o=i(573706),l=i(264147),_=i(256277),d=i(590238);let c=(e,t,i)=>{let n=document.createElement("a");n.setAttribute("href",t),n.setAttribute("target","_blank"),n.setAttribute("rel","noopener nofollow noreferrer"),n.style.cursor="pointer",n.style.display="block",n.setAttribute(r.$N.ATTRIBUTION_SOURCE_ID,e),n.setAttribute(r.$N.ATTRIBUTE_DESTINATION,i),n.setAttribute(r.$N.ATTRIBUTE_ON,i),n.click()},u=(e,t,i,n,s,o,l)=>{let _=(0,a.m_)(e,[i,n,s],!0,o,l),d=document.createElement("a");d.setAttribute("href",t),d.setAttribute("target","_blank"),d.setAttribute("rel","noopener nofollow noreferrer"),d.style.cursor="pointer",d.style.display="block",d.setAttribute(r.NR.SOURCE,_),d.click()},p=()=>{let{logContextEvent:e}=(0,o.v)();return({attributionSourceId:t,auxData:i,campaignId:r,clientTrackingParams:a,href:o,isPromoted:_,pinId:d,pinPromotionId:p,isThirdPartyAd:E,advertiserId:I,destinationUrl:T,link:A,domain:O})=>{if(!_)return!1;let S=(0,n.Z)(),P=(0,l.Z)(o,{params:{pinId:d,csrId:null,clientTrackingParams:a,auxData:i,isThirdPartyAd:E}}),R=S?.userAgent.browserName??"";if((0,s.G6)(R)){let{group:i}=S?.experimentsClient.checkExperiment("m10n_event_conversion_measurement")??{},n=S?.userAgent.browserVersion?S.userAgent.browserVersion:"0.0",s=parseFloat(n.split(".")[0]+"."+n.split(".")[1]);if(t&&s>=14.1&&["enabled_safari"].includes(i))return c(t,P,o),e({event_type:101,clientTrackingParams:a,object_id_str:d||"",aux_data:{pin_id:d||"",click_measurement_ppid:p||"",click_measurement_campaign_id:r||"",is_pcm:!0,attribution_source_id:t,page_url:o}}),!0}else if((0,s.i7)(R)&&window.document.featurePolicy?.allowsFeature("attribution-reporting"))return u(t,P,T,A,O,r,I),e({event_type:101,clientTrackingParams:a,object_id_str:d||"",aux_data:{pin_id:d||"",click_measurement_ppid:p||"",click_measurement_campaign_id:r||"",is_arapi:!0,attribution_source_id:t,page_url:o}}),!0;return!1}},E=e=>{let t=p();return({auxData:i,clientTrackingParams:n,pin:r,pinId:a,queryParams:s,showWarning:o,spamCheck:l,url:c})=>{if("undefined"!=typeof window&&window.Windows){(0,d.Z)(c,{clientTrackingParams:n,pinId:a,hasPin:!!r,auxData:i,isThirdPartyAd:r?.isThirdPartyAd});return}if(!r&&!e?.isFromClickthroughLink){(0,_.Z)(c,s?{queryParams:s}:{params:{pinId:a}});return}if(l?.blocked){o?.(l);return}r&&t({attributionSourceId:r.attributionSourceId,auxData:i,campaignId:r.campaignId?String(r.campaignId):null,clientTrackingParams:n,href:c,isPromoted:r.isPromoted,pinId:a,pinPromotionId:r.pinPromotionId?String(r.pinPromotionId):null,isThirdPartyAd:r.isThirdPartyAd,advertiserId:r.advertiserId?r.advertiserId:null,destinationUrl:r.destinationUrl,link:r.link,domain:r.domain})||(0,_.Z)(c,{params:{clientTrackingParams:n,auxData:i,pinId:a,isThirdPartyAd:r?.isThirdPartyAd}})}}},786974:(e,t,i)=>{i.d(t,{Z:()=>a,k:()=>r});let n=new Set(["bookmarks","client_tracking_params","get_page_metadata","in_nux","invite_code","original_referrer","source","top_level_source","top_level_source_depth"]);function r(e){try{if(!e)return{};return Object.fromEntries(JSON.parse(e))}catch(t){return e.split(/([^=]+=[^=]+),/).filter(Boolean).reduce((e,t)=>{let[i,n]=t.split("=");return e[i]=JSON.parse(n),e},{})}}let a=e=>e?JSON.stringify(Object.entries("object"==typeof e?e:{}).filter(([e])=>"string"==typeof e&&!n.has(e)&&!e.startsWith("__track__")).sort(([e],[t])=>e.localeCompare(t)).map(([e,t])=>[e,t??null])):""},564573:(e,t,i)=>{i.d(t,{Z:()=>n});let n=e=>e?"string"==typeof e?e:e.pathname?e.pathname:"":""},648089:(e,t,i)=>{i.d(t,{Z:()=>r});var n=i(228867);let r=({url:e})=>!!(e&&e.match(/^https{0,1}:\/\//)&&!(0,n.Z)(e))},809604:(e,t,i)=>{i.d(t,{Z:()=>a});let n=(e,t)=>0===e.lastIndexOf(t,0);var r=i(54473);let a=({url:e})=>{let t=(0,r.Z)("/");return n(e,t)?e.substr(t.length-1):e}},590238:(e,t,i)=>{i.d(t,{Z:()=>a});var n=i(400416),r=i(256277);function a(e,t){let{auxData:i,clientTrackingParams:a,hasPin:s,pinId:o,isThirdPartyAd:l}=t||{},_={pin_id:o,check_only:!0,client_tracking_params:s?a:void 0,url:e,aux_data:JSON.stringify(i)};l&&(_.third_party_ad=o,delete _.pin_id),(0,n.Z)({url:"/v3/offsite/",data:_}).then(t=>{if(t&&t.resource_response&&!t.resource_response.error){let{resource_response:e}=t,{redirect_status:i,url:n}=e.data;if(!["blocked","suspicious","porn"].includes(i)){if(window.Windows.Foundation&&window.Windows.System&&window.Windows.System.Launcher&&window.Windows.System.Launcher.launchUriAsync){let e=new window.Windows.Foundation.Uri(n);window.Windows.System.Launcher.launchUriAsync(e)}return}}(0,r.Z)(e,{params:s?{pinId:o,clientTrackingParams:a,auxData:i,isThirdPartyAd:l}:{pinId:o}})})}},225669:(e,t,i)=>{i.d(t,{Wv:()=>r,ZF:()=>n,zI:()=>a,zl:()=>s});let n=["AuthHomefeed","CloseupRelatedProducts","FollowingFeedGrid","RelatedPinGrid","RelatedProductsFeed","SearchItem"],r=["ArticleProductsStory","CloseupRelatedProducts","ProductPinsFeed","RelatedProductsFeed","ShoppingPackageItem","RelatedProductsFeed","UserProfilePinGrid","ShoppingGridShippedMetadataWithVisitButton"],a=[...r,"ShoppingGridShippedMetadata","ShoppingSquareGridDomain","ShoppingSquareGridDomainNoMetadata","ProductPinsFeed","ShoppingCatalogsProductsMetadata","ShoppingDynamicHeightGrid","SearchAdsOnlyModule","ShoppingTool","ProductPinRetrieval"],s=["ShoppingSquareGridDomain","ShoppingGridShippedMetadata","ShoppingGridShippedMetadataWithVisitButton"]},638966:(e,t,i)=>{i.d(t,{Z:()=>T,s:()=>I});var n=i(667294),r=i(498490),a=i(608575),s=i(883119),o=i(758339),l=i(144326),_=i(240760),d=i(785893);let c=()=>{let e=(0,l.ZP)(),{dismissWarning:t}=I()??{};return/*#__PURE__*/(0,d.jsx)(s.xu,{paddingX:3,children:/*#__PURE__*/(0,d.jsx)(s.zx,{color:"red",fullWidth:!0,onClick:t,text:e._('Okay', 'Dismiss a modal stating that clicking through to a link has been blocked', 'Dismiss a modal stating that clicking through to a link has been blocked')})})},u=()=>{let e=(0,l.ZP)();return/*#__PURE__*/(0,d.jsx)(s.xv,{inline:!0,weight:"bold",children:/*#__PURE__*/(0,d.jsx)(s.rU,{display:"inlineBlock",href:"https://policy.pinterest.com/community-guidelines#section-spam",target:"blank",underline:"hover",children:e._('Learn more', 'Link text leading to policy website', 'Link text leading to policy website')})})},p=({message:e,sanitized_url:t})=>{let i=(0,l.ZP)(),{dismissWarning:n}=I()??{};return/*#__PURE__*/(0,d.jsx)(o.ZP,{accessibilityModalLabel:i._('We have blocked this link', 'Modal label when clicking a spammy link', 'Modal label when clicking a spammy link'),footer:/*#__PURE__*/(0,d.jsx)(c,{}),heading:i._('Heads up!', 'Modal heading when clicking through to a link has been blocked', 'Modal heading when clicking through to a link has been blocked'),onDismiss:n,children:/*#__PURE__*/(0,d.jsxs)(s.xu,{padding:6,children:[/*#__PURE__*/(0,d.jsx)(s.xv,{children:(0,_.nk)("{{ message }} {{ learnMore }}",{message:e,learnMore:/*#__PURE__*/(0,d.jsx)(u,{},"learnMoreLink")})}),/*#__PURE__*/(0,d.jsxs)(s.xu,{alignItems:"center",display:"flex",marginTop:4,children:[/*#__PURE__*/(0,d.jsx)(s.xu,{marginEnd:3,children:/*#__PURE__*/(0,d.jsx)(s.JO,{accessibilityLabel:i._('Blocked link address', 'Icon label preceding a block url', 'Icon label preceding a block url'),color:"error",icon:"report",inline:!0,size:24})}),/*#__PURE__*/(0,d.jsx)(s.xv,{inline:!0,lineClamp:1,weight:"bold",children:a.parse(t).hostname})]})]})})},{Provider:E,useMaybeHook:I}=(0,r.Z)("SpammyClickthrough");function T({children:e}){let[t,i]=(0,n.useState)(null),r=(0,n.useCallback)(()=>{i(null)},[i]),a=(0,n.useCallback)(e=>{i(e)},[i]),s=(0,n.useMemo)(()=>({dismissWarning:r,showWarning:a}),[r,a]);return/*#__PURE__*/(0,d.jsxs)(E,{value:s,children:[t&&/*#__PURE__*/(0,d.jsx)(p,{...t}),e]})}},919122:(e,t,i)=>{i.d(t,{Z:()=>A});var n=i(545007),r=i(616550),a=i(883119),s=i(609326),o=i(488792),l=i(477058),_=i(793874),d=i(144326),c=i(282999),u=i(864723),p=i(1006),E=i(154785),I=i(410150),T=i(785893);function A({alignIconLeft:e,bgColor:t,color:i,disableRedirect:A=!1,fallbackUrl:O,icon:S="arrow-back",onTouch:P,padding:R,placement:N,shouldUseFallbackUrl:m,size:h="lg",viewParameter:g,viewType:C,isVisualSearch:b}){let f=(0,d.ZP)(),y=(0,r.k6)(),w=(0,r.TH)(),L=(0,I.HG)(),D=(0,n.v9)(e=>e.session.isAuthenticated),U=(0,o.Z)(),k=(0,E.Z)(),v=(0,_.vs)(),{viewType:M,viewParameter:x}=(0,l.SU)(),[G,V]=C?[C,g]:[M,x],Z=()=>w.search&&w.search.includes("?nativeShouldDismiss=true"),W=()=>{let e=u.ZP.getItem(s.pm);w.key||"/ideas"!==O?(0,p.My)(`pinner_conversion.back_button.${String(e?.[0].pageType)}`):(0,p.My)("pinner_conversion.back_button.no_history"),(0,p.My)(`web_back_button_click.${String(N)}.is_auth_${String(D)}`),k({action:"click",item:"back-button"}),G&&U({view_type:G,view_parameter:V,element:34,event_type:102}),P&&P(),A||((!w.key||w.state&&"redirect"===w.state.referrer||m)&&O?y.push(O):w.pathname.includes("/password/reset/")&&Z()?y.push("/login/?dismissWebview=true"):y.goBack())},H=v?_.t4:"white",j=(0,c.am)(w)||b||"white"===i;return/*#__PURE__*/(0,T.jsx)(a.xu,{"data-test-id":"back-button",children:e?/*#__PURE__*/(0,T.jsx)(a.xu,{alignItems:"center",display:"flex",height:48,marginStart:"cancel"===S?-1:-2,width:48,children:/*#__PURE__*/(0,T.jsx)(a.hU,{accessibilityLabel:f._('Back', 'navigation button', 'navigation button'),bgColor:t,icon:S,iconColor:!i&&(!t||["white","lightGray","transparent"].includes(t))?"gray":i,onClick:W,padding:"auto"!==R?R:2,size:h})}):/*#__PURE__*/(0,T.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:L||j?"":H,width:v&&!j?"fit-content":""}},rounding:"circle",children:/*#__PURE__*/(0,T.jsx)(a.hU,{accessibilityLabel:f._('Back', 'navigation button', 'navigation button'),bgColor:t||L?t:"transparent",icon:S,iconColor:!i&&(!t||["white","lightGray","transparent"].includes(t))?"gray":i,onClick:W,padding:"auto"!==R?R:2,size:h})})})}},426753:(e,t,i)=>{i.d(t,{Z:()=>d});var n=i(616550),r=i(883119),a=i(488792),s=i(144326),o=i(1006),l=i(896612),_=i(785893);let d=({marginTop:e=4,marginBottom:t=0})=>{let i=(0,s.ZP)(),d=(0,a.Z)(),{trackConversionUpsell:c}=(0,l.Z)(),u=(0,n.k6)();return/*#__PURE__*/(0,_.jsxs)(r.xu,{alignItems:"baseline",display:"flex",justifyContent:"center",marginBottom:t,marginTop:e,children:[/*#__PURE__*/(0,_.jsx)(r.xu,{display:"flex",justifyContent:"center",marginEnd:1,children:/*#__PURE__*/(0,_.jsx)(r.xv,{align:"center",inline:!0,children:i._('Are you a business?', 'Prompt for business signup', 'Prompt for business signup')})}),/*#__PURE__*/(0,_.jsx)(r.xu,{"data-test-id":"create-business",display:"flex",justifyContent:"center",children:/*#__PURE__*/(0,_.jsx)(r.iP,{onMouseDown:({event:e})=>{e.preventDefault(),(0,o.NC)("click_business_signup"),d({element:10281,event_type:102,view_type:10,view_parameter:3146}),c({viewParameter:47,viewType:10,eventType:14689,element:10281}),u.push({pathname:"/business/create/"})},children:/*#__PURE__*/(0,_.jsx)(r.xv,{align:"center",weight:"bold",children:i._('Get started here!', 'Prompt for signing up', 'Prompt for signing up')})})})]})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/79826-ed4097a79df32bf5.mjs.map