// Garden Gnome Software - Skin
// Pano2VR 6.1.11/18043
// Filename: _E3_120_shablone.ggsk
// Generated 2025-08-18T16:12:26

function pano2vrSkin(player,base) {
	player.addVariable('var1', 2, false);
	player.addVariable('var2', 2, true);
	var me=this;
	var skin=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 350px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='right : -429px;';
		hs+='top : 62px;';
		hs+='visibility : hidden;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getVariableValue('var1') == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._image_1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._image_1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._image_1.style[domTransition]='right 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._image_1.ggCurrentLogicStatePosition == 0) {
					me._image_1.style.right='8px';
					me._image_1.style.top='62px';
				}
				else {
					me._image_1.style.right='-429px';
					me._image_1.style.top='62px';
				}
			}
		}
		me._image_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('var1') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_1.style[domTransition]='right 500ms ease 0ms, top 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._image_1.ggCurrentLogicStateAlpha == 0) {
					me._image_1.style.visibility=me._image_1.ggVisible?'inherit':'hidden';
					me._image_1.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._image_1.style.opacity == 0.0) { me._image_1.style.visibility="hidden"; } }, 505);
					me._image_1.style.opacity=0;
				}
			}
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._map_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapNotLoaded = true;
		el.ggId="Map 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+=cssPrefix + 'border-radius : 11px;';
		hs+='border-radius : 11px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 350px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._map_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._map_1.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (!(mapDetails.hasOwnProperty('title'))) return;
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			me._map_1.ggRadar.update();
		}
		me._map_1.ggUpdateConditionTimer=function () {
			me._map_1.ggRadar.update();
		}
		me._map_1.ggUpdatePosition=function (useTransition) {
			me._map_1.ggUpdateConditionResize();
		}
		me._map_1.ggNodeChange=function () {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (!(mapDetails.hasOwnProperty('title'))) return;
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			me._map_1.ggRadar.update();
			if (me._map_1.ggLastNodeId) {
				var lastActiveMarker = me._map_1.ggSimpleFloorplanMarkerArray[me._map_1.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_1.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_1.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_1.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_1.ggChangeMap(mapId);
					}
				}
			}
			me._map_1.ggLastNodeId = id;
		}
		me._image_1.appendChild(me._map_1);
		el=me._marker_node4=document.createElement('div');
		el.ggMarkerNodeId='{node4}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 100px;';
		hs+='position : absolute;';
		hs+='top : 197px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node4.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node4.onclick=function (e) {
			player.openNext('{node4}');
		}
		me._marker_node4.onmouseover=function (e) {
			me.elementMouseOver['marker_node4']=true;
			me._marker_title4.logicBlock_visible();
		}
		me._marker_node4.onmouseout=function (e) {
			me.elementMouseOver['marker_node4']=false;
			me._marker_title4.logicBlock_visible();
		}
		me._marker_node4.ontouchend=function (e) {
			me.elementMouseOver['marker_node4']=false;
			me._marker_title4.logicBlock_visible();
		}
		me._marker_node4.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_title4=document.createElement('div');
		els=me._marker_title4__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 30px;';
		hs+='left : 19px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 3px 6px 3px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u0421\u043f\u0430\u043b\u044c\u043d\u044f";
		el.appendChild(els);
		me._marker_title4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_title4.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title4.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title4.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title4.style[domTransition]='left 0s, top 0s';
				if (me._marker_title4.ggCurrentLogicStatePosition == 0) {
					me._marker_title4.style.left='-35px';
					me._marker_title4.style.top='-25px';
				}
				else {
					me._marker_title4.style.left='19px';
					me._marker_title4.style.top='3px';
				}
			}
		}
		me._marker_title4.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['marker_node4'] == true)) || 
				((me.elementMouseOver['marker_title4'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title4.style[domTransition]='left 0s, top 0s';
				if (me._marker_title4.ggCurrentLogicStateVisible == 0) {
					me._marker_title4.style.visibility=(Number(me._marker_title4.style.opacity)>0||!me._marker_title4.style.opacity)?'inherit':'hidden';
					me._marker_title4.ggVisible=true;
				}
				else {
					me._marker_title4.style.visibility="hidden";
					me._marker_title4.ggVisible=false;
				}
			}
		}
		me._marker_title4.onmouseover=function (e) {
			me.elementMouseOver['marker_title4']=true;
			me._marker_title4.logicBlock_visible();
		}
		me._marker_title4.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._marker_title4__text)
					return;
				}
			}
			me.elementMouseOver['marker_title4']=false;
			me._marker_title4.logicBlock_visible();
		}
		me._marker_title4.ontouchend=function (e) {
			me.elementMouseOver['marker_title4']=false;
			me._marker_title4.logicBlock_visible();
		}
		me._marker_title4.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._marker_node4.appendChild(me._marker_title4);
		me._image_1.appendChild(me._marker_node4);
		el=me._marker_node5=document.createElement('div');
		el.ggMarkerNodeId='{node5}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 259px;';
		hs+='position : absolute;';
		hs+='top : 249px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node5.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node5.onclick=function (e) {
			player.openNext('{node5}');
		}
		me._marker_node5.onmouseover=function (e) {
			me.elementMouseOver['marker_node5']=true;
			me._marker_title3.logicBlock_visible();
		}
		me._marker_node5.onmouseout=function (e) {
			me.elementMouseOver['marker_node5']=false;
			me._marker_title3.logicBlock_visible();
		}
		me._marker_node5.ontouchend=function (e) {
			me.elementMouseOver['marker_node5']=false;
			me._marker_title3.logicBlock_visible();
		}
		me._marker_node5.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_title3=document.createElement('div');
		els=me._marker_title3__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 30px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 113px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 3px 6px 3px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u0412\u0430\u043d\u043d\u0430\u044f";
		el.appendChild(els);
		me._marker_title3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_title3.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title3.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title3.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title3.style[domTransition]='left 0s, top 0s';
				if (me._marker_title3.ggCurrentLogicStatePosition == 0) {
					me._marker_title3.style.left='-35px';
					me._marker_title3.style.top='-25px';
				}
				else {
					me._marker_title3.style.left='9px';
					me._marker_title3.style.top='3px';
				}
			}
		}
		me._marker_title3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['marker_node5'] == true)) || 
				((me.elementMouseOver['marker_title3'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title3.style[domTransition]='left 0s, top 0s';
				if (me._marker_title3.ggCurrentLogicStateVisible == 0) {
					me._marker_title3.style.visibility=(Number(me._marker_title3.style.opacity)>0||!me._marker_title3.style.opacity)?'inherit':'hidden';
					me._marker_title3.ggVisible=true;
				}
				else {
					me._marker_title3.style.visibility="hidden";
					me._marker_title3.ggVisible=false;
				}
			}
		}
		me._marker_title3.onmouseover=function (e) {
			me.elementMouseOver['marker_title3']=true;
			me._marker_title3.logicBlock_visible();
		}
		me._marker_title3.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._marker_title3__text)
					return;
				}
			}
			me.elementMouseOver['marker_title3']=false;
			me._marker_title3.logicBlock_visible();
		}
		me._marker_title3.ontouchend=function (e) {
			me.elementMouseOver['marker_title3']=false;
			me._marker_title3.logicBlock_visible();
		}
		me._marker_title3.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((111-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._marker_node5.appendChild(me._marker_title3);
		me._image_1.appendChild(me._marker_node5);
		el=me._marker_node7=document.createElement('div');
		el.ggMarkerNodeId='{node7}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 232px;';
		hs+='position : absolute;';
		hs+='top : 142px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node7.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node7.onclick=function (e) {
			player.openNext('{node7}');
		}
		me._marker_node7.onmouseover=function (e) {
			me.elementMouseOver['marker_node7']=true;
			me._marker_title2.logicBlock_visible();
		}
		me._marker_node7.onmouseout=function (e) {
			me.elementMouseOver['marker_node7']=false;
			me._marker_title2.logicBlock_visible();
		}
		me._marker_node7.ontouchend=function (e) {
			me.elementMouseOver['marker_node7']=false;
			me._marker_title2.logicBlock_visible();
		}
		me._marker_node7.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_title2=document.createElement('div');
		els=me._marker_title2__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 30px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 3px 6px 3px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u041a\u0443\u0445\u043d\u044f";
		el.appendChild(els);
		me._marker_title2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_title2.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title2.style[domTransition]='left 0s, top 0s';
				if (me._marker_title2.ggCurrentLogicStatePosition == 0) {
					me._marker_title2.style.left='-35px';
					me._marker_title2.style.top='-25px';
				}
				else {
					me._marker_title2.style.left='9px';
					me._marker_title2.style.top='2px';
				}
			}
		}
		me._marker_title2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['marker_node7'] == true)) || 
				((me.elementMouseOver['marker_title2'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title2.style[domTransition]='left 0s, top 0s';
				if (me._marker_title2.ggCurrentLogicStateVisible == 0) {
					me._marker_title2.style.visibility=(Number(me._marker_title2.style.opacity)>0||!me._marker_title2.style.opacity)?'inherit':'hidden';
					me._marker_title2.ggVisible=true;
				}
				else {
					me._marker_title2.style.visibility="hidden";
					me._marker_title2.ggVisible=false;
				}
			}
		}
		me._marker_title2.onmouseover=function (e) {
			me.elementMouseOver['marker_title2']=true;
			me._marker_title2.logicBlock_visible();
		}
		me._marker_title2.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._marker_title2__text)
					return;
				}
			}
			me.elementMouseOver['marker_title2']=false;
			me._marker_title2.logicBlock_visible();
		}
		me._marker_title2.ontouchend=function (e) {
			me.elementMouseOver['marker_title2']=false;
			me._marker_title2.logicBlock_visible();
		}
		me._marker_title2.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._marker_node7.appendChild(me._marker_title2);
		me._image_1.appendChild(me._marker_node7);
		el=me._marker_node3=document.createElement('div');
		el.ggMarkerNodeId='{node3}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 96px;';
		hs+='position : absolute;';
		hs+='top : 143px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node3.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node3.onclick=function (e) {
			player.openNext('{node3}');
		}
		me._marker_node3.onmouseover=function (e) {
			me.elementMouseOver['marker_node3']=true;
			me._marker_title1.logicBlock_visible();
		}
		me._marker_node3.onmouseout=function (e) {
			me.elementMouseOver['marker_node3']=false;
			me._marker_title1.logicBlock_visible();
		}
		me._marker_node3.ontouchend=function (e) {
			me.elementMouseOver['marker_node3']=false;
			me._marker_title1.logicBlock_visible();
		}
		me._marker_node3.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_title1=document.createElement('div');
		els=me._marker_title1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 30px;';
		hs+='left : 21px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 3px 6px 3px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u0413\u043e\u0441\u0442\u0438\u043d\u0430\u044f";
		el.appendChild(els);
		me._marker_title1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_title1.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title1.style[domTransition]='left 0s, top 0s';
				if (me._marker_title1.ggCurrentLogicStatePosition == 0) {
					me._marker_title1.style.left='-35px';
					me._marker_title1.style.top='-25px';
				}
				else {
					me._marker_title1.style.left='21px';
					me._marker_title1.style.top='3px';
				}
			}
		}
		me._marker_title1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['marker_node3'] == true)) || 
				((me.elementMouseOver['marker_title1'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title1.style[domTransition]='left 0s, top 0s';
				if (me._marker_title1.ggCurrentLogicStateVisible == 0) {
					me._marker_title1.style.visibility=(Number(me._marker_title1.style.opacity)>0||!me._marker_title1.style.opacity)?'inherit':'hidden';
					me._marker_title1.ggVisible=true;
				}
				else {
					me._marker_title1.style.visibility="hidden";
					me._marker_title1.ggVisible=false;
				}
			}
		}
		me._marker_title1.onmouseover=function (e) {
			me.elementMouseOver['marker_title1']=true;
			me._marker_title1.logicBlock_visible();
		}
		me._marker_title1.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._marker_title1__text)
					return;
				}
			}
			me.elementMouseOver['marker_title1']=false;
			me._marker_title1.logicBlock_visible();
		}
		me._marker_title1.ontouchend=function (e) {
			me.elementMouseOver['marker_title1']=false;
			me._marker_title1.logicBlock_visible();
		}
		me._marker_title1.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._marker_node3.appendChild(me._marker_title1);
		me._image_1.appendChild(me._marker_node3);
		el=me._marker_node6=document.createElement('div');
		el.ggMarkerNodeId='{node6}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="marker_node6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 279px;';
		hs+='position : absolute;';
		hs+='top : 195px;';
		hs+='visibility : hidden;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_node6.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_node6.onclick=function (e) {
			player.openNext('{node6}');
		}
		me._marker_node6.onmouseover=function (e) {
			me.elementMouseOver['marker_node6']=true;
			me._marker_title0.logicBlock_visible();
		}
		me._marker_node6.onmouseout=function (e) {
			me.elementMouseOver['marker_node6']=false;
			me._marker_title0.logicBlock_visible();
		}
		me._marker_node6.ontouchend=function (e) {
			me.elementMouseOver['marker_node6']=false;
			me._marker_title0.logicBlock_visible();
		}
		me._marker_node6.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_title0=document.createElement('div');
		els=me._marker_title0__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 30px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : hidden;';
		hs+='width : 113px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='background: rgba(255,255,255,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 14px;';
		hs+='font-weight: bold;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 3px 6px 3px 6px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="\u041f\u0440\u0438\u0445\u043e\u0436\u0430\u044f";
		el.appendChild(els);
		me._marker_title0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_title0.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title0.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title0.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title0.style[domTransition]='left 0s, top 0s';
				if (me._marker_title0.ggCurrentLogicStatePosition == 0) {
					me._marker_title0.style.left='-35px';
					me._marker_title0.style.top='-25px';
				}
				else {
					me._marker_title0.style.left='20px';
					me._marker_title0.style.top='2px';
				}
			}
		}
		me._marker_title0.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['marker_node6'] == true)) || 
				((me.elementMouseOver['marker_title0'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title0.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title0.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title0.style[domTransition]='left 0s, top 0s';
				if (me._marker_title0.ggCurrentLogicStateVisible == 0) {
					me._marker_title0.style.visibility=(Number(me._marker_title0.style.opacity)>0||!me._marker_title0.style.opacity)?'inherit':'hidden';
					me._marker_title0.ggVisible=true;
				}
				else {
					me._marker_title0.style.visibility="hidden";
					me._marker_title0.ggVisible=false;
				}
			}
		}
		me._marker_title0.onmouseover=function (e) {
			me.elementMouseOver['marker_title0']=true;
			me._marker_title0.logicBlock_visible();
		}
		me._marker_title0.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._marker_title0__text)
					return;
				}
			}
			me.elementMouseOver['marker_title0']=false;
			me._marker_title0.logicBlock_visible();
		}
		me._marker_title0.ontouchend=function (e) {
			me.elementMouseOver['marker_title0']=false;
			me._marker_title0.logicBlock_visible();
		}
		me._marker_title0.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((111-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		me._marker_node6.appendChild(me._marker_title0);
		me._image_1.appendChild(me._marker_node6);
		me.divSkin.appendChild(me._image_1);
		el=me._hide_template=document.createElement('div');
		el.ggId="hide_template";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 45px;';
		hs+='left : 0px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 187px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hide_template.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._hide_template.ggUpdatePosition=function (useTransition) {
		}
		el=me._markertemplate=document.createElement('div');
		el.ggMarkerNodeId='';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="markertemplate";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 60px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._markertemplate.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._markertemplate.onmouseover=function (e) {
			me.elementMouseOver['markertemplate']=true;
			me._marker_title.logicBlock_visible();
		}
		me._markertemplate.onmouseout=function (e) {
			me.elementMouseOver['markertemplate']=false;
			me._marker_title.logicBlock_visible();
		}
		me._markertemplate.ontouchend=function (e) {
			me.elementMouseOver['markertemplate']=false;
			me._marker_title.logicBlock_visible();
		}
		me._markertemplate.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_title=document.createElement('div');
		els=me._marker_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="marker_title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 20px;';
		hs+='left : -35px;';
		hs+='position : absolute;';
		hs+='top : 35px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='100% 0%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.666667);';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._marker_title.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._marker_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._marker_title.ggUpdateText();
		});
		el.appendChild(els);
		me._marker_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._marker_title.logicBlock_position = function() {
			var newLogicStatePosition;
			if (
				((player.getHasTouch() == true))
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title.style[domTransition]='left 0s, top 0s';
				if (me._marker_title.ggCurrentLogicStatePosition == 0) {
					me._marker_title.style.left='-35px';
					me._marker_title.style.top='-25px';
				}
				else {
					me._marker_title.style.left='-35px';
					me._marker_title.style.top='35px';
				}
			}
		}
		me._marker_title.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me.elementMouseOver['markertemplate'] == true)) || 
				((me.elementMouseOver['marker_title'] == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title.style[domTransition]='left 0s, top 0s';
				if (me._marker_title.ggCurrentLogicStateVisible == 0) {
					me._marker_title.style.visibility=(Number(me._marker_title.style.opacity)>0||!me._marker_title.style.opacity)?'inherit':'hidden';
					me._marker_title.ggVisible=true;
				}
				else {
					me._marker_title.style.visibility="hidden";
					me._marker_title.ggVisible=false;
				}
			}
		}
		me._marker_title.onmouseover=function (e) {
			me.elementMouseOver['marker_title']=true;
			me._marker_title.logicBlock_visible();
		}
		me._marker_title.onmouseout=function (e) {
			if (e && e.toElement) {
				var current = e.toElement;
				while (current = current.parentNode) {
				if (current == me._marker_title__text)
					return;
				}
			}
			me.elementMouseOver['marker_title']=false;
			me._marker_title.logicBlock_visible();
		}
		me._marker_title.ontouchend=function (e) {
			me.elementMouseOver['marker_title']=false;
			me._marker_title.logicBlock_visible();
		}
		me._marker_title.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='left 0';
			this.ggTextDiv.style.left=((98-this.ggTextDiv.offsetWidth)) + 'px';
		}
		me._markertemplate.appendChild(me._marker_title);
		me._hide_template.appendChild(me._markertemplate);
		me.divSkin.appendChild(me._hide_template);
		el=me._dropdown_menu=document.createElement('div');
		el.ggId="Dropdown Menu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 142px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_menu.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._dropdown_menu.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_background=document.createElement('div');
		el.ggId="Dropdown Background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 11px;';
		hs+='border-radius : 11px;';
		hs+='background : #ecedef;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 400px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 62px;';
		hs+='visibility : hidden;';
		hs+='width : 156px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_background.ggUpdatePosition=function (useTransition) {
		}
		el=me.__35=document.createElement('div');
		els=me.__35__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAyLjkgNjQ7IiB4bWxucz0iaHR0cDovL3d3dy53My'+
			'5vcmcvMjAwMC9zdmciPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNGOEY3Rjc7fSYjeGQ7Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I0Q5REZFMzt9JiN4ZDsKCS5zdDJ7ZmlsbDojMUQyMjI4O30mI3hkOwo8L3N0eWxlPgogPHJlY3QgeT0iMCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIgd2lkdGg9IjIwMi45Ii8+CiA8bGluZSB4Mj0iMC43IiB5Mj0iNjQiIGNsYXNzPSJzdDEiIHgxPSIyMDIuNyIgeTE9IjY0Ii8+CiA8Zz4KICA8cGF0aCBkPSJNMzIuNCwzNS45VjI0LjNoMS43djUuNGw0LjgtNS40SDQxbC01LjEsNS43bDUuNSw1LjloLTIuMmwtNS4yLTUuNXY1'+
			'LjVIMzIuNHoiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNNDUuNywzNi4xYy0wLjksMC0xLjYtMC4yLTIuMy0wLjZjLTAuNi0wLjQtMS4xLTAuOS0xLjUtMS42Yy0wLjMtMC43LTAuNS0xLjUtMC41LTIuNGMwLTAuOSwwLjItMS43LDAuNS0yLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQtMC43LDAuOC0xLjIsMS41LTEuNmMwLjYtMC40LDEuNC0wLjYsMi4yLTAuNmMwLjksMCwxLjYsMC4yLDIuMywwLjZjMC42LDAuNCwxLjEsMC45LDEuNSwxLjZjMC4zLDAuNywwLjUsMS41LDAuNSwyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuOS0wLjIsMS43LTAuNSwyLjRjLTAuNCwwLjctMC44LDEuMi'+
			'0xLjUsMS42QzQ3LjMsMzUuOSw0Ni41LDM2LjEsNDUuNywzNi4xeiBNNDUuNywzNC41YzAuOCwwLDEuNS0wLjMsMS45LTAuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNC0wLjYsMC42LTEuMywwLjYtMi4yYzAtMC45LTAuMi0xLjYtMC42LTIuMmMtMC40LTAuNS0xLTAuOC0xLjktMC44Yy0wLjYsMC0xLDAuMS0xLjQsMC40Yy0wLjQsMC4zLTAuNiwwLjYtMC44LDEuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjIsMC40LTAuMywxLTAuMywxLjZjMCwwLjksMC4yLDEuNiwwLjYsMi4yQzQ0LjMsMzQuMiw0NC45LDM0LjUsNDUuNywzNC41eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik01MS43LDM5'+
			'LjdWMjcuMmgxLjV2Ni4yaDAuMnY2LjNINTEuN3ogTTU1LjgsMzYuMWMtMC44LDAtMS41LTAuMi0yLjEtMC42Yy0wLjYtMC40LTEtMS0xLjMtMS42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMy0wLjctMC40LTEuNS0wLjQtMi4zYzAtMC45LDAuMS0xLjYsMC40LTIuM2MwLjMtMC43LDAuNy0xLjIsMS4zLTEuNmMwLjYtMC40LDEuMy0wLjYsMi4xLTAuNmMwLjgsMCwxLjUsMC4yLDIuMSwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjYsMC40LDEsMC45LDEuNCwxLjZjMC4zLDAuNywwLjUsMS41LDAuNSwyLjNjMCwwLjktMC4yLDEuNi0wLjUsMi4zYy0wLjMsMC43LTAuOCwxLjItMS40LDEuNkM1Ny'+
			'4zLDM1LjksNTYuNiwzNi4xLDU1LjgsMzYuMXomI3hkOyYjeGE7JiN4OTsmI3g5OyBNNTUuNSwzNC42YzAuNSwwLDEtMC4xLDEuMy0wLjRjMC40LTAuMywwLjYtMC42LDAuOC0xLjFjMC4yLTAuNSwwLjMtMSwwLjMtMS42YzAtMC42LTAuMS0xLjEtMC4zLTEuNWMtMC4yLTAuNS0wLjQtMC44LTAuOC0xLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LTAuMy0wLjgtMC40LTEuNC0wLjRjLTAuNSwwLTEsMC4xLTEuMywwLjRjLTAuMywwLjMtMC42LDAuNi0wLjgsMS4xYy0wLjIsMC41LTAuMiwxLTAuMiwxLjZjMCwwLjYsMC4xLDEuMSwwLjIsMS42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4yLDAuNSww'+
			'LjQsMC44LDAuOCwxLjFTNTUsMzQuNiw1NS41LDM0LjZ6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTY4LjgsMjcuMnY4LjdoLTEuNnYtNmwtNC4zLDZoLTEuNHYtOC43aDEuNnY1LjlsNC40LTUuOUg2OC44eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik03MC40LDM3Ljh2LTMuM2MwLjUsMCwwLjgtMC4yLDEtMC41YzAuMi0wLjMsMC40LTAuOSwwLjUtMS42YzAuMS0wLjUsMC4xLTEsMC4yLTEuNWMwLjEtMC41LDAuMS0xLjEsMC4xLTEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMC42LDAuMS0xLjMsMC4xLTJoNi4ydjcuM2gwLjl2My4zaC0xLjZ2LTEuOUg3MnYxLjlINzAuNHogTTcyLj'+
			'gsMzQuNWg0LjF2LTZoLTNjMCwwLjQsMCwwLjctMC4xLDEuMWMwLDAuNC0wLjEsMC43LTAuMSwxLjEmI3hkOyYjeGE7JiN4OTsmI3g5O3MtMC4xLDAuNy0wLjEsMS4xYzAsMC4zLTAuMSwwLjYtMC4xLDAuOWMtMC4xLDAuNC0wLjEsMC44LTAuMiwxLjFDNzMuMiwzNC4xLDczLDM0LjMsNzIuOCwzNC41eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik04NC44LDM2LjFjLTAuOSwwLTEuNi0wLjItMi4zLTAuNmMtMC42LTAuNC0xLjEtMC45LTEuNS0xLjZjLTAuMy0wLjctMC41LTEuNS0wLjUtMi40YzAtMC45LDAuMi0xLjcsMC41LTIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNC0wLjcsMC44LTEu'+
			'MiwxLjUtMS42YzAuNi0wLjQsMS40LTAuNiwyLjItMC42YzAuOSwwLDEuNiwwLjIsMi4zLDAuNmMwLjYsMC40LDEuMSwwLjksMS41LDEuNmMwLjMsMC43LDAuNSwxLjUsMC41LDIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC45LTAuMiwxLjctMC41LDIuNGMtMC40LDAuNy0wLjgsMS4yLTEuNSwxLjZDODYuNCwzNS45LDg1LjcsMzYuMSw4NC44LDM2LjF6IE04NC44LDM0LjVjMC44LDAsMS41LTAuMywxLjktMC44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40LTAuNiwwLjYtMS4zLDAuNi0yLjJjMC0wLjktMC4yLTEuNi0wLjYtMi4yYy0wLjQtMC41LTEtMC44LTEuOS0wLjhjLTAuNiwwLTEsMC4xLT'+
			'EuNCwwLjRjLTAuNCwwLjMtMC42LDAuNi0wLjgsMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMiwwLjQtMC4zLDEtMC4zLDEuNmMwLDAuOSwwLjIsMS42LDAuNiwyLjJDODMuNCwzNC4yLDg0LDM0LjUsODQuOCwzNC41eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik05MC44LDM5LjdWMjcuMmgxLjV2Ni4yaDAuMnY2LjNIOTAuOHogTTk0LjksMzYuMWMtMC44LDAtMS41LTAuMi0yLjEtMC42Yy0wLjYtMC40LTEtMS0xLjMtMS42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMy0wLjctMC40LTEuNS0wLjQtMi4zYzAtMC45LDAuMS0xLjYsMC40LTIuM2MwLjMtMC43LDAuNy0xLjIsMS4zLTEuNmMw'+
			'LjYtMC40LDEuMy0wLjYsMi4xLTAuNmMwLjgsMCwxLjUsMC4yLDIuMSwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjYsMC40LDEsMC45LDEuNCwxLjZjMC4zLDAuNywwLjUsMS41LDAuNSwyLjNjMCwwLjktMC4yLDEuNi0wLjUsMi4zYy0wLjMsMC43LTAuOCwxLjItMS40LDEuNkM5Ni40LDM1LjksOTUuNywzNi4xLDk0LjksMzYuMXomI3hkOyYjeGE7JiN4OTsmI3g5OyBNOTQuNywzNC42YzAuNSwwLDEtMC4xLDEuMy0wLjRjMC40LTAuMywwLjYtMC42LDAuOC0xLjFjMC4yLTAuNSwwLjMtMSwwLjMtMS42YzAtMC42LTAuMS0xLjEtMC4zLTEuNWMtMC4yLTAuNS0wLjQtMC44LTAuOC0xLjEmI3hkOy'+
			'YjeGE7JiN4OTsmI3g5O2MtMC40LTAuMy0wLjgtMC40LTEuNC0wLjRjLTAuNSwwLTEsMC4xLTEuMywwLjRjLTAuMywwLjMtMC42LDAuNi0wLjgsMS4xYy0wLjIsMC41LTAuMiwxLTAuMiwxLjZjMCwwLjYsMC4xLDEuMSwwLjIsMS42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4yLDAuNSwwLjQsMC44LDAuOCwxLjFDOTMuNywzNC41LDk0LjEsMzQuNiw5NC43LDM0LjZ6IiBjbGFzcz0ic3QyIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me.__35__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me.__35__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me.__35__imgo.setAttribute('src',basePath + 'images/_35__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		ela=me.__35__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		me.__35__imga.setAttribute('src',basePath + 'images/_35__a.svg');
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="\u041a\u043e\u0440\u0438\u0434\u043e\u0440 _\u041a\u043d\u043e\u043f\u043a\u0430";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : hidden;';
		hs+='width : 156px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__35.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__35.onclick=function (e) {
			player.openNext("{node5}","");
		}
		me.__35.onmouseover=function (e) {
			me.__35__img.style.visibility='hidden';
			me.__35__imgo.style.visibility='inherit';
		}
		me.__35.onmouseout=function (e) {
			me.__35__img.style.visibility='inherit';
			me.__35__imgo.style.visibility='hidden';
			me.__35__imga.style.visibility='hidden';
		}
		me.__35.onmousedown=function (e) {
			me.__35__imga.style.visibility='inherit';
			me.__35__imgo.style.visibility='hidden';
		}
		me.__35.onmouseup=function (e) {
			me.__35__imga.style.visibility='hidden';
			if (skin.player.getHasTouch()) {
				me.__35__img.style.visibility='inherit';
			} else {
				me.__35__imgo.style.visibility='inherit';
			}
		}
		me.__35.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_background.appendChild(me.__35);
		el=me.__34=document.createElement('div');
		els=me.__34__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAyLjkgNjQ7IiB4bWxucz0iaHR0cDovL3d3dy53My'+
			'5vcmcvMjAwMC9zdmciPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNGOEY3Rjc7fSYjeGQ7Cgkuc3Qxe2ZpbGw6IzFEMjMyODt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGQ9Ik0yMDIuOSwwdjU2YzAsNC40LTMuNiw4LTgsOEg4Yy00LjQsMC04LTMuNi04LThWMEgyMDIuOXoiIGNsYXNzPSJzdDAiLz4KIDxnPgogIDxwYXRoIGQ9Ik0zMi42LDM3LjdWMjYuM2g0LjVjMC43LDAsMS4zLDAuMSwxLjgsMC40YzAuNSwwLjMsMC45LDAuNywxLjEsMS4xYzAuMiwwLjUsMC40LDEsMC40LDEuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC42LTAuMiwxLjItMC41LDEuNmMtMC4z'+
			'LDAuNC0wLjcsMC44LTEuMiwwLjlsMC0wLjRjMC43LDAuMiwxLjMsMC41LDEuNywxYzAuNCwwLjUsMC42LDEuMSwwLjYsMS44YzAsMC43LTAuMSwxLjMtMC40LDEuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMsMC41LTAuNywwLjktMS4yLDEuMmMtMC41LDAuMy0xLjEsMC40LTEuOSwwLjRIMzIuNnogTTM0LjMsMzFIMzdjMC4zLDAsMC42LTAuMSwwLjgtMC4yYzAuMi0wLjEsMC40LTAuMywwLjYtMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4xLTAuMiwwLjItMC41LDAuMi0wLjljMC0wLjQtMC4xLTAuOC0wLjQtMS4xYy0wLjMtMC4zLTAuNy0wLjQtMS4yLTAuNGgtMi44VjMxeiBNMzQuMywzNi'+
			'4xaDNjMC40LDAsMC43LTAuMSwxLTAuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7czAuNS0wLjMsMC43LTAuNmMwLjItMC4zLDAuMy0wLjYsMC4zLTFjMC0wLjMtMC4xLTAuNy0wLjItMC45Yy0wLjItMC4zLTAuNC0wLjUtMC42LTAuN2MtMC4zLTAuMi0wLjYtMC4yLTEtMC4yaC0zLjFWMzYuMXoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNDUuMSwzNy45Yy0wLjYsMC0xLjItMC4xLTEuNi0wLjRjLTAuNC0wLjItMC44LTAuNS0xLTAuOWMtMC4yLTAuNC0wLjMtMC44LTAuMy0xLjNjMC0wLjQsMC4xLTAuOCwwLjItMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4yLTAuMywwLjQtMC42LDAuNy0wLjhj'+
			'MC4zLTAuMiwwLjctMC40LDEuMS0wLjZjMC40LTAuMSwwLjgtMC4yLDEuMy0wLjNjMC41LTAuMSwxLTAuMiwxLjUtMC4yYzAuNS0wLjEsMS4xLTAuMSwxLjYtMC4yTDQ4LDMyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuNy0wLjEtMS4yLTAuNC0xLjVjLTAuMy0wLjMtMC44LTAuNS0xLjUtMC41Yy0wLjQsMC0wLjksMC4xLTEuMiwwLjNjLTAuNCwwLjItMC42LDAuNi0wLjgsMWwtMS41LTAuNWMwLjItMC43LDAuNi0xLjMsMS4yLTEuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNi0wLjQsMS40LTAuNiwyLjQtMC42YzAuOCwwLDEuNCwwLjEsMiwwLjRjMC42LDAuMywxLDAuNywxLjIsMS4yYzAuMS'+
			'wwLjMsMC4yLDAuNiwwLjMsMC45YzAsMC4zLDAsMC42LDAsMXY1LjNoLTEuNXYtMmwwLjMsMC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLjctMC44LDEuMS0xLjQsMS41QzQ2LjYsMzcuOCw0NS45LDM3LjksNDUuMSwzNy45eiBNNDUuNCwzNi42YzAuNSwwLDAuOS0wLjEsMS4yLTAuMmMwLjMtMC4yLDAuNi0wLjQsMC44LTAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMi0wLjMsMC4zLTAuNSwwLjQtMC44YzAuMS0wLjMsMC4xLTAuNSwwLjItMC45YzAtMC4zLDAtMC42LDAtMC44bDAuNSwwLjJjLTAuNSwwLjEtMSwwLjItMS40LDAuMmMtMC40LDAuMS0wLjgsMC4xLTEuMiwwLjImI3hkOyYj'+
			'eGE7JiN4OTsmI3g5O2MtMC4zLDAuMS0wLjcsMC4xLTAuOSwwLjJjLTAuMiwwLjEtMC40LDAuMi0wLjYsMC4zcy0wLjMsMC4yLTAuNCwwLjRjLTAuMSwwLjItMC4yLDAuNC0wLjIsMC42YzAsMC4yLDAuMSwwLjQsMC4yLDAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMSwwLjIsMC4zLDAuMywwLjUsMC40QzQ0LjcsMzYuNSw0NSwzNi42LDQ1LjQsMzYuNnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNTEuOSwzNy43di04LjZoMS43djMuNWg0LjJ2LTMuNWgxLjd2OC42aC0xLjd2LTMuNWgtNC4ydjMuNUg1MS45eiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik02MS44LDM3Ljd2LTguNmgxLj'+
			'd2My41aDQuMnYtMy41aDEuN3Y4LjZoLTEuN3YtMy41aC00LjJ2My41SDYxLjh6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTc0LjEsMzcuOWMtMC42LDAtMS4yLTAuMS0xLjYtMC40Yy0wLjQtMC4yLTAuOC0wLjUtMS0wLjljLTAuMi0wLjQtMC4zLTAuOC0wLjMtMS4zYzAtMC40LDAuMS0wLjgsMC4yLTEuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMi0wLjMsMC40LTAuNiwwLjctMC44YzAuMy0wLjIsMC43LTAuNCwxLjEtMC42YzAuNC0wLjEsMC44LTAuMiwxLjMtMC4zYzAuNS0wLjEsMS0wLjIsMS41LTAuMmMwLjUtMC4xLDEuMS0wLjEsMS42LTAuMkw3NywzMi40JiN4ZDsmI3hhOyYjeDk7'+
			'JiN4OTtjMC0wLjctMC4xLTEuMi0wLjQtMS41Yy0wLjMtMC4zLTAuOC0wLjUtMS41LTAuNWMtMC40LDAtMC45LDAuMS0xLjIsMC4zYy0wLjQsMC4yLTAuNiwwLjYtMC44LDFsLTEuNS0wLjVjMC4yLTAuNywwLjYtMS4zLDEuMi0xLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjYtMC40LDEuNC0wLjYsMi40LTAuNmMwLjgsMCwxLjQsMC4xLDIsMC40YzAuNiwwLjMsMSwwLjcsMS4yLDEuMmMwLjEsMC4zLDAuMiwwLjYsMC4zLDAuOWMwLDAuMywwLDAuNiwwLDF2NS4zaC0xLjV2LTJsMC4zLDAuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC43LTAuOCwxLjEtMS40LDEuNUM3NS42LDM3LjgsNzQuOS'+
			'wzNy45LDc0LjEsMzcuOXogTTc0LjQsMzYuNmMwLjUsMCwwLjktMC4xLDEuMi0wLjJjMC4zLTAuMiwwLjYtMC40LDAuOC0wLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjItMC4zLDAuMy0wLjUsMC40LTAuOGMwLjEtMC4zLDAuMS0wLjUsMC4yLTAuOWMwLTAuMywwLTAuNiwwLTAuOGwwLjUsMC4yYy0wLjUsMC4xLTEsMC4yLTEuNCwwLjJjLTAuNCwwLjEtMC44LDAuMS0xLjIsMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMywwLjEtMC43LDAuMS0wLjksMC4yYy0wLjIsMC4xLTAuNCwwLjItMC42LDAuM2MtMC4yLDAuMS0wLjMsMC4yLTAuNCwwLjRjLTAuMSwwLjItMC4yLDAuNC0wLjIsMC42YzAs'+
			'MC4yLDAuMSwwLjQsMC4yLDAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMSwwLjIsMC4zLDAuMywwLjUsMC40QzczLjcsMzYuNSw3NCwzNi42LDc0LjQsMzYuNnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNODAuNCwzNy43bDIuMi0zLjRoMS44bC0yLjEsMy40SDgwLjR6IE04Ni4xLDM3Ljd2LTNoLTEuN2MtMC4yLDAtMC40LDAtMC43LDBjLTAuMywwLTAuNSwwLTAuOC0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LTAuMS0xLjItMC40LTEuNi0wLjhjLTAuNC0wLjQtMC42LTEuMS0wLjYtMS44YzAtMC43LDAuMi0xLjQsMC42LTEuOGMwLjQtMC41LDAuOS0wLjgsMS41LTAuOWMwLjMtMC'+
			'4xLDAuNS0wLjEsMC44LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMywwLDAuNSwwLDAuNywwaDMuNGwwLDguNkg4Ni4xeiBNODQuMiwzMy40aDEuOHYtMi45aC0xLjhjLTAuMSwwLTAuMywwLTAuNCwwYy0wLjIsMC0wLjMsMC0wLjUsMC4xYy0wLjIsMC0wLjMsMC4xLTAuNSwwLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4yLDAuMS0wLjMsMC4zLTAuNCwwLjVjLTAuMSwwLjItMC4xLDAuNC0wLjEsMC42YzAsMC40LDAuMSwwLjcsMC4zLDAuOWMwLjIsMC4yLDAuNSwwLjQsMC43LDAuNWMwLjIsMCwwLjMsMC4xLDAuNSwwLjEmI3hkOyYjeGE7JiN4OTsmI3g5O1M4NC4xLDMzLjQsODQuMiwzMy40'+
			'eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me.__34__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me.__34__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2My45IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMDIuOSA2My45OyIgeG1sbnM9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojRTZFOUVDO30mI3hkOwoJLnN0MXtmaWxsOiMxRDIzMjg7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBkPSJNMjAyLjktMC4xdjU2YzAsNC40LTMuNiw4LTgsOEg4Yy00LjQsMC04LTMuNi04LTh2LTU2SDIwMi45eiIgY2xhc3M9InN0MCIvPgogPGc+CiAgPHBhdGggZD0iTTMyLjYsMzcuNlYyNi4yaDQuNWMwLjcsMCwxLjMsMC4xLDEuOCwwLjRjMC41LDAuMywwLjksMC43LDEuMSwxLjFjMC4yLDAuNSwwLjQsMSwwLjQsMS41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjYtMC4yLDEuMi0wLjUs'+
			'MS42Yy0wLjMsMC40LTAuNywwLjgtMS4yLDAuOWwwLTAuNGMwLjcsMC4yLDEuMywwLjUsMS43LDFjMC40LDAuNSwwLjYsMS4xLDAuNiwxLjhjMCwwLjctMC4xLDEuMy0wLjQsMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMywwLjUtMC43LDAuOS0xLjIsMS4yYy0wLjUsMC4zLTEuMSwwLjQtMS45LDAuNEgzMi42eiBNMzQuMywzMC45SDM3YzAuMywwLDAuNi0wLjEsMC44LTAuMmMwLjItMC4xLDAuNC0wLjMsMC42LTAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMS0wLjIsMC4yLTAuNSwwLjItMC45YzAtMC40LTAuMS0wLjgtMC40LTEuMWMtMC4zLTAuMy0wLjctMC40LTEuMi0wLjRoLTIuOFYzMC'+
			'45eiBNMzQuMywzNi4xaDNjMC40LDAsMC43LTAuMSwxLTAuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7czAuNS0wLjMsMC43LTAuNmMwLjItMC4zLDAuMy0wLjYsMC4zLTFjMC0wLjMtMC4xLTAuNy0wLjItMC45Yy0wLjItMC4zLTAuNC0wLjUtMC42LTAuN2MtMC4zLTAuMi0wLjYtMC4yLTEtMC4yaC0zLjFWMzYuMXoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNDUuMSwzNy45Yy0wLjYsMC0xLjItMC4xLTEuNi0wLjRjLTAuNC0wLjItMC44LTAuNS0xLTAuOWMtMC4yLTAuNC0wLjMtMC44LTAuMy0xLjNjMC0wLjQsMC4xLTAuOCwwLjItMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4yLTAuMywwLjQt'+
			'MC42LDAuNy0wLjhjMC4zLTAuMiwwLjctMC40LDEuMS0wLjZjMC40LTAuMSwwLjgtMC4yLDEuMy0wLjNjMC41LTAuMSwxLTAuMiwxLjUtMC4yYzAuNS0wLjEsMS4xLTAuMSwxLjYtMC4yTDQ4LDMyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuNy0wLjEtMS4yLTAuNC0xLjVjLTAuMy0wLjMtMC44LTAuNS0xLjUtMC41Yy0wLjQsMC0wLjksMC4xLTEuMiwwLjNjLTAuNCwwLjItMC42LDAuNi0wLjgsMWwtMS41LTAuNWMwLjItMC43LDAuNi0xLjMsMS4yLTEuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNi0wLjQsMS40LTAuNiwyLjQtMC42YzAuOCwwLDEuNCwwLjEsMiwwLjRjMC42LDAuMywxLDAuNy'+
			'wxLjIsMS4yYzAuMSwwLjMsMC4yLDAuNiwwLjMsMC45YzAsMC4zLDAsMC42LDAsMXY1LjNoLTEuNXYtMmwwLjMsMC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLjctMC44LDEuMS0xLjQsMS41QzQ2LjYsMzcuNyw0NS45LDM3LjksNDUuMSwzNy45eiBNNDUuNCwzNi41YzAuNSwwLDAuOS0wLjEsMS4yLTAuMmMwLjMtMC4yLDAuNi0wLjQsMC44LTAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMi0wLjMsMC4zLTAuNSwwLjQtMC44YzAuMS0wLjMsMC4xLTAuNSwwLjItMC45YzAtMC4zLDAtMC42LDAtMC44bDAuNSwwLjJjLTAuNSwwLjEtMSwwLjItMS40LDAuMmMtMC40LDAuMS0wLjgsMC4xLTEu'+
			'MiwwLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLDAuMS0wLjcsMC4xLTAuOSwwLjJjLTAuMiwwLjEtMC40LDAuMi0wLjYsMC4zcy0wLjMsMC4yLTAuNCwwLjRjLTAuMSwwLjItMC4yLDAuNC0wLjIsMC42YzAsMC4yLDAuMSwwLjQsMC4yLDAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMSwwLjIsMC4zLDAuMywwLjUsMC40QzQ0LjcsMzYuNSw0NSwzNi41LDQ1LjQsMzYuNXoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNTEuOSwzNy42di04LjZoMS43djMuNWg0LjJ2LTMuNWgxLjd2OC42aC0xLjd2LTMuNWgtNC4ydjMuNUg1MS45eiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik02MS44LD'+
			'M3LjZ2LTguNmgxLjd2My41aDQuMnYtMy41aDEuN3Y4LjZoLTEuN3YtMy41aC00LjJ2My41SDYxLjh6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTc0LjEsMzcuOWMtMC42LDAtMS4yLTAuMS0xLjYtMC40Yy0wLjQtMC4yLTAuOC0wLjUtMS0wLjljLTAuMi0wLjQtMC4zLTAuOC0wLjMtMS4zYzAtMC40LDAuMS0wLjgsMC4yLTEuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMi0wLjMsMC40LTAuNiwwLjctMC44YzAuMy0wLjIsMC43LTAuNCwxLjEtMC42YzAuNC0wLjEsMC44LTAuMiwxLjMtMC4zYzAuNS0wLjEsMS0wLjIsMS41LTAuMmMwLjUtMC4xLDEuMS0wLjEsMS42LTAuMkw3NywzMi40JiN4'+
			'ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjctMC4xLTEuMi0wLjQtMS41Yy0wLjMtMC4zLTAuOC0wLjUtMS41LTAuNWMtMC40LDAtMC45LDAuMS0xLjIsMC4zYy0wLjQsMC4yLTAuNiwwLjYtMC44LDFsLTEuNS0wLjVjMC4yLTAuNywwLjYtMS4zLDEuMi0xLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjYtMC40LDEuNC0wLjYsMi40LTAuNmMwLjgsMCwxLjQsMC4xLDIsMC40YzAuNiwwLjMsMSwwLjcsMS4yLDEuMmMwLjEsMC4zLDAuMiwwLjYsMC4zLDAuOWMwLDAuMywwLDAuNiwwLDF2NS4zaC0xLjV2LTJsMC4zLDAuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC43LTAuOCwxLjEtMS40LDEuNUM3NS'+
			'42LDM3LjcsNzQuOSwzNy45LDc0LjEsMzcuOXogTTc0LjQsMzYuNWMwLjUsMCwwLjktMC4xLDEuMi0wLjJjMC4zLTAuMiwwLjYtMC40LDAuOC0wLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjItMC4zLDAuMy0wLjUsMC40LTAuOGMwLjEtMC4zLDAuMS0wLjUsMC4yLTAuOWMwLTAuMywwLTAuNiwwLTAuOGwwLjUsMC4yYy0wLjUsMC4xLTEsMC4yLTEuNCwwLjJjLTAuNCwwLjEtMC44LDAuMS0xLjIsMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMywwLjEtMC43LDAuMS0wLjksMC4yYy0wLjIsMC4xLTAuNCwwLjItMC42LDAuM2MtMC4yLDAuMS0wLjMsMC4yLTAuNCwwLjRjLTAuMSwwLjItMC4yLDAu'+
			'NC0wLjIsMC42YzAsMC4yLDAuMSwwLjQsMC4yLDAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMSwwLjIsMC4zLDAuMywwLjUsMC40QzczLjcsMzYuNSw3NCwzNi41LDc0LjQsMzYuNXoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNODAuNCwzNy42bDIuMi0zLjRoMS44bC0yLjEsMy40SDgwLjR6IE04Ni4xLDM3LjZ2LTNoLTEuN2MtMC4yLDAtMC40LDAtMC43LDBjLTAuMywwLTAuNSwwLTAuOC0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LTAuMS0xLjItMC40LTEuNi0wLjhjLTAuNC0wLjQtMC42LTEuMS0wLjYtMS44YzAtMC43LDAuMi0xLjQsMC42LTEuOGMwLjQtMC41LDAuOS0wLjgsMS'+
			'41LTAuOWMwLjMtMC4xLDAuNS0wLjEsMC44LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMywwLDAuNSwwLDAuNywwaDMuNGwwLDguNkg4Ni4xeiBNODQuMiwzMy4zaDEuOHYtMi45aC0xLjhjLTAuMSwwLTAuMywwLTAuNCwwYy0wLjIsMC0wLjMsMC0wLjUsMC4xYy0wLjIsMC0wLjMsMC4xLTAuNSwwLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4yLDAuMS0wLjMsMC4zLTAuNCwwLjVjLTAuMSwwLjItMC4xLDAuNC0wLjEsMC42YzAsMC40LDAuMSwwLjcsMC4zLDAuOWMwLjIsMC4yLDAuNSwwLjQsMC43LDAuNWMwLjIsMCwwLjMsMC4xLDAuNSwwLjEmI3hkOyYjeGE7JiN4OTsmI3g5O1M4NC4xLDMz'+
			'LjMsODQuMiwzMy4zeiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me.__34__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		ela=me.__34__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2My45IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMDIuOSA2My45OyIgeG1sbnM9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojRTZFOUVDO30mI3hkOwoJLnN0MXtmaWxsOiMxRDIzMjg7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBkPSJNMjAyLjktMC4xdjU2YzAsNC40LTMuNiw4LTgsOEg4Yy00LjQsMC04LTMuNi04LTh2LTU2SDIwMi45eiIgY2xhc3M9InN0MCIvPgogPGc+CiAgPHBhdGggZD0iTTMyLjYsMzcuNlYyNi4yaDQuNWMwLjcsMCwxLjMsMC4xLDEuOCwwLjRjMC41LDAuMywwLjksMC43LDEuMSwxLjFjMC4yLDAuNSwwLjQsMSwwLjQsMS41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjYtMC4yLDEuMi0wLjUs'+
			'MS42Yy0wLjMsMC40LTAuNywwLjgtMS4yLDAuOWwwLTAuNGMwLjcsMC4yLDEuMywwLjUsMS43LDFjMC40LDAuNSwwLjYsMS4xLDAuNiwxLjhjMCwwLjctMC4xLDEuMy0wLjQsMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMywwLjUtMC43LDAuOS0xLjIsMS4yYy0wLjUsMC4zLTEuMSwwLjQtMS45LDAuNEgzMi42eiBNMzQuMywzMC45SDM3YzAuMywwLDAuNi0wLjEsMC44LTAuMmMwLjItMC4xLDAuNC0wLjMsMC42LTAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMS0wLjIsMC4yLTAuNSwwLjItMC45YzAtMC40LTAuMS0wLjgtMC40LTEuMWMtMC4zLTAuMy0wLjctMC40LTEuMi0wLjRoLTIuOFYzMC'+
			'45eiBNMzQuMywzNi4xaDNjMC40LDAsMC43LTAuMSwxLTAuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7czAuNS0wLjMsMC43LTAuNmMwLjItMC4zLDAuMy0wLjYsMC4zLTFjMC0wLjMtMC4xLTAuNy0wLjItMC45Yy0wLjItMC4zLTAuNC0wLjUtMC42LTAuN2MtMC4zLTAuMi0wLjYtMC4yLTEtMC4yaC0zLjFWMzYuMXoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNDUuMSwzNy45Yy0wLjYsMC0xLjItMC4xLTEuNi0wLjRjLTAuNC0wLjItMC44LTAuNS0xLTAuOWMtMC4yLTAuNC0wLjMtMC44LTAuMy0xLjNjMC0wLjQsMC4xLTAuOCwwLjItMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4yLTAuMywwLjQt'+
			'MC42LDAuNy0wLjhjMC4zLTAuMiwwLjctMC40LDEuMS0wLjZjMC40LTAuMSwwLjgtMC4yLDEuMy0wLjNjMC41LTAuMSwxLTAuMiwxLjUtMC4yYzAuNS0wLjEsMS4xLTAuMSwxLjYtMC4yTDQ4LDMyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuNy0wLjEtMS4yLTAuNC0xLjVjLTAuMy0wLjMtMC44LTAuNS0xLjUtMC41Yy0wLjQsMC0wLjksMC4xLTEuMiwwLjNjLTAuNCwwLjItMC42LDAuNi0wLjgsMWwtMS41LTAuNWMwLjItMC43LDAuNi0xLjMsMS4yLTEuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNi0wLjQsMS40LTAuNiwyLjQtMC42YzAuOCwwLDEuNCwwLjEsMiwwLjRjMC42LDAuMywxLDAuNy'+
			'wxLjIsMS4yYzAuMSwwLjMsMC4yLDAuNiwwLjMsMC45YzAsMC4zLDAsMC42LDAsMXY1LjNoLTEuNXYtMmwwLjMsMC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLjctMC44LDEuMS0xLjQsMS41QzQ2LjYsMzcuNyw0NS45LDM3LjksNDUuMSwzNy45eiBNNDUuNCwzNi41YzAuNSwwLDAuOS0wLjEsMS4yLTAuMmMwLjMtMC4yLDAuNi0wLjQsMC44LTAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMi0wLjMsMC4zLTAuNSwwLjQtMC44YzAuMS0wLjMsMC4xLTAuNSwwLjItMC45YzAtMC4zLDAtMC42LDAtMC44bDAuNSwwLjJjLTAuNSwwLjEtMSwwLjItMS40LDAuMmMtMC40LDAuMS0wLjgsMC4xLTEu'+
			'MiwwLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLDAuMS0wLjcsMC4xLTAuOSwwLjJjLTAuMiwwLjEtMC40LDAuMi0wLjYsMC4zcy0wLjMsMC4yLTAuNCwwLjRjLTAuMSwwLjItMC4yLDAuNC0wLjIsMC42YzAsMC4yLDAuMSwwLjQsMC4yLDAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMSwwLjIsMC4zLDAuMywwLjUsMC40QzQ0LjcsMzYuNSw0NSwzNi41LDQ1LjQsMzYuNXoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNTEuOSwzNy42di04LjZoMS43djMuNWg0LjJ2LTMuNWgxLjd2OC42aC0xLjd2LTMuNWgtNC4ydjMuNUg1MS45eiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik02MS44LD'+
			'M3LjZ2LTguNmgxLjd2My41aDQuMnYtMy41aDEuN3Y4LjZoLTEuN3YtMy41aC00LjJ2My41SDYxLjh6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTc0LjEsMzcuOWMtMC42LDAtMS4yLTAuMS0xLjYtMC40Yy0wLjQtMC4yLTAuOC0wLjUtMS0wLjljLTAuMi0wLjQtMC4zLTAuOC0wLjMtMS4zYzAtMC40LDAuMS0wLjgsMC4yLTEuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMi0wLjMsMC40LTAuNiwwLjctMC44YzAuMy0wLjIsMC43LTAuNCwxLjEtMC42YzAuNC0wLjEsMC44LTAuMiwxLjMtMC4zYzAuNS0wLjEsMS0wLjIsMS41LTAuMmMwLjUtMC4xLDEuMS0wLjEsMS42LTAuMkw3NywzMi40JiN4'+
			'ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjctMC4xLTEuMi0wLjQtMS41Yy0wLjMtMC4zLTAuOC0wLjUtMS41LTAuNWMtMC40LDAtMC45LDAuMS0xLjIsMC4zYy0wLjQsMC4yLTAuNiwwLjYtMC44LDFsLTEuNS0wLjVjMC4yLTAuNywwLjYtMS4zLDEuMi0xLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjYtMC40LDEuNC0wLjYsMi40LTAuNmMwLjgsMCwxLjQsMC4xLDIsMC40YzAuNiwwLjMsMSwwLjcsMS4yLDEuMmMwLjEsMC4zLDAuMiwwLjYsMC4zLDAuOWMwLDAuMywwLDAuNiwwLDF2NS4zaC0xLjV2LTJsMC4zLDAuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC43LTAuOCwxLjEtMS40LDEuNUM3NS'+
			'42LDM3LjcsNzQuOSwzNy45LDc0LjEsMzcuOXogTTc0LjQsMzYuNWMwLjUsMCwwLjktMC4xLDEuMi0wLjJjMC4zLTAuMiwwLjYtMC40LDAuOC0wLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjItMC4zLDAuMy0wLjUsMC40LTAuOGMwLjEtMC4zLDAuMS0wLjUsMC4yLTAuOWMwLTAuMywwLTAuNiwwLTAuOGwwLjUsMC4yYy0wLjUsMC4xLTEsMC4yLTEuNCwwLjJjLTAuNCwwLjEtMC44LDAuMS0xLjIsMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMywwLjEtMC43LDAuMS0wLjksMC4yYy0wLjIsMC4xLTAuNCwwLjItMC42LDAuM2MtMC4yLDAuMS0wLjMsMC4yLTAuNCwwLjRjLTAuMSwwLjItMC4yLDAu'+
			'NC0wLjIsMC42YzAsMC4yLDAuMSwwLjQsMC4yLDAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMSwwLjIsMC4zLDAuMywwLjUsMC40QzczLjcsMzYuNSw3NCwzNi41LDc0LjQsMzYuNXoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNODAuNCwzNy42bDIuMi0zLjRoMS44bC0yLjEsMy40SDgwLjR6IE04Ni4xLDM3LjZ2LTNoLTEuN2MtMC4yLDAtMC40LDAtMC43LDBjLTAuMywwLTAuNSwwLTAuOC0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LTAuMS0xLjItMC40LTEuNi0wLjhjLTAuNC0wLjQtMC42LTEuMS0wLjYtMS44YzAtMC43LDAuMi0xLjQsMC42LTEuOGMwLjQtMC41LDAuOS0wLjgsMS'+
			'41LTAuOWMwLjMtMC4xLDAuNS0wLjEsMC44LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMywwLDAuNSwwLDAuNywwaDMuNGwwLDguNkg4Ni4xeiBNODQuMiwzMy4zaDEuOHYtMi45aC0xLjhjLTAuMSwwLTAuMywwLTAuNCwwYy0wLjIsMC0wLjMsMC0wLjUsMC4xYy0wLjIsMC0wLjMsMC4xLTAuNSwwLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4yLDAuMS0wLjMsMC4zLTAuNCwwLjVjLTAuMSwwLjItMC4xLDAuNC0wLjEsMC42YzAsMC40LDAuMSwwLjcsMC4zLDAuOWMwLjIsMC4yLDAuNSwwLjQsMC43LDAuNWMwLjIsMCwwLjMsMC4xLDAuNSwwLjEmI3hkOyYjeGE7JiN4OTsmI3g5O1M4NC4xLDMz'+
			'LjMsODQuMiwzMy4zeiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me.__34__imga.setAttribute('src',hs);
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="\u0412\u0430\u043d\u043d\u0430\u044f _\u041a\u043d\u043e\u043f\u043a\u0430";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 350px;';
		hs+='visibility : inherit;';
		hs+='width : 156px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__34.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__34.onclick=function (e) {
			player.openNext("{node10}","");
		}
		me.__34.onmouseover=function (e) {
			me.__34__img.style.visibility='hidden';
			me.__34__imgo.style.visibility='inherit';
		}
		me.__34.onmouseout=function (e) {
			me.__34__img.style.visibility='inherit';
			me.__34__imgo.style.visibility='hidden';
			me.__34__imga.style.visibility='hidden';
		}
		me.__34.onmousedown=function (e) {
			me.__34__imga.style.visibility='inherit';
			me.__34__imgo.style.visibility='hidden';
		}
		me.__34.onmouseup=function (e) {
			me.__34__imga.style.visibility='hidden';
			if (skin.player.getHasTouch()) {
				me.__34__img.style.visibility='inherit';
			} else {
				me.__34__imgo.style.visibility='inherit';
			}
		}
		me.__34.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_background.appendChild(me.__34);
		el=me.__33=document.createElement('div');
		els=me.__33__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAyLjkgNjQ7IiB4bWxucz0iaHR0cDovL3d3dy53My'+
			'5vcmcvMjAwMC9zdmciPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNGOEY3Rjc7fSYjeGQ7Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I0Q5REZFMzt9JiN4ZDsKCS5zdDJ7ZmlsbDojMUQyMjI4O30mI3hkOwo8L3N0eWxlPgogPHJlY3QgeT0iMCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIgd2lkdGg9IjIwMi45Ii8+CiA8bGluZSB4Mj0iMC43IiB5Mj0iNjQiIGNsYXNzPSJzdDEiIHgxPSIyMDIuNyIgeTE9IjY0Ii8+CiA8Zz4KICA8cGF0aCBkPSJNMzIuNCwzNlYyNC40aDcuNFYyNmgtNS43djEwSDMyLjR6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTQyLjQs'+
			'MzYuMmMtMC42LDAtMS4yLTAuMS0xLjYtMC40Yy0wLjQtMC4yLTAuOC0wLjYtMS0wLjljLTAuMi0wLjQtMC4zLTAuOC0wLjMtMS4zYzAtMC40LDAuMS0wLjgsMC4yLTEuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMi0wLjMsMC40LTAuNiwwLjctMC44YzAuMy0wLjIsMC43LTAuNCwxLjEtMC42YzAuNC0wLjEsMC44LTAuMiwxLjMtMC4zYzAuNS0wLjEsMS0wLjIsMS41LTAuMmMwLjUtMC4xLDEuMS0wLjIsMS42LTAuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0wLjYsMC4zYzAtMC43LTAuMS0xLjItMC40LTEuNWMtMC4zLTAuMy0wLjgtMC41LTEuNS0wLjVjLTAuNSwwLTAuOSwwLjEtMS4zLDAuM2MtMC'+
			'40LDAuMi0wLjYsMC42LTAuOCwxbC0xLjYtMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4yLTAuNywwLjYtMS4zLDEuMi0xLjhjMC42LTAuNCwxLjQtMC43LDIuNC0wLjdjMC44LDAsMS41LDAuMSwyLDAuNGMwLjYsMC4zLDEsMC43LDEuMywxLjNjMC4xLDAuMywwLjIsMC42LDAuMywwLjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuMywwLDAuNywwLDFWMzZoLTEuNXYtMmwwLjMsMC4zYy0wLjQsMC43LTAuOCwxLjItMS40LDEuNUM0My45LDM2LjEsNDMuMiwzNi4yLDQyLjQsMzYuMnogTTQyLjcsMzQuOGMwLjUsMCwwLjktMC4xLDEuMi0wLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMtMC4yLDAu'+
			'Ni0wLjQsMC44LTAuNmMwLjItMC4zLDAuMy0wLjUsMC40LTAuOGMwLjEtMC4zLDAuMS0wLjUsMC4yLTAuOWMwLTAuMywwLTAuNiwwLTAuOGwwLjUsMC4yYy0wLjUsMC4xLTEsMC4yLTEuNCwwLjImI3hkOyYjeGE7JiN4OTsmI3g5O0M0NCwzMiw0My42LDMyLDQzLjMsMzIuMWMtMC40LDAuMS0wLjcsMC4xLTAuOSwwLjJjLTAuMiwwLjEtMC40LDAuMi0wLjYsMC4zYy0wLjIsMC4xLTAuMywwLjItMC40LDAuNGMtMC4xLDAuMi0wLjIsMC40LTAuMiwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuMiwwLjEsMC40LDAuMiwwLjZjMC4xLDAuMiwwLjMsMC4zLDAuNSwwLjVDNDIuMSwzNC44LDQyLjQsMz'+
			'QuOCw0Mi43LDM0Ljh6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTQ5LjEsMzkuOFYyNy4zaDEuNXY2LjJoMC4ydjYuM0g0OS4xeiBNNTMuMiwzNi4yYy0wLjgsMC0xLjUtMC4yLTIuMS0wLjZjLTAuNi0wLjQtMS0xLTEuMy0xLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLTAuNy0wLjQtMS41LTAuNC0yLjNjMC0wLjksMC4xLTEuNiwwLjQtMi4zYzAuMy0wLjcsMC43LTEuMiwxLjMtMS42YzAuNi0wLjQsMS4zLTAuNiwyLjEtMC42YzAuOCwwLDEuNSwwLjIsMi4xLDAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNiwwLjQsMSwwLjksMS40LDEuNmMwLjMsMC43LDAuNSwxLjUsMC41LDIuM2Mw'+
			'LDAuOS0wLjIsMS42LTAuNSwyLjNjLTAuMywwLjctMC44LDEuMi0xLjQsMS42QzU0LjcsMzYsNTQsMzYuMiw1My4yLDM2LjJ6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTTUzLDM0LjdjMC41LDAsMS0wLjEsMS4zLTAuNGMwLjQtMC4zLDAuNi0wLjYsMC44LTEuMWMwLjItMC41LDAuMy0xLDAuMy0xLjZjMC0wLjYtMC4xLTEuMS0wLjMtMS41Yy0wLjItMC41LTAuNC0wLjgtMC44LTEuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQtMC4zLTAuOC0wLjQtMS40LTAuNGMtMC41LDAtMSwwLjEtMS4zLDAuNGMtMC4zLDAuMy0wLjYsMC42LTAuOCwxLjFjLTAuMiwwLjUtMC4yLDEtMC4yLDEuNmMwLDAuNiwwLj'+
			'EsMS4xLDAuMiwxLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjIsMC41LDAuNCwwLjgsMC44LDEuMUM1MiwzNC42LDUyLjQsMzQuNyw1MywzNC43eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik01OC4zLDM3Ljl2LTMuM2MwLjUsMCwwLjgtMC4yLDEtMC41YzAuMi0wLjMsMC40LTAuOSwwLjUtMS42YzAuMS0wLjUsMC4xLTEsMC4yLTEuNWMwLjEtMC41LDAuMS0xLjEsMC4xLTEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMC42LDAuMS0xLjMsMC4xLTJoNi4ydjcuM2gwLjl2My4zaC0xLjZWMzZoLTUuOHYxLjlINTguM3ogTTYwLjcsMzQuNmg0LjF2LTZoLTNjMCwwLjQsMCwwLjctMC4xLDEuMWMw'+
			'LDAuNC0wLjEsMC43LTAuMSwxLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNC0wLjEsMC43LTAuMSwxLjFjMCwwLjMtMC4xLDAuNi0wLjEsMC45Yy0wLjEsMC40LTAuMSwwLjgtMC4yLDEuMUM2MSwzNC4yLDYwLjksMzQuNCw2MC43LDM0LjZ6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTcyLjgsMzYuMmMtMC45LDAtMS42LTAuMi0yLjMtMC42Yy0wLjctMC40LTEuMi0wLjktMS41LTEuNmMtMC40LTAuNy0wLjUtMS41LTAuNS0yLjRjMC0wLjksMC4yLTEuOCwwLjUtMi41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40LTAuNywwLjktMS4yLDEuNS0xLjZjMC42LTAuNCwxLjQtMC42LDIuMi0wLj'+
			'ZjMC45LDAsMS42LDAuMiwyLjMsMC42czEuMSwxLDEuNCwxLjdzMC40LDEuNywwLjQsMi43SDc1di0wLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTEtMC4yLTEuOC0wLjYtMi4yYy0wLjQtMC41LTAuOS0wLjctMS43LTAuN2MtMC44LDAtMS41LDAuMy0xLjksMC44Yy0wLjQsMC41LTAuNiwxLjMtMC42LDIuM2MwLDEsMC4yLDEuNywwLjYsMi4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40LDAuNSwxLDAuOCwxLjgsMC44YzAuNSwwLDEtMC4xLDEuNC0wLjRjMC40LTAuMiwwLjctMC42LDAuOS0xbDEuNiwwLjVjLTAuMywwLjgtMC44LDEuNC0xLjUsMS44Qzc0LjQsMzYsNzMuNiwzNi4yLDcyLjgsMzYu'+
			'MnomI3hkOyYjeGE7JiN4OTsmI3g5OyBNNjkuNywzMi4xdi0xLjNoNi4ydjEuM0g2OS43eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik03OC41LDM5LjhWMjcuM0g4MHY2LjJoMC4ydjYuM0g3OC41eiBNODIuNiwzNi4yYy0wLjgsMC0xLjUtMC4yLTIuMS0wLjZjLTAuNi0wLjQtMS0xLTEuMy0xLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLTAuNy0wLjQtMS41LTAuNC0yLjNjMC0wLjksMC4xLTEuNiwwLjQtMi4zYzAuMy0wLjcsMC43LTEuMiwxLjMtMS42YzAuNi0wLjQsMS4zLTAuNiwyLjEtMC42YzAuOCwwLDEuNSwwLjIsMi4xLDAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNiwwLjQsMS'+
			'wwLjksMS40LDEuNmMwLjMsMC43LDAuNSwxLjUsMC41LDIuM2MwLDAuOS0wLjIsMS42LTAuNSwyLjNjLTAuMywwLjctMC44LDEuMi0xLjQsMS42Qzg0LjEsMzYsODMuNCwzNi4yLDgyLjYsMzYuMnomI3hkOyYjeGE7JiN4OTsmI3g5OyBNODIuNCwzNC43YzAuNSwwLDEtMC4xLDEuMy0wLjRjMC40LTAuMywwLjYtMC42LDAuOC0xLjFjMC4yLTAuNSwwLjMtMSwwLjMtMS42YzAtMC42LTAuMS0xLjEtMC4zLTEuNWMtMC4yLTAuNS0wLjQtMC44LTAuOC0xLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LTAuMy0wLjgtMC40LTEuNC0wLjRjLTAuNSwwLTEsMC4xLTEuMywwLjRjLTAuMywwLjMtMC42LDAu'+
			'Ni0wLjgsMS4xYy0wLjIsMC41LTAuMiwxLTAuMiwxLjZjMCwwLjYsMC4xLDEuMSwwLjIsMS42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4yLDAuNSwwLjQsMC44LDAuOCwxLjFDODEuMywzNC42LDgxLjgsMzQuNyw4Mi40LDM0Ljd6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTkyLjEsMzYuMmMtMC45LDAtMS42LTAuMi0yLjMtMC42Yy0wLjYtMC40LTEuMS0wLjktMS41LTEuNmMtMC4zLTAuNy0wLjUtMS41LTAuNS0yLjRjMC0wLjksMC4yLTEuNywwLjUtMi40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40LTAuNywwLjgtMS4yLDEuNS0xLjZjMC42LTAuNCwxLjQtMC42LDIuMi0wLjZjMC45LDAsMS'+
			'42LDAuMiwyLjMsMC42YzAuNiwwLjQsMS4xLDAuOSwxLjUsMS42YzAuMywwLjcsMC41LDEuNSwwLjUsMi40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjktMC4yLDEuNy0wLjUsMi40Yy0wLjQsMC43LTAuOCwxLjItMS41LDEuNkM5My43LDM2LDkyLjksMzYuMiw5Mi4xLDM2LjJ6IE05Mi4xLDM0LjZjMC44LDAsMS41LTAuMywxLjktMC44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40LTAuNiwwLjYtMS4zLDAuNi0yLjJjMC0wLjktMC4yLTEuNi0wLjYtMi4yYy0wLjQtMC41LTEtMC44LTEuOS0wLjhjLTAuNiwwLTEsMC4xLTEuNCwwLjRjLTAuNCwwLjMtMC42LDAuNi0wLjgsMS4xJiN4ZDsmI3hhOyYj'+
			'eDk7JiN4OTtjLTAuMiwwLjQtMC4zLDEtMC4zLDEuNmMwLDAuOSwwLjIsMS42LDAuNiwyLjJDOTAuNiwzNC40LDkxLjIsMzQuNiw5Mi4xLDM0LjZ6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTEwMS43LDM2LjJjLTAuOCwwLTEuNS0wLjItMi4xLTAuNXMtMS0wLjktMS40LTEuNWMtMC4zLTAuNy0wLjUtMS41LTAuNi0yLjRjMC0wLjUsMC0xLDAtMS41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjYsMC4xLTEuMSwwLjItMS42YzAuMS0wLjUsMC4yLTEsMC4zLTEuM2MwLjItMC40LDAuNC0wLjcsMC42LTEuMWMwLjMtMC4zLDAuNi0wLjYsMC45LTAuOGMwLjMtMC4yLDAuNy0wLjQsMS4xLTAuNi'+
			'YjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNC0wLjEsMC45LTAuMiwxLjMtMC4zYzAuNS0wLjEsMC45LTAuMSwxLjQtMC4yYzAuNS0wLjEsMC45LTAuMSwxLjQtMC4ybDAuMiwxLjVjLTAuMywwLjEtMC42LDAuMS0xLDAuMmMtMC40LDAtMC44LDAuMS0xLjIsMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLjEtMC44LDAuMS0xLjIsMC4ycy0wLjcsMC4yLTEsMC40Yy0wLjQsMC4yLTAuNywwLjYtMC45LDEuMWMtMC4yLDAuNS0wLjMsMS0wLjQsMS41YzAuMy0wLjUsMC44LTAuOSwxLjMtMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC41LTAuMiwxLTAuMywxLjYtMC4zYzAuOCwwLDEuNCwwLjIsMiww'+
			'LjVjMC42LDAuNCwxLDAuOSwxLjMsMS41YzAuMywwLjYsMC41LDEuMywwLjUsMi4xYzAsMC45LTAuMiwxLjYtMC41LDIuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7cy0wLjgsMS4xLTEuNSwxLjVDMTAzLjIsMzYuMSwxMDIuNSwzNi4yLDEwMS43LDM2LjJ6IE0xMDEuNywzNC42YzAuOCwwLDEuNC0wLjIsMS43LTAuN2MwLjQtMC41LDAuNi0xLjEsMC42LTEuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMC44LTAuMi0xLjUtMC42LTEuOWMtMC40LTAuNS0xLTAuNy0xLjctMC43Yy0wLjgsMC0xLjMsMC4yLTEuNywwLjdjLTAuNCwwLjUtMC42LDEuMS0wLjYsMS45YzAsMC44LDAuMiwxLjUsMC42LDEuOSYjeG'+
			'Q7JiN4YTsmI3g5OyYjeDk7QzEwMC40LDM0LjQsMTAxLDM0LjYsMTAxLjcsMzQuNnoiIGNsYXNzPSJzdDIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me.__33__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me.__33__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me.__33__imgo.setAttribute('src',basePath + 'images/_33__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		ela=me.__33__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		me.__33__imga.setAttribute('src',basePath + 'images/_33__a.svg');
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="\u0413\u0430\u0440\u0434\u0435\u0440\u043e\u0431 _\u041a\u043d\u043e\u043f\u043a\u0430";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : hidden;';
		hs+='width : 156px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__33.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__33.onclick=function (e) {
			player.openNext("{node7}","");
		}
		me.__33.onmouseover=function (e) {
			me.__33__img.style.visibility='hidden';
			me.__33__imgo.style.visibility='inherit';
		}
		me.__33.onmouseout=function (e) {
			me.__33__img.style.visibility='inherit';
			me.__33__imgo.style.visibility='hidden';
			me.__33__imga.style.visibility='hidden';
		}
		me.__33.onmousedown=function (e) {
			me.__33__imga.style.visibility='inherit';
			me.__33__imgo.style.visibility='hidden';
		}
		me.__33.onmouseup=function (e) {
			me.__33__imga.style.visibility='hidden';
			if (skin.player.getHasTouch()) {
				me.__33__img.style.visibility='inherit';
			} else {
				me.__33__imgo.style.visibility='inherit';
			}
		}
		me.__33.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_background.appendChild(me.__33);
		el=me.__32=document.createElement('div');
		els=me.__32__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAyLjkgNjQ7IiB4bWxucz0iaHR0cDovL3d3dy53My'+
			'5vcmcvMjAwMC9zdmciPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNGOEY3Rjc7fSYjeGQ7Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I0Q5REZFMzt9JiN4ZDsKCS5zdDJ7ZmlsbDojMUQyMjI4O30mI3hkOwo8L3N0eWxlPgogPHJlY3QgeT0iMCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIgd2lkdGg9IjIwMi45Ii8+CiA8bGluZSB4Mj0iMC43IiB5Mj0iNjQiIGNsYXNzPSJzdDEiIHgxPSIyMDIuNyIgeTE9IjY0Ii8+CiA8Zz4KICA8cGF0aCBkPSJNMzcuMywzOGMtMS4yLDAtMi4xLTAuMy0zLTAuOGMtMC44LTAuNS0xLjQtMS4yLTEuOS0yLjFjLTAuNC0wLjktMC42'+
			'LTItMC42LTMuMnMwLjItMi4yLDAuNi0zLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQtMC45LDEuMS0xLjYsMS45LTIuMWMwLjgtMC41LDEuOC0wLjgsMy0wLjhjMS4zLDAsMi40LDAuMywzLjMsMWMwLjksMC43LDEuNSwxLjYsMS44LDIuN2wtMS43LDAuNWMtMC4yLTAuOC0wLjYtMS40LTEuMi0xLjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LTAuNS0xLjMtMC43LTIuMi0wLjdjLTAuOCwwLTEuNSwwLjItMi4xLDAuNmMtMC41LDAuNC0xLDAuOS0xLjIsMS42Yy0wLjMsMC43LTAuNCwxLjQtMC40LDIuM2MwLDAuOSwwLjEsMS43LDAuNCwyLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMsMC43LD'+
			'AuNywxLjIsMS4yLDEuNmMwLjUsMC40LDEuMiwwLjYsMi4xLDAuNmMwLjksMCwxLjctMC4yLDIuMi0wLjdjMC42LTAuNSwxLTEuMSwxLjItMS45bDEuNywwLjVjLTAuMywxLjEtMSwyLjEtMS44LDIuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7QzM5LjcsMzcuNywzOC42LDM4LDM3LjMsMzh6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTQ1LjQsMzcuOGwxLjUtM2wtNC04LjZoMS45bDMsNi44bDMuMS02LjhoMS44bC01LjQsMTEuNkg0NS40eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik02MS4zLDM4Yy0xLjIsMC0yLjEtMC4zLTMtMC44Yy0wLjgtMC41LTEuNC0xLjItMS45LTIuMXMtMC42LTIt'+
			'MC42LTMuMnMwLjItMi4yLDAuNi0zLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQtMC45LDEuMS0xLjYsMS45LTIuMWMwLjgtMC41LDEuOC0wLjgsMy0wLjhjMS4zLDAsMi40LDAuMywzLjMsMWMwLjksMC43LDEuNSwxLjYsMS44LDIuN2wtMS43LDAuNWMtMC4yLTAuOC0wLjYtMS40LTEuMi0xLjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LTAuNS0xLjMtMC43LTIuMi0wLjdjLTAuOCwwLTEuNSwwLjItMi4xLDAuNmMtMC41LDAuNC0xLDAuOS0xLjIsMS42Yy0wLjMsMC43LTAuNCwxLjQtMC40LDIuM2MwLDAuOSwwLjEsMS43LDAuNCwyLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMsMC43LDAuNy'+
			'wxLjIsMS4yLDEuNmMwLjUsMC40LDEuMiwwLjYsMi4xLDAuNmMwLjksMCwxLjctMC4yLDIuMi0wLjdjMC42LTAuNSwxLTEuMSwxLjItMS45bDEuNywwLjVjLTAuMywxLjEtMSwyLjEtMS44LDIuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7QzYzLjcsMzcuNyw2Mi42LDM4LDYxLjMsMzh6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTY4LjIsMzcuOHYtOC43aDcuM3Y4LjdoLTEuN3YtNy4xaC00djcuMUg2OC4yeiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik04MC4yLDM4Yy0wLjYsMC0xLjItMC4xLTEuNi0wLjRjLTAuNC0wLjItMC44LTAuNi0xLTAuOWMtMC4yLTAuNC0wLjMtMC44LTAuMy0xLjNj'+
			'MC0wLjQsMC4xLTAuOCwwLjItMS4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4yLTAuMywwLjQtMC42LDAuNy0wLjhjMC4zLTAuMiwwLjctMC40LDEuMS0wLjZjMC40LTAuMSwwLjgtMC4yLDEuMy0wLjNjMC41LTAuMSwxLTAuMiwxLjUtMC4yYzAuNS0wLjEsMS4xLTAuMiwxLjYtMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTAuNiwwLjNjMC0wLjctMC4xLTEuMi0wLjQtMS41Yy0wLjMtMC4zLTAuOC0wLjUtMS41LTAuNWMtMC41LDAtMC45LDAuMS0xLjMsMC4zYy0wLjQsMC4yLTAuNiwwLjYtMC44LDFsLTEuNi0wLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjItMC43LDAuNi0xLjMsMS4yLTEuOGMwLj'+
			'YtMC40LDEuNC0wLjcsMi40LTAuN2MwLjgsMCwxLjUsMC4xLDIsMC40YzAuNiwwLjMsMSwwLjcsMS4zLDEuM2MwLjEsMC4zLDAuMiwwLjYsMC4zLDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC4zLDAsMC43LDAsMXY1LjNoLTEuNXYtMmwwLjMsMC4zYy0wLjQsMC43LTAuOCwxLjItMS40LDEuNUM4MS43LDM3LjksODEsMzgsODAuMiwzOHogTTgwLjUsMzYuN2MwLjUsMCwwLjktMC4xLDEuMi0wLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMtMC4yLDAuNi0wLjQsMC44LTAuNmMwLjItMC4zLDAuMy0wLjUsMC40LTAuOGMwLjEtMC4zLDAuMS0wLjUsMC4yLTAuOWMwLTAuMywwLTAuNiwwLTAuOGww'+
			'LjUsMC4yYy0wLjUsMC4xLTEsMC4yLTEuNCwwLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDAuMS0wLjgsMC4xLTEuMiwwLjJjLTAuNCwwLjEtMC43LDAuMS0wLjksMC4yYy0wLjIsMC4xLTAuNCwwLjItMC42LDAuM2MtMC4yLDAuMS0wLjMsMC4yLTAuNCwwLjRjLTAuMSwwLjItMC4yLDAuNC0wLjIsMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjIsMC4xLDAuNCwwLjIsMC42YzAuMSwwLjIsMC4zLDAuMywwLjUsMC41Qzc5LjgsMzYuNiw4MC4xLDM2LjcsODAuNSwzNi43eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik04Ni4xLDM3Ljh2LTEuNGMwLjMsMC4xLDAuNiwwLDAuNywwYzAuMi'+
			'0wLjEsMC4zLTAuMiwwLjQtMC40YzAuMS0wLjIsMC4yLTAuNSwwLjItMC44YzAuMS0wLjUsMC4yLTEsMC4yLTEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMS0wLjYsMC4xLTEuMywwLjItMmMwLjEtMC43LDAuMS0xLjUsMC4xLTIuM2g2LjJ2OC43aC0xLjd2LTcuMWgtM2MwLDAuNC0wLjEsMC45LTAuMSwxLjNjMCwwLjUtMC4xLDAuOS0wLjEsMS40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjUtMC4xLDAuOS0wLjIsMS4zYy0wLjEsMC40LTAuMSwwLjgtMC4yLDFjLTAuMSwwLjYtMC4zLDEtMC41LDEuNGMtMC4yLDAuMy0wLjUsMC42LTAuOSwwLjdDODcuMiwzNy45LDg2LjcsMzcuOSw4Ni4xLDM3'+
			'Ljh6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTk2LjUsMzcuOHYtOC43aDEuN3YzaDEuN2MwLjIsMCwwLjUsMCwwLjgsMGMwLjMsMCwwLjUsMCwwLjcsMC4xYzAuNSwwLjEsMC45LDAuMywxLjIsMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMiwwLjYsMC41LDAuOCwwLjljMC4yLDAuNCwwLjMsMC44LDAuMywxLjRjMCwwLjgtMC4yLDEuNC0wLjYsMS44Yy0wLjQsMC40LTAuOSwwLjctMS42LDAuOWMtMC4yLDAtMC41LDAuMS0wLjgsMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMywwLTAuNiwwLTAuOCwwSDk2LjV6IE05OC4yLDM2LjRoMS45YzAuMSwwLDAuMywwLDAuNSwwYzAuMi'+
			'wwLDAuMywwLDAuNS0wLjFjMC4zLTAuMSwwLjUtMC4yLDAuNy0wLjVjMC4yLTAuMiwwLjMtMC41LDAuMy0wLjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuNC0wLjEtMC43LTAuMy0wLjljLTAuMi0wLjItMC41LTAuNC0wLjgtMC41Yy0wLjEsMC0wLjMtMC4xLTAuNC0wLjFjLTAuMiwwLTAuMywwLTAuNCwwaC0xLjlWMzYuNHoiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNMTA1LjIsMzcuOHYtOC43aDEuN3YzLjVoNC4ydi0zLjVoMS43djguN2gtMS43di0zLjZoLTQuMnYzLjZIMTA1LjJ6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTExNC42LDM3LjhsMi4yLTMuNGgxLjhsLTIuMiwzLjRI'+
			'MTE0LjZ6IE0xMjAuMywzNy44di0zaC0xLjdjLTAuMiwwLTAuNCwwLTAuNywwYy0wLjMsMC0wLjUsMC0wLjgtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNi0wLjEtMS4yLTAuNC0xLjYtMC44Yy0wLjQtMC40LTAuNy0xLjEtMC43LTEuOWMwLTAuOCwwLjItMS40LDAuNi0xLjhjMC40LTAuNSwwLjktMC44LDEuNi0wLjljMC4zLTAuMSwwLjYtMC4xLDAuOC0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMsMCwwLjUsMCwwLjcsMGgzLjRsMCw4LjdIMTIwLjN6IE0xMTguNSwzMy40aDEuOXYtM2gtMS45Yy0wLjEsMC0wLjMsMC0wLjQsMGMtMC4yLDAtMC4zLDAtMC41LDAuMWMtMC4yLDAtMC4zLD'+
			'AuMS0wLjUsMC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMiwwLjEtMC4zLDAuMy0wLjQsMC41Yy0wLjEsMC4yLTAuMSwwLjQtMC4xLDAuN2MwLDAuNCwwLjEsMC43LDAuMywwLjljMC4yLDAuMiwwLjUsMC40LDAuNywwLjVjMC4yLDAsMC4zLDAuMSwwLjUsMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMTE4LjIsMzMuNCwxMTguNCwzMy40LDExOC41LDMzLjR6IiBjbGFzcz0ic3QyIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me.__32__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me.__32__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		me.__32__imgo.setAttribute('src',basePath + 'images/_32__o.svg');
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		ela=me.__32__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		me.__32__imga.setAttribute('src',basePath + 'images/_32__a.svg');
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="\u0421\u0423 \u0421\u043f\u0430\u043b\u044c\u043d\u044f _\u041a\u043d\u043e\u043f\u043a\u0430";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 300px;';
		hs+='visibility : inherit;';
		hs+='width : 156px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__32.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__32.onclick=function (e) {
			player.openNext("{node13}","");
		}
		me.__32.onmouseover=function (e) {
			me.__32__img.style.visibility='hidden';
			me.__32__imgo.style.visibility='inherit';
		}
		me.__32.onmouseout=function (e) {
			me.__32__img.style.visibility='inherit';
			me.__32__imgo.style.visibility='hidden';
			me.__32__imga.style.visibility='hidden';
		}
		me.__32.onmousedown=function (e) {
			me.__32__imga.style.visibility='inherit';
			me.__32__imgo.style.visibility='hidden';
		}
		me.__32.onmouseup=function (e) {
			me.__32__imga.style.visibility='hidden';
			if (skin.player.getHasTouch()) {
				me.__32__img.style.visibility='inherit';
			} else {
				me.__32__imgo.style.visibility='inherit';
			}
		}
		me.__32.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_background.appendChild(me.__32);
		el=me.__31=document.createElement('div');
		els=me.__31__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjQuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAyLjkgNjQ7IiB4bWxucz0iaHR0cDovL3d3dy53My'+
			'5vcmcvMjAwMC9zdmciPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNGOEY3Rjc7fSYjeGQ7Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I0Q5REZFMzt9JiN4ZDsKCS5zdDJ7ZmlsbDojMUQyMjI4O30mI3hkOwo8L3N0eWxlPgogPHJlY3QgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIgd2lkdGg9IjIwMi45Ii8+CiA8bGluZSB4Mj0iMC43IiB5Mj0iNjQiIGNsYXNzPSJzdDEiIHgxPSIyMDIuNyIgeTE9IjY0Ii8+CiA8Zz4KICA8cGF0aCBkPSJNMzUuNywzNy4xYy0xLjIsMC0yLjEtMC4zLTIuOS0wLjhzLTEuNC0xLjItMS45LTIuMXMtMC42LTEuOS0wLjYtMy4xYzAtMS4y'+
			'LDAuMi0yLjIsMC42LTMuMXMxLTEuNiwxLjktMi4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtzMS44LTAuOCwyLjktMC44YzEuMywwLDIuNCwwLjMsMy4zLDFzMS41LDEuNiwxLjgsMi43bC0xLjcsMC41Yy0wLjItMC44LTAuNi0xLjQtMS4yLTEuOWMtMC42LTAuNS0xLjMtMC43LTIuMi0wLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC44LDAtMS41LDAuMi0yLDAuNmMtMC41LDAuNC0xLDAuOS0xLjIsMS41Yy0wLjMsMC43LTAuNCwxLjQtMC40LDIuM2MwLDAuOSwwLjEsMS43LDAuNCwyLjNjMC4zLDAuNywwLjcsMS4yLDEuMiwxLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjUsMC40LDEuMiwwLjYsMiwwLj'+
			'ZjMC45LDAsMS43LTAuMiwyLjItMC43YzAuNi0wLjUsMS0xLjEsMS4yLTEuOWwxLjcsMC41Yy0wLjMsMS4xLTAuOSwyLTEuOCwyLjdTMzcsMzcuMSwzNS43LDM3LjF6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTQ0LjgsMzYuOXYtNy4xaC0zdi0xLjVoNy42djEuNWgtM3Y3LjFINDQuOHoiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNNTQuNiwzNy4xYy0wLjksMC0xLjYtMC4yLTIuMi0wLjZjLTAuNi0wLjQtMS4xLTAuOS0xLjUtMS42Yy0wLjMtMC43LTAuNS0xLjUtMC41LTIuNGMwLTAuOSwwLjItMS43LDAuNS0yLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQtMC43LDAuOC0xLjIsMS41'+
			'LTEuNnMxLjQtMC42LDIuMi0wLjZjMC45LDAsMS42LDAuMiwyLjIsMC42YzAuNiwwLjQsMS4xLDAuOSwxLjUsMS42czAuNSwxLjUsMC41LDIuNGMwLDAuOS0wLjIsMS43LTAuNSwyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLDAuNy0wLjgsMS4yLTEuNSwxLjZDNTYuMiwzNi45LDU1LjQsMzcuMSw1NC42LDM3LjF6IE01NC42LDM1LjVjMC44LDAsMS40LTAuMywxLjktMC44YzAuNC0wLjYsMC42LTEuMywwLjYtMi4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjktMC4yLTEuNi0wLjYtMi4yYy0wLjQtMC41LTEtMC44LTEuOC0wLjhjLTAuNiwwLTEsMC4xLTEuNCwwLjRjLTAuNCwwLjMtMC42LD'+
			'AuNi0wLjgsMWMtMC4yLDAuNC0wLjMsMS0wLjMsMS41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjksMC4yLDEuNiwwLjYsMi4yUzUzLjcsMzUuNSw1NC42LDM1LjV6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTU5LjgsMzYuOXYtMS40YzAuMywwLjEsMC42LDAsMC43LDBjMC4yLTAuMSwwLjMtMC4yLDAuNC0wLjRjMC4xLTAuMiwwLjItMC41LDAuMi0wLjhjMC4xLTAuNSwwLjItMSwwLjItMS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4xLTAuNiwwLjEtMS4zLDAuMi0yYzAuMS0wLjcsMC4xLTEuNSwwLjEtMi4zaDYuMnY4LjZoLTEuN3YtNy4xaC0zYzAsMC40LTAuMSwwLjktMC4xLDEuM2Mw'+
			'LDAuNS0wLjEsMC45LTAuMSwxLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNS0wLjEsMC45LTAuMiwxLjNzLTAuMSwwLjgtMC4yLDFjLTAuMSwwLjYtMC4zLDEtMC41LDEuNGMtMC4yLDAuMy0wLjUsMC42LTAuOSwwLjdDNjAuOSwzNyw2MC40LDM3LDU5LjgsMzYuOXoiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNNzMuOCwzNy4xYy0wLjksMC0xLjYtMC4yLTIuMi0wLjZjLTAuNi0wLjQtMS4xLTAuOS0xLjUtMS42Yy0wLjMtMC43LTAuNS0xLjUtMC41LTIuNGMwLTAuOSwwLjItMS43LDAuNS0yLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQtMC43LDAuOC0xLjIsMS41LTEuNlM3MywyOCw3My'+
			'44LDI4YzAuOSwwLDEuNiwwLjIsMi4yLDAuNmMwLjYsMC40LDEuMSwwLjksMS41LDEuNnMwLjUsMS41LDAuNSwyLjRjMCwwLjktMC4yLDEuNy0wLjUsMi40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMywwLjctMC44LDEuMi0xLjUsMS42Qzc1LjQsMzYuOSw3NC43LDM3LjEsNzMuOCwzNy4xeiBNNzMuOCwzNS41YzAuOCwwLDEuNC0wLjMsMS45LTAuOGMwLjQtMC42LDAuNi0xLjMsMC42LTIuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMC45LTAuMi0xLjYtMC42LTIuMmMtMC40LTAuNS0xLTAuOC0xLjgtMC44Yy0wLjYsMC0xLDAuMS0xLjQsMC40Yy0wLjQsMC4zLTAuNiwwLjYtMC44LDFjLTAuMiww'+
			'LjQtMC4zLDEtMC4zLDEuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC45LDAuMiwxLjYsMC42LDIuMlM3MywzNS41LDczLjgsMzUuNXoiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNNzkuOCwzNi45di04LjZoMy44YzAuMywwLDAuNSwwLDAuOCwwYzAuMywwLDAuNSwwLjEsMC43LDAuMWMwLjQsMC4xLDAuOCwwLjQsMS4xLDAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMywwLjQsMC41LDAuOSwwLjUsMS41YzAsMC4zLTAuMSwwLjYtMC4yLDAuOWMtMC4xLDAuMi0wLjMsMC40LTAuNCwwLjZjLTAuMSwwLjEtMC4yLDAuMS0wLjMsMC4ycy0wLjIsMC4xLTAuMywwLjEmI3hkOyYjeGE7JiN4OTsmI3'+
			'g5O2MwLjIsMCwwLjQsMC4xLDAuNiwwLjJjMC4zLDAuMiwwLjUsMC40LDAuNywwLjdjMC4yLDAuMywwLjMsMC43LDAuMywxLjJjMCwwLjYtMC4xLDEuMS0wLjQsMS41cy0wLjcsMC43LTEuMiwwLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4yLDAuMS0wLjQsMC4xLTAuNywwLjFjLTAuMywwLTAuNSwwLTAuOCwwSDc5Ljh6IE04MS41LDMxLjloMS45YzAuMiwwLDAuMywwLDAuNSwwYzAuMiwwLDAuMy0wLjEsMC40LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMi0wLjEsMC40LTAuMiwwLjUtMC40YzAuMS0wLjIsMC4yLTAuNCwwLjItMC42YzAtMC4yLTAuMS0wLjUtMC4yLTAuN2MtMC4xLTAuMi0w'+
			'LjMtMC4zLTAuNS0wLjRjLTAuMi0wLjEtMC4zLTAuMS0wLjUtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMiwwLTAuMywwLTAuNCwwaC0xLjhWMzEuOXogTTgxLjUsMzUuNWgyLjRjMC4xLDAsMC4yLDAsMC40LDBjMC4xLDAsMC4zLTAuMSwwLjQtMC4xYzAuMi0wLjEsMC40LTAuMiwwLjUtMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4xLTAuMiwwLjItMC40LDAuMi0wLjZjMC0wLjMtMC4xLTAuNS0wLjItMC43cy0wLjQtMC4zLTAuNi0wLjRjLTAuMSwwLTAuMi0wLjEtMC40LTAuMXMtMC4yLDAtMC4zLDBoLTIuM1YzNS41eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik05MS4xLDM3LjFjLT'+
			'AuNiwwLTEuMi0wLjEtMS42LTAuNGMtMC40LTAuMi0wLjgtMC42LTEtMC45Yy0wLjItMC40LTAuMy0wLjgtMC4zLTEuM2MwLTAuNCwwLjEtMC44LDAuMi0xLjImI3hkOyYjeGE7JiN4OTsmI3g5O3MwLjQtMC42LDAuNy0wLjhjMC4zLTAuMiwwLjctMC40LDEuMS0wLjZjMC40LTAuMSwwLjgtMC4yLDEuMy0wLjNzMS0wLjIsMS41LTAuMmMwLjUtMC4xLDEuMS0wLjEsMS42LTAuMkw5NCwzMS41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjctMC4xLTEuMi0wLjQtMS41Yy0wLjMtMC4zLTAuOC0wLjUtMS41LTAuNWMtMC41LDAtMC45LDAuMS0xLjIsMC4zYy0wLjQsMC4yLTAuNiwwLjYtMC44LDFsLTEu'+
			'Ni0wLjVjMC4yLTAuNywwLjYtMS4zLDEuMi0xLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjYtMC40LDEuNC0wLjcsMi40LTAuN2MwLjgsMCwxLjQsMC4xLDIsMC40YzAuNiwwLjMsMSwwLjcsMS4zLDEuM2MwLjEsMC4zLDAuMiwwLjYsMC4zLDAuOXMwLDAuNywwLDF2NS4zaC0xLjV2LTJsMC4zLDAuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC43LTAuOCwxLjItMS40LDEuNUM5Mi42LDM2LjksOTEuOSwzNy4xLDkxLjEsMzcuMXogTTkxLjQsMzUuN2MwLjUsMCwwLjktMC4xLDEuMi0wLjNzMC42LTAuNCwwLjgtMC42czAuMy0wLjUsMC40LTAuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMS0wLj'+
			'MsMC4xLTAuNSwwLjItMC45YzAtMC4zLDAtMC42LDAtMC44bDAuNSwwLjJjLTAuNSwwLjEtMSwwLjItMS40LDAuMmMtMC40LDAuMS0wLjgsMC4xLTEuMiwwLjJjLTAuMywwLjEtMC43LDAuMS0wLjksMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMiwwLjEtMC40LDAuMi0wLjYsMC4zYy0wLjIsMC4xLTAuMywwLjItMC40LDAuNGMtMC4xLDAuMi0wLjIsMC40LTAuMiwwLjZjMCwwLjIsMC4xLDAuNCwwLjIsMC42YzAuMSwwLjIsMC4zLDAuMywwLjUsMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtDOTAuNywzNS43LDkxLDM1LjcsOTEuNCwzNS43eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik05Ny4z'+
			'LDM2LjlsMi4yLTMuNGgxLjhsLTIuMiwzLjRIOTcuM3ogTTEwMywzNi45di0zaC0xLjdjLTAuMiwwLTAuNCwwLTAuNywwYy0wLjMsMC0wLjUsMC0wLjgtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNi0wLjEtMS4yLTAuNC0xLjYtMC44Yy0wLjQtMC40LTAuNi0xLjEtMC42LTEuOGMwLTAuOCwwLjItMS40LDAuNi0xLjhzMC45LTAuOCwxLjYtMC45YzAuMy0wLjEsMC42LTAuMSwwLjgtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAsMC41LDAsMC43LDBoMy40bDAsOC42SDEwM3ogTTEwMS4yLDMyLjVoMS45di0zaC0xLjljLTAuMSwwLTAuMywwLTAuNCwwYy0wLjIsMC0wLjMsMC0wLjUsMC'+
			'4xYy0wLjIsMC0wLjMsMC4xLTAuNSwwLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4yLDAuMS0wLjMsMC4zLTAuNCwwLjVjLTAuMSwwLjItMC4xLDAuNC0wLjEsMC43YzAsMC40LDAuMSwwLjcsMC4zLDAuOWMwLjIsMC4yLDAuNSwwLjQsMC43LDAuNWMwLjIsMCwwLjMsMC4xLDAuNSwwLjEmI3hkOyYjeGE7JiN4OTsmI3g5O0MxMDAuOSwzMi41LDEwMS4xLDMyLjUsMTAxLjIsMzIuNXoiIGNsYXNzPSJzdDIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me.__31__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me.__31__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjQuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAyLjkgNjQ7IiB4bWxucz0iaHR0cDovL3d3dy53My'+
			'5vcmcvMjAwMC9zdmciPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNFNkU5RUM7fSYjeGQ7Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I0Q5REZFMzt9JiN4ZDsKCS5zdDJ7ZmlsbDojMUQyMjI4O30mI3hkOwo8L3N0eWxlPgogPHJlY3QgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIgd2lkdGg9IjIwMi45Ii8+CiA8bGluZSB4Mj0iMC43IiB5Mj0iNjQiIGNsYXNzPSJzdDEiIHgxPSIyMDIuNyIgeTE9IjY0Ii8+CiA8Zz4KICA8cGF0aCBkPSJNMzUuNywzN2MtMS4yLDAtMi4xLTAuMy0yLjktMC44cy0xLjQtMS4yLTEuOS0yLjFzLTAuNi0xLjktMC42LTMuMWMwLTEuMiww'+
			'LjItMi4yLDAuNi0zLjFzMS0xLjYsMS45LTIuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7czEuOC0wLjgsMi45LTAuOGMxLjMsMCwyLjQsMC4zLDMuMywxczEuNSwxLjYsMS44LDIuN2wtMS43LDAuNWMtMC4yLTAuOC0wLjYtMS40LTEuMi0xLjljLTAuNi0wLjUtMS4zLTAuNy0yLjItMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuOCwwLTEuNSwwLjItMiwwLjZjLTAuNSwwLjQtMSwwLjktMS4yLDEuNUMzMi4yLDI5LjQsMzIsMzAuMiwzMiwzMWMwLDAuOSwwLjEsMS43LDAuNCwyLjNjMC4zLDAuNywwLjcsMS4yLDEuMiwxLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjUsMC40LDEuMiwwLjYsMiwwLjZjMC'+
			'45LDAsMS43LTAuMiwyLjItMC43YzAuNi0wLjUsMS0xLjEsMS4yLTEuOWwxLjcsMC41Yy0wLjMsMS4xLTAuOSwyLTEuOCwyLjdTMzcsMzcsMzUuNywzN3oiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNNDQuOCwzNi44di03LjFoLTN2LTEuNWg3LjZ2MS41aC0zdjcuMUg0NC44eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik01NC42LDM3Yy0wLjksMC0xLjYtMC4yLTIuMi0wLjZjLTAuNi0wLjQtMS4xLTAuOS0xLjUtMS42Yy0wLjMtMC43LTAuNS0xLjUtMC41LTIuNGMwLTAuOSwwLjItMS43LDAuNS0yLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQtMC43LDAuOC0xLjIsMS41LTEuNnMxLjQt'+
			'MC42LDIuMi0wLjZjMC45LDAsMS42LDAuMiwyLjIsMC42YzAuNiwwLjQsMS4xLDAuOSwxLjUsMS42czAuNSwxLjUsMC41LDIuNGMwLDAuOS0wLjIsMS43LTAuNSwyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLDAuNy0wLjgsMS4yLTEuNSwxLjZDNTYuMiwzNi45LDU1LjQsMzcsNTQuNiwzN3ogTTU0LjYsMzUuNWMwLjgsMCwxLjQtMC4zLDEuOS0wLjhjMC40LTAuNiwwLjYtMS4zLDAuNi0yLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuOS0wLjItMS42LTAuNi0yLjJjLTAuNC0wLjUtMS0wLjgtMS44LTAuOGMtMC42LDAtMSwwLjEtMS40LDAuNGMtMC40LDAuMy0wLjYsMC42LTAuOCwxYy0wLj'+
			'IsMC40LTAuMywxLTAuMywxLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuOSwwLjIsMS42LDAuNiwyLjJTNTMuNywzNS41LDU0LjYsMzUuNXoiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNNTkuOCwzNi44di0xLjRjMC4zLDAuMSwwLjYsMCwwLjcsMGMwLjItMC4xLDAuMy0wLjIsMC40LTAuNGMwLjEtMC4yLDAuMi0wLjUsMC4yLTAuOGMwLjEtMC41LDAuMi0xLDAuMi0xLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjEtMC42LDAuMS0xLjMsMC4yLTJjMC4xLTAuNywwLjEtMS41LDAuMS0yLjNoNi4ydjguNmgtMS43di03LjFoLTNjMCwwLjQtMC4xLDAuOS0wLjEsMS4zYzAsMC41LTAuMSwwLjkt'+
			'MC4xLDEuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC41LTAuMSwwLjktMC4yLDEuM3MtMC4xLDAuOC0wLjIsMWMtMC4xLDAuNi0wLjMsMS0wLjUsMS40Yy0wLjIsMC4zLTAuNSwwLjYtMC45LDAuN0M2MC45LDM3LDYwLjQsMzYuOSw1OS44LDM2Ljh6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTczLjgsMzdjLTAuOSwwLTEuNi0wLjItMi4yLTAuNmMtMC42LTAuNC0xLjEtMC45LTEuNS0xLjZjLTAuMy0wLjctMC41LTEuNS0wLjUtMi40YzAtMC45LDAuMi0xLjcsMC41LTIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNC0wLjcsMC44LTEuMiwxLjUtMS42czEuNC0wLjYsMi4yLTAuNmMwLjksMC'+
			'wxLjYsMC4yLDIuMiwwLjZjMC42LDAuNCwxLjEsMC45LDEuNSwxLjZzMC41LDEuNSwwLjUsMi40YzAsMC45LTAuMiwxLjctMC41LDIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMsMC43LTAuOCwxLjItMS41LDEuNkM3NS40LDM2LjksNzQuNywzNyw3My44LDM3eiBNNzMuOCwzNS41YzAuOCwwLDEuNC0wLjMsMS45LTAuOGMwLjQtMC42LDAuNi0xLjMsMC42LTIuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMC45LTAuMi0xLjYtMC42LTIuMmMtMC40LTAuNS0xLTAuOC0xLjgtMC44Yy0wLjYsMC0xLDAuMS0xLjQsMC40Yy0wLjQsMC4zLTAuNiwwLjYtMC44LDFjLTAuMiwwLjQtMC4zLDEtMC4zLDEu'+
			'NSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC45LDAuMiwxLjYsMC42LDIuMlM3MywzNS41LDczLjgsMzUuNXoiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNNzkuOCwzNi44di04LjZoMy44YzAuMywwLDAuNSwwLDAuOCwwYzAuMywwLDAuNSwwLjEsMC43LDAuMWMwLjQsMC4xLDAuOCwwLjQsMS4xLDAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMywwLjQsMC41LDAuOSwwLjUsMS41YzAsMC4zLTAuMSwwLjYtMC4yLDAuOWMtMC4xLDAuMi0wLjMsMC40LTAuNCwwLjZjLTAuMSwwLjEtMC4yLDAuMS0wLjMsMC4ycy0wLjIsMC4xLTAuMywwLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjIsMCwwLjQsMC'+
			'4xLDAuNiwwLjJjMC4zLDAuMiwwLjUsMC40LDAuNywwLjdjMC4yLDAuMywwLjMsMC43LDAuMywxLjJjMCwwLjYtMC4xLDEuMS0wLjQsMS41cy0wLjcsMC43LTEuMiwwLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4yLDAuMS0wLjQsMC4xLTAuNywwLjFjLTAuMywwLTAuNSwwLTAuOCwwSDc5Ljh6IE04MS41LDMxLjhoMS45YzAuMiwwLDAuMywwLDAuNSwwYzAuMiwwLDAuMy0wLjEsMC40LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMi0wLjEsMC40LTAuMiwwLjUtMC40YzAuMS0wLjIsMC4yLTAuNCwwLjItMC42YzAtMC4yLTAuMS0wLjUtMC4yLTAuN2MtMC4xLTAuMi0wLjMtMC4zLTAuNS0wLjRj'+
			'LTAuMi0wLjEtMC4zLTAuMS0wLjUtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMiwwLTAuMywwLTAuNCwwaC0xLjhWMzEuOHogTTgxLjUsMzUuNWgyLjRjMC4xLDAsMC4yLDAsMC40LDBjMC4xLDAsMC4zLTAuMSwwLjQtMC4xYzAuMi0wLjEsMC40LTAuMiwwLjUtMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4xLTAuMiwwLjItMC40LDAuMi0wLjZjMC0wLjMtMC4xLTAuNS0wLjItMC43cy0wLjQtMC4zLTAuNi0wLjRjLTAuMSwwLTAuMi0wLjEtMC40LTAuMXMtMC4yLDAtMC4zLDBoLTIuM1YzNS41eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik05MS4xLDM3Yy0wLjYsMC0xLjItMC4xLTEuNi'+
			'0wLjRjLTAuNC0wLjItMC44LTAuNi0xLTAuOWMtMC4yLTAuNC0wLjMtMC44LTAuMy0xLjNjMC0wLjQsMC4xLTAuOCwwLjItMS4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtzMC40LTAuNiwwLjctMC44YzAuMy0wLjIsMC43LTAuNCwxLjEtMC42YzAuNC0wLjEsMC44LTAuMiwxLjMtMC4zczEtMC4yLDEuNS0wLjJjMC41LTAuMSwxLjEtMC4xLDEuNi0wLjJMOTQsMzEuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMC43LTAuMS0xLjItMC40LTEuNWMtMC4zLTAuMy0wLjgtMC41LTEuNS0wLjVjLTAuNSwwLTAuOSwwLjEtMS4yLDAuM2MtMC40LDAuMi0wLjYsMC42LTAuOCwxbC0xLjYtMC41YzAuMi0wLjcsMC42'+
			'LTEuMywxLjItMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42LTAuNCwxLjQtMC43LDIuNC0wLjdjMC44LDAsMS40LDAuMSwyLDAuNGMwLjYsMC4zLDEsMC43LDEuMywxLjNjMC4xLDAuMywwLjIsMC42LDAuMywwLjlzMCwwLjcsMCwxdjUuM2gtMS41di0ybDAuMywwLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDAuNy0wLjgsMS4yLTEuNCwxLjVDOTIuNiwzNi45LDkxLjksMzcsOTEuMSwzN3ogTTkxLjQsMzUuN2MwLjUsMCwwLjktMC4xLDEuMi0wLjNzMC42LTAuNCwwLjgtMC42czAuMy0wLjUsMC40LTAuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMS0wLjMsMC4xLTAuNSwwLjItMC45YzAtMC'+
			'4zLDAtMC42LDAtMC44bDAuNSwwLjJjLTAuNSwwLjEtMSwwLjItMS40LDAuMmMtMC40LDAuMS0wLjgsMC4xLTEuMiwwLjJjLTAuMywwLjEtMC43LDAuMS0wLjksMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMiwwLjEtMC40LDAuMi0wLjYsMC4zYy0wLjIsMC4xLTAuMywwLjItMC40LDAuNGMtMC4xLDAuMi0wLjIsMC40LTAuMiwwLjZjMCwwLjIsMC4xLDAuNCwwLjIsMC42YzAuMSwwLjIsMC4zLDAuMywwLjUsMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtDOTAuNywzNS42LDkxLDM1LjcsOTEuNCwzNS43eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik05Ny4zLDM2LjhsMi4yLTMuNGgxLjhsLTIu'+
			'MiwzLjRIOTcuM3ogTTEwMywzNi44di0zaC0xLjdjLTAuMiwwLTAuNCwwLTAuNywwYy0wLjMsMC0wLjUsMC0wLjgtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNi0wLjEtMS4yLTAuNC0xLjYtMC44Yy0wLjQtMC40LTAuNi0xLjEtMC42LTEuOGMwLTAuOCwwLjItMS40LDAuNi0xLjhzMC45LTAuOCwxLjYtMC45YzAuMy0wLjEsMC42LTAuMSwwLjgtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAsMC41LDAsMC43LDBoMy40bDAsOC42SDEwM3ogTTEwMS4yLDMyLjVoMS45di0zaC0xLjljLTAuMSwwLTAuMywwLTAuNCwwYy0wLjIsMC0wLjMsMC0wLjUsMC4xYy0wLjIsMC0wLjMsMC4xLTAuNS'+
			'wwLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4yLDAuMS0wLjMsMC4zLTAuNCwwLjVjLTAuMSwwLjItMC4xLDAuNC0wLjEsMC43YzAsMC40LDAuMSwwLjcsMC4zLDAuOWMwLjIsMC4yLDAuNSwwLjQsMC43LDAuNWMwLjIsMCwwLjMsMC4xLDAuNSwwLjEmI3hkOyYjeGE7JiN4OTsmI3g5O0MxMDAuOSwzMi41LDEwMS4xLDMyLjUsMTAxLjIsMzIuNXoiIGNsYXNzPSJzdDIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me.__31__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		ela=me.__31__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjQuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAyLjkgNjQ7IiB4bWxucz0iaHR0cDovL3d3dy53My'+
			'5vcmcvMjAwMC9zdmciPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNFNkU5RUM7fSYjeGQ7Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I0Q5REZFMzt9JiN4ZDsKCS5zdDJ7ZmlsbDojMUQyMjI4O30mI3hkOwo8L3N0eWxlPgogPHJlY3QgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIgd2lkdGg9IjIwMi45Ii8+CiA8bGluZSB4Mj0iMC43IiB5Mj0iNjQiIGNsYXNzPSJzdDEiIHgxPSIyMDIuNyIgeTE9IjY0Ii8+CiA8Zz4KICA8cGF0aCBkPSJNMzUuNywzN2MtMS4yLDAtMi4xLTAuMy0yLjktMC44cy0xLjQtMS4yLTEuOS0yLjFzLTAuNi0xLjktMC42LTMuMWMwLTEuMiww'+
			'LjItMi4yLDAuNi0zLjFzMS0xLjYsMS45LTIuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7czEuOC0wLjgsMi45LTAuOGMxLjMsMCwyLjQsMC4zLDMuMywxczEuNSwxLjYsMS44LDIuN2wtMS43LDAuNWMtMC4yLTAuOC0wLjYtMS40LTEuMi0xLjljLTAuNi0wLjUtMS4zLTAuNy0yLjItMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuOCwwLTEuNSwwLjItMiwwLjZjLTAuNSwwLjQtMSwwLjktMS4yLDEuNUMzMi4yLDI5LjQsMzIsMzAuMiwzMiwzMWMwLDAuOSwwLjEsMS43LDAuNCwyLjNjMC4zLDAuNywwLjcsMS4yLDEuMiwxLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjUsMC40LDEuMiwwLjYsMiwwLjZjMC'+
			'45LDAsMS43LTAuMiwyLjItMC43YzAuNi0wLjUsMS0xLjEsMS4yLTEuOWwxLjcsMC41Yy0wLjMsMS4xLTAuOSwyLTEuOCwyLjdTMzcsMzcsMzUuNywzN3oiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNNDQuOCwzNi44di03LjFoLTN2LTEuNWg3LjZ2MS41aC0zdjcuMUg0NC44eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik01NC42LDM3Yy0wLjksMC0xLjYtMC4yLTIuMi0wLjZjLTAuNi0wLjQtMS4xLTAuOS0xLjUtMS42Yy0wLjMtMC43LTAuNS0xLjUtMC41LTIuNGMwLTAuOSwwLjItMS43LDAuNS0yLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQtMC43LDAuOC0xLjIsMS41LTEuNnMxLjQt'+
			'MC42LDIuMi0wLjZjMC45LDAsMS42LDAuMiwyLjIsMC42YzAuNiwwLjQsMS4xLDAuOSwxLjUsMS42czAuNSwxLjUsMC41LDIuNGMwLDAuOS0wLjIsMS43LTAuNSwyLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLDAuNy0wLjgsMS4yLTEuNSwxLjZDNTYuMiwzNi45LDU1LjQsMzcsNTQuNiwzN3ogTTU0LjYsMzUuNWMwLjgsMCwxLjQtMC4zLDEuOS0wLjhjMC40LTAuNiwwLjYtMS4zLDAuNi0yLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuOS0wLjItMS42LTAuNi0yLjJjLTAuNC0wLjUtMS0wLjgtMS44LTAuOGMtMC42LDAtMSwwLjEtMS40LDAuNGMtMC40LDAuMy0wLjYsMC42LTAuOCwxYy0wLj'+
			'IsMC40LTAuMywxLTAuMywxLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuOSwwLjIsMS42LDAuNiwyLjJTNTMuNywzNS41LDU0LjYsMzUuNXoiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNNTkuOCwzNi44di0xLjRjMC4zLDAuMSwwLjYsMCwwLjcsMGMwLjItMC4xLDAuMy0wLjIsMC40LTAuNGMwLjEtMC4yLDAuMi0wLjUsMC4yLTAuOGMwLjEtMC41LDAuMi0xLDAuMi0xLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjEtMC42LDAuMS0xLjMsMC4yLTJjMC4xLTAuNywwLjEtMS41LDAuMS0yLjNoNi4ydjguNmgtMS43di03LjFoLTNjMCwwLjQtMC4xLDAuOS0wLjEsMS4zYzAsMC41LTAuMSwwLjkt'+
			'MC4xLDEuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC41LTAuMSwwLjktMC4yLDEuM3MtMC4xLDAuOC0wLjIsMWMtMC4xLDAuNi0wLjMsMS0wLjUsMS40Yy0wLjIsMC4zLTAuNSwwLjYtMC45LDAuN0M2MC45LDM3LDYwLjQsMzYuOSw1OS44LDM2Ljh6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTczLjgsMzdjLTAuOSwwLTEuNi0wLjItMi4yLTAuNmMtMC42LTAuNC0xLjEtMC45LTEuNS0xLjZjLTAuMy0wLjctMC41LTEuNS0wLjUtMi40YzAtMC45LDAuMi0xLjcsMC41LTIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNC0wLjcsMC44LTEuMiwxLjUtMS42czEuNC0wLjYsMi4yLTAuNmMwLjksMC'+
			'wxLjYsMC4yLDIuMiwwLjZjMC42LDAuNCwxLjEsMC45LDEuNSwxLjZzMC41LDEuNSwwLjUsMi40YzAsMC45LTAuMiwxLjctMC41LDIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMsMC43LTAuOCwxLjItMS41LDEuNkM3NS40LDM2LjksNzQuNywzNyw3My44LDM3eiBNNzMuOCwzNS41YzAuOCwwLDEuNC0wLjMsMS45LTAuOGMwLjQtMC42LDAuNi0xLjMsMC42LTIuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMC45LTAuMi0xLjYtMC42LTIuMmMtMC40LTAuNS0xLTAuOC0xLjgtMC44Yy0wLjYsMC0xLDAuMS0xLjQsMC40Yy0wLjQsMC4zLTAuNiwwLjYtMC44LDFjLTAuMiwwLjQtMC4zLDEtMC4zLDEu'+
			'NSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC45LDAuMiwxLjYsMC42LDIuMlM3MywzNS41LDczLjgsMzUuNXoiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNNzkuOCwzNi44di04LjZoMy44YzAuMywwLDAuNSwwLDAuOCwwYzAuMywwLDAuNSwwLjEsMC43LDAuMWMwLjQsMC4xLDAuOCwwLjQsMS4xLDAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMywwLjQsMC41LDAuOSwwLjUsMS41YzAsMC4zLTAuMSwwLjYtMC4yLDAuOWMtMC4xLDAuMi0wLjMsMC40LTAuNCwwLjZjLTAuMSwwLjEtMC4yLDAuMS0wLjMsMC4ycy0wLjIsMC4xLTAuMywwLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjIsMCwwLjQsMC'+
			'4xLDAuNiwwLjJjMC4zLDAuMiwwLjUsMC40LDAuNywwLjdjMC4yLDAuMywwLjMsMC43LDAuMywxLjJjMCwwLjYtMC4xLDEuMS0wLjQsMS41cy0wLjcsMC43LTEuMiwwLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4yLDAuMS0wLjQsMC4xLTAuNywwLjFjLTAuMywwLTAuNSwwLTAuOCwwSDc5Ljh6IE04MS41LDMxLjhoMS45YzAuMiwwLDAuMywwLDAuNSwwYzAuMiwwLDAuMy0wLjEsMC40LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMi0wLjEsMC40LTAuMiwwLjUtMC40YzAuMS0wLjIsMC4yLTAuNCwwLjItMC42YzAtMC4yLTAuMS0wLjUtMC4yLTAuN2MtMC4xLTAuMi0wLjMtMC4zLTAuNS0wLjRj'+
			'LTAuMi0wLjEtMC4zLTAuMS0wLjUtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMiwwLTAuMywwLTAuNCwwaC0xLjhWMzEuOHogTTgxLjUsMzUuNWgyLjRjMC4xLDAsMC4yLDAsMC40LDBjMC4xLDAsMC4zLTAuMSwwLjQtMC4xYzAuMi0wLjEsMC40LTAuMiwwLjUtMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4xLTAuMiwwLjItMC40LDAuMi0wLjZjMC0wLjMtMC4xLTAuNS0wLjItMC43cy0wLjQtMC4zLTAuNi0wLjRjLTAuMSwwLTAuMi0wLjEtMC40LTAuMXMtMC4yLDAtMC4zLDBoLTIuM1YzNS41eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik05MS4xLDM3Yy0wLjYsMC0xLjItMC4xLTEuNi'+
			'0wLjRjLTAuNC0wLjItMC44LTAuNi0xLTAuOWMtMC4yLTAuNC0wLjMtMC44LTAuMy0xLjNjMC0wLjQsMC4xLTAuOCwwLjItMS4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtzMC40LTAuNiwwLjctMC44YzAuMy0wLjIsMC43LTAuNCwxLjEtMC42YzAuNC0wLjEsMC44LTAuMiwxLjMtMC4zczEtMC4yLDEuNS0wLjJjMC41LTAuMSwxLjEtMC4xLDEuNi0wLjJMOTQsMzEuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMC43LTAuMS0xLjItMC40LTEuNWMtMC4zLTAuMy0wLjgtMC41LTEuNS0wLjVjLTAuNSwwLTAuOSwwLjEtMS4yLDAuM2MtMC40LDAuMi0wLjYsMC42LTAuOCwxbC0xLjYtMC41YzAuMi0wLjcsMC42'+
			'LTEuMywxLjItMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42LTAuNCwxLjQtMC43LDIuNC0wLjdjMC44LDAsMS40LDAuMSwyLDAuNGMwLjYsMC4zLDEsMC43LDEuMywxLjNjMC4xLDAuMywwLjIsMC42LDAuMywwLjlzMCwwLjcsMCwxdjUuM2gtMS41di0ybDAuMywwLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDAuNy0wLjgsMS4yLTEuNCwxLjVDOTIuNiwzNi45LDkxLjksMzcsOTEuMSwzN3ogTTkxLjQsMzUuN2MwLjUsMCwwLjktMC4xLDEuMi0wLjNzMC42LTAuNCwwLjgtMC42czAuMy0wLjUsMC40LTAuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMS0wLjMsMC4xLTAuNSwwLjItMC45YzAtMC'+
			'4zLDAtMC42LDAtMC44bDAuNSwwLjJjLTAuNSwwLjEtMSwwLjItMS40LDAuMmMtMC40LDAuMS0wLjgsMC4xLTEuMiwwLjJjLTAuMywwLjEtMC43LDAuMS0wLjksMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMiwwLjEtMC40LDAuMi0wLjYsMC4zYy0wLjIsMC4xLTAuMywwLjItMC40LDAuNGMtMC4xLDAuMi0wLjIsMC40LTAuMiwwLjZjMCwwLjIsMC4xLDAuNCwwLjIsMC42YzAuMSwwLjIsMC4zLDAuMywwLjUsMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtDOTAuNywzNS42LDkxLDM1LjcsOTEuNCwzNS43eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik05Ny4zLDM2LjhsMi4yLTMuNGgxLjhsLTIu'+
			'MiwzLjRIOTcuM3ogTTEwMywzNi44di0zaC0xLjdjLTAuMiwwLTAuNCwwLTAuNywwYy0wLjMsMC0wLjUsMC0wLjgtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNi0wLjEtMS4yLTAuNC0xLjYtMC44Yy0wLjQtMC40LTAuNi0xLjEtMC42LTEuOGMwLTAuOCwwLjItMS40LDAuNi0xLjhzMC45LTAuOCwxLjYtMC45YzAuMy0wLjEsMC42LTAuMSwwLjgtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAsMC41LDAsMC43LDBoMy40bDAsOC42SDEwM3ogTTEwMS4yLDMyLjVoMS45di0zaC0xLjljLTAuMSwwLTAuMywwLTAuNCwwYy0wLjIsMC0wLjMsMC0wLjUsMC4xYy0wLjIsMC0wLjMsMC4xLTAuNS'+
			'wwLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4yLDAuMS0wLjMsMC4zLTAuNCwwLjVjLTAuMSwwLjItMC4xLDAuNC0wLjEsMC43YzAsMC40LDAuMSwwLjcsMC4zLDAuOWMwLjIsMC4yLDAuNSwwLjQsMC43LDAuNWMwLjIsMCwwLjMsMC4xLDAuNSwwLjEmI3hkOyYjeGE7JiN4OTsmI3g5O0MxMDAuOSwzMi41LDEwMS4xLDMyLjUsMTAxLjIsMzIuNXoiIGNsYXNzPSJzdDIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me.__31__imga.setAttribute('src',hs);
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="\u0421\u0442\u043e\u043b\u043e\u0432\u0430\u044f _\u041a\u043d\u043e\u043f\u043a\u0430";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 156px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__31.onclick=function (e) {
			player.openNext("{node14}","");
		}
		me.__31.onmouseover=function (e) {
			me.__31__img.style.visibility='hidden';
			me.__31__imgo.style.visibility='inherit';
		}
		me.__31.onmouseout=function (e) {
			me.__31__img.style.visibility='inherit';
			me.__31__imgo.style.visibility='hidden';
			me.__31__imga.style.visibility='hidden';
		}
		me.__31.onmousedown=function (e) {
			me.__31__imga.style.visibility='inherit';
			me.__31__imgo.style.visibility='hidden';
		}
		me.__31.onmouseup=function (e) {
			me.__31__imga.style.visibility='hidden';
			if (skin.player.getHasTouch()) {
				me.__31__img.style.visibility='inherit';
			} else {
				me.__31__imgo.style.visibility='inherit';
			}
		}
		me.__31.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_background.appendChild(me.__31);
		el=me.__30=document.createElement('div');
		els=me.__30__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAyLjkgNjQ7IiB4bWxucz0iaHR0cDovL3d3dy53My'+
			'5vcmcvMjAwMC9zdmciPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNGOEY3Rjc7fSYjeGQ7Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I0Q5REZFMzt9JiN4ZDsKCS5zdDJ7ZmlsbDojMUQyMjI4O30mI3hkOwo8L3N0eWxlPgogPHJlY3QgeT0iMCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIgd2lkdGg9IjIwMi45Ii8+CiA8bGluZSB4Mj0iMC40IiB5Mj0iNjQiIGNsYXNzPSJzdDEiIHgxPSIyMDIuNCIgeTE9IjY0Ii8+CiA8Zz4KICA8cGF0aCBkPSJNMzcuOCwzNy43Yy0xLjEsMC0yLjEtMC4yLTIuOC0wLjdjLTAuOC0wLjUtMS40LTEuMi0xLjgtMmMtMC40LTAuOS0w'+
			'LjYtMS45LTAuNi0zYzAtMS4xLDAuMi0yLjIsMC42LTMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQtMC45LDEtMS41LDEuOC0yczEuNy0wLjcsMi44LTAuN2MxLjMsMCwyLjMsMC4zLDMuMiwxYzAuOCwwLjYsMS40LDEuNSwxLjgsMi42bC0xLjYsMC40Yy0wLjItMC44LTAuNi0xLjQtMS4yLTEuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjYtMC40LTEuMy0wLjctMi4yLTAuN2MtMC44LDAtMS40LDAuMi0yLDAuNWMtMC41LDAuNC0wLjksMC45LTEuMiwxLjVzLTAuNCwxLjQtMC40LDIuMmMwLDAuOSwwLjEsMS42LDAuNCwyLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMsMC42LDAuNywxLjEsMS4yLD'+
			'EuNXMxLjIsMC41LDIsMC41YzAuOSwwLDEuNi0wLjIsMi4yLTAuN2MwLjYtMC40LDAuOS0xLjEsMS4yLTEuOGwxLjYsMC40Yy0wLjMsMS4xLTAuOSwyLTEuOCwyLjYmI3hkOyYjeGE7JiN4OTsmI3g5O0M0MC4yLDM3LjQsMzkuMSwzNy43LDM3LjgsMzcuN3oiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNNDQuNywzNy41di04LjNoN3Y4LjNoLTEuNnYtNi44aC0zLjh2Ni44SDQ0Ljd6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTU2LjQsMzcuN2MtMC42LDAtMS4xLTAuMS0xLjYtMC4zYy0wLjQtMC4yLTAuNy0wLjUtMC45LTAuOXMtMC4zLTAuOC0wLjMtMS4yczAuMS0wLjgsMC4yLTEuMSYj'+
			'eGQ7JiN4YTsmI3g5OyYjeDk7YzAuMS0wLjMsMC40LTAuNiwwLjctMC44czAuNy0wLjQsMS4xLTAuNWMwLjQtMC4xLDAuOC0wLjIsMS4zLTAuM3MxLTAuMiwxLjUtMC4yYzAuNS0wLjEsMS0wLjEsMS41LTAuMmwtMC42LDAuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMC43LTAuMS0xLjEtMC40LTEuNWMtMC4zLTAuMy0wLjgtMC41LTEuNS0wLjVjLTAuNCwwLTAuOCwwLjEtMS4yLDAuM2MtMC40LDAuMi0wLjYsMC41LTAuOCwxbC0xLjUtMC41YzAuMi0wLjcsMC42LTEuMywxLjItMS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42LTAuNCwxLjQtMC42LDIuMy0wLjZjMC43LDAsMS40LDAuMSwyLDAuNH'+
			'MxLDAuNywxLjIsMS4yYzAuMSwwLjMsMC4yLDAuNiwwLjIsMC45czAsMC42LDAsMXY1LjFoLTEuNHYtMS45bDAuMywwLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLDAuNi0wLjgsMS4xLTEuMywxLjRDNTcuOCwzNy42LDU3LjIsMzcuNyw1Ni40LDM3Ljd6IE01Ni43LDM2LjRjMC41LDAsMC45LTAuMSwxLjItMC4yYzAuMy0wLjIsMC42LTAuNCwwLjgtMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtzMC4zLTAuNSwwLjQtMC44YzAuMS0wLjIsMC4xLTAuNSwwLjItMC44YzAtMC4zLDAtMC42LDAtMC43bDAuNSwwLjJjLTAuNSwwLjEtMSwwLjEtMS40LDAuMmMtMC40LDAuMS0wLjgsMC4xLTEuMSwwLjIm'+
			'I3hkOyYjeGE7JiN4OTsmI3g5O0M1NywzNCw1Ni43LDM0LDU2LjQsMzQuMWMtMC4yLDAuMS0wLjQsMC4yLTAuNiwwLjNzLTAuMywwLjItMC40LDAuNGMtMC4xLDAuMi0wLjIsMC4zLTAuMiwwLjZjMCwwLjIsMC4xLDAuNCwwLjIsMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4xLDAuMiwwLjMsMC4zLDAuNSwwLjRDNTYuMSwzNi40LDU2LjMsMzYuNCw1Ni43LDM2LjR6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTYyLjMsMzcuNXYtMS40YzAuMywwLjEsMC41LDAsMC43LDBzMC4zLTAuMiwwLjQtMC40YzAuMS0wLjIsMC4xLTAuNSwwLjItMC44YzAuMS0wLjUsMC4yLTEsMC4yLTEuNiYjeGQ7Ji'+
			'N4YTsmI3g5OyYjeDk7YzAuMS0wLjYsMC4xLTEuMywwLjItMnMwLjEtMS40LDAuMS0yLjJoNnY4LjNoLTEuNnYtNi44aC0yLjljMCwwLjQtMC4xLDAuOC0wLjEsMS4zcy0wLjEsMC45LTAuMSwxLjRjMCwwLjQtMC4xLDAuOS0wLjEsMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMSwwLjQtMC4xLDAuNy0wLjIsMWMtMC4xLDAuNi0wLjMsMS0wLjUsMS4zcy0wLjUsMC41LTAuOCwwLjZDNjMuMywzNy43LDYyLjksMzcuNiw2Mi4zLDM3LjV6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTcyLjQsMzcuNXYtOC4zSDc0djIuOWgxLjZjMC4yLDAsMC41LDAsMC44LDBzMC41LDAsMC43LDAuMWMwLjQs'+
			'MC4xLDAuOCwwLjIsMS4yLDAuNWMwLjMsMC4yLDAuNiwwLjUsMC44LDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMiwwLjQsMC4zLDAuOCwwLjMsMS4zYzAsMC43LTAuMiwxLjMtMC42LDEuN3MtMC45LDAuNy0xLjUsMC45Yy0wLjIsMC0wLjQsMC4xLTAuNywwLjFjLTAuMywwLTAuNSwwLTAuOCwwaC0zLjRWMzcuNXogTTc0LDM2LjImI3hkOyYjeGE7JiN4OTsmI3g5O2gxLjhjMC4xLDAsMC4zLDAsMC40LDBjMC4yLDAsMC4zLDAsMC41LTAuMXMwLjUtMC4yLDAuNy0wLjRzMC4zLTAuNSwwLjMtMC45cy0wLjEtMC43LTAuMy0wLjljLTAuMi0wLjItMC40LTAuNC0wLjctMC40JiN4ZDsmI3hhOyYjeD'+
			'k7JiN4OTtjLTAuMSwwLTAuMy0wLjEtMC40LTAuMXMtMC4zLDAtMC40LDBINzRWMzYuMnoiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNODEsMzcuNXYtOC4zaDEuNnYzLjRoNC4xdi0zLjRoMS42djguM2gtMS42di0zLjRoLTQuMXYzLjRDODIuNiwzNy41LDgxLDM3LjUsODEsMzcuNXoiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNOTAuMiwzNy41bDIuMS0zLjNIOTRsLTIuMSwzLjNIOTAuMnogTTk1LjcsMzcuNXYtMi45SDk0Yy0wLjIsMC0wLjQsMC0wLjcsMGMtMC4zLDAtMC41LDAtMC44LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjYtMC4xLTEuMS0wLjQtMS42LTAuOGMtMC40LTAu'+
			'NC0wLjYtMS0wLjYtMS44YzAtMC43LDAuMi0xLjMsMC42LTEuOGMwLjQtMC40LDAuOS0wLjcsMS41LTAuOWMwLjMtMC4xLDAuNS0wLjEsMC44LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7czAuNSwwLDAuNywwaDMuM3Y4LjNMOTUuNywzNy41TDk1LjcsMzcuNXogTTkzLjksMzMuM2gxLjh2LTIuOWgtMS44Yy0wLjEsMC0wLjMsMC0wLjQsMGMtMC4yLDAtMC4zLDAtMC41LDAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjIsMC0wLjMsMC4xLTAuNSwwLjJjLTAuMSwwLjEtMC4zLDAuMy0wLjQsMC41UzkyLDMxLjYsOTIsMzEuOGMwLDAuNCwwLjEsMC42LDAuMywwLjljMC4yLDAuMiwwLjQsMC40LDAuNy'+
			'wwLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjEsMCwwLjMsMC4xLDAuNCwwLjFDOTMuNywzMy4zLDkzLjgsMzMuMyw5My45LDMzLjN6IiBjbGFzcz0ic3QyIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me.__30__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me.__30__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAyLjkgNjQ7IiB4bWxucz0iaHR0cDovL3d3dy53My'+
			'5vcmcvMjAwMC9zdmciPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNEOURGRTM7fSYjeGQ7Cgkuc3Qxe2ZpbGw6I0U2RTlFQzt9JiN4ZDsKCS5zdDJ7ZmlsbDojMUQyMjI4O30mI3hkOwo8L3N0eWxlPgogPGxpbmUgeDI9IjAuNCIgeTI9IjYzIiBjbGFzcz0ic3QwIiB4MT0iMjAyLjQiIHkxPSI2MyIvPgogPHJlY3QgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MSIgd2lkdGg9IjIwMi45Ii8+CiA8Zz4KICA8cGF0aCBkPSJNMzcuOCwzNy43Yy0xLjEsMC0yLjEtMC4yLTIuOC0wLjdjLTAuOC0wLjUtMS40LTEuMi0xLjgtMmMtMC40LTAuOS0wLjYtMS45'+
			'LTAuNi0zYzAtMS4xLDAuMi0yLjIsMC42LTMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQtMC45LDEtMS41LDEuOC0yYzAuOC0wLjUsMS43LTAuNywyLjgtMC43YzEuMywwLDIuMywwLjMsMy4yLDFjMC44LDAuNiwxLjQsMS41LDEuOCwyLjZsLTEuNiwwLjRjLTAuMi0wLjgtMC42LTEuNC0xLjItMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNi0wLjQtMS4zLTAuNy0yLjItMC43Yy0wLjgsMC0xLjQsMC4yLTIsMC41Yy0wLjUsMC40LTAuOSwwLjktMS4yLDEuNWMtMC4zLDAuNi0wLjQsMS40LTAuNCwyLjJjMCwwLjksMC4xLDEuNiwwLjQsMi4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuNiwwLj'+
			'csMS4xLDEuMiwxLjVjMC41LDAuNCwxLjIsMC41LDIsMC41YzAuOSwwLDEuNi0wLjIsMi4yLTAuN2MwLjYtMC40LDAuOS0xLjEsMS4yLTEuOGwxLjYsMC40Yy0wLjMsMS4xLTAuOSwyLTEuOCwyLjYmI3hkOyYjeGE7JiN4OTsmI3g5O0M0MC4yLDM3LjQsMzkuMSwzNy43LDM3LjgsMzcuN3oiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNNDQuNywzNy41di04LjNoN3Y4LjNoLTEuNnYtNi44aC0zLjh2Ni44SDQ0Ljd6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTU2LjQsMzcuN2MtMC42LDAtMS4xLTAuMS0xLjYtMC4zYy0wLjQtMC4yLTAuNy0wLjUtMC45LTAuOWMtMC4yLTAuNC0wLjMtMC44'+
			'LTAuMy0xLjJjMC0wLjQsMC4xLTAuOCwwLjItMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4xLTAuMywwLjQtMC42LDAuNy0wLjhjMC4zLTAuMiwwLjctMC40LDEuMS0wLjVjMC40LTAuMSwwLjgtMC4yLDEuMy0wLjNjMC41LTAuMSwxLTAuMiwxLjUtMC4yYzAuNS0wLjEsMS0wLjEsMS41LTAuMmwtMC42LDAuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMC43LTAuMS0xLjEtMC40LTEuNWMtMC4zLTAuMy0wLjgtMC41LTEuNS0wLjVjLTAuNCwwLTAuOCwwLjEtMS4yLDAuM2MtMC40LDAuMi0wLjYsMC41LTAuOCwxbC0xLjUtMC41YzAuMi0wLjcsMC42LTEuMywxLjItMS43JiN4ZDsmI3hhOyYjeDk7Ji'+
			'N4OTtjMC42LTAuNCwxLjQtMC42LDIuMy0wLjZjMC43LDAsMS40LDAuMSwyLDAuNGMwLjYsMC4zLDEsMC43LDEuMiwxLjJjMC4xLDAuMywwLjIsMC42LDAuMiwwLjljMCwwLjMsMCwwLjYsMCwxdjUuMWgtMS40di0xLjkmI3hkOyYjeGE7JiN4OTsmI3g5O2wwLjMsMC4yYy0wLjMsMC42LTAuOCwxLjEtMS4zLDEuNEM1Ny44LDM3LjYsNTcuMiwzNy43LDU2LjQsMzcuN3ogTTU2LjcsMzYuNGMwLjUsMCwwLjktMC4xLDEuMi0wLjJjMC4zLTAuMiwwLjYtMC40LDAuOC0wLjYmI3hkOyYjeGE7JiN4OTsmI3g5O3MwLjMtMC41LDAuNC0wLjhjMC4xLTAuMiwwLjEtMC41LDAuMi0wLjhjMC0wLjMsMC0wLjYs'+
			'MC0wLjdsMC41LDAuMmMtMC41LDAuMS0xLDAuMS0xLjQsMC4yYy0wLjQsMC4xLTAuOCwwLjEtMS4xLDAuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMsMC4xLTAuNiwwLjEtMC45LDAuMmMtMC4yLDAuMS0wLjQsMC4yLTAuNiwwLjNjLTAuMiwwLjEtMC4zLDAuMi0wLjQsMC40Yy0wLjEsMC4yLTAuMiwwLjMtMC4yLDAuNmMwLDAuMiwwLjEsMC40LDAuMiwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjEsMC4yLDAuMywwLjMsMC41LDAuNEM1Ni4xLDM2LjMsNTYuMywzNi40LDU2LjcsMzYuNHoiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNNjIuMywzNy41di0xLjRjMC4zLDAuMSwwLjUsMCwwLj'+
			'csMHMwLjMtMC4yLDAuNC0wLjRjMC4xLTAuMiwwLjEtMC41LDAuMi0wLjhjMC4xLTAuNSwwLjItMSwwLjItMS42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4xLTAuNiwwLjEtMS4zLDAuMi0yYzAuMS0wLjcsMC4xLTEuNCwwLjEtMi4yaDZ2OC4zaC0xLjZ2LTYuOGgtMi45YzAsMC40LTAuMSwwLjgtMC4xLDEuM2MwLDAuNS0wLjEsMC45LTAuMSwxLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNC0wLjEsMC45LTAuMSwxLjNjLTAuMSwwLjQtMC4xLDAuNy0wLjIsMWMtMC4xLDAuNi0wLjMsMS0wLjUsMS4zYy0wLjIsMC4zLTAuNSwwLjUtMC44LDAuNkM2My4zLDM3LjYsNjIuOSwzNy42LDYyLjMsMzcu'+
			'NXoiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNNzIuNCwzNy41di04LjNINzRWMzJoMS42YzAuMiwwLDAuNSwwLDAuOCwwYzAuMywwLDAuNSwwLDAuNywwLjFjMC40LDAuMSwwLjgsMC4yLDEuMiwwLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMsMC4yLDAuNiwwLjUsMC44LDAuOWMwLjIsMC40LDAuMywwLjgsMC4zLDEuM2MwLDAuNy0wLjIsMS4zLTAuNiwxLjdjLTAuNCwwLjQtMC45LDAuNy0xLjUsMC45Yy0wLjIsMC0wLjQsMC4xLTAuNywwLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLDAtMC41LDAtMC44LDBINzIuNHogTTc0LDM2LjJoMS44YzAuMSwwLDAuMywwLDAuNCwwYzAuMiwwLD'+
			'AuMywwLDAuNS0wLjFjMC4yLTAuMSwwLjUtMC4yLDAuNy0wLjRjMC4yLTAuMiwwLjMtMC41LDAuMy0wLjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuNC0wLjEtMC43LTAuMy0wLjljLTAuMi0wLjItMC40LTAuNC0wLjctMC40Yy0wLjEsMC0wLjMtMC4xLTAuNC0wLjFjLTAuMSwwLTAuMywwLTAuNCwwSDc0VjM2LjJ6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTgxLDM3LjV2LTguM2gxLjZ2My40aDQuMXYtMy40aDEuNnY4LjNoLTEuNnYtMy40aC00LjF2My40SDgxeiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik05MC4yLDM3LjVsMi4xLTMuM0g5NGwtMi4xLDMuM0g5MC4yeiBNOTUuNywz'+
			'Ny41di0yLjlIOTRjLTAuMiwwLTAuNCwwLTAuNywwYy0wLjMsMC0wLjUsMC0wLjgtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNi0wLjEtMS4xLTAuNC0xLjYtMC44Yy0wLjQtMC40LTAuNi0xLTAuNi0xLjhjMC0wLjcsMC4yLTEuMywwLjYtMS44czAuOS0wLjcsMS41LTAuOWMwLjMtMC4xLDAuNS0wLjEsMC44LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMywwLDAuNSwwLDAuNywwaDMuM2wwLDguM0g5NS43eiBNOTMuOSwzMy4zaDEuOHYtMi45aC0xLjhjLTAuMSwwLTAuMywwLTAuNCwwYy0wLjIsMC0wLjMsMC0wLjUsMC4xYy0wLjIsMC0wLjMsMC4xLTAuNSwwLjImI3hkOyYjeGE7JiN4OT'+
			'smI3g5O2MtMC4xLDAuMS0wLjMsMC4zLTAuNCwwLjVjLTAuMSwwLjItMC4xLDAuNC0wLjEsMC42YzAsMC40LDAuMSwwLjYsMC4zLDAuOWMwLjIsMC4yLDAuNCwwLjQsMC43LDAuNWMwLjEsMCwwLjMsMC4xLDAuNCwwLjEmI3hkOyYjeGE7JiN4OTsmI3g5O0M5My43LDMzLjMsOTMuOCwzMy4zLDkzLjksMzMuM3oiIGNsYXNzPSJzdDIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me.__30__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		ela=me.__30__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAyLjkgNjQ7IiB4bWxucz0iaHR0cDovL3d3dy53My'+
			'5vcmcvMjAwMC9zdmciPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNEOURGRTM7fSYjeGQ7Cgkuc3Qxe2ZpbGw6I0U2RTlFQzt9JiN4ZDsKCS5zdDJ7ZmlsbDojMUQyMjI4O30mI3hkOwo8L3N0eWxlPgogPGxpbmUgeDI9IjAuNCIgeTI9IjYzIiBjbGFzcz0ic3QwIiB4MT0iMjAyLjQiIHkxPSI2MyIvPgogPHJlY3QgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MSIgd2lkdGg9IjIwMi45Ii8+CiA8Zz4KICA8cGF0aCBkPSJNMzcuOCwzNy43Yy0xLjEsMC0yLjEtMC4yLTIuOC0wLjdjLTAuOC0wLjUtMS40LTEuMi0xLjgtMmMtMC40LTAuOS0wLjYtMS45'+
			'LTAuNi0zYzAtMS4xLDAuMi0yLjIsMC42LTMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQtMC45LDEtMS41LDEuOC0yYzAuOC0wLjUsMS43LTAuNywyLjgtMC43YzEuMywwLDIuMywwLjMsMy4yLDFjMC44LDAuNiwxLjQsMS41LDEuOCwyLjZsLTEuNiwwLjRjLTAuMi0wLjgtMC42LTEuNC0xLjItMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNi0wLjQtMS4zLTAuNy0yLjItMC43Yy0wLjgsMC0xLjQsMC4yLTIsMC41Yy0wLjUsMC40LTAuOSwwLjktMS4yLDEuNWMtMC4zLDAuNi0wLjQsMS40LTAuNCwyLjJjMCwwLjksMC4xLDEuNiwwLjQsMi4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuNiwwLj'+
			'csMS4xLDEuMiwxLjVjMC41LDAuNCwxLjIsMC41LDIsMC41YzAuOSwwLDEuNi0wLjIsMi4yLTAuN2MwLjYtMC40LDAuOS0xLjEsMS4yLTEuOGwxLjYsMC40Yy0wLjMsMS4xLTAuOSwyLTEuOCwyLjYmI3hkOyYjeGE7JiN4OTsmI3g5O0M0MC4yLDM3LjQsMzkuMSwzNy43LDM3LjgsMzcuN3oiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNNDQuNywzNy41di04LjNoN3Y4LjNoLTEuNnYtNi44aC0zLjh2Ni44SDQ0Ljd6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTU2LjQsMzcuN2MtMC42LDAtMS4xLTAuMS0xLjYtMC4zYy0wLjQtMC4yLTAuNy0wLjUtMC45LTAuOWMtMC4yLTAuNC0wLjMtMC44'+
			'LTAuMy0xLjJjMC0wLjQsMC4xLTAuOCwwLjItMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4xLTAuMywwLjQtMC42LDAuNy0wLjhjMC4zLTAuMiwwLjctMC40LDEuMS0wLjVjMC40LTAuMSwwLjgtMC4yLDEuMy0wLjNjMC41LTAuMSwxLTAuMiwxLjUtMC4yYzAuNS0wLjEsMS0wLjEsMS41LTAuMmwtMC42LDAuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMC43LTAuMS0xLjEtMC40LTEuNWMtMC4zLTAuMy0wLjgtMC41LTEuNS0wLjVjLTAuNCwwLTAuOCwwLjEtMS4yLDAuM2MtMC40LDAuMi0wLjYsMC41LTAuOCwxbC0xLjUtMC41YzAuMi0wLjcsMC42LTEuMywxLjItMS43JiN4ZDsmI3hhOyYjeDk7Ji'+
			'N4OTtjMC42LTAuNCwxLjQtMC42LDIuMy0wLjZjMC43LDAsMS40LDAuMSwyLDAuNGMwLjYsMC4zLDEsMC43LDEuMiwxLjJjMC4xLDAuMywwLjIsMC42LDAuMiwwLjljMCwwLjMsMCwwLjYsMCwxdjUuMWgtMS40di0xLjkmI3hkOyYjeGE7JiN4OTsmI3g5O2wwLjMsMC4yYy0wLjMsMC42LTAuOCwxLjEtMS4zLDEuNEM1Ny44LDM3LjYsNTcuMiwzNy43LDU2LjQsMzcuN3ogTTU2LjcsMzYuNGMwLjUsMCwwLjktMC4xLDEuMi0wLjJjMC4zLTAuMiwwLjYtMC40LDAuOC0wLjYmI3hkOyYjeGE7JiN4OTsmI3g5O3MwLjMtMC41LDAuNC0wLjhjMC4xLTAuMiwwLjEtMC41LDAuMi0wLjhjMC0wLjMsMC0wLjYs'+
			'MC0wLjdsMC41LDAuMmMtMC41LDAuMS0xLDAuMS0xLjQsMC4yYy0wLjQsMC4xLTAuOCwwLjEtMS4xLDAuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMsMC4xLTAuNiwwLjEtMC45LDAuMmMtMC4yLDAuMS0wLjQsMC4yLTAuNiwwLjNjLTAuMiwwLjEtMC4zLDAuMi0wLjQsMC40Yy0wLjEsMC4yLTAuMiwwLjMtMC4yLDAuNmMwLDAuMiwwLjEsMC40LDAuMiwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjEsMC4yLDAuMywwLjMsMC41LDAuNEM1Ni4xLDM2LjMsNTYuMywzNi40LDU2LjcsMzYuNHoiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNNjIuMywzNy41di0xLjRjMC4zLDAuMSwwLjUsMCwwLj'+
			'csMHMwLjMtMC4yLDAuNC0wLjRjMC4xLTAuMiwwLjEtMC41LDAuMi0wLjhjMC4xLTAuNSwwLjItMSwwLjItMS42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4xLTAuNiwwLjEtMS4zLDAuMi0yYzAuMS0wLjcsMC4xLTEuNCwwLjEtMi4yaDZ2OC4zaC0xLjZ2LTYuOGgtMi45YzAsMC40LTAuMSwwLjgtMC4xLDEuM2MwLDAuNS0wLjEsMC45LTAuMSwxLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNC0wLjEsMC45LTAuMSwxLjNjLTAuMSwwLjQtMC4xLDAuNy0wLjIsMWMtMC4xLDAuNi0wLjMsMS0wLjUsMS4zYy0wLjIsMC4zLTAuNSwwLjUtMC44LDAuNkM2My4zLDM3LjYsNjIuOSwzNy42LDYyLjMsMzcu'+
			'NXoiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNNzIuNCwzNy41di04LjNINzRWMzJoMS42YzAuMiwwLDAuNSwwLDAuOCwwYzAuMywwLDAuNSwwLDAuNywwLjFjMC40LDAuMSwwLjgsMC4yLDEuMiwwLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMsMC4yLDAuNiwwLjUsMC44LDAuOWMwLjIsMC40LDAuMywwLjgsMC4zLDEuM2MwLDAuNy0wLjIsMS4zLTAuNiwxLjdjLTAuNCwwLjQtMC45LDAuNy0xLjUsMC45Yy0wLjIsMC0wLjQsMC4xLTAuNywwLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLDAtMC41LDAtMC44LDBINzIuNHogTTc0LDM2LjJoMS44YzAuMSwwLDAuMywwLDAuNCwwYzAuMiwwLD'+
			'AuMywwLDAuNS0wLjFjMC4yLTAuMSwwLjUtMC4yLDAuNy0wLjRjMC4yLTAuMiwwLjMtMC41LDAuMy0wLjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuNC0wLjEtMC43LTAuMy0wLjljLTAuMi0wLjItMC40LTAuNC0wLjctMC40Yy0wLjEsMC0wLjMtMC4xLTAuNC0wLjFjLTAuMSwwLTAuMywwLTAuNCwwSDc0VjM2LjJ6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTgxLDM3LjV2LTguM2gxLjZ2My40aDQuMXYtMy40aDEuNnY4LjNoLTEuNnYtMy40aC00LjF2My40SDgxeiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik05MC4yLDM3LjVsMi4xLTMuM0g5NGwtMi4xLDMuM0g5MC4yeiBNOTUuNywz'+
			'Ny41di0yLjlIOTRjLTAuMiwwLTAuNCwwLTAuNywwYy0wLjMsMC0wLjUsMC0wLjgtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNi0wLjEtMS4xLTAuNC0xLjYtMC44Yy0wLjQtMC40LTAuNi0xLTAuNi0xLjhjMC0wLjcsMC4yLTEuMywwLjYtMS44czAuOS0wLjcsMS41LTAuOWMwLjMtMC4xLDAuNS0wLjEsMC44LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMywwLDAuNSwwLDAuNywwaDMuM2wwLDguM0g5NS43eiBNOTMuOSwzMy4zaDEuOHYtMi45aC0xLjhjLTAuMSwwLTAuMywwLTAuNCwwYy0wLjIsMC0wLjMsMC0wLjUsMC4xYy0wLjIsMC0wLjMsMC4xLTAuNSwwLjImI3hkOyYjeGE7JiN4OT'+
			'smI3g5O2MtMC4xLDAuMS0wLjMsMC4zLTAuNCwwLjVjLTAuMSwwLjItMC4xLDAuNC0wLjEsMC42YzAsMC40LDAuMSwwLjYsMC4zLDAuOWMwLjIsMC4yLDAuNCwwLjQsMC43LDAuNWMwLjEsMCwwLjMsMC4xLDAuNCwwLjEmI3hkOyYjeGE7JiN4OTsmI3g5O0M5My43LDMzLjMsOTMuOCwzMy4zLDkzLjksMzMuM3oiIGNsYXNzPSJzdDIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me.__30__imga.setAttribute('src',hs);
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="\u0421\u043f\u0430\u043b\u044c\u043d\u044f _\u041a\u043d\u043e\u043f\u043a\u0430";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 250px;';
		hs+='visibility : inherit;';
		hs+='width : 156px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__30.onclick=function (e) {
			player.openNext("{node12}","");
		}
		me.__30.onmouseover=function (e) {
			me.__30__img.style.visibility='hidden';
			me.__30__imgo.style.visibility='inherit';
		}
		me.__30.onmouseout=function (e) {
			me.__30__img.style.visibility='inherit';
			me.__30__imgo.style.visibility='hidden';
			me.__30__imga.style.visibility='hidden';
		}
		me.__30.onmousedown=function (e) {
			me.__30__imga.style.visibility='inherit';
			me.__30__imgo.style.visibility='hidden';
		}
		me.__30.onmouseup=function (e) {
			me.__30__imga.style.visibility='hidden';
			if (skin.player.getHasTouch()) {
				me.__30__img.style.visibility='inherit';
			} else {
				me.__30__imgo.style.visibility='inherit';
			}
		}
		me.__30.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_background.appendChild(me.__30);
		el=me.__29=document.createElement('div');
		els=me.__29__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAyLjkgNjQ7IiB4bWxucz0iaHR0cDovL3d3dy53My'+
			'5vcmcvMjAwMC9zdmciPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNGOEY3Rjc7fSYjeGQ7Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I0Q5REZFMzt9JiN4ZDsKCS5zdDJ7ZmlsbDojMUQyMjI4O30mI3hkOwo8L3N0eWxlPgogPHJlY3QgeT0iMCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIgd2lkdGg9IjIwMi45Ii8+CiA8bGluZSB4Mj0iMC43IiB5Mj0iNjQiIGNsYXNzPSJzdDEiIHgxPSIyMDIuNyIgeTE9IjY0Ii8+CiA8Zz4KICA8cGF0aCBkPSJNMzEuOCwzOC44di0zLjVjMC40LDAsMC43LTAuMSwxLTAuM2MwLjMtMC4yLDAuNS0wLjUsMC42LTAuOGMwLjItMC40'+
			'LDAuMy0wLjgsMC40LTEuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMS0wLjUsMC4xLTAuOSwwLjItMS40YzAuMS0wLjcsMC4xLTEuMywwLjItMmMwLTAuNiwwLjEtMS4zLDAuMS0yYzAtMC43LDAuMS0xLjQsMC4xLTIuM2w3LjQsMHYxMGgwLjl2My41SDQxdi0xLjloLTcuNXYxLjkmI3hkOyYjeGE7JiN4OTsmI3g5O0gzMS44eiBNMzQuNiwzNS4yaDUuNXYtOC40bC00LjIsMGMwLDAuNi0wLjEsMS4xLTAuMSwxLjdjMCwwLjUtMC4xLDEuMS0wLjEsMS42cy0wLjEsMS4xLTAuMSwxLjdjLTAuMSwwLjYtMC4xLDEuMS0wLjIsMS41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMSwwLjQtMC4yLDAuOC0wLj'+
			'MsMS4xQzM1LDM0LjcsMzQuOCwzNSwzNC42LDM1LjJ6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTQ4LjMsMzcuMWMtMC45LDAtMS42LTAuMi0yLjMtMC42cy0xLjItMC45LTEuNS0xLjZjLTAuNC0wLjctMC41LTEuNS0wLjUtMi40YzAtMC45LDAuMi0xLjgsMC41LTIuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNC0wLjcsMC45LTEuMiwxLjUtMS42YzAuNi0wLjQsMS40LTAuNiwyLjItMC42YzAuOSwwLDEuNiwwLjIsMi4zLDAuNmMwLjYsMC40LDEuMSwxLDEuNCwxLjdjMC4zLDAuOCwwLjQsMS43LDAuNCwyLjdoLTEuN3YtMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xLTAuMi0xLjgtMC42'+
			'LTIuMmMtMC40LTAuNS0wLjktMC43LTEuNy0wLjdjLTAuOCwwLTEuNSwwLjMtMS45LDAuOGMtMC40LDAuNS0wLjYsMS4zLTAuNiwyLjNjMCwxLDAuMiwxLjcsMC42LDIuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNCwwLjUsMSwwLjgsMS44LDAuOGMwLjUsMCwxLTAuMSwxLjQtMC40YzAuNC0wLjIsMC43LTAuNiwwLjktMWwxLjYsMC41Yy0wLjMsMC44LTAuOCwxLjQtMS41LDEuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzQ5LjksMzYuOSw0OS4xLDM3LjEsNDguMywzNy4xeiBNNDUuMiwzM3YtMS4zaDYuMlYzM0g0NS4yeiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik01Ni4xLDM2Ljh2LTcuMmgtM3'+
			'YtMS41aDcuNnYxLjVoLTN2Ny4ySDU2LjF6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTY1LjgsMzcuMWMtMC45LDAtMS42LTAuMi0yLjMtMC42Yy0wLjYtMC40LTEuMS0wLjktMS40LTEuNmMtMC4zLTAuNy0wLjUtMS41LTAuNS0yLjRjMC0wLjksMC4yLTEuNywwLjUtMi40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLTAuNywwLjgtMS4yLDEuNC0xLjZjMC42LTAuNCwxLjQtMC42LDIuMy0wLjZjMC45LDAsMS44LDAuMiwyLjQsMC43YzAuNywwLjUsMS4xLDEuMSwxLjMsMS45TDY3LjksMzEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4yLTAuNS0wLjQtMC45LTAuOC0xLjFjLTAuNC0wLjMtMC44'+
			'LTAuNC0xLjMtMC40Yy0wLjYsMC0xLDAuMS0xLjQsMC40Yy0wLjQsMC4zLTAuNiwwLjYtMC44LDEuMWMtMC4yLDAuNS0wLjMsMS0wLjMsMS41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjksMC4yLDEuNiwwLjYsMi4yYzAuNCwwLjYsMSwwLjgsMS44LDAuOGMwLjUsMCwxLTAuMSwxLjMtMC40czAuNi0wLjYsMC44LTEuMWwxLjcsMC40Yy0wLjMsMC44LTAuOCwxLjUtMS40LDImI3hkOyYjeGE7JiN4OTsmI3g5O0M2Ny41LDM2LjgsNjYuNywzNy4xLDY1LjgsMzcuMXoiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNNzEuMiwzNi44bDAtOC43aDEuN3Y0LjJsMy40LTQuMmgyLjFsLTMuNiw0LjNsNC'+
			'w0LjNoLTIuM2wtMy42LTQuMnY0LjJINzEuMnoiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNODIuMSwzNy4xYy0wLjYsMC0xLjItMC4xLTEuNi0wLjRjLTAuNC0wLjItMC44LTAuNi0xLTAuOWMtMC4yLTAuNC0wLjMtMC44LTAuMy0xLjNjMC0wLjQsMC4xLTAuOCwwLjItMS4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4yLTAuMywwLjQtMC42LDAuNy0wLjhjMC4zLTAuMiwwLjctMC40LDEuMS0wLjZjMC40LTAuMSwwLjgtMC4yLDEuMy0wLjNjMC41LTAuMSwxLTAuMiwxLjUtMC4yYzAuNS0wLjEsMS4xLTAuMiwxLjYtMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTAuNiwwLjNjMC0wLjctMC4xLTEu'+
			'Mi0wLjQtMS41Yy0wLjMtMC4zLTAuOC0wLjUtMS41LTAuNWMtMC41LDAtMC45LDAuMS0xLjMsMC4zYy0wLjQsMC4yLTAuNiwwLjYtMC44LDFsLTEuNi0wLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjItMC43LDAuNi0xLjMsMS4yLTEuOGMwLjYtMC40LDEuNC0wLjcsMi40LTAuN2MwLjgsMCwxLjUsMC4xLDIsMC40YzAuNiwwLjMsMSwwLjcsMS4zLDEuM2MwLjEsMC4zLDAuMiwwLjYsMC4zLDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC4zLDAsMC43LDAsMXY1LjNoLTEuNXYtMmwwLjMsMC4zYy0wLjQsMC43LTAuOCwxLjItMS40LDEuNUM4My42LDM2LjksODIuOSwzNy4xLDgyLjEsMzcuMXogTT'+
			'gyLjQsMzUuN2MwLjUsMCwwLjktMC4xLDEuMi0wLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMtMC4yLDAuNi0wLjQsMC44LTAuNmMwLjItMC4zLDAuMy0wLjUsMC40LTAuOGMwLjEtMC4zLDAuMS0wLjUsMC4yLTAuOWMwLTAuMywwLTAuNiwwLTAuOGwwLjUsMC4yYy0wLjUsMC4xLTEsMC4yLTEuNCwwLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDAuMS0wLjgsMC4xLTEuMiwwLjJjLTAuNCwwLjEtMC43LDAuMS0wLjksMC4yYy0wLjIsMC4xLTAuNCwwLjItMC42LDAuM2MtMC4yLDAuMS0wLjMsMC4yLTAuNCwwLjRjLTAuMSwwLjItMC4yLDAuNC0wLjIsMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtj'+
			'MCwwLjIsMC4xLDAuNCwwLjIsMC42YzAuMSwwLjIsMC4zLDAuMywwLjUsMC41QzgxLjcsMzUuNiw4MiwzNS43LDgyLjQsMzUuN3oiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNODguMywzNi44bDIuMi0zLjRoMS44bC0yLjIsMy40SDg4LjN6IE05NC4xLDM2Ljh2LTNoLTEuN2MtMC4yLDAtMC40LDAtMC43LDBjLTAuMywwLTAuNSwwLTAuOC0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LTAuMS0xLjItMC40LTEuNi0wLjhjLTAuNC0wLjQtMC43LTEuMS0wLjctMS45YzAtMC44LDAuMi0xLjQsMC42LTEuOGMwLjQtMC41LDAuOS0wLjgsMS42LTAuOWMwLjMtMC4xLDAuNi0wLjEsMC44LTAuMS'+
			'YjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMywwLDAuNSwwLDAuNywwaDMuNGwwLDguN0g5NC4xeiBNOTIuMiwzMi41aDEuOXYtM2gtMS45Yy0wLjEsMC0wLjMsMC0wLjQsMGMtMC4yLDAtMC4zLDAtMC41LDAuMWMtMC4yLDAtMC4zLDAuMS0wLjUsMC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMiwwLjEtMC4zLDAuMy0wLjQsMC41Yy0wLjEsMC4yLTAuMSwwLjQtMC4xLDAuN2MwLDAuNCwwLjEsMC43LDAuMywwLjljMC4yLDAuMiwwLjUsMC40LDAuNywwLjVjMC4yLDAsMC4zLDAuMSwwLjUsMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtDOTIsMzIuNSw5Mi4xLDMyLjUsOTIuMiwzMi41eiIgY2xhc3M9InN0'+
			'MiIvPgogPC9nPgo8L3N2Zz4K';
		me.__29__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me.__29__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjQuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAyLjkgNjQ7IiB4bWxucz0iaHR0cDovL3d3dy53My'+
			'5vcmcvMjAwMC9zdmciPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNFNkU5RUM7fSYjeGQ7Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I0Q5REZFMzt9JiN4ZDsKCS5zdDJ7ZmlsbDojMUQyMjI4O30mI3hkOwo8L3N0eWxlPgogPHJlY3QgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIgd2lkdGg9IjIwMi45Ii8+CiA8bGluZSB4Mj0iMC43IiB5Mj0iNjQiIGNsYXNzPSJzdDEiIHgxPSIyMDIuNyIgeTE9IjY0Ii8+CiA8Zz4KICA8cGF0aCBkPSJNMzEuOCwzOC44di0zLjVjMC40LDAsMC43LTAuMSwxLTAuM3MwLjUtMC41LDAuNi0wLjhjMC4yLTAuNCwwLjMtMC44LDAuNC0x'+
			'LjJjMC4xLTAuNSwwLjEtMC45LDAuMi0xLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjEtMC43LDAuMS0xLjMsMC4yLTJjMC0wLjYsMC4xLTEuMywwLjEtMnMwLjEtMS40LDAuMS0yLjNoNy40djEwaDAuOXYzLjVINDF2LTEuOWgtNy41djEuOUMzMy41LDM4LjgsMzEuOCwzOC44LDMxLjgsMzguOHomI3hkOyYjeGE7JiN4OTsmI3g5OyBNMzQuNiwzNS4yaDUuNXYtOC40aC00LjJjMCwwLjYtMC4xLDEuMS0wLjEsMS43YzAsMC41LTAuMSwxLjEtMC4xLDEuNnMtMC4xLDEuMS0wLjEsMS43Yy0wLjEsMC42LTAuMSwxLjEtMC4yLDEuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjEsMC40LTAuMiwwLjgtMC'+
			'4zLDEuMUMzNSwzNC43LDM0LjgsMzUsMzQuNiwzNS4yeiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik00OC4zLDM3LjFjLTAuOSwwLTEuNi0wLjItMi4zLTAuNnMtMS4yLTAuOS0xLjUtMS42Yy0wLjQtMC43LTAuNS0xLjUtMC41LTIuNGMwLTAuOSwwLjItMS44LDAuNS0yLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQtMC43LDAuOS0xLjIsMS41LTEuNnMxLjQtMC42LDIuMi0wLjZjMC45LDAsMS42LDAuMiwyLjMsMC42YzAuNiwwLjQsMS4xLDEsMS40LDEuN2MwLjMsMC44LDAuNCwxLjcsMC40LDIuN2gtMS43di0wLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTEtMC4yLTEuOC0wLjYtMi4yYy0w'+
			'LjQtMC41LTAuOS0wLjctMS43LTAuN3MtMS41LDAuMy0xLjksMC44cy0wLjYsMS4zLTAuNiwyLjNzMC4yLDEuNywwLjYsMi4yYzAuNCwwLjUsMSwwLjgsMS44LDAuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNSwwLDEtMC4xLDEuNC0wLjRjMC40LTAuMiwwLjctMC42LDAuOS0xbDEuNiwwLjVjLTAuMywwLjgtMC44LDEuNC0xLjUsMS44QzQ5LjksMzYuOSw0OS4xLDM3LjEsNDguMywzNy4xeiBNNDUuMiwzM3YtMS4zaDYuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7VjMzSDQ1LjJ6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTU2LjEsMzYuOHYtNy4yaC0zdi0xLjVoNy42djEuNWgtM3Y3LjJINTYuMX'+
			'oiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNNjUuOCwzNy4xYy0wLjksMC0xLjYtMC4yLTIuMy0wLjZjLTAuNi0wLjQtMS4xLTAuOS0xLjQtMS42Yy0wLjMtMC43LTAuNS0xLjUtMC41LTIuNGMwLTAuOSwwLjItMS43LDAuNS0yLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMtMC43LDAuOC0xLjIsMS40LTEuNnMxLjQtMC42LDIuMy0wLjZzMS44LDAuMiwyLjQsMC43YzAuNywwLjUsMS4xLDEuMSwxLjMsMS45TDY3LjksMzFjLTAuMi0wLjUtMC40LTAuOS0wLjgtMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNC0wLjMtMC44LTAuNC0xLjMtMC40Yy0wLjYsMC0xLDAuMS0xLjQsMC40cy0wLjYs'+
			'MC42LTAuOCwxLjFzLTAuMywxLTAuMywxLjVjMCwwLjksMC4yLDEuNiwwLjYsMi4yYzAuNCwwLjYsMSwwLjgsMS44LDAuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNSwwLDEtMC4xLDEuMy0wLjRzMC42LTAuNiwwLjgtMS4xbDEuNywwLjRjLTAuMywwLjgtMC44LDEuNS0xLjQsMkM2Ny41LDM2LjgsNjYuNywzNy4xLDY1LjgsMzcuMXoiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNNzEuMiwzNi44di04LjdoMS43djQuMmwzLjQtNC4yaDIuMWwtMy42LDQuM2w0LDQuM2gtMi4zbC0zLjYtNC4ydjQuMmgtMS43VjM2Ljh6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTgyLjEsMzcuMWMtMC42LD'+
			'AtMS4yLTAuMS0xLjYtMC40Yy0wLjQtMC4yLTAuOC0wLjYtMS0wLjljLTAuMi0wLjQtMC4zLTAuOC0wLjMtMS4zYzAtMC40LDAuMS0wLjgsMC4yLTEuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMi0wLjMsMC40LTAuNiwwLjctMC44YzAuMy0wLjIsMC43LTAuNCwxLjEtMC42YzAuNC0wLjEsMC44LTAuMiwxLjMtMC4zYzAuNS0wLjEsMS0wLjIsMS41LTAuMmMwLjUtMC4xLDEuMS0wLjIsMS42LTAuMkw4NSwzMS41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjctMC4xLTEuMi0wLjQtMS41cy0wLjgtMC41LTEuNS0wLjVjLTAuNSwwLTAuOSwwLjEtMS4zLDAuM2MtMC40LDAuMi0wLjYsMC42LTAuOCwx'+
			'bC0xLjYtMC41YzAuMi0wLjcsMC42LTEuMywxLjItMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42LTAuNCwxLjQtMC43LDIuNC0wLjdjMC44LDAsMS41LDAuMSwyLDAuNGMwLjYsMC4zLDEsMC43LDEuMywxLjNjMC4xLDAuMywwLjIsMC42LDAuMywwLjljMCwwLjMsMCwwLjcsMCwxdjUuM2gtMS41di0ybDAuMywwLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDAuNy0wLjgsMS4yLTEuNCwxLjVDODMuNiwzNi45LDgyLjksMzcuMSw4Mi4xLDM3LjF6IE04Mi40LDM1LjdjMC41LDAsMC45LTAuMSwxLjItMC4zYzAuMy0wLjIsMC42LTAuNCwwLjgtMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4yLT'+
			'AuMywwLjMtMC41LDAuNC0wLjhzMC4xLTAuNSwwLjItMC45YzAtMC4zLDAtMC42LDAtMC44bDAuNSwwLjJjLTAuNSwwLjEtMSwwLjItMS40LDAuMmMtMC40LDAuMS0wLjgsMC4xLTEuMiwwLjImI3hkOyYjeGE7JiN4OTsmI3g5O0M4Mi41LDMzLDgyLjIsMzMsODIsMzMuMWMtMC4yLDAuMS0wLjQsMC4yLTAuNiwwLjNzLTAuMywwLjItMC40LDAuNHMtMC4yLDAuNC0wLjIsMC42YzAsMC4yLDAuMSwwLjQsMC4yLDAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMSwwLjIsMC4zLDAuMywwLjUsMC41QzgxLjcsMzUuNiw4MiwzNS43LDgyLjQsMzUuN3oiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNODgu'+
			'MywzNi44bDIuMi0zLjRoMS44bC0yLjIsMy40SDg4LjN6IE05NC4xLDM2Ljh2LTNoLTEuN2MtMC4yLDAtMC40LDAtMC43LDBjLTAuMywwLTAuNSwwLTAuOC0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LTAuMS0xLjItMC40LTEuNi0wLjhjLTAuNC0wLjQtMC43LTEuMS0wLjctMS45czAuMi0xLjQsMC42LTEuOGMwLjQtMC41LDAuOS0wLjgsMS42LTAuOWMwLjMtMC4xLDAuNi0wLjEsMC44LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMywwLDAuNSwwLDAuNywwaDMuNHY4LjdoLTEuNlYzNi44eiBNOTIuMiwzMi41aDEuOXYtM2gtMS45Yy0wLjEsMC0wLjMsMC0wLjQsMGMtMC4yLDAtMC4zLD'+
			'AtMC41LDAuMWMtMC4yLDAtMC4zLDAuMS0wLjUsMC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMiwwLjEtMC4zLDAuMy0wLjQsMC41cy0wLjEsMC40LTAuMSwwLjdjMCwwLjQsMC4xLDAuNywwLjMsMC45YzAuMiwwLjIsMC41LDAuNCwwLjcsMC41YzAuMiwwLDAuMywwLjEsMC41LDAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzkyLDMyLjUsOTIuMSwzMi41LDkyLjIsMzIuNXoiIGNsYXNzPSJzdDIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me.__29__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		ela=me.__29__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjQuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAyLjkgNjQ7IiB4bWxucz0iaHR0cDovL3d3dy53My'+
			'5vcmcvMjAwMC9zdmciPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNFNkU5RUM7fSYjeGQ7Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I0Q5REZFMzt9JiN4ZDsKCS5zdDJ7ZmlsbDojMUQyMjI4O30mI3hkOwo8L3N0eWxlPgogPHJlY3QgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIgd2lkdGg9IjIwMi45Ii8+CiA8bGluZSB4Mj0iMC43IiB5Mj0iNjQiIGNsYXNzPSJzdDEiIHgxPSIyMDIuNyIgeTE9IjY0Ii8+CiA8Zz4KICA8cGF0aCBkPSJNMzEuOCwzOC44di0zLjVjMC40LDAsMC43LTAuMSwxLTAuM3MwLjUtMC41LDAuNi0wLjhjMC4yLTAuNCwwLjMtMC44LDAuNC0x'+
			'LjJjMC4xLTAuNSwwLjEtMC45LDAuMi0xLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjEtMC43LDAuMS0xLjMsMC4yLTJjMC0wLjYsMC4xLTEuMywwLjEtMnMwLjEtMS40LDAuMS0yLjNoNy40djEwaDAuOXYzLjVINDF2LTEuOWgtNy41djEuOUMzMy41LDM4LjgsMzEuOCwzOC44LDMxLjgsMzguOHomI3hkOyYjeGE7JiN4OTsmI3g5OyBNMzQuNiwzNS4yaDUuNXYtOC40aC00LjJjMCwwLjYtMC4xLDEuMS0wLjEsMS43YzAsMC41LTAuMSwxLjEtMC4xLDEuNnMtMC4xLDEuMS0wLjEsMS43Yy0wLjEsMC42LTAuMSwxLjEtMC4yLDEuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjEsMC40LTAuMiwwLjgtMC'+
			'4zLDEuMUMzNSwzNC43LDM0LjgsMzUsMzQuNiwzNS4yeiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik00OC4zLDM3LjFjLTAuOSwwLTEuNi0wLjItMi4zLTAuNnMtMS4yLTAuOS0xLjUtMS42Yy0wLjQtMC43LTAuNS0xLjUtMC41LTIuNGMwLTAuOSwwLjItMS44LDAuNS0yLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjQtMC43LDAuOS0xLjIsMS41LTEuNnMxLjQtMC42LDIuMi0wLjZjMC45LDAsMS42LDAuMiwyLjMsMC42YzAuNiwwLjQsMS4xLDEsMS40LDEuN2MwLjMsMC44LDAuNCwxLjcsMC40LDIuN2gtMS43di0wLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTEtMC4yLTEuOC0wLjYtMi4yYy0w'+
			'LjQtMC41LTAuOS0wLjctMS43LTAuN3MtMS41LDAuMy0xLjksMC44cy0wLjYsMS4zLTAuNiwyLjNzMC4yLDEuNywwLjYsMi4yYzAuNCwwLjUsMSwwLjgsMS44LDAuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNSwwLDEtMC4xLDEuNC0wLjRjMC40LTAuMiwwLjctMC42LDAuOS0xbDEuNiwwLjVjLTAuMywwLjgtMC44LDEuNC0xLjUsMS44QzQ5LjksMzYuOSw0OS4xLDM3LjEsNDguMywzNy4xeiBNNDUuMiwzM3YtMS4zaDYuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7VjMzSDQ1LjJ6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTU2LjEsMzYuOHYtNy4yaC0zdi0xLjVoNy42djEuNWgtM3Y3LjJINTYuMX'+
			'oiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNNjUuOCwzNy4xYy0wLjksMC0xLjYtMC4yLTIuMy0wLjZjLTAuNi0wLjQtMS4xLTAuOS0xLjQtMS42Yy0wLjMtMC43LTAuNS0xLjUtMC41LTIuNGMwLTAuOSwwLjItMS43LDAuNS0yLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMtMC43LDAuOC0xLjIsMS40LTEuNnMxLjQtMC42LDIuMy0wLjZzMS44LDAuMiwyLjQsMC43YzAuNywwLjUsMS4xLDEuMSwxLjMsMS45TDY3LjksMzFjLTAuMi0wLjUtMC40LTAuOS0wLjgtMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNC0wLjMtMC44LTAuNC0xLjMtMC40Yy0wLjYsMC0xLDAuMS0xLjQsMC40cy0wLjYs'+
			'MC42LTAuOCwxLjFzLTAuMywxLTAuMywxLjVjMCwwLjksMC4yLDEuNiwwLjYsMi4yYzAuNCwwLjYsMSwwLjgsMS44LDAuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNSwwLDEtMC4xLDEuMy0wLjRzMC42LTAuNiwwLjgtMS4xbDEuNywwLjRjLTAuMywwLjgtMC44LDEuNS0xLjQsMkM2Ny41LDM2LjgsNjYuNywzNy4xLDY1LjgsMzcuMXoiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNNzEuMiwzNi44di04LjdoMS43djQuMmwzLjQtNC4yaDIuMWwtMy42LDQuM2w0LDQuM2gtMi4zbC0zLjYtNC4ydjQuMmgtMS43VjM2Ljh6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTgyLjEsMzcuMWMtMC42LD'+
			'AtMS4yLTAuMS0xLjYtMC40Yy0wLjQtMC4yLTAuOC0wLjYtMS0wLjljLTAuMi0wLjQtMC4zLTAuOC0wLjMtMS4zYzAtMC40LDAuMS0wLjgsMC4yLTEuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMi0wLjMsMC40LTAuNiwwLjctMC44YzAuMy0wLjIsMC43LTAuNCwxLjEtMC42YzAuNC0wLjEsMC44LTAuMiwxLjMtMC4zYzAuNS0wLjEsMS0wLjIsMS41LTAuMmMwLjUtMC4xLDEuMS0wLjIsMS42LTAuMkw4NSwzMS41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0wLjctMC4xLTEuMi0wLjQtMS41cy0wLjgtMC41LTEuNS0wLjVjLTAuNSwwLTAuOSwwLjEtMS4zLDAuM2MtMC40LDAuMi0wLjYsMC42LTAuOCwx'+
			'bC0xLjYtMC41YzAuMi0wLjcsMC42LTEuMywxLjItMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42LTAuNCwxLjQtMC43LDIuNC0wLjdjMC44LDAsMS41LDAuMSwyLDAuNGMwLjYsMC4zLDEsMC43LDEuMywxLjNjMC4xLDAuMywwLjIsMC42LDAuMywwLjljMCwwLjMsMCwwLjcsMCwxdjUuM2gtMS41di0ybDAuMywwLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDAuNy0wLjgsMS4yLTEuNCwxLjVDODMuNiwzNi45LDgyLjksMzcuMSw4Mi4xLDM3LjF6IE04Mi40LDM1LjdjMC41LDAsMC45LTAuMSwxLjItMC4zYzAuMy0wLjIsMC42LTAuNCwwLjgtMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4yLT'+
			'AuMywwLjMtMC41LDAuNC0wLjhzMC4xLTAuNSwwLjItMC45YzAtMC4zLDAtMC42LDAtMC44bDAuNSwwLjJjLTAuNSwwLjEtMSwwLjItMS40LDAuMmMtMC40LDAuMS0wLjgsMC4xLTEuMiwwLjImI3hkOyYjeGE7JiN4OTsmI3g5O0M4Mi41LDMzLDgyLjIsMzMsODIsMzMuMWMtMC4yLDAuMS0wLjQsMC4yLTAuNiwwLjNzLTAuMywwLjItMC40LDAuNHMtMC4yLDAuNC0wLjIsMC42YzAsMC4yLDAuMSwwLjQsMC4yLDAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMSwwLjIsMC4zLDAuMywwLjUsMC41QzgxLjcsMzUuNiw4MiwzNS43LDgyLjQsMzUuN3oiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNODgu'+
			'MywzNi44bDIuMi0zLjRoMS44bC0yLjIsMy40SDg4LjN6IE05NC4xLDM2Ljh2LTNoLTEuN2MtMC4yLDAtMC40LDAtMC43LDBjLTAuMywwLTAuNSwwLTAuOC0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LTAuMS0xLjItMC40LTEuNi0wLjhjLTAuNC0wLjQtMC43LTEuMS0wLjctMS45czAuMi0xLjQsMC42LTEuOGMwLjQtMC41LDAuOS0wLjgsMS42LTAuOWMwLjMtMC4xLDAuNi0wLjEsMC44LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMywwLDAuNSwwLDAuNywwaDMuNHY4LjdoLTEuNlYzNi44eiBNOTIuMiwzMi41aDEuOXYtM2gtMS45Yy0wLjEsMC0wLjMsMC0wLjQsMGMtMC4yLDAtMC4zLD'+
			'AtMC41LDAuMWMtMC4yLDAtMC4zLDAuMS0wLjUsMC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMiwwLjEtMC4zLDAuMy0wLjQsMC41cy0wLjEsMC40LTAuMSwwLjdjMCwwLjQsMC4xLDAuNywwLjMsMC45YzAuMiwwLjIsMC41LDAuNCwwLjcsMC41YzAuMiwwLDAuMywwLjEsMC41LDAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzkyLDMyLjUsOTIuMSwzMi41LDkyLjIsMzIuNXoiIGNsYXNzPSJzdDIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me.__29__imga.setAttribute('src',hs);
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="\u0414\u0435\u0442\u0441\u043a\u0430\u044f _\u041a\u043d\u043e\u043f\u043a\u0430";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 156px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__29.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__29.onclick=function (e) {
			player.openNext("{node11}","");
		}
		me.__29.onmouseover=function (e) {
			me.__29__img.style.visibility='hidden';
			me.__29__imgo.style.visibility='inherit';
		}
		me.__29.onmouseout=function (e) {
			me.__29__img.style.visibility='inherit';
			me.__29__imgo.style.visibility='hidden';
			me.__29__imga.style.visibility='hidden';
		}
		me.__29.onmousedown=function (e) {
			me.__29__imga.style.visibility='inherit';
			me.__29__imgo.style.visibility='hidden';
		}
		me.__29.onmouseup=function (e) {
			me.__29__imga.style.visibility='hidden';
			if (skin.player.getHasTouch()) {
				me.__29__img.style.visibility='inherit';
			} else {
				me.__29__imgo.style.visibility='inherit';
			}
		}
		me.__29.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_background.appendChild(me.__29);
		el=me.__28=document.createElement('div');
		els=me.__28__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAyLjkgNjQ7IiB4bWxucz0iaHR0cDovL3d3dy53My'+
			'5vcmcvMjAwMC9zdmciPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNGOEY3Rjc7fSYjeGQ7Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I0Q5REZFMzt9JiN4ZDsKCS5zdDJ7ZmlsbDojMUQyMjI4O30mI3hkOwo8L3N0eWxlPgogPHJlY3QgeT0iMCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIgd2lkdGg9IjIwMi45Ii8+CiA8bGluZSB4Mj0iMC43IiB5Mj0iNjQiIGNsYXNzPSJzdDEiIHgxPSIyMDIuNyIgeTE9IjY0Ii8+CiA8Zz4KICA8cGF0aCBkPSJNMzIuNCwzNy43VjI2LjNoNy4zdjEuNmgtNS42djkuOUgzMi40eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik00'+
			'My42LDM4Yy0wLjksMC0xLjYtMC4yLTIuMi0wLjZjLTAuNi0wLjQtMS4xLTAuOS0xLjUtMS42Yy0wLjMtMC43LTAuNS0xLjUtMC41LTIuNGMwLTAuOSwwLjItMS43LDAuNS0yLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMtMC43LDAuOC0xLjIsMS41LTEuNmMwLjYtMC40LDEuNC0wLjYsMi4yLTAuNmMwLjksMCwxLjYsMC4yLDIuMiwwLjZjMC42LDAuNCwxLjEsMC45LDEuNSwxLjZjMC4zLDAuNywwLjUsMS41LDAuNSwyLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuOS0wLjIsMS43LTAuNSwyLjRjLTAuMywwLjctMC44LDEuMi0xLjUsMS42QzQ1LjIsMzcuOCw0NC41LDM4LDQzLjYsMzh6IE00My'+
			'42LDM2LjRjMC44LDAsMS40LTAuMywxLjgtMC44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40LTAuNiwwLjYtMS4zLDAuNi0yLjFjMC0wLjktMC4yLTEuNi0wLjYtMi4xYy0wLjQtMC41LTEtMC44LTEuOC0wLjhjLTAuNiwwLTEsMC4xLTEuNCwwLjRjLTAuNCwwLjMtMC42LDAuNi0wLjgsMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjIsMC40LTAuMywxLTAuMywxLjVjMCwwLjksMC4yLDEuNiwwLjYsMi4yQzQyLjIsMzYuMSw0Mi44LDM2LjQsNDMuNiwzNi40eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik01My40LDM4Yy0wLjksMC0xLjYtMC4yLTIuMi0wLjZjLTAuNi0wLjQtMS4xLTAuOS0xLjQt'+
			'MS42Yy0wLjMtMC43LTAuNS0xLjUtMC41LTIuM2MwLTAuOSwwLjItMS43LDAuNS0yLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMtMC43LDAuOC0xLjIsMS40LTEuNmMwLjYtMC40LDEuNC0wLjYsMi4yLTAuNmMwLjksMCwxLjcsMC4yLDIuNCwwLjdjMC43LDAuNSwxLjEsMS4xLDEuMywxLjlMNTUuNSwzMiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjItMC41LTAuNC0wLjktMC44LTEuMWMtMC40LTAuMy0wLjgtMC40LTEuMy0wLjRjLTAuNSwwLTEsMC4xLTEuMywwLjRjLTAuMywwLjMtMC42LDAuNi0wLjgsMS4xYy0wLjIsMC40LTAuMywxLTAuMywxLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuOS'+
			'wwLjIsMS42LDAuNiwyLjFjMC40LDAuNSwxLDAuOCwxLjgsMC44YzAuNSwwLDEtMC4xLDEuMy0wLjRjMC4zLTAuMiwwLjYtMC42LDAuOC0xLjFsMS43LDAuNGMtMC4zLDAuOC0wLjcsMS41LTEuNCwxLjkmI3hkOyYjeGE7JiN4OTsmI3g5O0M1NS4xLDM3LjgsNTQuMywzOCw1My40LDM4eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik02MS4xLDM3Ljd2LTcuMWgtMi45di0xLjVoNy41djEuNWgtMi45djcuMUg2MS4xeiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik03NC41LDI5LjJ2OC42SDczdi02bC00LjMsNmgtMS4zdi04LjZoMS42VjM1bDQuMy01LjhINzQuNXoiIGNsYXNzPSJzdDIiLz4K'+
			'ICA8cGF0aCBkPSJNNzYuOSwzNy43di04LjZoMS43djMuNWg0LjJ2LTMuNWgxLjd2OC42aC0xLjd2LTMuNWgtNC4ydjMuNUg3Ni45eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik04OS4zLDM4Yy0wLjYsMC0xLjItMC4xLTEuNi0wLjRjLTAuNC0wLjItMC44LTAuNS0xLTAuOWMtMC4yLTAuNC0wLjMtMC44LTAuMy0xLjNjMC0wLjQsMC4xLTAuOCwwLjItMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4yLTAuMywwLjQtMC42LDAuNy0wLjhjMC4zLTAuMiwwLjctMC40LDEuMS0wLjZjMC40LTAuMSwwLjgtMC4yLDEuMy0wLjNjMC41LTAuMSwxLTAuMiwxLjUtMC4yYzAuNS0wLjEsMS4xLTAuMSwxLj'+
			'YtMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTAuNiwwLjNjMC0wLjctMC4xLTEuMi0wLjQtMS41Yy0wLjMtMC4zLTAuOC0wLjUtMS41LTAuNWMtMC40LDAtMC45LDAuMS0xLjIsMC4zYy0wLjQsMC4yLTAuNiwwLjYtMC44LDFsLTEuNS0wLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjItMC43LDAuNi0xLjMsMS4yLTEuOGMwLjYtMC40LDEuNC0wLjYsMi40LTAuNmMwLjgsMCwxLjQsMC4xLDIsMC40YzAuNiwwLjMsMSwwLjcsMS4yLDEuMmMwLjEsMC4zLDAuMiwwLjYsMC4zLDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC4zLDAsMC42LDAsMXY1LjNoLTEuNXYtMmwwLjMsMC4zYy0wLjQsMC43LTAu'+
			'OCwxLjEtMS40LDEuNUM5MC43LDM3LjgsOTAuMSwzOCw4OS4zLDM4eiBNODkuNiwzNi42YzAuNSwwLDAuOS0wLjEsMS4yLTAuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMy0wLjIsMC42LTAuNCwwLjgtMC42YzAuMi0wLjMsMC4zLTAuNSwwLjQtMC44YzAuMS0wLjMsMC4xLTAuNSwwLjItMC45YzAtMC4zLDAtMC42LDAtMC44bDAuNSwwLjJjLTAuNSwwLjEtMSwwLjItMS40LDAuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC4xLTAuOCwwLjEtMS4yLDAuMmMtMC4zLDAuMS0wLjcsMC4xLTAuOSwwLjJjLTAuMiwwLjEtMC40LDAuMi0wLjYsMC4zcy0wLjMsMC4yLTAuNCwwLjRDODguMSwzNSw4OC'+
			'wzNS4yLDg4LDM1LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuMiwwLjEsMC40LDAuMiwwLjZjMC4xLDAuMiwwLjMsMC4zLDAuNSwwLjRDODguOSwzNi42LDg5LjIsMzYuNiw4OS42LDM2LjZ6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTk1LjYsMzcuN2wyLjItMy40aDEuOGwtMi4xLDMuNEg5NS42eiBNMTAxLjMsMzcuN3YtM2gtMS43Yy0wLjIsMC0wLjQsMC0wLjcsMGMtMC4zLDAtMC41LDAtMC44LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjYtMC4xLTEuMi0wLjQtMS42LTAuOGMtMC40LTAuNC0wLjYtMS4xLTAuNi0xLjhjMC0wLjcsMC4yLTEuNCwwLjYtMS44YzAuNC0wLjUsMC45'+
			'LTAuOCwxLjUtMC45YzAuMy0wLjEsMC41LTAuMSwwLjgtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAsMC41LDAsMC43LDBoMy40bDAsOC42SDEwMS4zeiBNOTkuNCwzMy40aDEuOHYtMi45aC0xLjhjLTAuMSwwLTAuMywwLTAuNCwwYy0wLjIsMC0wLjMsMC0wLjUsMC4xYy0wLjIsMC0wLjMsMC4xLTAuNSwwLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4yLDAuMS0wLjMsMC4zLTAuNCwwLjVjLTAuMSwwLjItMC4xLDAuNC0wLjEsMC42YzAsMC40LDAuMSwwLjcsMC4zLDAuOWMwLjIsMC4yLDAuNSwwLjQsMC43LDAuNWMwLjIsMCwwLjMsMC4xLDAuNSwwLjEmI3hkOyYjeGE7JiN4OTsmI3g5O0'+
			'M5OS4yLDMzLjQsOTkuMywzMy40LDk5LjQsMzMuNHoiIGNsYXNzPSJzdDIiLz4KIDwvZz4KPC9zdmc+Cg==';
		me.__28__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me.__28__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAyLjkgNjQ7IiB4bWxucz0iaHR0cDovL3d3dy53My'+
			'5vcmcvMjAwMC9zdmciPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNFNkU5RUM7fSYjeGQ7Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I0Q5REZFMzt9JiN4ZDsKCS5zdDJ7ZmlsbDojMUQyMjI4O30mI3hkOwo8L3N0eWxlPgogPHJlY3QgeT0iMCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIgd2lkdGg9IjIwMi45Ii8+CiA8bGluZSB4Mj0iMC43IiB5Mj0iNjQiIGNsYXNzPSJzdDEiIHgxPSIyMDIuNyIgeTE9IjY0Ii8+CiA8Zz4KICA8cGF0aCBkPSJNMzIuNCwzNy43VjI2LjNoNy4zdjEuNmgtNS42djkuOUgzMi40eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik00'+
			'My42LDM3LjljLTAuOSwwLTEuNi0wLjItMi4yLTAuNmMtMC42LTAuNC0xLjEtMC45LTEuNS0xLjZjLTAuMy0wLjctMC41LTEuNS0wLjUtMi40YzAtMC45LDAuMi0xLjcsMC41LTIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMy0wLjcsMC44LTEuMiwxLjUtMS42YzAuNi0wLjQsMS40LTAuNiwyLjItMC42YzAuOSwwLDEuNiwwLjIsMi4yLDAuNmMwLjYsMC40LDEuMSwwLjksMS41LDEuNmMwLjMsMC43LDAuNSwxLjUsMC41LDIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC45LTAuMiwxLjctMC41LDIuNGMtMC4zLDAuNy0wLjgsMS4yLTEuNSwxLjZDNDUuMiwzNy43LDQ0LjUsMzcuOSw0My42LDM3Lj'+
			'l6IE00My42LDM2LjRjMC44LDAsMS40LTAuMywxLjgtMC44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40LTAuNiwwLjYtMS4zLDAuNi0yLjFjMC0wLjktMC4yLTEuNi0wLjYtMi4xYy0wLjQtMC41LTEtMC44LTEuOC0wLjhjLTAuNiwwLTEsMC4xLTEuNCwwLjRjLTAuNCwwLjMtMC42LDAuNi0wLjgsMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjIsMC40LTAuMywxLTAuMywxLjVjMCwwLjksMC4yLDEuNiwwLjYsMi4yQzQyLjIsMzYuMSw0Mi44LDM2LjQsNDMuNiwzNi40eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik01My40LDM3LjljLTAuOSwwLTEuNi0wLjItMi4yLTAuNmMtMC42LTAuNC0xLjEt'+
			'MC45LTEuNC0xLjZjLTAuMy0wLjctMC41LTEuNS0wLjUtMi4zYzAtMC45LDAuMi0xLjcsMC41LTIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMy0wLjcsMC44LTEuMiwxLjQtMS42YzAuNi0wLjQsMS40LTAuNiwyLjItMC42YzAuOSwwLDEuNywwLjIsMi40LDAuN2MwLjcsMC41LDEuMSwxLjEsMS4zLDEuOUw1NS41LDMyJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMi0wLjUtMC40LTAuOS0wLjgtMS4xYy0wLjQtMC4zLTAuOC0wLjQtMS4zLTAuNGMtMC41LDAtMSwwLjEtMS4zLDAuNGMtMC4zLDAuMy0wLjYsMC42LTAuOCwxLjFjLTAuMiwwLjQtMC4zLDEtMC4zLDEuNSYjeGQ7JiN4YTsmI3g5OyYjeD'+
			'k7YzAsMC45LDAuMiwxLjYsMC42LDIuMWMwLjQsMC41LDEsMC44LDEuOCwwLjhjMC41LDAsMS0wLjEsMS4zLTAuNGMwLjMtMC4yLDAuNi0wLjYsMC44LTEuMWwxLjcsMC40Yy0wLjMsMC44LTAuNywxLjUtMS40LDEuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzU1LjEsMzcuNyw1NC4zLDM3LjksNTMuNCwzNy45eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik02MS4xLDM3Ljd2LTcuMWgtMi45di0xLjVoNy41djEuNWgtMi45djcuMUg2MS4xeiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik03NC41LDI5LjF2OC42SDczdi02bC00LjMsNmgtMS4zdi04LjZoMS42VjM1bDQuMy01LjhINzQuNXoiIGNs'+
			'YXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNNzYuOSwzNy43di04LjZoMS43djMuNWg0LjJ2LTMuNWgxLjd2OC42aC0xLjd2LTMuNWgtNC4ydjMuNUg3Ni45eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik04OS4zLDM3LjljLTAuNiwwLTEuMi0wLjEtMS42LTAuNGMtMC40LTAuMi0wLjgtMC41LTEtMC45Yy0wLjItMC40LTAuMy0wLjgtMC4zLTEuM2MwLTAuNCwwLjEtMC44LDAuMi0xLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjItMC4zLDAuNC0wLjYsMC43LTAuOGMwLjMtMC4yLDAuNy0wLjQsMS4xLTAuNmMwLjQtMC4xLDAuOC0wLjIsMS4zLTAuM2MwLjUtMC4xLDEtMC4yLDEuNS0wLjJjMC41LT'+
			'AuMSwxLjEtMC4xLDEuNi0wLjImI3hkOyYjeGE7JiN4OTsmI3g5O2wtMC42LDAuM2MwLTAuNy0wLjEtMS4yLTAuNC0xLjVjLTAuMy0wLjMtMC44LTAuNS0xLjUtMC41Yy0wLjQsMC0wLjksMC4xLTEuMiwwLjNjLTAuNCwwLjItMC42LDAuNi0wLjgsMWwtMS41LTAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMi0wLjcsMC42LTEuMywxLjItMS44YzAuNi0wLjQsMS40LTAuNiwyLjQtMC42YzAuOCwwLDEuNCwwLjEsMiwwLjRjMC42LDAuMywxLDAuNywxLjIsMS4yYzAuMSwwLjMsMC4yLDAuNiwwLjMsMC45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjMsMCwwLjYsMCwxdjUuM2gtMS41di0ybDAuMyww'+
			'LjNjLTAuNCwwLjctMC44LDEuMS0xLjQsMS41QzkwLjcsMzcuOCw5MC4xLDM3LjksODkuMywzNy45eiBNODkuNiwzNi42YzAuNSwwLDAuOS0wLjEsMS4yLTAuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMy0wLjIsMC42LTAuNCwwLjgtMC42czAuMy0wLjUsMC40LTAuOGMwLjEtMC4zLDAuMS0wLjUsMC4yLTAuOWMwLTAuMywwLTAuNiwwLTAuOGwwLjUsMC4yYy0wLjUsMC4xLTEsMC4yLTEuNCwwLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDAuMS0wLjgsMC4xLTEuMiwwLjJjLTAuMywwLjEtMC43LDAuMS0wLjksMC4yYy0wLjIsMC4xLTAuNCwwLjItMC42LDAuM2MtMC4yLDAuMS0wLjMsMC4yLT'+
			'AuNCwwLjRjLTAuMSwwLjItMC4yLDAuNC0wLjIsMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjIsMC4xLDAuNCwwLjIsMC42YzAuMSwwLjIsMC4zLDAuMywwLjUsMC40Qzg4LjksMzYuNSw4OS4yLDM2LjYsODkuNiwzNi42eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik05NS42LDM3LjdsMi4yLTMuNGgxLjhsLTIuMSwzLjRIOTUuNnogTTEwMS4zLDM3Ljd2LTNoLTEuN2MtMC4yLDAtMC40LDAtMC43LDBjLTAuMywwLTAuNSwwLTAuOC0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LTAuMS0xLjItMC40LTEuNi0wLjhjLTAuNC0wLjQtMC42LTEuMS0wLjYtMS44YzAtMC43LDAuMi0xLjQs'+
			'MC42LTEuOGMwLjQtMC41LDAuOS0wLjgsMS41LTAuOWMwLjMtMC4xLDAuNS0wLjEsMC44LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMywwLDAuNSwwLDAuNywwaDMuNGwwLDguNkgxMDEuM3ogTTk5LjQsMzMuNGgxLjh2LTIuOWgtMS44Yy0wLjEsMC0wLjMsMC0wLjQsMGMtMC4yLDAtMC4zLDAtMC41LDAuMWMtMC4yLDAtMC4zLDAuMS0wLjUsMC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMiwwLjEtMC4zLDAuMy0wLjQsMC41Yy0wLjEsMC4yLTAuMSwwLjQtMC4xLDAuNmMwLDAuNCwwLjEsMC43LDAuMywwLjljMC4yLDAuMiwwLjUsMC40LDAuNywwLjVjMC4yLDAsMC4zLDAuMSwwLjUsMC4xJi'+
			'N4ZDsmI3hhOyYjeDk7JiN4OTtDOTkuMiwzMy40LDk5LjMsMzMuNCw5OS40LDMzLjR6IiBjbGFzcz0ic3QyIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me.__28__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		ela=me.__28__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAyLjkgNjQ7IiB4bWxucz0iaHR0cDovL3d3dy53My'+
			'5vcmcvMjAwMC9zdmciPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNFNkU5RUM7fSYjeGQ7Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I0Q5REZFMzt9JiN4ZDsKCS5zdDJ7ZmlsbDojMUQyMjI4O30mI3hkOwo8L3N0eWxlPgogPHJlY3QgeT0iMCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIgd2lkdGg9IjIwMi45Ii8+CiA8bGluZSB4Mj0iMC43IiB5Mj0iNjQiIGNsYXNzPSJzdDEiIHgxPSIyMDIuNyIgeTE9IjY0Ii8+CiA8Zz4KICA8cGF0aCBkPSJNMzIuNCwzNy43VjI2LjNoNy4zdjEuNmgtNS42djkuOUgzMi40eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik00'+
			'My42LDM3LjljLTAuOSwwLTEuNi0wLjItMi4yLTAuNmMtMC42LTAuNC0xLjEtMC45LTEuNS0xLjZjLTAuMy0wLjctMC41LTEuNS0wLjUtMi40YzAtMC45LDAuMi0xLjcsMC41LTIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMy0wLjcsMC44LTEuMiwxLjUtMS42YzAuNi0wLjQsMS40LTAuNiwyLjItMC42YzAuOSwwLDEuNiwwLjIsMi4yLDAuNmMwLjYsMC40LDEuMSwwLjksMS41LDEuNmMwLjMsMC43LDAuNSwxLjUsMC41LDIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC45LTAuMiwxLjctMC41LDIuNGMtMC4zLDAuNy0wLjgsMS4yLTEuNSwxLjZDNDUuMiwzNy43LDQ0LjUsMzcuOSw0My42LDM3Lj'+
			'l6IE00My42LDM2LjRjMC44LDAsMS40LTAuMywxLjgtMC44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40LTAuNiwwLjYtMS4zLDAuNi0yLjFjMC0wLjktMC4yLTEuNi0wLjYtMi4xYy0wLjQtMC41LTEtMC44LTEuOC0wLjhjLTAuNiwwLTEsMC4xLTEuNCwwLjRjLTAuNCwwLjMtMC42LDAuNi0wLjgsMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjIsMC40LTAuMywxLTAuMywxLjVjMCwwLjksMC4yLDEuNiwwLjYsMi4yQzQyLjIsMzYuMSw0Mi44LDM2LjQsNDMuNiwzNi40eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik01My40LDM3LjljLTAuOSwwLTEuNi0wLjItMi4yLTAuNmMtMC42LTAuNC0xLjEt'+
			'MC45LTEuNC0xLjZjLTAuMy0wLjctMC41LTEuNS0wLjUtMi4zYzAtMC45LDAuMi0xLjcsMC41LTIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMy0wLjcsMC44LTEuMiwxLjQtMS42YzAuNi0wLjQsMS40LTAuNiwyLjItMC42YzAuOSwwLDEuNywwLjIsMi40LDAuN2MwLjcsMC41LDEuMSwxLjEsMS4zLDEuOUw1NS41LDMyJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMi0wLjUtMC40LTAuOS0wLjgtMS4xYy0wLjQtMC4zLTAuOC0wLjQtMS4zLTAuNGMtMC41LDAtMSwwLjEtMS4zLDAuNGMtMC4zLDAuMy0wLjYsMC42LTAuOCwxLjFjLTAuMiwwLjQtMC4zLDEtMC4zLDEuNSYjeGQ7JiN4YTsmI3g5OyYjeD'+
			'k7YzAsMC45LDAuMiwxLjYsMC42LDIuMWMwLjQsMC41LDEsMC44LDEuOCwwLjhjMC41LDAsMS0wLjEsMS4zLTAuNGMwLjMtMC4yLDAuNi0wLjYsMC44LTEuMWwxLjcsMC40Yy0wLjMsMC44LTAuNywxLjUtMS40LDEuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzU1LjEsMzcuNyw1NC4zLDM3LjksNTMuNCwzNy45eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik02MS4xLDM3Ljd2LTcuMWgtMi45di0xLjVoNy41djEuNWgtMi45djcuMUg2MS4xeiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik03NC41LDI5LjF2OC42SDczdi02bC00LjMsNmgtMS4zdi04LjZoMS42VjM1bDQuMy01LjhINzQuNXoiIGNs'+
			'YXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNNzYuOSwzNy43di04LjZoMS43djMuNWg0LjJ2LTMuNWgxLjd2OC42aC0xLjd2LTMuNWgtNC4ydjMuNUg3Ni45eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik04OS4zLDM3LjljLTAuNiwwLTEuMi0wLjEtMS42LTAuNGMtMC40LTAuMi0wLjgtMC41LTEtMC45Yy0wLjItMC40LTAuMy0wLjgtMC4zLTEuM2MwLTAuNCwwLjEtMC44LDAuMi0xLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjItMC4zLDAuNC0wLjYsMC43LTAuOGMwLjMtMC4yLDAuNy0wLjQsMS4xLTAuNmMwLjQtMC4xLDAuOC0wLjIsMS4zLTAuM2MwLjUtMC4xLDEtMC4yLDEuNS0wLjJjMC41LT'+
			'AuMSwxLjEtMC4xLDEuNi0wLjImI3hkOyYjeGE7JiN4OTsmI3g5O2wtMC42LDAuM2MwLTAuNy0wLjEtMS4yLTAuNC0xLjVjLTAuMy0wLjMtMC44LTAuNS0xLjUtMC41Yy0wLjQsMC0wLjksMC4xLTEuMiwwLjNjLTAuNCwwLjItMC42LDAuNi0wLjgsMWwtMS41LTAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMi0wLjcsMC42LTEuMywxLjItMS44YzAuNi0wLjQsMS40LTAuNiwyLjQtMC42YzAuOCwwLDEuNCwwLjEsMiwwLjRjMC42LDAuMywxLDAuNywxLjIsMS4yYzAuMSwwLjMsMC4yLDAuNiwwLjMsMC45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjMsMCwwLjYsMCwxdjUuM2gtMS41di0ybDAuMyww'+
			'LjNjLTAuNCwwLjctMC44LDEuMS0xLjQsMS41QzkwLjcsMzcuOCw5MC4xLDM3LjksODkuMywzNy45eiBNODkuNiwzNi42YzAuNSwwLDAuOS0wLjEsMS4yLTAuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMy0wLjIsMC42LTAuNCwwLjgtMC42czAuMy0wLjUsMC40LTAuOGMwLjEtMC4zLDAuMS0wLjUsMC4yLTAuOWMwLTAuMywwLTAuNiwwLTAuOGwwLjUsMC4yYy0wLjUsMC4xLTEsMC4yLTEuNCwwLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC40LDAuMS0wLjgsMC4xLTEuMiwwLjJjLTAuMywwLjEtMC43LDAuMS0wLjksMC4yYy0wLjIsMC4xLTAuNCwwLjItMC42LDAuM2MtMC4yLDAuMS0wLjMsMC4yLT'+
			'AuNCwwLjRjLTAuMSwwLjItMC4yLDAuNC0wLjIsMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjIsMC4xLDAuNCwwLjIsMC42YzAuMSwwLjIsMC4zLDAuMywwLjUsMC40Qzg4LjksMzYuNSw4OS4yLDM2LjYsODkuNiwzNi42eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik05NS42LDM3LjdsMi4yLTMuNGgxLjhsLTIuMSwzLjRIOTUuNnogTTEwMS4zLDM3Ljd2LTNoLTEuN2MtMC4yLDAtMC40LDAtMC43LDBjLTAuMywwLTAuNSwwLTAuOC0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LTAuMS0xLjItMC40LTEuNi0wLjhjLTAuNC0wLjQtMC42LTEuMS0wLjYtMS44YzAtMC43LDAuMi0xLjQs'+
			'MC42LTEuOGMwLjQtMC41LDAuOS0wLjgsMS41LTAuOWMwLjMtMC4xLDAuNS0wLjEsMC44LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMywwLDAuNSwwLDAuNywwaDMuNGwwLDguNkgxMDEuM3ogTTk5LjQsMzMuNGgxLjh2LTIuOWgtMS44Yy0wLjEsMC0wLjMsMC0wLjQsMGMtMC4yLDAtMC4zLDAtMC41LDAuMWMtMC4yLDAtMC4zLDAuMS0wLjUsMC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMiwwLjEtMC4zLDAuMy0wLjQsMC41Yy0wLjEsMC4yLTAuMSwwLjQtMC4xLDAuNmMwLDAuNCwwLjEsMC43LDAuMywwLjljMC4yLDAuMiwwLjUsMC40LDAuNywwLjVjMC4yLDAsMC4zLDAuMSwwLjUsMC4xJi'+
			'N4ZDsmI3hhOyYjeDk7JiN4OTtDOTkuMiwzMy40LDk5LjMsMzMuNCw5OS40LDMzLjR6IiBjbGFzcz0ic3QyIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me.__28__imga.setAttribute('src',hs);
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="\u0413\u043e\u0441\u0442\u0438\u043d\u0430\u044f _\u041a\u043d\u043e\u043f\u043a\u0430";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 100px;';
		hs+='visibility : inherit;';
		hs+='width : 156px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__28.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__28.onclick=function (e) {
			player.openNext("{node9}","");
		}
		me.__28.onmouseover=function (e) {
			me.__28__img.style.visibility='hidden';
			me.__28__imgo.style.visibility='inherit';
		}
		me.__28.onmouseout=function (e) {
			me.__28__img.style.visibility='inherit';
			me.__28__imgo.style.visibility='hidden';
			me.__28__imga.style.visibility='hidden';
		}
		me.__28.onmousedown=function (e) {
			me.__28__imga.style.visibility='inherit';
			me.__28__imgo.style.visibility='hidden';
		}
		me.__28.onmouseup=function (e) {
			me.__28__imga.style.visibility='hidden';
			if (skin.player.getHasTouch()) {
				me.__28__img.style.visibility='inherit';
			} else {
				me.__28__imgo.style.visibility='inherit';
			}
		}
		me.__28.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_background.appendChild(me.__28);
		el=me.__27=document.createElement('div');
		els=me.__27__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAyLjkgNjQ7IiB4bWxucz0iaHR0cDovL3d3dy53My'+
			'5vcmcvMjAwMC9zdmciPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNGOEY3Rjc7fSYjeGQ7Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I0Q5REZFMzt9JiN4ZDsKCS5zdDJ7ZmlsbDojMUQyMjI4O30mI3hkOwo8L3N0eWxlPgogPHJlY3QgeT0iMCIgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MCIgd2lkdGg9IjIwMi45Ii8+CiA8bGluZSB4Mj0iMC40IiB5Mj0iNjQiIGNsYXNzPSJzdDEiIHgxPSIyMDIuNCIgeTE9IjY0Ii8+CiA8Zz4KICA8cGF0aCBkPSJNMzIuNCwzNy43VjI2LjNoMS43djUuM2w0LjgtNS4zSDQxbC01LjEsNS42bDUuNCw1LjloLTIuMWwtNS4xLTUuNXY1'+
			'LjVMMzIuNCwzNy43TDMyLjQsMzcuN3oiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNNDMsNDEuNWwxLjctNC41djEuM0w0MSwyOS4xaDEuN2wyLjgsNy4xSDQ1bDIuNy03LjFoMS43bC00LjcsMTIuNEg0M3oiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNNDkuOCwzNy43bDMuMi00LjNsLTMuMS00LjJoMmwyLjEsMi45bDIuMS0yLjloMkw1NSwzMy40bDMuMiw0LjNoLTJsLTIuMi0zbC0yLjIsM0g0OS44eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik01OS42LDM3Ljd2LTguNmgxLjd2My41aDQuMnYtMy41aDEuN3Y4LjZoLTEuN3YtMy41aC00LjJ2My41QzYxLjMsMzcuNyw1OS42LDM3Lj'+
			'csNTkuNiwzNy43eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik02OSwzNy43bDIuMi0zLjRINzNsLTIuMiwzLjRINjl6IE03NC43LDM3Ljd2LTNINzNjLTAuMiwwLTAuNCwwLTAuNywwYy0wLjMsMC0wLjUsMC0wLjgtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNi0wLjEtMS4yLTAuNC0xLjYtMC44Yy0wLjQtMC40LTAuNi0xLjEtMC42LTEuOGMwLTAuOCwwLjItMS40LDAuNi0xLjhjMC40LTAuNSwwLjktMC44LDEuNS0wLjljMC4zLTAuMSwwLjUtMC4xLDAuOC0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5O3MwLjUsMCwwLjcsMGgzLjR2OC42aC0xLjZWMzcuN3ogTTcyLjksMzMuNGgxLjh2LTIu'+
			'OWgtMS44Yy0wLjEsMC0wLjMsMC0wLjQsMGMtMC4yLDAtMC4zLDAtMC41LDAuMWMtMC4yLDAtMC4zLDAuMS0wLjUsMC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMiwwLjEtMC4zLDAuMy0wLjQsMC41QzcxLDMxLjUsNzEsMzEuNyw3MSwzMmMwLDAuNCwwLjEsMC43LDAuMywwLjljMC4yLDAuMiwwLjUsMC40LDAuNywwLjVjMC4yLDAsMC4zLDAuMSwwLjUsMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtDNzIuNywzMy40LDcyLjgsMzMuNCw3Mi45LDMzLjR6IiBjbGFzcz0ic3QyIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me.__27__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me.__27__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAyLjkgNjQ7IiB4bWxucz0iaHR0cDovL3d3dy53My'+
			'5vcmcvMjAwMC9zdmciPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNEOURGRTM7fSYjeGQ7Cgkuc3Qxe2ZpbGw6I0U2RTlFQzt9JiN4ZDsKCS5zdDJ7ZmlsbDojMUQyMjI4O30mI3hkOwo8L3N0eWxlPgogPGxpbmUgeDI9IjAuNCIgeTI9IjYzIiBjbGFzcz0ic3QwIiB4MT0iMjAyLjQiIHkxPSI2MyIvPgogPHJlY3QgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MSIgd2lkdGg9IjIwMi45Ii8+CiA8Zz4KICA8cGF0aCBkPSJNMzIuNCwzNy43VjI2LjNoMS43djUuM2w0LjgtNS4zaDIuMWwtNS4xLDUuNmw1LjQsNS45aC0yLjFsLTUuMS01LjV2NS41SDMy'+
			'LjR6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTQzLDQxLjVsMS43LTQuNWwwLDEuM0w0MSwyOS4xaDEuN2wyLjgsNy4xSDQ1bDIuNy03LjFoMS43bC00LjcsMTIuNEg0M3oiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNNDkuOCwzNy43bDMuMi00LjNsLTMuMS00LjJoMmwyLjEsMi45bDIuMS0yLjloMmwtMy4xLDQuMmwzLjIsNC4zaC0ybC0yLjItM2wtMi4yLDNINDkuOHoiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNNTkuNiwzNy43di04LjZoMS43djMuNWg0LjJ2LTMuNWgxLjd2OC42aC0xLjd2LTMuNWgtNC4ydjMuNUg1OS42eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik02OS'+
			'wzNy43bDIuMi0zLjRINzNsLTIuMiwzLjRINjl6IE03NC43LDM3Ljd2LTNINzNjLTAuMiwwLTAuNCwwLTAuNywwYy0wLjMsMC0wLjUsMC0wLjgtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNi0wLjEtMS4yLTAuNC0xLjYtMC44Yy0wLjQtMC40LTAuNi0xLjEtMC42LTEuOGMwLTAuOCwwLjItMS40LDAuNi0xLjhjMC40LTAuNSwwLjktMC44LDEuNS0wLjljMC4zLTAuMSwwLjUtMC4xLDAuOC0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMsMCwwLjUsMCwwLjcsMGgzLjRsMCw4LjZINzQuN3ogTTcyLjksMzMuNGgxLjh2LTIuOWgtMS44Yy0wLjEsMC0wLjMsMC0wLjQsMGMtMC4yLDAtMC4zLDAt'+
			'MC41LDAuMWMtMC4yLDAtMC4zLDAuMS0wLjUsMC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMiwwLjEtMC4zLDAuMy0wLjQsMC41QzcxLDMxLjUsNzEsMzEuNyw3MSwzMmMwLDAuNCwwLjEsMC43LDAuMywwLjljMC4yLDAuMiwwLjUsMC40LDAuNywwLjVjMC4yLDAsMC4zLDAuMSwwLjUsMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtDNzIuNywzMy40LDcyLjgsMzMuNCw3Mi45LDMzLjR6IiBjbGFzcz0ic3QyIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me.__27__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		ela=me.__27__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAyLjkgNjQ7IiB4bWxucz0iaHR0cDovL3d3dy53My'+
			'5vcmcvMjAwMC9zdmciPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOm5vbmU7c3Ryb2tlOiNEOURGRTM7fSYjeGQ7Cgkuc3Qxe2ZpbGw6I0U2RTlFQzt9JiN4ZDsKCS5zdDJ7ZmlsbDojMUQyMjI4O30mI3hkOwo8L3N0eWxlPgogPGxpbmUgeDI9IjAuNCIgeTI9IjYzIiBjbGFzcz0ic3QwIiB4MT0iMjAyLjQiIHkxPSI2MyIvPgogPHJlY3QgaGVpZ2h0PSI2NCIgY2xhc3M9InN0MSIgd2lkdGg9IjIwMi45Ii8+CiA8Zz4KICA8cGF0aCBkPSJNMzIuNCwzNy43VjI2LjNoMS43djUuM2w0LjgtNS4zaDIuMWwtNS4xLDUuNmw1LjQsNS45aC0yLjFsLTUuMS01LjV2NS41SDMy'+
			'LjR6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTQzLDQxLjVsMS43LTQuNWwwLDEuM0w0MSwyOS4xaDEuN2wyLjgsNy4xSDQ1bDIuNy03LjFoMS43bC00LjcsMTIuNEg0M3oiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNNDkuOCwzNy43bDMuMi00LjNsLTMuMS00LjJoMmwyLjEsMi45bDIuMS0yLjloMmwtMy4xLDQuMmwzLjIsNC4zaC0ybC0yLjItM2wtMi4yLDNINDkuOHoiIGNsYXNzPSJzdDIiLz4KICA8cGF0aCBkPSJNNTkuNiwzNy43di04LjZoMS43djMuNWg0LjJ2LTMuNWgxLjd2OC42aC0xLjd2LTMuNWgtNC4ydjMuNUg1OS42eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik02OS'+
			'wzNy43bDIuMi0zLjRINzNsLTIuMiwzLjRINjl6IE03NC43LDM3Ljd2LTNINzNjLTAuMiwwLTAuNCwwLTAuNywwYy0wLjMsMC0wLjUsMC0wLjgtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNi0wLjEtMS4yLTAuNC0xLjYtMC44Yy0wLjQtMC40LTAuNi0xLjEtMC42LTEuOGMwLTAuOCwwLjItMS40LDAuNi0xLjhjMC40LTAuNSwwLjktMC44LDEuNS0wLjljMC4zLTAuMSwwLjUtMC4xLDAuOC0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMsMCwwLjUsMCwwLjcsMGgzLjRsMCw4LjZINzQuN3ogTTcyLjksMzMuNGgxLjh2LTIuOWgtMS44Yy0wLjEsMC0wLjMsMC0wLjQsMGMtMC4yLDAtMC4zLDAt'+
			'MC41LDAuMWMtMC4yLDAtMC4zLDAuMS0wLjUsMC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMiwwLjEtMC4zLDAuMy0wLjQsMC41QzcxLDMxLjUsNzEsMzEuNyw3MSwzMmMwLDAuNCwwLjEsMC43LDAuMywwLjljMC4yLDAuMiwwLjUsMC40LDAuNywwLjVjMC4yLDAsMC4zLDAuMSwwLjUsMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtDNzIuNywzMy40LDcyLjgsMzMuNCw3Mi45LDMzLjR6IiBjbGFzcz0ic3QyIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me.__27__imga.setAttribute('src',hs);
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="\u041a\u0443\u0445\u043d\u044f _\u041a\u043d\u043e\u043f\u043a\u0430";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 150px;';
		hs+='visibility : inherit;';
		hs+='width : 156px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__27.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__27.onclick=function (e) {
			player.openNext("{node8}","");
		}
		me.__27.onmouseover=function (e) {
			me.__27__img.style.visibility='hidden';
			me.__27__imgo.style.visibility='inherit';
		}
		me.__27.onmouseout=function (e) {
			me.__27__img.style.visibility='inherit';
			me.__27__imgo.style.visibility='hidden';
			me.__27__imga.style.visibility='hidden';
		}
		me.__27.onmousedown=function (e) {
			me.__27__imga.style.visibility='inherit';
			me.__27__imgo.style.visibility='hidden';
		}
		me.__27.onmouseup=function (e) {
			me.__27__imga.style.visibility='hidden';
			if (skin.player.getHasTouch()) {
				me.__27__img.style.visibility='inherit';
			} else {
				me.__27__imgo.style.visibility='inherit';
			}
		}
		me.__27.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_background.appendChild(me.__27);
		el=me.__26=document.createElement('div');
		els=me.__26__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAyLjkgNjQ7IiB4bWxucz0iaHR0cDovL3d3dy53My'+
			'5vcmcvMjAwMC9zdmciPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNGOEY3Rjc7fSYjeGQ7Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I0Q5REZFMzt9JiN4ZDsKCS5zdDJ7ZmlsbDojMUQyMjI4O30mI3hkOwo8L3N0eWxlPgogPHBhdGggZD0iTTIwMi45LDh2NTZIMFY4YzAtNC40LDMuNi04LDgtOGgxODYuOUMxOTkuMywwLDIwMi45LDMuNiwyMDIuOSw4eiIgY2xhc3M9InN0MCIvPgogPGxpbmUgeDI9IjAuNCIgeTI9IjY0IiBjbGFzcz0ic3QxIiB4MT0iMjAyLjQiIHkxPSI2NCIvPgogPGc+CiAgPHBhdGggZD0iTTMyLjUsMzcuNVYyNi40aDguOXYxMS4xaC0xLjZ2'+
			'LTkuNmgtNS42djkuNkgzMi41eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik00My43LDQxLjJWMjkuMWgxLjR2NmgwLjJ2Ni4xSDQzLjd6IE00Ny43LDM3LjdjLTAuOCwwLTEuNS0wLjItMi0wLjZjLTAuNS0wLjQtMS0wLjktMS4yLTEuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMtMC43LTAuNC0xLjQtMC40LTIuM2MwLTAuOCwwLjEtMS42LDAuNC0yLjNjMC4zLTAuNywwLjctMS4yLDEuMi0xLjZjMC41LTAuNCwxLjItMC42LDItMC42YzAuOCwwLDEuNSwwLjIsMiwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjYsMC40LDEsMC45LDEuMywxLjZjMC4zLDAuNywwLjUsMS40LDAuNSwyLjNjMC'+
			'wwLjgtMC4yLDEuNi0wLjUsMi4zYy0wLjMsMC43LTAuNywxLjItMS4zLDEuNkM0OS4xLDM3LjUsNDguNSwzNy43LDQ3LjcsMzcuN3omI3hkOyYjeGE7JiN4OTsmI3g5OyBNNDcuNSwzNi4zYzAuNSwwLDAuOS0wLjEsMS4zLTAuNGMwLjMtMC4zLDAuNi0wLjYsMC44LTEuMWMwLjItMC40LDAuMy0wLjksMC4zLTEuNWMwLTAuNS0wLjEtMS0wLjMtMS41Yy0wLjItMC40LTAuNC0wLjgtMC44LTEuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7cy0wLjgtMC40LTEuMy0wLjRjLTAuNSwwLTAuOSwwLjEtMS4yLDAuNGMtMC4zLDAuMi0wLjYsMC42LTAuNywxYy0wLjIsMC40LTAuMiwxLTAuMiwxLjVjMCwwLjYsMC4x'+
			'LDEuMSwwLjIsMS41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4yLDAuNCwwLjQsMC44LDAuNywxQzQ2LjUsMzYuMSw0Ni45LDM2LjMsNDcuNSwzNi4zeiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik02MC40LDI5LjF2OC40aC0xLjZ2LTUuOGwtNC4yLDUuOGgtMS4zdi04LjRoMS42djUuN2w0LjItNS43SDYwLjR6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTYxLjgsMzcuNWwzLjEtNC4ybC0zLjEtNC4xaDEuOWwyLjEsMi45bDIuMS0yLjloMS45bC0zLjEsNC4xbDMuMSw0LjJINjhsLTIuMS0zbC0yLjEsM0g2MS44eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik03NC43LDM3LjdjLTAuOC'+
			'wwLTEuNi0wLjItMi4yLTAuNmMtMC42LTAuNC0xLjEtMC45LTEuNC0xLjZjLTAuMy0wLjctMC41LTEuNC0wLjUtMi4zYzAtMC45LDAuMi0xLjYsMC41LTIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMy0wLjcsMC44LTEuMiwxLjQtMS41YzAuNi0wLjQsMS4zLTAuNiwyLjItMC42YzAuOCwwLDEuNiwwLjIsMi4yLDAuNmMwLjYsMC40LDEuMSwwLjksMS40LDEuNmMwLjMsMC43LDAuNSwxLjQsMC41LDIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC45LTAuMiwxLjYtMC41LDIuM2MtMC4zLDAuNy0wLjgsMS4yLTEuNCwxLjZDNzYuMiwzNy41LDc1LjUsMzcuNyw3NC43LDM3Ljd6IE03NC43LDM2LjJj'+
			'MC44LDAsMS40LTAuMywxLjgtMC44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40LTAuNSwwLjYtMS4yLDAuNi0yLjFjMC0wLjktMC4yLTEuNi0wLjYtMi4xYy0wLjQtMC41LTEtMC44LTEuOC0wLjhjLTAuNSwwLTEsMC4xLTEuMywwLjRjLTAuNCwwLjItMC42LDAuNi0wLjgsMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjIsMC40LTAuMywwLjktMC4zLDEuNWMwLDAuOSwwLjIsMS42LDAuNiwyLjFDNzMuMywzNS45LDczLjksMzYuMiw3NC43LDM2LjJ6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTc5LjUsMzcuNWwzLjItNC4ybC0zLTQuMmgxLjhsMi45LDQuMXYtNC4xaDEuNXY0LjFsMi45LTQuMW'+
			'gxLjhsLTMsNC4ybDMuMiw0LjJoLTEuOWwtMy00LjF2NC4xaC0xLjV2LTQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0zLDQuMUg3OS41eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik05NC4yLDM3LjdjLTAuNiwwLTEuMS0wLjEtMS42LTAuM2MtMC40LTAuMi0wLjctMC41LTAuOS0wLjljLTAuMi0wLjQtMC4zLTAuOC0wLjMtMS4zYzAtMC40LDAuMS0wLjgsMC4yLTEuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMS0wLjMsMC40LTAuNiwwLjctMC44YzAuMy0wLjIsMC43LTAuNCwxLjEtMC41YzAuNC0wLjEsMC44LTAuMiwxLjMtMC4zYzAuNS0wLjEsMS0wLjIsMS41LTAuMmMwLjUtMC4xLDEtMC4x'+
			'LDEuNS0wLjJsLTAuNiwwLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuNy0wLjEtMS4xLTAuNC0xLjVjLTAuMy0wLjMtMC44LTAuNS0xLjUtMC41Yy0wLjQsMC0wLjgsMC4xLTEuMiwwLjNjLTAuNCwwLjItMC42LDAuNS0wLjgsMWwtMS41LTAuNWMwLjItMC43LDAuNi0xLjMsMS4yLTEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNi0wLjQsMS40LTAuNiwyLjMtMC42YzAuNywwLDEuNCwwLjEsMiwwLjRjMC42LDAuMywxLDAuNywxLjIsMS4yYzAuMSwwLjMsMC4yLDAuNiwwLjIsMC45YzAsMC4zLDAsMC42LDAsMXY1LjFoLTEuNHYtMS45JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMC4zLDAuMmMtMC4zLD'+
			'AuNi0wLjgsMS4xLTEuMywxLjRDOTUuNiwzNy42LDk1LDM3LjcsOTQuMiwzNy43eiBNOTQuNSwzNi40YzAuNSwwLDAuOS0wLjEsMS4yLTAuMmMwLjMtMC4yLDAuNi0wLjQsMC44LTAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7czAuMy0wLjUsMC40LTAuOGMwLjEtMC4yLDAuMS0wLjUsMC4yLTAuOGMwLTAuMywwLTAuNiwwLTAuN2wwLjUsMC4yYy0wLjUsMC4xLTEsMC4xLTEuNCwwLjJjLTAuNCwwLjEtMC44LDAuMS0xLjEsMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMywwLjEtMC42LDAuMS0wLjksMC4yYy0wLjIsMC4xLTAuNCwwLjItMC42LDAuM2MtMC4yLDAuMS0wLjMsMC4yLTAuNCwwLjRDOTMs'+
			'MzQuOCw5MywzNSw5MywzNS4yYzAsMC4yLDAuMSwwLjQsMC4yLDAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMSwwLjIsMC4zLDAuMywwLjUsMC40QzkzLjksMzYuNCw5NC4xLDM2LjQsOTQuNSwzNi40eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik0xMDAuNCwzNy41bDIuMS0zLjNoMS43bC0yLjEsMy4zSDEwMC40eiBNMTA1LjksMzcuNXYtMi45aC0xLjdjLTAuMiwwLTAuNCwwLTAuNywwYy0wLjMsMC0wLjUsMC0wLjgtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNi0wLjEtMS4xLTAuNC0xLjYtMC44Yy0wLjQtMC40LTAuNi0xLTAuNi0xLjhjMC0wLjcsMC4yLTEuMywwLjYtMS44YzAuNC'+
			'0wLjQsMC45LTAuNywxLjUtMC45YzAuMy0wLjEsMC41LTAuMSwwLjgtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAsMC41LDAsMC43LDBoMy4zbDAsOC40SDEwNS45eiBNMTA0LjEsMzMuM2gxLjh2LTIuOWgtMS44Yy0wLjEsMC0wLjMsMC0wLjQsMGMtMC4yLDAtMC4zLDAtMC41LDAuMWMtMC4yLDAtMC4zLDAuMS0wLjUsMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMSwwLjEtMC4zLDAuMy0wLjQsMC41Yy0wLjEsMC4yLTAuMSwwLjQtMC4xLDAuNmMwLDAuNCwwLjEsMC42LDAuMywwLjljMC4yLDAuMiwwLjQsMC40LDAuNywwLjVjMC4xLDAsMC4zLDAuMSwwLjQsMC4xJiN4ZDsmI3hhOyYj'+
			'eDk7JiN4OTtDMTAzLjksMzMuMywxMDQsMzMuMywxMDQuMSwzMy4zeiIgY2xhc3M9InN0MiIvPgogPC9nPgo8L3N2Zz4K';
		me.__26__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me.__26__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAyLjkgNjQ7IiB4bWxucz0iaHR0cDovL3d3dy53My'+
			'5vcmcvMjAwMC9zdmciPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNFNkU5RUM7fSYjeGQ7Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I0Q5REZFMzt9JiN4ZDsKCS5zdDJ7ZmlsbDojMUQyMjI4O30mI3hkOwo8L3N0eWxlPgogPHBhdGggZD0iTTIwMi45LDh2NTZIMFY4YzAtNC40LDMuNi04LDgtOGgxODYuOUMxOTkuMywwLDIwMi45LDMuNiwyMDIuOSw4eiIgY2xhc3M9InN0MCIvPgogPGxpbmUgeDI9IjAuNCIgeTI9IjY0IiBjbGFzcz0ic3QxIiB4MT0iMjAyLjQiIHkxPSI2NCIvPgogPGc+CiAgPHBhdGggZD0iTTMyLjUsMzcuNVYyNi40aDguOXYxMS4xaC0xLjZ2'+
			'LTkuNmgtNS42djkuNkgzMi41eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik00My43LDQxLjJWMjkuMWgxLjR2NmgwLjJ2Ni4xSDQzLjd6IE00Ny43LDM3LjdjLTAuOCwwLTEuNS0wLjItMi0wLjZjLTAuNS0wLjQtMS0wLjktMS4yLTEuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMtMC43LTAuNC0xLjQtMC40LTIuM2MwLTAuOCwwLjEtMS42LDAuNC0yLjNjMC4zLTAuNywwLjctMS4yLDEuMi0xLjZjMC41LTAuNCwxLjItMC42LDItMC42YzAuOCwwLDEuNSwwLjIsMiwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjYsMC40LDEsMC45LDEuMywxLjZjMC4zLDAuNywwLjUsMS40LDAuNSwyLjNjMC'+
			'wwLjgtMC4yLDEuNi0wLjUsMi4zYy0wLjMsMC43LTAuNywxLjItMS4zLDEuNkM0OS4xLDM3LjUsNDguNSwzNy43LDQ3LjcsMzcuN3omI3hkOyYjeGE7JiN4OTsmI3g5OyBNNDcuNSwzNi4zYzAuNSwwLDAuOS0wLjEsMS4zLTAuNGMwLjMtMC4zLDAuNi0wLjYsMC44LTEuMWMwLjItMC40LDAuMy0wLjksMC4zLTEuNWMwLTAuNS0wLjEtMS0wLjMtMS41Yy0wLjItMC40LTAuNC0wLjgtMC44LTEuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7cy0wLjgtMC40LTEuMy0wLjRjLTAuNSwwLTAuOSwwLjEtMS4yLDAuNGMtMC4zLDAuMi0wLjYsMC42LTAuNywxYy0wLjIsMC40LTAuMiwxLTAuMiwxLjVjMCwwLjYsMC4x'+
			'LDEuMSwwLjIsMS41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4yLDAuNCwwLjQsMC44LDAuNywxQzQ2LjUsMzYuMSw0Ni45LDM2LjMsNDcuNSwzNi4zeiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik02MC40LDI5LjF2OC40aC0xLjZ2LTUuOGwtNC4yLDUuOGgtMS4zdi04LjRoMS42djUuN2w0LjItNS43SDYwLjR6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTYxLjgsMzcuNWwzLjEtNC4ybC0zLjEtNC4xaDEuOWwyLjEsMi45bDIuMS0yLjloMS45bC0zLjEsNC4xbDMuMSw0LjJINjhsLTIuMS0zbC0yLjEsM0g2MS44eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik03NC43LDM3LjdjLTAuOC'+
			'wwLTEuNi0wLjItMi4yLTAuNmMtMC42LTAuNC0xLjEtMC45LTEuNC0xLjZjLTAuMy0wLjctMC41LTEuNC0wLjUtMi4zYzAtMC45LDAuMi0xLjYsMC41LTIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMy0wLjcsMC44LTEuMiwxLjQtMS41YzAuNi0wLjQsMS4zLTAuNiwyLjItMC42YzAuOCwwLDEuNiwwLjIsMi4yLDAuNmMwLjYsMC40LDEuMSwwLjksMS40LDEuNmMwLjMsMC43LDAuNSwxLjQsMC41LDIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC45LTAuMiwxLjYtMC41LDIuM2MtMC4zLDAuNy0wLjgsMS4yLTEuNCwxLjZDNzYuMiwzNy41LDc1LjUsMzcuNyw3NC43LDM3Ljd6IE03NC43LDM2LjJj'+
			'MC44LDAsMS40LTAuMywxLjgtMC44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40LTAuNSwwLjYtMS4yLDAuNi0yLjFjMC0wLjktMC4yLTEuNi0wLjYtMi4xYy0wLjQtMC41LTEtMC44LTEuOC0wLjhjLTAuNSwwLTEsMC4xLTEuMywwLjRjLTAuNCwwLjItMC42LDAuNi0wLjgsMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjIsMC40LTAuMywwLjktMC4zLDEuNWMwLDAuOSwwLjIsMS42LDAuNiwyLjFDNzMuMywzNS45LDczLjksMzYuMiw3NC43LDM2LjJ6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTc5LjUsMzcuNWwzLjItNC4ybC0zLTQuMmgxLjhsMi45LDQuMXYtNC4xaDEuNXY0LjFsMi45LTQuMW'+
			'gxLjhsLTMsNC4ybDMuMiw0LjJoLTEuOWwtMy00LjF2NC4xaC0xLjV2LTQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0zLDQuMUg3OS41eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik05NC4yLDM3LjdjLTAuNiwwLTEuMS0wLjEtMS42LTAuM2MtMC40LTAuMi0wLjctMC41LTAuOS0wLjljLTAuMi0wLjQtMC4zLTAuOC0wLjMtMS4zYzAtMC40LDAuMS0wLjgsMC4yLTEuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMS0wLjMsMC40LTAuNiwwLjctMC44YzAuMy0wLjIsMC43LTAuNCwxLjEtMC41YzAuNC0wLjEsMC44LTAuMiwxLjMtMC4zYzAuNS0wLjEsMS0wLjIsMS41LTAuMmMwLjUtMC4xLDEtMC4x'+
			'LDEuNS0wLjJsLTAuNiwwLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuNy0wLjEtMS4xLTAuNC0xLjVjLTAuMy0wLjMtMC44LTAuNS0xLjUtMC41Yy0wLjQsMC0wLjgsMC4xLTEuMiwwLjNjLTAuNCwwLjItMC42LDAuNS0wLjgsMWwtMS41LTAuNWMwLjItMC43LDAuNi0xLjMsMS4yLTEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNi0wLjQsMS40LTAuNiwyLjMtMC42YzAuNywwLDEuNCwwLjEsMiwwLjRjMC42LDAuMywxLDAuNywxLjIsMS4yYzAuMSwwLjMsMC4yLDAuNiwwLjIsMC45YzAsMC4zLDAsMC42LDAsMXY1LjFoLTEuNHYtMS45JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMC4zLDAuMmMtMC4zLD'+
			'AuNi0wLjgsMS4xLTEuMywxLjRDOTUuNiwzNy42LDk1LDM3LjcsOTQuMiwzNy43eiBNOTQuNSwzNi40YzAuNSwwLDAuOS0wLjEsMS4yLTAuMmMwLjMtMC4yLDAuNi0wLjQsMC44LTAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7czAuMy0wLjUsMC40LTAuOGMwLjEtMC4yLDAuMS0wLjUsMC4yLTAuOGMwLTAuMywwLTAuNiwwLTAuN2wwLjUsMC4yYy0wLjUsMC4xLTEsMC4xLTEuNCwwLjJjLTAuNCwwLjEtMC44LDAuMS0xLjEsMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMywwLjEtMC42LDAuMS0wLjksMC4yYy0wLjIsMC4xLTAuNCwwLjItMC42LDAuM2MtMC4yLDAuMS0wLjMsMC4yLTAuNCwwLjRDOTMs'+
			'MzQuOCw5MywzNSw5MywzNS4yYzAsMC4yLDAuMSwwLjQsMC4yLDAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMSwwLjIsMC4zLDAuMywwLjUsMC40QzkzLjksMzYuNCw5NC4xLDM2LjQsOTQuNSwzNi40eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik0xMDAuNCwzNy41bDIuMS0zLjNoMS43bC0yLjEsMy4zSDEwMC40eiBNMTA1LjksMzcuNXYtMi45aC0xLjdjLTAuMiwwLTAuNCwwLTAuNywwYy0wLjMsMC0wLjUsMC0wLjgtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNi0wLjEtMS4xLTAuNC0xLjYtMC44Yy0wLjQtMC40LTAuNi0xLTAuNi0xLjhjMC0wLjcsMC4yLTEuMywwLjYtMS44YzAuNC'+
			'0wLjQsMC45LTAuNywxLjUtMC45YzAuMy0wLjEsMC41LTAuMSwwLjgtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAsMC41LDAsMC43LDBoMy4zbDAsOC40SDEwNS45eiBNMTA0LjEsMzMuM2gxLjh2LTIuOWgtMS44Yy0wLjEsMC0wLjMsMC0wLjQsMGMtMC4yLDAtMC4zLDAtMC41LDAuMWMtMC4yLDAtMC4zLDAuMS0wLjUsMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMSwwLjEtMC4zLDAuMy0wLjQsMC41Yy0wLjEsMC4yLTAuMSwwLjQtMC4xLDAuNmMwLDAuNCwwLjEsMC42LDAuMywwLjljMC4yLDAuMiwwLjQsMC40LDAuNywwLjVjMC4xLDAsMC4zLDAuMSwwLjQsMC4xJiN4ZDsmI3hhOyYj'+
			'eDk7JiN4OTtDMTAzLjksMzMuMywxMDQsMzMuMywxMDQuMSwzMy4zeiIgY2xhc3M9InN0MiIvPgogPC9nPgo8L3N2Zz4K';
		me.__26__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		ela=me.__26__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAyLjkgNjQ7IiB4bWxucz0iaHR0cDovL3d3dy53My'+
			'5vcmcvMjAwMC9zdmciPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNFNkU5RUM7fSYjeGQ7Cgkuc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I0Q5REZFMzt9JiN4ZDsKCS5zdDJ7ZmlsbDojMUQyMjI4O30mI3hkOwo8L3N0eWxlPgogPHBhdGggZD0iTTIwMi45LDh2NTZIMFY4YzAtNC40LDMuNi04LDgtOGgxODYuOUMxOTkuMywwLDIwMi45LDMuNiwyMDIuOSw4eiIgY2xhc3M9InN0MCIvPgogPGxpbmUgeDI9IjAuNCIgeTI9IjY0IiBjbGFzcz0ic3QxIiB4MT0iMjAyLjQiIHkxPSI2NCIvPgogPGc+CiAgPHBhdGggZD0iTTMyLjUsMzcuNVYyNi40aDguOXYxMS4xaC0xLjZ2'+
			'LTkuNmgtNS42djkuNkgzMi41eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik00My43LDQxLjJWMjkuMWgxLjR2NmgwLjJ2Ni4xSDQzLjd6IE00Ny43LDM3LjdjLTAuOCwwLTEuNS0wLjItMi0wLjZjLTAuNS0wLjQtMS0wLjktMS4yLTEuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMtMC43LTAuNC0xLjQtMC40LTIuM2MwLTAuOCwwLjEtMS42LDAuNC0yLjNjMC4zLTAuNywwLjctMS4yLDEuMi0xLjZjMC41LTAuNCwxLjItMC42LDItMC42YzAuOCwwLDEuNSwwLjIsMiwwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjYsMC40LDEsMC45LDEuMywxLjZjMC4zLDAuNywwLjUsMS40LDAuNSwyLjNjMC'+
			'wwLjgtMC4yLDEuNi0wLjUsMi4zYy0wLjMsMC43LTAuNywxLjItMS4zLDEuNkM0OS4xLDM3LjUsNDguNSwzNy43LDQ3LjcsMzcuN3omI3hkOyYjeGE7JiN4OTsmI3g5OyBNNDcuNSwzNi4zYzAuNSwwLDAuOS0wLjEsMS4zLTAuNGMwLjMtMC4zLDAuNi0wLjYsMC44LTEuMWMwLjItMC40LDAuMy0wLjksMC4zLTEuNWMwLTAuNS0wLjEtMS0wLjMtMS41Yy0wLjItMC40LTAuNC0wLjgtMC44LTEuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7cy0wLjgtMC40LTEuMy0wLjRjLTAuNSwwLTAuOSwwLjEtMS4yLDAuNGMtMC4zLDAuMi0wLjYsMC42LTAuNywxYy0wLjIsMC40LTAuMiwxLTAuMiwxLjVjMCwwLjYsMC4x'+
			'LDEuMSwwLjIsMS41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4yLDAuNCwwLjQsMC44LDAuNywxQzQ2LjUsMzYuMSw0Ni45LDM2LjMsNDcuNSwzNi4zeiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik02MC40LDI5LjF2OC40aC0xLjZ2LTUuOGwtNC4yLDUuOGgtMS4zdi04LjRoMS42djUuN2w0LjItNS43SDYwLjR6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTYxLjgsMzcuNWwzLjEtNC4ybC0zLjEtNC4xaDEuOWwyLjEsMi45bDIuMS0yLjloMS45bC0zLjEsNC4xbDMuMSw0LjJINjhsLTIuMS0zbC0yLjEsM0g2MS44eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik03NC43LDM3LjdjLTAuOC'+
			'wwLTEuNi0wLjItMi4yLTAuNmMtMC42LTAuNC0xLjEtMC45LTEuNC0xLjZjLTAuMy0wLjctMC41LTEuNC0wLjUtMi4zYzAtMC45LDAuMi0xLjYsMC41LTIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMy0wLjcsMC44LTEuMiwxLjQtMS41YzAuNi0wLjQsMS4zLTAuNiwyLjItMC42YzAuOCwwLDEuNiwwLjIsMi4yLDAuNmMwLjYsMC40LDEuMSwwLjksMS40LDEuNmMwLjMsMC43LDAuNSwxLjQsMC41LDIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC45LTAuMiwxLjYtMC41LDIuM2MtMC4zLDAuNy0wLjgsMS4yLTEuNCwxLjZDNzYuMiwzNy41LDc1LjUsMzcuNyw3NC43LDM3Ljd6IE03NC43LDM2LjJj'+
			'MC44LDAsMS40LTAuMywxLjgtMC44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40LTAuNSwwLjYtMS4yLDAuNi0yLjFjMC0wLjktMC4yLTEuNi0wLjYtMi4xYy0wLjQtMC41LTEtMC44LTEuOC0wLjhjLTAuNSwwLTEsMC4xLTEuMywwLjRjLTAuNCwwLjItMC42LDAuNi0wLjgsMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjIsMC40LTAuMywwLjktMC4zLDEuNWMwLDAuOSwwLjIsMS42LDAuNiwyLjFDNzMuMywzNS45LDczLjksMzYuMiw3NC43LDM2LjJ6IiBjbGFzcz0ic3QyIi8+CiAgPHBhdGggZD0iTTc5LjUsMzcuNWwzLjItNC4ybC0zLTQuMmgxLjhsMi45LDQuMXYtNC4xaDEuNXY0LjFsMi45LTQuMW'+
			'gxLjhsLTMsNC4ybDMuMiw0LjJoLTEuOWwtMy00LjF2NC4xaC0xLjV2LTQuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0zLDQuMUg3OS41eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik05NC4yLDM3LjdjLTAuNiwwLTEuMS0wLjEtMS42LTAuM2MtMC40LTAuMi0wLjctMC41LTAuOS0wLjljLTAuMi0wLjQtMC4zLTAuOC0wLjMtMS4zYzAtMC40LDAuMS0wLjgsMC4yLTEuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMS0wLjMsMC40LTAuNiwwLjctMC44YzAuMy0wLjIsMC43LTAuNCwxLjEtMC41YzAuNC0wLjEsMC44LTAuMiwxLjMtMC4zYzAuNS0wLjEsMS0wLjIsMS41LTAuMmMwLjUtMC4xLDEtMC4x'+
			'LDEuNS0wLjJsLTAuNiwwLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuNy0wLjEtMS4xLTAuNC0xLjVjLTAuMy0wLjMtMC44LTAuNS0xLjUtMC41Yy0wLjQsMC0wLjgsMC4xLTEuMiwwLjNjLTAuNCwwLjItMC42LDAuNS0wLjgsMWwtMS41LTAuNWMwLjItMC43LDAuNi0xLjMsMS4yLTEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNi0wLjQsMS40LTAuNiwyLjMtMC42YzAuNywwLDEuNCwwLjEsMiwwLjRjMC42LDAuMywxLDAuNywxLjIsMS4yYzAuMSwwLjMsMC4yLDAuNiwwLjIsMC45YzAsMC4zLDAsMC42LDAsMXY1LjFoLTEuNHYtMS45JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMC4zLDAuMmMtMC4zLD'+
			'AuNi0wLjgsMS4xLTEuMywxLjRDOTUuNiwzNy42LDk1LDM3LjcsOTQuMiwzNy43eiBNOTQuNSwzNi40YzAuNSwwLDAuOS0wLjEsMS4yLTAuMmMwLjMtMC4yLDAuNi0wLjQsMC44LTAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7czAuMy0wLjUsMC40LTAuOGMwLjEtMC4yLDAuMS0wLjUsMC4yLTAuOGMwLTAuMywwLTAuNiwwLTAuN2wwLjUsMC4yYy0wLjUsMC4xLTEsMC4xLTEuNCwwLjJjLTAuNCwwLjEtMC44LDAuMS0xLjEsMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMywwLjEtMC42LDAuMS0wLjksMC4yYy0wLjIsMC4xLTAuNCwwLjItMC42LDAuM2MtMC4yLDAuMS0wLjMsMC4yLTAuNCwwLjRDOTMs'+
			'MzQuOCw5MywzNSw5MywzNS4yYzAsMC4yLDAuMSwwLjQsMC4yLDAuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMSwwLjIsMC4zLDAuMywwLjUsMC40QzkzLjksMzYuNCw5NC4xLDM2LjQsOTQuNSwzNi40eiIgY2xhc3M9InN0MiIvPgogIDxwYXRoIGQ9Ik0xMDAuNCwzNy41bDIuMS0zLjNoMS43bC0yLjEsMy4zSDEwMC40eiBNMTA1LjksMzcuNXYtMi45aC0xLjdjLTAuMiwwLTAuNCwwLTAuNywwYy0wLjMsMC0wLjUsMC0wLjgtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNi0wLjEtMS4xLTAuNC0xLjYtMC44Yy0wLjQtMC40LTAuNi0xLTAuNi0xLjhjMC0wLjcsMC4yLTEuMywwLjYtMS44YzAuNC'+
			'0wLjQsMC45LTAuNywxLjUtMC45YzAuMy0wLjEsMC41LTAuMSwwLjgtMC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAsMC41LDAsMC43LDBoMy4zbDAsOC40SDEwNS45eiBNMTA0LjEsMzMuM2gxLjh2LTIuOWgtMS44Yy0wLjEsMC0wLjMsMC0wLjQsMGMtMC4yLDAtMC4zLDAtMC41LDAuMWMtMC4yLDAtMC4zLDAuMS0wLjUsMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMSwwLjEtMC4zLDAuMy0wLjQsMC41Yy0wLjEsMC4yLTAuMSwwLjQtMC4xLDAuNmMwLDAuNCwwLjEsMC42LDAuMywwLjljMC4yLDAuMiwwLjQsMC40LDAuNywwLjVjMC4xLDAsMC4zLDAuMSwwLjQsMC4xJiN4ZDsmI3hhOyYj'+
			'eDk7JiN4OTtDMTAzLjksMzMuMywxMDQsMzMuMywxMDQuMSwzMy4zeiIgY2xhc3M9InN0MiIvPgogPC9nPgo8L3N2Zz4K';
		me.__26__imga.setAttribute('src',hs);
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="\u041f\u0440\u0438\u0445\u043e\u0436\u0430\u044f _\u041a\u043d\u043e\u043f\u043a\u0430";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 156px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__26.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__26.onclick=function (e) {
			player.openNext("{node1}","");
		}
		me.__26.onmouseover=function (e) {
			me.__26__img.style.visibility='hidden';
			me.__26__imgo.style.visibility='inherit';
		}
		me.__26.onmouseout=function (e) {
			me.__26__img.style.visibility='inherit';
			me.__26__imgo.style.visibility='hidden';
			me.__26__imga.style.visibility='hidden';
		}
		me.__26.onmousedown=function (e) {
			me.__26__imga.style.visibility='inherit';
			me.__26__imgo.style.visibility='hidden';
		}
		me.__26.onmouseup=function (e) {
			me.__26__imga.style.visibility='hidden';
			if (skin.player.getHasTouch()) {
				me.__26__img.style.visibility='inherit';
			} else {
				me.__26__imgo.style.visibility='inherit';
			}
		}
		me.__26.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_background.appendChild(me.__26);
		me._dropdown_menu.appendChild(me._dropdown_background);
		el=me._dropdown_menu_title_background=document.createElement('div');
		el.ggId="Dropdown Menu Title Background";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 11px;';
		hs+='border-radius : 11px;';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 8px;';
		hs+='position : absolute;';
		hs+='top : 8px;';
		hs+='visibility : inherit;';
		hs+='width : 157px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_menu_title_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_menu_title_background.logicBlock_backgroundcolor = function() {
			var newLogicStateBackgroundColor;
			if (
				((me.elementMouseOver['dropdown_menu_title_background'] == true))
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._dropdown_menu_title_background.style[domTransition]='background-color 0s';
				if (me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor == 0) {
					me._dropdown_menu_title_background.style.backgroundColor="rgba(238,238,238,1)";
				}
				else {
					me._dropdown_menu_title_background.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		me._dropdown_menu_title_background.onclick=function (e) {
			me._dropdown_background.ggVisible = !me._dropdown_background.ggVisible;
			var flag=me._dropdown_background.ggVisible;
			me._dropdown_background.style[domTransition]='none';
			me._dropdown_background.style.visibility=((flag)&&(Number(me._dropdown_background.style.opacity)>0||!me._dropdown_background.style.opacity))?'inherit':'hidden';
			me._dropdown_open.ggVisible = !me._dropdown_open.ggVisible;
			var flag=me._dropdown_open.ggVisible;
			me._dropdown_open.style[domTransition]='none';
			me._dropdown_open.style.visibility=((flag)&&(Number(me._dropdown_open.style.opacity)>0||!me._dropdown_open.style.opacity))?'inherit':'hidden';
			me._dropdown_close.ggVisible = !me._dropdown_close.ggVisible;
			var flag=me._dropdown_close.ggVisible;
			me._dropdown_close.style[domTransition]='none';
			me._dropdown_close.style.visibility=((flag)&&(Number(me._dropdown_close.style.opacity)>0||!me._dropdown_close.style.opacity))?'inherit':'hidden';
		}
		me._dropdown_menu_title_background.onmouseover=function (e) {
			me.elementMouseOver['dropdown_menu_title_background']=true;
			me._dropdown_menu_title_background.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_title_background.onmouseout=function (e) {
			me.elementMouseOver['dropdown_menu_title_background']=false;
			me._dropdown_menu_title_background.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_title_background.ontouchend=function (e) {
			me.elementMouseOver['dropdown_menu_title_background']=false;
			me._dropdown_menu_title_background.logicBlock_backgroundcolor();
		}
		me._dropdown_menu_title_background.ggUpdatePosition=function (useTransition) {
		}
		el=me._dropdown_menu_title=document.createElement('div');
		els=me._dropdown_menu_title__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Dropdown Menu Title";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 38px;';
		hs+='left : 5px;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 156px;';
		hs+='pointer-events:none;';
		hs+='font-weight: bold;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 156px;';
		hs+='height: 38px;';
		hs+='pointer-events: none;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='font-size: 12px;';
		hs+='font-weight: bold;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 4px 1px 4px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._dropdown_menu_title.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._dropdown_menu_title.ggUpdateText();
		player.addListener('changenode', function() {
			me._dropdown_menu_title.ggUpdateText();
		});
		el.appendChild(els);
		me._dropdown_menu_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_menu_title.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_menu_title_background.appendChild(me._dropdown_menu_title);
		el=me._svg_2=document.createElement('div');
		els=me._svg_2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAyLjkgNjQ7IiB4bWxucz0iaHR0cDovL3d3dy53My'+
			'5vcmcvMjAwMC9zdmciPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNGOEY3Rjc7fSYjeGQ7Cgkuc3Qxe2ZpbGw6IzZDNzU3RDt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGQ9Ik04LjEsMGgxODYuNmM0LjUsMCw4LjEsMy42LDguMSw4djQ4YzAsNC40LTMuNiw4LTguMSw4SDguMUMzLjYsNjQsMCw2MC40LDAsNTZWOEMwLDMuNiwzLjYsMCw4LjEsMHoiIGNsYXNzPSJzdDAiLz4KIDxnPgogIDxwYXRoIGQ9Ik0zMi41LDM3LjVWMjYuNGg4Ljl2MTEuMmgtMS42di05LjZoLTUuNnY5LjZIMzIuNXoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNDcuNCwzNy43Yy0wLjgs'+
			'MC0xLjYtMC4yLTIuMi0wLjZjLTAuNi0wLjQtMS4xLTAuOS0xLjQtMS42Yy0wLjMtMC43LTAuNS0xLjQtMC41LTIuM2MwLTAuOSwwLjItMS42LDAuNS0yLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMtMC43LDAuOC0xLjIsMS40LTEuNWMwLjYtMC40LDEuMy0wLjYsMi4yLTAuNmMwLjgsMCwxLjYsMC4yLDIuMiwwLjZjMC42LDAuNCwxLjEsMC45LDEuNCwxLjZjMC4zLDAuNywwLjUsMS40LDAuNSwyLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuOS0wLjIsMS42LTAuNSwyLjNjLTAuMywwLjctMC44LDEuMi0xLjQsMS42QzQ4LjksMzcuNiw0OC4yLDM3LjcsNDcuNCwzNy43eiBNNDcuNCwzNi4yYz'+
			'AuOCwwLDEuNC0wLjMsMS44LTAuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNC0wLjUsMC42LTEuMiwwLjYtMi4xYzAtMC45LTAuMi0xLjYtMC42LTIuMWMtMC40LTAuNS0xLTAuOC0xLjgtMC44Yy0wLjUsMC0xLDAuMS0xLjMsMC40Yy0wLjQsMC4yLTAuNiwwLjYtMC44LDEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4yLDAuNC0wLjMsMC45LTAuMywxLjVjMCwwLjksMC4yLDEuNiwwLjYsMi4xQzQ2LDM2LDQ2LjYsMzYuMiw0Ny40LDM2LjJ6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTUzLjQsMzcuNXYtOC40aDEuNGwzLjEsNi4xbDMuMS02LjFoMS40djguNGgtMS42di01LjFsLTIuNSw1LjFo'+
			'LTAuN2wtMi41LTUuMXY1LjFINTMuNHoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNjguMywzNy43Yy0wLjgsMC0xLjYtMC4yLTIuMi0wLjVjLTAuNi0wLjQtMS4xLTAuOS0xLjUtMS41Yy0wLjMtMC43LTAuNS0xLjQtMC41LTIuM2MwLTAuOSwwLjItMS43LDAuNS0yLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMtMC43LDAuOC0xLjIsMS40LTEuNmMwLjYtMC40LDEuMy0wLjUsMi4xLTAuNWMwLjksMCwxLjYsMC4yLDIuMiwwLjZjMC42LDAuNCwxLDEsMS4zLDEuN2MwLjMsMC43LDAuNCwxLjYsMC40LDIuNmgtMS42di0wLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTEtMC4yLTEuNy0wLjYtMi'+
			'4ycy0wLjktMC43LTEuNi0wLjdjLTAuOCwwLTEuNCwwLjMtMS44LDAuOGMtMC40LDAuNS0wLjYsMS4zLTAuNiwyLjJjMCwwLjksMC4yLDEuNiwwLjYsMi4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40LDAuNSwxLDAuOCwxLjgsMC44YzAuNSwwLDAuOS0wLjEsMS4zLTAuM2MwLjQtMC4yLDAuNy0wLjYsMC45LTFsMS42LDAuNWMtMC4zLDAuNy0wLjgsMS4zLTEuNSwxLjcmI3hkOyYjeGE7JiN4OTsmI3g5O0M2OS45LDM3LjUsNjkuMiwzNy43LDY4LjMsMzcuN3ogTTY1LjQsMzMuOHYtMS4zaDZ2MS4zSDY1LjR6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTgzLjIsMzkuMnYtMS43aC05LjJ2LTgu'+
			'NGgxLjZ2Ni45aDIuNnYtNi45aDEuNnY2LjloMi42di02LjlIODR2Ni45aDAuOXYzLjFIODMuMnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNOTAsMzcuN2MtMC44LDAtMS42LTAuMi0yLjItMC41Yy0wLjYtMC40LTEuMS0wLjktMS41LTEuNWMtMC4zLTAuNy0wLjUtMS40LTAuNS0yLjNjMC0wLjksMC4yLTEuNywwLjUtMi40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLTAuNywwLjgtMS4yLDEuNC0xLjZjMC42LTAuNCwxLjMtMC41LDIuMS0wLjVjMC45LDAsMS42LDAuMiwyLjIsMC42YzAuNiwwLjQsMSwxLDEuMywxLjdjMC4zLDAuNywwLjQsMS42LDAuNCwyLjZoLTEuNnYtMC42JiN4ZDsmI3'+
			'hhOyYjeDk7JiN4OTtjMC0xLTAuMi0xLjctMC42LTIuMnMtMC45LTAuNy0xLjYtMC43Yy0wLjgsMC0xLjQsMC4zLTEuOCwwLjhjLTAuNCwwLjUtMC42LDEuMy0wLjYsMi4yYzAsMC45LDAuMiwxLjYsMC42LDIuMXMxLDAuOCwxLjgsMC44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC41LDAsMC45LTAuMSwxLjMtMC4zYzAuNC0wLjIsMC43LTAuNiwwLjktMWwxLjYsMC41Yy0wLjMsMC43LTAuOCwxLjMtMS41LDEuN0M5MS42LDM3LjUsOTAuOCwzNy43LDkwLDM3Ljd6IE04NywzMy44di0xLjNoNnYxLjMmI3hkOyYjeGE7JiN4OTsmI3g5O0g4N3oiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNOTUuNywz'+
			'Ny41di04LjRoMS42djMuNGg0LjF2LTMuNGgxLjZ2OC40aC0xLjZ2LTMuNGgtNC4xdjMuNEg5NS43eiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik0xMTIuNCwyOS4xdjguNGgtMS42di01LjhsLTQuMiw1LjhoLTEuM3YtOC40aDEuNnY1LjdsNC4yLTUuN0gxMTIuNHoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNMTE0LjMsMzcuNWwyLjEtMy4zaDEuN2wtMi4xLDMuM0gxMTQuM3ogTTExOS45LDM3LjV2LTIuOWgtMS43Yy0wLjIsMC0wLjQsMC0wLjcsMGMtMC4zLDAtMC41LDAtMC44LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjYtMC4xLTEuMS0wLjQtMS42LTAuOGMtMC40LTAuNC0wLj'+
			'YtMS0wLjYtMS44YzAtMC43LDAuMi0xLjMsMC42LTEuOGMwLjQtMC40LDAuOS0wLjcsMS41LTAuOWMwLjMtMC4xLDAuNS0wLjEsMC44LTAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMywwLDAuNSwwLDAuNywwaDMuM2wwLDguNEgxMTkuOXogTTExOC4xLDMzLjNoMS44di0yLjloLTEuOGMtMC4xLDAtMC4zLDAtMC40LDBjLTAuMiwwLTAuMywwLTAuNSwwLjFjLTAuMiwwLTAuMywwLjEtMC41LDAuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjEsMC4xLTAuMywwLjMtMC40LDAuNWMtMC4xLDAuMi0wLjEsMC40LTAuMSwwLjZjMCwwLjQsMC4xLDAuNiwwLjMsMC45YzAuMiwwLjIsMC40LDAuNCwwLjcs'+
			'MC41YzAuMSwwLDAuMywwLjEsMC40LDAuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzExNy45LDMzLjMsMTE4LDMzLjMsMTE4LjEsMzMuM3oiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._svg_2__img.setAttribute('src',hs);
		els.setAttribute('alt','$(ut)');
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_2__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAyLjkgNjQ7IiB4bWxucz0iaHR0cDovL3d3dy53My'+
			'5vcmcvMjAwMC9zdmciPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNFNkU5RUM7fSYjeGQ7Cgkuc3Qxe2ZpbGw6IzZDNzU3RDt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGQ9Ik04LjEsMGgxODYuNmM0LjUsMCw4LjEsMy42LDguMSw4djQ4YzAsNC40LTMuNiw4LTguMSw4SDguMUMzLjYsNjQsMCw2MC40LDAsNTZWOEMwLDMuNiwzLjYsMCw4LjEsMHoiIGNsYXNzPSJzdDAiLz4KIDxnPgogIDxwYXRoIGQ9Ik0zMi41LDM3LjVWMjYuNGg4Ljl2MTEuMmgtMS42di05LjZoLTUuNnY5LjZIMzIuNXoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNDcuNCwzNy43Yy0wLjgs'+
			'MC0xLjYtMC4yLTIuMi0wLjZjLTAuNi0wLjQtMS4xLTAuOS0xLjQtMS42Yy0wLjMtMC43LTAuNS0xLjQtMC41LTIuM2MwLTAuOSwwLjItMS42LDAuNS0yLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMtMC43LDAuOC0xLjIsMS40LTEuNWMwLjYtMC40LDEuMy0wLjYsMi4yLTAuNmMwLjgsMCwxLjYsMC4yLDIuMiwwLjZjMC42LDAuNCwxLjEsMC45LDEuNCwxLjZjMC4zLDAuNywwLjUsMS40LDAuNSwyLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuOS0wLjIsMS42LTAuNSwyLjNjLTAuMywwLjctMC44LDEuMi0xLjQsMS42QzQ4LjksMzcuNiw0OC4yLDM3LjcsNDcuNCwzNy43eiBNNDcuNCwzNi4yYz'+
			'AuOCwwLDEuNC0wLjMsMS44LTAuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNC0wLjUsMC42LTEuMiwwLjYtMi4xYzAtMC45LTAuMi0xLjYtMC42LTIuMWMtMC40LTAuNS0xLTAuOC0xLjgtMC44Yy0wLjUsMC0xLDAuMS0xLjMsMC40Yy0wLjQsMC4yLTAuNiwwLjYtMC44LDEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4yLDAuNC0wLjMsMC45LTAuMywxLjVjMCwwLjksMC4yLDEuNiwwLjYsMi4xQzQ2LDM2LDQ2LjYsMzYuMiw0Ny40LDM2LjJ6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTUzLjQsMzcuNXYtOC40aDEuNGwzLjEsNi4xbDMuMS02LjFoMS40djguNGgtMS42di01LjFsLTIuNSw1LjFo'+
			'LTAuN2wtMi41LTUuMXY1LjFINTMuNHoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNjguMywzNy43Yy0wLjgsMC0xLjYtMC4yLTIuMi0wLjVjLTAuNi0wLjQtMS4xLTAuOS0xLjUtMS41Yy0wLjMtMC43LTAuNS0xLjQtMC41LTIuM2MwLTAuOSwwLjItMS43LDAuNS0yLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMtMC43LDAuOC0xLjIsMS40LTEuNmMwLjYtMC40LDEuMy0wLjUsMi4xLTAuNWMwLjksMCwxLjYsMC4yLDIuMiwwLjZzMSwxLDEuMywxLjdjMC4zLDAuNywwLjQsMS42LDAuNCwyLjZoLTEuNnYtMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xLTAuMi0xLjctMC42LTIuMnMtMC45LT'+
			'AuNy0xLjYtMC43Yy0wLjgsMC0xLjQsMC4zLTEuOCwwLjhjLTAuNCwwLjUtMC42LDEuMy0wLjYsMi4yYzAsMC45LDAuMiwxLjYsMC42LDIuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNCwwLjUsMSwwLjgsMS44LDAuOGMwLjUsMCwwLjktMC4xLDEuMy0wLjNjMC40LTAuMiwwLjctMC42LDAuOS0xbDEuNiwwLjVjLTAuMywwLjctMC44LDEuMy0xLjUsMS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtDNjkuOSwzNy41LDY5LjIsMzcuNyw2OC4zLDM3Ljd6IE02NS40LDMzLjh2LTEuM2g2djEuM0g2NS40eiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik04My4yLDM5LjJ2LTEuN2gtOS4ydi04LjRoMS42djYu'+
			'OWgyLjZ2LTYuOWgxLjZ2Ni45aDIuNnYtNi45SDg0djYuOWgwLjl2My4xSDgzLjJ6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTkwLDM3LjdjLTAuOCwwLTEuNi0wLjItMi4yLTAuNWMtMC42LTAuNC0xLjEtMC45LTEuNS0xLjVjLTAuMy0wLjctMC41LTEuNC0wLjUtMi4zYzAtMC45LDAuMi0xLjcsMC41LTIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMy0wLjcsMC44LTEuMiwxLjQtMS42YzAuNi0wLjQsMS4zLTAuNSwyLjEtMC41YzAuOSwwLDEuNiwwLjIsMi4yLDAuNmMwLjYsMC40LDEsMSwxLjMsMS43YzAuMywwLjcsMC40LDEuNiwwLjQsMi42aC0xLjZ2LTAuNiYjeGQ7JiN4YTsmI3g5Oy'+
			'YjeDk7YzAtMS0wLjItMS43LTAuNi0yLjJzLTAuOS0wLjctMS42LTAuN2MtMC44LDAtMS40LDAuMy0xLjgsMC44Yy0wLjQsMC41LTAuNiwxLjMtMC42LDIuMmMwLDAuOSwwLjIsMS42LDAuNiwyLjFzMSwwLjgsMS44LDAuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNSwwLDAuOS0wLjEsMS4zLTAuM2MwLjQtMC4yLDAuNy0wLjYsMC45LTFsMS42LDAuNWMtMC4zLDAuNy0wLjgsMS4zLTEuNSwxLjdDOTEuNiwzNy41LDkwLjgsMzcuNyw5MCwzNy43eiBNODcsMzMuOHYtMS4zaDZ2MS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtIODd6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTk1LjcsMzcuNXYtOC40'+
			'aDEuNnYzLjRoNC4xdi0zLjRoMS42djguNGgtMS42di0zLjRoLTQuMXYzLjRIOTUuN3oiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNMTEyLjQsMjkuMXY4LjRoLTEuNnYtNS44bC00LjIsNS44aC0xLjN2LTguNGgxLjZ2NS43bDQuMi01LjdIMTEyLjR6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTExNC4zLDM3LjVsMi4xLTMuM2gxLjdsLTIuMSwzLjNIMTE0LjN6IE0xMTkuOSwzNy41di0yLjloLTEuN2MtMC4yLDAtMC40LDAtMC43LDBjLTAuMywwLTAuNSwwLTAuOC0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LTAuMS0xLjEtMC40LTEuNi0wLjhjLTAuNC0wLjQtMC42LTEtMC42LT'+
			'EuOGMwLTAuNywwLjItMS4zLDAuNi0xLjhjMC40LTAuNCwwLjktMC43LDEuNS0wLjljMC4zLTAuMSwwLjUtMC4xLDAuOC0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMsMCwwLjUsMCwwLjcsMGgzLjNsMCw4LjRIMTE5Ljl6IE0xMTguMSwzMy4zaDEuOHYtMi45aC0xLjhjLTAuMSwwLTAuMywwLTAuNCwwcy0wLjMsMC0wLjUsMC4xYy0wLjIsMC0wLjMsMC4xLTAuNSwwLjImI3hkOyYjeGE7JiN4OTsmI3g5O3MtMC4zLDAuMy0wLjQsMC41Yy0wLjEsMC4yLTAuMSwwLjQtMC4xLDAuNmMwLDAuNCwwLjEsMC42LDAuMywwLjljMC4yLDAuMiwwLjQsMC40LDAuNywwLjVjMC4xLDAsMC4zLDAuMSwwLjQs'+
			'MC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtTMTE4LDMzLjMsMTE4LjEsMzMuM3oiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._svg_2__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		ela=me._svg_2__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAyLjkgNjQ7IiB4bWxucz0iaHR0cDovL3d3dy53My'+
			'5vcmcvMjAwMC9zdmciPgogPHN0eWxlIHR5cGU9InRleHQvY3NzIj4mI3hkOwoJLnN0MHtmaWxsOiNFNkU5RUM7fSYjeGQ7Cgkuc3Qxe2ZpbGw6IzZDNzU3RDt9JiN4ZDsKPC9zdHlsZT4KIDxwYXRoIGQ9Ik04LjEsMGgxODYuNmM0LjUsMCw4LjEsMy42LDguMSw4djQ4YzAsNC40LTMuNiw4LTguMSw4SDguMUMzLjYsNjQsMCw2MC40LDAsNTZWOEMwLDMuNiwzLjYsMCw4LjEsMHoiIGNsYXNzPSJzdDAiLz4KIDxnPgogIDxwYXRoIGQ9Ik0zMi41LDM3LjVWMjYuNGg4Ljl2MTEuMmgtMS42di05LjZoLTUuNnY5LjZIMzIuNXoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNDcuNCwzNy43Yy0wLjgs'+
			'MC0xLjYtMC4yLTIuMi0wLjZjLTAuNi0wLjQtMS4xLTAuOS0xLjQtMS42Yy0wLjMtMC43LTAuNS0xLjQtMC41LTIuM2MwLTAuOSwwLjItMS42LDAuNS0yLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMtMC43LDAuOC0xLjIsMS40LTEuNWMwLjYtMC40LDEuMy0wLjYsMi4yLTAuNmMwLjgsMCwxLjYsMC4yLDIuMiwwLjZjMC42LDAuNCwxLjEsMC45LDEuNCwxLjZjMC4zLDAuNywwLjUsMS40LDAuNSwyLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuOS0wLjIsMS42LTAuNSwyLjNjLTAuMywwLjctMC44LDEuMi0xLjQsMS42QzQ4LjksMzcuNiw0OC4yLDM3LjcsNDcuNCwzNy43eiBNNDcuNCwzNi4yYz'+
			'AuOCwwLDEuNC0wLjMsMS44LTAuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNC0wLjUsMC42LTEuMiwwLjYtMi4xYzAtMC45LTAuMi0xLjYtMC42LTIuMWMtMC40LTAuNS0xLTAuOC0xLjgtMC44Yy0wLjUsMC0xLDAuMS0xLjMsMC40Yy0wLjQsMC4yLTAuNiwwLjYtMC44LDEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4yLDAuNC0wLjMsMC45LTAuMywxLjVjMCwwLjksMC4yLDEuNiwwLjYsMi4xQzQ2LDM2LDQ2LjYsMzYuMiw0Ny40LDM2LjJ6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTUzLjQsMzcuNXYtOC40aDEuNGwzLjEsNi4xbDMuMS02LjFoMS40djguNGgtMS42di01LjFsLTIuNSw1LjFo'+
			'LTAuN2wtMi41LTUuMXY1LjFINTMuNHoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNjguMywzNy43Yy0wLjgsMC0xLjYtMC4yLTIuMi0wLjVjLTAuNi0wLjQtMS4xLTAuOS0xLjUtMS41Yy0wLjMtMC43LTAuNS0xLjQtMC41LTIuM2MwLTAuOSwwLjItMS43LDAuNS0yLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMtMC43LDAuOC0xLjIsMS40LTEuNmMwLjYtMC40LDEuMy0wLjUsMi4xLTAuNWMwLjksMCwxLjYsMC4yLDIuMiwwLjZzMSwxLDEuMywxLjdjMC4zLDAuNywwLjQsMS42LDAuNCwyLjZoLTEuNnYtMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xLTAuMi0xLjctMC42LTIuMnMtMC45LT'+
			'AuNy0xLjYtMC43Yy0wLjgsMC0xLjQsMC4zLTEuOCwwLjhjLTAuNCwwLjUtMC42LDEuMy0wLjYsMi4yYzAsMC45LDAuMiwxLjYsMC42LDIuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNCwwLjUsMSwwLjgsMS44LDAuOGMwLjUsMCwwLjktMC4xLDEuMy0wLjNjMC40LTAuMiwwLjctMC42LDAuOS0xbDEuNiwwLjVjLTAuMywwLjctMC44LDEuMy0xLjUsMS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtDNjkuOSwzNy41LDY5LjIsMzcuNyw2OC4zLDM3Ljd6IE02NS40LDMzLjh2LTEuM2g2djEuM0g2NS40eiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik04My4yLDM5LjJ2LTEuN2gtOS4ydi04LjRoMS42djYu'+
			'OWgyLjZ2LTYuOWgxLjZ2Ni45aDIuNnYtNi45SDg0djYuOWgwLjl2My4xSDgzLjJ6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTkwLDM3LjdjLTAuOCwwLTEuNi0wLjItMi4yLTAuNWMtMC42LTAuNC0xLjEtMC45LTEuNS0xLjVjLTAuMy0wLjctMC41LTEuNC0wLjUtMi4zYzAtMC45LDAuMi0xLjcsMC41LTIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMy0wLjcsMC44LTEuMiwxLjQtMS42YzAuNi0wLjQsMS4zLTAuNSwyLjEtMC41YzAuOSwwLDEuNiwwLjIsMi4yLDAuNmMwLjYsMC40LDEsMSwxLjMsMS43YzAuMywwLjcsMC40LDEuNiwwLjQsMi42aC0xLjZ2LTAuNiYjeGQ7JiN4YTsmI3g5Oy'+
			'YjeDk7YzAtMS0wLjItMS43LTAuNi0yLjJzLTAuOS0wLjctMS42LTAuN2MtMC44LDAtMS40LDAuMy0xLjgsMC44Yy0wLjQsMC41LTAuNiwxLjMtMC42LDIuMmMwLDAuOSwwLjIsMS42LDAuNiwyLjFzMSwwLjgsMS44LDAuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNSwwLDAuOS0wLjEsMS4zLTAuM2MwLjQtMC4yLDAuNy0wLjYsMC45LTFsMS42LDAuNWMtMC4zLDAuNy0wLjgsMS4zLTEuNSwxLjdDOTEuNiwzNy41LDkwLjgsMzcuNyw5MCwzNy43eiBNODcsMzMuOHYtMS4zaDZ2MS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtIODd6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTk1LjcsMzcuNXYtOC40'+
			'aDEuNnYzLjRoNC4xdi0zLjRoMS42djguNGgtMS42di0zLjRoLTQuMXYzLjRIOTUuN3oiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNMTEyLjQsMjkuMXY4LjRoLTEuNnYtNS44bC00LjIsNS44aC0xLjN2LTguNGgxLjZ2NS43bDQuMi01LjdIMTEyLjR6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTExNC4zLDM3LjVsMi4xLTMuM2gxLjdsLTIuMSwzLjNIMTE0LjN6IE0xMTkuOSwzNy41di0yLjloLTEuN2MtMC4yLDAtMC40LDAtMC43LDBjLTAuMywwLTAuNSwwLTAuOC0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LTAuMS0xLjEtMC40LTEuNi0wLjhjLTAuNC0wLjQtMC42LTEtMC42LT'+
			'EuOGMwLTAuNywwLjItMS4zLDAuNi0xLjhjMC40LTAuNCwwLjktMC43LDEuNS0wLjljMC4zLTAuMSwwLjUtMC4xLDAuOC0wLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMsMCwwLjUsMCwwLjcsMGgzLjNsMCw4LjRIMTE5Ljl6IE0xMTguMSwzMy4zaDEuOHYtMi45aC0xLjhjLTAuMSwwLTAuMywwLTAuNCwwcy0wLjMsMC0wLjUsMC4xYy0wLjIsMC0wLjMsMC4xLTAuNSwwLjImI3hkOyYjeGE7JiN4OTsmI3g5O3MtMC4zLDAuMy0wLjQsMC41Yy0wLjEsMC4yLTAuMSwwLjQtMC4xLDAuNmMwLDAuNCwwLjEsMC42LDAuMywwLjljMC4yLDAuMiwwLjQsMC40LDAuNywwLjVjMC4xLDAsMC4zLDAuMSwwLjQs'+
			'MC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtTMTE4LDMzLjMsMTE4LjEsMzMuM3oiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._svg_2__imga.setAttribute('src',hs);
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="Svg 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 158px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._svg_2.onmouseover=function (e) {
			me._svg_2__img.style.visibility='hidden';
			me._svg_2__imgo.style.visibility='inherit';
		}
		me._svg_2.onmouseout=function (e) {
			me._svg_2__img.style.visibility='inherit';
			me._svg_2__imgo.style.visibility='hidden';
			me._svg_2__imga.style.visibility='hidden';
		}
		me._svg_2.onmousedown=function (e) {
			me._svg_2__imga.style.visibility='inherit';
			me._svg_2__imgo.style.visibility='hidden';
		}
		me._svg_2.onmouseup=function (e) {
			me._svg_2__imga.style.visibility='hidden';
			if (skin.player.getHasTouch()) {
				me._svg_2__img.style.visibility='inherit';
			} else {
				me._svg_2__imgo.style.visibility='inherit';
			}
		}
		me._svg_2.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_menu_title_background.appendChild(me._svg_2);
		el=me._dropdown_open=document.createElement('div');
		els=me._dropdown_open__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDIwIDE5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAxOTsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMD'+
			'AwL3N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2Rpc3BsYXk6bm9uZTt9JiN4ZDsKCS5zdDF7ZGlzcGxheTppbmxpbmU7ZmlsbDojMTkzNTVCO30mI3hkOwoJLnN0MntkaXNwbGF5OmlubGluZTtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7fSYjeGQ7Cgkuc3Qze2Rpc3BsYXk6aW5saW5lO30mI3hkOwoJLnN0NHtjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDE3Njc1ODEzODExOTA4MDgzNjQ0MDAwMDAwOTc2NTcxOTc3MjU4MzQ1NjQwM18pO30mI3hkOwoJLnN0NXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cgkuc3Q2e2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjt9JiN4'+
			'ZDsKCS5zdDd7ZGlzcGxheTpub25lO2ZpbGw6IzFEMjMyOTt9JiN4ZDsKCS5zdDh7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAxNTU4NTA4NTMwODg4NjY2MDQ4MzAwMDAwMDc2MzQyOTczMTk4NzMxODE4NzBfKTt9JiN4ZDsKCS5zdDl7ZmlsbDojMUQyMzI5O30mI3hkOwoJLnN0MTB7ZGlzcGxheTppbmxpbmU7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAwMzMzNTE3ODE1NjQ0MDA0MDU4ODAwMDAwMTYxNDU3MjY2NzkyODY4MzM4NDRfKTt9JiN4ZDsKCS5zdDExe2Rpc3BsYXk6aW5saW5lO2ZpbGw6IzMzMzMzMzt9JiN4ZDsKCS5zdDEye2Rpc3BsYXk6bm9uZTtmaWxsOiNGRkZGRkY7fSYjeG'+
			'Q7Cjwvc3R5bGU+CiA8ZyBjbGFzcz0ic3QwIj4KICA8cGF0aCBkPSJNMCw1LjM2YzAtMS4yNiwwLTEuOSwwLjE0LTIuNDJjMC4zNy0xLjM2LDEuNDQtMi40MywyLjgtMi44QzMuNDYsMCw0LjEsMCw1LjM2LDBoOS4yOGMxLjI2LDAsMS45LDAsMi40MiwwLjE0JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4zNiwwLjM3LDIuNDMsMS40NCwyLjgsMi44QzIwLDMuNDYsMjAsNC4xLDIwLDUuMzZ2OC4yOGMwLDEuMjYsMCwxLjktMC4xNCwyLjQyYy0wLjM3LDEuMzYtMS40NCwyLjQzLTIuOCwyLjgmI3hkOyYjeGE7JiN4OTsmI3g5O0MxNi41NCwxOSwxNS45LDE5LDE0LjY0LDE5SDUuMzZjLTEuMjYsMC0xLjks'+
			'MC0yLjQyLTAuMTRjLTEuMzYtMC4zNy0yLjQzLTEuNDQtMi44LTIuOEMwLDE1LjU0LDAsMTQuOSwwLDEzLjY0VjUuMzZ6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTAuNSw1LjM2YzAtMS4zLDAtMS44NSwwLjEyLTIuMjhjMC4zMy0xLjE5LDEuMjYtMi4xMywyLjQ1LTIuNDVDMy41MSwwLjUsNC4wNiwwLjUsNS4zNiwwLjVoOS4yOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMywwLDEuODUsMCwyLjI4LDAuMTJjMS4xOSwwLjMzLDIuMTMsMS4yNiwyLjQ1LDIuNDVjMC4xMiwwLjQ0LDAuMTIsMC45OSwwLjEyLDIuMjh2OC4yOGMwLDEuMywwLDEuODUtMC4xMiwyLjI4JiN4ZDsmI3hhOyYjeDk7Ji'+
			'N4OTtjLTAuMzMsMS4xOS0xLjI2LDIuMTMtMi40NSwyLjQ1Yy0wLjQ0LDAuMTItMC45OSwwLjEyLTIuMjgsMC4xMkg1LjM2Yy0xLjMsMC0xLjg1LDAtMi4yOC0wLjEyYy0xLjE5LTAuMzMtMi4xMy0xLjI2LTIuNDUtMi40NSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzAuNSwxNS40OSwwLjUsMTQuOTQsMC41LDEzLjY0VjUuMzZ6IiBjbGFzcz0ic3QyIi8+CiAgPGcgY2xhc3M9InN0MyI+CiAgIDxkZWZzPgogICAgPHJlY3QgeD0iNC41IiB5PSIzLjUiIGhlaWdodD0iMTEiIGlkPSJTVkdJRF8xXyIgd2lkdGg9IjExIi8+CiAgIDwvZGVmcz4KICAgPGNsaXBQYXRoIGlkPSJTVkdJRF8wMDAwMDE2NzM1NTU4'+
			'OTY2MDEyNjQ3ODMxMDAwMDAxMDI4NzI4Nzg3MjM1MzMwODU3Nl8iPgogICAgPHVzZSB4bGluazpocmVmPSIjU1ZHSURfMV8iIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIvPgogICA8L2NsaXBQYXRoPgogICA8ZyBzdHlsZT0iY2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAxNjczNTU1ODk2NjAxMjY0NzgzMTAwMDAwMTAyODcyODc4NzIzNTMzMDg1NzZfKTsiPgogICAgPHBhdGggZD0iTTE0LjEyLDkuNTloLTMuNTR2My41NEg5LjQxVjkuNTlINS44OFY4LjQxaDMuNTRWNC44OGgxLjE4djMuNTRoMy41NFY5LjU5eiIgY2xhc3M9InN0NSIvPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcgY2xhc3'+
			'M9InN0MCI+CiAgPHBhdGggZD0iTTQwLjk5LDE4LjE1SDI5LjQ1Yy0xLjU5LDAtMi44OC0xLjI5LTIuODgtMi44OFYzLjczYzAtMS41OSwxLjI5LTIuODgsMi44OC0yLjg4aDExLjU0JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS41OSwwLDIuODgsMS4yOSwyLjg4LDIuODh2MTEuNTRDNDMuODcsMTYuODYsNDIuNTgsMTguMTUsNDAuOTksMTguMTV6IiBjbGFzcz0ic3Q2Ii8+CiA8L2c+CiA8cGF0aCBkPSJNMzYuNzgsMTEuMzFsLTEuOTMtMS45M2wxLjkzLTEuOTNsLTAuNTktMC41OWwtMi41MiwyLjUybDIuNTIsMi41MkwzNi43OCwxMS4zMXoiIGNsYXNzPSJzdDciLz4KIDxnIGNsYXNzPSJzdDAiPgog'+
			'IDxwYXRoIGQ9Ik0zLjcxLDAuMDdoMTIuNThjMS43NCwwLDMuMTQsMS40MSwzLjE0LDMuMTR2MTIuNThjMCwxLjc0LTEuNDEsMy4xNC0zLjE0LDMuMTRIMy43MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0xLjc0LDAtMy4xNC0xLjQxLTMuMTQtMy4xNFYzLjIxQzAuNTcsMS40NywxLjk3LDAuMDcsMy43MSwwLjA3eiIgY2xhc3M9InN0NiIvPgogIDxnIGNsYXNzPSJzdDMiPgogICA8ZGVmcz4KICAgIDxyZWN0IHg9IjYuODYiIHk9IjYuMzYiIGhlaWdodD0iNi4yOSIgaWQ9IlNWR0lEXzAwMDAwMTQ3OTAxMzU1MjI3NDQ2Mjg1NzYwMDAwMDAyOTY5NTMwNzIzMTEyMTg2NTU3XyIgd2lkdGg9IjYuMjkiLz'+
			'4KICAgPC9kZWZzPgogICA8Y2xpcFBhdGggaWQ9IlNWR0lEXzAwMDAwMDQ0MTUyNzU0OTg4MjY4NTg4NTkwMDAwMDA3OTA1NzcxODAxNzUyNzI0NjU1XyI+CiAgICA8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8wMDAwMDE0NzkwMTM1NTIyNzQ0NjI4NTc2MDAwMDAwMjk2OTUzMDcyMzExMjE4NjU1N18iIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIvPgogICA8L2NsaXBQYXRoPgogICA8ZyBzdHlsZT0iY2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAwNDQxNTI3NTQ5ODgyNjg1ODg1OTAwMDAwMDc5MDU3NzE4MDE3NTI3MjQ2NTVfKTsiPgogICAgPHBhdGggZD0iTTEyLjM2LDkuOTFINy42NFY5LjI0'+
			'aDQuNzJWOS45MXoiIGNsYXNzPSJzdDkiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KIDxnIGNsYXNzPSJzdDAiPgogIDxkZWZzPgogICA8cmVjdCB4PSI2Ljg2IiB5PSI2LjM2IiBoZWlnaHQ9IjYuMjkiIGlkPSJTVkdJRF8wMDAwMDEyOTg5NTQwNTQzMTM3NDYwNTQ0MDAwMDAxMjA2NDc3ODQzMjYyNjI5NTk3Nl8iIHdpZHRoPSI2LjI5Ii8+CiAgPC9kZWZzPgogIDxjbGlwUGF0aCBjbGFzcz0ic3QzIiBpZD0iU1ZHSURfMDAwMDAwNzY1Nzg2MjM1MDcxNzIwOTg5MzAwMDAwMTAxNDA5MTgwNzgyNzQ3MzM3NDRfIj4KICAgPHVzZSB4bGluazpocmVmPSIjU1ZHSURfMDAwMDAxMjk4OTU0MDU0MzEzNz'+
			'Q2MDU0NDAwMDAwMTIwNjQ3Nzg0MzI2MjYyOTU5NzZfIiBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4KICA8L2NsaXBQYXRoPgogIDxnIHN0eWxlPSJkaXNwbGF5OmlubGluZTtjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDA3NjU3ODYyMzUwNzE3MjA5ODkzMDAwMDAxMDE0MDkxODA3ODI3NDczMzc0NF8pOyI+CiAgIDxwYXRoIGQ9Ik0xMC40MSw3LjE0djQuNzJIOS43NFY3LjE0SDEwLjQxeiIgY2xhc3M9InN0OSIvPgogIDwvZz4KIDwvZz4KIDxnIGNsYXNzPSJzdDAiPgogIDxwYXRoIGQ9Ik0wLjUzLDE1Ljg0VjMuMjFjMC0xLjc0LDEuNDEtMy4xNiwzLjE2LTMuMTZoMTIuNjNjMS43NCww'+
			'LDMuMTYsMS40MSwzLjE2LDMuMTZ2MTIuNjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDEuNzQtMS40MSwzLjE2LTMuMTYsMy4xNkgzLjY4QzEuOTQsMTksMC41MywxNy41OSwwLjUzLDE1Ljg0eiIgY2xhc3M9InN0MTEiLz4KIDwvZz4KIDxwYXRoIGQ9Ik04LjAxLDExLjIzbDIuMTEtMi4xMWwyLjExLDIuMTFsMC42NS0wLjY1bC0yLjc2LTIuNzZsLTIuNzYsMi43Nkw4LjAxLDExLjIzeiIgY2xhc3M9InN0MTIiLz4KIDxwYXRoIGQ9Ik0xNS4zNSw1LjE4TDEwLDEwLjUyTDQuNjQsNS4xOEwzLDYuODJsNyw3bDctN0wxNS4zNSw1LjE4eiIgY2xhc3M9InN0OSIvPgo8L3N2Zz4K';
		me._dropdown_open__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Dropdown Open";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 15px;';
		hs+='left : 126px;';
		hs+='position : absolute;';
		hs+='top : 18px;';
		hs+='visibility : inherit;';
		hs+='width : 15px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_open.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_menu_title_background.appendChild(me._dropdown_open);
		el=me._dropdown_close=document.createElement('div');
		els=me._dropdown_close__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDIwIDE5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAxOTsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMD'+
			'AwL3N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2Rpc3BsYXk6bm9uZTt9JiN4ZDsKCS5zdDF7ZGlzcGxheTppbmxpbmU7ZmlsbDojMTkzNTVCO30mI3hkOwoJLnN0MntkaXNwbGF5OmlubGluZTtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7fSYjeGQ7Cgkuc3Qze2Rpc3BsYXk6aW5saW5lO30mI3hkOwoJLnN0NHtjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDAxNjA3NDg2MDE5ODEwMDAxODkxMDAwMDAxMTA4NDMxMTc3NDQyOTAwMjY1MV8pO30mI3hkOwoJLnN0NXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cgkuc3Q2e2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjt9JiN4'+
			'ZDsKCS5zdDd7ZGlzcGxheTpub25lO2ZpbGw6IzFEMjMyOTt9JiN4ZDsKCS5zdDh7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAxNTI5Nzg5Mjc3MDU4MzY3NzQ3MTAwMDAwMDEzNzgzNjk2MDQ3MTUxODcwNzZfKTt9JiN4ZDsKCS5zdDl7ZmlsbDojMUQyMzI5O30mI3hkOwoJLnN0MTB7ZGlzcGxheTppbmxpbmU7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAxMjA1Mzk3NzA4MzA4NDQ0MTE4MDAwMDAwMTU5Mjk2NDYyOTc1Nzc0MTE5NjlfKTt9JiN4ZDsKCS5zdDExe2Rpc3BsYXk6aW5saW5lO2ZpbGw6IzMzMzMzMzt9JiN4ZDsKCS5zdDEye2Rpc3BsYXk6bm9uZTtmaWxsOiNGRkZGRkY7fSYjeG'+
			'Q7Cjwvc3R5bGU+CiA8ZyBjbGFzcz0ic3QwIj4KICA8cGF0aCBkPSJNMCw1LjM2YzAtMS4yNiwwLTEuOSwwLjE0LTIuNDJjMC4zNy0xLjM2LDEuNDQtMi40MywyLjgtMi44QzMuNDYsMCw0LjEsMCw1LjM2LDBoOS4yOGMxLjI2LDAsMS45LDAsMi40MiwwLjE0JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4zNiwwLjM3LDIuNDMsMS40NCwyLjgsMi44QzIwLDMuNDYsMjAsNC4xLDIwLDUuMzZ2OC4yOGMwLDEuMjYsMCwxLjktMC4xNCwyLjQyYy0wLjM3LDEuMzYtMS40NCwyLjQzLTIuOCwyLjgmI3hkOyYjeGE7JiN4OTsmI3g5O0MxNi41NCwxOSwxNS45LDE5LDE0LjY0LDE5SDUuMzZjLTEuMjYsMC0xLjks'+
			'MC0yLjQyLTAuMTRjLTEuMzYtMC4zNy0yLjQzLTEuNDQtMi44LTIuOEMwLDE1LjU0LDAsMTQuOSwwLDEzLjY0VjUuMzZ6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTAuNSw1LjM2YzAtMS4zLDAtMS44NSwwLjEyLTIuMjhjMC4zMy0xLjE5LDEuMjYtMi4xMywyLjQ1LTIuNDVDMy41MSwwLjUsNC4wNiwwLjUsNS4zNiwwLjVoOS4yOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMywwLDEuODUsMCwyLjI4LDAuMTJjMS4xOSwwLjMzLDIuMTMsMS4yNiwyLjQ1LDIuNDVjMC4xMiwwLjQ0LDAuMTIsMC45OSwwLjEyLDIuMjh2OC4yOGMwLDEuMywwLDEuODUtMC4xMiwyLjI4JiN4ZDsmI3hhOyYjeDk7Ji'+
			'N4OTtjLTAuMzMsMS4xOS0xLjI2LDIuMTMtMi40NSwyLjQ1Yy0wLjQ0LDAuMTItMC45OSwwLjEyLTIuMjgsMC4xMkg1LjM2Yy0xLjMsMC0xLjg1LDAtMi4yOC0wLjEyYy0xLjE5LTAuMzMtMi4xMy0xLjI2LTIuNDUtMi40NSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzAuNSwxNS40OSwwLjUsMTQuOTQsMC41LDEzLjY0VjUuMzZ6IiBjbGFzcz0ic3QyIi8+CiAgPGcgY2xhc3M9InN0MyI+CiAgIDxkZWZzPgogICAgPHJlY3QgeD0iNC41IiB5PSIzLjUiIGhlaWdodD0iMTEiIGlkPSJTVkdJRF8xXyIgd2lkdGg9IjExIi8+CiAgIDwvZGVmcz4KICAgPGNsaXBQYXRoIGlkPSJTVkdJRF8wMDAwMDE1MTUyMzk3'+
			'Mjg1NDExMDM0NjcxMDAwMDAwMTE2NzA1NDQwNDIxODczOTg1Nl8iPgogICAgPHVzZSB4bGluazpocmVmPSIjU1ZHSURfMV8iIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIvPgogICA8L2NsaXBQYXRoPgogICA8ZyBzdHlsZT0iY2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAxNTE1MjM5NzI4NTQxMTAzNDY3MTAwMDAwMDExNjcwNTQ0MDQyMTg3Mzk4NTZfKTsiPgogICAgPHBhdGggZD0iTTE0LjEyLDkuNTloLTMuNTR2My41NEg5LjQxVjkuNTlINS44OFY4LjQxaDMuNTRWNC44OGgxLjE4djMuNTRoMy41NFY5LjU5eiIgY2xhc3M9InN0NSIvPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcgY2xhc3'+
			'M9InN0MCI+CiAgPHBhdGggZD0iTTQwLjk5LDE4LjE1SDI5LjQ1Yy0xLjU5LDAtMi44OC0xLjI5LTIuODgtMi44OFYzLjczYzAtMS41OSwxLjI5LTIuODgsMi44OC0yLjg4aDExLjU0JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS41OSwwLDIuODgsMS4yOSwyLjg4LDIuODh2MTEuNTRDNDMuODcsMTYuODYsNDIuNTgsMTguMTUsNDAuOTksMTguMTV6IiBjbGFzcz0ic3Q2Ii8+CiA8L2c+CiA8cGF0aCBkPSJNMzYuNzgsMTEuMzFsLTEuOTMtMS45M2wxLjkzLTEuOTNsLTAuNTktMC41OWwtMi41MiwyLjUybDIuNTIsMi41MkwzNi43OCwxMS4zMXoiIGNsYXNzPSJzdDciLz4KIDxnIGNsYXNzPSJzdDAiPgog'+
			'IDxwYXRoIGQ9Ik0zLjcxLDAuMDdoMTIuNThjMS43NCwwLDMuMTQsMS40MSwzLjE0LDMuMTR2MTIuNThjMCwxLjc0LTEuNDEsMy4xNC0zLjE0LDMuMTRIMy43MSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0xLjc0LDAtMy4xNC0xLjQxLTMuMTQtMy4xNFYzLjIxQzAuNTcsMS40NywxLjk3LDAuMDcsMy43MSwwLjA3eiIgY2xhc3M9InN0NiIvPgogIDxnIGNsYXNzPSJzdDMiPgogICA8ZGVmcz4KICAgIDxyZWN0IHg9IjYuODYiIHk9IjYuMzYiIGhlaWdodD0iNi4yOSIgaWQ9IlNWR0lEXzAwMDAwMTE5ODMxNTkyNDA0OTIwMDc4MjkwMDAwMDE2NTY5ODcwMTc0NzkxMTg0NTczXyIgd2lkdGg9IjYuMjkiLz'+
			'4KICAgPC9kZWZzPgogICA8Y2xpcFBhdGggaWQ9IlNWR0lEXzAwMDAwMDUwNjUwMTA3NDczMzY1MjExMjgwMDAwMDA4NDIyMTQ0NTcyNDE4Mjk5MDU2XyI+CiAgICA8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8wMDAwMDExOTgzMTU5MjQwNDkyMDA3ODI5MDAwMDAxNjU2OTg3MDE3NDc5MTE4NDU3M18iIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIvPgogICA8L2NsaXBQYXRoPgogICA8ZyBzdHlsZT0iY2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAwNTA2NTAxMDc0NzMzNjUyMTEyODAwMDAwMDg0MjIxNDQ1NzI0MTgyOTkwNTZfKTsiPgogICAgPHBhdGggZD0iTTEyLjM2LDkuOTFINy42NFY5LjI0'+
			'aDQuNzJWOS45MXoiIGNsYXNzPSJzdDkiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KIDxnIGNsYXNzPSJzdDAiPgogIDxkZWZzPgogICA8cmVjdCB4PSI2Ljg2IiB5PSI2LjM2IiBoZWlnaHQ9IjYuMjkiIGlkPSJTVkdJRF8wMDAwMDEyNTU2NjAzNTM4MTQ0ODEyNTMxMDAwMDAwMjgwNjExNzUxMjg4ODQwNjY2NF8iIHdpZHRoPSI2LjI5Ii8+CiAgPC9kZWZzPgogIDxjbGlwUGF0aCBjbGFzcz0ic3QzIiBpZD0iU1ZHSURfMDAwMDAxODE4MDQ5MzIzNzE5OTM3Mjg1NzAwMDAwMTQ5MzY2MTY1NTkxOTY1MTc1MTJfIj4KICAgPHVzZSB4bGluazpocmVmPSIjU1ZHSURfMDAwMDAxMjU1NjYwMzUzODE0ND'+
			'gxMjUzMTAwMDAwMDI4MDYxMTc1MTI4ODg0MDY2NjRfIiBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4KICA8L2NsaXBQYXRoPgogIDxnIHN0eWxlPSJkaXNwbGF5OmlubGluZTtjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDE4MTgwNDkzMjM3MTk5MzcyODU3MDAwMDAxNDkzNjYxNjU1OTE5NjUxNzUxMl8pOyI+CiAgIDxwYXRoIGQ9Ik0xMC40MSw3LjE0djQuNzJIOS43NFY3LjE0SDEwLjQxeiIgY2xhc3M9InN0OSIvPgogIDwvZz4KIDwvZz4KIDxnIGNsYXNzPSJzdDAiPgogIDxwYXRoIGQ9Ik0wLjUzLDE1Ljg0VjMuMjFjMC0xLjc0LDEuNDEtMy4xNiwzLjE2LTMuMTZoMTIuNjNjMS43NCww'+
			'LDMuMTYsMS40MSwzLjE2LDMuMTZ2MTIuNjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDEuNzQtMS40MSwzLjE2LTMuMTYsMy4xNkgzLjY4QzEuOTQsMTksMC41MywxNy41OSwwLjUzLDE1Ljg0eiIgY2xhc3M9InN0MTEiLz4KIDwvZz4KIDxwYXRoIGQ9Ik04LjAxLDExLjIzbDIuMTEtMi4xMWwyLjExLDIuMTFsMC42NS0wLjY1bC0yLjc2LTIuNzZsLTIuNzYsMi43Nkw4LjAxLDExLjIzeiIgY2xhc3M9InN0MTIiLz4KIDxwYXRoIGQ9Ik00LjY1LDEzLjgyTDEwLDguNDhsNS4zNSw1LjM0TDE3LDEyLjE4bC03LTdsLTcsN0w0LjY1LDEzLjgyeiIgY2xhc3M9InN0OSIvPgo8L3N2Zz4K';
		me._dropdown_close__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Dropdown Close";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 15px;';
		hs+='left : 126px;';
		hs+='position : absolute;';
		hs+='top : 18px;';
		hs+='visibility : hidden;';
		hs+='width : 15px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._dropdown_close.ggUpdatePosition=function (useTransition) {
		}
		me._dropdown_menu_title_background.appendChild(me._dropdown_close);
		me._dropdown_menu.appendChild(me._dropdown_menu_title_background);
		me.divSkin.appendChild(me._dropdown_menu);
		el=me._svg_8=document.createElement('div');
		els=me._svg_8__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMSIgdmlld0JveD0iMCAwIDIwMCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjNmM3NTdkOwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICNmOGY3Zjc7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8cmVjdCByeT0iOCIgcng9IjgiIGhlaWdodD0iNjQiIGNsYXNzPSJjbHMtMiIgd2lkdGg9IjIwMCIvPgogPH'+
			'BhdGggZD0ibTUzLjA5LDM1Ljg0di0xMS41Mmg5LjE2djExLjUyaC0xLjY3di05Ljk0aC01LjgydjkuOTRoLTEuNjdabTEwLjY5LDB2LTEuNDJjLjMyLjA2LjU2LjA1LjczLS4wMi4xNy0uMDguMy0uMjIuMzgtLjQzLjA5LS4yMS4xNi0uNDguMjItLjgxLjA5LS40OS4xNy0xLjA0LjIzLTEuNjYuMDctLjYyLjEzLTEuMy4xOC0yLjAyLjA1LS43My4xLTEuNDkuMTQtMi4yOGg2LjIxdjguNjRoLTEuNjh2LTcuMDZoLTMuMDJjLS4wMy40Mi0uMDcuODctLjExLDEuMzQtLjA0LjQ3LS4wOC45NC0uMTMsMS40cy0uMS45LS4xNSwxLjNjLS4wNS40MS0uMTEuNzUtLjE3LDEuMDQtLjExLjU4LS4yNiwxLjAz'+
			'LS40NywxLjM4LS4yLjM0LS40OS41NS0uODYuNjUtLjM3LjEtLjg3LjA5LTEuNDktLjA1Wm0xMi44NS4yNGMtLjY0LDAtMS4xOC0uMTItMS42MS0uMzUtLjQzLS4yNC0uNzYtLjU1LS45OC0uOTQtLjIyLS4zOS0uMzMtLjgzLS4zMy0xLjMsMC0uNDQuMDgtLjgyLjIzLTEuMTUuMTUtLjMzLjM4LS42MS42OS0uODQuMy0uMjMuNjgtLjQyLDEuMTItLjU3LjM4LS4xMS44Mi0uMjEsMS4zLS4zLjQ5LS4wOS45OS0uMTcsMS41My0uMjQuNTQtLjA3LDEuMDctLjE1LDEuNi0uMjJsLS42MS4zNGMuMDEtLjY4LS4xMy0xLjE4LS40My0xLjUtLjI5LS4zMy0uOC0uNS0xLjUyLS41LS40NSwwLS44Ny4xMS0xLj'+
			'I1LjMyLS4zOC4yMS0uNjQuNTUtLjc5LDEuMDRsLTEuNTYtLjQ4Yy4yMS0uNzQuNjItMS4zMywxLjIyLTEuNzcuNi0uNDQsMS40LS42NiwyLjQtLjY2Ljc3LDAsMS40NS4xMywyLjAyLjQuNTguMjYsMSwuNjgsMS4yNiwxLjI1LjE0LjI4LjIyLjU4LjI2LjkuMDMuMzEuMDUuNjUuMDUsMS4wMnY1LjMyaC0xLjQ4di0xLjk4bC4yOS4yNmMtLjM2LjY2LS44MSwxLjE1LTEuMzcsMS40OC0uNTUuMzItMS4yMy40OC0yLjAzLjQ4Wm0uMy0xLjM3Yy40NywwLC44OC0uMDgsMS4yMi0uMjUuMzQtLjE3LjYyLS4zOS44Mi0uNjUuMjEtLjI2LjM0LS41My40MS0uODIuMDktLjI2LjE0LS41NC4xNS0uODYuMDIt'+
			'LjMyLjAyLS41OC4wMi0uNzdsLjU0LjJjLS41My4wOC0xLjAxLjE1LTEuNDQuMjJzLS44Mi4xMy0xLjE4LjE5Yy0uMzUuMDYtLjY2LjEzLS45My4yMi0uMjMuMDgtLjQzLjE4LS42Mi4yOS0uMTguMTEtLjMyLjI1LS40Mi40MS0uMS4xNi0uMTUuMzUtLjE1LjU4cy4wNi40My4xNy42MmMuMTEuMTkuMjguMzQuNTEuNDUuMjMuMTEuNTIuMTcuODguMTdabTYuNDUsMS4xM3YtOC42NGgxLjY3djMuNTNoNC4yMnYtMy41M2gxLjY3djguNjRoLTEuNjd2LTMuNTRoLTQuMjJ2My41NGgtMS42N1ptMTcuMTYtOC42NHY4LjY0aC0xLjYxdi02LjAxbC00LjMyLDYuMDFoLTEuMzZ2LTguNjRoMS42MXY1Ljg5bD'+
			'QuMzMtNS44OWgxLjM1Wm02LjM3LDguODhjLS44MywwLTEuNTItLjItMi4wOC0uNi0uNTYtLjQxLS45OC0uOTUtMS4yNy0xLjY0LS4yOS0uNjktLjQzLTEuNDYtLjQzLTIuMzNzLjE0LTEuNjQuNDItMi4zM2MuMjktLjY5LjcxLTEuMjMsMS4yNi0xLjYyLjU2LS40LDEuMjUtLjYsMi4wNi0uNnMxLjUxLjIsMi4xLjZjLjU5LjM5LDEuMDUuOTQsMS4zNywxLjYyLjMyLjY4LjQ4LDEuNDYuNDgsMi4zM3MtLjE2LDEuNjQtLjQ4LDIuMzRjLS4zMS42OS0uNzYsMS4yMy0xLjM1LDEuNjMtLjU4LjQtMS4yNy42LTIuMDguNlptLTQuMDYsMy42di0xMi40OGgxLjQ5djYuMjJoLjE5djYuMjZoLTEuNjhabTMu'+
			'ODMtNS4xMWMuNTMsMCwuOTctLjE0LDEuMzItLjQxLjM1LS4yNy42MS0uNjQuNzgtMS4xLjE4LS40Ni4yNi0uOTguMjYtMS41NXMtLjA5LTEuMDgtLjI2LTEuNTRjLS4xNy0uNDYtLjQzLS44Mi0uNzktMS4xLS4zNi0uMjctLjgxLS40MS0xLjM3LS40MS0uNTIsMC0uOTUuMTMtMS4zLjM4LS4zNC4yNi0uNTkuNjEtLjc1LDEuMDctLjE2LjQ2LS4yNC45OS0uMjQsMS41OHMuMDgsMS4xMy4yNCwxLjU4Yy4xNi40Ni40MS44Mi43NiwxLjA4LjM1LjI2Ljc5LjM5LDEuMzQuMzlabTkuNzQsMS41MWMtLjg2LDAtMS42MS0uMTktMi4yNS0uNTgtLjY0LS4zOS0xLjEzLS45My0xLjQ3LTEuNjEtLjM0LS42OS'+
			'0uNTEtMS40OC0uNTEtMi4zOHMuMTgtMS42OS41My0yLjM4Yy4zNS0uNjkuODUtMS4yMiwxLjQ4LTEuNi42My0uMzgsMS4zOC0uNTgsMi4yMi0uNThzMS42MS4xOSwyLjI1LjU4Yy42My4zOSwxLjEyLjkzLDEuNDcsMS42MS4zNS42OC41MiwxLjQ3LjUyLDIuMzZzLS4xOCwxLjctLjUzLDIuMzhjLS4zNS42OC0uODQsMS4yMi0xLjQ3LDEuNjEtLjYzLjM4LTEuMzguNTgtMi4yNC41OFptMC0xLjU4Yy44MywwLDEuNDQtLjI4LDEuODUtLjgzLjQxLS41Ni42Mi0xLjI4LjYyLTIuMTZzLS4yMS0xLjYyLS42Mi0yLjE2Yy0uNDEtLjU0LTEuMDItLjgyLTEuODQtLjgyLS41NiwwLTEuMDIuMTMtMS4zOC4z'+
			'OC0uMzYuMjUtLjYzLjYtLjgxLDEuMDUtLjE4LjQ0LS4yNi45Ni0uMjYsMS41NCwwLC45MS4yMSwxLjYzLjYyLDIuMThzMS4wMy44MiwxLjgzLjgyWm02LjA3LDEuMzR2LTguNjRoMy44Yy4yNSwwLC41LjAyLjc1LjA1LjI1LjAzLjQ3LjA3LjY2LjEyLjQ0LjEyLjgxLjM3LDEuMTIuNzQuMzEuMzYuNDYuODUuNDYsMS40NiwwLC4zNS0uMDUuNjQtLjE2Ljg4LS4xMS4yMy0uMjUuNDQtLjQ0LjYxLS4wOS4wNy0uMTguMTQtLjI3LjJzLS4xOS4xLS4yOS4xNGMuMi4wMy4zOS4xLjU4LjIxLjI5LjE1LjUzLjM4LjcyLjY3LjE5LjI5LjI5LjY3LjI5LDEuMTYsMCwuNTgtLjE0LDEuMDctLjQyLDEuNDYtLj'+
			'I4LjM5LS42OC42Ni0xLjIuOC0uMi4wNi0uNDMuMS0uNjkuMTItLjI1LjAyLS41LjAzLS43NS4wM2gtNC4xN1ptMS43LTEuMzJoMi4zN2MuMTEsMCwuMjQtLjAxLjM4LS4wMy4xNC0uMDIuMjctLjA1LjM4LS4wOS4yNC0uMDcuNDEtLjIxLjUxLS40MS4xMS0uMi4xNi0uNDEuMTYtLjYzLDAtLjMtLjA4LS41NS0uMjQtLjczLS4xNi0uMTktLjM2LS4zMS0uNjEtLjM2LS4xMS0uMDQtLjIyLS4wNi0uMzUtLjA2cy0uMjQsMC0uMzMsMGgtMi4yOHYyLjMyWm0wLTMuNjZoMS44N2MuMTUsMCwuMzEsMCwuNDctLjAyLjE2LS4wMi4zLS4wNi40Mi0uMS4yMS0uMDguMzYtLjIxLjQ2LS40LjEtLjE5LjE1LS40'+
			'LjE1LS42MiwwLS4yNS0uMDYtLjQ2LS4xNy0uNjZzLS4yOC0uMzMtLjUtLjRjLS4xNS0uMDUtLjMzLS4wOC0uNTQtLjA5LS4yLS4wMS0uMzItLjAyLS4zOC0uMDJoLTEuNzl2Mi4zMVptNy4yMSw0Ljk4di04LjY0aDEuN3Y0LjE2bDMuMzktNC4xNmgyLjEzbC0zLjU4LDQuMzIsMy45NSw0LjMyaC0yLjI3bC0zLjYyLTQuMTZ2NC4xNmgtMS43Wm0xMC45Mi4yNGMtLjY0LDAtMS4xOC0uMTItMS42MS0uMzUtLjQzLS4yNC0uNzYtLjU1LS45OC0uOTQtLjIyLS4zOS0uMzMtLjgzLS4zMy0xLjMsMC0uNDQuMDgtLjgyLjIzLTEuMTUuMTUtLjMzLjM4LS42MS42OS0uODQuMy0uMjMuNjgtLjQyLDEuMTItLj'+
			'U3LjM4LS4xMS44Mi0uMjEsMS4zLS4zLjQ5LS4wOS45OS0uMTcsMS41My0uMjQuNTQtLjA3LDEuMDctLjE1LDEuNi0uMjJsLS42MS4zNGMwLS42OC0uMTMtMS4xOC0uNDMtMS41LS4yOS0uMzMtLjgtLjUtMS41Mi0uNS0uNDUsMC0uODcuMTEtMS4yNS4zMi0uMzguMjEtLjY0LjU1LS43OSwxLjA0bC0xLjU2LS40OGMuMjEtLjc0LjYyLTEuMzMsMS4yMi0xLjc3LjYtLjQ0LDEuNC0uNjYsMi40LS42Ni43NywwLDEuNDUuMTMsMi4wMi40LjU4LjI2LDEsLjY4LDEuMjYsMS4yNS4xNC4yOC4yMi41OC4yNi45LjAzLjMxLjA1LjY1LjA1LDEuMDJ2NS4zMmgtMS40OHYtMS45OGwuMjkuMjZjLS4zNi42Ni0u'+
			'ODEsMS4xNS0xLjM3LDEuNDgtLjU1LjMyLTEuMjMuNDgtMi4wMy40OFptLjMtMS4zN2MuNDcsMCwuODgtLjA4LDEuMjItLjI1LjM0LS4xNy42Mi0uMzkuODItLjY1LjIxLS4yNi4zNC0uNTMuNDEtLjgyLjA5LS4yNi4xNC0uNTQuMTUtLjg2LjAyLS4zMi4wMi0uNTguMDItLjc3bC41NC4yYy0uNTMuMDgtMS4wMS4xNS0xLjQ0LjIyLS40My4wNi0uODIuMTMtMS4xOC4xOS0uMzUuMDYtLjY2LjEzLS45My4yMi0uMjMuMDgtLjQzLjE4LS42Mi4yOS0uMTguMTEtLjMyLjI1LS40Mi40MS0uMS4xNi0uMTUuMzUtLjE1LjU4cy4wNi40My4xNy42MmMuMTEuMTkuMjguMzQuNTEuNDUuMjMuMTEuNTIuMTcuOD'+
			'guMTdaIiBjbGFzcz0iY2xzLTEiLz4KPC9zdmc+Cg==';
		me._svg_8__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_8__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMSIgdmlld0JveD0iMCAwIDIwMCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjZTZlOWVjOwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICMxZDFkMWI7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8cmVjdCByeT0iOCIgcng9IjgiIGhlaWdodD0iNjQiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjIwMCIvPgogPH'+
			'BhdGggZD0ibTUzLjA5LDM1Ljg0di0xMS41Mmg5LjE2djExLjUyaC0xLjY3di05Ljk0aC01LjgydjkuOTRoLTEuNjdabTEwLjY5LDB2LTEuNDJjLjMyLjA2LjU2LjA1LjczLS4wMi4xNy0uMDguMy0uMjIuMzgtLjQzLjA5LS4yMS4xNi0uNDguMjItLjgxLjA5LS40OS4xNy0xLjA0LjIzLTEuNjYuMDctLjYyLjEzLTEuMy4xOC0yLjAyLjA1LS43My4xLTEuNDkuMTQtMi4yOGg2LjIxdjguNjRoLTEuNjh2LTcuMDZoLTMuMDJjLS4wMy40Mi0uMDcuODctLjExLDEuMzQtLjA0LjQ3LS4wOC45NC0uMTMsMS40cy0uMS45LS4xNSwxLjNjLS4wNS40MS0uMTEuNzUtLjE3LDEuMDQtLjExLjU4LS4yNiwxLjAz'+
			'LS40NywxLjM4LS4yLjM0LS40OS41NS0uODYuNjUtLjM3LjEtLjg3LjA5LTEuNDktLjA1Wm0xMi44NS4yNGMtLjY0LDAtMS4xOC0uMTItMS42MS0uMzUtLjQzLS4yNC0uNzYtLjU1LS45OC0uOTQtLjIyLS4zOS0uMzMtLjgzLS4zMy0xLjMsMC0uNDQuMDgtLjgyLjIzLTEuMTUuMTUtLjMzLjM4LS42MS42OS0uODQuMy0uMjMuNjgtLjQyLDEuMTItLjU3LjM4LS4xMS44Mi0uMjEsMS4zLS4zLjQ5LS4wOS45OS0uMTcsMS41My0uMjQuNTQtLjA3LDEuMDctLjE1LDEuNi0uMjJsLS42MS4zNGMuMDEtLjY4LS4xMy0xLjE4LS40My0xLjUtLjI5LS4zMy0uOC0uNS0xLjUyLS41LS40NSwwLS44Ny4xMS0xLj'+
			'I1LjMyLS4zOC4yMS0uNjQuNTUtLjc5LDEuMDRsLTEuNTYtLjQ4Yy4yMS0uNzQuNjItMS4zMywxLjIyLTEuNzcuNi0uNDQsMS40LS42NiwyLjQtLjY2Ljc3LDAsMS40NS4xMywyLjAyLjQuNTguMjYsMSwuNjgsMS4yNiwxLjI1LjE0LjI4LjIyLjU4LjI2LjkuMDMuMzEuMDUuNjUuMDUsMS4wMnY1LjMyaC0xLjQ4di0xLjk4bC4yOS4yNmMtLjM2LjY2LS44MSwxLjE1LTEuMzcsMS40OC0uNTUuMzItMS4yMy40OC0yLjAzLjQ4Wm0uMy0xLjM3Yy40NywwLC44OC0uMDgsMS4yMi0uMjUuMzQtLjE3LjYyLS4zOS44Mi0uNjUuMjEtLjI2LjM0LS41My40MS0uODIuMDktLjI2LjE0LS41NC4xNS0uODYuMDIt'+
			'LjMyLjAyLS41OC4wMi0uNzdsLjU0LjJjLS41My4wOC0xLjAxLjE1LTEuNDQuMjJzLS44Mi4xMy0xLjE4LjE5Yy0uMzUuMDYtLjY2LjEzLS45My4yMi0uMjMuMDgtLjQzLjE4LS42Mi4yOS0uMTguMTEtLjMyLjI1LS40Mi40MS0uMS4xNi0uMTUuMzUtLjE1LjU4cy4wNi40My4xNy42MmMuMTEuMTkuMjguMzQuNTEuNDUuMjMuMTEuNTIuMTcuODguMTdabTYuNDUsMS4xM3YtOC42NGgxLjY3djMuNTNoNC4yMnYtMy41M2gxLjY3djguNjRoLTEuNjd2LTMuNTRoLTQuMjJ2My41NGgtMS42N1ptMTcuMTYtOC42NHY4LjY0aC0xLjYxdi02LjAxbC00LjMyLDYuMDFoLTEuMzZ2LTguNjRoMS42MXY1Ljg5bD'+
			'QuMzMtNS44OWgxLjM1Wm02LjM3LDguODhjLS44MywwLTEuNTItLjItMi4wOC0uNi0uNTYtLjQxLS45OC0uOTUtMS4yNy0xLjY0LS4yOS0uNjktLjQzLTEuNDYtLjQzLTIuMzNzLjE0LTEuNjQuNDItMi4zM2MuMjktLjY5LjcxLTEuMjMsMS4yNi0xLjYyLjU2LS40LDEuMjUtLjYsMi4wNi0uNnMxLjUxLjIsMi4xLjZjLjU5LjM5LDEuMDUuOTQsMS4zNywxLjYyLjMyLjY4LjQ4LDEuNDYuNDgsMi4zM3MtLjE2LDEuNjQtLjQ4LDIuMzRjLS4zMS42OS0uNzYsMS4yMy0xLjM1LDEuNjMtLjU4LjQtMS4yNy42LTIuMDguNlptLTQuMDYsMy42di0xMi40OGgxLjQ5djYuMjJoLjE5djYuMjZoLTEuNjhabTMu'+
			'ODMtNS4xMWMuNTMsMCwuOTctLjE0LDEuMzItLjQxLjM1LS4yNy42MS0uNjQuNzgtMS4xLjE4LS40Ni4yNi0uOTguMjYtMS41NXMtLjA5LTEuMDgtLjI2LTEuNTRjLS4xNy0uNDYtLjQzLS44Mi0uNzktMS4xLS4zNi0uMjctLjgxLS40MS0xLjM3LS40MS0uNTIsMC0uOTUuMTMtMS4zLjM4LS4zNC4yNi0uNTkuNjEtLjc1LDEuMDctLjE2LjQ2LS4yNC45OS0uMjQsMS41OHMuMDgsMS4xMy4yNCwxLjU4Yy4xNi40Ni40MS44Mi43NiwxLjA4LjM1LjI2Ljc5LjM5LDEuMzQuMzlabTkuNzQsMS41MWMtLjg2LDAtMS42MS0uMTktMi4yNS0uNTgtLjY0LS4zOS0xLjEzLS45My0xLjQ3LTEuNjEtLjM0LS42OS'+
			'0uNTEtMS40OC0uNTEtMi4zOHMuMTgtMS42OS41My0yLjM4Yy4zNS0uNjkuODUtMS4yMiwxLjQ4LTEuNi42My0uMzgsMS4zOC0uNTgsMi4yMi0uNThzMS42MS4xOSwyLjI1LjU4Yy42My4zOSwxLjEyLjkzLDEuNDcsMS42MS4zNS42OC41MiwxLjQ3LjUyLDIuMzZzLS4xOCwxLjctLjUzLDIuMzhjLS4zNS42OC0uODQsMS4yMi0xLjQ3LDEuNjEtLjYzLjM4LTEuMzguNTgtMi4yNC41OFptMC0xLjU4Yy44MywwLDEuNDQtLjI4LDEuODUtLjgzLjQxLS41Ni42Mi0xLjI4LjYyLTIuMTZzLS4yMS0xLjYyLS42Mi0yLjE2Yy0uNDEtLjU0LTEuMDItLjgyLTEuODQtLjgyLS41NiwwLTEuMDIuMTMtMS4zOC4z'+
			'OC0uMzYuMjUtLjYzLjYtLjgxLDEuMDUtLjE4LjQ0LS4yNi45Ni0uMjYsMS41NCwwLC45MS4yMSwxLjYzLjYyLDIuMThzMS4wMy44MiwxLjgzLjgyWm02LjA3LDEuMzR2LTguNjRoMy44Yy4yNSwwLC41LjAyLjc1LjA1LjI1LjAzLjQ3LjA3LjY2LjEyLjQ0LjEyLjgxLjM3LDEuMTIuNzQuMzEuMzYuNDYuODUuNDYsMS40NiwwLC4zNS0uMDUuNjQtLjE2Ljg4LS4xMS4yMy0uMjUuNDQtLjQ0LjYxLS4wOS4wNy0uMTguMTQtLjI3LjJzLS4xOS4xLS4yOS4xNGMuMi4wMy4zOS4xLjU4LjIxLjI5LjE1LjUzLjM4LjcyLjY3LjE5LjI5LjI5LjY3LjI5LDEuMTYsMCwuNTgtLjE0LDEuMDctLjQyLDEuNDYtLj'+
			'I4LjM5LS42OC42Ni0xLjIuOC0uMi4wNi0uNDMuMS0uNjkuMTItLjI1LjAyLS41LjAzLS43NS4wM2gtNC4xN1ptMS43LTEuMzJoMi4zN2MuMTEsMCwuMjQtLjAxLjM4LS4wMy4xNC0uMDIuMjctLjA1LjM4LS4wOS4yNC0uMDcuNDEtLjIxLjUxLS40MS4xMS0uMi4xNi0uNDEuMTYtLjYzLDAtLjMtLjA4LS41NS0uMjQtLjczLS4xNi0uMTktLjM2LS4zMS0uNjEtLjM2LS4xMS0uMDQtLjIyLS4wNi0uMzUtLjA2cy0uMjQsMC0uMzMsMGgtMi4yOHYyLjMyWm0wLTMuNjZoMS44N2MuMTUsMCwuMzEsMCwuNDctLjAyLjE2LS4wMi4zLS4wNi40Mi0uMS4yMS0uMDguMzYtLjIxLjQ2LS40LjEtLjE5LjE1LS40'+
			'LjE1LS42MiwwLS4yNS0uMDYtLjQ2LS4xNy0uNjZzLS4yOC0uMzMtLjUtLjRjLS4xNS0uMDUtLjMzLS4wOC0uNTQtLjA5LS4yLS4wMS0uMzItLjAyLS4zOC0uMDJoLTEuNzl2Mi4zMVptNy4yMSw0Ljk4di04LjY0aDEuN3Y0LjE2bDMuMzktNC4xNmgyLjEzbC0zLjU4LDQuMzIsMy45NSw0LjMyaC0yLjI3bC0zLjYyLTQuMTZ2NC4xNmgtMS43Wm0xMC45Mi4yNGMtLjY0LDAtMS4xOC0uMTItMS42MS0uMzUtLjQzLS4yNC0uNzYtLjU1LS45OC0uOTQtLjIyLS4zOS0uMzMtLjgzLS4zMy0xLjMsMC0uNDQuMDgtLjgyLjIzLTEuMTUuMTUtLjMzLjM4LS42MS42OS0uODQuMy0uMjMuNjgtLjQyLDEuMTItLj'+
			'U3LjM4LS4xMS44Mi0uMjEsMS4zLS4zLjQ5LS4wOS45OS0uMTcsMS41My0uMjQuNTQtLjA3LDEuMDctLjE1LDEuNi0uMjJsLS42MS4zNGMwLS42OC0uMTMtMS4xOC0uNDMtMS41LS4yOS0uMzMtLjgtLjUtMS41Mi0uNS0uNDUsMC0uODcuMTEtMS4yNS4zMi0uMzguMjEtLjY0LjU1LS43OSwxLjA0bC0xLjU2LS40OGMuMjEtLjc0LjYyLTEuMzMsMS4yMi0xLjc3LjYtLjQ0LDEuNC0uNjYsMi40LS42Ni43NywwLDEuNDUuMTMsMi4wMi40LjU4LjI2LDEsLjY4LDEuMjYsMS4yNS4xNC4yOC4yMi41OC4yNi45LjAzLjMxLjA1LjY1LjA1LDEuMDJ2NS4zMmgtMS40OHYtMS45OGwuMjkuMjZjLS4zNi42Ni0u'+
			'ODEsMS4xNS0xLjM3LDEuNDgtLjU1LjMyLTEuMjMuNDgtMi4wMy40OFptLjMtMS4zN2MuNDcsMCwuODgtLjA4LDEuMjItLjI1LjM0LS4xNy42Mi0uMzkuODItLjY1LjIxLS4yNi4zNC0uNTMuNDEtLjgyLjA5LS4yNi4xNC0uNTQuMTUtLjg2LjAyLS4zMi4wMi0uNTguMDItLjc3bC41NC4yYy0uNTMuMDgtMS4wMS4xNS0xLjQ0LjIyLS40My4wNi0uODIuMTMtMS4xOC4xOS0uMzUuMDYtLjY2LjEzLS45My4yMi0uMjMuMDgtLjQzLjE4LS42Mi4yOS0uMTguMTEtLjMyLjI1LS40Mi40MS0uMS4xNi0uMTUuMzUtLjE1LjU4cy4wNi40My4xNy42MmMuMTEuMTkuMjguMzQuNTEuNDUuMjMuMTEuNTIuMTcuOD'+
			'guMTdaIiBjbGFzcz0iY2xzLTIiLz4KPC9zdmc+Cg==';
		me._svg_8__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		ela=me._svg_8__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMSIgdmlld0JveD0iMCAwIDIwMCA2NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxkZWZzPgogIDxzdHlsZT4KICAgICAgLmNscy0xIHsKICAgICAgICBmaWxsOiAjZTZlOWVjOwogICAgICB9CgogICAgICAuY2xzLTIgewogICAgICAgIGZpbGw6ICMxZDFkMWI7CiAgICAgIH0KICAgIDwvc3R5bGU+CiA8L2RlZnM+CiA8cmVjdCByeT0iOCIgcng9IjgiIGhlaWdodD0iNjQiIGNsYXNzPSJjbHMtMSIgd2lkdGg9IjIwMCIvPgogPH'+
			'BhdGggZD0ibTUzLjA5LDM1Ljg0di0xMS41Mmg5LjE2djExLjUyaC0xLjY3di05Ljk0aC01LjgydjkuOTRoLTEuNjdabTEwLjY5LDB2LTEuNDJjLjMyLjA2LjU2LjA1LjczLS4wMi4xNy0uMDguMy0uMjIuMzgtLjQzLjA5LS4yMS4xNi0uNDguMjItLjgxLjA5LS40OS4xNy0xLjA0LjIzLTEuNjYuMDctLjYyLjEzLTEuMy4xOC0yLjAyLjA1LS43My4xLTEuNDkuMTQtMi4yOGg2LjIxdjguNjRoLTEuNjh2LTcuMDZoLTMuMDJjLS4wMy40Mi0uMDcuODctLjExLDEuMzQtLjA0LjQ3LS4wOC45NC0uMTMsMS40cy0uMS45LS4xNSwxLjNjLS4wNS40MS0uMTEuNzUtLjE3LDEuMDQtLjExLjU4LS4yNiwxLjAz'+
			'LS40NywxLjM4LS4yLjM0LS40OS41NS0uODYuNjUtLjM3LjEtLjg3LjA5LTEuNDktLjA1Wm0xMi44NS4yNGMtLjY0LDAtMS4xOC0uMTItMS42MS0uMzUtLjQzLS4yNC0uNzYtLjU1LS45OC0uOTQtLjIyLS4zOS0uMzMtLjgzLS4zMy0xLjMsMC0uNDQuMDgtLjgyLjIzLTEuMTUuMTUtLjMzLjM4LS42MS42OS0uODQuMy0uMjMuNjgtLjQyLDEuMTItLjU3LjM4LS4xMS44Mi0uMjEsMS4zLS4zLjQ5LS4wOS45OS0uMTcsMS41My0uMjQuNTQtLjA3LDEuMDctLjE1LDEuNi0uMjJsLS42MS4zNGMuMDEtLjY4LS4xMy0xLjE4LS40My0xLjUtLjI5LS4zMy0uOC0uNS0xLjUyLS41LS40NSwwLS44Ny4xMS0xLj'+
			'I1LjMyLS4zOC4yMS0uNjQuNTUtLjc5LDEuMDRsLTEuNTYtLjQ4Yy4yMS0uNzQuNjItMS4zMywxLjIyLTEuNzcuNi0uNDQsMS40LS42NiwyLjQtLjY2Ljc3LDAsMS40NS4xMywyLjAyLjQuNTguMjYsMSwuNjgsMS4yNiwxLjI1LjE0LjI4LjIyLjU4LjI2LjkuMDMuMzEuMDUuNjUuMDUsMS4wMnY1LjMyaC0xLjQ4di0xLjk4bC4yOS4yNmMtLjM2LjY2LS44MSwxLjE1LTEuMzcsMS40OC0uNTUuMzItMS4yMy40OC0yLjAzLjQ4Wm0uMy0xLjM3Yy40NywwLC44OC0uMDgsMS4yMi0uMjUuMzQtLjE3LjYyLS4zOS44Mi0uNjUuMjEtLjI2LjM0LS41My40MS0uODIuMDktLjI2LjE0LS41NC4xNS0uODYuMDIt'+
			'LjMyLjAyLS41OC4wMi0uNzdsLjU0LjJjLS41My4wOC0xLjAxLjE1LTEuNDQuMjJzLS44Mi4xMy0xLjE4LjE5Yy0uMzUuMDYtLjY2LjEzLS45My4yMi0uMjMuMDgtLjQzLjE4LS42Mi4yOS0uMTguMTEtLjMyLjI1LS40Mi40MS0uMS4xNi0uMTUuMzUtLjE1LjU4cy4wNi40My4xNy42MmMuMTEuMTkuMjguMzQuNTEuNDUuMjMuMTEuNTIuMTcuODguMTdabTYuNDUsMS4xM3YtOC42NGgxLjY3djMuNTNoNC4yMnYtMy41M2gxLjY3djguNjRoLTEuNjd2LTMuNTRoLTQuMjJ2My41NGgtMS42N1ptMTcuMTYtOC42NHY4LjY0aC0xLjYxdi02LjAxbC00LjMyLDYuMDFoLTEuMzZ2LTguNjRoMS42MXY1Ljg5bD'+
			'QuMzMtNS44OWgxLjM1Wm02LjM3LDguODhjLS44MywwLTEuNTItLjItMi4wOC0uNi0uNTYtLjQxLS45OC0uOTUtMS4yNy0xLjY0LS4yOS0uNjktLjQzLTEuNDYtLjQzLTIuMzNzLjE0LTEuNjQuNDItMi4zM2MuMjktLjY5LjcxLTEuMjMsMS4yNi0xLjYyLjU2LS40LDEuMjUtLjYsMi4wNi0uNnMxLjUxLjIsMi4xLjZjLjU5LjM5LDEuMDUuOTQsMS4zNywxLjYyLjMyLjY4LjQ4LDEuNDYuNDgsMi4zM3MtLjE2LDEuNjQtLjQ4LDIuMzRjLS4zMS42OS0uNzYsMS4yMy0xLjM1LDEuNjMtLjU4LjQtMS4yNy42LTIuMDguNlptLTQuMDYsMy42di0xMi40OGgxLjQ5djYuMjJoLjE5djYuMjZoLTEuNjhabTMu'+
			'ODMtNS4xMWMuNTMsMCwuOTctLjE0LDEuMzItLjQxLjM1LS4yNy42MS0uNjQuNzgtMS4xLjE4LS40Ni4yNi0uOTguMjYtMS41NXMtLjA5LTEuMDgtLjI2LTEuNTRjLS4xNy0uNDYtLjQzLS44Mi0uNzktMS4xLS4zNi0uMjctLjgxLS40MS0xLjM3LS40MS0uNTIsMC0uOTUuMTMtMS4zLjM4LS4zNC4yNi0uNTkuNjEtLjc1LDEuMDctLjE2LjQ2LS4yNC45OS0uMjQsMS41OHMuMDgsMS4xMy4yNCwxLjU4Yy4xNi40Ni40MS44Mi43NiwxLjA4LjM1LjI2Ljc5LjM5LDEuMzQuMzlabTkuNzQsMS41MWMtLjg2LDAtMS42MS0uMTktMi4yNS0uNTgtLjY0LS4zOS0xLjEzLS45My0xLjQ3LTEuNjEtLjM0LS42OS'+
			'0uNTEtMS40OC0uNTEtMi4zOHMuMTgtMS42OS41My0yLjM4Yy4zNS0uNjkuODUtMS4yMiwxLjQ4LTEuNi42My0uMzgsMS4zOC0uNTgsMi4yMi0uNThzMS42MS4xOSwyLjI1LjU4Yy42My4zOSwxLjEyLjkzLDEuNDcsMS42MS4zNS42OC41MiwxLjQ3LjUyLDIuMzZzLS4xOCwxLjctLjUzLDIuMzhjLS4zNS42OC0uODQsMS4yMi0xLjQ3LDEuNjEtLjYzLjM4LTEuMzguNTgtMi4yNC41OFptMC0xLjU4Yy44MywwLDEuNDQtLjI4LDEuODUtLjgzLjQxLS41Ni42Mi0xLjI4LjYyLTIuMTZzLS4yMS0xLjYyLS42Mi0yLjE2Yy0uNDEtLjU0LTEuMDItLjgyLTEuODQtLjgyLS41NiwwLTEuMDIuMTMtMS4zOC4z'+
			'OC0uMzYuMjUtLjYzLjYtLjgxLDEuMDUtLjE4LjQ0LS4yNi45Ni0uMjYsMS41NCwwLC45MS4yMSwxLjYzLjYyLDIuMThzMS4wMy44MiwxLjgzLjgyWm02LjA3LDEuMzR2LTguNjRoMy44Yy4yNSwwLC41LjAyLjc1LjA1LjI1LjAzLjQ3LjA3LjY2LjEyLjQ0LjEyLjgxLjM3LDEuMTIuNzQuMzEuMzYuNDYuODUuNDYsMS40NiwwLC4zNS0uMDUuNjQtLjE2Ljg4LS4xMS4yMy0uMjUuNDQtLjQ0LjYxLS4wOS4wNy0uMTguMTQtLjI3LjJzLS4xOS4xLS4yOS4xNGMuMi4wMy4zOS4xLjU4LjIxLjI5LjE1LjUzLjM4LjcyLjY3LjE5LjI5LjI5LjY3LjI5LDEuMTYsMCwuNTgtLjE0LDEuMDctLjQyLDEuNDYtLj'+
			'I4LjM5LS42OC42Ni0xLjIuOC0uMi4wNi0uNDMuMS0uNjkuMTItLjI1LjAyLS41LjAzLS43NS4wM2gtNC4xN1ptMS43LTEuMzJoMi4zN2MuMTEsMCwuMjQtLjAxLjM4LS4wMy4xNC0uMDIuMjctLjA1LjM4LS4wOS4yNC0uMDcuNDEtLjIxLjUxLS40MS4xMS0uMi4xNi0uNDEuMTYtLjYzLDAtLjMtLjA4LS41NS0uMjQtLjczLS4xNi0uMTktLjM2LS4zMS0uNjEtLjM2LS4xMS0uMDQtLjIyLS4wNi0uMzUtLjA2cy0uMjQsMC0uMzMsMGgtMi4yOHYyLjMyWm0wLTMuNjZoMS44N2MuMTUsMCwuMzEsMCwuNDctLjAyLjE2LS4wMi4zLS4wNi40Mi0uMS4yMS0uMDguMzYtLjIxLjQ2LS40LjEtLjE5LjE1LS40'+
			'LjE1LS42MiwwLS4yNS0uMDYtLjQ2LS4xNy0uNjZzLS4yOC0uMzMtLjUtLjRjLS4xNS0uMDUtLjMzLS4wOC0uNTQtLjA5LS4yLS4wMS0uMzItLjAyLS4zOC0uMDJoLTEuNzl2Mi4zMVptNy4yMSw0Ljk4di04LjY0aDEuN3Y0LjE2bDMuMzktNC4xNmgyLjEzbC0zLjU4LDQuMzIsMy45NSw0LjMyaC0yLjI3bC0zLjYyLTQuMTZ2NC4xNmgtMS43Wm0xMC45Mi4yNGMtLjY0LDAtMS4xOC0uMTItMS42MS0uMzUtLjQzLS4yNC0uNzYtLjU1LS45OC0uOTQtLjIyLS4zOS0uMzMtLjgzLS4zMy0xLjMsMC0uNDQuMDgtLjgyLjIzLTEuMTUuMTUtLjMzLjM4LS42MS42OS0uODQuMy0uMjMuNjgtLjQyLDEuMTItLj'+
			'U3LjM4LS4xMS44Mi0uMjEsMS4zLS4zLjQ5LS4wOS45OS0uMTcsMS41My0uMjQuNTQtLjA3LDEuMDctLjE1LDEuNi0uMjJsLS42MS4zNGMwLS42OC0uMTMtMS4xOC0uNDMtMS41LS4yOS0uMzMtLjgtLjUtMS41Mi0uNS0uNDUsMC0uODcuMTEtMS4yNS4zMi0uMzguMjEtLjY0LjU1LS43OSwxLjA0bC0xLjU2LS40OGMuMjEtLjc0LjYyLTEuMzMsMS4yMi0xLjc3LjYtLjQ0LDEuNC0uNjYsMi40LS42Ni43NywwLDEuNDUuMTMsMi4wMi40LjU4LjI2LDEsLjY4LDEuMjYsMS4yNS4xNC4yOC4yMi41OC4yNi45LjAzLjMxLjA1LjY1LjA1LDEuMDJ2NS4zMmgtMS40OHYtMS45OGwuMjkuMjZjLS4zNi42Ni0u'+
			'ODEsMS4xNS0xLjM3LDEuNDgtLjU1LjMyLTEuMjMuNDgtMi4wMy40OFptLjMtMS4zN2MuNDcsMCwuODgtLjA4LDEuMjItLjI1LjM0LS4xNy42Mi0uMzkuODItLjY1LjIxLS4yNi4zNC0uNTMuNDEtLjgyLjA5LS4yNi4xNC0uNTQuMTUtLjg2LjAyLS4zMi4wMi0uNTguMDItLjc3bC41NC4yYy0uNTMuMDgtMS4wMS4xNS0xLjQ0LjIyLS40My4wNi0uODIuMTMtMS4xOC4xOS0uMzUuMDYtLjY2LjEzLS45My4yMi0uMjMuMDgtLjQzLjE4LS42Mi4yOS0uMTguMTEtLjMyLjI1LS40Mi40MS0uMS4xNi0uMTUuMzUtLjE1LjU4cy4wNi40My4xNy42MmMuMTEuMTkuMjguMzQuNTEuNDUuMjMuMTEuNTIuMTcuOD'+
			'guMTdaIiBjbGFzcz0iY2xzLTIiLz4KPC9zdmc+Cg==';
		me._svg_8__imga.setAttribute('src',hs);
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="Svg 8";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 8px;';
		hs+='top : 9px;';
		hs+='visibility : inherit;';
		hs+='width : 156px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_8.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_8.onclick=function (e) {
			player.setVariableValue('var1', !player.getVariableValue('var1'));
		}
		me._svg_8.onmouseover=function (e) {
			me._svg_8__img.style.visibility='hidden';
			me._svg_8__imgo.style.visibility='inherit';
		}
		me._svg_8.onmouseout=function (e) {
			me._svg_8__img.style.visibility='inherit';
			me._svg_8__imgo.style.visibility='hidden';
			me._svg_8__imga.style.visibility='hidden';
		}
		me._svg_8.onmousedown=function (e) {
			me._svg_8__imga.style.visibility='inherit';
			me._svg_8__imgo.style.visibility='hidden';
		}
		me._svg_8.onmouseup=function (e) {
			me._svg_8__imga.style.visibility='hidden';
			if (skin.player.getHasTouch()) {
				me._svg_8__img.style.visibility='inherit';
			} else {
				me._svg_8__imgo.style.visibility='inherit';
			}
		}
		me._svg_8.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._svg_8);
		el=me._button_silhouette_next_previous=document.createElement('div');
		el.ggId="button_silhouette_next_previous";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 0px;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_silhouette_next_previous.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_silhouette_next_previous.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._pano_prev=document.createElement('div');
		els=me._pano_prev__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDIwIDE5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAxOTsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMD'+
			'AwL3N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2Rpc3BsYXk6bm9uZTt9JiN4ZDsKCS5zdDF7ZGlzcGxheTppbmxpbmU7ZmlsbDojMTkzNTVCO30mI3hkOwoJLnN0MntkaXNwbGF5OmlubGluZTtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7fSYjeGQ7Cgkuc3Qze2Rpc3BsYXk6aW5saW5lO30mI3hkOwoJLnN0NHtjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDAzMTg4ODkyODIwMTg3NjA4NjQ4MDAwMDAwMDY4Njk1NzMzNTY4ODEwMDI2Ml8pO30mI3hkOwoJLnN0NXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cgkuc3Q2e2ZpbGw6IzFEMjMyOTt9JiN4ZDsKPC9zdHlsZT4KIDxn'+
			'IGNsYXNzPSJzdDAiPgogIDxwYXRoIGQ9Ik0wLDUuMzZjMC0xLjI2LDAtMS45LDAuMTQtMi40MmMwLjM3LTEuMzYsMS40NC0yLjQzLDIuOC0yLjhDMy40NiwwLDQuMSwwLDUuMzYsMGg5LjI4YzEuMjYsMCwxLjksMCwyLjQyLDAuMTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjM2LDAuMzcsMi40MywxLjQ0LDIuOCwyLjhDMjAsMy40NiwyMCw0LjEsMjAsNS4zNnY4LjI4YzAsMS4yNiwwLDEuOS0wLjE0LDIuNDJjLTAuMzcsMS4zNi0xLjQ0LDIuNDMtMi44LDIuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzE2LjU0LDE5LDE1LjksMTksMTQuNjQsMTlINS4zNmMtMS4yNiwwLTEuOSwwLTIuNDItMC4xNGMtMS'+
			'4zNi0wLjM3LTIuNDMtMS40NC0yLjgtMi44QzAsMTUuNTQsMCwxNC45LDAsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNMC41LDUuMzZjMC0xLjMsMC0xLjg1LDAuMTItMi4yOGMwLjMzLTEuMTksMS4yNi0yLjEzLDIuNDUtMi40NUMzLjUxLDAuNSw0LjA2LDAuNSw1LjM2LDAuNWg5LjI4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4zLDAsMS44NSwwLDIuMjgsMC4xMmMxLjE5LDAuMzMsMi4xMywxLjI2LDIuNDUsMi40NWMwLjEyLDAuNDQsMC4xMiwwLjk5LDAuMTIsMi4yOHY4LjI4YzAsMS4zLDAsMS44NS0wLjEyLDIuMjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zMywxLjE5'+
			'LTEuMjYsMi4xMy0yLjQ1LDIuNDVjLTAuNDQsMC4xMi0wLjk5LDAuMTItMi4yOCwwLjEySDUuMzZjLTEuMywwLTEuODUsMC0yLjI4LTAuMTJjLTEuMTktMC4zMy0yLjEzLTEuMjYtMi40NS0yLjQ1JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMC41LDE1LjQ5LDAuNSwxNC45NCwwLjUsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDIiLz4KICA8ZyBjbGFzcz0ic3QzIj4KICAgPGRlZnM+CiAgICA8cmVjdCB4PSI0LjUiIHk9IjMuNSIgaGVpZ2h0PSIxMSIgaWQ9IlNWR0lEXzFfIiB3aWR0aD0iMTEiLz4KICAgPC9kZWZzPgogICA8Y2xpcFBhdGggaWQ9IlNWR0lEXzAwMDAwMTY1OTU0NTYyNTk4Mzc1NTgxMDAwMD'+
			'AwMDAyNzA0NjA0NTE2NzA0MDkzMDg2XyI+CiAgICA8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CiAgIDwvY2xpcFBhdGg+CiAgIDxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDE2NTk1NDU2MjU5ODM3NTU4MTAwMDAwMDAwMjcwNDYwNDUxNjcwNDA5MzA4Nl8pOyI+CiAgICA8cGF0aCBkPSJNMTQuMTIsOS41OWgtMy41NHYzLjU0SDkuNDFWOS41OUg1Ljg4VjguNDFoMy41NFY0Ljg4aDEuMTh2My41NGgzLjU0VjkuNTl6IiBjbGFzcz0ic3Q1Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8Zz4KICA8cGF0aCBkPSJNMTUuNzcs'+
			'MTguMTVINC4yM2MtMS41OSwwLTIuODgtMS4yOS0yLjg4LTIuODhWMy43M2MwLTEuNTksMS4yOS0yLjg4LDIuODgtMi44OGgxMS41NCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuNTksMCwyLjg4LDEuMjksMi44OCwyLjg4djExLjU0QzE4LjY1LDE2Ljg2LDE3LjM2LDE4LjE1LDE1Ljc3LDE4LjE1eiIgY2xhc3M9InN0NSIvPgogPC9nPgogPHBhdGggZD0iTTExLjU2LDExLjMxTDkuNjMsOS4zOGwxLjkzLTEuOTNsLTAuNTktMC41OUw4LjQ0LDkuMzhsMi41MiwyLjUyTDExLjU2LDExLjMxeiIgY2xhc3M9InN0NiIvPgo8L3N2Zz4K';
		me._pano_prev__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._pano_prev__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDIwIDE5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAxOTsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMD'+
			'AwL3N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2Rpc3BsYXk6bm9uZTt9JiN4ZDsKCS5zdDF7ZGlzcGxheTppbmxpbmU7ZmlsbDojMTkzNTVCO30mI3hkOwoJLnN0MntkaXNwbGF5OmlubGluZTtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7fSYjeGQ7Cgkuc3Qze2Rpc3BsYXk6aW5saW5lO30mI3hkOwoJLnN0NHtjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDE0NzIyMDUyODIzMDM2MjkxNzU3MDAwMDAwMDE4OTk3MjU2NDEwMTI5NjI3MF8pO30mI3hkOwoJLnN0NXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cgkuc3Q2e2ZpbGw6IzFEMjMyOTt9JiN4ZDsKPC9zdHlsZT4KIDxn'+
			'IGNsYXNzPSJzdDAiPgogIDxwYXRoIGQ9Ik0wLDUuMzZjMC0xLjI2LDAtMS45LDAuMTQtMi40MmMwLjM3LTEuMzYsMS40NC0yLjQzLDIuOC0yLjhDMy40NiwwLDQuMSwwLDUuMzYsMGg5LjI4YzEuMjYsMCwxLjksMCwyLjQyLDAuMTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjM2LDAuMzcsMi40MywxLjQ0LDIuOCwyLjhDMjAsMy40NiwyMCw0LjEsMjAsNS4zNnY4LjI4YzAsMS4yNiwwLDEuOS0wLjE0LDIuNDJjLTAuMzcsMS4zNi0xLjQ0LDIuNDMtMi44LDIuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzE2LjU0LDE5LDE1LjksMTksMTQuNjQsMTlINS4zNmMtMS4yNiwwLTEuOSwwLTIuNDItMC4xNGMtMS'+
			'4zNi0wLjM3LTIuNDMtMS40NC0yLjgtMi44QzAsMTUuNTQsMCwxNC45LDAsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNMC41LDUuMzZjMC0xLjMsMC0xLjg1LDAuMTItMi4yOGMwLjMzLTEuMTksMS4yNi0yLjEzLDIuNDUtMi40NUMzLjUxLDAuNSw0LjA2LDAuNSw1LjM2LDAuNWg5LjI4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4zLDAsMS44NSwwLDIuMjgsMC4xMmMxLjE5LDAuMzMsMi4xMywxLjI2LDIuNDUsMi40NWMwLjEyLDAuNDQsMC4xMiwwLjk5LDAuMTIsMi4yOHY4LjI4YzAsMS4zLDAsMS44NS0wLjEyLDIuMjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zMywxLjE5'+
			'LTEuMjYsMi4xMy0yLjQ1LDIuNDVjLTAuNDQsMC4xMi0wLjk5LDAuMTItMi4yOCwwLjEySDUuMzZjLTEuMywwLTEuODUsMC0yLjI4LTAuMTJjLTEuMTktMC4zMy0yLjEzLTEuMjYtMi40NS0yLjQ1JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMC41LDE1LjQ5LDAuNSwxNC45NCwwLjUsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDIiLz4KICA8ZyBjbGFzcz0ic3QzIj4KICAgPGRlZnM+CiAgICA8cmVjdCB4PSI0LjUiIHk9IjMuNSIgaGVpZ2h0PSIxMSIgaWQ9IlNWR0lEXzFfIiB3aWR0aD0iMTEiLz4KICAgPC9kZWZzPgogICA8Y2xpcFBhdGggaWQ9IlNWR0lEXzAwMDAwMDg3Mzg0OTk2MjQ2NTY1ODA5OTgwMD'+
			'AwMDAzOTc1ODI3NzM3NzM3MjY0NTIwXyI+CiAgICA8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CiAgIDwvY2xpcFBhdGg+CiAgIDxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDA4NzM4NDk5NjI0NjU2NTgwOTk4MDAwMDAwMzk3NTgyNzczNzczNzI2NDUyMF8pOyI+CiAgICA8cGF0aCBkPSJNMTQuMTIsOS41OWgtMy41NHYzLjU0SDkuNDFWOS41OUg1Ljg4VjguNDFoMy41NFY0Ljg4aDEuMTh2My41NGgzLjU0VjkuNTl6IiBjbGFzcz0ic3Q1Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8Zz4KICA8cGF0aCBkPSJNMTYuMzMs'+
			'MTlIMy42N2MtMS43NSwwLTMuMTctMS40Mi0zLjE3LTMuMTdWMy4xN0MwLjUsMS40MiwxLjkyLDAsMy42NywwaDEyLjY3YzEuNzUsMCwzLjE3LDEuNDIsMy4xNywzLjE3JiN4ZDsmI3hhOyYjeDk7JiN4OTt2MTIuNjdDMTkuNSwxNy41OCwxOC4wOCwxOSwxNi4zMywxOXoiIGNsYXNzPSJzdDUiLz4KIDwvZz4KIDxwYXRoIGQ9Ik0xMS43MSwxMS40OUw5LjYsOS4zN2wyLjEyLTIuMTJMMTEuMDYsNi42TDguMjksOS4zN2wyLjc3LDIuNzdMMTEuNzEsMTEuNDl6IiBjbGFzcz0ic3Q2Ii8+Cjwvc3ZnPgo=';
		me._pano_prev__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Pano Prev";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 6px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pano_prev.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pano_prev.onclick=function (e) {
			player.openNext("{"+player.getPrevNode()+"}","");
		}
		me._pano_prev.onmouseover=function (e) {
			me._pano_prev__img.style.visibility='hidden';
			me._pano_prev__imgo.style.visibility='inherit';
		}
		me._pano_prev.onmouseout=function (e) {
			me._pano_prev__img.style.visibility='inherit';
			me._pano_prev__imgo.style.visibility='hidden';
		}
		me._pano_prev.ggUpdatePosition=function (useTransition) {
		}
		me._button_silhouette_next_previous.appendChild(me._pano_prev);
		el=me._pano_next=document.createElement('div');
		els=me._pano_next__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDIwIDE5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAxOTsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMD'+
			'AwL3N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2Rpc3BsYXk6bm9uZTt9JiN4ZDsKCS5zdDF7ZGlzcGxheTppbmxpbmU7ZmlsbDojMTkzNTVCO30mI3hkOwoJLnN0MntkaXNwbGF5OmlubGluZTtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7fSYjeGQ7Cgkuc3Qze2Rpc3BsYXk6aW5saW5lO30mI3hkOwoJLnN0NHtjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDA2NjUxMTQ3NTkxODkwMTg0ODUzMDAwMDAxMTcwNTYzODgzNjY2NzkyNTY5MF8pO30mI3hkOwoJLnN0NXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cgkuc3Q2e2ZpbGw6IzFEMjMyOTt9JiN4ZDsKPC9zdHlsZT4KIDxn'+
			'IGNsYXNzPSJzdDAiPgogIDxwYXRoIGQ9Ik0wLDUuMzZjMC0xLjI2LDAtMS45LDAuMTQtMi40MmMwLjM3LTEuMzYsMS40NC0yLjQzLDIuOC0yLjhDMy40NiwwLDQuMSwwLDUuMzYsMGg5LjI4YzEuMjYsMCwxLjksMCwyLjQyLDAuMTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjM2LDAuMzcsMi40MywxLjQ0LDIuOCwyLjhDMjAsMy40NiwyMCw0LjEsMjAsNS4zNnY4LjI4YzAsMS4yNiwwLDEuOS0wLjE0LDIuNDJjLTAuMzcsMS4zNi0xLjQ0LDIuNDMtMi44LDIuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzE2LjU0LDE5LDE1LjksMTksMTQuNjQsMTlINS4zNmMtMS4yNiwwLTEuOSwwLTIuNDItMC4xNGMtMS'+
			'4zNi0wLjM3LTIuNDMtMS40NC0yLjgtMi44QzAsMTUuNTQsMCwxNC45LDAsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNMC41LDUuMzZjMC0xLjMsMC0xLjg1LDAuMTItMi4yOGMwLjMzLTEuMTksMS4yNi0yLjEzLDIuNDUtMi40NUMzLjUxLDAuNSw0LjA2LDAuNSw1LjM2LDAuNWg5LjI4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4zLDAsMS44NSwwLDIuMjgsMC4xMmMxLjE5LDAuMzMsMi4xMywxLjI2LDIuNDUsMi40NWMwLjEyLDAuNDQsMC4xMiwwLjk5LDAuMTIsMi4yOHY4LjI4YzAsMS4zLDAsMS44NS0wLjEyLDIuMjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zMywxLjE5'+
			'LTEuMjYsMi4xMy0yLjQ1LDIuNDVjLTAuNDQsMC4xMi0wLjk5LDAuMTItMi4yOCwwLjEySDUuMzZjLTEuMywwLTEuODUsMC0yLjI4LTAuMTJjLTEuMTktMC4zMy0yLjEzLTEuMjYtMi40NS0yLjQ1JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMC41LDE1LjQ5LDAuNSwxNC45NCwwLjUsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDIiLz4KICA8ZyBjbGFzcz0ic3QzIj4KICAgPGRlZnM+CiAgICA8cmVjdCB4PSI0LjUiIHk9IjMuNSIgaGVpZ2h0PSIxMSIgaWQ9IlNWR0lEXzFfIiB3aWR0aD0iMTEiLz4KICAgPC9kZWZzPgogICA8Y2xpcFBhdGggaWQ9IlNWR0lEXzAwMDAwMDE0NTk2NjA3NDQ5OTA2NDk4NzQwMD'+
			'AwMDExNzQzMjEyMTMyMzM2Njg5MDMzXyI+CiAgICA8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CiAgIDwvY2xpcFBhdGg+CiAgIDxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDAxNDU5NjYwNzQ0OTkwNjQ5ODc0MDAwMDAxMTc0MzIxMjEzMjMzNjY4OTAzM18pOyI+CiAgICA8cGF0aCBkPSJNMTQuMTIsOS41OWgtMy41NHYzLjU0SDkuNDFWOS41OUg1Ljg4VjguNDFoMy41NFY0Ljg4aDEuMTh2My41NGgzLjU0VjkuNTl6IiBjbGFzcz0ic3Q1Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8Zz4KICA8cGF0aCBkPSJNNC4yMyww'+
			'Ljg1aDExLjU0YzEuNTksMCwyLjg4LDEuMjksMi44OCwyLjg4djExLjU0YzAsMS41OS0xLjI5LDIuODgtMi44OCwyLjg4SDQuMjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMS41OSwwLTIuODgtMS4yOS0yLjg4LTIuODhWMy43M0MxLjM1LDIuMTQsMi42NCwwLjg1LDQuMjMsMC44NXoiIGNsYXNzPSJzdDUiLz4KIDwvZz4KIDxwYXRoIGQ9Ik04LjQ0LDcuNjlsMS45MywxLjkzbC0xLjkzLDEuOTNsMC41OSwwLjU5bDIuNTItMi41Mkw5LjAzLDcuMDlMOC40NCw3LjY5eiIgY2xhc3M9InN0NiIvPgo8L3N2Zz4K';
		me._pano_next__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._pano_next__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDIwIDE5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAxOTsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMD'+
			'AwL3N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2Rpc3BsYXk6bm9uZTt9JiN4ZDsKCS5zdDF7ZGlzcGxheTppbmxpbmU7ZmlsbDojMTkzNTVCO30mI3hkOwoJLnN0MntkaXNwbGF5OmlubGluZTtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7fSYjeGQ7Cgkuc3Qze2Rpc3BsYXk6aW5saW5lO30mI3hkOwoJLnN0NHtjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDAxNTMxNTIwNjUzMTQ4MzkxNjY3MDAwMDAxNzI1NjQ1MTU5OTkwMDk1NDgxMl8pO30mI3hkOwoJLnN0NXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cgkuc3Q2e2ZpbGw6IzFEMjMyOTt9JiN4ZDsKPC9zdHlsZT4KIDxn'+
			'IGNsYXNzPSJzdDAiPgogIDxwYXRoIGQ9Ik0wLDUuMzZjMC0xLjI2LDAtMS45LDAuMTQtMi40MmMwLjM3LTEuMzYsMS40NC0yLjQzLDIuOC0yLjhDMy40NiwwLDQuMSwwLDUuMzYsMGg5LjI4YzEuMjYsMCwxLjksMCwyLjQyLDAuMTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjM2LDAuMzcsMi40MywxLjQ0LDIuOCwyLjhDMjAsMy40NiwyMCw0LjEsMjAsNS4zNnY4LjI4YzAsMS4yNiwwLDEuOS0wLjE0LDIuNDJjLTAuMzcsMS4zNi0xLjQ0LDIuNDMtMi44LDIuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzE2LjU0LDE5LDE1LjksMTksMTQuNjQsMTlINS4zNmMtMS4yNiwwLTEuOSwwLTIuNDItMC4xNGMtMS'+
			'4zNi0wLjM3LTIuNDMtMS40NC0yLjgtMi44QzAsMTUuNTQsMCwxNC45LDAsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNMC41LDUuMzZjMC0xLjMsMC0xLjg1LDAuMTItMi4yOGMwLjMzLTEuMTksMS4yNi0yLjEzLDIuNDUtMi40NUMzLjUxLDAuNSw0LjA2LDAuNSw1LjM2LDAuNWg5LjI4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4zLDAsMS44NSwwLDIuMjgsMC4xMmMxLjE5LDAuMzMsMi4xMywxLjI2LDIuNDUsMi40NWMwLjEyLDAuNDQsMC4xMiwwLjk5LDAuMTIsMi4yOHY4LjI4YzAsMS4zLDAsMS44NS0wLjEyLDIuMjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zMywxLjE5'+
			'LTEuMjYsMi4xMy0yLjQ1LDIuNDVjLTAuNDQsMC4xMi0wLjk5LDAuMTItMi4yOCwwLjEySDUuMzZjLTEuMywwLTEuODUsMC0yLjI4LTAuMTJjLTEuMTktMC4zMy0yLjEzLTEuMjYtMi40NS0yLjQ1JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMC41LDE1LjQ5LDAuNSwxNC45NCwwLjUsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDIiLz4KICA8ZyBjbGFzcz0ic3QzIj4KICAgPGRlZnM+CiAgICA8cmVjdCB4PSI0LjUiIHk9IjMuNSIgaGVpZ2h0PSIxMSIgaWQ9IlNWR0lEXzFfIiB3aWR0aD0iMTEiLz4KICAgPC9kZWZzPgogICA8Y2xpcFBhdGggaWQ9IlNWR0lEXzAwMDAwMDY0MzU1MjIxOTY0MTA2ODc5MDQwMD'+
			'AwMDAwMjY5NTIzNzM1ODI0NDE3NDEzXyI+CiAgICA8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CiAgIDwvY2xpcFBhdGg+CiAgIDxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDA2NDM1NTIyMTk2NDEwNjg3OTA0MDAwMDAwMDI2OTUyMzczNTgyNDQxNzQxM18pOyI+CiAgICA8cGF0aCBkPSJNMTQuMTIsOS41OWgtMy41NHYzLjU0SDkuNDFWOS41OUg1Ljg4VjguNDFoMy41NFY0Ljg4aDEuMTh2My41NGgzLjU0VjkuNTl6IiBjbGFzcz0ic3Q1Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8Zz4KICA8cGF0aCBkPSJNMy42Nyww'+
			'aDEyLjY3YzEuNzUsMCwzLjE3LDEuNDIsMy4xNywzLjE3djEyLjY3YzAsMS43NS0xLjQyLDMuMTctMy4xNywzLjE3SDMuNjdjLTEuNzUsMC0zLjE3LTEuNDItMy4xNy0zLjE3JiN4ZDsmI3hhOyYjeDk7JiN4OTtWMy4xN0MwLjUsMS40MiwxLjkyLDAsMy42NywweiIgY2xhc3M9InN0NSIvPgogPC9nPgogPHBhdGggZD0iTTguMjksNy41MWwyLjEyLDIuMTJsLTIuMTIsMi4xMmwwLjY1LDAuNjVsMi43Ny0yLjc3TDguOTQsNi44Nkw4LjI5LDcuNTF6IiBjbGFzcz0ic3Q2Ii8+Cjwvc3ZnPgo=';
		me._pano_next__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="Pano Next";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._pano_next.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._pano_next.onclick=function (e) {
			player.openNext("{"+player.getNextNode()+"}","");
		}
		me._pano_next.onmouseover=function (e) {
			me._pano_next__img.style.visibility='hidden';
			me._pano_next__imgo.style.visibility='inherit';
		}
		me._pano_next.onmouseout=function (e) {
			me._pano_next__img.style.visibility='inherit';
			me._pano_next__imgo.style.visibility='hidden';
		}
		me._pano_next.ggUpdatePosition=function (useTransition) {
		}
		me._button_silhouette_next_previous.appendChild(me._pano_next);
		me.divSkin.appendChild(me._button_silhouette_next_previous);
		el=me._button_zoom=document.createElement('div');
		el.ggId="button_zoom";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 1px;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 180px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._button_zoom.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_zoom.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._zoomout=document.createElement('div');
		els=me._zoomout__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDIwIDE5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAxOTsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMD'+
			'AwL3N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2Rpc3BsYXk6bm9uZTt9JiN4ZDsKCS5zdDF7ZGlzcGxheTppbmxpbmU7ZmlsbDojMTkzNTVCO30mI3hkOwoJLnN0MntkaXNwbGF5OmlubGluZTtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7fSYjeGQ7Cgkuc3Qze2Rpc3BsYXk6aW5saW5lO30mI3hkOwoJLnN0NHtjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDExODM2Nzk4OTY2Mjg1Mzc4ODg5MDAwMDAwMzM5MTMwNTI5OTk0MTY5OTIyM18pO30mI3hkOwoJLnN0NXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cgkuc3Q2e2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjt9JiN4'+
			'ZDsKCS5zdDd7ZGlzcGxheTpub25lO2ZpbGw6IzFEMjMyOTt9JiN4ZDsKCS5zdDh7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAxNDA3MDU1OTIzMTkxOTM5OTAwNDAwMDAwMTEwNzg0OTUxOTQxNDM4MDUzMzBfKTt9JiN4ZDsKCS5zdDl7ZmlsbDojMUQyMzI5O30mI3hkOwo8L3N0eWxlPgogPGcgY2xhc3M9InN0MCI+CiAgPHBhdGggZD0iTTAsNS4zNmMwLTEuMjYsMC0xLjksMC4xNC0yLjQyYzAuMzctMS4zNiwxLjQ0LTIuNDMsMi44LTIuOEMzLjQ2LDAsNC4xLDAsNS4zNiwwaDkuMjhjMS4yNiwwLDEuOSwwLDIuNDIsMC4xNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMzYsMC4zNywyLjQzLDEuND'+
			'QsMi44LDIuOEMyMCwzLjQ2LDIwLDQuMSwyMCw1LjM2djguMjhjMCwxLjI2LDAsMS45LTAuMTQsMi40MmMtMC4zNywxLjM2LTEuNDQsMi40My0yLjgsMi44JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMTYuNTQsMTksMTUuOSwxOSwxNC42NCwxOUg1LjM2Yy0xLjI2LDAtMS45LDAtMi40Mi0wLjE0Yy0xLjM2LTAuMzctMi40My0xLjQ0LTIuOC0yLjhDMCwxNS41NCwwLDE0LjksMCwxMy42NFY1LjM2eiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik0wLjUsNS4zNmMwLTEuMywwLTEuODUsMC4xMi0yLjI4YzAuMzMtMS4xOSwxLjI2LTIuMTMsMi40NS0yLjQ1QzMuNTEsMC41LDQuMDYsMC41LDUuMzYsMC41'+
			'aDkuMjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjMsMCwxLjg1LDAsMi4yOCwwLjEyYzEuMTksMC4zMywyLjEzLDEuMjYsMi40NSwyLjQ1YzAuMTIsMC40NCwwLjEyLDAuOTksMC4xMiwyLjI4djguMjhjMCwxLjMsMCwxLjg1LTAuMTIsMi4yOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMzLDEuMTktMS4yNiwyLjEzLTIuNDUsMi40NWMtMC40NCwwLjEyLTAuOTksMC4xMi0yLjI4LDAuMTJINS4zNmMtMS4zLDAtMS44NSwwLTIuMjgtMC4xMmMtMS4xOS0wLjMzLTIuMTMtMS4yNi0yLjQ1LTIuNDUmI3hkOyYjeGE7JiN4OTsmI3g5O0MwLjUsMTUuNDksMC41LDE0Ljk0LDAuNSwxMy42NFY1LjM2eiIgY2'+
			'xhc3M9InN0MiIvPgogIDxnIGNsYXNzPSJzdDMiPgogICA8ZGVmcz4KICAgIDxyZWN0IHg9IjQuNSIgeT0iMy41IiBoZWlnaHQ9IjExIiBpZD0iU1ZHSURfMV8iIHdpZHRoPSIxMSIvPgogICA8L2RlZnM+CiAgIDxjbGlwUGF0aCBpZD0iU1ZHSURfMDAwMDAxNTgwMDIzNDAyOTY2NDEwMTU2OTAwMDAwMDY5NzA5OTEyOTUyNDM5NzgxMTlfIj4KICAgIDx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzFfIiBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4KICAgPC9jbGlwUGF0aD4KICAgPGcgc3R5bGU9ImNsaXAtcGF0aDp1cmwoI1NWR0lEXzAwMDAwMTU4MDAyMzQwMjk2NjQxMDE1NjkwMDAwMDA2OTcw'+
			'OTkxMjk1MjQzOTc4MTE5Xyk7Ij4KICAgIDxwYXRoIGQ9Ik0xNC4xMiw5LjU5aC0zLjU0djMuNTRIOS40MVY5LjU5SDUuODhWOC40MWgzLjU0VjQuODhoMS4xOHYzLjU0aDMuNTRWOS41OXoiIGNsYXNzPSJzdDUiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KIDxnIGNsYXNzPSJzdDAiPgogIDxwYXRoIGQ9Ik00MC45OSwxOC4xNUgyOS40NWMtMS41OSwwLTIuODgtMS4yOS0yLjg4LTIuODhWMy43M2MwLTEuNTksMS4yOS0yLjg4LDIuODgtMi44OGgxMS41NCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuNTksMCwyLjg4LDEuMjksMi44OCwyLjg4djExLjU0QzQzLjg3LDE2Ljg2LDQyLjU4LDE4LjE1LDQwLj'+
			'k5LDE4LjE1eiIgY2xhc3M9InN0NiIvPgogPC9nPgogPHBhdGggZD0iTTM2Ljc4LDExLjMxbC0xLjkzLTEuOTNsMS45My0xLjkzbC0wLjU5LTAuNTlsLTIuNTIsMi41MmwyLjUyLDIuNTJMMzYuNzgsMTEuMzF6IiBjbGFzcz0ic3Q3Ii8+CiA8Zz4KICA8cGF0aCBkPSJNNC4yMywwLjg1aDExLjU0YzEuNTksMCwyLjg4LDEuMjksMi44OCwyLjg4djExLjU0YzAsMS41OS0xLjI5LDIuODgtMi44OCwyLjg4SDQuMjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMS41OSwwLTIuODgtMS4yOS0yLjg4LTIuODhWMy43M0MxLjM1LDIuMTQsMi42NCwwLjg1LDQuMjMsMC44NXoiIGNsYXNzPSJzdDUiLz4KICA8Zz4K'+
			'ICAgPGRlZnM+CiAgICA8cmVjdCB4PSI3LjEyIiB5PSI2LjYyIiBoZWlnaHQ9IjUuNzciIGlkPSJTVkdJRF8wMDAwMDAwOTU3ODQ2MzY2OTY4MzI5NDk5MDAwMDAwNTgzOTI2OTY0NDczNjY1NTc3MF8iIHdpZHRoPSI1Ljc3Ii8+CiAgIDwvZGVmcz4KICAgPGNsaXBQYXRoIGlkPSJTVkdJRF8wMDAwMDEyNDEyNTkzNTc3MjEzNzk3NDg2MDAwMDAwMTE3Nzk3MjU2MjQ0NDAxMzQ4Nl8iPgogICAgPHVzZSB4bGluazpocmVmPSIjU1ZHSURfMDAwMDAwMDk1Nzg0NjM2Njk2ODMyOTQ5OTAwMDAwMDU4MzkyNjk2NDQ3MzY2NTU3NzBfIiBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4KICAgPC9jbGlwUG'+
			'F0aD4KICAgPGcgc3R5bGU9ImNsaXAtcGF0aDp1cmwoI1NWR0lEXzAwMDAwMTI0MTI1OTM1NzcyMTM3OTc0ODYwMDAwMDAxMTc3OTcyNTYyNDQ0MDEzNDg2Xyk7Ij4KICAgIDxwYXRoIGQ9Ik0xMi4xNiw5Ljg4SDcuODRWOS4yNmg0LjMzVjkuODh6IiBjbGFzcz0ic3Q5Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+Cjwvc3ZnPgo=';
		me._zoomout__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomout__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDIwIDE5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAxOTsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMD'+
			'AwL3N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2Rpc3BsYXk6bm9uZTt9JiN4ZDsKCS5zdDF7ZGlzcGxheTppbmxpbmU7ZmlsbDojMTkzNTVCO30mI3hkOwoJLnN0MntkaXNwbGF5OmlubGluZTtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7fSYjeGQ7Cgkuc3Qze2Rpc3BsYXk6aW5saW5lO30mI3hkOwoJLnN0NHtjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDA1MDY0NjgxODE0NTgwOTgwNjY4MDAwMDAxMjg1MDU5MDU1NzEzOTE3MzAyNl8pO30mI3hkOwoJLnN0NXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cgkuc3Q2e2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjt9JiN4'+
			'ZDsKCS5zdDd7ZGlzcGxheTpub25lO2ZpbGw6IzFEMjMyOTt9JiN4ZDsKCS5zdDh7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAwMDM4MTE1MjExODc5NTE5Mjk4MzAwMDAwMDc0NzQ5MzE4ODMxNTM4OTE0NzlfKTt9JiN4ZDsKCS5zdDl7ZmlsbDojMUQyMzI5O30mI3hkOwo8L3N0eWxlPgogPGcgY2xhc3M9InN0MCI+CiAgPHBhdGggZD0iTTAsNS4zNmMwLTEuMjYsMC0xLjksMC4xNC0yLjQyYzAuMzctMS4zNiwxLjQ0LTIuNDMsMi44LTIuOEMzLjQ2LDAsNC4xLDAsNS4zNiwwaDkuMjhjMS4yNiwwLDEuOSwwLDIuNDIsMC4xNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMzYsMC4zNywyLjQzLDEuND'+
			'QsMi44LDIuOEMyMCwzLjQ2LDIwLDQuMSwyMCw1LjM2djguMjhjMCwxLjI2LDAsMS45LTAuMTQsMi40MmMtMC4zNywxLjM2LTEuNDQsMi40My0yLjgsMi44JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMTYuNTQsMTksMTUuOSwxOSwxNC42NCwxOUg1LjM2Yy0xLjI2LDAtMS45LDAtMi40Mi0wLjE0Yy0xLjM2LTAuMzctMi40My0xLjQ0LTIuOC0yLjhDMCwxNS41NCwwLDE0LjksMCwxMy42NFY1LjM2eiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik0wLjUsNS4zNmMwLTEuMywwLTEuODUsMC4xMi0yLjI4YzAuMzMtMS4xOSwxLjI2LTIuMTMsMi40NS0yLjQ1QzMuNTEsMC41LDQuMDYsMC41LDUuMzYsMC41'+
			'aDkuMjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjMsMCwxLjg1LDAsMi4yOCwwLjEyYzEuMTksMC4zMywyLjEzLDEuMjYsMi40NSwyLjQ1YzAuMTIsMC40NCwwLjEyLDAuOTksMC4xMiwyLjI4djguMjhjMCwxLjMsMCwxLjg1LTAuMTIsMi4yOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjMzLDEuMTktMS4yNiwyLjEzLTIuNDUsMi40NWMtMC40NCwwLjEyLTAuOTksMC4xMi0yLjI4LDAuMTJINS4zNmMtMS4zLDAtMS44NSwwLTIuMjgtMC4xMmMtMS4xOS0wLjMzLTIuMTMtMS4yNi0yLjQ1LTIuNDUmI3hkOyYjeGE7JiN4OTsmI3g5O0MwLjUsMTUuNDksMC41LDE0Ljk0LDAuNSwxMy42NFY1LjM2eiIgY2'+
			'xhc3M9InN0MiIvPgogIDxnIGNsYXNzPSJzdDMiPgogICA8ZGVmcz4KICAgIDxyZWN0IHg9IjQuNSIgeT0iMy41IiBoZWlnaHQ9IjExIiBpZD0iU1ZHSURfMV8iIHdpZHRoPSIxMSIvPgogICA8L2RlZnM+CiAgIDxjbGlwUGF0aCBpZD0iU1ZHSURfMDAwMDAwMjY4ODA4Mzc0MzQxNzAwNTg5NTAwMDAwMTExNjc4MDg2NjMwODEwNzEwMzdfIj4KICAgIDx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzFfIiBzdHlsZT0ib3ZlcmZsb3c6dmlzaWJsZTsiLz4KICAgPC9jbGlwUGF0aD4KICAgPGcgc3R5bGU9ImNsaXAtcGF0aDp1cmwoI1NWR0lEXzAwMDAwMDI2ODgwODM3NDM0MTcwMDU4OTUwMDAwMDExMTY3'+
			'ODA4NjYzMDgxMDcxMDM3Xyk7Ij4KICAgIDxwYXRoIGQ9Ik0xNC4xMiw5LjU5aC0zLjU0djMuNTRIOS40MVY5LjU5SDUuODhWOC40MWgzLjU0VjQuODhoMS4xOHYzLjU0aDMuNTRWOS41OXoiIGNsYXNzPSJzdDUiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KIDxnIGNsYXNzPSJzdDAiPgogIDxwYXRoIGQ9Ik00MC45OSwxOC4xNUgyOS40NWMtMS41OSwwLTIuODgtMS4yOS0yLjg4LTIuODhWMy43M2MwLTEuNTksMS4yOS0yLjg4LDIuODgtMi44OGgxMS41NCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuNTksMCwyLjg4LDEuMjksMi44OCwyLjg4djExLjU0QzQzLjg3LDE2Ljg2LDQyLjU4LDE4LjE1LDQwLj'+
			'k5LDE4LjE1eiIgY2xhc3M9InN0NiIvPgogPC9nPgogPHBhdGggZD0iTTM2Ljc4LDExLjMxbC0xLjkzLTEuOTNsMS45My0xLjkzbC0wLjU5LTAuNTlsLTIuNTIsMi41MmwyLjUyLDIuNTJMMzYuNzgsMTEuMzF6IiBjbGFzcz0ic3Q3Ii8+CiA8Zz4KICA8cGF0aCBkPSJNMy42NywwaDEyLjY3YzEuNzUsMCwzLjE3LDEuNDIsMy4xNywzLjE3djEyLjY3YzAsMS43NS0xLjQyLDMuMTctMy4xNywzLjE3SDMuNjdjLTEuNzUsMC0zLjE3LTEuNDItMy4xNy0zLjE3JiN4ZDsmI3hhOyYjeDk7JiN4OTtWMy4xN0MwLjUsMS40MiwxLjkyLDAsMy42NywweiIgY2xhc3M9InN0NSIvPgogIDxnPgogICA8ZGVmcz4K'+
			'ICAgIDxyZWN0IHg9IjYuODMiIHk9IjYuMzMiIGhlaWdodD0iNi4zMyIgaWQ9IlNWR0lEXzAwMDAwMDc4MDQ1NjAxNzAyMzAyNjgyNDUwMDAwMDA5NzEwNTU3MzcyMTY2NzQ4MzQ4XyIgd2lkdGg9IjYuMzMiLz4KICAgPC9kZWZzPgogICA8Y2xpcFBhdGggaWQ9IlNWR0lEXzAwMDAwMTEyNjIxNjM5MzA3NDQ3NTA0OTIwMDAwMDExODUxNzM4MDAzMjUyOTExMDA0XyI+CiAgICA8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8wMDAwMDA3ODA0NTYwMTcwMjMwMjY4MjQ1MDAwMDAwOTcxMDU1NzM3MjE2Njc0ODM0OF8iIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIvPgogICA8L2NsaXBQYXRoPgogICA8Zy'+
			'BzdHlsZT0iY2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAxMTI2MjE2MzkzMDc0NDc1MDQ5MjAwMDAwMTE4NTE3MzgwMDMyNTI5MTEwMDRfKTsiPgogICAgPHBhdGggZD0iTTEyLjM4LDkuOTFINy42MlY5LjI0aDQuNzVWOS45MXoiIGNsYXNzPSJzdDkiLz4KICAgPC9nPgogIDwvZz4KIDwvZz4KPC9zdmc+Cg==';
		me._zoomout__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoomout";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='position : absolute;';
		hs+='right : 20px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomout.onmouseover=function (e) {
			me._zoomout__img.style.visibility='hidden';
			me._zoomout__imgo.style.visibility='inherit';
		}
		me._zoomout.onmouseout=function (e) {
			me._zoomout__img.style.visibility='inherit';
			me._zoomout__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.onmousedown=function (e) {
			me.elementMouseDown['zoomout']=true;
		}
		me._zoomout.onmouseup=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.ontouchend=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.ggUpdatePosition=function (useTransition) {
		}
		me._button_zoom.appendChild(me._zoomout);
		el=me._zoomin=document.createElement('div');
		els=me._zoomin__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDIwIDE5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAxOTsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMD'+
			'AwL3N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2Rpc3BsYXk6bm9uZTt9JiN4ZDsKCS5zdDF7ZGlzcGxheTppbmxpbmU7ZmlsbDojMTkzNTVCO30mI3hkOwoJLnN0MntkaXNwbGF5OmlubGluZTtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7fSYjeGQ7Cgkuc3Qze2Rpc3BsYXk6aW5saW5lO30mI3hkOwoJLnN0NHtjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDA5MTcwMjc0MTQ4MzE2ODM1MDAxMDAwMDAwNjUyNjUwNjc3NDU0MTYwNjU3Nl8pO30mI3hkOwoJLnN0NXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cgkuc3Q2e2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjt9JiN4'+
			'ZDsKCS5zdDd7ZGlzcGxheTpub25lO2ZpbGw6IzFEMjMyOTt9JiN4ZDsKCS5zdDh7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAxNTE1MTk1NjQxNjQ5MzQyOTgyMzAwMDAwMTUzMjg4MDY4NzQwOTIyMTA4NzZfKTt9JiN4ZDsKCS5zdDl7ZmlsbDojMUQyMzI5O30mI3hkOwoJLnN0MTB7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAwOTE3MDk0ODU2OTY4MDUzMDM1MjAwMDAwMDk1NTgzODI2NTY1MzUyNjAzMjlfKTt9JiN4ZDsKPC9zdHlsZT4KIDxnIGNsYXNzPSJzdDAiPgogIDxwYXRoIGQ9Ik0wLDUuMzZjMC0xLjI2LDAtMS45LDAuMTQtMi40MmMwLjM3LTEuMzYsMS40NC0yLjQzLDIuOC0yLj'+
			'hDMy40NiwwLDQuMSwwLDUuMzYsMGg5LjI4YzEuMjYsMCwxLjksMCwyLjQyLDAuMTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjM2LDAuMzcsMi40MywxLjQ0LDIuOCwyLjhDMjAsMy40NiwyMCw0LjEsMjAsNS4zNnY4LjI4YzAsMS4yNiwwLDEuOS0wLjE0LDIuNDJjLTAuMzcsMS4zNi0xLjQ0LDIuNDMtMi44LDIuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzE2LjU0LDE5LDE1LjksMTksMTQuNjQsMTlINS4zNmMtMS4yNiwwLTEuOSwwLTIuNDItMC4xNGMtMS4zNi0wLjM3LTIuNDMtMS40NC0yLjgtMi44QzAsMTUuNTQsMCwxNC45LDAsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJN'+
			'MC41LDUuMzZjMC0xLjMsMC0xLjg1LDAuMTItMi4yOGMwLjMzLTEuMTksMS4yNi0yLjEzLDIuNDUtMi40NUMzLjUxLDAuNSw0LjA2LDAuNSw1LjM2LDAuNWg5LjI4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4zLDAsMS44NSwwLDIuMjgsMC4xMmMxLjE5LDAuMzMsMi4xMywxLjI2LDIuNDUsMi40NWMwLjEyLDAuNDQsMC4xMiwwLjk5LDAuMTIsMi4yOHY4LjI4YzAsMS4zLDAsMS44NS0wLjEyLDIuMjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zMywxLjE5LTEuMjYsMi4xMy0yLjQ1LDIuNDVjLTAuNDQsMC4xMi0wLjk5LDAuMTItMi4yOCwwLjEySDUuMzZjLTEuMywwLTEuODUsMC0yLjI4LTAuMTJjLT'+
			'EuMTktMC4zMy0yLjEzLTEuMjYtMi40NS0yLjQ1JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMC41LDE1LjQ5LDAuNSwxNC45NCwwLjUsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDIiLz4KICA8ZyBjbGFzcz0ic3QzIj4KICAgPGRlZnM+CiAgICA8cmVjdCB4PSI0LjUiIHk9IjMuNSIgaGVpZ2h0PSIxMSIgaWQ9IlNWR0lEXzFfIiB3aWR0aD0iMTEiLz4KICAgPC9kZWZzPgogICA8Y2xpcFBhdGggaWQ9IlNWR0lEXzAwMDAwMTU3MzA2NjIyMDA5Mjk3Nzg1ODUwMDAwMDAxODkxMTMxNDAzOTI3MzYxNDYwXyI+CiAgICA8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7'+
			'Ii8+CiAgIDwvY2xpcFBhdGg+CiAgIDxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDE1NzMwNjYyMjAwOTI5Nzc4NTg1MDAwMDAwMTg5MTEzMTQwMzkyNzM2MTQ2MF8pOyI+CiAgICA8cGF0aCBkPSJNMTQuMTIsOS41OWgtMy41NHYzLjU0SDkuNDFWOS41OUg1Ljg4VjguNDFoMy41NFY0Ljg4aDEuMTh2My41NGgzLjU0VjkuNTl6IiBjbGFzcz0ic3Q1Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8ZyBjbGFzcz0ic3QwIj4KICA8cGF0aCBkPSJNNDAuOTksMTguMTVIMjkuNDVjLTEuNTksMC0yLjg4LTEuMjktMi44OC0yLjg4VjMuNzNjMC0xLjU5LDEuMjktMi44OCwyLjg4LTIuOD'+
			'hoMTEuNTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjU5LDAsMi44OCwxLjI5LDIuODgsMi44OHYxMS41NEM0My44NywxNi44Niw0Mi41OCwxOC4xNSw0MC45OSwxOC4xNXoiIGNsYXNzPSJzdDYiLz4KIDwvZz4KIDxwYXRoIGQ9Ik0zNi43OCwxMS4zMWwtMS45My0xLjkzbDEuOTMtMS45M2wtMC41OS0wLjU5bC0yLjUyLDIuNTJsMi41MiwyLjUyTDM2Ljc4LDExLjMxeiIgY2xhc3M9InN0NyIvPgogPGc+CiAgPHBhdGggZD0iTTQuMjMsMC44NWgxMS41NGMxLjU5LDAsMi44OCwxLjI5LDIuODgsMi44OHYxMS41NGMwLDEuNTktMS4yOSwyLjg4LTIuODgsMi44OEg0LjIzJiN4ZDsmI3hhOyYjeDk7JiN4'+
			'OTtjLTEuNTksMC0yLjg4LTEuMjktMi44OC0yLjg4VjMuNzNDMS4zNSwyLjE0LDIuNjQsMC44NSw0LjIzLDAuODV6IiBjbGFzcz0ic3Q1Ii8+CiAgPGc+CiAgIDxkZWZzPgogICAgPHJlY3QgeD0iNy4xMiIgeT0iNi42MiIgaGVpZ2h0PSI1Ljc3IiBpZD0iU1ZHSURfMDAwMDAwOTUzMDg2MDAxMDAxMzEzMTI2OTAwMDAwMTAxMTE2NzA3OTQ5NzI1MzQ5NDhfIiB3aWR0aD0iNS43NyIvPgogICA8L2RlZnM+CiAgIDxjbGlwUGF0aCBpZD0iU1ZHSURfMDAwMDAwOTYwMzQ5NjI3NDkzOTc1NTAzMTAwMDAwMTc2NzkwOTY2MzE4MDU4OTQzMjZfIj4KICAgIDx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzAwMD'+
			'AwMDk1MzA4NjAwMTAwMTMxMzEyNjkwMDAwMDEwMTExNjcwNzk0OTcyNTM0OTQ4XyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CiAgIDwvY2xpcFBhdGg+CiAgIDxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDA5NjAzNDk2Mjc0OTM5NzU1MDMxMDAwMDAxNzY3OTA5NjYzMTgwNTg5NDMyNl8pOyI+CiAgICA8cGF0aCBkPSJNMTIuMTYsOS44OEg3Ljg0VjkuMjZoNC4zM1Y5Ljg4eiIgY2xhc3M9InN0OSIvPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGc+CiAgPGRlZnM+CiAgIDxyZWN0IHg9IjcuMTIiIHk9IjYuNjIiIGhlaWdodD0iNS43NyIgaWQ9IlNWR0lEXzAwMDAwMDMx'+
			'OTA5NjEwOTg4NzYyNDg0NTAwMDAwMDE3NzY3MTM1NDIyNTkxNDk3MTAwXyIgd2lkdGg9IjUuNzciLz4KICA8L2RlZnM+CiAgPGNsaXBQYXRoIGlkPSJTVkdJRF8wMDAwMDEzMzQ5MjU3OTI3MzA3NjM3MjE4MDAwMDAwODc1OTQ5MjM0MzE1MDA4OTE0OF8iPgogICA8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8wMDAwMDAzMTkwOTYxMDk4ODc2MjQ4NDUwMDAwMDAxNzc2NzEzNTQyMjU5MTQ5NzEwMF8iIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIvPgogIDwvY2xpcFBhdGg+CiAgPGcgc3R5bGU9ImNsaXAtcGF0aDp1cmwoI1NWR0lEXzAwMDAwMTMzNDkyNTc5MjczMDc2MzcyMTgwMDAwMDA4NzU5ND'+
			'kyMzQzMTUwMDg5MTQ4Xyk7Ij4KICAgPHBhdGggZD0iTTEwLjM4LDcuMzR2NC4zM0g5Ljc2VjcuMzRIMTAuMzh6IiBjbGFzcz0ic3Q5Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._zoomin__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._zoomin__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDIwIDE5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAxOTsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMD'+
			'AwL3N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2Rpc3BsYXk6bm9uZTt9JiN4ZDsKCS5zdDF7ZGlzcGxheTppbmxpbmU7ZmlsbDojMTkzNTVCO30mI3hkOwoJLnN0MntkaXNwbGF5OmlubGluZTtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7fSYjeGQ7Cgkuc3Qze2Rpc3BsYXk6aW5saW5lO30mI3hkOwoJLnN0NHtjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDE2NTk1MjQ0MDE5MDM1MDE0NTAzMDAwMDAxNjc5MzQ2ODIxOTcxNzkzOTg4Nl8pO30mI3hkOwoJLnN0NXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cgkuc3Q2e2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjt9JiN4'+
			'ZDsKCS5zdDd7ZGlzcGxheTpub25lO2ZpbGw6IzFEMjMyOTt9JiN4ZDsKCS5zdDh7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAwMTEwMjUyOTEwMzYyNTg0NTMyNTAwMDAwMDQ3MTkwMTk5NTMwNzIxMzQ1NDBfKTt9JiN4ZDsKCS5zdDl7ZmlsbDojMUQyMzI5O30mI3hkOwoJLnN0MTB7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAxMjQ4NTY5NDUxNDM5NzQ0OTE4OTAwMDAwMDg2MTE1MjE4MDI1ODgzMzI5NDhfKTt9JiN4ZDsKPC9zdHlsZT4KIDxnIGNsYXNzPSJzdDAiPgogIDxwYXRoIGQ9Ik0wLDUuMzZjMC0xLjI2LDAtMS45LDAuMTQtMi40MmMwLjM3LTEuMzYsMS40NC0yLjQzLDIuOC0yLj'+
			'hDMy40NiwwLDQuMSwwLDUuMzYsMGg5LjI4YzEuMjYsMCwxLjksMCwyLjQyLDAuMTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjM2LDAuMzcsMi40MywxLjQ0LDIuOCwyLjhDMjAsMy40NiwyMCw0LjEsMjAsNS4zNnY4LjI4YzAsMS4yNiwwLDEuOS0wLjE0LDIuNDJjLTAuMzcsMS4zNi0xLjQ0LDIuNDMtMi44LDIuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzE2LjU0LDE5LDE1LjksMTksMTQuNjQsMTlINS4zNmMtMS4yNiwwLTEuOSwwLTIuNDItMC4xNGMtMS4zNi0wLjM3LTIuNDMtMS40NC0yLjgtMi44QzAsMTUuNTQsMCwxNC45LDAsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJN'+
			'MC41LDUuMzZjMC0xLjMsMC0xLjg1LDAuMTItMi4yOGMwLjMzLTEuMTksMS4yNi0yLjEzLDIuNDUtMi40NUMzLjUxLDAuNSw0LjA2LDAuNSw1LjM2LDAuNWg5LjI4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4zLDAsMS44NSwwLDIuMjgsMC4xMmMxLjE5LDAuMzMsMi4xMywxLjI2LDIuNDUsMi40NWMwLjEyLDAuNDQsMC4xMiwwLjk5LDAuMTIsMi4yOHY4LjI4YzAsMS4zLDAsMS44NS0wLjEyLDIuMjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zMywxLjE5LTEuMjYsMi4xMy0yLjQ1LDIuNDVjLTAuNDQsMC4xMi0wLjk5LDAuMTItMi4yOCwwLjEySDUuMzZjLTEuMywwLTEuODUsMC0yLjI4LTAuMTJjLT'+
			'EuMTktMC4zMy0yLjEzLTEuMjYtMi40NS0yLjQ1JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMC41LDE1LjQ5LDAuNSwxNC45NCwwLjUsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDIiLz4KICA8ZyBjbGFzcz0ic3QzIj4KICAgPGRlZnM+CiAgICA8cmVjdCB4PSI0LjUiIHk9IjMuNSIgaGVpZ2h0PSIxMSIgaWQ9IlNWR0lEXzFfIiB3aWR0aD0iMTEiLz4KICAgPC9kZWZzPgogICA8Y2xpcFBhdGggaWQ9IlNWR0lEXzAwMDAwMTI1NTkwNTIxMDQ1MjM0OTQwNzMwMDAwMDA0NjY1OTI1MTAwODMzOTMxOTUzXyI+CiAgICA8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8xXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7'+
			'Ii8+CiAgIDwvY2xpcFBhdGg+CiAgIDxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDEyNTU5MDUyMTA0NTIzNDk0MDczMDAwMDAwNDY2NTkyNTEwMDgzMzkzMTk1M18pOyI+CiAgICA8cGF0aCBkPSJNMTQuMTIsOS41OWgtMy41NHYzLjU0SDkuNDFWOS41OUg1Ljg4VjguNDFoMy41NFY0Ljg4aDEuMTh2My41NGgzLjU0VjkuNTl6IiBjbGFzcz0ic3Q1Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8ZyBjbGFzcz0ic3QwIj4KICA8cGF0aCBkPSJNNDAuOTksMTguMTVIMjkuNDVjLTEuNTksMC0yLjg4LTEuMjktMi44OC0yLjg4VjMuNzNjMC0xLjU5LDEuMjktMi44OCwyLjg4LTIuOD'+
			'hoMTEuNTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjU5LDAsMi44OCwxLjI5LDIuODgsMi44OHYxMS41NEM0My44NywxNi44Niw0Mi41OCwxOC4xNSw0MC45OSwxOC4xNXoiIGNsYXNzPSJzdDYiLz4KIDwvZz4KIDxwYXRoIGQ9Ik0zNi43OCwxMS4zMWwtMS45My0xLjkzbDEuOTMtMS45M2wtMC41OS0wLjU5bC0yLjUyLDIuNTJsMi41MiwyLjUyTDM2Ljc4LDExLjMxeiIgY2xhc3M9InN0NyIvPgogPGc+CiAgPHBhdGggZD0iTTMuNzEsMC4wN2gxMi41OGMxLjc0LDAsMy4xNCwxLjQxLDMuMTQsMy4xNHYxMi41OGMwLDEuNzQtMS40MSwzLjE0LTMuMTQsMy4xNEgzLjcxJiN4ZDsmI3hhOyYjeDk7JiN4'+
			'OTtjLTEuNzQsMC0zLjE0LTEuNDEtMy4xNC0zLjE0VjMuMjFDMC41NywxLjQ3LDEuOTcsMC4wNywzLjcxLDAuMDd6IiBjbGFzcz0ic3Q1Ii8+CiAgPGc+CiAgIDxkZWZzPgogICAgPHJlY3QgeD0iNi44NiIgeT0iNi4zNiIgaGVpZ2h0PSI2LjI5IiBpZD0iU1ZHSURfMDAwMDAwMzYyMzg5MjQzNDk3MTMwMDY5NjAwMDAwMTA1NzAyNTQ0MDU5NTAzNjQwNDRfIiB3aWR0aD0iNi4yOSIvPgogICA8L2RlZnM+CiAgIDxjbGlwUGF0aCBpZD0iU1ZHSURfMDAwMDAwNzY1ODI0NjMxMjkxNzg5MDg1MjAwMDAwMTM1MDY4NTA5MTkxNzE3MzU3MzRfIj4KICAgIDx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzAwMD'+
			'AwMDM2MjM4OTI0MzQ5NzEzMDA2OTYwMDAwMDEwNTcwMjU0NDA1OTUwMzY0MDQ0XyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CiAgIDwvY2xpcFBhdGg+CiAgIDxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDA3NjU4MjQ2MzEyOTE3ODkwODUyMDAwMDAxMzUwNjg1MDkxOTE3MTczNTczNF8pOyI+CiAgICA8cGF0aCBkPSJNMTIuMzYsOS45MUg3LjY0VjkuMjRoNC43MlY5LjkxeiIgY2xhc3M9InN0OSIvPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGc+CiAgPGRlZnM+CiAgIDxyZWN0IHg9IjYuODYiIHk9IjYuMzYiIGhlaWdodD0iNi4yOSIgaWQ9IlNWR0lEXzAwMDAwMDEz'+
			'OTA5MTkwMjkxMzE0MDQyNzIwMDAwMDA0NTQ3MTIyNjYxOTc1MjQ4NTMyXyIgd2lkdGg9IjYuMjkiLz4KICA8L2RlZnM+CiAgPGNsaXBQYXRoIGlkPSJTVkdJRF8wMDAwMDEzMzUyMjY3MjYzNzk2NTIxMzE0MDAwMDAxMzIyMzI4NjQxMTM3NzEwNzM4MV8iPgogICA8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8wMDAwMDAxMzkwOTE5MDI5MTMxNDA0MjcyMDAwMDAwNDU0NzEyMjY2MTk3NTI0ODUzMl8iIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIvPgogIDwvY2xpcFBhdGg+CiAgPGcgc3R5bGU9ImNsaXAtcGF0aDp1cmwoI1NWR0lEXzAwMDAwMTMzNTIyNjcyNjM3OTY1MjEzMTQwMDAwMDEzMjIzMj'+
			'g2NDExMzc3MTA3MzgxXyk7Ij4KICAgPHBhdGggZD0iTTEwLjQxLDcuMTR2NC43Mkg5Ljc0VjcuMTRIMTAuNDF6IiBjbGFzcz0ic3Q5Ii8+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._zoomin__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		el.ggId="zoomin";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='bottom : 5px;';
		hs+='cursor : pointer;';
		hs+='height : 50px;';
		hs+='left : 20px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoomin.onmouseover=function (e) {
			me._zoomin__img.style.visibility='hidden';
			me._zoomin__imgo.style.visibility='inherit';
		}
		me._zoomin.onmouseout=function (e) {
			me._zoomin__img.style.visibility='inherit';
			me._zoomin__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.onmousedown=function (e) {
			me.elementMouseDown['zoomin']=true;
		}
		me._zoomin.onmouseup=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.ontouchend=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.ggUpdatePosition=function (useTransition) {
		}
		me._button_zoom.appendChild(me._zoomin);
		me.divSkin.appendChild(me._button_zoom);
		el=me._svg_11=document.createElement('div');
		els=me._svg_11__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMSIgdmlld0JveD0iMCAwIDE5Ljg0IDE5Ljg0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogIzU3NzhiYjsKICAgICAgfQogICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxjaXJjbGUgcj0iOS45MiIgY3g9IjkuOTIiIGNsYXNzPSJjbHMtMiIgY3k9IjkuOTIiLz4KIDxwYXRoIG'+
			'Q9Im05LjkyLDFjNC45MiwwLDguOTIsNCw4LjkyLDguOTJzLTQsOC45Mi04LjkyLDguOTJTMSwxNC44NCwxLDkuOTIsNSwxLDkuOTIsMW0wLTFDNC40NCwwLDAsNC40NCwwLDkuOTJzNC40NCw5LjkyLDkuOTIsOS45Miw5LjkyLTQuNDQsOS45Mi05LjkyUzE1LjQsMCw5LjkyLDBoMFoiIGNsYXNzPSJjbHMtMSIvPgogPGNpcmNsZSByPSI0LjI1IiBjeD0iOS45MiIgY2xhc3M9ImNscy0xIiBjeT0iOS45MiIvPgo8L3N2Zz4K';
		me._svg_11__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 11";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_11.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._svg_11.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.divSkin.appendChild(me._svg_11);
		me._map_1.ggMarkerInstances=[];
		me._map_1.ggMapId = 'FloorPlan01';
		me._map_1.ggLastNodeId=null;
		me._map_1.ggSimpleFloorplanMarkerArray=[];
		me._map_1.ggFloorplanWidth=0;
		me._map_1.ggFloorplanHeight=0;
		me._map_1__mapdiv=document.createElement('div');
		me._map_1__mapdiv.className='ggskin ggskin_map';
		me._map_1.appendChild(me._map_1__mapdiv);
		me._map_1__img=document.createElement('img');
		me._map_1__img.className='ggskin ggskin_map';
		me._map_1__mapdiv.appendChild(me._map_1__img);
		me._map_1.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_1.ggRadar.update=function() {
			var radar=me._map_1.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_1.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_1.ggFilteredIds.length > 0 && me._map_1.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_1.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_1__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',130);
				radar.radarElement.setAttributeNS(null,'height',130);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 130 130');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 65 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 65 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 65 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 65 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 65;
				arcY1 += 65;
				arcX2 += 65;
				arcY2 += 65;
				var radarPathString = 'M65,65 L' + arcX1 + ',' + arcY1 + ' A 65 65 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#3067af');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#3067af');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_1__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 65;
				var radarYPos = activeMarker.radarYPos - 65;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_1.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_1__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_1.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_1.clientWidth;
			var mapHeight = me._map_1.clientHeight;
			var levelLimit = 500 / window.devicePixelRatio;
			var level = 1;
			while (mapWidth > levelLimit || mapHeight > levelLimit) {
				levelLimit *= 2;
				if (mapDetails['width'] < levelLimit || mapDetails['height'] < levelLimit) break;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_1.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_1__img.setAttribute('src', imageFilename);
		me._map_1__mapdiv.setAttribute('style','position: absolute; left: 50%; margin-left: -' + me._map_1.ggFloorplanWidth / 2 + 'px; top: 50%; margin-top: -' + me._map_1.ggFloorplanHeight / 2 + 'px;width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;overflow:hidden;;');
		me._map_1__img.setAttribute('style','width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;');
		}
		me._map_1.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_1.clientWidth / me._map_1.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_1.ggFloorplanHeight = me._map_1.clientHeight;
				me._map_1.ggFloorplanWidth = me._map_1.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_1.ggFloorplanWidth = me._map_1.clientWidth;
				me._map_1.ggFloorplanHeight = me._map_1.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_1.ggInitMap=function() {
			me._map_1.ggMapNotLoaded = false;
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			me._map_1.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_1.ggPermeableMap = true;
			} else {
				me._map_1.ggPermeableMap = false;
			}
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggFloorplanNorth = mapDetails['floorplannorth'];
		}
		me._map_1.ggClearMap=function() {
			me._map_1.ggClearMapMarkers();
			me._map_1.ggMapNotLoaded = true;
		}
		me._map_1.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_1.ggMapId = mapId;
			me._map_1.ggClearMap();
			me._map_1.ggInitMap();
			me._map_1.ggInitMapMarkers();
		}
		me._map_1.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_1.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
					var xPos = (me._map_1.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_1.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_1.ggHMarkerAnchorOffset;
					yPos -= me._map_1.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_1.style['z-index'] + 2;
				}
			}
		}
		me._map_1.ggInitMapMarkers=function() {
			me._map_1.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
				if (coords.length>=2) {
					me._map_1.ggHMarkerAnchorOffset = 15;
					me._map_1.ggVMarkerAnchorOffset = 15;
					var markerParent = new Object();
					markerParent.ggElementNodeId=function() { return id };
					var markerClass = new SkinElement_svg_9_Class(me, markerParent);
					me._map_1.ggMarkerInstances.push(markerClass);
					var marker = markerClass._svg_9;
					me._map_1.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_1__mapdiv.appendChild(marker);
				}
			}
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_1);
		}
		me._map_1.ggClearMapMarkers=function() {
			for (id in me._map_1.ggSimpleFloorplanMarkerArray) {
				if (me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_1__mapdiv.removeChild(me._map_1.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_1.ggMarkerInstances=[];
			me._map_1.ggSimpleFloorplanMarkerArray=[];
		}
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node4);
		me._marker_node4__normal = clonedNormalElement._marker_normal;
		me._marker_node4__normal.style.visibility='inherit';
		me._marker_node4__normal.style.left='0px';
		me._marker_node4__normal.style.top='0px';
		me._marker_node4.ggMarkerNormal=me._marker_node4__normal;
		me._marker_node4.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node4);
		me._marker_node4__active= clonedActiveElement._marker_active;
		me._marker_node4__active.style.visibility='hidden';
		me._marker_node4__active.style.left='0px';
		me._marker_node4__active.style.top='0px';
		me._marker_node4.ggMarkerActive=me._marker_node4__active;
		me._marker_node4.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node4.firstChild) {
			me._marker_node4.insertBefore(me._marker_node4__active,me._marker_node4.firstChild);
		} else {
			me._marker_node4.appendChild(me._marker_node4__active);
		}
		if (me._marker_node4.firstChild) {
			me._marker_node4.insertBefore(me._marker_node4__normal,me._marker_node4.firstChild);
		} else {
			me._marker_node4.appendChild(me._marker_node4__normal);
		}
		for (var i = 0; i < me._marker_node4.childNodes.length; i++) {
			me._marker_node4.ggMarkerInstances.push(me._marker_node4.childNodes[i]);
		}
		me._marker_node4.callChildLogicBlocks_configloaded = function(){
			if(me._marker_node4.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_node4.ggMarkerInstances.length; i++) {
					if((me._marker_node4.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_node4)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_node4)<0 && i==0) || (i>1))) {
					if (me._marker_node4.ggMarkerInstances[i].logicBlock_position) {
						me._marker_node4.ggMarkerInstances[i].logicBlock_position();
					}
					}
				}
			}
		}
		me._marker_node4.callChildLogicBlocks_mouseover = function(){
			if(me._marker_node4.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_node4.ggMarkerInstances.length; i++) {
					if((me._marker_node4.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_node4)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_node4)<0 && i==0) || (i>1))) {
					if (me._marker_node4.ggMarkerInstances[i].logicBlock_visible) {
						me._marker_node4.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me._marker_node4.callChildLogicBlocks_mouseover = function(){
			if(me._marker_node4.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_node4.ggMarkerInstances.length; i++) {
					if((me._marker_node4.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_node4)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_node4)<0 && i==0) || (i>1))) {
					if (me._marker_node4.ggMarkerInstances[i].logicBlock_visible) {
						me._marker_node4.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me._marker_node4.callChildLogicBlocks_hastouch = function(){
			if(me._marker_node4.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_node4.ggMarkerInstances.length; i++) {
					if((me._marker_node4.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_node4)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_node4)<0 && i==0) || (i>1))) {
					if (me._marker_node4.ggMarkerInstances[i].logicBlock_position) {
						me._marker_node4.ggMarkerInstances[i].logicBlock_position();
					}
					}
				}
			}
		}
		me._marker_node4.callChildLogicBlocks_configloaded();
		me._marker_node4.callChildLogicBlocks_mouseover();
		me._marker_node4.callChildLogicBlocks_mouseover();
		me._marker_node4.callChildLogicBlocks_hastouch();
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node5);
		me._marker_node5__normal = clonedNormalElement._marker_normal;
		me._marker_node5__normal.style.visibility='inherit';
		me._marker_node5__normal.style.left='0px';
		me._marker_node5__normal.style.top='0px';
		me._marker_node5.ggMarkerNormal=me._marker_node5__normal;
		me._marker_node5.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node5);
		me._marker_node5__active= clonedActiveElement._marker_active;
		me._marker_node5__active.style.visibility='hidden';
		me._marker_node5__active.style.left='0px';
		me._marker_node5__active.style.top='0px';
		me._marker_node5.ggMarkerActive=me._marker_node5__active;
		me._marker_node5.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node5.firstChild) {
			me._marker_node5.insertBefore(me._marker_node5__active,me._marker_node5.firstChild);
		} else {
			me._marker_node5.appendChild(me._marker_node5__active);
		}
		if (me._marker_node5.firstChild) {
			me._marker_node5.insertBefore(me._marker_node5__normal,me._marker_node5.firstChild);
		} else {
			me._marker_node5.appendChild(me._marker_node5__normal);
		}
		for (var i = 0; i < me._marker_node5.childNodes.length; i++) {
			me._marker_node5.ggMarkerInstances.push(me._marker_node5.childNodes[i]);
		}
		me._marker_node5.callChildLogicBlocks_configloaded = function(){
			if(me._marker_node5.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_node5.ggMarkerInstances.length; i++) {
					if((me._marker_node5.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_node5)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_node5)<0 && i==0) || (i>1))) {
					if (me._marker_node5.ggMarkerInstances[i].logicBlock_position) {
						me._marker_node5.ggMarkerInstances[i].logicBlock_position();
					}
					}
				}
			}
		}
		me._marker_node5.callChildLogicBlocks_mouseover = function(){
			if(me._marker_node5.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_node5.ggMarkerInstances.length; i++) {
					if((me._marker_node5.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_node5)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_node5)<0 && i==0) || (i>1))) {
					if (me._marker_node5.ggMarkerInstances[i].logicBlock_visible) {
						me._marker_node5.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me._marker_node5.callChildLogicBlocks_mouseover = function(){
			if(me._marker_node5.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_node5.ggMarkerInstances.length; i++) {
					if((me._marker_node5.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_node5)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_node5)<0 && i==0) || (i>1))) {
					if (me._marker_node5.ggMarkerInstances[i].logicBlock_visible) {
						me._marker_node5.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me._marker_node5.callChildLogicBlocks_hastouch = function(){
			if(me._marker_node5.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_node5.ggMarkerInstances.length; i++) {
					if((me._marker_node5.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_node5)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_node5)<0 && i==0) || (i>1))) {
					if (me._marker_node5.ggMarkerInstances[i].logicBlock_position) {
						me._marker_node5.ggMarkerInstances[i].logicBlock_position();
					}
					}
				}
			}
		}
		me._marker_node5.callChildLogicBlocks_configloaded();
		me._marker_node5.callChildLogicBlocks_mouseover();
		me._marker_node5.callChildLogicBlocks_mouseover();
		me._marker_node5.callChildLogicBlocks_hastouch();
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node7);
		me._marker_node7__normal = clonedNormalElement._marker_normal;
		me._marker_node7__normal.style.visibility='inherit';
		me._marker_node7__normal.style.left='0px';
		me._marker_node7__normal.style.top='0px';
		me._marker_node7.ggMarkerNormal=me._marker_node7__normal;
		me._marker_node7.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node7);
		me._marker_node7__active= clonedActiveElement._marker_active;
		me._marker_node7__active.style.visibility='hidden';
		me._marker_node7__active.style.left='0px';
		me._marker_node7__active.style.top='0px';
		me._marker_node7.ggMarkerActive=me._marker_node7__active;
		me._marker_node7.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node7.firstChild) {
			me._marker_node7.insertBefore(me._marker_node7__active,me._marker_node7.firstChild);
		} else {
			me._marker_node7.appendChild(me._marker_node7__active);
		}
		if (me._marker_node7.firstChild) {
			me._marker_node7.insertBefore(me._marker_node7__normal,me._marker_node7.firstChild);
		} else {
			me._marker_node7.appendChild(me._marker_node7__normal);
		}
		for (var i = 0; i < me._marker_node7.childNodes.length; i++) {
			me._marker_node7.ggMarkerInstances.push(me._marker_node7.childNodes[i]);
		}
		me._marker_node7.callChildLogicBlocks_configloaded = function(){
			if(me._marker_node7.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_node7.ggMarkerInstances.length; i++) {
					if((me._marker_node7.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_node7)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_node7)<0 && i==0) || (i>1))) {
					if (me._marker_node7.ggMarkerInstances[i].logicBlock_position) {
						me._marker_node7.ggMarkerInstances[i].logicBlock_position();
					}
					}
				}
			}
		}
		me._marker_node7.callChildLogicBlocks_mouseover = function(){
			if(me._marker_node7.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_node7.ggMarkerInstances.length; i++) {
					if((me._marker_node7.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_node7)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_node7)<0 && i==0) || (i>1))) {
					if (me._marker_node7.ggMarkerInstances[i].logicBlock_visible) {
						me._marker_node7.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me._marker_node7.callChildLogicBlocks_mouseover = function(){
			if(me._marker_node7.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_node7.ggMarkerInstances.length; i++) {
					if((me._marker_node7.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_node7)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_node7)<0 && i==0) || (i>1))) {
					if (me._marker_node7.ggMarkerInstances[i].logicBlock_visible) {
						me._marker_node7.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me._marker_node7.callChildLogicBlocks_hastouch = function(){
			if(me._marker_node7.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_node7.ggMarkerInstances.length; i++) {
					if((me._marker_node7.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_node7)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_node7)<0 && i==0) || (i>1))) {
					if (me._marker_node7.ggMarkerInstances[i].logicBlock_position) {
						me._marker_node7.ggMarkerInstances[i].logicBlock_position();
					}
					}
				}
			}
		}
		me._marker_node7.callChildLogicBlocks_configloaded();
		me._marker_node7.callChildLogicBlocks_mouseover();
		me._marker_node7.callChildLogicBlocks_mouseover();
		me._marker_node7.callChildLogicBlocks_hastouch();
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node3);
		me._marker_node3__normal = clonedNormalElement._marker_normal;
		me._marker_node3__normal.style.visibility='inherit';
		me._marker_node3__normal.style.left='0px';
		me._marker_node3__normal.style.top='0px';
		me._marker_node3.ggMarkerNormal=me._marker_node3__normal;
		me._marker_node3.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node3);
		me._marker_node3__active= clonedActiveElement._marker_active;
		me._marker_node3__active.style.visibility='hidden';
		me._marker_node3__active.style.left='0px';
		me._marker_node3__active.style.top='0px';
		me._marker_node3.ggMarkerActive=me._marker_node3__active;
		me._marker_node3.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node3.firstChild) {
			me._marker_node3.insertBefore(me._marker_node3__active,me._marker_node3.firstChild);
		} else {
			me._marker_node3.appendChild(me._marker_node3__active);
		}
		if (me._marker_node3.firstChild) {
			me._marker_node3.insertBefore(me._marker_node3__normal,me._marker_node3.firstChild);
		} else {
			me._marker_node3.appendChild(me._marker_node3__normal);
		}
		for (var i = 0; i < me._marker_node3.childNodes.length; i++) {
			me._marker_node3.ggMarkerInstances.push(me._marker_node3.childNodes[i]);
		}
		me._marker_node3.callChildLogicBlocks_configloaded = function(){
			if(me._marker_node3.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_node3.ggMarkerInstances.length; i++) {
					if((me._marker_node3.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_node3)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_node3)<0 && i==0) || (i>1))) {
					if (me._marker_node3.ggMarkerInstances[i].logicBlock_position) {
						me._marker_node3.ggMarkerInstances[i].logicBlock_position();
					}
					}
				}
			}
		}
		me._marker_node3.callChildLogicBlocks_mouseover = function(){
			if(me._marker_node3.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_node3.ggMarkerInstances.length; i++) {
					if((me._marker_node3.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_node3)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_node3)<0 && i==0) || (i>1))) {
					if (me._marker_node3.ggMarkerInstances[i].logicBlock_visible) {
						me._marker_node3.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me._marker_node3.callChildLogicBlocks_mouseover = function(){
			if(me._marker_node3.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_node3.ggMarkerInstances.length; i++) {
					if((me._marker_node3.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_node3)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_node3)<0 && i==0) || (i>1))) {
					if (me._marker_node3.ggMarkerInstances[i].logicBlock_visible) {
						me._marker_node3.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me._marker_node3.callChildLogicBlocks_hastouch = function(){
			if(me._marker_node3.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_node3.ggMarkerInstances.length; i++) {
					if((me._marker_node3.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_node3)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_node3)<0 && i==0) || (i>1))) {
					if (me._marker_node3.ggMarkerInstances[i].logicBlock_position) {
						me._marker_node3.ggMarkerInstances[i].logicBlock_position();
					}
					}
				}
			}
		}
		me._marker_node3.callChildLogicBlocks_configloaded();
		me._marker_node3.callChildLogicBlocks_mouseover();
		me._marker_node3.callChildLogicBlocks_mouseover();
		me._marker_node3.callChildLogicBlocks_hastouch();
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._marker_node6);
		me._marker_node6__normal = clonedNormalElement._marker_normal;
		me._marker_node6__normal.style.visibility='inherit';
		me._marker_node6__normal.style.left='0px';
		me._marker_node6__normal.style.top='0px';
		me._marker_node6.ggMarkerNormal=me._marker_node6__normal;
		me._marker_node6.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._marker_node6);
		me._marker_node6__active= clonedActiveElement._marker_active;
		me._marker_node6__active.style.visibility='hidden';
		me._marker_node6__active.style.left='0px';
		me._marker_node6__active.style.top='0px';
		me._marker_node6.ggMarkerActive=me._marker_node6__active;
		me._marker_node6.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_node6.firstChild) {
			me._marker_node6.insertBefore(me._marker_node6__active,me._marker_node6.firstChild);
		} else {
			me._marker_node6.appendChild(me._marker_node6__active);
		}
		if (me._marker_node6.firstChild) {
			me._marker_node6.insertBefore(me._marker_node6__normal,me._marker_node6.firstChild);
		} else {
			me._marker_node6.appendChild(me._marker_node6__normal);
		}
		for (var i = 0; i < me._marker_node6.childNodes.length; i++) {
			me._marker_node6.ggMarkerInstances.push(me._marker_node6.childNodes[i]);
		}
		me._marker_node6.callChildLogicBlocks_configloaded = function(){
			if(me._marker_node6.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_node6.ggMarkerInstances.length; i++) {
					if((me._marker_node6.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_node6)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_node6)<0 && i==0) || (i>1))) {
					if (me._marker_node6.ggMarkerInstances[i].logicBlock_position) {
						me._marker_node6.ggMarkerInstances[i].logicBlock_position();
					}
					}
				}
			}
		}
		me._marker_node6.callChildLogicBlocks_mouseover = function(){
			if(me._marker_node6.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_node6.ggMarkerInstances.length; i++) {
					if((me._marker_node6.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_node6)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_node6)<0 && i==0) || (i>1))) {
					if (me._marker_node6.ggMarkerInstances[i].logicBlock_visible) {
						me._marker_node6.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me._marker_node6.callChildLogicBlocks_mouseover = function(){
			if(me._marker_node6.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_node6.ggMarkerInstances.length; i++) {
					if((me._marker_node6.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_node6)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_node6)<0 && i==0) || (i>1))) {
					if (me._marker_node6.ggMarkerInstances[i].logicBlock_visible) {
						me._marker_node6.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me._marker_node6.callChildLogicBlocks_hastouch = function(){
			if(me._marker_node6.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._marker_node6.ggMarkerInstances.length; i++) {
					if((me._marker_node6.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._marker_node6)>=0 && i==1) || (activeNodeMarker.indexOf(me._marker_node6)<0 && i==0) || (i>1))) {
					if (me._marker_node6.ggMarkerInstances[i].logicBlock_position) {
						me._marker_node6.ggMarkerInstances[i].logicBlock_position();
					}
					}
				}
			}
		}
		me._marker_node6.callChildLogicBlocks_configloaded();
		me._marker_node6.callChildLogicBlocks_mouseover();
		me._marker_node6.callChildLogicBlocks_mouseover();
		me._marker_node6.callChildLogicBlocks_hastouch();
		var clonedNormalElement = new SkinElement_marker_normal_Class(this,me._markertemplate);
		me._markertemplate__normal = clonedNormalElement._marker_normal;
		me._markertemplate__normal.style.visibility='inherit';
		me._markertemplate__normal.style.left='0px';
		me._markertemplate__normal.style.top='0px';
		me._markertemplate.ggMarkerNormal=me._markertemplate__normal;
		me._markertemplate.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_marker_active_Class(this,me._markertemplate);
		me._markertemplate__active= clonedActiveElement._marker_active;
		me._markertemplate__active.style.visibility='hidden';
		me._markertemplate__active.style.left='0px';
		me._markertemplate__active.style.top='0px';
		me._markertemplate.ggMarkerActive=me._markertemplate__active;
		me._markertemplate.ggMarkerInstances.push(clonedActiveElement);
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__active,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__active);
		}
		if (me._markertemplate.firstChild) {
			me._markertemplate.insertBefore(me._markertemplate__normal,me._markertemplate.firstChild);
		} else {
			me._markertemplate.appendChild(me._markertemplate__normal);
		}
		for (var i = 0; i < me._markertemplate.childNodes.length; i++) {
			me._markertemplate.ggMarkerInstances.push(me._markertemplate.childNodes[i]);
		}
		me._markertemplate.callChildLogicBlocks_configloaded = function(){
			if(me._markertemplate.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._markertemplate.ggMarkerInstances.length; i++) {
					if((me._markertemplate.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._markertemplate)>=0 && i==1) || (activeNodeMarker.indexOf(me._markertemplate)<0 && i==0) || (i>1))) {
					if (me._markertemplate.ggMarkerInstances[i].logicBlock_position) {
						me._markertemplate.ggMarkerInstances[i].logicBlock_position();
					}
					}
				}
			}
		}
		me._markertemplate.callChildLogicBlocks_mouseover = function(){
			if(me._markertemplate.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._markertemplate.ggMarkerInstances.length; i++) {
					if((me._markertemplate.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._markertemplate)>=0 && i==1) || (activeNodeMarker.indexOf(me._markertemplate)<0 && i==0) || (i>1))) {
					if (me._markertemplate.ggMarkerInstances[i].logicBlock_visible) {
						me._markertemplate.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me._markertemplate.callChildLogicBlocks_mouseover = function(){
			if(me._markertemplate.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._markertemplate.ggMarkerInstances.length; i++) {
					if((me._markertemplate.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._markertemplate)>=0 && i==1) || (activeNodeMarker.indexOf(me._markertemplate)<0 && i==0) || (i>1))) {
					if (me._markertemplate.ggMarkerInstances[i].logicBlock_visible) {
						me._markertemplate.ggMarkerInstances[i].logicBlock_visible();
					}
					}
				}
			}
		}
		me._markertemplate.callChildLogicBlocks_hastouch = function(){
			if(me._markertemplate.ggMarkerInstances) {
				var i;
				for(i = 0; i < me._markertemplate.ggMarkerInstances.length; i++) {
					if((me._markertemplate.ggMarkerInstances[i]) && ((activeNodeMarker.indexOf(me._markertemplate)>=0 && i==1) || (activeNodeMarker.indexOf(me._markertemplate)<0 && i==0) || (i>1))) {
					if (me._markertemplate.ggMarkerInstances[i].logicBlock_position) {
						me._markertemplate.ggMarkerInstances[i].logicBlock_position();
					}
					}
				}
			}
		}
		me._markertemplate.callChildLogicBlocks_configloaded();
		me._markertemplate.callChildLogicBlocks_mouseover();
		me._markertemplate.callChildLogicBlocks_mouseover();
		me._markertemplate.callChildLogicBlocks_hastouch();
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
		player.addListener('configloaded', function() {
			me._map_1.ggClearMap();
			me._map_1.ggInitMap(false);
			me._map_1.ggInitMapMarkers(true);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
		if (url=='{node4}') {
			me._marker_title4.onmouseover();
		}
		if (url=='{node5}') {
			me._marker_title3.onmouseover();
		}
		if (url=='{node7}') {
			me._marker_title2.onmouseover();
		}
		if (url=='{node3}') {
			me._marker_title1.onmouseover();
		}
		if (url=='{node6}') {
			me._marker_title0.onmouseover();
		}
		if (url=='{}') {
			me._marker_title.onmouseover();
		}
	}
	me.hotspotProxyOut=function(id, url) {
		if (url=='{node4}') {
			me._marker_title4.onmouseout();
		}
		if (url=='{node5}') {
			me._marker_title3.onmouseout();
		}
		if (url=='{node7}') {
			me._marker_title2.onmouseout();
		}
		if (url=='{node3}') {
			me._marker_title1.onmouseout();
		}
		if (url=='{node6}') {
			me._marker_title0.onmouseout();
		}
		if (url=='{}') {
			me._marker_title.onmouseout();
		}
	}
	me.callChildLogicBlocksHotspot__25_mouseover = function(){
		if(hotspotTemplates['Спальня_Хотспот']) {
			var i;
			for(i = 0; i < hotspotTemplates['Спальня_Хотспот'].length; i++) {
				if (hotspotTemplates['Спальня_Хотспот'][i]._text_19 && hotspotTemplates['Спальня_Хотспот'][i]._text_19.logicBlock_alpha) {
					hotspotTemplates['Спальня_Хотспот'][i]._text_19.logicBlock_alpha();
				}
				if (hotspotTemplates['Спальня_Хотспот'][i].__114 && hotspotTemplates['Спальня_Хотспот'][i].__114.logicBlock_alpha) {
					hotspotTemplates['Спальня_Хотспот'][i].__114.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot__24_mouseover = function(){
		if(hotspotTemplates['Спальня_Хотспот_коридор']) {
			var i;
			for(i = 0; i < hotspotTemplates['Спальня_Хотспот_коридор'].length; i++) {
				if (hotspotTemplates['Спальня_Хотспот_коридор'][i]._text_18 && hotspotTemplates['Спальня_Хотспот_коридор'][i]._text_18.logicBlock_alpha) {
					hotspotTemplates['Спальня_Хотспот_коридор'][i]._text_18.logicBlock_alpha();
				}
				if (hotspotTemplates['Спальня_Хотспот_коридор'][i].__113 && hotspotTemplates['Спальня_Хотспот_коридор'][i].__113.logicBlock_alpha) {
					hotspotTemplates['Спальня_Хотспот_коридор'][i].__113.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot__23_mouseover = function(){
		if(hotspotTemplates['Кухня_Хотспот']) {
			var i;
			for(i = 0; i < hotspotTemplates['Кухня_Хотспот'].length; i++) {
				if (hotspotTemplates['Кухня_Хотспот'][i]._text_17 && hotspotTemplates['Кухня_Хотспот'][i]._text_17.logicBlock_alpha) {
					hotspotTemplates['Кухня_Хотспот'][i]._text_17.logicBlock_alpha();
				}
				if (hotspotTemplates['Кухня_Хотспот'][i].__112 && hotspotTemplates['Кухня_Хотспот'][i].__112.logicBlock_alpha) {
					hotspotTemplates['Кухня_Хотспот'][i].__112.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot__22_mouseover = function(){
		if(hotspotTemplates['Ванная_Хотспот']) {
			var i;
			for(i = 0; i < hotspotTemplates['Ванная_Хотспот'].length; i++) {
				if (hotspotTemplates['Ванная_Хотспот'][i]._text_16 && hotspotTemplates['Ванная_Хотспот'][i]._text_16.logicBlock_alpha) {
					hotspotTemplates['Ванная_Хотспот'][i]._text_16.logicBlock_alpha();
				}
				if (hotspotTemplates['Ванная_Хотспот'][i].__111 && hotspotTemplates['Ванная_Хотспот'][i].__111.logicBlock_alpha) {
					hotspotTemplates['Ванная_Хотспот'][i].__111.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot__21_mouseover = function(){
		if(hotspotTemplates['Прихожая_Хотспот']) {
			var i;
			for(i = 0; i < hotspotTemplates['Прихожая_Хотспот'].length; i++) {
				if (hotspotTemplates['Прихожая_Хотспот'][i]._text_15 && hotspotTemplates['Прихожая_Хотспот'][i]._text_15.logicBlock_alpha) {
					hotspotTemplates['Прихожая_Хотспот'][i]._text_15.logicBlock_alpha();
				}
				if (hotspotTemplates['Прихожая_Хотспот'][i].__110 && hotspotTemplates['Прихожая_Хотспот'][i].__110.logicBlock_alpha) {
					hotspotTemplates['Прихожая_Хотспот'][i].__110.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot__19_mouseover = function(){
		if(hotspotTemplates['Коридор_Хотпоинт']) {
			var i;
			for(i = 0; i < hotspotTemplates['Коридор_Хотпоинт'].length; i++) {
				if (hotspotTemplates['Коридор_Хотпоинт'][i]._text_14 && hotspotTemplates['Коридор_Хотпоинт'][i]._text_14.logicBlock_alpha) {
					hotspotTemplates['Коридор_Хотпоинт'][i]._text_14.logicBlock_alpha();
				}
				if (hotspotTemplates['Коридор_Хотпоинт'][i].__20 && hotspotTemplates['Коридор_Хотпоинт'][i].__20.logicBlock_alpha) {
					hotspotTemplates['Коридор_Хотпоинт'][i].__20.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot__17_mouseover = function(){
		if(hotspotTemplates['Детская_Хотпоинт']) {
			var i;
			for(i = 0; i < hotspotTemplates['Детская_Хотпоинт'].length; i++) {
				if (hotspotTemplates['Детская_Хотпоинт'][i]._text_13 && hotspotTemplates['Детская_Хотпоинт'][i]._text_13.logicBlock_alpha) {
					hotspotTemplates['Детская_Хотпоинт'][i]._text_13.logicBlock_alpha();
				}
				if (hotspotTemplates['Детская_Хотпоинт'][i].__18 && hotspotTemplates['Детская_Хотпоинт'][i].__18.logicBlock_alpha) {
					hotspotTemplates['Детская_Хотпоинт'][i].__18.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot__15_mouseover = function(){
		if(hotspotTemplates['Гардероб_Хотпоинт']) {
			var i;
			for(i = 0; i < hotspotTemplates['Гардероб_Хотпоинт'].length; i++) {
				if (hotspotTemplates['Гардероб_Хотпоинт'][i]._text_12 && hotspotTemplates['Гардероб_Хотпоинт'][i]._text_12.logicBlock_alpha) {
					hotspotTemplates['Гардероб_Хотпоинт'][i]._text_12.logicBlock_alpha();
				}
				if (hotspotTemplates['Гардероб_Хотпоинт'][i].__16 && hotspotTemplates['Гардероб_Хотпоинт'][i].__16.logicBlock_alpha) {
					hotspotTemplates['Гардероб_Хотпоинт'][i].__16.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot__13_mouseover = function(){
		if(hotspotTemplates['Столовая_Хотспот']) {
			var i;
			for(i = 0; i < hotspotTemplates['Столовая_Хотспот'].length; i++) {
				if (hotspotTemplates['Столовая_Хотспот'][i]._text_11 && hotspotTemplates['Столовая_Хотспот'][i]._text_11.logicBlock_alpha) {
					hotspotTemplates['Столовая_Хотспот'][i]._text_11.logicBlock_alpha();
				}
				if (hotspotTemplates['Столовая_Хотспот'][i].__14 && hotspotTemplates['Столовая_Хотспот'][i].__14.logicBlock_alpha) {
					hotspotTemplates['Столовая_Хотспот'][i].__14.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot__11_mouseover = function(){
		if(hotspotTemplates['СУ Спальня_Хотпоинт']) {
			var i;
			for(i = 0; i < hotspotTemplates['СУ Спальня_Хотпоинт'].length; i++) {
				if (hotspotTemplates['СУ Спальня_Хотпоинт'][i]._text_10 && hotspotTemplates['СУ Спальня_Хотпоинт'][i]._text_10.logicBlock_alpha) {
					hotspotTemplates['СУ Спальня_Хотпоинт'][i]._text_10.logicBlock_alpha();
				}
				if (hotspotTemplates['СУ Спальня_Хотпоинт'][i].__12 && hotspotTemplates['СУ Спальня_Хотпоинт'][i].__12.logicBlock_alpha) {
					hotspotTemplates['СУ Спальня_Хотпоинт'][i].__12.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot__9_mouseover = function(){
		if(hotspotTemplates['Гостиная_Хотспот']) {
			var i;
			for(i = 0; i < hotspotTemplates['Гостиная_Хотспот'].length; i++) {
				if (hotspotTemplates['Гостиная_Хотспот'][i]._text_1 && hotspotTemplates['Гостиная_Хотспот'][i]._text_1.logicBlock_alpha) {
					hotspotTemplates['Гостиная_Хотспот'][i]._text_1.logicBlock_alpha();
				}
				if (hotspotTemplates['Гостиная_Хотспот'][i].__10 && hotspotTemplates['Гостиная_Хотспот'][i].__10.logicBlock_alpha) {
					hotspotTemplates['Гостиная_Хотспот'][i].__10.logicBlock_alpha();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
		var newMarker=[];
		var id=player.getCurrentNode();
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId.length > 0) && (nodeMarker[i].ggMarkerNodeId.charAt(0)=='{') && (nodeMarker[i].ggMarkerNodeId.substr(1, nodeMarker[i].ggMarkerNodeId.length - 2)==id) && (id!='')) match=true;  // }
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		me._map_1.ggUpdateConditionTimer();
		if (me.elementMouseDown['zoomout']) {
			player.changeFovLog(0.5,true);
		}
		if (me.elementMouseDown['zoomin']) {
			player.changeFovLog(-0.5,true);
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass__25(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__25=document.createElement('div');
		el.ggId="\u0421\u043f\u0430\u043b\u044c\u043d\u044f_\u0425\u043e\u0442\u0441\u043f\u043e\u0442";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__25.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__25.onclick=function (e) {
			player.openNext("{node12}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me.__25.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me.__25.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_25']=true;
			me._text_19.logicBlock_alpha();
			me.__114.logicBlock_alpha();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me.__25.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_25']=false;
			me._text_19.logicBlock_alpha();
			me.__114.logicBlock_alpha();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me.__25.ontouchend=function (e) {
			me.elementMouseOver['_25']=false;
			me._text_19.logicBlock_alpha();
			me.__114.logicBlock_alpha();
		}
		me.__25.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_19=document.createElement('div');
		els=me._text_19__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='background: #333333;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_19.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_19.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_19.ggUpdateText();
		});
		el.appendChild(els);
		me._text_19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_19.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_25'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._text_19.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._text_19.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._text_19.style[domTransition]='opacity 0s';
				if (me._text_19.ggCurrentLogicStateAlpha == 0) {
					me._text_19.style.visibility=me._text_19.ggVisible?'inherit':'hidden';
					me._text_19.style.opacity=1;
				}
				else {
					me._text_19.style.visibility="hidden";
					me._text_19.style.opacity=0;
				}
			}
		}
		me._text_19.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__25.appendChild(me._text_19);
		el=me.__114=document.createElement('div');
		els=me.__114__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEzNTIuNiAzNTAuNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTM1Mi42IDM1MC43OyIgeG1sbnM9Imh0dHA6Ly'+
			'93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMzMzMzMzO30mI3hkOwoJLnN0MXtmaWxsOiNFMEUwRTA7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBkPSJNODAuMiwwaDExOTIuM2M0NC4zLDAsODAuMiwzNS45LDgwLjIsODAuMnYxOTAuNGMwLDQ0LjMtMzUuOSw4MC4yLTgwLjIsODAuMkg4MC4yQzM1LjksMzUwLjcsMCwzMTQuOCwwLDI3MC41JiN4ZDsmI3hhOyYjeDk7VjgwLjJDMCwzNS45LDM1LjksMCw4MC4yLDB6IiBjbGFzcz0ic3QwIi8+CiA8Zz4KICA8cGF0aCBkPSJNMzk4LjQsMjM0LjdjLTExLjQsMC0yMS4xLTIuNS0yOS4x'+
			'LTcuNWMtOC01LTE0LjItMTEuOS0xOC40LTIwLjljLTQuMi04LjktNi40LTE5LjMtNi40LTMxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xMS44LDIuMS0yMi4xLDYuNC0zMXMxMC40LTE1LjksMTguNC0yMC45YzgtNSwxNy43LTcuNSwyOS4xLTcuNWMxMy4xLDAsMjQsMy4zLDMyLjcsMTBjOC42LDYuNiwxNC42LDE1LjYsMTgsMjYuOGwtMTYuOCw0LjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMi4yLTgtNi4yLTE0LjItMTEuOC0xOC44Yy01LjctNC41LTEzLTYuOC0yMi4xLTYuOGMtOC4xLDAtMTQuOCwxLjgtMjAuMiw1LjVjLTUuNCwzLjYtOS40LDguNy0xMi4yLDE1LjMmI3hkOyYjeGE7JiN4OTsmI3'+
			'g5O2MtMi43LDYuNS00LjEsMTQuMi00LjEsMjIuOWMtMC4xLDguNywxLjMsMTYuMyw0LDIyLjlzNi44LDExLjYsMTIuMiwxNS4zYzUuNCwzLjYsMTIuMiw1LjQsMjAuMiw1LjRjOSwwLDE2LjQtMi4zLDIyLjEtNi44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjNS43LTQuNiw5LjYtMTAuOCwxMS44LTE4LjdsMTYuOCw0LjVjLTMuNCwxMS4zLTkuNCwyMC4yLTE4LDI2LjhDNDIyLjUsMjMxLjQsNDExLjYsMjM0LjcsMzk4LjQsMjM0Ljd6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTQ2OC40LDIzMi40di04NS41aDcyLjF2ODUuNWgtMTYuNnYtNjkuOWgtMzl2NjkuOUg0NjguNHoiIGNsYXNzPSJzdDEi'+
			'Lz4KICA8cGF0aCBkPSJNNTg4LjcsMjM0LjdjLTYuMywwLTExLjYtMS4yLTE1LjktMy41Yy00LjMtMi4zLTcuNS01LjUtOS43LTkuM2MtMi4yLTMuOS0zLjMtOC4xLTMuMy0xMi44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC00LjMsMC44LTguMSwyLjMtMTEuNGMxLjUtMy4zLDMuOC02LjEsNi44LTguNGMzLTIuMyw2LjctNC4yLDExLjEtNS42YzMuOC0xLjEsOC4xLTIuMSwxMi45LTIuOWM0LjgtMC44LDkuOS0xLjYsMTUuMi0yLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2M1LjMtMC43LDEwLjYtMS41LDE1LjgtMi4ybC02LDMuM2MwLjEtNi43LTEuMy0xMS43LTQuMi0xNC45Yy0yLjktMy4zLTgtNC45LT'+
			'E1LjEtNC45Yy00LjUsMC04LjYsMS0xMi4zLDMuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0zLjcsMi4xLTYuNCw1LjUtNy44LDEwLjNsLTE1LjQtNC43YzIuMS03LjMsNi4xLTEzLjIsMTIuMS0xNy41YzUuOS00LjMsMTMuOC02LjUsMjMuNy02LjVjNy43LDAsMTQuMywxLjMsMjAsMy45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjNS43LDIuNiw5LjgsNi43LDEyLjUsMTIuNGMxLjQsMi44LDIuMiw1LjgsMi41LDguOWMwLjMsMy4xLDAuNSw2LjUsMC41LDEwLjF2NTIuN2gtMTQuNnYtMTkuNmwyLjgsMi41Yy0zLjUsNi42LTgsMTEuNC0xMy41LDE0LjYmI3hkOyYjeGE7JiN4OTsmI3g5O0M2MDMuNCwyMzMu'+
			'MSw1OTYuNywyMzQuNyw1ODguNywyMzQuN3ogTTU5MS42LDIyMS4yYzQuNywwLDguNy0wLjgsMTIuMS0yLjVjMy40LTEuNyw2LjEtMy44LDguMi02LjRjMi4xLTIuNiwzLjQtNS4zLDQtOC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC45LTIuNSwxLjQtNS40LDEuNS04LjZjMC4xLTMuMiwwLjItNS43LDAuMi03LjZsNS40LDJjLTUuMiwwLjgtMTAsMS41LTE0LjIsMi4xYy00LjMsMC42LTguMSwxLjMtMTEuNiwxLjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMy41LDAuNi02LjUsMS4zLTkuMiwyLjJjLTIuMywwLjgtNC4zLDEuNy02LjEsMi44Yy0xLjgsMS4xLTMuMiwyLjUtNC4yLDRjLTEsMS42LTEuNS'+
			'wzLjUtMS41LDUuOGMwLDIuMiwwLjYsNC4zLDEuNyw2LjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjEsMS45LDIuOCwzLjQsNS4xLDQuNUM1ODUuMiwyMjAuNiw1ODguMSwyMjEuMiw1OTEuNiwyMjEuMnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNjQ4LjcsMjMyLjR2LTE0YzMuMiwwLjYsNS42LDAuNSw3LjItMC4zYzEuNy0wLjgsMi45LTIuMiwzLjctNC4yczEuNS00LjcsMi4xLThjMC45LTQuOCwxLjctMTAuMywyLjMtMTYuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNy02LjIsMS4zLTEyLjgsMS44LTIwYzAuNS03LjIsMS0xNC43LDEuNC0yMi42aDYxLjR2ODUuNWgtMTYuNnYtNjkuOWgt'+
			'MjkuOWMtMC4zLDQuMi0wLjcsOC42LTEuMSwxMy4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCw0LjctMC44LDkuMy0xLjMsMTMuOWMtMC41LDQuNi0xLDguOS0xLjUsMTIuOWMtMC41LDQtMS4xLDcuNS0xLjcsMTAuM2MtMS4xLDUuNy0yLjYsMTAuMi00LjYsMTMuNmMtMiwzLjQtNC45LDUuNS04LjYsNi41JiN4ZDsmI3hhOyYjeDk7JiN4OTtDNjU5LjgsMjMzLjgsNjU0LjksMjMzLjcsNjQ4LjcsMjMyLjR6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTc1Mi44LDIzMi40di04NS41aDE2LjZ2MjkuN2gxNi45YzIuNCwwLDUsMC4xLDcuOCwwLjJjMi44LDAuMSw1LjIsMC40LDcuMiwwLjhjNC'+
			'42LDEsOC42LDIuNSwxMS45LDQuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7czYsNS4yLDcuOCw4LjhjMS44LDMuNywyLjgsOC4yLDIuOCwxMy41YzAsNy40LTEuOSwxMy40LTUuOCwxNy44cy05LjEsNy40LTE1LjcsOC45Yy0yLjEsMC41LTQuNiwwLjgtNy41LDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0yLjksMC4xLTUuNSwwLjItNy45LDAuMkg3NTIuOHogTTc2OS40LDIxOS4xaDE4LjRjMS4zLDAsMi44LTAuMSw0LjUtMC4yYzEuNy0wLjEsMy4yLTAuMyw0LjctMC43YzIuNS0wLjcsNC44LTIuMyw2LjgtNC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi0yLjMsMy01LjMsMy05LjFjMC0zLjktMS03LTMt'+
			'OS4zYy0yLTIuMy00LjUtMy44LTcuNS00LjVjLTEuNC0wLjQtMi45LTAuNi00LjQtMC43Yy0xLjUtMC4xLTIuOS0wLjItNC4yLTAuMmgtMTguNFYyMTkuMXoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNODQwLjYsMjMyLjR2LTg1LjVoMTYuNXYzNC45aDQxLjd2LTM0LjloMTYuNXY4NS41aC0xNi41di0zNWgtNDEuN3YzNUg4NDAuNnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNOTM0LjcsMjMyLjRsMjEuNi0zMy44aDE3LjVsLTIxLjUsMzMuOEg5MzQuN3ogTTk5MS41LDIzMi40di0yOS43aC0xNi45Yy0yLDAtNC40LTAuMS03LjItMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTIuOC0wLj'+
			'ItNS40LTAuNS03LjgtMC45Yy02LjQtMS4yLTExLjctMy45LTE2LTguNGMtNC4zLTQuNC02LjQtMTAuNS02LjQtMTguM2MwLTcuNSwyLTEzLjUsNi4xLTE4LjFjNC00LjYsOS4yLTcuNSwxNS40LTguOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzIuNy0wLjYsNS40LTEsOC4zLTEuMWMyLjgtMC4xLDUuMi0wLjEsNy4yLTAuMWgzNGwwLjEsODUuNUg5OTEuNXogTTk3My4xLDE4OS40aDE4LjR2LTI5LjJoLTE4LjRjLTEuMiwwLTIuNiwwLjEtNC4zLDAuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0xLjcsMC4xLTMuMywwLjQtNC45LDAuOWMtMS42LDAuNS0zLjIsMS4zLTQuNywyLjVjLTEuNSwxLjItMi43LDIu'+
			'OC0zLjcsNC42Yy0wLjksMS45LTEuNCw0LTEuNCw2LjVjMCwzLjYsMSw2LjYsMy4xLDkmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjEsMi4zLDQuNSwzLjksNy40LDQuNmMxLjUsMC40LDMuMSwwLjcsNC42LDAuOFM5NzIsMTg5LjQsOTczLjEsMTg5LjR6IiBjbGFzcz0ic3QxIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me.__114__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u0421\u043f\u0430\u043b\u044c\u043d\u044f_1";
		el.ggDx=0;
		el.ggDy=45;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 29px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__114.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__114.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_25'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__114.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__114.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__114.style[domTransition]='opacity 0s';
				if (me.__114.ggCurrentLogicStateAlpha == 0) {
					me.__114.style.visibility=me.__114.ggVisible?'inherit':'hidden';
					me.__114.style.opacity=1;
				}
				else {
					me.__114.style.visibility="hidden";
					me.__114.style.opacity=0;
				}
			}
		}
		me.__114.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__25.appendChild(me.__114);
		el=me._svg_111=document.createElement('div');
		els=me._svg_111__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDIwIDE5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAxOTsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMD'+
			'AwL3N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2Rpc3BsYXk6bm9uZTt9JiN4ZDsKCS5zdDF7ZGlzcGxheTppbmxpbmU7ZmlsbDojMTkzNTVCO30mI3hkOwoJLnN0MntkaXNwbGF5OmlubGluZTtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7fSYjeGQ7Cgkuc3Qze2Rpc3BsYXk6aW5saW5lO30mI3hkOwoJLnN0NHtjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDEzMTM1ODc4NzgwMjQ5NDMxMzgwMDAwMDAxMzUxMzc2ODg2MzI1NjEyODM5NF8pO30mI3hkOwoJLnN0NXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cgkuc3Q2e2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjt9JiN4'+
			'ZDsKCS5zdDd7ZGlzcGxheTpub25lO2ZpbGw6IzFEMjMyOTt9JiN4ZDsKCS5zdDh7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAxNzI0MTQxMDQxOTA5ODg5OTk5NjAwMDAwMDY3MTY3NjIwMTQyNTgxNDQ2NjZfKTt9JiN4ZDsKCS5zdDl7ZmlsbDojMUQyMzI5O30mI3hkOwoJLnN0MTB7ZGlzcGxheTppbmxpbmU7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAwNzM3MTY4MDc4MTc3NzMxMDA0NTAwMDAwMTAzOTEyNjIxNTYyMTU0NjU4NzFfKTt9JiN4ZDsKCS5zdDExe2ZpbGw6IzMzMzMzMzt9JiN4ZDsKPC9zdHlsZT4KIDxnIGNsYXNzPSJzdDAiPgogIDxwYXRoIGQ9Ik0wLDUuMzZjMC0xLjI2LD'+
			'AtMS45LDAuMTQtMi40MmMwLjM3LTEuMzYsMS40NC0yLjQzLDIuOC0yLjhDMy40NiwwLDQuMSwwLDUuMzYsMGg5LjI4YzEuMjYsMCwxLjksMCwyLjQyLDAuMTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjM2LDAuMzcsMi40MywxLjQ0LDIuOCwyLjhDMjAsMy40NiwyMCw0LjEsMjAsNS4zNnY4LjI4YzAsMS4yNiwwLDEuOS0wLjE0LDIuNDJjLTAuMzcsMS4zNi0xLjQ0LDIuNDMtMi44LDIuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzE2LjU0LDE5LDE1LjksMTksMTQuNjQsMTlINS4zNmMtMS4yNiwwLTEuOSwwLTIuNDItMC4xNGMtMS4zNi0wLjM3LTIuNDMtMS40NC0yLjgtMi44QzAsMTUuNTQsMCwxNC45'+
			'LDAsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNMC41LDUuMzZjMC0xLjMsMC0xLjg1LDAuMTItMi4yOGMwLjMzLTEuMTksMS4yNi0yLjEzLDIuNDUtMi40NUMzLjUxLDAuNSw0LjA2LDAuNSw1LjM2LDAuNWg5LjI4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4zLDAsMS44NSwwLDIuMjgsMC4xMmMxLjE5LDAuMzMsMi4xMywxLjI2LDIuNDUsMi40NWMwLjEyLDAuNDQsMC4xMiwwLjk5LDAuMTIsMi4yOHY4LjI4YzAsMS4zLDAsMS44NS0wLjEyLDIuMjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zMywxLjE5LTEuMjYsMi4xMy0yLjQ1LDIuNDVjLTAuNDQsMC4xMi0wLjk5LDAuMT'+
			'ItMi4yOCwwLjEySDUuMzZjLTEuMywwLTEuODUsMC0yLjI4LTAuMTJjLTEuMTktMC4zMy0yLjEzLTEuMjYtMi40NS0yLjQ1JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMC41LDE1LjQ5LDAuNSwxNC45NCwwLjUsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDIiLz4KICA8ZyBjbGFzcz0ic3QzIj4KICAgPGRlZnM+CiAgICA8cmVjdCB4PSI0LjUiIHk9IjMuNSIgaGVpZ2h0PSIxMSIgaWQ9IlNWR0lEXzFfIiB3aWR0aD0iMTEiLz4KICAgPC9kZWZzPgogICA8Y2xpcFBhdGggaWQ9IlNWR0lEXzAwMDAwMTQxNDE0NzQwNjUzMjAzNzgzMDAwMDAwMDA3MDAyNDYzMTQ3MjM2OTk3MDE0XyI+CiAgICA8dXNlIHhsaW5r'+
			'OmhyZWY9IiNTVkdJRF8xXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CiAgIDwvY2xpcFBhdGg+CiAgIDxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDE0MTQxNDc0MDY1MzIwMzc4MzAwMDAwMDAwNzAwMjQ2MzE0NzIzNjk5NzAxNF8pOyI+CiAgICA8cGF0aCBkPSJNMTQuMTIsOS41OWgtMy41NHYzLjU0SDkuNDFWOS41OUg1Ljg4VjguNDFoMy41NFY0Ljg4aDEuMTh2My41NGgzLjU0VjkuNTl6IiBjbGFzcz0ic3Q1Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8ZyBjbGFzcz0ic3QwIj4KICA8cGF0aCBkPSJNNDAuOTksMTguMTVIMjkuNDVjLTEuNTksMC0yLjg4LTEuMj'+
			'ktMi44OC0yLjg4VjMuNzNjMC0xLjU5LDEuMjktMi44OCwyLjg4LTIuODhoMTEuNTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjU5LDAsMi44OCwxLjI5LDIuODgsMi44OHYxMS41NEM0My44NywxNi44Niw0Mi41OCwxOC4xNSw0MC45OSwxOC4xNXoiIGNsYXNzPSJzdDYiLz4KIDwvZz4KIDxwYXRoIGQ9Ik0zNi43OCwxMS4zMWwtMS45My0xLjkzbDEuOTMtMS45M2wtMC41OS0wLjU5bC0yLjUyLDIuNTJsMi41MiwyLjUyTDM2Ljc4LDExLjMxeiIgY2xhc3M9InN0NyIvPgogPGcgY2xhc3M9InN0MCI+CiAgPHBhdGggZD0iTTMuNzEsMC4wN2gxMi41OGMxLjc0LDAsMy4xNCwxLjQxLDMuMTQsMy4xNHYx'+
			'Mi41OGMwLDEuNzQtMS40MSwzLjE0LTMuMTQsMy4xNEgzLjcxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTEuNzQsMC0zLjE0LTEuNDEtMy4xNC0zLjE0VjMuMjFDMC41NywxLjQ3LDEuOTcsMC4wNywzLjcxLDAuMDd6IiBjbGFzcz0ic3Q2Ii8+CiAgPGcgY2xhc3M9InN0MyI+CiAgIDxkZWZzPgogICAgPHJlY3QgeD0iNi44NiIgeT0iNi4zNiIgaGVpZ2h0PSI2LjI5IiBpZD0iU1ZHSURfMDAwMDAwNTI4MjA4MzMxMDAwNDczNTU2NjAwMDAwMTYxNzA1NDMxNzg4ODkyODYwMzBfIiB3aWR0aD0iNi4yOSIvPgogICA8L2RlZnM+CiAgIDxjbGlwUGF0aCBpZD0iU1ZHSURfMDAwMDAwOTM4NjY3MzcyOTc2OT'+
			'k0MzYwMzAwMDAwMDczMTQxMTg3OTU3MDM2NTM1NDFfIj4KICAgIDx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzAwMDAwMDUyODIwODMzMTAwMDQ3MzU1NjYwMDAwMDE2MTcwNTQzMTc4ODg5Mjg2MDMwXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CiAgIDwvY2xpcFBhdGg+CiAgIDxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDA5Mzg2NjczNzI5NzY5OTQzNjAzMDAwMDAwNzMxNDExODc5NTcwMzY1MzU0MV8pOyI+CiAgICA8cGF0aCBkPSJNMTIuMzYsOS45MUg3LjY0VjkuMjRoNC43MlY5LjkxeiIgY2xhc3M9InN0OSIvPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcgY2xh'+
			'c3M9InN0MCI+CiAgPGRlZnM+CiAgIDxyZWN0IHg9IjYuODYiIHk9IjYuMzYiIGhlaWdodD0iNi4yOSIgaWQ9IlNWR0lEXzAwMDAwMDI4MzA2NTc5NDUwMDY1MjA0NDEwMDAwMDEzNDg2NDQ1NzEzMDcyNTAxOTE5XyIgd2lkdGg9IjYuMjkiLz4KICA8L2RlZnM+CiAgPGNsaXBQYXRoIGNsYXNzPSJzdDMiIGlkPSJTVkdJRF8wMDAwMDEwNzU4MTE1MzcxNjM3NDE0MjQ0MDAwMDAxMTg0NDI1MTE4NTIwMzgyNTU0Ml8iPgogICA8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8wMDAwMDAyODMwNjU3OTQ1MDA2NTIwNDQxMDAwMDAxMzQ4NjQ0NTcxMzA3MjUwMTkxOV8iIHN0eWxlPSJvdmVyZmxvdzp2aXNpYm'+
			'xlOyIvPgogIDwvY2xpcFBhdGg+CiAgPGcgc3R5bGU9ImRpc3BsYXk6aW5saW5lO2NsaXAtcGF0aDp1cmwoI1NWR0lEXzAwMDAwMTA3NTgxMTUzNzE2Mzc0MTQyNDQwMDAwMDExODQ0MjUxMTg1MjAzODI1NTQyXyk7Ij4KICAgPHBhdGggZD0iTTEwLjQxLDcuMTR2NC43Mkg5Ljc0VjcuMTRIMTAuNDF6IiBjbGFzcz0ic3Q5Ii8+CiAgPC9nPgogPC9nPgogPGc+CiAgPHBhdGggZD0iTTAuNTMsMTUuODRWMy4yMWMwLTEuNzQsMS40MS0zLjE2LDMuMTYtMy4xNmgxMi42M2MxLjc0LDAsMy4xNiwxLjQxLDMuMTYsMy4xNnYxMi42MyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMS43NC0xLjQxLDMuMTYtMy4x'+
			'NiwzLjE2SDMuNjhDMS45NCwxOSwwLjUzLDE3LjU5LDAuNTMsMTUuODR6IiBjbGFzcz0ic3QxMSIvPgogPC9nPgogPHBhdGggZD0iTTguMDEsMTEuMjNsMi4xMS0yLjExbDIuMTEsMi4xMWwwLjY1LTAuNjVsLTIuNzYtMi43NmwtMi43NiwyLjc2TDguMDEsMTEuMjN6IiBjbGFzcz0ic3Q1Ii8+Cjwvc3ZnPgo=';
		me._svg_111__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 47px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_111.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__25.appendChild(me._svg_111);
		me.__div = me.__25;
	};
	function SkinHotspotClass__24(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__24=document.createElement('div');
		el.ggId="\u0421\u043f\u0430\u043b\u044c\u043d\u044f_\u0425\u043e\u0442\u0441\u043f\u043e\u0442_\u043a\u043e\u0440\u0438\u0434\u043e\u0440";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__24.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__24.onclick=function (e) {
			player.openNext("{node10}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me.__24.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me.__24.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_24']=true;
			me._text_18.logicBlock_alpha();
			me.__113.logicBlock_alpha();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me.__24.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_24']=false;
			me._text_18.logicBlock_alpha();
			me.__113.logicBlock_alpha();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me.__24.ontouchend=function (e) {
			me.elementMouseOver['_24']=false;
			me._text_18.logicBlock_alpha();
			me.__113.logicBlock_alpha();
		}
		me.__24.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_18=document.createElement('div');
		els=me._text_18__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='background: #333333;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_18.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_18.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_18.ggUpdateText();
		});
		el.appendChild(els);
		me._text_18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_18.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_24'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._text_18.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._text_18.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._text_18.style[domTransition]='opacity 0s';
				if (me._text_18.ggCurrentLogicStateAlpha == 0) {
					me._text_18.style.visibility=me._text_18.ggVisible?'inherit':'hidden';
					me._text_18.style.opacity=1;
				}
				else {
					me._text_18.style.visibility="hidden";
					me._text_18.style.opacity=0;
				}
			}
		}
		me._text_18.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__24.appendChild(me._text_18);
		el=me.__113=document.createElement('div');
		els=me.__113__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEzNTIuNiAzNTAuNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTM1Mi42IDM1MC43OyIgeG1sbnM9Imh0dHA6Ly'+
			'93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMzMzMzMzO30mI3hkOwoJLnN0MXtmaWxsOiNFMEUwRTA7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBkPSJNODAuMiwwaDExOTIuM2M0NC4zLDAsODAuMiwzNS45LDgwLjIsODAuMnYxOTAuNGMwLDQ0LjMtMzUuOSw4MC4yLTgwLjIsODAuMkg4MC4yQzM1LjksMzUwLjcsMCwzMTQuOCwwLDI3MC41JiN4ZDsmI3hhOyYjeDk7VjgwLjJDMCwzNS45LDM1LjksMCw4MC4yLDB6IiBjbGFzcz0ic3QwIi8+CiA8Zz4KICA8cGF0aCBkPSJNMzk4LjQsMjM0LjdjLTExLjQsMC0yMS4xLTIuNS0yOS4x'+
			'LTcuNWMtOC01LTE0LjItMTEuOS0xOC40LTIwLjljLTQuMi04LjktNi40LTE5LjMtNi40LTMxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xMS44LDIuMS0yMi4xLDYuNC0zMXMxMC40LTE1LjksMTguNC0yMC45YzgtNSwxNy43LTcuNSwyOS4xLTcuNWMxMy4xLDAsMjQsMy4zLDMyLjcsMTBjOC42LDYuNiwxNC42LDE1LjYsMTgsMjYuOGwtMTYuOCw0LjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMi4yLTgtNi4yLTE0LjItMTEuOC0xOC44Yy01LjctNC41LTEzLTYuOC0yMi4xLTYuOGMtOC4xLDAtMTQuOCwxLjgtMjAuMiw1LjVjLTUuNCwzLjYtOS40LDguNy0xMi4yLDE1LjMmI3hkOyYjeGE7JiN4OTsmI3'+
			'g5O2MtMi43LDYuNS00LjEsMTQuMi00LjEsMjIuOWMtMC4xLDguNywxLjMsMTYuMyw0LDIyLjlzNi44LDExLjYsMTIuMiwxNS4zYzUuNCwzLjYsMTIuMiw1LjQsMjAuMiw1LjRjOSwwLDE2LjQtMi4zLDIyLjEtNi44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjNS43LTQuNiw5LjYtMTAuOCwxMS44LTE4LjdsMTYuOCw0LjVjLTMuNCwxMS4zLTkuNCwyMC4yLTE4LDI2LjhDNDIyLjUsMjMxLjQsNDExLjYsMjM0LjcsMzk4LjQsMjM0Ljd6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTQ2OC40LDIzMi40di04NS41aDcyLjF2ODUuNWgtMTYuNnYtNjkuOWgtMzl2NjkuOUg0NjguNHoiIGNsYXNzPSJzdDEi'+
			'Lz4KICA8cGF0aCBkPSJNNTg4LjcsMjM0LjdjLTYuMywwLTExLjYtMS4yLTE1LjktMy41Yy00LjMtMi4zLTcuNS01LjUtOS43LTkuM2MtMi4yLTMuOS0zLjMtOC4xLTMuMy0xMi44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC00LjMsMC44LTguMSwyLjMtMTEuNGMxLjUtMy4zLDMuOC02LjEsNi44LTguNGMzLTIuMyw2LjctNC4yLDExLjEtNS42YzMuOC0xLjEsOC4xLTIuMSwxMi45LTIuOWM0LjgtMC44LDkuOS0xLjYsMTUuMi0yLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2M1LjMtMC43LDEwLjYtMS41LDE1LjgtMi4ybC02LDMuM2MwLjEtNi43LTEuMy0xMS43LTQuMi0xNC45Yy0yLjktMy4zLTgtNC45LT'+
			'E1LjEtNC45Yy00LjUsMC04LjYsMS0xMi4zLDMuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0zLjcsMi4xLTYuNCw1LjUtNy44LDEwLjNsLTE1LjQtNC43YzIuMS03LjMsNi4xLTEzLjIsMTIuMS0xNy41YzUuOS00LjMsMTMuOC02LjUsMjMuNy02LjVjNy43LDAsMTQuMywxLjMsMjAsMy45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjNS43LDIuNiw5LjgsNi43LDEyLjUsMTIuNGMxLjQsMi44LDIuMiw1LjgsMi41LDguOWMwLjMsMy4xLDAuNSw2LjUsMC41LDEwLjF2NTIuN2gtMTQuNnYtMTkuNmwyLjgsMi41Yy0zLjUsNi42LTgsMTEuNC0xMy41LDE0LjYmI3hkOyYjeGE7JiN4OTsmI3g5O0M2MDMuNCwyMzMu'+
			'MSw1OTYuNywyMzQuNyw1ODguNywyMzQuN3ogTTU5MS42LDIyMS4yYzQuNywwLDguNy0wLjgsMTIuMS0yLjVjMy40LTEuNyw2LjEtMy44LDguMi02LjRjMi4xLTIuNiwzLjQtNS4zLDQtOC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC45LTIuNSwxLjQtNS40LDEuNS04LjZjMC4xLTMuMiwwLjItNS43LDAuMi03LjZsNS40LDJjLTUuMiwwLjgtMTAsMS41LTE0LjIsMi4xYy00LjMsMC42LTguMSwxLjMtMTEuNiwxLjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMy41LDAuNi02LjUsMS4zLTkuMiwyLjJjLTIuMywwLjgtNC4zLDEuNy02LjEsMi44Yy0xLjgsMS4xLTMuMiwyLjUtNC4yLDRjLTEsMS42LTEuNS'+
			'wzLjUtMS41LDUuOGMwLDIuMiwwLjYsNC4zLDEuNyw2LjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjEsMS45LDIuOCwzLjQsNS4xLDQuNUM1ODUuMiwyMjAuNiw1ODguMSwyMjEuMiw1OTEuNiwyMjEuMnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNjQ4LjcsMjMyLjR2LTE0YzMuMiwwLjYsNS42LDAuNSw3LjItMC4zYzEuNy0wLjgsMi45LTIuMiwzLjctNC4yczEuNS00LjcsMi4xLThjMC45LTQuOCwxLjctMTAuMywyLjMtMTYuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNy02LjIsMS4zLTEyLjgsMS44LTIwYzAuNS03LjIsMS0xNC43LDEuNC0yMi42aDYxLjR2ODUuNWgtMTYuNnYtNjkuOWgt'+
			'MjkuOWMtMC4zLDQuMi0wLjcsOC42LTEuMSwxMy4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCw0LjctMC44LDkuMy0xLjMsMTMuOWMtMC41LDQuNi0xLDguOS0xLjUsMTIuOWMtMC41LDQtMS4xLDcuNS0xLjcsMTAuM2MtMS4xLDUuNy0yLjYsMTAuMi00LjYsMTMuNmMtMiwzLjQtNC45LDUuNS04LjYsNi41JiN4ZDsmI3hhOyYjeDk7JiN4OTtDNjU5LjgsMjMzLjgsNjU0LjksMjMzLjcsNjQ4LjcsMjMyLjR6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTc1Mi44LDIzMi40di04NS41aDE2LjZ2MjkuN2gxNi45YzIuNCwwLDUsMC4xLDcuOCwwLjJjMi44LDAuMSw1LjIsMC40LDcuMiwwLjhjNC'+
			'42LDEsOC42LDIuNSwxMS45LDQuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7czYsNS4yLDcuOCw4LjhjMS44LDMuNywyLjgsOC4yLDIuOCwxMy41YzAsNy40LTEuOSwxMy40LTUuOCwxNy44cy05LjEsNy40LTE1LjcsOC45Yy0yLjEsMC41LTQuNiwwLjgtNy41LDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0yLjksMC4xLTUuNSwwLjItNy45LDAuMkg3NTIuOHogTTc2OS40LDIxOS4xaDE4LjRjMS4zLDAsMi44LTAuMSw0LjUtMC4yYzEuNy0wLjEsMy4yLTAuMyw0LjctMC43YzIuNS0wLjcsNC44LTIuMyw2LjgtNC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi0yLjMsMy01LjMsMy05LjFjMC0zLjktMS03LTMt'+
			'OS4zYy0yLTIuMy00LjUtMy44LTcuNS00LjVjLTEuNC0wLjQtMi45LTAuNi00LjQtMC43Yy0xLjUtMC4xLTIuOS0wLjItNC4yLTAuMmgtMTguNFYyMTkuMXoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNODQwLjYsMjMyLjR2LTg1LjVoMTYuNXYzNC45aDQxLjd2LTM0LjloMTYuNXY4NS41aC0xNi41di0zNWgtNDEuN3YzNUg4NDAuNnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNOTM0LjcsMjMyLjRsMjEuNi0zMy44aDE3LjVsLTIxLjUsMzMuOEg5MzQuN3ogTTk5MS41LDIzMi40di0yOS43aC0xNi45Yy0yLDAtNC40LTAuMS03LjItMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTIuOC0wLj'+
			'ItNS40LTAuNS03LjgtMC45Yy02LjQtMS4yLTExLjctMy45LTE2LTguNGMtNC4zLTQuNC02LjQtMTAuNS02LjQtMTguM2MwLTcuNSwyLTEzLjUsNi4xLTE4LjFjNC00LjYsOS4yLTcuNSwxNS40LTguOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzIuNy0wLjYsNS40LTEsOC4zLTEuMWMyLjgtMC4xLDUuMi0wLjEsNy4yLTAuMWgzNGwwLjEsODUuNUg5OTEuNXogTTk3My4xLDE4OS40aDE4LjR2LTI5LjJoLTE4LjRjLTEuMiwwLTIuNiwwLjEtNC4zLDAuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0xLjcsMC4xLTMuMywwLjQtNC45LDAuOWMtMS42LDAuNS0zLjIsMS4zLTQuNywyLjVjLTEuNSwxLjItMi43LDIu'+
			'OC0zLjcsNC42Yy0wLjksMS45LTEuNCw0LTEuNCw2LjVjMCwzLjYsMSw2LjYsMy4xLDkmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjEsMi4zLDQuNSwzLjksNy40LDQuNmMxLjUsMC40LDMuMSwwLjcsNC42LDAuOFM5NzIsMTg5LjQsOTczLjEsMTg5LjR6IiBjbGFzcz0ic3QxIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me.__113__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u0421\u043f\u0430\u043b\u044c\u043d\u044f_1";
		el.ggDx=0;
		el.ggDy=45;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 29px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__113.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__113.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_24'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__113.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__113.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__113.style[domTransition]='opacity 0s';
				if (me.__113.ggCurrentLogicStateAlpha == 0) {
					me.__113.style.visibility=me.__113.ggVisible?'inherit':'hidden';
					me.__113.style.opacity=1;
				}
				else {
					me.__113.style.visibility="hidden";
					me.__113.style.opacity=0;
				}
			}
		}
		me.__113.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__24.appendChild(me.__113);
		el=me._svg_110=document.createElement('div');
		els=me._svg_110__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDIwIDE5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAxOTsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMD'+
			'AwL3N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2Rpc3BsYXk6bm9uZTt9JiN4ZDsKCS5zdDF7ZGlzcGxheTppbmxpbmU7ZmlsbDojMTkzNTVCO30mI3hkOwoJLnN0MntkaXNwbGF5OmlubGluZTtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7fSYjeGQ7Cgkuc3Qze2Rpc3BsYXk6aW5saW5lO30mI3hkOwoJLnN0NHtjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDEzMTM1ODc4NzgwMjQ5NDMxMzgwMDAwMDAxMzUxMzc2ODg2MzI1NjEyODM5NF8pO30mI3hkOwoJLnN0NXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cgkuc3Q2e2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjt9JiN4'+
			'ZDsKCS5zdDd7ZGlzcGxheTpub25lO2ZpbGw6IzFEMjMyOTt9JiN4ZDsKCS5zdDh7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAxNzI0MTQxMDQxOTA5ODg5OTk5NjAwMDAwMDY3MTY3NjIwMTQyNTgxNDQ2NjZfKTt9JiN4ZDsKCS5zdDl7ZmlsbDojMUQyMzI5O30mI3hkOwoJLnN0MTB7ZGlzcGxheTppbmxpbmU7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAwNzM3MTY4MDc4MTc3NzMxMDA0NTAwMDAwMTAzOTEyNjIxNTYyMTU0NjU4NzFfKTt9JiN4ZDsKCS5zdDExe2ZpbGw6IzMzMzMzMzt9JiN4ZDsKPC9zdHlsZT4KIDxnIGNsYXNzPSJzdDAiPgogIDxwYXRoIGQ9Ik0wLDUuMzZjMC0xLjI2LD'+
			'AtMS45LDAuMTQtMi40MmMwLjM3LTEuMzYsMS40NC0yLjQzLDIuOC0yLjhDMy40NiwwLDQuMSwwLDUuMzYsMGg5LjI4YzEuMjYsMCwxLjksMCwyLjQyLDAuMTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjM2LDAuMzcsMi40MywxLjQ0LDIuOCwyLjhDMjAsMy40NiwyMCw0LjEsMjAsNS4zNnY4LjI4YzAsMS4yNiwwLDEuOS0wLjE0LDIuNDJjLTAuMzcsMS4zNi0xLjQ0LDIuNDMtMi44LDIuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzE2LjU0LDE5LDE1LjksMTksMTQuNjQsMTlINS4zNmMtMS4yNiwwLTEuOSwwLTIuNDItMC4xNGMtMS4zNi0wLjM3LTIuNDMtMS40NC0yLjgtMi44QzAsMTUuNTQsMCwxNC45'+
			'LDAsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNMC41LDUuMzZjMC0xLjMsMC0xLjg1LDAuMTItMi4yOGMwLjMzLTEuMTksMS4yNi0yLjEzLDIuNDUtMi40NUMzLjUxLDAuNSw0LjA2LDAuNSw1LjM2LDAuNWg5LjI4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4zLDAsMS44NSwwLDIuMjgsMC4xMmMxLjE5LDAuMzMsMi4xMywxLjI2LDIuNDUsMi40NWMwLjEyLDAuNDQsMC4xMiwwLjk5LDAuMTIsMi4yOHY4LjI4YzAsMS4zLDAsMS44NS0wLjEyLDIuMjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zMywxLjE5LTEuMjYsMi4xMy0yLjQ1LDIuNDVjLTAuNDQsMC4xMi0wLjk5LDAuMT'+
			'ItMi4yOCwwLjEySDUuMzZjLTEuMywwLTEuODUsMC0yLjI4LTAuMTJjLTEuMTktMC4zMy0yLjEzLTEuMjYtMi40NS0yLjQ1JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMC41LDE1LjQ5LDAuNSwxNC45NCwwLjUsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDIiLz4KICA8ZyBjbGFzcz0ic3QzIj4KICAgPGRlZnM+CiAgICA8cmVjdCB4PSI0LjUiIHk9IjMuNSIgaGVpZ2h0PSIxMSIgaWQ9IlNWR0lEXzFfIiB3aWR0aD0iMTEiLz4KICAgPC9kZWZzPgogICA8Y2xpcFBhdGggaWQ9IlNWR0lEXzAwMDAwMTQxNDE0NzQwNjUzMjAzNzgzMDAwMDAwMDA3MDAyNDYzMTQ3MjM2OTk3MDE0XyI+CiAgICA8dXNlIHhsaW5r'+
			'OmhyZWY9IiNTVkdJRF8xXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CiAgIDwvY2xpcFBhdGg+CiAgIDxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDE0MTQxNDc0MDY1MzIwMzc4MzAwMDAwMDAwNzAwMjQ2MzE0NzIzNjk5NzAxNF8pOyI+CiAgICA8cGF0aCBkPSJNMTQuMTIsOS41OWgtMy41NHYzLjU0SDkuNDFWOS41OUg1Ljg4VjguNDFoMy41NFY0Ljg4aDEuMTh2My41NGgzLjU0VjkuNTl6IiBjbGFzcz0ic3Q1Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8ZyBjbGFzcz0ic3QwIj4KICA8cGF0aCBkPSJNNDAuOTksMTguMTVIMjkuNDVjLTEuNTksMC0yLjg4LTEuMj'+
			'ktMi44OC0yLjg4VjMuNzNjMC0xLjU5LDEuMjktMi44OCwyLjg4LTIuODhoMTEuNTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjU5LDAsMi44OCwxLjI5LDIuODgsMi44OHYxMS41NEM0My44NywxNi44Niw0Mi41OCwxOC4xNSw0MC45OSwxOC4xNXoiIGNsYXNzPSJzdDYiLz4KIDwvZz4KIDxwYXRoIGQ9Ik0zNi43OCwxMS4zMWwtMS45My0xLjkzbDEuOTMtMS45M2wtMC41OS0wLjU5bC0yLjUyLDIuNTJsMi41MiwyLjUyTDM2Ljc4LDExLjMxeiIgY2xhc3M9InN0NyIvPgogPGcgY2xhc3M9InN0MCI+CiAgPHBhdGggZD0iTTMuNzEsMC4wN2gxMi41OGMxLjc0LDAsMy4xNCwxLjQxLDMuMTQsMy4xNHYx'+
			'Mi41OGMwLDEuNzQtMS40MSwzLjE0LTMuMTQsMy4xNEgzLjcxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTEuNzQsMC0zLjE0LTEuNDEtMy4xNC0zLjE0VjMuMjFDMC41NywxLjQ3LDEuOTcsMC4wNywzLjcxLDAuMDd6IiBjbGFzcz0ic3Q2Ii8+CiAgPGcgY2xhc3M9InN0MyI+CiAgIDxkZWZzPgogICAgPHJlY3QgeD0iNi44NiIgeT0iNi4zNiIgaGVpZ2h0PSI2LjI5IiBpZD0iU1ZHSURfMDAwMDAwNTI4MjA4MzMxMDAwNDczNTU2NjAwMDAwMTYxNzA1NDMxNzg4ODkyODYwMzBfIiB3aWR0aD0iNi4yOSIvPgogICA8L2RlZnM+CiAgIDxjbGlwUGF0aCBpZD0iU1ZHSURfMDAwMDAwOTM4NjY3MzcyOTc2OT'+
			'k0MzYwMzAwMDAwMDczMTQxMTg3OTU3MDM2NTM1NDFfIj4KICAgIDx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzAwMDAwMDUyODIwODMzMTAwMDQ3MzU1NjYwMDAwMDE2MTcwNTQzMTc4ODg5Mjg2MDMwXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CiAgIDwvY2xpcFBhdGg+CiAgIDxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDA5Mzg2NjczNzI5NzY5OTQzNjAzMDAwMDAwNzMxNDExODc5NTcwMzY1MzU0MV8pOyI+CiAgICA8cGF0aCBkPSJNMTIuMzYsOS45MUg3LjY0VjkuMjRoNC43MlY5LjkxeiIgY2xhc3M9InN0OSIvPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcgY2xh'+
			'c3M9InN0MCI+CiAgPGRlZnM+CiAgIDxyZWN0IHg9IjYuODYiIHk9IjYuMzYiIGhlaWdodD0iNi4yOSIgaWQ9IlNWR0lEXzAwMDAwMDI4MzA2NTc5NDUwMDY1MjA0NDEwMDAwMDEzNDg2NDQ1NzEzMDcyNTAxOTE5XyIgd2lkdGg9IjYuMjkiLz4KICA8L2RlZnM+CiAgPGNsaXBQYXRoIGNsYXNzPSJzdDMiIGlkPSJTVkdJRF8wMDAwMDEwNzU4MTE1MzcxNjM3NDE0MjQ0MDAwMDAxMTg0NDI1MTE4NTIwMzgyNTU0Ml8iPgogICA8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8wMDAwMDAyODMwNjU3OTQ1MDA2NTIwNDQxMDAwMDAxMzQ4NjQ0NTcxMzA3MjUwMTkxOV8iIHN0eWxlPSJvdmVyZmxvdzp2aXNpYm'+
			'xlOyIvPgogIDwvY2xpcFBhdGg+CiAgPGcgc3R5bGU9ImRpc3BsYXk6aW5saW5lO2NsaXAtcGF0aDp1cmwoI1NWR0lEXzAwMDAwMTA3NTgxMTUzNzE2Mzc0MTQyNDQwMDAwMDExODQ0MjUxMTg1MjAzODI1NTQyXyk7Ij4KICAgPHBhdGggZD0iTTEwLjQxLDcuMTR2NC43Mkg5Ljc0VjcuMTRIMTAuNDF6IiBjbGFzcz0ic3Q5Ii8+CiAgPC9nPgogPC9nPgogPGc+CiAgPHBhdGggZD0iTTAuNTMsMTUuODRWMy4yMWMwLTEuNzQsMS40MS0zLjE2LDMuMTYtMy4xNmgxMi42M2MxLjc0LDAsMy4xNiwxLjQxLDMuMTYsMy4xNnYxMi42MyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMS43NC0xLjQxLDMuMTYtMy4x'+
			'NiwzLjE2SDMuNjhDMS45NCwxOSwwLjUzLDE3LjU5LDAuNTMsMTUuODR6IiBjbGFzcz0ic3QxMSIvPgogPC9nPgogPHBhdGggZD0iTTguMDEsMTEuMjNsMi4xMS0yLjExbDIuMTEsMi4xMWwwLjY1LTAuNjVsLTIuNzYtMi43NmwtMi43NiwyLjc2TDguMDEsMTEuMjN6IiBjbGFzcz0ic3Q1Ii8+Cjwvc3ZnPgo=';
		me._svg_110__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 47px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_110.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__24.appendChild(me._svg_110);
		me.__div = me.__24;
	};
	function SkinHotspotClass__23(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__23=document.createElement('div');
		el.ggId="\u041a\u0443\u0445\u043d\u044f_\u0425\u043e\u0442\u0441\u043f\u043e\u0442";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__23.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__23.onclick=function (e) {
			player.openNext("{node8}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me.__23.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me.__23.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_23']=true;
			me._text_17.logicBlock_alpha();
			me.__112.logicBlock_alpha();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me.__23.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_23']=false;
			me._text_17.logicBlock_alpha();
			me.__112.logicBlock_alpha();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me.__23.ontouchend=function (e) {
			me.elementMouseOver['_23']=false;
			me._text_17.logicBlock_alpha();
			me.__112.logicBlock_alpha();
		}
		me.__23.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_17=document.createElement('div');
		els=me._text_17__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='background: #333333;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_17.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_17.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_17.ggUpdateText();
		});
		el.appendChild(els);
		me._text_17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_17.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_23'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._text_17.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._text_17.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._text_17.style[domTransition]='opacity 0s';
				if (me._text_17.ggCurrentLogicStateAlpha == 0) {
					me._text_17.style.visibility=me._text_17.ggVisible?'inherit':'hidden';
					me._text_17.style.opacity=1;
				}
				else {
					me._text_17.style.visibility="hidden";
					me._text_17.style.opacity=0;
				}
			}
		}
		me._text_17.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__23.appendChild(me._text_17);
		el=me.__112=document.createElement('div');
		els=me.__112__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEzNTIuNiAzNTAuNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTM1Mi42IDM1MC43OyIgeG1sbnM9Imh0dHA6Ly'+
			'93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMzMzMzMzO30mI3hkOwoJLnN0MXtmaWxsOiNFMEUwRTA7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBkPSJNODAuMiwwaDExOTIuM2M0NC4zLDAsODAuMiwzNS45LDgwLjIsODAuMnYxOTAuNGMwLDQ0LjMtMzUuOSw4MC4yLTgwLjIsODAuMkg4MC4yQzM1LjksMzUwLjcsMCwzMTQuOCwwLDI3MC41JiN4ZDsmI3hhOyYjeDk7VjgwLjJDMCwzNS45LDM1LjksMCw4MC4yLDB6IiBjbGFzcz0ic3QwIi8+CiA8Zz4KICA8cGF0aCBkPSJNNDU2LjksMjEzLjN2LTExNGgxNi41djUzLjJsNDcuNy01'+
			'My4yaDIwLjZMNDkxLjMsMTU1bDU0LjIsNTguNGgtMjEuMmwtNTAuOC01NC41djU0LjVINDU2Ljl6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTU2Mi45LDI1MS4zbDE2LjUtNDVsMC4yLDEzLjNsLTM3LjMtOTEuOGgxNy4zbDI3LjksNzAuOWgtNS4xbDI2LjYtNzAuOWgxNi44bC00Ny4yLDEyMy41SDU2Mi45eiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik02MzAuNiwyMTMuM2wzMi00My4ybC0zMS4zLTQyLjNoMTkuNmwyMS4zLDI5LjRsMjEuMS0yOS40aDE5LjZsLTMxLjMsNDIuM2wzMi4xLDQzLjJINjk0TDY3Mi4yLDE4MyYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0yMS45LDMwLjNINjMwLj'+
			'Z6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTcyOC4yLDIxMy4zdi04NS41aDE2LjV2MzQuOWg0MS43di0zNC45SDgwM3Y4NS41aC0xNi41di0zNWgtNDEuN3YzNUg3MjguMnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNODIyLjQsMjEzLjNsMjEuNi0zMy44aDE3LjVMODQwLDIxMy4zSDgyMi40eiBNODc5LjEsMjEzLjN2LTI5LjdoLTE2LjljLTIsMC00LjQtMC4xLTcuMi0wLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMi44LTAuMi01LjQtMC41LTcuOC0wLjljLTYuNC0xLjItMTEuNy0zLjktMTYtOC40Yy00LjMtNC40LTYuNC0xMC41LTYuNC0xOC4zYzAtNy41LDItMTMuNSw2LjEtMTgu'+
			'MWM0LTQuNiw5LjItNy41LDE1LjQtOC44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi43LTAuNiw1LjQtMSw4LjMtMS4xYzIuOC0wLjEsNS4yLTAuMSw3LjItMC4xaDM0bDAuMSw4NS41SDg3OS4xeiBNODYwLjgsMTcwLjRoMTguNHYtMjkuMmgtMTguNGMtMS4yLDAtMi42LDAuMS00LjMsMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTEuNywwLjEtMy4zLDAuNC00LjksMC45Yy0xLjYsMC41LTMuMiwxLjMtNC43LDIuNWMtMS41LDEuMi0yLjcsMi44LTMuNyw0LjZjLTAuOSwxLjktMS40LDQtMS40LDYuNWMwLDMuNiwxLDYuNiwzLjEsOSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzIuMSwyLjMsNC41LDMuOSw3Lj'+
			'QsNC42YzEuNSwwLjQsMy4xLDAuNyw0LjYsMC44Qzg1OC4zLDE3MC4zLDg1OS42LDE3MC40LDg2MC44LDE3MC40eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me.__112__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u041a\u0443\u0445\u043d\u044f_1";
		el.ggDx=0;
		el.ggDy=45;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 29px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__112.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__112.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_23'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__112.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__112.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__112.style[domTransition]='opacity 0s';
				if (me.__112.ggCurrentLogicStateAlpha == 0) {
					me.__112.style.visibility=me.__112.ggVisible?'inherit':'hidden';
					me.__112.style.opacity=1;
				}
				else {
					me.__112.style.visibility="hidden";
					me.__112.style.opacity=0;
				}
			}
		}
		me.__112.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__23.appendChild(me.__112);
		el=me._svg_19=document.createElement('div');
		els=me._svg_19__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDIwIDE5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAxOTsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMD'+
			'AwL3N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2Rpc3BsYXk6bm9uZTt9JiN4ZDsKCS5zdDF7ZGlzcGxheTppbmxpbmU7ZmlsbDojMTkzNTVCO30mI3hkOwoJLnN0MntkaXNwbGF5OmlubGluZTtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7fSYjeGQ7Cgkuc3Qze2Rpc3BsYXk6aW5saW5lO30mI3hkOwoJLnN0NHtjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDEzMTM1ODc4NzgwMjQ5NDMxMzgwMDAwMDAxMzUxMzc2ODg2MzI1NjEyODM5NF8pO30mI3hkOwoJLnN0NXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cgkuc3Q2e2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjt9JiN4'+
			'ZDsKCS5zdDd7ZGlzcGxheTpub25lO2ZpbGw6IzFEMjMyOTt9JiN4ZDsKCS5zdDh7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAxNzI0MTQxMDQxOTA5ODg5OTk5NjAwMDAwMDY3MTY3NjIwMTQyNTgxNDQ2NjZfKTt9JiN4ZDsKCS5zdDl7ZmlsbDojMUQyMzI5O30mI3hkOwoJLnN0MTB7ZGlzcGxheTppbmxpbmU7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAwNzM3MTY4MDc4MTc3NzMxMDA0NTAwMDAwMTAzOTEyNjIxNTYyMTU0NjU4NzFfKTt9JiN4ZDsKCS5zdDExe2ZpbGw6IzMzMzMzMzt9JiN4ZDsKPC9zdHlsZT4KIDxnIGNsYXNzPSJzdDAiPgogIDxwYXRoIGQ9Ik0wLDUuMzZjMC0xLjI2LD'+
			'AtMS45LDAuMTQtMi40MmMwLjM3LTEuMzYsMS40NC0yLjQzLDIuOC0yLjhDMy40NiwwLDQuMSwwLDUuMzYsMGg5LjI4YzEuMjYsMCwxLjksMCwyLjQyLDAuMTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjM2LDAuMzcsMi40MywxLjQ0LDIuOCwyLjhDMjAsMy40NiwyMCw0LjEsMjAsNS4zNnY4LjI4YzAsMS4yNiwwLDEuOS0wLjE0LDIuNDJjLTAuMzcsMS4zNi0xLjQ0LDIuNDMtMi44LDIuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzE2LjU0LDE5LDE1LjksMTksMTQuNjQsMTlINS4zNmMtMS4yNiwwLTEuOSwwLTIuNDItMC4xNGMtMS4zNi0wLjM3LTIuNDMtMS40NC0yLjgtMi44QzAsMTUuNTQsMCwxNC45'+
			'LDAsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNMC41LDUuMzZjMC0xLjMsMC0xLjg1LDAuMTItMi4yOGMwLjMzLTEuMTksMS4yNi0yLjEzLDIuNDUtMi40NUMzLjUxLDAuNSw0LjA2LDAuNSw1LjM2LDAuNWg5LjI4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4zLDAsMS44NSwwLDIuMjgsMC4xMmMxLjE5LDAuMzMsMi4xMywxLjI2LDIuNDUsMi40NWMwLjEyLDAuNDQsMC4xMiwwLjk5LDAuMTIsMi4yOHY4LjI4YzAsMS4zLDAsMS44NS0wLjEyLDIuMjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zMywxLjE5LTEuMjYsMi4xMy0yLjQ1LDIuNDVjLTAuNDQsMC4xMi0wLjk5LDAuMT'+
			'ItMi4yOCwwLjEySDUuMzZjLTEuMywwLTEuODUsMC0yLjI4LTAuMTJjLTEuMTktMC4zMy0yLjEzLTEuMjYtMi40NS0yLjQ1JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMC41LDE1LjQ5LDAuNSwxNC45NCwwLjUsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDIiLz4KICA8ZyBjbGFzcz0ic3QzIj4KICAgPGRlZnM+CiAgICA8cmVjdCB4PSI0LjUiIHk9IjMuNSIgaGVpZ2h0PSIxMSIgaWQ9IlNWR0lEXzFfIiB3aWR0aD0iMTEiLz4KICAgPC9kZWZzPgogICA8Y2xpcFBhdGggaWQ9IlNWR0lEXzAwMDAwMTQxNDE0NzQwNjUzMjAzNzgzMDAwMDAwMDA3MDAyNDYzMTQ3MjM2OTk3MDE0XyI+CiAgICA8dXNlIHhsaW5r'+
			'OmhyZWY9IiNTVkdJRF8xXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CiAgIDwvY2xpcFBhdGg+CiAgIDxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDE0MTQxNDc0MDY1MzIwMzc4MzAwMDAwMDAwNzAwMjQ2MzE0NzIzNjk5NzAxNF8pOyI+CiAgICA8cGF0aCBkPSJNMTQuMTIsOS41OWgtMy41NHYzLjU0SDkuNDFWOS41OUg1Ljg4VjguNDFoMy41NFY0Ljg4aDEuMTh2My41NGgzLjU0VjkuNTl6IiBjbGFzcz0ic3Q1Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8ZyBjbGFzcz0ic3QwIj4KICA8cGF0aCBkPSJNNDAuOTksMTguMTVIMjkuNDVjLTEuNTksMC0yLjg4LTEuMj'+
			'ktMi44OC0yLjg4VjMuNzNjMC0xLjU5LDEuMjktMi44OCwyLjg4LTIuODhoMTEuNTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjU5LDAsMi44OCwxLjI5LDIuODgsMi44OHYxMS41NEM0My44NywxNi44Niw0Mi41OCwxOC4xNSw0MC45OSwxOC4xNXoiIGNsYXNzPSJzdDYiLz4KIDwvZz4KIDxwYXRoIGQ9Ik0zNi43OCwxMS4zMWwtMS45My0xLjkzbDEuOTMtMS45M2wtMC41OS0wLjU5bC0yLjUyLDIuNTJsMi41MiwyLjUyTDM2Ljc4LDExLjMxeiIgY2xhc3M9InN0NyIvPgogPGcgY2xhc3M9InN0MCI+CiAgPHBhdGggZD0iTTMuNzEsMC4wN2gxMi41OGMxLjc0LDAsMy4xNCwxLjQxLDMuMTQsMy4xNHYx'+
			'Mi41OGMwLDEuNzQtMS40MSwzLjE0LTMuMTQsMy4xNEgzLjcxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTEuNzQsMC0zLjE0LTEuNDEtMy4xNC0zLjE0VjMuMjFDMC41NywxLjQ3LDEuOTcsMC4wNywzLjcxLDAuMDd6IiBjbGFzcz0ic3Q2Ii8+CiAgPGcgY2xhc3M9InN0MyI+CiAgIDxkZWZzPgogICAgPHJlY3QgeD0iNi44NiIgeT0iNi4zNiIgaGVpZ2h0PSI2LjI5IiBpZD0iU1ZHSURfMDAwMDAwNTI4MjA4MzMxMDAwNDczNTU2NjAwMDAwMTYxNzA1NDMxNzg4ODkyODYwMzBfIiB3aWR0aD0iNi4yOSIvPgogICA8L2RlZnM+CiAgIDxjbGlwUGF0aCBpZD0iU1ZHSURfMDAwMDAwOTM4NjY3MzcyOTc2OT'+
			'k0MzYwMzAwMDAwMDczMTQxMTg3OTU3MDM2NTM1NDFfIj4KICAgIDx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzAwMDAwMDUyODIwODMzMTAwMDQ3MzU1NjYwMDAwMDE2MTcwNTQzMTc4ODg5Mjg2MDMwXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CiAgIDwvY2xpcFBhdGg+CiAgIDxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDA5Mzg2NjczNzI5NzY5OTQzNjAzMDAwMDAwNzMxNDExODc5NTcwMzY1MzU0MV8pOyI+CiAgICA8cGF0aCBkPSJNMTIuMzYsOS45MUg3LjY0VjkuMjRoNC43MlY5LjkxeiIgY2xhc3M9InN0OSIvPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcgY2xh'+
			'c3M9InN0MCI+CiAgPGRlZnM+CiAgIDxyZWN0IHg9IjYuODYiIHk9IjYuMzYiIGhlaWdodD0iNi4yOSIgaWQ9IlNWR0lEXzAwMDAwMDI4MzA2NTc5NDUwMDY1MjA0NDEwMDAwMDEzNDg2NDQ1NzEzMDcyNTAxOTE5XyIgd2lkdGg9IjYuMjkiLz4KICA8L2RlZnM+CiAgPGNsaXBQYXRoIGNsYXNzPSJzdDMiIGlkPSJTVkdJRF8wMDAwMDEwNzU4MTE1MzcxNjM3NDE0MjQ0MDAwMDAxMTg0NDI1MTE4NTIwMzgyNTU0Ml8iPgogICA8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8wMDAwMDAyODMwNjU3OTQ1MDA2NTIwNDQxMDAwMDAxMzQ4NjQ0NTcxMzA3MjUwMTkxOV8iIHN0eWxlPSJvdmVyZmxvdzp2aXNpYm'+
			'xlOyIvPgogIDwvY2xpcFBhdGg+CiAgPGcgc3R5bGU9ImRpc3BsYXk6aW5saW5lO2NsaXAtcGF0aDp1cmwoI1NWR0lEXzAwMDAwMTA3NTgxMTUzNzE2Mzc0MTQyNDQwMDAwMDExODQ0MjUxMTg1MjAzODI1NTQyXyk7Ij4KICAgPHBhdGggZD0iTTEwLjQxLDcuMTR2NC43Mkg5Ljc0VjcuMTRIMTAuNDF6IiBjbGFzcz0ic3Q5Ii8+CiAgPC9nPgogPC9nPgogPGc+CiAgPHBhdGggZD0iTTAuNTMsMTUuODRWMy4yMWMwLTEuNzQsMS40MS0zLjE2LDMuMTYtMy4xNmgxMi42M2MxLjc0LDAsMy4xNiwxLjQxLDMuMTYsMy4xNnYxMi42MyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMS43NC0xLjQxLDMuMTYtMy4x'+
			'NiwzLjE2SDMuNjhDMS45NCwxOSwwLjUzLDE3LjU5LDAuNTMsMTUuODR6IiBjbGFzcz0ic3QxMSIvPgogPC9nPgogPHBhdGggZD0iTTguMDEsMTEuMjNsMi4xMS0yLjExbDIuMTEsMi4xMWwwLjY1LTAuNjVsLTIuNzYtMi43NmwtMi43NiwyLjc2TDguMDEsMTEuMjN6IiBjbGFzcz0ic3Q1Ii8+Cjwvc3ZnPgo=';
		me._svg_19__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 47px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_19.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__23.appendChild(me._svg_19);
		me.__div = me.__23;
	};
	function SkinHotspotClass__22(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__22=document.createElement('div');
		el.ggId="\u0412\u0430\u043d\u043d\u0430\u044f_\u0425\u043e\u0442\u0441\u043f\u043e\u0442";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__22.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__22.onclick=function (e) {
			player.openNext("{node10}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me.__22.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me.__22.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_22']=true;
			me._text_16.logicBlock_alpha();
			me.__111.logicBlock_alpha();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me.__22.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_22']=false;
			me._text_16.logicBlock_alpha();
			me.__111.logicBlock_alpha();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me.__22.ontouchend=function (e) {
			me.elementMouseOver['_22']=false;
			me._text_16.logicBlock_alpha();
			me.__111.logicBlock_alpha();
		}
		me.__22.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_16=document.createElement('div');
		els=me._text_16__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='background: #333333;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_16.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_16.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_16.ggUpdateText();
		});
		el.appendChild(els);
		me._text_16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_16.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_22'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._text_16.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._text_16.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._text_16.style[domTransition]='opacity 0s';
				if (me._text_16.ggCurrentLogicStateAlpha == 0) {
					me._text_16.style.visibility=me._text_16.ggVisible?'inherit':'hidden';
					me._text_16.style.opacity=1;
				}
				else {
					me._text_16.style.visibility="hidden";
					me._text_16.style.opacity=0;
				}
			}
		}
		me._text_16.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__22.appendChild(me._text_16);
		el=me.__111=document.createElement('div');
		els=me.__111__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEzNTIuNiAzNTAuNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTM1Mi42IDM1MC43OyIgeG1sbnM9Imh0dHA6Ly'+
			'93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMzMzMzMzO30mI3hkOwoJLnN0MXtmaWxsOiNFMEUwRTA7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBkPSJNODAuMiwwaDExOTIuM2M0NC4zLDAsODAuMiwzNS45LDgwLjIsODAuMnYxOTAuNGMwLDQ0LjMtMzUuOSw4MC4yLTgwLjIsODAuMkg4MC4yQzM1LjksMzUwLjcsMCwzMTQuOCwwLDI3MC41JiN4ZDsmI3hhOyYjeDk7VjgwLjJDMCwzNS45LDM1LjksMCw4MC4yLDB6IiBjbGFzcz0ic3QwIi8+CiA8Zz4KICA8cGF0aCBkPSJNNDAwLjcsMjMxLjJ2LTExNGg0NC44YzcuMiwwLDEzLjMs'+
			'MS41LDE4LjIsNC40YzQuOSwyLjksOC42LDYuOCwxMS4xLDExLjRjMi41LDQuNywzLjcsOS42LDMuNywxNC44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCw2LjMtMS41LDExLjctNC42LDE2LjJjLTMuMSw0LjUtNy4yLDcuNS0xMi41LDkuMmwtMC4yLTMuOWM3LjMsMS44LDEyLjksNS4zLDE2LjgsMTAuNWMzLjksNS4yLDUuOSwxMS4zLDUuOSwxOC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCw2LjctMS4zLDEyLjUtNCwxNy41Yy0yLjcsNS02LjUsOC44LTExLjYsMTEuNmMtNS4xLDIuOC0xMS4zLDQuMi0xOC41LDQuMkg0MDAuN3ogTTQxNy40LDE2My43aDI3LjhjMy4xLDAsNS44LTAuNiw4LjMtMS45Ji'+
			'N4ZDsmI3hhOyYjeDk7JiN4OTtjMi41LTEuMiw0LjQtMyw1LjktNS40YzEuNS0yLjQsMi4yLTUuMiwyLjItOC41YzAtNC40LTEuNS04LjEtNC40LTEwLjljLTMtMi45LTYuOS00LjMtMTEuOS00LjNoLTI3LjhWMTYzLjd6IE00MTcuNCwyMTUuNGgyOS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMy43LDAsNy4xLTAuNywxMC4xLTIuMWMzLTEuNCw1LjMtMy41LDctNi4xYzEuNy0yLjcsMi42LTUuOCwyLjYtOS41YzAtMy40LTAuOC02LjUtMi4zLTkuM2MtMS41LTIuOC0zLjctNS02LjUtNi42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTIuOC0xLjYtNi4xLTIuNC05LjktMi40aC0zMC44VjIxNS40eiIgY2xh'+
			'c3M9InN0MSIvPgogIDxwYXRoIGQ9Ik01MjUuNywyMzMuNWMtNi4zLDAtMTEuNi0xLjItMTUuOS0zLjVjLTQuMy0yLjMtNy41LTUuNS05LjctOS4zYy0yLjItMy45LTMuMy04LjEtMy4zLTEyLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTQuMywwLjgtOC4xLDIuMy0xMS40YzEuNS0zLjMsMy44LTYuMSw2LjgtOC40YzMtMi4zLDYuNy00LjIsMTEuMS01LjZjMy44LTEuMSw4LjEtMi4xLDEyLjktMi45YzQuOC0wLjgsOS45LTEuNiwxNS4yLTIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzUuMy0wLjcsMTAuNi0xLjUsMTUuOC0yLjJsLTYsMy4zYzAuMS02LjctMS4zLTExLjctNC4yLTE0LjljLTIuOS0zLj'+
			'MtOC00LjktMTUuMS00LjljLTQuNSwwLTguNiwxLTEyLjMsMy4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTMuNywyLjEtNi40LDUuNS03LjgsMTAuM2wtMTUuNC00LjdjMi4xLTcuMyw2LjEtMTMuMiwxMi4xLTE3LjVjNS45LTQuMywxMy44LTYuNSwyMy43LTYuNWM3LjcsMCwxNC4zLDEuMywyMCwzLjkmI3hkOyYjeGE7JiN4OTsmI3g5O2M1LjcsMi42LDkuOCw2LjcsMTIuNSwxMi40YzEuNCwyLjgsMi4yLDUuOCwyLjUsOC45YzAuMywzLjEsMC41LDYuNSwwLjUsMTAuMXY1Mi43aC0xNC42di0xOS42bDIuOCwyLjVjLTMuNSw2LjYtOCwxMS40LTEzLjUsMTQuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7QzU0'+
			'MC40LDIzMS45LDUzMy43LDIzMy41LDUyNS43LDIzMy41eiBNNTI4LjYsMjIwYzQuNywwLDguNy0wLjgsMTIuMS0yLjVjMy40LTEuNyw2LjEtMy44LDguMi02LjRjMi4xLTIuNiwzLjQtNS4zLDQtOC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC45LTIuNSwxLjQtNS40LDEuNS04LjZjMC4xLTMuMiwwLjItNS43LDAuMi03LjZsNS40LDJjLTUuMiwwLjgtMTAsMS41LTE0LjIsMi4xYy00LjMsMC42LTguMSwxLjMtMTEuNiwxLjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMy41LDAuNi02LjUsMS4zLTkuMiwyLjJjLTIuMywwLjgtNC4zLDEuNy02LjEsMi44Yy0xLjgsMS4xLTMuMiwyLjUtNC4yLDRjLTEsMS'+
			'42LTEuNSwzLjUtMS41LDUuOGMwLDIuMiwwLjYsNC4zLDEuNyw2LjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjEsMS45LDIuOCwzLjQsNS4xLDQuNUM1MjIuMiwyMTkuNCw1MjUuMSwyMjAsNTI4LjYsMjIweiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik01OTMuNSwyMzEuMnYtODUuNWgxNi41djM0LjloNDEuN3YtMzQuOWgxNi41djg1LjVoLTE2LjV2LTM1aC00MS43djM1SDU5My41eiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik02OTIuNCwyMzEuMnYtODUuNWgxNi41djM0LjloNDEuN3YtMzQuOWgxNi41djg1LjVoLTE2LjV2LTM1aC00MS43djM1SDY5Mi40eiIgY2xhc3M9InN0MSIvPgog'+
			'IDxwYXRoIGQ9Ik04MTUuNCwyMzMuNWMtNi4zLDAtMTEuNi0xLjItMTUuOS0zLjVjLTQuMy0yLjMtNy41LTUuNS05LjctOS4zYy0yLjItMy45LTMuMy04LjEtMy4zLTEyLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTQuMywwLjgtOC4xLDIuMy0xMS40YzEuNS0zLjMsMy44LTYuMSw2LjgtOC40YzMtMi4zLDYuNy00LjIsMTEuMS01LjZjMy44LTEuMSw4LjEtMi4xLDEyLjktMi45YzQuOC0wLjgsOS45LTEuNiwxNS4yLTIuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzUuMy0wLjcsMTAuNi0xLjUsMTUuOC0yLjJsLTYsMy4zYzAuMS02LjctMS4zLTExLjctNC4yLTE0LjljLTIuOS0zLjMtOC00LjktMTUuMS'+
			'00LjljLTQuNSwwLTguNiwxLTEyLjMsMy4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTMuNywyLjEtNi40LDUuNS03LjgsMTAuM2wtMTUuNC00LjdjMi4xLTcuMyw2LjEtMTMuMiwxMi4xLTE3LjVjNS45LTQuMywxMy44LTYuNSwyMy43LTYuNWM3LjcsMCwxNC4zLDEuMywyMCwzLjkmI3hkOyYjeGE7JiN4OTsmI3g5O2M1LjcsMi42LDkuOCw2LjcsMTIuNSwxMi40YzEuNCwyLjgsMi4yLDUuOCwyLjUsOC45YzAuMywzLjEsMC41LDYuNSwwLjUsMTAuMXY1Mi43aC0xNC42di0xOS42bDIuOCwyLjVjLTMuNSw2LjYtOCwxMS40LTEzLjUsMTQuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7QzgzMC4xLDIzMS45LDgy'+
			'My40LDIzMy41LDgxNS40LDIzMy41eiBNODE4LjMsMjIwYzQuNywwLDguNy0wLjgsMTIuMS0yLjVjMy40LTEuNyw2LjEtMy44LDguMi02LjRjMi4xLTIuNiwzLjQtNS4zLDQtOC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC45LTIuNSwxLjQtNS40LDEuNS04LjZjMC4xLTMuMiwwLjItNS43LDAuMi03LjZsNS40LDJjLTUuMiwwLjgtMTAsMS41LTE0LjIsMi4xYy00LjMsMC42LTguMSwxLjMtMTEuNiwxLjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMy41LDAuNi02LjUsMS4zLTkuMiwyLjJjLTIuMywwLjgtNC4zLDEuNy02LjEsMi44Yy0xLjgsMS4xLTMuMiwyLjUtNC4yLDRjLTEsMS42LTEuNSwzLjUtMS'+
			'41LDUuOGMwLDIuMiwwLjYsNC4zLDEuNyw2LjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjEsMS45LDIuOCwzLjQsNS4xLDQuNUM4MTEuOSwyMTkuNCw4MTQuOCwyMjAsODE4LjMsMjIweiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik04NzguNiwyMzEuMmwyMS42LTMzLjhoMTcuNWwtMjEuNSwzMy44SDg3OC42eiBNOTM1LjMsMjMxLjJ2LTI5LjdoLTE2LjljLTIsMC00LjQtMC4xLTcuMi0wLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMi44LTAuMi01LjQtMC41LTcuOC0wLjljLTYuNC0xLjItMTEuNy0zLjktMTYtOC40Yy00LjMtNC40LTYuNC0xMC41LTYuNC0xOC4zYzAtNy41LDItMTMuNSw2LjEt'+
			'MTguMWM0LTQuNiw5LjItNy41LDE1LjQtOC44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi43LTAuNiw1LjQtMSw4LjMtMS4xYzIuOC0wLjEsNS4yLTAuMSw3LjItMC4xaDM0bDAuMSw4NS41SDkzNS4zeiBNOTE3LDE4OC4yaDE4LjR2LTI5LjJIOTE3Yy0xLjIsMC0yLjYsMC4xLTQuMywwLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMS43LDAuMS0zLjMsMC40LTQuOSwwLjljLTEuNiwwLjUtMy4yLDEuMy00LjcsMi41Yy0xLjUsMS4yLTIuNywyLjgtMy43LDQuNmMtMC45LDEuOS0xLjQsNC0xLjQsNi41YzAsMy42LDEsNi42LDMuMSw5JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi4xLDIuMyw0LjUsMy45LDcuNC'+
			'w0LjZjMS41LDAuNCwzLjEsMC43LDQuNiwwLjhTOTE1LjksMTg4LjIsOTE3LDE4OC4yeiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me.__111__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u0412\u0430\u043d\u043d\u0430\u044f_1";
		el.ggDx=0;
		el.ggDy=45;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 29px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__111.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__111.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_22'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__111.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__111.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__111.style[domTransition]='opacity 0s';
				if (me.__111.ggCurrentLogicStateAlpha == 0) {
					me.__111.style.visibility=me.__111.ggVisible?'inherit':'hidden';
					me.__111.style.opacity=1;
				}
				else {
					me.__111.style.visibility="hidden";
					me.__111.style.opacity=0;
				}
			}
		}
		me.__111.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__22.appendChild(me.__111);
		el=me._svg_18=document.createElement('div');
		els=me._svg_18__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDIwIDE5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAxOTsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMD'+
			'AwL3N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2Rpc3BsYXk6bm9uZTt9JiN4ZDsKCS5zdDF7ZGlzcGxheTppbmxpbmU7ZmlsbDojMTkzNTVCO30mI3hkOwoJLnN0MntkaXNwbGF5OmlubGluZTtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7fSYjeGQ7Cgkuc3Qze2Rpc3BsYXk6aW5saW5lO30mI3hkOwoJLnN0NHtjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDEzMTM1ODc4NzgwMjQ5NDMxMzgwMDAwMDAxMzUxMzc2ODg2MzI1NjEyODM5NF8pO30mI3hkOwoJLnN0NXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cgkuc3Q2e2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjt9JiN4'+
			'ZDsKCS5zdDd7ZGlzcGxheTpub25lO2ZpbGw6IzFEMjMyOTt9JiN4ZDsKCS5zdDh7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAxNzI0MTQxMDQxOTA5ODg5OTk5NjAwMDAwMDY3MTY3NjIwMTQyNTgxNDQ2NjZfKTt9JiN4ZDsKCS5zdDl7ZmlsbDojMUQyMzI5O30mI3hkOwoJLnN0MTB7ZGlzcGxheTppbmxpbmU7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAwNzM3MTY4MDc4MTc3NzMxMDA0NTAwMDAwMTAzOTEyNjIxNTYyMTU0NjU4NzFfKTt9JiN4ZDsKCS5zdDExe2ZpbGw6IzMzMzMzMzt9JiN4ZDsKPC9zdHlsZT4KIDxnIGNsYXNzPSJzdDAiPgogIDxwYXRoIGQ9Ik0wLDUuMzZjMC0xLjI2LD'+
			'AtMS45LDAuMTQtMi40MmMwLjM3LTEuMzYsMS40NC0yLjQzLDIuOC0yLjhDMy40NiwwLDQuMSwwLDUuMzYsMGg5LjI4YzEuMjYsMCwxLjksMCwyLjQyLDAuMTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjM2LDAuMzcsMi40MywxLjQ0LDIuOCwyLjhDMjAsMy40NiwyMCw0LjEsMjAsNS4zNnY4LjI4YzAsMS4yNiwwLDEuOS0wLjE0LDIuNDJjLTAuMzcsMS4zNi0xLjQ0LDIuNDMtMi44LDIuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzE2LjU0LDE5LDE1LjksMTksMTQuNjQsMTlINS4zNmMtMS4yNiwwLTEuOSwwLTIuNDItMC4xNGMtMS4zNi0wLjM3LTIuNDMtMS40NC0yLjgtMi44QzAsMTUuNTQsMCwxNC45'+
			'LDAsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNMC41LDUuMzZjMC0xLjMsMC0xLjg1LDAuMTItMi4yOGMwLjMzLTEuMTksMS4yNi0yLjEzLDIuNDUtMi40NUMzLjUxLDAuNSw0LjA2LDAuNSw1LjM2LDAuNWg5LjI4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4zLDAsMS44NSwwLDIuMjgsMC4xMmMxLjE5LDAuMzMsMi4xMywxLjI2LDIuNDUsMi40NWMwLjEyLDAuNDQsMC4xMiwwLjk5LDAuMTIsMi4yOHY4LjI4YzAsMS4zLDAsMS44NS0wLjEyLDIuMjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zMywxLjE5LTEuMjYsMi4xMy0yLjQ1LDIuNDVjLTAuNDQsMC4xMi0wLjk5LDAuMT'+
			'ItMi4yOCwwLjEySDUuMzZjLTEuMywwLTEuODUsMC0yLjI4LTAuMTJjLTEuMTktMC4zMy0yLjEzLTEuMjYtMi40NS0yLjQ1JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMC41LDE1LjQ5LDAuNSwxNC45NCwwLjUsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDIiLz4KICA8ZyBjbGFzcz0ic3QzIj4KICAgPGRlZnM+CiAgICA8cmVjdCB4PSI0LjUiIHk9IjMuNSIgaGVpZ2h0PSIxMSIgaWQ9IlNWR0lEXzFfIiB3aWR0aD0iMTEiLz4KICAgPC9kZWZzPgogICA8Y2xpcFBhdGggaWQ9IlNWR0lEXzAwMDAwMTQxNDE0NzQwNjUzMjAzNzgzMDAwMDAwMDA3MDAyNDYzMTQ3MjM2OTk3MDE0XyI+CiAgICA8dXNlIHhsaW5r'+
			'OmhyZWY9IiNTVkdJRF8xXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CiAgIDwvY2xpcFBhdGg+CiAgIDxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDE0MTQxNDc0MDY1MzIwMzc4MzAwMDAwMDAwNzAwMjQ2MzE0NzIzNjk5NzAxNF8pOyI+CiAgICA8cGF0aCBkPSJNMTQuMTIsOS41OWgtMy41NHYzLjU0SDkuNDFWOS41OUg1Ljg4VjguNDFoMy41NFY0Ljg4aDEuMTh2My41NGgzLjU0VjkuNTl6IiBjbGFzcz0ic3Q1Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8ZyBjbGFzcz0ic3QwIj4KICA8cGF0aCBkPSJNNDAuOTksMTguMTVIMjkuNDVjLTEuNTksMC0yLjg4LTEuMj'+
			'ktMi44OC0yLjg4VjMuNzNjMC0xLjU5LDEuMjktMi44OCwyLjg4LTIuODhoMTEuNTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjU5LDAsMi44OCwxLjI5LDIuODgsMi44OHYxMS41NEM0My44NywxNi44Niw0Mi41OCwxOC4xNSw0MC45OSwxOC4xNXoiIGNsYXNzPSJzdDYiLz4KIDwvZz4KIDxwYXRoIGQ9Ik0zNi43OCwxMS4zMWwtMS45My0xLjkzbDEuOTMtMS45M2wtMC41OS0wLjU5bC0yLjUyLDIuNTJsMi41MiwyLjUyTDM2Ljc4LDExLjMxeiIgY2xhc3M9InN0NyIvPgogPGcgY2xhc3M9InN0MCI+CiAgPHBhdGggZD0iTTMuNzEsMC4wN2gxMi41OGMxLjc0LDAsMy4xNCwxLjQxLDMuMTQsMy4xNHYx'+
			'Mi41OGMwLDEuNzQtMS40MSwzLjE0LTMuMTQsMy4xNEgzLjcxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTEuNzQsMC0zLjE0LTEuNDEtMy4xNC0zLjE0VjMuMjFDMC41NywxLjQ3LDEuOTcsMC4wNywzLjcxLDAuMDd6IiBjbGFzcz0ic3Q2Ii8+CiAgPGcgY2xhc3M9InN0MyI+CiAgIDxkZWZzPgogICAgPHJlY3QgeD0iNi44NiIgeT0iNi4zNiIgaGVpZ2h0PSI2LjI5IiBpZD0iU1ZHSURfMDAwMDAwNTI4MjA4MzMxMDAwNDczNTU2NjAwMDAwMTYxNzA1NDMxNzg4ODkyODYwMzBfIiB3aWR0aD0iNi4yOSIvPgogICA8L2RlZnM+CiAgIDxjbGlwUGF0aCBpZD0iU1ZHSURfMDAwMDAwOTM4NjY3MzcyOTc2OT'+
			'k0MzYwMzAwMDAwMDczMTQxMTg3OTU3MDM2NTM1NDFfIj4KICAgIDx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzAwMDAwMDUyODIwODMzMTAwMDQ3MzU1NjYwMDAwMDE2MTcwNTQzMTc4ODg5Mjg2MDMwXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CiAgIDwvY2xpcFBhdGg+CiAgIDxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDA5Mzg2NjczNzI5NzY5OTQzNjAzMDAwMDAwNzMxNDExODc5NTcwMzY1MzU0MV8pOyI+CiAgICA8cGF0aCBkPSJNMTIuMzYsOS45MUg3LjY0VjkuMjRoNC43MlY5LjkxeiIgY2xhc3M9InN0OSIvPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcgY2xh'+
			'c3M9InN0MCI+CiAgPGRlZnM+CiAgIDxyZWN0IHg9IjYuODYiIHk9IjYuMzYiIGhlaWdodD0iNi4yOSIgaWQ9IlNWR0lEXzAwMDAwMDI4MzA2NTc5NDUwMDY1MjA0NDEwMDAwMDEzNDg2NDQ1NzEzMDcyNTAxOTE5XyIgd2lkdGg9IjYuMjkiLz4KICA8L2RlZnM+CiAgPGNsaXBQYXRoIGNsYXNzPSJzdDMiIGlkPSJTVkdJRF8wMDAwMDEwNzU4MTE1MzcxNjM3NDE0MjQ0MDAwMDAxMTg0NDI1MTE4NTIwMzgyNTU0Ml8iPgogICA8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8wMDAwMDAyODMwNjU3OTQ1MDA2NTIwNDQxMDAwMDAxMzQ4NjQ0NTcxMzA3MjUwMTkxOV8iIHN0eWxlPSJvdmVyZmxvdzp2aXNpYm'+
			'xlOyIvPgogIDwvY2xpcFBhdGg+CiAgPGcgc3R5bGU9ImRpc3BsYXk6aW5saW5lO2NsaXAtcGF0aDp1cmwoI1NWR0lEXzAwMDAwMTA3NTgxMTUzNzE2Mzc0MTQyNDQwMDAwMDExODQ0MjUxMTg1MjAzODI1NTQyXyk7Ij4KICAgPHBhdGggZD0iTTEwLjQxLDcuMTR2NC43Mkg5Ljc0VjcuMTRIMTAuNDF6IiBjbGFzcz0ic3Q5Ii8+CiAgPC9nPgogPC9nPgogPGc+CiAgPHBhdGggZD0iTTAuNTMsMTUuODRWMy4yMWMwLTEuNzQsMS40MS0zLjE2LDMuMTYtMy4xNmgxMi42M2MxLjc0LDAsMy4xNiwxLjQxLDMuMTYsMy4xNnYxMi42MyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMS43NC0xLjQxLDMuMTYtMy4x'+
			'NiwzLjE2SDMuNjhDMS45NCwxOSwwLjUzLDE3LjU5LDAuNTMsMTUuODR6IiBjbGFzcz0ic3QxMSIvPgogPC9nPgogPHBhdGggZD0iTTguMDEsMTEuMjNsMi4xMS0yLjExbDIuMTEsMi4xMWwwLjY1LTAuNjVsLTIuNzYtMi43NmwtMi43NiwyLjc2TDguMDEsMTEuMjN6IiBjbGFzcz0ic3Q1Ii8+Cjwvc3ZnPgo=';
		me._svg_18__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 47px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_18.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__22.appendChild(me._svg_18);
		me.__div = me.__22;
	};
	function SkinHotspotClass__21(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__21=document.createElement('div');
		el.ggId="\u041f\u0440\u0438\u0445\u043e\u0436\u0430\u044f_\u0425\u043e\u0442\u0441\u043f\u043e\u0442";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__21.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__21.onclick=function (e) {
			player.openNext("{node1}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me.__21.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me.__21.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_21']=true;
			me._text_15.logicBlock_alpha();
			me.__110.logicBlock_alpha();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me.__21.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_21']=false;
			me._text_15.logicBlock_alpha();
			me.__110.logicBlock_alpha();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me.__21.ontouchend=function (e) {
			me.elementMouseOver['_21']=false;
			me._text_15.logicBlock_alpha();
			me.__110.logicBlock_alpha();
		}
		me.__21.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_15=document.createElement('div');
		els=me._text_15__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='background: #333333;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_15.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_15.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_15.ggUpdateText();
		});
		el.appendChild(els);
		me._text_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_15.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_21'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._text_15.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._text_15.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._text_15.style[domTransition]='opacity 0s';
				if (me._text_15.ggCurrentLogicStateAlpha == 0) {
					me._text_15.style.visibility=me._text_15.ggVisible?'inherit':'hidden';
					me._text_15.style.opacity=1;
				}
				else {
					me._text_15.style.visibility="hidden";
					me._text_15.style.opacity=0;
				}
			}
		}
		me._text_15.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__21.appendChild(me._text_15);
		el=me.__110=document.createElement('div');
		els=me.__110__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEzNTIuNiAzNTAuNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTM1Mi42IDM1MC43OyIgeG1sbnM9Imh0dHA6Ly'+
			'93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMzMzMzMzO30mI3hkOwoJLnN0MXtmaWxsOiNFMEUwRTA7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBkPSJNODAuMiwwaDExOTIuM2M0NC4zLDAsODAuMiwzNS45LDgwLjIsODAuMnYxOTAuNGMwLDQ0LjMtMzUuOSw4MC4yLTgwLjIsODAuMkg4MC4yQzM1LjksMzUwLjcsMCwzMTQuOCwwLDI3MC41JiN4ZDsmI3hhOyYjeDk7VjgwLjJDMCwzNS45LDM1LjksMCw4MC4yLDB6IiBjbGFzcz0ic3QwIi8+CiA8Zz4KICA8cGF0aCBkPSJNMjkyLjcsMjEzLjN2LTExNGg5MC43djExNGgtMTYuNXYt'+
			'OTguNGgtNTcuNnY5OC40SDI5Mi43eiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik00MDcuMywyNTEuM1YxMjcuOEg0MjJ2NjEuNWgxLjl2NjJINDA3LjN6IE00NDcuNSwyMTUuN2MtOC4yLDAtMTUtMi0yMC42LTZjLTUuNS00LTkuNy05LjQtMTIuNi0xNi4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTIuOC02LjgtNC4zLTE0LjUtNC4zLTIzYzAtOC42LDEuNC0xNi4yLDQuMi0yM2MyLjgtNi44LDctMTIuMiwxMi41LTE2LjFjNS41LTMuOSwxMi4zLTUuOSwyMC40LTUuOWM4LDAsMTQuOSwyLDIwLjgsNS45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjNS44LDMuOSwxMC4zLDkuMywxMy41LDE2LjFjMy4yLD'+
			'YuOCw0LjcsMTQuNSw0LjcsMjMuMWMwLDguNS0xLjYsMTYuMi00LjcsMjMuMWMtMy4xLDYuOC03LjYsMTIuMi0xMy40LDE2LjImI3hkOyYjeGE7JiN4OTsmI3g5O0M0NjIuNCwyMTMuNyw0NTUuNSwyMTUuNyw0NDcuNSwyMTUuN3ogTTQ0NS4yLDIwMC44YzUuMywwLDkuNi0xLjMsMTMuMS00YzMuNS0yLjcsNi02LjMsNy44LTEwLjlzMi42LTkuNywyLjYtMTUuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtNS42LTAuOS0xMC43LTIuNi0xNS4yYy0xLjctNC41LTQuMy04LjEtNy45LTEwLjhzLTgtNC0xMy41LTRjLTUuMiwwLTkuNCwxLjMtMTIuOCwzLjhjLTMuNCwyLjUtNS44LDYuMS03LjQsMTAuNiYj'+
			'eGQ7JiN4YTsmI3g5OyYjeDk7Yy0xLjYsNC41LTIuNCw5LjgtMi40LDE1LjdjMCw1LjksMC44LDExLjEsMi40LDE1LjdjMS42LDQuNSw0LjEsOC4xLDcuNSwxMC43QzQzNS40LDE5OS41LDQzOS44LDIwMC44LDQ0NS4yLDIwMC44eiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik01NzcuNiwxMjcuOHY4NS41aC0xNS45di01OS41bC00Mi44LDU5LjVoLTEzLjV2LTg1LjVoMTUuOXY1OC4zbDQyLjgtNTguM0g1NzcuNnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNTkyLjIsMjEzLjNsMzItNDMuMmwtMzEuMy00Mi4zaDE5LjZsMjEuMywyOS40bDIxLjEtMjkuNGgxOS42bC0zMS4zLDQyLjNsMz'+
			'IuMSw0My4yaC0xOS43TDYzMy44LDE4MyYjeGQ7JiN4YTsmI3g5OyYjeDk7bC0yMS45LDMwLjNINTkyLjJ6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTcyMy45LDIxNS43Yy04LjUsMC0xNi0xLjktMjIuMi01LjhjLTYuMy0zLjktMTEuMS05LjItMTQuNS0xNmMtMy40LTYuOC01LjEtMTQuNi01LjEtMjMuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtOC45LDEuNy0xNi44LDUuMi0yMy42YzMuNS02LjgsOC40LTEyLjEsMTQuNi0xNS44YzYuMy0zLjgsMTMuNi01LjcsMjItNS43YzguNSwwLDE2LDEuOSwyMi4yLDUuOGM2LjMsMy45LDExLjEsOS4yLDE0LjYsMTUuOSYjeGQ7JiN4YTsmI3g5OyYj'+
			'eDk7YzMuNCw2LjcsNS4xLDE0LjUsNS4xLDIzLjRjMCw4LjktMS43LDE2LjgtNS4yLDIzLjZjLTMuNSw2LjgtOC4zLDEyLjEtMTQuNiwxNS45QzczOS43LDIxMy44LDczMi40LDIxNS43LDcyMy45LDIxNS43eiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE03MjMuOSwyMDAuMWM4LjIsMCwxNC4zLTIuOCwxOC4zLTguM2M0LTUuNSw2LjEtMTIuNiw2LjEtMjEuM2MwLTguOS0yLTE2LjEtNi4xLTIxLjRjLTQuMS01LjMtMTAuMi04LTE4LjItOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy01LjUsMC0xMC4xLDEuMy0xMy43LDMuOGMtMy42LDIuNS02LjMsNi04LDEwLjRjLTEuNyw0LjQtMi42LDkuNS0yLjYsMTUuM2'+
			'MwLDksMi4xLDE2LjEsNi4yLDIxLjUmI3hkOyYjeGE7JiN4OTsmI3g5O0M3MDkuOCwxOTcuNCw3MTUuOSwyMDAuMSw3MjMuOSwyMDAuMXoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNzczLjMsMjEzLjNsMzIuOS00Mi44bC0zMS4xLTQyLjhoMTguMmwyOS44LDQxLjd2LTQxLjdIODM4djQxLjdsMjkuOC00MS43SDg4NmwtMzEuMSw0Mi44bDMyLjksNDIuOGgtMTkuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7TDgzOCwxNzEuNnY0MS43aC0xNC45di00MS43bC0zMC42LDQxLjdINzczLjN6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTkyMy40LDIxNS43Yy02LjMsMC0xMS42LTEuMi0xNS45LTMu'+
			'NWMtNC4zLTIuMy03LjUtNS41LTkuNy05LjNjLTIuMi0zLjktMy4zLTguMS0zLjMtMTIuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtNC4zLDAuOC04LjEsMi4zLTExLjRjMS41LTMuMywzLjgtNi4xLDYuOC04LjRjMy0yLjMsNi43LTQuMiwxMS4xLTUuNmMzLjgtMS4xLDguMS0yLjEsMTIuOS0yLjljNC44LTAuOCw5LjktMS42LDE1LjItMi40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjNS4zLTAuNywxMC42LTEuNSwxNS44LTIuMmwtNiwzLjNjMC4xLTYuNy0xLjMtMTEuNy00LjItMTQuOWMtMi45LTMuMy04LTQuOS0xNS4xLTQuOWMtNC41LDAtOC42LDEtMTIuMywzLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2'+
			'MtMy43LDIuMS02LjQsNS41LTcuOCwxMC4zbC0xNS40LTQuN2MyLjEtNy4zLDYuMS0xMy4yLDEyLjEtMTcuNWM1LjktNC4zLDEzLjgtNi41LDIzLjctNi41YzcuNywwLDE0LjMsMS4zLDIwLDMuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzUuNywyLjYsOS44LDYuNywxMi41LDEyLjRjMS40LDIuOCwyLjIsNS44LDIuNSw4LjljMC4zLDMuMSwwLjUsNi41LDAuNSwxMC4xdjUyLjdoLTE0LjZ2LTE5LjZsMi44LDIuNWMtMy41LDYuNi04LDExLjQtMTMuNSwxNC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtDOTM4LjEsMjE0LjEsOTMxLjQsMjE1LjcsOTIzLjQsMjE1Ljd6IE05MjYuMywyMDIuMmM0LjcsMCw4Ljct'+
			'MC44LDEyLjEtMi41YzMuNC0xLjcsNi4xLTMuOCw4LjItNi40czMuNC01LjMsNC04LjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjktMi41LDEuNC01LjQsMS41LTguNmMwLjEtMy4yLDAuMi01LjcsMC4yLTcuNmw1LjQsMmMtNS4yLDAuOC0xMCwxLjUtMTQuMiwyLjFjLTQuMywwLjYtOC4xLDEuMy0xMS42LDEuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0zLjUsMC42LTYuNSwxLjMtOS4yLDIuMmMtMi4zLDAuOC00LjMsMS43LTYuMSwyLjhjLTEuOCwxLjEtMy4yLDIuNS00LjIsNGMtMSwxLjYtMS41LDMuNS0xLjUsNS44YzAsMi4yLDAuNiw0LjMsMS43LDYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMS'+
			'wxLjksMi44LDMuNCw1LjEsNC41QzkxOS45LDIwMS42LDkyMi44LDIwMi4yLDkyNi4zLDIwMi4yeiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik05ODYuNiwyMTMuM2wyMS42LTMzLjhoMTcuNWwtMjEuNSwzMy44SDk4Ni42eiBNMTA0My4zLDIxMy4zdi0yOS43aC0xNi45Yy0yLDAtNC40LTAuMS03LjItMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTIuOC0wLjItNS40LTAuNS03LjgtMC45Yy02LjQtMS4yLTExLjctMy45LTE2LTguNGMtNC4zLTQuNC02LjQtMTAuNS02LjQtMTguM2MwLTcuNSwyLTEzLjUsNi4xLTE4LjFjNC00LjYsOS4yLTcuNSwxNS40LTguOCYjeGQ7JiN4YTsmI3g5OyYjeDk7'+
			'YzIuNy0wLjYsNS40LTEsOC4zLTEuMWMyLjgtMC4xLDUuMi0wLjEsNy4yLTAuMWgzNGwwLjEsODUuNUgxMDQzLjN6IE0xMDI1LDE3MC40aDE4LjR2LTI5LjJIMTAyNWMtMS4yLDAtMi42LDAuMS00LjMsMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTEuNywwLjEtMy4zLDAuNC00LjksMC45Yy0xLjYsMC41LTMuMiwxLjMtNC43LDIuNWMtMS41LDEuMi0yLjcsMi44LTMuNyw0LjZjLTAuOSwxLjktMS40LDQtMS40LDYuNWMwLDMuNiwxLDYuNiwzLjEsOSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzIuMSwyLjMsNC41LDMuOSw3LjQsNC42YzEuNSwwLjQsMy4xLDAuNyw0LjYsMC44QzEwMjIuNSwxNzAuMywxMD'+
			'IzLjksMTcwLjQsMTAyNSwxNzAuNHoiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me.__110__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u041f\u0440\u0438\u0445\u043e\u0436\u0430\u044f_1";
		el.ggDx=0;
		el.ggDy=45;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 29px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__110.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__110.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_21'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__110.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__110.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__110.style[domTransition]='opacity 0s';
				if (me.__110.ggCurrentLogicStateAlpha == 0) {
					me.__110.style.visibility=me.__110.ggVisible?'inherit':'hidden';
					me.__110.style.opacity=1;
				}
				else {
					me.__110.style.visibility="hidden";
					me.__110.style.opacity=0;
				}
			}
		}
		me.__110.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__21.appendChild(me.__110);
		el=me._svg_17=document.createElement('div');
		els=me._svg_17__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDIwIDE5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAxOTsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMD'+
			'AwL3N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2Rpc3BsYXk6bm9uZTt9JiN4ZDsKCS5zdDF7ZGlzcGxheTppbmxpbmU7ZmlsbDojMTkzNTVCO30mI3hkOwoJLnN0MntkaXNwbGF5OmlubGluZTtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7fSYjeGQ7Cgkuc3Qze2Rpc3BsYXk6aW5saW5lO30mI3hkOwoJLnN0NHtjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDEzMTM1ODc4NzgwMjQ5NDMxMzgwMDAwMDAxMzUxMzc2ODg2MzI1NjEyODM5NF8pO30mI3hkOwoJLnN0NXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cgkuc3Q2e2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjt9JiN4'+
			'ZDsKCS5zdDd7ZGlzcGxheTpub25lO2ZpbGw6IzFEMjMyOTt9JiN4ZDsKCS5zdDh7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAxNzI0MTQxMDQxOTA5ODg5OTk5NjAwMDAwMDY3MTY3NjIwMTQyNTgxNDQ2NjZfKTt9JiN4ZDsKCS5zdDl7ZmlsbDojMUQyMzI5O30mI3hkOwoJLnN0MTB7ZGlzcGxheTppbmxpbmU7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAwNzM3MTY4MDc4MTc3NzMxMDA0NTAwMDAwMTAzOTEyNjIxNTYyMTU0NjU4NzFfKTt9JiN4ZDsKCS5zdDExe2ZpbGw6IzMzMzMzMzt9JiN4ZDsKPC9zdHlsZT4KIDxnIGNsYXNzPSJzdDAiPgogIDxwYXRoIGQ9Ik0wLDUuMzZjMC0xLjI2LD'+
			'AtMS45LDAuMTQtMi40MmMwLjM3LTEuMzYsMS40NC0yLjQzLDIuOC0yLjhDMy40NiwwLDQuMSwwLDUuMzYsMGg5LjI4YzEuMjYsMCwxLjksMCwyLjQyLDAuMTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjM2LDAuMzcsMi40MywxLjQ0LDIuOCwyLjhDMjAsMy40NiwyMCw0LjEsMjAsNS4zNnY4LjI4YzAsMS4yNiwwLDEuOS0wLjE0LDIuNDJjLTAuMzcsMS4zNi0xLjQ0LDIuNDMtMi44LDIuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzE2LjU0LDE5LDE1LjksMTksMTQuNjQsMTlINS4zNmMtMS4yNiwwLTEuOSwwLTIuNDItMC4xNGMtMS4zNi0wLjM3LTIuNDMtMS40NC0yLjgtMi44QzAsMTUuNTQsMCwxNC45'+
			'LDAsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNMC41LDUuMzZjMC0xLjMsMC0xLjg1LDAuMTItMi4yOGMwLjMzLTEuMTksMS4yNi0yLjEzLDIuNDUtMi40NUMzLjUxLDAuNSw0LjA2LDAuNSw1LjM2LDAuNWg5LjI4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4zLDAsMS44NSwwLDIuMjgsMC4xMmMxLjE5LDAuMzMsMi4xMywxLjI2LDIuNDUsMi40NWMwLjEyLDAuNDQsMC4xMiwwLjk5LDAuMTIsMi4yOHY4LjI4YzAsMS4zLDAsMS44NS0wLjEyLDIuMjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zMywxLjE5LTEuMjYsMi4xMy0yLjQ1LDIuNDVjLTAuNDQsMC4xMi0wLjk5LDAuMT'+
			'ItMi4yOCwwLjEySDUuMzZjLTEuMywwLTEuODUsMC0yLjI4LTAuMTJjLTEuMTktMC4zMy0yLjEzLTEuMjYtMi40NS0yLjQ1JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMC41LDE1LjQ5LDAuNSwxNC45NCwwLjUsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDIiLz4KICA8ZyBjbGFzcz0ic3QzIj4KICAgPGRlZnM+CiAgICA8cmVjdCB4PSI0LjUiIHk9IjMuNSIgaGVpZ2h0PSIxMSIgaWQ9IlNWR0lEXzFfIiB3aWR0aD0iMTEiLz4KICAgPC9kZWZzPgogICA8Y2xpcFBhdGggaWQ9IlNWR0lEXzAwMDAwMTQxNDE0NzQwNjUzMjAzNzgzMDAwMDAwMDA3MDAyNDYzMTQ3MjM2OTk3MDE0XyI+CiAgICA8dXNlIHhsaW5r'+
			'OmhyZWY9IiNTVkdJRF8xXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CiAgIDwvY2xpcFBhdGg+CiAgIDxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDE0MTQxNDc0MDY1MzIwMzc4MzAwMDAwMDAwNzAwMjQ2MzE0NzIzNjk5NzAxNF8pOyI+CiAgICA8cGF0aCBkPSJNMTQuMTIsOS41OWgtMy41NHYzLjU0SDkuNDFWOS41OUg1Ljg4VjguNDFoMy41NFY0Ljg4aDEuMTh2My41NGgzLjU0VjkuNTl6IiBjbGFzcz0ic3Q1Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8ZyBjbGFzcz0ic3QwIj4KICA8cGF0aCBkPSJNNDAuOTksMTguMTVIMjkuNDVjLTEuNTksMC0yLjg4LTEuMj'+
			'ktMi44OC0yLjg4VjMuNzNjMC0xLjU5LDEuMjktMi44OCwyLjg4LTIuODhoMTEuNTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjU5LDAsMi44OCwxLjI5LDIuODgsMi44OHYxMS41NEM0My44NywxNi44Niw0Mi41OCwxOC4xNSw0MC45OSwxOC4xNXoiIGNsYXNzPSJzdDYiLz4KIDwvZz4KIDxwYXRoIGQ9Ik0zNi43OCwxMS4zMWwtMS45My0xLjkzbDEuOTMtMS45M2wtMC41OS0wLjU5bC0yLjUyLDIuNTJsMi41MiwyLjUyTDM2Ljc4LDExLjMxeiIgY2xhc3M9InN0NyIvPgogPGcgY2xhc3M9InN0MCI+CiAgPHBhdGggZD0iTTMuNzEsMC4wN2gxMi41OGMxLjc0LDAsMy4xNCwxLjQxLDMuMTQsMy4xNHYx'+
			'Mi41OGMwLDEuNzQtMS40MSwzLjE0LTMuMTQsMy4xNEgzLjcxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTEuNzQsMC0zLjE0LTEuNDEtMy4xNC0zLjE0VjMuMjFDMC41NywxLjQ3LDEuOTcsMC4wNywzLjcxLDAuMDd6IiBjbGFzcz0ic3Q2Ii8+CiAgPGcgY2xhc3M9InN0MyI+CiAgIDxkZWZzPgogICAgPHJlY3QgeD0iNi44NiIgeT0iNi4zNiIgaGVpZ2h0PSI2LjI5IiBpZD0iU1ZHSURfMDAwMDAwNTI4MjA4MzMxMDAwNDczNTU2NjAwMDAwMTYxNzA1NDMxNzg4ODkyODYwMzBfIiB3aWR0aD0iNi4yOSIvPgogICA8L2RlZnM+CiAgIDxjbGlwUGF0aCBpZD0iU1ZHSURfMDAwMDAwOTM4NjY3MzcyOTc2OT'+
			'k0MzYwMzAwMDAwMDczMTQxMTg3OTU3MDM2NTM1NDFfIj4KICAgIDx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzAwMDAwMDUyODIwODMzMTAwMDQ3MzU1NjYwMDAwMDE2MTcwNTQzMTc4ODg5Mjg2MDMwXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CiAgIDwvY2xpcFBhdGg+CiAgIDxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDA5Mzg2NjczNzI5NzY5OTQzNjAzMDAwMDAwNzMxNDExODc5NTcwMzY1MzU0MV8pOyI+CiAgICA8cGF0aCBkPSJNMTIuMzYsOS45MUg3LjY0VjkuMjRoNC43MlY5LjkxeiIgY2xhc3M9InN0OSIvPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcgY2xh'+
			'c3M9InN0MCI+CiAgPGRlZnM+CiAgIDxyZWN0IHg9IjYuODYiIHk9IjYuMzYiIGhlaWdodD0iNi4yOSIgaWQ9IlNWR0lEXzAwMDAwMDI4MzA2NTc5NDUwMDY1MjA0NDEwMDAwMDEzNDg2NDQ1NzEzMDcyNTAxOTE5XyIgd2lkdGg9IjYuMjkiLz4KICA8L2RlZnM+CiAgPGNsaXBQYXRoIGNsYXNzPSJzdDMiIGlkPSJTVkdJRF8wMDAwMDEwNzU4MTE1MzcxNjM3NDE0MjQ0MDAwMDAxMTg0NDI1MTE4NTIwMzgyNTU0Ml8iPgogICA8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8wMDAwMDAyODMwNjU3OTQ1MDA2NTIwNDQxMDAwMDAxMzQ4NjQ0NTcxMzA3MjUwMTkxOV8iIHN0eWxlPSJvdmVyZmxvdzp2aXNpYm'+
			'xlOyIvPgogIDwvY2xpcFBhdGg+CiAgPGcgc3R5bGU9ImRpc3BsYXk6aW5saW5lO2NsaXAtcGF0aDp1cmwoI1NWR0lEXzAwMDAwMTA3NTgxMTUzNzE2Mzc0MTQyNDQwMDAwMDExODQ0MjUxMTg1MjAzODI1NTQyXyk7Ij4KICAgPHBhdGggZD0iTTEwLjQxLDcuMTR2NC43Mkg5Ljc0VjcuMTRIMTAuNDF6IiBjbGFzcz0ic3Q5Ii8+CiAgPC9nPgogPC9nPgogPGc+CiAgPHBhdGggZD0iTTAuNTMsMTUuODRWMy4yMWMwLTEuNzQsMS40MS0zLjE2LDMuMTYtMy4xNmgxMi42M2MxLjc0LDAsMy4xNiwxLjQxLDMuMTYsMy4xNnYxMi42MyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMS43NC0xLjQxLDMuMTYtMy4x'+
			'NiwzLjE2SDMuNjhDMS45NCwxOSwwLjUzLDE3LjU5LDAuNTMsMTUuODR6IiBjbGFzcz0ic3QxMSIvPgogPC9nPgogPHBhdGggZD0iTTguMDEsMTEuMjNsMi4xMS0yLjExbDIuMTEsMi4xMWwwLjY1LTAuNjVsLTIuNzYtMi43NmwtMi43NiwyLjc2TDguMDEsMTEuMjN6IiBjbGFzcz0ic3Q1Ii8+Cjwvc3ZnPgo=';
		me._svg_17__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 47px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_17.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__21.appendChild(me._svg_17);
		me.__div = me.__21;
	};
	function SkinHotspotClass__19(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__19=document.createElement('div');
		el.ggId="\u041a\u043e\u0440\u0438\u0434\u043e\u0440_\u0425\u043e\u0442\u043f\u043e\u0438\u043d\u0442";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__19.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__19.onclick=function (e) {
			player.openNext("{node5}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me.__19.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me.__19.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_19']=true;
			me._text_14.logicBlock_alpha();
			me.__20.logicBlock_alpha();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me.__19.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_19']=false;
			me._text_14.logicBlock_alpha();
			me.__20.logicBlock_alpha();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me.__19.ontouchend=function (e) {
			me.elementMouseOver['_19']=false;
			me._text_14.logicBlock_alpha();
			me.__20.logicBlock_alpha();
		}
		me.__19.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_14=document.createElement('div');
		els=me._text_14__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='background: #333333;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_14.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_14.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_14.ggUpdateText();
		});
		el.appendChild(els);
		me._text_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_14.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_19'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._text_14.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._text_14.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._text_14.style[domTransition]='opacity 0s';
				if (me._text_14.ggCurrentLogicStateAlpha == 0) {
					me._text_14.style.visibility=me._text_14.ggVisible?'inherit':'hidden';
					me._text_14.style.opacity=1;
				}
				else {
					me._text_14.style.visibility="hidden";
					me._text_14.style.opacity=0;
				}
			}
		}
		me._text_14.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__19.appendChild(me._text_14);
		el=me.__20=document.createElement('div');
		els=me.__20__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEzNTIuNiAzNTAuNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTM1Mi42IDM1MC43OyIgeG1sbnM9Imh0dHA6Ly'+
			'93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMzMzMzMzO30mI3hkOwoJLnN0MXtmaWxsOiNFMEUwRTA7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBkPSJNODAuMiwwaDExOTIuM2M0NC4zLDAsODAuMiwzNS45LDgwLjIsODAuMnYxOTAuNGMwLDQ0LjMtMzUuOSw4MC4yLTgwLjIsODAuMkg4MC4yQzM1LjksMzUwLjcsMCwzMTQuOCwwLDI3MC41JiN4ZDsmI3hhOyYjeDk7VjgwLjJDMCwzNS45LDM1LjksMCw4MC4yLDB6IiBjbGFzcz0ic3QwIi8+CiA8Zz4KICA8cGF0aCBkPSJNMzM3LjYsMjE0LjdWOTYuNmgxNy4xdjU1LjFsNDkuNC01'+
			'NS4xaDIxLjNsLTUyLjIsNTcuNmw1Ni4xLDYwLjRoLTIybC01Mi42LTU2LjR2NTYuNEgzMzcuNnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNDcyLjcsMjE3LjJjLTguOSwwLTE2LjUtMi0yMy02cy0xMS41LTkuNS0xNS0xNi41Yy0zLjUtNy01LjMtMTUuMS01LjMtMjQuM2MwLTkuMiwxLjgtMTcuNCw1LjQtMjQuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzMuNi03LDguNy0xMi41LDE1LjItMTYuNGM2LjUtMy45LDE0LjEtNS45LDIyLjgtNS45YzguOSwwLDE2LjUsMiwyMyw2YzYuNSw0LDExLjUsOS41LDE1LjEsMTYuNWMzLjYsNyw1LjMsMTUuMSw1LjMsMjQuMiYjeGQ7JiN4YTsmI3g5OyYjeD'+
			'k7YzAsOS4yLTEuOCwxNy40LTUuNCwyNC40Yy0zLjYsNy04LjYsMTIuNS0xNS4xLDE2LjVDNDg5LjIsMjE1LjIsNDgxLjUsMjE3LjIsNDcyLjcsMjE3LjJ6IE00NzIuNywyMDFjOC41LDAsMTQuOC0yLjksMTktOC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjNC4yLTUuNyw2LjMtMTMuMSw2LjMtMjIuMWMwLTkuMi0yLjEtMTYuNi02LjQtMjIuMmMtNC4yLTUuNS0xMC41LTguMy0xOC45LTguM2MtNS43LDAtMTAuNSwxLjMtMTQuMiwzLjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMy43LDIuNi02LjUsNi4yLTguMywxMC43Yy0xLjgsNC42LTIuNyw5LjktMi43LDE1LjljMCw5LjMsMi4xLDE2LjcsNi40LDIy'+
			'LjNDNDU4LjIsMTk4LjIsNDY0LjUsMjAxLDQ3Mi43LDIwMXoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNTM0LjEsMjU0LjFWMTI2LjJoMTUuMnY2My43aDJ2NjQuMkg1MzQuMXogTTU3NS44LDIxNy4yYy04LjUsMC0xNS42LTIuMS0yMS4zLTYuMmMtNS43LTQuMS0xMC4xLTkuNy0xMy0xNi44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTMtNy4xLTQuNC0xNS00LjQtMjMuOWMwLTguOSwxLjUtMTYuOCw0LjQtMjMuOWMyLjktNy4xLDcuMi0xMi42LDEzLTE2LjdjNS43LTQuMSwxMi43LTYuMSwyMS4xLTYuMWM4LjMsMCwxNS41LDIsMjEuNSw2LjEmI3hkOyYjeGE7JiN4OTsmI3g5O2M2LDQuMSwxMC'+
			'43LDkuNiwxNCwxNi42YzMuMyw3LDQuOSwxNSw0LjksMjMuOWMwLDguOS0xLjYsMTYuOC00LjksMjMuOWMtMy4zLDcuMS03LjksMTIuNy0xMy45LDE2LjgmI3hkOyYjeGE7JiN4OTsmI3g5O0M1OTEuMiwyMTUuMSw1ODQsMjE3LjIsNTc1LjgsMjE3LjJ6IE01NzMuNCwyMDEuN2M1LjUsMCwxMC0xLjQsMTMuNi00LjJjMy42LTIuOCw2LjMtNi41LDgtMTEuM2MxLjgtNC43LDIuNy0xMCwyLjctMTUuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtNS44LTAuOS0xMS0yLjctMTUuN2MtMS44LTQuNy00LjUtOC40LTguMi0xMS4yYy0zLjctMi44LTguMy00LjItMTQtNC4yYy01LjQsMC05LjgsMS4zLTEzLjIs'+
			'My45Yy0zLjUsMi42LTYsNi4zLTcuNywxMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0xLjcsNC43LTIuNSwxMC4xLTIuNSwxNi4yYzAsNi4xLDAuOCwxMS41LDIuNSwxNi4yYzEuNiw0LjcsNC4yLDguNCw3LjgsMTEuMUM1NjMuMiwyMDAuMyw1NjcuOCwyMDEuNyw1NzMuNCwyMDEuN3oiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNzA4LjUsMTI2LjJ2ODguNUg2OTJ2LTYxLjZsLTQ0LjMsNjEuNmgtMTMuOXYtODguNWgxNi41djYwLjNsNDQuNC02MC4zSDcwOC41eiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik03MjQuOSwyMzQuNHYtMzMuNWM0LjksMCw4LjQtMS42LDEwLjUtNC45YzIuMS0zLj'+
			'MsMy44LTguOCw1LTE2LjZjMC44LTQuOCwxLjQtOS44LDEuOS0xNS4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC41LTUuNCwxLTExLjIsMS40LTE3LjRjMC40LTYuMywwLjgtMTMuMiwxLjEtMjAuN2g2My41djc0LjhoOC43djMzLjVoLTE2LjJ2LTE5LjdoLTU5LjV2MTkuN0g3MjQuOXogTTc0OS40LDIwMC45aDQxLjZ2LTYxaC0zMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjIsMy42LTAuNSw3LjMtMC43LDExLjFjLTAuMiwzLjgtMC41LDcuNi0wLjgsMTEuNGMtMC4zLDMuOC0wLjYsNy40LTEsMTAuOGMtMC40LDMuNC0wLjgsNi42LTEuMyw5LjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LDQuMy0x'+
			'LjQsNy45LTIuMywxMC44Qzc1MywxOTYuNCw3NTEuNSwxOTguOSw3NDkuNCwyMDAuOXoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNODcxLjgsMjE3LjJjLTguOSwwLTE2LjUtMi0yMy02Yy02LjUtNC0xMS41LTkuNS0xNS0xNi41Yy0zLjUtNy01LjMtMTUuMS01LjMtMjQuM2MwLTkuMiwxLjgtMTcuNCw1LjQtMjQuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzMuNi03LDguNy0xMi41LDE1LjItMTYuNGM2LjUtMy45LDE0LjEtNS45LDIyLjgtNS45YzguOSwwLDE2LjUsMiwyMyw2YzYuNSw0LDExLjUsOS41LDE1LjEsMTYuNWMzLjYsNyw1LjMsMTUuMSw1LjMsMjQuMiYjeGQ7JiN4YTsmI3g5OyYjeD'+
			'k7YzAsOS4yLTEuOCwxNy40LTUuNCwyNC40Yy0zLjYsNy04LjYsMTIuNS0xNS4xLDE2LjVDODg4LjMsMjE1LjIsODgwLjYsMjE3LjIsODcxLjgsMjE3LjJ6IE04NzEuOCwyMDFjOC41LDAsMTQuOC0yLjksMTktOC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjNC4yLTUuNyw2LjMtMTMuMSw2LjMtMjIuMWMwLTkuMi0yLjEtMTYuNi02LjQtMjIuMmMtNC4yLTUuNS0xMC41LTguMy0xOC45LTguM2MtNS43LDAtMTAuNSwxLjMtMTQuMiwzLjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMy43LDIuNi02LjUsNi4yLTguMywxMC43Yy0xLjgsNC42LTIuNyw5LjktMi43LDE1LjljMCw5LjMsMi4xLDE2LjcsNi40LDIy'+
			'LjNDODU3LjMsMTk4LjIsODYzLjYsMjAxLDg3MS44LDIwMXoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNOTMzLjIsMjU0LjFWMTI2LjJoMTUuM3Y2My43aDJ2NjQuMkg5MzMuMnogTTk3NC45LDIxNy4yYy04LjUsMC0xNS42LTIuMS0yMS4zLTYuMmMtNS43LTQuMS0xMC4xLTkuNy0xMy0xNi44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTIuOS03LjEtNC40LTE1LTQuNC0yMy45YzAtOC45LDEuNS0xNi44LDQuNC0yMy45YzIuOS03LjEsNy4yLTEyLjYsMTMtMTYuN2M1LjctNC4xLDEyLjctNi4xLDIxLjEtNi4xYzguMywwLDE1LjUsMiwyMS41LDYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7czEwLjcsOS'+
			'42LDE0LDE2LjZjMy4zLDcsNC45LDE1LDQuOSwyMy45YzAsOC45LTEuNiwxNi44LTQuOSwyMy45Yy0zLjMsNy4xLTcuOSwxMi43LTEzLjksMTYuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Qzk5MC4zLDIxNS4xLDk4My4xLDIxNy4yLDk3NC45LDIxNy4yeiBNOTcyLjUsMjAxLjdjNS41LDAsMTAtMS40LDEzLjYtNC4yYzMuNi0yLjgsNi4zLTYuNSw4LTExLjNjMS44LTQuNywyLjctMTAsMi43LTE1LjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTUuOC0wLjktMTEtMi43LTE1LjdjLTEuOC00LjctNC41LTguNC04LjItMTEuMmMtMy43LTIuOC04LjMtNC4yLTE0LTQuMmMtNS40LDAtOS44LDEuMy0xMy4yLDMu'+
			'OWMtMy41LDIuNi02LDYuMy03LjcsMTEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMS43LDQuNy0yLjUsMTAuMS0yLjUsMTYuMmMwLDYuMSwwLjgsMTEuNSwyLjUsMTYuMmMxLjYsNC43LDQuMiw4LjQsNy44LDExLjFDOTYyLjMsMjAwLjMsOTY2LjksMjAxLjcsOTcyLjUsMjAxLjd6IiBjbGFzcz0ic3QxIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me.__20__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u041a\u043e\u0440\u0438\u0434\u043e\u0440_\u041a\u043d\u043e\u043f\u043a\u0430 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f";
		el.ggDx=0;
		el.ggDy=45;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 29px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__20.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_19'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__20.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__20.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__20.style[domTransition]='opacity 0s';
				if (me.__20.ggCurrentLogicStateAlpha == 0) {
					me.__20.style.visibility=me.__20.ggVisible?'inherit':'hidden';
					me.__20.style.opacity=1;
				}
				else {
					me.__20.style.visibility="hidden";
					me.__20.style.opacity=0;
				}
			}
		}
		me.__20.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__19.appendChild(me.__20);
		el=me._svg_16=document.createElement('div');
		els=me._svg_16__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDIwIDE5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAxOTsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMD'+
			'AwL3N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2Rpc3BsYXk6bm9uZTt9JiN4ZDsKCS5zdDF7ZGlzcGxheTppbmxpbmU7ZmlsbDojMTkzNTVCO30mI3hkOwoJLnN0MntkaXNwbGF5OmlubGluZTtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7fSYjeGQ7Cgkuc3Qze2Rpc3BsYXk6aW5saW5lO30mI3hkOwoJLnN0NHtjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDEzMTM1ODc4NzgwMjQ5NDMxMzgwMDAwMDAxMzUxMzc2ODg2MzI1NjEyODM5NF8pO30mI3hkOwoJLnN0NXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cgkuc3Q2e2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjt9JiN4'+
			'ZDsKCS5zdDd7ZGlzcGxheTpub25lO2ZpbGw6IzFEMjMyOTt9JiN4ZDsKCS5zdDh7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAxNzI0MTQxMDQxOTA5ODg5OTk5NjAwMDAwMDY3MTY3NjIwMTQyNTgxNDQ2NjZfKTt9JiN4ZDsKCS5zdDl7ZmlsbDojMUQyMzI5O30mI3hkOwoJLnN0MTB7ZGlzcGxheTppbmxpbmU7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAwNzM3MTY4MDc4MTc3NzMxMDA0NTAwMDAwMTAzOTEyNjIxNTYyMTU0NjU4NzFfKTt9JiN4ZDsKCS5zdDExe2ZpbGw6IzMzMzMzMzt9JiN4ZDsKPC9zdHlsZT4KIDxnIGNsYXNzPSJzdDAiPgogIDxwYXRoIGQ9Ik0wLDUuMzZjMC0xLjI2LD'+
			'AtMS45LDAuMTQtMi40MmMwLjM3LTEuMzYsMS40NC0yLjQzLDIuOC0yLjhDMy40NiwwLDQuMSwwLDUuMzYsMGg5LjI4YzEuMjYsMCwxLjksMCwyLjQyLDAuMTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjM2LDAuMzcsMi40MywxLjQ0LDIuOCwyLjhDMjAsMy40NiwyMCw0LjEsMjAsNS4zNnY4LjI4YzAsMS4yNiwwLDEuOS0wLjE0LDIuNDJjLTAuMzcsMS4zNi0xLjQ0LDIuNDMtMi44LDIuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzE2LjU0LDE5LDE1LjksMTksMTQuNjQsMTlINS4zNmMtMS4yNiwwLTEuOSwwLTIuNDItMC4xNGMtMS4zNi0wLjM3LTIuNDMtMS40NC0yLjgtMi44QzAsMTUuNTQsMCwxNC45'+
			'LDAsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNMC41LDUuMzZjMC0xLjMsMC0xLjg1LDAuMTItMi4yOGMwLjMzLTEuMTksMS4yNi0yLjEzLDIuNDUtMi40NUMzLjUxLDAuNSw0LjA2LDAuNSw1LjM2LDAuNWg5LjI4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4zLDAsMS44NSwwLDIuMjgsMC4xMmMxLjE5LDAuMzMsMi4xMywxLjI2LDIuNDUsMi40NWMwLjEyLDAuNDQsMC4xMiwwLjk5LDAuMTIsMi4yOHY4LjI4YzAsMS4zLDAsMS44NS0wLjEyLDIuMjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zMywxLjE5LTEuMjYsMi4xMy0yLjQ1LDIuNDVjLTAuNDQsMC4xMi0wLjk5LDAuMT'+
			'ItMi4yOCwwLjEySDUuMzZjLTEuMywwLTEuODUsMC0yLjI4LTAuMTJjLTEuMTktMC4zMy0yLjEzLTEuMjYtMi40NS0yLjQ1JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMC41LDE1LjQ5LDAuNSwxNC45NCwwLjUsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDIiLz4KICA8ZyBjbGFzcz0ic3QzIj4KICAgPGRlZnM+CiAgICA8cmVjdCB4PSI0LjUiIHk9IjMuNSIgaGVpZ2h0PSIxMSIgaWQ9IlNWR0lEXzFfIiB3aWR0aD0iMTEiLz4KICAgPC9kZWZzPgogICA8Y2xpcFBhdGggaWQ9IlNWR0lEXzAwMDAwMTQxNDE0NzQwNjUzMjAzNzgzMDAwMDAwMDA3MDAyNDYzMTQ3MjM2OTk3MDE0XyI+CiAgICA8dXNlIHhsaW5r'+
			'OmhyZWY9IiNTVkdJRF8xXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CiAgIDwvY2xpcFBhdGg+CiAgIDxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDE0MTQxNDc0MDY1MzIwMzc4MzAwMDAwMDAwNzAwMjQ2MzE0NzIzNjk5NzAxNF8pOyI+CiAgICA8cGF0aCBkPSJNMTQuMTIsOS41OWgtMy41NHYzLjU0SDkuNDFWOS41OUg1Ljg4VjguNDFoMy41NFY0Ljg4aDEuMTh2My41NGgzLjU0VjkuNTl6IiBjbGFzcz0ic3Q1Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8ZyBjbGFzcz0ic3QwIj4KICA8cGF0aCBkPSJNNDAuOTksMTguMTVIMjkuNDVjLTEuNTksMC0yLjg4LTEuMj'+
			'ktMi44OC0yLjg4VjMuNzNjMC0xLjU5LDEuMjktMi44OCwyLjg4LTIuODhoMTEuNTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjU5LDAsMi44OCwxLjI5LDIuODgsMi44OHYxMS41NEM0My44NywxNi44Niw0Mi41OCwxOC4xNSw0MC45OSwxOC4xNXoiIGNsYXNzPSJzdDYiLz4KIDwvZz4KIDxwYXRoIGQ9Ik0zNi43OCwxMS4zMWwtMS45My0xLjkzbDEuOTMtMS45M2wtMC41OS0wLjU5bC0yLjUyLDIuNTJsMi41MiwyLjUyTDM2Ljc4LDExLjMxeiIgY2xhc3M9InN0NyIvPgogPGcgY2xhc3M9InN0MCI+CiAgPHBhdGggZD0iTTMuNzEsMC4wN2gxMi41OGMxLjc0LDAsMy4xNCwxLjQxLDMuMTQsMy4xNHYx'+
			'Mi41OGMwLDEuNzQtMS40MSwzLjE0LTMuMTQsMy4xNEgzLjcxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTEuNzQsMC0zLjE0LTEuNDEtMy4xNC0zLjE0VjMuMjFDMC41NywxLjQ3LDEuOTcsMC4wNywzLjcxLDAuMDd6IiBjbGFzcz0ic3Q2Ii8+CiAgPGcgY2xhc3M9InN0MyI+CiAgIDxkZWZzPgogICAgPHJlY3QgeD0iNi44NiIgeT0iNi4zNiIgaGVpZ2h0PSI2LjI5IiBpZD0iU1ZHSURfMDAwMDAwNTI4MjA4MzMxMDAwNDczNTU2NjAwMDAwMTYxNzA1NDMxNzg4ODkyODYwMzBfIiB3aWR0aD0iNi4yOSIvPgogICA8L2RlZnM+CiAgIDxjbGlwUGF0aCBpZD0iU1ZHSURfMDAwMDAwOTM4NjY3MzcyOTc2OT'+
			'k0MzYwMzAwMDAwMDczMTQxMTg3OTU3MDM2NTM1NDFfIj4KICAgIDx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzAwMDAwMDUyODIwODMzMTAwMDQ3MzU1NjYwMDAwMDE2MTcwNTQzMTc4ODg5Mjg2MDMwXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CiAgIDwvY2xpcFBhdGg+CiAgIDxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDA5Mzg2NjczNzI5NzY5OTQzNjAzMDAwMDAwNzMxNDExODc5NTcwMzY1MzU0MV8pOyI+CiAgICA8cGF0aCBkPSJNMTIuMzYsOS45MUg3LjY0VjkuMjRoNC43MlY5LjkxeiIgY2xhc3M9InN0OSIvPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcgY2xh'+
			'c3M9InN0MCI+CiAgPGRlZnM+CiAgIDxyZWN0IHg9IjYuODYiIHk9IjYuMzYiIGhlaWdodD0iNi4yOSIgaWQ9IlNWR0lEXzAwMDAwMDI4MzA2NTc5NDUwMDY1MjA0NDEwMDAwMDEzNDg2NDQ1NzEzMDcyNTAxOTE5XyIgd2lkdGg9IjYuMjkiLz4KICA8L2RlZnM+CiAgPGNsaXBQYXRoIGNsYXNzPSJzdDMiIGlkPSJTVkdJRF8wMDAwMDEwNzU4MTE1MzcxNjM3NDE0MjQ0MDAwMDAxMTg0NDI1MTE4NTIwMzgyNTU0Ml8iPgogICA8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8wMDAwMDAyODMwNjU3OTQ1MDA2NTIwNDQxMDAwMDAxMzQ4NjQ0NTcxMzA3MjUwMTkxOV8iIHN0eWxlPSJvdmVyZmxvdzp2aXNpYm'+
			'xlOyIvPgogIDwvY2xpcFBhdGg+CiAgPGcgc3R5bGU9ImRpc3BsYXk6aW5saW5lO2NsaXAtcGF0aDp1cmwoI1NWR0lEXzAwMDAwMTA3NTgxMTUzNzE2Mzc0MTQyNDQwMDAwMDExODQ0MjUxMTg1MjAzODI1NTQyXyk7Ij4KICAgPHBhdGggZD0iTTEwLjQxLDcuMTR2NC43Mkg5Ljc0VjcuMTRIMTAuNDF6IiBjbGFzcz0ic3Q5Ii8+CiAgPC9nPgogPC9nPgogPGc+CiAgPHBhdGggZD0iTTAuNTMsMTUuODRWMy4yMWMwLTEuNzQsMS40MS0zLjE2LDMuMTYtMy4xNmgxMi42M2MxLjc0LDAsMy4xNiwxLjQxLDMuMTYsMy4xNnYxMi42MyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMS43NC0xLjQxLDMuMTYtMy4x'+
			'NiwzLjE2SDMuNjhDMS45NCwxOSwwLjUzLDE3LjU5LDAuNTMsMTUuODR6IiBjbGFzcz0ic3QxMSIvPgogPC9nPgogPHBhdGggZD0iTTguMDEsMTEuMjNsMi4xMS0yLjExbDIuMTEsMi4xMWwwLjY1LTAuNjVsLTIuNzYtMi43NmwtMi43NiwyLjc2TDguMDEsMTEuMjN6IiBjbGFzcz0ic3Q1Ii8+Cjwvc3ZnPgo=';
		me._svg_16__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 47px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_16.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__19.appendChild(me._svg_16);
		me.__div = me.__19;
	};
	function SkinHotspotClass__17(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__17=document.createElement('div');
		el.ggId="\u0414\u0435\u0442\u0441\u043a\u0430\u044f_\u0425\u043e\u0442\u043f\u043e\u0438\u043d\u0442";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__17.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__17.onclick=function (e) {
			player.openNext("{node11}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me.__17.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me.__17.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_17']=true;
			me._text_13.logicBlock_alpha();
			me.__18.logicBlock_alpha();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me.__17.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_17']=false;
			me._text_13.logicBlock_alpha();
			me.__18.logicBlock_alpha();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me.__17.ontouchend=function (e) {
			me.elementMouseOver['_17']=false;
			me._text_13.logicBlock_alpha();
			me.__18.logicBlock_alpha();
		}
		me.__17.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_13=document.createElement('div');
		els=me._text_13__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='background: #333333;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_13.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_13.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_13.ggUpdateText();
		});
		el.appendChild(els);
		me._text_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_13.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_17'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._text_13.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._text_13.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._text_13.style[domTransition]='opacity 0s';
				if (me._text_13.ggCurrentLogicStateAlpha == 0) {
					me._text_13.style.visibility=me._text_13.ggVisible?'inherit':'hidden';
					me._text_13.style.opacity=1;
				}
				else {
					me._text_13.style.visibility="hidden";
					me._text_13.style.opacity=0;
				}
			}
		}
		me._text_13.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__17.appendChild(me._text_13);
		el=me.__18=document.createElement('div');
		els=me.__18__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEzNTIuNiAzNTAuNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTM1Mi42IDM1MC43OyIgeG1sbnM9Imh0dHA6Ly'+
			'93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMzMzMzMzO30mI3hkOwoJLnN0MXtmaWxsOiNFMEUwRTA7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBkPSJNODAuMiwwaDExOTIuM2M0NC4zLDAsODAuMiwzNS45LDgwLjIsODAuMnYxOTAuNGMwLDQ0LjMtMzUuOSw4MC4yLTgwLjIsODAuMkg4MC4yQzM1LjksMzUwLjcsMCwzMTQuOCwwLDI3MC41JiN4ZDsmI3hhOyYjeDk7VjgwLjJDMCwzNS45LDM1LjksMCw4MC4yLDB6IiBjbGFzcz0ic3QwIi8+CiA8Zz4KICA8cGF0aCBkPSJNMzUwLjMsMjQ0LjN2LTM1LjhjNCwwLDcuNC0xLDEwLTMu'+
			'MWMyLjYtMiw0LjctNC45LDYuMy04LjRjMS42LTMuNiwyLjgtNy43LDMuNi0xMi4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC44LTQuNiwxLjUtOS40LDEuOS0xNC41YzAuNy02LjksMS4yLTEzLjYsMS43LTIwLjJjMC41LTYuNiwwLjktMTMuNCwxLjMtMjAuNWMwLjQtNy4xLDAuOS0xNC43LDEuNC0yM2w3NS42LDAuMXYxMDEuOWg4Ljh2MzUuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7aC0xNy4ydi0xOS43aC03Ni4ydjE5LjdIMzUwLjN6IE0zNzguNCwyMDguNGg1Ni41di04NS44bC00Mi42LTAuMWMtMC40LDYtMC43LDExLjctMSwxNy4xcy0wLjYsMTAuOS0xLDE2LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2'+
			'MtMC40LDUuNS0wLjksMTEuNC0xLjUsMTcuN2MtMC42LDYtMS4yLDExLjEtMS45LDE1LjNjLTAuNyw0LjItMS42LDcuOC0yLjksMTAuOUMzODIuNywyMDMsMzgwLjgsMjA1LjgsMzc4LjQsMjA4LjR6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTUxOC4xLDIyN2MtOC44LDAtMTYuNS0xLjktMjMuMi01LjhjLTYuNi0zLjktMTEuOC05LjItMTUuNS0xNi4yYy0zLjctNi45LTUuNS0xNC45LTUuNS0yNC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC05LjcsMS44LTE4LjEsNS41LTI1LjJjMy42LTcuMSw4LjctMTIuNiwxNS4yLTE2LjVjNi41LTMuOSwxNC4xLTUuOCwyMi43LTUuOGM5LDAsMTYuNywy'+
			'LjEsMjMsNi4zYzYuMyw0LjIsMTEuMSwxMC4xLDE0LjIsMTcuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzMuMSw3LjcsNC40LDE2LjksMy43LDI3LjVoLTE3LjF2LTYuMmMtMC4xLTEwLjMtMi4xLTE3LjktNS45LTIyLjhjLTMuOC00LjktOS42LTcuNC0xNy4zLTcuNGMtOC42LDAtMTUsMi43LTE5LjMsOC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTQuMyw1LjQtNi41LDEzLjItNi41LDIzLjRjMCw5LjcsMi4yLDE3LjMsNi41LDIyLjZjNC4zLDUuMywxMC41LDgsMTguNyw4YzUuNCwwLDEwLTEuMiwxMy45LTMuNmMzLjktMi40LDctNS45LDkuMS0xMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTYuOCw1Lj'+
			'NjLTMuNCw3LjktOC43LDE0LjEtMTUuNywxOC40QzUzNC41LDIyNC45LDUyNi43LDIyNyw1MTguMSwyMjd6IE00ODYuNiwxODUuMXYtMTMuNGg2My4ydjEzLjRINDg2LjZ6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTU5Ny4zLDIyNC42di03My4xaC0zMC4zVjEzNmg3Ny42djE1LjRoLTMwLjN2NzMuMUg1OTcuM3oiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNjk2LjYsMjI3Yy05LjEsMC0xNi44LTItMjMuMS02LjFjLTYuMy00LTExLjItOS42LTE0LjYtMTYuNmMtMy40LTcuMS01LjEtMTUuMS01LjEtMjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjEtOS4xLDEuOC0xNy4yLDUuMi0yNC4y'+
			'YzMuNC03LDguNC0xMi41LDE0LjgtMTYuNWM2LjQtNCwxNC4xLTYsMjMtNmM5LjcsMCwxNy45LDIuNCwyNC44LDcuMmM2LjksNC44LDExLjQsMTEuNCwxMy42LDE5LjgmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTcuMSw0LjljLTEuNy01LTQuNS04LjgtOC4zLTExLjZjLTMuOS0yLjgtOC4zLTQuMS0xMy4yLTQuMWMtNS42LDAtMTAuMiwxLjMtMTMuOSw0cy02LjMsNi4zLTgsMTAuOWMtMS44LDQuNi0yLjcsOS44LTIuNywxNS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4xLDkuMSwyLjEsMTYuNSw2LjMsMjIuMWM0LjEsNS42LDEwLjIsOC40LDE4LjMsOC40YzUuNSwwLDEwLTEuMywxMy40LTMuOGMzLj'+
			'QtMi41LDYtNi4yLDcuOC0xMC45bDE3LjQsNC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTIuOSw4LjYtNy43LDE1LjMtMTQuMywxOS45QzcxNC4yLDIyNC43LDcwNi4xLDIyNyw2OTYuNiwyMjd6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTc1MS44LDIyNC42bDAuMS04OC41aDE3LjR2NDIuNkw4MDQsMTM2aDIxLjhsLTM2LjcsNDQuM2w0MC41LDQ0LjNoLTIzLjNMNzY5LjMsMTgydjQyLjZINzUxLjh6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTg2Mi44LDIyN2MtNi42LDAtMTIuMS0xLjItMTYuNS0zLjdjLTQuNC0yLjQtNy44LTUuNy0xMC05LjdjLTIuMy00LTMuNC04LjQtMy40LTEz'+
			'LjJjMC00LjUsMC44LTguNCwyLjQtMTEuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuNi0zLjQsMy45LTYuMyw3LjEtOC42YzMuMS0yLjQsNi45LTQuMywxMS41LTUuOGMzLjktMS4xLDguNC0yLjIsMTMuNC0zYzUtMC45LDEwLjItMS43LDE1LjctMi41YzUuNS0wLjgsMTAuOS0xLjUsMTYuNC0yLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2wtNi4yLDMuNGMwLjEtNi45LTEuNC0xMi4xLTQuNC0xNS41Yy0zLTMuNC04LjItNS0xNS42LTVjLTQuNiwwLTguOSwxLjEtMTIuOCwzLjJjLTMuOSwyLjItNi42LDUuNy04LjEsMTAuN2wtMTYtNC45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi4yLTcuNiw2LjQtMTMuNi'+
			'wxMi41LTE4LjFjNi4xLTQuNSwxNC4zLTYuNywyNC42LTYuN2M3LjksMCwxNC44LDEuNCwyMC43LDQuMWM1LjksMi43LDEwLjIsNywxMi45LDEyLjhjMS40LDIuOSwyLjMsNiwyLjYsOS4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDMuMiwwLjUsNi43LDAuNSwxMC40djU0LjVoLTE1LjJ2LTIwLjNsMi45LDIuNmMtMy43LDYuOC04LjMsMTEuOC0xNCwxNS4xQzg3OCwyMjUuNCw4NzEuMSwyMjcsODYyLjgsMjI3eiBNODY1LjksMjEzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjNC45LDAsOS0wLjksMTIuNS0yLjZjMy41LTEuNyw2LjMtMy45LDguNC02LjZjMi4xLTIuNywzLjUtNS41LDQuMi04LjRjMC45'+
			'LTIuNiwxLjUtNS42LDEuNi04LjljMC4xLTMuMywwLjItNS45LDAuMi03LjlsNS42LDImI3hkOyYjeGE7JiN4OTsmI3g5O2MtNS40LDAuOC0xMC4zLDEuNi0xNC44LDIuMmMtNC40LDAuNy04LjQsMS4zLTEyLDEuOWMtMy42LDAuNi02LjgsMS40LTkuNiwyLjNjLTIuNCwwLjgtNC40LDEuOC02LjMsM2MtMS44LDEuMS0zLjMsMi41LTQuMyw0LjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMS4xLDEuNi0xLjYsMy42LTEuNiw2YzAsMi4zLDAuNiw0LjQsMS43LDYuNGMxLjEsMS45LDIuOSwzLjUsNS4zLDQuNkM4NTkuMiwyMTIuNSw4NjIuMiwyMTMsODY1LjksMjEzeiIgY2xhc3M9InN0MSIvPgogIDxwYX'+
			'RoIGQ9Ik05MjYuMywyMjQuNmwyMi40LTM1aDE4LjFsLTIyLjIsMzVIOTI2LjN6IE05ODUuMSwyMjQuNnYtMzAuN2gtMTcuNWMtMi4xLDAtNC41LTAuMS03LjQtMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTIuOS0wLjItNS42LTAuNS04LjEtMC45Yy02LjYtMS4yLTEyLjEtNC4xLTE2LjYtOC42Yy00LjQtNC42LTYuNi0xMC45LTYuNi0xOC45YzAtNy44LDIuMS0xNCw2LjMtMTguN2M0LjItNC43LDkuNS03LjgsMTUuOS05LjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjgtMC43LDUuNi0xLDguNi0xLjFjMi45LTAuMSw1LjQtMC4xLDcuNC0wLjFoMzUuMmwwLjEsODguNUg5ODUuMXogTTk2NiwxODAu'+
			'MWgxOXYtMzAuM2gtMTljLTEuMiwwLTIuNywwLjEtNC40LDAuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7cy0zLjQsMC40LTUuMSwwLjljLTEuNywwLjUtMy4zLDEuNC00LjksMi42Yy0xLjYsMS4zLTIuOCwyLjktMy44LDQuOGMtMSwxLjktMS41LDQuMi0xLjUsNi43YzAsMy44LDEuMSw2LjksMy4yLDkuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzIuMSwyLjQsNC43LDQsNy42LDQuOGMxLjYsMC40LDMuMiwwLjcsNC44LDAuOEM5NjMuNSwxODAsOTY0LjksMTgwLjEsOTY2LDE4MC4xeiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me.__18__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u0414\u0415\u0442\u0441\u043a\u0430\u044f_\u041a\u043d\u043e\u043f\u043a\u0430 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f";
		el.ggDx=0;
		el.ggDy=45;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 29px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__18.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_17'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__18.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__18.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__18.style[domTransition]='opacity 0s';
				if (me.__18.ggCurrentLogicStateAlpha == 0) {
					me.__18.style.visibility=me.__18.ggVisible?'inherit':'hidden';
					me.__18.style.opacity=1;
				}
				else {
					me.__18.style.visibility="hidden";
					me.__18.style.opacity=0;
				}
			}
		}
		me.__18.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__17.appendChild(me.__18);
		el=me._svg_15=document.createElement('div');
		els=me._svg_15__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDIwIDE5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAxOTsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMD'+
			'AwL3N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2Rpc3BsYXk6bm9uZTt9JiN4ZDsKCS5zdDF7ZGlzcGxheTppbmxpbmU7ZmlsbDojMTkzNTVCO30mI3hkOwoJLnN0MntkaXNwbGF5OmlubGluZTtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7fSYjeGQ7Cgkuc3Qze2Rpc3BsYXk6aW5saW5lO30mI3hkOwoJLnN0NHtjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDEzMTM1ODc4NzgwMjQ5NDMxMzgwMDAwMDAxMzUxMzc2ODg2MzI1NjEyODM5NF8pO30mI3hkOwoJLnN0NXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cgkuc3Q2e2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjt9JiN4'+
			'ZDsKCS5zdDd7ZGlzcGxheTpub25lO2ZpbGw6IzFEMjMyOTt9JiN4ZDsKCS5zdDh7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAxNzI0MTQxMDQxOTA5ODg5OTk5NjAwMDAwMDY3MTY3NjIwMTQyNTgxNDQ2NjZfKTt9JiN4ZDsKCS5zdDl7ZmlsbDojMUQyMzI5O30mI3hkOwoJLnN0MTB7ZGlzcGxheTppbmxpbmU7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAwNzM3MTY4MDc4MTc3NzMxMDA0NTAwMDAwMTAzOTEyNjIxNTYyMTU0NjU4NzFfKTt9JiN4ZDsKCS5zdDExe2ZpbGw6IzMzMzMzMzt9JiN4ZDsKPC9zdHlsZT4KIDxnIGNsYXNzPSJzdDAiPgogIDxwYXRoIGQ9Ik0wLDUuMzZjMC0xLjI2LD'+
			'AtMS45LDAuMTQtMi40MmMwLjM3LTEuMzYsMS40NC0yLjQzLDIuOC0yLjhDMy40NiwwLDQuMSwwLDUuMzYsMGg5LjI4YzEuMjYsMCwxLjksMCwyLjQyLDAuMTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjM2LDAuMzcsMi40MywxLjQ0LDIuOCwyLjhDMjAsMy40NiwyMCw0LjEsMjAsNS4zNnY4LjI4YzAsMS4yNiwwLDEuOS0wLjE0LDIuNDJjLTAuMzcsMS4zNi0xLjQ0LDIuNDMtMi44LDIuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzE2LjU0LDE5LDE1LjksMTksMTQuNjQsMTlINS4zNmMtMS4yNiwwLTEuOSwwLTIuNDItMC4xNGMtMS4zNi0wLjM3LTIuNDMtMS40NC0yLjgtMi44QzAsMTUuNTQsMCwxNC45'+
			'LDAsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNMC41LDUuMzZjMC0xLjMsMC0xLjg1LDAuMTItMi4yOGMwLjMzLTEuMTksMS4yNi0yLjEzLDIuNDUtMi40NUMzLjUxLDAuNSw0LjA2LDAuNSw1LjM2LDAuNWg5LjI4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4zLDAsMS44NSwwLDIuMjgsMC4xMmMxLjE5LDAuMzMsMi4xMywxLjI2LDIuNDUsMi40NWMwLjEyLDAuNDQsMC4xMiwwLjk5LDAuMTIsMi4yOHY4LjI4YzAsMS4zLDAsMS44NS0wLjEyLDIuMjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zMywxLjE5LTEuMjYsMi4xMy0yLjQ1LDIuNDVjLTAuNDQsMC4xMi0wLjk5LDAuMT'+
			'ItMi4yOCwwLjEySDUuMzZjLTEuMywwLTEuODUsMC0yLjI4LTAuMTJjLTEuMTktMC4zMy0yLjEzLTEuMjYtMi40NS0yLjQ1JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMC41LDE1LjQ5LDAuNSwxNC45NCwwLjUsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDIiLz4KICA8ZyBjbGFzcz0ic3QzIj4KICAgPGRlZnM+CiAgICA8cmVjdCB4PSI0LjUiIHk9IjMuNSIgaGVpZ2h0PSIxMSIgaWQ9IlNWR0lEXzFfIiB3aWR0aD0iMTEiLz4KICAgPC9kZWZzPgogICA8Y2xpcFBhdGggaWQ9IlNWR0lEXzAwMDAwMTQxNDE0NzQwNjUzMjAzNzgzMDAwMDAwMDA3MDAyNDYzMTQ3MjM2OTk3MDE0XyI+CiAgICA8dXNlIHhsaW5r'+
			'OmhyZWY9IiNTVkdJRF8xXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CiAgIDwvY2xpcFBhdGg+CiAgIDxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDE0MTQxNDc0MDY1MzIwMzc4MzAwMDAwMDAwNzAwMjQ2MzE0NzIzNjk5NzAxNF8pOyI+CiAgICA8cGF0aCBkPSJNMTQuMTIsOS41OWgtMy41NHYzLjU0SDkuNDFWOS41OUg1Ljg4VjguNDFoMy41NFY0Ljg4aDEuMTh2My41NGgzLjU0VjkuNTl6IiBjbGFzcz0ic3Q1Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8ZyBjbGFzcz0ic3QwIj4KICA8cGF0aCBkPSJNNDAuOTksMTguMTVIMjkuNDVjLTEuNTksMC0yLjg4LTEuMj'+
			'ktMi44OC0yLjg4VjMuNzNjMC0xLjU5LDEuMjktMi44OCwyLjg4LTIuODhoMTEuNTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjU5LDAsMi44OCwxLjI5LDIuODgsMi44OHYxMS41NEM0My44NywxNi44Niw0Mi41OCwxOC4xNSw0MC45OSwxOC4xNXoiIGNsYXNzPSJzdDYiLz4KIDwvZz4KIDxwYXRoIGQ9Ik0zNi43OCwxMS4zMWwtMS45My0xLjkzbDEuOTMtMS45M2wtMC41OS0wLjU5bC0yLjUyLDIuNTJsMi41MiwyLjUyTDM2Ljc4LDExLjMxeiIgY2xhc3M9InN0NyIvPgogPGcgY2xhc3M9InN0MCI+CiAgPHBhdGggZD0iTTMuNzEsMC4wN2gxMi41OGMxLjc0LDAsMy4xNCwxLjQxLDMuMTQsMy4xNHYx'+
			'Mi41OGMwLDEuNzQtMS40MSwzLjE0LTMuMTQsMy4xNEgzLjcxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTEuNzQsMC0zLjE0LTEuNDEtMy4xNC0zLjE0VjMuMjFDMC41NywxLjQ3LDEuOTcsMC4wNywzLjcxLDAuMDd6IiBjbGFzcz0ic3Q2Ii8+CiAgPGcgY2xhc3M9InN0MyI+CiAgIDxkZWZzPgogICAgPHJlY3QgeD0iNi44NiIgeT0iNi4zNiIgaGVpZ2h0PSI2LjI5IiBpZD0iU1ZHSURfMDAwMDAwNTI4MjA4MzMxMDAwNDczNTU2NjAwMDAwMTYxNzA1NDMxNzg4ODkyODYwMzBfIiB3aWR0aD0iNi4yOSIvPgogICA8L2RlZnM+CiAgIDxjbGlwUGF0aCBpZD0iU1ZHSURfMDAwMDAwOTM4NjY3MzcyOTc2OT'+
			'k0MzYwMzAwMDAwMDczMTQxMTg3OTU3MDM2NTM1NDFfIj4KICAgIDx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzAwMDAwMDUyODIwODMzMTAwMDQ3MzU1NjYwMDAwMDE2MTcwNTQzMTc4ODg5Mjg2MDMwXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CiAgIDwvY2xpcFBhdGg+CiAgIDxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDA5Mzg2NjczNzI5NzY5OTQzNjAzMDAwMDAwNzMxNDExODc5NTcwMzY1MzU0MV8pOyI+CiAgICA8cGF0aCBkPSJNMTIuMzYsOS45MUg3LjY0VjkuMjRoNC43MlY5LjkxeiIgY2xhc3M9InN0OSIvPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcgY2xh'+
			'c3M9InN0MCI+CiAgPGRlZnM+CiAgIDxyZWN0IHg9IjYuODYiIHk9IjYuMzYiIGhlaWdodD0iNi4yOSIgaWQ9IlNWR0lEXzAwMDAwMDI4MzA2NTc5NDUwMDY1MjA0NDEwMDAwMDEzNDg2NDQ1NzEzMDcyNTAxOTE5XyIgd2lkdGg9IjYuMjkiLz4KICA8L2RlZnM+CiAgPGNsaXBQYXRoIGNsYXNzPSJzdDMiIGlkPSJTVkdJRF8wMDAwMDEwNzU4MTE1MzcxNjM3NDE0MjQ0MDAwMDAxMTg0NDI1MTE4NTIwMzgyNTU0Ml8iPgogICA8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8wMDAwMDAyODMwNjU3OTQ1MDA2NTIwNDQxMDAwMDAxMzQ4NjQ0NTcxMzA3MjUwMTkxOV8iIHN0eWxlPSJvdmVyZmxvdzp2aXNpYm'+
			'xlOyIvPgogIDwvY2xpcFBhdGg+CiAgPGcgc3R5bGU9ImRpc3BsYXk6aW5saW5lO2NsaXAtcGF0aDp1cmwoI1NWR0lEXzAwMDAwMTA3NTgxMTUzNzE2Mzc0MTQyNDQwMDAwMDExODQ0MjUxMTg1MjAzODI1NTQyXyk7Ij4KICAgPHBhdGggZD0iTTEwLjQxLDcuMTR2NC43Mkg5Ljc0VjcuMTRIMTAuNDF6IiBjbGFzcz0ic3Q5Ii8+CiAgPC9nPgogPC9nPgogPGc+CiAgPHBhdGggZD0iTTAuNTMsMTUuODRWMy4yMWMwLTEuNzQsMS40MS0zLjE2LDMuMTYtMy4xNmgxMi42M2MxLjc0LDAsMy4xNiwxLjQxLDMuMTYsMy4xNnYxMi42MyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMS43NC0xLjQxLDMuMTYtMy4x'+
			'NiwzLjE2SDMuNjhDMS45NCwxOSwwLjUzLDE3LjU5LDAuNTMsMTUuODR6IiBjbGFzcz0ic3QxMSIvPgogPC9nPgogPHBhdGggZD0iTTguMDEsMTEuMjNsMi4xMS0yLjExbDIuMTEsMi4xMWwwLjY1LTAuNjVsLTIuNzYtMi43NmwtMi43NiwyLjc2TDguMDEsMTEuMjN6IiBjbGFzcz0ic3Q1Ii8+Cjwvc3ZnPgo=';
		me._svg_15__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 47px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_15.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__17.appendChild(me._svg_15);
		me.__div = me.__17;
	};
	function SkinHotspotClass__15(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__15=document.createElement('div');
		el.ggId="\u0413\u0430\u0440\u0434\u0435\u0440\u043e\u0431_\u0425\u043e\u0442\u043f\u043e\u0438\u043d\u0442";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__15.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__15.onclick=function (e) {
			player.openNext("{node7}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me.__15.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me.__15.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_15']=true;
			me._text_12.logicBlock_alpha();
			me.__16.logicBlock_alpha();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me.__15.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_15']=false;
			me._text_12.logicBlock_alpha();
			me.__16.logicBlock_alpha();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me.__15.ontouchend=function (e) {
			me.elementMouseOver['_15']=false;
			me._text_12.logicBlock_alpha();
			me.__16.logicBlock_alpha();
		}
		me.__15.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_12=document.createElement('div');
		els=me._text_12__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='background: #333333;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_12.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_12.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_12.ggUpdateText();
		});
		el.appendChild(els);
		me._text_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_12.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_15'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._text_12.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._text_12.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._text_12.style[domTransition]='opacity 0s';
				if (me._text_12.ggCurrentLogicStateAlpha == 0) {
					me._text_12.style.visibility=me._text_12.ggVisible?'inherit':'hidden';
					me._text_12.style.opacity=1;
				}
				else {
					me._text_12.style.visibility="hidden";
					me._text_12.style.opacity=0;
				}
			}
		}
		me._text_12.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__15.appendChild(me._text_12);
		el=me.__16=document.createElement('div');
		els=me.__16__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEzNTIuNiAzNTAuNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTM1Mi42IDM1MC43OyIgeG1sbnM9Imh0dHA6Ly'+
			'93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMzMzMzMzO30mI3hkOwoJLnN0MXtmaWxsOiNFMEUwRTA7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBkPSJNODAuMiwwaDExOTIuM2M0NC4zLDAsODAuMiwzNS45LDgwLjIsODAuMnYxOTAuNGMwLDQ0LjMtMzUuOSw4MC4yLTgwLjIsODAuMkg4MC4yQzM1LjksMzUwLjcsMCwzMTQuOCwwLDI3MC41JiN4ZDsmI3hhOyYjeDk7VjgwLjJDMCwzNS45LDM1LjksMCw4MC4yLDB6IiBjbGFzcz0ic3QwIi8+CiA8Zz4KICA8cGF0aCBkPSJNMzAxLjksMjE1LjlWOTcuOWg3NS40VjExNEgzMTl2MTAx'+
			'LjlIMzAxLjl6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTQwNCwyMTguNGMtNi42LDAtMTIuMS0xLjItMTYuNS0zLjdjLTQuNC0yLjQtNy44LTUuNy0xMC05LjdjLTIuMy00LTMuNC04LjQtMy40LTEzLjJjMC00LjUsMC44LTguNCwyLjQtMTEuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuNi0zLjQsMy45LTYuMyw3LjEtOC42YzMuMS0yLjQsNi45LTQuMywxMS41LTUuOGMzLjktMS4xLDguNC0yLjIsMTMuNC0zYzUtMC45LDEwLjItMS43LDE1LjctMi41YzUuNS0wLjgsMTAuOS0xLjUsMTYuNC0yLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2wtNi4yLDMuNGMwLjEtNi45LTEuNC0xMi4xLTQuNC0xNS'+
			'41Yy0zLTMuNC04LjItNS0xNS42LTVjLTQuNiwwLTguOSwxLjEtMTIuOCwzLjJjLTMuOSwyLjItNi42LDUuNy04LjEsMTAuN2wtMTYtNC45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi4yLTcuNiw2LjQtMTMuNiwxMi41LTE4LjFjNi4xLTQuNSwxNC4zLTYuNywyNC42LTYuN2M3LjksMCwxNC44LDEuNCwyMC43LDQuMWM1LjksMi43LDEwLjIsNywxMi45LDEyLjhjMS40LDIuOSwyLjMsNiwyLjYsOS4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDMuMiwwLjUsNi43LDAuNSwxMC40djU0LjVoLTE1LjJ2LTIwLjNsMywyLjZjLTMuNyw2LjgtOC4zLDExLjgtMTQsMTUuMUM0MTkuMiwyMTYuNyw0MTIuMiwy'+
			'MTguNCw0MDQsMjE4LjR6IE00MDcsMjA0LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2M0LjksMCw5LTAuOSwxMi41LTIuNmMzLjUtMS43LDYuMy0zLjksOC40LTYuNmMyLjEtMi43LDMuNS01LjUsNC4yLTguNGMwLjktMi42LDEuNS01LjYsMS42LTguOWMwLjEtMy4zLDAuMi01LjksMC4yLTcuOWw1LjYsMiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy01LjQsMC44LTEwLjMsMS42LTE0LjgsMi4yYy00LjQsMC43LTguNCwxLjMtMTIsMS45Yy0zLjYsMC42LTYuOCwxLjQtOS41LDIuM2MtMi40LDAuOC00LjQsMS44LTYuMywzYy0xLjgsMS4xLTMuMywyLjUtNC4zLDQuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0xLj'+
			'EsMS42LTEuNiwzLjYtMS42LDZjMCwyLjMsMC42LDQuNCwxLjcsNi40YzEuMSwxLjksMi45LDMuNSw1LjIsNC42QzQwMC4zLDIwMy44LDQwMy40LDIwNC40LDQwNywyMDQuNHoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNDcyLjMsMjU1LjNWMTI3LjRoMTUuMnY2My43aDJ2NjQuMkg0NzIuM3ogTTUxMy45LDIxOC40Yy04LjUsMC0xNS42LTIuMS0yMS4zLTYuMmMtNS43LTQuMS0xMC4xLTkuNy0xMy0xNi44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTMtNy4xLTQuNC0xNS00LjQtMjMuOWMwLTguOSwxLjUtMTYuOCw0LjQtMjMuOXM3LjItMTIuNiwxMy0xNi43YzUuNy00LjEsMTIuNy02LjEsMjEu'+
			'MS02LjFjOC4zLDAsMTUuNSwyLDIxLjUsNi4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjNiw0LjEsMTAuNyw5LjYsMTQsMTYuNmMzLjMsNyw0LjksMTUsNC45LDIzLjljMCw4LjktMS42LDE2LjgtNC45LDIzLjljLTMuMyw3LjEtNy45LDEyLjctMTMuOSwxNi44JiN4ZDsmI3hhOyYjeDk7JiN4OTtDNTI5LjMsMjE2LjMsNTIyLjIsMjE4LjQsNTEzLjksMjE4LjR6IE01MTEuNSwyMDIuOWM1LjUsMCwxMC0xLjQsMTMuNi00LjJjMy42LTIuOCw2LjMtNi41LDgtMTEuM2MxLjgtNC43LDIuNy0xMCwyLjctMTUuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtNS44LTAuOS0xMS0yLjctMTUuN2MtMS44LTQuNy00Lj'+
			'UtOC40LTguMi0xMS4yYy0zLjctMi44LTguMy00LjItMTQtNC4yYy01LjQsMC05LjgsMS4zLTEzLjIsMy45Yy0zLjUsMi42LTYsNi4zLTcuNywxMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0xLjcsNC43LTIuNSwxMC4xLTIuNSwxNi4yYzAsNi4xLDAuOCwxMS41LDIuNSwxNi4yYzEuNiw0LjcsNC4yLDguNCw3LjgsMTEuMVM1MDUuOSwyMDIuOSw1MTEuNSwyMDIuOXoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNTY1LjUsMjM1LjZ2LTMzLjVjNC45LDAsOC4zLTEuNiwxMC41LTQuOWMyLjEtMy4zLDMuOC04LjgsNS0xNi42YzAuOC00LjgsMS40LTkuOCwxLjktMTUuMiYjeGQ7JiN4YTsmI3g5OyYj'+
			'eDk7YzAuNS01LjQsMS0xMS4yLDEuNC0xNy40YzAuNC02LjMsMC44LTEzLjIsMS4xLTIwLjdoNjMuNXY3NC44aDguN3YzMy41aC0xNi4ydi0xOS43aC01OS41djE5LjdINTY1LjV6IE01OTAsMjAyLjJoNDEuNnYtNjFoLTMxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMiwzLjYtMC40LDcuMy0wLjcsMTEuMWMtMC4yLDMuOC0wLjUsNy42LTAuOCwxMS40Yy0wLjMsMy44LTAuNiw3LjQtMSwxMC44Yy0wLjQsMy40LTAuOCw2LjYtMS4zLDkuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjcsNC4zLTEuNCw3LjktMi4zLDEwLjhTNTkyLjEsMjAwLjEsNTkwLDIwMi4yeiIgY2xhc3M9InN0MSIvPgogIDxwYX'+
			'RoIGQ9Ik03MTMuMiwyMTguNGMtOC44LDAtMTYuNS0xLjktMjMuMi01LjhjLTYuNi0zLjktMTEuOC05LjItMTUuNS0xNi4yYy0zLjctNi45LTUuNS0xNC45LTUuNS0yNC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC05LjcsMS44LTE4LjEsNS41LTI1LjJjMy42LTcuMSw4LjctMTIuNiwxNS4yLTE2LjVjNi41LTMuOSwxNC4xLTUuOCwyMi43LTUuOGM5LDAsMTYuNywyLjEsMjMsNi4zczExLjEsMTAuMSwxNC4yLDE3LjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MzLjEsNy43LDQuNCwxNi45LDMuNywyNy41aC0xNy4xdi02LjJjLTAuMS0xMC4zLTIuMS0xNy45LTUuOS0yMi44Yy0zLjgtNC45LTkuNi03LjQt'+
			'MTcuMy03LjRjLTguNiwwLTE1LDIuNy0xOS4zLDguMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00LjMsNS40LTYuNSwxMy4yLTYuNSwyMy40YzAsOS43LDIuMiwxNy4zLDYuNSwyMi42YzQuMyw1LjMsMTAuNSw4LDE4LjcsOGM1LjQsMCwxMC0xLjIsMTMuOS0zLjZjMy45LTIuNCw3LTUuOSw5LjEtMTAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7bDE2LjgsNS4zYy0zLjQsNy45LTguNywxNC4xLTE1LjcsMTguNEM3MjkuNiwyMTYuMiw3MjEuOCwyMTguNCw3MTMuMiwyMTguNHogTTY4MS43LDE3Ni41di0xMy40aDYzLjJ2MTMuNEg2ODEuN3oiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNzcxLjcsMjU1Lj'+
			'NWMTI3LjRoMTUuM3Y2My43aDJ2NjQuMkg3NzEuN3ogTTgxMy4zLDIxOC40Yy04LjUsMC0xNS42LTIuMS0yMS4zLTYuMmMtNS43LTQuMS0xMC4xLTkuNy0xMy0xNi44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTIuOS03LjEtNC40LTE1LTQuNC0yMy45YzAtOC45LDEuNS0xNi44LDQuNC0yMy45czcuMi0xMi42LDEzLTE2LjdjNS43LTQuMSwxMi43LTYuMSwyMS4xLTYuMWM4LjMsMCwxNS41LDIsMjEuNSw2LjEmI3hkOyYjeGE7JiN4OTsmI3g5O2M2LDQuMSwxMC43LDkuNiwxNCwxNi42YzMuMyw3LDQuOSwxNSw0LjksMjMuOWMwLDguOS0xLjYsMTYuOC00LjksMjMuOWMtMy4zLDcuMS03LjksMTIuNy0x'+
			'My45LDE2LjgmI3hkOyYjeGE7JiN4OTsmI3g5O0M4MjguNywyMTYuMyw4MjEuNiwyMTguNCw4MTMuMywyMTguNHogTTgxMSwyMDIuOWM1LjUsMCwxMC0xLjQsMTMuNi00LjJjMy42LTIuOCw2LjMtNi41LDgtMTEuM2MxLjgtNC43LDIuNy0xMCwyLjctMTUuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtNS44LTAuOS0xMS0yLjctMTUuN2MtMS44LTQuNy00LjUtOC40LTguMi0xMS4yYy0zLjctMi44LTguMy00LjItMTQtNC4yYy01LjQsMC05LjgsMS4zLTEzLjIsMy45Yy0zLjUsMi42LTYsNi4zLTcuNywxMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0xLjcsNC43LTIuNSwxMC4xLTIuNSwxNi4yYzAsNi4xLD'+
			'AuOCwxMS41LDIuNSwxNi4yYzEuNiw0LjcsNC4yLDguNCw3LjgsMTEuMUM4MDAuNywyMDEuNiw4MDUuMywyMDIuOSw4MTEsMjAyLjl6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTkwOS45LDIxOC40Yy04LjksMC0xNi41LTItMjMtNmMtNi41LTQtMTEuNS05LjUtMTUtMTYuNWMtMy41LTctNS4zLTE1LjEtNS4zLTI0LjNjMC05LjIsMS44LTE3LjQsNS40LTI0LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MzLjYtNyw4LjctMTIuNSwxNS4yLTE2LjRjNi41LTMuOSwxNC4xLTUuOSwyMi44LTUuOWM4LjksMCwxNi41LDIsMjMsNmM2LjUsNCwxMS41LDkuNSwxNS4xLDE2LjVjMy42LDcsNS4zLDE1LjEs'+
			'NS4zLDI0LjImI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDkuMi0xLjgsMTcuNC01LjQsMjQuNGMtMy42LDctOC42LDEyLjUtMTUuMSwxNi41QzkyNi40LDIxNi40LDkxOC43LDIxOC40LDkwOS45LDIxOC40eiBNOTA5LjksMjAyLjJjOC41LDAsMTQuOC0yLjksMTktOC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjNC4yLTUuNyw2LjMtMTMuMSw2LjMtMjIuMWMwLTkuMi0yLjEtMTYuNi02LjQtMjIuMmMtNC4yLTUuNS0xMC41LTguMy0xOC45LTguM2MtNS43LDAtMTAuNSwxLjMtMTQuMiwzLjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMy43LDIuNi02LjUsNi4yLTguMywxMC43Yy0xLjgsNC42LTIuNyw5LjktMi'+
			'43LDE1LjljMCw5LjMsMi4xLDE2LjcsNi40LDIyLjNDODk1LjQsMTk5LjUsOTAxLjcsMjAyLjIsOTA5LjksMjAyLjJ6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTEwMDcuOCwyMTguNWMtOC40LTAuMS0xNS42LTEuOS0yMS41LTUuNWMtNS45LTMuNi0xMC41LTguOC0xMy44LTE1LjZjLTMuMy02LjgtNS4yLTE1LTUuOC0yNC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMy00LjYtMC4yLTkuOCwwLjEtMTUuNWMwLjMtNS43LDAuOS0xMS4xLDEuOC0xNi40YzAuOS01LjMsMi4xLTkuNywzLjUtMTMuM2MxLjYtMy45LDMuNy03LjYsNi41LTEwLjljMi43LTMuMyw1LjctNi4xLDktOC4zJiN4ZDsm'+
			'I3hhOyYjeDk7JiN4OTtjMy41LTIuNCw3LjQtNC4zLDExLjYtNS42YzQuMy0xLjMsOC43LTIuNCwxMy40LTMuMmM0LjctMC44LDkuNC0xLjQsMTQuMi0yYzQuOC0wLjYsOS40LTEuMywxNC0yLjJsMS42LDE1LjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMywwLjctNi41LDEuMy0xMC42LDEuN2MtNC4xLDAuNC04LjMsMC45LTEyLjYsMS41Yy00LjMsMC41LTguNSwxLjMtMTIuNCwyLjNjLTMuOSwxLTcuNCwyLjQtMTAuMiw0LjJjLTQuMSwyLjUtNy4yLDYuMi05LjQsMTEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMi4yLDQuOC0zLjUsMTAtMy45LDE1LjdjMy40LTUuMSw3LjctOC44LDEzLTExLjFjNS4yLT'+
			'IuMywxMC43LTMuNCwxNi4zLTMuNGM3LjksMCwxNC43LDEuOSwyMC40LDUuNmM1LjcsMy43LDEwLjEsOC44LDEzLjIsMTUuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzMuMSw2LjQsNC42LDEzLjYsNC42LDIxLjdjMCw4LjctMS44LDE2LjQtNS40LDIyLjlzLTguNiwxMS42LTE1LDE1LjJDMTAyMy44LDIxNi44LDEwMTYuMywyMTguNiwxMDA3LjgsMjE4LjV6IE0xMDA4LjcsMjAyLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2M3LjksMCwxMy44LTIuNCwxNy44LTcuM2M0LTQuOSw2LTExLjMsNi0xOS40YzAtOC4zLTIuMS0xNC44LTYuMi0xOS42Yy00LjItNC44LTEwLTcuMS0xNy42LTcuMWMtNy43LDAtMTMu'+
			'NiwyLjQtMTcuNyw3LjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNC4xLDQuOC02LjEsMTEuMy02LjEsMTkuNmMwLDguNCwyLDE1LDYuMiwxOS43Qzk5NS4yLDIwMCwxMDAxLjEsMjAyLjMsMTAwOC43LDIwMi4zeiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me.__16__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u0413\u0430\u0440\u0434\u0435\u0440\u043e\u0431_\u041a\u043d\u043e\u043f\u043a\u0430 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f";
		el.ggDx=0;
		el.ggDy=45;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 29px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__16.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_15'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__16.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__16.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__16.style[domTransition]='opacity 0s';
				if (me.__16.ggCurrentLogicStateAlpha == 0) {
					me.__16.style.visibility=me.__16.ggVisible?'inherit':'hidden';
					me.__16.style.opacity=1;
				}
				else {
					me.__16.style.visibility="hidden";
					me.__16.style.opacity=0;
				}
			}
		}
		me.__16.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__15.appendChild(me.__16);
		el=me._svg_14=document.createElement('div');
		els=me._svg_14__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDIwIDE5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAxOTsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMD'+
			'AwL3N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2Rpc3BsYXk6bm9uZTt9JiN4ZDsKCS5zdDF7ZGlzcGxheTppbmxpbmU7ZmlsbDojMTkzNTVCO30mI3hkOwoJLnN0MntkaXNwbGF5OmlubGluZTtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7fSYjeGQ7Cgkuc3Qze2Rpc3BsYXk6aW5saW5lO30mI3hkOwoJLnN0NHtjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDEzMTM1ODc4NzgwMjQ5NDMxMzgwMDAwMDAxMzUxMzc2ODg2MzI1NjEyODM5NF8pO30mI3hkOwoJLnN0NXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cgkuc3Q2e2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjt9JiN4'+
			'ZDsKCS5zdDd7ZGlzcGxheTpub25lO2ZpbGw6IzFEMjMyOTt9JiN4ZDsKCS5zdDh7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAxNzI0MTQxMDQxOTA5ODg5OTk5NjAwMDAwMDY3MTY3NjIwMTQyNTgxNDQ2NjZfKTt9JiN4ZDsKCS5zdDl7ZmlsbDojMUQyMzI5O30mI3hkOwoJLnN0MTB7ZGlzcGxheTppbmxpbmU7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAwNzM3MTY4MDc4MTc3NzMxMDA0NTAwMDAwMTAzOTEyNjIxNTYyMTU0NjU4NzFfKTt9JiN4ZDsKCS5zdDExe2ZpbGw6IzMzMzMzMzt9JiN4ZDsKPC9zdHlsZT4KIDxnIGNsYXNzPSJzdDAiPgogIDxwYXRoIGQ9Ik0wLDUuMzZjMC0xLjI2LD'+
			'AtMS45LDAuMTQtMi40MmMwLjM3LTEuMzYsMS40NC0yLjQzLDIuOC0yLjhDMy40NiwwLDQuMSwwLDUuMzYsMGg5LjI4YzEuMjYsMCwxLjksMCwyLjQyLDAuMTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjM2LDAuMzcsMi40MywxLjQ0LDIuOCwyLjhDMjAsMy40NiwyMCw0LjEsMjAsNS4zNnY4LjI4YzAsMS4yNiwwLDEuOS0wLjE0LDIuNDJjLTAuMzcsMS4zNi0xLjQ0LDIuNDMtMi44LDIuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzE2LjU0LDE5LDE1LjksMTksMTQuNjQsMTlINS4zNmMtMS4yNiwwLTEuOSwwLTIuNDItMC4xNGMtMS4zNi0wLjM3LTIuNDMtMS40NC0yLjgtMi44QzAsMTUuNTQsMCwxNC45'+
			'LDAsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNMC41LDUuMzZjMC0xLjMsMC0xLjg1LDAuMTItMi4yOGMwLjMzLTEuMTksMS4yNi0yLjEzLDIuNDUtMi40NUMzLjUxLDAuNSw0LjA2LDAuNSw1LjM2LDAuNWg5LjI4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4zLDAsMS44NSwwLDIuMjgsMC4xMmMxLjE5LDAuMzMsMi4xMywxLjI2LDIuNDUsMi40NWMwLjEyLDAuNDQsMC4xMiwwLjk5LDAuMTIsMi4yOHY4LjI4YzAsMS4zLDAsMS44NS0wLjEyLDIuMjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zMywxLjE5LTEuMjYsMi4xMy0yLjQ1LDIuNDVjLTAuNDQsMC4xMi0wLjk5LDAuMT'+
			'ItMi4yOCwwLjEySDUuMzZjLTEuMywwLTEuODUsMC0yLjI4LTAuMTJjLTEuMTktMC4zMy0yLjEzLTEuMjYtMi40NS0yLjQ1JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMC41LDE1LjQ5LDAuNSwxNC45NCwwLjUsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDIiLz4KICA8ZyBjbGFzcz0ic3QzIj4KICAgPGRlZnM+CiAgICA8cmVjdCB4PSI0LjUiIHk9IjMuNSIgaGVpZ2h0PSIxMSIgaWQ9IlNWR0lEXzFfIiB3aWR0aD0iMTEiLz4KICAgPC9kZWZzPgogICA8Y2xpcFBhdGggaWQ9IlNWR0lEXzAwMDAwMTQxNDE0NzQwNjUzMjAzNzgzMDAwMDAwMDA3MDAyNDYzMTQ3MjM2OTk3MDE0XyI+CiAgICA8dXNlIHhsaW5r'+
			'OmhyZWY9IiNTVkdJRF8xXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CiAgIDwvY2xpcFBhdGg+CiAgIDxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDE0MTQxNDc0MDY1MzIwMzc4MzAwMDAwMDAwNzAwMjQ2MzE0NzIzNjk5NzAxNF8pOyI+CiAgICA8cGF0aCBkPSJNMTQuMTIsOS41OWgtMy41NHYzLjU0SDkuNDFWOS41OUg1Ljg4VjguNDFoMy41NFY0Ljg4aDEuMTh2My41NGgzLjU0VjkuNTl6IiBjbGFzcz0ic3Q1Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8ZyBjbGFzcz0ic3QwIj4KICA8cGF0aCBkPSJNNDAuOTksMTguMTVIMjkuNDVjLTEuNTksMC0yLjg4LTEuMj'+
			'ktMi44OC0yLjg4VjMuNzNjMC0xLjU5LDEuMjktMi44OCwyLjg4LTIuODhoMTEuNTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjU5LDAsMi44OCwxLjI5LDIuODgsMi44OHYxMS41NEM0My44NywxNi44Niw0Mi41OCwxOC4xNSw0MC45OSwxOC4xNXoiIGNsYXNzPSJzdDYiLz4KIDwvZz4KIDxwYXRoIGQ9Ik0zNi43OCwxMS4zMWwtMS45My0xLjkzbDEuOTMtMS45M2wtMC41OS0wLjU5bC0yLjUyLDIuNTJsMi41MiwyLjUyTDM2Ljc4LDExLjMxeiIgY2xhc3M9InN0NyIvPgogPGcgY2xhc3M9InN0MCI+CiAgPHBhdGggZD0iTTMuNzEsMC4wN2gxMi41OGMxLjc0LDAsMy4xNCwxLjQxLDMuMTQsMy4xNHYx'+
			'Mi41OGMwLDEuNzQtMS40MSwzLjE0LTMuMTQsMy4xNEgzLjcxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTEuNzQsMC0zLjE0LTEuNDEtMy4xNC0zLjE0VjMuMjFDMC41NywxLjQ3LDEuOTcsMC4wNywzLjcxLDAuMDd6IiBjbGFzcz0ic3Q2Ii8+CiAgPGcgY2xhc3M9InN0MyI+CiAgIDxkZWZzPgogICAgPHJlY3QgeD0iNi44NiIgeT0iNi4zNiIgaGVpZ2h0PSI2LjI5IiBpZD0iU1ZHSURfMDAwMDAwNTI4MjA4MzMxMDAwNDczNTU2NjAwMDAwMTYxNzA1NDMxNzg4ODkyODYwMzBfIiB3aWR0aD0iNi4yOSIvPgogICA8L2RlZnM+CiAgIDxjbGlwUGF0aCBpZD0iU1ZHSURfMDAwMDAwOTM4NjY3MzcyOTc2OT'+
			'k0MzYwMzAwMDAwMDczMTQxMTg3OTU3MDM2NTM1NDFfIj4KICAgIDx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzAwMDAwMDUyODIwODMzMTAwMDQ3MzU1NjYwMDAwMDE2MTcwNTQzMTc4ODg5Mjg2MDMwXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CiAgIDwvY2xpcFBhdGg+CiAgIDxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDA5Mzg2NjczNzI5NzY5OTQzNjAzMDAwMDAwNzMxNDExODc5NTcwMzY1MzU0MV8pOyI+CiAgICA8cGF0aCBkPSJNMTIuMzYsOS45MUg3LjY0VjkuMjRoNC43MlY5LjkxeiIgY2xhc3M9InN0OSIvPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcgY2xh'+
			'c3M9InN0MCI+CiAgPGRlZnM+CiAgIDxyZWN0IHg9IjYuODYiIHk9IjYuMzYiIGhlaWdodD0iNi4yOSIgaWQ9IlNWR0lEXzAwMDAwMDI4MzA2NTc5NDUwMDY1MjA0NDEwMDAwMDEzNDg2NDQ1NzEzMDcyNTAxOTE5XyIgd2lkdGg9IjYuMjkiLz4KICA8L2RlZnM+CiAgPGNsaXBQYXRoIGNsYXNzPSJzdDMiIGlkPSJTVkdJRF8wMDAwMDEwNzU4MTE1MzcxNjM3NDE0MjQ0MDAwMDAxMTg0NDI1MTE4NTIwMzgyNTU0Ml8iPgogICA8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8wMDAwMDAyODMwNjU3OTQ1MDA2NTIwNDQxMDAwMDAxMzQ4NjQ0NTcxMzA3MjUwMTkxOV8iIHN0eWxlPSJvdmVyZmxvdzp2aXNpYm'+
			'xlOyIvPgogIDwvY2xpcFBhdGg+CiAgPGcgc3R5bGU9ImRpc3BsYXk6aW5saW5lO2NsaXAtcGF0aDp1cmwoI1NWR0lEXzAwMDAwMTA3NTgxMTUzNzE2Mzc0MTQyNDQwMDAwMDExODQ0MjUxMTg1MjAzODI1NTQyXyk7Ij4KICAgPHBhdGggZD0iTTEwLjQxLDcuMTR2NC43Mkg5Ljc0VjcuMTRIMTAuNDF6IiBjbGFzcz0ic3Q5Ii8+CiAgPC9nPgogPC9nPgogPGc+CiAgPHBhdGggZD0iTTAuNTMsMTUuODRWMy4yMWMwLTEuNzQsMS40MS0zLjE2LDMuMTYtMy4xNmgxMi42M2MxLjc0LDAsMy4xNiwxLjQxLDMuMTYsMy4xNnYxMi42MyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMS43NC0xLjQxLDMuMTYtMy4x'+
			'NiwzLjE2SDMuNjhDMS45NCwxOSwwLjUzLDE3LjU5LDAuNTMsMTUuODR6IiBjbGFzcz0ic3QxMSIvPgogPC9nPgogPHBhdGggZD0iTTguMDEsMTEuMjNsMi4xMS0yLjExbDIuMTEsMi4xMWwwLjY1LTAuNjVsLTIuNzYtMi43NmwtMi43NiwyLjc2TDguMDEsMTEuMjN6IiBjbGFzcz0ic3Q1Ii8+Cjwvc3ZnPgo=';
		me._svg_14__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 47px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_14.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__15.appendChild(me._svg_14);
		me.__div = me.__15;
	};
	function SkinHotspotClass__13(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__13=document.createElement('div');
		el.ggId="\u0421\u0442\u043e\u043b\u043e\u0432\u0430\u044f_\u0425\u043e\u0442\u0441\u043f\u043e\u0442";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__13.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__13.onclick=function (e) {
			player.openNext("{node14}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me.__13.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me.__13.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_13']=true;
			me._text_11.logicBlock_alpha();
			me.__14.logicBlock_alpha();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me.__13.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_13']=false;
			me._text_11.logicBlock_alpha();
			me.__14.logicBlock_alpha();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me.__13.ontouchend=function (e) {
			me.elementMouseOver['_13']=false;
			me._text_11.logicBlock_alpha();
			me.__14.logicBlock_alpha();
		}
		me.__13.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_11=document.createElement('div');
		els=me._text_11__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='background: #333333;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_11.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_11.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_11.ggUpdateText();
		});
		el.appendChild(els);
		me._text_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_11.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_13'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._text_11.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._text_11.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._text_11.style[domTransition]='opacity 0s';
				if (me._text_11.ggCurrentLogicStateAlpha == 0) {
					me._text_11.style.visibility=me._text_11.ggVisible?'inherit':'hidden';
					me._text_11.style.opacity=1;
				}
				else {
					me._text_11.style.visibility="hidden";
					me._text_11.style.opacity=0;
				}
			}
		}
		me._text_11.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__13.appendChild(me._text_11);
		el=me.__14=document.createElement('div');
		els=me.__14__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjQuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEzNTIuNiAzNTAuNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTM1Mi42IDM1MC43OyIgeG1sbnM9Imh0dHA6Ly'+
			'93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMzMzMzMzO30mI3hkOwoJLnN0MXtmaWxsOiNFMEUwRTA7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBkPSJNODAuMiwwaDExOTIuM2M0NC4zLDAsODAuMiwzNS45LDgwLjIsODAuMnYxOTAuNGMwLDQ0LjMtMzUuOSw4MC4yLTgwLjIsODAuMkg4MC4yQzM1LjksMzUwLjcsMCwzMTQuOCwwLDI3MC41JiN4ZDsmI3hhOyYjeDk7VjgwLjJDMCwzNS45LDM1LjksMCw4MC4yLDB6IiBjbGFzcz0ic3QwIi8+CiA8Zz4KICA8cGF0aCBkPSJNMzI2LjksMjQxLjNjLTEyLjcsMC0yMy41LTIuOC0zMi40'+
			'LTguM2MtOC45LTUuNS0xNS43LTEzLjMtMjAuNS0yMy4yYy00LjctOS45LTcuMS0yMS40LTcuMS0zNC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xMy4xLDIuNC0yNC42LDcuMS0zNC41YzQuNy05LjksMTEuNS0xNy42LDIwLjUtMjMuMmM4LjktNS41LDE5LjctOC4zLDMyLjQtOC4zYzE0LjYsMCwyNi43LDMuNywzNi4zLDExLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2M5LjYsNy40LDE2LjMsMTcuMywyMCwyOS44bC0xOC42LDVjLTIuNS04LjktNi44LTE1LjgtMTMuMi0yMC44Yy02LjMtNS0xNC41LTcuNi0yNC41LTcuNmMtOSwwLTE2LjUsMi0yMi40LDYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy02LD'+
			'QtMTAuNSw5LjctMTMuNSwxN2MtMyw3LjMtNC41LDE1LjctNC41LDI1LjRjLTAuMSw5LjcsMS40LDE4LjEsNC40LDI1LjRjMyw3LjMsNy41LDEyLjksMTMuNSwxN2M2LDQsMTMuNSw2LjEsMjIuNSw2LjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MxMCwwLDE4LjItMi41LDI0LjUtNy42YzYuMy01LjEsMTAuNy0xMiwxMy4yLTIwLjhsMTguNiw1Yy0zLjgsMTIuNS0xMC40LDIyLjQtMjAsMjkuOEMzNTMuNiwyMzcuNiwzNDEuNSwyNDEuMywzMjYuOSwyNDEuM3oiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNDI3LjEsMjM4Ljd2LTc4LjVoLTMyLjV2LTE2LjVoODMuM3YxNi41aC0zMi41djc4LjVINDI3'+
			'LjF6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTUzNC4xLDI0MS4zYy05LjUsMC0xNy43LTIuMS0yNC43LTYuNGMtNy00LjMtMTIuNC0xMC4yLTE2LjEtMTcuN2MtMy44LTcuNS01LjctMTYuMi01LjctMjYuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtOS45LDEuOS0xOC42LDUuOC0yNi4yYzMuOS03LjUsOS4zLTEzLjQsMTYuMy0xNy42YzctNC4yLDE1LjEtNi4zLDI0LjUtNi4zYzkuNSwwLDE3LjcsMi4xLDI0LjcsNi40YzcsNC4zLDEyLjQsMTAuMiwxNi4yLDE3LjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MzLjgsNy41LDUuNywxNi4yLDUuNywyNmMwLDkuOS0xLjksMTguNi01LjgsMjYuMmMtMy'+
			'44LDcuNS05LjMsMTMuNC0xNi4yLDE3LjdDNTUxLjgsMjM5LjIsNTQzLjYsMjQxLjMsNTM0LjEsMjQxLjN6IE01MzQuMSwyMjQmI3hkOyYjeGE7JiN4OTsmI3g5O2M5LjEsMCwxNS45LTMuMSwyMC40LTkuMmM0LjUtNi4xLDYuNy0xNCw2LjctMjMuN2MwLTkuOS0yLjMtMTcuOC02LjgtMjMuOGMtNC41LTUuOS0xMS4zLTguOS0yMC4zLTguOWMtNi4yLDAtMTEuMiwxLjQtMTUuMiw0LjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtNCwyLjgtNi45LDYuNi04LjksMTEuNWMtMS45LDQuOS0yLjksMTAuNi0yLjksMTdjMCwxMCwyLjMsMTcuOSw2LjksMjMuOUM1MTguNiwyMjEsNTI1LjMsMjI0LDUzNC4xLDIy'+
			'NHoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNTkxLjMsMjM4Ljd2LTE1LjZjMy41LDAuNiw2LjIsMC41LDgtMC4zYzEuOS0wLjksMy4yLTIuNCw0LjEtNC43YzAuOS0yLjMsMS43LTUuMiwyLjMtOC45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS01LjMsMS45LTExLjQsMi42LTE4LjNjMC43LTYuOCwxLjQtMTQuMiwyLTIyLjJjMC42LTgsMS4xLTE2LjMsMS42LTI1LjFoNjguM3Y5NWgtMTguNVYxNjFoLTMzLjNjLTAuNCw0LjYtMC43LDkuNS0xLjIsMTQuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsNS4yLTAuOSwxMC4zLTEuNSwxNS40Yy0wLjUsNS4xLTEuMSw5LjktMS43LDE0LjNjLTAuNi'+
			'w0LjUtMS4yLDguMy0xLjgsMTEuNGMtMS4yLDYuMy0yLjksMTEuNC01LjEsMTUuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0yLjMsMy43LTUuNCw2LjEtOS41LDcuMkM2MDMuNiwyNDAuMyw1OTguMSwyNDAuMiw1OTEuMywyMzguN3oiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNzQ2LjEsMjQxLjNjLTkuNSwwLTE3LjctMi4xLTI0LjctNi40Yy03LTQuMy0xMi40LTEwLjItMTYuMS0xNy43Yy0zLjgtNy41LTUuNy0xNi4yLTUuNy0yNi4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC05LjksMS45LTE4LjYsNS44LTI2LjJjMy45LTcuNSw5LjMtMTMuNCwxNi4zLTE3LjZjNy00LjIsMTUuMS02LjMsMjQu'+
			'NS02LjNjOS41LDAsMTcuNywyLjEsMjQuNyw2LjRjNyw0LjMsMTIuNCwxMC4yLDE2LjIsMTcuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzMuOCw3LjUsNS43LDE2LjIsNS43LDI2YzAsOS45LTEuOSwxOC42LTUuOCwyNi4yYy0zLjgsNy41LTkuMywxMy40LTE2LjIsMTcuN0M3NjMuOCwyMzkuMiw3NTUuNiwyNDEuMyw3NDYuMSwyNDEuM3ogTTc0Ni4xLDIyNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzkuMSwwLDE1LjktMy4xLDIwLjQtOS4yYzQuNS02LjEsNi43LTE0LDYuNy0yMy43YzAtOS45LTIuMy0xNy44LTYuOC0yMy44Yy00LjUtNS45LTExLjMtOC45LTIwLjMtOC45Yy02LjIsMC0xMS4yLDEuNC0xNS'+
			'4yLDQuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy00LDIuOC02LjksNi42LTguOSwxMS41Yy0xLjksNC45LTIuOSwxMC42LTIuOSwxN2MwLDEwLDIuMywxNy45LDYuOSwyMy45QzczMC42LDIyMSw3MzcuMywyMjQsNzQ2LjEsMjI0eiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik04MTIsMjM4Ljd2LTk1aDQxLjhjMi44LDAsNS41LDAuMiw4LjMsMC41YzIuOCwwLjMsNS4yLDAuOCw3LjMsMS40YzQuOCwxLjQsOC45LDQsMTIuMyw4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMy40LDQsNS4xLDkuNCw1LjEsMTYuMWMwLDMuOC0wLjYsNy0xLjgsOS42Yy0xLjIsMi42LTIuOCw0LjktNC44LDYuN2MtMC45LDAu'+
			'OC0xLjksMS42LTMsMi4yYy0xLjEsMC42LTIuMSwxLjEtMy4yLDEuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzIuMiwwLjQsNC4zLDEuMSw2LjQsMi4zYzMuMiwxLjcsNS45LDQuMiw4LDcuM2MyLjEsMy4yLDMuMSw3LjUsMy4xLDEyLjhjMCw2LjQtMS42LDExLjctNC43LDE2LjFjLTMuMSw0LjMtNy41LDcuMy0xMy4yLDguOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0yLjIsMC42LTQuNywxLjEtNy41LDEuM2MtMi44LDAuMi01LjYsMC40LTguMywwLjRIODEyeiBNODMwLjcsMTgzLjloMjAuNmMxLjcsMCwzLjQtMC4xLDUuMi0wLjNjMS44LTAuMiwzLjMtMC42LDQuNi0xLjEmI3hkOyYjeGE7JiN4OTsmI3'+
			'g5O2MyLjMtMC45LDQtMi40LDUuMS00LjRjMS4xLTIuMSwxLjctNC40LDEuNy02LjhjMC0yLjctMC42LTUuMS0xLjgtNy4yYy0xLjItMi4xLTMuMS0zLjYtNS41LTQuNGMtMS43LTAuNi0zLjctMC45LTUuOS0xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTIuMi0wLjEtMy42LTAuMS00LjItMC4xaC0xOS43VjE4My45eiBNODMwLjcsMjI0LjJoMjZjMS4yLDAsMi42LTAuMSw0LjItMC40YzEuNi0wLjIsMy0wLjYsNC4yLTFjMi42LTAuOCw0LjUtMi4zLDUuNy00LjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjEtMi4yLDEuNy00LjUsMS43LTYuOWMwLTMuMy0wLjktNi0yLjYtOGMtMS44LTItNC0zLjMtNi43'+
			'LTMuOWMtMS4yLTAuNC0yLjUtMC42LTMuOS0wLjdjLTEuNC0wLjEtMi42LTAuMS0zLjYtMC4xaC0yNS4xVjIyNC4yeiYjeGQ7JiN4YTsmI3g5OyYjeDk7IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTkzNiwyNDEuM2MtNywwLTEyLjktMS4zLTE3LjctMy45Yy00LjgtMi42LTguMy02LjEtMTAuOC0xMC40Yy0yLjQtNC4zLTMuNy05LTMuNy0xNC4yYzAtNC44LDAuOC05LDIuNi0xMi43JiN4ZDsmI3hhOyYjeDk7JiN4OTtzNC4yLTYuNyw3LjYtOS4zYzMuMy0yLjYsNy40LTQuNiwxMi4zLTYuMmM0LjItMS4yLDktMi4zLDE0LjMtMy4zYzUuMy0wLjksMTEtMS44LDE2LjgtMi42YzUuOS0wLjgsMT'+
			'EuNy0xLjYsMTcuNS0yLjVsLTYuNywzLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjEtNy40LTEuNC0xMy00LjctMTYuNmMtMy4zLTMuNi04LjgtNS40LTE2LjgtNS40Yy01LDAtOS42LDEuMi0xMy43LDMuNWMtNC4yLDIuMy03LjEsNi4xLTguNywxMS41bC0xNy4yLTUuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzIuMy04LjIsNi44LTE0LjYsMTMuNC0xOS40YzYuNi00LjgsMTUuNC03LjIsMjYuMy03LjJjOC41LDAsMTUuOSwxLjQsMjIuMiw0LjRjNi4zLDIuOSwxMC45LDcuNSwxMy45LDEzLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjUsMy4xLDIuNSw2LjQsMi44LDkuOXMwLjUsNy4yLDAuNSwxMS4y'+
			'djU4LjVoLTE2LjNWMjE3bDMuMiwyLjhjLTMuOSw3LjMtOC45LDEyLjctMTUsMTYuMkM5NTIuMywyMzkuNiw5NDQuOCwyNDEuMyw5MzYsMjQxLjN6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTTkzOS4yLDIyNi4zYzUuMiwwLDkuNy0wLjksMTMuNS0yLjhjMy44LTEuOCw2LjgtNC4yLDkuMS03LjFjMi4zLTIuOSwzLjgtNS45LDQuNS05YzEtMi44LDEuNi02LDEuNy05LjVjMC4yLTMuNSwwLjItNi4zLDAuMi04LjQmI3hkOyYjeGE7JiN4OTsmI3g5O2w2LDIuMmMtNS44LDAuOS0xMS4xLDEuNy0xNS44LDIuNGMtNC43LDAuNy05LDEuNC0xMi45LDIuMWMtMy44LDAuNy03LjMsMS41LTEwLjMsMi40Yy0yLj'+
			'UsMC45LTQuOCwxLjktNi43LDMuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0yLDEuMi0zLjUsMi43LTQuNyw0LjVjLTEuMSwxLjgtMS43LDMuOS0xLjcsNi40YzAsMi41LDAuNiw0LjcsMS44LDYuOGMxLjIsMi4xLDMuMSwzLjcsNS42LDUmI3hkOyYjeGE7JiN4OTsmI3g5O0M5MzIuMSwyMjUuNyw5MzUuMywyMjYuMyw5MzkuMiwyMjYuM3oiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNMTAwNC4xLDIzOC43bDI0LTM3LjZoMTkuNGwtMjMuOCwzNy42SDEwMDQuMXogTTEwNjcuMiwyMzguN3YtMzNoLTE4LjhjLTIuMiwwLTQuOS0wLjEtOC0wLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMy4xLTAuMi02'+
			'LTAuNS04LjctMWMtNy4xLTEuMy0xMy00LjQtMTcuOC05LjNjLTQuOC00LjktNy4xLTExLjctNy4xLTIwLjNjMC04LjMsMi4yLTE1LDYuNy0yMC4xYzQuNS01LjEsMTAuMi04LjMsMTcuMS05LjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MzLTAuNyw2LjEtMS4xLDkuMi0xLjJjMy4xLTAuMSw1LjgtMC4xLDgtMC4xaDM3LjdsMC4xLDk1SDEwNjcuMnogTTEwNDYuNywxOTAuOWgyMC40di0zMi41aC0yMC40Yy0xLjMsMC0yLjksMC4xLTQuOCwwLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMS45LDAuMS0zLjcsMC40LTUuNSwxYy0xLjgsMC41LTMuNiwxLjUtNS4yLDIuOGMtMS43LDEuMy0zLDMuMS00LjEsNS'+
			'4xYy0xLjEsMi4xLTEuNiw0LjUtMS42LDcuMmMwLDQsMS4xLDcuNCwzLjQsMTAmI3hkOyYjeGE7JiN4OTsmI3g5O2MyLjMsMi42LDUsNC4zLDguMiw1LjFjMS43LDAuNSwzLjQsMC44LDUuMSwwLjlDMTA0NCwxOTAuOSwxMDQ1LjUsMTkwLjksMTA0Ni43LDE5MC45eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me.__14__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u0421\u0423 \u0421\u043f\u0430\u043b\u044c\u043d\u044f_\u041a\u043d\u043e\u043f\u043a\u0430 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f";
		el.ggDx=0;
		el.ggDy=45;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 29px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__14.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_13'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__14.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__14.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__14.style[domTransition]='opacity 0s';
				if (me.__14.ggCurrentLogicStateAlpha == 0) {
					me.__14.style.visibility=me.__14.ggVisible?'inherit':'hidden';
					me.__14.style.opacity=1;
				}
				else {
					me.__14.style.visibility="hidden";
					me.__14.style.opacity=0;
				}
			}
		}
		me.__14.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__13.appendChild(me.__14);
		el=me._svg_13=document.createElement('div');
		els=me._svg_13__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDIwIDE5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAxOTsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMD'+
			'AwL3N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2Rpc3BsYXk6bm9uZTt9JiN4ZDsKCS5zdDF7ZGlzcGxheTppbmxpbmU7ZmlsbDojMTkzNTVCO30mI3hkOwoJLnN0MntkaXNwbGF5OmlubGluZTtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7fSYjeGQ7Cgkuc3Qze2Rpc3BsYXk6aW5saW5lO30mI3hkOwoJLnN0NHtjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDEzMTM1ODc4NzgwMjQ5NDMxMzgwMDAwMDAxMzUxMzc2ODg2MzI1NjEyODM5NF8pO30mI3hkOwoJLnN0NXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cgkuc3Q2e2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjt9JiN4'+
			'ZDsKCS5zdDd7ZGlzcGxheTpub25lO2ZpbGw6IzFEMjMyOTt9JiN4ZDsKCS5zdDh7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAxNzI0MTQxMDQxOTA5ODg5OTk5NjAwMDAwMDY3MTY3NjIwMTQyNTgxNDQ2NjZfKTt9JiN4ZDsKCS5zdDl7ZmlsbDojMUQyMzI5O30mI3hkOwoJLnN0MTB7ZGlzcGxheTppbmxpbmU7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAwNzM3MTY4MDc4MTc3NzMxMDA0NTAwMDAwMTAzOTEyNjIxNTYyMTU0NjU4NzFfKTt9JiN4ZDsKCS5zdDExe2ZpbGw6IzMzMzMzMzt9JiN4ZDsKPC9zdHlsZT4KIDxnIGNsYXNzPSJzdDAiPgogIDxwYXRoIGQ9Ik0wLDUuMzZjMC0xLjI2LD'+
			'AtMS45LDAuMTQtMi40MmMwLjM3LTEuMzYsMS40NC0yLjQzLDIuOC0yLjhDMy40NiwwLDQuMSwwLDUuMzYsMGg5LjI4YzEuMjYsMCwxLjksMCwyLjQyLDAuMTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjM2LDAuMzcsMi40MywxLjQ0LDIuOCwyLjhDMjAsMy40NiwyMCw0LjEsMjAsNS4zNnY4LjI4YzAsMS4yNiwwLDEuOS0wLjE0LDIuNDJjLTAuMzcsMS4zNi0xLjQ0LDIuNDMtMi44LDIuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzE2LjU0LDE5LDE1LjksMTksMTQuNjQsMTlINS4zNmMtMS4yNiwwLTEuOSwwLTIuNDItMC4xNGMtMS4zNi0wLjM3LTIuNDMtMS40NC0yLjgtMi44QzAsMTUuNTQsMCwxNC45'+
			'LDAsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNMC41LDUuMzZjMC0xLjMsMC0xLjg1LDAuMTItMi4yOGMwLjMzLTEuMTksMS4yNi0yLjEzLDIuNDUtMi40NUMzLjUxLDAuNSw0LjA2LDAuNSw1LjM2LDAuNWg5LjI4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4zLDAsMS44NSwwLDIuMjgsMC4xMmMxLjE5LDAuMzMsMi4xMywxLjI2LDIuNDUsMi40NWMwLjEyLDAuNDQsMC4xMiwwLjk5LDAuMTIsMi4yOHY4LjI4YzAsMS4zLDAsMS44NS0wLjEyLDIuMjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zMywxLjE5LTEuMjYsMi4xMy0yLjQ1LDIuNDVjLTAuNDQsMC4xMi0wLjk5LDAuMT'+
			'ItMi4yOCwwLjEySDUuMzZjLTEuMywwLTEuODUsMC0yLjI4LTAuMTJjLTEuMTktMC4zMy0yLjEzLTEuMjYtMi40NS0yLjQ1JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMC41LDE1LjQ5LDAuNSwxNC45NCwwLjUsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDIiLz4KICA8ZyBjbGFzcz0ic3QzIj4KICAgPGRlZnM+CiAgICA8cmVjdCB4PSI0LjUiIHk9IjMuNSIgaGVpZ2h0PSIxMSIgaWQ9IlNWR0lEXzFfIiB3aWR0aD0iMTEiLz4KICAgPC9kZWZzPgogICA8Y2xpcFBhdGggaWQ9IlNWR0lEXzAwMDAwMTQxNDE0NzQwNjUzMjAzNzgzMDAwMDAwMDA3MDAyNDYzMTQ3MjM2OTk3MDE0XyI+CiAgICA8dXNlIHhsaW5r'+
			'OmhyZWY9IiNTVkdJRF8xXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CiAgIDwvY2xpcFBhdGg+CiAgIDxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDE0MTQxNDc0MDY1MzIwMzc4MzAwMDAwMDAwNzAwMjQ2MzE0NzIzNjk5NzAxNF8pOyI+CiAgICA8cGF0aCBkPSJNMTQuMTIsOS41OWgtMy41NHYzLjU0SDkuNDFWOS41OUg1Ljg4VjguNDFoMy41NFY0Ljg4aDEuMTh2My41NGgzLjU0VjkuNTl6IiBjbGFzcz0ic3Q1Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8ZyBjbGFzcz0ic3QwIj4KICA8cGF0aCBkPSJNNDAuOTksMTguMTVIMjkuNDVjLTEuNTksMC0yLjg4LTEuMj'+
			'ktMi44OC0yLjg4VjMuNzNjMC0xLjU5LDEuMjktMi44OCwyLjg4LTIuODhoMTEuNTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjU5LDAsMi44OCwxLjI5LDIuODgsMi44OHYxMS41NEM0My44NywxNi44Niw0Mi41OCwxOC4xNSw0MC45OSwxOC4xNXoiIGNsYXNzPSJzdDYiLz4KIDwvZz4KIDxwYXRoIGQ9Ik0zNi43OCwxMS4zMWwtMS45My0xLjkzbDEuOTMtMS45M2wtMC41OS0wLjU5bC0yLjUyLDIuNTJsMi41MiwyLjUyTDM2Ljc4LDExLjMxeiIgY2xhc3M9InN0NyIvPgogPGcgY2xhc3M9InN0MCI+CiAgPHBhdGggZD0iTTMuNzEsMC4wN2gxMi41OGMxLjc0LDAsMy4xNCwxLjQxLDMuMTQsMy4xNHYx'+
			'Mi41OGMwLDEuNzQtMS40MSwzLjE0LTMuMTQsMy4xNEgzLjcxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTEuNzQsMC0zLjE0LTEuNDEtMy4xNC0zLjE0VjMuMjFDMC41NywxLjQ3LDEuOTcsMC4wNywzLjcxLDAuMDd6IiBjbGFzcz0ic3Q2Ii8+CiAgPGcgY2xhc3M9InN0MyI+CiAgIDxkZWZzPgogICAgPHJlY3QgeD0iNi44NiIgeT0iNi4zNiIgaGVpZ2h0PSI2LjI5IiBpZD0iU1ZHSURfMDAwMDAwNTI4MjA4MzMxMDAwNDczNTU2NjAwMDAwMTYxNzA1NDMxNzg4ODkyODYwMzBfIiB3aWR0aD0iNi4yOSIvPgogICA8L2RlZnM+CiAgIDxjbGlwUGF0aCBpZD0iU1ZHSURfMDAwMDAwOTM4NjY3MzcyOTc2OT'+
			'k0MzYwMzAwMDAwMDczMTQxMTg3OTU3MDM2NTM1NDFfIj4KICAgIDx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzAwMDAwMDUyODIwODMzMTAwMDQ3MzU1NjYwMDAwMDE2MTcwNTQzMTc4ODg5Mjg2MDMwXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CiAgIDwvY2xpcFBhdGg+CiAgIDxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDA5Mzg2NjczNzI5NzY5OTQzNjAzMDAwMDAwNzMxNDExODc5NTcwMzY1MzU0MV8pOyI+CiAgICA8cGF0aCBkPSJNMTIuMzYsOS45MUg3LjY0VjkuMjRoNC43MlY5LjkxeiIgY2xhc3M9InN0OSIvPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcgY2xh'+
			'c3M9InN0MCI+CiAgPGRlZnM+CiAgIDxyZWN0IHg9IjYuODYiIHk9IjYuMzYiIGhlaWdodD0iNi4yOSIgaWQ9IlNWR0lEXzAwMDAwMDI4MzA2NTc5NDUwMDY1MjA0NDEwMDAwMDEzNDg2NDQ1NzEzMDcyNTAxOTE5XyIgd2lkdGg9IjYuMjkiLz4KICA8L2RlZnM+CiAgPGNsaXBQYXRoIGNsYXNzPSJzdDMiIGlkPSJTVkdJRF8wMDAwMDEwNzU4MTE1MzcxNjM3NDE0MjQ0MDAwMDAxMTg0NDI1MTE4NTIwMzgyNTU0Ml8iPgogICA8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8wMDAwMDAyODMwNjU3OTQ1MDA2NTIwNDQxMDAwMDAxMzQ4NjQ0NTcxMzA3MjUwMTkxOV8iIHN0eWxlPSJvdmVyZmxvdzp2aXNpYm'+
			'xlOyIvPgogIDwvY2xpcFBhdGg+CiAgPGcgc3R5bGU9ImRpc3BsYXk6aW5saW5lO2NsaXAtcGF0aDp1cmwoI1NWR0lEXzAwMDAwMTA3NTgxMTUzNzE2Mzc0MTQyNDQwMDAwMDExODQ0MjUxMTg1MjAzODI1NTQyXyk7Ij4KICAgPHBhdGggZD0iTTEwLjQxLDcuMTR2NC43Mkg5Ljc0VjcuMTRIMTAuNDF6IiBjbGFzcz0ic3Q5Ii8+CiAgPC9nPgogPC9nPgogPGc+CiAgPHBhdGggZD0iTTAuNTMsMTUuODRWMy4yMWMwLTEuNzQsMS40MS0zLjE2LDMuMTYtMy4xNmgxMi42M2MxLjc0LDAsMy4xNiwxLjQxLDMuMTYsMy4xNnYxMi42MyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMS43NC0xLjQxLDMuMTYtMy4x'+
			'NiwzLjE2SDMuNjhDMS45NCwxOSwwLjUzLDE3LjU5LDAuNTMsMTUuODR6IiBjbGFzcz0ic3QxMSIvPgogPC9nPgogPHBhdGggZD0iTTguMDEsMTEuMjNsMi4xMS0yLjExbDIuMTEsMi4xMWwwLjY1LTAuNjVsLTIuNzYtMi43NmwtMi43NiwyLjc2TDguMDEsMTEuMjN6IiBjbGFzcz0ic3Q1Ii8+Cjwvc3ZnPgo=';
		me._svg_13__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 47px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_13.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__13.appendChild(me._svg_13);
		me.__div = me.__13;
	};
	function SkinHotspotClass__11(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__11=document.createElement('div');
		el.ggId="\u0421\u0423 \u0421\u043f\u0430\u043b\u044c\u043d\u044f_\u0425\u043e\u0442\u043f\u043e\u0438\u043d\u0442";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__11.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__11.onclick=function (e) {
			player.openNext("{node13}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me.__11.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me.__11.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_11']=true;
			me._text_10.logicBlock_alpha();
			me.__12.logicBlock_alpha();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me.__11.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_11']=false;
			me._text_10.logicBlock_alpha();
			me.__12.logicBlock_alpha();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me.__11.ontouchend=function (e) {
			me.elementMouseOver['_11']=false;
			me._text_10.logicBlock_alpha();
			me.__12.logicBlock_alpha();
		}
		me.__11.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_10=document.createElement('div');
		els=me._text_10__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='background: #333333;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_10.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_10.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_10.ggUpdateText();
		});
		el.appendChild(els);
		me._text_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_10.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_11'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._text_10.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._text_10.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._text_10.style[domTransition]='opacity 0s';
				if (me._text_10.ggCurrentLogicStateAlpha == 0) {
					me._text_10.style.visibility=me._text_10.ggVisible?'inherit':'hidden';
					me._text_10.style.opacity=1;
				}
				else {
					me._text_10.style.visibility="hidden";
					me._text_10.style.opacity=0;
				}
			}
		}
		me._text_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__11.appendChild(me._text_10);
		el=me.__12=document.createElement('div');
		els=me.__12__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjQuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEzNTIuNiAzNTAuNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTM1Mi42IDM1MC43OyIgeG1sbnM9Imh0dHA6Ly'+
			'93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMzMzMzMzO30mI3hkOwoJLnN0MXtmaWxsOiNFMEUwRTA7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBkPSJNODAuMiwwaDExOTIuM2M0NC4zLDAsODAuMiwzNS45LDgwLjIsODAuMnYxOTAuNGMwLDQ0LjMtMzUuOSw4MC4yLTgwLjIsODAuMkg4MC4yQzM1LjksMzUwLjcsMCwzMTQuOCwwLDI3MC41JiN4ZDsmI3hhOyYjeDk7VjgwLjJDMCwzNS45LDM1LjksMCw4MC4yLDB6IiBjbGFzcz0ic3QwIi8+CiA8Zz4KICA8cGF0aCBkPSJNNDM2LjYsMjE2LjFWMTEwLjVoLTQwLjdWOTMuOGg5OS4y'+
			'djE2LjdoLTQwLjd2MTA1LjdINDM2LjZ6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTUwOS4yLDI1Ni45bDE3LjgtNDguNGwwLjMsMTQuM2wtNDAtOTguNWgxOC41bDI5LjksNzYuMWgtNS40bDI4LjYtNzYuMWgxOGwtNTAuNywxMzIuNkg1MDkuMnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNjEyLjYsMjE4LjdjLTYuOCwwLTEyLjUtMS4zLTE3LjEtMy44cy04LjEtNS45LTEwLjQtMTBjLTIuNC00LjItMy41LTguNy0zLjUtMTMuN2MwLTQuNiwwLjgtOC43LDIuNS0xMi4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS42LTMuNSw0LjEtNi41LDcuMy05YzMuMi0yLjUsNy4yLTQuNSwxMS45LT'+
			'ZjNC4xLTEuMiw4LjctMi4yLDEzLjktMy4xYzUuMi0wLjksMTAuNi0xLjgsMTYuMy0yLjVjNS43LTAuOCwxMS4zLTEuNiwxNy0yLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2wtNi41LDMuNmMwLjEtNy4yLTEuNC0xMi41LTQuNS0xNmMtMy4xLTMuNS04LjUtNS4yLTE2LjItNS4yYy00LjgsMC05LjIsMS4xLTEzLjMsMy40Yy00LDIuMi02LjgsNS45LTguNCwxMS4xbC0xNi42LTUuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzIuMy03LjksNi42LTE0LjEsMTMtMTguOGM2LjQtNC42LDE0LjktNywyNS41LTdjOC4yLDAsMTUuNCwxLjQsMjEuNSw0LjJjNi4xLDIuOCwxMC42LDcuMiwxMy40LDEzLjNjMS41LDMs'+
			'Mi40LDYuMiwyLjcsOS41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDMuMywwLjUsNi45LDAuNSwxMC44djU2LjVoLTE1Ljd2LTIxbDMuMSwyLjdjLTMuOCw3LTguNiwxMi4zLTE0LjUsMTUuN0M2MjguNCwyMTcsNjIxLjEsMjE4LjcsNjEyLjYsMjE4Ljd6IE02MTUuNywyMDQuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzUsMCw5LjQtMC45LDEzLTIuN2MzLjYtMS44LDYuNS00LjEsOC44LTYuOGMyLjItMi44LDMuNy01LjcsNC4zLTguN2MxLTIuNywxLjUtNS44LDEuNy05LjJjMC4xLTMuNCwwLjItNi4xLDAuMi04LjJsNS44LDIuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy01LjYsMC44LTEwLjcsMS42LT'+
			'E1LjMsMi4zcy04LjcsMS4zLTEyLjUsMmMtMy43LDAuNy03LDEuNC05LjksMi4zYy0yLjQsMC44LTQuNiwxLjktNi41LDMuMWMtMS45LDEuMi0zLjQsMi42LTQuNSw0LjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMS4xLDEuNy0xLjcsMy44LTEuNyw2LjJjMCwyLjQsMC42LDQuNiwxLjgsNi42YzEuMiwyLDMsMy42LDUuNCw0LjhDNjA4LjgsMjAzLjYsNjExLjksMjA0LjIsNjE1LjcsMjA0LjJ6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTY3NSwyMTYuMXYtMTVjMy40LDAuNiw2LDAuNSw3LjgtMC4zYzEuOC0wLjgsMy4xLTIuMyw0LTQuNWMwLjktMi4yLDEuNi01LjEsMi4zLTguNmMxLTUuMiwx'+
			'LjgtMTEsMi41LTE3LjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjctNi42LDEuMy0xMy44LDEuOS0yMS41YzAuNi03LjcsMS4xLTE1LjgsMS41LTI0LjJoNjZ2OTEuOGgtMTcuOXYtNzUuMWgtMzIuMWMtMC4zLDQuNS0wLjcsOS4yLTEuMSwxNC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCw1LTAuOSwxMC0xLjQsMTQuOWMtMC41LDQuOS0xLDkuNS0xLjYsMTMuOWMtMC42LDQuMy0xLjIsOC0xLjgsMTFjLTEuMSw2LjEtMi44LDExLTUsMTQuNmMtMi4yLDMuNi01LjMsNS45LTkuMiw3JiN4ZDsmI3hhOyYjeDk7JiN4OTtDNjg2LjgsMjE3LjgsNjgxLjYsMjE3LjYsNjc1LDIxNi4xeiIgY2xhc3M9In'+
			'N0MSIvPgogIDxwYXRoIGQ9Ik04MjUuNCwyMTguN2MtOS4xLDAtMTcuMS0yLTI0LTZjLTYuOS00LTEyLjItOS42LTE2LjEtMTYuN2MtMy44LTcuMi01LjctMTUuNS01LjctMjQuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMTAsMS45LTE4LjcsNS43LTI2LjFjMy44LTcuNCw5LTEzLjEsMTUuOC0xNy4xYzYuNy00LDE0LjYtNiwyMy41LTZjOS40LDAsMTcuMywyLjIsMjMuOSw2LjVjNi42LDQuMywxMS41LDEwLjUsMTQuNywxOC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMy4zLDgsNC41LDE3LjUsMy45LDI4LjVoLTE3Ljh2LTYuNWMtMC4xLTEwLjctMi4xLTE4LjUtNi4xLTIzLjZjLTMuOS01LjEtOS45'+
			'LTcuNi0xOC03LjZjLTguOSwwLTE1LjYsMi44LTIwLjEsOC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTQuNSw1LjYtNi43LDEzLjctNi43LDI0LjNjMCwxMC4xLDIuMiwxNy45LDYuNywyMy40YzQuNSw1LjUsMTAuOSw4LjMsMTkuNCw4LjNjNS42LDAsMTAuNC0xLjMsMTQuNC0zLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2M0LjEtMi41LDcuMi02LjEsOS41LTEwLjhsMTcuNCw1LjVjLTMuNiw4LjItOSwxNC42LTE2LjIsMTkuMUM4NDIuNCwyMTYuNCw4MzQuMywyMTguNyw4MjUuNCwyMTguN3ogTTc5Mi43LDE3NS4zdi0xMy45aDY1LjV2MTMuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7SDc5Mi43eiIgY2xhc3'+
			'M9InN0MSIvPgogIDxwYXRoIGQ9Ik05MDcuNSwyMTYuMXYtNzUuOGgtMzEuNHYtMTZoODAuNXYxNmgtMzEuNHY3NS44SDkwNy41eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me.__12__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u0421\u0423 \u0421\u043f\u0430\u043b\u044c\u043d\u044f_\u041a\u043d\u043e\u043f\u043a\u0430 \u043f\u0435\u0440\u0435\u043c\u0435\u0449\u0435\u043d\u0438\u044f";
		el.ggDx=0;
		el.ggDy=45;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 29px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__12.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_11'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__12.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__12.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__12.style[domTransition]='opacity 0s';
				if (me.__12.ggCurrentLogicStateAlpha == 0) {
					me.__12.style.visibility=me.__12.ggVisible?'inherit':'hidden';
					me.__12.style.opacity=1;
				}
				else {
					me.__12.style.visibility="hidden";
					me.__12.style.opacity=0;
				}
			}
		}
		me.__12.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__11.appendChild(me.__12);
		el=me._svg_12=document.createElement('div');
		els=me._svg_12__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDIwIDE5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAxOTsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMD'+
			'AwL3N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2Rpc3BsYXk6bm9uZTt9JiN4ZDsKCS5zdDF7ZGlzcGxheTppbmxpbmU7ZmlsbDojMTkzNTVCO30mI3hkOwoJLnN0MntkaXNwbGF5OmlubGluZTtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7fSYjeGQ7Cgkuc3Qze2Rpc3BsYXk6aW5saW5lO30mI3hkOwoJLnN0NHtjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDEzMTM1ODc4NzgwMjQ5NDMxMzgwMDAwMDAxMzUxMzc2ODg2MzI1NjEyODM5NF8pO30mI3hkOwoJLnN0NXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cgkuc3Q2e2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjt9JiN4'+
			'ZDsKCS5zdDd7ZGlzcGxheTpub25lO2ZpbGw6IzFEMjMyOTt9JiN4ZDsKCS5zdDh7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAxNzI0MTQxMDQxOTA5ODg5OTk5NjAwMDAwMDY3MTY3NjIwMTQyNTgxNDQ2NjZfKTt9JiN4ZDsKCS5zdDl7ZmlsbDojMUQyMzI5O30mI3hkOwoJLnN0MTB7ZGlzcGxheTppbmxpbmU7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAwNzM3MTY4MDc4MTc3NzMxMDA0NTAwMDAwMTAzOTEyNjIxNTYyMTU0NjU4NzFfKTt9JiN4ZDsKCS5zdDExe2ZpbGw6IzMzMzMzMzt9JiN4ZDsKPC9zdHlsZT4KIDxnIGNsYXNzPSJzdDAiPgogIDxwYXRoIGQ9Ik0wLDUuMzZjMC0xLjI2LD'+
			'AtMS45LDAuMTQtMi40MmMwLjM3LTEuMzYsMS40NC0yLjQzLDIuOC0yLjhDMy40NiwwLDQuMSwwLDUuMzYsMGg5LjI4YzEuMjYsMCwxLjksMCwyLjQyLDAuMTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjM2LDAuMzcsMi40MywxLjQ0LDIuOCwyLjhDMjAsMy40NiwyMCw0LjEsMjAsNS4zNnY4LjI4YzAsMS4yNiwwLDEuOS0wLjE0LDIuNDJjLTAuMzcsMS4zNi0xLjQ0LDIuNDMtMi44LDIuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzE2LjU0LDE5LDE1LjksMTksMTQuNjQsMTlINS4zNmMtMS4yNiwwLTEuOSwwLTIuNDItMC4xNGMtMS4zNi0wLjM3LTIuNDMtMS40NC0yLjgtMi44QzAsMTUuNTQsMCwxNC45'+
			'LDAsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNMC41LDUuMzZjMC0xLjMsMC0xLjg1LDAuMTItMi4yOGMwLjMzLTEuMTksMS4yNi0yLjEzLDIuNDUtMi40NUMzLjUxLDAuNSw0LjA2LDAuNSw1LjM2LDAuNWg5LjI4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4zLDAsMS44NSwwLDIuMjgsMC4xMmMxLjE5LDAuMzMsMi4xMywxLjI2LDIuNDUsMi40NWMwLjEyLDAuNDQsMC4xMiwwLjk5LDAuMTIsMi4yOHY4LjI4YzAsMS4zLDAsMS44NS0wLjEyLDIuMjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zMywxLjE5LTEuMjYsMi4xMy0yLjQ1LDIuNDVjLTAuNDQsMC4xMi0wLjk5LDAuMT'+
			'ItMi4yOCwwLjEySDUuMzZjLTEuMywwLTEuODUsMC0yLjI4LTAuMTJjLTEuMTktMC4zMy0yLjEzLTEuMjYtMi40NS0yLjQ1JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMC41LDE1LjQ5LDAuNSwxNC45NCwwLjUsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDIiLz4KICA8ZyBjbGFzcz0ic3QzIj4KICAgPGRlZnM+CiAgICA8cmVjdCB4PSI0LjUiIHk9IjMuNSIgaGVpZ2h0PSIxMSIgaWQ9IlNWR0lEXzFfIiB3aWR0aD0iMTEiLz4KICAgPC9kZWZzPgogICA8Y2xpcFBhdGggaWQ9IlNWR0lEXzAwMDAwMTQxNDE0NzQwNjUzMjAzNzgzMDAwMDAwMDA3MDAyNDYzMTQ3MjM2OTk3MDE0XyI+CiAgICA8dXNlIHhsaW5r'+
			'OmhyZWY9IiNTVkdJRF8xXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CiAgIDwvY2xpcFBhdGg+CiAgIDxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDE0MTQxNDc0MDY1MzIwMzc4MzAwMDAwMDAwNzAwMjQ2MzE0NzIzNjk5NzAxNF8pOyI+CiAgICA8cGF0aCBkPSJNMTQuMTIsOS41OWgtMy41NHYzLjU0SDkuNDFWOS41OUg1Ljg4VjguNDFoMy41NFY0Ljg4aDEuMTh2My41NGgzLjU0VjkuNTl6IiBjbGFzcz0ic3Q1Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8ZyBjbGFzcz0ic3QwIj4KICA8cGF0aCBkPSJNNDAuOTksMTguMTVIMjkuNDVjLTEuNTksMC0yLjg4LTEuMj'+
			'ktMi44OC0yLjg4VjMuNzNjMC0xLjU5LDEuMjktMi44OCwyLjg4LTIuODhoMTEuNTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjU5LDAsMi44OCwxLjI5LDIuODgsMi44OHYxMS41NEM0My44NywxNi44Niw0Mi41OCwxOC4xNSw0MC45OSwxOC4xNXoiIGNsYXNzPSJzdDYiLz4KIDwvZz4KIDxwYXRoIGQ9Ik0zNi43OCwxMS4zMWwtMS45My0xLjkzbDEuOTMtMS45M2wtMC41OS0wLjU5bC0yLjUyLDIuNTJsMi41MiwyLjUyTDM2Ljc4LDExLjMxeiIgY2xhc3M9InN0NyIvPgogPGcgY2xhc3M9InN0MCI+CiAgPHBhdGggZD0iTTMuNzEsMC4wN2gxMi41OGMxLjc0LDAsMy4xNCwxLjQxLDMuMTQsMy4xNHYx'+
			'Mi41OGMwLDEuNzQtMS40MSwzLjE0LTMuMTQsMy4xNEgzLjcxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTEuNzQsMC0zLjE0LTEuNDEtMy4xNC0zLjE0VjMuMjFDMC41NywxLjQ3LDEuOTcsMC4wNywzLjcxLDAuMDd6IiBjbGFzcz0ic3Q2Ii8+CiAgPGcgY2xhc3M9InN0MyI+CiAgIDxkZWZzPgogICAgPHJlY3QgeD0iNi44NiIgeT0iNi4zNiIgaGVpZ2h0PSI2LjI5IiBpZD0iU1ZHSURfMDAwMDAwNTI4MjA4MzMxMDAwNDczNTU2NjAwMDAwMTYxNzA1NDMxNzg4ODkyODYwMzBfIiB3aWR0aD0iNi4yOSIvPgogICA8L2RlZnM+CiAgIDxjbGlwUGF0aCBpZD0iU1ZHSURfMDAwMDAwOTM4NjY3MzcyOTc2OT'+
			'k0MzYwMzAwMDAwMDczMTQxMTg3OTU3MDM2NTM1NDFfIj4KICAgIDx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzAwMDAwMDUyODIwODMzMTAwMDQ3MzU1NjYwMDAwMDE2MTcwNTQzMTc4ODg5Mjg2MDMwXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CiAgIDwvY2xpcFBhdGg+CiAgIDxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDA5Mzg2NjczNzI5NzY5OTQzNjAzMDAwMDAwNzMxNDExODc5NTcwMzY1MzU0MV8pOyI+CiAgICA8cGF0aCBkPSJNMTIuMzYsOS45MUg3LjY0VjkuMjRoNC43MlY5LjkxeiIgY2xhc3M9InN0OSIvPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcgY2xh'+
			'c3M9InN0MCI+CiAgPGRlZnM+CiAgIDxyZWN0IHg9IjYuODYiIHk9IjYuMzYiIGhlaWdodD0iNi4yOSIgaWQ9IlNWR0lEXzAwMDAwMDI4MzA2NTc5NDUwMDY1MjA0NDEwMDAwMDEzNDg2NDQ1NzEzMDcyNTAxOTE5XyIgd2lkdGg9IjYuMjkiLz4KICA8L2RlZnM+CiAgPGNsaXBQYXRoIGNsYXNzPSJzdDMiIGlkPSJTVkdJRF8wMDAwMDEwNzU4MTE1MzcxNjM3NDE0MjQ0MDAwMDAxMTg0NDI1MTE4NTIwMzgyNTU0Ml8iPgogICA8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8wMDAwMDAyODMwNjU3OTQ1MDA2NTIwNDQxMDAwMDAxMzQ4NjQ0NTcxMzA3MjUwMTkxOV8iIHN0eWxlPSJvdmVyZmxvdzp2aXNpYm'+
			'xlOyIvPgogIDwvY2xpcFBhdGg+CiAgPGcgc3R5bGU9ImRpc3BsYXk6aW5saW5lO2NsaXAtcGF0aDp1cmwoI1NWR0lEXzAwMDAwMTA3NTgxMTUzNzE2Mzc0MTQyNDQwMDAwMDExODQ0MjUxMTg1MjAzODI1NTQyXyk7Ij4KICAgPHBhdGggZD0iTTEwLjQxLDcuMTR2NC43Mkg5Ljc0VjcuMTRIMTAuNDF6IiBjbGFzcz0ic3Q5Ii8+CiAgPC9nPgogPC9nPgogPGc+CiAgPHBhdGggZD0iTTAuNTMsMTUuODRWMy4yMWMwLTEuNzQsMS40MS0zLjE2LDMuMTYtMy4xNmgxMi42M2MxLjc0LDAsMy4xNiwxLjQxLDMuMTYsMy4xNnYxMi42MyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMS43NC0xLjQxLDMuMTYtMy4x'+
			'NiwzLjE2SDMuNjhDMS45NCwxOSwwLjUzLDE3LjU5LDAuNTMsMTUuODR6IiBjbGFzcz0ic3QxMSIvPgogPC9nPgogPHBhdGggZD0iTTguMDEsMTEuMjNsMi4xMS0yLjExbDIuMTEsMi4xMWwwLjY1LTAuNjVsLTIuNzYtMi43NmwtMi43NiwyLjc2TDguMDEsMTEuMjN6IiBjbGFzcz0ic3Q1Ii8+Cjwvc3ZnPgo=';
		me._svg_12__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 47px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_12.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__11.appendChild(me._svg_12);
		me.__div = me.__11;
	};
	function SkinHotspotClass__9(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me.__9=document.createElement('div');
		el.ggId="\u0413\u043e\u0441\u0442\u0438\u043d\u0430\u044f_\u0425\u043e\u0442\u0441\u043f\u043e\u0442";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__9.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me.__9.onclick=function (e) {
			player.openNext("{node9}","");
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me.__9.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me.__9.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['_9']=true;
			me._text_1.logicBlock_alpha();
			me.__10.logicBlock_alpha();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me.__9.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['_9']=false;
			me._text_1.logicBlock_alpha();
			me.__10.logicBlock_alpha();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me.__9.ontouchend=function (e) {
			me.elementMouseOver['_9']=false;
			me._text_1.logicBlock_alpha();
			me.__10.logicBlock_alpha();
		}
		me.__9.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggDx=0;
		el.ggDy=40;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 20px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+='background: #333333;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		player.addListener('changenode', function() {
			me._text_1.ggUpdateText();
		});
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._text_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_9'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._text_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._text_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._text_1.style[domTransition]='opacity 0s';
				if (me._text_1.ggCurrentLogicStateAlpha == 0) {
					me._text_1.style.visibility=me._text_1.ggVisible?'inherit':'hidden';
					me._text_1.style.opacity=1;
				}
				else {
					me._text_1.style.visibility="hidden";
					me._text_1.style.opacity=0;
				}
			}
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth + 0;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__9.appendChild(me._text_1);
		el=me.__10=document.createElement('div');
		els=me.__10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDEzNTIuNiAzNTAuNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTM1Mi42IDM1MC43OyIgeG1sbnM9Imh0dHA6Ly'+
			'93d3cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojMzMzMzMzO30mI3hkOwoJLnN0MXtmaWxsOiNFMEUwRTA7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBkPSJNODAuMiwwaDExOTIuM2M0NC4zLDAsODAuMiwzNS45LDgwLjIsODAuMnYxOTAuNGMwLDQ0LjMtMzUuOSw4MC4yLTgwLjIsODAuMkg4MC4yQzM1LjksMzUwLjcsMCwzMTQuOCwwLDI3MC41JiN4ZDsmI3hhOyYjeDk7VjgwLjJDMCwzNS45LDM1LjksMCw4MC4yLDB6IiBjbGFzcz0ic3QwIi8+CiA8Zz4KICA8cGF0aCBkPSJNMzI0LDIzMS4ydi0xMTRoNzIuOHYxNS42aC01Ni4zdjk4'+
			'LjRIMzI0eiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik00MzUuOSwyMzMuNWMtOC41LDAtMTYtMS45LTIyLjItNS44Yy02LjMtMy45LTExLjEtOS4yLTE0LjUtMTZjLTMuNC02LjgtNS4xLTE0LjYtNS4xLTIzLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTguOSwxLjctMTYuOCw1LjItMjMuNmMzLjUtNi44LDguNC0xMi4xLDE0LjYtMTUuOGM2LjMtMy44LDEzLjYtNS43LDIyLTUuN2M4LjUsMCwxNiwxLjksMjIuMiw1LjhjNi4zLDMuOSwxMS4xLDkuMiwxNC42LDE1LjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MzLjQsNi43LDUuMSwxNC41LDUuMSwyMy40YzAsOC45LTEuNywxNi44LTUuMiwyMy42Yy'+
			'0zLjUsNi44LTguMywxMi4xLTE0LjYsMTUuOUM0NTEuOCwyMzEuNiw0NDQuNCwyMzMuNSw0MzUuOSwyMzMuNXomI3hkOyYjeGE7JiN4OTsmI3g5OyBNNDM1LjksMjE3LjljOC4yLDAsMTQuMy0yLjgsMTguMy04LjNjNC01LjUsNi4xLTEyLjYsNi4xLTIxLjNjMC04LjktMi0xNi4xLTYuMS0yMS40Yy00LjEtNS4zLTEwLjItOC0xOC4yLTgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNS41LDAtMTAuMSwxLjMtMTMuNywzLjhjLTMuNiwyLjUtNi4zLDYtOCwxMC40Yy0xLjcsNC40LTIuNiw5LjUtMi42LDE1LjNjMCw5LDIuMSwxNi4xLDYuMiwyMS41JiN4ZDsmI3hhOyYjeDk7JiN4OTtDNDIxLjksMjE1LjIs'+
			'NDI4LDIxNy45LDQzNS45LDIxNy45eiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik01MzMuOCwyMzMuNWMtOC44LDAtMTYuMi0xLjktMjIuMy01LjljLTYuMS0zLjktMTAuOC05LjMtMTQuMS0xNi4xYy0zLjItNi44LTQuOS0xNC41LTQuOS0yMy4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4xLTguOCwxLjctMTYuNiw1LjEtMjMuNGMzLjMtNi44LDguMS0xMi4xLDE0LjMtMTZjNi4yLTMuOCwxMy42LTUuOCwyMi4yLTUuOGM5LjMsMCwxNy4zLDIuMywyMy45LDdjNi42LDQuNiwxMSwxMSwxMy4xLDE5LjEmI3hkOyYjeGE7JiN4OTsmI3g5O2wtMTYuNSw0LjhjLTEuNi00LjgtNC4zLTguNS04LTExLj'+
			'JjLTMuNy0yLjctOC00LTEyLjgtNGMtNS40LDAtOS45LDEuMy0xMy40LDMuOGMtMy41LDIuNi02LjEsNi4xLTcuOCwxMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTEuNyw0LjQtMi42LDkuNS0yLjYsMTUuMmMwLjEsOC44LDIuMSwxNS45LDYuMSwyMS40YzQsNS40LDkuOSw4LjIsMTcuNyw4LjJjNS4zLDAsOS42LTEuMiwxMi45LTMuN2MzLjMtMi40LDUuOC02LDcuNi0xMC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMTYuOCwzLjljLTIuOCw4LjQtNy40LDE0LjctMTMuOSwxOS4yQzU1MC44LDIzMS4zLDU0MywyMzMuNSw1MzMuOCwyMzMuNXoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNjEwLjIs'+
			'MjMxLjJ2LTcwLjZINTgxdi0xNC45aDc1djE0LjloLTI5LjJ2NzAuNkg2MTAuMnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNzQ1LDE0NS42djg1LjVoLTE1Ljl2LTU5LjVsLTQyLjgsNTkuNWgtMTMuNXYtODUuNWgxNS45djU4LjNsNDIuOC01OC4zSDc0NXoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNzY5LDIzMS4ydi04NS41aDE2LjV2MzQuOWg0MS43di0zNC45aDE2LjV2ODUuNWgtMTYuNXYtMzVoLTQxLjd2MzVINzY5eiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik04OTIsMjMzLjVjLTYuMywwLTExLjYtMS4yLTE1LjktMy41Yy00LjMtMi4zLTcuNS01LjUtOS43LTkuM2MtMi'+
			'4yLTMuOS0zLjMtOC4xLTMuMy0xMi44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC00LjMsMC44LTguMSwyLjMtMTEuNGMxLjUtMy4zLDMuOC02LjEsNi44LTguNGMzLTIuMyw2LjctNC4yLDExLjEtNS42YzMuOC0xLjEsOC4xLTIuMSwxMi45LTIuOWM0LjgtMC44LDkuOS0xLjYsMTUuMi0yLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2M1LjMtMC43LDEwLjYtMS41LDE1LjgtMi4ybC02LDMuM2MwLjEtNi43LTEuMy0xMS43LTQuMi0xNC45Yy0yLjktMy4zLTgtNC45LTE1LjEtNC45Yy00LjUsMC04LjYsMS0xMi4zLDMuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0zLjcsMi4xLTYuNCw1LjUtNy44LDEwLjNsLTE1'+
			'LjQtNC43YzIuMS03LjMsNi4xLTEzLjIsMTIuMS0xNy41YzUuOS00LjMsMTMuOC02LjUsMjMuNy02LjVjNy43LDAsMTQuMywxLjMsMjAsMy45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjNS43LDIuNiw5LjgsNi43LDEyLjUsMTIuNGMxLjQsMi44LDIuMiw1LjgsMi41LDguOWMwLjMsMy4xLDAuNSw2LjUsMC41LDEwLjF2NTIuN2gtMTQuNnYtMTkuNmwyLjgsMi41Yy0zLjUsNi42LTgsMTEuNC0xMy41LDE0LjYmI3hkOyYjeGE7JiN4OTsmI3g5O0M5MDYuNywyMzEuOSw5MDAsMjMzLjUsODkyLDIzMy41eiBNODk0LjksMjIwYzQuNywwLDguNy0wLjgsMTIuMS0yLjVjMy40LTEuNyw2LjEtMy44LDguMi02Lj'+
			'RjMi4xLTIuNiwzLjQtNS4zLDQtOC4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC45LTIuNSwxLjQtNS40LDEuNS04LjZjMC4xLTMuMiwwLjItNS43LDAuMi03LjZsNS40LDJjLTUuMiwwLjgtMTAsMS41LTE0LjIsMi4xYy00LjMsMC42LTguMSwxLjMtMTEuNiwxLjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMy41LDAuNi02LjUsMS4zLTkuMiwyLjJjLTIuMywwLjgtNC4zLDEuNy02LjEsMi44Yy0xLjgsMS4xLTMuMiwyLjUtNC4yLDRjLTEsMS42LTEuNSwzLjUtMS41LDUuOGMwLDIuMiwwLjYsNC4zLDEuNyw2LjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjEsMS45LDIuOCwzLjQsNS4xLDQuNUM4ODguNSwy'+
			'MTkuNCw4OTEuNCwyMjAsODk0LjksMjIweiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik05NTUuMiwyMzEuMmwyMS42LTMzLjhoMTcuNWwtMjEuNSwzMy44SDk1NS4yeiBNMTAxMiwyMzEuMnYtMjkuN0g5OTVjLTIsMC00LjQtMC4xLTcuMi0wLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMi44LTAuMi01LjQtMC41LTcuOC0wLjljLTYuNC0xLjItMTEuNy0zLjktMTYtOC40Yy00LjMtNC40LTYuNC0xMC41LTYuNC0xOC4zYzAtNy41LDItMTMuNSw2LjEtMTguMWM0LTQuNiw5LjItNy41LDE1LjQtOC44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMi43LTAuNiw1LjQtMSw4LjMtMS4xYzIuOC0wLjEsNS4yLT'+
			'AuMSw3LjItMC4xaDM0bDAuMSw4NS41SDEwMTJ6IE05OTMuNiwxODguMmgxOC40di0yOS4yaC0xOC40Yy0xLjIsMC0yLjYsMC4xLTQuMywwLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMS43LDAuMS0zLjMsMC40LTQuOSwwLjljLTEuNiwwLjUtMy4yLDEuMy00LjcsMi41Yy0xLjUsMS4yLTIuNywyLjgtMy43LDQuNmMtMSwxLjktMS40LDQtMS40LDYuNWMwLDMuNiwxLDYuNiwzLjEsOSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzIuMSwyLjMsNC41LDMuOSw3LjQsNC42YzEuNSwwLjQsMy4xLDAuNyw0LjYsMC44Qzk5MS4yLDE4OC4xLDk5Mi41LDE4OC4yLDk5My42LDE4OC4yeiIgY2xhc3M9InN0MSIvPgog'+
			'PC9nPgo8L3N2Zz4K';
		me.__10__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u0413\u043e\u0441\u0442\u0438\u043d\u0430\u044f_1";
		el.ggDx=0;
		el.ggDy=45;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 29px;';
		hs+='left : -10000px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 350px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__10.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['_9'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me.__10.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me.__10.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me.__10.style[domTransition]='opacity 0s';
				if (me.__10.ggCurrentLogicStateAlpha == 0) {
					me.__10.style.visibility=me.__10.ggVisible?'inherit':'hidden';
					me.__10.style.opacity=1;
				}
				else {
					me.__10.style.visibility="hidden";
					me.__10.style.opacity=0;
				}
			}
		}
		me.__10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__9.appendChild(me.__10);
		el=me._svg_1=document.createElement('div');
		els=me._svg_1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDIwIDE5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAxOTsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMD'+
			'AwL3N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2Rpc3BsYXk6bm9uZTt9JiN4ZDsKCS5zdDF7ZGlzcGxheTppbmxpbmU7ZmlsbDojMTkzNTVCO30mI3hkOwoJLnN0MntkaXNwbGF5OmlubGluZTtmaWxsOm5vbmU7c3Ryb2tlOiNGRkZGRkY7fSYjeGQ7Cgkuc3Qze2Rpc3BsYXk6aW5saW5lO30mI3hkOwoJLnN0NHtjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDEzMTM1ODc4NzgwMjQ5NDMxMzgwMDAwMDAxMzUxMzc2ODg2MzI1NjEyODM5NF8pO30mI3hkOwoJLnN0NXtmaWxsOiNGRkZGRkY7fSYjeGQ7Cgkuc3Q2e2Rpc3BsYXk6aW5saW5lO2ZpbGw6I0ZGRkZGRjt9JiN4'+
			'ZDsKCS5zdDd7ZGlzcGxheTpub25lO2ZpbGw6IzFEMjMyOTt9JiN4ZDsKCS5zdDh7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAxNzI0MTQxMDQxOTA5ODg5OTk5NjAwMDAwMDY3MTY3NjIwMTQyNTgxNDQ2NjZfKTt9JiN4ZDsKCS5zdDl7ZmlsbDojMUQyMzI5O30mI3hkOwoJLnN0MTB7ZGlzcGxheTppbmxpbmU7Y2xpcC1wYXRoOnVybCgjU1ZHSURfMDAwMDAwNzM3MTY4MDc4MTc3NzMxMDA0NTAwMDAwMTAzOTEyNjIxNTYyMTU0NjU4NzFfKTt9JiN4ZDsKCS5zdDExe2ZpbGw6IzMzMzMzMzt9JiN4ZDsKPC9zdHlsZT4KIDxnIGNsYXNzPSJzdDAiPgogIDxwYXRoIGQ9Ik0wLDUuMzZjMC0xLjI2LD'+
			'AtMS45LDAuMTQtMi40MmMwLjM3LTEuMzYsMS40NC0yLjQzLDIuOC0yLjhDMy40NiwwLDQuMSwwLDUuMzYsMGg5LjI4YzEuMjYsMCwxLjksMCwyLjQyLDAuMTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjM2LDAuMzcsMi40MywxLjQ0LDIuOCwyLjhDMjAsMy40NiwyMCw0LjEsMjAsNS4zNnY4LjI4YzAsMS4yNiwwLDEuOS0wLjE0LDIuNDJjLTAuMzcsMS4zNi0xLjQ0LDIuNDMtMi44LDIuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzE2LjU0LDE5LDE1LjksMTksMTQuNjQsMTlINS4zNmMtMS4yNiwwLTEuOSwwLTIuNDItMC4xNGMtMS4zNi0wLjM3LTIuNDMtMS40NC0yLjgtMi44QzAsMTUuNTQsMCwxNC45'+
			'LDAsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNMC41LDUuMzZjMC0xLjMsMC0xLjg1LDAuMTItMi4yOGMwLjMzLTEuMTksMS4yNi0yLjEzLDIuNDUtMi40NUMzLjUxLDAuNSw0LjA2LDAuNSw1LjM2LDAuNWg5LjI4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4zLDAsMS44NSwwLDIuMjgsMC4xMmMxLjE5LDAuMzMsMi4xMywxLjI2LDIuNDUsMi40NWMwLjEyLDAuNDQsMC4xMiwwLjk5LDAuMTIsMi4yOHY4LjI4YzAsMS4zLDAsMS44NS0wLjEyLDIuMjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zMywxLjE5LTEuMjYsMi4xMy0yLjQ1LDIuNDVjLTAuNDQsMC4xMi0wLjk5LDAuMT'+
			'ItMi4yOCwwLjEySDUuMzZjLTEuMywwLTEuODUsMC0yLjI4LTAuMTJjLTEuMTktMC4zMy0yLjEzLTEuMjYtMi40NS0yLjQ1JiN4ZDsmI3hhOyYjeDk7JiN4OTtDMC41LDE1LjQ5LDAuNSwxNC45NCwwLjUsMTMuNjRWNS4zNnoiIGNsYXNzPSJzdDIiLz4KICA8ZyBjbGFzcz0ic3QzIj4KICAgPGRlZnM+CiAgICA8cmVjdCB4PSI0LjUiIHk9IjMuNSIgaGVpZ2h0PSIxMSIgaWQ9IlNWR0lEXzFfIiB3aWR0aD0iMTEiLz4KICAgPC9kZWZzPgogICA8Y2xpcFBhdGggaWQ9IlNWR0lEXzAwMDAwMTQxNDE0NzQwNjUzMjAzNzgzMDAwMDAwMDA3MDAyNDYzMTQ3MjM2OTk3MDE0XyI+CiAgICA8dXNlIHhsaW5r'+
			'OmhyZWY9IiNTVkdJRF8xXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CiAgIDwvY2xpcFBhdGg+CiAgIDxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDE0MTQxNDc0MDY1MzIwMzc4MzAwMDAwMDAwNzAwMjQ2MzE0NzIzNjk5NzAxNF8pOyI+CiAgICA8cGF0aCBkPSJNMTQuMTIsOS41OWgtMy41NHYzLjU0SDkuNDFWOS41OUg1Ljg4VjguNDFoMy41NFY0Ljg4aDEuMTh2My41NGgzLjU0VjkuNTl6IiBjbGFzcz0ic3Q1Ii8+CiAgIDwvZz4KICA8L2c+CiA8L2c+CiA8ZyBjbGFzcz0ic3QwIj4KICA8cGF0aCBkPSJNNDAuOTksMTguMTVIMjkuNDVjLTEuNTksMC0yLjg4LTEuMj'+
			'ktMi44OC0yLjg4VjMuNzNjMC0xLjU5LDEuMjktMi44OCwyLjg4LTIuODhoMTEuNTQmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjU5LDAsMi44OCwxLjI5LDIuODgsMi44OHYxMS41NEM0My44NywxNi44Niw0Mi41OCwxOC4xNSw0MC45OSwxOC4xNXoiIGNsYXNzPSJzdDYiLz4KIDwvZz4KIDxwYXRoIGQ9Ik0zNi43OCwxMS4zMWwtMS45My0xLjkzbDEuOTMtMS45M2wtMC41OS0wLjU5bC0yLjUyLDIuNTJsMi41MiwyLjUyTDM2Ljc4LDExLjMxeiIgY2xhc3M9InN0NyIvPgogPGcgY2xhc3M9InN0MCI+CiAgPHBhdGggZD0iTTMuNzEsMC4wN2gxMi41OGMxLjc0LDAsMy4xNCwxLjQxLDMuMTQsMy4xNHYx'+
			'Mi41OGMwLDEuNzQtMS40MSwzLjE0LTMuMTQsMy4xNEgzLjcxJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTEuNzQsMC0zLjE0LTEuNDEtMy4xNC0zLjE0VjMuMjFDMC41NywxLjQ3LDEuOTcsMC4wNywzLjcxLDAuMDd6IiBjbGFzcz0ic3Q2Ii8+CiAgPGcgY2xhc3M9InN0MyI+CiAgIDxkZWZzPgogICAgPHJlY3QgeD0iNi44NiIgeT0iNi4zNiIgaGVpZ2h0PSI2LjI5IiBpZD0iU1ZHSURfMDAwMDAwNTI4MjA4MzMxMDAwNDczNTU2NjAwMDAwMTYxNzA1NDMxNzg4ODkyODYwMzBfIiB3aWR0aD0iNi4yOSIvPgogICA8L2RlZnM+CiAgIDxjbGlwUGF0aCBpZD0iU1ZHSURfMDAwMDAwOTM4NjY3MzcyOTc2OT'+
			'k0MzYwMzAwMDAwMDczMTQxMTg3OTU3MDM2NTM1NDFfIj4KICAgIDx1c2UgeGxpbms6aHJlZj0iI1NWR0lEXzAwMDAwMDUyODIwODMzMTAwMDQ3MzU1NjYwMDAwMDE2MTcwNTQzMTc4ODg5Mjg2MDMwXyIgc3R5bGU9Im92ZXJmbG93OnZpc2libGU7Ii8+CiAgIDwvY2xpcFBhdGg+CiAgIDxnIHN0eWxlPSJjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDA5Mzg2NjczNzI5NzY5OTQzNjAzMDAwMDAwNzMxNDExODc5NTcwMzY1MzU0MV8pOyI+CiAgICA8cGF0aCBkPSJNMTIuMzYsOS45MUg3LjY0VjkuMjRoNC43MlY5LjkxeiIgY2xhc3M9InN0OSIvPgogICA8L2c+CiAgPC9nPgogPC9nPgogPGcgY2xh'+
			'c3M9InN0MCI+CiAgPGRlZnM+CiAgIDxyZWN0IHg9IjYuODYiIHk9IjYuMzYiIGhlaWdodD0iNi4yOSIgaWQ9IlNWR0lEXzAwMDAwMDI4MzA2NTc5NDUwMDY1MjA0NDEwMDAwMDEzNDg2NDQ1NzEzMDcyNTAxOTE5XyIgd2lkdGg9IjYuMjkiLz4KICA8L2RlZnM+CiAgPGNsaXBQYXRoIGNsYXNzPSJzdDMiIGlkPSJTVkdJRF8wMDAwMDEwNzU4MTE1MzcxNjM3NDE0MjQ0MDAwMDAxMTg0NDI1MTE4NTIwMzgyNTU0Ml8iPgogICA8dXNlIHhsaW5rOmhyZWY9IiNTVkdJRF8wMDAwMDAyODMwNjU3OTQ1MDA2NTIwNDQxMDAwMDAxMzQ4NjQ0NTcxMzA3MjUwMTkxOV8iIHN0eWxlPSJvdmVyZmxvdzp2aXNpYm'+
			'xlOyIvPgogIDwvY2xpcFBhdGg+CiAgPGcgc3R5bGU9ImRpc3BsYXk6aW5saW5lO2NsaXAtcGF0aDp1cmwoI1NWR0lEXzAwMDAwMTA3NTgxMTUzNzE2Mzc0MTQyNDQwMDAwMDExODQ0MjUxMTg1MjAzODI1NTQyXyk7Ij4KICAgPHBhdGggZD0iTTEwLjQxLDcuMTR2NC43Mkg5Ljc0VjcuMTRIMTAuNDF6IiBjbGFzcz0ic3Q5Ii8+CiAgPC9nPgogPC9nPgogPGc+CiAgPHBhdGggZD0iTTAuNTMsMTUuODRWMy4yMWMwLTEuNzQsMS40MS0zLjE2LDMuMTYtMy4xNmgxMi42M2MxLjc0LDAsMy4xNiwxLjQxLDMuMTYsMy4xNnYxMi42MyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMS43NC0xLjQxLDMuMTYtMy4x'+
			'NiwzLjE2SDMuNjhDMS45NCwxOSwwLjUzLDE3LjU5LDAuNTMsMTUuODR6IiBjbGFzcz0ic3QxMSIvPgogPC9nPgogPHBhdGggZD0iTTguMDEsMTEuMjNsMi4xMS0yLjExbDIuMTEsMi4xMWwwLjY1LTAuNjVsLTIuNzYtMi43NmwtMi43NiwyLjc2TDguMDEsMTEuMjN6IiBjbGFzcz0ic3Q1Ii8+Cjwvc3ZnPgo=';
		me._svg_1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 1";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 47px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me.__9.appendChild(me._svg_1);
		me.__div = me.__9;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='Спальня_Хотспот') {
			hotspot.skinid = 'Спальня_Хотспот';
			hsinst = new SkinHotspotClass__25(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot__25_mouseover();;
		} else
		if (hotspot.skinid=='Спальня_Хотспот_коридор') {
			hotspot.skinid = 'Спальня_Хотспот_коридор';
			hsinst = new SkinHotspotClass__24(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot__24_mouseover();;
		} else
		if (hotspot.skinid=='Кухня_Хотспот') {
			hotspot.skinid = 'Кухня_Хотспот';
			hsinst = new SkinHotspotClass__23(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot__23_mouseover();;
		} else
		if (hotspot.skinid=='Ванная_Хотспот') {
			hotspot.skinid = 'Ванная_Хотспот';
			hsinst = new SkinHotspotClass__22(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot__22_mouseover();;
		} else
		if (hotspot.skinid=='Прихожая_Хотспот') {
			hotspot.skinid = 'Прихожая_Хотспот';
			hsinst = new SkinHotspotClass__21(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot__21_mouseover();;
		} else
		if (hotspot.skinid=='Коридор_Хотпоинт') {
			hotspot.skinid = 'Коридор_Хотпоинт';
			hsinst = new SkinHotspotClass__19(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot__19_mouseover();;
		} else
		if (hotspot.skinid=='Детская_Хотпоинт') {
			hotspot.skinid = 'Детская_Хотпоинт';
			hsinst = new SkinHotspotClass__17(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot__17_mouseover();;
		} else
		if (hotspot.skinid=='Гардероб_Хотпоинт') {
			hotspot.skinid = 'Гардероб_Хотпоинт';
			hsinst = new SkinHotspotClass__15(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot__15_mouseover();;
		} else
		if (hotspot.skinid=='Столовая_Хотспот') {
			hotspot.skinid = 'Столовая_Хотспот';
			hsinst = new SkinHotspotClass__13(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot__13_mouseover();;
		} else
		if (hotspot.skinid=='СУ Спальня_Хотпоинт') {
			hotspot.skinid = 'СУ Спальня_Хотпоинт';
			hsinst = new SkinHotspotClass__11(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot__11_mouseover();;
		} else
		{
			hotspot.skinid = 'Гостиная_Хотспот';
			hsinst = new SkinHotspotClass__9(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot__9_mouseover();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['Спальня_Хотспот']) {
			var i;
			for(i = 0; i < hotspotTemplates['Спальня_Хотспот'].length; i++) {
				hotspotTemplates['Спальня_Хотспот'][i] = null;
			}
		}
		if(hotspotTemplates['Спальня_Хотспот_коридор']) {
			var i;
			for(i = 0; i < hotspotTemplates['Спальня_Хотспот_коридор'].length; i++) {
				hotspotTemplates['Спальня_Хотспот_коридор'][i] = null;
			}
		}
		if(hotspotTemplates['Кухня_Хотспот']) {
			var i;
			for(i = 0; i < hotspotTemplates['Кухня_Хотспот'].length; i++) {
				hotspotTemplates['Кухня_Хотспот'][i] = null;
			}
		}
		if(hotspotTemplates['Ванная_Хотспот']) {
			var i;
			for(i = 0; i < hotspotTemplates['Ванная_Хотспот'].length; i++) {
				hotspotTemplates['Ванная_Хотспот'][i] = null;
			}
		}
		if(hotspotTemplates['Прихожая_Хотспот']) {
			var i;
			for(i = 0; i < hotspotTemplates['Прихожая_Хотспот'].length; i++) {
				hotspotTemplates['Прихожая_Хотспот'][i] = null;
			}
		}
		if(hotspotTemplates['Коридор_Хотпоинт']) {
			var i;
			for(i = 0; i < hotspotTemplates['Коридор_Хотпоинт'].length; i++) {
				hotspotTemplates['Коридор_Хотпоинт'][i] = null;
			}
		}
		if(hotspotTemplates['Детская_Хотпоинт']) {
			var i;
			for(i = 0; i < hotspotTemplates['Детская_Хотпоинт'].length; i++) {
				hotspotTemplates['Детская_Хотпоинт'][i] = null;
			}
		}
		if(hotspotTemplates['Гардероб_Хотпоинт']) {
			var i;
			for(i = 0; i < hotspotTemplates['Гардероб_Хотпоинт'].length; i++) {
				hotspotTemplates['Гардероб_Хотпоинт'][i] = null;
			}
		}
		if(hotspotTemplates['Столовая_Хотспот']) {
			var i;
			for(i = 0; i < hotspotTemplates['Столовая_Хотспот'].length; i++) {
				hotspotTemplates['Столовая_Хотспот'][i] = null;
			}
		}
		if(hotspotTemplates['СУ Спальня_Хотпоинт']) {
			var i;
			for(i = 0; i < hotspotTemplates['СУ Спальня_Хотпоинт'].length; i++) {
				hotspotTemplates['СУ Спальня_Хотпоинт'][i] = null;
			}
		}
		if(hotspotTemplates['Гостиная_Хотспот']) {
			var i;
			for(i = 0; i < hotspotTemplates['Гостиная_Хотспот'].length; i++) {
				hotspotTemplates['Гостиная_Хотспот'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	function SkinElement_svg_9_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._svg_9=document.createElement('div');
		els=me._svg_9__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMSIgdmlld0JveD0iMCAwIDE5Ljg0IDE5Ljg0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogIzYwNjA2MDsKICAgICAgfQogICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxjaXJjbGUgcj0iOS45MiIgY3g9IjkuOTIiIGNsYXNzPSJjbHMtMiIgY3k9IjkuOTIiLz4KIDxwYXRoIG'+
			'Q9Im05LjkyLDFjNC45MiwwLDguOTIsNCw4LjkyLDguOTJzLTQsOC45Mi04LjkyLDguOTJTMSwxNC44NCwxLDkuOTIsNSwxLDkuOTIsMW0wLTFDNC40NCwwLDAsNC40NCwwLDkuOTJzNC40NCw5LjkyLDkuOTIsOS45Miw5LjkyLTQuNDQsOS45Mi05LjkyUzE1LjQsMCw5LjkyLDBoMFoiIGNsYXNzPSJjbHMtMSIvPgogPGNpcmNsZSByPSI0LjI1IiBjeD0iOS45MiIgY2xhc3M9ImNscy0xIiBjeT0iOS45MiIvPgo8L3N2Zz4K';
		me._svg_9__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		elo=me._svg_9__imgo=document.createElement('img');
		elo.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMSIgdmlld0JveD0iMCAwIDE5Ljg0IDE5Ljg0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogIzU3NzhiYjsKICAgICAgfQogICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxjaXJjbGUgcj0iOS45MiIgY3g9IjkuOTIiIGNsYXNzPSJjbHMtMiIgY3k9IjkuOTIiLz4KIDxwYXRoIG'+
			'Q9Im05LjkyLDFjNC45MiwwLDguOTIsNCw4LjkyLDguOTJzLTQsOC45Mi04LjkyLDguOTJTMSwxNC44NCwxLDkuOTIsNSwxLDkuOTIsMW0wLTFDNC40NCwwLDAsNC40NCwwLDkuOTJzNC40NCw5LjkyLDkuOTIsOS45Miw5LjkyLTQuNDQsOS45Mi05LjkyUzE1LjQsMCw5LjkyLDBoMFoiIGNsYXNzPSJjbHMtMSIvPgogPGNpcmNsZSByPSI0LjI1IiBjeD0iOS45MiIgY2xhc3M9ImNscy0xIiBjeT0iOS45MiIvPgo8L3N2Zz4K';
		me._svg_9__imgo.setAttribute('src',hs);
		elo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		elo['ondragstart']=function() { return false; };
		el.appendChild(elo);
		ela=me._svg_9__imga=document.createElement('img');
		ela.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMSIgdmlld0JveD0iMCAwIDE5Ljg0IDE5Ljg0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogIzE5MzU1YjsKICAgICAgfQogICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxjaXJjbGUgcj0iOS45MiIgY3g9IjkuOTIiIGNsYXNzPSJjbHMtMiIgY3k9IjkuOTIiLz4KIDxwYXRoIG'+
			'Q9Im05LjkyLDFjNC45MiwwLDguOTIsNCw4LjkyLDguOTJzLTQsOC45Mi04LjkyLDguOTJTMSwxNC44NCwxLDkuOTIsNSwxLDkuOTIsMW0wLTFDNC40NCwwLDAsNC40NCwwLDkuOTJzNC40NCw5LjkyLDkuOTIsOS45Miw5LjkyLTQuNDQsOS45Mi05LjkyUzE1LjQsMCw5LjkyLDBoMFoiIGNsYXNzPSJjbHMtMSIvPgogPGNpcmNsZSByPSI0LjI1IiBjeD0iOS45MiIgY2xhc3M9ImNscy0xIiBjeT0iOS45MiIvPgo8L3N2Zz4K';
		me._svg_9__imga.setAttribute('src',hs);
		ela.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;;');
		ela['ondragstart']=function() { return false; };
		el.appendChild(ela);
		el.ggId="Svg 9";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_9.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		me._svg_9.onclick=function (e) {
			player.openNext("{"+me.ggNodeId+"}","");
		}
		me._svg_9.onmouseover=function (e) {
			me._svg_9__img.style.visibility='hidden';
			me._svg_9__imgo.style.visibility='inherit';
			me.elementMouseOver['svg_9']=true;
		}
		me._svg_9.onmouseout=function (e) {
			me.__5.style[domTransition]='none';
			me.__5.style.visibility='hidden';
			me.__5.ggVisible=false;
			me.__1.style[domTransition]='none';
			me.__1.style.visibility='hidden';
			me.__1.ggVisible=false;
			me.__2.style[domTransition]='none';
			me.__2.style.visibility='hidden';
			me.__2.ggVisible=false;
			me.__7.style[domTransition]='none';
			me.__7.style.visibility='hidden';
			me.__7.ggVisible=false;
			me.__6.style[domTransition]='none';
			me.__6.style.visibility='hidden';
			me.__6.ggVisible=false;
			if (
				(
					((me.ggUserdata.title == "\u0414\u0435\u0442\u0441\u043a\u0430\u044f"))
				)
			) {
				me.__3.style[domTransition]='none';
				me.__3.style.visibility='hidden';
				me.__3.ggVisible=false;
			}
			if (
				(
					((me.ggUserdata.title == "\u0413\u0430\u0440\u0434\u0435\u0440\u043e\u0431"))
				)
			) {
				me.__4.style[domTransition]='none';
				me.__4.style.visibility='hidden';
				me.__4.ggVisible=false;
			}
			if (
				(
					((me.ggUserdata.title == "\u0421\u0443 \u0441\u043f\u0430\u043b\u044c\u043d\u044f"))
				)
			) {
				me.__.style[domTransition]='none';
				me.__.style.visibility='hidden';
				me.__.ggVisible=false;
			}
			me.__8.style[domTransition]='none';
			me.__8.style.visibility='hidden';
			me.__8.ggVisible=false;
			me.__6.style[domTransition]='none';
			me.__6.style.visibility='hidden';
			me.__6.ggVisible=false;
			me.__0.style[domTransition]='none';
			me.__0.style.visibility='hidden';
			me.__0.ggVisible=false;
			me._svg_9__img.style.visibility='inherit';
			me._svg_9__imgo.style.visibility='hidden';
			me._svg_9__imga.style.visibility='hidden';
			me.elementMouseOver['svg_9']=false;
		}
		me._svg_9.onmousedown=function (e) {
			me._svg_9__imga.style.visibility='inherit';
			me._svg_9__imgo.style.visibility='hidden';
		}
		me._svg_9.onmouseup=function (e) {
			me._svg_9__imga.style.visibility='hidden';
			if (skin.player.getHasTouch()) {
				me._svg_9__img.style.visibility='inherit';
			} else {
				me._svg_9__imgo.style.visibility='inherit';
			}
		}
		me._svg_9.ontouchend=function (e) {
			me.elementMouseOver['svg_9']=false;
		}
		me._svg_9.ggActivate=function () {
			if (
				(
					((player.getCurrentNode() == player.getCurrentNode()))
				)
			) {
				me._svg_10.style[domTransition]='none';
				me._svg_10.style.visibility=(Number(me._svg_10.style.opacity)>0||!me._svg_10.style.opacity)?'inherit':'hidden';
				me._svg_10.ggVisible=true;
			}
		}
		me._svg_9.ggUpdatePosition=function (useTransition) {
		}
		me._svg_9.ggNodeChange=function () {
			me._svg_10.style[domTransition]='none';
			me._svg_10.style.visibility='hidden';
			me._svg_10.ggVisible=false;
			if (me._svg_9.ggLastIsActive!=me._svg_9.ggIsActive()) {
				me._svg_9.ggLastIsActive=me._svg_9.ggIsActive();
				if (me._svg_9.ggIsActive()) {
					if (me._svg_9.ggActivate) me._svg_9.ggActivate();
				} else {
					if (me._svg_9.ggDeactivate) me._svg_9.ggDeactivate();
				}
			}
		}
		el=me._svg_10=document.createElement('div');
		els=me._svg_10__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0nVVRGLTgnPz4KPHN2ZyBkYXRhLW5hbWU9ItCh0LvQvtC5IDEiIGlkPSJf0KHQu9C+0LlfMSIgdmlld0JveD0iMCAwIDE5Ljg0IDE5Ljg0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogPGRlZnM+CiAgPHN0eWxlPgogICAgICAuY2xzLTEgewogICAgICAgIGZpbGw6ICNmZmY7CiAgICAgIH0KCiAgICAgIC5jbHMtMiB7CiAgICAgICAgZmlsbDogIzE5MzU1YjsKICAgICAgfQogICAgPC9zdHlsZT4KIDwvZGVmcz4KIDxjaXJjbGUgcj0iOS45MiIgY3g9IjkuOTIiIGNsYXNzPSJjbHMtMiIgY3k9IjkuOTIiLz4KIDxwYXRoIG'+
			'Q9Im05LjkyLDFjNC45MiwwLDguOTIsNCw4LjkyLDguOTJzLTQsOC45Mi04LjkyLDguOTJTMSwxNC44NCwxLDkuOTIsNSwxLDkuOTIsMW0wLTFDNC40NCwwLDAsNC40NCwwLDkuOTJzNC40NCw5LjkyLDkuOTIsOS45Miw5LjkyLTQuNDQsOS45Mi05LjkyUzE1LjQsMCw5LjkyLDBoMFoiIGNsYXNzPSJjbHMtMSIvPgogPGNpcmNsZSByPSI0LjI1IiBjeD0iOS45MiIgY2xhc3M9ImNscy0xIiBjeT0iOS45MiIvPgo8L3N2Zz4K';
		me._svg_10__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Svg 10";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._svg_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._svg_10.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._svg_9.appendChild(me._svg_10);
		el=me.__8=document.createElement('div');
		els=me.__8__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NS4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMDIuOSA2NS4zOyIgeG1sbnM9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojRjdGN0Y3O30mI3hkOwoJLnN0MXtmaWxsOiM2Qzc1N0Q7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBkPSJNMCwxOC40YzAtNC4zLDAtNi41LDAuNS04LjNjMS4zLTQuNyw0LjktOC40LDkuNi05LjZDMTEuOSwwLDE0LjEsMCwxOC40LDBoMTY2YzQuMywwLDYuNSwwLDguMywwLjUmI3hkOyYjeGE7JiN4OTtjNC43LDEuMyw4LjQsNC45LDkuNiw5LjZjMC41LDEuOCwwLjUsNCwwLjUsOC4zdjI4LjVjMCw0LjMsMCw2LjUtMC41LDguM2MtMS4zLDQuNy00LjksOC40LTkuNiw5LjZjLTEuOCwwLjUt'+
			'NCwwLjUtOC4zLDAuNWgtMTY2JiN4ZDsmI3hhOyYjeDk7Yy00LjMsMC02LjUsMC04LjMtMC41Yy00LjctMS4zLTguNC00LjktOS42LTkuNkMwLDUzLjQsMCw1MS4zLDAsNDYuOVYxOC40eiIgY2xhc3M9InN0MCIvPgogPGc+CiAgPHBhdGggZD0iTTU4LjYsNDAuMlYxNy42aDMuM3YxMC42bDkuNS0xMC42aDQuMWwtMTAsMTEuMWwxMC44LDExLjZINzJMNjEuOCwyOS40djEwLjhINTguNnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNzkuMyw0Ny44bDMuMy05bDAsMi42bC03LjQtMTguM2gzLjRsNS41LDE0LjFoLTFsNS4zLTE0LjFoMy4zbC05LjQsMjQuNkg3OS4zeiIgY2xhc3M9InN0MSIvPg'+
			'ogIDxwYXRoIGQ9Ik05Mi40LDQwLjJsNi40LTguNmwtNi4yLTguNGgzLjlsNC4yLDUuOGw0LjItNS44aDMuOWwtNi4yLDguNGw2LjQsOC42SDEwNWwtNC4zLTZsLTQuNCw2SDkyLjR6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTExMS40LDQwLjJ2LTE3aDMuM3Y2LjloOC4zdi02LjloMy4zdjE3SDEyM3YtN2gtOC4zdjdIMTExLjR6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTEyOS43LDQwLjJsNC4zLTYuN2gzLjVsLTQuMyw2LjdIMTI5Ljd6IE0xNDEsNDAuMnYtNS45aC0zLjRjLTAuNCwwLTAuOSwwLTEuNCwwYy0wLjYsMC0xLjEtMC4xLTEuNi0wLjImI3hkOyYjeGE7JiN4OTsmI3g5'+
			'O2MtMS4zLTAuMi0yLjMtMC44LTMuMi0xLjdjLTAuOS0wLjktMS4zLTIuMS0xLjMtMy42YzAtMS41LDAuNC0yLjcsMS4yLTMuNnMxLjgtMS41LDMuMS0xLjhjMC41LTAuMSwxLjEtMC4yLDEuNi0wLjJzMSwwLDEuNCwwaDYuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDAsMTdIMTQxeiBNMTM3LjQsMzEuN2gzLjd2LTUuOGgtMy43Yy0wLjIsMC0wLjUsMC0wLjksMHMtMC43LDAuMS0xLDAuMmMtMC4zLDAuMS0wLjYsMC4zLTAuOSwwLjVjLTAuMywwLjItMC41LDAuNS0wLjcsMC45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMiwwLjQtMC4zLDAuOC0wLjMsMS4zYzAsMC43LDAuMiwxLjMsMC42LDEuOGMwLj'+
			'QsMC41LDAuOSwwLjgsMS41LDAuOWMwLjMsMC4xLDAuNiwwLjEsMC45LDAuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7QzEzNi45LDMxLjcsMTM3LjIsMzEuNywxMzcuNCwzMS43eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me.__8__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u041a\u0443\u0445\u043d\u044f_\u0424\u043b\u0430\u0436\u0435\u043a";
		el.ggDx=50;
		el.ggDy=-30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 93px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__8.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._svg_9.appendChild(me.__8);
		el=me.__7=document.createElement('div');
		els=me.__7__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NS4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMDIuOSA2NS4zOyIgeG1sbnM9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojRjdGN0Y3O30mI3hkOwoJLnN0MXtmaWxsOiM2Qzc1N0Q7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBkPSJNMCwxOC40YzAtNC4zLDAtNi41LDAuNS04LjNjMS4zLTQuNyw0LjktOC40LDkuNi05LjZDMTEuOSwwLDE0LjEsMCwxOC40LDBoMTY2YzQuMywwLDYuNSwwLDguMywwLjUmI3hkOyYjeGE7JiN4OTtjNC43LDEuMyw4LjQsNC45LDkuNiw5LjZjMC41LDEuOCwwLjUsNCwwLjUsOC4zdjI4LjVjMCw0LjMsMCw2LjUtMC41LDguM2MtMS4zLDQuNy00LjksOC40LTkuNiw5LjZjLTEuOCwwLjUt'+
			'NCwwLjUtOC4zLDAuNWgtMTY2JiN4ZDsmI3hhOyYjeDk7Yy00LjMsMC02LjUsMC04LjMtMC41Yy00LjctMS4zLTguNC00LjktOS42LTkuNkMwLDUzLjQsMCw1MS4zLDAsNDYuOVYxOC40eiIgY2xhc3M9InN0MCIvPgogPGc+CiAgPHBhdGggZD0iTTI2LjUsNDAuMlYxNy42aDE4djIyLjdoLTMuM1YyMC43SDI5Ljd2MTkuNkgyNi41eiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik00OC45LDQ3LjhWMjMuMmgyLjl2MTIuMmgwLjR2MTIuM0g0OC45eiBNNTYuOSw0MC43Yy0xLjYsMC0zLTAuNC00LjEtMS4yYy0xLjEtMC44LTEuOS0xLjktMi41LTMuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7cy0wLjktMi'+
			'45LTAuOS00LjZjMC0xLjcsMC4zLTMuMiwwLjgtNC42czEuNC0yLjQsMi41LTMuMnMyLjQtMS4yLDQuMS0xLjJjMS42LDAsMywwLjQsNC4xLDEuMmMxLjIsMC44LDIuMSwxLjgsMi43LDMuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNiwxLjMsMC45LDIuOSwwLjksNC42YzAsMS43LTAuMywzLjItMC45LDQuNmMtMC42LDEuNC0xLjUsMi40LTIuNywzLjJDNTkuOCw0MC4zLDU4LjUsNDAuNyw1Ni45LDQwLjd6IE01Ni40LDM3LjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLDAsMS45LTAuMywyLjYtMC44YzAuNy0wLjUsMS4yLTEuMywxLjUtMi4yYzAuMy0wLjksMC41LTEuOSwwLjUtM2MwLTEuMS0wLjIt'+
			'Mi4xLTAuNS0zYy0wLjMtMC45LTAuOS0xLjYtMS42LTIuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjctMC41LTEuNi0wLjgtMi43LTAuOGMtMSwwLTEuOSwwLjMtMi41LDAuOGMtMC43LDAuNS0xLjIsMS4yLTEuNSwyLjFzLTAuNSwxLjktMC41LDMuMWMwLDEuMiwwLjIsMi4yLDAuNSwzLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMsMC45LDAuOCwxLjYsMS41LDIuMVM1NS4zLDM3LjcsNTYuNCwzNy43eiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik04Mi40LDIzLjJ2MTdoLTMuMlYyOC40bC04LjUsMTEuOEg2OHYtMTdoMy4ydjExLjZsOC41LTExLjZIODIuNHoiIGNsYXNzPSJzdDEiLz4KIC'+
			'A8cGF0aCBkPSJNODQuOSw0MC4ybDYuNC04LjZMODUsMjMuMkg4OWw0LjIsNS44bDQuMi01LjhoMy45bC02LjIsOC40bDYuNCw4LjZoLTMuOWwtNC4zLTZsLTQuNCw2SDg0Ljl6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTExMC43LDQwLjdjLTEuNywwLTMuMi0wLjQtNC40LTEuMWMtMS4yLTAuOC0yLjItMS44LTIuOS0zLjJjLTAuNy0xLjMtMS0yLjktMS00LjdjMC0xLjgsMC4zLTMuMywxLTQuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNy0xLjMsMS43LTIuNCwyLjktMy4xYzEuMi0wLjgsMi43LTEuMSw0LjQtMS4xYzEuNywwLDMuMiwwLjQsNC40LDEuMWMxLjIsMC44LDIuMiwxLjgsMi45'+
			'LDMuMmMwLjcsMS4zLDEsMi45LDEsNC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwxLjgtMC4zLDMuMy0xLDQuN3MtMS43LDIuNC0yLjksMy4yQzExMy45LDQwLjMsMTEyLjQsNDAuNywxMTAuNyw0MC43eiBNMTEwLjcsMzcuNmMxLjYsMCwyLjgtMC41LDMuNi0xLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjgtMS4xLDEuMi0yLjUsMS4yLTQuMmMwLTEuOC0wLjQtMy4yLTEuMi00LjNjLTAuOC0xLjEtMi0xLjYtMy42LTEuNmMtMS4xLDAtMiwwLjItMi43LDAuN2MtMC43LDAuNS0xLjIsMS4yLTEuNiwyLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLDAuOS0wLjUsMS45LTAuNSwzYzAsMS44LDAuNC'+
			'wzLjIsMS4yLDQuM0MxMDcuOSwzNy4xLDEwOS4xLDM3LjYsMTEwLjcsMzcuNnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNMTIwLjIsNDAuMmw2LjYtOC41bC02LjItOC41aDMuNmw1LjksOC4zdi04LjNoM3Y4LjNsNS45LTguM2gzLjZsLTYuMiw4LjVsNi42LDguNWgtMy44bC02LjEtOC4zdjguM2gtM3YtOC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtsLTYuMSw4LjNIMTIwLjJ6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTE0OS43LDQwLjdjLTEuMywwLTIuMy0wLjItMy4yLTAuN2MtMC45LTAuNS0xLjUtMS4xLTEuOS0xLjljLTAuNC0wLjgtMC43LTEuNi0wLjctMi41YzAtMC45LDAuMi0x'+
			'LjYsMC41LTIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7czAuOC0xLjIsMS40LTEuN2MwLjYtMC41LDEuMy0wLjgsMi4yLTEuMWMwLjgtMC4yLDEuNi0wLjQsMi42LTAuNmMxLTAuMiwyLTAuMywzLTAuNWMxLjEtMC4xLDIuMS0wLjMsMy4xLTAuNGwtMS4yLDAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMS4zLTAuMy0yLjMtMC44LTNjLTAuNi0wLjYtMS42LTEtMy0xYy0wLjksMC0xLjcsMC4yLTIuNSwwLjZjLTAuNywwLjQtMS4zLDEuMS0xLjYsMi4xbC0zLjEtMC45YzAuNC0xLjUsMS4yLTIuNiwyLjQtMy41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4yLTAuOSwyLjgtMS4zLDQuNy0xLjNjMS41LDAsMi'+
			'44LDAuMyw0LDAuOGMxLjEsMC41LDIsMS4zLDIuNSwyLjVjMC4zLDAuNiwwLjQsMS4xLDAuNSwxLjhjMC4xLDAuNiwwLjEsMS4zLDAuMSwydjEwLjVoLTIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7di0zLjlsMC42LDAuNWMtMC43LDEuMy0xLjYsMi4zLTIuNywyLjlDMTUyLjYsNDAuNCwxNTEuMiw0MC43LDE0OS43LDQwLjd6IE0xNTAuMiwzOGMwLjksMCwxLjctMC4yLDIuNC0wLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjctMC4zLDEuMi0wLjgsMS42LTEuM2MwLjQtMC41LDAuNy0xLDAuOC0xLjZjMC4yLTAuNSwwLjMtMS4xLDAuMy0xLjdjMC0wLjYsMC0xLjEsMC0xLjVsMS4xLDAuNGMtMSwwLjIt'+
			'MiwwLjMtMi44LDAuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjgsMC4xLTEuNiwwLjItMi4zLDAuNGMtMC43LDAuMS0xLjMsMC4zLTEuOCwwLjRjLTAuNSwwLjItMC45LDAuMy0xLjIsMC42Yy0wLjQsMC4yLTAuNiwwLjUtMC44LDAuOGMtMC4yLDAuMy0wLjMsMC43LTAuMywxLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNCwwLjEsMC44LDAuMywxLjJjMC4yLDAuNCwwLjYsMC43LDEsMC45QzE0OSwzNy45LDE0OS41LDM4LDE1MC4yLDM4eiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik0xNjEuOCw0MC4ybDQuMy02LjdoMy41bC00LjMsNi43SDE2MS44eiBNMTczLjEsNDAuMnYtNS45aC0zLj'+
			'RjLTAuNCwwLTAuOSwwLTEuNCwwYy0wLjYsMC0xLjEtMC4xLTEuNi0wLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMS4zLTAuMi0yLjMtMC44LTMuMi0xLjdjLTAuOS0wLjktMS4zLTIuMS0xLjMtMy42YzAtMS41LDAuNC0yLjcsMS4yLTMuNnMxLjgtMS41LDMuMS0xLjhjMC41LTAuMSwxLjEtMC4yLDEuNi0wLjJzMSwwLDEuNCwwaDYuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDAsMTdIMTczLjF6IE0xNjkuNSwzMS43aDMuN3YtNS44aC0zLjdjLTAuMiwwLTAuNSwwLTAuOSwwcy0wLjcsMC4xLTEsMC4yYy0wLjMsMC4xLTAuNiwwLjMtMC45LDAuNWMtMC4zLDAuMi0wLjUsMC41LTAuNywwLjkmI3hkOyYj'+
			'eGE7JiN4OTsmI3g5O2MtMC4yLDAuNC0wLjMsMC44LTAuMywxLjNjMCwwLjcsMC4yLDEuMywwLjYsMS44YzAuNCwwLjUsMC45LDAuOCwxLjUsMC45YzAuMywwLjEsMC42LDAuMSwwLjksMC4yQzE2OSwzMS43LDE2OS4zLDMxLjcsMTY5LjUsMzEuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me.__7__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u041f\u0440\u0438\u0445\u043e\u0436\u0430_\u0424\u043b\u0430\u0436\u0435\u043a";
		el.ggDx=-50;
		el.ggDy=30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 93px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__7.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._svg_9.appendChild(me.__7);
		el=me.__6=document.createElement('div');
		els=me.__6__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NS4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMDIuOSA2NS4zOyIgeG1sbnM9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojRjdGN0Y3O30mI3hkOwoJLnN0MXtmaWxsOiM2Qzc1N0Q7fSYjeGQ7Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBkPSJNMCwxOC40YzAtNC4zLDAtNi41LDAuNS04LjNjMS4zLTQuNyw0LjktOC40LDkuNi05LjZDMTEuOSwwLDE0LjEsMCwxOC40LDBoMTY2YzQuMywwLDYuNSwwLDguMywwLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2M0LjcsMS4zLDguNCw0LjksOS42LDkuNmMwLjUsMS44LDAuNSw0LDAuNSw4LjN2MjguNWMwLDQuMywwLDYuNS0wLjUsOC4zYy0xLjMsNC43LTQuOSw4LjQtOS42LDku'+
			'NmMtMS44LDAuNS00LDAuNS04LjMsMC41aC0xNjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtNC4zLDAtNi41LDAtOC4zLTAuNWMtNC43LTEuMy04LjQtNC45LTkuNi05LjZDMCw1My40LDAsNTEuMywwLDQ2LjlWMTguNHoiIGNsYXNzPSJzdDAiLz4KICA8cGF0aCBkPSJNNDcuMiw0My41Yy0yLjIsMC00LjEtMC41LTUuNy0xLjVjLTEuNi0xLTIuOC0yLjMtMy42LTQuMWMtMC44LTEuNy0xLjItMy44LTEuMi02LjFzMC40LTQuMywxLjItNi4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC44LTEuNywyLTMuMSwzLjYtNC4xYzEuNi0xLDMuNS0xLjUsNS43LTEuNWMyLjYsMCw0LjcsMC42LDYuNCwxLjljMS43LD'+
			'EuMywyLjksMywzLjUsNS4ybC0zLjMsMC45Yy0wLjQtMS42LTEuMi0yLjgtMi4zLTMuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0xLjEtMC45LTIuNS0xLjMtNC4zLTEuM2MtMS42LDAtMi45LDAuNC0zLjksMS4xYy0xLjEsMC43LTEuOCwxLjctMi40LDNjLTAuNSwxLjMtMC44LDIuOC0wLjgsNC41YzAsMS43LDAuMiwzLjIsMC44LDQuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNSwxLjMsMS4zLDIuMywyLjQsM2MxLjEsMC43LDIuNCwxLjEsNCwxLjFjMS44LDAsMy4yLTAuNCw0LjMtMS4zYzEuMS0wLjksMS45LTIuMSwyLjMtMy43bDMuMywwLjljLTAuNywyLjItMS44LDMuOS0zLjUsNS4yJiN4ZDsm'+
			'I3hhOyYjeDk7JiN4OTtDNTEuOSw0Mi44LDQ5LjcsNDMuNSw0Ny4yLDQzLjV6IE02MC42LDQzVjI2LjNoMTQuMVY0M2gtMy4yVjI5LjNoLTcuNlY0M0g2MC42eiBNODMuOSw0My41Yy0xLjIsMC0yLjMtMC4yLTMuMS0wLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC44LTAuNS0xLjUtMS4xLTEuOS0xLjhjLTAuNC0wLjgtMC42LTEuNi0wLjYtMi41YzAtMC44LDAuMS0xLjYsMC40LTIuMmMwLjMtMC42LDAuNy0xLjIsMS4zLTEuNmMwLjYtMC41LDEuMy0wLjgsMi4yLTEuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNy0wLjIsMS42LTAuNCwyLjUtMC42YzAuOS0wLjIsMS45LTAuMywzLTAuNWMxLTAuMS'+
			'wyLjEtMC4zLDMuMS0wLjRsLTEuMiwwLjZjMC0xLjMtMC4zLTIuMy0wLjgtMi45Yy0wLjYtMC42LTEuNS0xLTIuOS0xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuOSwwLTEuNywwLjItMi40LDAuNmMtMC43LDAuNC0xLjIsMS4xLTEuNSwybC0zLTAuOWMwLjQtMS40LDEuMi0yLjYsMi40LTMuNGMxLjItMC44LDIuNy0xLjMsNC42LTEuM2MxLjUsMCwyLjgsMC4zLDMuOSwwLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjEsMC41LDEuOSwxLjMsMi40LDIuNGMwLjMsMC41LDAuNCwxLjEsMC41LDEuN2MwLjEsMC42LDAuMSwxLjMsMC4xLDJWNDNoLTIuOXYtMy44bDAuNiwwLjVjLTAuNywxLjMtMS42LDIu'+
			'Mi0yLjYsMi45JiN4ZDsmI3hhOyYjeDk7JiN4OTtDODYuOCw0My4xLDg1LjUsNDMuNSw4My45LDQzLjV6IE04NC41LDQwLjhjMC45LDAsMS43LTAuMiwyLjQtMC41YzAuNy0wLjMsMS4yLTAuNywxLjYtMS4zYzAuNC0wLjUsMC43LTEsMC44LTEuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMi0wLjUsMC4zLTEuMSwwLjMtMS43YzAtMC42LDAtMS4xLDAtMS41bDEuMSwwLjRjLTEsMC4yLTEuOSwwLjMtMi44LDAuNGMtMC44LDAuMS0xLjYsMC4yLTIuMywwLjRjLTAuNywwLjEtMS4zLDAuMy0xLjgsMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNCwwLjItMC44LDAuMy0xLjIsMC42Yy0wLjMsMC4yLT'+
			'AuNiwwLjUtMC44LDAuOGMtMC4yLDAuMy0wLjMsMC43LTAuMywxLjFjMCwwLjQsMC4xLDAuOCwwLjMsMS4yYzAuMiwwLjQsMC41LDAuNiwxLDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7QzgzLjIsNDAuNyw4My44LDQwLjgsODQuNSw0MC44eiBNOTUuNCw0M3YtMi43YzAuNiwwLjEsMS4xLDAuMSwxLjQsMGMwLjMtMC4yLDAuNi0wLjQsMC43LTAuOGMwLjItMC40LDAuMy0wLjksMC40LTEuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMi0wLjksMC4zLTIsMC40LTMuMmMwLjEtMS4yLDAuMy0yLjUsMC40LTMuOXMwLjItMi45LDAuMy00LjRoMTJWNDNoLTMuMlYyOS4zSDEwMmMtMC4xLDAuOC0wLjEsMS43'+
			'LTAuMiwyLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4xLDAuOS0wLjIsMS44LTAuMiwyLjdjLTAuMSwwLjktMC4yLDEuNy0wLjMsMi41Yy0wLjEsMC44LTAuMiwxLjUtMC4zLDJjLTAuMiwxLjEtMC41LDItMC45LDIuN2MtMC40LDAuNi0wLjksMS4xLTEuNywxLjMmI3hkOyYjeGE7JiN4OTsmI3g5O0M5Ny42LDQzLjMsOTYuNiw0My4yLDk1LjQsNDN6IE0xMTUuNSw0M1YyNi4zaDMuMnY1LjhoMy4zYzAuNSwwLDEsMCwxLjUsMGMwLjUsMCwxLDAuMSwxLjQsMC4yYzAuOSwwLjIsMS43LDAuNSwyLjMsMC45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC43LDAuNCwxLjIsMSwxLjUsMS43YzAuNCwwLjcsMC'+
			'41LDEuNiwwLjUsMi42YzAsMS41LTAuNCwyLjYtMS4xLDMuNWMtMC44LDAuOS0xLjgsMS40LTMuMSwxLjdjLTAuNCwwLjEtMC45LDAuMi0xLjUsMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNiwwLTEuMSwwLTEuNSwwSDExNS41eiBNMTE4LjgsNDAuNGgzLjZjMC4zLDAsMC42LDAsMC45LDBjMC4zLDAsMC42LTAuMSwwLjktMC4xYzAuNS0wLjEsMC45LTAuNCwxLjMtMC45czAuNi0xLDAuNi0xLjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTAuOC0wLjItMS40LTAuNi0xLjhjLTAuNC0wLjUtMC45LTAuNy0xLjUtMC45Yy0wLjMtMC4xLTAuNi0wLjEtMC45LTAuMWMtMC4zLDAtMC42LDAtMC44LDBo'+
			'LTMuNlY0MC40eiBNMTMyLjUsNDNWMjYuM2gzLjJ2Ni44JiN4ZDsmI3hhOyYjeDk7JiN4OTtoOC4ydi02LjhoMy4yVjQzaC0zLjJ2LTYuOGgtOC4yVjQzSDEzMi41eiBNMTYxLjgsNDN2LTUuOGgtMy4zYy0wLjQsMC0wLjksMC0xLjQsMGMtMC41LDAtMS0wLjEtMS41LTAuMmMtMS4yLTAuMi0yLjMtMC44LTMuMS0xLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC44LTAuOS0xLjMtMi4xLTEuMy0zLjZjMC0xLjUsMC40LTIuNiwxLjItMy41YzAuOC0wLjksMS44LTEuNSwzLTEuN2MwLjUtMC4xLDEuMS0wLjIsMS42LTAuMmMwLjYsMCwxLDAsMS40LDBoNi42bDAsMTYuN0gxNjEuOCYjeGQ7JiN4YTsmI3'+
			'g5OyYjeDk7eiBNMTUwLjcsNDNsNC4yLTYuNmgzLjRsLTQuMiw2LjZIMTUwLjd6IE0xNTguMiwzNC42aDMuNnYtNS43aC0zLjZjLTAuMiwwLTAuNSwwLTAuOCwwYy0wLjMsMC0wLjYsMC4xLTEsMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMywwLjEtMC42LDAuMy0wLjksMC41Yy0wLjMsMC4yLTAuNSwwLjUtMC43LDAuOWMtMC4yLDAuNC0wLjMsMC44LTAuMywxLjNjMCwwLjcsMC4yLDEuMywwLjYsMS44YzAuNCwwLjUsMC45LDAuOCwxLjQsMC45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuMSwwLjYsMC4xLDAuOSwwLjJDMTU3LjcsMzQuNiwxNTgsMzQuNiwxNTguMiwzNC42eiIgY2xhc3M9'+
			'InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me.__6__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u0421\u043f\u0430\u043b\u044c\u043d\u044f_\u0424\u043b\u0430\u0436\u0435\u043a";
		el.ggDx=-50;
		el.ggDy=-30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 93px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__6.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._svg_9.appendChild(me.__6);
		el=me.__5=document.createElement('div');
		els=me.__5__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NS4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMDIuOSA2NS4zOyIgeG1sbnM9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojRjdGN0Y3O30mI3hkOwoJLnN0MXtmaWxsOiM2Qzc1N0Q7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBkPSJNMCwxOC40YzAtNC4zLDAtNi41LDAuNS04LjNjMS4zLTQuNyw0LjktOC40LDkuNi05LjZDMTEuOSwwLDE0LjEsMCwxOC40LDBoMTY2YzQuMywwLDYuNSwwLDguMywwLjUmI3hkOyYjeGE7JiN4OTtjNC43LDEuMyw4LjQsNC45LDkuNiw5LjZjMC41LDEuOCwwLjUsNCwwLjUsOC4zdjI4LjVjMCw0LjMsMCw2LjUtMC41LDguM2MtMS4zLDQuNy00LjksOC40LTkuNiw5LjZjLTEuOCwwLjUt'+
			'NCwwLjUtOC4zLDAuNWgtMTY2JiN4ZDsmI3hhOyYjeDk7Yy00LjMsMC02LjUsMC04LjMtMC41Yy00LjctMS4zLTguNC00LjktOS42LTkuNkMwLDUzLjQsMCw1MS4zLDAsNDYuOVYxOC40eiIgY2xhc3M9InN0MCIvPgogPGc+CiAgPHBhdGggZD0iTTQ3LjYsNDMuOFYyMS4xaDguOWMxLjQsMCwyLjYsMC4zLDMuNiwwLjljMSwwLjYsMS43LDEuMywyLjIsMi4zYzAuNSwwLjksMC43LDEuOSwwLjcsMi45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwxLjItMC4zLDIuMy0wLjksMy4ycy0xLjQsMS41LTIuNSwxLjhsMC0wLjhjMS40LDAuNCwyLjYsMS4xLDMuMywyLjFjMC44LDEsMS4yLDIuMiwxLjIsMy42Yz'+
			'AsMS4zLTAuMywyLjUtMC44LDMuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjUsMS0xLjMsMS44LTIuMywyLjNjLTEsMC42LTIuMiwwLjgtMy43LDAuOEg0Ny42eiBNNTAuOSwzMC40aDUuNWMwLjYsMCwxLjItMC4xLDEuNi0wLjRzMC45LTAuNiwxLjItMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLTAuNSwwLjQtMSwwLjQtMS43YzAtMC45LTAuMy0xLjYtMC45LTIuMmMtMC42LTAuNi0xLjQtMC45LTIuNC0wLjloLTUuNVYzMC40eiBNNTAuOSw0MC42aDUuOWMwLjcsMCwxLjQtMC4xLDItMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC42LTAuMywxLjEtMC43LDEuNC0xLjJjMC4zLTAuNSwwLjUt'+
			'MS4yLDAuNS0xLjljMC0wLjctMC4xLTEuMy0wLjQtMS45Yy0wLjMtMC42LTAuNy0xLTEuMy0xLjNjLTAuNi0wLjMtMS4yLTAuNS0yLTAuNWgtNi4xVjQwLjYmI3hkOyYjeGE7JiN4OTsmI3g5O3oiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNzIuMSw0NC4yYy0xLjMsMC0yLjMtMC4yLTMuMi0wLjdjLTAuOS0wLjUtMS41LTEuMS0xLjktMS45Yy0wLjQtMC44LTAuNy0xLjYtMC43LTIuNWMwLTAuOSwwLjItMS42LDAuNS0yLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMtMC43LDAuOC0xLjIsMS40LTEuN2MwLjYtMC41LDEuMy0wLjgsMi4yLTEuMWMwLjgtMC4yLDEuNi0wLjQsMi42LTAuNmMxLT'+
			'AuMiwyLTAuMywzLTAuNXMyLjEtMC4zLDMuMS0wLjRsLTEuMiwwLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTEuMy0wLjMtMi4zLTAuOC0zYy0wLjYtMC42LTEuNi0xLTMtMWMtMC45LDAtMS43LDAuMi0yLjUsMC42Yy0wLjcsMC40LTEuMywxLjEtMS42LDIuMWwtMy4xLTAuOWMwLjQtMS41LDEuMi0yLjYsMi40LTMuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMi0wLjksMi44LTEuMyw0LjctMS4zYzEuNSwwLDIuOCwwLjMsNCwwLjhjMS4xLDAuNSwyLDEuMywyLjUsMi41YzAuMywwLjYsMC40LDEuMSwwLjUsMS44YzAuMSwwLjYsMC4xLDEuMywwLjEsMnYxMC41aC0yLjkmI3hkOyYjeGE7JiN4OTsm'+
			'I3g5O3YtMy45bDAuNiwwLjVjLTAuNywxLjMtMS42LDIuMy0yLjcsMi45UzczLjYsNDQuMiw3Mi4xLDQ0LjJ6IE03Mi42LDQxLjZjMC45LDAsMS43LTAuMiwyLjQtMC41YzAuNy0wLjMsMS4yLTAuOCwxLjYtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40LTAuNSwwLjctMSwwLjgtMS42YzAuMi0wLjUsMC4zLTEuMSwwLjMtMS43YzAtMC42LDAtMS4xLDAtMS41bDEuMSwwLjRjLTEsMC4yLTIsMC4zLTIuOCwwLjRzLTEuNiwwLjItMi4zLDAuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjcsMC4xLTEuMywwLjMtMS44LDAuNGMtMC41LDAuMi0wLjksMC4zLTEuMiwwLjZjLTAuNCwwLjItMC42LDAuNS'+
			'0wLjgsMC44Yy0wLjIsMC4zLTAuMywwLjctMC4zLDEuMWMwLDAuNCwwLjEsMC44LDAuMywxLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjIsMC40LDAuNiwwLjcsMSwwLjlDNzEuNCw0MS40LDcxLjksNDEuNiw3Mi42LDQxLjZ6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTg1LjIsNDMuOHYtMTdoMy4zdjYuOWg4LjN2LTYuOWgzLjN2MTdoLTMuM3YtN2gtOC4zdjdIODUuMnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNMTA0LjUsNDMuOHYtMTdoMy4zdjYuOWg4LjN2LTYuOWgzLjN2MTdIMTE2di03aC04LjN2N0gxMDQuNXoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNMTI4LjUsNDQu'+
			'MmMtMS4zLDAtMi4zLTAuMi0zLjItMC43Yy0wLjktMC41LTEuNS0xLjEtMS45LTEuOWMtMC40LTAuOC0wLjctMS42LTAuNy0yLjVjMC0wLjksMC4yLTEuNiwwLjUtMi4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtzMC44LTEuMiwxLjQtMS43YzAuNi0wLjUsMS4zLTAuOCwyLjItMS4xYzAuOC0wLjIsMS42LTAuNCwyLjYtMC42YzEtMC4yLDItMC4zLDMtMC41YzEuMS0wLjEsMi4xLTAuMywzLjEtMC40bC0xLjIsMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xLjMtMC4zLTIuMy0wLjgtM2MtMC42LTAuNi0xLjYtMS0zLTFjLTAuOSwwLTEuNywwLjItMi41LDAuNmMtMC43LDAuNC0xLjMsMS4xLTEuNiwyLj'+
			'FsLTMuMS0wLjljMC40LTEuNSwxLjItMi42LDIuNC0zLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLjItMC45LDIuOC0xLjMsNC43LTEuM2MxLjUsMCwyLjgsMC4zLDQsMC44YzEuMSwwLjUsMiwxLjMsMi41LDIuNWMwLjMsMC42LDAuNCwxLjEsMC41LDEuOGMwLjEsMC42LDAuMSwxLjMsMC4xLDJ2MTAuNWgtMi45JiN4ZDsmI3hhOyYjeDk7JiN4OTt2LTMuOWwwLjYsMC41Yy0wLjcsMS4zLTEuNiwyLjMtMi43LDIuOUMxMzEuNSw0My45LDEzMC4xLDQ0LjIsMTI4LjUsNDQuMnogTTEyOS4xLDQxLjZjMC45LDAsMS43LTAuMiwyLjQtMC41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC43LTAuMywxLjItMC44'+
			'LDEuNi0xLjNjMC40LTAuNSwwLjctMSwwLjgtMS42YzAuMi0wLjUsMC4zLTEuMSwwLjMtMS43YzAtMC42LDAtMS4xLDAtMS41bDEuMSwwLjRjLTEsMC4yLTIsMC4zLTIuOCwwLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC44LDAuMS0xLjYsMC4yLTIuMywwLjRjLTAuNywwLjEtMS4zLDAuMy0xLjgsMC40Yy0wLjUsMC4yLTAuOSwwLjMtMS4yLDAuNmMtMC40LDAuMi0wLjYsMC41LTAuOCwwLjhjLTAuMiwwLjMtMC4zLDAuNy0wLjMsMS4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwwLjQsMC4xLDAuOCwwLjMsMS4yYzAuMiwwLjQsMC42LDAuNywxLDAuOUMxMjcuOCw0MS40LDEyOC40LDQxLjYsMTI5Lj'+
			'EsNDEuNnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNMTQwLjcsNDMuOEwxNDUsMzdoMy41bC00LjMsNi43SDE0MC43eiBNMTUyLDQzLjh2LTUuOWgtMy40Yy0wLjQsMC0wLjksMC0xLjQsMGMtMC42LDAtMS4xLTAuMS0xLjYtMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTEuMy0wLjItMi4zLTAuOC0zLjItMS43Yy0wLjktMC45LTEuMy0yLjEtMS4zLTMuNmMwLTEuNSwwLjQtMi43LDEuMi0zLjZzMS44LTEuNSwzLjEtMS44YzAuNS0wLjEsMS4xLTAuMiwxLjYtMC4yczEsMCwxLjQsMGg2LjgmI3hkOyYjeGE7JiN4OTsmI3g5O2wwLDE3SDE1MnogTTE0OC40LDM1LjJoMy43di01LjhoLTMuN2Mt'+
			'MC4yLDAtMC41LDAtMC45LDBzLTAuNywwLjEtMSwwLjJjLTAuMywwLjEtMC42LDAuMy0wLjksMC41Yy0wLjMsMC4yLTAuNSwwLjUtMC43LDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjIsMC40LTAuMywwLjgtMC4zLDEuM2MwLDAuNywwLjIsMS4zLDAuNiwxLjhjMC40LDAuNSwwLjksMC44LDEuNSwwLjljMC4zLDAuMSwwLjYsMC4xLDAuOSwwLjImI3hkOyYjeGE7JiN4OTsmI3g5O0MxNDcuOSwzNS4yLDE0OC4yLDM1LjIsMTQ4LjQsMzUuMnoiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me.__5__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u0412\u0430\u043d\u043d\u0430\u044f_\u0424\u043b\u0430\u0436\u0435\u043a";
		el.ggDx=50;
		el.ggDy=30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 93px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._svg_9.appendChild(me.__5);
		el=me.__4=document.createElement('div');
		els=me.__4__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NS4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMDIuOSA2NS4zOyIgeG1sbnM9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojRjdGN0Y3O30mI3hkOwoJLnN0MXtmaWxsOiM2Qzc1N0Q7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBkPSJNMCwxOC40YzAtNC4zLDAtNi41LDAuNS04LjNjMS4zLTQuNyw0LjktOC40LDkuNi05LjZDMTEuOSwwLDE0LjEsMCwxOC40LDBoMTY2YzQuMywwLDYuNSwwLDguMywwLjUmI3hkOyYjeGE7JiN4OTtjNC43LDEuMyw4LjQsNC45LDkuNiw5LjZjMC41LDEuOCwwLjUsNCwwLjUsOC4zdjI4LjVjMCw0LjMsMCw2LjUtMC41LDguM2MtMS4zLDQuNy00LjksOC40LTkuNiw5LjZjLTEuOCwwLjUt'+
			'NCwwLjUtOC4zLDAuNWgtMTY2JiN4ZDsmI3hhOyYjeDk7Yy00LjMsMC02LjUsMC04LjMtMC41Yy00LjctMS4zLTguNC00LjktOS42LTkuNkMwLDUzLjQsMCw1MS4zLDAsNDYuOVYxOC40eiIgY2xhc3M9InN0MCIvPgogPGc+CiAgPHBhdGggZD0iTTI5LjUsNDAuNVYxNy44SDQ0djMuMUgzMi44djE5LjZIMjkuNXoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNDkuMSw0MC45Yy0xLjMsMC0yLjMtMC4yLTMuMi0wLjdjLTAuOS0wLjUtMS41LTEuMS0xLjktMS45Yy0wLjQtMC44LTAuNy0xLjYtMC43LTIuNWMwLTAuOSwwLjItMS42LDAuNS0yLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMtMC43LD'+
			'AuOC0xLjIsMS40LTEuN2MwLjYtMC41LDEuMy0wLjgsMi4yLTEuMWMwLjgtMC4yLDEuNi0wLjQsMi42LTAuNmMxLTAuMiwyLTAuMywzLTAuNWMxLjEtMC4xLDIuMS0wLjMsMy4xLTAuNEw1NC45LDMwJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xLjMtMC4zLTIuMy0wLjgtM2MtMC42LTAuNi0xLjYtMS0zLTFjLTAuOSwwLTEuNywwLjItMi41LDAuNmMtMC43LDAuNC0xLjMsMS4xLTEuNiwyLjFMNDQsMjcuOGMwLjQtMS41LDEuMi0yLjYsMi40LTMuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMi0wLjksMi44LTEuMyw0LjctMS4zYzEuNSwwLDIuOCwwLjMsNCwwLjhjMS4xLDAuNSwyLDEuMywyLjUsMi41'+
			'YzAuMywwLjYsMC40LDEuMSwwLjUsMS44YzAuMSwwLjYsMC4xLDEuMywwLjEsMnYxMC41aC0yLjkmI3hkOyYjeGE7JiN4OTsmI3g5O3YtMy45bDAuNiwwLjVjLTAuNywxLjMtMS42LDIuMy0yLjcsMi45UzUwLjcsNDAuOSw0OS4xLDQwLjl6IE00OS43LDM4LjJjMC45LDAsMS43LTAuMiwyLjQtMC41YzAuNy0wLjMsMS4yLTAuOCwxLjYtMS4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40LTAuNSwwLjctMSwwLjgtMS42YzAuMi0wLjUsMC4zLTEuMSwwLjMtMS43YzAtMC42LDAtMS4xLDAtMS41bDEuMSwwLjRjLTEsMC4yLTIsMC4zLTIuOCwwLjRzLTEuNiwwLjItMi4zLDAuNCYjeGQ7JiN4YTsmI3g5Oy'+
			'YjeDk7Yy0wLjcsMC4xLTEuMywwLjMtMS44LDAuNGMtMC41LDAuMi0wLjksMC4zLTEuMiwwLjZjLTAuNCwwLjItMC42LDAuNS0wLjgsMC44Yy0wLjIsMC4zLTAuMywwLjctMC4zLDEuMWMwLDAuNCwwLjEsMC44LDAuMywxLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjIsMC40LDAuNiwwLjcsMSwwLjlDNDguNCwzOC4xLDQ5LDM4LjIsNDkuNywzOC4yeiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik02Mi4zLDQ4VjIzLjVoMi45djEyLjJoMC40VjQ4SDYyLjN6IE03MC4zLDQwLjljLTEuNiwwLTMtMC40LTQuMS0xLjJjLTEuMS0wLjgtMS45LTEuOS0yLjUtMy4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtj'+
			'LTAuNi0xLjQtMC45LTIuOS0wLjktNC42YzAtMS43LDAuMy0zLjIsMC44LTQuNnMxLjQtMi40LDIuNS0zLjJjMS4xLTAuOCwyLjQtMS4yLDQuMS0xLjJjMS42LDAsMywwLjQsNC4xLDEuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMiwwLjgsMi4xLDEuOCwyLjcsMy4yYzAuNiwxLjMsMC45LDIuOSwwLjksNC42YzAsMS43LTAuMywzLjItMC45LDQuNmMtMC42LDEuNC0xLjUsMi40LTIuNywzLjJDNzMuMiw0MC41LDcxLjgsNDAuOSw3MC4zLDQwLjl6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTTY5LjgsMzhjMSwwLDEuOS0wLjMsMi42LTAuOGMwLjctMC41LDEuMi0xLjMsMS41LTIuMmMwLjMtMC45LDAuNS'+
			'0xLjksMC41LTNjMC0xLjEtMC4yLTIuMS0wLjUtM2MtMC4zLTAuOS0wLjktMS42LTEuNi0yLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC43LTAuNS0xLjYtMC44LTIuNy0wLjhjLTEsMC0xLjksMC4zLTIuNSwwLjhjLTAuNywwLjUtMS4yLDEuMi0xLjUsMi4xcy0wLjUsMS45LTAuNSwzLjFjMCwxLjIsMC4yLDIuMiwwLjUsMy4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuOSwwLjgsMS42LDEuNSwyLjFTNjguNywzOCw2OS44LDM4eiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik04MC4yLDQ0LjJ2LTYuNGMwLjksMCwxLjYtMC4zLDItMC45czAuNy0xLjcsMS0zLjJjMC4xLTAuOSwwLjMtMS45'+
			'LDAuNC0yLjljMC4xLTEsMC4yLTIuMSwwLjMtMy4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4xLTEuMiwwLjEtMi41LDAuMi00aDEyLjJ2MTQuNGgxLjd2Ni40aC0zLjF2LTMuOEg4My4zdjMuOEg4MC4yeiBNODQuOSwzNy44aDhWMjYuMWgtNmMwLDAuNy0wLjEsMS40LTAuMSwyLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNy0wLjEsMS41LTAuMiwyLjJzLTAuMSwxLjQtMC4yLDIuMWMtMC4xLDAuNy0wLjIsMS4zLTAuMywxLjhjLTAuMSwwLjgtMC4zLDEuNS0wLjQsMi4xUzg1LjMsMzcuNCw4NC45LDM3Ljh6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTEwOC41LDQwLjljLTEuNywwLTMuMi'+
			'0wLjQtNC40LTEuMWMtMS4zLTAuNy0yLjMtMS44LTMtMy4xYy0wLjctMS4zLTEuMS0yLjktMS4xLTQuNmMwLTEuOSwwLjMtMy41LDEtNC44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC43LTEuNCwxLjctMi40LDIuOS0zLjJjMS4yLTAuNywyLjctMS4xLDQuNC0xLjFjMS43LDAsMy4yLDAuNCw0LjQsMS4yczIuMSwxLjksMi43LDMuNHMwLjgsMy4yLDAuNyw1LjNIMTEzdi0xLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTItMC40LTMuNC0xLjEtNC40Yy0wLjctMC45LTEuOC0xLjQtMy4zLTEuNGMtMS42LDAtMi45LDAuNS0zLjcsMS42Yy0wLjgsMS0xLjIsMi41LTEuMiw0LjVjMCwxLjksMC40LDMuMywx'+
			'LjIsNC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC44LDEsMiwxLjUsMy42LDEuNWMxLDAsMS45LTAuMiwyLjctMC43YzAuOC0wLjUsMS4zLTEuMSwxLjgtMmwzLjIsMWMtMC43LDEuNS0xLjcsMi43LTMsMy41QzExMS43LDQwLjUsMTEwLjIsNDAuOSwxMDguNSw0MC45eiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0xMDIuNSwzMi45di0yLjZoMTIuMXYyLjZIMTAyLjV6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTExOS44LDQ4VjIzLjVoMi45djEyLjJoMC40VjQ4SDExOS44eiBNMTI3LjgsNDAuOWMtMS42LDAtMy0wLjQtNC4xLTEuMmMtMS4xLTAuOC0xLjktMS45LTIuNS0zLjImI3hkOyYjeGE7Ji'+
			'N4OTsmI3g5O2MtMC42LTEuNC0wLjktMi45LTAuOS00LjZjMC0xLjcsMC4zLTMuMiwwLjgtNC42czEuNC0yLjQsMi41LTMuMmMxLjEtMC44LDIuNC0xLjIsNC4xLTEuMmMxLjYsMCwzLDAuNCw0LjEsMS4yczIuMSwxLjgsMi43LDMuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7czAuOSwyLjksMC45LDQuNmMwLDEuNy0wLjMsMy4yLTAuOSw0LjZjLTAuNiwxLjQtMS41LDIuNC0yLjcsMy4yQzEzMC43LDQwLjUsMTI5LjQsNDAuOSwxMjcuOCw0MC45eiBNMTI3LjMsMzgmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLDAsMS45LTAuMywyLjYtMC44YzAuNy0wLjUsMS4yLTEuMywxLjUtMi4yYzAuMy0wLjksMC41LTEu'+
			'OSwwLjUtM2MwLTEuMS0wLjItMi4xLTAuNS0zYy0wLjMtMC45LTAuOS0xLjYtMS42LTIuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjctMC41LTEuNi0wLjgtMi43LTAuOGMtMSwwLTEuOSwwLjMtMi41LDAuOGMtMC43LDAuNS0xLjIsMS4yLTEuNSwyLjFjLTAuMywwLjktMC41LDEuOS0wLjUsMy4xYzAsMS4yLDAuMiwyLjIsMC41LDMuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMywwLjksMC44LDEuNiwxLjUsMi4xQzEyNS40LDM3LjcsMTI2LjIsMzgsMTI3LjMsMzh6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTE0Ni4zLDQwLjljLTEuNywwLTMuMi0wLjQtNC40LTEuMWMtMS4yLTAuOC0yLj'+
			'ItMS44LTIuOS0zLjJjLTAuNy0xLjMtMS0yLjktMS00LjdjMC0xLjgsMC4zLTMuMywxLTQuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNy0xLjMsMS43LTIuNCwyLjktMy4xYzEuMi0wLjgsMi43LTEuMSw0LjQtMS4xYzEuNywwLDMuMiwwLjQsNC40LDEuMWMxLjIsMC44LDIuMiwxLjgsMi45LDMuMmMwLjcsMS4zLDEsMi45LDEsNC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwxLjgtMC4zLDMuMy0xLDQuN3MtMS43LDIuNC0yLjksMy4yQzE0OS41LDQwLjYsMTQ4LDQwLjksMTQ2LjMsNDAuOXogTTE0Ni4zLDM3LjhjMS42LDAsMi44LTAuNSwzLjYtMS42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC44LTEu'+
			'MSwxLjItMi41LDEuMi00LjJjMC0xLjgtMC40LTMuMi0xLjItNC4zYy0wLjgtMS4xLTItMS42LTMuNi0xLjZjLTEuMSwwLTIsMC4yLTIuNywwLjdjLTAuNywwLjUtMS4yLDEuMi0xLjYsMi4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMywwLjktMC41LDEuOS0wLjUsM2MwLDEuOCwwLjQsMy4yLDEuMiw0LjNDMTQzLjUsMzcuMywxNDQuNywzNy44LDE0Ni4zLDM3Ljh6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTE2NS4xLDQxYy0xLjYsMC0zLTAuNC00LjEtMS4xcy0yLTEuNy0yLjctM2MtMC42LTEuMy0xLTIuOS0xLjEtNC43Yy0wLjEtMC45LDAtMS45LDAtMyYjeGQ7JiN4YTsmI3g5OyYjeD'+
			'k7YzAuMS0xLjEsMC4yLTIuMSwwLjQtMy4yYzAuMi0xLDAuNC0xLjksMC43LTIuNmMwLjMtMC44LDAuNy0xLjUsMS4yLTIuMXMxLjEtMS4yLDEuNy0xLjZjMC43LTAuNSwxLjQtMC44LDIuMi0xLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjgtMC4zLDEuNy0wLjUsMi42LTAuNmMwLjktMC4xLDEuOC0wLjMsMi43LTAuNGMwLjktMC4xLDEuOC0wLjIsMi43LTAuNGwwLjMsMi45Yy0wLjYsMC4xLTEuMywwLjItMiwwLjNzLTEuNiwwLjItMi40LDAuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjgsMC4xLTEuNiwwLjMtMi40LDAuNHMtMS40LDAuNS0yLDAuOGMtMC44LDAuNS0xLjQsMS4yLTEuOCwyLjFj'+
			'LTAuNCwwLjktMC43LDEuOS0wLjcsM2MwLjctMSwxLjUtMS43LDIuNS0yLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MxLTAuNCwyLjEtMC43LDMuMS0wLjdjMS41LDAsMi44LDAuNCwzLjksMS4xYzEuMSwwLjcsMS45LDEuNywyLjUsMi45YzAuNiwxLjIsMC45LDIuNiwwLjksNC4yYzAsMS43LTAuMywzLjEtMSw0LjQmI3hkOyYjeGE7JiN4OTsmI3g5O3MtMS43LDIuMi0yLjksMi45QzE2OC4yLDQwLjYsMTY2LjgsNDEsMTY1LjEsNDF6IE0xNjUuMywzNy45YzEuNSwwLDIuNy0wLjUsMy40LTEuNHMxLjItMi4yLDEuMi0zLjdjMC0xLjYtMC40LTIuOS0xLjItMy44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLT'+
			'AuOC0wLjktMS45LTEuNC0zLjQtMS40Yy0xLjUsMC0yLjYsMC41LTMuNCwxLjRjLTAuOCwwLjktMS4yLDIuMi0xLjIsMy44YzAsMS42LDAuNCwyLjksMS4yLDMuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7QzE2Mi43LDM3LjQsMTYzLjgsMzcuOSwxNjUuMywzNy45eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me.__4__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u0413\u0430\u0440\u0434\u0435\u0440\u043e\u0431_\u0424\u043b\u0430\u0436\u0435\u043a";
		el.ggDx=40;
		el.ggDy=-30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 93px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._svg_9.appendChild(me.__4);
		el=me.__3=document.createElement('div');
		els=me.__3__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NS4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMDIuOSA2NS4zOyIgeG1sbnM9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojRjdGN0Y3O30mI3hkOwoJLnN0MXtmaWxsOiM2Qzc1N0Q7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBkPSJNMCwxOC40YzAtNC4zLDAtNi41LDAuNS04LjNjMS4zLTQuNyw0LjktOC40LDkuNi05LjZDMTEuOSwwLDE0LjEsMCwxOC40LDBoMTY2YzQuMywwLDYuNSwwLDguMywwLjUmI3hkOyYjeGE7JiN4OTtjNC43LDEuMyw4LjQsNC45LDkuNiw5LjZjMC41LDEuOCwwLjUsNCwwLjUsOC4zdjI4LjVjMCw0LjMsMCw2LjUtMC41LDguM2MtMS4zLDQuNy00LjksOC40LTkuNiw5LjZjLTEuOCwwLjUt'+
			'NCwwLjUtOC4zLDAuNWgtMTY2JiN4ZDsmI3hhOyYjeDk7Yy00LjMsMC02LjUsMC04LjMtMC41Yy00LjctMS4zLTguNC00LjktOS42LTkuNkMwLDUzLjQsMCw1MS4zLDAsNDYuOVYxOC40eiIgY2xhc3M9InN0MCIvPgogPGc+CiAgPHBhdGggZD0iTTM4LjgsNDUuOVYzOWMwLjgsMCwxLjQtMC4yLDEuOS0wLjZjMC41LTAuNCwwLjktMC45LDEuMi0xLjZjMC4zLTAuNywwLjUtMS41LDAuNy0yLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjItMC45LDAuMy0xLjgsMC40LTIuOGMwLjEtMS4zLDAuMi0yLjYsMC4zLTMuOWMwLjEtMS4zLDAuMi0yLjYsMC4zLTMuOWMwLjEtMS40LDAuMi0yLjgsMC4zLTQuNG'+
			'wxNC41LDBWMzloMS43djYuOWgtMy4zdi0zLjgmI3hkOyYjeGE7JiN4OTsmI3g5O0g0Mi4xdjMuOEgzOC44eiBNNDQuMiwzOWgxMC45VjIyLjZsLTguMiwwYy0wLjEsMS4yLTAuMSwyLjMtMC4yLDMuM3MtMC4xLDIuMS0wLjIsMy4xcy0wLjIsMi4yLTAuMywzLjRjLTAuMSwxLjItMC4yLDIuMS0wLjQsMi45JiN4ZDsmI3hhOyYjeDk7JiN4OTtzLTAuMywxLjUtMC42LDIuMUM0NSwzOCw0NC43LDM4LjUsNDQuMiwzOXoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNzEuMSw0Mi42Yy0xLjcsMC0zLjItMC40LTQuNC0xLjFzLTIuMy0xLjgtMy0zLjFjLTAuNy0xLjMtMS4xLTIuOS0xLjEtNC42YzAt'+
			'MS45LDAuMy0zLjUsMS00LjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjctMS40LDEuNy0yLjQsMi45LTMuMnMyLjctMS4xLDQuNC0xLjFjMS43LDAsMy4yLDAuNCw0LjQsMS4yYzEuMiwwLjgsMi4xLDEuOSwyLjcsMy40czAuOCwzLjIsMC43LDUuM2gtMy4zdi0xLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTItMC40LTMuNC0xLjEtNC40Yy0wLjctMC45LTEuOC0xLjQtMy4zLTEuNGMtMS42LDAtMi45LDAuNS0zLjcsMS42Yy0wLjgsMS0xLjIsMi41LTEuMiw0LjVjMCwxLjksMC40LDMuMywxLjIsNC4zJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC44LDEsMiwxLjUsMy42LDEuNWMxLDAsMS45LTAuMiwyLj'+
			'ctMC43czEuMy0xLjEsMS44LTJsMy4yLDFjLTAuNywxLjUtMS43LDIuNy0zLDMuNUM3NC4yLDQyLjIsNzIuNyw0Mi42LDcxLjEsNDIuNnogTTY1LDM0LjZWMzImI3hkOyYjeGE7JiN4OTsmI3g5O2gxMi4xdjIuNkg2NXoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNODYuMyw0Mi4xdi0xNGgtNS44di0zaDE0Ljl2M2gtNS44djE0SDg2LjN6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTEwNS4zLDQyLjZjLTEuNywwLTMuMi0wLjQtNC40LTEuMmMtMS4yLTAuOC0yLjEtMS44LTIuOC0zLjJjLTAuNi0xLjQtMS0yLjktMS00LjZjMC0xLjgsMC4zLTMuMywxLTQuNyYjeGQ7JiN4YTsmI3g5OyYj'+
			'eDk7YzAuNy0xLjMsMS42LTIuNCwyLjgtMy4yYzEuMi0wLjgsMi43LTEuMSw0LjQtMS4xYzEuOSwwLDMuNCwwLjUsNC44LDEuNGMxLjMsMC45LDIuMiwyLjIsMi42LDMuOGwtMy4zLDAuOWMtMC4zLTEtMC45LTEuNy0xLjYtMi4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNy0wLjUtMS42LTAuOC0yLjUtMC44Yy0xLjEsMC0yLDAuMy0yLjcsMC44cy0xLjIsMS4yLTEuNSwyLjFjLTAuMywwLjktMC41LDEuOS0wLjUsM2MwLDEuOCwwLjQsMy4yLDEuMiw0LjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjgsMS4xLDIsMS42LDMuNSwxLjZjMS4xLDAsMS45LTAuMiwyLjYtMC43czEuMi0xLjIsMS41LTIuMW'+
			'wzLjMsMC44Yy0wLjYsMS43LTEuNSwyLjktMi44LDMuOEMxMDguNyw0Mi4yLDEwNy4yLDQyLjYsMTA1LjMsNDIuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7eiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik0xMTYsNDIuMWwwLTE3aDMuM3Y4LjJsNi43LTguMmg0LjJsLTcuMSw4LjVsNy44LDguNWgtNC41bC03LjEtOC4ydjguMkgxMTZ6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTEzNy4zLDQyLjZjLTEuMywwLTIuMy0wLjItMy4yLTAuN2MtMC45LTAuNS0xLjUtMS4xLTEuOS0xLjljLTAuNC0wLjgtMC43LTEuNi0wLjctMi41YzAtMC45LDAuMi0xLjYsMC41LTIuMyYjeGQ7JiN4YTsmI3g5OyYj'+
			'eDk7czAuOC0xLjIsMS40LTEuN2MwLjYtMC41LDEuMy0wLjgsMi4yLTEuMWMwLjgtMC4yLDEuNi0wLjQsMi42LTAuNmMxLTAuMiwyLTAuMywzLTAuNWMxLjEtMC4xLDIuMS0wLjMsMy4xLTAuNGwtMS4yLDAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMS4zLTAuMy0yLjMtMC44LTNjLTAuNi0wLjYtMS42LTEtMy0xYy0wLjksMC0xLjcsMC4yLTIuNSwwLjZjLTAuNywwLjQtMS4zLDEuMS0xLjYsMi4xbC0zLjEtMC45YzAuNC0xLjUsMS4yLTIuNiwyLjQtMy41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4yLTAuOSwyLjgtMS4zLDQuNy0xLjNjMS41LDAsMi44LDAuMyw0LDAuOGMxLjEsMC41LDIsMS4zLD'+
			'IuNSwyLjVjMC4zLDAuNiwwLjQsMS4xLDAuNSwxLjhjMC4xLDAuNiwwLjEsMS4zLDAuMSwydjEwLjVoLTIuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7di0zLjlsMC42LDAuNWMtMC43LDEuMy0xLjYsMi4zLTIuNywyLjlDMTQwLjIsNDIuMywxMzguOSw0Mi42LDEzNy4zLDQyLjZ6IE0xMzcuOSwzOS45YzAuOSwwLDEuNy0wLjIsMi40LTAuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNy0wLjMsMS4yLTAuOCwxLjYtMS4zYzAuNC0wLjUsMC43LTEsMC44LTEuNmMwLjItMC41LDAuMy0xLjEsMC4zLTEuN2MwLTAuNiwwLTEuMSwwLTEuNWwxLjEsMC40Yy0xLDAuMi0yLDAuMy0yLjgsMC40JiN4ZDsmI3hhOyYj'+
			'eDk7JiN4OTtjLTAuOCwwLjEtMS42LDAuMi0yLjMsMC40Yy0wLjcsMC4xLTEuMywwLjMtMS44LDAuNGMtMC41LDAuMi0wLjksMC4zLTEuMiwwLjZjLTAuNCwwLjItMC42LDAuNS0wLjgsMC44Yy0wLjIsMC4zLTAuMywwLjctMC4zLDEuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMC40LDAuMSwwLjgsMC4zLDEuMmMwLjIsMC40LDAuNiwwLjcsMSwwLjlDMTM2LjYsMzkuOCwxMzcuMiwzOS45LDEzNy45LDM5Ljl6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTE0OS41LDQyLjFsNC4zLTYuN2gzLjVsLTQuMyw2LjdIMTQ5LjV6IE0xNjAuOCw0Mi4xdi01LjloLTMuNGMtMC40LDAtMC45LDAtMS40LD'+
			'BjLTAuNiwwLTEuMS0wLjEtMS42LTAuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0xLjMtMC4yLTIuMy0wLjgtMy4yLTEuN2MtMC45LTAuOS0xLjMtMi4xLTEuMy0zLjZjMC0xLjUsMC40LTIuNywxLjItMy42czEuOC0xLjUsMy4xLTEuOGMwLjUtMC4xLDEuMS0wLjIsMS42LTAuMnMxLDAsMS40LDBoNi44JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMCwxN0gxNjAuOHogTTE1Ny4xLDMzLjZoMy43di01LjhoLTMuN2MtMC4yLDAtMC41LDAtMC45LDBzLTAuNywwLjEtMSwwLjJjLTAuMywwLjEtMC42LDAuMy0wLjksMC41Yy0wLjMsMC4yLTAuNSwwLjUtMC43LDAuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjIs'+
			'MC40LTAuMywwLjgtMC4zLDEuM2MwLDAuNywwLjIsMS4zLDAuNiwxLjhjMC40LDAuNSwwLjksMC44LDEuNSwwLjljMC4zLDAuMSwwLjYsMC4xLDAuOSwwLjImI3hkOyYjeGE7JiN4OTsmI3g5O0MxNTYuNiwzMy42LDE1Ni45LDMzLjYsMTU3LjEsMzMuNnoiIGNsYXNzPSJzdDEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me.__3__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u0414\u0435\u0442\u0441\u043a\u0430\u044f_\u0424\u043b\u0430\u0436\u0435\u043a";
		el.ggDx=50;
		el.ggDy=30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 93px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._svg_9.appendChild(me.__3);
		el=me.__2=document.createElement('div');
		els=me.__2__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NS4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMDIuOSA2NS4zOyIgeG1sbnM9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojRjdGN0Y3O30mI3hkOwoJLnN0MXtmaWxsOiM2Qzc1N0Q7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBkPSJNMCwxOC40YzAtNC4zLDAtNi41LDAuNS04LjNjMS4zLTQuNyw0LjktOC40LDkuNi05LjZDMTEuOSwwLDE0LjEsMCwxOC40LDBoMTY2YzQuMywwLDYuNSwwLDguMywwLjUmI3hkOyYjeGE7JiN4OTtjNC43LDEuMyw4LjQsNC45LDkuNiw5LjZjMC41LDEuOCwwLjUsNCwwLjUsOC4zdjI4LjVjMCw0LjMsMCw2LjUtMC41LDguM2MtMS4zLDQuNy00LjksOC40LTkuNiw5LjZjLTEuOCwwLjUt'+
			'NCwwLjUtOC4zLDAuNWgtMTY2JiN4ZDsmI3hhOyYjeDk7Yy00LjMsMC02LjUsMC04LjMtMC41Yy00LjctMS4zLTguNC00LjktOS42LTkuNkMwLDUzLjQsMCw1MS4zLDAsNDYuOVYxOC40eiIgY2xhc3M9InN0MCIvPgogPGc+CiAgPHBhdGggZD0iTTM2LjQsNDAuMlYxNy42aDMuM3YxMC42bDkuNS0xMC42aDQuMWwtMTAsMTEuMUw1NCw0MC4yaC00LjJMMzkuNywyOS40djEwLjhIMzYuNHoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNjIuMyw0MC43Yy0xLjcsMC0zLjItMC40LTQuNC0xLjFzLTIuMi0xLjgtMi45LTMuMmMtMC43LTEuMy0xLTIuOS0xLTQuN2MwLTEuOCwwLjMtMy4zLDEtNC43Ji'+
			'N4ZDsmI3hhOyYjeDk7JiN4OTtjMC43LTEuMywxLjctMi40LDIuOS0zLjFjMS4yLTAuOCwyLjctMS4xLDQuNC0xLjFjMS43LDAsMy4yLDAuNCw0LjQsMS4xYzEuMiwwLjgsMi4yLDEuOCwyLjksMy4yYzAuNywxLjMsMSwyLjksMSw0LjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDEuOC0wLjMsMy4zLTEsNC43Yy0wLjcsMS4zLTEuNywyLjQtMi45LDMuMkM2NS41LDQwLjMsNjQsNDAuNyw2Mi4zLDQwLjd6IE02Mi4zLDM3LjZjMS42LDAsMi44LTAuNSwzLjYtMS42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC44LTEuMSwxLjItMi41LDEuMi00LjJjMC0xLjgtMC40LTMuMi0xLjItNC4zYy0wLjgtMS4xLTIt'+
			'MS42LTMuNi0xLjZjLTEuMSwwLTIsMC4yLTIuNywwLjdjLTAuNywwLjUtMS4yLDEuMi0xLjYsMi4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMywwLjktMC41LDEuOS0wLjUsM2MwLDEuOCwwLjQsMy4yLDEuMiw0LjNDNTkuNiwzNy4xLDYwLjgsMzcuNiw2Mi4zLDM3LjZ6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTc0LjEsNDcuOFYyMy4yaDIuOXYxMi4yaDAuNHYxMi4zSDc0LjF6IE04Mi4xLDQwLjdjLTEuNiwwLTMtMC40LTQuMS0xLjJjLTEuMS0wLjgtMS45LTEuOS0yLjUtMy4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNi0xLjQtMC45LTIuOS0wLjktNC42YzAtMS43LDAuMy0zLjIsMC'+
			'44LTQuNnMxLjQtMi40LDIuNS0zLjJjMS4xLTAuOCwyLjQtMS4yLDQuMS0xLjJjMS42LDAsMywwLjQsNC4xLDEuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMiwwLjgsMi4xLDEuOCwyLjcsMy4yYzAuNiwxLjMsMC45LDIuOSwwLjksNC42YzAsMS43LTAuMywzLjItMC45LDQuNmMtMC42LDEuNC0xLjUsMi40LTIuNywzLjJDODUuMSw0MC4zLDgzLjcsNDAuNyw4Mi4xLDQwLjd6JiN4ZDsmI3hhOyYjeDk7JiN4OTsgTTgxLjcsMzcuN2MxLDAsMS45LTAuMywyLjYtMC44YzAuNy0wLjUsMS4yLTEuMywxLjUtMi4yYzAuMy0wLjksMC41LTEuOSwwLjUtM2MwLTEuMS0wLjItMi4xLTAuNS0zYy0wLjMtMC45'+
			'LTAuOS0xLjYtMS42LTIuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjctMC41LTEuNi0wLjgtMi43LTAuOGMtMSwwLTEuOSwwLjMtMi41LDAuOGMtMC43LDAuNS0xLjIsMS4yLTEuNSwyLjFzLTAuNSwxLjktMC41LDMuMWMwLDEuMiwwLjIsMi4yLDAuNSwzLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMsMC45LDAuOCwxLjYsMS41LDIuMVM4MC42LDM3LjcsODEuNywzNy43eiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik0xMDcuNiwyMy4ydjE3aC0zLjJWMjguNEw5Niw0MC4yaC0yLjd2LTE3aDMuMnYxMS42bDguNS0xMS42SDEwNy42eiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik0xMTAuOC'+
			'w0NHYtNi40YzAuOSwwLDEuNi0wLjMsMi0wLjlzMC43LTEuNywxLTMuMmMwLjEtMC45LDAuMy0xLjksMC40LTIuOWMwLjEtMSwwLjItMi4xLDAuMy0zLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjEtMS4yLDAuMS0yLjUsMC4yLTRoMTIuMnYxNC40aDEuN1Y0NGgtMy4xdi0zLjhoLTExLjRWNDRIMTEwLjh6IE0xMTUuNSwzNy42aDhWMjUuOWgtNmMwLDAuNy0wLjEsMS40LTAuMSwyLjEmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNy0wLjEsMS41LTAuMiwyLjJzLTAuMSwxLjQtMC4yLDIuMWMtMC4xLDAuNy0wLjIsMS4zLTAuMywxLjhjLTAuMSwwLjgtMC4zLDEuNS0wLjQsMi4xUzExNS45LDM3LjIs'+
			'MTE1LjUsMzcuNnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNMTM5LDQwLjdjLTEuNywwLTMuMi0wLjQtNC40LTEuMWMtMS4yLTAuOC0yLjItMS44LTIuOS0zLjJjLTAuNy0xLjMtMS0yLjktMS00LjdjMC0xLjgsMC4zLTMuMywxLTQuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNy0xLjMsMS43LTIuNCwyLjktMy4xYzEuMi0wLjgsMi43LTEuMSw0LjQtMS4xYzEuNywwLDMuMiwwLjQsNC40LDEuMWMxLjIsMC44LDIuMiwxLjgsMi45LDMuMmMwLjcsMS4zLDEsMi45LDEsNC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwxLjgtMC4zLDMuMy0xLDQuN3MtMS43LDIuNC0yLjksMy4yQzE0Mi4yLDQwLj'+
			'MsMTQwLjcsNDAuNywxMzksNDAuN3ogTTEzOSwzNy42YzEuNiwwLDIuOC0wLjUsMy42LTEuNmMwLjgtMS4xLDEuMi0yLjUsMS4yLTQuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMS44LTAuNC0zLjItMS4yLTQuM2MtMC44LTEuMS0yLTEuNi0zLjYtMS42Yy0xLjEsMC0yLDAuMi0yLjcsMC43Yy0wLjcsMC41LTEuMiwxLjItMS42LDIuMWMtMC4zLDAuOS0wLjUsMS45LTAuNSwzJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwxLjgsMC40LDMuMiwxLjIsNC4zQzEzNi4yLDM3LjEsMTM3LjQsMzcuNiwxMzksMzcuNnoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNMTUwLjgsNDcuOFYyMy4yaDIuOXYxMi4y'+
			'aDAuNHYxMi4zSDE1MC44eiBNMTU4LjgsNDAuN2MtMS42LDAtMy0wLjQtNC4xLTEuMmMtMS4xLTAuOC0xLjktMS45LTIuNS0zLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC42LTEuNC0wLjktMi45LTAuOS00LjZjMC0xLjcsMC4zLTMuMiwwLjgtNC42czEuNC0yLjQsMi41LTMuMmMxLjEtMC44LDIuNC0xLjIsNC4xLTEuMmMxLjYsMCwzLDAuNCw0LjEsMS4yczIuMSwxLjgsMi43LDMuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7czAuOSwyLjksMC45LDQuNmMwLDEuNy0wLjMsMy4yLTAuOSw0LjZjLTAuNiwxLjQtMS41LDIuNC0yLjcsMy4yQzE2MS44LDQwLjMsMTYwLjQsNDAuNywxNTguOCw0MC43eiBNMT'+
			'U4LjQsMzcuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEsMCwxLjktMC4zLDIuNi0wLjhjMC43LTAuNSwxLjItMS4zLDEuNS0yLjJjMC4zLTAuOSwwLjUtMS45LDAuNS0zYzAtMS4xLTAuMi0yLjEtMC41LTNjLTAuMy0wLjktMC45LTEuNi0xLjYtMi4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNy0wLjUtMS42LTAuOC0yLjctMC44Yy0xLDAtMS45LDAuMy0yLjUsMC44Yy0wLjcsMC41LTEuMiwxLjItMS41LDIuMWMtMC4zLDAuOS0wLjUsMS45LTAuNSwzLjFjMCwxLjIsMC4yLDIuMiwwLjUsMy4xJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC4zLDAuOSwwLjgsMS42LDEuNSwyLjFDMTU2LjQsMzcuNSwxNTcu'+
			'MywzNy43LDE1OC40LDM3Ljd6IiBjbGFzcz0ic3QxIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me.__2__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u041a\u043e\u0440\u0438\u0434\u043e\u0440_\u0424\u043b\u0430\u0436\u0435\u043a";
		el.ggDx=60;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 93px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._svg_9.appendChild(me.__2);
		el=me.__1=document.createElement('div');
		els=me.__1__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NS4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMDIuOSA2NS4zOyIgeG1sbnM9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojRjdGN0Y3O30mI3hkOwoJLnN0MXtmaWxsOiM2Qzc1N0Q7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBkPSJNMCwxOC40YzAtNC4zLDAtNi41LDAuNS04LjNjMS4zLTQuNyw0LjktOC40LDkuNi05LjZDMTEuOSwwLDE0LjEsMCwxOC40LDBoMTY2YzQuMywwLDYuNSwwLDguMywwLjUmI3hkOyYjeGE7JiN4OTtjNC43LDEuMyw4LjQsNC45LDkuNiw5LjZjMC41LDEuOCwwLjUsNCwwLjUsOC4zdjI4LjVjMCw0LjMsMCw2LjUtMC41LDguM2MtMS4zLDQuNy00LjksOC40LTkuNiw5LjZjLTEuOCwwLjUt'+
			'NCwwLjUtOC4zLDAuNWgtMTY2JiN4ZDsmI3hhOyYjeDk7Yy00LjMsMC02LjUsMC04LjMtMC41Yy00LjctMS4zLTguNC00LjktOS42LTkuNkMwLDUzLjQsMCw1MS4zLDAsNDYuOVYxOC40eiIgY2xhc3M9InN0MCIvPgogPGc+CiAgPHBhdGggZD0iTTMyLjcsNDMuOFYyMS4xaDE0LjV2My4xSDM2djE5LjZIMzIuN3oiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNNTQuNiw0NC4yYy0xLjcsMC0zLjItMC40LTQuNC0xLjFjLTEuMi0wLjgtMi4yLTEuOC0yLjktMy4yYy0wLjctMS4zLTEtMi45LTEtNC43YzAtMS44LDAuMy0zLjMsMS00LjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjctMS4zLDEuNy0yLj'+
			'QsMi45LTMuMWMxLjItMC44LDIuNy0xLjEsNC40LTEuMWMxLjcsMCwzLjIsMC40LDQuNCwxLjFjMS4yLDAuOCwyLjIsMS44LDIuOSwzLjJjMC43LDEuMywxLDIuOSwxLDQuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMS44LTAuMywzLjMtMSw0LjdzLTEuNywyLjQtMi45LDMuMkM1Ny43LDQzLjksNTYuMyw0NC4yLDU0LjYsNDQuMnogTTU0LjYsNDEuMWMxLjYsMCwyLjgtMC41LDMuNi0xLjZjMC44LTEuMSwxLjItMi41LDEuMi00LjImI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTEuOC0wLjQtMy4yLTEuMi00LjNjLTAuOC0xLjEtMi0xLjYtMy42LTEuNmMtMS4xLDAtMiwwLjItMi43LDAuN2MtMC43LDAu'+
			'NS0xLjIsMS4yLTEuNiwyLjFjLTAuMywwLjktMC41LDEuOS0wLjUsMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAsMS44LDAuNCwzLjIsMS4yLDQuM0M1MS44LDQwLjYsNTMsNDEuMSw1NC42LDQxLjF6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTczLjcsNDQuMmMtMS43LDAtMy4yLTAuNC00LjQtMS4yYy0xLjItMC44LTIuMi0xLjgtMi44LTMuMnMtMS0yLjktMS00LjZjMC0xLjgsMC4zLTMuMywxLTQuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNy0xLjMsMS42LTIuNCwyLjgtMy4yYzEuMi0wLjgsMi43LTEuMSw0LjQtMS4xYzEuOSwwLDMuNCwwLjUsNC44LDEuNGMxLjMsMC45LDIuMiwyLjIsMi'+
			'42LDMuOGwtMy4zLDAuOWMtMC4zLTEtMC45LTEuNy0xLjYtMi4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNy0wLjUtMS42LTAuOC0yLjUtMC44Yy0xLjEsMC0yLDAuMy0yLjcsMC44Yy0wLjcsMC41LTEuMiwxLjItMS41LDIuMWMtMC4zLDAuOS0wLjUsMS45LTAuNSwzYzAsMS44LDAuNCwzLjIsMS4yLDQuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7czIsMS42LDMuNSwxLjZjMS4xLDAsMS45LTAuMiwyLjYtMC43czEuMi0xLjIsMS41LTIuMWwzLjMsMC44Yy0wLjYsMS43LTEuNSwyLjktMi44LDMuOEM3Nyw0My44LDc1LjUsNDQuMiw3My43LDQ0LjJ6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTg4'+
			'LjUsNDMuOHYtMTRoLTUuOHYtM2gxNC45djNoLTUuOHYxNEg4OC41eiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik0xMTQuOSwyNi44djE3aC0zLjJWMzEuOWwtOC41LDExLjhoLTIuN3YtMTdoMy4ydjExLjZsOC41LTExLjZIMTE0Ljl6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTExOS4zLDQzLjh2LTE3aDMuM3Y2LjloOC4zdi02LjloMy4zdjE3aC0zLjN2LTdoLTguM3Y3SDExOS4zeiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik0xNDMuNCw0NC4yYy0xLjMsMC0yLjMtMC4yLTMuMi0wLjdjLTAuOS0wLjUtMS41LTEuMS0xLjktMS45Yy0wLjQtMC44LTAuNy0xLjYtMC43LTIuNWMwLT'+
			'AuOSwwLjItMS42LDAuNS0yLjMmI3hkOyYjeGE7JiN4OTsmI3g5O3MwLjgtMS4yLDEuNC0xLjdjMC42LTAuNSwxLjMtMC44LDIuMi0xLjFjMC44LTAuMiwxLjYtMC40LDIuNi0wLjZjMS0wLjIsMi0wLjMsMy0wLjVjMS4xLTAuMSwyLjEtMC4zLDMuMS0wLjRsLTEuMiwwLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLTEuMy0wLjMtMi4zLTAuOC0zYy0wLjYtMC42LTEuNi0xLTMtMWMtMC45LDAtMS43LDAuMi0yLjUsMC42Yy0wLjcsMC40LTEuMywxLjEtMS42LDIuMWwtMy4xLTAuOWMwLjQtMS41LDEuMi0yLjYsMi40LTMuNSYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMi0wLjksMi44LTEuMyw0LjctMS4z'+
			'YzEuNSwwLDIuOCwwLjMsNCwwLjhjMS4xLDAuNSwyLDEuMywyLjUsMi41YzAuMywwLjYsMC40LDEuMSwwLjUsMS44YzAuMSwwLjYsMC4xLDEuMywwLjEsMnYxMC41aC0yLjkmI3hkOyYjeGE7JiN4OTsmI3g5O3YtMy45bDAuNiwwLjVjLTAuNywxLjMtMS42LDIuMy0yLjcsMi45QzE0Ni4zLDQzLjksMTQ1LDQ0LjIsMTQzLjQsNDQuMnogTTE0NCw0MS42YzAuOSwwLDEuNy0wLjIsMi40LTAuNWMwLjctMC4zLDEuMi0wLjgsMS42LTEuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNC0wLjUsMC43LTEsMC44LTEuNmMwLjItMC41LDAuMy0xLjEsMC4zLTEuN2MwLTAuNiwwLTEuMSwwLTEuNWwxLjEsMC40Yy'+
			'0xLDAuMi0yLDAuMy0yLjgsMC40Yy0wLjgsMC4xLTEuNiwwLjItMi4zLDAuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjcsMC4xLTEuMywwLjMtMS44LDAuNGMtMC41LDAuMi0wLjksMC4zLTEuMiwwLjZjLTAuNCwwLjItMC42LDAuNS0wLjgsMC44Yy0wLjIsMC4zLTAuMywwLjctMC4zLDEuMWMwLDAuNCwwLjEsMC44LDAuMywxLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjIsMC40LDAuNiwwLjcsMSwwLjlDMTQyLjcsNDEuNCwxNDMuMyw0MS42LDE0NCw0MS42eiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik0xNTUuNiw0My44bDQuMy02LjdoMy41bC00LjMsNi43SDE1NS42eiBNMTY2LjksNDMu'+
			'OHYtNS45aC0zLjRjLTAuNCwwLTAuOSwwLTEuNCwwYy0wLjYsMC0xLjEtMC4xLTEuNi0wLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMS4zLTAuMi0yLjMtMC44LTMuMi0xLjdjLTAuOS0wLjktMS4zLTIuMS0xLjMtMy42YzAtMS41LDAuNC0yLjcsMS4yLTMuNnMxLjgtMS41LDMuMS0xLjhjMC41LTAuMSwxLjEtMC4yLDEuNi0wLjJzMSwwLDEuNCwwaDYuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDAsMTdIMTY2Ljl6IE0xNjMuMiwzNS4yaDMuN3YtNS44aC0zLjdjLTAuMiwwLTAuNSwwLTAuOSwwcy0wLjcsMC4xLTEsMC4yYy0wLjMsMC4xLTAuNiwwLjMtMC45LDAuNWMtMC4zLDAuMi0wLjUsMC41LTAuNy'+
			'wwLjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4yLDAuNC0wLjMsMC44LTAuMywxLjNjMCwwLjcsMC4yLDEuMywwLjYsMS44YzAuNCwwLjUsMC45LDAuOCwxLjUsMC45YzAuMywwLjEsMC42LDAuMSwwLjksMC4yQzE2Mi44LDM1LjIsMTYzLDM1LjIsMTYzLjIsMzUuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me.__1__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u0413\u043e\u0441\u0442\u0438\u043d\u0430\u044f_\u0424\u043b\u0430\u0436\u0435\u043a";
		el.ggDx=-50;
		el.ggDy=-30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 93px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._svg_9.appendChild(me.__1);
		el=me.__0=document.createElement('div');
		els=me.__0__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI2LjQuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NS4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMDIuOSA2NS4zOyIgeG1sbnM9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojRjdGN0Y3O30mI3hkOwoJLnN0MXtmaWxsOiM2Qzc1N0Q7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBkPSJNMCwxOC40YzAtNC4zLDAtNi41LDAuNS04LjNjMS4zLTQuNyw0LjktOC40LDkuNi05LjZDMTEuOSwwLDE0LjEsMCwxOC40LDBoMTY2YzQuMywwLDYuNSwwLDguMywwLjUmI3hkOyYjeGE7JiN4OTtjNC43LDEuMyw4LjQsNC45LDkuNiw5LjZjMC41LDEuOCwwLjUsNCwwLjUsOC4zdjI4LjVjMCw0LjMsMCw2LjUtMC41LDguM2MtMS4zLDQuNy00LjksOC40LTkuNiw5LjZjLTEuOCwwLjUt'+
			'NCwwLjUtOC4zLDAuNWgtMTY2JiN4ZDsmI3hhOyYjeDk7Yy00LjMsMC02LjUsMC04LjMtMC41Yy00LjctMS4zLTguNC00LjktOS42LTkuNkMwLDUzLjQsMCw1MS4zLDAsNDYuOVYxOC40eiIgY2xhc3M9InN0MCIvPgogPGc+CiAgPHBhdGggZD0iTTM2LjYsNDQuOWMtMi40LDAtNC40LTAuNS02LTEuNXMtMi45LTIuNS0zLjgtNC4zcy0xLjMtNC0xLjMtNi40YzAtMi40LDAuNC00LjYsMS4zLTYuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuOS0xLjgsMi4xLTMuMywzLjgtNC4zczMuNy0xLjUsNi0xLjVjMi43LDAsNSwwLjcsNi43LDIuMWMxLjgsMS40LDMsMy4yLDMuNyw1LjVsLTMuNSwwLjljLTAuNS'+
			'0xLjYtMS4zLTIuOS0yLjQtMy45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTEuMi0wLjktMi43LTEuNC00LjUtMS40Yy0xLjcsMC0zLjEsMC40LTQuMiwxLjFjLTEuMSwwLjgtMS45LDEuOC0yLjUsMy4yYy0wLjYsMS4zLTAuOCwyLjktMC44LDQuN2MwLDEuOCwwLjMsMy40LDAuOCw0LjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjYsMS40LDEuNCwyLjQsMi41LDMuMmMxLjEsMC44LDIuNSwxLjEsNC4yLDEuMWMxLjksMCwzLjQtMC41LDQuNS0xLjRjMS4yLTAuOSwyLTIuMiwyLjQtMy45bDMuNSwwLjljLTAuNywyLjMtMS45LDQuMi0zLjcsNS41JiN4ZDsmI3hhOyYjeDk7JiN4OTtDNDEuNiw0NC4yLDM5'+
			'LjMsNDQuOSwzNi42LDQ0Ljl6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTU1LjIsNDQuNFYyOS44aC02di0zLjFoMTUuNXYzLjFoLTZ2MTQuNkg1NS4yeiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik03NS4xLDQ0LjljLTEuOCwwLTMuMy0wLjQtNC42LTEuMmMtMS4zLTAuOC0yLjMtMS45LTMtMy4zYy0wLjctMS40LTEuMS0zLTEuMS00LjhjMC0xLjgsMC40LTMuNSwxLjEtNC45JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC43LTEuNCwxLjctMi41LDMtMy4zYzEuMy0wLjgsMi44LTEuMiw0LjUtMS4yYzEuOCwwLDMuMywwLjQsNC42LDEuMmMxLjMsMC44LDIuMywxLjksMywzLjNjMC43LDEuNC'+
			'wxLjEsMywxLjEsNC44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMCwxLjgtMC40LDMuNS0xLjEsNC45Yy0wLjcsMS40LTEuNywyLjUtMywzLjNDNzguMyw0NC41LDc2LjgsNDQuOSw3NS4xLDQ0Ljl6IE03NS4xLDQxLjdjMS43LDAsMi45LTAuNiwzLjgtMS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC44LTEuMSwxLjItMi42LDEuMi00LjRjMC0xLjgtMC40LTMuMy0xLjMtNC40Yy0wLjgtMS4xLTIuMS0xLjctMy44LTEuN2MtMS4xLDAtMi4xLDAuMy0yLjgsMC44Yy0wLjcsMC41LTEuMywxLjItMS42LDIuMSYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC45LTAuNSwyLTAuNSwzLjJjMCwxLjksMC40LDMu'+
			'MywxLjMsNC40QzcyLjIsNDEuMSw3My40LDQxLjcsNzUuMSw0MS43eiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik04NS43LDQ0LjR2LTIuOWMwLjcsMC4xLDEuMiwwLjEsMS41LTAuMWMwLjMtMC4yLDAuNi0wLjQsMC44LTAuOWMwLjItMC40LDAuMy0xLDAuNC0xLjYmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjItMSwwLjMtMi4xLDAuNS0zLjRjMC4xLTEuMywwLjMtMi42LDAuNC00LjFjMC4xLTEuNSwwLjItMywwLjMtNC43aDEyLjd2MTcuNmgtMy40VjMwaC02LjJjLTAuMSwwLjktMC4xLDEuOC0wLjIsMi43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMSwxLTAuMiwxLjktMC4zLDIuOWMtMC4xLD'+
			'AuOS0wLjIsMS44LTAuMywyLjdjLTAuMSwwLjgtMC4yLDEuNS0wLjMsMi4xYy0wLjIsMS4yLTAuNSwyLjEtMSwyLjhjLTAuNCwwLjctMSwxLjEtMS44LDEuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7Qzg4LDQ0LjcsODYuOSw0NC43LDg1LjcsNDQuNHoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNMTE0LjQsNDQuOWMtMS44LDAtMy4zLTAuNC00LjYtMS4yYy0xLjMtMC44LTIuMy0xLjktMy0zLjNjLTAuNy0xLjQtMS4xLTMtMS4xLTQuOGMwLTEuOCwwLjQtMy41LDEuMS00LjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjctMS40LDEuNy0yLjUsMy0zLjNjMS4zLTAuOCwyLjgtMS4yLDQuNS0xLjJjMS44'+
			'LDAsMy4zLDAuNCw0LjYsMS4yYzEuMywwLjgsMi4zLDEuOSwzLDMuM2MwLjcsMS40LDEuMSwzLDEuMSw0LjgmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDEuOC0wLjQsMy41LTEuMSw0LjljLTAuNywxLjQtMS43LDIuNS0zLDMuM0MxMTcuNyw0NC41LDExNi4yLDQ0LjksMTE0LjQsNDQuOXogTTExNC40LDQxLjdjMS43LDAsMi45LTAuNiwzLjgtMS43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC44LTEuMSwxLjItMi42LDEuMi00LjRjMC0xLjgtMC40LTMuMy0xLjMtNC40Yy0wLjgtMS4xLTIuMS0xLjctMy44LTEuN2MtMS4xLDAtMi4xLDAuMy0yLjgsMC44Yy0wLjcsMC41LTEuMywxLjItMS42LDIuMSYjeG'+
			'Q7JiN4YTsmI3g5OyYjeDk7Yy0wLjQsMC45LTAuNSwyLTAuNSwzLjJjMCwxLjksMC40LDMuMywxLjMsNC40QzExMS41LDQxLjEsMTEyLjgsNDEuNywxMTQuNCw0MS43eiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik0xMjYuNiw0NC40VjI2LjhoNy44YzAuNSwwLDEsMCwxLjUsMC4xYzAuNSwwLjEsMSwwLjEsMS40LDAuM2MwLjksMC4zLDEuNywwLjcsMi4zLDEuNWMwLjYsMC43LDAuOSwxLjcsMC45LDMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLDAuNy0wLjEsMS4zLTAuMywxLjhjLTAuMiwwLjUtMC41LDAuOS0wLjksMS4yYy0wLjIsMC4yLTAuNCwwLjMtMC42LDAuNGMtMC4yLDAuMS0wLjQsMC4y'+
			'LTAuNiwwLjNjMC40LDAuMSwwLjgsMC4yLDEuMiwwLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjYsMC4zLDEuMSwwLjgsMS41LDEuNGMwLjQsMC42LDAuNiwxLjQsMC42LDIuNGMwLDEuMi0wLjMsMi4yLTAuOSwzYy0wLjYsMC44LTEuNCwxLjMtMi40LDEuNmMtMC40LDAuMS0wLjksMC4yLTEuNCwwLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC41LDAtMSwwLjEtMS41LDAuMUgxMjYuNnogTTEzMC4xLDM0LjJoMy44YzAuMywwLDAuNiwwLDEtMC4xYzAuMywwLDAuNi0wLjEsMC44LTAuMmMwLjQtMC4yLDAuNy0wLjQsMC45LTAuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuMi0wLjQsMC4zLTAuOCwwLj'+
			'MtMS4zYzAtMC41LTAuMS0wLjktMC4zLTEuM2MtMC4yLTAuNC0wLjYtMC43LTEtMC44Yy0wLjMtMC4xLTAuNy0wLjItMS4xLTAuMmMtMC40LDAtMC43LDAtMC44LDBoLTMuN1YzNC4yeiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0xMzAuMSw0MS43aDQuOGMwLjIsMCwwLjUsMCwwLjgtMC4xYzAuMywwLDAuNi0wLjEsMC44LTAuMmMwLjUtMC4yLDAuOC0wLjQsMS4xLTAuOGMwLjItMC40LDAuMy0wLjgsMC4zLTEuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMC42LTAuMi0xLjEtMC41LTEuNWMtMC4zLTAuNC0wLjctMC42LTEuMi0wLjdjLTAuMi0wLjEtMC41LTAuMS0wLjctMC4xYy0wLjMsMC0wLjUsMC0w'+
			'LjcsMGgtNC43VjQxLjd6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTE0OS42LDQ0LjljLTEuMywwLTIuNC0wLjItMy4zLTAuN2MtMC45LTAuNS0xLjUtMS4xLTItMS45Yy0wLjUtMC44LTAuNy0xLjctMC43LTIuNmMwLTAuOSwwLjItMS43LDAuNS0yLjQmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjMtMC43LDAuOC0xLjIsMS40LTEuN2MwLjYtMC41LDEuNC0wLjksMi4zLTEuMmMwLjgtMC4yLDEuNy0wLjQsMi43LTAuNmMxLTAuMiwyLTAuMywzLjEtMC41YzEuMS0wLjIsMi4yLTAuMywzLjMtMC41bC0xLjIsMC43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC0xLjQtMC4zLTIuNC0wLjktMy4xYy0wLj'+
			'YtMC43LTEuNi0xLTMuMS0xYy0wLjksMC0xLjgsMC4yLTIuNSwwLjZjLTAuOCwwLjQtMS4zLDEuMS0xLjYsMi4xbC0zLjItMWMwLjQtMS41LDEuMy0yLjcsMi41LTMuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMi0wLjksMi45LTEuMyw0LjktMS4zYzEuNiwwLDMsMC4zLDQuMSwwLjhjMS4yLDAuNSwyLDEuNCwyLjYsMi42YzAuMywwLjYsMC41LDEuMiwwLjUsMS44YzAuMSwwLjYsMC4xLDEuMywwLjEsMi4xdjEwLjloLTN2LTQmI3hkOyYjeGE7JiN4OTsmI3g5O2wwLjYsMC41Yy0wLjcsMS40LTEuNywyLjQtMi44LDNDMTUyLjcsNDQuNiwxNTEuMyw0NC45LDE0OS42LDQ0Ljl6IE0xNTAuMyw0Mi4x'+
			'YzEsMCwxLjgtMC4yLDIuNS0wLjVjMC43LTAuMywxLjMtMC44LDEuNy0xLjMmI3hkOyYjeGE7JiN4OTsmI3g5O3MwLjctMS4xLDAuOC0xLjdjMC4yLTAuNSwwLjMtMS4xLDAuMy0xLjhjMC0wLjcsMC0xLjIsMC0xLjZsMS4xLDAuNGMtMS4xLDAuMi0yLjEsMC4zLTIuOSwwLjRjLTAuOSwwLjEtMS43LDAuMy0yLjQsMC40JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuNywwLjEtMS4zLDAuMy0xLjksMC40Yy0wLjUsMC4yLTAuOSwwLjQtMS4yLDAuNmMtMC40LDAuMi0wLjcsMC41LTAuOSwwLjhjLTAuMiwwLjMtMC4zLDAuNy0wLjMsMS4yYzAsMC41LDAuMSwwLjksMC4zLDEuMyYjeGQ7JiN4YTsmI3g5Oy'+
			'YjeDk7YzAuMiwwLjQsMC42LDAuNywxLDAuOUMxNDguOSw0MiwxNDkuNSw0Mi4xLDE1MC4zLDQyLjF6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTE2Mi4zLDQ0LjRsNC41LTdoMy42bC00LjQsN0gxNjIuM3ogTTE3NCw0NC40di02LjFoLTMuNWMtMC40LDAtMC45LDAtMS41LDBjLTAuNiwwLTEuMS0wLjEtMS42LTAuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0xLjMtMC4yLTIuNC0wLjgtMy4zLTEuN2MtMC45LTAuOS0xLjMtMi4yLTEuMy0zLjhjMC0xLjUsMC40LTIuOCwxLjItMy43czEuOS0xLjUsMy4yLTEuOGMwLjYtMC4xLDEuMS0wLjIsMS43LTAuMiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAu'+
			'NiwwLDEuMSwwLDEuNSwwaDdsMCwxNy42SDE3NHogTTE3MC4yLDM1LjVoMy44di02aC0zLjhjLTAuMiwwLTAuNSwwLTAuOSwwYy0wLjMsMC0wLjcsMC4xLTEsMC4yYy0wLjMsMC4xLTAuNywwLjMtMSwwLjUmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4zLDAuMy0wLjYsMC42LTAuOCwxYy0wLjIsMC40LTAuMywwLjgtMC4zLDEuM2MwLDAuOCwwLjIsMS40LDAuNiwxLjljMC40LDAuNSwwLjksMC44LDEuNSwxYzAuMywwLjEsMC42LDAuMSwwLjksMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMTY5LjcsMzUuNSwxNzAsMzUuNSwxNzAuMiwzNS41eiIgY2xhc3M9InN0MSIvPgogPC9nPgo8L3N2Zz4K';
		me.__0__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u0421\u0442\u043e\u043b\u043e\u0432\u0430\u044f \u0444\u043b\u0430\u0436\u0435\u043a";
		el.ggDx=-50;
		el.ggDy=-30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 93px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__0.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._svg_9.appendChild(me.__0);
		el=me.__=document.createElement('div');
		els=me.____img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0iX9Ch0LvQvtC5XzEiIHhtbDpzcGFjZT0icHJlc2VydmUiIHZpZXdCb3g9IjAgMCAyMDIuOSA2NS4zIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMDIuOSA2NS4zOyIgeG1sbnM9Imh0dHA6Ly93d3'+
			'cudzMub3JnLzIwMDAvc3ZnIj4KIDxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+JiN4ZDsKCS5zdDB7ZmlsbDojRjdGN0Y3O30mI3hkOwoJLnN0MXtmaWxsOiM2Qzc1N0Q7fSYjeGQ7Cjwvc3R5bGU+CiA8cGF0aCBkPSJNMCwxOC40YzAtNC4zLDAtNi41LDAuNS04LjNjMS4zLTQuNyw0LjktOC40LDkuNi05LjZDMTEuOSwwLDE0LjEsMCwxOC40LDBoMTY2YzQuMywwLDYuNSwwLDguMywwLjUmI3hkOyYjeGE7JiN4OTtjNC43LDEuMyw4LjQsNC45LDkuNiw5LjZjMC41LDEuOCwwLjUsNCwwLjUsOC4zdjI4LjVjMCw0LjMsMCw2LjUtMC41LDguM2MtMS4zLDQuNy00LjksOC40LTkuNiw5LjZjLTEuOCwwLjUt'+
			'NCwwLjUtOC4zLDAuNWgtMTY2JiN4ZDsmI3hhOyYjeDk7Yy00LjMsMC02LjUsMC04LjMtMC41Yy00LjctMS4zLTguNC00LjktOS42LTkuNkMwLDUzLjQsMCw1MS4zLDAsNDYuOVYxOC40eiIgY2xhc3M9InN0MCIvPgogPGc+CiAgPHBhdGggZD0iTTIzLjgsNDQuNWMtMi4zLDAtNC4yLTAuNS01LjgtMS41Yy0xLjYtMS0yLjgtMi40LTMuNy00LjFzLTEuMy0zLjgtMS4zLTYuMnMwLjQtNC40LDEuMy02LjImI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjgtMS44LDIuMS0zLjIsMy43LTQuMWMxLjYtMSwzLjUtMS41LDUuOC0xLjVjMi42LDAsNC44LDAuNyw2LjUsMmMxLjcsMS4zLDIuOSwzLjEsMy42LDUuM2'+
			'wtMy4zLDAuOWMtMC40LTEuNi0xLjItMi44LTIuNC0zLjcmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMS4xLTAuOS0yLjYtMS40LTQuNC0xLjRjLTEuNiwwLTIuOSwwLjQtNCwxLjFjLTEuMSwwLjctMS45LDEuNy0yLjQsM2MtMC41LDEuMy0wLjgsMi44LTAuOCw0LjZjMCwxLjcsMC4zLDMuMiwwLjgsNC42JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC41LDEuMywxLjMsMi4zLDIuNCwzczIuNCwxLjEsNCwxLjFjMS44LDAsMy4zLTAuNSw0LjQtMS40YzEuMS0wLjksMS45LTIuMSwyLjQtMy43bDMuMywwLjljLTAuNywyLjItMS45LDQtMy42LDUuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7QzI4LjYsNDMuOCwyNi40'+
			'LDQ0LjUsMjMuOCw0NC41eiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik0zOS43LDQ0bDIuOS01LjlsLTcuOS0xNi44aDMuN2w1LjksMTMuM2w2LjEtMTMuM2gzLjVMNDMuMiw0NEgzOS43eiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik03MC44LDQ0LjVjLTIuMywwLTQuMi0wLjUtNS44LTEuNWMtMS42LTEtMi44LTIuNC0zLjctNC4xcy0xLjMtMy44LTEuMy02LjJzMC40LTQuNCwxLjMtNi4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC44LTEuOCwyLjEtMy4yLDMuNy00LjFjMS42LTEsMy41LTEuNSw1LjgtMS41YzIuNiwwLDQuOCwwLjcsNi41LDJjMS43LDEuMywyLjksMy4xLDMuNiw1LjNsLT'+
			'MuMywwLjljLTAuNC0xLjYtMS4yLTIuOC0yLjQtMy43JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTEuMS0wLjktMi42LTEuNC00LjQtMS40Yy0xLjYsMC0yLjksMC40LTQsMS4xYy0xLjEsMC43LTEuOSwxLjctMi40LDNjLTAuNSwxLjMtMC44LDIuOC0wLjgsNC42YzAsMS43LDAuMywzLjIsMC44LDQuNiYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNSwxLjMsMS4zLDIuMywyLjQsM3MyLjQsMS4xLDQsMS4xYzEuOCwwLDMuMy0wLjUsNC40LTEuNGMxLjEtMC45LDEuOS0yLjEsMi40LTMuN2wzLjMsMC45Yy0wLjcsMi4yLTEuOSw0LTMuNiw1LjMmI3hkOyYjeGE7JiN4OTsmI3g5O0M3NS42LDQzLjgsNzMuNCw0'+
			'NC41LDcwLjgsNDQuNXoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNODQuMyw0NFYyN2gxNC4zdjE3aC0zLjNWMzAuMWgtNy44VjQ0SDg0LjN6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTEwNy45LDQ0LjVjLTEuMywwLTIuMy0wLjItMy4yLTAuN2MtMC45LTAuNS0xLjUtMS4xLTEuOS0xLjljLTAuNC0wLjgtMC43LTEuNi0wLjctMi41YzAtMC45LDAuMi0xLjYsMC41LTIuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7czAuOC0xLjIsMS40LTEuN2MwLjYtMC41LDEuMy0wLjgsMi4yLTEuMWMwLjgtMC4yLDEuNi0wLjQsMi42LTAuNmMxLTAuMiwyLTAuMywzLTAuNWMxLjEtMC4xLDIuMS0wLjMsMy'+
			'4xLTAuNGwtMS4yLDAuNyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAtMS4zLTAuMy0yLjMtMC44LTNjLTAuNi0wLjYtMS42LTEtMy0xYy0wLjksMC0xLjcsMC4yLTIuNSwwLjZjLTAuNywwLjQtMS4zLDEuMS0xLjYsMi4xbC0zLjEtMC45YzAuNC0xLjUsMS4yLTIuNiwyLjQtMy41JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4yLTAuOSwyLjgtMS4zLDQuNy0xLjNjMS41LDAsMi44LDAuMyw0LDAuOGMxLjEsMC41LDIsMS4zLDIuNSwyLjVjMC4zLDAuNiwwLjQsMS4xLDAuNSwxLjhjMC4xLDAuNiwwLjEsMS4zLDAuMSwyVjQ0SDExNHYtMy45JiN4ZDsmI3hhOyYjeDk7JiN4OTtsMC42LDAuNWMtMC43LDEuMy0x'+
			'LjYsMi4zLTIuNywyLjlDMTEwLjgsNDQuMiwxMDkuNSw0NC41LDEwNy45LDQ0LjV6IE0xMDguNSw0MS44YzAuOSwwLDEuNy0wLjIsMi40LTAuNWMwLjctMC4zLDEuMi0wLjgsMS42LTEuMyYjeGQ7JiN4YTsmI3g5OyYjeDk7YzAuNC0wLjUsMC43LTEsMC44LTEuNmMwLjItMC41LDAuMy0xLjEsMC4zLTEuN2MwLTAuNiwwLTEuMSwwLTEuNWwxLjEsMC40Yy0xLDAuMi0yLDAuMy0yLjgsMC40Yy0wLjgsMC4xLTEuNiwwLjItMi4zLDAuNCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjcsMC4xLTEuMywwLjMtMS44LDAuNGMtMC41LDAuMi0wLjksMC4zLTEuMiwwLjZjLTAuNCwwLjItMC42LDAuNS0wLjgsMC'+
			'44Yy0wLjIsMC4zLTAuMywwLjctMC4zLDEuMWMwLDAuNCwwLjEsMC44LDAuMywxLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjIsMC40LDAuNiwwLjcsMSwwLjlDMTA3LjIsNDEuNywxMDcuOCw0MS44LDEwOC41LDQxLjh6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTExOS41LDQ0di0yLjhjMC42LDAuMSwxLjEsMC4xLDEuNC0wLjFzMC42LTAuNCwwLjctMC44YzAuMi0wLjQsMC4zLTAuOSwwLjQtMS42YzAuMi0xLDAuMy0yLDAuNS0zLjMmI3hkOyYjeGE7JiN4OTsmI3g5O2MwLjEtMS4yLDAuMi0yLjUsMC40LTRjMC4xLTEuNCwwLjItMi45LDAuMy00LjVoMTIuMnYxN2gtMy4zVjMwLjFoLTZj'+
			'LTAuMSwwLjgtMC4xLDEuNy0wLjIsMi42Yy0wLjEsMC45LTAuMiwxLjktMC4zLDIuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7Yy0wLjEsMC45LTAuMiwxLjgtMC4zLDIuNmMtMC4xLDAuOC0wLjIsMS41LTAuMywyYy0wLjIsMS4xLTAuNSwyLTAuOSwyLjdzLTEsMS4xLTEuNywxLjNDMTIxLjcsNDQuMywxMjAuNyw0NC4zLDExOS41LDQ0eiIgY2xhc3M9InN0MSIvPgogIDxwYXRoIGQ9Ik0xMzkuOCw0NFYyN2gzLjN2NS45aDMuNGMwLjUsMCwxLDAsMS42LDBjMC42LDAsMSwwLjEsMS40LDAuMmMwLjksMC4yLDEuNywwLjUsMi40LDAuOXMxLjIsMSwxLjYsMS44JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMC40LD'+
			'AuNywwLjYsMS42LDAuNiwyLjdjMCwxLjUtMC40LDIuNy0xLjIsMy41Yy0wLjgsMC45LTEuOCwxLjUtMy4xLDEuOGMtMC40LDAuMS0wLjksMC4yLTEuNSwwLjJjLTAuNiwwLTEuMSwwLTEuNiwwSDEzOS44eiYjeGQ7JiN4YTsmI3g5OyYjeDk7IE0xNDMuMSw0MS40aDMuN2MwLjMsMCwwLjYsMCwwLjksMGMwLjMsMCwwLjYtMC4xLDAuOS0wLjFjMC41LTAuMSwxLTAuNCwxLjQtMC45YzAuNC0wLjUsMC42LTEuMSwwLjYtMS44YzAtMC44LTAuMi0xLjQtMC42LTEuOSYjeGQ7JiN4YTsmI3g5OyYjeDk7cy0wLjktMC44LTEuNS0wLjljLTAuMy0wLjEtMC42LTAuMS0wLjktMC4xcy0wLjYsMC0wLjgsMGgt'+
			'My43VjQxLjR6IiBjbGFzcz0ic3QxIi8+CiAgPHBhdGggZD0iTTE1Ni45LDQ0VjI3aDMuM3Y2LjloOC4zVjI3aDMuM3YxN2gtMy4zdi03aC04LjN2N0gxNTYuOXoiIGNsYXNzPSJzdDEiLz4KICA8cGF0aCBkPSJNMTc1LjIsNDRsNC4zLTYuN2gzLjVsLTQuMyw2LjdIMTc1LjJ6IE0xODYuNSw0NHYtNS45aC0zLjRjLTAuNCwwLTAuOSwwLTEuNCwwYy0wLjYsMC0xLjEtMC4xLTEuNi0wLjImI3hkOyYjeGE7JiN4OTsmI3g5O2MtMS4zLTAuMi0yLjMtMC44LTMuMi0xLjdjLTAuOS0wLjktMS4zLTIuMS0xLjMtMy42YzAtMS41LDAuNC0yLjcsMS4yLTMuNnMxLjgtMS41LDMuMS0xLjhjMC41LTAuMSwxLj'+
			'EtMC4yLDEuNi0wLjJzMSwwLDEuNCwwaDYuOCYjeGQ7JiN4YTsmI3g5OyYjeDk7bDAsMTdIMTg2LjV6IE0xODIuOSwzNS41aDMuN3YtNS44aC0zLjdjLTAuMiwwLTAuNSwwLTAuOSwwcy0wLjcsMC4xLTEsMC4yYy0wLjMsMC4xLTAuNiwwLjMtMC45LDAuNWMtMC4zLDAuMi0wLjUsMC41LTAuNywwLjkmI3hkOyYjeGE7JiN4OTsmI3g5O2MtMC4yLDAuNC0wLjMsMC44LTAuMywxLjNjMCwwLjcsMC4yLDEuMywwLjYsMS44YzAuNCwwLjUsMC45LDAuOCwxLjUsMC45YzAuMywwLjEsMC42LDAuMSwwLjksMC4yJiN4ZDsmI3hhOyYjeDk7JiN4OTtDMTgyLjQsMzUuNCwxODIuNiwzNS41LDE4Mi45LDM1LjV6'+
			'IiBjbGFzcz0ic3QxIi8+CiA8L2c+Cjwvc3ZnPgo=';
		me.____img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u0421\u0443 \u0441\u043f\u0430\u043b\u044c\u043d\u044f_\u0424\u043b\u0430\u0436\u0435\u043a";
		el.ggDx=50;
		el.ggDy=30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 25px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='top : -10000px;';
		hs+='visibility : hidden;';
		hs+='width : 93px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me.__.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
				var ph=this.parentNode.clientHeight;
				var h=this.offsetHeight;
					this.style.top=(this.ggDy + ph/2 - h/2) + 'px';
			}
		}
		me._svg_9.appendChild(me.__);
		me._svg_9.ggUpdateConditionTimer=function() {
			if (me.elementMouseOver['svg_9']) {
				if (
					(
						((me.ggUserdata.title == "\u0412\u0430\u043d\u043d\u0430\u044f"))
					)
				) {
					me.__5.style[domTransition]='none';
					me.__5.style.visibility=(Number(me.__5.style.opacity)>0||!me.__5.style.opacity)?'inherit':'hidden';
					me.__5.ggVisible=true;
				}
				if (
					(
						((me.ggUserdata.title == "\u0413\u043e\u0441\u0442\u0438\u043d\u0430\u044f"))
					)
				) {
					me.__1.style[domTransition]='none';
					me.__1.style.visibility=(Number(me.__1.style.opacity)>0||!me.__1.style.opacity)?'inherit':'hidden';
					me.__1.ggVisible=true;
				}
				if (
					(
						((me.ggUserdata.title == "\u041a\u043e\u0440\u0438\u0434\u043e\u0440"))
					)
				) {
					me.__2.style[domTransition]='none';
					me.__2.style.visibility=(Number(me.__2.style.opacity)>0||!me.__2.style.opacity)?'inherit':'hidden';
					me.__2.ggVisible=true;
				}
				if (
					(
						((me.ggUserdata.title == "\u041f\u0440\u0438\u0445\u043e\u0436\u0430\u044f"))
					)
				) {
					me.__7.style[domTransition]='none';
					me.__7.style.visibility=(Number(me.__7.style.opacity)>0||!me.__7.style.opacity)?'inherit':'hidden';
					me.__7.ggVisible=true;
				}
				if (
					(
						((me.ggUserdata.title == "\u0421\u043f\u0430\u043b\u044c\u043d\u044f"))
					)
				) {
					me.__6.style[domTransition]='none';
					me.__6.style.visibility=(Number(me.__6.style.opacity)>0||!me.__6.style.opacity)?'inherit':'hidden';
					me.__6.ggVisible=true;
				}
				if (
					(
						((me.ggUserdata.title == "\u0414\u0435\u0442\u0441\u043a\u0430\u044f"))
					)
				) {
					me.__3.style[domTransition]='none';
					me.__3.style.visibility=(Number(me.__3.style.opacity)>0||!me.__3.style.opacity)?'inherit':'hidden';
					me.__3.ggVisible=true;
				}
				if (
					(
						((me.ggUserdata.title == "\u0413\u0430\u0440\u0434\u0435\u0440\u043e\u0431"))
					)
				) {
					me.__4.style[domTransition]='none';
					me.__4.style.visibility=(Number(me.__4.style.opacity)>0||!me.__4.style.opacity)?'inherit':'hidden';
					me.__4.ggVisible=true;
				}
				if (
					(
						((me.ggUserdata.title == "\u0421\u0443 \u0441\u043f\u0430\u043b\u044c\u043d\u044f"))
					)
				) {
					me.__.style[domTransition]='none';
					me.__.style.visibility=(Number(me.__.style.opacity)>0||!me.__.style.opacity)?'inherit':'hidden';
					me.__.ggVisible=true;
				}
				if (
					(
						((me.ggUserdata.title == "\u041a\u0443\u0445\u043d\u044f"))
					)
				) {
					me.__8.style[domTransition]='none';
					me.__8.style.visibility=(Number(me.__8.style.opacity)>0||!me.__8.style.opacity)?'inherit':'hidden';
					me.__8.ggVisible=true;
				}
				if (
					(
						((me.ggUserdata.title == "\u0421\u043f\u0430\u043b\u044c\u043d\u044f \u043a\u043e\u0440\u0438\u0434\u043e\u0440"))
					)
				) {
					me.__6.style[domTransition]='none';
					me.__6.style.visibility=(Number(me.__6.style.opacity)>0||!me.__6.style.opacity)?'inherit':'hidden';
					me.__6.ggVisible=true;
				}
				if (
					(
						((me.ggUserdata.title == "\u0421\u0442\u043e\u043b\u043e\u0432\u0430\u044f"))
					)
				) {
					me.__0.style[domTransition]='none';
					me.__0.style.visibility=(Number(me.__0.style.opacity)>0||!me.__0.style.opacity)?'inherit':'hidden';
					me.__0.ggVisible=true;
				}
			}
		}
player.addListener('timer', me._svg_9.ggUpdateConditionTimer);
	};
	function SkinElement_marker_normal_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._marker_normal=document.createElement('div');
		els=me._marker_normal__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjMuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiBpZD0i0KHQu9C+0LlfMSIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgdmlld0JveD0iMCAwIDIwIDE5IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMCAxOTsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMD'+
			'AwL3N2ZyI+CiA8c3R5bGUgdHlwZT0idGV4dC9jc3MiPiYjeGQ7Cgkuc3Qwe2ZpbGw6IzE5MzU1Qjt9JiN4ZDsKCS5zdDF7ZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO30mI3hkOwoJLnN0MntjbGlwLXBhdGg6dXJsKCNTVkdJRF8wMDAwMDAwMTY0NDU4MjM0MjcyODcxNDM4MDAwMDAwMzc4ODM3NzExMzI3NDMwMzM4NV8pO30mI3hkOwoJLnN0M3tmaWxsOiNGRkZGRkY7fSYjeGQ7Cjwvc3R5bGU+CiA8Zz4KICA8cGF0aCBkPSJNMCw1LjM2YzAtMS4yNiwwLTEuOSwwLjE0LTIuNDJjMC4zNy0xLjM2LDEuNDQtMi40MywyLjgtMi44QzMuNDYsMCw0LjEsMCw1LjM2LDBoOS4yOGMxLjI2LDAsMS45LDAs'+
			'Mi40MiwwLjE0JiN4ZDsmI3hhOyYjeDk7JiN4OTtjMS4zNiwwLjM3LDIuNDMsMS40NCwyLjgsMi44QzIwLDMuNDYsMjAsNC4xLDIwLDUuMzZ2OC4yOGMwLDEuMjYsMCwxLjktMC4xNCwyLjQyYy0wLjM3LDEuMzYtMS40NCwyLjQzLTIuOCwyLjgmI3hkOyYjeGE7JiN4OTsmI3g5O0MxNi41NCwxOSwxNS45LDE5LDE0LjY0LDE5SDUuMzZjLTEuMjYsMC0xLjksMC0yLjQyLTAuMTRjLTEuMzYtMC4zNy0yLjQzLTEuNDQtMi44LTIuOEMwLDE1LjU0LDAsMTQuOSwwLDEzLjY0VjUuMzZ6IiBjbGFzcz0ic3QwIi8+CiAgPHBhdGggZD0iTTAuNSw1LjM2YzAtMS4zLDAtMS44NSwwLjEyLTIuMjhjMC4zMy0xLj'+
			'E5LDEuMjYtMi4xMywyLjQ1LTIuNDVDMy41MSwwLjUsNC4wNiwwLjUsNS4zNiwwLjVoOS4yOCYjeGQ7JiN4YTsmI3g5OyYjeDk7YzEuMywwLDEuODUsMCwyLjI4LDAuMTJjMS4xOSwwLjMzLDIuMTMsMS4yNiwyLjQ1LDIuNDVjMC4xMiwwLjQ0LDAuMTIsMC45OSwwLjEyLDIuMjh2OC4yOGMwLDEuMywwLDEuODUtMC4xMiwyLjI4JiN4ZDsmI3hhOyYjeDk7JiN4OTtjLTAuMzMsMS4xOS0xLjI2LDIuMTMtMi40NSwyLjQ1Yy0wLjQ0LDAuMTItMC45OSwwLjEyLTIuMjgsMC4xMkg1LjM2Yy0xLjMsMC0xLjg1LDAtMi4yOC0wLjEyYy0xLjE5LTAuMzMtMi4xMy0xLjI2LTIuNDUtMi40NSYjeGQ7JiN4YTsm'+
			'I3g5OyYjeDk7QzAuNSwxNS40OSwwLjUsMTQuOTQsMC41LDEzLjY0VjUuMzZ6IiBjbGFzcz0ic3QxIi8+CiAgPGc+CiAgIDxkZWZzPgogICAgPHJlY3QgeD0iNC41IiB5PSIzLjUiIGhlaWdodD0iMTEiIGlkPSJTVkdJRF8xXyIgd2lkdGg9IjExIi8+CiAgIDwvZGVmcz4KICAgPGNsaXBQYXRoIGlkPSJTVkdJRF8wMDAwMDE0MzU4OTI5MzExNDAwNjM4MTMwMDAwMDAxNDYyMTQwNDMwMDIyNzYxNTQwOV8iPgogICAgPHVzZSB4bGluazpocmVmPSIjU1ZHSURfMV8iIHN0eWxlPSJvdmVyZmxvdzp2aXNpYmxlOyIvPgogICA8L2NsaXBQYXRoPgogICA8ZyBzdHlsZT0iY2xpcC1wYXRoOnVybCgjU1ZHSU'+
			'RfMDAwMDAxNDM1ODkyOTMxMTQwMDYzODEzMDAwMDAwMTQ2MjE0MDQzMDAyMjc2MTU0MDlfKTsiPgogICAgPHBhdGggZD0iTTE0LjEyLDkuNTloLTMuNTR2My41NEg5LjQxVjkuNTlINS44OFY4LjQxaDMuNTRWNC44OGgxLjE4djMuNTRoMy41NFY5LjU5eiIgY2xhc3M9InN0MyIvPgogICA8L2c+CiAgPC9nPgogPC9nPgo8L3N2Zz4K';
		me._marker_normal__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="marker_normal";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 140px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_normal.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._marker_normal.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement_marker_active_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._marker_active=document.createElement('div');
		els=me._marker_active__img=document.createElement('img');
		els.className='ggskin ggskin_svg';
		hs='data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0nMS4wJyBlbmNvZGluZz0ndXRmLTgnPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgJy0vL1czQy8vRFREIFNWRyAxLjEvL0VOJyAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE1LjAuMiwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzAgMzAiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIH'+
			'k9IjBweCIgaGVpZ2h0PSIzMHB4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB2aWV3Qm94PSIwIDAgMzAgMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwcHgiPgogPGcgaWQ9IkxheWVyXzEiPgogIDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSI1IiByPSIxMC45OTQiIHN0cm9rZT0iIzAwMDAwMCIgY3g9IjE0Ljk4MSIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgY3k9IjE0Ljk4NyIgZmlsbD0ibm9uZSIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzFfY29weSI+CiAgPGNpcmNsZSBzdHJva2Utd2lkdGg9IjMiIHI9IjEwLjk5NCIgc3Ryb2tl'+
			'PSIjRkZGRkZGIiBjeD0iMTQuOTgxIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIGN5PSIxNC45ODciIGZpbGw9Im5vbmUiLz4KIDwvZz4KIDxnIGRpc3BsYXk9Im5vbmUiIGlkPSJMYXllcl8zIj4KICA8Y2lyY2xlIGRpc3BsYXk9ImlubGluZSIgc3Ryb2tlLXdpZHRoPSIwLjUiIHI9IjIuMTE3IiBzdHJva2U9IiNlZTFkM2EiIGN4PSIxNC45OCIgc3Ryb2tlLW9wYWNpdHk9IjAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgY3k9IjMuOTk0IiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjEiLz4KIDwvZz4KIDxnIGRpc3BsYXk9Im5vbmUiIGlkPSJMYXllcl8yIj4KICA8Y2lyY2xlIGRpc3BsYX'+
			'k9ImlubGluZSIgc3Ryb2tlLXdpZHRoPSI1IiByPSIxMC45OTQiIHN0cm9rZT0iIzAwMDAwMCIgY3g9IjE0Ljk4MSIgc3Ryb2tlLW9wYWNpdHk9IjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgY3k9IjE0Ljk4NyIgZmlsbD0ibm9uZSIvPgogPC9nPgogPGcgZGlzcGxheT0ibm9uZSIgaWQ9IkxheWVyXzFfY29weSI+CiAgPGNpcmNsZSBkaXNwbGF5PSJpbmxpbmUiIHN0cm9rZS13aWR0aD0iMyIgcj0iMTAuOTk0IiBzdHJva2U9IiNGRkZGRkYiIGN4PSIxNC45ODEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgY3k9IjE0Ljk4NyIgZmlsbD0ibm9uZSIvPgogPC9nPgogPGcgaWQ9IkxheWVyXzMiPgog'+
			'IDxjaXJjbGUgc3Ryb2tlLXdpZHRoPSIwLjUiIHI9IjIuMTE3IiBzdHJva2U9IiNlZTFkM2EiIGN4PSIxNC45OCIgc3Ryb2tlLW9wYWNpdHk9IjAiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgY3k9IjMuOTk0IiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjEiLz4KIDwvZz4KPC9zdmc+Cg==';
		me._marker_active__img.setAttribute('src',hs);
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="marker_active";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_svg ";
		el.ggType='svg';
		hs ='';
		hs+='height : 30px;';
		hs+='left : 105px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 30px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._marker_active.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._marker_active.ggUpdatePosition=function (useTransition) {
		}
		me._marker_active.ggUpdateConditionTimer=function() {
			var hs='';
			if (me._marker_active.ggParameter) {
				hs+=parameterToTransform(me._marker_active.ggParameter) + ' ';
			}
			hs+='rotate(' + (-1.0*(1 * player.getPanNorth() + 0)) + 'deg) ';
			me._marker_active.style[domTransform]=hs;
		}
player.addListener('timer', me._marker_active.ggUpdateConditionTimer);
	};
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._image_1.logicBlock_position();
	me._image_1.logicBlock_alpha();
	me._marker_title4.logicBlock_position();
	me._marker_title3.logicBlock_position();
	me._marker_title2.logicBlock_position();
	me._marker_title1.logicBlock_position();
	me._marker_title0.logicBlock_position();
	me._marker_title.logicBlock_position();
	player.addListener('changenode', function(args) { me._image_1.logicBlock_position();me._image_1.logicBlock_alpha(); });
	player.addListener('configloaded', function(args) { me._marker_title4.logicBlock_position();me._marker_title3.logicBlock_position();me._marker_title2.logicBlock_position();me._marker_title1.logicBlock_position();me._marker_title0.logicBlock_position();me._marker_title.logicBlock_position(); });
	player.addListener('hastouch', function(args) { me._marker_title4.logicBlock_position();me._marker_title3.logicBlock_position();me._marker_title2.logicBlock_position();me._marker_title1.logicBlock_position();me._marker_title0.logicBlock_position();me._marker_title.logicBlock_position(); });
	player.addListener('varchanged_var1', function(args) { me._image_1.logicBlock_position();me._image_1.logicBlock_alpha(); });
	player.addListener('configloaded', function(args) { me._marker_node4.callChildLogicBlocks_configloaded();me._marker_node5.callChildLogicBlocks_configloaded();me._marker_node7.callChildLogicBlocks_configloaded();me._marker_node3.callChildLogicBlocks_configloaded();me._marker_node6.callChildLogicBlocks_configloaded();me._markertemplate.callChildLogicBlocks_configloaded(); });
	player.addListener('mouseover', function(args) { me._marker_node4.callChildLogicBlocks_mouseover();me._marker_node5.callChildLogicBlocks_mouseover();me._marker_node7.callChildLogicBlocks_mouseover();me._marker_node3.callChildLogicBlocks_mouseover();me._marker_node6.callChildLogicBlocks_mouseover();me._markertemplate.callChildLogicBlocks_mouseover(); });
	player.addListener('mouseover', function(args) { me._marker_node4.callChildLogicBlocks_mouseover();me._marker_node5.callChildLogicBlocks_mouseover();me._marker_node7.callChildLogicBlocks_mouseover();me._marker_node3.callChildLogicBlocks_mouseover();me._marker_node6.callChildLogicBlocks_mouseover();me._markertemplate.callChildLogicBlocks_mouseover(); });
	player.addListener('hastouch', function(args) { me._marker_node4.callChildLogicBlocks_hastouch();me._marker_node5.callChildLogicBlocks_hastouch();me._marker_node7.callChildLogicBlocks_hastouch();me._marker_node3.callChildLogicBlocks_hastouch();me._marker_node6.callChildLogicBlocks_hastouch();me._markertemplate.callChildLogicBlocks_hastouch(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot__25_mouseover();me.callChildLogicBlocksHotspot__24_mouseover();me.callChildLogicBlocksHotspot__23_mouseover();me.callChildLogicBlocksHotspot__22_mouseover();me.callChildLogicBlocksHotspot__21_mouseover();me.callChildLogicBlocksHotspot__19_mouseover();me.callChildLogicBlocksHotspot__17_mouseover();me.callChildLogicBlocksHotspot__15_mouseover();me.callChildLogicBlocksHotspot__13_mouseover();me.callChildLogicBlocksHotspot__11_mouseover();me.callChildLogicBlocksHotspot__9_mouseover(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};