module.exports = {
  siteUrl: 'https://geotekcollege.ru',
  generateRobotsTxt: true,
  exclude: [], // Исключите страницы, которые не нужно индексировать
  additionalPaths: async (config) => [
    await config.transform(config, '/'),
    await config.transform(config, '/about'),
    await config.transform(config, '/docs'),
    await config.transform(config, '/contacts'),
    await config.transform(config, '/geotek/prog1'),
    await config.transform(config, '/geotek/prog2'),
    await config.transform(config, '/international'),
    await config.transform(config, '/courses'),
  ],
};
