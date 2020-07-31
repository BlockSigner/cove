// By default, Klaro will load the config from  a global "klaroConfig" variable.
// You can change this by specifying the "data-config" attribute on your
// script take, e.g. like this:
// <script src="klaro.js" data-config="myConfigVariableName" />
// You can also disable auto-loading of the consent notice by adding
// data-no-auto-load=true to the script tag.
var klaroConfig = {
    // You can customize the ID of the DIV element that Klaro will create
    // when starting up. If undefined, Klaro will use 'klaro'.
    elementID: 'klaro',

    // How Klaro should store the user's preferences. It can be either 'cookie'
    // (the default) or 'localStorage'.
    storageMethod: 'cookie',

    // You can customize the name of the cookie that Klaro uses for storing
    // user consent decisions. If undefined, Klaro will use 'klaro'.
    cookieName: 'klaro',

    // You can also set a custom expiration time for the Klaro cookie.
    // By default, it will expire after 120 days.
    cookieExpiresAfterDays: 365,

    // You can change to cookie domain for the consent manager itself.
    // Use this if you want to get consent once for multiple matching domains.
    // If undefined, Klaro will use the current domain.
    //cookieDomain: '.github.com',

    // Put a link to your privacy policy here (relative or absolute).
    privacyPolicy: '/privacy',

    // Defines the default state for applications (true=enabled by default).
    default: false,

    // If "mustConsent" is set to true, Klaro will directly display the consent
    // manager modal and not allow the user to close it before having actively
    // consented or declines the use of third-party apps.
    mustConsent: false,

    // Show "accept all" to accept all apps instead of "ok" that only accepts
    // required and "default: true" apps
    acceptAll: false,

    // replace "decline" with cookie manager modal
    hideDeclineAll: false,

    // You can define the UI language directly here. If undefined, Klaro will
    // use the value given in the global "lang" variable. If that does
    // not exist, it will use the value given in the "lang" attribute of your
    // HTML tag. If that also doesn't exist, it will use 'en'.
    lang: 'en',

    // You can overwrite existing translations and add translations for your
    // app descriptions and purposes. See `src/translations/` for a full
    // list of translations that can be overwritten:
    // https://github.com/KIProtect/klaro/tree/master/src/translations

    // Example config that shows how to overwrite translations:
    // https://github.com/KIProtect/klaro/blob/master/src/configs/i18n.js
    translations: {
        en: {
            matomo: {
                description: 'Collecting of visitor statistics',
            },
            hubspot: {
                description: 'Chat widget, collecting of visitor statistics & protection against DDoS attacks',
            },
            klaro: {
                description: 'Saves your cookie preferences'
            },
            purposes: {
                security: 'Security',
                analytics: 'Analytics',
                livechat: 'Live Chat',
                advertising: 'Advertising',
                preferences: 'Preferences'
            },
        },
    },

    // This is a list of third-party apps that Klaro will manage for you.
    apps: [
        // The apps will appear in the modal in the same order as defined here.
        {
            // Each app should have a unique (and short) name.
            name: 'hubspot',
            // The title of you app as listed in the consent modal.
            title: 'Hubspot, Facebook, Bing, Cloudflare',
            // The purpose(s) of this app. Will be listed on the consent notice.
            // Do not forget to add translations for all purposes you list here.
            purposes: ['advertising', 'analytics', 'livechat', 'security'],
            // If "default" is set to true, the app will be enabled by default
            // Overwrites global "default" setting.
            // We recommend leaving this to "false" for apps that collect
            // personal information.
            default: true,
        },
        {
            name: 'matomo',
            title: 'Matomo',
            purposes: ['analytics'],
            default: true,
        },
        {
            name: 'klaro',
            title: 'Klaro',
            purposes: ['preferences'],
            // If "required" is set to true, Klaro will not allow this app to
            // be disabled by the user.
            required: true
        },
    ],
};
