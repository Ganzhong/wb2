/*
 * @Description: In User Settings Edit$
 * @Author: your name
 * @Date: 2019-08-26 08:53:29
 * @LastEditTime: 2019-08-26 22:58:34
 * @LastEditors: Please set LastEditors
 */


 
$(function () {
  // showlist();
  // console.log();
  // adddata();
  // changedata();
  var obj = jQuery.parseJSON(showlist());
  // console.log(obj.datalist)
  // console.log(obj.datalist[0].wb_name)
  // console.log(obj.datalist[0].wb_id)
  var newlist = [];
  var datalist = obj.datalist;
  // var datalist = [
  //   {
  //     id: 2,
  //     name: "法国赫柏林旗舰店",
  //     img: "./img/ganwb02.png",
  //     detail: "瑞士艺术制表大师爱保时(EPOS)-Emotion...",
  //     caizhi: "真皮蓝色牛皮",
  //     price: 5050,
  //     num: 1
  //   },
  //   {
  //     id: 3,
  //     name: "法国赫柏林旗舰店",
  //     img: "./img/ganwb02.png",
  //     detail: "瑞士艺术制表大师爱保时(EPOS)-Emotion...",
  //     caizhi: "真皮蓝色牛皮",
  //     price: 440,
  //     num: 1
  //   },
  // ];
  console.log(datalist);
  // console.log(datalist1);
  
  datalist = array_diff(datalist, newlist);

  for (let i = 0; i < datalist.length; i++) {
    init(datalist[i]);//遍历赋值
  }
  // console.log(datalist);
  var list = document.querySelectorAll(".mcheckbox");
  var mlist = $(".mcheckbox");
  var totalcost = 0;
  $(".allcheckbox").on("click", function() {
    if ($(this).prop("checked")) {
      $(".allcheckbox").prop({ checked: true }); //设置全部
      $(".mcheckbox").prop({ checked: true }); //
      totalcost = 0;
      for (let i = 0; i < list.length; i++) {
        if ($(mlist[i]).prop("checked")) {
          if (!(i % 2 == 0)) {
            totalcost += Number(list[i].parentNode.children[7].innerText);
            $(".mpaycost span:nth-of-type(2)")[0].innerText = totalcost;
          }
        }
      }
    } else {
      $(".allcheckbox").prop({ checked: false });
      $(".mcheckbox").prop({ checked: false });
      $(".mpaycost span:nth-of-type(2)")[0].innerText = 0;
    }
  });
  doinput(".allcheckbox", ".mcheckbox"); //封装的方法 第一个给全选的input classname 第二个给子input classname
  //第一个给 减的classname 第二个给 加的classname 第三个给外边 li选择器的string
  countchange("maddspan1", "maddspan3", ".mulxq li");
});
