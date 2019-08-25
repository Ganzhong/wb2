function doinput(allinput,childinput){
	var mcheckbox =`.${childinput}`
	var allcheckbox =`.${allinput}`
	var list = document.querySelectorAll(mcheckbox);
	var mlist = $(mcheckbox);
	for (let i = 0; i < list.length; i++) {
		if ($(mlist[i]).prop('checked')) {
			$(allcheckbox).prop({checked:true});
		}else{
			$(allcheckbox).prop({checked:false});
		}
		list[i].onclick = function(){
			if ($(mlist[i]).prop('checked')) {
				$(mlist[i]).prop({checked:true})
				if (i%2 ==0) {
					i++;
					$(mlist[i]).prop({checked:true})
					i--;
				}else{
					i-=1;
					$(mlist[i]).prop({checked:true})
					i++;
				}
			}else{
				$(mlist[i]).prop({checked:false})
				if (i%2 ==0) {
					i+=1;
					$(mlist[i]).prop({checked:false})
					i--;
				}else{
					i-=1;
					$(mlist[i]).prop({checked:false})
					i++;
				}
			}
			for (let i = 0; i < list.length; i++) {
				if ($(mlist[i]).prop('checked')) {
					$(allcheckbox).prop({checked:true});
				}else{
					$(allcheckbox).prop({checked:false});
					break;
				}
			}
			var totalcost = 0;
			var totalcost2 = 0;
			for (let i = 0; i < list.length; i++) {
				if ($(mlist[i]).prop('checked')) {
					if (!(i%2==0)) {
						totalcost+=Number(list[i].parentNode.children[7].innerText);
						$('.mpaycost span:nth-of-type(2)')[0].innerText =totalcost;
					}
				}else{
					totalcost2++;
					if (totalcost2 ==list.length) {
						$('.mpaycost span:nth-of-type(2)')[0].innerText =0;
					}

				}
			}
		}
		
	}
}
var count = 0; 
var price = 0;
var a = "";
function countchange(leastr,addstr,list){
  var mulxqlist = document.querySelectorAll(list);
  for (let i = 0; i < mulxqlist.length; i++) {
    mulxqlist[i].onclick = function(eve) {
      var e = eve || event;
      var target = e.target || e.srcElement;
      if (target.className == leastr) {
      price = Number(target.parentNode.parentNode.children[4].innerText); //找位置
        a = target.nextElementSibling.innerText;//找位置
        count = a*1;
       if (count ==1) {
        count  =1;
       }else{
        count--;
       }
       target.parentNode.nextElementSibling.nextElementSibling.innerText = price*count //找位置
       target.nextElementSibling.innerText=count;//找位置
     
      }
      if (target.className == addstr) {
        a = target.parentNode.children[1].innerText;
        price = Number(target.parentNode.nextElementSibling.nextElementSibling.innerText);
		count = a*1;
		price/=count;
        count++;
          target.parentNode.children[1].innerText=count;
          target.parentNode.nextElementSibling.nextElementSibling.innerText = price*count;
      }
  
    };
  }
}
  