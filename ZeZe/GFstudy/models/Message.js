const mongoose = require('mongoose');
const MessageSchema = new mongoose.Schema(
    {
        content: String,
        //author: String
        author: {   
            type: String,
            unique: true    //중복된 값에 들어갈 수 없음
        }
    });
    // 이게 모지?
    module.exports = mongoose.model('Message',MessageSchema);