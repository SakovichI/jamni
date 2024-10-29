"use strict";(self.webpackChunkjamni=self.webpackChunkjamni||[]).push([[965],{6965:(p,c,i)=>{i.r(c),i.d(c,{ContactsPageModule:()=>d});var r=i(7545),e=i(3075),u=i(7587),m=i(9119),_=i(4487);const g=[{path:"",component:(()=>{class n{constructor(o,t){this.ApiMakeFeedback=o,this.loader=t,this.form=new e.cw({name:new e.NI(null,[e.kI.required,e.kI.minLength(3)]),phone:new e.NI(null,[e.kI.pattern(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/)]),email:new e.NI(null,[e.kI.required,e.kI.email]),url:new e.NI(null,[e.kI.pattern(/^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6}\.?)(\/[\w.-]*)*\/?$/i)]),message:new e.NI(null,[e.kI.minLength(3)])})}ngAfterViewInit(){this.loader.imgLoader()}submitForm(o){const t=new FormData(o),s=new FormData,l={request:{type:"ACCESS_TO_3D_DATABASE",body:{name:t.get("name"),url:t.get("url"),phone:t.get("phone"),email:t.get("email"),message:t.get("message")}}},f=new Blob([JSON.stringify(l.request)],{type:"application/json"});s.append("request",f,"request"),this.ApiMakeFeedback.makeFeedback(s).subscribe(A=>{this.form.reset()})}}return n.\u0275fac=function(o){return new(o||n)(u.Y36(m.Q),u.Y36(_.D))},n.\u0275cmp=u.Xpm({type:n,selectors:[["ng-component"]],decls:100,vars:12,consts:[[1,"contacts"],[1,"container","contacts__container"],[1,"contacts__title"],[1,"contacts__subtitle"],[1,"contacts__wrap"],[1,"contacts__info","info-contacts"],[1,"info-contacts__list"],[1,"info-contacts__item","info-contacts__item--title"],[1,"info-contacts__item"],[1,"info-contacts__icon"],[0,"xlink","href","assets/img/sprite.svg#phone"],[1,"info-contacts__link-wrap"],["href","tel:+79160257790",1,"info-contacts__link"],[0,"xlink","href","assets/img/sprite.svg#location"],[1,"info-contacts__text"],[1,"info-contacts__text","info-contacts__text--bold"],[0,"xlink","href","assets/img/sprite.svg#mail"],["href","mailto:info@jamni.ru",1,"info-contacts__link"],[1,"info-contacts__social","social-contacts"],["href","https://www.instagram.com/jamni_fabrique/",1,"social-contacts__link"],["src","assets/img/Instagram.svg","alt","icon","width","40","height","40",1,"social-contacts__icon"],["href","https://www.facebook.com/jamnidecor",1,"social-contacts__link"],["src","assets/img/Facebook.svg","alt","icon","width","40","height","40",1,"social-contacts__icon"],["href","https://vk.com/jamni",1,"social-contacts__link"],["src","assets/img/VK.svg","alt","icon","width","40","height","40",1,"social-contacts__icon"],["src","https://yandex.ru/map-widget/v1/?um=constructor%3A28cac5a25ef29fd8154e7ddda19396429149bd7c3e3fb446bc6142f1dd76f124&source=constructor","width","100%","height","100%","frameborder","0",1,"contacts__map",2,"filter","grayscale(1)"],[1,"mailing","contacts__mailing"],[1,"small-container"],[1,"mailing__inner","contacts__access","access"],[1,"mailing__content","access__content"],[1,"mailing__title"],[1,"mailing__subtitle"],["action","#","enctype","multipart/form-data",1,"form-mailing","access__form","access-form",3,"formGroup","ngSubmit"],[1,"form-mailing__label"],["name","name","type","text","placeholder","\u0418\u043c\u044f*","formControlName","name",1,"form-mailing__input"],["name","url","type","text","placeholder","\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0441\u0430\u0439\u0442 / \u0441\u043e\u0446. \u0441\u0435\u0442\u0438","formControlName","url",1,"form-mailing__input"],["name","phone","type","text","placeholder","\u0422\u0435\u043b\u0435\u0444\u043e\u043d","formControlName","phone",1,"form-mailing__input"],[1,"form-mailing__label","form-mailing__label--row2"],["name","message","placeholder","\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435","formControlName","message",1,"form-mailing__textarea","input-reset"],["name","email","type","text","placeholder","E-mail*","formControlName","email",1,"form-mailing__input"],["type","submit",1,"access-form__btn","btn-reset","btn-anim",3,"disabled"],[1,"btn-anim__text"],[1,"form-mailing__icon"],["srcset","assets/img/offer-block/offer-mobile.webp","type","image/webp"],["src","assets/img/offer-block/offer-mobile.png","width","354","height","743","alt","mailing-image",1,"image","mailing__image"],[1,"contacts__info-about","company-info"],[1,"company-info__wrap"],[1,"company-info__list"],[1,"company-info__item"],[1,"modal","add-curt-modal"],[1,"modal__container","add-curt-modal__container"],[1,"modal__content","add-curt-modal__content"],[1,"add-curt-modal__title"]],template:function(o,t){1&o&&(u.TgZ(0,"section",0)(1,"div",1)(2,"h1",2),u._uU(3,"\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"),u.qZA(),u.TgZ(4,"p",3),u._uU(5,"\u041c\u044b\xa0\u043e\u0442\u043a\u0440\u044b\u0442\u044b \u043a\xa0\u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u0447\u0435\u0441\u0442\u0432\u0443 \u0438\xa0\u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u043c"),u.qZA(),u.TgZ(6,"div",4)(7,"div",5)(8,"ul",6)(9,"li",7),u._uU(10," \u0421\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441\xa0\u043d\u0430\u043c\u0438, \u0435\u0441\u043b\u0438 \u0443\xa0\u0432\u0430\u0441 \u0432\u043e\u0437\u043d\u0438\u043a\u043b\u0438 \u0432\u043e\u043f\u0440\u043e\u0441\u044b: "),u.qZA(),u.TgZ(11,"li",8),u.O4$(),u.TgZ(12,"svg",9),u._UZ(13,"use",10),u.qZA(),u.kcU(),u.TgZ(14,"div",11)(15,"a",12),u._uU(16,"+7 916 025-77-90"),u.qZA()()(),u.TgZ(17,"li",8),u.O4$(),u.TgZ(18,"svg",9),u._UZ(19,"use",13),u.qZA(),u.kcU(),u.TgZ(20,"div",11)(21,"p",14),u._uU(22," \u041c\u043e\u0441\u043a\u0432\u0430, \u043c\u0435\u0442\u0440\u043e \u0412\u043e\u0434\u043d\u044b\u0439 \u0421\u0442\u0430\u0434\u0438\u043e\u043d, \u0421\u043e\u043b\u043d\u0435\u0447\u043d\u043e\u0433\u043e\u0440\u0441\u043a\u0430\u044f \u0443\u043b\u0438\u0446\u0430 4\u044130 "),u.qZA(),u.TgZ(23,"p",15),u._uU(24," (\u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u043f\u0440\u0435\u0434\u0443\u043f\u0440\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0441 \u043f\u0435\u0440\u0435\u0434 \u043f\u0440\u0438\u0435\u0437\u0434\u043e\u043c) "),u.qZA()()(),u.TgZ(25,"li",8),u.O4$(),u.TgZ(26,"svg",9),u._UZ(27,"use",16),u.qZA(),u.kcU(),u.TgZ(28,"div",11)(29,"a",17),u._uU(30,"info@jamni.ru"),u.qZA()()()(),u.TgZ(31,"div",18)(32,"a",19),u._UZ(33,"img",20),u.qZA(),u.TgZ(34,"a",21),u._UZ(35,"img",22),u.qZA(),u.TgZ(36,"a",23),u._UZ(37,"img",24),u.qZA()()(),u._UZ(38,"iframe",25),u.qZA()(),u.TgZ(39,"div",26)(40,"div",27)(41,"div",28)(42,"div",29)(43,"h2",30),u._uU(44,"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u043a\xa0\u0431\u0430\u0437\u0435 3D-\u043c\u043e\u0434\u0435\u043b\u0435\u0439"),u.qZA(),u.TgZ(45,"p",31),u._uU(46," \u0412\xa0\u0440\u0430\u043c\u043a\u0430\u0445 \u043f\u0430\u0440\u0442\u043d\u0435\u0440\u0441\u043a\u043e\u0439 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u044b \u0434\u043b\u044f \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u043e\u0432, \u043c\u044b\xa0\u0441\u0434\u0435\u043b\u0430\u043b\u0438 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0439 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u0431\u0430\u0437\u0435 3D-\u043c\u043e\u0434\u0435\u043b\u0435\u0439. \u0422\u0435\u043f\u0435\u0440\u044c \u0432\u044b\xa0\u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0440\u043e\u0441\u0442\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0430\u043d\u043a\u0435\u0442\u0443, \u0438\xa0\u0431\u0435\u0437 \u043f\u0440\u043e\u0431\u043b\u0435\u043c \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0433\u043e\u0442\u043e\u0432\u044b\u0435 3D-\u043c\u043e\u0434\u0435\u043b\u0438 \u043c\u0435\u0431\u0435\u043b\u0438 Jamni \u0432\xa0\u0441\u0432\u043e\u0438\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445! "),u.qZA(),u.TgZ(47,"form",32),u.NdJ("ngSubmit",function(l){return t.submitForm(l.target)}),u.TgZ(48,"label",33),u._UZ(49,"input",34),u.qZA(),u.TgZ(50,"label",33),u._UZ(51,"input",35),u.qZA(),u.TgZ(52,"label",33),u._UZ(53,"input",36),u.qZA(),u.TgZ(54,"label",37),u._UZ(55,"textarea",38),u.qZA(),u.TgZ(56,"label",33),u._UZ(57,"input",39),u.qZA(),u.TgZ(58,"button",40)(59,"span",41),u.O4$(),u.TgZ(60,"svg",42),u._UZ(61,"use",16),u.qZA(),u._uU(62," \u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"),u.qZA()()()(),u.kcU(),u.TgZ(63,"picture"),u._UZ(64,"source",43)(65,"img",44),u.qZA()()()(),u.TgZ(66,"div",45)(67,"div",27)(68,"div",46)(69,"ul",47)(70,"li",48),u._uU(71," \u041e\u0431\u0449\u0435\u0441\u0442\u0432\u043e \u0441\xa0\u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u043d\u043e\u0439 \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c\u044e \xab\u041f\u0410\u0420\u041a\u0418\u0422\u0415\u041a\u0422\u0423\u0420\u0410\xbb "),u.qZA(),u.TgZ(72,"li",48),u._uU(73,"\u0418\u041d\u041d 7736656972"),u.qZA(),u.TgZ(74,"li",48),u._uU(75,"\u041a\u041f\u041f 771701001"),u.qZA(),u.TgZ(76,"li",48),u._uU(77,"\u041e\u0413\u0420\u041d 1137746202417"),u.qZA(),u.TgZ(78,"li",48),u._uU(79," \u042e\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0430\u0434\u0440\u0435\u0441: 129226, \u041c\u043e\u0441\u043a\u0432\u0430, \u043c\u0435\u0442\u0440\u043e \u0412\u043e\u0434\u043d\u044b\u0439 \u0421\u0442\u0430\u0434\u0438\u043e\u043d, \u0421\u043e\u043b\u043d\u0435\u0447\u043d\u043e\u0433\u043e\u0440\u0441\u043a\u0430\u044f \u0443\u043b\u0438\u0446\u0430 4\u044130 "),u.qZA(),u.TgZ(80,"li",48),u._uU(81,"\u041e\u041a\u041f\u041e 17255738"),u.qZA()(),u.TgZ(82,"ul",47)(83,"li",48),u._uU(84,"\u041e\u041a\u0422\u041c\u041e 459044000"),u.qZA(),u.TgZ(85,"li",48),u._uU(86,"\u041e\u041a\u0412\u042d\u0414 01.41.2"),u.qZA(),u.TgZ(87,"li",48),u._uU(88," \u0440/\u0441 40702810702830000230 \u0432\xa0\u0410\u041e\xa0\xab\u0410\u041b\u042c\u0424\u0410-\u0411\u0410\u041d\u041a\xbb "),u.qZA(),u.TgZ(89,"li",48),u._uU(90,"\u043a/\u0441 30101810200000000593"),u.qZA(),u.TgZ(91,"li",48),u._uU(92,"\u0411\u0418\u041a 044525593"),u.qZA(),u.TgZ(93,"li",48),u._uU(94," \u0413\u0435\u043d\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440 \u041a\u043e\u043d\u0434\u0440\u0430\u0442\u044c\u0435\u0432\u0430 \u0415\u043b\u0435\u043d\u0430 \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u043e\u0432\u043d\u0430 "),u.qZA()()()()(),u.TgZ(95,"div",49)(96,"div",50)(97,"div",51)(98,"p",52),u._uU(99,"\u0432\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e"),u.qZA()()()()()),2&o&&(u.xp6(47),u.Q6J("formGroup",t.form),u.xp6(2),u.ekj("error",t.form.controls.name.invalid&&t.form.controls.name.touched),u.xp6(2),u.ekj("error",t.form.controls.url.invalid&&t.form.controls.url.touched),u.xp6(2),u.ekj("error",t.form.controls.phone.invalid&&t.form.controls.phone.touched),u.xp6(2),u.ekj("error",t.form.controls.message.invalid&&t.form.controls.message.touched),u.xp6(2),u.ekj("error",t.form.controls.email.invalid&&t.form.controls.email.touched),u.xp6(1),u.Q6J("disabled",t.form.invalid))},directives:[e._Y,e.JL,e.sg,e.Fj,e.JJ,e.u],styles:[".contacts__map[_ngcontent-%COMP%]{width:700px;height:auto;border:none}.ymaps3x0--main-engine-container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{filter:grayscale(1)}@media all and (max-width: 700px){.contacts__map[_ngcontent-%COMP%]{width:100%;height:400px;border:none}}"],changeDetection:0}),n})()}];let d=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=u.oAB({type:n}),n.\u0275inj=u.cJS({imports:[[r.Bz.forChild(g),e.UX]]}),n})()}}]);