var Le=Object.defineProperty,Me=Object.defineProperties;var Oe=Object.getOwnPropertyDescriptors;var ve=Object.getOwnPropertySymbols;var We=Object.prototype.hasOwnProperty,je=Object.prototype.propertyIsEnumerable;var Te=(l,m,f)=>m in l?Le(l,m,{enumerable:!0,configurable:!0,writable:!0,value:f}):l[m]=f,qe=(l,m)=>{for(var f in m||(m={}))We.call(m,f)&&Te(l,f,m[f]);if(ve)for(var f of ve(m))je.call(m,f)&&Te(l,f,m[f]);return l},Ne=(l,m)=>Me(l,Oe(m));import{d as z,S as ze,l as Pe}from"./SqlExecBox.1661515638242.js";import{a as Qe,_ as He}from"./codemirror.1661515638242.js";import{a as ce,i as be,n as De}from"./assert.1661515638242.js";import{P as Ke}from"./ProjectEnvSelect.1661515638242.js";import{_ as Ye,A as Ge,q as Je,I as Ze,r as Xe,o as et,t as tt,b as N,C as at,d as E,e as Z,h as U,g as s,w as r,F as ee,j as te,k as A,i as de,B as K,z as ge,x as we,G as Se,E as le,J as nt}from"./index.1661515638242.js";import"./Api.1661515638242.js";import"./api.16615156382424.js";var lt={exports:{}};(function(l,m){(function(f){f(Qe.exports,lt.exports)})(function(f){var P,t,oe,g,L={QUERY_DIV:";",ALIAS_KEYWORD:"AS"},F=f.Pos,ae=f.cmpPos;function $(i){return Object.prototype.toString.call(i)=="[object Array]"}function Q(i){var u=i.doc.modeOption;return u==="sql"&&(u="text/x-sql"),f.resolveMode(u).keywords}function B(i){var u=i.doc.modeOption;return u==="sql"&&(u="text/x-sql"),f.resolveMode(u).identifierQuote||"`"}function I(i){return typeof i=="string"?i:i.text}function M(i,u){return $(u)&&(u={columns:u}),u.text||(u.text=i),u}function ue(i){var u={};if($(i))for(var a=i.length-1;a>=0;a--){var c=i[a];u[I(c).toUpperCase()]=M(I(c),c)}else if(i)for(var p in i)u[p.toUpperCase()]=M(p,i[p]);return u}function V(i){return P[i.toUpperCase()]}function x(i){var u={};for(var a in i)i.hasOwnProperty(a)&&(u[a]=i[a]);return u}function Y(i,u){var a=i.length,c=I(u).substr(0,a);return i.toUpperCase()===c.toUpperCase()}function O(i,u,a,c){if($(a))for(var p=0;p<a.length;p++)Y(u,a[p])&&i.push(c(a[p]));else for(var v in a)if(a.hasOwnProperty(v)){var b=a[v];!b||b===!0?b=v:b=b.displayText?{text:b.text,displayText:b.displayText}:b.text,Y(u,b)&&i.push(c(b))}}function se(i){i.charAt(0)=="."&&(i=i.substr(1));for(var u=i.split(g+g),a=0;a<u.length;a++)u[a]=u[a].replace(new RegExp(g,"g"),"");return u.join(g)}function H(i){for(var u=I(i).split("."),a=0;a<u.length;a++)u[a]=g+u[a].replace(new RegExp(g,"g"),g+g)+g;var c=u.join(".");return typeof i=="string"?c:(i=x(i),i.text=c,i)}function ie(i,u,a,c){for(var p=!1,v=[],b=u.start,T=!0;T;)T=u.string.charAt(0)==".",p=p||u.string.charAt(0)==g,b=u.start,v.unshift(se(u.string)),u=c.getTokenAt(F(i.line,u.start)),u.string=="."&&(T=!0,u=c.getTokenAt(F(i.line,u.start)));var _=v.join(".");O(a,_,P,function(q){return p?H(q):q}),O(a,_,t,function(q){return p?H(q):q}),_=v.pop();var y=v.join("."),R=!1,D=y;if(!V(y)){var S=y;y=J(y,c),y!==S&&(R=!0)}var W=V(y);return W&&W.columns&&(W=W.columns),W&&O(a,_,W,function(q){var X=y;return R==!0&&(X=D),typeof q=="string"?q=X+"."+q:(q=x(q),q.text=X+"."+q.text),p?H(q):q}),b}function G(i,u){for(var a=i.split(/\s+/),c=0;c<a.length;c++)a[c]&&u(a[c].replace(/[`,;]/g,""))}function J(i,u){for(var a=u.doc,c=a.getValue(),p=i.toUpperCase(),v="",b="",T=[],_={start:F(0,0),end:F(u.lastLine(),u.getLineHandle(u.lastLine()).length)},y=c.indexOf(L.QUERY_DIV);y!=-1;)T.push(a.posFromIndex(y)),y=c.indexOf(L.QUERY_DIV,y+1);T.unshift(F(0,0)),T.push(F(u.lastLine(),u.getLineHandle(u.lastLine()).text.length));for(var R=null,D=u.getCursor(),S=0;S<T.length;S++){if((R==null||ae(D,R)>0)&&ae(D,T[S])<=0){_={start:R,end:T[S]};break}R=T[S]}if(_.start)for(var W=a.getRange(_.start,_.end,!1),S=0;S<W.length;S++){var q=W[S];if(G(q,function(me){var re=me.toUpperCase();re===p&&V(v)&&(b=v),re!==L.ALIAS_KEYWORD&&(v=me)}),b)break}return b}f.registerHelper("hint","sql",function(i,u){P=ue(u&&u.tables);var a=u&&u.defaultTable,c=u&&u.disableKeywords;t=a&&V(a),oe=Q(i),g=B(i),a&&!t&&(t=J(a,i)),t=t||[],t.columns&&(t=t.columns);var p=i.getCursor(),v=[],b=i.getTokenAt(p),T,_,y;if(b.end>p.ch&&(b.end=p.ch,b.string=b.string.slice(0,p.ch-b.start)),b.string.match(/^[.`"'\w@][\w$#]*$/g)?(y=b.string,T=b.start,_=b.end):(T=_=p.ch,y=""),y.charAt(0)=="."||y.charAt(0)==g)T=ie(p,b,v,i);else{var R=function(D,S){return typeof D=="object"?D.className=S:D={text:D,className:S},D};O(v,y,t,function(D){return R(D,"CodeMirror-hint-table CodeMirror-hint-default-table")}),O(v,y,P,function(D){return R(D,"CodeMirror-hint-table")}),c||O(v,y,oe,function(D){return R(D.toUpperCase(),"CodeMirror-hint-keyword")})}return{list:v,from:F(p.line,T),to:F(p.line,_)}})})})();const ot=Ge({name:"SqlExec",components:{ProjectEnvSelect:Ke},setup(){const l=Je(null),m=Ze("token");let f=null;const P=new Map,t=Xe({token:m,defalutLimit:20,dbs:[],databaseList:[],db:"",dbType:"",tables:[],dbId:null,tableName:"",tableMetadata:[],sqlName:"",sqlNames:[],activeName:"Query",queryTabName:"Query",nowTableName:"",dataTabs:{},dataTabsTableHeight:600,queryTab:{label:"\u67E5\u8BE2",name:"Query",execRes:{data:[],tableColumn:[]},loading:!1,nowTableName:"",selectionDatas:[]},params:{pageNum:1,pageSize:10,envId:null},conditionDialog:{title:"",placeholder:"",columnRow:null,dataTab:null,visible:!1,condition:"=",value:null},genSqlDialog:{visible:!1,sql:""},cmOptions:{tabSize:4,mode:"text/x-sql",lineNumbers:!0,line:!0,indentWithTabs:!0,smartIndent:!0,matchBrackets:!0,theme:"base16-light",autofocus:!0,extraKeys:{Tab:"autocomplete"},hintOptions:{completeSingle:!1,tables:{}}}}),oe=()=>{f=He.fromTextArea(l.value,t.cmOptions),f.on("inputRead",(e,n)=>{/^[a-zA-Z]/.test(n.text[0])&&e.showHint()}),f.on("beforeChange",(e,n)=>{var o=n.text[0];n.text[0]=o.split("  ")[0]})};et(()=>{oe(),g(),window.onresize=()=>(()=>{g()})()});const g=()=>{f.setSize("auto",`${window.innerHeight-538}px`),t.dataTabsTableHeight=window.innerHeight-274},L=(e,n)=>{t.dbs=[],t.dbId=null,t.db="",t.databaseList=[],pe(),n!=null&&(t.params.envId=n,Ue())},F=(e,n)=>{var o=n.text[0];n.text[0]=o.split("  ")[0]},ae=async()=>{ce(t.dbId,"\u8BF7\u5148\u9009\u62E9\u6570\u636E\u5E93");let e=O();be(e&&e.trim(),"\u8BF7\u9009\u4E2D\u9700\u8981\u6267\u884C\u7684sql"),e=e.replace(/(^\s*)/g,"");let n="",o=!0;if((e.startsWith("update")||e.startsWith("UPDATE")||e.startsWith("INSERT")||e.startsWith("insert")||e.startsWith("DELETE")||e.startsWith("delete"))&&(n=(await Se.prompt("\u8BF7\u8F93\u5165\u5907\u6CE8","Tip",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",inputPattern:/^[\s\S]*.*[^\s][\s\S]*$/,inputErrorMessage:"\u8BF7\u8F93\u5165\u6267\u884C\u8BE5sql\u7684\u5907\u6CE8\u4FE1\u606F"})).value,n||(o=!1)),!!o){try{t.queryTab.loading=!0;const d=await $(e,n);t.queryTab.execRes.data=d.res,t.queryTab.execRes.tableColumn=d.colNames,t.queryTab.loading=!1}catch{t.queryTab.loading=!1}if(e.startsWith("SELECT *")||e.startsWith("select *")||e.startsWith(`SELECT
  *`)){t.queryTab.selectionDatas=[];const d=e.split(/from/i)[1];if(d){const h=d.trim().split(" ")[0];t.queryTab.nowTableName=h,t.nowTableName=h}else t.queryTab.nowTableName="",t.nowTableName=""}else t.queryTab.nowTableName="",t.nowTableName=""}},$=async(e,n="")=>await z.sqlExec.request({id:t.dbId,db:t.db,sql:e.trim(),remark:n}),Q=e=>{const n=Object.keys(t.dataTabs);let o=t.activeName;n.forEach((d,h)=>{if(d===e){const w=n[h+1]||n[h-1]||t.queryTab.name;w&&(o=w)}}),t.activeName=o,delete t.dataTabs[e]},B=e=>{const n=e.props.name;n!=t.queryTab.name?(t.tableName=n,t.nowTableName=n):t.nowTableName=t.queryTab.nowTableName},I=e=>{if(!t.dbId)return le.error("\u8BF7\u5148\u9009\u62E9\u6570\u636E\u5E93"),!1;le.success(`'${e.name}' \u6B63\u5728\u4E0A\u4F20\u6267\u884C, \u8BF7\u5173\u6CE8\u7ED3\u679C\u901A\u77E5`)},M=e=>{e.code!==200&&le.error(e.msg)},ue=()=>`${nt.baseApiUrl}/dbs/${t.dbId}/exec-sql-file?db=${t.db}`,V=(e,n,o="equal")=>{e=e+"";let d="";if(!n||!n.length||n.length===0||n===void 0||!e||!e.length||e.length===0||e===void 0)return;if(o==="equal"){for(let k=0;k<n.length;k++)if((n[k][e]+"").length>0){d=n[k][e]+"";break}}else{let k=0;for(let j=0;j<n.length;j++){if(n[j][e]===null)return;const ne=n[j][e]+"",Ee=n[k][e]+"";ne.length>Ee.length&&(k=j)}d=n[k][e]+""}const h=x(d),w=x(e)+43;return(h>w?h:w)+"px"},x=e=>{let n=0;for(const o of e){if(n>500)break;if(o>="0"&&o<="9"||o>="a"&&o<="z"){n+=8.5;continue}if(o>="A"&&o<="Z"){n+=9;continue}o>="\u4E00"&&o<="\u9FA5"?n+=16:n+=8}return n>500&&(n=500),n},Y=(e,n)=>{let o=J(e);if(!o)return"";const d=o.find(w=>w.columnName==n),h=d.columnComment;return`${d.columnType} ${h?" |  "+h:""}`},O=()=>{let e=f.getSelection();return e||(e=me()),e},se=e=>{t.db="";const n=t.dbs.find(o=>o.id==e);t.dbType=n.type,t.databaseList=n.database.split(" "),pe()},H=e=>{!e||(pe(),z.tableMetadata.request({id:t.dbId,db:e}).then(n=>{t.tableMetadata=n}),z.hintTables.request({id:t.dbId,db:e}).then(n=>{t.cmOptions.hintOptions.tables=n}),re())},ie=async(e,n=!0)=>{if(e==""||!n)return;t.nowTableName=e,t.activeName=e;let o=t.dataTabs[e];o||(o={label:e,name:e,datas:[],columnNames:[],pageNum:1,count:0},o.columnNames=await i(e),t.dataTabs[e]=o,p(e))},G=async e=>{let n=J(e);return n||(n=await z.columnMetadata.request({id:t.dbId,db:t.db,tableName:e}),P.set(e,n),n)},J=e=>P.get(e),i=async e=>(await G(e)).map(o=>o.columnName),u=(e,n)=>{const o=e[0];t.conditionDialog.title=`\u8BF7\u8F93\u5165 [${o.columnName}] \u7684\u503C`,t.conditionDialog.placeholder=`${o.columnType}  ${o.columnComment}`,t.conditionDialog.columnRow=o,t.conditionDialog.dataTab=n,t.conditionDialog.visible=!0},a=()=>{const e=t.conditionDialog,n=t.conditionDialog.dataTab;let o=n.condition;o&&(o+=" AND ");const d=e.columnRow;o+=`${d.columnName} ${e.condition} `,n.condition=o+fe(d,e.value),c()},c=()=>{t.conditionDialog.visible=!1,t.conditionDialog.title="",t.conditionDialog.placeholder="",t.conditionDialog.value=null,t.conditionDialog.columnRow=null,t.conditionDialog.dataTab=null},p=async e=>{const n=t.dataTabs[e];n.condition="",n.pageNum=1,T(n)},v=async e=>{T(e)},b=async(e,n)=>{De(n,"\u6761\u4EF6\u4E0D\u80FD\u4E3A\u7A7A");const o=t.dataTabs[e];o.pageNum=1,T(o)},T=async e=>{e.loading=!0;try{if(e.count=await _(e.name,e.condition),e.count>0){const n=await $(y(e.name,e.condition,e.orderBy,e.pageNum));e.datas=n.res}else e.datas=[]}finally{e.loading=!1}},_=async(e,n="")=>(await $(R(e,n))).res[0].count,y=(e,n="",o="",d=1)=>{const h=`SELECT * FROM ${e} ${n?"WHERE "+n:""} ${o||""}`;return t.dbType=="mysql"?`${h} LIMIT ${(d-1)*t.defalutLimit}, ${t.defalutLimit};`:t.dbType=="postgres"?`${h} OFFSET ${(d-1)*t.defalutLimit} LIMIT ${t.defalutLimit};`:h},R=(e,n="")=>`SELECT COUNT(*) count FROM ${e} ${n?"WHERE "+n:""}`,D=()=>{ce(t.dbId,"\u8BF7\u5148\u9009\u62E9\u6570\u636E\u5E93"),$("COMMIT;"),le.success("COMMIT success")},S=async e=>{if(!t.nowTableName||!e.prop)return;const n=t.activeName,o=e.order=="descending"?"DESC":"ASC",d=`ORDER BY ${e.prop} ${o}`;t.dataTabs[t.activeName].orderBy=d,p(n)},W=()=>{q()},q=()=>{ce(t.dbId,"\u8BF7\u5148\u9009\u62E9\u6570\u636E\u5E93"),z.getSql.request({id:t.dbId,type:1,name:t.sqlName,db:t.db}).then(e=>{X(e?e.sql:"")})},X=e=>{f.setValue(e)},me=()=>{f.getValue()},re=()=>{z.getSqlNames.request({id:t.dbId,db:t.db}).then(e=>{e&&e.length>0?(t.sqlNames=e.map(n=>n.name),t.sqlName=t.sqlNames[0]):(t.sqlNames=["default"],t.sqlName="default"),q()})},ke=async()=>{const e=f.getValue();De(e,"sql\u5185\u5BB9\u4E0D\u80FD\u4E3A\u7A7A"),ce(t.dbId,"\u8BF7\u5148\u9009\u62E9\u6570\u636E\u5E93\u5B9E\u4F8B"),await z.saveSql.request({id:t.dbId,db:t.db,sql:e,type:1,name:t.sqlName}),le.success("\u4FDD\u5B58\u6210\u529F"),z.getSqlNames.request({id:t.dbId,db:t.db}).then(n=>{n&&(t.sqlNames=n.map(o=>o.name))})},Be=async()=>{ce(t.dbId,"\u8BF7\u5148\u9009\u62E9\u6570\u636E\u5E93");try{await Se.confirm(`\u786E\u5B9A\u5220\u9664\u3010${t.sqlName}\u3011\u8BE5SQL\u6A21\u677F?`,"\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"warning"}),await z.deleteDbSql.request({id:t.dbId,name:t.sqlName,db:t.db}),le.success("\u5220\u9664\u6210\u529F"),re()}catch{}},pe=()=>{t.tableName="",t.nowTableName="",t.tableMetadata=[],t.dataTabs={},X(""),t.sqlNames=[],t.sqlName="",t.activeName=t.queryTab.name,t.queryTab.execRes.data=[],t.queryTab.execRes.tableColumn=[],t.cmOptions.hintOptions.tables=[],P.clear()},_e=e=>{he()?t.queryTab.selectionDatas=e:t.dataTabs[t.activeName].selectionDatas=e},Fe=async()=>{const e=he(),n=e?t.queryTab.selectionDatas:t.dataTabs[t.activeName].selectionDatas;be(n&&n.length>0,"\u8BF7\u5148\u9009\u62E9\u8981\u5220\u9664\u7684\u6570\u636E");const o=await ye(t.nowTableName),d=o.columnName,h=n.map(C=>`${fe(o,C[d])}`).join(","),w=`DELETE FROM ${t.nowTableName} WHERE ${d} IN (${h})`;Ce(w,null,()=>{e?(t.queryTab.execRes.data=t.queryTab.execRes.data.filter(C=>n.findIndex(k=>k[d]==C[d])==-1),t.queryTab.selectionDatas=[]):p(t.activeName)})},$e=async()=>{const n=he()?t.queryTab.selectionDatas:t.dataTabs[t.activeName].selectionDatas;be(n&&n.length>0,"\u8BF7\u5148\u9009\u62E9\u8981\u751F\u6210insert\u8BED\u53E5\u7684\u6570\u636E");const o=t.nowTableName,d=await G(o),h=[];for(let w of n){let C=[],k=[];for(let j of d){const ne=j.columnName;C.push(ne),k.push(Ie(w[ne]))}h.push(`INSERT INTO ${o} (${C.join(", ")}) VALUES(${k.join(", ")})`)}t.genSqlDialog.sql=h.join(`;
`)+";",t.genSqlDialog.visible=!0},Ie=e=>e==null?"NULL":typeof e=="number"?e:`'${e}'`,he=()=>t.activeName==t.queryTab.name,Re=(e,n,o)=>{const d=n.property;if(!t.nowTableName||!d)return;let h=(e[d]?e[d]:"")+"",w=o.children[0];if(w){let C=document.createElement("input");C.setAttribute("value",h),C.setAttribute("style","height:30px;"+w.getAttribute("style")),o.replaceChildren(C),C.focus(),C.addEventListener("blur",async()=>{if(e[d]=C.value,o.replaceChildren(w),C.value!==h){const k=await ye(t.nowTableName),j=k.columnName,ne=await ye(t.nowTableName,n.rawColumnKey),Ee=`UPDATE ${t.nowTableName} SET ${n.rawColumnKey} = ${fe(ne,C.value)} 
                                        WHERE ${j} = ${fe(k,e[j])}`;Ce(Ee,()=>{e[d]=h})}})}},ye=async(e,n="")=>{const o=await G(e);return n?o.find(d=>d.columnName==n):o[0]},fe=(e,n)=>Ae(e.columnType)?n:`'${n}'`,Ae=e=>e.match(/int|double|float|nubmer|decimal/gi),Ce=(e,n=null,o=null)=>{ze({sql:e,dbId:t.dbId,db:t.db,runSuccessCallback:o,cancelCallback:n})},Ve=async()=>{const e=t.nowTableName,n=await G(e);let o={};n.forEach(C=>{o[`${C.columnName}`]=`'${C.columnName}[${C.columnType}]${C.nullable=="YES"?"":"[not null]"}'`});let d=Object.keys(o).join(","),h=Object.values(o).join(","),w=`INSERT INTO ${t.nowTableName} (${d}) VALUES (${h});`;Ce(w,null,()=>{p(e)})},xe=()=>{let e=f.getSelection();be(e,"\u8BF7\u9009\u4E2D\u9700\u8981\u683C\u5F0F\u5316\u7684sql"),f.replaceSelection(Pe.format(e))},Ue=async()=>{const e=await z.dbs.request(t.params);t.dbs=e.list};return Ne(qe({},tt(t)),{codeTextarea:l,changeProjectEnv:L,changeTable:ie,cellClick:Re,onRunSql:ae,removeDataTab:Q,onDataTabClick:B,beforeUpload:I,getUploadSqlFileUrl:ue,execSqlFileSuccess:M,flexColumnWidth:V,getColumnTip:Y,getColumns4Map:J,onConditionRowClick:u,onConfirmCondition:a,onCancelCondition:c,changeSqlTemplate:W,deleteSql:Be,saveSql:ke,changeDbInstance:se,changeDb:H,clearDb:pe,formatSql:xe,onBeforeChange:F,onRefresh:p,handlePageChange:v,selectByCondition:b,onCommit:D,addRow:Ve,onDataSelectionChange:_e,onDeleteData:Fe,onTableSortChange:S,onGenerateInsertSql:$e})}}),ut={class:"toolbar"},st={style:{float:"left"}},it={style:{float:"right",color:"#8492a6","margin-left":"6px","font-size":"13px"}},rt={class:"toolbar"},ct={class:"fl"},dt={style:{float:"right"},class:"fl"},mt=K("\u4FDD\u5B58"),pt=K("\u5220\u9664"),ft={class:"mt5 sqlEditor"},bt={ref:"codeTextarea"},gt={class:"mt5"},ht=K("gi"),yt=K("\u9009\u62E9\u5217"),Ct={class:"dialog-footer"},Et=K("\u53D6\u6D88"),vt=K("\u786E\u5B9A");function Tt(l,m,f,P,t,oe){const g=N("el-option"),L=N("el-select"),F=N("el-form-item"),ae=N("project-env-select"),$=N("el-col"),Q=N("el-row"),B=N("el-link"),I=N("el-divider"),M=N("el-tooltip"),ue=N("el-upload"),V=N("el-button"),x=N("el-table-column"),Y=N("el-table"),O=N("el-tab-pane"),se=N("el-popover"),H=N("el-input"),ie=N("el-pagination"),G=N("el-tabs"),J=N("el-container"),i=N("el-dialog"),u=at("loading");return E(),Z("div",null,[U("div",ut,[s(Q,{type:"flex",justify:"space-between"},{default:r(()=>[s($,{span:24},{default:r(()=>[s(ae,{onChangeProjectEnv:l.changeProjectEnv},{default:r(()=>[s(F,{label:"\u8D44\u6E90"},{default:r(()=>[s(L,{modelValue:l.dbId,"onUpdate:modelValue":m[0]||(m[0]=a=>l.dbId=a),placeholder:"\u8BF7\u9009\u62E9\u8D44\u6E90\u5B9E\u4F8B",onChange:l.changeDbInstance,filterable:"",style:{width:"150px"}},{default:r(()=>[(E(!0),Z(ee,null,te(l.dbs,a=>(E(),A(g,{key:a.id,label:a.name,value:a.id},{default:r(()=>[U("span",st,de(a.name),1),U("span",it,de(`${a.host}:${a.port} ${a.type}`),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])]),_:1}),s(F,{label:"\u6570\u636E\u5E93"},{default:r(()=>[s(L,{modelValue:l.db,"onUpdate:modelValue":m[1]||(m[1]=a=>l.db=a),placeholder:"\u8BF7\u9009\u62E9\u6570\u636E\u5E93",onChange:l.changeDb,onClear:l.clearDb,clearable:"",filterable:"",style:{width:"150px"}},{default:r(()=>[(E(!0),Z(ee,null,te(l.databaseList,a=>(E(),A(g,{key:a,label:a,value:a},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange","onClear"])]),_:1}),s(F,{"label-width":"20",label:"\u8868"},{default:r(()=>[s(L,{modelValue:l.tableName,"onUpdate:modelValue":m[2]||(m[2]=a=>l.tableName=a),placeholder:"\u9009\u62E9\u8868\u67E5\u770B\u8868\u6570\u636E",onChange:l.changeTable,filterable:"",style:{width:"250px"}},{default:r(()=>[(E(!0),Z(ee,null,te(l.tableMetadata,a=>(E(),A(g,{key:a.tableName,label:a.tableName+(a.tableComment!=""?`\u3010${a.tableComment}\u3011`:""),value:a.tableName},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])]),_:1})]),_:1},8,["onChangeProjectEnv"])]),_:1})]),_:1})]),s(J,{id:"data-exec",style:{border:"1px solid #eee","margin-top":"1px"}},{default:r(()=>[s(G,{onTabRemove:l.removeDataTab,onTabClick:l.onDataTabClick,style:{width:"100%"},modelValue:l.activeName,"onUpdate:modelValue":m[4]||(m[4]=a=>l.activeName=a)},{default:r(()=>[s(O,{label:l.queryTab.label,name:l.queryTab.name},{default:r(()=>[U("div",null,[U("div",null,[U("div",rt,[U("div",ct,[s(B,{onClick:l.onRunSql,underline:!1,class:"ml15",icon:"VideoPlay"},null,8,["onClick"]),s(I,{direction:"vertical","border-style":"dashed"}),s(M,{class:"box-item",effect:"dark",content:"format sql",placement:"top"},{default:r(()=>[s(B,{onClick:l.formatSql,type:"primary",underline:!1,icon:"MagicStick"},null,8,["onClick"])]),_:1}),s(I,{direction:"vertical","border-style":"dashed"}),s(M,{class:"box-item",effect:"dark",content:"commit",placement:"top"},{default:r(()=>[s(B,{onClick:l.onCommit,type:"success",underline:!1,icon:"CircleCheck"},null,8,["onClick"])]),_:1}),s(I,{direction:"vertical","border-style":"dashed"}),s(ue,{style:{display:"inline-block"},"before-upload":l.beforeUpload,"on-success":l.execSqlFileSuccess,headers:{Authorization:l.token},data:{dbId:1},action:l.getUploadSqlFileUrl(),"show-file-list":!1,name:"file",multiple:"",limit:100},{default:r(()=>[s(M,{class:"box-item",effect:"dark",content:"SQL\u811A\u672C\u6267\u884C",placement:"top"},{default:r(()=>[s(B,{type:"success",underline:!1,icon:"Document"})]),_:1})]),_:1},8,["before-upload","on-success","headers","action"])]),U("div",dt,[s(L,{modelValue:l.sqlName,"onUpdate:modelValue":m[3]||(m[3]=a=>l.sqlName=a),placeholder:"\u9009\u62E9or\u8F93\u5165SQL\u6A21\u677F\u540D",onChange:l.changeSqlTemplate,filterable:"","allow-create":"","default-first-option":"",size:"small",class:"mr10"},{default:r(()=>[(E(!0),Z(ee,null,te(l.sqlNames,a=>(E(),A(g,{key:a,label:a.database,value:a},{default:r(()=>[K(de(a),1)]),_:2},1032,["label","value"]))),128))]),_:1},8,["modelValue","onChange"]),s(V,{onClick:l.saveSql,type:"primary",icon:"document-add",plain:"",size:"small"},{default:r(()=>[mt]),_:1},8,["onClick"]),s(V,{onClick:l.deleteSql,type:"danger",icon:"delete",plain:"",size:"small"},{default:r(()=>[pt]),_:1},8,["onClick"])])])]),U("div",ft,[U("textarea",bt,null,512)]),U("div",gt,[l.queryTab.nowTableName?(E(),A(Q,{key:0},{default:r(()=>[s(B,{onClick:l.onDeleteData,class:"ml5",type:"danger",icon:"delete",underline:!1},null,8,["onClick"])]),_:1})):ge("",!0),we((E(),A(Y,{onCellDblclick:l.cellClick,onSelectionChange:l.onDataSelectionChange,data:l.queryTab.execRes.data,"element-loading-text":"\u67E5\u8BE2\u4E2D...",size:"small","max-height":"250","empty-text":"tips: select *\u5F00\u5934\u7684\u5355\u8868\u67E5\u8BE2\u6216\u70B9\u51FB\u8868\u540D\u9ED8\u8BA4\u67E5\u8BE2\u7684\u6570\u636E,\u53EF\u53CC\u51FB\u6570\u636E\u5728\u7EBF\u4FEE\u6539",stripe:"",border:"",class:"mt5"},{default:r(()=>[l.queryTab.execRes.tableColumn.length>0&&l.queryTab.nowTableName?(E(),A(x,{key:0,type:"selection",width:"35"})):ge("",!0),(E(!0),Z(ee,null,te(l.queryTab.execRes.tableColumn,a=>(E(),A(x,{"min-width":"100",width:l.flexColumnWidth(a,l.queryTab.execRes.data),align:"center",key:a,prop:a,label:a,"show-overflow-tooltip":""},null,8,["width","prop","label"]))),128))]),_:1},8,["onCellDblclick","onSelectionChange","data"])),[[u,l.queryTab.loading]])])])]),_:1},8,["label","name"]),(E(!0),Z(ee,null,te(l.dataTabs,a=>(E(),A(O,{closable:"",key:a.name,label:a.label,name:a.name},{default:r(()=>[l.dbId?(E(),A(Q,{key:0},{default:r(()=>[s($,{span:8},{default:r(()=>[s(B,{onClick:c=>l.onRefresh(a.name),icon:"refresh",underline:!1,class:"ml5"},null,8,["onClick"]),s(I,{direction:"vertical","border-style":"dashed"}),s(B,{onClick:l.addRow,type:"primary",icon:"plus",underline:!1},null,8,["onClick"]),s(I,{direction:"vertical","border-style":"dashed"}),s(B,{onClick:l.onDeleteData,type:"danger",icon:"delete",underline:!1},null,8,["onClick"]),s(I,{direction:"vertical","border-style":"dashed"}),s(M,{class:"box-item",effect:"dark",content:"commit",placement:"top"},{default:r(()=>[s(B,{onClick:l.onCommit,type:"success",icon:"CircleCheck",underline:!1},null,8,["onClick"])]),_:1}),s(I,{direction:"vertical","border-style":"dashed"}),s(M,{class:"box-item",effect:"dark",content:"\u751F\u6210insert sql",placement:"top"},{default:r(()=>[s(B,{onClick:l.onGenerateInsertSql,type:"success",underline:!1},{default:r(()=>[ht]),_:1},8,["onClick"])]),_:1})]),_:2},1024),s($,{span:16},{default:r(()=>[s(H,{modelValue:a.condition,"onUpdate:modelValue":c=>a.condition=c,placeholder:"\u82E5\u9700\u6761\u4EF6\u8FC7\u6EE4\uFF0C\u53EF\u9009\u62E9\u5217\u5E76\u70B9\u51FB\u5BF9\u5E94\u7684\u5B57\u6BB5\u5E76\u8F93\u5165\u9700\u8981\u8FC7\u6EE4\u7684\u5185\u5BB9\u70B9\u51FB\u67E5\u8BE2\u6309\u94AE\u5373\u53EF",clearable:"",size:"small",style:{width:"100%"}},{prepend:r(()=>[s(se,{trigger:"click",width:320,placement:"right"},{reference:r(()=>[s(B,{type:"success",underline:!1},{default:r(()=>[yt]),_:1})]),default:r(()=>[s(Y,{data:l.getColumns4Map(a.name),"max-height":"500",size:"small",onRowClick:(...c)=>{l.onConditionRowClick(c,a)},style:{cursor:"pointer"}},{default:r(()=>[s(x,{property:"columnName",label:"\u5217\u540D","show-overflow-tooltip":""}),s(x,{property:"columnComment",label:"\u5907\u6CE8","show-overflow-tooltip":""})]),_:2},1032,["data","onRowClick"])]),_:2},1024)]),append:r(()=>[s(V,{onClick:c=>l.selectByCondition(a.name,a.condition),icon:"search",size:"small"},null,8,["onClick"])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)):ge("",!0),we((E(),A(Y,{onCellDblclick:l.cellClick,onSortChange:l.onTableSortChange,onSelectionChange:l.onDataSelectionChange,data:a.datas,size:"small","max-height":l.dataTabsTableHeight,"element-loading-text":"\u67E5\u8BE2\u4E2D...","empty-text":"\u6682\u65E0\u6570\u636E",stripe:"",border:"",class:"mt5"},{default:r(()=>[a.datas.length>0?(E(),A(x,{key:0,type:"selection",width:"35"})):ge("",!0),(E(!0),Z(ee,null,te(a.columnNames,c=>(E(),A(x,{"min-width":"100",width:l.flexColumnWidth(c,a.datas),align:"center",key:c,prop:c,label:c,"show-overflow-tooltip":"",sortable:l.nowTableName!=""?"custom":!1},{header:r(()=>[s(M,{"raw-content":"",placement:"top",effect:"customized"},{content:r(()=>[K(de(l.getColumnTip(a.name,c)),1)]),default:r(()=>[K(" "+de(c),1)]),_:2},1024)]),_:2},1032,["width","prop","label","sortable"]))),128))]),_:2},1032,["onCellDblclick","onSortChange","onSelectionChange","data","max-height"])),[[u,a.loading]]),s(Q,{type:"flex",class:"mt5",justify:"center"},{default:r(()=>[s(ie,{small:"",total:a.count,onCurrentChange:c=>l.handlePageChange(a),layout:"prev, pager, next, total, jumper","current-page":a.pageNum,"onUpdate:current-page":c=>a.pageNum=c,"page-size":l.defalutLimit},null,8,["total","onCurrentChange","current-page","onUpdate:current-page","page-size"])]),_:2},1024)]),_:2},1032,["label","name"]))),128))]),_:1},8,["onTabRemove","onTabClick","modelValue"])]),_:1}),s(i,{modelValue:l.conditionDialog.visible,"onUpdate:modelValue":m[7]||(m[7]=a=>l.conditionDialog.visible=a),title:l.conditionDialog.title,width:"420px"},{footer:r(()=>[U("span",Ct,[s(V,{onClick:l.onCancelCondition},{default:r(()=>[Et]),_:1},8,["onClick"]),s(V,{type:"primary",onClick:l.onConfirmCondition},{default:r(()=>[vt]),_:1},8,["onClick"])])]),default:r(()=>[s(Q,null,{default:r(()=>[s($,{span:5},{default:r(()=>[s(L,{modelValue:l.conditionDialog.condition,"onUpdate:modelValue":m[5]||(m[5]=a=>l.conditionDialog.condition=a)},{default:r(()=>[s(g,{label:"=",value:"="}),s(g,{label:"LIKE",value:"LIKE"}),s(g,{label:">",value:">"}),s(g,{label:">=",value:">="}),s(g,{label:"<",value:"<"}),s(g,{label:"<=",value:"<="})]),_:1},8,["modelValue"])]),_:1}),s($,{span:19},{default:r(()=>[s(H,{modelValue:l.conditionDialog.value,"onUpdate:modelValue":m[6]||(m[6]=a=>l.conditionDialog.value=a),placeholder:l.conditionDialog.placeholder},null,8,["modelValue","placeholder"])]),_:1})]),_:1})]),_:1},8,["modelValue","title"]),s(i,{onClose:m[9]||(m[9]=a=>l.genSqlDialog.visible=!1),modelValue:l.genSqlDialog.visible,"onUpdate:modelValue":m[10]||(m[10]=a=>l.genSqlDialog.visible=a),title:"SQL",width:"1000px"},{default:r(()=>[s(H,{modelValue:l.genSqlDialog.sql,"onUpdate:modelValue":m[8]||(m[8]=a=>l.genSqlDialog.sql=a),type:"textarea",rows:"20"},null,8,["modelValue"])]),_:1},8,["modelValue"])])}var Ft=Ye(ot,[["render",Tt]]);export{Ft as default};
