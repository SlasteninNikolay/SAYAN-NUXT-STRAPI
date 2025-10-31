module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
    {
        name: 'strapi::cors',
        config: {
            origin: ["https://slavyanka-sayanogorsk.ru", "https://slavyanka-sayanogorsk.ru"],
            methods: ['GET', 'POST', 'OPTIONS'],
            headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
            keepHeaderOnError: true,
        },
    },
];
