const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;
const SchemaTypes = Schema.Types;

const userSchema = new Schema({
  email: {
    type: "string"
  },
  newEmail: {
    type: "string"
  },
  emailVerifyTTL: {
    type: "date"
  },
  emailVerified: {
    type: "boolean",
    default: false
  },
  emailAuthLinkTTL: {
    type: "date"
  },
  password: {
    type: "string"
  },
  progressTimestamps: {
    type: "array",
    default: []
  },
  isBanned: {
    type: "boolean",
    description: "User is banned from posting to camper news",
    default: false
  },
  isCheater: {
    type: "boolean",
    description:
      "Users who are confirmed to have broken academic honesty policy are marked as cheaters",
    default: false
  },
  isGithubCool: {
    type: "boolean",
    default: false
  },
  githubId: {
    type: "string"
  },
  githubURL: {
    type: "string"
  },
  githubEmail: {
    type: "string"
  },
  joinedGithubOn: {
    type: "date"
  },
  website: {
    type: "string"
  },
  githubProfile: {
    type: "string"
  },
  _csrf: {
    type: "string"
  },
  isMigrationGrandfathered: {
    type: "boolean",
    default: false
  },
  username: {
    type: "string"
  },
  bio: {
    type: "string",
    default: ""
  },
  about: {
    type: "string",
    default: ""
  },
  name: {
    type: "string",
    default: ""
  },
  gender: {
    type: "string",
    default: ""
  },
  location: {
    type: "string",
    default: ""
  },
  picture: {
    type: "string",
    default: ""
  },
  linkedin: {
    type: "string"
  },
  codepen: {
    type: "string"
  },
  twitter: {
    type: "string"
  },
  currentStreak: {
    type: "number",
    default: 0
  },
  longestStreak: {
    type: "number",
    default: 0
  },
  sendMonthlyEmail: {
    type: "boolean",
    default: true
  },
  sendNotificationEmail: {
    type: "boolean",
    default: true
  },
  sendQuincyEmail: {
    type: "boolean",
    default: true
  },
  isLocked: {
    type: "boolean",
    description:
      "Campers profile does not show challenges/certificates to the public",
    default: false
  },
  currentChallengeId: {
    type: "string",
    description: "The challenge last visited by the user",
    default: ""
  },
  currentChallenge: {
    type: {},
    description: "deprecated"
  },
  isUniqMigrated: {
    type: "boolean",
    description: "Campers completedChallenges array is free of duplicates",
    default: false
  },
  isHonest: {
    type: "boolean",
    description: "Camper has signed academic honesty policy",
    default: false
  },
  isFrontEndCert: {
    type: "boolean",
    description: "Camper is front end certified",
    default: false
  },
  isDataVisCert: {
    type: "boolean",
    description: "Camper is data visualization certified",
    default: false
  },
  isBackEndCert: {
    type: "boolean",
    description: "Campers is back end certified",
    default: false
  },
  isFullStackCert: {
    type: "boolean",
    description: "Campers is full stack certified",
    default: false
  },
  isRespWebDesignCert: {
    type: "boolean",
    description: "Camper is responsive web design certified",
    default: false
  },
  is2018DataVisCert: {
    type: "boolean",
    description: "Camper is data visualization certified (2018)",
    default: false
  },
  isFrontEndLibsCert: {
    type: "boolean",
    description: "Camper is front end libraries certified",
    default: false
  },
  isJsAlgoDataStructCert: {
    type: "boolean",
    description:
      "Camper is javascript algorithms and data structures certified",
    default: false
  },
  isApisMicroservicesCert: {
    type: "boolean",
    description: "Camper is apis and microservices certified",
    default: false
  },
  isInfosecQaCert: {
    type: "boolean",
    description:
      "Camper is information security and quality assurance certified",
    default: false
  },
  isChallengeMapMigrated: {
    type: "boolean",
    description: "Migrate completedChallenges array to challenge map",
    default: false
  },
  challengeMap: {
    type: "object",
    description: "A map by ID of all the user completed challenges",
    default: {}
  },
  completedChallenges: {
    type: [
      {
        completedDate: "number",
        lastUpdated: "number",
        numOfAttempts: "number",
        id: "string",
        name: "string",
        completedWith: "string",
        solution: "string",
        githubLink: "string",
        verified: "boolean",
        challengeType: {
          type: "number",
          default: 0
        }
      }
    ],
    default: []
  },
  portfolio: {
    type: "array",
    default: []
  },
  rand: {
    type: "number",
    index: true
  },
  tshirtVote: {
    type: "number"
  },
  timezone: {
    type: "string"
  },
  theme: {
    type: "string",
    default: "default"
  },
  languageTag: {
    type: "string",
    description: "An IETF language tag",
    default: "en"
  },
  badges: {
    type: {
      coreTeam: {
        type: "array",
        default: []
      }
    },
    default: {}
  }
});

module.exports = mongoose.model("User", userSchema, "user");
