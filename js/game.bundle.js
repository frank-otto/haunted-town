(()=>{var Qd=0,Oh=1,jd=2;var gs=1,tf=2,mr=3,Yi=0,nn=1,je=2,Ln=0,gr=1,hn=2,Bh=3,zh=4,ef=5;var _s=100,nf=101,sf=102,rf=103,of=104,af=200,lf=201,cf=202,hf=203,Hh=204,Vh=205,uf=206,df=207,ff=208,pf=209,mf=210,gf=211,_f=212,xf=213,yf=214,Ga=0,Wa=1,Xa=2,Qs=3,qa=4,Ya=5,Za=6,$a=7,kh=0,vf=1,Mf=2,Gn=0,Io=1,Lo=2,Do=3,xs=4,No=5,Uo=6,Fo=7;var Gh=300,Zi=301,ys=302,bl=303,wl=304,Oo=306,js=1e3,Jn=1001,Ja=1002,Ke=1003,Sf=1004;var Bo=1005;var en=1006,Tl=1007;var $i=1008;var xn=1009,Wh=1010,Xh=1011,_r=1012,El=1013,Wn=1014,Dn=1015,sn=1016,Al=1017,Rl=1018,xr=1020,qh=35902,Yh=35899,Zh=1021,$h=1022,Nn=1023,Qn=1026,Ji=1027,Cl=1028,Pl=1029,Ki=1030,Il=1031;var Ll=1033,zo=33776,Ho=33777,Vo=33778,ko=33779,Dl=35840,Nl=35841,Ul=35842,Fl=35843,Ol=36196,Bl=37492,zl=37496,Hl=37488,Vl=37489,Go=37490,kl=37491,Gl=37808,Wl=37809,Xl=37810,ql=37811,Yl=37812,Zl=37813,$l=37814,Jl=37815,Kl=37816,Ql=37817,jl=37818,tc=37819,ec=37820,nc=37821,ic=36492,sc=36494,rc=36495,oc=36283,ac=36284,Wo=36285,lc=36286;var jr=2300,Ka=2301,Va=2302,bh=2303,wh=2400,Th=2401,Eh=2402;var bf=3200;var cc=0,wf=1,bi="",Je="srgb",to="srgb-linear",eo="linear",ye="srgb";var ka=7680;var Tf=519,Ef=512,Af=513,Rf=514,hc=515,Cf=516,Pf=517,uc=518,If=519,Jh=35044;var Kh="300 es",kn=2e3,tr=2001;function Tm(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Em(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function no(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Lf(){let n=no("canvas");return n.style.display="block",n}var gd={},er=null;function io(...n){let t="THREE."+n.shift();er?er("log",t,...n):console.log(t,...n)}function Df(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function $t(...n){n=Df(n);let t="THREE."+n.shift();if(er)er("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Zt(...n){n=Df(n);let t="THREE."+n.shift();if(er)er("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function cs(...n){let t=n.join(" ");t in gd||(gd[t]=!0,$t(...n))}function Nf(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Uf={[Ga]:Wa,[Xa]:Za,[qa]:$a,[Qs]:Ya,[Wa]:Ga,[Za]:Xa,[$a]:qa,[Ya]:Qs},jn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_d=1234567,$r=Math.PI/180,nr=180/Math.PI;function Kn(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]+"-"+ln[t&255]+ln[t>>8&255]+"-"+ln[t>>16&15|64]+ln[t>>24&255]+"-"+ln[e&63|128]+ln[e>>8&255]+"-"+ln[e>>16&255]+ln[e>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function oe(n,t,e){return Math.max(t,Math.min(e,n))}function Qh(n,t){return(n%t+t)%t}function Am(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Rm(n,t,e){return n!==t?(e-n)/(t-n):0}function Jr(n,t,e){return(1-e)*n+e*t}function Cm(n,t,e,i){return Jr(n,t,1-Math.exp(-e*i))}function Pm(n,t=1){return t-Math.abs(Qh(n,t*2)-t)}function Im(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Lm(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Dm(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Nm(n,t){return n+Math.random()*(t-n)}function Um(n){return n*(.5-Math.random())}function Fm(n){n!==void 0&&(_d=n);let t=_d+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Om(n){return n*$r}function Bm(n){return n*nr}function zm(n){return n>0&&Number.isInteger(n)&&2**Math.round(Math.log2(n))===n}function Hm(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Vm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function km(n,t,e,i,s){let r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),h=r((t+i)/2),c=o((t+i)/2),d=r((t-i)/2),u=o((t-i)/2),f=r((i-t)/2),m=o((i-t)/2);switch(s){case"XYX":n.set(a*c,l*d,l*u,a*h);break;case"YZY":n.set(l*u,a*c,l*d,a*h);break;case"ZXZ":n.set(l*d,l*u,a*c,a*h);break;case"XZX":n.set(a*c,l*m,l*f,a*h);break;case"YXY":n.set(l*f,a*c,l*m,a*h);break;case"ZYZ":n.set(l*m,l*f,a*c,a*h);break;default:$t("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Vn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function be(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var jh={DEG2RAD:$r,RAD2DEG:nr,generateUUID:Kn,clamp:oe,euclideanModulo:Qh,mapLinear:Am,inverseLerp:Rm,lerp:Jr,damp:Cm,pingpong:Pm,smoothstep:Im,smootherstep:Lm,randInt:Dm,randFloat:Nm,randFloatSpread:Um,seededRandom:Fm,degToRad:Om,radToDeg:Bm,isPowerOfTwo:zm,ceilPowerOfTwo:Hm,floorPowerOfTwo:Vm,setQuaternionFromProperEuler:km,normalize:be,denormalize:Vn},ru=class ru{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ru.prototype.isVector2=!0;var ct=ru,Pn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],h=i[s+1],c=i[s+2],d=i[s+3],u=r[o+0],f=r[o+1],m=r[o+2],y=r[o+3];if(d!==y||l!==u||h!==f||c!==m){let g=l*u+h*f+c*m+d*y;g<0&&(u=-u,f=-f,m=-m,y=-y,g=-g);let p=1-a;if(g<.9995){let S=Math.acos(g),R=Math.sin(S);p=Math.sin(p*S)/R,a=Math.sin(a*S)/R,l=l*p+u*a,h=h*p+f*a,c=c*p+m*a,d=d*p+y*a}else{l=l*p+u*a,h=h*p+f*a,c=c*p+m*a,d=d*p+y*a;let S=1/Math.sqrt(l*l+h*h+c*c+d*d);l*=S,h*=S,c*=S,d*=S}}t[e]=l,t[e+1]=h,t[e+2]=c,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],l=i[s+1],h=i[s+2],c=i[s+3],d=r[o],u=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+c*d+l*f-h*u,t[e+1]=l*m+c*u+h*d-a*f,t[e+2]=h*m+c*f+a*u-l*d,t[e+3]=c*m-a*d-l*u-h*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(i/2),c=a(s/2),d=a(r/2),u=l(i/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=u*c*d+h*f*m,this._y=h*f*d-u*c*m,this._z=h*c*m+u*f*d,this._w=h*c*d-u*f*m;break;case"YXZ":this._x=u*c*d+h*f*m,this._y=h*f*d-u*c*m,this._z=h*c*m-u*f*d,this._w=h*c*d+u*f*m;break;case"ZXY":this._x=u*c*d-h*f*m,this._y=h*f*d+u*c*m,this._z=h*c*m+u*f*d,this._w=h*c*d-u*f*m;break;case"ZYX":this._x=u*c*d-h*f*m,this._y=h*f*d+u*c*m,this._z=h*c*m-u*f*d,this._w=h*c*d+u*f*m;break;case"YZX":this._x=u*c*d+h*f*m,this._y=h*f*d+u*c*m,this._z=h*c*m-u*f*d,this._w=h*c*d-u*f*m;break;case"XZY":this._x=u*c*d-h*f*m,this._y=h*f*d-u*c*m,this._z=h*c*m+u*f*d,this._w=h*c*d+u*f*m;break;default:$t("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],c=e[6],d=e[10],u=i+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-h)*f,this._z=(o-s)*f}else if(i>a&&i>d){let f=2*Math.sqrt(1+i-a-d);this._w=(c-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+h)/f}else if(a>d){let f=2*Math.sqrt(1+a-i-d);this._w=(r-h)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+c)/f}else{let f=2*Math.sqrt(1+d-i-a);this._w=(o-s)/f,this._x=(r+h)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(oe(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,c=e._w;return this._x=i*c+o*a+s*h-r*l,this._y=s*c+o*l+r*a-i*h,this._z=r*c+o*h+i*l-s*a,this._w=o*c-i*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(i=-i,s=-s,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let h=Math.acos(a),c=Math.sin(h);l=Math.sin(l*h)/c,e=Math.sin(e*h)/c,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ou=class ou{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(xd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(xd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*i),c=2*(a*e-r*s),d=2*(r*i-o*e);return this.x=e+l*h+o*d-a*c,this.y=i+l*c+a*h-r*d,this.z=s+l*d+r*c-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Qc.copy(this).projectOnVector(t),this.sub(Qc)}reflect(t){return this.sub(Qc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(oe(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ou.prototype.isVector3=!0;var A=ou,Qc=new A,xd=new Pn,au=class au{constructor(t,e,i,s,r,o,a,l,h){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h)}set(t,e,i,s,r,o,a,l,h){let c=this.elements;return c[0]=t,c[1]=s,c[2]=a,c[3]=e,c[4]=r,c[5]=l,c[6]=i,c[7]=o,c[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],h=i[1],c=i[4],d=i[7],u=i[2],f=i[5],m=i[8],y=s[0],g=s[3],p=s[6],S=s[1],R=s[4],M=s[7],w=s[2],b=s[5],C=s[8];return r[0]=o*y+a*S+l*w,r[3]=o*g+a*R+l*b,r[6]=o*p+a*M+l*C,r[1]=h*y+c*S+d*w,r[4]=h*g+c*R+d*b,r[7]=h*p+c*M+d*C,r[2]=u*y+f*S+m*w,r[5]=u*g+f*R+m*b,r[8]=u*p+f*M+m*C,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8];return e*o*c-e*a*h-i*r*c+i*a*l+s*r*h-s*o*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],d=c*o-a*h,u=a*l-c*r,f=h*r-o*l,m=e*d+i*u+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/m;return t[0]=d*y,t[1]=(s*h-c*i)*y,t[2]=(a*i-s*o)*y,t[3]=u*y,t[4]=(c*e-s*l)*y,t[5]=(s*r-a*e)*y,t[6]=f*y,t[7]=(i*l-h*e)*y,t[8]=(o*e-i*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return cs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jc.makeScale(t,e)),this}rotate(t){return cs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jc.makeRotation(-t)),this}translate(t,e){return cs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};au.prototype.isMatrix3=!0;var jt=au,jc=new jt,yd=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vd=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gm(){let n={enabled:!0,workingColorSpace:to,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ye&&(s.r=vi(s.r),s.g=vi(s.g),s.b=vi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ye&&(s.r=Ks(s.r),s.g=Ks(s.g),s.b=Ks(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===bi?eo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return cs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return cs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[to]:{primaries:t,whitePoint:i,transfer:eo,toXYZ:yd,fromXYZ:vd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:t,whitePoint:i,transfer:ye,toXYZ:yd,fromXYZ:vd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),n}var le=Gm();function vi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ks(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Ds,Qa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Ds===void 0&&(Ds=no("canvas")),Ds.width=t.width,Ds.height=t.height;let s=Ds.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Ds}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=no("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=vi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(vi(e[i]/255)*255):e[i]=vi(e[i]);return{data:e,width:t.width,height:t.height}}else return $t("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Wm=0,ir=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=Kn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(th(s[o].image)):r.push(th(s[o]))}else r=th(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function th(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:($t("Texture: Unable to serialize Texture."),{})}var Xm=0,eh=new A,pn=class n extends jn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Jn,s=Jn,r=en,o=$i,a=Nn,l=xn,h=n.DEFAULT_ANISOTROPY,c=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=Kn(),this.name="",this.source=new ir(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(eh).x}get height(){return this.source.getSize(eh).y}get depth(){return this.source.getSize(eh).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){$t(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){$t(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case js:t.x=t.x-Math.floor(t.x);break;case Jn:t.x=t.x<0?0:1;break;case Ja:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case js:t.y=t.y-Math.floor(t.y);break;case Jn:t.y=t.y<0?0:1;break;case Ja:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Gh;pn.DEFAULT_ANISOTROPY=1;var lu=class lu{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,h=l[0],c=l[4],d=l[8],u=l[1],f=l[5],m=l[9],y=l[2],g=l[6],p=l[10];if(Math.abs(c-u)<.01&&Math.abs(d-y)<.01&&Math.abs(m-g)<.01){if(Math.abs(c+u)<.1&&Math.abs(d+y)<.1&&Math.abs(m+g)<.1&&Math.abs(h+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let R=(h+1)/2,M=(f+1)/2,w=(p+1)/2,b=(c+u)/4,C=(d+y)/4,x=(m+g)/4;return R>M&&R>w?R<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(R),s=b/i,r=C/i):M>w?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=b/s,r=x/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=C/r,s=x/r),this.set(i,s,r,e),this}let S=Math.sqrt((g-m)*(g-m)+(d-y)*(d-y)+(u-c)*(u-c));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(d-y)/S,this.z=(u-c)/S,this.w=Math.acos((h+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=oe(this.x,t.x,e.x),this.y=oe(this.y,t.y,e.y),this.z=oe(this.z,t.z,e.z),this.w=oe(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=oe(this.x,t,e),this.y=oe(this.y,t,e),this.z=oe(this.z,t,e),this.w=oe(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(oe(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};lu.prototype.isVector4=!0;var De=lu,ja=class extends jn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new De(0,0,t,e),this.scissorTest=!1,this.viewport=new De(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new pn(s),o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ir(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},We=class extends ja{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},so=class extends pn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var tl=class extends pn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Ke,this.minFilter=Ke,this.wrapR=Jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Sl=class Sl{constructor(t,e,i,s,r,o,a,l,h,c,d,u,f,m,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h,c,d,u,f,m,y,g)}set(t,e,i,s,r,o,a,l,h,c,d,u,f,m,y,g){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=h,p[6]=c,p[10]=d,p[14]=u,p[3]=f,p[7]=m,p[11]=y,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sl().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Ns.setFromMatrixColumn(t,0).length(),r=1/Ns.setFromMatrixColumn(t,1).length(),o=1/Ns.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),h=Math.sin(s),c=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*c,f=o*d,m=a*c,y=a*d;e[0]=l*c,e[4]=-l*d,e[8]=h,e[1]=f+m*h,e[5]=u-y*h,e[9]=-a*l,e[2]=y-u*h,e[6]=m+f*h,e[10]=o*l}else if(t.order==="YXZ"){let u=l*c,f=l*d,m=h*c,y=h*d;e[0]=u+y*a,e[4]=m*a-f,e[8]=o*h,e[1]=o*d,e[5]=o*c,e[9]=-a,e[2]=f*a-m,e[6]=y+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*c,f=l*d,m=h*c,y=h*d;e[0]=u-y*a,e[4]=-o*d,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*c,e[9]=y-u*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*c,f=o*d,m=a*c,y=a*d;e[0]=l*c,e[4]=m*h-f,e[8]=u*h+y,e[1]=l*d,e[5]=y*h+u,e[9]=f*h-m,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*h,m=a*l,y=a*h;e[0]=l*c,e[4]=y-u*d,e[8]=m*d+f,e[1]=d,e[5]=o*c,e[9]=-a*c,e[2]=-h*c,e[6]=f*d+m,e[10]=u-y*d}else if(t.order==="XZY"){let u=o*l,f=o*h,m=a*l,y=a*h;e[0]=l*c,e[4]=-d,e[8]=h*c,e[1]=u*d+y,e[5]=o*c,e[9]=f*d-m,e[2]=m*d-f,e[6]=a*c,e[10]=y*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(qm,t,Ym)}lookAt(t,e,i){let s=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Di.crossVectors(i,yn),Di.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Di.crossVectors(i,yn)),Di.normalize(),pa.crossVectors(yn,Di),s[0]=Di.x,s[4]=pa.x,s[8]=yn.x,s[1]=Di.y,s[5]=pa.y,s[9]=yn.y,s[2]=Di.z,s[6]=pa.z,s[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],h=i[12],c=i[1],d=i[5],u=i[9],f=i[13],m=i[2],y=i[6],g=i[10],p=i[14],S=i[3],R=i[7],M=i[11],w=i[15],b=s[0],C=s[4],x=s[8],E=s[12],P=s[1],L=s[5],H=s[9],X=s[13],N=s[2],V=s[6],J=s[10],Z=s[14],ut=s[3],K=s[7],nt=s[11],it=s[15];return r[0]=o*b+a*P+l*N+h*ut,r[4]=o*C+a*L+l*V+h*K,r[8]=o*x+a*H+l*J+h*nt,r[12]=o*E+a*X+l*Z+h*it,r[1]=c*b+d*P+u*N+f*ut,r[5]=c*C+d*L+u*V+f*K,r[9]=c*x+d*H+u*J+f*nt,r[13]=c*E+d*X+u*Z+f*it,r[2]=m*b+y*P+g*N+p*ut,r[6]=m*C+y*L+g*V+p*K,r[10]=m*x+y*H+g*J+p*nt,r[14]=m*E+y*X+g*Z+p*it,r[3]=S*b+R*P+M*N+w*ut,r[7]=S*C+R*L+M*V+w*K,r[11]=S*x+R*H+M*J+w*nt,r[15]=S*E+R*X+M*Z+w*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],c=t[2],d=t[6],u=t[10],f=t[14],m=t[3],y=t[7],g=t[11],p=t[15],S=l*f-h*u,R=a*f-h*d,M=a*u-l*d,w=o*f-h*c,b=o*u-l*c,C=o*d-a*c;return e*(y*S-g*R+p*M)-i*(m*S-g*w+p*b)+s*(m*R-y*w+p*C)-r*(m*M-y*b+g*C)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],o=t[5],a=t[9],l=t[2],h=t[6],c=t[10];return e*(o*c-a*h)-i*(r*c-a*l)+s*(r*h-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],c=t[8],d=t[9],u=t[10],f=t[11],m=t[12],y=t[13],g=t[14],p=t[15],S=e*a-i*o,R=e*l-s*o,M=e*h-r*o,w=i*l-s*a,b=i*h-r*a,C=s*h-r*l,x=c*y-d*m,E=c*g-u*m,P=c*p-f*m,L=d*g-u*y,H=d*p-f*y,X=u*p-f*g,N=S*X-R*H+M*L+w*P-b*E+C*x;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/N;return t[0]=(a*X-l*H+h*L)*V,t[1]=(s*H-i*X-r*L)*V,t[2]=(y*C-g*b+p*w)*V,t[3]=(u*b-d*C-f*w)*V,t[4]=(l*P-o*X-h*E)*V,t[5]=(e*X-s*P+r*E)*V,t[6]=(g*M-m*C-p*R)*V,t[7]=(c*C-u*M+f*R)*V,t[8]=(o*H-a*P+h*x)*V,t[9]=(i*P-e*H-r*x)*V,t[10]=(m*b-y*M+p*S)*V,t[11]=(d*M-c*b-f*S)*V,t[12]=(a*E-o*L-l*x)*V,t[13]=(e*L-i*E+s*x)*V,t[14]=(y*R-m*w-g*S)*V,t[15]=(c*w-d*R+u*S)*V,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,h=r*o,c=r*a;return this.set(h*o+i,h*a-s*l,h*l+s*a,0,h*a+s*l,c*a+i,c*l-s*o,0,h*l-s*a,c*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,c=o+o,d=a+a,u=r*h,f=r*c,m=r*d,y=o*c,g=o*d,p=a*d,S=l*h,R=l*c,M=l*d,w=i.x,b=i.y,C=i.z;return s[0]=(1-(y+p))*w,s[1]=(f+M)*w,s[2]=(m-R)*w,s[3]=0,s[4]=(f-M)*b,s[5]=(1-(u+p))*b,s[6]=(g+S)*b,s[7]=0,s[8]=(m+R)*C,s[9]=(g-S)*C,s[10]=(1-(u+y))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let o=Ns.set(s[0],s[1],s[2]).length(),a=Ns.set(s[4],s[5],s[6]).length(),l=Ns.set(s[8],s[9],s[10]).length();r<0&&(o=-o),On.copy(this);let h=1/o,c=1/a,d=1/l;return On.elements[0]*=h,On.elements[1]*=h,On.elements[2]*=h,On.elements[4]*=c,On.elements[5]*=c,On.elements[6]*=c,On.elements[8]*=d,On.elements[9]*=d,On.elements[10]*=d,e.setFromRotationMatrix(On),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,o,a=kn,l=!1){let h=this.elements,c=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),m,y;if(l)m=r/(o-r),y=o*r/(o-r);else if(a===kn)m=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===tr)m=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=c,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=d,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=m,h[14]=y,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=kn,l=!1){let h=this.elements,c=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s),m,y;if(l)m=1/(o-r),y=o/(o-r);else if(a===kn)m=-2/(o-r),y=-(o+r)/(o-r);else if(a===tr)m=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=c,h[4]=0,h[8]=0,h[12]=u,h[1]=0,h[5]=d,h[9]=0,h[13]=f,h[2]=0,h[6]=0,h[10]=m,h[14]=y,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Sl.prototype.isMatrix4=!0;var xe=Sl,Ns=new A,On=new xe,qm=new A(0,0,0),Ym=new A(1,1,1),Di=new A,pa=new A,yn=new A,Md=new xe,Sd=new Pn,Mi=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],c=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-oe(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(oe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-oe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:$t("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Md.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Md,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sd.setFromEuler(this),this.setFromQuaternion(Sd,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mi.DEFAULT_ORDER="XYZ";var sr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Zm=0,bd=new A,Us=new Pn,pi=new xe,ma=new A,zr=new A,$m=new A,Jm=new Pn,wd=new A(1,0,0),Td=new A(0,1,0),Ed=new A(0,0,1),Ad={type:"added"},Km={type:"removed"},Fs={type:"childadded",child:null},nh={type:"childremoved",child:null},Qe=class n extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zm++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new A,e=new Mi,i=new Pn,s=new A(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new xe},normalMatrix:{value:new jt}}),this.matrix=new xe,this.matrixWorld=new xe,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.multiply(Us),this}rotateOnWorldAxis(t,e){return Us.setFromAxisAngle(t,e),this.quaternion.premultiply(Us),this}rotateX(t){return this.rotateOnAxis(wd,t)}rotateY(t){return this.rotateOnAxis(Td,t)}rotateZ(t){return this.rotateOnAxis(Ed,t)}translateOnAxis(t,e){return bd.copy(t).applyQuaternion(this.quaternion),this.position.add(bd.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wd,t)}translateY(t){return this.translateOnAxis(Td,t)}translateZ(t){return this.translateOnAxis(Ed,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ma.copy(t):ma.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),zr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(zr,ma,this.up):pi.lookAt(ma,zr,this.up),this.quaternion.setFromRotationMatrix(pi),s&&(pi.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(pi),this.quaternion.premultiply(Us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ad),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null):Zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Km),nh.child=t,this.dispatchEvent(nh),nh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pi.multiply(t.parent.matrixWorld)),t.applyMatrix4(pi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ad),Fs.child=t,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,t,$m),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zr,Jm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let h=0,c=l.length;h<c;h++){let d=l[h];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),h=o(t.textures),c=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),m.length>0&&(i.nodes=m)}return i.object=s,i;function o(a){let l=[];for(let h in a){let c=a[h];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Qe.DEFAULT_UP=new A(0,1,0);Qe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ue=class extends Qe{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qm={type:"move"},rr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(let y of t.hand.values()){let g=e.getJointPose(y,i),p=this._getHandJoint(h,y);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let c=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],u=c.position.distanceTo(d.position),f=.02,m=.005;h.inputState.pinching&&u>f+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&u<=f-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qm)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Ue;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Ff={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},ga={h:0,s:0,l:0};function ih(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Jt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=i,le.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=le.workingColorSpace){if(t=Qh(t,1),e=oe(e,0,1),i=oe(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ih(o,r,t+1/3),this.g=ih(o,r,t),this.b=ih(o,r,t-1/3)}return le.colorSpaceToWorking(this,s),this}setStyle(t,e=Je){function i(r){r!==void 0&&parseFloat(r)<1&&$t("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:$t("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);$t("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){let i=Ff[t.toLowerCase()];return i!==void 0?this.setHex(i,e):$t("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=vi(t.r),this.g=vi(t.g),this.b=vi(t.b),this}copyLinearToSRGB(t){return this.r=Ks(t.r),this.g=Ks(t.g),this.b=Ks(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return le.workingToColorSpace(cn.copy(this),t),Math.round(oe(cn.r*255,0,255))*65536+Math.round(oe(cn.g*255,0,255))*256+Math.round(oe(cn.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.workingToColorSpace(cn.copy(this),e);let i=cn.r,s=cn.g,r=cn.b,o=Math.max(i,s,r),a=Math.min(i,s,r),l,h,c=(a+o)/2;if(a===o)l=0,h=0;else{let d=o-a;switch(h=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=h,t.l=c,t}getRGB(t,e=le.workingColorSpace){return le.workingToColorSpace(cn.copy(this),e),t.r=cn.r,t.g=cn.g,t.b=cn.b,t}getStyle(t=Je){le.workingToColorSpace(cn.copy(this),t);let e=cn.r,i=cn.g,s=cn.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Ni),this.setHSL(Ni.h+t,Ni.s+e,Ni.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Ni),t.getHSL(ga);let i=Jr(Ni.h,ga.h,e),s=Jr(Ni.s,ga.s,e),r=Jr(Ni.l,ga.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},cn=new Jt;Jt.NAMES=Ff;var ro=class n{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Jt(t),this.density=e}clone(){return new n(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var oo=class extends Qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Bn=new A,mi=new A,sh=new A,gi=new A,Os=new A,Bs=new A,Rd=new A,rh=new A,oh=new A,ah=new A,lh=new De,ch=new De,hh=new De,yi=class n{constructor(t=new A,e=new A,i=new A){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Bn.subVectors(t,e),s.cross(Bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Bn.subVectors(s,e),mi.subVectors(i,e),sh.subVectors(t,e);let o=Bn.dot(Bn),a=Bn.dot(mi),l=Bn.dot(sh),h=mi.dot(mi),c=mi.dot(sh),d=o*h-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(h*l-a*c)*u,m=(o*c-a*l)*u;return r.set(1-f-m,m,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return lh.setScalar(0),ch.setScalar(0),hh.setScalar(0),lh.fromBufferAttribute(t,e),ch.fromBufferAttribute(t,i),hh.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(lh,r.x),o.addScaledVector(ch,r.y),o.addScaledVector(hh,r.z),o}static isFrontFacing(t,e,i,s){return Bn.subVectors(i,e),mi.subVectors(t,e),Bn.cross(mi).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Bn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Bn.cross(mi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Os.subVectors(s,i),Bs.subVectors(r,i),rh.subVectors(t,i);let l=Os.dot(rh),h=Bs.dot(rh);if(l<=0&&h<=0)return e.copy(i);oh.subVectors(t,s);let c=Os.dot(oh),d=Bs.dot(oh);if(c>=0&&d<=c)return e.copy(s);let u=l*d-c*h;if(u<=0&&l>=0&&c<=0)return o=l/(l-c),e.copy(i).addScaledVector(Os,o);ah.subVectors(t,r);let f=Os.dot(ah),m=Bs.dot(ah);if(m>=0&&f<=m)return e.copy(r);let y=f*h-l*m;if(y<=0&&h>=0&&m<=0)return a=h/(h-m),e.copy(i).addScaledVector(Bs,a);let g=c*m-f*d;if(g<=0&&d-c>=0&&f-m>=0)return Rd.subVectors(r,s),a=(d-c)/(d-c+(f-m)),e.copy(s).addScaledVector(Rd,a);let p=1/(g+y+u);return o=y*p,a=u*p,e.copy(i).addScaledVector(Os,o).addScaledVector(Bs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},In=class{constructor(t=new A(1/0,1/0,1/0),e=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(zn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(zn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=zn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,zn):zn.fromBufferAttribute(r,o),zn.applyMatrix4(t.matrixWorld),this.expandByPoint(zn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_a.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_a.copy(i.boundingBox)),_a.applyMatrix4(t.matrixWorld),this.union(_a)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,zn),zn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Hr),xa.subVectors(this.max,Hr),zs.subVectors(t.a,Hr),Hs.subVectors(t.b,Hr),Vs.subVectors(t.c,Hr),Ui.subVectors(Hs,zs),Fi.subVectors(Vs,Hs),ss.subVectors(zs,Vs);let e=[0,-Ui.z,Ui.y,0,-Fi.z,Fi.y,0,-ss.z,ss.y,Ui.z,0,-Ui.x,Fi.z,0,-Fi.x,ss.z,0,-ss.x,-Ui.y,Ui.x,0,-Fi.y,Fi.x,0,-ss.y,ss.x,0];return!uh(e,zs,Hs,Vs,xa)||(e=[1,0,0,0,1,0,0,0,1],!uh(e,zs,Hs,Vs,xa))?!1:(ya.crossVectors(Ui,Fi),e=[ya.x,ya.y,ya.z],uh(e,zs,Hs,Vs,xa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,zn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(zn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(_i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},_i=[new A,new A,new A,new A,new A,new A,new A,new A],zn=new A,_a=new In,zs=new A,Hs=new A,Vs=new A,Ui=new A,Fi=new A,ss=new A,Hr=new A,xa=new A,ya=new A,rs=new A;function uh(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){rs.fromArray(n,r);let a=s.x*Math.abs(rs.x)+s.y*Math.abs(rs.y)+s.z*Math.abs(rs.z),l=t.dot(rs),h=e.dot(rs),c=i.dot(rs);if(Math.max(-Math.max(l,h,c),Math.min(l,h,c))>a)return!1}return!0}var Ge=new A,va=new ct,jm=0,He=class extends jn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jm++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Jh,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)va.fromBufferAttribute(this,e),va.applyMatrix3(t),this.setXY(e,va.x,va.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Vn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=be(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array),s=be(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=be(e,this.array),i=be(i,this.array),s=be(s,this.array),r=be(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var ao=class extends He{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var lo=class extends He{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var ue=class extends He{constructor(t,e,i){super(new Float32Array(t),e,i)}},tg=new In,Vr=new A,dh=new A,Si=class{constructor(t=new A,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):tg.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Vr.subVectors(t,this.center);let e=Vr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Vr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Vr.copy(t.center).add(dh)),this.expandByPoint(Vr.copy(t.center).sub(dh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},eg=0,Cn=new xe,fh=new Qe,ks=new A,vn=new In,kr=new In,$e=new A,Se=class n extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eg++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Tm(t)?lo:ao)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,i){return Cn.makeTranslation(t,e,i),this.applyMatrix4(Cn),this}scale(t,e,i){return Cn.makeScale(t,e,i),this.applyMatrix4(Cn),this}lookAt(t){return fh.lookAt(t),fh.updateMatrix(),this.applyMatrix4(fh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ue(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&$t("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];vn.setFromBufferAttribute(r),this.morphTargetsRelative?($e.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint($e),$e.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint($e)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(t){let i=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];kr.setFromBufferAttribute(a),this.morphTargetsRelative?($e.addVectors(vn.min,kr.min),vn.expandByPoint($e),$e.addVectors(vn.max,kr.max),vn.expandByPoint($e)):(vn.expandByPoint(kr.min),vn.expandByPoint(kr.max))}vn.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)$e.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared($e));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let h=0,c=a.count;h<c;h++)$e.fromBufferAttribute(a,h),l&&(ks.fromBufferAttribute(t,h),$e.add(ks)),s=Math.max(s,i.distanceToSquared($e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==i.count)&&(o=new He(new Float32Array(4*i.count),4),this.setAttribute("tangent",o));let a=[],l=[];for(let x=0;x<i.count;x++)a[x]=new A,l[x]=new A;let h=new A,c=new A,d=new A,u=new ct,f=new ct,m=new ct,y=new A,g=new A;function p(x,E,P){h.fromBufferAttribute(i,x),c.fromBufferAttribute(i,E),d.fromBufferAttribute(i,P),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,E),m.fromBufferAttribute(r,P),c.sub(h),d.sub(h),f.sub(u),m.sub(u);let L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(y.copy(c).multiplyScalar(m.y).addScaledVector(d,-f.y).multiplyScalar(L),g.copy(d).multiplyScalar(f.x).addScaledVector(c,-m.x).multiplyScalar(L),a[x].add(y),a[E].add(y),a[P].add(y),l[x].add(g),l[E].add(g),l[P].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let x=0,E=S.length;x<E;++x){let P=S[x],L=P.start,H=P.count;for(let X=L,N=L+H;X<N;X+=3)p(t.getX(X+0),t.getX(X+1),t.getX(X+2))}let R=new A,M=new A,w=new A,b=new A;function C(x){w.fromBufferAttribute(s,x),b.copy(w);let E=a[x];R.copy(E),R.sub(w.multiplyScalar(w.dot(E))).normalize(),M.crossVectors(b,E);let L=M.dot(l[x])<0?-1:1;o.setXYZW(x,R.x,R.y,R.z,L)}for(let x=0,E=S.length;x<E;++x){let P=S[x],L=P.start,H=P.count;for(let X=L,N=L+H;X<N;X+=3)C(t.getX(X+0)),C(t.getX(X+1)),C(t.getX(X+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new A,r=new A,o=new A,a=new A,l=new A,h=new A,c=new A,d=new A;if(t)for(let u=0,f=t.count;u<f;u+=3){let m=t.getX(u+0),y=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,g),c.subVectors(o,r),d.subVectors(s,r),c.cross(d),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,y),h.fromBufferAttribute(i,g),a.add(c),l.add(c),h.add(c),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,h.x,h.y,h.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),c.subVectors(o,r),d.subVectors(s,r),c.cross(d),i.setXYZ(u+0,c.x,c.y,c.z),i.setXYZ(u+1,c.x,c.y,c.z),i.setXYZ(u+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)$e.fromBufferAttribute(t,e),$e.normalize(),t.setXYZ(e,$e.x,$e.y,$e.z)}toNonIndexed(){function t(a,l){let h=a.array,c=a.itemSize,d=a.normalized,u=new h.constructor(l.length*c),f=0,m=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?f=l[y]*a.data.stride+a.offset:f=l[y]*c;for(let p=0;p<c;p++)u[m++]=h[f++]}return new He(u,c,d)}if(this.index===null)return $t("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let l=s[a],h=t(l,i);e.setAttribute(a,h)}let r=this.morphAttributes;for(let a in r){let l=[],h=r[a];for(let c=0,d=h.length;c<d;c++){let u=h[c],f=t(u,i);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let h=i[l];t.data.attributes[l]=h.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let h=this.morphAttributes[l],c=[];for(let d=0,u=h.length;d<u;d++){let f=h[d];c.push(f.toJSON(t.data))}c.length>0&&(s[l]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let h in s){let c=s[h];this.setAttribute(h,c.clone(e))}let r=t.morphAttributes;for(let h in r){let c=[],d=r[h];for(let u=0,f=d.length;u<f;u++)c.push(d[u].clone(e));this.morphAttributes[h]=c}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let h=0,c=o.length;h<c;h++){let d=o[h];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},co=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Jh,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},fn=new A,or=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix4(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)fn.fromBufferAttribute(this,e),fn.applyNormalMatrix(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)fn.fromBufferAttribute(this,e),fn.transformDirection(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=Vn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=be(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=be(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Vn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),i=be(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),i=be(i,this.array),s=be(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=be(e,this.array),i=be(i,this.array),s=be(s,this.array),r=be(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){io("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new He(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){io("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ph=new A,ng=new A,ig=new jt,Hn=class{constructor(t=new A(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=ph.subVectors(i,e).cross(ng.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(ph),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(s,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||ig.getNormalMatrix(t),s=this.coplanarPoint(ph).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},sg=0,ti=class extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sg++}),this.uuid=Kn(),this.name="",this.type="Material",this.blending=gr,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Hh,this.blendDst=Vh,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Jt(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ka,this.stencilZFail=ka,this.stencilZPass=ka,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){$t(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){$t(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Jt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Hn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ct().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},_n=class extends ti{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Gs,Gr=new A,Ws=new A,Xs=new A,qs=new ct,Wr=new ct,Of=new xe,Ma=new A,Xr=new A,Sa=new A,Cd=new ct,mh=new ct,Pd=new ct,Mn=class extends Qe{constructor(t=new _n){if(super(),this.isSprite=!0,this.type="Sprite",Gs===void 0){Gs=new Se;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new co(e,5);Gs.setIndex([0,1,2,0,2,3]),Gs.setAttribute("position",new or(i,3,0,!1)),Gs.setAttribute("uv",new or(i,2,3,!1))}this.geometry=Gs,this.material=t,this.center=new ct(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Zt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ws.setFromMatrixScale(this.matrixWorld),Of.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Xs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ws.multiplyScalar(-Xs.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let o=this.center;ba(Ma.set(-.5,-.5,0),Xs,o,Ws,s,r),ba(Xr.set(.5,-.5,0),Xs,o,Ws,s,r),ba(Sa.set(.5,.5,0),Xs,o,Ws,s,r),Cd.set(0,0),mh.set(1,0),Pd.set(1,1);let a=t.ray.intersectTriangle(Ma,Xr,Sa,!1,Gr);if(a===null&&(ba(Xr.set(-.5,.5,0),Xs,o,Ws,s,r),mh.set(0,1),a=t.ray.intersectTriangle(Ma,Sa,Xr,!1,Gr),a===null))return;let l=t.ray.origin.distanceTo(Gr);l<t.near||l>t.far||e.push({distance:l,point:Gr.clone(),uv:yi.getInterpolation(Gr,Ma,Xr,Sa,Cd,mh,Pd,new ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ba(n,t,e,i,s,r){qs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Wr.x=r*qs.x-s*qs.y,Wr.y=s*qs.x+r*qs.y):Wr.copy(qs),n.copy(t),n.x+=Wr.x,n.y+=Wr.y,n.applyMatrix4(Of)}var xi=new A,gh=new A,wa=new A,Ta=new A,ar=class{constructor(t=new A,e=new A(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xi.copy(this.origin).addScaledVector(this.direction,e),xi.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){gh.copy(t).add(e).multiplyScalar(.5),wa.copy(e).sub(t).normalize(),Ta.copy(this.origin).sub(gh);let r=t.distanceTo(e)*.5,o=-this.direction.dot(wa),a=Ta.dot(this.direction),l=-Ta.dot(wa),h=Ta.lengthSq(),c=Math.abs(1-o*o),d,u,f,m;if(c>0)if(d=o*l-a,u=o*a-l,m=r*c,d>=0)if(u>=-m)if(u<=m){let y=1/c;d*=y,u*=y,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+h}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+h;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+h;else u<=-m?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+h):u<=m?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+h):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+h);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(gh).addScaledVector(wa,u),f}intersectSphere(t,e){if(t.radius<0)return null;xi.subVectors(t.center,this.origin);let i=xi.dot(this.direction),s=xi.dot(xi)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l,h=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,u=this.origin;return h>=0?(i=(t.min.x-u.x)*h,s=(t.max.x-u.x)*h):(i=(t.max.x-u.x)*h,s=(t.min.x-u.x)*h),c>=0?(r=(t.min.y-u.y)*c,o=(t.max.y-u.y)*c):(r=(t.max.y-u.y)*c,o=(t.min.y-u.y)*c),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,xi)!==null}intersectTriangle(t,e,i,s,r){let o=this.origin,a=this.direction,l=a.x,h=a.y,c=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,m=e.x-o.x,y=e.y-o.y,g=e.z-o.z,p=i.x-o.x,S=i.y-o.y,R=i.z-o.z,M=Math.abs(l),w=Math.abs(h),b=Math.abs(c),C,x,E,P,L,H,X,N,V,J,Z,ut;if(M>=w&&M>=b?(E=l,H=d,V=m,ut=p,l>=0?(C=h,x=c,P=u,L=f,X=y,N=g,J=S,Z=R):(C=c,x=h,P=f,L=u,X=g,N=y,J=R,Z=S)):w>=b?(E=h,H=u,V=y,ut=S,h>=0?(C=c,x=l,P=f,L=d,X=g,N=m,J=R,Z=p):(C=l,x=c,P=d,L=f,X=m,N=g,J=p,Z=R)):(E=c,H=f,V=g,ut=R,c>=0?(C=l,x=h,P=d,L=u,X=m,N=y,J=p,Z=S):(C=h,x=l,P=u,L=d,X=y,N=m,J=S,Z=p)),E===0)return null;let K=C/E,nt=x/E,it=1/E,Vt=P-K*H,It=L-nt*H,pe=X-K*V,re=N-nt*V,tt=J-K*ut,I=Z-nt*ut,B=tt*re-I*pe,ot=Vt*I-It*tt,gt=pe*It-re*Vt;if(s){if(B<0||ot<0||gt<0)return null}else if((B<0||ot<0||gt<0)&&(B>0||ot>0||gt>0))return null;let ft=B+ot+gt;if(ft===0)return null;let Rt=it*(B*H+ot*V+gt*ut);return(ft>0?Rt<0:Rt>0)?null:this.at(Rt/ft,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ve=class extends ti{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Id=new xe,os=new ar,Ea=new Si,Ld=new A,Aa=new A,Ra=new A,Ca=new A,_h=new A,Pa=new A,Dd=new A,Ia=new A,Ft=class extends Qe{constructor(t=new Se,e=new Ve){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Pa.set(0,0,0);for(let l=0,h=r.length;l<h;l++){let c=a[l],d=r[l];c!==0&&(_h.fromBufferAttribute(d,t),o?Pa.addScaledVector(_h,c):Pa.addScaledVector(_h.sub(e),c))}e.add(Pa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ea.copy(i.boundingSphere),Ea.applyMatrix4(r),os.copy(t.ray).recast(t.near),!(Ea.containsPoint(os.origin)===!1&&(os.intersectSphere(Ea,Ld)===null||os.origin.distanceToSquared(Ld)>(t.far-t.near)**2))&&(Id.copy(r).invert(),os.copy(t.ray).applyMatrix4(Id),!(i.boundingBox!==null&&os.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,os)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,c=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,y=u.length;m<y;m++){let g=u[m],p=o[g.materialIndex],S=Math.max(g.start,f.start),R=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let M=S,w=R;M<w;M+=3){let b=a.getX(M),C=a.getX(M+1),x=a.getX(M+2);s=La(this,p,t,i,h,c,d,b,C,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(a.count,f.start+f.count);for(let g=m,p=y;g<p;g+=3){let S=a.getX(g),R=a.getX(g+1),M=a.getX(g+2);s=La(this,o,t,i,h,c,d,S,R,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,y=u.length;m<y;m++){let g=u[m],p=o[g.materialIndex],S=Math.max(g.start,f.start),R=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let M=S,w=R;M<w;M+=3){let b=M,C=M+1,x=M+2;s=La(this,p,t,i,h,c,d,b,C,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let g=m,p=y;g<p;g+=3){let S=g,R=g+1,M=g+2;s=La(this,o,t,i,h,c,d,S,R,M),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function rg(n,t,e,i,s,r,o,a){let l;if(t.side===nn?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===Yi,a),l===null)return null;Ia.copy(a),Ia.applyMatrix4(n.matrixWorld);let h=e.ray.origin.distanceTo(Ia);return h<e.near||h>e.far?null:{distance:h,point:Ia.clone(),object:n}}function La(n,t,e,i,s,r,o,a,l,h){n.getVertexPosition(a,Aa),n.getVertexPosition(l,Ra),n.getVertexPosition(h,Ca);let c=rg(n,t,e,i,Aa,Ra,Ca,Dd);if(c){let d=new A;yi.getBarycoord(Dd,Aa,Ra,Ca,d),s&&(c.uv=yi.getInterpolatedAttribute(s,a,l,h,d,new ct)),r&&(c.uv1=yi.getInterpolatedAttribute(r,a,l,h,d,new ct)),o&&(c.normal=yi.getInterpolatedAttribute(o,a,l,h,d,new A),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));let u={a,b:l,c:h,normal:new A,materialIndex:0};yi.getNormal(Aa,Ra,Ca,u.normal),c.face=u,c.barycoord=d}return c}var ho=class extends pn{constructor(t=null,e=1,i=1,s,r,o,a,l,h=Ke,c=Ke,d,u){super(null,o,a,l,h,c,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var lr=class extends He{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ys=new xe,Nd=new xe,Da=[],Ud=new In,og=new xe,qr=new Ft,Yr=new Si,uo=class extends Ft{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new lr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,og)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new In),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ys),Ud.copy(t.boundingBox).applyMatrix4(Ys),this.boundingBox.union(Ud)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ys),Yr.copy(t.boundingSphere).applyMatrix4(Ys),this.boundingSphere.union(Yr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,o=t*r+1;for(let a=0;a<i.length;a++)i[a]=s[o+a]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(qr.geometry=this.geometry,qr.material=this.material,qr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Yr.copy(this.boundingSphere),Yr.applyMatrix4(i),t.ray.intersectsSphere(Yr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ys),Nd.multiplyMatrices(i,Ys),qr.matrixWorld=Nd,qr.raycast(t,Da);for(let o=0,a=Da.length;o<a;o++){let l=Da[o];l.instanceId=r,l.object=this,e.push(l)}Da.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new lr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new ho(new Float32Array(s*this.count),s,this.count,Cl,Dn));let r=this.morphTexture.source.data.data,o=0;for(let h=0;h<i.length;h++)o+=i[h];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*t;return r[l]=a,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},as=new Si,ag=new ct(.5,.5),Na=new A,cr=class{constructor(t=new Hn,e=new Hn,i=new Hn,s=new Hn,r=new Hn,o=new Hn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=kn,i=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],h=r[3],c=r[4],d=r[5],u=r[6],f=r[7],m=r[8],y=r[9],g=r[10],p=r[11],S=r[12],R=r[13],M=r[14],w=r[15];if(s[0].setComponents(h-o,f-c,p-m,w-S).normalize(),s[1].setComponents(h+o,f+c,p+m,w+S).normalize(),s[2].setComponents(h+a,f+d,p+y,w+R).normalize(),s[3].setComponents(h-a,f-d,p-y,w-R).normalize(),i)s[4].setComponents(l,u,g,M).normalize(),s[5].setComponents(h-l,f-u,p-g,w-M).normalize();else if(s[4].setComponents(h-l,f-u,p-g,w-M).normalize(),e===kn)s[5].setComponents(h+l,f+u,p+g,w+M).normalize();else if(e===tr)s[5].setComponents(l,u,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),as.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),as.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(as)}intersectsSprite(t){as.center.set(0,0,0);let e=ag.distanceTo(t.center);return as.radius=.7071067811865476+e,as.applyMatrix4(t.matrixWorld),this.intersectsSphere(as)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Na.x=s.normal.x>0?t.max.x:t.min.x,Na.y=s.normal.y>0?t.max.y:t.min.y,Na.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Na)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var el=class extends ti{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Fd=new xe,Ah=new ar,Ua=new Si,Fa=new A,fo=class extends Qe{constructor(t=new Se,e=new el){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ua.copy(i.boundingSphere),Ua.applyMatrix4(s),Ua.radius+=r,t.ray.intersectsSphere(Ua)===!1)return;Fd.copy(s).invert(),Ah.copy(t.ray).applyMatrix4(Fd);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=i.index,d=i.attributes.position;if(h!==null){let u=Math.max(0,o.start),f=Math.min(h.count,o.start+o.count);for(let m=u,y=f;m<y;m++){let g=h.getX(m);Fa.fromBufferAttribute(d,g),Od(Fa,g,l,s,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let m=u,y=f;m<y;m++)Fa.fromBufferAttribute(d,m),Od(Fa,m,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Od(n,t,e,i,s,r,o){let a=Ah.distanceSqToPoint(n);if(a<e){let l=new A;Ah.closestPointToPoint(n,l),l.applyMatrix4(i);let h=s.ray.origin.distanceTo(l);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var po=class extends pn{constructor(t=[],e=Zi,i,s,r,o,a,l,h,c){super(t,e,i,s,r,o,a,l,h,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ei=class extends pn{constructor(t,e,i,s,r,o,a,l,h){super(t,e,i,s,r,o,a,l,h),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Bi=class extends pn{constructor(t,e,i=Wn,s,r,o,a=Ke,l=Ke,h,c=Qn,d=1){if(c!==Qn&&c!==Ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,o,a,l,c,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ir(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},nl=class extends Bi{constructor(t,e=Wn,i=Zi,s,r,o=Ke,a=Ke,l,h=Qn){let c={width:t,height:t,depth:1},d=[c,c,c,c,c,c];super(t,t,e,i,s,r,o,a,l,h),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},mo=class extends pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},zi=class n extends Se{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],h=[],c=[],d=[],u=0,f=0;m("z","y","x",-1,-1,i,e,t,o,r,0),m("z","y","x",1,-1,i,e,-t,o,r,1),m("x","z","y",1,1,t,i,e,s,o,2),m("x","z","y",1,-1,t,i,-e,s,o,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ue(h,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(d,2));function m(y,g,p,S,R,M,w,b,C,x,E){let P=M/C,L=w/x,H=M/2,X=w/2,N=b/2,V=C+1,J=x+1,Z=0,ut=0,K=new A;for(let nt=0;nt<J;nt++){let it=nt*L-X;for(let Vt=0;Vt<V;Vt++){let It=Vt*P-H;K[y]=It*S,K[g]=it*R,K[p]=N,h.push(K.x,K.y,K.z),K[y]=0,K[g]=0,K[p]=b>0?1:-1,c.push(K.x,K.y,K.z),d.push(Vt/C),d.push(1-nt/x),Z+=1}}for(let nt=0;nt<x;nt++)for(let it=0;it<C;it++){let Vt=u+it+V*nt,It=u+it+V*(nt+1),pe=u+(it+1)+V*(nt+1),re=u+(it+1)+V*nt;l.push(Vt,It,re),l.push(It,pe,re),ut+=6}a.addGroup(f,ut,E),f+=ut,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var hs=class n extends Se{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],l=[],h=new A,c=new ct;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=i+d/e*s;h.x=t*Math.cos(f),h.y=t*Math.sin(f),o.push(h.x,h.y,h.z),a.push(0,0,1),c.x=(o[u]/t+1)/2,c.y=(o[u+1]/t+1)/2,l.push(c.x,c.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("normal",new ue(a,3)),this.setAttribute("uv",new ue(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},us=class n extends Se{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};let h=this;s=Math.floor(s),r=Math.floor(r);let c=[],d=[],u=[],f=[],m=0,y=[],g=i/2,p=0;S(),o===!1&&(t>0&&R(!0),e>0&&R(!1)),this.setIndex(c),this.setAttribute("position",new ue(d,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(f,2));function S(){let M=new A,w=new A,b=0,C=(e-t)/i;for(let x=0;x<=r;x++){let E=[],P=x/r,L=P*(e-t)+t;for(let H=0;H<=s;H++){let X=H/s,N=X*l+a,V=Math.sin(N),J=Math.cos(N);w.x=L*V,w.y=-P*i+g,w.z=L*J,d.push(w.x,w.y,w.z),M.set(V,C,J).normalize(),u.push(M.x,M.y,M.z),f.push(X,1-P),E.push(m++)}y.push(E)}for(let x=0;x<s;x++)for(let E=0;E<r;E++){let P=y[E][x],L=y[E+1][x],H=y[E+1][x+1],X=y[E][x+1];(t>0||E!==0)&&(c.push(P,L,X),b+=3),(e>0||E!==r-1)&&(c.push(L,H,X),b+=3)}h.addGroup(p,b,0),p+=b}function R(M){let w=m,b=new ct,C=new A,x=0,E=M===!0?t:e,P=M===!0?1:-1;for(let H=1;H<=s;H++)d.push(0,g*P,0),u.push(0,P,0),f.push(.5,.5),m++;let L=m;for(let H=0;H<=s;H++){let N=H/s*l+a,V=Math.cos(N),J=Math.sin(N);C.x=E*J,C.y=g*P,C.z=E*V,d.push(C.x,C.y,C.z),u.push(0,P,0),b.x=V*.5+.5,b.y=J*.5*P+.5,f.push(b.x,b.y),m++}for(let H=0;H<s;H++){let X=w+H,N=L+H;M===!0?c.push(N,N+1,X):c.push(N+1,N,X),x+=3}h.addGroup(p,x,M===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Hi=class n extends us{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Sn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){$t("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,o;e?o=e:o=t*i[r-1];let a=0,l=r-1,h;for(;a<=l;)if(s=Math.floor(a+(l-a)/2),h=i[s]-o,h<0)a=s+1;else if(h>0)l=s-1;else{l=s;break}if(s=l,i[s]===o)return s/(r-1);let c=i[s],u=i[s+1]-c,f=(o-c)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),l=e||(o.isVector2?new ct:new A);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new A,s=[],r=[],o=[],a=new A,l=new xe;for(let f=0;f<=t;f++){let m=f/t;s[f]=this.getTangentAt(m,new A)}r[0]=new A,o[0]=new A;let h=Number.MAX_VALUE,c=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);c<=h&&(h=c,i.set(1,0,0)),d<=h&&(h=d,i.set(0,1,0)),u<=h&&i.set(0,0,1),a.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(oe(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(oe(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(l.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},hr=class extends Sn{constructor(t=0,e=0,i=1,s=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new ct){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(a),h=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=h-this.aY;l=u*c-f*d+this.aX,h=u*d+f*c+this.aY}return i.set(l,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},il=class extends hr{constructor(t,e,i,s,r,o){super(t,e,i,i,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function tu(){let n=0,t=0,e=0,i=0;function s(r,o,a,l){n=r,t=a,e=-3*r+3*o-2*a-l,i=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,h){s(o,a,h*(a-r),h*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,h,c,d){let u=(o-r)/h-(a-r)/(h+c)+(a-o)/c,f=(a-o)/c-(l-o)/(c+d)+(l-a)/d;u*=c,f*=c,s(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return n+t*r+e*o+i*a}}}var Bd=new A,zd=new A,xh=new tu,yh=new tu,vh=new tu,ds=class extends Sn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new A){let i=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let h,c;this.closed||a>0?h=s[(a-1)%r]:(zd.subVectors(s[0],s[1]).add(s[0]),h=zd);let d=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?c=s[(a+2)%r]:(Bd.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=Bd),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(h.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(c),f);y<1e-4&&(y=1),m<1e-4&&(m=y),g<1e-4&&(g=y),xh.initNonuniformCatmullRom(h.x,d.x,u.x,c.x,m,y,g),yh.initNonuniformCatmullRom(h.y,d.y,u.y,c.y,m,y,g),vh.initNonuniformCatmullRom(h.z,d.z,u.z,c.z,m,y,g)}else this.curveType==="catmullrom"&&(xh.initCatmullRom(h.x,d.x,u.x,c.x,this.tension),yh.initCatmullRom(h.y,d.y,u.y,c.y,this.tension),vh.initCatmullRom(h.z,d.z,u.z,c.z,this.tension));return i.set(xh.calc(l),yh.calc(l),vh.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new A().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Hd(n,t,e,i,s){let r=(i-t)*.5,o=(s-e)*.5,a=n*n,l=n*a;return(2*e-2*i+r+o)*l+(-3*e+3*i-2*r-o)*a+r*n+e}function lg(n,t){let e=1-n;return e*e*t}function cg(n,t){return 2*(1-n)*n*t}function hg(n,t){return n*n*t}function Kr(n,t,e,i){return lg(n,t)+cg(n,e)+hg(n,i)}function ug(n,t){let e=1-n;return e*e*e*t}function dg(n,t){let e=1-n;return 3*e*e*n*t}function fg(n,t){return 3*(1-n)*n*n*t}function pg(n,t){return n*n*n*t}function Qr(n,t,e,i,s){return ug(n,t)+dg(n,e)+fg(n,i)+pg(n,s)}var go=class extends Sn{constructor(t=new ct,e=new ct,i=new ct,s=new ct){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new ct){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Qr(t,s.x,r.x,o.x,a.x),Qr(t,s.y,r.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},sl=class extends Sn{constructor(t=new A,e=new A,i=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new A){let i=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return i.set(Qr(t,s.x,r.x,o.x,a.x),Qr(t,s.y,r.y,o.y,a.y),Qr(t,s.z,r.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},_o=class extends Sn{constructor(t=new ct,e=new ct){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ct){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ct){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},rl=class extends Sn{constructor(t=new A,e=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new A){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new A){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xo=class extends Sn{constructor(t=new ct,e=new ct,i=new ct){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new ct){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Kr(t,s.x,r.x,o.x),Kr(t,s.y,r.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ol=class extends Sn{constructor(t=new A,e=new A,i=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new A){let i=e,s=this.v0,r=this.v1,o=this.v2;return i.set(Kr(t,s.x,r.x,o.x),Kr(t,s.y,r.y,o.y),Kr(t,s.z,r.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},yo=class extends Sn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ct){let i=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,l=s[o===0?o:o-1],h=s[o],c=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return i.set(Hd(a,l.x,h.x,c.x,d.x),Hd(a,l.y,h.y,c.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new ct().fromArray(s))}return this}},Rh=Object.freeze({__proto__:null,ArcCurve:il,CatmullRomCurve3:ds,CubicBezierCurve:go,CubicBezierCurve3:sl,EllipseCurve:hr,LineCurve:_o,LineCurve3:rl,QuadraticBezierCurve:xo,QuadraticBezierCurve3:ol,SplineCurve:yo}),al=class extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Rh[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let o=s[r]-i,a=this.curves[r],l=a.getLength(),h=l===0?0:1-o/l;return a.getPointAt(h,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let h=0;h<l.length;h++){let c=l[h];i&&i.equals(c)||(e.push(c),i=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Rh[s.type]().fromJSON(s))}return this}},vo=class extends al{constructor(t){super(),this.type="Path",this.currentPoint=new ct,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new _o(this.currentPoint.clone(),new ct(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new xo(this.currentPoint.clone(),new ct(t,e),new ct(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,o){let a=new go(this.currentPoint.clone(),new ct(t,e),new ct(i,s),new ct(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new yo(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,i,s,r,o),this}absarc(t,e,i,s,r,o){return this.absellipse(t,e,i,i,s,r,o),this}ellipse(t,e,i,s,r,o,a,l){let h=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+h,e+c,i,s,r,o,a,l),this}absellipse(t,e,i,s,r,o,a,l){let h=new hr(t,e,i,s,r,o,a,l);if(this.curves.length>0){let d=h.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(h);let c=h.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Vi=class extends vo{constructor(t){super(t),this.uuid=Kn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new vo().fromJSON(s))}return this}};function mg(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=Bf(n,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,l,h;if(i&&(r=vg(n,t,r,e)),n.length>80*e){a=n[0],l=n[1];let c=a,d=l;for(let u=e;u<s;u+=e){let f=n[u],m=n[u+1];f<a&&(a=f),m<l&&(l=m),f>c&&(c=f),m>d&&(d=m)}h=Math.max(c-a,d-l),h=h!==0?32767/h:0}return Mo(r,o,e,a,l,h,0),o}function Bf(n,t,e,i,s){let r;if(s===Ig(n,t,e,i)>0)for(let o=t;o<e;o+=i)r=Vd(o/i|0,n[o],n[o+1],r);else for(let o=e-i;o>=t;o-=i)r=Vd(o/i|0,n[o],n[o+1],r);return r&&ur(r,r.next)&&(bo(r),r=r.next),r}function fs(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(ur(e,e.next)||Ne(e.prev,e,e.next)===0)){if(bo(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Mo(n,t,e,i,s,r,o){if(!n)return;!o&&r&&Tg(n,i,s,r);let a=n;for(;n.prev!==n.next;){let l=n.prev,h=n.next;if(r?_g(n,i,s,r):gg(n)){t.push(l.i,n.i,h.i),bo(n),n=h.next,a=h.next;continue}if(n=h,n===a){o?o===1?(n=xg(fs(n),t),Mo(n,t,e,i,s,r,2)):o===2&&yg(n,t,e,i,s,r):Mo(fs(n),t,e,i,s,r,1);break}}}function gg(n){let t=n.prev,e=n,i=n.next;if(Ne(t,e,i)>=0)return!1;let s=t.x,r=e.x,o=i.x,a=t.y,l=e.y,h=i.y,c=Math.min(s,r,o),d=Math.min(a,l,h),u=Math.max(s,r,o),f=Math.max(a,l,h),m=i.next;for(;m!==t;){if(m.x>=c&&m.x<=u&&m.y>=d&&m.y<=f&&Zr(s,a,r,l,o,h,m.x,m.y)&&Ne(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function _g(n,t,e,i){let s=n.prev,r=n,o=n.next;if(Ne(s,r,o)>=0)return!1;let a=s.x,l=r.x,h=o.x,c=s.y,d=r.y,u=o.y,f=Math.min(a,l,h),m=Math.min(c,d,u),y=Math.max(a,l,h),g=Math.max(c,d,u),p=Ch(f,m,t,e,i),S=Ch(y,g,t,e,i),R=n.prevZ,M=n.nextZ;for(;R&&R.z>=p&&M&&M.z<=S;){if(R.x>=f&&R.x<=y&&R.y>=m&&R.y<=g&&R!==s&&R!==o&&Zr(a,c,l,d,h,u,R.x,R.y)&&Ne(R.prev,R,R.next)>=0||(R=R.prevZ,M.x>=f&&M.x<=y&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&Zr(a,c,l,d,h,u,M.x,M.y)&&Ne(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;R&&R.z>=p;){if(R.x>=f&&R.x<=y&&R.y>=m&&R.y<=g&&R!==s&&R!==o&&Zr(a,c,l,d,h,u,R.x,R.y)&&Ne(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;M&&M.z<=S;){if(M.x>=f&&M.x<=y&&M.y>=m&&M.y<=g&&M!==s&&M!==o&&Zr(a,c,l,d,h,u,M.x,M.y)&&Ne(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function xg(n,t){let e=n;do{let i=e.prev,s=e.next.next;!ur(i,s)&&Hf(i,e,e.next,s)&&So(i,s)&&So(s,i)&&(t.push(i.i,e.i,s.i),bo(e),bo(e.next),e=n=s),e=e.next}while(e!==n);return fs(e)}function yg(n,t,e,i,s,r){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Rg(o,a)){let l=Vf(o,a);o=fs(o,o.next),l=fs(l,l.next),Mo(o,t,e,i,s,r,0),Mo(l,t,e,i,s,r,0);return}a=a.next}o=o.next}while(o!==n)}function vg(n,t,e,i){let s=[];for(let r=0,o=t.length;r<o;r++){let a=t[r]*i,l=r<o-1?t[r+1]*i:n.length,h=Bf(n,a,l,i,!1);h===h.next&&(h.steiner=!0),s.push(Ag(h))}s.sort(Mg);for(let r=0;r<s.length;r++)e=Sg(s[r],e);return e}function Mg(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Sg(n,t){let e=bg(n,t);if(!e)return t;let i=Vf(e,n);return fs(i,i.next),fs(e,e.next)}function bg(n,t){let e=t,i=n.x,s=n.y,r=-1/0,o;if(ur(n,e))return e;do{if(ur(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,o=e.x<e.next.x?e:e.next,d===i))return o}e=e.next}while(e!==t);if(!o)return null;let a=o,l=o.x,h=o.y,c=1/0;e=o;do{if(i>=e.x&&e.x>=l&&i!==e.x&&zf(s<h?i:r,s,l,h,s<h?r:i,s,e.x,e.y)){let d=Math.abs(s-e.y)/(i-e.x);So(e,n)&&(d<c||d===c&&(e.x>o.x||e.x===o.x&&wg(o,e)))&&(o=e,c=d)}e=e.next}while(e!==a);return o}function wg(n,t){return Ne(n.prev,n,t.prev)<0&&Ne(t.next,n,n.next)<0}function Tg(n,t,e,i){let s=n;do s.z===0&&(s.z=Ch(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Eg(s)}function Eg(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let o=i,a=0;for(let h=0;h<e&&(a++,o=o.nextZ,!!o);h++);let l=e;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||i.z<=o.z)?(s=i,i=i.nextZ,a--):(s=o,o=o.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=o}r.nextZ=null,e*=2}while(t>1);return n}function Ch(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Ag(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function zf(n,t,e,i,s,r,o,a){return(s-o)*(t-a)>=(n-o)*(r-a)&&(n-o)*(i-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(i-a)}function Zr(n,t,e,i,s,r,o,a){return!(n===o&&t===a)&&zf(n,t,e,i,s,r,o,a)}function Rg(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Cg(n,t)&&(So(n,t)&&So(t,n)&&Pg(n,t)&&(Ne(n.prev,n,t.prev)||Ne(n,t.prev,t))||ur(n,t)&&Ne(n.prev,n,n.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function ur(n,t){return n.x===t.x&&n.y===t.y}function Hf(n,t,e,i){let s=Ba(Ne(n,t,e)),r=Ba(Ne(n,t,i)),o=Ba(Ne(e,i,n)),a=Ba(Ne(e,i,t));return!!(s!==r&&o!==a||s===0&&Oa(n,e,t)||r===0&&Oa(n,i,t)||o===0&&Oa(e,n,i)||a===0&&Oa(e,t,i))}function Oa(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function Ba(n){return n>0?1:n<0?-1:0}function Cg(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&Hf(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function So(n,t){return Ne(n.prev,n,n.next)<0?Ne(n,t,n.next)>=0&&Ne(n,n.prev,t)>=0:Ne(n,t,n.prev)<0||Ne(n,n.next,t)<0}function Pg(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Vf(n,t){let e=Ph(n.i,n.x,n.y),i=Ph(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function Vd(n,t,e,i){let s=Ph(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function bo(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ph(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ig(n,t,e,i){let s=0;for(let r=t,o=e-i;r<e;r+=i)s+=(n[o]-n[r])*(n[r+1]+n[o+1]),o=r;return s}var Ih=class{static triangulate(t,e,i=2){return mg(t,e,i)}},ls=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];kd(t),Gd(i,t);let o=t.length;e.forEach(kd);for(let l=0;l<e.length;l++)s.push(o),o+=e[l].length,Gd(i,e[l]);let a=Ih.triangulate(i,s);for(let l=0;l<a.length;l+=3)r.push(a.slice(l,l+3));return r}};function kd(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Gd(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var ps=class n extends Se{constructor(t=new Vi([new ct(.5,.5),new ct(-.5,.5),new ct(-.5,-.5),new ct(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let a=0,l=t.length;a<l;a++){let h=t[a];o(h)}this.setAttribute("position",new ue(s,3)),this.setAttribute("uv",new ue(r,2)),this.computeVertexNormals();function o(a){let l=[],h=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Lg,R,M=!1,w,b,C,x;if(p){R=p.getSpacedPoints(c),M=!0,u=!1;let $=p.isCatmullRomCurve3?p.closed:!1;w=p.computeFrenetFrames(c,$),b=new A,C=new A,x=new A}u||(g=0,f=0,m=0,y=0);let E=a.extractPoints(h),P=E.shape,L=E.holes;if(!ls.isClockWise(P)){P=P.reverse();for(let $=0,rt=L.length;$<rt;$++){let at=L[$];ls.isClockWise(at)&&(L[$]=at.reverse())}}function X($){let at=10000000000000001e-36,lt=$[0];for(let pt=1;pt<=$.length;pt++){let Ut=pt%$.length,Tt=$[Ut],Lt=Tt.x-lt.x,Dt=Tt.y-lt.y,D=Lt*Lt+Dt*Dt,me=Math.max(Math.abs(Tt.x),Math.abs(Tt.y),Math.abs(lt.x),Math.abs(lt.y)),te=at*me*me;if(D<=te){$.splice(Ut,1),pt--;continue}lt=Tt}}X(P),L.forEach(X);let N=L.length,V=P;for(let $=0;$<N;$++){let rt=L[$];P=P.concat(rt)}function J($,rt,at){return rt||Zt("ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(rt,at)}let Z=P.length;function ut($,rt,at){let lt,pt,Ut,Tt=$.x-rt.x,Lt=$.y-rt.y,Dt=at.x-$.x,D=at.y-$.y,me=Tt*Tt+Lt*Lt,te=Tt*D-Lt*Dt;if(Math.abs(te)>Number.EPSILON){let T=Math.sqrt(me),_=Math.sqrt(Dt*Dt+D*D),z=rt.x-Lt/T,k=rt.y+Tt/T,Q=at.x-D/_,mt=at.y+Dt/_,_t=((Q-z)*D-(mt-k)*Dt)/(Tt*D-Lt*Dt);lt=z+Tt*_t-$.x,pt=k+Lt*_t-$.y;let j=lt*lt+pt*pt;if(j<=2)return new ct(lt,pt);Ut=Math.sqrt(j/2)}else{let T=!1;Tt>Number.EPSILON?Dt>Number.EPSILON&&(T=!0):Tt<-Number.EPSILON?Dt<-Number.EPSILON&&(T=!0):Math.sign(Lt)===Math.sign(D)&&(T=!0),T?(lt=-Lt,pt=Tt,Ut=Math.sqrt(me)):(lt=Tt,pt=Lt,Ut=Math.sqrt(me/2))}return new ct(lt/Ut,pt/Ut)}let K=[];for(let $=0,rt=V.length,at=rt-1,lt=$+1;$<rt;$++,at++,lt++)at===rt&&(at=0),lt===rt&&(lt=0),K[$]=ut(V[$],V[at],V[lt]);let nt=[],it,Vt=K.concat();for(let $=0,rt=N;$<rt;$++){let at=L[$];it=[];for(let lt=0,pt=at.length,Ut=pt-1,Tt=lt+1;lt<pt;lt++,Ut++,Tt++)Ut===pt&&(Ut=0),Tt===pt&&(Tt=0),it[lt]=ut(at[lt],at[Ut],at[Tt]);nt.push(it),Vt=Vt.concat(it)}let It;if(g===0)It=ls.triangulateShape(V,L);else{let $=[],rt=[];for(let at=0;at<g;at++){let lt=at/g,pt=f*Math.cos(lt*Math.PI/2),Ut=m*Math.sin(lt*Math.PI/2)+y;for(let Tt=0,Lt=V.length;Tt<Lt;Tt++){let Dt=J(V[Tt],K[Tt],Ut);ot(Dt.x,Dt.y,-pt),lt===0&&$.push(Dt)}for(let Tt=0,Lt=N;Tt<Lt;Tt++){let Dt=L[Tt];it=nt[Tt];let D=[];for(let me=0,te=Dt.length;me<te;me++){let T=J(Dt[me],it[me],Ut);ot(T.x,T.y,-pt),lt===0&&D.push(T)}lt===0&&rt.push(D)}}It=ls.triangulateShape($,rt)}let pe=It.length,re=m+y;for(let $=0;$<Z;$++){let rt=u?J(P[$],Vt[$],re):P[$];M?(C.copy(w.normals[0]).multiplyScalar(rt.x),b.copy(w.binormals[0]).multiplyScalar(rt.y),x.copy(R[0]).add(C).add(b),ot(x.x,x.y,x.z)):ot(rt.x,rt.y,0)}for(let $=1;$<=c;$++)for(let rt=0;rt<Z;rt++){let at=u?J(P[rt],Vt[rt],re):P[rt];M?(C.copy(w.normals[$]).multiplyScalar(at.x),b.copy(w.binormals[$]).multiplyScalar(at.y),x.copy(R[$]).add(C).add(b),ot(x.x,x.y,x.z)):ot(at.x,at.y,d/c*$)}for(let $=g-1;$>=0;$--){let rt=$/g,at=f*Math.cos(rt*Math.PI/2),lt=m*Math.sin(rt*Math.PI/2)+y;for(let pt=0,Ut=V.length;pt<Ut;pt++){let Tt=J(V[pt],K[pt],lt);ot(Tt.x,Tt.y,d+at)}for(let pt=0,Ut=L.length;pt<Ut;pt++){let Tt=L[pt];it=nt[pt];for(let Lt=0,Dt=Tt.length;Lt<Dt;Lt++){let D=J(Tt[Lt],it[Lt],lt);M?ot(D.x,D.y+R[c-1].y,R[c-1].x+at):ot(D.x,D.y,d+at)}}}tt(),I();function tt(){let $=s.length/3;if(u){let rt=0,at=Z*rt;for(let lt=0;lt<pe;lt++){let pt=It[lt];gt(pt[2]+at,pt[1]+at,pt[0]+at)}rt=c+g*2,at=Z*rt;for(let lt=0;lt<pe;lt++){let pt=It[lt];gt(pt[0]+at,pt[1]+at,pt[2]+at)}}else{for(let rt=0;rt<pe;rt++){let at=It[rt];gt(at[2],at[1],at[0])}for(let rt=0;rt<pe;rt++){let at=It[rt];gt(at[0]+Z*c,at[1]+Z*c,at[2]+Z*c)}}i.addGroup($,s.length/3-$,0)}function I(){let $=s.length/3,rt=0;B(V,rt),rt+=V.length;for(let at=0,lt=L.length;at<lt;at++){let pt=L[at];B(pt,rt),rt+=pt.length}i.addGroup($,s.length/3-$,1)}function B($,rt){let at=$.length;for(;--at>=0;){let lt=at,pt=at-1;pt<0&&(pt=$.length-1);for(let Ut=0,Tt=c+g*2;Ut<Tt;Ut++){let Lt=Z*Ut,Dt=Z*(Ut+1),D=rt+lt+Lt,me=rt+pt+Lt,te=rt+pt+Dt,T=rt+lt+Dt;ft(D,me,te,T)}}}function ot($,rt,at){l.push($),l.push(rt),l.push(at)}function gt($,rt,at){Rt($),Rt(rt),Rt(at);let lt=s.length/3,pt=S.generateTopUV(i,s,lt-3,lt-2,lt-1);Kt(pt[0]),Kt(pt[1]),Kt(pt[2])}function ft($,rt,at,lt){Rt($),Rt(rt),Rt(lt),Rt(rt),Rt(at),Rt(lt);let pt=s.length/3,Ut=S.generateSideWallUV(i,s,pt-6,pt-3,pt-2,pt-1);Kt(Ut[0]),Kt(Ut[1]),Kt(Ut[3]),Kt(Ut[1]),Kt(Ut[2]),Kt(Ut[3])}function Rt($){s.push(l[$*3+0]),s.push(l[$*3+1]),s.push(l[$*3+2])}function Kt($){r.push($.x),r.push($.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Dg(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];i.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Rh[s.type]().fromJSON(s)),new n(i,t.options)}},Lg={generateTopUV:function(n,t,e,i,s){let r=t[e*3],o=t[e*3+1],a=t[i*3],l=t[i*3+1],h=t[s*3],c=t[s*3+1];return[new ct(r,o),new ct(a,l),new ct(h,c)]},generateSideWallUV:function(n,t,e,i,s,r){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],h=t[i*3],c=t[i*3+1],d=t[i*3+2],u=t[s*3],f=t[s*3+1],m=t[s*3+2],y=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-c)<Math.abs(o-h)?[new ct(o,1-l),new ct(h,1-d),new ct(u,1-m),new ct(y,1-p)]:[new ct(a,1-l),new ct(c,1-d),new ct(f,1-m),new ct(g,1-p)]}};function Dg(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var wo=class n extends Se{constructor(t=[new ct(0,-.5),new ct(.5,0),new ct(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=oe(s,0,Math.PI*2);let r=[],o=[],a=[],l=[],h=[],c=1/e,d=new A,u=new ct,f=new A,m=new A,y=new A,g=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:g=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-g,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(y.x,y.y,y.z);break;default:g=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(m)}for(let S=0;S<=e;S++){let R=i+S*c*s,M=Math.sin(R),w=Math.cos(R);for(let b=0;b<=t.length-1;b++){d.x=t[b].x*M,d.y=t[b].y,d.z=t[b].x*w,o.push(d.x,d.y,d.z),u.x=S/e,u.y=b/(t.length-1),a.push(u.x,u.y);let C=l[3*b+0]*M,x=l[3*b+1],E=l[3*b+0]*w;h.push(C,x,E)}}for(let S=0;S<e;S++)for(let R=0;R<t.length-1;R++){let M=R+S*t.length,w=M,b=M+t.length,C=M+t.length+1,x=M+1;r.push(w,b,x),r.push(C,x,b)}this.setIndex(r),this.setAttribute("position",new ue(o,3)),this.setAttribute("uv",new ue(a,2)),this.setAttribute("normal",new ue(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var ni=class n extends Se{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),h=a+1,c=l+1,d=t/a,u=e/l,f=[],m=[],y=[],g=[];for(let p=0;p<c;p++){let S=p*u-o;for(let R=0;R<h;R++){let M=R*d-r;m.push(M,-S,0),y.push(0,0,1),g.push(R/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let S=0;S<a;S++){let R=S+h*p,M=S+h*(p+1),w=S+1+h*(p+1),b=S+1+h*p;f.push(R,M,b),f.push(M,w,b)}this.setIndex(f),this.setAttribute("position",new ue(m,3)),this.setAttribute("normal",new ue(y,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}};var ii=class n extends Se{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(o+a,Math.PI),h=0,c=[],d=new A,u=new A,f=[],m=[],y=[],g=[];for(let p=0;p<=i;p++){let S=[],R=p/i,M=o+R*a,w=t*Math.cos(M),b=Math.sqrt(t*t-w*w),C=0;p===0&&o===0?C=.5/e:p===i&&l===Math.PI&&(C=-.5/e);for(let x=0;x<=e;x++){let E=x/e,P=s+E*r;d.x=-b*Math.cos(P),d.y=w,d.z=b*Math.sin(P),m.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),g.push(E+C,1-R),S.push(h++)}c.push(S)}for(let p=0;p<i;p++)for(let S=0;S<e;S++){let R=c[p][S+1],M=c[p][S],w=c[p+1][S],b=c[p+1][S+1];(p!==0||o>0)&&f.push(R,M,b),(p!==i-1||l<Math.PI)&&f.push(M,w,b)}this.setIndex(f),this.setAttribute("position",new ue(m,3)),this.setAttribute("normal",new ue(y,3)),this.setAttribute("uv",new ue(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ki=class n extends Se{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},i=Math.floor(i),s=Math.floor(s);let l=[],h=[],c=[],d=[],u=new A,f=new A,m=new A;for(let y=0;y<=i;y++){let g=o+y/i*a;for(let p=0;p<=s;p++){let S=p/s*r;f.x=(t+e*Math.cos(g))*Math.cos(S),f.y=(t+e*Math.cos(g))*Math.sin(S),f.z=e*Math.sin(g),h.push(f.x,f.y,f.z),u.x=t*Math.cos(S),u.y=t*Math.sin(S),m.subVectors(f,u).normalize(),c.push(m.x,m.y,m.z),d.push(p/s),d.push(y/i)}}for(let y=1;y<=i;y++)for(let g=1;g<=s;g++){let p=(s+1)*y+g-1,S=(s+1)*(y-1)+g-1,R=(s+1)*(y-1)+g,M=(s+1)*y+g;l.push(p,S,M),l.push(S,R,M)}this.setIndex(l),this.setAttribute("position",new ue(h,3)),this.setAttribute("normal",new ue(c,3)),this.setAttribute("uv",new ue(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function vs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Wd(s))s.isRenderTargetTexture?($t("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Wd(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function un(n){let t={};for(let e=0;e<n.length;e++){let i=vs(n[e]);for(let s in i)t[s]=i[s]}return t}function Wd(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Ng(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function eu(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}var wi={clone:vs,merge:un},Ug=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ie=class extends ti{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ug,this.fragmentShader=Fg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=vs(t.uniforms),this.uniformsGroups=Ng(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Jt().setHex(s.value);break;case"v2":this.uniforms[i].value=new ct().fromArray(s.value);break;case"v3":this.uniforms[i].value=new A().fromArray(s.value);break;case"v4":this.uniforms[i].value=new De().fromArray(s.value);break;case"m3":this.uniforms[i].value=new jt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new xe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},dr=class extends Ie{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ee=class extends ti{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cc,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ll=class extends ti{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},cl=class extends ti{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Zs(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Mh(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Gi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},hl=class extends Gi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wh,endingEnd:wh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Th:r=t,a=2*e-i;break;case Eh:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Th:o=t,l=2*i-e;break;case Eh:o=1,l=i+s[1]-s[0];break;default:o=t-1,l=e}let h=(i-e)*.5,c=this.valueSize;this._weightPrev=h/(e-a),this._weightNext=h/(l-i),this._offsetPrev=r*c,this._offsetNext=o*c}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,c=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,m=(i-e)/(s-e),y=m*m,g=y*m,p=-u*g+2*u*y-u*m,S=(1+u)*g+(-1.5-2*u)*y+(-.5+u)*m+1,R=(-1-f)*g+(1.5+f)*y+.5*m,M=f*g-f*y;for(let w=0;w!==a;++w)r[w]=p*o[c+w]+S*o[h+w]+R*o[l+w]+M*o[d+w];return r}},ul=class extends Gi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,c=(i-e)/(s-e),d=1-c;for(let u=0;u!==a;++u)r[u]=o[h+u]*d+o[l+u]*c;return r}},dl=class extends Gi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},fl=class extends Gi{interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,h=l-a,c=this.inTangents,d=this.outTangents;if(!c||!d){let m=(i-e)/(s-e),y=1-m;for(let g=0;g!==a;++g)r[g]=o[h+g]*y+o[l+g]*m;return r}let u=a*2,f=t-1;for(let m=0;m!==a;++m){let y=o[h+m],g=o[l+m],p=f*u+m*2,S=d[p],R=d[p+1],M=t*u+m*2,w=c[M],b=c[M+1],C=Bg(i,e,S,w,s);r[m]=kf(C,y,R,b,g)}return r}};function kf(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Og(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Bg(n,t,e,i,s){let r=(n-t)/(s-t);for(let o=0;o<8;o++){let a=kf(r,t,e,i,s)-n;if(Math.abs(a)<1e-10)break;let l=Og(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var bn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Zs(e,this.TimeBufferType),this.values=Zs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Zs(t.times,Array),values:Zs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Mh(t.settings)&&(i.settings={inTangents:Zs(t.settings.inTangents,Array),outTangents:Zs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ul(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new hl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new fl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case jr:e=this.InterpolantFactoryMethodDiscrete;break;case Ka:e=this.InterpolantFactoryMethodLinear;break;case Va:e=this.InterpolantFactoryMethodSmooth;break;case bh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return $t("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return jr;case this.InterpolantFactoryMethodLinear:return Ka;case this.InterpolantFactoryMethodSmooth:return Va;case this.InterpolantFactoryMethodBezier:return bh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Mh(this.settings)&&(Xd(this.settings.inTangents,t),Xd(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Zt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=i[a];if(typeof l=="number"&&isNaN(l)){Zt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Zt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(s!==void 0&&Em(s))for(let a=0,l=s.length;a!==l;++a){let h=s[a];if(isNaN(h)){Zt("KeyframeTrack: Value is not a valid number.",this,a,h),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Va,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,h=t[a],c=t[a+1];if(h!==c&&(a!==1||h!==t[0]))if(s)l=!0;else{let d=a*i,u=d-i,f=d+i;for(let m=0;m!==i;++m){let y=e[d+m];if(y!==e[u+m]||y!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*i,u=o*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,l=o*i,h=0;h!==i;++h)e[l+h]=e[a+h];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Mh(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Xd(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}bn.prototype.ValueTypeName="";bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=Ka;var Wi=class extends bn{constructor(t,e,i){super(t,e,i)}};Wi.prototype.ValueTypeName="bool";Wi.prototype.ValueBufferType=Array;Wi.prototype.DefaultInterpolation=jr;Wi.prototype.InterpolantFactoryMethodLinear=void 0;Wi.prototype.InterpolantFactoryMethodSmooth=void 0;var pl=class extends bn{constructor(t,e,i,s){super(t,e,i,s)}};pl.prototype.ValueTypeName="color";var ml=class extends bn{constructor(t,e,i,s){super(t,e,i,s)}};ml.prototype.ValueTypeName="number";var gl=class extends Gi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-e)/(s-e),h=t*a;for(let c=h+a;h!==c;h+=4)Pn.slerpFlat(r,0,o,h-a,o,h,l);return r}},To=class extends bn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new gl(this.times,this.values,this.getValueSize(),t)}};To.prototype.ValueTypeName="quaternion";To.prototype.InterpolantFactoryMethodSmooth=void 0;var Xi=class extends bn{constructor(t,e,i){super(t,e,i)}};Xi.prototype.ValueTypeName="string";Xi.prototype.ValueBufferType=Array;Xi.prototype.DefaultInterpolation=jr;Xi.prototype.InterpolantFactoryMethodLinear=void 0;Xi.prototype.InterpolantFactoryMethodSmooth=void 0;var _l=class extends bn{constructor(t,e,i,s){super(t,e,i,s)}};_l.prototype.ValueTypeName="vector";var xl=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,l,h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(c){a++,r===!1&&s.onStart!==void 0&&s.onStart(c,o,a),r=!0},this.itemEnd=function(c){o++,s.onProgress!==void 0&&s.onProgress(c,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return c=c.normalize("NFC"),l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return h.push(c,d),this},this.removeHandler=function(c){let d=h.indexOf(c);return d!==-1&&h.splice(d,2),this},this.getHandler=function(c){for(let d=0,u=h.length;d<u;d+=2){let f=h[d],m=h[d+1];if(f.global&&(f.lastIndex=0),f.test(c))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Gf=new xl,yl=class{constructor(t){this.manager=t!==void 0?t:Gf,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};yl.DEFAULT_MATERIAL_NAME="__DEFAULT";var fr=class extends Qe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Jt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Eo=class extends fr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Jt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Sh=new xe,qd=new A,Yd=new A,Ao=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=xn,this.map=null,this.mapPass=null,this.matrix=new xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cr,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new De(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;qd.setFromMatrixPosition(t.matrixWorld),e.position.copy(qd),Yd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Sh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Sh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,l=s?s.x/r.x:0,h=s?s.y/r.y:0;t.coordinateSystem===tr||t.reversedDepth?e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+h,0,0,1,0,0,0,0,1):e.set(.5*o,0,0,.5*o+l,0,.5*a,0,.5*a+h,0,0,.5,.5,0,0,0,1),e.multiply(Sh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},za=new A,Ha=new Pn,$n=new A,Ro=class extends Qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xe,this.projectionMatrix=new xe,this.projectionMatrixInverse=new xe,this.coordinateSystem=kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(za,Ha,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(za,Ha,$n.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(za,Ha,$n),$n.x===1&&$n.y===1&&$n.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(za,Ha,$n.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Oi=new A,Zd=new ct,$d=new ct,tn=class extends Ro{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=nr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan($r*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nr*2*Math.atan(Math.tan($r*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z)}getViewSize(t,e){return this.getViewBounds(t,Zd,$d),e.subVectors($d,Zd)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan($r*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/h,s*=o.width/l,i*=o.height/h}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Lh=class extends Ao{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}},ms=class extends fr{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Lh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},qi=class extends Ro{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let h=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Dh=class extends Ao{constructor(){super(new qi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pr=class extends fr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qe.DEFAULT_UP),this.updateMatrix(),this.target=new Qe,this.shadow=new Dh}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var $s=-90,Js=1,vl=class extends Qe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn($s,Js,t,e);s.layers=this.layers,this.add(s);let r=new tn($s,Js,t,e);r.layers=this.layers,this.add(r);let o=new tn($s,Js,t,e);o.layers=this.layers,this.add(o);let a=new tn($s,Js,t,e);a.layers=this.layers,this.add(a);let l=new tn($s,Js,t,e);l.layers=this.layers,this.add(l);let h=new tn($s,Js,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(let h of e)this.remove(h);if(t===kn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===tr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,h,c]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(d,u,f),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}},Ml=class extends tn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},Co=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(t){this._document=t,t.hidden!==void 0&&(this._pageVisibilityHandler=zg.bind(this),t.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(t){return this._timescale=t,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(t){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(t!==void 0?t:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function zg(){this._document.hidden===!1&&this.reset()}var nu="\\[\\]\\.:\\/",Hg=new RegExp("["+nu+"]","g"),iu="[^"+nu+"]",Vg="[^"+nu.replace("\\.","")+"]",kg=/((?:WC+[\/:])*)/.source.replace("WC",iu),Gg=/(WCOD+)?/.source.replace("WCOD",Vg),Wg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",iu),Xg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",iu),qg=new RegExp("^"+kg+Gg+Wg+Xg+"$"),Yg=["material","materials","bones","map"],Nh=class{constructor(t,e,i){let s=i||Pe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Pe=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Hg,"")}static parseTrackName(t){let e=qg.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Yg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=i(a.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){$t("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let h=e.objectIndex;switch(i){case"materials":if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let c=0;c<t.length;c++)if(t[c].name===h){h=c;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(h!==void 0){if(t[h]===void 0){Zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[h]}}let o=t[s];if(o===void 0){let h=e.nodeName;Zt("PropertyBinding: Trying to update property for track: "+h+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Pe.Composite=Nh;Pe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Pe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Pe.prototype.GetterByBindingType=[Pe.prototype._getValue_direct,Pe.prototype._getValue_array,Pe.prototype._getValue_arrayElement,Pe.prototype._getValue_toArray];Pe.prototype.SetterByBindingTypeAndVersioning=[[Pe.prototype._setValue_direct,Pe.prototype._setValue_direct_setNeedsUpdate,Pe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_array,Pe.prototype._setValue_array_setNeedsUpdate,Pe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_arrayElement,Pe.prototype._setValue_arrayElement_setNeedsUpdate,Pe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Pe.prototype._setValue_fromArray,Pe.prototype._setValue_fromArray_setNeedsUpdate,Pe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var SM=new Float32Array(1);var Jd=new xe,Po=class{constructor(t,e,i=0,s=1/0){this.ray=new ar(t,e),this.near=i,this.far=s,this.camera=null,this.layers=new sr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):Zt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Jd.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Jd),this}intersectObject(t,e=!0,i=[]){return Uh(t,this,i,e),i.sort(Kd),i}intersectObjects(t,e=!0,i=[]){for(let s=0,r=t.length;s<r;s++)Uh(t[s],this,i,e);return i.sort(Kd),i}};function Kd(n,t){return n.distance-t.distance}function Uh(n,t,e,i){let s=!0;if(n.layers.test(t.layers)&&n.raycast(t,e)===!1&&(s=!1),s===!0&&i===!0){let r=n.children;for(let o=0,a=r.length;o<a;o++)Uh(r[o],t,e,!0)}}var cu=class cu{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};cu.prototype.isMatrix2=!0;var Fh=cu;function su(n,t,e,i){let s=Zg(i);switch(e){case Zh:return n*t;case Cl:return n*t/s.components*s.byteLength;case Pl:return n*t/s.components*s.byteLength;case Ki:return n*t*2/s.components*s.byteLength;case Il:return n*t*2/s.components*s.byteLength;case $h:return n*t*3/s.components*s.byteLength;case Nn:return n*t*4/s.components*s.byteLength;case Ll:return n*t*4/s.components*s.byteLength;case zo:case Ho:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Vo:case ko:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Nl:case Fl:return Math.max(n,16)*Math.max(t,8)/4;case Dl:case Ul:return Math.max(n,8)*Math.max(t,8)/2;case Ol:case Bl:case Hl:case Vl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case zl:case Go:case kl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Gl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Wl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Xl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ql:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Yl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Zl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case $l:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Kl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case jl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case tc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case ec:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case nc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ic:case sc:case rc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case oc:case ac:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Wo:case lc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Zg(n){switch(n){case xn:case Wh:return{byteLength:1,components:1};case _r:case Xh:case sn:return{byteLength:2,components:1};case Al:case Rl:return{byteLength:2,components:4};case Wn:case El:case Dn:return{byteLength:4,components:1};case qh:case Yh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?$t("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function up(){let n=null,t=!1,e=null,i=null;function s(r,o){i=n.requestAnimationFrame(s),e(r,o)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function jg(n){let t=new WeakMap;function e(a,l){let h=a.array,c=a.usage,d=h.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,h,c),a.onUploadCallback();let f;if(h instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)f=n.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)f=n.SHORT;else if(h instanceof Uint32Array)f=n.UNSIGNED_INT;else if(h instanceof Int32Array)f=n.INT;else if(h instanceof Int8Array)f=n.BYTE;else if(h instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:f,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,h){let c=l.array,d=l.updateRanges;if(n.bindBuffer(h,a),d.length===0)n.bufferSubData(h,0,c);else{d.sort((f,m)=>f.start-m.start);let u=0;for(let f=1;f<d.length;f++){let m=d[u],y=d[f];y.start<=m.start+m.count+1?m.count=Math.max(m.count,y.start+y.count-m.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,m=d.length;f<m;f++){let y=d[f];n.bufferSubData(h,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let h=t.get(a);if(h===void 0)t.set(a,e(a,l));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,a,l),h.version=a.version}}return{get:s,remove:r,update:o}}var t0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,e0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,n0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,s0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,r0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,a0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,l0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,c0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,h0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,u0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,d0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,f0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,p0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,m0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,g0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,_0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,x0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,y0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,v0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,M0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,S0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,b0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,w0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,T0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,E0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,A0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,R0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,C0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,P0="gl_FragColor = linearToOutputTexel( gl_FragColor );",I0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,L0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,D0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,N0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,U0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,F0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,O0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,B0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,z0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,H0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,V0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,k0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,G0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,W0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,X0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,q0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Y0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Z0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,J0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,K0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Q0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,j0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,t_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,e_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,n_=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,i_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,r_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,a_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,l_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,c_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,h_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,u_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,f_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,p_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,m_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,__=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,x_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,y_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,v_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,M_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,b_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,w_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,T_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,E_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,A_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,R_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,C_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,P_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,I_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,D_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,F_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,O_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,B_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,z_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,H_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,V_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,k_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,W_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,X_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,q_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Y_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Z_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,$_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,J_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,K_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Q_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,j_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,tx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ex=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ix=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ox=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,ax=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,lx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cx=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ux=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,px=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,mx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_x=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Mx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Tx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ex=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ax=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Px=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ix=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,se={alphahash_fragment:t0,alphahash_pars_fragment:e0,alphamap_fragment:n0,alphamap_pars_fragment:i0,alphatest_fragment:s0,alphatest_pars_fragment:r0,aomap_fragment:o0,aomap_pars_fragment:a0,batching_pars_vertex:l0,batching_vertex:c0,begin_vertex:h0,beginnormal_vertex:u0,bsdfs:d0,iridescence_fragment:f0,bumpmap_pars_fragment:p0,clipping_planes_fragment:m0,clipping_planes_pars_fragment:g0,clipping_planes_pars_vertex:_0,clipping_planes_vertex:x0,color_fragment:y0,color_pars_fragment:v0,color_pars_vertex:M0,color_vertex:S0,common:b0,cube_uv_reflection_fragment:w0,defaultnormal_vertex:T0,displacementmap_pars_vertex:E0,displacementmap_vertex:A0,emissivemap_fragment:R0,emissivemap_pars_fragment:C0,colorspace_fragment:P0,colorspace_pars_fragment:I0,envmap_fragment:L0,envmap_common_pars_fragment:D0,envmap_pars_fragment:N0,envmap_pars_vertex:U0,envmap_physical_pars_fragment:q0,envmap_vertex:F0,fog_vertex:O0,fog_pars_vertex:B0,fog_fragment:z0,fog_pars_fragment:H0,gradientmap_pars_fragment:V0,lightmap_pars_fragment:k0,lights_lambert_fragment:G0,lights_lambert_pars_fragment:W0,lights_pars_begin:X0,lights_toon_fragment:Y0,lights_toon_pars_fragment:Z0,lights_phong_fragment:$0,lights_phong_pars_fragment:J0,lights_physical_fragment:K0,lights_physical_pars_fragment:Q0,lights_fragment_begin:j0,lights_fragment_maps:t_,lights_fragment_end:e_,lightprobes_pars_fragment:n_,logdepthbuf_fragment:i_,logdepthbuf_pars_fragment:s_,logdepthbuf_pars_vertex:r_,logdepthbuf_vertex:o_,map_fragment:a_,map_pars_fragment:l_,map_particle_fragment:c_,map_particle_pars_fragment:h_,metalnessmap_fragment:u_,metalnessmap_pars_fragment:d_,morphinstance_vertex:f_,morphcolor_vertex:p_,morphnormal_vertex:m_,morphtarget_pars_vertex:g_,morphtarget_vertex:__,normal_fragment_begin:x_,normal_fragment_maps:y_,normal_pars_fragment:v_,normal_pars_vertex:M_,normal_vertex:S_,normalmap_pars_fragment:b_,clearcoat_normal_fragment_begin:w_,clearcoat_normal_fragment_maps:T_,clearcoat_pars_fragment:E_,iridescence_pars_fragment:A_,opaque_fragment:R_,packing:C_,premultiplied_alpha_fragment:P_,project_vertex:I_,dithering_fragment:L_,dithering_pars_fragment:D_,roughnessmap_fragment:N_,roughnessmap_pars_fragment:U_,shadowmap_pars_fragment:F_,shadowmap_pars_vertex:O_,shadowmap_vertex:B_,shadowmask_pars_fragment:z_,skinbase_vertex:H_,skinning_pars_vertex:V_,skinning_vertex:k_,skinnormal_vertex:G_,specularmap_fragment:W_,specularmap_pars_fragment:X_,tonemapping_fragment:q_,tonemapping_pars_fragment:Y_,transmission_fragment:Z_,transmission_pars_fragment:$_,uv_pars_fragment:J_,uv_pars_vertex:K_,uv_vertex:Q_,worldpos_vertex:j_,background_vert:tx,background_frag:ex,backgroundCube_vert:nx,backgroundCube_frag:ix,cube_vert:sx,cube_frag:rx,depth_vert:ox,depth_frag:ax,distance_vert:lx,distance_frag:cx,equirect_vert:hx,equirect_frag:ux,linedashed_vert:dx,linedashed_frag:fx,meshbasic_vert:px,meshbasic_frag:mx,meshlambert_vert:gx,meshlambert_frag:_x,meshmatcap_vert:xx,meshmatcap_frag:yx,meshnormal_vert:vx,meshnormal_frag:Mx,meshphong_vert:Sx,meshphong_frag:bx,meshphysical_vert:wx,meshphysical_frag:Tx,meshtoon_vert:Ex,meshtoon_frag:Ax,points_vert:Rx,points_frag:Cx,shadow_vert:Px,shadow_frag:Ix,sprite_vert:Lx,sprite_frag:Dx},bt={common:{diffuse:{value:new Jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new A},probesMax:{value:new A},probesResolution:{value:new A}},points:{diffuse:{value:new Jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Jt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},ri={basic:{uniforms:un([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:un([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Jt(0)},envMapIntensity:{value:1}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:un([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Jt(0)},specular:{value:new Jt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:un([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:un([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Jt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:un([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:un([bt.points,bt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:un([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:un([bt.common,bt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:un([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:un([bt.sprite,bt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distance:{uniforms:un([bt.common,bt.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distance_vert,fragmentShader:se.distance_frag},shadow:{uniforms:un([bt.lights,bt.fog,{color:{value:new Jt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};ri.physical={uniforms:un([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Jt(0)},specularColor:{value:new Jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var dc={r:0,b:0,g:0},Nx=new xe,dp=new jt;dp.set(-1,0,0,0,1,0,0,0,1);function Ux(n,t,e,i,s,r){let o=new Jt(0),a=s===!0?0:1,l,h,c=null,d=0,u=null;function f(S){let R=S.isScene===!0?S.background:null;if(R&&R.isTexture){let M=S.backgroundBlurriness>0;R=t.get(R,M)}return R}function m(S){let R=!1,M=f(S);M===null?g(o,a):M&&M.isColor&&(g(M,1),R=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?e.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||R)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(S,R){let M=f(R);M&&(M.isCubeTexture||M.mapping===Oo)?(h===void 0&&(h=new Ft(new zi(1,1,1),new Ie({name:"BackgroundCubeMaterial",uniforms:vs(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=M,h.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Nx.makeRotationFromEuler(R.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(dp),h.material.toneMapped=le.getTransfer(M.colorSpace)!==ye,(c!==M||d!==M.version||u!==n.toneMapping)&&(h.material.needsUpdate=!0,c=M,d=M.version,u=n.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new Ft(new ni(2,2),new Ie({name:"BackgroundMaterial",uniforms:vs(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=le.getTransfer(M.colorSpace)!==ye,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(c!==M||d!==M.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,c=M,d=M.version,u=n.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,R){S.getRGB(dc,eu(n)),e.buffers.color.setClear(dc.r,dc.g,dc.b,R,r)}function p(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,R=1){o.set(S),a=R,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(S){a=S,g(o,a)},render:m,addToRenderList:y,dispose:p}}function Fx(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,o=!1;function a(L,H,X,N,V){let J=!1,Z=d(L,N,X,H);r!==Z&&(r=Z,h(r.object)),J=f(L,N,X,V),J&&m(L,N,X,V),V!==null&&t.update(V,n.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,M(L,H,X,N),V!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return n.createVertexArray()}function h(L){return n.bindVertexArray(L)}function c(L){return n.deleteVertexArray(L)}function d(L,H,X,N){let V=N.wireframe===!0,J=i[H.id];J===void 0&&(J={},i[H.id]=J);let Z=L.isInstancedMesh===!0?L.id:0,ut=J[Z];ut===void 0&&(ut={},J[Z]=ut);let K=ut[X.id];K===void 0&&(K={},ut[X.id]=K);let nt=K[V];return nt===void 0&&(nt=u(l()),K[V]=nt),nt}function u(L){let H=[],X=[],N=[];for(let V=0;V<e;V++)H[V]=0,X[V]=0,N[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:X,attributeDivisors:N,object:L,attributes:{},index:null}}function f(L,H,X,N){let V=r.attributes,J=H.attributes,Z=0,ut=X.getAttributes();for(let K in ut)if(ut[K].location>=0){let it=V[K],Vt=J[K];if(Vt===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(Vt=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(Vt=L.instanceColor)),it===void 0||it.attribute!==Vt||Vt&&it.data!==Vt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==N}function m(L,H,X,N){let V={},J=H.attributes,Z=0,ut=X.getAttributes();for(let K in ut)if(ut[K].location>=0){let it=J[K];it===void 0&&(K==="instanceMatrix"&&L.instanceMatrix&&(it=L.instanceMatrix),K==="instanceColor"&&L.instanceColor&&(it=L.instanceColor));let Vt={};Vt.attribute=it,it&&it.data&&(Vt.data=it.data),V[K]=Vt,Z++}r.attributes=V,r.attributesNum=Z,r.index=N}function y(){let L=r.newAttributes;for(let H=0,X=L.length;H<X;H++)L[H]=0}function g(L){p(L,0)}function p(L,H){let X=r.newAttributes,N=r.enabledAttributes,V=r.attributeDivisors;X[L]=1,N[L]===0&&(n.enableVertexAttribArray(L),N[L]=1),V[L]!==H&&(n.vertexAttribDivisor(L,H),V[L]=H)}function S(){let L=r.newAttributes,H=r.enabledAttributes;for(let X=0,N=H.length;X<N;X++)H[X]!==L[X]&&(n.disableVertexAttribArray(X),H[X]=0)}function R(L,H,X,N,V,J,Z){Z===!0?n.vertexAttribIPointer(L,H,X,V,J):n.vertexAttribPointer(L,H,X,N,V,J)}function M(L,H,X,N){y();let V=N.attributes,J=X.getAttributes(),Z=H.defaultAttributeValues;for(let ut in J){let K=J[ut];if(K.location>=0){let nt=V[ut];if(nt===void 0&&(ut==="instanceMatrix"&&L.instanceMatrix&&(nt=L.instanceMatrix),ut==="instanceColor"&&L.instanceColor&&(nt=L.instanceColor)),nt!==void 0){let it=nt.normalized,Vt=nt.itemSize,It=t.get(nt);if(It===void 0)continue;let pe=It.buffer,re=It.type,tt=It.bytesPerElement,I=re===n.INT||re===n.UNSIGNED_INT||nt.gpuType===El;if(nt.isInterleavedBufferAttribute){let B=nt.data,ot=B.stride,gt=nt.offset;if(B.isInstancedInterleavedBuffer){for(let ft=0;ft<K.locationSize;ft++)p(K.location+ft,B.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let ft=0;ft<K.locationSize;ft++)g(K.location+ft);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let ft=0;ft<K.locationSize;ft++)R(K.location+ft,Vt/K.locationSize,re,it,ot*tt,(gt+Vt/K.locationSize*ft)*tt,I)}else{if(nt.isInstancedBufferAttribute){for(let B=0;B<K.locationSize;B++)p(K.location+B,nt.meshPerAttribute);L.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let B=0;B<K.locationSize;B++)g(K.location+B);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let B=0;B<K.locationSize;B++)R(K.location+B,Vt/K.locationSize,re,it,Vt*tt,Vt/K.locationSize*B*tt,I)}}else if(Z!==void 0){let it=Z[ut];if(it!==void 0)switch(it.length){case 2:n.vertexAttrib2fv(K.location,it);break;case 3:n.vertexAttrib3fv(K.location,it);break;case 4:n.vertexAttrib4fv(K.location,it);break;default:n.vertexAttrib1fv(K.location,it)}}}}S()}function w(){E();for(let L in i){let H=i[L];for(let X in H){let N=H[X];for(let V in N){let J=N[V];for(let Z in J)c(J[Z].object),delete J[Z];delete N[V]}}delete i[L]}}function b(L){if(i[L.id]===void 0)return;let H=i[L.id];for(let X in H){let N=H[X];for(let V in N){let J=N[V];for(let Z in J)c(J[Z].object),delete J[Z];delete N[V]}}delete i[L.id]}function C(L){for(let H in i){let X=i[H];for(let N in X){let V=X[N];if(V[L.id]===void 0)continue;let J=V[L.id];for(let Z in J)c(J[Z].object),delete J[Z];delete V[L.id]}}}function x(L){for(let H in i){let X=i[H],N=L.isInstancedMesh===!0?L.id:0,V=X[N];if(V!==void 0){for(let J in V){let Z=V[J];for(let ut in Z)c(Z[ut].object),delete Z[ut];delete V[J]}delete X[N],Object.keys(X).length===0&&delete i[H]}}}function E(){P(),o=!0,r!==s&&(r=s,h(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:E,resetDefaultState:P,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:g,disableUnusedAttributes:S}}function Ox(n,t,e){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),e.update(h,i,1)}function o(l,h,c){c!==0&&(n.drawArraysInstanced(i,l,h,c),e.update(h,i,c))}function a(l,h,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,c);let u=0;for(let f=0;f<c;f++)u+=h[f];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function Bx(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let C=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(C){return!(C!==Nn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){let x=C===sn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==xn&&C!==Dn&&!x&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp",c=l(h);c!==h&&($t("WebGLRenderer:",h,"not supported, using",c,"instead."),h=c);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&$t("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),S=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),R=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:m,maxTextureSize:y,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:R,maxFragmentUniforms:M,maxSamples:w,samples:b}}function zx(n){let t=this,e=null,i=0,s=!1,r=!1,o=new Hn,a=new jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=c(d,u,0)},this.setState=function(d,u,f){let m=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,p=n.get(d);if(!s||m===null||m.length===0||r&&!g)r?c(null):h();else{let S=r?0:i,R=S*4,M=p.clippingState||null;l.value=M,M=c(m,u,R,f);for(let w=0;w!==R;++w)M[w]=e[w];p.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(d,u,f,m){let y=d!==null?d.length:0,g=null;if(y!==0){if(g=l.value,m!==!0||g===null){let p=f+y*4,S=u.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let R=0,M=f;R!==y;++R,M+=4)o.copy(d[R]).applyMatrix4(S,a),o.normal.toArray(g,M),g[M+3]=o.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,g}}var vr=4,Hx=6,Vx=20,kx=256,Xo=new qi,Wf=new Jt,hu=null,uu=0,du=0,fu=!1,Gx=new A,Ms=new A,pc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:o=256,position:a=Gx}=r;hu=this._renderer.getRenderTarget(),uu=this._renderer.getActiveCubeFace(),du=this._renderer.getActiveMipmapLevel(),fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(hu,uu,du),this._renderer.xr.enabled=fu,t.scissorTest=!1,yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Zi||t.mapping===ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hu=this._renderer.getRenderTarget(),uu=this._renderer.getActiveCubeFace(),du=this._renderer.getActiveMipmapLevel(),fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:en,minFilter:en,generateMipmaps:!1,type:sn,format:Nn,colorSpace:to,depthBuffer:!1},s=Xf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xf(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Wx(r)),this._blurMaterial=qx(r,t,e),this._ggxMaterial=Xx(r,t,e)}return s}_compileMaterial(t){let e=new Ft(new Se,t);this._renderer.compile(e,Xo)}_sceneToCubeUV(t,e,i,s,r){let l=new tn(90,1,e,i),h=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Wf),d.toneMapping=Gn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ft(new zi,new Ve({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,g=y.material,p=!1,S=t.background;S?S.isColor&&(g.color.copy(S),t.background=null,p=!0):(g.color.copy(Wf),p=!0);for(let R=0;R<6;R++){let M=R%3;M===0?(l.up.set(0,h[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+c[R],r.y,r.z)):M===1?(l.up.set(0,0,h[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+c[R],r.z)):(l.up.set(0,h[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+c[R]));let w=this._cubeSize;yr(s,M*w,R>2?w:0,w,w),d.setRenderTarget(s),p&&d.render(y,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=S}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Zi||t.mapping===ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qf());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=t;let l=this._cubeSize;yr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Xo)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;let l=o.uniforms,h=i/(this._lodMeshes.length-1),c=e/(this._lodMeshes.length-1),d=Math.sqrt(h*h-c*c),u=h*1.25,f=d*u,{_lodMax:m}=this,y=this._sizeLods[i],g=3*y*(i>m-vr?i-m+vr:0),p=4*(this._cubeSize-y);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,yr(r,g,p,3*y,2*y),s.setRenderTarget(r),s.render(a,Xo),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-i,yr(t,g,p,3*y,2*y),s.setRenderTarget(t),s.render(a,Xo)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,o=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,o),this._blurPass(r,t,i,i,o)}_blurPass(t,e,i,s,r){let o=this._renderer,a=this._blurMaterial,l=this._lodMeshes[s];l.material=a;let h=a.uniforms;h.envMap.value=t.texture,h.sigma.value=r,h.mipInt.value=this._lodMax-i;let c=this._sizeLods[s],d=3*c*(s>this._lodMax-vr?s-this._lodMax+vr:0),u=4*(this._cubeSize-c);yr(e,d,u,3*c,2*c),o.setRenderTarget(e),o.render(l,Xo)}};function Wx(n){let t=[],e=[],i=n,s=n-vr+1+Hx;for(let r=0;r<s;r++){let o=Math.pow(2,i);t.push(o);let a=1/(o-2),l=-a,h=1+a,c=[l,l,h,l,h,h,l,l,h,h,l,h],d=6,u=6,f=3,m=new Float32Array(f*u*d),y=new Float32Array(f*u*d);for(let p=0;p<d;p++){let S=p%3*2/3-1,R=p>2?0:-1,M=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];m.set(M,f*u*p);for(let w=0;w<u;w++){let b=c[w*2]*2-1,C=c[w*2+1]*2-1;p===0?Ms.set(1,C,b):p===1?Ms.set(-b,1,-C):p===2?Ms.set(-b,C,1):p===3?Ms.set(-1,C,-b):p===4?Ms.set(-b,-1,C):Ms.set(b,C,-1),Ms.toArray(y,(p*u+w)*f)}}let g=new Se;g.setAttribute("position",new He(m,f)),g.setAttribute("outputDirection",new He(y,f)),e.push(new Ft(g,null)),i>vr&&i--}return{lodMeshes:e,sizeLods:t}}function Xf(n,t,e){let i=new We(n,t,e);return i.texture.mapping=Oo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function yr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Xx(n,t,e){return new Ie({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:kx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_c(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function qx(n,t,e){return new Ie({name:"SphericalGaussianBlur",defines:{SAMPLES:Vx,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:_c(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function qf(){return new Ie({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Yf(){return new Ie({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function _c(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var mc=class extends We{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new po(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new zi(5,5,5),r=new Ie({name:"CubemapFromEquirect",uniforms:vs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:nn,blending:Ln});r.uniforms.tEquirect.value=e;let o=new Ft(s,r),a=e.minFilter;return e.minFilter===$i&&(e.minFilter=en),new vl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}};function Yx(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===bl||f===wl)if(t.has(u)){let m=t.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let y=new mc(m.height);return y.fromEquirectangularTexture(n,u),t.set(u,y),u.addEventListener("dispose",h),a(y.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){let f=u.mapping,m=f===bl||f===wl,y=f===Zi||f===ys;if(m||y){let g=e.get(u),p=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new pc(n)),g=m?i.fromEquirectangular(u,g):i.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let S=u.image;return m&&S&&S.height>0||y&&S&&l(S)?(i===null&&(i=new pc(n)),g=m?i.fromEquirectangular(u):i.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",c),g.texture):null}}}return u}function a(u,f){return f===bl?u.mapping=Zi:f===wl&&(u.mapping=ys),u}function l(u){let f=0,m=6;for(let y=0;y<m;y++)u[y]!==void 0&&f++;return f===m}function h(u){let f=u.target;f.removeEventListener("dispose",h);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function c(u){let f=u.target;f.removeEventListener("dispose",c);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function Zx(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&cs("WebGLRenderer: "+i+" extension not supported."),s}}}function $x(n,t,e,i){let s={},r=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let m in u.attributes)t.remove(u.attributes[m]);u.removeEventListener("dispose",o),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return s[u.id]===!0||(u.addEventListener("dispose",o),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],n.ARRAY_BUFFER)}function h(d){let u=[],f=d.index,m=d.attributes.position,y=0;if(m===void 0)return;if(f!==null){let S=f.array;y=f.version;for(let R=0,M=S.length;R<M;R+=3){let w=S[R+0],b=S[R+1],C=S[R+2];u.push(w,b,b,C,C,w)}}else{let S=m.array;y=m.version;for(let R=0,M=S.length/3-1;R<M;R+=3){let w=R+0,b=R+1,C=R+2;u.push(w,b,b,C,C,w)}}let g=new(m.count>=65535?lo:ao)(u,1);g.version=y;let p=r.get(d);p&&t.remove(p),r.set(d,g)}function c(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&h(d)}else h(d);return r.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function Jx(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*o),e.update(u,i,1)}function h(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*o,f),e.update(u,i,f))}function c(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let y=0;for(let g=0;g<f;g++)y+=u[g];e.update(y,i,1)}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=h,this.renderMultiDraw=c}function Kx(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:Zt("WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Qx(n,t,e){let i=new WeakMap,s=new De;function r(o,a,l){let h=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=c!==void 0?c.length:0,u=i.get(a);if(u===void 0||u.count!==d){let E=function(){C.dispose(),i.delete(a),a.removeEventListener("dispose",E)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],S=a.morphAttributes.color||[],R=0;f===!0&&(R=1),m===!0&&(R=2),y===!0&&(R=3);let M=a.attributes.position.count*R,w=1;M>t.maxTextureSize&&(w=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let b=new Float32Array(M*w*4*d),C=new so(b,M,w,d);C.type=Dn,C.needsUpdate=!0;let x=R*4;for(let P=0;P<d;P++){let L=g[P],H=p[P],X=S[P],N=M*w*4*P;for(let V=0;V<L.count;V++){let J=V*x;f===!0&&(s.fromBufferAttribute(L,V),b[N+J+0]=s.x,b[N+J+1]=s.y,b[N+J+2]=s.z,b[N+J+3]=0),m===!0&&(s.fromBufferAttribute(H,V),b[N+J+4]=s.x,b[N+J+5]=s.y,b[N+J+6]=s.z,b[N+J+7]=0),y===!0&&(s.fromBufferAttribute(X,V),b[N+J+8]=s.x,b[N+J+9]=s.y,b[N+J+10]=s.z,b[N+J+11]=X.itemSize===4?s.w:1)}}u={count:d,texture:C,size:new ct(M,w)},i.set(a,u),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let f=0;for(let y=0;y<h.length;y++)f+=h[y];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",h)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function jx(n,t,e,i,s){let r=new WeakMap;function o(h){let c=s.render.frame,d=h.geometry,u=t.get(h,d);if(r.get(u)!==c&&(t.update(u),r.set(u,c)),h.isInstancedMesh&&(h.hasEventListener("dispose",l)===!1&&h.addEventListener("dispose",l),r.get(h)!==c&&(e.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,n.ARRAY_BUFFER),r.set(h,c))),h.isSkinnedMesh){let f=h.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return u}function a(){r=new WeakMap}function l(h){let c=h.target;c.removeEventListener("dispose",l),i.releaseStatesOfObject(c),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:o,dispose:a}}var ty={[Io]:"LINEAR_TONE_MAPPING",[Lo]:"REINHARD_TONE_MAPPING",[Do]:"CINEON_TONE_MAPPING",[xs]:"ACES_FILMIC_TONE_MAPPING",[Uo]:"AGX_TONE_MAPPING",[Fo]:"NEUTRAL_TONE_MAPPING",[No]:"CUSTOM_TONE_MAPPING"};function ey(n,t,e,i,s,r){let o=new We(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,h=new Se;h.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new ue([0,2,0,0,2,0],2));let c=new dr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Ft(h,c),u=new qi(-1,1,1,-1,0,1),f=null,m=null,y=!1,g,p=null,S=[],R=!1;this.setSize=function(M,w){o.setSize(M,w),a!==null&&a.setSize(M,w),l!==null&&l.setSize(M,w);for(let b=0;b<S.length;b++){let C=S[b];C.setSize&&C.setSize(M,w)}},this.setEffects=function(M){S=M,R=S.length>0&&S[0].isRenderPass===!0;let w=o.width,b=o.height;S.length>0&&a===null&&(a=new We(w,b,{type:sn,depthBuffer:!1,stencilBuffer:!1}),l=new We(w,b,{type:sn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<S.length;C++){let x=S[C];x.setSize&&x.setSize(w,b)}},this.begin=function(M,w){if(y||M.toneMapping===Gn&&S.length===0)return!1;if(p=w,w!==null){let b=w.width,C=w.height;(o.width!==b||o.height!==C)&&this.setSize(b,C)}return R===!1&&M.setRenderTarget(o),g=M.toneMapping,M.toneMapping=Gn,!0},this.hasRenderPass=function(){return R},this.end=function(M,w){M.toneMapping=g,y=!0;let b=o,C=a;for(let x=0;x<S.length;x++){let E=S[x];E.enabled!==!1&&(E.render(M,C,b,w),E.needsSwap!==!1&&(b=C,C=C===a?l:a))}if(f!==M.outputColorSpace||m!==M.toneMapping){f=M.outputColorSpace,m=M.toneMapping,c.defines={},le.getTransfer(f)===ye&&(c.defines.SRGB_TRANSFER="");let x=ty[m];x&&(c.defines[x]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=b.texture,M.setRenderTarget(p),M.render(d,u),p=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),c.dispose()}}var fp=new pn,gu=new Bi(1,1),pp=new so,mp=new tl,gp=new po,Zf=[],$f=[],Jf=new Float32Array(16),Kf=new Float32Array(9),Qf=new Float32Array(4);function Sr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Zf[s];if(r===void 0&&(r=new Float32Array(s),Zf[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function qe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ye(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function xc(n,t){let e=$f[t];e===void 0&&(e=new Int32Array(t),$f[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function ny(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function iy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2fv(this.addr,t),Ye(e,t)}}function sy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(qe(e,t))return;n.uniform3fv(this.addr,t),Ye(e,t)}}function ry(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4fv(this.addr,t),Ye(e,t)}}function oy(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;Qf.set(i),n.uniformMatrix2fv(this.addr,!1,Qf),Ye(e,i)}}function ay(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;Kf.set(i),n.uniformMatrix3fv(this.addr,!1,Kf),Ye(e,i)}}function ly(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(qe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ye(e,t)}else{if(qe(e,i))return;Jf.set(i),n.uniformMatrix4fv(this.addr,!1,Jf),Ye(e,i)}}function cy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function hy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2iv(this.addr,t),Ye(e,t)}}function uy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3iv(this.addr,t),Ye(e,t)}}function dy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4iv(this.addr,t),Ye(e,t)}}function fy(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function py(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(qe(e,t))return;n.uniform2uiv(this.addr,t),Ye(e,t)}}function my(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(qe(e,t))return;n.uniform3uiv(this.addr,t),Ye(e,t)}}function gy(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(qe(e,t))return;n.uniform4uiv(this.addr,t),Ye(e,t)}}function _y(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(gu.compareFunction=e.isReversedDepthBuffer()?uc:hc,r=gu):r=fp,e.setTexture2D(t||r,s)}function xy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||mp,s)}function yy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||gp,s)}function vy(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||pp,s)}function My(n){switch(n){case 5126:return ny;case 35664:return iy;case 35665:return sy;case 35666:return ry;case 35674:return oy;case 35675:return ay;case 35676:return ly;case 5124:case 35670:return cy;case 35667:case 35671:return hy;case 35668:case 35672:return uy;case 35669:case 35673:return dy;case 5125:return fy;case 36294:return py;case 36295:return my;case 36296:return gy;case 35678:case 36198:case 36298:case 36306:case 35682:return _y;case 35679:case 36299:case 36307:return xy;case 35680:case 36300:case 36308:case 36293:return yy;case 36289:case 36303:case 36311:case 36292:return vy}}function Sy(n,t){n.uniform1fv(this.addr,t)}function by(n,t){let e=Sr(t,this.size,2);n.uniform2fv(this.addr,e)}function wy(n,t){let e=Sr(t,this.size,3);n.uniform3fv(this.addr,e)}function Ty(n,t){let e=Sr(t,this.size,4);n.uniform4fv(this.addr,e)}function Ey(n,t){let e=Sr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Ay(n,t){let e=Sr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Ry(n,t){let e=Sr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Cy(n,t){n.uniform1iv(this.addr,t)}function Py(n,t){n.uniform2iv(this.addr,t)}function Iy(n,t){n.uniform3iv(this.addr,t)}function Ly(n,t){n.uniform4iv(this.addr,t)}function Dy(n,t){n.uniform1uiv(this.addr,t)}function Ny(n,t){n.uniform2uiv(this.addr,t)}function Uy(n,t){n.uniform3uiv(this.addr,t)}function Fy(n,t){n.uniform4uiv(this.addr,t)}function Oy(n,t,e){let i=this.cache,s=t.length,r=xc(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));let o;this.type===n.SAMPLER_2D_SHADOW?o=gu:o=fp;for(let a=0;a!==s;++a)e.setTexture2D(t[a]||o,r[a])}function By(n,t,e){let i=this.cache,s=t.length,r=xc(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||mp,r[o])}function zy(n,t,e){let i=this.cache,s=t.length,r=xc(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||gp,r[o])}function Hy(n,t,e){let i=this.cache,s=t.length,r=xc(e,s);qe(i,r)||(n.uniform1iv(this.addr,r),Ye(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||pp,r[o])}function Vy(n){switch(n){case 5126:return Sy;case 35664:return by;case 35665:return wy;case 35666:return Ty;case 35674:return Ey;case 35675:return Ay;case 35676:return Ry;case 5124:case 35670:return Cy;case 35667:case 35671:return Py;case 35668:case 35672:return Iy;case 35669:case 35673:return Ly;case 5125:return Dy;case 36294:return Ny;case 36295:return Uy;case 36296:return Fy;case 35678:case 36198:case 36298:case 36306:case 35682:return Oy;case 35679:case 36299:case 36307:return By;case 35680:case 36300:case 36308:case 36293:return zy;case 36289:case 36303:case 36311:case 36292:return Hy}}var _u=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=My(e.type)}},xu=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vy(e.type)}},yu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},pu=/(\w+)(\])?(\[|\.)?/g;function jf(n,t){n.seq.push(t),n.map[t.id]=t}function ky(n,t,e){let i=n.name,s=i.length;for(pu.lastIndex=0;;){let r=pu.exec(i),o=pu.lastIndex,a=r[1],l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){jf(e,h===void 0?new _u(a,n,t):new xu(a,n,t));break}else{let d=e.map[a];d===void 0&&(d=new yu(a),jf(e,d)),e=d}}}var Mr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);ky(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function tp(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Gy=37297,Wy=0;function Xy(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}var ep=new jt;function qy(n){le._getMatrix(ep,le.workingColorSpace,n);let t=`mat3( ${ep.elements.map(e=>e.toFixed(4))} )`;switch(le.getTransfer(n)){case eo:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return $t("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function np(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+Xy(n.getShaderSource(t),a)}else return r}function Yy(n,t){let e=qy(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Zy={[Io]:"Linear",[Lo]:"Reinhard",[Do]:"Cineon",[xs]:"ACESFilmic",[Uo]:"AgX",[Fo]:"Neutral",[No]:"Custom"};function $y(n,t){let e=Zy[t];return e===void 0?($t("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var fc=new A;function Jy(){le.getLuminanceCoefficients(fc);let n=fc.x.toFixed(4),t=fc.y.toFixed(4),e=fc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ky(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function Qy(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function jy(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Yo(n){return n!==""}function ip(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sp(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var tv=/^[ \t]*#include +<([\w\d./]+)>/gm;function vu(n){return n.replace(tv,nv)}var ev=new Map;function nv(n,t){let e=se[t];if(e===void 0){let i=ev.get(t);if(i!==void 0)e=se[i],$t('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return vu(e)}var iv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rp(n){return n.replace(iv,sv)}function sv(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function op(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var rv={[gs]:"SHADOWMAP_TYPE_PCF",[mr]:"SHADOWMAP_TYPE_VSM"};function ov(n){return rv[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var av={[Zi]:"ENVMAP_TYPE_CUBE",[ys]:"ENVMAP_TYPE_CUBE",[Oo]:"ENVMAP_TYPE_CUBE_UV"};function lv(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":av[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var cv={[ys]:"ENVMAP_MODE_REFRACTION"};function hv(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":cv[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var uv={[kh]:"ENVMAP_BLENDING_MULTIPLY",[vf]:"ENVMAP_BLENDING_MIX",[Mf]:"ENVMAP_BLENDING_ADD"};function dv(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":uv[n.combine]||"ENVMAP_BLENDING_NONE"}function fv(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function pv(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=ov(e),h=lv(e),c=hv(e),d=dv(e),u=fv(e),f=Ky(e),m=Qy(r),y=s.createProgram(),g,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Yo).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Yo).join(`
`),p.length>0&&(p+=`
`)):(g=[op(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),p=[op(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?se.tonemapping_pars_fragment:"",e.toneMapping!==Gn?$y("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,Yy("linearToOutputTexel",e.outputColorSpace),Jy(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yo).join(`
`)),o=vu(o),o=ip(o,e),o=sp(o,e),a=vu(a),a=ip(a,e),a=sp(a,e),o=rp(o),a=rp(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let R=S+g+o,M=S+p+a,w=tp(s,s.VERTEX_SHADER,R),b=tp(s,s.FRAGMENT_SHADER,M);s.attachShader(y,w),s.attachShader(y,b),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(L){if(n.debug.checkShaderErrors){let H=s.getProgramInfoLog(y)||"",X=s.getShaderInfoLog(w)||"",N=s.getShaderInfoLog(b)||"",V=H.trim(),J=X.trim(),Z=N.trim(),ut=!0,K=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ut=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,w,b);else{let nt=np(s,w,"vertex"),it=np(s,b,"fragment");Zt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+V+`
`+nt+`
`+it)}else V!==""?$t("WebGLProgram: Program Info Log:",V):(J===""||Z==="")&&(K=!1);K&&(L.diagnostics={runnable:ut,programLog:V,vertexShader:{log:J,prefix:g},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(w),s.deleteShader(b),x=new Mr(s,y),E=jy(s,y)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(y,Gy)),P},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wy++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=b,this}var mv=0,Mu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Su(t),e.set(t,i)),i}},Su=class{constructor(t){this.id=mv++,this.code=t,this.usedTimes=0}};function gv(n){return n===Ki||n===Go||n===Wo}function _v(n,t,e,i,s,r){let o=new sr,a=new Mu,l=new Set,h=[],c=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,E,P,L,H,X){let N=L.fog,V=H.geometry,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ut=t.get(x.envMap||J,Z),K=ut&&ut.mapping===Oo?ut.image.height:null,nt=f[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&$t("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let it=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Vt=it!==void 0?it.length:0,It=0;V.morphAttributes.position!==void 0&&(It=1),V.morphAttributes.normal!==void 0&&(It=2),V.morphAttributes.color!==void 0&&(It=3);let pe,re,tt,I;if(nt){let Ae=ri[nt];pe=Ae.vertexShader,re=Ae.fragmentShader}else{pe=x.vertexShader,re=x.fragmentShader;let Ae=a.getVertexShaderStage(x),ve=a.getFragmentShaderStage(x);a.update(x,Ae,ve),tt=Ae.id,I=ve.id}let B=n.getRenderTarget(),ot=n.state.buffers.depth.getReversed(),gt=H.isInstancedMesh===!0,ft=H.isBatchedMesh===!0,Rt=!!x.map,Kt=!!x.matcap,$=!!ut,rt=!!x.aoMap,at=!!x.lightMap,lt=!!x.bumpMap&&x.wireframe===!1,pt=!!x.normalMap,Ut=!!x.displacementMap,Tt=!!x.emissiveMap,Lt=!!x.metalnessMap,Dt=!!x.roughnessMap,D=x.anisotropy>0,me=x.clearcoat>0,te=x.dispersion>0,T=x.retroreflectivity>0,_=x.iridescence>0,z=x.sheen>0,k=x.transmission>0,Q=D&&!!x.anisotropyMap,mt=me&&!!x.clearcoatMap,_t=me&&!!x.clearcoatNormalMap,j=me&&!!x.clearcoatRoughnessMap,st=_&&!!x.iridescenceMap,xt=_&&!!x.iridescenceThicknessMap,Gt=z&&!!x.sheenColorMap,St=z&&!!x.sheenRoughnessMap,yt=!!x.specularMap,Wt=!!x.specularColorMap,Yt=!!x.specularIntensityMap,ne=k&&!!x.transmissionMap,O=k&&!!x.thicknessMap,vt=!!x.gradientMap,et=!!x.alphaMap,Mt=x.alphaTest>0,At=!!x.alphaHash,ht=!!x.extensions,Xt=Gn;x.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Xt=n.toneMapping);let Ht={shaderID:nt,shaderType:x.type,shaderName:x.name,vertexShader:pe,fragmentShader:re,defines:x.defines,customVertexShaderID:tt,customFragmentShaderID:I,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:ft,batchingColor:ft&&H._colorsTexture!==null,instancing:gt,instancingColor:gt&&H.instanceColor!==null,instancingMorph:gt&&H.morphTexture!==null,outputColorSpace:B===null?n.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:le.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Rt,matcap:Kt,envMap:$,envMapMode:$&&ut.mapping,envMapCubeUVHeight:K,aoMap:rt,lightMap:at,bumpMap:lt,normalMap:pt,displacementMap:Ut,emissiveMap:Tt,normalMapObjectSpace:pt&&x.normalMapType===wf,normalMapTangentSpace:pt&&x.normalMapType===cc,packedNormalMap:pt&&x.normalMapType===cc&&gv(x.normalMap.format),metalnessMap:Lt,roughnessMap:Dt,anisotropy:D,anisotropyMap:Q,clearcoat:me,clearcoatMap:mt,clearcoatNormalMap:_t,clearcoatRoughnessMap:j,dispersion:te,retroreflection:T,iridescence:_,iridescenceMap:st,iridescenceThicknessMap:xt,sheen:z,sheenColorMap:Gt,sheenRoughnessMap:St,specularMap:yt,specularColorMap:Wt,specularIntensityMap:Yt,transmission:k,transmissionMap:ne,thicknessMap:O,gradientMap:vt,opaque:x.transparent===!1&&x.blending===gr&&x.alphaToCoverage===!1,alphaMap:et,alphaTest:Mt,alphaHash:At,combine:x.combine,mapUv:Rt&&m(x.map.channel),aoMapUv:rt&&m(x.aoMap.channel),lightMapUv:at&&m(x.lightMap.channel),bumpMapUv:lt&&m(x.bumpMap.channel),normalMapUv:pt&&m(x.normalMap.channel),displacementMapUv:Ut&&m(x.displacementMap.channel),emissiveMapUv:Tt&&m(x.emissiveMap.channel),metalnessMapUv:Lt&&m(x.metalnessMap.channel),roughnessMapUv:Dt&&m(x.roughnessMap.channel),anisotropyMapUv:Q&&m(x.anisotropyMap.channel),clearcoatMapUv:mt&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:_t&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:st&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:St&&m(x.sheenRoughnessMap.channel),specularMapUv:yt&&m(x.specularMap.channel),specularColorMapUv:Wt&&m(x.specularColorMap.channel),specularIntensityMapUv:Yt&&m(x.specularIntensityMap.channel),transmissionMapUv:ne&&m(x.transmissionMap.channel),thicknessMapUv:O&&m(x.thicknessMap.channel),alphaMapUv:et&&m(x.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(pt||D),vertexNormals:!!V.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!V.attributes.uv&&(Rt||et),fog:!!N,useFog:x.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||V.attributes.normal===void 0&&pt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ot,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:V.attributes.position!==void 0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Vt,morphTextureStride:It,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Rt&&x.map.isVideoTexture===!0&&le.getTransfer(x.map.colorSpace)===ye,decodeVideoTextureEmissive:Tt&&x.emissiveMap.isVideoTexture===!0&&le.getTransfer(x.emissiveMap.colorSpace)===ye,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===je,flipSided:x.side===nn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ht&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&x.extensions.multiDraw===!0||ft)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ht.vertexUv1s=l.has(1),Ht.vertexUv2s=l.has(2),Ht.vertexUv3s=l.has(3),l.clear(),Ht}function g(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)E.push(P),E.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(E,x),S(E,x),E.push(n.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function p(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function S(x,E){o.disableAll(),E.instancing&&o.enable(0),E.instancingColor&&o.enable(1),E.instancingMorph&&o.enable(2),E.matcap&&o.enable(3),E.envMap&&o.enable(4),E.normalMapObjectSpace&&o.enable(5),E.normalMapTangentSpace&&o.enable(6),E.clearcoat&&o.enable(7),E.iridescence&&o.enable(8),E.alphaTest&&o.enable(9),E.vertexColors&&o.enable(10),E.vertexAlphas&&o.enable(11),E.vertexUv1s&&o.enable(12),E.vertexUv2s&&o.enable(13),E.vertexUv3s&&o.enable(14),E.vertexTangents&&o.enable(15),E.anisotropy&&o.enable(16),E.alphaHash&&o.enable(17),E.batching&&o.enable(18),E.dispersion&&o.enable(19),E.retroreflection&&o.enable(24),E.batchingColor&&o.enable(20),E.gradientMap&&o.enable(21),E.packedNormalMap&&o.enable(22),E.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),E.numLightProbeGrids>0&&o.enable(22),E.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function R(x){let E=f[x.type],P;if(E){let L=ri[E];P=wi.clone(L.uniforms)}else P=x.uniforms;return P}function M(x,E){let P=c.get(E);return P!==void 0?++P.usedTimes:(P=new pv(n,E,x,s),h.push(P),c.set(E,P)),P}function w(x){if(--x.usedTimes===0){let E=h.indexOf(x);h[E]=h[h.length-1],h.pop(),c.delete(x.cacheKey),x.destroy()}}function b(x){a.remove(x)}function C(){a.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:R,acquireProgram:M,releaseProgram:w,releaseShaderCache:b,programs:h,dispose:C}}function xv(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function yv(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function ap(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function lp(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,m,y,g,p){let S=n[t];return S===void 0?(S={id:u.id,object:u,geometry:f,material:m,materialVariant:o(u),groupOrder:y,renderOrder:u.renderOrder,z:g,group:p},n[t]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=m,S.materialVariant=o(u),S.groupOrder=y,S.renderOrder=u.renderOrder,S.z=g,S.group=p),t++,S}function l(u,f,m,y,g,p,S){S.reversedDepth===!0&&(g=-g);let R=a(u,f,m,y,g,p);m.transmission>0?i.push(R):m.transparent===!0?s.push(R):e.push(R)}function h(u,f,m,y,g,p){let S=a(u,f,m,y,g,p);m.transmission>0?i.unshift(S):m.transparent===!0?s.unshift(S):e.unshift(S)}function c(u,f){e.length>1&&e.sort(u||yv),i.length>1&&i.sort(f||ap),s.length>1&&s.sort(f||ap)}function d(){for(let u=t,f=n.length;u<f;u++){let m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:h,finish:d,sort:c}}function vv(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new lp,n.set(i,[o])):s>=r.length?(o=new lp,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Mv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new A,color:new Jt};break;case"SpotLight":e={position:new A,direction:new A,color:new Jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new A,color:new Jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new A,skyColor:new Jt,groundColor:new Jt};break;case"RectAreaLight":e={color:new Jt,position:new A,halfWidth:new A,halfHeight:new A};break}return n[t.id]=e,e}}}function Sv(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var bv=0;function wv(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Tv(n){let t=new Mv,e=Sv(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new A);let s=new A,r=new xe,o=new xe;function a(h){let c=0,d=0,u=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let f=0,m=0,y=0,g=0,p=0,S=0,R=0,M=0,w=0,b=0,C=0,x=0,E=0,P=0;h.sort(wv);for(let H=0,X=h.length;H<X;H++){let N=h[H],V=N.color,J=N.intensity,Z=N.distance,ut=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===Ki?ut=N.shadow.map.texture:ut=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)c+=V.r*J,d+=V.g*J,u+=V.b*J;else if(N.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(N.sh.coefficients[K],J);P++}else if(N.isSunLight){let K=t.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let nt=N.shadow,it=e.get(N);it.shadowIntensity=nt.intensity,it.shadowBias=nt.bias,it.shadowNormalBias=nt.normalBias,it.shadowRadius=nt.radius,it.shadowMapSize.copy(nt.mapSize).multiply(nt.getFrameExtents()),i.sunShadow[m]=it,i.sunShadowMap[m]=ut;let Vt=nt.getViewportCount();for(let It=0;It<Vt;It++)i.sunShadowMatrix[y+It]=nt.getMatrix(It),i.sunShadowCascade[y+It]=nt._cascadeData[It];y+=Vt,m++}i.sun[f]=K,f++}else if(N.isDirectionalLight){let K=t.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let nt=N.shadow,it=e.get(N);it.shadowIntensity=nt.intensity,it.shadowBias=nt.bias,it.shadowNormalBias=nt.normalBias,it.shadowRadius=nt.radius,it.shadowMapSize=nt.mapSize,i.directionalShadow[g]=it,i.directionalShadowMap[g]=ut,i.directionalShadowMatrix[g]=N.shadow.matrix,w++}i.directional[g]=K,g++}else if(N.isSpotLight){let K=t.get(N);K.position.setFromMatrixPosition(N.matrixWorld),K.color.copy(V).multiplyScalar(J),K.distance=Z,K.coneCos=Math.cos(N.angle),K.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),K.decay=N.decay,i.spot[S]=K;let nt=N.shadow;if(N.map&&(i.spotLightMap[x]=N.map,x++,nt.updateMatrices(N),N.castShadow&&E++),i.spotLightMatrix[S]=nt.matrix,N.castShadow){let it=e.get(N);it.shadowIntensity=nt.intensity,it.shadowBias=nt.bias,it.shadowNormalBias=nt.normalBias,it.shadowRadius=nt.radius,it.shadowMapSize=nt.mapSize,i.spotShadow[S]=it,i.spotShadowMap[S]=ut,C++}S++}else if(N.isRectAreaLight){let K=t.get(N);K.color.copy(V).multiplyScalar(J),K.halfWidth.set(N.width*.5,0,0),K.halfHeight.set(0,N.height*.5,0),i.rectArea[R]=K,R++}else if(N.isPointLight){let K=t.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),K.distance=N.distance,K.decay=N.decay,N.castShadow){let nt=N.shadow,it=e.get(N);it.shadowIntensity=nt.intensity,it.shadowBias=nt.bias,it.shadowNormalBias=nt.normalBias,it.shadowRadius=nt.radius,it.shadowMapSize=nt.mapSize,it.shadowCameraNear=nt.camera.near,it.shadowCameraFar=nt.camera.far,i.pointShadow[p]=it,i.pointShadowMap[p]=ut,i.pointShadowMatrix[p]=N.shadow.matrix,b++}i.point[p]=K,p++}else if(N.isHemisphereLight){let K=t.get(N);K.skyColor.copy(N.color).multiplyScalar(J),K.groundColor.copy(N.groundColor).multiplyScalar(J),i.hemi[M]=K,M++}}R>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=bt.LTC_FLOAT_1,i.rectAreaLTC2=bt.LTC_FLOAT_2):(i.rectAreaLTC1=bt.LTC_HALF_1,i.rectAreaLTC2=bt.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=u;let L=i.hash;(L.sunLength!==f||L.directionalLength!==g||L.pointLength!==p||L.spotLength!==S||L.rectAreaLength!==R||L.hemiLength!==M||L.numSunShadows!==m||L.numDirectionalShadows!==w||L.numPointShadows!==b||L.numSpotShadows!==C||L.numSpotMaps!==x||L.numLightProbes!==P)&&(i.sun.length=f,i.directional.length=g,i.spot.length=S,i.rectArea.length=R,i.point.length=p,i.hemi.length=M,i.sunShadow.length=m,i.sunShadowMap.length=m,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+x-E,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=P,L.sunLength=f,L.directionalLength=g,L.pointLength=p,L.spotLength=S,L.rectAreaLength=R,L.hemiLength=M,L.numSunShadows=m,L.numDirectionalShadows=w,L.numPointShadows=b,L.numSpotShadows=C,L.numSpotMaps=x,L.numLightProbes=P,i.version=bv++)}function l(h,c){let d=0,u=0,f=0,m=0,y=0,g=0,p=c.matrixWorldInverse;for(let S=0,R=h.length;S<R;S++){let M=h[S];if(M.isSunLight){let w=i.sun[d];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),d++}else if(M.isDirectionalLight){let w=i.directional[u];w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),u++}else if(M.isSpotLight){let w=i.spot[m];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),m++}else if(M.isRectAreaLight){let w=i.rectArea[y];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),w.halfWidth.set(M.width*.5,0,0),w.halfHeight.set(0,M.height*.5,0),w.halfWidth.applyMatrix4(o),w.halfHeight.applyMatrix4(o),y++}else if(M.isPointLight){let w=i.point[f];w.position.setFromMatrixPosition(M.matrixWorld),w.position.applyMatrix4(p),f++}else if(M.isHemisphereLight){let w=i.hemi[g];w.direction.setFromMatrixPosition(M.matrixWorld),w.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:i}}function cp(n){let t=new Tv(n),e=[],i=[],s=[];function r(u){d.camera=u,e.length=0,i.length=0,s.length=0}function o(u){e.push(u)}function a(u){i.push(u)}function l(u){s.push(u)}function h(){t.setup(e)}function c(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:h,setupLightsView:c,pushLight:o,pushShadow:a,pushLightProbeGrid:l}}function Ev(n){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new cp(n),t.set(s,[a])):r>=o.length?(a=new cp(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}var Av=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Cv=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],Pv=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],hp=new xe,qo=new A,mu=new A;function Iv(n,t,e){let i=new cr,s=new ct,r=new ct,o=new De,a=new ll,l=new cl,h={},c=e.maxTextureSize,d={[Yi]:nn,[nn]:Yi,[je]:je},u=new Ie({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:Av,fragmentShader:Rv}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let m=new Se;m.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ft(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gs;let p=this.type;this.render=function(b,C,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===tf&&($t("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=gs);let E=n.getRenderTarget(),P=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),H=n.state;H.setBlending(Ln),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let X=p!==this.type;X&&C.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(V=>V.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,V=b.length;N<V;N++){let J=b[N],Z=J.shadow;if(Z===void 0){$t("WebGLShadowMap:",J,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let ut=Z.getFrameExtents();s.multiply(ut),r.copy(Z.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/ut.x),s.x=r.x*ut.x,Z.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/ut.y),s.y=r.y*ut.y,Z.mapSize.y=r.y));let K=n.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=K,Z.map===null||X===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===mr){if(J.isPointLight){$t("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new We(s.x,s.y,{format:Ki,type:sn,minFilter:en,magFilter:en,generateMipmaps:!1}),Z.map.texture.name=J.name+".shadowMap",Z.map.depthTexture=new Bi(s.x,s.y,Dn),Z.map.depthTexture.name=J.name+".shadowMapDepth",Z.map.depthTexture.format=Qn,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Ke,Z.map.depthTexture.magFilter=Ke}else J.isPointLight?(Z.map=new mc(s.x),Z.map.depthTexture=new nl(s.x,Wn)):(Z.map=new We(s.x,s.y),Z.map.depthTexture=new Bi(s.x,s.y,Wn)),Z.map.depthTexture.name=J.name+".shadowMap",Z.map.depthTexture.format=Qn,this.type===gs?(Z.map.depthTexture.compareFunction=K?uc:hc,Z.map.depthTexture.minFilter=en,Z.map.depthTexture.magFilter=en):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=Ke,Z.map.depthTexture.magFilter=Ke);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==s.x||Z.map.height!==s.y)&&Z.map.setSize(s.x,s.y);let nt=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();J.isPointLight!==!0&&Z.updateMatrices(J,x);for(let it=0;it<nt;it++){let Vt=Z.getCamera(it);if(J.isPointLight){let It=Z.camera,pe=Z.matrix,re=J.distance||It.far;re!==It.far&&(It.far=re,It.updateProjectionMatrix()),qo.setFromMatrixPosition(J.matrixWorld),It.position.copy(qo),mu.copy(It.position),mu.add(Cv[it]),It.up.copy(Pv[it]),It.lookAt(mu),It.updateMatrixWorld(),pe.makeTranslation(-qo.x,-qo.y,-qo.z),hp.multiplyMatrices(It.projectionMatrix,It.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(hp,It.coordinateSystem,It.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)n.setRenderTarget(Z.map,it),n.clear();else{it===0&&(n.setRenderTarget(Z.map),n.clear());let It=Z.getViewport(it);o.set(r.x*It.x,r.y*It.y,r.x*It.z,r.y*It.w),H.viewport(o)}i=Z.getFrustum(it),M(C,x,Vt,J,this.type)}Z.isPointLightShadow!==!0&&this.type===mr&&S(Z,x),Z.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(E,P,L)};function S(b,C){let x=t.update(y);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null?b.mapPass=new We(s.x,s.y,{format:Ki,type:sn}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(C,null,x,u,y,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(C,null,x,f,y,null)}function R(b,C,x,E){let P=null,L=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)P=L;else if(P=x.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let H=P.uuid,X=C.uuid,N=h[H];N===void 0&&(N={},h[H]=N);let V=N[X];V===void 0&&(V=P.clone(),N[X]=V,C.addEventListener("dispose",w)),P=V}if(P.visible=C.visible,P.wireframe=C.wireframe,E===mr?P.side=C.shadowSide!==null?C.shadowSide:C.side:P.side=C.shadowSide!==null?C.shadowSide:d[C.side],P.alphaMap=C.alphaMap,P.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,P.map=C.map,P.clipShadows=C.clipShadows,P.clippingPlanes=C.clippingPlanes,P.clipIntersection=C.clipIntersection,P.displacementMap=C.displacementMap,P.displacementScale=C.displacementScale,P.displacementBias=C.displacementBias,P.wireframeLinewidth=C.wireframeLinewidth,P.linewidth=C.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let H=n.properties.get(P);H.light=x}return P}function M(b,C,x,E,P){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===mr)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);let X=t.update(b),N=b.material;if(Array.isArray(N)){let V=X.groups;for(let J=0,Z=V.length;J<Z;J++){let ut=V[J],K=N[ut.materialIndex];if(K&&K.visible){let nt=R(b,K,E,P);b.onBeforeShadow(n,b,C,x,X,nt,ut),n.renderBufferDirect(x,null,X,nt,b,ut),b.onAfterShadow(n,b,C,x,X,nt,ut)}}}else if(N.visible){let V=R(b,N,E,P);b.onBeforeShadow(n,b,C,x,X,V,null),n.renderBufferDirect(x,null,X,V,b,null),b.onAfterShadow(n,b,C,x,X,V,null)}}let H=b.children;for(let X=0,N=H.length;X<N;X++)M(H[X],C,x,E,P)}function w(b){b.target.removeEventListener("dispose",w);for(let x in h){let E=h[x],P=b.target.uuid;P in E&&(E[P].dispose(),delete E[P])}}}function Lv(n,t){function e(){let O=!1,vt=new De,et=null,Mt=new De(0,0,0,0);return{setMask:function(At){et!==At&&!O&&(n.colorMask(At,At,At,At),et=At)},setLocked:function(At){O=At},setClear:function(At,ht,Xt,Ht,Ae){Ae===!0&&(At*=Ht,ht*=Ht,Xt*=Ht),vt.set(At,ht,Xt,Ht),Mt.equals(vt)===!1&&(n.clearColor(At,ht,Xt,Ht),Mt.copy(vt))},reset:function(){O=!1,et=null,Mt.set(-1,0,0,0)}}}function i(){let O=!1,vt=!1,et=null,Mt=null,At=null;return{setReversed:function(ht){if(vt!==ht){let Xt=t.get("EXT_clip_control");ht?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT),vt=ht;let Ht=At;At=null,this.setClear(Ht)}},getReversed:function(){return vt},setTest:function(ht){ht?B(n.DEPTH_TEST):ot(n.DEPTH_TEST)},setMask:function(ht){et!==ht&&!O&&(n.depthMask(ht),et=ht)},setFunc:function(ht){if(vt&&(ht=Uf[ht]),Mt!==ht){switch(ht){case Ga:n.depthFunc(n.NEVER);break;case Wa:n.depthFunc(n.ALWAYS);break;case Xa:n.depthFunc(n.LESS);break;case Qs:n.depthFunc(n.LEQUAL);break;case qa:n.depthFunc(n.EQUAL);break;case Ya:n.depthFunc(n.GEQUAL);break;case Za:n.depthFunc(n.GREATER);break;case $a:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Mt=ht}},setLocked:function(ht){O=ht},setClear:function(ht){At!==ht&&(At=ht,vt&&(ht=1-ht),n.clearDepth(ht))},reset:function(){O=!1,et=null,Mt=null,At=null,vt=!1}}}function s(){let O=!1,vt=null,et=null,Mt=null,At=null,ht=null,Xt=null,Ht=null,Ae=null;return{setTest:function(ve){O||(ve?B(n.STENCIL_TEST):ot(n.STENCIL_TEST))},setMask:function(ve){vt!==ve&&!O&&(n.stencilMask(ve),vt=ve)},setFunc:function(ve,Fn,Yn){(et!==ve||Mt!==Fn||At!==Yn)&&(n.stencilFunc(ve,Fn,Yn),et=ve,Mt=Fn,At=Yn)},setOp:function(ve,Fn,Yn){(ht!==ve||Xt!==Fn||Ht!==Yn)&&(n.stencilOp(ve,Fn,Yn),ht=ve,Xt=Fn,Ht=Yn)},setLocked:function(ve){O=ve},setClear:function(ve){Ae!==ve&&(n.clearStencil(ve),Ae=ve)},reset:function(){O=!1,vt=null,et=null,Mt=null,At=null,ht=null,Xt=null,Ht=null,Ae=null}}}let r=new e,o=new i,a=new s,l=new WeakMap,h=new WeakMap,c={},d={},u={},f=new WeakMap,m=[],y=null,g=!1,p=null,S=null,R=null,M=null,w=null,b=null,C=null,x=new Jt(0,0,0),E=0,P=!1,L=null,H=null,X=null,N=null,V=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,ut=0,K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(K)[1]),Z=ut>=1):K.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Z=ut>=2);let nt=null,it={},Vt=n.getParameter(n.SCISSOR_BOX),It=n.getParameter(n.VIEWPORT),pe=new De().fromArray(Vt),re=new De().fromArray(It);function tt(O,vt,et,Mt){let At=new Uint8Array(4),ht=n.createTexture();n.bindTexture(O,ht),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xt=0;Xt<et;Xt++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(vt,0,n.RGBA,1,1,Mt,0,n.RGBA,n.UNSIGNED_BYTE,At):n.texImage2D(vt+Xt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,At);return ht}let I={};I[n.TEXTURE_2D]=tt(n.TEXTURE_2D,n.TEXTURE_2D,1),I[n.TEXTURE_CUBE_MAP]=tt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),I[n.TEXTURE_2D_ARRAY]=tt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),I[n.TEXTURE_3D]=tt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),B(n.DEPTH_TEST),o.setFunc(Qs),lt(!1),pt(Oh),B(n.CULL_FACE),rt(Ln);function B(O){c[O]!==!0&&(n.enable(O),c[O]=!0)}function ot(O){c[O]!==!1&&(n.disable(O),c[O]=!1)}function gt(O,vt){return u[O]!==vt?(n.bindFramebuffer(O,vt),u[O]=vt,O===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=vt),O===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=vt),!0):!1}function ft(O,vt){let et=m,Mt=!1;if(O){et=f.get(vt),et===void 0&&(et=[],f.set(vt,et));let At=O.textures;if(et.length!==At.length||et[0]!==n.COLOR_ATTACHMENT0){for(let ht=0,Xt=At.length;ht<Xt;ht++)et[ht]=n.COLOR_ATTACHMENT0+ht;et.length=At.length,Mt=!0}}else et[0]!==n.BACK&&(et[0]=n.BACK,Mt=!0);Mt&&n.drawBuffers(et)}function Rt(O){return y!==O?(n.useProgram(O),y=O,!0):!1}let Kt={[_s]:n.FUNC_ADD,[nf]:n.FUNC_SUBTRACT,[sf]:n.FUNC_REVERSE_SUBTRACT};Kt[rf]=n.MIN,Kt[of]=n.MAX;let $={[af]:n.ZERO,[lf]:n.ONE,[cf]:n.SRC_COLOR,[Hh]:n.SRC_ALPHA,[mf]:n.SRC_ALPHA_SATURATE,[ff]:n.DST_COLOR,[uf]:n.DST_ALPHA,[hf]:n.ONE_MINUS_SRC_COLOR,[Vh]:n.ONE_MINUS_SRC_ALPHA,[pf]:n.ONE_MINUS_DST_COLOR,[df]:n.ONE_MINUS_DST_ALPHA,[gf]:n.CONSTANT_COLOR,[_f]:n.ONE_MINUS_CONSTANT_COLOR,[xf]:n.CONSTANT_ALPHA,[yf]:n.ONE_MINUS_CONSTANT_ALPHA};function rt(O,vt,et,Mt,At,ht,Xt,Ht,Ae,ve){if(O===Ln){g===!0&&(ot(n.BLEND),g=!1);return}if(g===!1&&(B(n.BLEND),g=!0),O!==ef){if(O!==p||ve!==P){if((S!==_s||w!==_s)&&(n.blendEquation(n.FUNC_ADD),S=_s,w=_s),ve)switch(O){case gr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hn:n.blendFunc(n.ONE,n.ONE);break;case Bh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case zh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Zt("WebGLState: Invalid blending: ",O);break}else switch(O){case gr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case hn:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Bh:Zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zh:Zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Zt("WebGLState: Invalid blending: ",O);break}R=null,M=null,b=null,C=null,x.set(0,0,0),E=0,p=O,P=ve}return}At=At||vt,ht=ht||et,Xt=Xt||Mt,(vt!==S||At!==w)&&(n.blendEquationSeparate(Kt[vt],Kt[At]),S=vt,w=At),(et!==R||Mt!==M||ht!==b||Xt!==C)&&(n.blendFuncSeparate($[et],$[Mt],$[ht],$[Xt]),R=et,M=Mt,b=ht,C=Xt),(Ht.equals(x)===!1||Ae!==E)&&(n.blendColor(Ht.r,Ht.g,Ht.b,Ae),x.copy(Ht),E=Ae),p=O,P=!1}function at(O,vt){O.side===je?ot(n.CULL_FACE):B(n.CULL_FACE);let et=O.side===nn;vt&&(et=!et),lt(et),O.blending===gr&&O.transparent===!1?rt(Ln):rt(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),r.setMask(O.colorWrite);let Mt=O.stencilWrite;a.setTest(Mt),Mt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Tt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?B(n.SAMPLE_ALPHA_TO_COVERAGE):ot(n.SAMPLE_ALPHA_TO_COVERAGE)}function lt(O){L!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),L=O)}function pt(O){O!==Qd?(B(n.CULL_FACE),O!==H&&(O===Oh?n.cullFace(n.BACK):O===jd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ot(n.CULL_FACE),H=O}function Ut(O){O!==X&&(Z&&n.lineWidth(O),X=O)}function Tt(O,vt,et){O?(B(n.POLYGON_OFFSET_FILL),(N!==vt||V!==et)&&(N=vt,V=et,o.getReversed()&&(vt=-vt),n.polygonOffset(vt,et))):ot(n.POLYGON_OFFSET_FILL)}function Lt(O){O?B(n.SCISSOR_TEST):ot(n.SCISSOR_TEST)}function Dt(O){O===void 0&&(O=n.TEXTURE0+J-1),nt!==O&&(n.activeTexture(O),nt=O)}function D(O,vt,et){et===void 0&&(nt===null?et=n.TEXTURE0+J-1:et=nt);let Mt=it[et];Mt===void 0&&(Mt={type:void 0,texture:void 0},it[et]=Mt),(Mt.type!==O||Mt.texture!==vt)&&(nt!==et&&(n.activeTexture(et),nt=et),n.bindTexture(O,vt||I[O]),Mt.type=O,Mt.texture=vt)}function me(){let O=it[nt];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function te(){try{n.compressedTexImage2D(...arguments)}catch(O){Zt("WebGLState:",O)}}function T(){try{n.compressedTexImage3D(...arguments)}catch(O){Zt("WebGLState:",O)}}function _(){try{n.texSubImage2D(...arguments)}catch(O){Zt("WebGLState:",O)}}function z(){try{n.texSubImage3D(...arguments)}catch(O){Zt("WebGLState:",O)}}function k(){try{n.compressedTexSubImage2D(...arguments)}catch(O){Zt("WebGLState:",O)}}function Q(){try{n.compressedTexSubImage3D(...arguments)}catch(O){Zt("WebGLState:",O)}}function mt(){try{n.texStorage2D(...arguments)}catch(O){Zt("WebGLState:",O)}}function _t(){try{n.texStorage3D(...arguments)}catch(O){Zt("WebGLState:",O)}}function j(){try{n.texImage2D(...arguments)}catch(O){Zt("WebGLState:",O)}}function st(){try{n.texImage3D(...arguments)}catch(O){Zt("WebGLState:",O)}}function xt(O){return d[O]!==void 0?d[O]:n.getParameter(O)}function Gt(O,vt){d[O]!==vt&&(n.pixelStorei(O,vt),d[O]=vt)}function St(O){pe.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),pe.copy(O))}function yt(O){re.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),re.copy(O))}function Wt(O,vt){let et=h.get(vt);et===void 0&&(et=new WeakMap,h.set(vt,et));let Mt=et.get(O);Mt===void 0&&(Mt=n.getUniformBlockIndex(vt,O.name),et.set(O,Mt))}function Yt(O,vt){let Mt=h.get(vt).get(O);l.get(vt)!==Mt&&(n.uniformBlockBinding(vt,Mt,O.__bindingPointIndex),l.set(vt,Mt))}function ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),c={},d={},nt=null,it={},u={},f=new WeakMap,m=[],y=null,g=!1,p=null,S=null,R=null,M=null,w=null,b=null,C=null,x=new Jt(0,0,0),E=0,P=!1,L=null,H=null,X=null,N=null,V=null,pe.set(0,0,n.canvas.width,n.canvas.height),re.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:B,disable:ot,bindFramebuffer:gt,drawBuffers:ft,useProgram:Rt,setBlending:rt,setMaterial:at,setFlipSided:lt,setCullFace:pt,setLineWidth:Ut,setPolygonOffset:Tt,setScissorTest:Lt,activeTexture:Dt,bindTexture:D,unbindTexture:me,compressedTexImage2D:te,compressedTexImage3D:T,texImage2D:j,texImage3D:st,pixelStorei:Gt,getParameter:xt,updateUBOMapping:Wt,uniformBlockBinding:Yt,texStorage2D:mt,texStorage3D:_t,texSubImage2D:_,texSubImage3D:z,compressedTexSubImage2D:k,compressedTexSubImage3D:Q,scissor:St,viewport:yt,reset:ne}}function Dv(n,t,e,i,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new ct,c=new WeakMap,d=new Set,u,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(T,_){return m?new OffscreenCanvas(T,_):no("canvas")}function g(T,_,z){let k=1,Q=te(T);if((Q.width>z||Q.height>z)&&(k=z/Math.max(Q.width,Q.height)),k<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let mt=Math.floor(k*Q.width),_t=Math.floor(k*Q.height);u===void 0&&(u=y(mt,_t));let j=_?y(mt,_t):u;return j.width=mt,j.height=_t,j.getContext("2d").drawImage(T,0,0,mt,_t),$t("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+mt+"x"+_t+")."),j}else return"data"in T&&$t("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function p(T){return T.generateMipmaps}function S(T){n.generateMipmap(T)}function R(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(T,_,z,k,Q,mt=!1){if(T!==null){if(n[T]!==void 0)return n[T];$t("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let _t;k&&(_t=t.get("EXT_texture_norm16"),_t||$t("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=_;if(_===n.RED&&(z===n.FLOAT&&(j=n.R32F),z===n.HALF_FLOAT&&(j=n.R16F),z===n.UNSIGNED_BYTE&&(j=n.R8),z===n.UNSIGNED_SHORT&&_t&&(j=_t.R16_EXT),z===n.SHORT&&_t&&(j=_t.R16_SNORM_EXT)),_===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(j=n.R8UI),z===n.UNSIGNED_SHORT&&(j=n.R16UI),z===n.UNSIGNED_INT&&(j=n.R32UI),z===n.BYTE&&(j=n.R8I),z===n.SHORT&&(j=n.R16I),z===n.INT&&(j=n.R32I)),_===n.RG&&(z===n.FLOAT&&(j=n.RG32F),z===n.HALF_FLOAT&&(j=n.RG16F),z===n.UNSIGNED_BYTE&&(j=n.RG8),z===n.UNSIGNED_SHORT&&_t&&(j=_t.RG16_EXT),z===n.SHORT&&_t&&(j=_t.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(j=n.RG8UI),z===n.UNSIGNED_SHORT&&(j=n.RG16UI),z===n.UNSIGNED_INT&&(j=n.RG32UI),z===n.BYTE&&(j=n.RG8I),z===n.SHORT&&(j=n.RG16I),z===n.INT&&(j=n.RG32I)),_===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(j=n.RGB8UI),z===n.UNSIGNED_SHORT&&(j=n.RGB16UI),z===n.UNSIGNED_INT&&(j=n.RGB32UI),z===n.BYTE&&(j=n.RGB8I),z===n.SHORT&&(j=n.RGB16I),z===n.INT&&(j=n.RGB32I)),_===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),z===n.UNSIGNED_INT&&(j=n.RGBA32UI),z===n.BYTE&&(j=n.RGBA8I),z===n.SHORT&&(j=n.RGBA16I),z===n.INT&&(j=n.RGBA32I)),_===n.RGB&&(z===n.UNSIGNED_SHORT&&_t&&(j=_t.RGB16_EXT),z===n.SHORT&&_t&&(j=_t.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),_===n.RGBA){let st=mt?eo:le.getTransfer(Q);z===n.FLOAT&&(j=n.RGBA32F),z===n.HALF_FLOAT&&(j=n.RGBA16F),z===n.UNSIGNED_BYTE&&(j=st===ye?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&_t&&(j=_t.RGBA16_EXT),z===n.SHORT&&_t&&(j=_t.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function w(T,_){let z;return T?_===null||_===Wn||_===xr?z=n.DEPTH24_STENCIL8:_===Dn?z=n.DEPTH32F_STENCIL8:_===_r&&(z=n.DEPTH24_STENCIL8,$t("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Wn||_===xr?z=n.DEPTH_COMPONENT24:_===Dn?z=n.DEPTH_COMPONENT32F:_===_r&&(z=n.DEPTH_COMPONENT16),z}function b(T,_){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ke&&T.minFilter!==en?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function C(T){let _=T.target;_.removeEventListener("dispose",C),E(_),_.isVideoTexture&&c.delete(_),_.isHTMLTexture&&d.delete(_)}function x(T){let _=T.target;_.removeEventListener("dispose",x),L(_)}function E(T){let _=i.get(T);if(_.__webglInit===void 0)return;let z=T.source,k=f.get(z);if(k){let Q=k[_.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&P(T),Object.keys(k).length===0&&f.delete(z)}i.remove(T)}function P(T){let _=i.get(T);n.deleteTexture(_.__webglTexture);let z=T.source,k=f.get(z);delete k[_.__cacheKey],o.memory.textures--}function L(T){let _=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(_.__webglFramebuffer[k]))for(let Q=0;Q<_.__webglFramebuffer[k].length;Q++)n.deleteFramebuffer(_.__webglFramebuffer[k][Q]);else n.deleteFramebuffer(_.__webglFramebuffer[k]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[k])}else{if(Array.isArray(_.__webglFramebuffer))for(let k=0;k<_.__webglFramebuffer.length;k++)n.deleteFramebuffer(_.__webglFramebuffer[k]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let k=0;k<_.__webglColorRenderbuffer.length;k++)_.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[k]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let z=T.textures;for(let k=0,Q=z.length;k<Q;k++){let mt=i.get(z[k]);mt.__webglTexture&&(n.deleteTexture(mt.__webglTexture),o.memory.textures--),i.remove(z[k])}i.remove(T)}let H=0;function X(){H=0}function N(){return H}function V(T){H=T}function J(){let T=H;return T>=s.maxTextures&&$t("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,T}function Z(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function ut(T,_){let z=i.get(T);if(T.isVideoTexture&&D(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&z.__version!==T.version){let k=T.image;if(k===null)$t("WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)$t("WebGLRenderer: Texture marked for update but image is incomplete");else{ot(z,T,_);return}}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+_)}function K(T,_){let z=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){ot(z,T,_);return}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+_)}function nt(T,_){let z=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){ot(z,T,_);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+_)}function it(T,_){let z=i.get(T);if(T.isCubeDepthTexture!==!0&&T.version>0&&z.__version!==T.version){gt(z,T,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+_)}let Vt={[js]:n.REPEAT,[Jn]:n.CLAMP_TO_EDGE,[Ja]:n.MIRRORED_REPEAT},It={[Ke]:n.NEAREST,[Sf]:n.NEAREST_MIPMAP_NEAREST,[Bo]:n.NEAREST_MIPMAP_LINEAR,[en]:n.LINEAR,[Tl]:n.LINEAR_MIPMAP_NEAREST,[$i]:n.LINEAR_MIPMAP_LINEAR},pe={[Ef]:n.NEVER,[If]:n.ALWAYS,[Af]:n.LESS,[hc]:n.LEQUAL,[Rf]:n.EQUAL,[uc]:n.GEQUAL,[Cf]:n.GREATER,[Pf]:n.NOTEQUAL};function re(T,_){if(_.type===Dn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===en||_.magFilter===Tl||_.magFilter===Bo||_.magFilter===$i||_.minFilter===en||_.minFilter===Tl||_.minFilter===Bo||_.minFilter===$i)&&$t("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,Vt[_.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,Vt[_.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,Vt[_.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,It[_.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,It[_.minFilter]),_.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,pe[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ke||_.minFilter!==Bo&&_.minFilter!==$i||_.type===Dn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function tt(T,_){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",C));let k=_.source,Q=f.get(k);Q===void 0&&(Q={},f.set(k,Q));let mt=Z(_);if(mt!==T.__cacheKey){Q[mt]===void 0&&(Q[mt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,z=!0),Q[mt].usedTimes++;let _t=Q[T.__cacheKey];_t!==void 0&&(Q[T.__cacheKey].usedTimes--,_t.usedTimes===0&&P(_)),T.__cacheKey=mt,T.__webglTexture=Q[mt].texture}return z}function I(T,_,z){return Math.floor(Math.floor(T/z)/_)}function B(T,_,z,k){let mt=T.updateRanges;if(mt.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,z,k,_.data);else{mt.sort((Gt,St)=>Gt.start-St.start);let _t=0;for(let Gt=1;Gt<mt.length;Gt++){let St=mt[_t],yt=mt[Gt],Wt=St.start+St.count,Yt=I(yt.start,_.width,4),ne=I(St.start,_.width,4);yt.start<=Wt+1&&Yt===ne&&I(yt.start+yt.count-1,_.width,4)===Yt?St.count=Math.max(St.count,yt.start+yt.count-St.start):(++_t,mt[_t]=yt)}mt.length=_t+1;let j=e.getParameter(n.UNPACK_ROW_LENGTH),st=e.getParameter(n.UNPACK_SKIP_PIXELS),xt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Gt=0,St=mt.length;Gt<St;Gt++){let yt=mt[Gt],Wt=Math.floor(yt.start/4),Yt=Math.ceil(yt.count/4),ne=Wt%_.width,O=Math.floor(Wt/_.width),vt=Yt,et=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,ne),e.pixelStorei(n.UNPACK_SKIP_ROWS,O),e.texSubImage2D(n.TEXTURE_2D,0,ne,O,vt,et,z,k,_.data)}T.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,j),e.pixelStorei(n.UNPACK_SKIP_PIXELS,st),e.pixelStorei(n.UNPACK_SKIP_ROWS,xt)}}function ot(T,_,z){let k=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(k=n.TEXTURE_3D);let Q=tt(T,_),mt=_.source;e.bindTexture(k,T.__webglTexture,n.TEXTURE0+z);let _t=i.get(mt);if(mt.version!==_t.__version||Q===!0){if(e.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let et=le.getPrimaries(le.workingColorSpace),Mt=_.colorSpace===bi?null:le.getPrimaries(_.colorSpace),At=_.colorSpace===bi||et===Mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,At)}e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let st=g(_.image,!1,s.maxTextureSize);st=me(_,st);let xt=r.convert(_.format,_.colorSpace),Gt=r.convert(_.type),St=M(_.internalFormat,xt,Gt,_.normalized,_.colorSpace,_.isVideoTexture);re(k,_);let yt,Wt=_.mipmaps,Yt=_.isVideoTexture!==!0,ne=_t.__version===void 0||Q===!0,O=mt.dataReady,vt=b(_,st);if(_.isDepthTexture)St=w(_.format===Ji,_.type),ne&&(Yt?e.texStorage2D(n.TEXTURE_2D,1,St,st.width,st.height):e.texImage2D(n.TEXTURE_2D,0,St,st.width,st.height,0,xt,Gt,null));else if(_.isDataTexture)if(Wt.length>0){Yt&&ne&&e.texStorage2D(n.TEXTURE_2D,vt,St,Wt[0].width,Wt[0].height);for(let et=0,Mt=Wt.length;et<Mt;et++)yt=Wt[et],Yt?O&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,yt.width,yt.height,xt,Gt,yt.data):e.texImage2D(n.TEXTURE_2D,et,St,yt.width,yt.height,0,xt,Gt,yt.data);_.generateMipmaps=!1}else Yt?(ne&&e.texStorage2D(n.TEXTURE_2D,vt,St,st.width,st.height),O&&B(_,st,xt,Gt)):e.texImage2D(n.TEXTURE_2D,0,St,st.width,st.height,0,xt,Gt,st.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Yt&&ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,St,Wt[0].width,Wt[0].height,st.depth);for(let et=0,Mt=Wt.length;et<Mt;et++)if(yt=Wt[et],_.format!==Nn)if(xt!==null)if(Yt){if(O)if(_.layerUpdates.size>0){let At=su(yt.width,yt.height,_.format,_.type);for(let ht of _.layerUpdates){let Xt=yt.data.subarray(ht*At/yt.data.BYTES_PER_ELEMENT,(ht+1)*At/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,ht,yt.width,yt.height,1,xt,Xt)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,yt.width,yt.height,st.depth,xt,yt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,et,St,yt.width,yt.height,st.depth,0,yt.data,0,0);else $t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?O&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,et,0,0,0,yt.width,yt.height,st.depth,xt,Gt,yt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,et,St,yt.width,yt.height,st.depth,0,xt,Gt,yt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Yt&&ne&&e.texStorage2D(n.TEXTURE_2D,vt,St,Wt[0].width,Wt[0].height);for(let et=0,Mt=Wt.length;et<Mt;et++)yt=Wt[et],_.format!==Nn?xt!==null?Yt?O&&e.compressedTexSubImage2D(n.TEXTURE_2D,et,0,0,yt.width,yt.height,xt,yt.data):e.compressedTexImage2D(n.TEXTURE_2D,et,St,yt.width,yt.height,0,yt.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?O&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,yt.width,yt.height,xt,Gt,yt.data):e.texImage2D(n.TEXTURE_2D,et,St,yt.width,yt.height,0,xt,Gt,yt.data)}else if(_.isDataArrayTexture)if(Yt){if(ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,vt,St,st.width,st.height,st.depth),O)if(_.layerUpdates.size>0){let et=su(st.width,st.height,_.format,_.type);for(let Mt of _.layerUpdates){let At=st.data.subarray(Mt*et/st.data.BYTES_PER_ELEMENT,(Mt+1)*et/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Mt,st.width,st.height,1,xt,Gt,At)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,xt,Gt,st.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,St,st.width,st.height,st.depth,0,xt,Gt,st.data);else if(_.isData3DTexture)Yt?(ne&&e.texStorage3D(n.TEXTURE_3D,vt,St,st.width,st.height,st.depth),O&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,xt,Gt,st.data)):e.texImage3D(n.TEXTURE_3D,0,St,st.width,st.height,st.depth,0,xt,Gt,st.data);else if(_.isFramebufferTexture){if(ne)if(Yt)e.texStorage2D(n.TEXTURE_2D,vt,St,st.width,st.height);else{let et=st.width,Mt=st.height;for(let At=0;At<vt;At++)e.texImage2D(n.TEXTURE_2D,At,St,et,Mt,0,xt,Gt,null),et>>=1,Mt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let et=n.canvas;if(et.hasAttribute("layoutsubtree")||et.setAttribute("layoutsubtree","true"),st.parentNode!==et){et.appendChild(st),d.add(_),et.onpaint=Mt=>{let At=Mt.changedElements;for(let ht of d)At.includes(ht.image)&&(ht.needsUpdate=!0)},et.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,st);else{let At=n.RGBA,ht=n.RGBA,Xt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,At,ht,Xt,st)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Wt.length>0){if(Yt&&ne){let et=te(Wt[0]);e.texStorage2D(n.TEXTURE_2D,vt,St,et.width,et.height)}for(let et=0,Mt=Wt.length;et<Mt;et++)yt=Wt[et],Yt?O&&e.texSubImage2D(n.TEXTURE_2D,et,0,0,xt,Gt,yt):e.texImage2D(n.TEXTURE_2D,et,St,xt,Gt,yt);_.generateMipmaps=!1}else if(Yt){if(ne){let et=te(st);e.texStorage2D(n.TEXTURE_2D,vt,St,et.width,et.height)}O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,Gt,st)}else e.texImage2D(n.TEXTURE_2D,0,St,xt,Gt,st);p(_)&&S(k),_t.__version=mt.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function gt(T,_,z){if(_.image.length!==6)return;let k=tt(T,_),Q=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+z);let mt=i.get(Q);if(Q.version!==mt.__version||k===!0){e.activeTexture(n.TEXTURE0+z);let _t=le.getPrimaries(le.workingColorSpace),j=_.colorSpace===bi?null:le.getPrimaries(_.colorSpace),st=_.colorSpace===bi||_t===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,st);let xt=_.isCompressedTexture||_.image[0].isCompressedTexture,Gt=_.image[0]&&_.image[0].isDataTexture,St=[];for(let ht=0;ht<6;ht++)!xt&&!Gt?St[ht]=g(_.image[ht],!0,s.maxCubemapSize):St[ht]=Gt?_.image[ht].image:_.image[ht],St[ht]=me(_,St[ht]);let yt=St[0],Wt=r.convert(_.format,_.colorSpace),Yt=r.convert(_.type),ne=M(_.internalFormat,Wt,Yt,_.normalized,_.colorSpace),O=_.isVideoTexture!==!0,vt=mt.__version===void 0||k===!0,et=Q.dataReady,Mt=b(_,yt);re(n.TEXTURE_CUBE_MAP,_);let At;if(xt){O&&vt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,ne,yt.width,yt.height);for(let ht=0;ht<6;ht++){At=St[ht].mipmaps;for(let Xt=0;Xt<At.length;Xt++){let Ht=At[Xt];_.format!==Nn?Wt!==null?O?et&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Xt,0,0,Ht.width,Ht.height,Wt,Ht.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Xt,ne,Ht.width,Ht.height,0,Ht.data):$t("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Xt,0,0,Ht.width,Ht.height,Wt,Yt,Ht.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Xt,ne,Ht.width,Ht.height,0,Wt,Yt,Ht.data)}}}else{if(At=_.mipmaps,O&&vt){At.length>0&&Mt++;let ht=te(St[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Mt,ne,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(Gt){O?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,St[ht].width,St[ht].height,Wt,Yt,St[ht].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,ne,St[ht].width,St[ht].height,0,Wt,Yt,St[ht].data);for(let Xt=0;Xt<At.length;Xt++){let Ae=At[Xt].image[ht].image;O?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Xt+1,0,0,Ae.width,Ae.height,Wt,Yt,Ae.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Xt+1,ne,Ae.width,Ae.height,0,Wt,Yt,Ae.data)}}else{O?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Wt,Yt,St[ht]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,ne,Wt,Yt,St[ht]);for(let Xt=0;Xt<At.length;Xt++){let Ht=At[Xt];O?et&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Xt+1,0,0,Wt,Yt,Ht.image[ht]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Xt+1,ne,Wt,Yt,Ht.image[ht])}}}p(_)&&S(n.TEXTURE_CUBE_MAP),mt.__version=Q.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function ft(T,_,z,k,Q,mt){let _t=r.convert(z.format,z.colorSpace),j=r.convert(z.type),st=M(z.internalFormat,_t,j,z.normalized,z.colorSpace),xt=i.get(_),Gt=i.get(z);if(Gt.__renderTarget=_,!xt.__hasExternalTextures){let St=Math.max(1,_.width>>mt),yt=Math.max(1,_.height>>mt);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,mt,st,St,yt,_.depth,0,_t,j,null):e.texImage2D(Q,mt,st,St,yt,0,_t,j,null)}e.bindFramebuffer(n.FRAMEBUFFER,T),Dt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,Q,Gt.__webglTexture,0,Lt(_)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,Q,Gt.__webglTexture,mt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Rt(T,_,z){if(n.bindRenderbuffer(n.RENDERBUFFER,T),_.depthBuffer){let k=_.depthTexture,Q=k&&k.isDepthTexture?k.type:null,mt=w(_.stencilBuffer,Q),_t=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Dt(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt(_),mt,_.width,_.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt(_),mt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,mt,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,_t,n.RENDERBUFFER,T)}else{let k=_.textures;for(let Q=0;Q<k.length;Q++){let mt=k[Q],_t=r.convert(mt.format,mt.colorSpace),j=r.convert(mt.type),st=M(mt.internalFormat,_t,j,mt.normalized,mt.colorSpace);Dt(_)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Lt(_),st,_.width,_.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Lt(_),st,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,st,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Kt(T,_,z){let k=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=i.get(_.depthTexture);if(Q.__renderTarget=_,(!Q.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),k){if(Q.__webglInit===void 0&&(Q.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),Q.__webglTexture===void 0){Q.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),re(n.TEXTURE_CUBE_MAP,_.depthTexture);let xt=r.convert(_.depthTexture.format),Gt=r.convert(_.depthTexture.type),St;_.depthTexture.format===Qn?St=n.DEPTH_COMPONENT24:_.depthTexture.format===Ji&&(St=n.DEPTH24_STENCIL8);for(let yt=0;yt<6;yt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,St,_.width,_.height,0,xt,Gt,null)}}else ut(_.depthTexture,0);let mt=Q.__webglTexture,_t=Lt(_),j=k?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,st=_.depthTexture.format===Ji?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Qn)Dt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,st,j,mt,0,_t):n.framebufferTexture2D(n.FRAMEBUFFER,st,j,mt,0);else if(_.depthTexture.format===Ji)Dt(_)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,st,j,mt,0,_t):n.framebufferTexture2D(n.FRAMEBUFFER,st,j,mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $(T){let _=i.get(T),z=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){let k=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),k){let Q=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,k.removeEventListener("dispose",Q)};k.addEventListener("dispose",Q),_.__depthDisposeCallback=Q}_.__boundDepthTexture=k}if(T.depthTexture&&!_.__autoAllocateDepthBuffer)if(z)for(let k=0;k<6;k++)Kt(_.__webglFramebuffer[k],T,k);else{let k=T.texture.mipmaps;k&&k.length>0?Kt(_.__webglFramebuffer[0],T,0):Kt(_.__webglFramebuffer,T,0)}else if(z){_.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[k]),_.__webglDepthbuffer[k]===void 0)_.__webglDepthbuffer[k]=n.createRenderbuffer(),Rt(_.__webglDepthbuffer[k],T,!1);else{let Q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=_.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,mt)}}else{let k=T.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Rt(_.__webglDepthbuffer,T,!1);else{let Q=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,mt),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,mt)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function rt(T,_,z){let k=i.get(T);_!==void 0&&ft(k.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&$(T)}function at(T){let _=T.texture,z=i.get(T),k=i.get(_);T.addEventListener("dispose",x);let Q=T.textures,mt=T.isWebGLCubeRenderTarget===!0,_t=Q.length>1;if(_t||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=_.version,o.memory.textures++),mt){z.__webglFramebuffer=[];for(let j=0;j<6;j++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[j]=[];for(let st=0;st<_.mipmaps.length;st++)z.__webglFramebuffer[j][st]=n.createFramebuffer()}else z.__webglFramebuffer[j]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let j=0;j<_.mipmaps.length;j++)z.__webglFramebuffer[j]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(_t)for(let j=0,st=Q.length;j<st;j++){let xt=i.get(Q[j]);xt.__webglTexture===void 0&&(xt.__webglTexture=n.createTexture(),o.memory.textures++)}if(T.samples>0&&Dt(T)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let j=0;j<Q.length;j++){let st=Q[j];z.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[j]);let xt=r.convert(st.format,st.colorSpace),Gt=r.convert(st.type),St=M(st.internalFormat,xt,Gt,st.normalized,st.colorSpace,T.isXRRenderTarget===!0),yt=Lt(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,yt,St,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,z.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Rt(z.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(mt){e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),re(n.TEXTURE_CUBE_MAP,_);for(let j=0;j<6;j++)if(_.mipmaps&&_.mipmaps.length>0)for(let st=0;st<_.mipmaps.length;st++)ft(z.__webglFramebuffer[j][st],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,st);else ft(z.__webglFramebuffer[j],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);p(_)&&S(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(_t){for(let j=0,st=Q.length;j<st;j++){let xt=Q[j],Gt=i.get(xt),St=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(St=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(St,Gt.__webglTexture),re(St,xt),ft(z.__webglFramebuffer,T,xt,n.COLOR_ATTACHMENT0+j,St,0),p(xt)&&S(St)}e.unbindTexture()}else{let j=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(j=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(j,k.__webglTexture),re(j,_),_.mipmaps&&_.mipmaps.length>0)for(let st=0;st<_.mipmaps.length;st++)ft(z.__webglFramebuffer[st],T,_,n.COLOR_ATTACHMENT0,j,st);else ft(z.__webglFramebuffer,T,_,n.COLOR_ATTACHMENT0,j,0);p(_)&&S(j),e.unbindTexture()}T.depthBuffer&&$(T)}function lt(T){let _=T.textures;for(let z=0,k=_.length;z<k;z++){let Q=_[z];if(p(Q)){let mt=R(T),_t=i.get(Q).__webglTexture;e.bindTexture(mt,_t),S(mt),e.unbindTexture()}}}let pt=[],Ut=[];function Tt(T){if(T.samples>0){if(Dt(T)===!1){let _=T.textures,z=T.width,k=T.height,Q=n.COLOR_BUFFER_BIT,mt=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,_t=i.get(T),j=_.length>1;if(j)for(let xt=0;xt<_.length;xt++)e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,_t.__webglMultisampledFramebuffer);let st=T.texture.mipmaps;st&&st.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglFramebuffer);for(let xt=0;xt<_.length;xt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,_t.__webglColorRenderbuffer[xt]);let Gt=i.get(_[xt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Gt,0)}n.blitFramebuffer(0,0,z,k,0,0,z,k,Q,n.NEAREST),l===!0&&(pt.length=0,Ut.length=0,pt.push(n.COLOR_ATTACHMENT0+xt),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&(pt.push(mt),Ut.push(mt),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ut)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,pt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let xt=0;xt<_.length;xt++){e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,_t.__webglColorRenderbuffer[xt]);let Gt=i.get(_[xt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,_t.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,Gt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,_t.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let _=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Lt(T){return Math.min(s.maxSamples,T.samples)}function Dt(T){let _=i.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function D(T){let _=o.render.frame;c.get(T)!==_&&(c.set(T,_),T.update())}function me(T,_){let z=T.colorSpace,k=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==to&&z!==bi&&(le.getTransfer(z)===ye?(k!==Nn||Q!==xn)&&$t("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Zt("WebGLTextures: Unsupported texture color space:",z)),_}function te(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(h.width=T.naturalWidth||T.width,h.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(h.width=T.displayWidth,h.height=T.displayHeight):(h.width=T.width,h.height=T.height),h}this.allocateTextureUnit=J,this.resetTextureUnits=X,this.getTextureUnits=N,this.setTextureUnits=V,this.setTexture2D=ut,this.setTexture2DArray=K,this.setTexture3D=nt,this.setTextureCube=it,this.rebindTextures=rt,this.setupRenderTarget=at,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Dt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Nv(n,t){function e(i,s=bi){let r,o=le.getTransfer(s);if(i===xn)return n.UNSIGNED_BYTE;if(i===Al)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Rl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===qh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Yh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Wh)return n.BYTE;if(i===Xh)return n.SHORT;if(i===_r)return n.UNSIGNED_SHORT;if(i===El)return n.INT;if(i===Wn)return n.UNSIGNED_INT;if(i===Dn)return n.FLOAT;if(i===sn)return n.HALF_FLOAT;if(i===Zh)return n.ALPHA;if(i===$h)return n.RGB;if(i===Nn)return n.RGBA;if(i===Qn)return n.DEPTH_COMPONENT;if(i===Ji)return n.DEPTH_STENCIL;if(i===Cl)return n.RED;if(i===Pl)return n.RED_INTEGER;if(i===Ki)return n.RG;if(i===Il)return n.RG_INTEGER;if(i===Ll)return n.RGBA_INTEGER;if(i===zo||i===Ho||i===Vo||i===ko)if(o===ye)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===zo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ho)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ko)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===zo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ho)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ko)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Dl||i===Nl||i===Ul||i===Fl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Dl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Nl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ul)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Fl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ol||i===Bl||i===zl||i===Hl||i===Vl||i===Go||i===kl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ol||i===Bl)return o===ye?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===zl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Hl)return r.COMPRESSED_R11_EAC;if(i===Vl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Go)return r.COMPRESSED_RG11_EAC;if(i===kl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Gl||i===Wl||i===Xl||i===ql||i===Yl||i===Zl||i===$l||i===Jl||i===Kl||i===Ql||i===jl||i===tc||i===ec||i===nc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Gl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Wl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Xl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ql)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Yl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Zl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===$l)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Jl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Kl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ql)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jl)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===tc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ec)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nc)return o===ye?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ic||i===sc||i===rc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ic)return o===ye?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===sc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===oc||i===ac||i===Wo||i===lc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===oc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Wo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Uv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,bu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new mo(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new Ie({vertexShader:Uv,fragmentShader:Fv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ft(new ni(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},wu=class extends jn{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",l=1,h=null,c=null,d=null,u=null,f=null,m=null,y=typeof XRWebGLBinding<"u",g=new bu,p={},S=e.getContextAttributes(),R=null,M=null,w=[],b=[],C=new ct,x=null,E=null,P=new tn;P.viewport=new De;let L=new tn;L.viewport=new De;let H=[P,L],X=new Ml,N=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let B=w[I];return B===void 0&&(B=new rr,w[I]=B),B.getTargetRaySpace()},this.getControllerGrip=function(I){let B=w[I];return B===void 0&&(B=new rr,w[I]=B),B.getGripSpace()},this.getHand=function(I){let B=w[I];return B===void 0&&(B=new rr,w[I]=B),B.getHandSpace()};function J(I){let B=b.indexOf(I.inputSource);if(B===-1)return;let ot=w[B];ot!==void 0&&(ot.update(I.inputSource,I.frame,h||o),ot.dispatchEvent({type:I.type,data:I.inputSource}))}function Z(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",ut);for(let I=0;I<w.length;I++){let B=b[I];B!==null&&(b[I]=null,w[I].disconnect(B))}N=null,V=null,g.reset();for(let I in p)delete p[I];if(t.setRenderTarget(R),f=null,u=null,d=null,s=null,M=null,tt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(C.width,C.height,!1),E!==null){let I=E.camera;I.fov=E.fov,I.zoom=E.zoom,I.updateProjectionMatrix(),E=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,i.isPresenting===!0&&$t("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,i.isPresenting===!0&&$t("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(I){h=I},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(I){if(s=I,s!==null){if(R=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",ut),S.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(C),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ot=null,gt=null,ft=null;S.depth&&(ft=S.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=S.stencil?Ji:Qn,gt=S.stencil?xr:Wn);let Rt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Rt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new We(u.textureWidth,u.textureHeight,{format:Nn,type:xn,depthTexture:new Bi(u.textureWidth,u.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:S.stencil,colorSpace:t.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ot={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new We(f.framebufferWidth,f.framebufferHeight,{format:Nn,type:xn,colorSpace:t.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),tt.setContext(s),tt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ut(I){for(let B=0;B<I.removed.length;B++){let ot=I.removed[B],gt=b.indexOf(ot);gt>=0&&(b[gt]=null,w[gt].disconnect(ot))}for(let B=0;B<I.added.length;B++){let ot=I.added[B],gt=b.indexOf(ot);if(gt===-1){for(let Rt=0;Rt<w.length;Rt++)if(Rt>=b.length){b.push(ot),gt=Rt;break}else if(b[Rt]===null){b[Rt]=ot,gt=Rt;break}if(gt===-1)break}let ft=w[gt];ft&&ft.connect(ot)}}let K=new A,nt=new A;function it(I,B,ot){K.setFromMatrixPosition(B.matrixWorld),nt.setFromMatrixPosition(ot.matrixWorld);let gt=K.distanceTo(nt),ft=B.projectionMatrix.elements,Rt=ot.projectionMatrix.elements,Kt=ft[14]/(ft[10]-1),$=ft[14]/(ft[10]+1),rt=(ft[9]+1)/ft[5],at=(ft[9]-1)/ft[5],lt=(ft[8]-1)/ft[0],pt=(Rt[8]+1)/Rt[0],Ut=Kt*lt,Tt=Kt*pt,Lt=gt/(-lt+pt),Dt=Lt*-lt;if(B.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Dt),I.translateZ(Lt),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert(),ft[10]===-1)I.projectionMatrix.copy(B.projectionMatrix),I.projectionMatrixInverse.copy(B.projectionMatrixInverse);else{let D=Kt+Lt,me=$+Lt,te=Ut-Dt,T=Tt+(gt-Dt),_=rt*$/me*D,z=at*$/me*D;I.projectionMatrix.makePerspective(te,T,_,z,D,me),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}}function Vt(I,B){B===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(B.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(s===null)return;let B=I.near,ot=I.far;g.texture!==null&&(g.depthNear>0&&(B=g.depthNear),g.depthFar>0&&(ot=g.depthFar)),X.near=L.near=P.near=B,X.far=L.far=P.far=ot,(N!==X.near||V!==X.far)&&(s.updateRenderState({depthNear:X.near,depthFar:X.far}),N=X.near,V=X.far),X.layers.mask=I.layers.mask|6,P.layers.mask=X.layers.mask&-5,L.layers.mask=X.layers.mask&-3;let gt=I.parent,ft=X.cameras;Vt(X,gt);for(let Rt=0;Rt<ft.length;Rt++)Vt(ft[Rt],gt);ft.length===2?it(X,P,L):X.projectionMatrix.copy(P.projectionMatrix),E===null&&I.isPerspectiveCamera&&(E={camera:I,fov:I.fov,zoom:I.zoom}),It(I,X,gt)};function It(I,B,ot){ot===null?I.matrix.copy(B.matrixWorld):(I.matrix.copy(ot.matrixWorld),I.matrix.invert(),I.matrix.multiply(B.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(B.projectionMatrix),I.projectionMatrixInverse.copy(B.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=nr*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(I){l=I,u!==null&&(u.fixedFoveation=I),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=I)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(X)},this.getCameraTexture=function(I){return p[I]};let pe=null;function re(I,B){if(c=B.getViewerPose(h||o),m=B,c!==null){let ot=c.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let gt=!1;ot.length!==X.cameras.length&&(X.cameras.length=0,gt=!0);for(let $=0;$<ot.length;$++){let rt=ot[$],at=null;if(f!==null)at=f.getViewport(rt);else{let pt=d.getViewSubImage(u,rt);at=pt.viewport,$===0&&(t.setRenderTargetTextures(M,pt.colorTexture,pt.depthStencilTexture),t.setRenderTarget(M))}let lt=H[$];lt===void 0&&(lt=new tn,lt.layers.enable($),lt.viewport=new De,H[$]=lt),lt.matrix.fromArray(rt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(rt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(at.x,at.y,at.width,at.height),$===0&&(X.matrix.copy(lt.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),gt===!0&&X.cameras.push(lt)}let ft=s.enabledFeatures;if(ft&&ft.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=i.getBinding();let $=d.getDepthInformation(ot[0]);$&&$.isValid&&$.texture&&g.init($,s.renderState)}if(ft&&ft.includes("camera-access")&&y){t.state.unbindTexture(),d=i.getBinding();for(let $=0;$<ot.length;$++){let rt=ot[$].camera;if(rt){let at=p[rt];at||(at=new mo,p[rt]=at);let lt=d.getCameraImage(rt);at.sourceTexture=lt}}}}for(let ot=0;ot<w.length;ot++){let gt=b[ot],ft=w[ot];gt!==null&&ft!==void 0&&ft.update(gt,B,h||o)}pe&&pe(I,B),B.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:B}),m=null}let tt=new up;tt.setAnimationLoop(re),this.setAnimationLoop=function(I){pe=I},this.dispose=function(){}}},Ov=new xe,_p=new jt;_p.set(-1,0,0,0,1,0,0,0,1);function Bv(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,eu(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,S,R,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),d(g,p)):p.isMeshPhongMaterial?(r(g,p),c(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&f(g,p,M)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),y(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,S,R):p.isSpriteMaterial?h(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===nn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===nn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let S=t.get(p),R=S.envMap,M=S.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(Ov.makeRotationFromEuler(M)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(_p),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,S,R){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=R*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function d(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===nn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function y(g,p){let S=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function zv(n,t,e,i){let s={},r={},o=[],a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,w){let b=w.program;i.uniformBlockBinding(M,b)}function h(M,w){let b=s[M.id];b===void 0&&(g(M),b=c(M),s[M.id]=b,M.addEventListener("dispose",S));let C=w.program;i.updateUBOMapping(M,C);let x=t.render.frame;r[M.id]!==x&&(u(M),r[M.id]=x)}function c(M){let w=d();M.__bindingPointIndex=w;let b=n.createBuffer(),C=M.__size,x=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,C,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,b),b}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return Zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let w=s[M.id],b=M.uniforms,C=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let x=0,E=b.length;x<E;x++){let P=b[x];if(Array.isArray(P))for(let L=0,H=P.length;L<H;L++)f(P[L],x,L,C);else f(P,x,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,w,b,C){if(y(M,w,b,C)===!0){let x=M.__offset,E=M.value;if(Array.isArray(E)){let P=0;for(let L=0;L<E.length;L++){let H=E[L],X=p(H);m(H,M.__data,P),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(P+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(E,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,M.__data)}}function m(M,w,b){typeof M=="number"||typeof M=="boolean"?w[0]=M:M.isMatrix3?(w[0]=M.elements[0],w[1]=M.elements[1],w[2]=M.elements[2],w[3]=0,w[4]=M.elements[3],w[5]=M.elements[4],w[6]=M.elements[5],w[7]=0,w[8]=M.elements[6],w[9]=M.elements[7],w[10]=M.elements[8],w[11]=0):ArrayBuffer.isView(M)?w.set(new M.constructor(M.buffer,M.byteOffset,w.length)):M.toArray(w,b)}function y(M,w,b,C){let x=M.value,E=w+"_"+b;if(C[E]===void 0)return typeof x=="number"||typeof x=="boolean"?C[E]=x:ArrayBuffer.isView(x)?C[E]=x.slice():C[E]=x.clone(),!0;{let P=C[E];if(typeof x=="number"||typeof x=="boolean"){if(P!==x)return C[E]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function g(M){let w=M.uniforms,b=0,C=16;for(let E=0,P=w.length;E<P;E++){let L=Array.isArray(w[E])?w[E]:[w[E]];for(let H=0,X=L.length;H<X;H++){let N=L[H],V=Array.isArray(N.value)?N.value:[N.value];for(let J=0,Z=V.length;J<Z;J++){let ut=V[J],K=p(ut),nt=b%C,it=nt%K.boundary,Vt=nt+it;b+=it,Vt!==0&&C-Vt<K.storage&&(b+=C-Vt),N.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=b,b+=K.storage}}}let x=b%C;return x>0&&(b+=C-x),M.__size=b,M.__cache={},this}function p(M){let w={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(w.boundary=4,w.storage=4):M.isVector2?(w.boundary=8,w.storage=8):M.isVector3||M.isColor?(w.boundary=16,w.storage=12):M.isVector4?(w.boundary=16,w.storage=16):M.isMatrix3?(w.boundary=48,w.storage=48):M.isMatrix4?(w.boundary=64,w.storage=64):M.isTexture?$t("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(w.boundary=16,w.storage=M.byteLength):$t("WebGLRenderer: Unsupported uniform value type.",M),w}function S(M){let w=M.target;w.removeEventListener("dispose",S);let b=o.indexOf(w.__bindingPointIndex);o.splice(b,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function R(){for(let M in s)n.deleteBuffer(s[M]);o=[],s={},r={}}return{bind:l,update:h,dispose:R}}var Hv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),si=null;function Vv(){return si===null&&(si=new ho(Hv,16,16,Ki,sn),si.name="DFG_LUT",si.minFilter=en,si.magFilter=en,si.wrapS=Jn,si.wrapT=Jn,si.generateMipmaps=!1,si.needsUpdate=!0),si}var gc=class{constructor(t={}){let{canvas:e=Lf(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=xn}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;let y=f,g=new Set([Ll,Il,Pl]),p=new Set([xn,Wn,_r,xr,Al,Rl]),S=new Uint32Array(4),R=new Int32Array(4),M=new A,w=null,b=null,C=[],x=[],E=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,L=!1,H=null,X=null,N=null,V=null;this._outputColorSpace=Je;let J=0,Z=0,ut=null,K=-1,nt=null,it=new De,Vt=new De,It=null,pe=new Jt(0),re=0,tt=e.width,I=e.height,B=1,ot=null,gt=null,ft=new De(0,0,tt,I),Rt=new De(0,0,tt,I),Kt=!1,$=new cr,rt=!1,at=!1,lt=new xe,pt=new A,Ut=new De,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Lt=!1;function Dt(){return ut===null?B:1}let D=i;function me(v,U){return e.getContext(v,U)}let te,T,_,z,k,Q,mt,_t,j,st,xt,Gt,St,yt,Wt,Yt,ne,O,vt,et,Mt,At,ht;try{let v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",ve,!1),e.addEventListener("webglcontextcreationerror",Fn,!1),D===null){let U="webgl2";if(D=me(U,v),D===null)throw me(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Xt()}catch(v){throw e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Fn,!1),Zt("WebGLRenderer: "+v.message),v}function Xt(){te=new Zx(D),te.init(),Mt=new Nv(D,te),T=new Bx(D,te,t,Mt),_=new Lv(D,te),T.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),X=D.createFramebuffer(),N=D.createFramebuffer(),V=D.createFramebuffer(),z=new Kx(D),k=new xv,Q=new Dv(D,te,_,k,T,Mt,z),mt=new Yx(P),_t=new jg(D),At=new Fx(D,_t),j=new $x(D,_t,z,At),st=new jx(D,j,_t,At,z),O=new Qx(D,T,Q),Wt=new zx(k),xt=new _v(P,mt,te,T,At,Wt),Gt=new Bv(P,k),St=new vv,yt=new Ev(te),ne=new Ux(P,mt,_,st,m,l),Yt=new Iv(P,st,T),ht=new zv(D,z,T,_),vt=new Ox(D,te,z),et=new Jx(D,te,z),z.programs=xt.programs,P.capabilities=T,P.extensions=te,P.properties=k,P.renderLists=St,P.shadowMap=Yt,P.state=_,P.info=z}y!==xn&&(E=new ey(y,e.width,e.height,a,s,r));let Ht=new wu(P,D);this.xr=Ht,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let v=te.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=te.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(v){v!==void 0&&(B=v,this.setSize(tt,I,!1))},this.getSize=function(v){return v.set(tt,I)},this.setSize=function(v,U,Y=!0){if(Ht.isPresenting){$t("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=v,I=U,e.width=Math.floor(v*B),e.height=Math.floor(U*B),Y===!0&&(e.style.width=v+"px",e.style.height=U+"px"),E!==null&&E.setSize(e.width,e.height),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(tt*B,I*B).floor()},this.setDrawingBufferSize=function(v,U,Y){tt=v,I=U,B=Y,e.width=Math.floor(v*Y),e.height=Math.floor(U*Y),this.setViewport(0,0,v,U)},this.setEffects=function(v){if(y===xn){Zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let U=0;U<v.length;U++)if(v[U].isOutputPass===!0){$t("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(it)},this.getViewport=function(v){return v.copy(ft)},this.setViewport=function(v,U,Y,G){v.isVector4?ft.set(v.x,v.y,v.z,v.w):ft.set(v,U,Y,G),_.viewport(it.copy(ft).multiplyScalar(B).round())},this.getScissor=function(v){return v.copy(Rt)},this.setScissor=function(v,U,Y,G){v.isVector4?Rt.set(v.x,v.y,v.z,v.w):Rt.set(v,U,Y,G),_.scissor(Vt.copy(Rt).multiplyScalar(B).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(v){_.setScissorTest(Kt=v)},this.setOpaqueSort=function(v){ot=v},this.setTransparentSort=function(v){gt=v},this.getClearColor=function(v){return v.copy(ne.getClearColor())},this.setClearColor=function(){ne.setClearColor(...arguments)},this.getClearAlpha=function(){return ne.getClearAlpha()},this.setClearAlpha=function(){ne.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,Y=!0){let G=0;if(v){let W=!1;if(ut!==null){let Et=ut.texture.format;W=g.has(Et)}if(W){let Et=ut.texture.type,Nt=p.has(Et),wt=ne.getClearColor(),Bt=ne.getClearAlpha(),kt=wt.r,ie=wt.g,he=wt.b;Nt?(S[0]=kt,S[1]=ie,S[2]=he,S[3]=Bt,D.clearBufferuiv(D.COLOR,0,S)):(R[0]=kt,R[1]=ie,R[2]=he,R[3]=Bt,D.clearBufferiv(D.COLOR,0,R))}else G|=D.COLOR_BUFFER_BIT}U&&(G|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(G|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&D.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),H=v},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",ve,!1),e.removeEventListener("webglcontextcreationerror",Fn,!1),ne.dispose(),St.dispose(),yt.dispose(),k.dispose(),mt.dispose(),st.dispose(),At.dispose(),ht.dispose(),xt.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",ad),Ht.removeEventListener("sessionend",ld),is.stop()};function Ae(v){v.preventDefault(),io("WebGLRenderer: Context Lost."),L=!0}function ve(){io("WebGLRenderer: Context Restored."),L=!1;let v=z.autoReset,U=Yt.enabled,Y=Yt.autoUpdate,G=Yt.needsUpdate,W=Yt.type;Xt(),z.autoReset=v,Yt.enabled=U,Yt.autoUpdate=Y,Yt.needsUpdate=G,Yt.type=W}function Fn(v){Zt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Yn(v){let U=v.target;U.removeEventListener("dispose",Yn),xm(U)}function xm(v){ym(v),k.remove(v)}function ym(v){let U=k.get(v).programs;U!==void 0&&(U.forEach(function(Y){xt.releaseProgram(Y)}),v.isShaderMaterial&&xt.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,Y,G,W,Et){U===null&&(U=Tt);let Nt=W.isMesh&&W.matrixWorld.determinantAffine()<0,wt=Sm(v,U,Y,G,W);_.setMaterial(G,Nt);let Bt=Y.index,kt=1;if(G.wireframe===!0){if(Bt=j.getWireframeAttribute(Y),Bt===void 0)return;kt=2}let ie=Y.drawRange,he=Y.attributes.position,zt=ie.start*kt,Me=(ie.start+ie.count)*kt;Et!==null&&(zt=Math.max(zt,Et.start*kt),Me=Math.min(Me,(Et.start+Et.count)*kt)),Bt!==null?(zt=Math.max(zt,0),Me=Math.min(Me,Bt.count)):he!=null&&(zt=Math.max(zt,0),Me=Math.min(Me,he.count));let ke=Me-zt;if(ke<0||ke===1/0)return;At.setup(W,G,wt,Y,Bt);let Ce,Te=vt;if(Bt!==null&&(Ce=_t.get(Bt),Te=et,Te.setIndex(Ce)),W.isMesh)G.wireframe===!0?(_.setLineWidth(G.wireframeLinewidth*Dt()),Te.setMode(D.LINES)):Te.setMode(D.TRIANGLES);else if(W.isLine){let an=G.linewidth;an===void 0&&(an=1),_.setLineWidth(an*Dt()),W.isLineSegments?Te.setMode(D.LINES):W.isLineLoop?Te.setMode(D.LINE_LOOP):Te.setMode(D.LINE_STRIP)}else W.isPoints?Te.setMode(D.POINTS):W.isSprite&&Te.setMode(D.TRIANGLES);if(W.isBatchedMesh)if(te.get("WEBGL_multi_draw"))Te.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let an=W._multiDrawStarts,Ct=W._multiDrawCounts,dn=W._multiDrawCount,_e=Bt?_t.get(Bt).bytesPerElement:1,Rn=k.get(G).currentProgram.getUniforms();for(let Zn=0;Zn<dn;Zn++)Rn.setValue(D,"_gl_DrawID",Zn),Te.render(an[Zn]/_e,Ct[Zn])}else if(W.isInstancedMesh)Te.renderInstances(zt,ke,W.count);else if(Y.isInstancedBufferGeometry){let an=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ct=Math.min(Y.instanceCount,an);Te.renderInstances(zt,ke,Ct)}else Te.render(zt,ke)};function od(v,U,Y,G){H!==null&&v.isNodeMaterial&&H.setObject(G,v),rt===!0&&Wt.setState(v,Y,!1),v.transparent===!0&&v.side===je&&v.forceSinglePass===!1?(v.side=nn,v.needsUpdate=!0,fa(v,U,G),v.side=Yi,v.needsUpdate=!0,fa(v,U,G),v.side=je):fa(v,U,G)}this.compile=function(v,U,Y=null){Y===null&&(Y=v),H!==null&&H.renderStart(v,U,Y),b=yt.get(Y),b.init(U),x.push(b),Y.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),v!==Y&&v.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),b.setupLights(),H!==null&&H.updateLights(b.state.lightsArray),at=this.localClippingEnabled,rt=Wt.init(this.clippingPlanes,at),rt===!0&&Wt.setGlobalState(this.clippingPlanes,U),H!==null&&Yt.render(b.state.shadowsArray,Y,U);let G=new Set;return v.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Et=W.material;if(Et)if(Array.isArray(Et))for(let Nt=0;Nt<Et.length;Nt++){let wt=Et[Nt];od(wt,Y,U,W),G.add(wt)}else od(Et,Y,U,W),G.add(Et)}),b=x.pop(),H!==null&&H.renderEnd(),G},this.compileAsync=function(v,U,Y=null){let G=this.compile(v,U,Y);return new Promise(W=>{function Et(){if(G.forEach(function(Nt){let Bt=k.get(Nt).currentProgram;(Bt===void 0||Bt.isReady())&&G.delete(Nt)}),G.size===0){W(v);return}setTimeout(Et,10)}te.get("KHR_parallel_shader_compile")!==null?Et():setTimeout(Et,10)})};let Jc=null;function vm(v){Jc&&Jc(v)}function ad(){is.stop()}function ld(){is.start()}let is=new up;is.setAnimationLoop(vm),typeof self<"u"&&is.setContext(self),this.setAnimationLoop=function(v){Jc=v,Ht.setAnimationLoop(v),v===null?is.stop():is.start()},Ht.addEventListener("sessionstart",ad),Ht.addEventListener("sessionend",ld),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){Zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;H!==null&&H.renderStart(v,U);let Y=Ht.enabled===!0&&Ht.isPresenting===!0,G=E!==null&&(ut===null||Y)&&E.begin(P,ut);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(U),U=Ht.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,U,ut),b=yt.get(v,x.length),b.init(U),b.state.textureUnits=Q.getTextureUnits(),x.push(b),lt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),$.setFromProjectionMatrix(lt,kn,U.reversedDepth),at=this.localClippingEnabled,rt=Wt.init(this.clippingPlanes,at),w=St.get(v,C.length),w.init(),C.push(w),Ht.enabled===!0&&Ht.isPresenting===!0){let Nt=P.xr.getDepthSensingMesh();Nt!==null&&Kc(Nt,U,-1/0,P.sortObjects)}Kc(v,U,0,P.sortObjects),w.finish(),H!==null&&H.updateLights(b.state.lightsArray),P.sortObjects===!0&&w.sort(ot,gt),Lt=Ht.enabled===!1||Ht.isPresenting===!1||Ht.hasDepthSensing()===!1,Lt&&ne.addToRenderList(w,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),rt===!0&&Wt.beginShadows();let W=b.state.shadowsArray;if(Yt.render(W,v,U),rt===!0&&Wt.endShadows(),(G&&E.hasRenderPass())===!1){let Nt=w.opaque,wt=w.transmissive;if(b.setupLights(),U.isArrayCamera){let Bt=U.cameras;if(wt.length>0)for(let kt=0,ie=Bt.length;kt<ie;kt++){let he=Bt[kt];hd(Nt,wt,v,he)}Lt&&ne.render(v);for(let kt=0,ie=Bt.length;kt<ie;kt++){let he=Bt[kt];cd(w,v,he,he.viewport)}}else wt.length>0&&hd(Nt,wt,v,U),Lt&&ne.render(v),cd(w,v,U)}ut!==null&&Z===0&&(Q.updateMultisampleRenderTarget(ut),Q.updateRenderTargetMipmap(ut)),G&&E.end(P),v.isScene===!0&&v.onAfterRender(P,v,U),At.resetDefaultState(),K=-1,nt=null,x.pop(),x.length>0?(b=x[x.length-1],Q.setTextureUnits(b.state.textureUnits),rt===!0&&Wt.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,C.pop(),C.length>0?w=C[C.length-1]:w=null,H!==null&&H.renderEnd()};function Kc(v,U,Y,G){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)Y=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLightProbeGrid)b.pushLightProbeGrid(v);else if(v.isLight)b.pushLight(v),v.castShadow&&b.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum($)){G&&Ut.setFromMatrixPosition(v.matrixWorld).applyMatrix4(lt);let Nt=st.update(v),wt=v.material;wt.visible&&w.push(v,Nt,wt,Y,Ut.z,null,U)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum($))){let Nt=st.update(v),wt=v.material;if(G&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ut.copy(v.boundingSphere.center)):(Nt.boundingSphere===null&&Nt.computeBoundingSphere(),Ut.copy(Nt.boundingSphere.center)),Ut.applyMatrix4(v.matrixWorld).applyMatrix4(lt)),Array.isArray(wt)){let Bt=Nt.groups;for(let kt=0,ie=Bt.length;kt<ie;kt++){let he=Bt[kt],zt=wt[he.materialIndex];zt&&zt.visible&&w.push(v,Nt,zt,Y,Ut.z,he,U)}}else wt.visible&&w.push(v,Nt,wt,Y,Ut.z,null,U)}}let Et=v.children;for(let Nt=0,wt=Et.length;Nt<wt;Nt++)Kc(Et[Nt],U,Y,G)}function cd(v,U,Y,G){let{opaque:W,transmissive:Et,transparent:Nt}=v;b.setupLightsView(Y),rt===!0&&Wt.setGlobalState(P.clippingPlanes,Y),G&&_.viewport(it.copy(G)),W.length>0&&da(W,U,Y),Et.length>0&&da(Et,U,Y),Nt.length>0&&da(Nt,U,Y),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function hd(v,U,Y,G){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){let zt=te.has("EXT_color_buffer_half_float")||te.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new We(1,1,{generateMipmaps:!0,type:zt?sn:xn,minFilter:$i,samples:Math.max(4,T.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:le.workingColorSpace})}let Et=b.state.transmissionRenderTarget[G.id],Nt=G.viewport||it;Et.setSize(Nt.z*P.transmissionResolutionScale,Nt.w*P.transmissionResolutionScale);let wt=P.getRenderTarget(),Bt=P.getActiveCubeFace(),kt=P.getActiveMipmapLevel();P.setRenderTarget(Et),P.getClearColor(pe),re=P.getClearAlpha(),re<1&&P.setClearColor(16777215,.5),P.clear(),Lt&&ne.render(Y);let ie=P.toneMapping;P.toneMapping=Gn;let he=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),rt===!0&&Wt.setGlobalState(P.clippingPlanes,G),da(v,Y,G),Q.updateMultisampleRenderTarget(Et),Q.updateRenderTargetMipmap(Et),te.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Me=0,ke=U.length;Me<ke;Me++){let Ce=U[Me],{object:Te,geometry:an,material:Ct,group:dn}=Ce;if(Ct.side===je&&Te.layers.test(G.layers)){let _e=Ct.side;Ct.side=nn,Ct.needsUpdate=!0,ud(Te,Y,G,an,Ct,dn),Ct.side=_e,Ct.needsUpdate=!0,zt=!0}}zt===!0&&(Q.updateMultisampleRenderTarget(Et),Q.updateRenderTargetMipmap(Et))}P.setRenderTarget(wt,Bt,kt),P.setClearColor(pe,re),he!==void 0&&(G.viewport=he),P.toneMapping=ie}function da(v,U,Y){let G=U.isScene===!0?U.overrideMaterial:null;for(let W=0,Et=v.length;W<Et;W++){let Nt=v[W],{object:wt,geometry:Bt,group:kt}=Nt,ie=Nt.material;ie.allowOverride===!0&&G!==null&&(ie=G),wt.layers.test(Y.layers)&&ud(wt,U,Y,Bt,ie,kt)}}function ud(v,U,Y,G,W,Et){H!==null&&W.isNodeMaterial&&H.setObject(v,W),v.onBeforeRender(P,U,Y,G,W,Et),v.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),W.onBeforeRender(P,U,Y,G,v,Et),W.transparent===!0&&W.side===je&&W.forceSinglePass===!1?(W.side=nn,W.needsUpdate=!0,P.renderBufferDirect(Y,U,G,W,v,Et),W.side=Yi,W.needsUpdate=!0,P.renderBufferDirect(Y,U,G,W,v,Et),W.side=je):P.renderBufferDirect(Y,U,G,W,v,Et),v.onAfterRender(P,U,Y,G,W,Et)}function fa(v,U,Y){U.isScene!==!0&&(U=Tt);let G=k.get(v),W=b.state.lights,Et=b.state.shadowsArray,Nt=W.state.version,wt=xt.getParameters(v,W.state,Et,U,Y,b.state.lightProbeGridArray),Bt=xt.getProgramCacheKey(wt),kt=G.programs;G.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let ie=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;G.envMap=mt.get(v.envMap||G.environment,ie),G.envMapRotation=G.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,kt===void 0&&(v.addEventListener("dispose",Yn),kt=new Map,G.programs=kt);let he=kt.get(Bt);if(he!==void 0){if(G.currentProgram===he&&G.lightsStateVersion===Nt)return fd(v,wt),he}else wt.uniforms=xt.getUniforms(v),H!==null&&v.isNodeMaterial&&H.build(v,Y,wt),v.onBeforeCompile(wt,P),he=xt.acquireProgram(wt,Bt),kt.set(Bt,he),G.uniforms=wt.uniforms;let zt=G.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(zt.clippingPlanes=Wt.uniform),fd(v,wt),G.needsLights=wm(v),G.lightsStateVersion=Nt,G.needsLights&&(zt.ambientLightColor.value=W.state.ambient,zt.lightProbe.value=W.state.probe,zt.sunLights.value=W.state.sun,zt.sunLightShadows.value=W.state.sunShadow,zt.directionalLights.value=W.state.directional,zt.directionalLightShadows.value=W.state.directionalShadow,zt.spotLights.value=W.state.spot,zt.spotLightShadows.value=W.state.spotShadow,zt.rectAreaLights.value=W.state.rectArea,zt.ltc_1.value=W.state.rectAreaLTC1,zt.ltc_2.value=W.state.rectAreaLTC2,zt.pointLights.value=W.state.point,zt.pointLightShadows.value=W.state.pointShadow,zt.hemisphereLights.value=W.state.hemi,zt.sunShadowMatrix.value=W.state.sunShadowMatrix,zt.sunShadowCascade.value=W.state.sunShadowCascade,zt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,zt.spotLightMatrix.value=W.state.spotLightMatrix,zt.spotLightMap.value=W.state.spotLightMap,zt.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=b.state.lightProbeGridArray.length>0,G.currentProgram=he,G.uniformsList=null,he}function dd(v){if(v.uniformsList===null){let U=v.currentProgram.getUniforms();v.uniformsList=Mr.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function fd(v,U){let Y=k.get(v);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function Mm(v,U){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;M.setFromMatrixPosition(U.matrixWorld);for(let Y=0,G=v.length;Y<G;Y++){let W=v[Y];if(W.texture!==null&&W.boundingBox.containsPoint(M))return W}return null}function Sm(v,U,Y,G,W){U.isScene!==!0&&(U=Tt),Q.resetTextureUnits();let Et=U.fog,Nt=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,wt=ut===null?P.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:le.workingColorSpace,Bt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,kt=mt.get(G.envMap||Nt,Bt),ie=G.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,he=!!Y.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),zt=!!Y.morphAttributes.position,Me=!!Y.morphAttributes.normal,ke=!!Y.morphAttributes.color,Ce=Gn;G.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Ce=P.toneMapping);let Te=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,an=Te!==void 0?Te.length:0,Ct=k.get(G),dn=b.state.lights;if(rt===!0&&(at===!0||v!==nt)){let Re=v===nt&&G.id===K;Wt.setState(G,v,Re)}let _e=!1;G.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==dn.state.version||Ct.outputColorSpace!==wt||W.isBatchedMesh&&Ct.batching===!1||!W.isBatchedMesh&&Ct.batching===!0||W.isBatchedMesh&&Ct.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Ct.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Ct.instancing===!1||!W.isInstancedMesh&&Ct.instancing===!0||W.isSkinnedMesh&&Ct.skinning===!1||!W.isSkinnedMesh&&Ct.skinning===!0||W.isInstancedMesh&&Ct.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ct.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ct.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ct.instancingMorph===!1&&W.morphTexture!==null||Ct.envMap!==kt||G.fog===!0&&Ct.fog!==Et||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==Wt.numPlanes||Ct.numIntersection!==Wt.numIntersection)||Ct.vertexAlphas!==ie||Ct.vertexTangents!==he||Ct.morphTargets!==zt||Ct.morphNormals!==Me||Ct.morphColors!==ke||Ct.toneMapping!==Ce||Ct.morphTargetsCount!==an||!!Ct.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(_e=!0):(_e=!0,Ct.__version=G.version);let Rn=Ct.currentProgram;_e===!0&&(Rn=fa(G,U,W),H&&G.isNodeMaterial&&H.onUpdateProgram(G,Rn,Ct));let Zn=!1,Pi=!1,Is=!1,we=Rn.getUniforms(),ze=Ct.uniforms;if(_.useProgram(Rn.program)&&(Zn=!0,Pi=!0,Is=!0),G.id!==K&&(K=G.id,Pi=!0),Ct.needsLights){let Re=Mm(b.state.lightProbeGridArray,W);Ct.lightProbeGrid!==Re&&(Ct.lightProbeGrid=Re,Pi=!0)}if(Zn||nt!==v){_.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),we.setValue(D,"projectionMatrix",v.projectionMatrix),we.setValue(D,"viewMatrix",v.matrixWorldInverse);let Li=we.map.cameraPosition;Li!==void 0&&Li.setValue(D,pt.setFromMatrixPosition(v.matrixWorld)),T.logarithmicDepthBuffer&&we.setValue(D,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&we.setValue(D,"isOrthographic",v.isOrthographicCamera===!0),nt!==v&&(nt=v,Pi=!0,Is=!0)}if(Ct.needsLights&&(dn.state.sunShadowMap.length>0&&we.setValue(D,"sunShadowMap",dn.state.sunShadowMap,Q),dn.state.directionalShadowMap.length>0&&we.setValue(D,"directionalShadowMap",dn.state.directionalShadowMap,Q),dn.state.spotShadowMap.length>0&&we.setValue(D,"spotShadowMap",dn.state.spotShadowMap,Q),dn.state.pointShadowMap.length>0&&we.setValue(D,"pointShadowMap",dn.state.pointShadowMap,Q)),W.isSkinnedMesh){we.setOptional(D,W,"bindMatrix"),we.setOptional(D,W,"bindMatrixInverse");let Re=W.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),we.setValue(D,"boneTexture",Re.boneTexture,Q))}W.isBatchedMesh&&(we.setOptional(D,W,"batchingTexture"),we.setValue(D,"batchingTexture",W._matricesTexture,Q),we.setOptional(D,W,"batchingIdTexture"),we.setValue(D,"batchingIdTexture",W._indirectTexture,Q),we.setOptional(D,W,"batchingColorTexture"),W._colorsTexture!==null&&we.setValue(D,"batchingColorTexture",W._colorsTexture,Q));let Ii=Y.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0)&&O.update(W,Y,Rn),(Pi||Ct.receiveShadow!==W.receiveShadow)&&(Ct.receiveShadow=W.receiveShadow,we.setValue(D,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(ze.envMapIntensity.value=U.environmentIntensity),ze.dfgLUT!==void 0&&(ze.dfgLUT.value=Vv()),Pi){if(we.setValue(D,"toneMappingExposure",P.toneMappingExposure),Ct.needsLights&&bm(ze,Is),Et&&G.fog===!0&&Gt.refreshFogUniforms(ze,Et),Gt.refreshMaterialUniforms(ze,G,B,I,b.state.transmissionRenderTarget[v.id]),Ct.needsLights&&Ct.lightProbeGrid){let Re=Ct.lightProbeGrid;ze.probesSH.value=Re.texture,ze.probesMin.value.copy(Re.boundingBox.min),ze.probesMax.value.copy(Re.boundingBox.max),ze.probesResolution.value.copy(Re.resolution)}Mr.upload(D,dd(Ct),ze,Q)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Mr.upload(D,dd(Ct),ze,Q),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&we.setValue(D,"center",W.center),we.setValue(D,"modelViewMatrix",W.modelViewMatrix),we.setValue(D,"normalMatrix",W.normalMatrix),we.setValue(D,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let Re=G.uniformsGroups;for(let Li=0,Ls=Re.length;Li<Ls;Li++){let md=Re[Li];ht.update(md,Rn),ht.bind(md,Rn)}}return Rn}function bm(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.sunLights.needsUpdate=U,v.sunLightShadows.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function wm(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return ut},this.setRenderTargetTextures=function(v,U,Y){let G=k.get(v);G.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),k.get(v.texture).__webglTexture=U,k.get(v.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:Y,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){let Y=k.get(v);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(v,U=0,Y=0){ut=v,J=U,Z=Y;let G=null,W=!1,Et=!1;if(v){let wt=k.get(v);if(wt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(D.FRAMEBUFFER,wt.__webglFramebuffer),it.copy(v.viewport),Vt.copy(v.scissor),It=v.scissorTest,_.viewport(it),_.scissor(Vt),_.setScissorTest(It),K=-1;return}else if(wt.__webglFramebuffer===void 0)Q.setupRenderTarget(v);else if(wt.__hasExternalTextures)Q.rebindTextures(v,k.get(v.texture).__webglTexture,k.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let ie=v.depthTexture;if(wt.__boundDepthTexture!==ie){if(ie!==null&&k.has(ie)&&(v.width!==ie.image.width||v.height!==ie.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(v)}}let Bt=v.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Et=!0);let kt=k.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(kt[U])?G=kt[U][Y]:G=kt[U],W=!0):v.samples>0&&Q.useMultisampledRTT(v)===!1?G=k.get(v).__webglMultisampledFramebuffer:Array.isArray(kt)?G=kt[Y]:G=kt,it.copy(v.viewport),Vt.copy(v.scissor),It=v.scissorTest}else it.copy(ft).multiplyScalar(B).floor(),Vt.copy(Rt).multiplyScalar(B).floor(),It=Kt;if(Y!==0&&(G=X),_.bindFramebuffer(D.FRAMEBUFFER,G)&&_.drawBuffers(v,G),_.viewport(it),_.scissor(Vt),_.setScissorTest(It),W){let wt=k.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,wt.__webglTexture,Y)}else if(Et){let wt=U;for(let Bt=0;Bt<v.textures.length;Bt++){let kt=k.get(v.textures[Bt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Bt,kt.__webglTexture,Y,wt)}}else if(v!==null&&Y!==0){let wt=k.get(v.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,wt.__webglTexture,Y)}K=-1};function pd(v){let U=k.get(v);return(U.__readFormat!==v.format||U.__readType!==v.type)&&(U.__readFormat=v.format,U.__readType=v.type,U.__formatReadable=T.textureFormatReadable(v.format),U.__typeReadable=T.textureTypeReadable(v.type)),U}this.readRenderTargetPixels=function(v,U,Y,G,W,Et,Nt,wt=0){if(!(v&&v.isWebGLRenderTarget)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=k.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Nt!==void 0&&(Bt=Bt[Nt]),Bt){_.bindFramebuffer(D.FRAMEBUFFER,Bt);try{let kt=v.textures[wt],ie=kt.format,he=kt.type;v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+wt);let zt=pd(kt);if(zt.__formatReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(zt.__typeReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-G&&Y>=0&&Y<=v.height-W&&D.readPixels(U,Y,G,W,Mt.convert(ie),Mt.convert(he),Et)}finally{let kt=ut!==null?k.get(ut).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(v,U,Y,G,W,Et,Nt,wt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=k.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Nt!==void 0&&(Bt=Bt[Nt]),Bt)if(U>=0&&U<=v.width-G&&Y>=0&&Y<=v.height-W){_.bindFramebuffer(D.FRAMEBUFFER,Bt);let kt=v.textures[wt],ie=kt.format,he=kt.type;v.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+wt);let zt=pd(kt);if(zt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(zt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Me=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Me),D.bufferData(D.PIXEL_PACK_BUFFER,Et.byteLength,D.STREAM_READ),D.readPixels(U,Y,G,W,Mt.convert(ie),Mt.convert(he),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let ke=ut!==null?k.get(ut).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,ke);let Ce=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Nf(D,Ce,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Me),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,Et),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(Me),D.deleteSync(Ce),Et}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,Y=0){let G=Math.pow(2,-Y),W=Math.floor(v.image.width*G),Et=Math.floor(v.image.height*G),Nt=U!==null?U.x:0,wt=U!==null?U.y:0;Q.setTexture2D(v,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,Nt,wt,W,Et),_.unbindTexture()},this.copyTextureToTexture=function(v,U,Y=null,G=null,W=0,Et=0){let Nt,wt,Bt,kt,ie,he,zt,Me,ke,Ce=v.isCompressedTexture?v.mipmaps[Et]:v.image;if(Y!==null)Nt=Y.max.x-Y.min.x,wt=Y.max.y-Y.min.y,Bt=Y.isBox3?Y.max.z-Y.min.z:1,kt=Y.min.x,ie=Y.min.y,he=Y.isBox3?Y.min.z:0;else{let ze=Math.pow(2,-W);Nt=Math.floor(Ce.width*ze),wt=Math.floor(Ce.height*ze),v.isDataArrayTexture?Bt=Ce.depth:v.isData3DTexture?Bt=Math.floor(Ce.depth*ze):Bt=1,kt=0,ie=0,he=0}G!==null?(zt=G.x,Me=G.y,ke=G.z):(zt=0,Me=0,ke=0);let Te=Mt.convert(U.format),an=Mt.convert(U.type),Ct;U.isData3DTexture?(Q.setTexture3D(U,0),Ct=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Q.setTexture2DArray(U,0),Ct=D.TEXTURE_2D_ARRAY):(Q.setTexture2D(U,0),Ct=D.TEXTURE_2D),_.activeTexture(D.TEXTURE0),_.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),_.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);let dn=_.getParameter(D.UNPACK_ROW_LENGTH),_e=_.getParameter(D.UNPACK_IMAGE_HEIGHT),Rn=_.getParameter(D.UNPACK_SKIP_PIXELS),Zn=_.getParameter(D.UNPACK_SKIP_ROWS),Pi=_.getParameter(D.UNPACK_SKIP_IMAGES);_.pixelStorei(D.UNPACK_ROW_LENGTH,Ce.width),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ce.height),_.pixelStorei(D.UNPACK_SKIP_PIXELS,kt),_.pixelStorei(D.UNPACK_SKIP_ROWS,ie),_.pixelStorei(D.UNPACK_SKIP_IMAGES,he);let Is=v.isDataArrayTexture||v.isData3DTexture,we=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){let ze=k.get(v),Ii=k.get(U),Re=k.get(ze.__renderTarget),Li=k.get(Ii.__renderTarget);_.bindFramebuffer(D.READ_FRAMEBUFFER,Re.__webglFramebuffer),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,Li.__webglFramebuffer);for(let Ls=0;Ls<Bt;Ls++)Is&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,k.get(v).__webglTexture,W,he+Ls),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,k.get(U).__webglTexture,Et,ke+Ls)),D.blitFramebuffer(kt,ie,Nt,wt,zt,Me,Nt,wt,D.DEPTH_BUFFER_BIT,D.NEAREST);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(W!==0||v.isRenderTargetTexture||k.has(v)){let ze=k.get(v),Ii=k.get(U);_.bindFramebuffer(D.READ_FRAMEBUFFER,N),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,V);for(let Re=0;Re<Bt;Re++)Is?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ze.__webglTexture,W,he+Re):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ze.__webglTexture,W),we?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ii.__webglTexture,Et,ke+Re):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ii.__webglTexture,Et),W!==0?D.blitFramebuffer(kt,ie,Nt,wt,zt,Me,Nt,wt,D.COLOR_BUFFER_BIT,D.NEAREST):we?D.copyTexSubImage3D(Ct,Et,zt,Me,ke+Re,kt,ie,Nt,wt):D.copyTexSubImage2D(Ct,Et,zt,Me,kt,ie,Nt,wt);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else we?v.isDataTexture||v.isData3DTexture?D.texSubImage3D(Ct,Et,zt,Me,ke,Nt,wt,Bt,Te,an,Ce.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Ct,Et,zt,Me,ke,Nt,wt,Bt,Te,Ce.data):D.texSubImage3D(Ct,Et,zt,Me,ke,Nt,wt,Bt,Te,an,Ce):v.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,Et,zt,Me,Nt,wt,Te,an,Ce.data):v.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,Et,zt,Me,Ce.width,Ce.height,Te,Ce.data):D.texSubImage2D(D.TEXTURE_2D,Et,zt,Me,Nt,wt,Te,an,Ce);_.pixelStorei(D.UNPACK_ROW_LENGTH,dn),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_e),_.pixelStorei(D.UNPACK_SKIP_PIXELS,Rn),_.pixelStorei(D.UNPACK_SKIP_ROWS,Zn),_.pixelStorei(D.UNPACK_SKIP_IMAGES,Pi),Et===0&&U.generateMipmaps&&D.generateMipmap(Ct),_.unbindTexture()},this.initRenderTarget=function(v){k.get(v).__webglFramebuffer===void 0&&Q.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Q.setTextureCube(v,0):v.isData3DTexture?Q.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Q.setTexture2DArray(v,0):Q.setTexture2D(v,0),_.unbindTexture()},this.resetState=function(){J=0,Z=0,ut=null,_.reset(),At.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=le._getDrawingBufferColorSpace(t),e.unpackColorSpace=le._getUnpackColorSpace()}};var br={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var wn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},kv=new qi(-1,1,1,-1,0,1),Tu=class extends Se{constructor(){super(),this.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ue([0,2,0,0,2,0],2))}},Gv=new Tu,Qi=class{constructor(t){this._mesh=new Ft(Gv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,kv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var yc=class extends wn{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof Ie?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=wi.clone(t.uniforms),this.material=new Ie({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Qi(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var $o=class extends wn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){let s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},vc=class extends wn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Mc=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let i=t.getSize(new ct);this._width=i.width,this._height=i.height,e=new We(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:sn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new yc(br),this.copyPass.material.blending=Ln,this.timer=new Co}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){this.timer.update(),t===void 0&&(t=this.timer.getDelta());let e=this.renderer.getRenderTarget(),i=!1;for(let s=0,r=this.passes.length;s<r;s++){let o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),o.needsSwap){if(i){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}$o!==void 0&&(o instanceof $o?i=!0:o instanceof vc&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new ct);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Sc=class extends wn{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Jt}render(t,e,i){let s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}};var xp={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Jt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var wr=class n extends wn{constructor(t,e=1,i,s){super(),this.strength=e,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new ct(t.x,t.y):new ct(256,256),this.clearColor=new Jt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new We(r,o,{type:sn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){let d=new We(r,o,{type:sn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+c,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new We(r,o,{type:sn,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+c,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),o=Math.round(o/2)}let a=xp;this.highPassUniforms=wi.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ie({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new ct(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=wi.clone(br.uniforms),this.blendMaterial=new Ie({uniforms:this.copyUniforms,vertexShader:br.vertexShader,fragmentShader:br.fragmentShader,premultipliedAlpha:!0,blending:hn,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Jt,this._oldClearAlpha=1,this._basic=new Ve,this._fsQuad=new Qi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ct(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=i.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=n.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(t){let e=[],i=t/3;for(let o=0;o<t;o++)e.push(.39894*Math.exp(-.5*o*o/(i*i))/i);let s=[],r=[];for(let o=1;o<t;o+=2){let a=e[o],l=o+1<t?e[o+1]:0,h=a+l;s.push((o*a+(o+1)*l)/h),r.push(h)}return new Ie({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ct(.5,.5)},direction:{value:new ct(.5,.5)},centerWeight:{value:e[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(t){return new Ie({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};wr.BlurDirectionX=new ct(1,0);wr.BlurDirectionY=new ct(0,1);var Jo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var bc=class extends wn{constructor(){super(),this.isOutputPass=!0,this.uniforms=wi.clone(Jo.uniforms),this.material=new dr({name:Jo.name,uniforms:this.uniforms,vertexShader:Jo.vertexShader,fragmentShader:Jo.fragmentShader}),this._fsQuad=new Qi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},le.getTransfer(this._outputColorSpace)===ye&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Io?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Lo?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Do?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===xs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Uo?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Fo?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===No&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Wv="https://frank-otto.github.io/";var mn=[{slug:"candy-catch",day:1,date:"2026-10-12",style:"candyShop",emoji:"\u{1F36C}",en:["Candy Catch","Catch the falling sweets under the moon"],de:["Candy Catch","Fang die fallenden S\xFC\xDFigkeiten im Mondlicht"]},{slug:"ghost-whack",day:2,date:"2026-10-13",style:"ghostInn",emoji:"\u{1F47B}",en:["Ghost Whack","Bonk the ghosts popping out of the inn"],de:["Ghost Whack","Hau die Geister, die aus dem Gasthaus ploppen"]},{slug:"potion-mixer",day:2,date:"2026-10-13",style:"apothecary",emoji:"\u{1F9EA}",en:["Potion Mixer","Brew bubbling potions in the apothecary"],de:["Potion Mixer","Braue blubbernde Tr\xE4nke in der Apotheke"]},{slug:"trick-or-treat-run",day:3,date:"2026-10-14",style:"porchHouse",emoji:"\u{1F3C3}",en:["Trick or Treat Run","Race from door to door for candy"],de:["Trick or Treat Run","Renn von T\xFCr zu T\xFCr um S\xFC\xDFes"]},{slug:"haunted-mansion-escape",day:4,date:"2026-10-15",style:"mansion",emoji:"\u{1F5DD}\uFE0F",en:["Haunted Mansion Escape","Find the keys and escape the mansion"],de:["Haunted Mansion Escape","Finde die Schl\xFCssel und entkomme der Villa"]},{slug:"bat-swarm",day:5,date:"2026-10-16",style:"belfry",emoji:"\u{1F987}",en:["Bat Swarm","Steer a whole swarm of bats"],de:["Bat Swarm","Steuere einen ganzen Fledermausschwarm"]},{slug:"spider-drop",day:6,date:"2026-10-17",style:"webTower",emoji:"\u{1F577}\uFE0F",en:["Spider Drop","Swing through the crypt on a silk thread"],de:["Spider Drop","Schwing am Seidenfaden durch die Gruft"]},{slug:"pumpkin-carver",day:7,date:"2026-10-18",style:"pumpkinShed",emoji:"\u{1F383}",en:["Pumpkin Carver","Carve your own glowing jack-o\u2019-lantern"],de:["Pumpkin Carver","Schnitz deine eigene leuchtende K\xFCrbislaterne"]},{slug:"haunted-piano",day:8,date:"2026-10-19",style:"pianoManor",emoji:"\u{1F3B9}",en:["Haunted Piano","Play the ghost\u2019s grand piano"],de:["Haunted Piano","Spiel den Fl\xFCgel des Geistes"]},{slug:"skeleton-dance",day:9,date:"2026-10-20",style:"boneChapel",emoji:"\u{1F480}",en:["Skeleton Dance","A dance battle on the graveyard"],de:["Skeleton Dance","Ein Tanz-Duell auf dem Friedhof"]},{slug:"monster-maker",day:10,date:"2026-10-21",style:"labTower",emoji:"\u26A1",en:["Monster Maker","Build a monster and bring it to life"],de:["Monster Maker","Bau ein Monster und erweck es zum Leben"]},{slug:"zombie-stack",day:11,date:"2026-10-22",style:"crypt",emoji:"\u{1F9DF}",en:["Zombie Stack","Stack the undead sky-high"],de:["Zombie Stack","Staple die Untoten himmelhoch"]},{slug:"witch-hat-toss",day:12,date:"2026-10-23",style:"witchCottage",emoji:"\u{1F9D9}",en:["Witch Hat Toss","Toss witch hats onto pumpkins and ghosts"],de:["Witch Hat Toss","Wirf Hexenh\xFCte auf K\xFCrbisse und Geister"]},{slug:"graveyard-golf",day:13,date:"2026-10-24",style:"golfCrypt",emoji:"\u26F3",en:["Graveyard Golf","Nine haunted mini-golf holes \u2013 wake the graveyard"],de:["Graveyard Golf","Neun Spuk-Minigolfbahnen \u2013 weck den Friedhof"]},{slug:"cauldron-eruption",day:14,date:"2026-10-25",style:"bakery",emoji:"\u{1F30B}",en:["Cauldron Eruption","Match candies until the cauldron erupts"],de:["Cauldron Eruption","Kombiniere S\xFC\xDFes, bis der Kessel ausbricht"]},{slug:"lantern-prowl",day:15,date:"2026-10-26",style:"catHouse",emoji:"\u{1F408}\u200D\u2B1B",en:["Lantern Prowl","Run the rooftops as a black cat and light the town"],de:["Lantern Prowl","Renn als schwarze Katze \xFCber die D\xE4cher"]},{slug:"candlewit",day:16,date:"2026-10-27",style:"library",emoji:"\u{1F56F}\uFE0F",en:["Candlewit","A s\xE9ance quiz \u2013 light the right candle"],de:["Candlewit","Ein S\xE9ance-Quiz \u2013 entz\xFCnde die richtige Kerze"]},{slug:"moonrouser",day:17,date:"2026-10-28",style:"observatory",emoji:"\u{1F43A}",en:["Moonrouser","Howl with the wolf pack until the moon breaks"],de:["Moonrouser","Heul mit dem Wolfsrudel, bis der Mond zerbricht"]},{slug:"peekstorm",day:18,date:"2026-10-29",style:"hedgeManor",emoji:"\u{1F47B}",en:["Peekstorm","Hunt hiding ghosts with your lantern"],de:["Peekstorm","Jag versteckte Geister mit deiner Laterne"]},{slug:"ectoswell",day:19,date:"2026-10-30",style:"bowlingBarn",emoji:"\u{1F7E2}",en:["Ectoswell","Roll a goo blob and swallow the village"],de:["Ectoswell","Roll einen Glibber und verschluck das Dorf"]},{slug:"ghost-memory",day:0,bonus:!0,open:!0,date:"2026-10-12",style:"memoryCrypt",emoji:"\u{1FAA6}",en:["Ghost Memory","Flip gravestones and find the ghost pairs"],de:["Ghost Memory","Dreh Grabsteine um und finde die Geisterpaare"]},{slug:"pumpkin-smash",day:0,bonus:!0,open:!0,date:"2026-10-12",style:"smashPatch",emoji:"\u{1F4A5}",en:["Pumpkin Smash","60 seconds: smash the pumpkins flying out of the fog"],de:["Pumpkin Smash","60 Sekunden: zerschlag die K\xFCrbisse aus dem Nebel"]},{slug:"witch-broom-race",day:0,bonus:!0,open:!0,date:"2026-10-12",style:"broomSpire",emoji:"\u{1F9F9}",en:["Witch Broom Race","Fly a broom through rings, bats and the storm"],de:["Witch Broom Race","Flieg auf dem Besen durch Ringe, Flederm\xE4use und Sturm"]}],Xv=n=>n.getFullYear()*1e4+(n.getMonth()+1)*100+n.getDate(),qv=n=>+n.replace(/-/g,"");function wc(n){let t=/^(\d{4})-(\d{2})-(\d{2})$/.exec(n||"");if(!t)return null;let e=new Date(+t[1],+t[2]-1,+t[3],12,0,0);return isNaN(e)?null:e}function Eu(n,t,e){return e==="all"?!0:e==="none"?!1:n.open===!0?!0:n.open===!1?!1:Xv(t)>=qv(n.date)}function ji(n,t){let[,e,i]=n.split("-");return t==="de"?`${+i}.${+e}.`:`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][+e-1]} ${+i}`}var Tc=n=>Wv+n.slug+"/";function vp(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},o={},a=n[0].morphTargetsRelative,l=new Se,h=0;for(let c=0;c<n.length;++c){let d=n[c],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". Make sure all geometries have the same number of attributes."),null;if(a!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+c+". The geometry must have either an index or a position attribute"),null;l.addGroup(h,f,c),h+=f}}if(e){let c=0,d=[];for(let u=0;u<n.length;++u){let f=n[u].index;for(let m=0;m<f.count;++m)d.push(f.getX(m)+c);c+=n[u].attributes.position.count}l.setIndex(d)}for(let c in r){let d=yp(r[c]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" attribute."),null;l.setAttribute(c,d)}for(let c in o){let d=o[c][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[c]=[];for(let u=0;u<d;++u){let f=[];for(let y=0;y<o[c].length;++y)f.push(o[c][y][u]);let m=yp(f);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+c+" morphAttribute."),null;l.morphAttributes[c].push(m)}}}return l}function yp(n){let t,e,i,s=-1,r=0;for(let h=0;h<n.length;++h){let c=n[h];if(t===void 0&&(t=c.array.constructor),t!==c.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=c.itemSize),e!==c.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=c.normalized),i!==c.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=c.gpuType),s!==c.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=c.count*e}let o=new t(r),a=new He(o,e,i),l=0;for(let h=0;h<n.length;++h){let c=n[h];if(c.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=c.count;u<f;u++)for(let m=0;m<e;m++){let y=c.getComponent(u,m);a.setComponent(u+d,m,y)}}else o.set(c.array,l);l+=c.count*e}return s!==void 0&&(a.gpuType=s),a}var Fe=(n,t)=>{let e=document.createElement("canvas");return e.width=n,e.height=t,[e,e.getContext("2d",{willReadFrequently:!0})]},rn=(n,t=!0,e)=>{let i=new ei(n);return t&&(i.colorSpace=Je),i.wrapS=i.wrapT=js,e&&i.repeat.set(...e),i.anisotropy=4,i};function Tn(n){let t=n>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}function Ss(n){let t=Tn(n),e=64,i=new Float32Array(e*e);for(let r=0;r<e*e;r++)i[r]=t();let s=(r,o)=>{let a=Math.floor(r),l=Math.floor(o),h=r-a,c=o-l,d=g=>g*g*(3-2*g),u=i[(l&63)*e+(a&63)],f=i[(l&63)*e+(a+1&63)],m=i[(l+1&63)*e+(a&63)],y=i[(l+1&63)*e+(a+1&63)];return u+(f-u)*d(h)+(m-u)*d(c)+(u-f-m+y)*d(h)*d(c)};return(r,o)=>s(r,o)*.5+s(r*2.1,o*2.1)*.3+s(r*4.3,o*4.3)*.2}function Au(n,t=2){let e=n.width,i=n.height,s=n.getContext("2d").getImageData(0,0,e,i).data,[r,o]=Fe(e,i),a=o.createImageData(e,i),l=(h,c)=>s[((c+i)%i*e+(h+e)%e)*4]/255;for(let h=0;h<i;h++)for(let c=0;c<e;c++){let d=(l(c+1,h)-l(c-1,h))*t,u=(l(c,h+1)-l(c,h-1))*t,f=Math.hypot(d,u,1),m=(h*e+c)*4;a.data[m]=(-d/f*.5+.5)*255,a.data[m+1]=(u/f*.5+.5)*255,a.data[m+2]=(1/f*.5+.5)*255,a.data[m+3]=255}return o.putImageData(a,0,0),r}function Ru(n,t,e,i,s=.18){let r=n.getImageData(0,0,t,e);for(let o=0;o<e;o++)for(let a=0;a<t;a++){let l=(o*t+a)*4,h=.82+i(a/23,o/23)*s*2;r.data[l]*=h,r.data[l+1]*=h,r.data[l+2]*=h}n.putImageData(r,0,0)}function Cu(){let[n,t]=Fe(128,128),e=t.createRadialGradient(64,64,0,64,64,64);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.3,"rgba(255,255,255,.45)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),new ei(n)}function Mp(n=3){let[t,e]=Fe(256,256),i=Ss(n),s=e.createImageData(256,256);for(let r=0;r<256;r++)for(let o=0;o<256;o++){let a=o/128-1,l=r/128-1,h=Math.min(1,Math.hypot(a,l)),c=Math.max(0,i(o/38,r/38)*1.5-.45)*Math.pow(1-h,1.6),d=(r*256+o)*4;s.data[d]=s.data[d+1]=s.data[d+2]=255,s.data[d+3]=Math.min(255,c*255)}return e.putImageData(s,0,0),new ei(t)}function Sp(n=21){let[e,i]=Fe(512,512),[s,r]=Fe(512,512),o=Tn(n),a=Ss(n);i.fillStyle="#1b1a20",i.fillRect(0,0,512,512),r.fillStyle="#000",r.fillRect(0,0,512,512);let l=14,h=512/l;for(let c=0;c<l;c++){let d=c%2*h*.5-o()*8;for(;d<512+h;){let u=h*(.85+o()*.4),f=20+o()*14;for(let m of[0,-512]){i.fillStyle=`hsl(${220+o()*40},${6+o()*8}%,${f}%)`,i.beginPath(),i.ellipse(d+m+u/2,c*h+h/2,u/2-2,h/2-2,0,0,6.3),i.fill();let y=r.createRadialGradient(d+m+u/2,c*h+h/2,1,d+m+u/2,c*h+h/2,h/2);y.addColorStop(0,"#fff"),y.addColorStop(1,"#222"),r.fillStyle=y,r.beginPath(),r.ellipse(d+m+u/2,c*h+h/2,u/2-2,h/2-2,0,0,6.3),r.fill()}d+=u}}return Ru(i,512,512,a),{map:rn(e),normal:rn(Au(s,3),!1)}}function bp(n=8){let[e,i]=Fe(512,512),s=Ss(n),r=Tn(n),o=i.createImageData(512,512);for(let a=0;a<512;a++)for(let l=0;l<512;l++){let h=s(l/60,a/60),c=s(l/9+40,a/9),d=(a*512+l)*4,u=Math.max(0,h-.55)*3;o.data[d]=22+c*14+u*26,o.data[d+1]=30+c*22+u*14,o.data[d+2]=24+c*12+u*6,o.data[d+3]=255}i.putImageData(o,0,0),i.globalAlpha=.5;for(let a=0;a<2600;a++){i.strokeStyle=r()<.5?"#2e4a2c":"#1d2e1c";let l=r()*512,h=r()*512;i.beginPath(),i.moveTo(l,h),i.lineTo(l+(r()-.5)*4,h-3-r()*6),i.stroke()}return i.globalAlpha=1,rn(e)}function Ko(n=4,t=235){let[s,r]=Fe(512,256),[o,a]=Fe(512,256),l=Tn(n),h=Ss(n+2);r.fillStyle="#141218",r.fillRect(0,0,512,256),a.fillStyle="#000",a.fillRect(0,0,512,256);let c=8,d=256/c;for(let u=0;u<c;u++){let f=-l()*40;for(;f<512;){let m=46+l()*50,y=26+l()*14;r.fillStyle=`hsl(${t+l()*30},${5+l()*8}%,${y}%)`,r.beginPath(),r.roundRect(f+2,u*d+2,m-4,d-4,4),r.fill(),a.fillStyle=`rgb(${170+l()*60},0,0)`,a.beginPath(),a.roundRect(f+2,u*d+2,m-4,d-4,6),a.fill(),f+=m}}return Ru(r,512,256,h,.2),{map:rn(s),normal:rn(Au(o,3),!1)}}function Qo(n=5,t="#8f8676",e="#2a1d16"){let[s,r]=Fe(512,512),o=Tn(n),a=Ss(n);r.fillStyle=t,r.fillRect(0,0,512,512),Ru(r,512,512,a,.22),r.fillStyle=e;let l=26;r.fillRect(0,0,512,l),r.fillRect(0,512/2-l/2,512,l),r.fillRect(0,512-l,512,l);for(let h of[0,512/2-l/2,512-l])r.fillRect(h,0,l,512);r.lineWidth=l*.8,r.strokeStyle=e;for(let[h,c,d,u]of[[0,512/2,512/2,0],[512/2,512,512,512/2],[512/2,0,512,512/2]])r.beginPath(),r.moveTo(h,c),r.lineTo(d,u),r.stroke();for(let h=0;h<300;h++)r.fillStyle=`rgba(0,0,0,${o()*.08})`,r.fillRect(o()*512,o()*512,2+o()*20,1+o()*3);return rn(s)}function Ec(n=6,t=[58,40,30]){let[i,s]=Fe(256,256),r=Tn(n),o=Ss(n),a=256/6;for(let h=0;h<6;h++){let c=.75+r()*.45;s.fillStyle=`rgb(${t[0]*c},${t[1]*c},${t[2]*c})`,s.fillRect(h*a,0,a,256),s.fillStyle="rgba(0,0,0,.55)",s.fillRect(h*a,0,2,256)}let l=s.getImageData(0,0,256,256);for(let h=0;h<256;h++)for(let c=0;c<256;c++){let d=(h*256+c)*4,u=.8+o(c/4,h/50)*.4;l.data[d]*=u,l.data[d+1]*=u,l.data[d+2]*=u}return s.putImageData(l,0,0),rn(i)}function jo(n=7,t=250,e=10,i=22){let[r,o]=Fe(256,256),[a,l]=Fe(256,256),h=Tn(n);o.fillStyle="#0c0b10",o.fillRect(0,0,256,256),l.fillStyle="#000",l.fillRect(0,0,256,256);let c=10,d=256/c,u=256/8;for(let f=c;f>=-1;f--)for(let m=-1;m<9;m++){let y=m*u+f%2*u/2,g=f*d,p=i+h()*10;o.fillStyle=`hsl(${t+h()*25},${e+h()*6}%,${p}%)`,o.beginPath(),o.moveTo(y,g),o.lineTo(y+u-2,g),o.lineTo(y+u-2,g+d*1.2),o.quadraticCurveTo(y+u/2,g+d*1.7,y+1,g+d*1.2),o.closePath(),o.fill();let S=l.createLinearGradient(0,g,0,g+d*1.5);S.addColorStop(0,"#333"),S.addColorStop(1,"#fff"),l.fillStyle=S,l.beginPath(),l.moveTo(y,g),l.lineTo(y+u-2,g),l.lineTo(y+u-2,g+d*1.2),l.quadraticCurveTo(y+u/2,g+d*1.7,y+1,g+d*1.2),l.closePath(),l.fill()}return{map:rn(r),normal:rn(Au(a,2.5),!1)}}function wp(n="lit",t=!1){let[s,r]=Fe(128,192);r.fillStyle="#120e0c",r.fillRect(0,0,128,192);let o=()=>{r.beginPath(),t?(r.moveTo(12,182),r.lineTo(12,64),r.arc(128/2,64,128/2-12,Math.PI,0),r.lineTo(116,182),r.closePath()):r.rect(12,12,104,170)};if(r.save(),o(),r.clip(),n==="lit"){let a=r.createRadialGradient(64,119.03999999999999,4,64,105.60000000000001,134.39999999999998);a.addColorStop(0,"#ffd27a"),a.addColorStop(.45,"#ff9a2e"),a.addColorStop(1,"#8a3208"),r.fillStyle=a}else if(n==="green"){let a=r.createRadialGradient(64,115.19999999999999,4,64,105.60000000000001,134.39999999999998);a.addColorStop(0,"#c8ffb0"),a.addColorStop(.5,"#4fd860"),a.addColorStop(1,"#0d4a1a"),r.fillStyle=a}else if(n==="violet"){let a=r.createRadialGradient(64,115.19999999999999,4,64,105.60000000000001,134.39999999999998);a.addColorStop(0,"#f0c8ff"),a.addColorStop(.5,"#a05cff"),a.addColorStop(1,"#2a0d4a"),r.fillStyle=a}else{let a=r.createLinearGradient(0,0,128,192);a.addColorStop(0,"#2a3348"),a.addColorStop(1,"#0b0e16"),r.fillStyle=a}return r.fillRect(0,0,128,192),r.restore(),r.strokeStyle="#1a120c",r.lineWidth=9,r.beginPath(),r.moveTo(128/2,0),r.lineTo(128/2,192),r.moveTo(0,192*.52),r.lineTo(128,192*.52),r.stroke(),r.lineWidth=10,o(),r.stroke(),rn(s)}function Pu(n){let[i,s]=Fe(128,224);s.fillStyle="#2b1a12",s.fillRect(0,0,128,224);for(let r=0;r<4;r++)s.fillStyle=r%2?"#3a2418":"#33201a",s.fillRect(8+r*28,8,26,216);if(s.fillStyle="#16100c",s.fillRect(0,50,128,8),s.fillRect(0,160,128,8),s.fillStyle="#c69a4a",s.beginPath(),s.arc(102,224*.55,6,0,6.3),s.fill(),n){s.fillStyle="#5b4a3c",s.save(),s.translate(128/2,224/2);for(let r of[.5,-.5])s.save(),s.rotate(r),s.fillRect(-128*.7,-9,128*1.4,18),s.restore();s.restore(),s.fillStyle="#26201a";for(let r of[.5,-.5]){s.save(),s.translate(128/2,224/2),s.rotate(r);for(let o of[-40,40])s.beginPath(),s.arc(o,0,3,0,6.3),s.fill();s.restore()}}return rn(i)}function Tp(){let[t,e]=Fe(512,512),i=Ss(91),s=Tn(92),r=e.createImageData(512,512);for(let o=0;o<512;o++)for(let a=0;a<512;a++){let l=a/256-1,h=o/256-1,c=Math.hypot(l,h),d=(o*512+a)*4;if(c>1){r.data[d+3]=0;continue}let u=Math.max(0,i(a/70+3,o/70)-.5)*1.4,f=.86-u*.45+i(a/9,o/9)*.1,m=.78+.22*Math.sqrt(1-c*c);r.data[d]=236*f*m,r.data[d+1]=228*f*m,r.data[d+2]=206*f*m,r.data[d+3]=255*Math.min(1,(1-c)*60)}e.putImageData(r,0,0);for(let o=0;o<40;o++){let a=s()*6.3,l=Math.sqrt(s())*220,h=256+Math.cos(a)*l,c=256+Math.sin(a)*l,d=3+s()*16;e.strokeStyle="rgba(80,70,60,.25)",e.lineWidth=1.5,e.beginPath(),e.arc(h,c,d,0,6.3),e.stroke(),e.fillStyle="rgba(60,50,40,.12)",e.fill()}return rn(t)}function Ep(){let[t,e]=Fe(512,512),i=e.createRadialGradient(256,256,20,256,256,250);i.addColorStop(0,"#fff1c8"),i.addColorStop(.8,"#f2c46e"),i.addColorStop(1,"#a8681e"),e.fillStyle=i,e.beginPath(),e.arc(256,256,246,0,6.3),e.fill(),e.lineWidth=14,e.strokeStyle="#2a1a0e",e.stroke(),e.fillStyle="#2a1a0e",e.font="700 54px Georgia, serif",e.textAlign="center",e.textBaseline="middle";let s=["XII","I","II","III","IIII","V","VI","VII","VIII","IX","X","XI"];for(let r=0;r<12;r++){let o=r/12*Math.PI*2;e.save(),e.translate(256+Math.sin(o)*186,256-Math.cos(o)*186),e.rotate(o),e.fillText(s[r],0,0),e.restore()}for(let r=0;r<60;r++){let o=r/60*Math.PI*2,a=r%5?10:20;e.lineWidth=r%5?3:6,e.beginPath(),e.moveTo(256+Math.sin(o)*236,256-Math.cos(o)*236),e.lineTo(256+Math.sin(o)*(236-a),256-Math.cos(o)*(236-a)),e.stroke()}return rn(t)}function Ap(){let[e,i]=Fe(128,160),s=i.createLinearGradient(0,0,0,160);s.addColorStop(0,"rgba(235,245,255,.95)"),s.addColorStop(.7,"rgba(200,220,255,.7)"),s.addColorStop(1,"rgba(200,220,255,0)"),i.fillStyle=s,i.beginPath(),i.moveTo(14,160),i.lineTo(14,60),i.arc(64,60,50,Math.PI,0),i.lineTo(114,160);for(let r=0;r<5;r++)i.quadraticCurveTo(114-r*20-10,134,114-(r+1)*20,160);i.fill(),i.fillStyle="#1a1830";for(let r of[46,82])i.beginPath(),i.ellipse(r,62,8,12,0,0,6.3),i.fill();return i.beginPath(),i.ellipse(64,92,9,7,0,0,6.3),i.fill(),new ei(e)}function Rp(){let[t,e]=Fe(256,256);e.strokeStyle="rgba(230,236,255,.8)",e.lineWidth=2;for(let s=0;s<12;s++){let r=s/12*6.283;e.beginPath(),e.moveTo(128,128),e.lineTo(128+Math.cos(r)*128,128+Math.sin(r)*128),e.stroke()}for(let s=14;s<128;s+=14){e.beginPath();for(let r=0;r<=12;r++){let o=r/12*6.283,a=s*(r%2?.93:1);e.lineTo(128+Math.cos(o)*a,128+Math.sin(o)*a)}e.stroke()}return new ei(t)}function Cp(n=0){let[e,i]=Fe(256,256);i.fillStyle="#000",i.fillRect(0,0,256,256),i.fillStyle="#ffb03a";let s=(r,o,a,l=1)=>{i.beginPath(),i.moveTo(r-a,o+a*.6*l),i.lineTo(r+a,o+a*.6*l),i.lineTo(r,o-a*.7*l),i.closePath(),i.fill()};s(84,100,26),s(172,100,26),i.beginPath(),i.moveTo(54,150);for(let r=0;r<=8;r++)i.lineTo(54+r*18.5,150+(r%2?30:8)+(n?6:0));return i.lineTo(202,190),i.quadraticCurveTo(128,236,54,190),i.closePath(),i.fill(),rn(e)}function Ac(n,t){let[e,i]=Fe(n,t),s=new ei(e);return s.colorSpace=Je,s.anisotropy=4,{c:e,g:i,t:s}}var q=null,Ot={};function Tr(){if(q)return q;let n=Ko(4),t=Ko(9,20),e=jo(7),i=jo(17,350,30,20),s=jo(27,140,18,16),r=jo(37,275,22,20),o=c=>new Ee({roughness:.9,metalness:0,...c}),a=(()=>{let[c,d]=Fe(64,256);for(let u=0;u<16;u++)d.fillStyle=u%2?"#f4efe6":"#d42f3a",d.beginPath(),d.moveTo(0,u*16-16),d.lineTo(64,u*16),d.lineTo(64,u*16+16),d.lineTo(0,u*16),d.fill();return rn(c)})(),l=(()=>{let[c,d]=Fe(256,256);d.translate(128,128);for(let u=0;u<6;u++){d.fillStyle=["#ff4f9a","#fff1f6","#7ad7ff","#fff1f6","#ffd23a","#fff1f6"][u],d.beginPath(),d.moveTo(0,0);for(let f=0;f<7;f+=.1){let m=f*18;d.lineTo(Math.cos(f+u*1.047)*m,Math.sin(f+u*1.047)*m)}d.lineTo(0,0),d.fill()}return rn(c)})();q={stone:o({map:n.map,normalMap:n.normal,color:"#b6b4c4"}),stoneWarm:o({map:t.map,normalMap:t.normal,color:"#c9b8a8"}),stoneDark:o({map:n.map,normalMap:n.normal,color:"#6e6c7c"}),timber:o({map:Qo(5)}),timberPink:o({map:Qo(15,"#b98d98","#2a1620")}),timberGreen:o({map:Qo(25,"#7f8b74","#1e2216")}),timberBlue:o({map:Qo(35,"#7c8796","#1a1d26")}),plank:o({map:Ec(6)}),plankGrey:o({map:Ec(16,[60,58,62])}),plankRed:o({map:Ec(26,[92,34,28])}),slate:o({map:e.map,normalMap:e.normal,color:"#9a98ae"}),slateRed:o({map:i.map,normalMap:i.normal}),slateGreen:o({map:s.map,normalMap:s.normal}),slateViolet:o({map:r.map,normalMap:r.normal}),trim:o({color:"#2a1d16"}),iron:o({color:"#1c1d22",metalness:.6,roughness:.5}),gold:o({color:"#c99a3e",metalness:.8,roughness:.35}),copper:o({color:"#3f7a66",metalness:.5,roughness:.45}),bone:o({color:"#e6dcc4",roughness:.7}),hedge:o({color:"#1f3a22",roughness:1}),grass:o({color:"#223a24"}),white:o({color:"#efe8dc"}),black:o({color:"#141216",roughness:.6}),ginger:o({color:"#8a4d26",roughness:.8}),icing:o({color:"#fff4ec",roughness:.5}),stripe:o({map:a,roughness:.4}),swirl:o({map:l,roughness:.4,side:je}),pumpkin:o({color:"#e0701c",roughness:.65}),stem:o({color:"#4a5a22"}),web:new Ve({map:Rp(),transparent:!0,opacity:.55,depthWrite:!1,side:je,fog:!0}),ghost:new Ve({map:Ap(),transparent:!0,opacity:.8,depthWrite:!1,side:je}),face:new Ve({map:Cp(0),transparent:!0,blending:hn,depthWrite:!1,color:"#ffb050"}),door:o({map:Pu(!1)}),doorLocked:o({map:Pu(!0)}),glowGreen:o({color:"#103a18",emissive:"#4cff6a",emissiveIntensity:1.2}),glowViolet:o({color:"#2a1440",emissive:"#b070ff",emissiveIntensity:1.1}),glowAmber:o({color:"#3a2008",emissive:"#ffae3a",emissiveIntensity:1.3}),gum:["#ff4f6a","#ffd23a","#58e070","#5ab4ff","#c070ff"].map(c=>o({color:c,roughness:.35,emissive:c,emissiveIntensity:.15}))};let h={};for(let c of["lit","green","violet","dark"])for(let d of[0,1]){let u=wp(c,!!d);h[c+d]=o(c==="dark"?{map:u,roughness:.3,metalness:.2}:{map:u,emissive:"#ffffff",emissiveMap:u,emissiveIntensity:1.25,roughness:.4})}return q.win=h,Ot.box=new zi(1,1,1),Ot.plane=new ni(1,1),Ot.cyl=new us(1,1,1,16),Ot.cyl6=new us(1,1,1,8),Ot.cone4=new Hi(1,1,4,1),Ot.cone=new Hi(1,1,18,1),Ot.sph=new ii(1,20,14),Ot.dome=new ii(1,24,12,0,Math.PI*2,0,Math.PI/2),Ot.prism=(()=>{let c=new Vi;c.moveTo(-.5,0),c.lineTo(.5,0),c.lineTo(0,1),c.closePath();let d=new ps(c,{depth:1,bevelEnabled:!1});return d.translate(0,0,-.5),d})(),Ot.pumpkin=(()=>{let c=new ii(1,28,16),d=c.attributes.position;for(let u=0;u<d.count;u++){let f=d.getX(u),m=d.getY(u),y=d.getZ(u),g=Math.atan2(y,f),p=1-.09*Math.pow(Math.abs(Math.cos(g*4)),.6);d.setXYZ(u,f*p,m*.72*(1-.12*Math.abs(m)),y*p)}return c.computeVertexNormals(),c})(),Ot.pin=new wo([[0,0],[.32,.05],[.42,.6],[.3,1.05],[.17,1.3],[.22,1.55],[.17,1.8],[0,1.86]].map(([c,d])=>new ct(c,d)),18),Ot.torus=new ki(1,.12,8,24),Ot.coffin=(()=>{let c=new Vi;c.moveTo(-.3,0),c.lineTo(.3,0),c.lineTo(.45,1.3),c.lineTo(.3,1.8),c.lineTo(-.3,1.8),c.lineTo(-.45,1.3),c.closePath();let d=new ps(c,{depth:.4,bevelEnabled:!1});return d.translate(0,0,-.2),d})(),Ot.tomb=(()=>{let c=new Vi;c.moveTo(-.5,0),c.lineTo(.5,0),c.lineTo(.5,.9),c.absarc(0,.9,.5,0,Math.PI,!1),c.closePath();let d=new ps(c,{depth:.18,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03,bevelSegments:1});return d.translate(0,0,-.09),d})(),q}var Rc=()=>Ot;function ee(n,t,e,i,s,r=1,o=1,a=1,l=0){let h=new Ft(n,t);return h.position.set(e,i,s),h.scale.set(r,o,a),h.rotation.y=l,h.castShadow=r*o*a>1.5,h.receiveShadow=!0,h}var Iu=class{constructor(t,e){this.g=new Ue,this.open=t,this.r=Tn(e),this.wins=[],this.faces=[],this.glows=[],this.smoke=[],this.props=[],this.anim=[],this.top=8}add(t){return this.g.add(t),t}box(t,e,i,s,r=0,o=0,a=0,l=0){return this.add(ee(Ot.box,s,r,o+e/2,a,t,e,i,l))}cyl(t,e,i,s=0,r=0,o=0,a){return this.add(ee(Ot.cyl,i,s,r+e/2,o,t,e,a??t))}gable(t,e,i,s,r,o=0,a=0,l=0){let h=this.add(ee(Ot.prism,s,o,r,a,t,e,i,l));return this.top=Math.max(this.top,r+e),h}pyramid(t,e,i,s,r=0,o=0,a){let l=this.add(ee(Ot.cone4,i,r,s+e/2,o,t*.72,e,(a??t)*.72));return l.rotation.y=Math.PI/4,this.top=Math.max(this.top,s+e),l}cone(t,e,i,s,r=0,o=0){let a=this.add(ee(Ot.cone,i,r,s+e/2,o,t,e,t));return this.top=Math.max(this.top,s+e),a}win(t,e,i,s,r,o,a,l="lit",h=0){let c=this.open?q.win[l+h]:q.win["dark"+h],d=new Ft(Ot.plane,c);d.scale.set(s,r,1);let u=.03;return t==="f"?d.position.set(e,i,a+u):t==="b"?(d.position.set(e,i,-a-u),d.rotation.y=Math.PI):t==="r"?(d.position.set(o+u,i,e),d.rotation.y=Math.PI/2):(d.position.set(-o-u,i,e),d.rotation.y=-Math.PI/2),this.add(d),this.open&&this.wins.push(d),d}winRow(t,e,i,s,r,o,a,l,h,c){let d;for(let u=0;u<e;u++)d=this.win(t,e===1?0:-s/2+s*u/(e-1),i,r,o,a,l,h,c);return d}door(t,e=1.6,i=2.7,s=0){let r=new Ft(Ot.plane,this.open?q.door:q.doorLocked);return r.scale.set(e,i,1),r.position.set(s,i/2,t+.04),this.add(r),this.box(e+.4,.25,.3,q.trim,s,i,t+.1),this.box(e+.8,.3,1.2,q.stoneDark,s,0,t+.5),this.doorPos=new A(s,0,t+1.4),r}chimney(t,e,i,s=2.4,r=q.stone,o="#9a9aa8"){this.box(.9,s,.9,r,t,i,e),this.box(1.1,.25,1.1,q.stoneDark,t,i+s,e),this.open&&this.smoke.push({p:new A(t,i+s+.3,e),col:o}),this.top=Math.max(this.top,i+s)}pumpkin(t,e,i=.7,s=!0,r=0){let o=this.add(ee(Ot.pumpkin,q.pumpkin,t,r+i*.7,e,i,i,i));if(o.rotation.y=this.r()*.5,this.add(ee(Ot.cyl,q.stem,t,r+i*1.38,e,.07*i*1.4,.35*i,.07*i*1.4)),s&&this.open){let a=new Ft(Ot.plane,q.face);a.scale.setScalar(i*1.25),a.position.set(t,r+i*.72,e+i*.99),a.renderOrder=2,this.add(a),this.faces.push(a)}return o}ghostPeek(t,e,i,s,r,o=1.2){let a=new Ft(Ot.plane,q.ghost);a.scale.set(o,o*1.25,1);let l=.18;return t==="f"?a.position.set(e,i,r+l):t==="r"?(a.position.set(s+l,i,e),a.rotation.y=Math.PI/2):(a.position.set(-s-l,i,e),a.rotation.y=-Math.PI/2),this.add(a),this.anim.push({o:a,k:"bob",y:i,ph:this.r()*6}),a}tomb(t,e,i=1,s=0){let r=this.add(ee(Ot.tomb,q.stoneDark,t,0,e,i,i,i,s));return r.rotation.z=(this.r()-.5)*.15,r}fence(t,e,i,s){let r=Math.max(2,Math.round(Math.hypot(i-t,s-e)/.5));for(let l=0;l<=r;l++){let h=l/r;this.add(ee(Ot.box,q.iron,t+(i-t)*h,.6,e+(s-e)*h,.08,1.2,.08))}let o=Math.hypot(i-t,s-e),a=this.add(ee(Ot.box,q.iron,(t+i)/2,1.05,(e+s)/2,o,.06,.06));a.rotation.y=-Math.atan2(s-e,i-t)}},Lu={candyShop(n){n.box(4.6*2,5.2,3.8*2,q.timberPink),n.gable(4.6*2+.8,3.4,3.8*2+.8,q.slateRed,5.2),n.door(3.8),n.winRow("f",2,3,5.4,1.5,1.8,4.6,3.8),n.winRow("l",2,3,4,1.2,1.6,4.6,3.8),n.winRow("r",2,3,4,1.2,1.6,4.6,3.8);for(let s of[-1.4,1.4])n.cyl(.2,3,q.stripe,s,0,3.8+1.3);n.box(3.6,.25,1.8,q.slateRed,0,3,3.8+.7);let i=n.add(ee(Ot.cyl,q.swirl,0,10.4,.2,1.5,.25,1.5));return i.rotation.x=Math.PI/2,n.cyl(.12,2.4,q.white,0,7.2,.2),n.anim.push({o:i,k:"spinZ"}),n.top=12,n.chimney(-2.6,-1.4,6,1.6),n.pumpkin(2.6,3.8+1.4,.55),{hw:4.6,hd:3.8}},ghostInn(n){n.box(4.4*2,3.6,3.8*2,q.stone);let i=n.box(4.4*2+.6,3.4,3.8*2+.6,q.timber,0,3.6);i.rotation.z=.025,n.gable(4.4*2+1.2,3.6,3.8*2+1.2,q.slate,7),n.door(3.8),n.winRow("f",2,2,5,1.3,1.5,4.4,3.8),n.winRow("f",3,5.3,6,1.1,1.4,4.4+.3,3.8+.3),n.winRow("l",2,5.3,4,1.1,1.4,4.4+.3,3.8+.3),n.winRow("r",2,5.3,4,1.1,1.4,4.4+.3,3.8+.3),n.open&&(n.ghostPeek("f",-3,5.4,4.4+.3,3.8+.3,1),n.ghostPeek("f",3,5.4,4.4+.3,3.8+.3,1)),n.box(.12,1.4,.12,q.iron,2.6,3.1,3.8+1.2),n.box(1.2,.1,.1,q.iron,2.2,4.4,3.8+1.2);let s=n.box(1.1,.8,.1,q.plank,2,3.5,3.8+1.2);return n.anim.push({o:s,k:"swing"}),n.chimney(2.4,-1.2,8.4,2),n.pumpkin(-2.4,3.8+1.2,.5),{hw:4.4,hd:3.8}},apothecary(n){n.cyl(3.6,8.4,q.stoneWarm),n.cone(3.6+.7,5.6,q.slateGreen,8.4),n.door(3.6-.15,1.5,2.6),n.box(3.6*2+.4,.4,.3,q.trim,0,2.95,0).visible=!1;for(let e=0;e<5;e++){let i=(e-2)*.62,s=n.win("f",0,e%2?6:3.6,1,1.5,3.6,3.6,"green",1);s.position.set(Math.sin(i)*(3.6+.04),e%2?6:3.9,Math.cos(i)*(3.6+.04)),s.rotation.y=i,e===2&&(s.position.y=6.4)}for(let e=0;e<4;e++){let i=[q.glowGreen,q.glowViolet,q.glowAmber,q.glowGreen][e];n.cyl(.18+e*.03,.5+e*.12,n.open?i:q.stoneDark,-2.6+e*.5,0,3.6+.9)}return n.cyl(.9,.8,q.iron,2.4,0,3.6+1.1,.7),n.chimney(1.6,-1.4,8,3,q.stone,"#6cff8a"),{hw:3.6,hd:3.6}},porchHouse(n){n.box(4.2*2,5,3.6*2,q.plankGrey),n.gable(4.2*2+.8,3,3.6*2+.8,q.slate,5),n.door(3.6,1.5,2.6),n.winRow("f",2,2.8,5,1.3,1.6,4.2,3.6),n.winRow("l",1,3,0,1.3,1.6,4.2,3.6),n.winRow("r",1,3,0,1.3,1.6,4.2,3.6),n.box(4.2*2+.4,.2,2.4,q.plank,0,2.9,3.6+1.2);for(let i of[-4.2,-1.3,1.3,4.2])n.cyl(.12,2.9,q.white,i,0,3.6+2.2);n.box(4.2*2,.3,2.4,q.plank,0,0,3.6+1.2);for(let[i,s]of[[-2.8,.5],[-1.9,.38],[2.2,.55],[3.1,.4]])n.pumpkin(i,3.6+2.9,s);return n.chimney(-2.2,-1,6,1.8),{hw:4.2,hd:3.6}},mansion(n){return n.box(6.4*2,8,4.4*2,q.stone),n.gable(6.4*2+.8,3.8,4.4*2+.8,q.slateViolet,8),n.box(3.6,12,3.6,q.stone,0,0,4.4-.6),n.pyramid(4.6,6,q.slateViolet,12,0,4.4-.6),n.door(4.4+1.2,1.8,3),n.winRow("f",2,3,8.4,1.3,2,6.4,4.4,"lit",1),n.winRow("f",2,6.2,8.4,1.3,2,6.4,4.4,"lit",1),n.win("f",0,6.5,1.2,1.9,1.8,4.4+1.2,"violet",1),n.win("f",0,9.8,1,1.5,1.8,4.4+1.2,"lit",1),n.winRow("l",2,4.5,4.4,1.2,1.9,6.4,4.4,"lit",1),n.winRow("r",2,4.5,4.4,1.2,1.9,6.4,4.4,"lit",1),n.chimney(-4.2,-1.5,10,2.5),n.chimney(4.2,-1.5,10,2.5),n.fence(-6.4,4.4+3.2,-1.6,4.4+3.2),n.fence(1.6,4.4+3.2,6.4,4.4+3.2),n.pumpkin(-2.2,4.4+2.4,.45),n.pumpkin(2.2,4.4+2.4,.45),{hw:6.4,hd:4.4+.4}},belfry(n){n.box(3.2*2,9,3.2*2,q.plankRed);for(let[s,r]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.box(.4,3.2,.4,q.plank,s*(3.2-.3),9,r*(3.2-.3));n.pyramid(3.2*2+1.2,4.2,q.slate,12.2),n.box(3.2*2+.2,.3,3.2*2+.2,q.trim,0,9,0);let i=n.add(ee(Ot.cone,q.gold,0,10.6,0,.9,1.3,.9));return n.anim.push({o:i,k:"bell"}),n.door(3.2,1.8,3.2),n.winRow("f",2,6,3.4,1,1.6,3.2,3.2,"lit",1),n.winRow("l",1,5,0,1,1.6,3.2,3.2,"lit",1),n.box(1.4,1.4,.1,q.plank,0,5.4,3.2+.05),n.batRoost=new A(0,13,0),n.pumpkin(2.2,3.2+1,.5),{hw:3.2,hd:3.2}},webTower(n){n.cyl(2.8,13,q.stoneDark),n.cyl(2.8+.4,.6,q.stone,0,13),n.cone(2.8+.9,6,q.slate,13.6),n.door(2.8-.1,1.4,2.6);for(let i of[5,8.5,11.5]){let s=n.win("f",0,i,.9,1.4,2.8,2.8,"violet",1);s.position.z=2.8+.02}for(let[i,s,r,o,a]of[[2.8-.2,9,2.8-.2,Math.PI/4,4],[-2.8+.1,5,2.8-.4,-Math.PI/4,3.4],[0,13.4,2.8+.4,0,3]]){let l=new Ft(Ot.plane,q.web);l.scale.setScalar(a),l.position.set(i,s,r),l.rotation.y=o,n.add(l)}n.cyl(.012,4,q.white,1.6,7.2,2.8+1.2);let e=n.add(ee(Ot.sph,q.black,1.6,7,2.8+1.2,.45,.38,.45));n.anim.push({o:e,k:"spider",y:7});for(let i=0;i<8;i++){let s=n.add(ee(Ot.box,q.black,1.6+(i<4?-1:1)*.45,7,4+(i%4-1.5)*.18,.6,.05,.05));s.rotation.z=(i<4?1:-1)*.5,e.attach(s)}return{hw:2.8,hd:2.8}},pumpkinShed(n){n.box(3.6*2,4,6,q.plank);let i=n.box(3.6*2+1,.3,6+1.4,q.slateGreen,0,4.4);i.rotation.x=.22,n.top=6,n.door(3,1.6,2.6),n.winRow("l",1,2.4,0,1.2,1.2,3.6,3),n.winRow("f",1,2.5,0,1,1,3.6,3).position.x=2.3;let s=[[-3,4.6,.9],[-1.4,5.6,.6],[1.5,5,.75],[3.1,5.8,1.1],[-4.6,2,.7],[4.8,1,.8],[-3.8,6.4,.5],[.4,6.8,.55],[4.6,3.4,.5]];for(let[o,a,l]of s)n.pumpkin(o,a,l,l>.6);n.cyl(.08,2.6,q.plank,-5,0,4.2),n.box(1.6,.1,.1,q.plank,-5,2.1,4.2);let r=n.add(ee(Ot.sph,q.pumpkin,-5,2.9,4.2,.4,.36,.4));return n.anim.push({o:r,k:"swing"}),{hw:3.6,hd:3+.6}},pianoManor(n){n.box(5.6*2,7,8,q.stoneWarm),n.gable(5.6*2+.8,3.6,8+.8,q.slate,7.3),n.door(4,1.8,3);for(let s=0;s<22;s++)n.box(.48,.9,.2,q.white,-5.6+.26+s*.51,6.4,4+.1);for(let s=0;s<22;s++)[1,2,4,5,6].includes(s%7)&&n.box(.28,.55,.24,q.black,-5.6+.52+s*.51,6.6,4+.14);n.winRow("f",2,3.2,7,1.2,2.2,5.6,4,"lit",1);let i=n.win("f",0,9,1.6,1.6,5.6,4+.4,"violet",1);i.position.z=4+.45;for(let s=0;s<5;s++)n.cyl(.22,4+s*.9,q.gold,5.6+.5,0,-2+s*.55);return n.winRow("l",2,3.6,4,1.1,2,5.6,4,"lit",1),n.chimney(-3.6,-1.6,9,2),n.pumpkin(-2.6,4+1.1,.5),{hw:5.6+.6,hd:4}},boneChapel(n){n.box(3.4*2,6,10,q.stone),n.gable(3.4*2+.7,4.6,10+.6,q.slate,6),n.box(1.8,3,1.8,q.stone,0,9.6,5-1.2),n.pyramid(2.4,4,q.slate,12.6,0,5-1.2),n.door(5,1.6,3),n.win("f",0,7.3,1.3,1.8,3.4,5,"violet",1),n.winRow("l",3,3.2,6,.9,2,3.4,5,"lit",1),n.winRow("r",3,3.2,6,.9,2,3.4,5,"lit",1);for(let[s,r,o]of[[-4.6,3,.3],[-5,0,.1],[-4.4,-3,-.2],[4.6,2.5,-.2],[5,-.5,.2],[4.5,-3.5,.1]])n.tomb(s,r,.9,o+Math.PI/2*Math.sign(s));let i=n.add(ee(Ot.torus,q.bone,0,0,8,2.2,2.6,1.2));i.scale.z=1;for(let s of[-2.2,2.2]){let r=n.add(ee(Ot.sph,q.bone,s,.2,8,.35,.3,.35))}return{hw:3.4,hd:5}},labTower(n){n.box(3.2*2,12,3.2*2,q.stoneDark),n.box(3.2*2+.6,.5,3.2*2+.6,q.stone,0,12);for(let[s,r]of[[-1,-1],[1,-1],[-1,1],[1,1]])n.box(.9,.9,.9,q.stone,s*(3.2-.1),12.5,r*(3.2-.1));n.door(3.2,1.6,2.8);for(let s of[4,7.2,10.2])n.win("f",0,s,1.1,1.7,3.2,3.2,"green",1);n.winRow("l",2,8,3,.9,1.4,3.2,3.2,"green",1),n.winRow("r",2,8,3,.9,1.4,3.2,3.2,"green",1),n.cyl(.35,2.4,q.copper,0,12.5);for(let s=0;s<4;s++){let r=n.add(ee(Ot.torus,q.copper,0,13.2+s*.45,0,.9-s*.14,.9-s*.14,1.6));r.rotation.x=Math.PI/2}let i=n.add(ee(Ot.sph,n.open?q.glowViolet:q.iron,0,15.3,0,.55,.55,.55));return n.top=16,n.coilTop=new A(0,15.3,0),n.anim.push({o:i,k:"pulse"}),{hw:3.2,hd:3.2}},crypt(n){n.box(4.2*2,5,3.8*2,q.stone),n.box(4.2*2+.8,.5,3.8*2+2.4,q.stoneDark,0,5,.8),n.gable(4.2*2+.8,2.2,3.8*2+2.4,q.stone,5.5,0,.8);for(let i of[-3.2,-1.2,1.2,3.2])n.cyl(.36,5,q.stoneWarm,i,0,3.8+1.4);if(n.door(3.8,2,3.2),n.open){let i=n.box(2,3.2,.05,q.glowGreen,0,0,3.82);i.scale.x=1.7}for(let[i,s,r,o]of[[-5.4,0,1,0],[-5.4,.4,1,0],[5.6,0,-1,.3],[-5.3,0,-1.6,-.2]]){let a=n.add(ee(Ot.coffin,q.plank,i,s,r,1,1,1,Math.PI/2));a.rotation.z=o}return n.tomb(-3.6,3.8+3.4,.8,0),n.tomb(3.8,3.8+3.6,.9,0),{hw:4.2,hd:3.8+1.6}},witchCottage(n){let i=n.box(7.2,4.4,6.4,q.timberGreen);i.rotation.z=-.03;let s=n.add(ee(Ot.cyl,q.black,0,4.5,0,5.6,.2,5.2)),r=n.cone(3.6,7.5,q.black,4.6);r.rotation.z=.12,r.position.x=.5,n.add(ee(Ot.cyl,q.glowViolet,0,5.2,0,3.66,.5,3.66)),n.top=12,n.door(3.2,1.5,2.5),n.winRow("f",1,2.6,0,1.1,1.3,3.6,3.2,"green",1).position.x=2.2,n.winRow("l",1,2.6,0,1.1,1.3,3.6,3.2,"violet",1),n.cyl(1,1.1,q.iron,-2.8,0,3.2+1.6,.8),n.open&&n.smoke.push({p:new A(-2.8,1.3,3.2+1.6),col:"#7cff9a"});let o=n.add(ee(Ot.cyl,q.plank,2.9,1.3,3.2+.25,.06,2.8,.06));return o.rotation.z=.35,{hw:3.6+.4,hd:3.2}},golfCrypt(n){n.box(3.2*2,4.2,2.8*2,q.stone),n.gable(3.2*2+.6,2.4,2.8*2+.6,q.slateGreen,4.2),n.door(2.8,1.5,2.6),n.winRow("l",1,2.4,0,1,1.2,3.2,2.8),n.winRow("r",1,2.4,0,1,1.2,3.2,2.8);let i=n.add(ee(Ot.dome,q.grass,3.4,0,2.8+3.2,3,.5,2.6));n.cyl(.05,3.2,q.white,3.8,0,2.8+3.2);let s=n.box(1.1,.7,.04,q.slateRed,4.36,2.4,2.8+3.2);n.anim.push({o:s,k:"flag"}),n.add(ee(Ot.cyl,q.black,3.8,.44,2.8+3.2,.3,.08,.3));for(let[r,o]of[[-4.2,3.6],[-2.4,4.8],[-4.6,1],[5.4,0]])n.tomb(r,o,.8,(n.r()-.5)*.5);return n.add(ee(Ot.sph,q.white,2.6,.55,2.8+4,.12,.12,.12)),{hw:3.2,hd:2.8}},bakery(n){n.box(8,5,3.4*2,q.ginger),n.gable(9,3.4,3.4*2+1,q.icing,5),n.door(3.4,1.5,2.6),n.winRow("f",2,3,4.8,1.3,1.5,4,3.4,"lit",1),n.winRow("l",1,3,0,1.3,1.5,4,3.4,"lit",1);for(let i=0;i<12;i++)n.add(ee(Ot.sph,q.gum[i%5],-4+.4+i*(8-.8)/11,5.1,3.4+.5,.3,.3,.3));for(let i=0;i<6;i++)n.add(ee(Ot.sph,q.gum[(i+2)%5],(i%2?1:-1)*(1+i*.3),5.4+(5-i)*.45,(i%3-1)*1.6,.32,.32,.32));for(let i of[-4-.1,4+.1])n.cyl(.2,5,q.stripe,i,0,3.4+.1);return n.chimney(2.4,-1,6.5,1.6,q.icing),{hw:4,hd:3.4}},catHouse(n){n.box(3.8*2,5.6,3.4*2,q.timberBlue),n.gable(3.8*2+.8,3.2,3.4*2+.8,q.black,5.6);for(let s of[-2.4,2.4]){let r=n.add(ee(Ot.cone4,q.black,s,8.9,.4,.9,1.6,.5));r.rotation.y=Math.PI/4}n.top=10,n.door(3.4,1.4,2.4);for(let s of[-1.6,1.6]){let r=n.win("f",s,4.1,1.5,1.2,3.8,3.4,"lit",0);n.open&&(r.material=q.win.lit0);let o=n.box(.25,1,.05,q.black,s,3.6,3.4+.06)}let i=n.add(ee(Ot.torus,q.black,-3.8-.1,5.8,-1,1,1,1));return i.rotation.y=Math.PI/2,i.scale.set(1.2,1.2,2.2),n.pumpkin(2.6,3.4+1.1,.45),{hw:3.8+.3,hd:3.4}},library(n){n.box(10,7,3.8*2,q.stone),n.gable(10+.8,3,3.8*2+.8,q.slateRed,7),n.door(3.8,1.8,3);for(let s of[-2.4,-.8,.8,2.4])Math.abs(s)>1&&n.cyl(.3,6,q.white,s,0,3.8+.6);n.winRow("f",2,4.8,7.2,1.2,2.2,5,3.8,"lit",1),n.winRow("l",2,4,4,1.2,2.2,5,3.8,"lit",1),n.winRow("r",2,4,4,1.2,2.2,5,3.8,"lit",1);let i=n.add(ee(new ki(.8,.22,10,24,Math.PI*1.4),n.open?q.glowAmber:q.stoneDark,0,11.6,0,1,1,1));i.rotation.z=-.9,n.add(ee(Ot.box,n.open?q.glowAmber:q.stoneDark,.1,10.4,0,.4,.7,.4)),n.add(ee(Ot.sph,n.open?q.glowAmber:q.stoneDark,.1,9.6,0,.25,.25,.25)),n.top=12.6,n.anim.push({o:i,k:"bob",y:11.6,ph:0});for(let s=0;s<5;s++)n.box(1.4,.35,1,q.gum[s],-4.4+s%2*.2,s*.35,3.8+1.4);return{hw:5,hd:3.8+.4}},observatory(n){n.cyl(4,5.5,q.stoneWarm),n.add(ee(Ot.dome,q.copper,0,5.5,0,4+.2,4+.2,4+.2)),n.top=10;let e=n.box(1,4,.3,q.black,0,5.6,4-.7);e.rotation.x=-.5;let i=n.add(ee(Ot.cyl,q.gold,0,8.6,2.4,.35,3.6,.35));i.rotation.x=-.9,n.door(4-.2,1.5,2.6);for(let a of[-.8,.8]){let l=n.win("f",0,3,1,1.5,4,4,"lit",1);l.position.set(Math.sin(a)*(4+.04),3,Math.cos(a)*(4+.04)),l.rotation.y=a}let s=new Ue;s.position.set(-4-1.4,0,4-.4),n.add(s);let r=ee(Ot.sph,q.stoneDark,0,1.1,0,.6,.9,.5),o=ee(Ot.cone4,q.stoneDark,0,2.3,.2,.35,1,.35);return o.rotation.x=-.5,s.add(r,o),{hw:4,hd:4}},hedgeManor(n){n.box(10,7,3.8*2,q.stoneWarm),n.gable(10+.8,3.4,3.8*2+.8,q.slate,7),n.door(3.8,1.6,2.8),n.winRow("f",3,4.6,7,1.1,1.8,5,3.8,"lit",1),n.winRow("l",2,4,4,1.1,1.8,5,3.8,"lit",1);for(let[i,s,r,o]of[[-4.8,6.2,4.4,1],[4.8,6.2,4.4,1],[-6.6,2.5,1,6.4],[6.6,2.5,1,6.4]])n.box(r,2,o,q.hedge,i,0,s);for(let i of[-2.6,2.6])n.add(ee(Ot.sph,q.hedge,i,2.4,6.2,.8,.8,.8));return n.open&&n.ghostPeek("r",1,3.8,5,3.8,1.1),n.chimney(3,-1.4,9,1.8),{hw:5+1.6,hd:3.8+2.8}},bowlingBarn(n){n.box(4.2*2,5,5.4*2,q.plankRed),n.gable(4.2*2+.8,4,5.4*2+.6,q.slate,5),n.door(5.4,2.4,3.4),n.win("f",0,6.6,1.2,1.2,4.2,5.4,"lit",1),n.winRow("l",3,2.8,7,1,1.2,4.2,5.4),n.winRow("r",3,2.8,7,1,1.2,4.2,5.4);for(let[i,s]of[[-3,0],[-3.5,.6],[-2.5,.6],[-4,1.2],[-3,1.2],[-2,1.2]])n.add(ee(Ot.pin,q.bone,i-2.4,0,5.4+1.6+s,.9,.9,.9));return n.pumpkin(4.2,5.4+1.8,.7),{hw:4.2,hd:5.4}},memoryCrypt(n){n.box(4.4*2,5.4,3.6*2,q.stone),n.pyramid(4.4*2+1,3.6,q.slateViolet,5.4,0,0,3.6*2+1),n.door(3.6,1.7,3);for(let i of[-3.2,3.2])n.cyl(.45,5.4,q.stoneWarm,i,0,3.6+.4),n.box(1.2,.4,1.2,q.stoneDark,i,5.4,3.6+.4);n.box(4.4*2+.6,.5,1.4,q.stoneDark,0,5.4,3.6+.3),n.winRow("l",2,3.2,3.6,1,1.6,4.4,3.6,"violet",1),n.winRow("r",2,3.2,3.6,1,1.6,4.4,3.6,"violet",1),n.win("f",0,6.9,1.4,1.4,4.4,3.6+.5,"violet",1);for(let i=0;i<6;i++){let s=-3+i%3*3,r=3.6+3+Math.floor(i/3)*2,o=n.tomb(s,r,.8,0);n.open&&(i===1||i===5)&&(o.material=q.glowViolet)}return n.open&&(n.ghostPeek("f",-3.3,4.2,4.4,3.6+.9,1),n.ghostPeek("f",3.3,4.2,4.4,3.6+.9,1)),n.top=10,{hw:4.4+.2,hd:3.6+5}},smashPatch(n){n.box(4.6*2,4.6,8,q.plankGrey),n.gable(4.6*2+.8,3.8,8+.8,q.slateRed,4.6),n.door(4,2.6,3.2),n.win("f",0,6.1,1.3,1.1,4.6,4,"lit",1),n.win("f",-3.1,2.4,1.3,1.4,4.6,4,"lit",0),n.win("f",3.1,2.4,1.3,1.4,4.6,4,"lit",0),n.winRow("l",2,2.6,4,1.2,1.3,4.6,4),n.winRow("r",2,2.6,4,1.2,1.3,4.6,4);for(let[s,r,o]of[[-3.4,4+1.4,.75],[-4.2,4+2.4,.6],[-2.6,4+2.6,.55],[3.4,4+1.5,.7],[4.1,4+2.6,.55],[-3.5,4+1.9,.5,1.1]])n.pumpkin(s,r,o,!0,0);let i=n.pumpkin(0,.3,1.4,!1,7.4);n.top=11.6;for(let s of[-1.6,1.6]){let r=n.box(.25,.25,1.2,q.pumpkin,s*1.6,0,7.6);r.rotation.y=s}return{hw:4.6,hd:4+2.4}},broomSpire(n){n.cyl(3.2,9.5,q.timberGreen),n.cone(3.2+1.1,6.5,q.slateViolet,9.5),n.door(3.2-.2,1.5,2.6);for(let[o,a]of[[-.7,4],[.7,4],[0,7.2]]){let l=n.win("f",0,a,1,1.4,3.2,3.2,"green",1);l.position.set(Math.sin(o)*(3.2+.04),a,Math.cos(o)*(3.2+.04)),l.rotation.y=o}for(let o of[-2.4,2.4]){let a=n.cyl(.08,3.4,q.plank,o,0,4.1000000000000005);a.rotation.z=o>0?-.25:.25,n.cyl(.35,.9,q.gold,o+(o>0?.8:-.8),2.6,3.2+.9,.12)}let e=new Ue,i=ee(Ot.cyl,q.plank,0,0,0,.08,3,.08);i.rotation.z=Math.PI/2;let s=ee(Ot.cyl,q.gold,-1.7,0,0,.12,.8,.35);s.rotation.z=Math.PI/2,e.add(i,s);let r=new Ue;return r.position.y=12,e.position.set(5.2,0,0),r.add(e),n.add(r),n.anim.push({o:r,k:"spinY"}),n.top=16,{hw:3.2+.4,hd:3.2+1.4}}},nw=Object.keys(Lu);function Pp(n,t,e=1){Tr();let i=new Iu(t,e),s=(Lu[n]||Lu.porchHouse)(i);return i.doorPos||(i.doorPos=new A(0,0,s.hd+1.4)),{group:i.g,hw:s.hw,hd:s.hd,top:i.top,wins:i.wins,faces:i.faces,smoke:i.smoke,anim:i.anim,door:i.doorPos,batRoost:i.batRoost,coilTop:i.coilTop}}function Du(n=1){Tr();let t=new Ue,e=ee(Ot.pumpkin,q.pumpkin,0,n*.7,0,n,n,n),i=ee(Ot.cyl,q.stem,0,n*1.38,0,.1*n,.35*n,.1*n),s=new Ft(Ot.plane,q.face);return s.scale.setScalar(n*1.25),s.position.set(0,n*.72,n*.99),t.add(e,i,s),t.face=s,t}var Er={low:{dpr:1,shadows:!1,shadowSize:512,bloom:.8,lights:2,mist:10,parts:.45,aa:!1},mid:{dpr:1.25,shadows:!0,shadowSize:1024,bloom:1,lights:6,mist:18,parts:.75,aa:!0},high:{dpr:1.6,shadows:!0,shadowSize:2048,bloom:1,lights:10,mist:26,parts:1,aa:!0},ultra:{dpr:2,shadows:!0,shadowSize:2048,bloom:1.05,lights:14,mist:34,parts:1.25,aa:!0}},bs=new A(0,120,-700),ts={x:0,z:0,hw:4.6,clockY:25,clockZ:3.95,boardY:20.3},Nu=38,Yv=60;function Uu(n){if(n<12){let e=Math.floor(n/2),i=n%2?1:-1;return{x:i*18.5,z:112-e*17,ry:-i*Math.PI/2,street:!0}}if(n>=20){let e=[148,180,212][(n-20)%3]*Math.PI/180,i=Yv;return{x:i*Math.sin(e),z:i*Math.cos(e),ry:e+Math.PI,street:!1,bonus:!0,r:i}}let t=[58,94,130,166,194,230,266,302][(n-12)%8]*Math.PI/180;return{x:Nu*Math.sin(t),z:Nu*Math.cos(t),ry:t+Math.PI,street:!1}}function Cc(n,t){n.updateMatrixWorld(!0);let e=new Map,i=[];n.traverse(r=>{if(!r.isMesh||t.has(r)||r.material.transparent)return;let o=r.parent,a=!1;for(;o&&o!==n;)t.has(o)&&(a=!0),o=o.parent;if(a)return;let l=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();l.applyMatrix4(r.matrixWorld);for(let c of Object.keys(l.attributes))["position","normal","uv"].includes(c)||l.deleteAttribute(c);let h=r.material.uuid+(r.castShadow?"s":"");e.has(h)||e.set(h,{m:r.material,cs:r.castShadow,gs:[]}),e.get(h).gs.push(l),i.push(r)});for(let r of i)r.parent.remove(r);let s=new xe().copy(n.matrixWorld).invert();for(let{m:r,cs:o,gs:a}of e.values()){let l=vp(a,!1);if(!l)continue;l.applyMatrix4(s);let h=new Ft(l,r);h.castShadow=o,h.receiveShadow=!0,h.matrixAutoUpdate=!1,n.add(h)}}function Ip(n,t,e,i,s=7){let r=Tn(s),o=new oo,a={scene:o,houses:[],colliders:[],lanterns:[],flick:[],ghosts:[],bats:[],mist:[],candies:[],smoke:[],anim:[],t:0,flash:0,ignite:1,calm:!1};Tr();let l=Rc();o.fog=new ro("#161c30",.0062);let h={moonDir:{value:bs.clone().normalize()},flash:{value:0},time:{value:0}},c=new Ft(new ii(950,48,24),new Ie({side:nn,depthWrite:!1,fog:!1,uniforms:h,vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); gl_Position.z = gl_Position.w; }",fragmentShader:`uniform vec3 moonDir; uniform float flash, time; varying vec3 vD;
      float h(vec3 p){ p = fract(p * 0.3183099 + .1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
      void main(){ vec3 d = normalize(vD); float y = clamp(d.y, -0.2, 1.0);
        vec3 col = mix(vec3(.105,.12,.21), vec3(.025,.03,.075), smoothstep(0.0, .55, y)); col = mix(vec3(.13,.13,.2), col, smoothstep(-.05, .08, y));
        float m = clamp(dot(d, moonDir), -1.0, 1.0); float ang = acos(m); col += vec3(.2,.22,.36) * exp(-max(ang - .056, 0.0) / .035) + vec3(.07,.07,.14) * exp(-ang / .4);
        vec3 c = floor(d * 260.0); float s = h(c); float st = step(.9965, s) * smoothstep(.02, .25, y) * (.55 + .45 * sin(time * (1.5 + s * 4.0) + s * 60.0)); col += vec3(.75,.78,.9) * st * smoothstep(.06, .2, ang);
        col += vec3(.28,.32,.5) * flash * (.4 + .6 * smoothstep(-.1, .5, y));
        gl_FragColor = vec4(min(col, vec3(.86)), 1.0); }`}));c.renderOrder=-10,o.add(c),a.skyU=h;let d=Cu(),u=Mp(3);a.soft=d;let f=new Ft(new hs(46,64),new Ve({map:Tp(),transparent:!0,fog:!1,depthWrite:!1,color:"#e8e2cf"}));f.position.copy(bs),f.lookAt(0,30,120),f.renderOrder=-9,o.add(f),a.moon=f;let m=new Mn(new _n({map:d,color:"#5d6aa8",transparent:!0,opacity:.55,depthWrite:!1,fog:!1,blending:hn}));m.scale.setScalar(210),m.position.copy(bs).multiplyScalar(1.01),m.renderOrder=-8,o.add(m),a.halo=m,a.clouds=[];for(let tt=0;tt<7;tt++){let I=new Mn(new _n({map:u,color:"#2a3050",transparent:!0,opacity:.42,depthWrite:!1,fog:!1}));I.scale.set(260+r()*260,70+r()*60,1),I.position.set(-500+r()*1e3,80+r()*150,-640-r()*120),I.renderOrder=-7,o.add(I),a.clouds.push(I)}{let tt=[];for(let at=0;at<=96;at++){let lt=at/96*Math.PI*2;tt.push(lt)}let I=new Se,B=[],ot=[],gt=560;for(let at=0;at<=96;at++){let lt=at/96*Math.PI*2,pt=30+40*Math.abs(Math.sin(lt*3.1+1))+22*Math.sin(lt*7.3)+10*Math.sin(lt*17);if(B.push(Math.sin(lt)*gt,-5,Math.cos(lt)*gt,Math.sin(lt)*gt,Math.max(8,pt),Math.cos(lt)*gt),at<96){let Ut=at*2;ot.push(Ut,Ut+2,Ut+1,Ut+1,Ut+2,Ut+3)}}I.setAttribute("position",new ue(B,3)),I.setIndex(ot);let ft=new Ft(I,new Ve({color:"#0b0d18",side:je,fog:!1}));ft.renderOrder=-6,o.add(ft);let Rt=new Hi(1,1,6),Kt=new uo(Rt,new Ee({color:"#0d1410",roughness:1}),260),$=new xe,rt=new Pn;for(let at=0;at<260;at++){let lt,pt,Ut,Tt,Lt=0;do lt=r()*Math.PI*2,pt=95+r()*150,Ut=Math.sin(lt)*pt,Tt=Math.cos(lt)*pt;while(Lt++<40&&Math.abs(Ut)<44+Math.max(0,Tt-140)*.35&&Tt>-20);let Dt=10+r()*16;$.compose(new A(Ut,Dt/2-.5,Tt),rt,new A(3+r()*3,Dt,3+r()*3)),Kt.setMatrixAt(at,$)}o.add(Kt)}let y=new Eo("#5a6aa0","#2a2218",.75);o.add(y),a.hemi=y;let g=new pr("#a8b8ff",1.25);g.position.copy(bs).normalize().multiplyScalar(160).add(new A(30,0,40)),g.target.position.set(0,0,40),o.add(g,g.target),a.moonL=g,g.castShadow=t.shadows,g.shadow.mapSize.set(t.shadowSize,t.shadowSize);let p=g.shadow.camera;p.left=-95,p.right=95,p.top=95,p.bottom=-95,p.near=10,p.far=400,g.shadow.bias=-6e-4,g.shadow.normalBias=.04;let S=new pr("#6a78b8",.85);S.position.set(60,50,160),S.target.position.set(0,0,30),o.add(S,S.target),a.fill=S;let R=new ms("#ff9a40",60,55,1.6);R.position.set(0,9,8),o.add(R),a.towerGlow=R;let M=new Ft(new ni(1400,1400),new Ee({map:bp(8),roughness:1,color:"#9aa69a"}));M.material.map.repeat.set(160,160),M.rotation.x=-Math.PI/2,M.receiveShadow=!0,o.add(M);let w=Sp(21),b=(tt,I)=>{let B=new Ee({map:w.map.clone(),normalMap:w.normal.clone(),roughness:.85,color:"#b4b0c0",polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});return B.map.repeat.set(tt,I),B.normalMap.repeat.set(tt,I),B.map.needsUpdate=B.normalMap.needsUpdate=!0,B},C=new Ft(new ni(16,118),b(4,30));C.rotation.x=-Math.PI/2,C.position.set(0,.02,75),C.receiveShadow=!0,o.add(C);let x=new Ft(new hs(27,64),b(9,9));x.rotation.x=-Math.PI/2,x.position.y=.025,x.receiveShadow=!0,o.add(x);let E=new Ee({color:"#3a3844",roughness:.9});for(let tt of[-8.2,8.2]){let I=new Ft(l.box,E);I.scale.set(.4,.18,104),I.position.set(tt,.09,80),I.receiveShadow=!0,o.add(I)}{let tt=new Ue;o.add(tt);let I=Ko(44,25),B=new Ee({map:I.map,normalMap:I.normal,roughness:.9,color:"#c2b8b0"}),ot=new Ee({map:I.map,normalMap:I.normal,roughness:.9,color:"#77707a"}),gt=(Tt,Lt,Dt,D,me,te,T,_,z=!0)=>{let k=new Ft(Tt,Lt);return k.position.set(Dt,D,me),k.scale.set(te,T,_),k.castShadow=z,k.receiveShadow=!0,tt.add(k),k};gt(l.box,ot,0,.6,0,11,1.2,11),gt(l.box,B,0,9.6,0,9.2,17,9.2),gt(l.box,ot,0,18.4,0,9.8,.8,9.8),gt(l.box,B,0,24.2,0,7.9,11,7.9),gt(l.box,ot,0,29.9,0,8.6,.6,8.6);for(let[Tt,Lt]of[[-1,-1],[1,-1],[-1,1],[1,1]])gt(l.box,B,Tt*3.5,33,Lt*3.5,1.1,5.6,1.1);gt(l.box,ot,0,36,0,8.6,.7,8.6);let ft=new Ee({color:"#3a3550",roughness:.7,metalness:.2}),Rt=gt(l.cone4,ft,0,45,0,6.3,18,6.3);Rt.rotation.y=Math.PI/4,gt(l.cyl,new Ee({color:"#c99a3e",metalness:.8,roughness:.3}),0,55,0,.12,2.4,.12);let Kt=gt(l.cone,new Ee({color:"#b08a3e",metalness:.85,roughness:.35}),0,32.6,0,1.8,2.6,1.8);a.bell=Kt;let $=new ms("#ffb060",0,30,2);$.position.set(0,32,0),tt.add($),a.bellLight=$;for(let Tt=0;Tt<4;Tt++){let Lt=Tt*Math.PI/2,Dt=new Ft(l.plane,new Ee({color:"#2a170c",emissive:"#ff8a2a",emissiveIntensity:.55}));Dt.scale.set(2.6,4.4,1),Dt.position.set(Math.sin(Lt)*4.62,3.4,Math.cos(Lt)*4.62),Dt.rotation.y=Lt,tt.add(Dt)}let rt=Ep(),at=new Ee({map:rt,emissive:"#d8c49c",emissiveMap:rt,emissiveIntensity:.62,roughness:.5});a.clockMat=at,a.hands=[];let lt=new Ee({color:"#1c120a",roughness:.5});for(let Tt=0;Tt<4;Tt++){let Lt=Tt*Math.PI/2,Dt=new Ue;Dt.position.set(Math.sin(Lt)*ts.clockZ,ts.clockY,Math.cos(Lt)*ts.clockZ),Dt.rotation.y=Lt,tt.add(Dt);let D=new Ft(new hs(2.9,48),at);D.position.z=.02,Dt.add(D);let me=new Ft(new ki(2.95,.18,8,48),new Ee({color:"#c99a3e",metalness:.8,roughness:.35}));Dt.add(me);let te=new Ue,T=new Ue;te.position.z=T.position.z=.1;let _=new Ft(l.box,lt);_.scale.set(.26,1.55,.08),_.position.y=.7,te.add(_);let z=new Ft(l.box,lt);z.scale.set(.16,2.35,.08),z.position.y=1.05,T.add(z),T.position.z=.16,Dt.add(te,T),a.hands.push([te,T])}let pt=Ac(1024,256);a.board=pt;let Ut=new Ve({map:pt.t,color:"#e6e0d6",toneMapped:!1});for(let Tt of[0,2]){let Lt=Tt*Math.PI/2,Dt=new Ft(l.plane,Ut);Dt.scale.set(7.4,1.85,1),Dt.position.set(Math.sin(Lt)*4.64,ts.boardY-6.4,Math.cos(Lt)*4.64),Dt.rotation.y=Lt,tt.add(Dt)}a.towerGroup=tt,a.colliders.push({x:0,z:0,ry:0,hw:5.6,hd:5.6,h:56,kind:"tower"})}{let tt=new Ee({color:"#8a8494",roughness:.9});for(let Rt of[-10,10]){let Kt=new Ft(l.box,tt);Kt.scale.set(2,14,2),Kt.position.set(Rt,7,130),Kt.castShadow=!0,o.add(Kt),a.colliders.push({x:Rt,z:130,ry:0,hw:1.1,hd:1.1,h:14.6,kind:"gate"});let $=new Ft(l.cone4,tt);$.scale.set(1.8,2,1.8),$.position.set(Rt,15,130),$.rotation.y=Math.PI/4,o.add($)}let I=new Ft(l.box,new Ee({color:"#2a1d16",roughness:.9}));I.scale.set(22,.8,.8),I.position.set(0,13.4,130),o.add(I);let B=Ac(1024,256);a.gateSign=B;let ot=new Ee({map:B.t,roughness:.8,emissive:"#ffffff",emissiveMap:B.t,emissiveIntensity:.35}),gt=new Ft(l.plane,ot);gt.scale.set(12,3,1),gt.position.set(0,11.4,130.45),o.add(gt);let ft=gt.clone();ft.rotation.y=Math.PI,ft.position.z=129.55,o.add(ft),a.colliders.push({x:0,z:130,ry:0,hw:11,hd:.7,h:14,y0:9.8,kind:"gateBeam"})}a.cobM=b,a.r=r,e.forEach((tt,I)=>Fu(a,I,tt,i(tt)));let P=[];for(let tt=120;tt>=30;tt-=17)for(let I of[-9.4,9.4])P.push([I,tt-8.5]);for(let tt=0;tt<8;tt++){let I=(tt+.5)/8*Math.PI*2;P.push([Math.sin(I)*25.5,Math.cos(I)*25.5])}P.push([-7,130],[7,130]);let L=new Ee({color:"#16161c",metalness:.6,roughness:.5}),H=new Ee({color:"#3a2008",emissive:"#ffb050",emissiveIntensity:1.6});P.forEach(([tt,I],B)=>{let ot=new Ft(l.cyl6,L);ot.scale.set(.12,4.2,.12),ot.position.set(tt,2.1,I),ot.castShadow=!0,o.add(ot);let gt=new Ft(l.box,L);gt.scale.set(.9,.08,.08),gt.position.set(tt-Math.sign(tt||1)*.4,4.2,I),o.add(gt);let ft=tt-Math.sign(tt||1)*.8,Rt=new Ft(l.box,H.clone());Rt.scale.set(.42,.6,.42),Rt.position.set(ft,3.75,I),o.add(Rt);let Kt=new Ft(l.cone4,L);Kt.scale.set(.42,.32,.42),Kt.position.set(ft,4.2,I),Kt.rotation.y=Math.PI/4,o.add(Kt);let $=new Mn(new _n({map:d,color:"#ff9a3a",transparent:!0,opacity:.45,depthWrite:!1,blending:hn}));$.scale.setScalar(3.2),$.position.set(ft,3.75,I),o.add($);let rt=new Ft(l.plane,new Ve({map:d,color:"#7a4a1c",transparent:!0,opacity:.5,depthWrite:!1,blending:hn}));rt.rotation.x=-Math.PI/2,rt.scale.setScalar(9),rt.position.set(ft,.05,I),o.add(rt),a.lanterns.push({lamp:Rt,gl:$,pool:rt,p:new A(ft,3.75,I),ph:r()*10,light:null,on:1}),a.colliders.push({x:tt,z:I,ry:0,hw:.3,hd:.3,h:4.4,kind:"post"})}),a.lightPool=[];let X=14;for(let tt=0;tt<X;tt++){let I=new ms("#ff9a48",0,16,1.8);o.add(I),a.lightPool.push(I)}let N=new Ue;o.add(N);for(let tt=118;tt>24;tt-=6.2)for(let I of[-1,1])if(r()<.55){let B=Du(.35+r()*.25);B.position.set(I*(8.9+r()*.6),0,tt+r()*2),B.rotation.y=-I*Math.PI/2+(r()-.5)*.6,N.add(B),a.flick.push({m:B.face,ph:r()*10})}for(let tt=0;tt<10;tt++){let I=tt/10*Math.PI*2+.2,B=Du(.5+r()*.3);B.position.set(Math.sin(I)*23.5,0,Math.cos(I)*23.5),B.lookAt(0,0,0),N.add(B),a.flick.push({m:B.face,ph:r()*10})}Cc(N,new Set);let V=new Ee({color:"#1e1814",roughness:1}),J=(tt,I,B)=>{let ot=new Ue;ot.position.set(tt,0,I),o.add(ot);let gt=new Ft(l.cyl6,V);gt.scale.set(.35,B,.5),gt.position.y=B/2,gt.castShadow=!0,ot.add(gt);for(let ft=0;ft<6;ft++){let Rt=new Ft(l.cyl6,V),Kt=1.5+r()*2.5;Rt.scale.set(.08+r()*.06,Kt,.1);let $=r()*6.3,rt=B*(.45+r()*.5);Rt.position.set(Math.cos($)*Kt*.4,rt+Kt*.35,Math.sin($)*Kt*.4),Rt.rotation.z=Math.cos($)*-.9,Rt.rotation.x=Math.sin($)*.9,Rt.castShadow=!1,ot.add(Rt)}Cc(ot,new Set),a.colliders.push({x:tt,z:I,ry:0,hw:.7,hd:.7,h:B+1.5,kind:"tree"})};for(let[tt,I]of[[-27,103],[28,88],[-29,55],[29,38],[-50,-50],[52,-46],[48,30],[-48,34],[36,-36],[-38,-32],[-27,70],[27,120]])J(tt,I,5+r()*4);let Z=new Ue;o.add(Z);let ut=l.tomb,K=new Ee({color:"#5e5c6a",roughness:.95});for(let tt=0;tt<26;tt++){let I=r()*Math.PI*2,B=58+r()*18;Math.cos(I)*B-10<-40&&Math.abs(Math.sin(I)*B)<46&&(I=I+Math.PI*(Math.sin(I)>0?-.5:.5));let ot=new Ft(ut,K);ot.position.set(Math.sin(I)*B,0,Math.cos(I)*B-10),ot.rotation.y=r()*.6,ot.rotation.z=(r()-.5)*.2,ot.castShadow=!0,Z.add(ot)}Cc(Z,new Set);for(let tt=0;tt<34;tt++){let I=new Mn(new _n({map:u,color:"#8f9cc8",transparent:!0,opacity:0,depthWrite:!1})),B=tt%2===0;I.position.set(B?(r()-.5)*18:Math.sin(tt)*(18+r()*30),1.3+r()*2.2,B?20+r()*110:Math.cos(tt)*(18+r()*30));let ot=16+r()*18;I.scale.set(ot,ot*.32,1),o.add(I),a.mist.push({s:I,base:.2+r()*.14,vx:(r()-.5)*.8,ph:r()*6,x0:I.position.x})}for(let tt=0;tt<7;tt++){let I=Tr().ghost.clone(),B=new Mn(new _n({map:I.map,transparent:!0,opacity:0,depthWrite:!1,color:"#dfe8ff"}));B.scale.set(2.2,2.75,1),o.add(B),a.ghosts.push({s:B,ph:r()*100,rad:14+r()*40,sp:.05+r()*.05,y:3+r()*6,cx:tt<3?0:(r()-.5)*10,cz:tt<3?0:40+r()*60,path:tt<3?"ring":"street"})}let nt=(()=>{let tt=new Se;return tt.setAttribute("position",new ue([0,0,0,1,.1,-.25,.9,.05,.35,0,0,0,.9,.05,.35,.35,.02,.15],3)),tt.computeVertexNormals(),tt})(),it=new Ve({color:"#07060a",side:je,fog:!1}),It=[{c:(a.houses.find(tt=>tt.batRoost)||{}).batRoost||new A(18,13,44),R:6,h:2,n:9,sp:1.1},{c:new A(0,46,0),R:11,h:4,n:10,sp:.8},{c:bs.clone().multiplyScalar(.55),R:34,h:12,n:12,sp:.22,far:!0}];for(let tt of It)for(let I=0;I<tt.n;I++){let B=new Ue,ot=new Ft(new ii(.18,6,4),it);ot.scale.set(1,.8,1.5);let gt=new Ft(nt,it),ft=new Ft(nt,it);ft.scale.x=-1,B.add(ot,gt,ft);let Rt=tt.far?6:.8+r()*.5;B.scale.setScalar(Rt),o.add(B),a.bats.push({b:B,L:gt,R:ft,F:tt,ph:r()*6.3,off:(r()-.5)*tt.h,rr:tt.R*(.7+r()*.6),fl:9+r()*4})}a.bolts=[];let pe=new Ve({color:"#d6dcff",transparent:!0,opacity:0,blending:hn,depthWrite:!1,fog:!1,side:je}),re=pe.clone();for(let tt=0;tt<3;tt++){let I=new Ft(new Se,pe.clone()),B=new Ft(new Se,re.clone());I.renderOrder=B.renderOrder=-5,o.add(I,B),a.bolts.push({m:I,g2:B,life:0})}a.drawGate=tt=>{let{c:I,g:B,t:ot}=a.gateSign;B.clearRect(0,0,1024,256),B.fillStyle="#2b1c14",B.fillRect(0,0,1024,256),B.strokeStyle="#c99a3e",B.lineWidth=10,B.strokeRect(10,10,1004,236),B.fillStyle="#ffd89a",B.textAlign="center",B.textBaseline="middle",B.font="700 108px Fredoka, Georgia, serif",B.fillText(tt==="de"?"SPUKSTADT":"HAUNTED TOWN",512,112),B.font="600 46px Fredoka, Georgia, serif",B.fillStyle="#e8c890",B.fillText("\u{1F383} Halloween 2026 \u{1F383}",512,200),ot.needsUpdate=!0};{let tt=new In,I=new A;o.updateMatrixWorld(!0),o.traverse(B=>{B.isMesh&&B.castShadow&&(tt.setFromObject(B),tt.getSize(I),I.x*I.y*I.z<1.2&&Math.max(I.x,I.z)<2.5&&(B.castShadow=!1))})}return a.q=t,a}function Fu(n,t,e,i){let s=n.scene,r=n.r,o=n.cobM,a=Rc(),l=n.houses[t];l&&(s.remove(l.g),l.path&&s.remove(l.path),l.porch&&s.remove(l.porch));let h=Uu(t),c=Pp(e.style,i,100+t*7),d=c.group;d.position.set(h.x,0,h.z),d.rotation.y=h.ry,s.add(d);let u=new Set([...c.anim.map(L=>L.o),...c.faces,...c.wins]),f=new Map;for(let L of c.wins)f.has(L.material)||f.set(L.material,L.material.clone()),L.material=f.get(L.material);for(let L of c.wins)u.add(L);Cc(d,new Set(c.anim.map(L=>L.o)));let m=new Ft(a.box,new Ve({visible:!1}));m.scale.set(c.hw*2+1,c.top+1,c.hd*2+1),m.position.y=(c.top+1)/2,m.userData.house=t,d.add(m);let y=Zv(e,i);y.position.set(0,c.top+2.6,0),d.add(y);let g=new A(Math.sin(h.ry),0,Math.cos(h.ry)),p=c.door.clone().applyAxisAngle(new A(0,1,0),h.ry).add(d.position),S={i:t,gm:e,open:i,g:d,hit:m,badge:y,hw:c.hw,hd:c.hd,top:c.top,fwd:g,door:p,sl:h,wmats:[...f.values()],faces:c.faces,anim:c.anim,flick:r()*10,hover:0,batRoost:c.batRoost&&c.batRoost.clone().applyMatrix4(d.matrixWorld),coilTop:c.coilTop&&c.coilTop.clone().applyMatrix4(d.matrixWorld)};n.houses[t]=S;let R={x:h.x,z:h.z,ry:h.ry,hw:c.hw+.3,hd:c.hd+.3,h:c.top+.5,kind:"house",i:t},M=n.colliders.findIndex(L=>L.kind==="house"&&L.i===t);M>=0?n.colliders[M]=R:n.colliders.push(R);let w=new Ft(a.plane,o(1,2)),b=h.street?Math.abs(Math.abs(h.x)-c.hd)-8+.5:(h.r||Nu)-c.hd-27+1;w.scale.set(2.6,Math.max(1,b),1),w.rotation.x=-Math.PI/2,w.rotation.z=h.ry;let C=p.clone().addScaledVector(g,b/2-1.3);w.position.set(C.x,.022,C.z),w.receiveShadow=!0,s.add(w),S.path=w;{let L=new Ve({map:n.soft,color:i?"#ff9440":"#5a5a8a",transparent:!0,opacity:i?.34:.14,depthWrite:!1,blending:hn}),H=new Ft(a.plane,L);H.rotation.x=-Math.PI/2,H.scale.set(c.hw*2+5,c.hw*2+5,1);let X=p.clone().addScaledVector(g,1.2);H.position.set(X.x,.05,X.z),H.renderOrder=2,s.add(H),S.porch=H}let x=Tn(500+t),E=t%3===0?[-(c.hw+1.6),-c.hd*.3]:t%3===1?[c.hw+1.6,-c.hd*.6]:[(x()-.5)*c.hw,-(c.hd+1.8)],P=new A(E[0],.45,E[1]).applyAxisAngle(new A(0,1,0),h.ry).add(d.position);n.candies[t]||(n.candies[t]=$v(s,P,t)),l&&(n.smoke=n.smoke.filter(L=>L.house!==t));for(let L of c.smoke)n.smoke.push({p:L.p.clone().applyMatrix4(d.matrixWorld),col:L.col,t:r()*2,house:t});return S}function Zv(n,t){let e=Ac(256,256);ta(e,n,t,!1);let i=new Mn(new _n({map:e.t,transparent:!0,depthWrite:!1,fog:!1,color:t?"#ffffff":"#a8a8b8"}));return i.scale.setScalar(3.4),i.userData.tc=e,i.renderOrder=5,i}function ta(n,t,e,i){let{g:s,t:r}=n;s.clearRect(0,0,256,256),s.beginPath(),s.arc(128,128,110,0,6.3),s.fillStyle=e?i?"#ff9a2e":"#d9661a":"#3a3848",s.fill(),s.lineWidth=12,s.strokeStyle=e?"#ffe2a8":"#8a8898",s.stroke(),s.fillStyle=e?"#fff6e6":"#c8c6d4",s.textAlign="center",s.textBaseline="middle",e?(s.font="700 120px Fredoka, sans-serif",s.fillText(t.bonus?"\u2605":String(t.day),128,136)):(s.font="700 80px Fredoka, sans-serif",s.fillText(String(t.day),128,96),s.fillRect(96,150,64,48),s.lineWidth=11,s.strokeStyle=s.fillStyle,s.beginPath(),s.arc(128,150,20,Math.PI,0),s.stroke()),r.needsUpdate=!0}function $v(n,t,e){Tr();let i=Rc(),s=["#ff4f6a","#ffd23a","#58e070","#5ab4ff","#c070ff","#ff8a2a"],r=s[e%s.length],o=new Ee({color:r,roughness:.3,emissive:r,emissiveIntensity:.35}),a=new Ue,l=new Ft(i.sph,o);l.scale.set(.32,.24,.24),a.add(l);for(let d of[-1,1]){let u=new Ft(i.cone,o);u.scale.set(.2,.26,.2),u.rotation.z=d*Math.PI/2,u.position.x=d*.4,a.add(u)}let h=new Mn(new _n({map:Cu(),color:r,transparent:!0,opacity:.35,depthWrite:!1,blending:hn}));h.scale.setScalar(1.6),a.add(h);let c=new Ft(i.sph,new Ve({visible:!1}));return c.scale.setScalar(1.3),c.userData.candy=e,a.add(c),a.position.copy(t),n.add(a),{g:a,hit:c,glow:h,m:o,i:e,got:!1,p:t.clone(),t:0}}function ea(n,t,e,i,s=Math.random){let r=n.bolts.find(h=>h.life<=0)||n.bolts[0],o=[e.clone()],a=14;for(let h=1;h<a;h++){let c=h/a;o.push(e.clone().lerp(i,c).add(new A((s()-.5)*26,(s()-.5)*8,(s()-.5)*4)))}o.push(i.clone());let l=h=>{let c=[],d=[],u=new A,f=new A;for(let y=0;y<o.length;y++){let g=o[Math.max(0,y-1)],p=o[Math.min(o.length-1,y+1)];if(u.subVectors(p,g).normalize(),f.subVectors(t.position,o[y]).normalize().cross(u).normalize().multiplyScalar(h*(1-y/o.length*.6)),c.push(o[y].x-f.x,o[y].y-f.y,o[y].z-f.z,o[y].x+f.x,o[y].y+f.y,o[y].z+f.z),y<o.length-1){let S=y*2;d.push(S,S+1,S+2,S+1,S+3,S+2)}}let m=new Se;return m.setAttribute("position",new ue(c,3)),m.setIndex(d),m};return r.m.geometry.dispose(),r.g2.geometry.dispose(),r.m.geometry=l(1.6),r.g2.geometry=l(9),r.life=.55,n.flash=Math.max(n.flash,1),r}var Un=9e3;function Lp(n,t){let e={n:0,cursor:0},i=new Se;e.pos=new Float32Array(Un*3),e.col=new Float32Array(Un*3),e.size=new Float32Array(Un),e.alpha=new Float32Array(Un),e.vel=new Float32Array(Un*3),e.life=new Float32Array(Un),e.max=new Float32Array(Un),e.grav=new Float32Array(Un),e.drag=new Float32Array(Un),e.s0=new Float32Array(Un),i.setAttribute("position",new He(e.pos,3)),i.setAttribute("color",new He(e.col,3)),i.setAttribute("size",new He(e.size,1)),i.setAttribute("alpha",new He(e.alpha,1));let s=new Ie({uniforms:{map:{value:t},scale:{value:800}},transparent:!0,depthWrite:!1,blending:hn,vertexColors:!0,vertexShader:"attribute float size; attribute float alpha; varying vec3 vC; varying float vA; uniform float scale; void main(){ vC = color; vA = alpha; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_PointSize = clamp(size * scale / max(1.0, -mv.z), 0.0, 64.0); gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform sampler2D map; varying vec3 vC; varying float vA; void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vC * t.a * vA * .9, 1.0); }"}),r=new fo(i,s);return r.frustumCulled=!1,r.renderOrder=3,n.add(r),e.geo=i,e.mat=s,e.pts=r,e}var Ze=n=>Number.isFinite(n)?n:0;function oi(n,t,e,i={}){let s=new Jt,r=(i.colors||["#ffffff"]).map(o=>new Jt(o));e=Math.max(0,Math.min(1500,Math.round(Ze(e))));for(let o=0;o<e;o++){let a=n.cursor;n.cursor=(n.cursor+1)%Un,n.n=Math.max(n.n,n.cursor===0?Un:n.cursor);let l=Math.random()*2-1,h=Math.random()*Math.PI*2,c=Math.sqrt(1-l*l),d=Ze(i.speed??3)*(i.shell?.92+Math.random()*.16:.35+Math.random()*.8);if(n.pos[a*3]=Ze(t.x),n.pos[a*3+1]=Ze(t.y),n.pos[a*3+2]=Ze(t.z),i.ring){let u=o/e*Math.PI*2,f=Math.cos(Ze(i.tilt)),m=Math.sin(Ze(i.tilt));n.vel[a*3]=Math.cos(u)*d+Ze(i.vx),n.vel[a*3+1]=Math.sin(u)*f*d+Ze(i.up),n.vel[a*3+2]=Math.sin(u)*m*d+Ze(i.vz)}else n.vel[a*3]=Math.cos(h)*c*d+Ze(i.vx),n.vel[a*3+1]=l*d+Ze(i.up),n.vel[a*3+2]=Math.sin(h)*c*d+Ze(i.vz);s.copy(r[o%r.length]),n.col[a*3]=s.r,n.col[a*3+1]=s.g,n.col[a*3+2]=s.b,n.max[a]=n.life[a]=Ze(i.life??1)*(.7+Math.random()*.6),n.grav[a]=Ze(i.grav??3),n.drag[a]=Ze(i.drag??1.2),n.s0[a]=Ze(i.size??.12)*(.6+Math.random()*.8)}}function Dp(n,t,e){n.mat.uniforms.scale.value=Ze(e)||800,t=Ze(t);let i=0;for(let s=0;s<n.n;s++){if(n.life[s]<=0){n.alpha[s]=0;continue}i++,n.life[s]-=t;let r=Math.max(0,n.life[s]/n.max[s]),o=Math.max(0,1-t*n.drag[s]);n.vel[s*3+1]-=n.grav[s]*t,n.vel[s*3]*=o,n.vel[s*3+1]*=o,n.vel[s*3+2]*=o;for(let a=0;a<3;a++){let l=n.pos[s*3+a]+n.vel[s*3+a]*t;n.pos[s*3+a]=Number.isFinite(l)?l:0}n.pos[s*3+1]<.1&&(n.pos[s*3+1]=.1,n.vel[s*3+1]*=-.25),n.alpha[s]=Math.min(1,r*2.2)*(.75+.25*Math.sin(n.life[s]*40+s)),n.size[s]=n.s0[s]*(.45+r*.55)}n.alive=i;for(let s of["position","color","size","alpha"])n.geo.attributes[s].needsUpdate=!0}var Le=null,ws=null,Ic=null,na=null,Ts={},Nc=!1,Bu=!1,Ou=!1,Lc={},Ar=[],zu=()=>0;function Up(n){zu=n}var ai=(n,t=0)=>Number.isFinite(n)?n:t;function Jv(n){let t=atob(n),e=new Uint8Array(t.length);for(let i=0;i<t.length;i++)e[i]=t.charCodeAt(i);return e.buffer}var Kv=[48,51,54,57,60,63,66,69,72],Qv=[24,30,36];function jv(n,t){let e=n[0];for(let i of n)Math.abs(i-t)<Math.abs(e-t)&&(e=i);return e}function tM(n=3.4){let t=Le.sampleRate,e=Math.floor(t*n),i=Le.createBuffer(2,e,t),s=13,r=()=>(s=s*16807%2147483647,s/2147483647*2-1);for(let o=0;o<2;o++){let a=i.getChannelData(o),l=0;for(let h=0;h<e;h++){let c=h/t;l+=(r()-l)*(.42-.34*c/n),a[h]=l*Math.exp(-c*1.7)*(h<t*.03?h/(t*.03):1)}}return i}async function Fp(){if(Le){Le.state==="suspended"&&Le.resume().catch(()=>{}),!Nc&&!Ou&&Np();return}let n=window.AudioContext||window.webkitAudioContext;if(!n)return;Le=new n,ws=Le.createGain(),ws.gain.value=Bu?0:.9;let t=Le.createDynamicsCompressor();t.threshold.value=-14,t.ratio.value=3,t.attack.value=.005,t.release.value=.25,ws.connect(t),t.connect(Le.destination),Ic=Le.createGain(),Ic.connect(ws),na=Le.createConvolver(),na.buffer=tM();let e=Le.createGain();e.gain.value=.34,na.connect(e),e.connect(ws),Le.state==="suspended"&&Le.resume().catch(()=>{}),await Np()}async function Np(){let n=window.HT_SOUNDS;if(n){Ou=!0,await Promise.all(Object.keys(n).map(t=>Ts[t]?0:new Promise(e=>{try{Le.decodeAudioData(Jv(n[t]),i=>{Ts[t]=i,e()},()=>e())}catch{e()}}))),Nc=!0,Ou=!1,window.__htAudioReady=Object.keys(Ts).length;for(let t in Lc)Op(t)}}function de(n,t=1,e=1,i=0,s=.4,r=0,o=0,a=0){if(t=Math.max(0,ai(t)),e=ai(e,1),e<=0&&(e=1),i=Math.max(0,ai(i)),s=Math.max(0,ai(s)),r=Math.max(0,ai(r)),o=Math.max(-1,Math.min(1,ai(o))),a=Math.max(0,ai(a)),Ar.push({n,t:zu()+i,v:t,r:e,rv:s,d:r,p:o,a}),Ar.length>8e3&&Ar.splice(0,1500),!Nc||!Ts[n]||!(t>0))return null;let l=Le.createBufferSource();l.buffer=Ts[n],l.playbackRate.value=e;let h=Le.createGain(),c=Le.currentTime+i;a>0?(h.gain.setValueAtTime(1e-4,c),h.gain.linearRampToValueAtTime(t,c+a)):h.gain.value=t,l.connect(h);let d=h;if(o&&Le.createStereoPanner){let u=Le.createStereoPanner();u.pan.value=o,h.connect(u),d=u}if(d.connect(Ic),s>0){let u=Le.createGain();u.gain.value=s,d.connect(u),u.connect(na)}return l.start(c),r>0&&(h.gain.setValueAtTime(t,c+Math.max(a,r)),h.gain.exponentialRampToValueAtTime(8e-4,c+Math.max(a,r)+.6),l.stop(c+Math.max(a,r)+.65)),l}function Dc(n,t=.5,e=3,i=0,s=.6,r=0){let o=n<42,a=jv(o?Qv:Kv,n);return de((o?"ped_":"org_")+a,t,Math.pow(2,(n-a)/12),i,.7,e,r,s)}function Op(n){let t=Lc[n];if(!Nc||t.src||!Ts[n])return;t.g=Le.createGain(),t.g.gain.value=t.v,t.src=Le.createBufferSource(),t.src.buffer=Ts[n],t.src.loop=!0,t.src.playbackRate.value=t.r,t.src.connect(t.g),t.g.connect(Ic);let e=Le.createGain();e.gain.value=.22,t.g.connect(e),e.connect(na),t.src.start()}function Es(n,t,e=1,i=.5){t=Math.max(0,ai(t)),e=ai(e,1),e<=0&&(e=1),i=Math.max(.01,ai(i,.5));let s=Lc[n]||(Lc[n]={v:0,r:1});if(!(Math.abs(s.v-t)<.006&&Math.abs(s.r-e)<.006)&&(s.v=t,s.r=e,Ar.push({n:"~"+n,t:zu(),v:t,r:e,f:i}),Op(n),s.g)){let r=Le.currentTime;s.g.gain.cancelScheduledValues(r),s.g.gain.setValueAtTime(s.g.gain.value,r),s.g.gain.linearRampToValueAtTime(t,r+i),s.src.playbackRate.setTargetAtTime(e,r,.2)}}function Bp(n){Bu=n,ws&&(ws.gain.value=n?0:.9)}function Uc(){return Bu}var Pc=n=>n[Math.floor(Math.random()*n.length)],ae={ui(){de("step_1",.35,1.6,0,.1)},hover(){de("candy_b",.1,1.4,0,.3)},bellDeep(n=1){de("bell_deep",.95*n,.8,0,.8),de("sub",.55*n,1,0,.3),de("gong",.35*n,.55,.02,.9)},bellToll(n=.7){de("bell_strike",n,.85,0,.8)},bellFar(n=0){de("bell_far",.32,.9+Math.random()*.1,0,.9,0,n)},peal(){de("bells_peal",.45,1,0,.6)},organSwell(n=.5,t=0){for(let[e,i]of[[26,1],[38,.7],[50,.55],[57,.5],[62,.5],[65,.45],[69,.35]])Dc(e,n*i,3.6,t,1.1);de("choir_swell",.35*n,1,t+.3,.8)},organStab(n=.5){for(let t of[38,50,57,62,65])Dc(t,n*.6,1.6,0,.05)},thunder(n){de(n?"thunder_soft":"thunder",n?.42:.72,.95+Math.random()*.1,0,.3)},crack(){de("thunder",.8,1.05,0,.25),de("boom",.5,.9,.04,.4)},whoosh(n=.5){de("fwoosh",n,.7,0,.5),de("riser",n*.45,1.1,0,.5)},owl(n){de("owl",.3,.97+Math.random()*.06,0,.9,0,n)},howl(n){de("howl",.3,1,0,.9,0,n)},bats(n=.35,t=0){de("bats",n,1+Math.random()*.2,0,.4,0,t)},ghost(n,t){de(t?"whisper":Pc(["whisper","ghosts","boo"]),t?.12:.2,1,0,.8,0,n)},door(n=0){de(Pc(["door_creak","door_creak_b"]),.5,1,0,.6,0,n)},locked(n=0){de("lock",.5,.9,0,.4,0,n),de("door_creak_b",.22,1.3,.05,.5,.5,n)},step(){de(Pc(["step_1","step_2","step_3"]),.22,.9+Math.random()*.2,0,.3)},candy(){de("candy_a",.55,1,0,.4),de("chime_c",.4,1,.05,.6),de("sparkle",.3,1.1,.15,.6)},allCandy(){de("harp",.5,1,0,.6),de("magic",.4,1,.2,.6),de("cheer",.3,1,.4,.6)},fwLaunch(n,t=.35){de("fw_whistle",t,.9+Math.random()*.25,0,.5,0,n)},fwBurst(n,t=.5,e=0,i){if(i){de("fw_crackle",t*.35,1,e,.6,2.5,n);return}de(Pc(["fw_burst","fw_burst_b"]),t,.9+Math.random()*.2,e,.6,0,n),Math.random()<.5&&de("fw_crackle",t*.4,1,e+.25,.6,3,n)},celebrate(){de("cheer",.4,1,0,.6),de("applause",.3,1,.3,.6),this.peal()},kids(){de("laugh_kids",.35,1,0,.4)}};var Hu={en:{title:"Haunted Town",sub:"Every house is a game. Walk the misty streets, find your door.",tour:"\u{1F3AC} Guided tour",tourStop:"\u25A0 Stop tour",list:"\u{1F4DC} All games",candy:"\u{1F36C}",opening:"\u21BA Opening",calm:"\u{1F9F8} Calm mode",calmOn:"Calm mode on: no lightning, no scares, softer sounds.",calmOff:"Calm mode off",soundOn:"Sound on",tapSound:"\u{1F50A} Tap for sound",skip:"Skip \u25B8",day:"Day",bonus:"Bonus house \xB7 always open",released:"Since",play:"\u25B6 Enter & play",coming:"\u{1F512} Coming",locked:"This house opens on its day.",newTab:"opens in a new tab",close:"Close",cdDays:n=>n===1?"1 day to Halloween":`${n} days to Halloween`,cdTonight:"Halloween is tonight!",cdHappy:"HAPPY HALLOWEEN!",cdNext:"See you next Halloween",helpMouse:"Drag to look around \xB7 scroll to zoom \xB7 WASD / arrows to fly \xB7 click a house",helpTouch:"Swipe to look \xB7 pinch to zoom \xB7 two fingers to move \xB7 tap a house",found:(n,t)=>`Candy found: ${n} / ${t}`,allFound:"All candy found! The town cheers for you \u{1F389}",hidden:"A candy is hidden in every yard",q_low:"Low",q_mid:"Normal",q_high:"High",q_ultra:"Ultra",quality:"Graphics",autoQ:"Graphics lowered to",undo:"Undo",listTitle:"All games of the series",open:"open",soon:"soon",tower:"Clock tower",subOpen:"Step inside and play",subSoon:"A new game is moving in",towerSub:"Counting down to Halloween",loading:"The town wakes up\u2026",credit:"Sounds: CC0 recordings (Freesound IDs in LICENSES) \xB7 Organ: VSCO 2 CE (CC0)",gate:"HAUNTED TOWN",series:"The finale of the 20-day Halloween game series",tourOf:(n,t)=>`${n} / ${t}`},de:{title:"Spukstadt",sub:"Jedes Haus ist ein Spiel. Wandere durch die nebligen Gassen und finde deine T\xFCr.",tour:"\u{1F3AC} Stadtf\xFChrung",tourStop:"\u25A0 F\xFChrung stoppen",list:"\u{1F4DC} Alle Spiele",candy:"\u{1F36C}",opening:"\u21BA Intro",calm:"\u{1F9F8} Ruhiger Modus",calmOn:"Ruhiger Modus an: keine Blitze, kein Erschrecken, sanftere Kl\xE4nge.",calmOff:"Ruhiger Modus aus",soundOn:"Ton an",tapSound:"\u{1F50A} Tippen f\xFCr Ton",skip:"\xDCberspringen \u25B8",day:"Tag",bonus:"Bonushaus \xB7 immer offen",released:"Seit",play:"\u25B6 Eintreten & spielen",coming:"\u{1F512} Ab",locked:"Dieses Haus \xF6ffnet an seinem Tag.",newTab:"\xF6ffnet in neuem Tab",close:"Schlie\xDFen",cdDays:n=>n===1?"Noch 1 Tag bis Halloween":`Noch ${n} Tage bis Halloween`,cdTonight:"Heute Nacht ist Halloween!",cdHappy:"FROHES HALLOWEEN!",cdNext:"Bis zum n\xE4chsten Halloween",helpMouse:"Ziehen zum Umsehen \xB7 Scrollen zum Zoomen \xB7 WASD / Pfeile zum Fliegen \xB7 Haus anklicken",helpTouch:"Wischen zum Umsehen \xB7 Zwei Finger zum Zoomen und Bewegen \xB7 Haus antippen",found:(n,t)=>`Bonbons gefunden: ${n} / ${t}`,allFound:"Alle Bonbons gefunden! Die Stadt jubelt dir zu \u{1F389}",hidden:"In jedem Garten ist ein Bonbon versteckt",q_low:"Niedrig",q_mid:"Normal",q_high:"Hoch",q_ultra:"Ultra",quality:"Grafik",autoQ:"Grafik gesenkt auf",undo:"Zur\xFCck",listTitle:"Alle Spiele der Reihe",open:"offen",soon:"bald",tower:"Uhrturm",subOpen:"Tritt ein und spiel",subSoon:"Ein neues Spiel zieht ein",towerSub:"Z\xE4hlt die Zeit bis Halloween",loading:"Die Stadt erwacht\u2026",credit:"Sounds: CC0-Aufnahmen (Freesound-IDs in LICENSES) \xB7 Orgel: VSCO 2 CE (CC0)",gate:"SPUKSTADT",series:"Das Finale der 20-Tage-Halloween-Spielereihe",tourOf:(n,t)=>`${n} / ${t}`}};var Pt=n=>document.getElementById(n),Ti={get(n,t){try{let e=localStorage.getItem(n);return e===null?t:e}catch{return t}},set(n,t){try{localStorage.setItem(n,t)}catch{}}},ci=(n,t,e)=>n+(t-n)*e,Oe=(n,t,e)=>Math.max(t,Math.min(e,n)),Cr=n=>n<=0?0:n>=1?1:n*n*(3-2*n),gn=(n,t=0)=>Number.isFinite(n)?n:t,Jp=n=>n<=0?0:n>=1?1:n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,Kp=n=>((n+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI,Vu=(window.__htSeed||Date.now()&16777215)>>>0;function ce(){Vu=Vu+1831565813>>>0;let n=Vu;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}var oa=new URLSearchParams(location.search),F={mode:"intro",lang:Ti.get("ht-lang",(navigator.language||"en").toLowerCase().startsWith("de")?"de":"en"),calm:Ti.get("ht-calm","0")==="1",q:Ti.get("ht-q",""),qUser:!!Ti.get("ht-q",""),gt:0,it:0,sel:-1,hover:-1,tourI:-1,tourT:0,got:new Set((Ti.get("ht-candy","")||"").split(",").filter(n=>n!=="").map(Number)),override:oa.get("unlock")==="all"?"all":oa.get("lock")==="all"?"none":"",touch:!1,fwT:3,fwShow:0,idle:0};Er[F.q]||(F.q="mid",F.qUser=!1);oa.get("calm")==="1"&&(F.calm=!0);var Qt=n=>Hu[F.lang][n]??Hu.en[n]??n,Fc=wc(oa.get("date")),ku=Fc?new Date(Fc.getFullYear(),Fc.getMonth(),Fc.getDate(),20,0,0):null,Qp=performance.now(),Fr=()=>ku?new Date(ku.getTime()+(performance.now()-Qp)):new Date,Zu=n=>Eu(n,Fr(),F.override),aa=()=>{let n=Fr();return n.getMonth()===9&&n.getDate()===31};Up(()=>F.gt);var qn=Pt("game"),An=new gc({canvas:qn,antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:!!window.__htPDB});An.toneMapping=xs;An.toneMappingExposure=1.12;An.outputColorSpace=Je;An.shadowMap.enabled=!0;An.shadowMap.type=gs;var dt=Ip(An,Er[F.q],mn,Zu,7),Cs=dt.scene,ge=new tn(50,1,.25,2600);Cs.add(ge);var Xn=Lp(Cs,dt.soft),Dr=new Mc(An);Dr.addPass(new Sc(Cs,ge));var jp=new wr(new ct(256,256),.55,.5,.82);Dr.addPass(jp);Dr.addPass(new bc);var Ai=1,hi=1;function $u(){Ai=window.innerWidth||1,hi=window.innerHeight||1;let n=Math.min(window.devicePixelRatio||1,Er[F.q].dpr);An.setPixelRatio(n),An.setSize(Ai,hi,!1),Dr.setPixelRatio(n),Dr.setSize(Ai,hi),ge.aspect=Ai/hi,ge.updateProjectionMatrix()}window.addEventListener("resize",$u);$u();function kc(n,t=!1){if(!Er[n])return;F.q=n,t&&(F.qUser=!0,Ti.set("ht-q",n));let e=Er[n];dt.q=e,An.shadowMap.enabled=e.shadows,dt.moonL.castShadow=e.shadows,dt.moonL.shadow.map&&(dt.moonL.shadow.map.dispose(),dt.moonL.shadow.map=null),dt.moonL.shadow.mapSize.set(e.shadowSize,e.shadowSize),Cs.traverse(i=>{i.material&&i.material.needsUpdate!==void 0&&!i.isSprite&&(i.material.needsUpdate=!0)}),$u(),sm()}var tm=()=>Ai/hi<1?50+(1-Ai/hi)*26:50,Gu=1.4;function Gc(n,t){let e=t.x-n.x,i=t.z-n.z,s=Math.cos(-n.ry),r=Math.sin(-n.ry);return[e*s+i*r,t.y,-e*r+i*s]}function em(n,t){let[e,i,s]=Gc(n,t),r=n.y0||0,o=Math.max(Math.abs(e)-n.hw,0),a=Math.max(Math.abs(s)-n.hd,0),l=Math.max(r-i,i-n.h,0);return Math.hypot(o,l,a)}function nM(n,t,e,i){let s=Gc(n,t),r=Gc(n,e),o=[-n.hw-i,(n.y0||0)-i,-n.hd-i],a=[n.hw+i,n.h+i,n.hd+i],l=0,h=1;for(let c=0;c<3;c++){let d=r[c]-s[c];if(Math.abs(d)<1e-9){if(s[c]<o[c]||s[c]>a[c])return-1;continue}let u=(o[c]-s[c])/d,f=(a[c]-s[c])/d;if(u>f&&([u,f]=[f,u]),l=Math.max(l,u),h=Math.min(h,f),l>h)return-1}return l}function Yc(n,t=Gu){for(let e=0;e<3;e++)for(let i of dt.colliders){let[s,r,o]=Gc(i,n),a=i.y0||0;if(Math.abs(s)<i.hw+t&&Math.abs(o)<i.hd+t&&r<i.h+t&&r>a-t){let l=i.hw+t-Math.abs(s),h=i.hd+t-Math.abs(o),c=i.h+t-r,d=r-(a-t),u=Math.min(l,h,c,a>0?d:1e9),f=s,m=o,y=r;u===l?f=Math.sign(s||1)*(i.hw+t+.01):u===h?m=Math.sign(o||1)*(i.hd+t+.01):u===c?y=i.h+t+.01:y=a-t-.01;let g=Math.cos(i.ry),p=Math.sin(i.ry);n.x=i.x+f*g+m*p,n.z=i.z-f*p+m*g,n.y=y}}return n.y=Math.max(n.y,1.1),n}function zp(n){return n.x=Oe(gn(n.x),-80,80),n.z=Oe(gn(n.z,40),-80,175),n.y=Oe(gn(n.y,4),1.4,48),Yc(n,.6)}var fe={t:new A(0,8,30),yaw:0,pitch:.24,dist:110},qt={t:fe.t.clone(),yaw:0,pitch:.24,dist:110},li={t:new A(0,14,45),yaw:0,pitch:.2,dist:90},Oc={p:new A(0,30,140),l:new A(0,8,30)};function nm(n,t=new A){let e=Math.cos(n.pitch);return t.set(n.t.x+Math.sin(n.yaw)*e*n.dist,n.t.y+Math.sin(n.pitch)*n.dist,n.t.z+Math.cos(n.yaw)*e*n.dist)}function im(n,t){let e=t.clone();e.y=Math.max(e.y,1.2);let i=1;for(let s of dt.colliders){if(s.kind==="post"||s.kind==="tree")continue;let r=nM(s,n,e,Gu);r>=0&&r<i&&em(s,n)>Gu&&(i=r)}return i<1&&e.lerpVectors(n,e,Math.max(0,i-.002)),Yc(e)}function iM(){let n=1e9;for(let t of dt.colliders)n=Math.min(n,em(t,ge.position));return Math.min(n,ge.position.y)}function Or(n){qt.t.copy(n.t),qt.yaw=fe.yaw+Kp(n.yaw-fe.yaw),qt.pitch=n.pitch,qt.dist=n.dist}function Ju(n){let t=dt.houses[n],e=t.g.position.clone().addScaledVector(t.fwd,t.hd+1.6);return e.y=Math.max(3.2,t.top*.4),{t:e,yaw:Math.atan2(t.fwd.x,t.fwd.z),pitch:.16,dist:Oe(t.top*1.45+6,17,30)}}var sM=()=>({t:new A(0,21,8.5),yaw:0,pitch:.1,dist:30}),Zc=document.body;function di(n){F.mode=n,Zc.dataset.state=n}var Hp=0;function la(n,t=2600,e=!1){let i=Pt("toast");e?i.innerHTML=n:i.textContent=n,i.classList.add("show"),clearTimeout(Hp),Hp=setTimeout(()=>i.classList.remove("show"),t)}function Ku(n){let t=Pt("banner");t.textContent=n,t.classList.remove("show"),t.offsetWidth,t.classList.add("show")}function sm(){Pt("btnQ").textContent="\u2699 "+Qt("q_"+F.q),Pt("btnQ").title=Qt("quality")}function $c(n){return n[F.lang][0]}function Br(){document.documentElement.lang=F.lang,document.title=F.lang==="de"?"Spukstadt \u2013 das Halloween-Finale in 3D":"Haunted Town \u2013 the 3D Halloween finale";for(let n of document.querySelectorAll("[data-t]")){let t=Qt(n.dataset.t);typeof t=="string"&&(n.textContent=t)}Pt("btnLang").textContent=F.lang==="de"?"EN":"DE",Pt("btnTour").textContent=F.mode==="tour"?Qt("tourStop"):Qt("tour"),Pt("help").textContent=F.touch?Qt("helpTouch"):Qt("helpMouse"),Pt("ttlMain").textContent=F.lang==="de"?"SPUKSTADT":"HAUNTED TOWN",Pt("ttlSub").textContent=F.lang==="de"?"Haunted Town \xB7 Halloween 2026":"Spukstadt \xB7 Halloween 2026",Pt("hName").textContent="\u{1F3DA}\uFE0F "+Qt("title"),dt.drawGate(F.lang),sm(),om(),Qu(),rm(),F.sel>=0&&Ci(F.sel,!1),td(!0)}function rm(){Pt("btnCalm").classList.toggle("on",F.calm),Pt("btnCalm").setAttribute("aria-pressed",F.calm?"true":"false"),Pt("btnCalm").textContent=Qt("calm")}function om(){Pt("hCandy").textContent=`\u{1F36C} ${F.got.size} / ${mn.length}`,Pt("hCandyBox").title=Qt("hidden")}function Qu(){let n=Pt("listItems");n.innerHTML="",mn.forEach((t,e)=>{let i=Zu(t),s=document.createElement("li");s.className=i?"open":"locked",s.innerHTML=`<button class="go" data-i="${e}"><span class="d">${t.bonus?"\u2605":t.day}</span><span class="e">${t.emoji}</span><b></b><small></small></button>`+(i?`<a class="playL" data-slug="${t.slug}" href="${Tc(t)}" target="_blank" rel="noopener">\u25B6</a>`:'<span class="lockL" aria-disabled="true">\u{1F512}</span>'),s.querySelector("b").textContent=$c(t),s.querySelector("small").textContent=t.bonus?Qt("bonus"):i?`${Qt("released")} ${ji(t.date,F.lang)}`:`${Qt("coming")} ${ji(t.date,F.lang)}`,n.appendChild(s)}),Pt("listTitle").textContent=Qt("listTitle")}function Ci(n,t=!0){let e=dt.houses[n],i=e.gm,s=e.open;F.sel=n;let r=Pt("card");r.classList.add("show"),r.classList.toggle("locked",!s),r.dataset.slug=i.slug,Pt("cEmoji").textContent=i.emoji,Pt("cTitle").textContent=$c(i),Pt("cDay").textContent=i.bonus?"\u2605 "+Qt("bonus"):`${Qt("day")} ${i.day} \xB7 `+(s?`${Qt("released")} ${ji(i.date,F.lang)}`:`${Qt("coming")} ${ji(i.date,F.lang)}`),Pt("cSub").textContent=i[F.lang][1]||Qt(s?"subOpen":"subSoon");let o=Pt("cPlay");s?(o.href=Tc(i),o.style.display="",o.textContent=Qt("play"),o.title=Qt("newTab"),Pt("cLocked").style.display="none"):(o.removeAttribute("href"),o.style.display="none",Pt("cLocked").style.display="",Pt("cLocked").textContent=`${Qt("coming")} ${ji(i.date,F.lang)} \u2013 ${Qt("locked")}`);for(let a of dt.houses)ta(a.badge.userData.tc,a.gm,a.open,a.i===n||a.i===F.hover);t&&(Or(Ju(n)),F.mode!=="tour"&&di("free"),s?ae.door(Ur(e.door)):ae.locked(Ur(e.door)))}function ns(){if(!(F.sel<0)){F.sel=-1,Pt("card").classList.remove("show");for(let n of dt.houses)ta(n.badge.userData.tc,n.gm,n.open,n.i===F.hover)}}function am(){ns(),Pt("card").classList.add("show","locked"),Pt("card").dataset.slug="",Pt("cEmoji").textContent="\u{1F570}\uFE0F",Pt("cTitle").textContent=Qt("tower"),Pt("cDay").textContent=ia(),Pt("cSub").textContent=Qt("towerSub"),Pt("cPlay").style.display="none",Pt("cLocked").style.display="none",F.sel=-2,Or(sM()),ae.bellToll(.6),Ei=1}function ju(){let n=Fr(),t=new Date(n.getFullYear(),9,31,0,0,0);if(n.getMonth()===9&&n.getDate()===31)return{happy:!0};if(n>t)return{next:!0};let e=t-n,i=Math.floor(e/864e5),s=Math.floor(e/36e5)%24,r=Math.floor(e/6e4)%60,o=Math.floor(e/1e3)%60;return{d:i,h:s,m:r,s:o,days:Math.ceil(e/864e5)}}function ia(){let n=ju();return n.happy?Qt("cdHappy"):n.next?Qt("cdNext"):n.d===0?Qt("cdTonight"):Qt("cdDays")(n.days)}var Rr=n=>String(n).padStart(2,"0"),Vp="";function td(n){let t=ju(),e=t.happy?"\u{1F383} \u{1F386} \u{1F383}":t.next?"\u{1F383}":`${t.d}d ${Rr(t.h)}:${Rr(t.m)}:${Rr(t.s)}`,i=F.lang+e+(t.happy?1:0);if(!n&&i===Vp)return;Vp=i;let{g:s,t:r}=dt.board;s.fillStyle="#1a0f0a",s.fillRect(0,0,1024,256),s.strokeStyle="#c99a3e",s.lineWidth=10,s.strokeRect(8,8,1008,240),s.textAlign="center",s.textBaseline="middle",s.fillStyle=t.happy?"#ffcf6a":"#ffb85a",s.font=`700 ${t.happy?92:66}px Fredoka, sans-serif`,s.fillText(ia().toUpperCase(),512,t.happy?96:80,980),s.fillStyle="#f2e6d0",s.font="700 96px Fredoka, sans-serif",s.fillText(e,512,182,980),r.needsUpdate=!0,Pt("hCount").textContent=t.happy?"\u{1F383} "+Qt("cdHappy"):t.next?Qt("cdNext"):`\u23F3 ${ia()} \xB7 ${t.d}d ${Rr(t.h)}:${Rr(t.m)}:${Rr(t.s)}`,F.sel===-2&&(Pt("cDay").textContent=ia())}var kp=new Po,Gp=new ct;function ed(n,t){Gp.set(n/Ai*2-1,-(t/hi)*2+1),kp.setFromCamera(Gp,ge);let e=[...dt.houses.map(s=>s.hit),...dt.candies.filter(s=>!s.got).map(s=>s.hit),dt.towerGroup],i=kp.intersectObjects(e,!0);for(let s of i){let r=s.object;for(;r&&r.userData.house===void 0&&r.userData.candy===void 0&&r!==dt.towerGroup;)r=r.parent;if(r)return r.userData.candy!==void 0?{candy:r.userData.candy,d:s.distance}:r===dt.towerGroup?{tower:!0,d:s.distance}:{house:r.userData.house,d:s.distance}}return null}function nd(n){if(F.hover===n)return;let t=F.hover;F.hover=n;for(let e of[t,n])e>=0&&ta(dt.houses[e].badge.userData.tc,dt.houses[e].gm,dt.houses[e].open,e===n||e===F.sel);n>=0&&!F.touch&&ae.hover()}function Wu(n,t,e){let i=Pt("tip");if(n<0){i.classList.remove("show");return}let s=dt.houses[n];i.innerHTML="";let r=document.createElement("b");r.textContent=`${s.gm.emoji} ${$c(s.gm)}`;let o=document.createElement("small");o.textContent=s.gm.bonus?"\u2605 "+Qt("bonus"):`${Qt("day")} ${s.gm.day} \xB7 `+(s.open?ji(s.gm.date,F.lang):`${Qt("coming")} ${ji(s.gm.date,F.lang)}`),i.append(r,o),i.classList.toggle("locked",!s.open),i.style.left=Oe(t+16,8,Ai-260)+"px",i.style.top=Oe(e+14,8,hi-70)+"px",i.classList.add("show")}function lm(n){let t=dt.candies[n];!t||t.got||(t.got=!0,F.got.add(n),Ti.set("ht-candy",[...F.got].join(",")),t.g.visible=!1,oi(Xn,t.p,Math.round(70*dt.q.parts)+10,{colors:["#ffe08a","#ff8ad6","#8affc8","#9ad0ff"],speed:3,up:2,life:.9,grav:3,size:.18}),ae.candy(),om(),F.got.size>=mn.length?(la(Qt("allFound"),4200),ae.allCandy(),F.fwShow=14,Ku("\u{1F36C} "+Qt("allFound").split("!")[0]+"!")):la(Qt("found")(F.got.size,mn.length)))}var ui=new Map,En=null,As=null;function Wc(){F.idle=0,F.mode==="tour"&&fi(),F.mode==="intro"&&F.it>1.2,Ps(),pM()}qn.addEventListener("pointerdown",n=>{if(F.touch=n.pointerType==="touch",qn.setPointerCapture&&qn.setPointerCapture(n.pointerId),ui.set(n.pointerId,{x:n.clientX,y:n.clientY,x0:n.clientX,y0:n.clientY,t0:performance.now(),b:n.button,sh:n.shiftKey}),Ps(),ui.size===2){let[t,e]=[...ui.values()];As={d:Math.hypot(t.x-e.x,t.y-e.y),cx:(t.x+e.x)/2,cy:(t.y+e.y)/2},En=null}else En={x:n.clientX,y:n.clientY,moved:!1,pan:n.button===2||n.shiftKey}});qn.addEventListener("pointermove",n=>{let t=ui.get(n.pointerId);if(!t){if(n.pointerType==="mouse"){let s=ed(n.clientX,n.clientY);nd(s&&s.house!==void 0?s.house:-1),Wu(s&&s.house!==void 0?s.house:-1,n.clientX,n.clientY),qn.style.cursor=s?"pointer":"grab"}return}if(t.x=n.clientX,t.y=n.clientY,ui.size>=2&&As){let[s,r]=[...ui.values()],o=Math.hypot(s.x-r.x,s.y-r.y),a=(s.x+r.x)/2,l=(s.y+r.y)/2;if(F.mode==="intro")return;Wc(),F.mode!=="free"&&di("free"),qt.dist=Oe(qt.dist*As.d/Math.max(20,o),3,150),Wp(a-As.cx,l-As.cy),As={d:o,cx:a,cy:l};return}if(!En)return;let e=n.clientX-En.x,i=n.clientY-En.y;En.x=n.clientX,En.y=n.clientY,Math.hypot(n.clientX-t.x0,n.clientY-t.y0)>7&&(En.moved=!0),!(!En.moved||F.mode==="intro")&&(Wc(),F.mode!=="free"&&di("free"),En.pan?Wp(e,i):(qt.yaw-=e*.0062,qt.pitch=Oe(qt.pitch+i*.0048,-.12,1.35)),Wu(-1))});function cm(n){let t=ui.get(n.pointerId);if(!t)return;ui.delete(n.pointerId),ui.size<2&&(As=null);let e=Math.hypot(n.clientX-t.x0,n.clientY-t.y0)<8&&performance.now()-t.t0<600&&(!En||!En.moved);ui.size===0&&(En=null),e&&n.type==="pointerup"&&rM(n.clientX,n.clientY)}qn.addEventListener("pointerup",cm);qn.addEventListener("pointercancel",cm);qn.addEventListener("contextmenu",n=>n.preventDefault());qn.addEventListener("pointerleave",n=>{n.pointerType==="mouse"&&(nd(-1),Wu(-1))});function rM(n,t){if(F.mode==="intro"){Ps();return}let e=ed(n,t);if(F.idle=0,F.mode==="tour"&&fi(),!e){ns();return}if(e.candy!==void 0){lm(e.candy);return}if(e.tower){am();return}Ci(e.house),F.touch&&nd(e.house)}function Wp(n,t){let e=qt.dist*.0016+.02,i=-Math.sin(qt.yaw),s=-Math.cos(qt.yaw);qt.t.x+=(-n*Math.cos(qt.yaw)+t*i)*e*1,qt.t.z+=(n*Math.sin(qt.yaw)+t*s)*e*1}qn.addEventListener("wheel",n=>{n.preventDefault(),F.mode!=="intro"&&(Wc(),F.mode!=="free"&&di("free"),qt.dist=Oe(qt.dist*Math.exp(Oe(n.deltaY,-200,200)*.0012),3,150))},{passive:!1});var ca=new Set;window.addEventListener("keydown",n=>{if(n.target&&n.target.tagName==="INPUT")return;let t=n.code;if(Ps(),t==="Escape"){Pt("list").classList.contains("show")?Rs(!1):F.mode==="intro"?Nr():F.mode==="tour"?fi():ns();return}if(F.mode==="intro"){(t==="Space"||t==="Enter")&&Nr();return}["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","KeyQ","KeyE","PageUp","PageDown","Minus","Equal","NumpadAdd","NumpadSubtract"].includes(t)&&(ca.add(t),Wc(),F.mode!=="free"&&di("free"),n.preventDefault()),t==="KeyT"&&um(),t==="KeyL"&&Rs(),t==="KeyH"&&(Or(li),ns()),(t==="Enter"||t==="NumpadEnter")&&F.sel>=0&&dt.houses[F.sel].open&&Pt("cPlay").click(),t==="Tab"&&!n.shiftKey&&F.sel>=-1&&document.activeElement===Zc&&(n.preventDefault(),Ci((F.sel+1)%mn.length))});window.addEventListener("keyup",n=>ca.delete(n.code));window.addEventListener("blur",()=>ca.clear());function oM(n){if(!ca.size)return;let t=(qt.dist*.55+10)*n,e=0,i=0,s=0;for(let r of ca)(r==="KeyW"||r==="ArrowUp")&&e++,(r==="KeyS"||r==="ArrowDown")&&e--,r==="KeyA"&&i--,r==="KeyD"&&i++,r==="ArrowLeft"&&(qt.yaw+=n*1.6),r==="ArrowRight"&&(qt.yaw-=n*1.6),(r==="KeyE"||r==="PageUp")&&s++,(r==="KeyQ"||r==="PageDown")&&s--,(r==="Minus"||r==="NumpadSubtract")&&(qt.dist=Oe(qt.dist*(1+n*1.5),3,150)),(r==="Equal"||r==="NumpadAdd")&&(qt.dist=Oe(qt.dist*(1-n*1.5),3,150));qt.t.x+=(-Math.sin(qt.yaw)*e+Math.cos(qt.yaw)*i)*t,qt.t.z+=(-Math.cos(qt.yaw)*e-Math.sin(qt.yaw)*i)*t,qt.t.y+=s*t*.5,e&&qt.dist<9&&(Xp-=n)<0&&(Xp=.42,ae.step())}var Xp=0;Pt("btnSound").onclick=()=>{Ps(),Bp(!Uc()),Pt("btnSound").classList.toggle("on",!Uc()),Pt("btnSound").textContent=Uc()?"\u{1F507}":"\u{1F50A}"};Pt("btnLang").onclick=()=>{F.lang=F.lang==="de"?"en":"de",Ti.set("ht-lang",F.lang),Br(),ae.ui()};Pt("btnQ").onclick=()=>{let n=["low","mid","high","ultra"];kc(n[(n.indexOf(F.q)+1)%4],!0),la(`${Qt("quality")}: ${Qt("q_"+F.q)}`),ae.ui()};Pt("btnCalm").onclick=()=>{id(!F.calm),la(F.calm?Qt("calmOn"):Qt("calmOff"),3200)};function id(n){F.calm=n,dt.calm=n,Ti.set("ht-calm",n?"1":"0"),Zc.classList.toggle("calm",n),rm(),n&&ae.kids()}Pt("btnTour").onclick=()=>um();Pt("btnList").onclick=()=>Rs();Pt("btnOpening").onclick=()=>sd();Pt("btnSkip").onclick=()=>Nr();Pt("btnSoundHint").onclick=()=>Ps();Pt("cClose").onclick=()=>ns();Pt("cPrev").onclick=()=>{fi(),Ci(((F.sel<0?0:F.sel)-1+mn.length)%mn.length)};Pt("cNext").onclick=()=>{fi(),Ci(((F.sel<0?-1:F.sel)+1)%mn.length)};Pt("cPlay").addEventListener("click",()=>{let n=dt.houses[F.sel];n&&(ae.door(0),n.enter=1),window.__htEntered=(window.__htEntered||0)+1});Pt("listClose").onclick=()=>Rs(!1);Pt("listItems").addEventListener("click",n=>{let t=n.target.closest("button.go");t&&(Rs(!1),fi(),Ci(+t.dataset.i)),n.target.closest("a.playL")&&ae.door(0)});function Rs(n){let t=Pt("list"),e=n??!t.classList.contains("show");t.classList.toggle("show",e),e&&(Qu(),fi()),ae.ui()}var Xu=!1;function Ps(){Fp(),Xu||(Xu=!0,Pt("btnSoundHint").classList.remove("show"))}var Xe=[[0,[0,30,262],[0,36,-400],30],[1.5,[0,25,218],[0,33,-300],32],[2.9,[0,13.5,168],[0,22,-40],40],[3.6,[0,7.4,131],[0,18,0],50],[4.5,[0,6.6,86],[0,20,0],53],[5.45,[0,10.5,44],[0,24,0],50],[6.35,[0,21.5,19],[0,25,0],46]],ha=9.2,es=6.35,aM=new ds(Xe.map(n=>new A(...n[1])),!1,"centripetal"),lM=new ds(Xe.map(n=>new A(...n[2])),!1,"centripetal");function cM(n){for(let t=0;t<Xe.length-1;t++)if(n<=Xe[t+1][0]){let e=(n-Xe[t][0])/(Xe[t+1][0]-Xe[t][0]);return(t+e)/(Xe.length-1)}return 1}var ua=[];function sd(){ns(),Rs(!1),fi(),di("intro"),F.it=0,F.introSeen=!0,ua.length=0,dt.ignite=0;for(let t of dt.houses)t.ign=0;for(let t of dt.lanterns)t.on=0;let n=[[0,()=>{F.calm?(dt.flash=.45,ae.thunder(!0)):(ea(dt,ge,new A(-150,330,-660),new A(-110,40,-600),ce),ae.crack())}],[.95,()=>{F.calm||(ea(dt,ge,new A(170,320,-650),new A(120,30,-560),ce),ae.thunder(!1))}],[1.45,()=>ae.whoosh(.55)],[3.3,()=>ae.whoosh(.35)],[es,()=>{ae.bellDeep(F.calm?.65:1),ae.organSwell(F.calm?.35:.55),dt.punch=1,Ei=1,hM(),uM()}],[es+2.2,()=>ae.bellToll(.4)],[ha-.4,()=>ae.owl(-.4)]];for(let t of n)ua.push({t:t[0],f:t[1],done:!1});Pt("btnSoundHint").classList.toggle("show",!Xu)}function hM(){let n=Pt("ttl");n.classList.remove("show"),n.offsetWidth,n.classList.add("show")}function uM(){for(let n=0;n<40;n++){let t=n/40*Math.PI*2;oi(Xn,new A(Math.sin(t)*4.2,ts.clockY,Math.cos(t)*.4+4.4),2,{colors:["#ffcf7a","#ff9a40"],speed:.4,vx:Math.sin(t)*6,up:Math.cos(t)*6,life:1.1,grav:0,drag:1.6,size:.5})}}function dM(n){let t=F.it;for(let o of ua)!o.done&&t>=o.t&&(o.done=!0,o.f());let e,i,s;if(t<=es){let o=cM(t);e=aM.getPoint(o),i=lM.getPoint(o);let a=0;for(;a<Xe.length-2&&t>Xe[a+1][0];)a++;let l=Cr((t-Xe[a][0])/(Xe[a+1][0]-Xe[a][0]));s=ci(Xe[a][3],Xe[a+1][3],l)}else{let o=Jp((t-es-.35)/(ha-es-.35)),a=new A(...Xe[Xe.length-1][1]),l=new A(...Xe[Xe.length-1][2]),h=nm(li),c=a.clone().lerp(h,o);c.y+=Math.sin(o*Math.PI)*12,e=c,i=l.clone().lerp(li.t,o),s=ci(46,tm(),o)}let r=dt.punch||0;r>0&&(e=e.clone().lerp(new A(0,ts.clockY,4),.12*Math.sin(Math.min(1,r)*Math.PI)));for(let o of dt.houses)!o.ign&&(e.z<o.g.position.z+30||t>5.2)&&(o.ign=.001);for(let o of dt.lanterns)!o.on&&(e.z<o.p.z+26||t>5.4)&&(o.on=.001);return t>=ha&&hm(),{p:e,l:i,fov:s}}function hm(){fe.t.copy(li.t),fe.yaw=li.yaw,fe.pitch=li.pitch,fe.dist=li.dist,Or(li);for(let n of dt.houses)n.ign||(n.ign=.001);for(let n of dt.lanterns)n.on||(n.on=.001);di("free"),Pt("btnSoundHint").classList.remove("show"),fM(),Br(),aa()&&(Ir=1.2)}function Nr(){if(F.mode==="intro"){for(let n of ua)!n.done&&n.t>=es&&n.t<es+.1&&(n.done=!0,ae.bellToll(.5));for(let n of ua)n.done=!0;F.it=ha,hm()}}var Lr=0;function fM(){Pt("help").classList.add("show"),Lr=9}function pM(){Lr>1.5&&(Lr=1.5)}function mM(){let n=t=>t.bonus?99:t.day;return mn.map((t,e)=>e).sort((t,e)=>n(mn[t])-n(mn[e])||t-e)}function um(){F.mode==="tour"?fi():dm()}function dm(){F.mode==="intro"&&Nr(),Rs(!1),di("tour"),F.tourI=-1,F.tourT=0,F.tourList=mM(),fm(),ae.organSwell(.3),Br()}function fm(){if(F.tourI++,F.tourI>=F.tourList.length){ns(),F.tourI=-1,Or(li),di("free"),Br(),ae.bellToll(.5);return}let n=F.tourList[F.tourI];F.tourFrom={t:fe.t.clone(),yaw:fe.yaw,pitch:fe.pitch,dist:fe.dist},F.tourTo=Ju(n),F.tourTo.yaw=fe.yaw+Kp(F.tourTo.yaw-fe.yaw),F.tourT=0,F.tourHold=dt.houses[n].open?3:1.7,ae.whoosh(.18),Pt("tourChip").textContent=`\u{1F3AC} ${Qt("tourOf")(F.tourI+1,F.tourList.length)}`}function fi(){F.mode==="tour"&&(di("free"),qt.t.copy(fe.t),qt.yaw=fe.yaw,qt.pitch=fe.pitch,qt.dist=fe.dist,Br())}function gM(n){F.tourT+=n;let t=2.4,e=Jp(F.tourT/t),i=F.tourFrom,s=F.tourTo,r=Math.sin(e*Math.PI);fe.t.lerpVectors(i.t,s.t,e),fe.yaw=ci(i.yaw,s.yaw,e),fe.pitch=ci(i.pitch,s.pitch,e)+r*.3,fe.dist=ci(i.dist,s.dist,e)+r*16,qt.t.copy(fe.t),qt.yaw=fe.yaw,qt.pitch=fe.pitch,qt.dist=fe.dist,F.tourT>=t&&F.sel!==F.tourList[F.tourI]&&(Ci(F.tourList[F.tourI],!1),dt.houses[F.sel].open?Dc(50+F.tourI%5*3,.22,1.6,0,.3):ae.locked(0)),F.tourT>=t+F.tourHold&&fm()}var Vc=new A,qp=new A;function Ur(n){qp.set(1,0,0).applyQuaternion(ge.quaternion),Vc.subVectors(n,ge.position);let t=Vc.length()||1;return Oe(Vc.dot(qp)/t,-1,1)*.8}function Ri(n){return ge.position.distanceTo(n)}var on={owl:6,howl:26,bell:24,thunder:12,ghost:0,bats:8},Bc=-1,zc=[];function _M(n){let t=F.calm,e=ge.position.y;Es("wind_loop",(t?.18:.3)+Oe(e/120,0,.25),1),Es("night_loop",t?.2:.26,1),Es("eerie_loop",t?0:.12,1);let i=1e9;for(let o of dt.lanterns)i=Math.min(i,Ri(o.p));if(Es("torch_loop",Oe(1-i/12,0,1)*.35,1),Es("clock_loop",Oe(1-Ri(Vc.set(0,ts.clockY,0))/30,0,1)*.45,1),Es("fw_bed",aa()||F.fwShow>0?t?.08:.16:0,1,1.5),F.mode==="intro")return;if((on.owl-=n)<0&&(on.owl=14+ce()*18,ae.owl((ce()-.5)*1.4)),(on.howl-=n)<0&&(on.howl=34+ce()*30,t||ae.howl((ce()-.5)*1.4)),(on.bell-=n)<0&&(on.bell=45+ce()*40,ae.bellFar((ce()-.5)*1.2)),(on.thunder-=n)<0&&(on.thunder=22+ce()*22,!t)){let o=(ce()-.5)*2.2,a=520+ce()*120;ea(dt,ge,new A(Math.sin(o)*a,300+ce()*60,-Math.cos(o)*a),new A(Math.sin(o)*a*.92,30,-Math.cos(o)*a*.92),ce),dt.flash=.55,on.thQ=.3+ce()*.9}on.thQ>0&&(on.thQ-=n)<=0&&ae.thunder(ce()<.6),on.ghost-=n;for(let o of dt.ghosts)on.ghost<0&&Ri(o.s.position)<9&&(on.ghost=9,ae.ghost(Ur(o.s.position),t));if(on.bats-=n,on.bats<0){for(let o of dt.bats)if(!o.F.far&&Ri(o.b.position)<14){on.bats=12,ae.bats(t?.18:.32,Ur(o.b.position));break}}let s=Fr(),r=Math.floor(s.getMinutes()/15);if(Bc<0&&(Bc=r),r!==Bc){Bc=r;let o=r===0?Math.min(4,s.getHours()%12||12):r;for(let a=0;a<o;a++)zc.push(F.gt+a*2.4)}zc.length&&F.gt>=zc[0]&&(zc.shift(),ae.bellToll(.45),Ei=1)}var sa=[],Yp=[["#ff8a2a","#ffd06a"],["#b06aff","#ff7ae0"],["#5aff8a","#d8ff6a"],["#ff4f5a","#ffb0a0"],["#ffd23a","#ffffff"],["#5ac8ff","#c8a0ff"]];function Xc(n,t){let e=t!==void 0||ce()<.65,i=t!==void 0?t:e?(ce()-.5)*2.4:ce()*Math.PI*2,s=e?14+ce()*34:30+ce()*34,r=new A(Math.sin(i)*s,2,Math.cos(i)*s-6);sa.push({p:r,v:new A((ce()-.5)*4,34+ce()*10,(ce()-.5)*4),fuse:1.3+ce()*.5,col:Yp[Math.floor(ce()*Yp.length)],kind:n||(ce()<.2?"ring":ce()<.2?"willow":"peony")}),ae.fwLaunch(Ur(r),F.calm?.12:.3)}var ra=[],Ir=6,Zp=null;function qu(n=!0){let t=F.calm?5:n?16:9;for(let e=0;e<t;e++)ra.push({t:F.gt+e*(F.calm?.5:.22)+(e===t-1?.5:0),last:e===t-1,i:e});n&&(Ku("\u{1F383} "+Qt("cdHappy")),ae.bellToll(.55),Ei=1)}function xM(){for(;ra.length&&F.gt>=ra[0].t;){let n=ra.shift();Xc(n.last?"willow":["ring","peony","willow","peony"][n.i%4],n.last?0:(n.i%2?1:-1)*(.3+n.i*.07)),n.last&&(dt.fwFlash=1.2)}}function yM(n){let t=aa();Zp===!1&&t&&F.mode!=="intro"&&qu(!0),Zp=t,t&&F.mode!=="intro"&&(Ir-=n,Ir<0&&(Ir=F.calm?60:32,qu(Ir>0&&F.fwShow<=0))),xM();let e=aa()||F.fwShow>0;F.fwShow>0&&(F.fwShow-=n),e&&F.mode!=="intro"&&(F.fwT-=n,F.fwT<0&&(F.fwT=(F.calm?1.6:.7)+ce()*1.1,Xc(),!F.calm&&ce()<.3&&Xc()));for(let i=sa.length-1;i>=0;i--){let s=sa[i];if(s.fuse-=n,s.v.y-=9*n,s.p.addScaledVector(s.v,n),ce()<.9&&oi(Xn,s.p,1,{colors:["#ffcf8a"],speed:.3,life:.45,grav:2,size:.35}),s.fuse<=0){sa.splice(i,1);let r=Math.round((F.calm?140:280)*dt.q.parts),o=s.kind||"peony";o==="ring"?(oi(Xn,s.p,Math.round(r*.8),{colors:s.col,speed:28,shell:!0,ring:!0,tilt:ce()*.9,life:2.6,grav:2.5,drag:1.1,size:1.9}),oi(Xn,s.p,Math.round(r*.3),{colors:["#ffffff"],speed:4,life:.8,grav:2,size:1})):o==="willow"?oi(Xn,s.p,r,{colors:["#ffcf6a","#ffb040","#fff0c0"],speed:21,shell:!0,life:3.8,grav:6.5,drag:1.8,size:1.5}):oi(Xn,s.p,r,{colors:s.col,speed:25+ce()*7,shell:!0,life:2.5,grav:4,drag:1.25,size:1.75}),ce()<.6&&oi(Xn,s.p,Math.round(r*.45),{colors:[s.col[1]],speed:9,shell:!0,life:1.6,grav:4,drag:1.5,size:.9}),dt.fwFlash=Math.max(dt.fwFlash||0,.5),ae.fwBurst(Ur(s.p),Oe(60/Ri(s.p),.15,.6),Ri(s.p)/340,F.calm)}}}var Yu=[];{let n=new _n({map:dt.soft,transparent:!0,opacity:0,depthWrite:!1,color:"#9a9aa8"});for(let t=0;t<70;t++){let e=new Mn(n.clone());e.visible=!1,Cs.add(e),Yu.push({s:e,life:0})}}function vM(n){for(let t of dt.smoke)if(t.t-=n,t.t<0){t.t=.45+ce()*.4;let e=Yu.find(i=>i.life<=0);e&&(e.life=e.max=3.2,e.s.visible=!0,e.s.position.copy(t.p),e.s.material.color.set(t.col),e.v=new A(.4+ce()*.3,1.1,(ce()-.5)*.3))}for(let t of Yu){if(t.life<=0)continue;t.life-=n;let e=1-t.life/t.max;t.s.position.addScaledVector(t.v,n),t.s.scale.setScalar(.8+e*3.2),t.s.material.opacity=Math.sin(Math.PI*Math.min(1,e))*.22,t.life<=0&&(t.s.visible=!1)}}var Ei=0,$p=new A;function MM(n){let t=F.gt,e=F.calm;dt.skyU.time.value=t,dt.flash=gn(dt.flash)*Math.exp(-n*6.5),dt.fwFlash=gn(dt.fwFlash)*Math.exp(-n*5);let i=Oe(dt.flash,0,1)*(e?.4:1);dt.skyU.flash.value=i*.9,dt.hemi.intensity=1.2+i*1.5+dt.fwFlash*.6,dt.moonL.intensity=1.7+i*1.2,dt.halo.material.opacity=.26+i*.1+Math.sin(t*.7)*.03;for(let c of dt.bolts)if(c.life>0){c.life-=n;let u=Oe(c.life/.55,0,1)*(.6+.4*Math.sin(t*90));c.m.material.opacity=u*.95,c.g2.material.opacity=u*.22}else c.m.material.opacity=0,c.g2.material.opacity=0;for(let c of dt.clouds)c.position.x+=n*3.5,c.position.x>560&&(c.position.x=-560),c.material.color.setRGB(.16+i*.3,.19+i*.3,.3+i*.3);for(let c of dt.houses){c.ign>0&&c.ign<1&&(c.ign=Math.min(1,c.ign+n*1.6));let d=c.ign||0;c.hover=ci(c.hover,F.hover===c.i||F.sel===c.i?1:0,1-Math.exp(-n*8)),c.enter&&(c.enter=Math.max(0,c.enter-n*.5));let u=.82+.1*Math.sin(t*7.1+c.flick)+.08*Math.sin(t*13.3+c.flick*2);for(let m of c.wmats)m.emissiveIntensity=gn(d*(1.15*u+c.hover*.45+(c.enter||0)));for(let m of c.faces)m.material.opacity=d;let f=3.4*(1+c.hover*.3)*(F.mode==="intro"?Cr((F.it-6.6)/1.2):1);c.badge.scale.setScalar(Math.max(.001,f)),c.badge.material.opacity=Oe(f/3.4,0,1);for(let m of c.anim){let y=m.o;m.k==="bob"?y.position.y=m.y+Math.sin(t*1.4+m.ph)*.18:m.k==="spinZ"?y.rotation.y=t*.5:m.k==="spinY"?y.rotation.y=t*(F.calm?.35:.8):m.k==="swing"?y.rotation.z=Math.sin(t*1.3+c.flick)*.12:m.k==="bell"?y.rotation.z=Math.sin(t*2)*.15:m.k==="spider"?y.position.y=m.y+Math.sin(t*.8)*.8:m.k==="flag"?y.rotation.y=Math.sin(t*2.2)*.25:m.k==="pulse"&&y.material.emissiveIntensity!==void 0&&(y.material.emissiveIntensity=c.open?1+Math.sin(t*9)*.5*(e?.3:1):0)}c.coilTop&&c.open&&!e&&ce()<n*.25&&Ri(c.coilTop)<70&&oi(Xn,c.coilTop,18,{colors:["#d0b0ff","#ffffff","#9a70ff"],speed:3,life:.4,grav:1,size:.25})}for(let c of dt.flick)c.m.opacity=(dt.ignite||F.mode!=="intro"||F.it>3?1:0)*(.78+.14*Math.sin(t*9+c.ph)+.08*Math.sin(t*17+c.ph));for(let c of dt.lanterns){c.on>0&&c.on<1&&(c.on=Math.min(1,c.on+n*2.2));let d=(.84+.1*Math.sin(t*8+c.ph)+.06*Math.sin(t*21+c.ph*3))*(c.on||0);c.f=d,c.lamp.material.emissiveIntensity=1.6*d,c.gl.material.opacity=.42*d,c.pool.material.opacity=.5*d,c.d=c.p.distanceToSquared(fe.t)+c.p.distanceToSquared(ge.position)*.3}let s=dt.q.lights,r=dt.lanterns.slice().sort((c,d)=>c.d-d.d);dt.lightPool.forEach((c,d)=>{let u=d<s?r[d]:null;u?(c.position.copy(u.p),c.intensity=14*u.f):c.intensity=0}),dt.towerGlow.intensity=60*(F.mode==="intro"?Cr((F.it-4)/2):1);let o=Fr(),a=(o.getHours()%12+o.getMinutes()/60)/12*Math.PI*2,l=(o.getMinutes()+o.getSeconds()/60)/60*Math.PI*2;for(let[c,d]of dt.hands)c.rotation.z=-a,d.rotation.z=-l;Ei=Math.max(0,Ei-n*.25),dt.bell.rotation.z=Math.sin(t*3.2)*.35*Ei,dt.bellLight.intensity=20*Ei,dt.punch=Math.max(0,gn(dt.punch)-n*1.4),dt.clockMat.emissiveIntensity=.5+dt.punch*.22+Ei*.08;let h=dt.q.mist;dt.mist.forEach((c,d)=>{if(c.s.visible=d<h,!c.s.visible)return;c.s.position.x=c.x0+Math.sin(t*.05+c.ph)*6+t*c.vx*0;let u=Ri(c.s.position);c.s.material.opacity=c.base*Cr((u-5)/18)*(F.mode==="intro"?.7:1)}),dt.ghosts.forEach((c,d)=>{let u=c.sp*(e?.6:1),f=t*u+c.ph;c.path==="ring"?c.s.position.set(Math.sin(f)*c.rad*.6,c.y+Math.sin(t*.9+c.ph)*.8,Math.cos(f)*c.rad*.6):c.s.position.set(c.cx+Math.sin(f*1.3)*7,c.y+Math.sin(t*1.1+c.ph)*.9,c.cz+Math.sin(f)*40);let m=Ri(c.s.position);c.s.material.opacity=(e&&d>3?0:e?.38:.55)*Cr((m-2)/6)*(.75+.25*Math.sin(t*1.7+c.ph))*(F.mode==="intro"?Cr((F.it-4)/2):1)});for(let c of dt.bats){let d=c.F,u=t*d.sp*(e?.6:1)+c.ph;c.b.position.set(d.c.x+Math.cos(u)*c.rr,d.c.y+c.off+Math.sin(u*2.3)*1.2,d.c.z+Math.sin(u)*c.rr),$p.set(d.c.x+Math.cos(u+.1)*c.rr,c.b.position.y,d.c.z+Math.sin(u+.1)*c.rr),c.b.lookAt($p);let f=Math.sin(t*c.fl*(e?.7:1))*.9;c.L.rotation.z=f,c.R.rotation.z=-f}for(let c of dt.candies)c.got||(c.g.position.y=c.p.y+Math.sin(t*2+c.i)*.08,c.g.rotation.y=t*.8+c.i,c.glow.material.opacity=.22+.2*Math.max(0,Math.sin(t*1.6+c.i*1.7)));vM(n)}var Hc=50;function qc(n){if(n=Math.max(0,Math.min(gn(n),1/20)),F.gt+=n,F.idle+=n,F.mode==="intro"){F.it+=n;let t=dM(n);F.mode==="intro"&&(ge.position.copy(Yc(t.p.clone(),.6)),ge.lookAt(t.l),Hc=t.fov)}if(F.mode!=="intro"){if(F.mode==="tour")gM(n);else{oM(n),zp(qt.t),qt.dist=Oe(gn(qt.dist,60),3,150),qt.pitch=Oe(gn(qt.pitch,.3),-.12,1.35),qt.yaw=gn(qt.yaw);let s=1-Math.exp(-n*4.2);fe.t.lerp(qt.t,s),fe.yaw=ci(fe.yaw,qt.yaw,s),fe.pitch=ci(fe.pitch,qt.pitch,s),fe.dist=ci(fe.dist,qt.dist,s)}F.idle>60&&F.mode==="free"&&F.sel<0&&(qt.yaw+=n*.03);let t=nm(fe),e=zp(fe.t.clone()),i=im(e,t);Number.isFinite(i.x+i.y+i.z)||(i=Oc.p.clone()),ge.position.copy(i),ge.lookAt(e),Hc=ci(Hc,tm(),1-Math.exp(-n*3))}!Number.isFinite(ge.position.x+ge.position.y+ge.position.z)||!Number.isFinite(ge.quaternion.x+ge.quaternion.w)?(ge.position.copy(Oc.p),ge.lookAt(Oc.l)):Oc.p.copy(ge.position),ge.fov=Oe(gn(Hc,50),8,100),ge.updateProjectionMatrix(),MM(n),yM(n),_M(n),jp.strength=gn(.62*dt.q.bloom,.6),Dp(Xn,n,hi*An.getPixelRatio()*.5/Math.tan(jh.degToRad(ge.fov/2))),Lr>0&&(Lr-=n,Lr<=0&&Pt("help").classList.remove("show")),(F.boardT=(F.boardT||0)-n)<0&&(F.boardT=.25,td()),(F.unlockT=(F.unlockT||60)-n)<0&&(F.unlockT=60,pm())}function pm(){let n=!1;mn.forEach((t,e)=>{let i=Zu(t);if(i!==dt.houses[e].open){n=!0;let s=Fu(dt,e,t,i);s.ign=1,i&&(Ku(`\u{1F513} ${t.emoji} ${$c(t)}`),ae.door(0))}}),n&&(Qu(),F.sel>=0&&Ci(F.sel,!1))}function rd(){try{Dr.render()}catch{An.render(Cs,ge)}}var Be={acc:0,frames:0,bad:0,since:0,stepped:!1,last:0};function mm(n){if(document.hidden||F.mode==="intro"){Be.since=0,Be.acc=0,Be.frames=0,Be.bad=0;return}if(Be.since+=n,!(Be.since<8||n>.25||n<=0)&&(Be.acc+=n,Be.frames++,Be.acc>=1)){let t=Be.frames/Be.acc;if(Be.acc=0,Be.frames=0,Be.last=t,Be.bad=t<22?Be.bad+1:Math.max(0,Be.bad-2),!F.qUser&&!window.__htNoAutoQ&&!Be.stepped&&Be.bad>=10&&F.q!=="low"){let e=["low","mid","high","ultra"],i=F.q,s=e[e.indexOf(F.q)-1];Be.stepped=!0,kc(s),Be.bad=0,la(`${Qt("autoQ")} ${Qt("q_"+s)} (${Math.round(t)} fps) \xB7 <button id="qUndo" class="pill">${Qt("undo")}</button>`,6e3,!0);let r=Pt("qUndo");r&&(r.onclick=()=>kc(i,!0))}}}var Pr=performance.now();function gm(n){let t=Math.max(0,(gn(n,Pr)-Pr)/1e3)||0;return Pr=Math.max(Pr,gn(n,Pr)),window.__htManual||(qc(t),mm(t)),t}function _m(n){gm(n),rd(),requestAnimationFrame(_m)}id(F.calm);Br();sd();qc(1/60);rd();Zc.classList.add("ready");requestAnimationFrame(_m);oa.get("skip")==="1"&&Nr();["pointerdown","keydown","touchstart"].forEach(n=>window.addEventListener(n,Ps,{once:!0,passive:!0}));window.__ht={S:F,T:dt,C:fe,G:qt,F:Xn,now:Fr,step:(n,t=1)=>{for(let e=0;e<t;e++)qc(n);rd()},stepq:(n,t=1)=>{for(let e=0;e<t;e++)qc(n)},log:Ar,quality:n=>n?kc(n,!0):F.q,renderer:An,camera:ge,scene:Cs,camClear:iM,advance:gm,last:()=>Pr,houses:()=>dt.houses.map(n=>({i:n.i,slug:n.gm.slug,day:n.gm.day,open:n.open,style:n.gm.style})),open:n=>Ci(n),close:ns,tower:am,collect:lm,candies:()=>dt.candies.map(n=>({i:n.i,got:n.got,p:n.p.toArray()})),screen:n=>{let t=new A(...n).project(ge);return{x:(t.x*.5+.5)*Ai,y:(-t.y*.5+.5)*hi,z:t.z}},pick:ed,skip:Nr,intro:sd,tour:dm,stopTour:fi,setCalm:id,fps:Be,fpsTick:mm,launch:Xc,rockets:sa,isHalloween:aa,cd:ju,countdownText:ia,salvo:qu,salvoQ:ra,salvoHold:n=>{Ir=n},setGoal:Or,OVER:li,focusPose:Ju,slot:Uu,solveCam:im,pushOut:Yc,setNow:n=>{let t=wc(n);ku=t?new Date(t.getFullYear(),t.getMonth(),t.getDate(),20,0,0):null,Qp=performance.now(),pm(),td(!0)},bolt:()=>{ea(dt,ge,new A(0,320,-650),new A(30,30,-560),ce)},games:mn,gameURL:Tc,isOpen:Eu,parseDate:wc,IK:Xe,BELL_T:es,IN_END:ha,MOON_POS:bs};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
