"use strict";(self.webpackChunkjamni=self.webpackChunkjamni||[]).push([[500],{7500:(w,g,u)=>{u.r(g),u.d(g,{RegistrationModule:()=>Z});var p=u(9808),c=u(7545),n=u(3075),f=u(4466),_=u(7579),m=u(2722),e=u(7587),C=u(263),F=u(8297),h=u(2537);const d=function(i){return{active:i}},r=function(i){return{error:i}},b=[{path:"",component:(()=>{class i{constructor(t,o,s){this.auth=t,this.route=o,this.modal=s,this.destroy$=new _.x,this.formType="\u043a\u043b\u0438\u0435\u043d\u0442",this.clientForm=new n.cw({email:new n.NI("",[n.kI.required,n.kI.email]),firstName:new n.NI("",n.kI.required),middleName:new n.NI("",n.kI.required),surname:new n.NI("",n.kI.required),phone:new n.NI("",n.kI.required),isAdvertisementNotifications:new n.NI(!0,n.kI.required)}),this.designerForm=new n.cw({email:new n.NI("",[n.kI.required,n.kI.email]),firstName:new n.NI("",n.kI.required),middleName:new n.NI("",n.kI.required),surname:new n.NI("",n.kI.required),phone:new n.NI("",n.kI.required),site:new n.NI("",n.kI.required),juridicalPerson:new n.NI("",n.kI.required),workingWithUs:new n.NI("",n.kI.required),designCollection:new n.NI("",n.kI.required)}),this.wholesalerForm=new n.cw({email:new n.NI("",[n.kI.required,n.kI.email]),firstName:new n.NI("",n.kI.required),middleName:new n.NI("",n.kI.required),surname:new n.NI("",n.kI.required),phone:new n.NI("",n.kI.required),site:new n.NI("",n.kI.required),juridicalPerson:new n.NI("",n.kI.required)})}ngOnInit(){}changeForm(t){this.formType=t.target.value.toLowerCase()}regClient(t){this.auth.registrationClient(t.value).pipe((0,m.R)(this.destroy$)).subscribe(o=>{this.modal.showSuccess("\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043f\u0440\u043e\u0448\u043b\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u0430, \u0442\u0435\u043f\u0435\u0440\u044c \u0432\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),t.reset(),this.route.navigate(["./login"]),setTimeout(()=>{this.modal.showSuccess("")},1e4)},o=>{500===o.status&&this.modal.showError("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u043e\u0439 \u043f\u043e\u0447\u0442\u043e\u0439 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442")})}regDesigner(t){this.auth.registrationDesigner(t.value).pipe((0,m.R)(this.destroy$)).subscribe(o=>{this.modal.showSuccess("\u0412\u0430\u0448\u0430 \u0437\u0430\u044f\u0432\u043a\u0430 \u043d\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044e \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u043e\u0434\u0430\u043d\u0430, \u043f\u043e\u0441\u043b\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0435\u0439 \u0432\u0430\u043c \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f!"),t.reset(),this.route.navigate(["./login"]),setTimeout(()=>{this.modal.showSuccess("")},1e4)},o=>{500===o.status&&this.modal.showError("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u043e\u0439 \u043f\u043e\u0447\u0442\u043e\u0439 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442")})}regWholesaler(t){this.auth.registrationWholesaler(t.value).pipe((0,m.R)(this.destroy$)).subscribe(o=>{this.modal.showSuccess("\u0412\u0430\u0448\u0430 \u0437\u0430\u044f\u0432\u043a\u0430 \u043d\u0430 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044e \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043f\u043e\u0434\u0430\u043d\u0430, \u043f\u043e\u0441\u043b\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0430\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0435\u0439 \u0432\u0430\u043c \u0431\u0443\u0434\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u044f!"),t.reset(),this.route.navigate(["./login"]),setTimeout(()=>{this.modal.showSuccess("")},1e4)},o=>{500===o.status&&this.modal.showError("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 \u0442\u0430\u043a\u043e\u0439 \u043f\u043e\u0447\u0442\u043e\u0439 \u0443\u0436\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442")})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(C.e),e.Y36(c.F0),e.Y36(F.F))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-shell"]],decls:99,vars:81,consts:[[1,"registration"],[1,"bg-gray"],[1,"registration__wrap"],[1,"small-container"],[1,"registration__inner"],[1,"registration__title"],[1,"registration__header","registration-head"],[1,"custom-checkbox","registration-head__checkbox"],["type","radio","name","role","value","\u041a\u041b\u0418\u0415\u041d\u0422","checked","",1,"custom-checkbox__field",3,"change"],[1,"custom-checkbox__content","registration-head__checkbox-content","form-info__text--light"],["type","radio","name","role","value","\u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440",1,"custom-checkbox__field",3,"change"],["type","radio","name","role","value","\u043e\u043f\u0442\u043e\u0432\u0438\u043a",1,"custom-checkbox__field",3,"change"],["action","#",1,"form","form-reg",3,"ngClass","formGroup","ngSubmit"],[1,"form-reg__row"],[1,"form-reg__label","form__label"],["placeholder","\u0424\u0430\u043c\u0438\u043b\u0438\u044f","type","text","formControlName","surname",1,"input-reset","form__input","form-reg__input",3,"ngClass"],["placeholder","\u0418\u043c\u044f","type","text","formControlName","firstName",1,"input-reset","form__input","form-reg__input",3,"ngClass"],["placeholder","\u041e\u0442\u0447\u0435\u0441\u0442\u0432\u043e","required","","type","text","formControlName","middleName",1,"input-reset","form__input","form-reg__input",3,"ngClass"],["mask","+7(999) 999-99-99","placeholder","\u0422\u0435\u043b\u0435\u0444\u043e\u043d","formControlName","phone",1,"form-reg__input","form__input",3,"ngClass"],["placeholder","\u041f\u043e\u0447\u0442\u0430","required","","type","text","formControlName","email",1,"input-reset","form__input","form-reg__input",3,"ngClass"],[1,"custom-checkbox","form-reg__checkbox"],["type","checkbox","name","mailing","value","true","formControlName","isAdvertisementNotifications",1,"custom-checkbox__field",3,"ngClass"],[1,"custom-checkbox__content","form-reg__checkbox-content"],[1,"btn-reset","form-reg__btn","btn-anim",3,"disabled"],[1,"btn-anim__text"],[1,"form-reg__text"],["placeholder","\u0424\u0430\u043c\u0438\u043b\u0438\u044f","required","","type","text","formControlName","surname",1,"input-reset","form__input","form-reg__input",3,"ngClass"],["placeholder","\u0418\u043c\u044f","required","","type","text","formControlName","firstName",1,"input-reset","form__input","form-reg__input",3,"ngClass"],["placeholder","\u0421\u0430\u0439\u0442","required","","type","text","formControlName","site",1,"input-reset","form__input","form-reg__input",3,"ngClass"],["placeholder","\u042e\u0440 \u043b\u0438\u0446\u043e","required","","type","text","formControlName","juridicalPerson",1,"input-reset","form__input","form-reg__input",3,"ngClass"],["placeholder","\u0420\u0430\u0431\u043e\u0442\u0430\u043b\u0438 \u043b\u0438 \u0441 \u043d\u0430\u043c\u0438?","required","","type","text","formControlName","workingWithUs",1,"input-reset","form__input","form-reg__input",3,"ngClass"],["placeholder","\u0415\u0441\u0442\u044c \u043b\u0438 \u0432\u0430\u0441 \u0441\u0432\u043e\u0438 \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0441\u043a\u0438\u0435 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u0438?","required","","type","text","formControlName","designCollection",1,"input-reset","form__input","form-reg__input",3,"ngClass"],[1,"authorization__image"],["srcset","assets/img/login-fon.webp","type","image/webp"],["alt","login-img","height","650","loading","lazy","src","assets/img/login-fon.jpg","width","1920",1,"image","authorization__img"]],template:function(t,o){1&t&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5),e._uU(6,"\u0420\u0415\u0413\u0418\u0421\u0422\u0420\u0410\u0426\u0418\u042f"),e.qZA(),e.TgZ(7,"div",6)(8,"label",7)(9,"input",8),e.NdJ("change",function(l){return o.changeForm(l)}),e.qZA(),e.TgZ(10,"span",9),e._uU(11,"\u041a\u041b\u0418\u0415\u041d\u0422"),e.qZA()(),e.TgZ(12,"label",7)(13,"input",10),e.NdJ("change",function(l){return o.changeForm(l)}),e.qZA(),e.TgZ(14,"span",9),e._uU(15,"\u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440"),e.qZA()(),e.TgZ(16,"label",7)(17,"input",11),e.NdJ("change",function(l){return o.changeForm(l)}),e.qZA(),e.TgZ(18,"span",9),e._uU(19,"\u043e\u043f\u0442\u043e\u0432\u0438\u043a"),e.qZA()()(),e.TgZ(20,"form",12),e.NdJ("ngSubmit",function(){return o.regClient(o.clientForm)}),e.TgZ(21,"div",13)(22,"label",14),e._UZ(23,"input",15),e.qZA(),e.TgZ(24,"label",14),e._UZ(25,"input",16),e.qZA()(),e.TgZ(26,"div",13)(27,"label",14),e._UZ(28,"input",17),e.qZA()(),e.TgZ(29,"div",13)(30,"label",14),e._UZ(31,"p-inputMask",18),e.qZA(),e.TgZ(32,"label",14),e._UZ(33,"input",19),e.qZA()(),e.TgZ(34,"label",20),e._UZ(35,"input",21),e.TgZ(36,"span",22),e._uU(37,"\u041f\u0440\u0438\u0441\u044b\u043b\u0430\u0439\u0442\u0435 \u043c\u043d\u0435 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u044b\u0435 \u043f\u0438\u0441\u044c\u043c\u0430 \u0441 \u043d\u043e\u0432\u043e\u0441\u0442\u044f\u043c\u0438 \u0438 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u043c\u0438 "),e.qZA()(),e.TgZ(38,"button",23)(39,"span",24),e._uU(40,"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),e.qZA()(),e.TgZ(41,"span",25),e._uU(42,"\u041f\u0430\u0440\u043e\u043b\u044c \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d \u043d\u0430 \u043f\u043e\u0447\u0442\u0443"),e.qZA()(),e.TgZ(43,"form",12),e.NdJ("ngSubmit",function(){return o.regDesigner(o.designerForm)}),e.TgZ(44,"div",13)(45,"label",14),e._UZ(46,"input",26),e.qZA(),e.TgZ(47,"label",14),e._UZ(48,"input",27),e.qZA()(),e.TgZ(49,"div",13)(50,"label",14),e._UZ(51,"input",17),e.qZA(),e.TgZ(52,"label",14),e._UZ(53,"input",28),e.qZA()(),e.TgZ(54,"div",13)(55,"label",14),e._UZ(56,"input",29),e.qZA()(),e.TgZ(57,"div",13)(58,"label",14),e._UZ(59,"p-inputMask",18),e.qZA(),e.TgZ(60,"label",14),e._UZ(61,"input",19),e.qZA()(),e.TgZ(62,"div",13)(63,"label",14),e._UZ(64,"textarea",30),e.qZA(),e.TgZ(65,"label",14),e._UZ(66,"textarea",31),e.qZA()(),e.TgZ(67,"button",23)(68,"span",24),e._uU(69,"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),e.qZA()(),e.TgZ(70,"span",25),e._uU(71,"\u041f\u0430\u0440\u043e\u043b\u044c \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d \u043d\u0430 \u043f\u043e\u0447\u0442\u0443"),e.qZA()(),e.TgZ(72,"form",12),e.NdJ("ngSubmit",function(){return o.regWholesaler(o.wholesalerForm)}),e.TgZ(73,"div",13)(74,"label",14),e._UZ(75,"input",26),e.qZA(),e.TgZ(76,"label",14),e._UZ(77,"input",27),e.qZA()(),e.TgZ(78,"div",13)(79,"label",14),e._UZ(80,"input",17),e.qZA(),e.TgZ(81,"label",14),e._UZ(82,"input",28),e.qZA()(),e.TgZ(83,"div",13)(84,"label",14),e._UZ(85,"input",29),e.qZA()(),e.TgZ(86,"div",13)(87,"label",14),e._UZ(88,"p-inputMask",18),e.qZA(),e.TgZ(89,"label",14),e._UZ(90,"input",19),e.qZA()(),e.TgZ(91,"button",23)(92,"span",24),e._uU(93,"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"),e.qZA()(),e.TgZ(94,"span",25),e._uU(95,"\u041f\u0430\u0440\u043e\u043b\u044c \u0431\u0443\u0434\u0435\u0442 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d \u043d\u0430 \u043f\u043e\u0447\u0442\u0443"),e.qZA()()()(),e.TgZ(96,"picture",32),e._UZ(97,"source",33)(98,"img",34),e.qZA()()()()),2&t&&(e.xp6(20),e.Q6J("ngClass",e.VKq(31,d,"\u043a\u043b\u0438\u0435\u043d\u0442"===o.formType))("formGroup",o.clientForm),e.xp6(3),e.Q6J("ngClass",e.VKq(33,r,o.clientForm.controls.surname.invalid&&(o.clientForm.controls.surname.dirty||o.clientForm.controls.surname.touched))),e.xp6(2),e.Q6J("ngClass",e.VKq(35,r,o.clientForm.controls.firstName.invalid&&(o.clientForm.controls.firstName.dirty||o.clientForm.controls.firstName.touched))),e.xp6(3),e.Q6J("ngClass",e.VKq(37,r,o.clientForm.controls.middleName.invalid&&(o.clientForm.controls.middleName.dirty||o.clientForm.controls.middleName.touched))),e.xp6(3),e.Q6J("ngClass",e.VKq(39,r,o.clientForm.controls.phone.invalid&&(o.clientForm.controls.phone.dirty||o.clientForm.controls.phone.touched))),e.xp6(2),e.Q6J("ngClass",e.VKq(41,r,o.clientForm.controls.email.invalid&&(o.clientForm.controls.email.dirty||o.clientForm.controls.email.touched))),e.xp6(2),e.Q6J("ngClass",e.VKq(43,r,o.clientForm.controls.isAdvertisementNotifications.invalid&&(o.clientForm.controls.isAdvertisementNotifications.dirty||o.clientForm.controls.isAdvertisementNotifications.touched))),e.xp6(3),e.Q6J("disabled",o.clientForm.invalid),e.xp6(5),e.Q6J("ngClass",e.VKq(45,d,"\u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440"===o.formType))("formGroup",o.designerForm),e.xp6(3),e.Q6J("ngClass",e.VKq(47,r,o.designerForm.controls.surname.invalid&&(o.designerForm.controls.surname.touched||o.designerForm.controls.surname.dirty))),e.xp6(2),e.Q6J("ngClass",e.VKq(49,r,o.designerForm.controls.firstName.invalid&&(o.designerForm.controls.firstName.touched||o.designerForm.controls.firstName.dirty))),e.xp6(3),e.Q6J("ngClass",e.VKq(51,r,o.designerForm.controls.middleName.invalid&&(o.designerForm.controls.middleName.touched||o.designerForm.controls.middleName.dirty))),e.xp6(2),e.Q6J("ngClass",e.VKq(53,r,o.designerForm.controls.site.invalid&&(o.designerForm.controls.site.touched||o.designerForm.controls.site.dirty))),e.xp6(3),e.Q6J("ngClass",e.VKq(55,r,o.designerForm.controls.juridicalPerson.invalid&&(o.designerForm.controls.juridicalPerson.touched||o.designerForm.controls.juridicalPerson.dirty))),e.xp6(3),e.Q6J("ngClass",e.VKq(57,r,o.designerForm.controls.phone.invalid&&(o.designerForm.controls.phone.touched||o.designerForm.controls.phone.dirty))),e.xp6(2),e.Q6J("ngClass",e.VKq(59,r,o.designerForm.controls.email.invalid&&(o.designerForm.controls.email.touched||o.designerForm.controls.email.dirty))),e.xp6(3),e.Q6J("ngClass",e.VKq(61,r,o.designerForm.controls.workingWithUs.invalid&&(o.designerForm.controls.workingWithUs.touched||o.designerForm.controls.workingWithUs.dirty))),e.xp6(2),e.Q6J("ngClass",e.VKq(63,r,o.designerForm.controls.designCollection.invalid&&(o.designerForm.controls.designCollection.touched||o.designerForm.controls.designCollection.dirty))),e.xp6(1),e.Q6J("disabled",o.designerForm.invalid),e.xp6(5),e.Q6J("ngClass",e.VKq(65,d,"\u043e\u043f\u0442\u043e\u0432\u0438\u043a"===o.formType))("formGroup",o.wholesalerForm),e.xp6(3),e.Q6J("ngClass",e.VKq(67,r,o.wholesalerForm.controls.surname.invalid&&(o.wholesalerForm.controls.surname.touched||o.wholesalerForm.controls.surname.dirty))),e.xp6(2),e.Q6J("ngClass",e.VKq(69,r,o.wholesalerForm.controls.firstName.invalid&&(o.wholesalerForm.controls.firstName.touched||o.wholesalerForm.controls.firstName.dirty))),e.xp6(3),e.Q6J("ngClass",e.VKq(71,r,o.wholesalerForm.controls.middleName.invalid&&(o.wholesalerForm.controls.middleName.touched||o.wholesalerForm.controls.middleName.dirty))),e.xp6(2),e.Q6J("ngClass",e.VKq(73,r,o.wholesalerForm.controls.site.invalid&&(o.wholesalerForm.controls.site.touched||o.wholesalerForm.controls.site.dirty))),e.xp6(3),e.Q6J("ngClass",e.VKq(75,r,o.wholesalerForm.controls.juridicalPerson.invalid&&(o.wholesalerForm.controls.juridicalPerson.touched||o.wholesalerForm.controls.juridicalPerson.dirty))),e.xp6(3),e.Q6J("ngClass",e.VKq(77,r,o.wholesalerForm.controls.phone.invalid&&(o.wholesalerForm.controls.phone.touched||o.wholesalerForm.controls.phone.dirty))),e.xp6(2),e.Q6J("ngClass",e.VKq(79,r,o.wholesalerForm.controls.email.invalid&&(o.wholesalerForm.controls.email.touched||o.wholesalerForm.controls.email.dirty))),e.xp6(1),e.Q6J("disabled",o.wholesalerForm.invalid))},directives:[n._Y,n.JL,p.mk,n.sg,n.Fj,n.JJ,n.u,n.Q7,h.vy,n.Wl],styles:['@keyframes openForm{0%{transform:translate(100%);opacity:0}to{transform:translate(0);opacity:1}}.registration__wrap[_ngcontent-%COMP%]{padding-top:140px}.registration__inner[_ngcontent-%COMP%]{margin:0 auto 140px;padding:80px;background:#fff;width:max-content;overflow:hidden}.registration__title[_ngcontent-%COMP%]{margin-bottom:57px;font-family:Romile,sans-serif;font-weight:400;font-size:46px;text-align:center;color:#000}.registration-head[_ngcontent-%COMP%]{margin-bottom:27px;display:flex;justify-content:space-around;gap:10px}.custom-checkbox__content[_ngcontent-%COMP%]{&:before{content:"";position:absolute;left:0;top:4px;border:1px solid #d3d3d3;width:18px;height:18px;border-radius:50%;box-sizing:border-box;background-color:#fff}&:after{content:"";position:absolute;left:2px;top:5.5px;width:14px;height:14px;border-radius:50%;box-sizing:border-box;background-color:#000;opacity:0;transition:opacity .2s ease-in}}.registration-head__checkbox[_ngcontent-%COMP%]{display:flex;align-items:center}.registration-head__checkbox-content[_ngcontent-%COMP%]{font-family:ProximaNova,sans-serif;font-weight:400;font-size:20px;line-height:140%;text-transform:uppercase;color:#000}.form-reg[_ngcontent-%COMP%]{width:580px;padding:0;display:none;&.active{display:block;animation:openForm .3s linear .1s}}.form-reg__row[_ngcontent-%COMP%]{display:flex;gap:10px;margin-bottom:12px}.form-reg__label[_ngcontent-%COMP%]{flex:1 1 50%}.form-reg__input[_ngcontent-%COMP%]{display:block;width:100%;background:#f5f5f5;border:.5px solid transparent;transition:.2s ease;&:focus{border:.5px solid #000;transition:.2s ease}&.error{border:.5px solid #e17070;transition:.2s ease}}textarea.form-reg__input[_ngcontent-%COMP%]{resize:none;min-height:82px}.form-reg__input.p-inputwrapper-focus[_ngcontent-%COMP%]{border:.5px solid #000;transition:.2s ease}.form-reg__btn[_ngcontent-%COMP%]{margin-top:32px;margin-bottom:12px;height:35px;width:100%}.form-reg__text[_ngcontent-%COMP%]{display:block;margin:0 auto;font-family:ProximaNova,sans-serif;font-weight:400;font-size:12px;text-align:center;color:#a7a7a7}.form-reg__checkbox[_ngcontent-%COMP%]{margin-top:4px;display:block;height:max-content}.form-reg__checkbox-content[_ngcontent-%COMP%]{font-family:ProximaNova,sans-serif;font-weight:300;font-size:14px;color:#a7a7a7;&:before{content:"";position:absolute;left:0;top:50%;transform:translateY(-50%);border:1px solid #d3d3d3;width:18px;height:18px;border-radius:50%;box-sizing:border-box;background-color:#fff}&:after{content:url(/assets/img/check.svg);position:absolute;left:1px;top:40%;transform:translateY(-60%);background:none;width:18px;height:12px}}.custom-checkbox__field[_ngcontent-%COMP%]:checked + .form-reg__checkbox-content[_ngcontent-%COMP%]:before{outline:none}@media all and (max-width: 800px){.registration__wrap[_ngcontent-%COMP%]{padding-top:100px}.registration__inner[_ngcontent-%COMP%]{margin:0 auto 100px;padding:40px;background:#fff;width:max-content;overflow:hidden}.form-reg[_ngcontent-%COMP%]{width:unset;padding:0;display:none;&.active{display:block;animation:openForm .3s linear .1s}}}@media all and (max-width: 600px){.registration__wrap[_ngcontent-%COMP%]{padding-top:54px}.registration__inner[_ngcontent-%COMP%]{width:100%;margin:0 auto 70px;padding:60px 24px}.registration__title[_ngcontent-%COMP%]{margin-bottom:30px;font-family:Romile,sans-serif;font-weight:400;font-size:42px;text-align:center;color:#000}.registration-head[_ngcontent-%COMP%]{margin-bottom:27px;display:flex;align-items:center;flex-direction:column;justify-content:unset;gap:10px}.form-reg__row[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;gap:10px;margin-bottom:10px}.form-reg__btn[_ngcontent-%COMP%]{margin-top:24px;margin-bottom:12px;height:35px;width:100%}.form-reg__checkbox-content[_ngcontent-%COMP%]{font-family:ProximaNova,sans-serif;font-weight:300;font-size:12px;color:#a7a7a7}}']}),i})()}];let Z=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[[p.ez,c.Bz.forChild(b),n.UX,f.m,h.zz]]}),i})()}}]);