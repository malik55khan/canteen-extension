var CONFIG = {
  SiteName:"Hacethon",
  dataEncryptionKey: "hacksdd@sdd1234",
  mongoUrl: `mongodb://checkisaurus:checkisaurus@192.168.0.5:27017/checkisaurus`,
  JWTSecret: 'checkisaurusIsAwesome',
  Host:{
    Port:3200,
    IP:'localhost',
    TEST_ANGULAR_PORT:4200
  },
  SMTP:{
    SERVICE:"Gmail",
    HOST:"smtp.gmail.com",
    PORT:587,
    DEBUG:true,
    SEND_MAIL:true,
    REQUIRES_AUTH:true,
    DOMAINS:["gmail.com", "googlemail.com"],
    USER:"sdd.shared@gmail.com",
    PASS:'sdei#2002',
    NO_REPLY:"no_reply@yopmail.com",
    SUPPORT_EMAIL:"support@yopmail.com"
  },
  DocumentUrl:{
    BaseDirecory:"public/",
    ProfileImage : 'uploadMedia/profile',
    IdentityImage : 'uploadMedia/identity',
    Document : 'uploadMedia/document',
  }
};
CONFIG.WebEndPoint = `http://${CONFIG.Host.IP}:${CONFIG.Host.Port}`;


module.exports  = CONFIG;