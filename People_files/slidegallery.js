function slideGallery(opt){
	var options = opt || {};
	var $wrap = $(options.imgWrap).eq(0);
    var index = options.index || 0;
    var $imgs = $wrap.find("img");
    var $slideImgs = $(options.slideImg);
    var $slideWrap = $(options.slideWrap);
    var $next = $(options.next).eq(0);
    var $prev = $(options.prev).eq(0);
    var $right = $(options.sildeRight).eq(0);
    var $left = $(options.sildeLeft).eq(0);
    var $tt = $(options.tt);
    var length = $imgs.length;
    var i = 1;
    var showClass = options.showClass || 'hov';
    //关键函数：通过控制i ，来显示图片
    function showImg(i){
        $imgs
            .eq(i).stop(true,true).fadeIn(800)
            .siblings("img").hide();
         $slideImgs
            .eq(i).addClass("hov")
            .siblings().removeClass("hov");
    }
    
    function slideNext(){
        if(index >= 0 && index < length-1) {
             ++index;
             showImg(index);
        }else{
			// if(confirm(options.lastTipText || "已经是最后一张,点击确定重新浏览！")){
			// 	showImg(0);
			// 	index=0;
			// 	aniPx=(length-5)*142+'px'; //所有图片数 - 可见图片数 * 每张的距离 = 最后一张滚动到第一张的距离
			// 	$slideWrap.animate({ "left": "+="+aniPx },200);
			// 	i=1;
			// }
            return false;
        }
        if(i<0 || i>length-5) {return false;}						  
               $slideWrap.animate({ "left": "-=142px" },200)
               i++;
    }
     
    function slideFront(){
       if(index >= 1 ) {
             --index;
             showImg(index);
        }
        if(i<2 || i>length+5) {return false;}
               $slideWrap.animate({ "left": "+=142px" },200)
               i--;
    }	
    $imgs.eq(0).show();
    $slideImgs.eq(0).addClass(showClass);
    $tt.each(function(e){
        var str=(e+1)+"/"+length;
        $(this).html(str)
    })

    $next.add($right).click(function(){
           slideNext();
       })
    $prev.add($left).click(function(){
           slideFront();
       })
    $slideImgs.click(function(){
        index  =  $slideImgs.index(this);
        showImg(index);
    });	
	$next.add($prev).hover(function(){
		$(this).children("a").fadeIn();
	},function(){
		$(this).children("a").fadeOut();
	})
}