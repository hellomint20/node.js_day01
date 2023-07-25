const http = require("http");   //require - import 역할
const fs = require("fs");   //fs - 파일 기능을 사용할 수 있게 
/*
request : 사용자의 정보를 저장하는 객체
response : 사용자에게 응답하는 경우 사용하는 객체
*/
const app = http.createServer((request, response)=>{
    console.log("연결 되었습니다.");
    response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
    console.log( request.url );
    if(request.url == "/"){
        response.end("default Page");
    }else if(request.url == "/test"){
        
        fs.readFile("./test.html", (err, data) => {
            //err없으면 null, err 발생하면 err 내용
            if(err){
                throw err;
            } 
            response.end(data);
        });
    }
    //response.end("test123");
});
//app.listen(3000,"192.168.42.106");
app.listen(3000);
