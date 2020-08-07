// 몽구스와의 소통할 수 있는 module -> models 폴더에 있는 Message.js 
const Message = require('../models/Message');
// Message.js에 data 전달
//data = content
exports.createMessage = (res, content, author) => {  //exports. 로 달아주면 외부에서 사용할 수 있음 <-> 반대로 require은 외부에서 가져와서 사용
    Message.create({
        content: content,
        author : author
    }, function(err,result){
        //create 과정에서 오류가 있었으면 그거 출력하고 끝내
        if(err){
            console.log('대충 author 중복된 듯')
            res.send("author가 중복되었다")
            return;
        }
        //잘 저장된 것 같다
        console.log('잘 저장됨');
        res.send('데이터가 성공적으로 저장 됐습니다')
    });
}
// findUser였으면 조건 (id) 찾기
exports.findMessage= (res) => {
    Message.findOne({},function (err,message){ //조건 하나를 찾아라 우리는 데이터가 없으니깐 조건 걸지 않고 아무거나 찾기
        //findOne 과정에서 오류가 있었으면 그거 출력하고 끝내!
        if(err){
            console.log(err);
            res.send("아무코토 못찾음 오류났음");
            return;
        }
        //잘 찾았으니 그대로 출력해보자
        console.log(message);
        //res.send(message.content); 그냥 message로만 받으면 날 것의 데이터까지 다 받음(db에 있는 content 내용만 전송 가능)
        
        //저자도 같이 줄거니깐 json으로 전달(원래 res.send)
        res.json({
            content:message.content,
            author:message.author
        })
    
    }); 
}

//모든 메세지를 지워보자
exports.deleteMessage = (res) => {
    //{} 이 안에는 삭제할 조건을 추가 
    Message.deleteMany({},function(err){
        if(err){
            console.log(err);
        
        res.send("모두 삭제 완료")
        return
    }
    res.send("모두 삭제 완료")
    })
}

// author를 기준으로 메세지를 수정해보자
exports.updateMessage = (content,author) => {
    //{} 이 안에는 삭제할 조건을 추가 
    Message.updateOne({
        author : author
    }, {
        content: content 
    }, function(err, res){ //updateOne, updateMany 등등
        if(err){
            console.log(err);
            return
    }
    console.log(res)
    })
}