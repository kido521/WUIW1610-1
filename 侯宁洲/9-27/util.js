var util = {};
util.isType = function (data,type){
    return Object.prototype.toString.call(data) ==="[object "+type+"]";
}
util.isArray =  function (data){
    return util.isType(data,"Array");
}
util.isUndefined = function (data){
    return util.isType(data,"Undefined");
}
util.isNull = function (data){
    return util.isType(data,"Null");
}
util.isObject = function (data){
    return util.isType(data,"Object");
}
util.isNumber = function (data){
    return util.isType(data,"Number");
}