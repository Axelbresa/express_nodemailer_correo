const nodemailer=require("nodemailer");

enviarMail= async()=>{

    const config={
        host:"smtp.gmail.com",
        port:587,
        Auth:{
            user:"bresanovichaxel43@gmail.com",
            pass: "trdmtcmlgxlcqbww"
        }
    }

    const mensaje = {
        from:"bresanovichaxel43@gmail.com",
        to:"bresanovichaxel43@gmail.com",
        subject:"codigo de prueba",
        text: "envio de correo con node.js utilzando nodemailer"
    }

    const transport=nodemailer.createTransport(config);

    const info= await transport.sendMail(mensaje);

    console.log(info);
}

enviarMail();