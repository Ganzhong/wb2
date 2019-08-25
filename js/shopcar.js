$(function() {
  $(".allcheckbox").on("click", function() {
    if ($(this).prop("checked")) {
      $(".allcheckbox").prop({ checked: true }); //设置全部
      $(".mcheckbox").prop({ checked: true }); //设置全部
    } else {
      $(".allcheckbox").prop({ checked: false });
      $(".mcheckbox").prop({ checked: false });
    }
  });
  doinput("allcheckbox", "mcheckbox"); //封装的方法

  var mulxqlist = document.querySelectorAll(".mulxq li");
//   console.log(mulxqlist);
  for (let i = 0; i < mulxqlist.length; i++) {
    mulxqlist[i].onclick = function(eve) {
        // console.log(mulxqlist[i])
      var e = eve || event;
      var target = e.target || e.srcElement;
      if (target.nodeName == "I") {
        console.log(this.innerText);
      }
      if (target.className == "maddspan2") {
        console.log(this.innerText);
      }
      if (target.className == "maddspan3") {
        console.log(this.innerText);
      }
    //   var index = 0;
    //   return function() {
    //     index++;
    //     console.log("--" + i + "=" + index);
    //   };
    };
  }
});
