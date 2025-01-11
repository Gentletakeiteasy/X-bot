//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidpromise2003@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Mek-d1/X-bot";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VarIiQL5a24AU5ZCVV0G";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VarIiQL5a24AU5ZCVV0G";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/mx0z4n.jpg";
global.devs = "2349133354644";
global.sudo = process.env.SUDO || "2348020674070";
global.owner = process.env.OWNER_NUMBER || "2348020674070";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/mx0z4n.jpg";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2347013349642,234xxxxx";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://x-bot-session-generator.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTU9TcE9qSHExVHhxRE42T2hZWFFvVWU2eDh4ejhlZVRhRkd5QUVENnAzOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRW4vUG9Zb2cyS3lGNkN6ZG9LamVaNnFSWHl4dENhVlU4YmczU2UxRkpGOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBSnVDcnFJU3I4NDF4RThaT0doR3VqdnVURll5bk40eFJvbmI2YkhsQ0dFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhRWxWbTlhNVhCM0JYbEozQ3BOTUNGUzd1ZkJMTzhRU2tGNUJ4b2xSR3h3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZNTjByb1hPd2FYNkJubVVUZ1JTR3VMVjZ3RUExWmJNTTVPRHdjMU5RRTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVCOG9ERWQ4cFpqSVFEWlJ6V254ek5odnBqZ3dXMittTlhDT1E5dFhJRXc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0g1T0pLK2pOS0Q0S3dsL09Mc1RkSURHNTdjbGE3V0VBeGRRek5oWVltbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQnh1R2xmVHJyZ085UUJYWUZJQnZlaWovbjZqZ1htUm5Ha0FnempRbXRHYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlAwUHZUZzQrZTc3NzJwS1dMZjlBOTNKRjM4cXNoR05YYUEwdkx4SEtQakdhazczdDFjQWw3WXhnRmdrRnVhZFRJWVZ6REMzT2p3SVdqaW9Ibk9UcUFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTIzLCJhZHZTZWNyZXRLZXkiOiI5ak5PNk9nWkZONi9hTHZSQlhSMmZJTTBjalYzeEp4WFg2Si9oYUFIa2JRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJReTRfMTQwS1M1MllPZDN1aHY1aXJBIiwicGhvbmVJZCI6ImM5MmY5OTMzLTNlZmEtNDFmZS04ODU3LWNkMTRhNzYzYmI4MiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGd0FtbEI1eFlmcS8wL084NDZ0KzAwQ0hUR3c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVE2TU41cXRtUkJBUkp5Z0lHamNqbFdoS29VPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjJaSEcyVkZDIiwibWUiOnsiaWQiOiIyMzQ4MDIwNjc0MDcwOjIwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdkLXwnZul8J2QtfCdkYzwnZC18J2bqfCdkYwg8J2QuvCdkYXwnZul8J2bsvCdm6jwnZuq8J2QtvCdkYYifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BxRzU2Y0hFSkxsaTd3R0dBTWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InZVMlBsSWJnSGxhR01DZy9iemp0a3l3UlhNMS9YTzdBVS9ZRVFFN29Mbjg9IiwiYWNjb3VudFNpZ25hdHVyZSI6Iis0cVB5UTFMSFVETzhFTDBHRkpFOFlheHlJbTZXWHFtMDBROVFILzF5ak4vOExJSkxEamE3c2p6elVnQzRRVVFwVTkvZWNUb0tYZlo4RkJxL1duU0NBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJMQWtWM3NEN29BS094RTNtcHR3am9LalZqek9qNDkrb2QrVUQzalJONzFxNEtib0w4dElvMkFhZ08zM3BPMFZxRlB4b1JKMzVGSjJkZ3hhS0ZMZEdBQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgwMjA2NzQwNzA6MjBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYjFOajVTRzRCNVdoakFvUDI4NDdaTXNFVnpOZjF6dXdGUDJCRUJPNkM1LyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNjYzNTAzOX0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "",",",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©X-:bot",
  author: process.env.PACK_AUTHER || "X-bot",
  packname: process.env.PACK_NAME || "",
  botname: process.env.BOT_NAME || "X-bot",
  ownername: process.env.OWNER_NAME || "-X-",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyDGaxLsz6PLvHvONZPeGuLUaf6UR9yIonc",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "PLATINUM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
