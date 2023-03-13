const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = "1092295026035-v6bvpvtnjm2lja70kmp5vp0tocf29umm.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "962b55869c062d8e7a1c";
const GITHUB_CLIENT_SECRET = "fd30e91c137cde3b96a2cbca1d9c6c195207b15d";

const FACEBOOK_APP_ID = "3133884073514905";
const FACEBOOK_APP_SECRET = "7d5a71e0ebe51b15555ec432e6ee42fc";

passport.use(
     new GoogleStrategy(
       {
         clientID: GOOGLE_CLIENT_ID,
         clientSecret: GOOGLE_CLIENT_SECRET,
         callbackURL: "/auth/google/callback",
       },
       function (accessToken, refreshToken, profile, done) {
         done(null, profile); //si on utilse les base de données c'est ici il faut assigner les valeurs aux champs 
       }
     )
   );

   passport.use(
    new GithubStrategy(
      {
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: "/auth/github/callback",
      },
      function (accessToken, refreshToken, profile, done) {
        done(null, profile);
      }
    )
  );

  passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);
   passport.serializeUser((user, done) => {
     done(null, user);
   });

   passport.deserializeUser((user, done) => {
     done(null, user);
   });