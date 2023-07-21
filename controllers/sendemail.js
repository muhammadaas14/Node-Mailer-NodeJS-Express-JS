const { test } = require('node:test');
const nodemailer = require ('nodemailer')
let sendMail = async(req,res)=>{
    
const transporter = nodemailer.createTransport({
   
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'otho.reichel14@ethereal.email',
            pass: 'UHJ76Gxq9Zyt3wBcwk'
        }
    });

    try {
        let info = await transporter.sendMail({
            from: '"Fred Foo 👻" <mohdaas740@gmail.com>', // sender address
               to: "codingmania32@gmail.com", // list of receivers
               subject: "Hello ✔", // Subject line
               text: "Hello worldss", // plain text body
               html: "<b>Hello world?</b>", // html body
            
       }); 
       console.log("Message sent: %s",info.messageId)
       res.send(info)
    } catch (error) {
        res.json({error:error.message})
    }
    

}

module.exports = sendMail