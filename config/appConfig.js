const appConfig = {};
appConfig.port = 3000;
appConfig.allowedCorsOrigin = '*';
appConfig.environment = 'div';
appConfig.db = {}
appConfig.apiVersion = '/api/v1';

module.exports = {
    port: appConfig.port,
    allowedCorsOrigin: appConfig.allowedCorsOrigin,
    environment:appConfig.environment,
    db: appConfig.db,
    apiVersion:appConfig.apiVersion
}//end module exports