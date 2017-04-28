			//实现去掉字符串右边的空格
			String.prototype.rtrim=function(){
				return this.replace(/\s+$/ig,"");//正则表达式
			}
			
			
			//实现去掉字符串左边的空格
			String.prototype.ltrim=function(){
				return this.replace(/^\s+/ig,"");//正则表达式
			}
			