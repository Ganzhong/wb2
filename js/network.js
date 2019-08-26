/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-09 18:59:41
 * @LastEditTime: 2019-08-26 22:58:10
 * @LastEditors: Please set LastEditors
 */
function showlist() {
  var result;
  //查数据
  $.ajax({
    async:false,//同步(true 默认)，异步(false)
    url: "http://10.36.149.48/wb2/interface/showlist.php", //请求的服务端地址
    success: function(data) {
      result = data;
    },
    error: function() {
      //建数据库
      $.ajax({
        url: "http://10.36.149.48/wb2/interface/model/create_wbdatabase.php",
        success: function(data) {
        }
      });
      //建表
      $.ajax({
        url: "http://10.36.149.48/wb2/interface/model/create_wbtable.php",
        success: function(data) {
          // console.log(data); //拿到返回的数据
        }
      });
    }
  });
  return result;
}

function adddata() {
  //'添加数据'
  $.ajax({
    url: "http://10.36.149.48/wb2/interface/addwb.php",
    data: {
      // VALUES ('$id','$title','$detail','$name','$img','$caizhi','$price','$remark')";
      id: 4,
      name: "法国赫柏林旗舰店",
      img: "https://image8.wbiao.co/shop/997794fbcb92491187fcdcc1e42fd062.jpg?x-oss-process=image/resize,w_90,h_90",
      // img: "http,w_90,h_90",
      detail: "瑞士艺术制表大师爱保时(EPOS)-Emotion...",
      caizhi: "真皮蓝色牛皮",
      price: 440,
      num: 1
      
      // id: "3",
      // title: "title",
      // detail: "detail",
      // name: "name",
      // img: "img",
      // caizhi: "caizhi",
      // num: "2",
      // price: "price",
      // remark: ""
    },
    type: "post",
    success: function(data) {
      console.log("==添加数据=" + data); //拿到返回的数据
    }
  });
}

function deldata() {
  $.ajax({
    url: "http://10.36.149.48/wb2/interface/delwb.php", //请求的服务端地址
    data: {
      id: "3"
    },
    type: "post",
    success: function(data) {
      console.log(data);
    }
  });
}

function changedata() {
  //改数据
  $.ajax({
    url: "http://10.36.149.48/wb2/interface/changewb.php",
    data: {
      id: "3",
      num: "50"
    },
    type: "post",
    success: function(data) {
      console.log("===" + data); //拿到返回的数据
    }
  });
}
