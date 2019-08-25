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
		}
		
	}
}
