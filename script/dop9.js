class RomNum {
	static fromRoman(roman) {
			const RomanNum = {
					'I': 1,
					'V': 5,
					'X': 10,
					'L': 50,
					'C': 100, 
				 'D': 500,
				 'M': 1000
			};
			let result = 0;
			for (let i = 0; i < roman.length; i++) {
					let CurrentNumber = RomanNum[roman[i]];
					let NextNumber = RomanNum[roman[i + 1]];
					
					if (NextNumber > CurrentNumber) result -= CurrentNumber
					else result += CurrentNumber
			}
			return result;
	}
	static toRoman(number) {
			if (number <= 0 || number > 3000) return 'Error'
			const RomanNum = [
					['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],    
					['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],     
					['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],     
					['', 'M', 'MM', 'MMM']                                            
			]
			let result = ''
			let divisor = 1000

			for(let i = 3; i >= 0 ; i--) {
					let digit = Math.floor(number / divisor);
					result += RomanNum[i][digit];
					number = number % divisor 
					divisor = divisor / 10;

			}

			return result;
	}
}

// из римских цифр в число
console.log(RomNum.fromRoman('MCMXC'));
console.log(RomNum.fromRoman('X'));      
console.log(RomNum.fromRoman('MMXXII')); 
console.log(RomNum.fromRoman('MMCM'));  

// из числа в римские цифры
console.log(RomNum.toRoman(1990));  
console.log(RomNum.toRoman(2501));  
console.log(RomNum.toRoman(1));     
console.log(RomNum.toRoman(100));   
