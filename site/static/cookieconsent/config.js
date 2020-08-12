// By default, Klaro will load the config from  a global "klaroConfig" variable.
// You can change this by specifying the "data-config" attribute on your
// script take, e.g. like this:
// <script src="klaro.js" data-config="myConfigVariableName" />
// You can also disable auto-loading of the consent notice by adding
// data-no-auto-load=true to the script tag.
var klaroConfig = {
  // You can customize the ID of the DIV element that Klaro will create
  // when starting up. If undefined, Klaro will use 'klaro'.
  elementID: "klaro",

  // How Klaro should store the user's preferences. It can be either 'cookie'
  // (the default) or 'localStorage'.
  storageMethod: "cookie",

  // You can customize the name of the cookie that Klaro uses for storing
  // user consent decisions. If undefined, Klaro will use 'klaro'.
  cookieName: "klaro",

  // You can also set a custom expiration time for the Klaro cookie.
  // By default, it will expire after 120 days.
  cookieExpiresAfterDays: 365,

  // You can change to cookie domain for the consent manager itself.
  // Use this if you want to get consent once for multiple matching domains.
  // If undefined, Klaro will use the current domain.
  cookieDomain: '.skribble.com',

  // Put a link to your privacy policy here (relative or absolute).
  privacyPolicy: {
    default: "/privacy",
    fr: "fr/politique-de-confidentialite/",
    de: "de/datenschutz",
  },

  // Defines the default state for applications (true=enabled by default).
  default: false,

  // If "mustConsent" is set to true, Klaro will directly display the consent
  // manager modal and not allow the user to close it before having actively
  // consented or declines the use of third-party apps.
  mustConsent: false,

  // Show "accept all" to accept all apps instead of "ok" that only accepts
  // required and "default: true" apps
  acceptAll: true,

  // replace "decline" with cookie manager modal
  hideDeclineAll: true,

  // You can define the UI language directly here. If undefined, Klaro will
  // use the value given in the global "lang" variable. If that does
  // not exist, it will use the value given in the "lang" attribute of your
  // HTML tag. If that also doesn't exist, it will use 'en'.
  // lang: "en",

  // You can overwrite existing translations and add translations for your
  // app descriptions and purposes. See `src/translations/` for a full
  // list of translations that can be overwritten:
  // https://github.com/KIProtect/klaro/tree/master/src/translations

  // Example config that shows how to overwrite translations:
  // https://github.com/KIProtect/klaro/blob/master/src/configs/i18n.js
  translations: {
    en: {
      consentModal: {
        title: "Information that we collect",
        description:
          "Here you can see and customize the information that we collect.\n",
        privacyPolicy: {
          name: "privacy policy",
          text: "To learn more, please read our {privacyPolicy}.\n",
        },
      },
      consentNotice: {
        changeDescription:
          "There were changes since your last visit, please update your consent.",
        description:
          "We collect and process your personal information for the following purposes: {purposes}.\n",
        learnMore: "Customise",
        privacyPolicy: {
          name: "privacy policy",
        },
        imprint: {
          name: "Imprint",
        },
      },
      ok: "Accept",
      save: "Save",
      decline: "Decline",
      close: "Close",
      acceptAll: "Accept all",
      acceptSelected: "Accept selected",
      app: {
        disableAll: {
          title: "Toggle all apps",
          description: "Use this switch to enable/disable all apps.",
        },
        optOut: {
          title: "(opt-out)",
          description: "This app is loaded by default (but you can opt out)",
        },
        required: {
          title: "(always required)",
          description: "This application is always required",
        },
        purposes: "Purposes",
        purpose: "Purpose",
      },
      poweredBy: "",
      matomo: {
        description: "Collects visitor statistics",
      },
      hubspot: {
        description:
          "Chat widget, collecting of visitor statistics and protection against DDoS attacks",
      },
      klaro: {
        description: "Saves cookie preferences",
      },
      purposes: {
        security: "Security",
        analytics: "Analytics",
        livechat: "Live Chat",
        advertising: "Advertising",
        preferences: "Preferences",
      },
    },
    // The content keys which are commented out have not been translated by Skribble's content team. In those cases we use the klaro.js defaults.
    fr: {
      consentModal: {
        title: "Les informations que nous collectons",
        description:
          "Ici, vous pouvez voir et personnaliser les informations que nous collectons.\n",
        privacyPolicy: {
          name: "politique de confidentialité",
          text: "Pour en savoir plus, merci de lire notre {privacyPolicy}.\n",
        },
      },
      consentNotice: {
        // changeDescription:
        //   "There were changes since your last visit, please update your consent.",
        description:
          "Nous collectons et traitons vos informations dans le but suivant : {purposes}.\n",
        learnMore: "En savoir plus",
        privacyPolicy: {
          name: "politique de confidentialité",
        },
        // imprint: {
        //   name: "Imprint",
        // },
      },
      ok: "OK",
      //   save: "Save",
      decline: "Refuser",
      //   close: "Close",
      acceptAll: "Accepter tous",
      acceptSelected: "Accepter la sélection",
      //   app: {
      //     disableAll: {
      //       title: "Toggle all apps",
      //       description: "Use this switch to enable/disable all apps.",
      //     },
      //     optOut: {
      //       title: "(opt-out)",
      //       description: "This app is loaded by default (but you can opt out)",
      //     },
      //     required: {
      //       title: "(always required)",
      //       description: "This application is always required",
      //     },
      //     purposes: "Purposes",
      //     purpose: "Purpose",
      //   },
      poweredBy: "",
      matomo: {
        description: "Collecte de statistiques sur les visiteurs",
      },
      hubspot: {
        description:
          "Chat bot, statistiques sur les visiteurs et protection contre une attaque par déni de service",
      },
      klaro: {
        description: "Sauvegarde de paramètres de cookies",
      },
      purposes: {
        security: "Sécurité",
        analytics: "Analytique",
        livechat: "Chat en direct",
        advertising: "Publicité",
        preferences: "Préférences",
      },
    },
    de: {
      consentModal: {
        title: "Informationen, die wir speichern",
        description:
          "Hier können Sie einsehen und anpassen, welche Information wir speichern.\n",
        privacyPolicy: {
          name: "Datenschutzerklärung",
          text: "Weitere Details finden Sie in unserer {privacyPolicy}.\n",
        },
      },
      consentNotice: {
        // changeDescription:
        //   "There were changes since your last visit, please update your consent.",
        description:
          "Wir speichern und verarbeiten Ihre Informationen für folgende Zwecke: {purposes}.\n",
        learnMore: "Mehr erfahren",
        privacyPolicy: {
          name: "Datenschutzerklärung",
        },
        // imprint: {
        //   name: "Imprint",
        // },
      },
      ok: "OK",
      //   save: "Save",
      decline: "Ablehnen",
      //   close: "Close",
      acceptAll: "Allen akzeptieren",
      acceptSelected: "Auswahl akzeptieren",
      //   app: {
      //     disableAll: {
      //       title: "Toggle all apps",
      //       description: "Use this switch to enable/disable all apps.",
      //     },
      //     optOut: {
      //       title: "(opt-out)",
      //       description: "This app is loaded by default (but you can opt out)",
      //     },
      //     required: {
      //       title: "(always required)",
      //       description: "This application is always required",
      //     },
      //     purposes: "Purposes",
      //     purpose: "Purpose",
      //   },
      poweredBy: "",
      matomo: {
        description: "Sammeln von Besucherstatistiken",
      },
      hubspot: {
        description:
          "Chat-Bot, Besucher-Statistiken und Schutz gegen einen DDoS-Angriff",
      },
      klaro: {
        description: "Speichern von Cookie-Einstellungen",
      },
      purposes: {
        security: "Sicherheit",
        analytics: "Besucher-Statistiken",
        livechat: "Livechat",
        advertising: "Werbung",
        preferences: "Einstellungen",
      },
    },
  },

  // This is a list of third-party apps that Klaro will manage for you.
  apps: [
    // The apps will appear in the modal in the same order as defined here.
    {
      // Each app should have a unique (and short) name.
      name: "hubspot",
      // The title of you app as listed in the consent modal.
      title: "Hubspot, Google Tag Manager, Facebook, Bing, Cloudflare",
      // The purpose(s) of this app. Will be listed on the consent notice.
      // Do not forget to add translations for all purposes you list here.
      purposes: ["advertising", "analytics", "livechat", "security"],
    },
    {
      name: "matomo",
      title: "Matomo",
      purposes: ["analytics"],
    },
    {	
      name: "klaro",	
      title: "Klaro",	
      purposes: ["preferences"],	
      // If "required" is set to true, Klaro will not allow this app to	
      // be disabled by the user.	
      default: true,
      required: true,	
    },
  ],
};
