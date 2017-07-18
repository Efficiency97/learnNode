function getUrlConf() {
    var routerMsg={};
    try{
        var str=fs.readFileSync(CONF+'mmie_type.json','utf8');
        routerMsg=JSON.parse(str);
    }catch(e){
        sys.debug('JSON parse fails')
    }
}