(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{E7P9:function(b,a,i){"use strict";i.r(a);var t=i("Ip0R"),e=i("ZYCi"),n=i("WyAD"),c=i.n(n),d=i("WY8G"),r=i("CcnG"),o=[{path:"",children:[{path:"",component:function(){function b(){}return b.prototype.ngOnInit=function(){Object(d.k)(c.a,Object(d.g)());var b=document.getElementById("chart-bar-stacked"),a=(new c.a(b,{type:"bar",data:d.a.data,options:d.a.options}),document.getElementById("chart-doughnut")),i=(new c.a(a,{type:"doughnut",data:d.c.data,options:d.c.options}),document.getElementById("chart-pie")),t=(new c.a(i,{type:"pie",data:d.h.data,options:d.h.options}),document.getElementById("chart-points")),e=(new c.a(t,{type:"line",data:d.i.data,options:d.i.options}),document.getElementById("chart-sales")),n=(new c.a(e,{type:"line",data:d.j.data,options:d.j.options}),document.getElementById("chart-bars"));new c.a(n,{type:"bar",data:d.b.data})},b.\u0275fac=function(a){return new(a||b)},b.\u0275cmp=r.Ib({type:b,selectors:[["app-charts"]],decls:159,vars:0,consts:[[1,"header","bg-danger","pb-6"],[1,"container-fluid"],[1,"header-body"],[1,"row","align-items-center","py-4"],[1,"col-lg-6","col-7"],[1,"h2","text-white","d-inline-block","mb-0"],["aria-label","breadcrumb",1,"d-none","d-md-inline-block","ml-md-4"],[1,"breadcrumb","breadcrumb-links","breadcrumb-dark"],[1,"breadcrumb-item"],["href","javascript:void(0)"],[1,"fas","fa-home"],["aria-current","page",1,"breadcrumb-item","active"],[1,"col-lg-6","col-5","text-right"],["href","javascript:void(0)",1,"btn","btn-sm","btn-neutral"],[1,"row"],[1,"col-xl-3","col-md-6"],[1,"card","card-stats"],[1,"card-body"],[1,"col"],[1,"card-title","text-uppercase","text-muted","mb-0"],[1,"h2","font-weight-bold","mb-0"],[1,"col-auto"],[1,"icon","icon-shape","bg-gradient-red","text-white","rounded-circle","shadow"],[1,"ni","ni-active-40"],[1,"mt-3","mb-0","text-sm"],[1,"text-success","mr-2"],[1,"fa","fa-arrow-up"],[1,"text-nowrap"],[1,"icon","icon-shape","bg-gradient-orange","text-white","rounded-circle","shadow"],[1,"ni","ni-chart-pie-35"],[1,"icon","icon-shape","bg-gradient-green","text-white","rounded-circle","shadow"],[1,"ni","ni-money-coins"],[1,"icon","icon-shape","bg-gradient-info","text-white","rounded-circle","shadow"],[1,"ni","ni-chart-bar-32"],[1,"container-fluid","mt--6"],[1,"col-xl-6"],[1,"card"],[1,"card-header"],[1,"surtitle"],[1,"h3","mb-0"],[1,"chart"],["id","chart-sales",1,"chart-canvas"],["id","chart-bars",1,"chart-canvas"],["id","chart-points",1,"chart-canvas"],["id","chart-doughnut",1,"chart-canvas"],["id","chart-pie",1,"chart-canvas"],["id","chart-bar-stacked",1,"chart-canvas"]],template:function(b,a){1&b&&(r.Tb(0,"div",0),r.Tb(1,"div",1),r.Tb(2,"div",2),r.Tb(3,"div",3),r.Tb(4,"div",4),r.Tb(5,"h6",5),r.Fc(6,"Charts"),r.Sb(),r.Tb(7,"nav",6),r.Tb(8,"ol",7),r.Tb(9,"li",8),r.Tb(10,"a",9),r.Pb(11,"i",10),r.Sb(),r.Sb(),r.Tb(12,"li",8),r.Tb(13,"a",9),r.Fc(14," Charts "),r.Sb(),r.Sb(),r.Tb(15,"li",11),r.Fc(16," Charts "),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(17,"div",12),r.Tb(18,"a",13),r.Fc(19," New "),r.Sb(),r.Tb(20,"a",13),r.Fc(21," Filters "),r.Sb(),r.Sb(),r.Sb(),r.Tb(22,"div",14),r.Tb(23,"div",15),r.Tb(24,"div",16),r.Tb(25,"div",17),r.Tb(26,"div",14),r.Tb(27,"div",18),r.Tb(28,"h5",19),r.Fc(29," Total traffic "),r.Sb(),r.Tb(30,"span",20),r.Fc(31," 350,897 "),r.Sb(),r.Sb(),r.Tb(32,"div",21),r.Tb(33,"div",22),r.Pb(34,"i",23),r.Sb(),r.Sb(),r.Sb(),r.Tb(35,"p",24),r.Tb(36,"span",25),r.Pb(37,"i",26),r.Fc(38," 3.48% "),r.Sb(),r.Tb(39,"span",27),r.Fc(40," Since last month "),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(41,"div",15),r.Tb(42,"div",16),r.Tb(43,"div",17),r.Tb(44,"div",14),r.Tb(45,"div",18),r.Tb(46,"h5",19),r.Fc(47," New users "),r.Sb(),r.Tb(48,"span",20),r.Fc(49," 2,356 "),r.Sb(),r.Sb(),r.Tb(50,"div",21),r.Tb(51,"div",28),r.Pb(52,"i",29),r.Sb(),r.Sb(),r.Sb(),r.Tb(53,"p",24),r.Tb(54,"span",25),r.Pb(55,"i",26),r.Fc(56," 3.48% "),r.Sb(),r.Tb(57,"span",27),r.Fc(58," Since last month "),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(59,"div",15),r.Tb(60,"div",16),r.Tb(61,"div",17),r.Tb(62,"div",14),r.Tb(63,"div",18),r.Tb(64,"h5",19),r.Fc(65," Sales "),r.Sb(),r.Tb(66,"span",20),r.Fc(67," 924 "),r.Sb(),r.Sb(),r.Tb(68,"div",21),r.Tb(69,"div",30),r.Pb(70,"i",31),r.Sb(),r.Sb(),r.Sb(),r.Tb(71,"p",24),r.Tb(72,"span",25),r.Pb(73,"i",26),r.Fc(74," 3.48% "),r.Sb(),r.Tb(75,"span",27),r.Fc(76," Since last month "),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(77,"div",15),r.Tb(78,"div",16),r.Tb(79,"div",17),r.Tb(80,"div",14),r.Tb(81,"div",18),r.Tb(82,"h5",19),r.Fc(83," Performance "),r.Sb(),r.Tb(84,"span",20),r.Fc(85," 49,65% "),r.Sb(),r.Sb(),r.Tb(86,"div",21),r.Tb(87,"div",32),r.Pb(88,"i",33),r.Sb(),r.Sb(),r.Sb(),r.Tb(89,"p",24),r.Tb(90,"span",25),r.Pb(91,"i",26),r.Fc(92," 3.48% "),r.Sb(),r.Tb(93,"span",27),r.Fc(94," Since last month "),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(95,"div",34),r.Tb(96,"div",14),r.Tb(97,"div",35),r.Tb(98,"div",36),r.Tb(99,"div",37),r.Tb(100,"h6",38),r.Fc(101,"Overview"),r.Sb(),r.Tb(102,"h5",39),r.Fc(103,"Total sales"),r.Sb(),r.Sb(),r.Tb(104,"div",17),r.Tb(105,"div",40),r.Pb(106,"canvas",41),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(107,"div",35),r.Tb(108,"div",36),r.Tb(109,"div",37),r.Tb(110,"h6",38),r.Fc(111,"Performance"),r.Sb(),r.Tb(112,"h5",39),r.Fc(113,"Total orders"),r.Sb(),r.Sb(),r.Tb(114,"div",17),r.Tb(115,"div",40),r.Pb(116,"canvas",42),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(117,"div",14),r.Tb(118,"div",35),r.Tb(119,"div",36),r.Tb(120,"div",37),r.Tb(121,"h6",38),r.Fc(122,"Growth"),r.Sb(),r.Tb(123,"h5",39),r.Fc(124,"Sales value"),r.Sb(),r.Sb(),r.Tb(125,"div",17),r.Tb(126,"div",40),r.Pb(127,"canvas",43),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(128,"div",35),r.Tb(129,"div",36),r.Tb(130,"div",37),r.Tb(131,"h6",38),r.Fc(132,"Users"),r.Sb(),r.Tb(133,"h5",39),r.Fc(134,"Audience overview"),r.Sb(),r.Sb(),r.Tb(135,"div",17),r.Tb(136,"div",40),r.Pb(137,"canvas",44),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(138,"div",14),r.Tb(139,"div",35),r.Tb(140,"div",36),r.Tb(141,"div",37),r.Tb(142,"h6",38),r.Fc(143,"Partners"),r.Sb(),r.Tb(144,"h5",39),r.Fc(145,"Affiliate traffic"),r.Sb(),r.Sb(),r.Tb(146,"div",17),r.Tb(147,"div",40),r.Pb(148,"canvas",45),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Tb(149,"div",35),r.Tb(150,"div",36),r.Tb(151,"div",37),r.Tb(152,"h6",38),r.Fc(153,"Overview"),r.Sb(),r.Tb(154,"h5",39),r.Fc(155,"Product comparison"),r.Sb(),r.Sb(),r.Tb(156,"div",17),r.Tb(157,"div",40),r.Pb(158,"canvas",46),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb(),r.Sb())},encapsulation:2}),b}()}]}];i.d(a,"ChartsModule",(function(){return S}));var S=function(){function b(){}return b.\u0275mod=r.Mb({type:b}),b.\u0275inj=r.Lb({factory:function(a){return new(a||b)},imports:[[t.c,e.g.forChild(o)]]}),b}()}}]);