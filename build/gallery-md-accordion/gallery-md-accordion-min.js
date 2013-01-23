YUI.add("gallery-md-accordion",function(e,t){"use strict";var n=e.Lang,r="boundingBox",i=e.WidgetStdMod.BODY,s=e.WidgetStdMod.HEADER,o="expanded",u="expanding",a="collapsed",f="collapsing",l="label",c="content",h="icon",p="status",d="close",v="panelClose",m="multiExpand",g="resizeable",y="closeable",b="ui";e.AccordionPanel=e.Base.create("accordionPanel",e.Widget,[e.WidgetChild,e.WidgetStdMod,e.MakeNode],{CONTENT_TEMPLATE:null,_syncUIStdMod:function(){},renderUI:function(){this.setStdModContent(i,this._makeNode()),this.setStdModContent(s,this._makeNode(e.AccordionPanel._HEADER_TEMPLATE)),this._locateNodes()},_uiSetExpanded:function(e,t){if(t===b)return;e?this.expand():this.collapse()},_uiSetLabel:function(e){this._labelNode.setContent(e)},_uiSetContent:function(e){this._bodyNode.setContent(e)},_uiSetResizeable:function(t){var n=this.getStdModNode(i);e.Plugin.Resize&&(t?n.plug(e.Plugin.Resize,{handles:["b"]}):n.unplug(e.Plugin.Resize))},_uiSetCloseable:function(e){e?this._closeNode.show():this._closeNode.hide()},expand:function(){var e=this.get(r),t=this._classNames;e.replaceClass(t[a],t[u]),this.getStdModNode(i).show(!0,{},function(){e.replaceClass(t[u],t[o])}),this.set(o,!0,{src:b})},collapse:function(){var e=this.get(r),t=this._classNames;e.replaceClass(t[o],t[u]),this.getStdModNode(i).hide(!0,{},function(){e.replaceClass(t[u],t[a])}),this.set(o,!1,{src:b})},toggle:function(){this.set(o,!this.get(o))},_afterHEADERClick:function(e){e.target===this.getStdModNode(s)&&this.toggle()},close:function(){this.fire(v)}},{_CLASS_NAMES:[o,a,i,h,l,p,d,u,f],_TEMPLATE:'<div class="{c body}"></div>',_HEADER_TEMPLATE:'<div class="{c icon}"></div><a href="#" class="{c label}"></a><div class="{c status}"></div><div class="{c close}"></div>',_EVENTS:{HEADER:"click",close:{type:"click",fn:"close"}},_ATTRS_2_UI:{BIND:[l,c,o,g,y],SYNC:[l,c,o,g,y]},ATTRS:{expanded:{value:!1,validator:n.isBoolean},label:{value:"",validator:n.isString},content:{value:""},resizeable:{value:!0,validator:n.isBoolean},closeable:{value:!0,validator:n.isBoolean}}}),e.Accordion=e.Base.create("accordion",e.Widget,[e.WidgetParent,e.MakeNode],{"_afterThisAccordionPanel:expandedChange":function(e){var t=e.target;e.newVal&&!this.get(m)&&this.each(function(e){e!==t&&e.get(o)&&e.collapse()})},"_afterThisAccordionPanel:panelClose":function(e){var t=e.target;this.indexOf(t)>=0&&(this.remove(t),t.destroy())},_uiSetResizeable:function(e){this.each(function(t){t.set(g,e)})},_uiSetCloseable:function(e){this.each(function(t){t.set(y,e)})}},{_ATTRS_2_UI:{BIND:[g,y],SYNC:[g,y]},_EVENTS:{THIS:["accordionPanel:expandedChange","accordionPanel:panelClose"]},ATTRS:{defaultChildType:{value:"AccordionPanel"},multiExpand:{value:!0,validator:n.isBoolean},resizeable:{value:!0,validator:n.isBoolean},closeable:{value:!0,validator:n.isBoolean}}})},"gallery-2013.01.23-21-59",{requires:["widget","widget-parent","widget-child","widget-stdmod","gallery-makenode"],optional:["resize-plugin","transition"],skinnable:!0});
