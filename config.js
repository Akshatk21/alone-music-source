module.exports = {
  Admins: ["748083936151732245", "755392862513922078"], //Admins of the bot
  DefaultPrefix: process.env.Prefix || ";", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/23A7NPbWmD", //Support Server Link
  Token: "ODEwMDQ4OTY1MDgwNjQ1Njgy.YCd-4w.CWvGb-M3KO1-hSfahH7En4hU_V4", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "810048965080645682", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "17QeltgS5QyRC_z8F2zwOHIANwb7d7m5", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "AkshatOp", //A Secret like a password
  IconURL:
    "https://cdn.discordapp.com/icons/817705582437466132/e7c9de0bf70c91a3232a9b323cb5ff63.webp?size=1024", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  Permissions: 2205280576, //Bot Inviting Permissions
  Website: process.env.Website || "https://alone--music.glitch.me", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku

  //Lavalink - Already there is a serer to connect :)
  Lavalink: {
    id: "Main",
    host: "node3.rockbusterhostings.in.net",
    port: 65535,
    pass: "pass134",
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "e7a591972a75405f9acc4dcf62d9173d", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "71c37759b3ec4e52aea24421d159b32b", //Spotify Client Secret
  },
};
