"use strict";(self.webpackChunkjamni=self.webpackChunkjamni||[]).push([[258],{5297:(y,p,s)=>{s.d(p,{f:()=>t});var r=s(1135),m=s(8505),f=s(3900),g=s(2340),h=s(7587),_=s(520);let t=(()=>{class a{constructor(i){this.http=i,this.url=g.N.apiUrl,this.address$=new r.X([])}getAddress(){return this.http.get(`${this.url}/users/addresses`).pipe((0,m.b)(i=>this.address$.next(i)))}addAddress(i){return this.http.post(`${this.url}/users/addresses`,i).pipe((0,f.w)(()=>this.getAddress()))}addAddressNoName(i){return this.http.post(`${this.url}/addresses`,i)}editAddress(i,C){return this.http.put(`${this.url}/users/addresses/${C}`,i)}deleteAddress(i){return this.http.delete(`${this.url}/users/addresses/${i}`)}getAddressId(i){return this.http.get(`${this.url}/admin/addresses/${i}`)}}return a.\u0275fac=function(i){return new(i||a)(h.LFG(_.eN))},a.\u0275prov=h.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},7258:(y,p,s)=>{s.r(p),s.d(p,{CutInfoModule:()=>S});var r=s(3075),m=s(7545),f=s(2537),g=s(4466),h=s(7579),_=s(2722),t=s(7587),a=s(6300),v=s(5297),i=s(263),C=s(2598),Z=s(9808);function A(n,d){if(1&n){const o=t.EpF();t.TgZ(0,"div",55)(1,"div",56)(2,"picture"),t._UZ(3,"source",57)(4,"img",58),t.qZA(),t.TgZ(5,"div",59)(6,"h3",60),t._uU(7),t.qZA(),t.TgZ(8,"span",61),t._uU(9),t.qZA(),t.TgZ(10,"div",62)(11,"button",63),t.NdJ("click",function(){const l=t.CHM(o).$implicit;return t.oxw().generalService.deleteProduct(l)}),t._uU(12," - "),t.qZA(),t.TgZ(13,"span",64),t._uU(14),t.qZA(),t.TgZ(15,"button",65),t.NdJ("click",function(){const l=t.CHM(o).$implicit;return t.oxw().generalService.addProduct(l)}),t._uU(16," + "),t.qZA()()(),t.TgZ(17,"button",66),t.NdJ("click",function(){const l=t.CHM(o).$implicit;return t.oxw().generalService.deleteProduct(l)}),t._UZ(18,"img",67),t.qZA()()()}if(2&n){const o=d.$implicit,e=t.oxw();t.xp6(3),t.Q6J("srcset",o.product.coverImage||"assets/img/no-img-placeholder.svg",t.LSH),t.xp6(1),t.Q6J("src",o.product.coverImage||"assets/img/no-img-placeholder.svg",t.LSH),t.xp6(3),t.Oqu(o.product.name),t.xp6(2),t.hij("",e.generalService.getProductAmount(o)*o.product.price," \u0440\u0443\u0431"),t.xp6(5),t.Oqu(e.generalService.getProductAmount(o))}}function w(n,d){if(1&n){const o=t.EpF();t.TgZ(0,"li",79),t.NdJ("click",function(){const l=t.CHM(o).$implicit;return t.oxw(2).updateForm(l)}),t.TgZ(1,"div",80)(2,"span",81),t._uU(3),t.qZA(),t.TgZ(4,"span",82),t._uU(5),t.qZA()()()}if(2&n){const o=d.$implicit;t.xp6(3),t.hij("\u0410\u0434\u0440\u0435\u0441 ",o.id,""),t.xp6(2),t.Oqu(o.street+", "+o.house+", "+o.postcode+", "+o.city+", "+o.country)}}const x=function(n){return{open:n}};function b(n,d){if(1&n){const o=t.EpF();t.TgZ(0,"div",68)(1,"div",69),t.NdJ("click",function(){t.CHM(o);const u=t.oxw();return u.showModal=!u.showModal}),t.qZA(),t.TgZ(2,"div",70)(3,"button",71),t.NdJ("click",function(){t.CHM(o);const u=t.oxw();return u.showModal=!u.showModal}),t.O4$(),t.TgZ(4,"svg",72),t._UZ(5,"line",73)(6,"line",74),t.qZA()(),t.kcU(),t.TgZ(7,"span",75),t._uU(8,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441:"),t.qZA(),t.TgZ(9,"div",76)(10,"ul",77),t.YNc(11,w,6,2,"li",78),t.qZA()()()()}if(2&n){const o=t.oxw();t.Q6J("ngClass",t.VKq(2,x,o.showModal)),t.xp6(11),t.Q6J("ngForOf",o.addressArray)}}const k=function(n){return{error:n}},T=[{path:"",component:(()=>{class n{constructor(o,e,u,l,c,E){this.generalService=o,this.addressApi=e,this.auth=u,this.userApi=l,this.cdr=c,this.router=E,this.destroy$=new h.x,this.email="",this.form=new r.cw({id:new r.NI(""),email:new r.NI("",[r.kI.required,r.kI.email]),firstname:new r.NI("",[r.kI.required]),surname:new r.NI("",[r.kI.required]),country:new r.NI("\u0420\u043e\u0441\u0441\u0438\u044f",[r.kI.required]),city:new r.NI("",[r.kI.required]),postcode:new r.NI("",[r.kI.required]),street:new r.NI("",[r.kI.required]),house:new r.NI("",[r.kI.required]),phone:new r.NI("",[r.kI.required,r.kI.pattern(/^\+\d{1}\(\d{3}\) \d{3}-\d{2}-\d{2}$/)])}),this.showModal=!1,this.addressArray=[]}ngOnInit(){if(setTimeout(()=>{const o=document.querySelector('script[src="assets/main.js"]');o&&document.body.removeChild(o);const e=document.createElement("script");e.src="assets/main.js",document.body.appendChild(e)},500),localStorage.getItem("form")){const o=JSON.parse(localStorage.getItem("form"));this.form.controls.id.setValue(o.id),this.form.controls.email.setValue(o.email),this.form.controls.firstname.setValue(o.firstname),this.form.controls.surname.setValue(o.surname),this.form.controls.city.setValue(o.city),this.form.controls.postcode.setValue(o.postcode),this.form.controls.street.setValue(o.street),this.form.controls.house.setValue(o.house),this.form.controls.phone.setValue(o.phone)}this.auth.getToken()&&(this.showModal=!this.showModal,this.userApi.userS.subscribe(o=>{this.email=o.email,this.form.controls.email.setValue(o.email)}),this.addressApi.getAddress().pipe((0,_.R)(this.destroy$)).subscribe(o=>{this.addressArray=o,this.cdr.detectChanges()}))}ngOnDestroy(){this.destroy$.next(),this.destroy$.complete()}onSaveFormToStorageClick(){localStorage.getItem("form")?localStorage.removeItem("form"):localStorage.setItem("form",JSON.stringify(this.form.value))}updateForm(o){this.form.controls.id.setValue(o.id),this.form.controls.firstname.setValue(o.firstname),this.form.controls.surname.setValue(o.surname),this.form.controls.country.setValue(o.country),this.form.controls.city.setValue(o.city),this.form.controls.postcode.setValue(o.postcode),this.form.controls.street.setValue(o.street),this.form.controls.house.setValue(o.house),this.form.controls.phone.setValue(o.phone),this.showModal=!this.showModal,this.form.updateValueAndValidity()}submitAddress(o){this.auth.getToken()&&this.form.controls.id.value?this.addressApi.editAddress(o.value,o.value.id).pipe((0,_.R)(this.destroy$)).subscribe(e=>{e.email=this.form.value.email,localStorage.setItem("form",JSON.stringify(e)),this.router.navigate(["./cut-delivery"])}):this.addressApi.addAddressNoName(o.value).pipe((0,_.R)(this.destroy$)).subscribe(e=>{e.email=this.form.value.email,localStorage.setItem("form",JSON.stringify(e)),this.router.navigate(["./cut-delivery"])})}openDropdown(o){const e=o.closest(".dropdown"),u=o,l=e.querySelector(".dropdown__icon"),c=e.querySelector(".dropdown__list");c.classList.toggle("dropdown__list--visible"),l.classList.toggle("dropdown__icon--active"),u.classList.add("dropdown__button--active"),c.style.maxHeight=c.classList.contains("dropdown__list--visible")?c.scrollHeight+"px":null}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(a.m),t.Y36(v.f),t.Y36(i.e),t.Y36(C._),t.Y36(t.sBO),t.Y36(m.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["ng-component"]],decls:88,vars:33,consts:[[1,"cut-info"],[1,"small-container"],[1,"cut-info__wrap"],[1,"breadcrumbs","cut-info__breadcrumbs"],[1,"breadcrumbs__link"],[1,"breadcrumbs__link","breadcrumbs__link--active"],["action","#",1,"cut-info__form","form","form-info",3,"formGroup"],[1,"form-info__wrap","form__wrap"],[1,"form-info__row","form__row"],[1,"form__label","form-info__label"],[1,"form-info__text-wrap"],[1,"form-info__title"],[1,"form-info__text","form-info__text--light"],["routerLink","../login",1,"form-info__link"],["type","text","placeholder","\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430",1,"form__input","form-info__input","input-reset",3,"formControl"],[1,"form-info__inner"],[1,"form__row"],[1,"form-group","form-info__select","form__select"],[1,"dropdown","form-info__dropdown","form__dropdown"],["type","button",1,"dropdown__button",3,"click"],[1,"dropdown__icon"],[0,"xlink","href","assets/img/sprite.svg#arrow-down"],[1,"dropdown__list"],["data-value","\u0420\u043e\u0441\u0441\u0438\u044f",1,"dropdown__list-item",3,"click"],["data-value","\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c",1,"dropdown__list-item",3,"click"],["data-value","\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d",1,"dropdown__list-item",3,"click"],["type","text","name","select-category",1,"dropdown__input-hidden",3,"formControl"],["name","name","type","text","placeholder","\u0418\u043c\u044f",1,"form__input","form-info__input","input-reset",3,"formControl"],["name","surname","type","text","placeholder","\u0424\u0430\u043c\u0438\u043b\u0438\u044f",1,"form__input","form-info__input","input-reset",3,"formControl"],["name","city","type","text","placeholder","\u0413\u043e\u0440\u043e\u0434",1,"form__input","form-info__input","input-reset",3,"formControl"],["name","index","type","text","placeholder","\u0418\u043d\u0434\u0435\u043a\u0441",1,"form__input","form-info__input","input-reset",3,"formControl"],["name","street","type","text","placeholder","\u0423\u043b\u0438\u0446\u0430",1,"form__input","form-info__input","input-reset",3,"formControl"],["name","house-num","type","text","placeholder","\u041d\u043e\u043c\u0435\u0440 \u0434\u043e\u043c\u0430",1,"form__input","form-info__input","input-reset",3,"formControl"],["mask","+9(999) 999-99-99","placeholder","\u0422\u0435\u043b\u0435\u0444\u043e\u043d",1,"form-reg__input","form__input",3,"formControl","ngClass"],[1,"custom-checkbox","form-info__checkbox",3,"change"],["type","checkbox","name","save",1,"custom-checkbox__field"],[1,"custom-checkbox__content","form-info__checkbox-content","form-info__text--light"],["type","button",1,"form-info__btn","btn-reset","form__btn","btn-anim",3,"click"],[1,"form__btn-text","form-info__btn-text","btn-anim__text"],[1,"cut-info__result","result-cut","accordion"],[1,"result-cut__accordion-title","accordion__title"],[1,"accordion__icon"],[1,"accordion__icon-line","accordion__icon-line--horizontal"],[1,"accordion__icon-line","accordion__icon-line--vertical"],[1,"accordion__content"],[1,"result-cut__title"],["data-simplebar","",1,"result-cut__items"],["class","result-cut__item item-cut",4,"ngFor","ngForOf"],[1,"result-cut__sum","sum-cut"],[1,"sum-cut__wrap"],[1,"sum-cut__inner-text"],[1,"sum-cut__row"],[1,"sum-cut__title","sum-cut__title--lg"],[1,"sum-cut__txt","sum-cut__txt--lg"],["class","popup",3,"ngClass",4,"ngIf"],[1,"result-cut__item","item-cut"],[1,"item-cut__wrap"],["type","image/webp",3,"srcset"],["loading","lazy","width","130","height","130","alt","prod-image",1,"image",3,"src"],["data-prod","result-cut",1,"item-cut__content"],[1,"item-cut__title"],[1,"item-cut__price"],[1,"item-cut__count","count-prod"],[1,"btn-reset","count-prod__minus",3,"click"],[1,"count-prod__count"],[1,"btn-reset","count-prod__plus",3,"click"],[1,"btn-reset","item-cut__delete",3,"click"],["src","assets/img/cut-img/delete-prod.png","width","20","height","20","alt","delete-icon",1,"item-cut__icon-delete"],[1,"popup",3,"ngClass"],[1,"popup__overlay",3,"click"],[1,"popup__content"],[1,"btn-reset","popup__btn-close",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 30 30","fill","none"],["x1","1.98995","y1","1","x2","29.2843","y2","28.2943","stroke","black","stroke-width","1.4","stroke-linecap","round"],["x1","0.7","y1","-0.7","x2","39.3","y2","-0.7","transform","matrix(-0.707107 0.707107 0.707107 0.707107 29.2852 1)","stroke","black","stroke-width","1.4","stroke-linecap","round"],[1,"popup__title"],[1,"adress"],[1,"address__list"],["class","address__item address-elem",3,"click",4,"ngFor","ngForOf"],[1,"address__item","address-elem",3,"click"],[1,"address-elem__wrap"],[1,"address-elem__id"],[1,"address__info"]],template:function(o,e){1&o&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span",4),t._uU(5,"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"),t.qZA(),t.TgZ(6,"span",5),t._uU(7,"\u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"),t.qZA(),t.TgZ(8,"span",4),t._uU(9,"\u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430"),t.qZA(),t.TgZ(10,"span",4),t._uU(11,"\u043e\u043f\u043b\u0430\u0442\u0430"),t.qZA()(),t.TgZ(12,"form",6)(13,"div",7)(14,"div",8)(15,"label",9)(16,"span",10)(17,"span",11),t._uU(18,"\u041a\u043e\u043d\u0442\u0430\u043a\u0442"),t.qZA(),t.TgZ(19,"span",12),t._uU(20," \u0423\xa0\u0412\u0430\u0441 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u0430\u043a\u043a\u0430\u0443\u043d\u0442? "),t.TgZ(21,"a",13),t._uU(22,"\u0410\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),t.qZA()()(),t._UZ(23,"input",14),t.qZA()(),t.TgZ(24,"div",15)(25,"span",11),t._uU(26,"\u0430\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438 "),t.qZA(),t.TgZ(27,"div",16)(28,"div",17)(29,"div",18)(30,"button",19),t.NdJ("click",function(l){return e.openDropdown(l.target)}),t._uU(31),t.qZA(),t.O4$(),t.TgZ(32,"svg",20),t._UZ(33,"use",21),t.qZA(),t.kcU(),t.TgZ(34,"ul",22)(35,"li",23),t.NdJ("click",function(){return e.form.controls.country.setValue("\u0420\u043e\u0441\u0441\u0438\u044f")}),t._uU(36," \u0420\u043e\u0441\u0441\u0438\u044f "),t.qZA(),t.TgZ(37,"li",24),t.NdJ("click",function(){return e.form.controls.country.setValue("\u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c")}),t._uU(38," \u0411\u0435\u043b\u0430\u0440\u0443\u0441\u044c "),t.qZA(),t.TgZ(39,"li",25),t.NdJ("click",function(){return e.form.controls.country.setValue("\u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d")}),t._uU(40," \u041a\u0430\u0437\u0430\u0445\u0441\u0442\u0430\u043d "),t.qZA()(),t._UZ(41,"input",26),t.qZA()()()(),t.TgZ(42,"div",8)(43,"label",9),t._UZ(44,"input",27),t.qZA(),t.TgZ(45,"label",9),t._UZ(46,"input",28),t.qZA()(),t.TgZ(47,"div",8)(48,"label",9),t._UZ(49,"input",29),t.qZA(),t.TgZ(50,"label",9),t._UZ(51,"input",30),t.qZA()(),t.TgZ(52,"div",8)(53,"label",9),t._UZ(54,"input",31),t.qZA(),t.TgZ(55,"label",9),t._UZ(56,"input",32),t.qZA()(),t.TgZ(57,"div",8)(58,"label",9),t._UZ(59,"p-inputMask",33),t.qZA()(),t.TgZ(60,"div",8)(61,"label",34),t.NdJ("change",function(){return e.onSaveFormToStorageClick()}),t._UZ(62,"input",35),t.TgZ(63,"span",36),t._uU(64,"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u0435 \u044d\u0442\u0443 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044e \u0434\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0432\xa0\u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0438\u0439 \u0440\u0430\u0437"),t.qZA()()()(),t.TgZ(65,"button",37),t.NdJ("click",function(){return e.submitAddress(e.form)}),t.TgZ(66,"span",38),t._uU(67,"\u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"),t.qZA()()(),t.TgZ(68,"div",39)(69,"div",40),t._uU(70," \u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437 "),t.TgZ(71,"div",41),t._UZ(72,"span",42)(73,"span",43),t.qZA()(),t.TgZ(74,"div",44)(75,"h1",45),t._uU(76,"\u0438\u0442\u043e\u0433\u043e\u0432\u0430\u044f \u0441\u0443\u043c\u043c\u0430"),t.qZA(),t.TgZ(77,"div",46),t.YNc(78,A,19,5,"div",47),t.qZA(),t.TgZ(79,"div",48)(80,"div",49)(81,"div",50)(82,"div",51)(83,"span",52),t._uU(84,"\u0438\u0442\u043e\u0433"),t.qZA(),t.TgZ(85,"span",53),t._uU(86),t.qZA()()()()()()()()()(),t.YNc(87,b,12,4,"div",54)),2&o&&(t.xp6(12),t.Q6J("formGroup",e.form),t.xp6(11),t.ekj("error",e.form.controls.email.invalid&&(e.form.controls.email.touched||e.form.controls.email.dirty)),t.Q6J("formControl",e.form.controls.email),t.xp6(8),t.hij(" ",e.form.controls.country.value," "),t.xp6(10),t.Q6J("formControl",e.form.controls.country),t.xp6(3),t.ekj("error",e.form.controls.firstname.invalid&&(e.form.controls.firstname.touched||e.form.controls.firstname.dirty)),t.Q6J("formControl",e.form.controls.firstname),t.xp6(2),t.ekj("error",e.form.controls.surname.invalid&&(e.form.controls.surname.touched||e.form.controls.surname.dirty)),t.Q6J("formControl",e.form.controls.surname),t.xp6(3),t.ekj("error",e.form.controls.city.invalid&&(e.form.controls.city.touched||e.form.controls.city.dirty)),t.Q6J("formControl",e.form.controls.city),t.xp6(2),t.ekj("error",e.form.controls.postcode.invalid&&(e.form.controls.postcode.touched||e.form.controls.postcode.dirty)),t.Q6J("formControl",e.form.controls.postcode),t.xp6(3),t.ekj("error",e.form.controls.street.invalid&&(e.form.controls.street.touched||e.form.controls.street.dirty)),t.Q6J("formControl",e.form.controls.street),t.xp6(2),t.ekj("error",e.form.controls.house.invalid&&(e.form.controls.house.touched||e.form.controls.house.dirty)),t.Q6J("formControl",e.form.controls.house),t.xp6(3),t.Q6J("formControl",e.form.controls.phone)("ngClass",t.VKq(31,k,e.form.controls.phone.invalid&&(e.form.controls.phone.touched||e.form.controls.phone.dirty))),t.xp6(6),t.ekj("disabled",e.form.invalid),t.xp6(13),t.Q6J("ngForOf",e.generalService.selectedItems),t.xp6(8),t.hij("",e.generalService.getTotalCartPrice()," \u0440\u0443\u0431"),t.xp6(1),t.Q6J("ngIf",e.showModal&&e.addressArray.length>0))},directives:[r._Y,r.JL,r.sg,m.yS,r.Fj,r.JJ,r.oH,f.vy,Z.mk,Z.sg,Z.O5],styles:[".popup[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:100;opacity:0;visibility:hidden;transition:.3s ease-in;display:flex;align-items:center;justify-content:center;&.open{opacity:1;visibility:visible;transition:.3s ease-in}}.popup__overlay[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;background-color:#00000026}.popup__content[_ngcontent-%COMP%]{padding:40px;position:relative;z-index:101;background-color:#fff}.popup__btn-close[_ngcontent-%COMP%]{position:absolute;top:12px;right:12px}.popup__title[_ngcontent-%COMP%]{display:block;margin-bottom:15px;color:#000;text-align:left;font-family:Romile,sans-serif;font-size:16px;font-style:normal;font-weight:400;line-height:normal}.popup__text[_ngcontent-%COMP%]{color:#000;text-align:center;font-size:20px;font-style:normal;font-weight:300;line-height:16px}.address__list[_ngcontent-%COMP%]{list-style:none;padding:16px 24px 20px;border:1px solid #d3d3d3;border-radius:20px}.address__item[_ngcontent-%COMP%]{cursor:pointer;&:not(:first-child){padding-top:16px;margin-top:16px;border-top:1px solid #d3d3d3}}.address-elem__wrap[_ngcontent-%COMP%]{display:flex;gap:20px;align-items:center;justify-content:space-between}.address-elem__id[_ngcontent-%COMP%]{font-weight:400;font-size:14px;line-height:normal;text-transform:uppercase;color:#23221e;white-space:nowrap}.address__info[_ngcontent-%COMP%]{font-weight:300;font-size:16px;line-height:normal;color:#000}@media all and (max-width: 650px){.address-elem__wrap[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:20px;align-items:center;justify-content:space-between}.address__info[_ngcontent-%COMP%]{flex:1 1 100%;order:3}.address__content[_ngcontent-%COMP%]{padding-bottom:28px;margin-bottom:28px;border-bottom:1px solid #d3d3d3}}"],changeDetection:0}),n})()}];let S=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[g.m,m.Bz.forChild(T),r.UX,f.zz]]}),n})()}}]);