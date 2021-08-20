 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/trhx2.png");
         document.title = '女星性感泳装照流出，这身材也太Hot了吧！';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/img/trhx2.png");
         document.title = '你在想什么? (*▔＾▔*)';
         titleTime = setTimeout(2000, function () {
             document.title = OriginTitle;
         });
     }
 });