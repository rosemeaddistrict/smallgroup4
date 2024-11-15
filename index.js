const homes = new Map();
let addr = `Paul/Tina家,Paul/Tina家, <a href="https://maps.app.goo.gl/v6BpSCsMR4bpHnuZA">5114 Doreen Ave. Temple  City 91780</a>`;
homes.set("Tina/Paul", addr);
addr = `李庆弟兄/云苹姊妹家, <a href="https://maps.app.goo.gl/8KkehPoADML4cGrJ9">4970 Loma Ave. Temple City, 91780</a>`;
homes.set("李庆弟兄/云苹姊妹家", addr);

const img = './pics/哥林多后第四章第七节.jpg'; 
const date = `11/15/2024`;
const home = homes.get("李庆弟兄/云苹姊妹家");
const hymn_name = "补充本诗歌429首 主到我这里来";
const hymn_link = "https://rosemeaddistrict.github.io/myhymns/%E8%A9%A9%E6%AD%8C/%E8%A3%9C%E5%85%85%E6%9C%AC/429%E4%B8%BB%E5%88%B0%E6%88%91%E8%BF%99%E9%87%8C%E6%9D%A5.html";
const book_name = "牧养材料96题 第三系列 信而顺服";
const chapter  = "第七题　宝贝在瓦器里";
const chapter_link = "https://e-shepherding.org/%e7%ac%ac%e4%b8%83%e9%a2%98%e3%80%80%e5%ae%9d%e8%b4%9d%e5%9c%a8%e7%93%a6%e5%99%a8%e9%87%8c/" 

//經節
document.getElementById('picture').setAttribute("src", `${img}`)
//聚会時間
document.getElementById('date').innerHTML = `日期： 周五(${date}) 晚上七点`;
//聚会地点
document.getElementById('home').innerHTML = `地点： ${home} (可以的话，每家带一道菜)`;
//聚會詩歌
document.getElementById('hymn').innerHTML = `诗歌：<a href=${hymn_link}>${hymn_name}</a>`;
//進度
document.getElementById('lesson').innerHTML = `进度: ${book_name}`;
document.getElementById('class').innerHTML = `<a href=${chapter_link}>${chapter}</a>`;
