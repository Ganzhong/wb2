$(function() {
  var list = document.querySelectorAll('.mcheckbox');
  var mlist = $('.mcheckbox');
  var totalcost = 0;
  // var count = 0;
  $(".allcheckbox").on("click", function() {
    if ($(this).prop("checked")) {
      $(".allcheckbox").prop({ checked: true }); //设置全部
      $(".mcheckbox").prop({ checked: true }); //
      totalcost = 0
      for (let i = 0; i < list.length; i++) {
				if ($(mlist[i]).prop('checked')) {
					if (!(i%2==0)) {
						totalcost+=Number(list[i].parentNode.children[7].innerText);
            $('.mpaycost span:nth-of-type(2)')[0].innerText =totalcost;
					}
        }
 
			}
   
    } else {
      $(".allcheckbox").prop({ checked: false });
      $(".mcheckbox").prop({ checked: false });
      $('.mpaycost span:nth-of-type(2)')[0].innerText =0;

    }
  });
  doinput("allcheckbox", "mcheckbox"); //封装的方法 第一个给全选的input classname 第二个给子input classname
  //第一个给 减的classname 第二个给 加的classname 第三个给外边 li选择器的string
  countchange("maddspan1", "maddspan3", ".mulxq li");

});
