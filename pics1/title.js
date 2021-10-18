 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/img/trhx2.png");
         document.title = '我还没玩够，来陪我鸭(,,• ₃ •,,)';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/img/trhx2.png");
         document.title = '你回来辣！ヾ（o◕ˇ∀ˇ◕）ツ ';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 1500);
     }
 });