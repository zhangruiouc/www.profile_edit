$().ready(function(){
			/*$(".sudy-imgs[type=1]").each(function(){//展示方式1
				var $item = $(this);
				var _imghtml = "";
				$item.find("img").each(function(){
					var $item_img = $(this);
					_imghtml = (_imghtml+'<li class = "poster-item"><img src="carousel/image/a1.png"  width = "100%" height="100%"></li>');
				});
				
				$item.attr("data-setting",'{"width":1000,"height":270,"posterWidth":640,"posterHeight":270,"scale":0.2,"dealy":"2000", "algin":"middle"}');
				$item.html('<ul class = "poster-list">'+_imghtml+'</ul><div class = "poster-btn poster-prev-btn"></div><div class = "poster-btn poster-next-btn"></div>');
			});
			Caroursel.init($('.sudy-imgs[type=1]'))*/
			var i = 1;
			var url ="";
			var con = $("script[sudy-wp-context]").attr("sudy-wp-context");
	        if(con){
	            con = "/" + con;
	            url += con;
	        }
			$(".sudy-imgs[type=1]").each(function(){//展示方式1
				var _className = 'imgnav'+i;
				var $item = $(this);
				$item.attr("data-setting",'{"width":1000,"height":270,"posterWidth":640,"posterHeight":270,"scale":0.2,"dealy":"2000", "algin":"middle"}');
				$item.addClass("picSlideWrap clearfix");
				var _imghtml1 = '';
				var _imghtml2 = '';
				$item.find("img").each(function(){
					var $item_img = $(this);
                                        var $item_title = $item_img.next();
					var _attr = ($item_img.attr("width")?" width="+$item_img.attr("width"):"")+($item_img.attr("height")?" height="+$item_img.attr("height"):"");
					_imghtml1 = (_imghtml1+'<img src="'+$item_img.attr("src")+'"'+_attr+'/>');
					_imghtml2 = (_imghtml2 + '<li><img src="' + $item_img.attr("src") + '"/><imgtitle style="width: 100px;" title="' + $item_title.text() + '">' + ($item_title.text().length < 11 ? $item_title.text() : $item_title.text().substring(0, 11) + "...") + '</imgtitle><tt></tt></li>');
				});
				var _html = '<div class="imgnav '+_className+'"><div class="img">'+_imghtml1+' <div class="front" title="上一张"><a href="javaScript:void(0)" class="pngFix"></a></div><div class="next" title="下一张"><a href="javaScript:void(0)" class="pngFix"></a></div></div>'+
				' <div class="cbtn"> <i class="picSildeLeft"><img src="People_files/picSlideLeft.gif"/></i><i class="picSildeRight"><img src="People_files/picSlideRight.gif"/></i> <div class="cSlideUl"><ul>'+_imghtml2+'</ul></div></div></div>';
				$item.html(_html);
				slideGallery({
					imgWrap:"."+_className+" .img",
					index:0,
					slideImg:'.'+_className+' .cbtn li',
					slideWrap:'.'+_className+' .cbtn ul',
					tt:'.'+_className+' .cSlideUl tt',
					sildeRight:'.'+_className+' .cbtn .picSildeRight',
					sildeLeft:'.'+_className+' .cbtn .picSildeLeft',
					prev:'.'+_className+' .front',
					next:'.'+_className+' .next'
				});
				i++;
			});
			$(".sudy-imgs[type=2]").each(function(){//展示方式2
				var $item = $(this);
				var _html = '';
				$item.find(".item").each(function(){
					var $item_item = $(this);
					var $item_img = $item_item.find("img").eq(0);
					var $item_titles = "";
					var _attr = ($item_img.attr("width")?" width="+$item_img.attr("width"):"")+($item_img.attr("height")?" height="+$item_img.attr("height"):"");
					$item_item.find(".title").each(function(){
						$item_titles = $item_titles+'<div style="text-align:center;">'+$(this).html()+'</div>';
					});
					_html = (_html+'<div style="text-align:center;"><img src="'+$item_img.attr("src")+'"'+_attr+'/></div>'+$item_titles);
				});
				$item.html(_html);
			});
		});