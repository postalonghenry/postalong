// 下面是左上五大功能效果
$(".Menu-title ul li:contains('Í¬³Ç');").hover(function() {
	$(".Menu-title ul li:contains('Í¬³Ç');").css('color', '#21B796');
	/* Stuff to do when the mouse enters the element */
}, function() {
	$(".Menu-title ul li:contains('Í¬³Ç');").css('color', '#FFFFFF');
	/* Stuff to do when the mouse leaves the element */
});

$(".Menu-title ul li:contains('³Ç¼Ê');").hover(function() {
	$(".Menu-title ul li:contains('³Ç¼Ê');").css('color', '#21B796');
	/* Stuff to do when the mouse enters the element */
}, function() {
	$(".Menu-title ul li:contains('³Ç¼Ê');").css('color', '#FFFFFF');
	/* Stuff to do when the mouse leaves the element */
});

$(".Menu-title ul li:contains('¹ú¼Ê');").hover(function() {
	$(".Menu-title ul li:contains('¹ú¼Ê');").css('color', '#21B796');
	/* Stuff to do when the mouse enters the element */
}, function() {
	$(".Menu-title ul li:contains('¹ú¼Ê');").css('color', '#FFFFFF');
	/* Stuff to do when the mouse leaves the element */
});
// ÏÂÃæÊÇ×óÉÏ½Ç·¢ËÍÊÕÐÐ¹º±³¾°
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
// 创建新订单模态框
var searchbutton=document.getElementById('searchbutton')
var masking=document.getElementById('masking')
var neworder=document.getElementById('neworder')
var neworders=document.getElementById('neworders')
searchbutton.onclick=function (){
	masking.style.display='block'
	neworders.style.display='none'
}
// 关闭创建新订单模态框
$('.ordercancel').click(function() {
	$(this).parentsUntil('.fapostformb').removeClass('show')
	$(this).parentsUntil('.fapostformb').addClass('hidden')
	$('#masking').css('display', 'none');
	window.location.reload();//刷新当前页面.
	
});
//批量发布订单显示
var buttonforneworders=document.getElementById('buttonforneworders')
	buttonforneworders.onclick=function () {
		$("#neworder").removeClass("show");
		$("#neworder").addClass("hidden");
		$("#neworders").addClass("show");
	}
//克隆批量增加订单中内容

function kelong(){
$(".fapostformwhite").prev().clone(true).insertBefore('.fapostformwhite')
}
//打开待接单模态块
$('.orderpublish').click(function() {
	
	if ($("#pendingorder").addClass('show')) {
		$(this).parentsUntil('.biaoji').css('display', 'none');
		

	} else {
		$("#pendingorder").addClass('show')
		$(this).parentsUntil('.biaoji').css('display', 'none');
		

	}
	
	});
<<<<<<< HEAD





$('.editor').click(function() {
=======
<<<<<<< HEAD
<<<<<<< HEAD
//待接单按钮操作
>>>>>>> origin/master
// $('.editor').click(function() {


$("#pendingorder").removeClass('show');
$("#pendingorder").addClass('hidden')
$('.biaoji').show();
	/* Act on the event */
});
// $("#pendingorder").hide();
// $("#pendingorder").removeClass('show');
// $("#pendingorder").addClass('hidden')
// $('.biaoji').show();
// 	/* Act on the event */
// });
<<<<<<< HEAD

=======
=======
>>>>>>> parent of e35aac0... 222
=======
>>>>>>> parent of e35aac0... 222
>>>>>>> origin/master


		
	