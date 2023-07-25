const express = require('express');
const app = express();

app.set("views", "./views");    //ejs 파일 위치
app.set("view engine", "ejs");  //ejs 파일 사용 선언

app.get("/", (req, res)=>{
     res.render("index", {key : "value"});
 });

app.get("/login", (req, res)=>{
    const name = "홍길동";
    res.render("login", {n : name});
});

app.get("/logout", (req, res)=>{
    const context = {
        key1 : "값-1", key2 : "값-2",
        key3 : [10, 20, 30], key4 : {k1: "k11", k2 : "k22"}
    };
res.render("logout", {context : context});
});

app.get("/member",(req, res)=>{
    context = {
        arr : ['홍길동', '20살', '산골짜기'],
        obj : {'name':'김개똥','age':'30살','addr':'개똥별'},
        name :  '고길동', 'age' : '40살', 'addr' : '서울'
    }
    res.render("member", {context : context});
 });

 app.get("/for", (req, res)=>{
    const arr = ["홍길동", "김개똥", "고길동"];
    res.render("for", {name : arr});
 });

 
 app.get("/if", (req, res)=>{
    res.render("if");
 });

 app.get("/for_quiz", (req, res)=>{
    context={
        "rank":[ [1, 2, 3, 4, 5] , 
          ["육","7","팔","구","10"], 
         [11, 12, 13, 14, 15]   ]
      };
    res.render("for_quiz", context);
 });

 app.get("/url", (req, res)=>{
    context={
        "url":[
            {"네이버":"https://www.naver.com/"},
            {"구글":"https://www.google.co.kr/"},
            {"다음":"http://www.daum.net/"} 
        ]
    };
    res.render("url", context);
 });

 app.get("/site", (req, res)=>{
    context={
        "site":[
        ['번호','사이트','지지도','회원수'],
        [1,{'네이버':'https://www.naver.com/'},3,5123],
        [2,{'구글':'https://www.google.co.kr/'},2,48927],
        [3,{'다음':'http://www.daum.net/'},1,1234]
        ]
        } ;
    res.render("site", context);
 });

 app.listen(3000, ()=>{console.log("main03 server 연동")});