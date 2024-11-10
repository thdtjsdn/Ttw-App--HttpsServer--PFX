
// config
SERVER.PATH_ROOT = '.web/';

ConfigServerHttps.ABSOLUTE_PATH_APPLICATION_WEB = '.web/';

//----------------------------------------------------------------------------------------------------;

SERVER.addRouter('/', function(req, res, owner){
	UtilHttpResponse.response_200_FileStream(req, res, ConfigServerHttps.ABSOLUTE_PATH_APPLICATION_WEB + 'index.html', 'html', owner);
});
