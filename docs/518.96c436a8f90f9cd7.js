"use strict";(self.webpackChunkjamni=self.webpackChunkjamni||[]).push([[518],{5518:(w,p,a)=>{a.r(p),a.d(p,{DesignerAreaModule:()=>M});var _=a(9808),s=a(3075),c=a(7545),d=a(4776),m=a(14),u=a(7587);const g=["line"];let h=(()=>{class n{constructor(){this.balance=8e5,this.percentBonus=0,this.form=new s.cw({value:new s.NI("")})}ngOnInit(){}ngAfterViewInit(){this.line&&(this.line.sliderHandle.nativeElement.insertAdjacentHTML("afterbegin",`<div class="chart__main-dot-tooltip">\n      <span class="chart__main-dot-text" >\u0421\u0443\u043c\u043c\u0430: ${this.balance+" $"}</span>\n      <span class="chart__main-dot-text percentBonus">\u0412\u043e\u0437\u043d\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043d\u0438\u0435: ${this.percentBonus+" %"}</span>\n    </div>`),this.updateValue())}showTooltip(t){const e=t.currentTarget.querySelector(".chart__main-dot-tooltip");t.currentTarget.classList.toggle("active"),e.classList.toggle("active")}valueSet(t){this.balance=t.value,this.updateValue()}updateValue(){const t=document.querySelector(".chart__main-dot-tooltip"),e=null==t?void 0:t.querySelector(".chart__main-dot-text"),i=null==t?void 0:t.querySelector(".percentBonus");e&&i&&(e.textContent=`\u0421\u0443\u043c\u043c\u0430:${this.balance} $`,this.balance>=5e5&&this.balance<15e5?this.percentBonus=10:this.balance>=15e5&&this.balance<3e6?this.percentBonus=15:3e6===this.balance?this.percentBonus=20:this.balance>=0&&this.balance<5e5&&(this.percentBonus=0),this.balance>=2e6?null==t||t.classList.add("left"):null==t||t.classList.remove("left"),this.balance<=5e5&&window.innerWidth<500?null==t||t.classList.add("right"):null==t||t.classList.remove("right"),i.textContent=`\u0412\u043e\u0437\u043d\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043d\u0438\u0435:${this.percentBonus} %`)}resetTooltip(t){if("click"===t.type){const e=document.querySelector(".chart__main");document.addEventListener("click",i=>{const l=i.target;e&&!(null==e?void 0:e.contains(l))&&e!==l&&(this.balance=8e5,this.updateValue())})}else this.balance=8e5,this.updateValue()}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=u.Xpm({type:n,selectors:[["app-bonus"]],viewQuery:function(t,e){if(1&t&&u.Gf(g,5),2&t){let i;u.iGM(i=u.CRH())&&(e.line=i.first)}},features:[u._Bn([s.On])],decls:54,vars:3,consts:[[1,"bonus"],[1,"bonus__wrap"],[1,"bonus__head"],[1,"bonus__head-item"],[1,"bonus__head-item__text"],[1,"bonus__head-item__text","bonus__head-item__text--lg"],[1,"bonus__head-chart"],[1,"chart__wrap",3,"mouseleave"],[1,"chart__vertical"],[1,"chart__vertical-value"],[1,"chart__horizontal"],[1,"chart__horizontal-value"],[1,"chart__main",3,"click"],[3,"ngModel","min","max","ngModelChange","onChange"],["line",""],[1,"chart__title"],[1,"bonus__content"],[1,"bonus__title"],[1,"bonus__text"],[1,"bonus__content-wrap"],[1,"bonus__content-column"],[1,"bonus__content-subtitle"],[1,"bonus__content-text"]],template:function(t,e){1&t&&(u.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"span",4),u._uU(5,"\u0432\u0430\u0448 \u0431\u0430\u043b\u0430\u043d\u0441"),u.qZA(),u.TgZ(6,"span",5),u._uU(7,"1 200 000 \u0440\u0443\u0431"),u.qZA()(),u.TgZ(8,"div",6)(9,"div",7),u.NdJ("mouseleave",function(l){return e.resetTooltip(l)}),u.TgZ(10,"div",8)(11,"span",9),u._uU(12,"3 000 000 \u0440\u0443\u0431."),u.qZA(),u.TgZ(13,"span",9),u._uU(14,"1 500 000 \u0440\u0443\u0431."),u.qZA(),u.TgZ(15,"span",9),u._uU(16,"500 000 \u0440\u0443\u0431."),u.qZA(),u.TgZ(17,"span",9),u._uU(18,"0"),u.qZA()(),u.TgZ(19,"div",10)(20,"span",11),u._uU(21,"0%"),u.qZA(),u.TgZ(22,"span",11),u._uU(23,"10%"),u.qZA(),u.TgZ(24,"span",11),u._uU(25,"15%"),u.qZA(),u.TgZ(26,"span",11),u._uU(27,"20%"),u.qZA()(),u.TgZ(28,"div",12),u.NdJ("click",function(l){return e.resetTooltip(l)}),u.TgZ(29,"p-slider",13,14),u.NdJ("ngModelChange",function(l){return e.balance=l})("onChange",function(l){return e.valueSet(l)}),u.qZA()()(),u.TgZ(31,"h2",15),u._uU(32,"\u043f\u0440\u043e\u0446\u0435\u043d\u0442 \u0432\u043e\u0437\u043d\u0430\u0433\u0440\u0430\u0436\u0434\u0435\u043d\u0438\u0439"),u.qZA()()(),u.TgZ(33,"div",16)(34,"h2",17),u._uU(35,"\u0414\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0441\u043a\u0438\u0439 \u0431\u043e\u043d\u0443\u0441\u043d\u044b\u0439 \u0431\u0430\u043b\u0430\u043d\u0441"),u.qZA(),u.TgZ(36,"p",18),u._uU(37,' \u0414\u043b\u044f \u043d\u0430\u0441 \u0432\u0430\u0436\u043d\u043e \u043f\u0440\u0438\u0437\u043d\u0430\u0442\u044c \u0438 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0442\u0430\u043b\u0430\u043d\u0442\u043b\u0438\u0432\u044b\u0445 \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u043e\u0432, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0432\u043d\u043e\u0441\u044f\u0442 \u0432\u043a\u043b\u0430\u0434 \u0432 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0445 \u0438\u043d\u0442\u0435\u0440\u044c\u0435\u0440\u043d\u044b\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432 \u0441 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435\u043c \u043d\u0430\u0448\u0435\u0439 \u043c\u0435\u0431\u0435\u043b\u0438. \u041c\u044b \u0440\u0430\u0434\u044b \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043d\u0430\u0448\u0443 \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0443 "\u0414\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0441\u043a\u0438\u0439 \u0431\u043e\u043d\u0443\u0441\u043d\u044b\u0439 \u0431\u0430\u043b\u0430\u043d\u0441" - \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u0443\u044e \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c, \u043f\u0440\u0438\u0437\u0432\u0430\u043d\u043d\u0443\u044e \u043e\u0446\u0435\u043d\u0438\u0442\u044c \u0432\u0430\u0448\u0443 \u043f\u0440\u0435\u0434\u0430\u043d\u043d\u043e\u0441\u0442\u044c \u0438 \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u0438\u0437\u043c. '),u.qZA(),u.TgZ(38,"div",19)(39,"div",20)(40,"h3",21),u._uU(41,"1. \u0411\u043e\u043d\u0443\u0441\u044b \u0437\u0430 \u043f\u043e\u043a\u0443\u043f\u043a\u0438"),u.qZA(),u.TgZ(42,"p",22),u._uU(43," \u041f\u0440\u0438 \u043a\u0430\u0436\u0434\u043e\u043c \u0437\u0430\u043a\u0430\u0437\u0435 \u043c\u0435\u0431\u0435\u043b\u0438 \u043e\u0442 \u0432\u0430\u0448\u0435\u0433\u043e \u043a\u043b\u0438\u0435\u043d\u0442\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u0431\u044b\u043b \u043e\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u043b\u0435\u043d \u0447\u0435\u0440\u0435\u0437 \u0432\u0430\u0448\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u0440\u0443\u0447\u0435\u043d\u0438\u0435, \u0432\u044b \u043f\u043e\u043b\u0443\u0447\u0430\u0435\u0442\u0435 \u0431\u043e\u043d\u0443\u0441\u043d\u044b\u0435 \u0431\u0430\u043b\u043b\u044b. \u0427\u0435\u043c \u0431\u043e\u043b\u044c\u0448\u0435 \u0437\u0430\u043a\u0430\u0437\u043e\u0432 \u0447\u0435\u0440\u0435\u0437 \u0432\u0430\u0441, \u0442\u0435\u043c \u0432\u044b\u0448\u0435 \u0432\u0430\u0448 \u0431\u043e\u043d\u0443\u0441\u043d\u044b\u0439 \u0431\u0430\u043b\u0430\u043d\u0441. "),u.qZA()(),u.TgZ(44,"div",20)(45,"h3",21),u._uU(46,"2. \u041f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u0430\u044f \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430"),u.qZA(),u.TgZ(47,"p",22),u._uU(48," \u041c\u044b \u0446\u0435\u043d\u0438\u043c \u0432\u0430\u0448\u0435 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0438 \u0433\u043e\u0442\u043e\u0432\u044b \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440\u0430, \u043a\u043e\u0442\u043e\u0440\u044b\u0439 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u043c \u0432 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0438 \u0437\u0430\u043a\u0430\u0437\u043e\u0432, \u043e\u0442\u0432\u0435\u0442\u0438\u0442 \u043d\u0430 \u0432\u0430\u0448\u0438 \u0432\u043e\u043f\u0440\u043e\u0441\u044b \u0438 \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u0443\u0435\u0442 \u0431\u044b\u0441\u0442\u0440\u0443\u044e \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0443 \u043f\u0440\u043e\u0434\u0443\u043a\u0446\u0438\u0438 \u0434\u043b\u044f \u0432\u0430\u0448\u0438\u0445 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432. "),u.qZA()(),u.TgZ(49,"div",20)(50,"h3",21),u._uU(51,"3. \u042d\u043a\u0441\u043a\u043b\u044e\u0437\u0438\u0432\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f"),u.qZA(),u.TgZ(52,"p",22),u._uU(53," \u0414\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u044b \u0441 \u0432\u044b\u0441\u043e\u043a\u0438\u043c \u0431\u0430\u043b\u0430\u043d\u0441\u043e\u043c \u043f\u043e\u043b\u0443\u0447\u0430\u044e\u0442 \u0434\u043e\u0441\u0442\u0443\u043f \u043a \u044d\u043a\u0441\u043a\u043b\u044e\u0437\u0438\u0432\u043d\u044b\u043c \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u043c, \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u043c \u0441\u043a\u0438\u0434\u043a\u0430\u043c \u0438 \u043d\u043e\u0432\u044b\u043c \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f\u043c \u043c\u0435\u0431\u0435\u043b\u0438 \u0435\u0449\u0435 \u0434\u043e \u0438\u0445 \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0432\u044b\u0445\u043e\u0434\u0430. "),u.qZA()()()()()()),2&t&&(u.xp6(29),u.Q6J("ngModel",e.balance)("min",0)("max",3e6))},directives:[d.iR,s.JJ,s.On],styles:[".bonus__head[_ngcontent-%COMP%]{margin-bottom:60px;display:flex;align-items:end;gap:20px;justify-content:space-between}.bonus__head-item[_ngcontent-%COMP%]{padding:44px;border-radius:20px;background:#f5f5f5}.bonus__head-item__text[_ngcontent-%COMP%]{display:block;margin-bottom:25px;font-weight:400;font-size:24px;line-height:100%;text-transform:uppercase;color:#000}.bonus__head-item__text--lg[_ngcontent-%COMP%]{margin-bottom:0;font-weight:700;font-size:64px;line-height:90%;color:#000}.bonus__title[_ngcontent-%COMP%]{margin-bottom:28px;font-weight:400;font-size:16px;line-height:150%;text-transform:uppercase;color:#000}.bonus__text[_ngcontent-%COMP%]{font-weight:300;font-size:16px;line-height:175%;color:#000}.bonus__content-wrap[_ngcontent-%COMP%]{margin-top:50px;display:flex;justify-content:space-between;gap:20px}.bonus__content-subtitle[_ngcontent-%COMP%]{margin-bottom:28px;font-weight:400;font-size:16px;text-transform:uppercase;color:#23221e}.bonus__content-text[_ngcontent-%COMP%]{font-weight:300;font-size:16px;line-height:175%;color:#000}.chart__main-area[_ngcontent-%COMP%]{position:absolute;inset:10px 10px 0}.chart__wrap[_ngcontent-%COMP%]{max-width:490px;display:grid;grid-template-columns:min-content 1fr}.chart__vertical[_ngcontent-%COMP%]{grid-column:1/2;grid-row:1/2;margin-right:8px;display:flex;flex-direction:column;height:96%;transform:translateY(10px)}.chart__vertical-value[_ngcontent-%COMP%]{white-space:nowrap;font-weight:400;font-size:12px;text-align:right;color:#a7a7a7;&:nth-child(1){flex:0 0 48%}&:nth-child(2){flex:0 0 31%}&:nth-child(3){flex:1 1 auto}}.chart__horizontal[_ngcontent-%COMP%]{grid-column:2/3;grid-row:2/3;margin-top:8px;display:flex;align-items:center;width:96%;transform:translate(10px)}.chart__horizontal-value[_ngcontent-%COMP%]{font-weight:400;font-size:12px;color:#a7a7a7;&:nth-child(1){flex:0 0 15%}&:nth-child(2){flex:0 0 31%}&:nth-child(3){flex:1 1 auto}}.chart__main[_ngcontent-%COMP%]{min-width:400px;min-height:200px;grid-column:2/3;grid-row:1/2;position:relative;background:url(/assets/img/bonus-grid.svg) no-repeat center}.chart__title[_ngcontent-%COMP%]{margin-top:33px;font-weight:400;font-size:24px;line-height:100%;text-transform:uppercase;color:#000;text-align:center}@media all and (max-width: 1200px){.bonus__head[_ngcontent-%COMP%]{margin-bottom:38px}.bonus__head-item[_ngcontent-%COMP%]{align-self:start;padding:28px}.bonus__head-item__text[_ngcontent-%COMP%]{margin-bottom:16px}.bonus__head-item__text--lg[_ngcontent-%COMP%]{margin-bottom:0;font-weight:700;font-size:38px;line-height:100%;color:#000}}@media all and (max-width: 800px){.bonus__head[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;gap:36px;justify-content:space-between}.bonus__head-item[_ngcontent-%COMP%]{align-self:stretch;padding:28px;text-align:center}.bonus__head-chart[_ngcontent-%COMP%]{align-self:center}.bonus__title[_ngcontent-%COMP%]{margin-bottom:20px}.bonus__text[_ngcontent-%COMP%]{font-weight:300;font-size:14px;line-height:175%;color:#000}.bonus__content-wrap[_ngcontent-%COMP%]{margin-top:38px;display:flex;justify-content:space-between;flex-direction:column;gap:20px}.bonus__content-subtitle[_ngcontent-%COMP%]{margin-bottom:20px}}@media all and (max-width: 520px){.chart__wrap[_ngcontent-%COMP%]{max-width:490px;display:grid;grid-template-columns:20px 1fr}.chart__main-area[_ngcontent-%COMP%]{position:absolute;inset:45px 23px 7px 25px}.chart__main[_ngcontent-%COMP%]{min-width:290px;max-width:300px;min-height:320px;grid-column:2/3;grid-row:1/2;position:relative;background:url(/assets/img/bonus-grid-mob.svg) no-repeat center}.chart__main-dot-text[_ngcontent-%COMP%]{display:block;font-weight:600;font-size:10px;color:#fff;white-space:nowrap}.chart__main-dot-tooltip[_ngcontent-%COMP%]{top:-34px;left:-45px;padding:5px 10px}.chart__vertical[_ngcontent-%COMP%]{grid-column:1/2;grid-row:1/2;margin-right:0;display:flex;flex-direction:column;justify-content:space-between;height:100%;width:100%;transform:translateY(8px) translate(10px)}.chart__vertical-value[_ngcontent-%COMP%]{white-space:nowrap;font-weight:400;font-size:12px;writing-mode:vertical-rl;text-align:right;color:#a7a7a7;transform-origin:center;transform:rotate(180deg);&:nth-child(1){flex:0 1 auto}&:nth-child(2){flex:0 1 auto}&:nth-child(3){flex:0 1 auto}}.chart__horizontal[_ngcontent-%COMP%]{max-width:280px;grid-column:2/3;grid-row:2/3;margin-top:8px;width:94%;transform:translate(13px)}.chart__main-dot[_ngcontent-%COMP%]:not(.active){&:hover>.chart__main-dot-tooltip{opacity:0;visibility:hidden;transition:.2s ease-in}&:hover .chart__main-dot-icon>circle:nth-child(1){animation:none}}.chart__main-dot.active[_ngcontent-%COMP%]   .chart__main-dot-icon[_ngcontent-%COMP%] > circle[_ngcontent-%COMP%]:nth-child(1){animation:none}.chart__main-dot-tooltip.active[_ngcontent-%COMP%]{opacity:1;visibility:visible;transition:.2s ease-in}}"]}),n})();var x=a(4638),f=a(9381);let C=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=u.Xpm({type:n,selectors:[["app-models"]],decls:18,vars:0,consts:[[1,"models"],[1,"models_wrap"],[1,"models__title"],[1,"models__content"],[1,"models__text"],["download","#",1,"models__link"],[1,"models__link-icon"],["width","35","height","35","viewBox","0 0 35 35","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.125 16.0469V24.7969L16.0417 21.8802","stroke","#292D32","stroke-width","1.3","stroke-linecap","round","stroke-linejoin","round"],["d","M13.1249 24.7917L10.2083 21.875","stroke","#292D32","stroke-width","1.3","stroke-linecap","round","stroke-linejoin","round"],["d","M32.0834 14.5885V21.8802C32.0834 29.1719 29.1667 32.0885 21.8751 32.0885H13.1251C5.83341 32.0885 2.91675 29.1719 2.91675 21.8802V13.1302C2.91675 5.83854 5.83341 2.92188 13.1251 2.92188H20.4167","stroke","#292D32","stroke-width","1.3","stroke-linecap","round","stroke-linejoin","round"],["d","M32.0834 14.5885H26.2501C21.8751 14.5885 20.4167 13.1302 20.4167 8.75521V2.92188L32.0834 14.5885Z","stroke","#292D32","stroke-width","1.3","stroke-linecap","round","stroke-linejoin","round"],[1,"models__link-text"]],template:function(t,e){1&t&&(u.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),u._uU(3," \u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 \u043d\u0430\u0448\u0443 \u0431\u0430\u0437\u0443 3D-\u043c\u043e\u0434\u0435\u043b\u0435\u0439! "),u.qZA(),u.TgZ(4,"div",3)(5,"p",4),u._uU(6," \u041c\u044b \u0440\u0430\u0434\u044b \u043f\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0432\u0430\u043c \u043d\u0430\u0448\u0443 \u043a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044e 3D-\u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u043c\u0435\u0431\u0435\u043b\u0438, \u043a\u043e\u0442\u043e\u0440\u0430\u044f \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u043c \u0432 \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0438 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432 \u0438\u043d\u0442\u0435\u0440\u044c\u0435\u0440\u0430. \u041d\u0430\u0448\u0430 \u0431\u0430\u0437\u0430 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0448\u0438\u0440\u043e\u043a\u0438\u0439 \u0432\u044b\u0431\u043e\u0440 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0445 3D-\u043c\u043e\u0434\u0435\u043b\u0435\u0439 \u0440\u0430\u0437\u043b\u0438\u0447\u043d\u043e\u0439 \u043c\u0435\u0431\u0435\u043b\u0438, \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u044e\u0449\u0435\u0439 \u0432\u0430\u043c \u043b\u0435\u0433\u043a\u043e \u0438 \u0431\u044b\u0441\u0442\u0440\u043e \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u0434\u0438\u0437\u0430\u0439\u043d\u0435\u0440\u0441\u043a\u0438\u0435 \u043a\u043e\u043d\u0446\u0435\u043f\u0446\u0438\u0438. "),u.qZA(),u.TgZ(7,"a",5)(8,"span",6),u.O4$(),u.TgZ(9,"svg",7),u._UZ(10,"path",8)(11,"path",9)(12,"path",10)(13,"path",11),u.qZA()(),u.kcU(),u.TgZ(14,"span",12),u._uU(15,"\u0421\u043a\u0430\u0447\u0430\u0442\u044c"),u._UZ(16,"br"),u._uU(17,"3D-\u043c\u043e\u0434\u0435\u043b\u0438"),u.qZA()()()()())},styles:[".models__title[_ngcontent-%COMP%]{margin-bottom:28px;font-weight:400;font-size:16px;line-height:150%;text-transform:uppercase;color:#000}.models__text[_ngcontent-%COMP%]{margin-bottom:28px;font-weight:300;font-size:16px;line-height:175%;color:#000}.models__link[_ngcontent-%COMP%]{display:inline-flex;gap:15px;align-items:center;cursor:pointer;&:hover>.price__link-text{text-shadow:0 0 .5px #000000;transition:.2s ease-in}}.models__link-icon[_ngcontent-%COMP%]{width:66px;height:66px;display:flex;align-items:center;justify-content:center;background:#f5f5f5;border-radius:50%}.models__link-text[_ngcontent-%COMP%]{font-weight:400;font-size:16px;line-height:119%;color:#23221e;transition:.2s ease-in}@media all and (max-width: 650px){.models__text[_ngcontent-%COMP%]{margin-bottom:28px;font-weight:300;font-size:14px;line-height:171%;color:#000}}"]}),n})();var v=a(8042),B=a(7449),E=a(6976),b=a(4466),o=a(1777),D=a(263);const A=[{path:"",component:(()=>{class n{constructor(t){this.auth=t}ngOnInit(){}prepareRoute(t){return t&&t.activatedRouteData&&t.activatedRouteData.animation}}return n.\u0275fac=function(t){return new(t||n)(u.Y36(D.e))},n.\u0275cmp=u.Xpm({type:n,selectors:[["app-shell"]],decls:34,vars:1,consts:[[1,"personal-area"],[1,"small-container"],[1,"breadcrumbs","personal-area__breadcrumbs"],["routerLink","/",1,"breadcrumbs__link"],["routerLink","./",1,"breadcrumbs__link","breadcrumbs__link--active"],[1,"personal-area__content","personal-content"],[1,"personal-content__nav","personal-nav"],[1,"personal-nav__lest"],[1,"personal-nav__item"],["routerLink","bonus","routerLinkActive","active",1,"personal-nav__link"],["routerLink","models","routerLinkActive","active",1,"personal-nav__link"],["routerLink","favorites","routerLinkActive","active",1,"personal-nav__link"],["routerLink","orders","routerLinkActive","active",1,"personal-nav__link"],["routerLink","address","routerLinkActive","active",1,"personal-nav__link"],["routerLink","profile","routerLinkActive","active",1,"personal-nav__link"],[1,"personal-nav__link",3,"click"],[1,"personal-content__inner"],["outlet","outlet"]],template:function(t,e){if(1&t&&(u.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"a",3),u._uU(4,"\u0433\u043b\u0430\u0432\u043d\u0430\u044f"),u.qZA(),u.TgZ(5,"a",4),u._uU(6,"\u041b\u0438\u0447\u043d\u044b\u0439 \u043a\u0430\u0431\u0438\u043d\u0435\u0442"),u.qZA()(),u.TgZ(7,"div",5)(8,"nav",6)(9,"ul",7)(10,"li",8)(11,"a",9),u._uU(12,"\u0411\u043e\u043d\u0443\u0441\u043d\u044b\u0439 \u0431\u0430\u043b\u0430\u043d\u0441"),u.qZA()(),u.TgZ(13,"li",8)(14,"a",10),u._uU(15,"\u0431\u0430\u0437\u0430 3d-\u043c\u043e\u0434\u0435\u043b\u0435\u0439"),u.qZA()(),u.TgZ(16,"li",8)(17,"a",11),u._uU(18,"\u0418\u0417\u0411\u0420\u0410\u041d\u041d\u041e\u0415"),u.qZA()(),u.TgZ(19,"li",8)(20,"a",12),u._uU(21,"\u043c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"),u.qZA()(),u.TgZ(22,"li",8)(23,"a",13),u._uU(24,"\u0430\u0434\u0440\u0435\u0441\u0430 \u0414\u041e\u0421\u0422\u0410\u0412\u041a\u0418"),u.qZA()(),u.TgZ(25,"li",8)(26,"a",14),u._uU(27,"\u043c\u043e\u0439 \u043f\u0440\u043e\u0444\u0438\u043b\u044c"),u.qZA()(),u.TgZ(28,"li",8)(29,"a",15),u.NdJ("click",function(){return e.auth.logout()}),u._uU(30,"\u0432\u044b\u0445\u043e\u0434"),u.qZA()()()(),u.TgZ(31,"div",16),u._UZ(32,"router-outlet",null,17),u.qZA()()()()),2&t){const i=u.MAs(33);u.xp6(31),u.Q6J("@routeAnimationsPersonal",e.prepareRoute(i))}},directives:[c.yS,c.Od,c.lC],styles:[".personal-area[_ngcontent-%COMP%]{padding:40px 0 140px}.personal-area__breadcrumbs[_ngcontent-%COMP%]{padding-bottom:40px;margin-bottom:40px;border-bottom:1px solid #d3d3d3}.personal-content[_ngcontent-%COMP%]{display:flex;gap:60px;justify-content:space-between}.personal-nav[_ngcontent-%COMP%]{flex:0 0 155px}.personal-nav__lest[_ngcontent-%COMP%]{list-style:none}.personal-nav__item[_ngcontent-%COMP%]{&:last-child>.personal-nav__link{margin-top:80px;color:#a7a7a7}}.personal-nav__link[_ngcontent-%COMP%]{display:inline-block;font-family:ProximaNova,sans-serif;font-weight:300;font-size:16px;padding-bottom:12px;margin-bottom:18px;text-transform:uppercase;color:#000;transition:.1s ease-in;border-bottom:.5px solid transparent;cursor:pointer;&.active{transition:.1s ease-in;text-shadow:0 0px 1px black;border-bottom:.5px solid black}}.personal-content__inner[_ngcontent-%COMP%]{position:relative;overflow:hidden;flex:1 1 auto}@media all and (max-width: 1200px){.personal-content[_ngcontent-%COMP%]{display:flex;gap:20px;justify-content:space-between}}@media all and (max-width: 1000px){.personal-nav[_ngcontent-%COMP%]{flex:0 0 auto}.personal-content[_ngcontent-%COMP%]{display:flex;gap:60px;flex-direction:column}.personal-nav__lest[_ngcontent-%COMP%]{list-style:none;display:flex;gap:10px;justify-content:space-between;border-bottom:1px solid #d3d3d3}.personal-nav__item[_ngcontent-%COMP%]{&:last-child>.personal-nav__link{margin-top:0;color:#a7a7a7}&:nth-child(6){flex:1 1 auto}}}@media all and (max-width: 800px){.personal-area[_ngcontent-%COMP%]{padding:40px 0 60px}.personal-content[_ngcontent-%COMP%]{gap:10px}.personal-nav__lest[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:0px;border-bottom:none}}"],data:{animation:[(0,o.X$)("routeAnimationsPersonal",[(0,o.eR)("* <=> *",[(0,o.oB)({position:"relative"}),(0,o.IO)(":enter, :leave",[(0,o.oB)({position:"absolute",top:0,left:0,width:"100%"})],{optional:!0}),(0,o.IO)(":enter",[(0,o.oB)({left:"100%"})],{optional:!0}),(0,o.IO)(":leave",(0,o.pV)(),{optional:!0}),(0,o.ru)([(0,o.IO)(":leave",[(0,o.jt)("400ms ease-out",(0,o.oB)({left:"-100%",opacity:0}))],{optional:!0}),(0,o.IO)(":enter",[(0,o.jt)("500ms ease-out",(0,o.oB)({left:"0%"}))],{optional:!0}),(0,o.IO)("@*",(0,o.pV)(),{optional:!0})])])])]}}),n})(),children:[{path:"",pathMatch:"full",redirectTo:"bonus",data:{animation:"bonus"}},{path:"bonus",component:h,data:{animation:"bonus"}},{path:"models",component:C,data:{animation:"models"}},{path:"favorites",component:f.S,data:{animation:"favorites"}},{path:"orders",component:B.b,data:{animation:"orders"}},{path:"orders/:id",component:v.l,data:{animation:"order"}},{path:"address",component:x.o,data:{animation:"address"}},{path:"address/:id",component:m.C,data:{animation:"new-address"}},{path:"profile",component:E.l,data:{animation:"profile"}}]}];let M=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=u.oAB({type:n}),n.\u0275inj=u.cJS({imports:[[_.ez,c.Bz.forChild(A),s.UX,b.m,d.JH]]}),n})()}}]);