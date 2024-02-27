import{j as _}from"./jsx-runtime-6eef64cc.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const o=({allCaps:s,color:x,fontColor:v,label:t,size:S="normal"})=>_.jsx("span",{className:`${S} ${x} `,style:{color:v},children:s?t.toUpperCase():t.toLowerCase()});try{o.displayName="MyLabel",o.__docgenInfo={description:"",displayName:"MyLabel",props:{label:{defaultValue:null,description:"Text to display",name:"label",required:!0,type:{name:"string"}},size:{defaultValue:{value:"normal"},description:"Size to label",name:"size",required:!1,type:{name:"enum",value:[{value:'"normal"'},{value:'"h1"'},{value:'"h2"'},{value:'"h3"'}]}},allCaps:{defaultValue:null,description:"Text is UpperCase",name:"allCaps",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"Color Class to label",name:"color",required:!1,type:{name:"enum",value:[{value:'"text-primary"'},{value:'"text-secondary"'},{value:'"text-tertiary"'}]}},fontColor:{defaultValue:null,description:"Select color manually",name:"fontColor",required:!1,type:{name:"string"}}}}}catch{}const M={title:"UI/labels/MyLabel",tags:["autodocs"],component:o,parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"},fontColor:{control:"color"}}},e={args:{label:"Basic label"}},a={args:{label:"All caps label",allCaps:!0}},r={args:{label:"Secondary label",color:"text-secondary"}},l={args:{label:"Custom color label",fontColor:"#903838"}};var n,c,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    label: 'Basic label'
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,i,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'All caps label',
    allCaps: true
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var d,y,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Secondary label',
    color: 'text-secondary'
  }
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var C,g,f;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Custom color label',
    fontColor: '#903838'
  }
}`,...(f=(g=l.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const V=["Basic","AllCaps","Secondary","CustomColor"];export{a as AllCaps,e as Basic,l as CustomColor,r as Secondary,V as __namedExportsOrder,M as default};
