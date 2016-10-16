function getData(url,timeout,callback){
			var request = new XMLHttpRequest();
			var flag = false;
			var timer = setTimeout(function(){
				flag = true;
				request.abort();//中止请求
			},timeout);
			request.open("POST",url+"?"+encodeFormData(obj));
			request.onreadystatechange = function(){
				if(request.readyState !== 4 ){
					return;
				}
				if(timeout){
					return;	//如果超时返回
				}else{
					clearTimeout(timmer); 
				}
				if(request.status === 200){
					callback(request);
				}
			};
			request.send(null);
		}