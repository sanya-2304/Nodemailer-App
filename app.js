const http = require('http');
const nodemailer = require('nodemailer');



const server=http.createServer((req,res)=>{
        const transporter = nodemailer.createTransport({
            service: "gmail",
            secure: true,
            port: 465,
            auth: {
                user: 'sanyaadoda@gmail.com',
                pass: 'jllt kfvr nryj dwbo' // Ensure this is your actual app password
            },
        });

        const receiver = {
            from: "sanyaadoda@gmail.com", // sender address
            to: "kartikdoda86@gmail.com, anurag1712002@gmail.com", // list of receivers
            subject: "Thank you", // Subject line
            html: "<b>This is very cool</b>", // html body
        };

        transporter.sendMail(receiver, (error, info) => {
            if (error) {
                console.error(error);
                return res.status(500).json({ error: 'Failed to send email', details: error });
            }
            console.log("Message sent: %s", info.messageId);
            res.json({ message: "Email sent successfully!", info });
        });

    })
server.listen(8080,()=>console.log('server running fine'))
