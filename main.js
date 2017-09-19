;(function(){
	'use strict';
	let phones= new Array();
	class Phone{
		constructor(nbrand, nmemory,ncolor,nprice){
			this.brand=nbrand;
			this.memory=nmemory;
			this.color=ncolor;
			this.price=nprice;
			phones.push(this);
		}
		set Brand(a){
			this.brand=a;
			return this.brand;
		}
		get Brand(){
			return this.brand;
		}

		set Memory(val){
			this.memory=val;
			return this.memory;
		}
		get Memory(){
			return this.memory;
		}

		set Color(val){
			this.color=val;
			return this.color;
		}
		get Color()
		{return this.color;
		}

		set Price(val){
			this.price=val;
			return this.price;
		}
		get Price(){
			return this.price;
		}

		Print(){
			document.write(`
				<img src ="img/phone.png">
				<h1>`+toString(this)+'$'+`</h1>
			`);
		}
	}
	
	function generatePhones(){
		let memory=["32","64","128","256"];
		let color=["Black","Silver","Gold","Rose Gold"];
		let phone=new Array();
		for(let i=0;i<memory.length;i++){
			phone[i]=new Array();
			for(let j=0;j<color.length;j++){
				let price=600;
				switch(i) {
					case 1:
						price+=100;
						break;
					case 2:
						price+=200;		
						break;
					case 3: 
						price+=300;
						break;
				}
				price+=Math.floor(Math.random() * 100);
				phone[i][j]=new Phone("Iphone",memory[i],color[j],price);
			}
		}
	}

	function priceSort(phones){
		for (let i = 0; i < phones.length-1; i++){
	        let index = i;
	        for (let j = i+1; j < phones.length; j++)
	            if (phones[j].Price > phones[index].Price) //Finds biggest number
	                index = j;  

	        let smallerNumber = phones[index];  //Swap
	        phones[index] = phones[i];
	        phones[i] = smallerNumber;

	    }
	    return phones;
	}

	function toString(obj){
		let temp='';
		for ( let prop in obj) 
		{
			if (obj.hasOwnProperty(prop)) 
			{
				temp+=' '+obj[prop];
			}
		}
		return temp;
	}
	generatePhones();
	console.log(phones);

	let flag;
	do{
		let money =prompt("Введите сумму","");
		let selection=new Array();
		if(money!=null)
		{
			for (let i=0; i < phones.length; i++) 
			{
				if(Math.abs(money-phones[i].Price)<=50)
				{
					selection.push(phones[i]);
				}
			}
		}

		if(selection!=null)
		{
			selection =priceSort(selection);
			console.log(selection);
			for(let i=0;i<selection.length;i++)
			{	
				if(i==selection.length-1){
					let temp=confirm(toString("Это последнее предложение "+toString(selection[i])));
					if(temp===true)
					{
						selection[i].Print();
						flag=false;
						break;
					}else{
						if(!confirm("Выйти")){
							flag=true;
						}
					}
				}else{
					let temp=confirm(toString(selection[i]));
					if(temp===true)
					{
						selection[i].Print();
						flag=false;
						break;
					}
				}
			}
		}
	}while(flag);
})();
