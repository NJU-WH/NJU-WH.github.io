//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =["url(/img/background/bg-1.jpg)",
"url(/img/background/bg-2.jpg)",
"url(/img/background/bg-3.jpg)",
"url(/img/background/bg-4.jpg)",
"url(/img/background/bg-5.jpg)",
"url(/img/background/bg-6.jpg)",
"url(/img/background/bg-7.jpg)",
"url(/img/background/bg-8.jpg)",
"url(/img/background/bg-9.jpg)",
"url(/img/background/bg-10.jpg)",
"url(/img/background/bg-11.jpg)",
"url(/img/background/bg-12.jpg)",
"url(/img/background/bg-13.jpg)",
"url(/img/background/bg-14.jpg)",
"url(/img/background/bg-15.jpg)",
"url(/img/background/bg-16.jpg)",
"url(/img/background/bg-17.jpg)",
"url(/img/background/bg-18.jpg)",
"url(/img/background/bg-19.jpg)",
"url(/img/background/bg-20.jpg)",
"url(/img/background/bg-21.jpg)",
"url(/img/background/bg-22.jpg)",
"url(/img/background/bg-23.jpg)",
"url(/img/background/bg-24.jpg)",
"url(/img/background/bg-25.jpg)",
"url(/img/background/bg-26.jpg)",
"url(/img/background/bg-27.jpg)",
"url(/img/background/bg-28.jpg)",
"url(/img/background/bg-29.jpg)",
"url(/img/background/bg-30.jpg)",
"url(/img/background/bg-31.jpg)",
"url(/img/background/bg-32.jpg)",
"url(/img/background/bg-33.jpg)",
"url(/img/background/bg-34.jpg)",
"url(/img/background/bg-35.jpg)",
"url(/img/background/bg-36.jpg)",
"url(/img/background/bg-37.jpg)",
"url(/img/background/bg-38.jpg)",
"url(/img/background/bg-39.jpg)",
"url(/img/background/bg-40.jpg)",
"url(/img/background/bg-41.jpg)",
"url(/img/background/bg-42.jpg)",
"url(/img/background/bg-43.jpg)",
"url(/img/background/bg-44.jpg)",
"url(/img/background/bg-45.jpg)",
"url(/img/background/bg-46.jpg)",
"url(/img/background/bg-47.jpg)",
"url(/img/background/bg-48.jpg)",
"url(/img/background/bg-49.jpg)",
"url(/img/background/bg-50.jpg)",
"url(/img/background/bg-51.jpg)",
"url(/img/background/bg-52.jpg)",
"url(/img/background/bg-53.jpg)",
"url(/img/background/bg-54.jpg)",
"url(/img/background/bg-55.jpg)",
"url(/img/background/bg-56.jpg)",
"url(/img/background/bg-57.jpg)",
"url(/img/background/bg-58.jpg)",
"url(/img/background/bg-59.jpg)",
"url(/img/background/bg-60.jpg)"];
  //获取背景图片总数，生成随机数
  var bgindex =Math.floor(Math.random() * backimg.length);
  //重设背景图片
  document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
  //随机banner数组,图片可以换成图床链接，注意最后一条后面不要有逗号
  var bannerimg =["url(/img/background/bg-1.jpg)",
    "url(/img/background/bg-2.jpg)",
    "url(/img/background/bg-3.jpg)",
    "url(/img/background/bg-4.jpg)",
    "url(/img/background/bg-5.jpg)",
    "url(/img/background/bg-6.jpg)",
    "url(/img/background/bg-7.jpg)",
    "url(/img/background/bg-8.jpg)",
    "url(/img/background/bg-9.jpg)",
    "url(/img/background/bg-10.jpg)",
    "url(/img/background/bg-11.jpg)",
    "url(/img/background/bg-12.jpg)",
    "url(/img/background/bg-13.jpg)",
    "url(/img/background/bg-14.jpg)",
    "url(/img/background/bg-15.jpg)",
    "url(/img/background/bg-16.jpg)",
    "url(/img/background/bg-17.jpg)",
    "url(/img/background/bg-18.jpg)",
    "url(/img/background/bg-19.jpg)",
    "url(/img/background/bg-20.jpg)",
    "url(/img/background/bg-21.jpg)",
    "url(/img/background/bg-22.jpg)",
    "url(/img/background/bg-23.jpg)",
    "url(/img/background/bg-24.jpg)",
    "url(/img/background/bg-25.jpg)",
    "url(/img/background/bg-26.jpg)",
    "url(/img/background/bg-27.jpg)",
    "url(/img/background/bg-28.jpg)",
    "url(/img/background/bg-29.jpg)",
    "url(/img/background/bg-30.jpg)",
    "url(/img/background/bg-31.jpg)",
    "url(/img/background/bg-32.jpg)",
    "url(/img/background/bg-33.jpg)",
    "url(/img/background/bg-34.jpg)",
    "url(/img/background/bg-35.jpg)",
    "url(/img/background/bg-36.jpg)",
    "url(/img/background/bg-37.jpg)",
    "url(/img/background/bg-38.jpg)",
    "url(/img/background/bg-39.jpg)",
    "url(/img/background/bg-40.jpg)",
    "url(/img/background/bg-41.jpg)",
    "url(/img/background/bg-42.jpg)",
    "url(/img/background/bg-43.jpg)",
    "url(/img/background/bg-44.jpg)",
    "url(/img/background/bg-45.jpg)",
    "url(/img/background/bg-46.jpg)",
    "url(/img/background/bg-47.jpg)",
    "url(/img/background/bg-48.jpg)",
    "url(/img/background/bg-49.jpg)",
    "url(/img/background/bg-50.jpg)",
    "url(/img/background/bg-51.jpg)",
    "url(/img/background/bg-52.jpg)",
    "url(/img/background/bg-53.jpg)",
    "url(/img/background/bg-54.jpg)",
    "url(/img/background/bg-55.jpg)",
    "url(/img/background/bg-56.jpg)",
    "url(/img/background/bg-57.jpg)",
    "url(/img/background/bg-58.jpg)",
    "url(/img/background/bg-59.jpg)",
    "url(/img/background/bg-60.jpg)"];
  //获取banner图片总数，生成随机数
  //var bannerindex =Math.floor(Math.random() * bannerimg.length);
  //重设banner图片
  document.getElementById("page-header").style.backgroundImage = bannerimg[bgindex];