
//打开各个模态框
function selectmodal (x){
	switch (x)
	{
	case '已取货':
	$('#yqhmask').css('display', 'block');
	$('#phonenumber').click(function() {
		$(this).html("6048589999")
	});
	$('button:contains(行程追踪)').click(function() {
		
		$("#pic").attr("src","../img/fa/map.png");
	});
		break;
	case '待接单':
	
		$('#djdmask').siblings().css('display', 'none');
	    $('#djdmask').css('display', 'block');

	    if (sign==='ok') {
			$('.editor').css('display', 'none');
			$('.cancel').css('margin-left', '60%');
			}else{
					$('.cancel').css({
						'margin-left': '20%',
						'margin-top': '5px',
						'float':'left'
					});

					$('.editor').css({
						'display': 'block',
						'margin-top': '5px',
						'margin-left':'10%',
						'float':'left'
					});
			}

	   $('.cancel').click(function() {
	  	
	  $('#djdmask').css('display', 'none');
		 window.reload(true)
	  });

	   
	   break;
	case '待付款':
	  
	  $('#dfkmask').css('display', 'block');
	  $('.cancel').click(function() {
	  	
	  $('#dfkmask').css('display', 'none');
	  });
	   break;
	case '已完成':
	 
	   $('#ywcmask').css('display', 'block');
	   break;
	case '已取消':
	   
	    $('#yqxmask').css('display', 'block');
	   break;
	case '议价中':
	   
	
	 $('#yjmask').css('display', 'block');
	   break;
	case '未取货':
	 
	   $('#wqhmask').css('display', 'block');
	   break;
	case '待评价':
	
	   $('#dpjmask').css('display', 'block');
	   break;
	case '新订单':
		sign='true';
		$('#newordermask').css('display', 'block');
		$('#newordermask').siblings().css('display', 'none');
			break;
	case '批量订单':
		 sign='false';		//标记打开的是批量创建的模态框
		$('#newordersmask').siblings().css('display', 'none');
		$('#newordersmask').css('display', 'block');
		break;
	}
}


// 下面是左上五大功能效果

$('.leftlinkmenu:eq(3)').hover(function() {
	$('.leftlinkmenu:eq(3)').css('background', '#FFFFFF');
	$('.leftlinkmenu:eq(3)').css('opacity', '1');
	$('.leftlinkmenu:eq(0)').css('opacity', '0.5');
	$('.leftlinkmenu:eq(0)').css('background', '#FFFFFF');
	/* Stuff to do when the mouse enters the element */
}, function() {
	$('.leftlinkmenu:eq(3)').css('background', '#FFFFFF');
	$('.leftlinkmenu:eq(3)').css('opacity', '0.5');
	$('.leftlinkmenu:eq(0)').css('background', '#FFFFFF');
	$('.leftlinkmenu:eq(0)').css('opacity', '1');
});

$('.leftlinkmenu:eq(1)').hover(function() {
	$('.leftlinkmenu:eq(1)').css('background', '#FFFFFF');
	$('.leftlinkmenu:eq(1)').css('opacity', '1');
	$('.leftlinkmenu:eq(0)').css('opacity', '0.5');
	$('.leftlinkmenu:eq(0)').css('background', '#FFFFFF');
	/* Stuff to do when the mouse enters the element */
}, function() {
	$('.leftlinkmenu:eq(1)').css('background', '#FFFFFF');
	$('.leftlinkmenu:eq(1)').css('opacity', '0.5');
	$('.leftlinkmenu:eq(0)').css('background', '#FFFFFF');
	$('.leftlinkmenu:eq(0)').css('opacity', '1');
});

$('.leftlinkmenu:eq(2)').hover(function() {
	$('.leftlinkmenu:eq(2)').css('background', '#FFFFFF');
	$('.leftlinkmenu:eq(2)').css('opacity', '1');
	$('.leftlinkmenu:eq(0)').css('opacity', '0.5');
	$('.leftlinkmenu:eq(0)').css('background', '#FFFFFF');
	/* Stuff to do when the mouse enters the element */
}, function() {
	$('.leftlinkmenu:eq(2)').css('background', '#FFFFFF');
	$('.leftlinkmenu:eq(2)').css('opacity', '0.5');
	$('.leftlinkmenu:eq(0)').css('background', '#FFFFFF');
	$('.leftlinkmenu:eq(0)').css('opacity', '1');
});

$('.leftlinkmenu:eq(4)').hover(function() {
	$('.leftlinkmenu:eq(4)').css('background', '#FFFFFF');
	$('.leftlinkmenu:eq(4)').css('opacity', '1');
	$('.leftlinkmenu:eq(0)').css('opacity', '0.5');
	$('.leftlinkmenu:eq(0)').css('background', '#FFFFFF');
	/* Stuff to do when the mouse enters the element */
}, function() {
	$('.leftlinkmenu:eq(4)').css('background', '#FFFFFF');
	$('.leftlinkmenu:eq(4)').css('opacity', '0.5');
	$('.leftlinkmenu:eq(0)').css('background', '#FFFFFF');
	$('.leftlinkmenu:eq(0)').css('opacity', '1');
});
// 创建新订单模态框的显示
$('#searchbutton').click(function() {
	sign='true'
	selectmodal('新订单')
		
});
// 关闭创建新订单模态框
$('.ordercancel').click(function() {
			sign='ok'
		$('#newordermask').css('display', 'none');
	
	
});
//批量发布订单显示
$('button:contains(批量发布订单)').click(function() {
	
	selectmodal('批量订单')

});
//克隆批量增加订单中内容

function kelong(){
$(".fapostformwhite").prev().clone(true).insertBefore('.fapostformwhite')
}


//smallcontent选中效果
;
	$(".smallcontent").mouseenter(function(){
  $(this).siblings().css({
  	opacity: '0.4',
  
  });
});
	
	$(".smallcontent").mouseleave(function(){
  $(this).siblings().css({
  	opacity:'1',
  });
});
	$('#neworders').removeClass('show')
//得到八大块的具体内容
$('.smallcontent').click(function() {
	var status=$(this).children('.smallcontentright').children('.smallcontentrightDown').children('.smallcontentrightdownbox').children().html()
	sign='ok'
	selectmodal(status)			//调用selectmodal()函数
	
});
//待接单--修改编辑--按钮

$('.editor').click(function() {
	if (sign==='true') {
		selectmodal('新订单')
	
	}
	if (sign==='false') {
		selectmodal('批量订单')

	}
	
});




		
	