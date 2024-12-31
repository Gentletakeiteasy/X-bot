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
global.sudo = process.env.SUDO || "2348020674070,2347015505825";
global.owner = process.env.OWNER_NUMBER || "2348020674070,2347015505825";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZVBuSFNVZkFuMExnT3Arb04yeHFlR2VvbkRvejdzK1JsaWhaQ1NSVjFHQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUkU3Z29JNzVicjNZVzQ5ZkxTWUF0YmFZOHhLSlhaVkx4YWFCUFhCMnN4QT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvSWdmWCtCclEzOXdTT0FNYVpXRWp0REo1dEQzMXlHSldmZ2pzTkN0R2xrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyeW1uTHUvSXdoenBaNTFtWWUybDlDQmFid1kxS3lFbDJXa1JicjdhUkZnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlKazZ6Wm9KZlhsd2xuYUNML0Q0Z2ZRN0JTdVhBd1E1cUN0Y0Y4UStUWFE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQvTHV6ZVdpeHFkeXVIcUJmSE03ckI4ODFQa24vcWFiVVZhNWFQeWNxRWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUFwRW1CWVlIT1VqNklQVXdBenhFUVdpU1A5UkRVSlpzejB6clRSMy9GQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEZGVFBCY2VHbW1ENFNaYUczd29wcGg3STlqMUI2RFBTSHpvNHZSUVFpND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlZjS1FKWGRHQWhLdW1EcytQSVpoRGNFYUdoSmpkQVBMOEJKSk9OMzg3TmFFc3h3MlhRaDdXbkNCdzhmQ0FMb3NYbHhnTnJCT1Q2SU54bjN6aTJQZEFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU4LCJhZHZTZWNyZXRLZXkiOiJvV0pNTDZ6NFp4elJJU3lZWHlyNzZyR0lYM0pXODdVTmhnczVVTlBHSk1VPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ3T1dlTU9QeFFTbVIzNldtWDZPaEZnIiwicGhvbmVJZCI6IjE4YTA5NDBmLWE3NjMtNDkwOC1iM2I5LTBjZWRiZTA1YTU2YSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJanRVQXJJcVFYQjYvRXFSeXdoMExoV3FEZzA9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmxHT2FHcERvSDVjeFp0VXgxdDkxQzFaL1h3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjNHM0pRMjlSIiwibWUiOnsiaWQiOiIyMzQ3MDE1NTA1ODI1OjVAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05YYnNzNEVFSUw2enJzR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkJpTXFvdkhOWWRCaHZrQnZJemxheXJDdWd6WVFYTWkyZ3lzek1VTEE1anc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjlXcXRLMmU4OC91U1R0ZWxlWnNuL3EzaXFrcGZhbE9CeG0vLzh3ck9XaXZJUUFlVDJGWFNvc29zSVd0QWY4NzBrMFlzNzNCaTZXSUVjS21jdlZ2cERnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJMWmRDM2NmR2xtUWdkM0xyYkJ2YTNoT3ZGdGRLTFpNUWl6TjVvRjZzMFJSeUZxTDBzZ0ZVZHMvNGw2MzZzVW1vVXhxOTFpcUpWeVltWTRHMXpmRm5BQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwMTU1MDU4MjU6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRWWpLcUx4eldIUVliNUFieU01V3Nxd3JvTTJFRnpJdG9Nck16RkN3T1k4In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1NjM4Mjg5fQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "!",
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
