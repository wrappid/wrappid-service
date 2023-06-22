const LoginLogs = require("./models/LoginLogs.model");
const PersonContacts = require("./models/PersonContacts.model");
const Persons = require("./models/Persons.model");
const Roles = require("./models/Roles.model");
const SessionManager = require("./models/SessionManager.model");
const Users = require("./models/Users.model");
const CommunicationTemplates = require("./models/CommunicationTemplates.model");
const MailComms = require("./models/MailComms.model")
const SmsComms = require("./models/SmsComms.model")
const WhatsAppComms = require("./models/WhatsAppComms.model")

const modelsRegistry = {
    "LoginLogs": {
        database: "application",
        model   : LoginLogs
    },
    "PersonContacts": {
        database: "application",
        model   : PersonContacts
    },
    "Persons": {
        database: "application",
        model   : Persons
    },
    "Roles": {
        database: "application",
        model   : Roles
    },
    "SessionManager": {
        database: "application",
        model   : SessionManager
    },
    "Users": {
        database: "application",
        model   : Users
    },
    "CommunicationTemplates": {
        database: "application",
        model   : CommunicationTemplates
    },
    "MailComms": {
        database: "application",
        model   : MailComms
    },
    "SmsComms": {
        database: "application",
        model   : SmsComms
    },
    "WhatsAppComms": {
        database: "application",
        model   : WhatsAppComms
    }
};

exports.modelsRegistry = modelsRegistry;