function ajax({type,url,data,dataType}){
	return new Promise(open=>{
		if(window.XMLHttpRequest){
			var xhr=new XMLHttpRequest;
		}else{
			var xhr=new ActiveXObject("Miscrosoft.XMLHttp")
		}
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
				var result=xhr.responseText;
				if(dataType!==undefined&&dataType.toUpperCase()=="JSON"){
					result=JSON.parse(result);
				}
				open(result);
			}
		}
		if(typeof data=="object"){
			var arr=[];
			for(var key in data){
				arr.push(key+"="+data[key]);
			}
			data=arr.join("&");
		}
		if(type=="get"&&data!=undefined){
			url+="?"+data;
		}
		xhr.open(type,url,true);
		if(type=="post"&&data!=undefined){
			xhr.send(data);
		}else{
			xhr.send(null)
		}
	})
}