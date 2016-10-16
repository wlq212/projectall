function encodeFormData(data){
	if(!data){
		return "";
	}
	var pairs = [];	//键值对
	for(var gg in data){
		if(!data.hasOwnProperty(gg)){
			continue;
		}
		if(typeof data[gg] == "function"){
			continue;
		}
		var value = data[gg];
		name = encodeURIComponent(gg).replace("%20","+");//编码名字
		value = encodeURIComponent(value).replace("%20","+");//编码值
		pairs.push(name+"="+value);
	}
	return pairs.join('&');
}
	