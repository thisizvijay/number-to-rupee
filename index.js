'use-strict';

function numberToRupee(number) {
    if (!typeof number === 'number') {
        throw new TypeError('Expected value to be a number');
    }
    var oneDigits = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    var twoDigits = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Ninteen"];
    var tenths = ["", "", "Twenty", "Thirty", "Fourty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninty"];
    var currencyInWords = '';
    number = number.toFixed(2);
    var wordArray = number.split('.');
    var wholeDigits = wordArray[0];
    var paise = wordArray[1];
    var wholeDigitsLength = wholeDigits.length;
    var index = 0;
    while (wholeDigitsLength != 0) {
        if (wholeDigitsLength >= 8) {
            var temp = wholeDigits / 10000000;
            temp = Math.round(temp);
            temp = temp + '';
            var tempLength = temp.length;
            if (tempLength > 1) {
                if (temp >= 10 && temp <= 19) {
                    currencyInWords += twoDigits[temp % 10] + ' crores ';
                } else {
                    currencyInWords += tenths[temp / 10] + ' ';
                    currencyInWords += oneDigits[temp % 10] + ' crores ';
                }
                wholeDigitsLength--;
            } else {
                currencyInWords += oneDigits[temp % 10] + ' crore ';
            }
            wholeDigitsLength--;
        } else if (wholeDigitsLength >= 6 && wholeDigitsLength <= 7) {
            var temp = wholeDigits / 100000;
            temp = Math.round(temp);
            temp = temp + '';
            var tempLength = temp.length;
            if (tempLength > 1) {
                if (temp >= 10 && temp <= 19) {
                    currencyInWords += twoDigits[temp % 10] + ' lakhs ';
                } else {
                    currencyInWords += tenths[temp / 10] + ' ';
                    currencyInWords += oneDigits[temp % 10] + ' lakhs ';
                }
                wholeDigitsLength--;
            } else {
                currencyInWords += oneDigits[temp % 10] + ' lakh ';
            }
            wholeDigitsLength--;
        } else if (wholeDigitsLength >= 4 && wholeDigitsLength <= 5) {
            var temp = wholeDigits / 1000;
            temp = Math.round(temp);
            temp = temp + '';
            var tempLength = temp.length;
            if (tempLength > 1) {
                if (temp >= 10 && temp <= 19) {
                    currencyInWords += twoDigits[temp % 10] + ' thousands ';
                } else {
                    currencyInWords += tenths[temp / 10] + ' ';
                    currencyInWords += oneDigits[temp % 10] + ' thousands ';
                }
                wholeDigitsLength--;
            } else {
                currencyInWords += oneDigits[temp % 10] + ' thousand ';
            }
            wholeDigitsLength--;
        } else if (wholeDigitsLength == 3) {
            wholeDigits = parseInt(wholeDigits);
            var temp = wholeDigits / 100;
            temp = temp+'';
            if(temp.indexOf('.') !== false){
                tempArray = temp.split('.');
                temp = tempArray[0];
            }
            if (temp > 1) {
                currencyInWords += oneDigits[temp % 10] + ' hundreds ';
            } else {
                currencyInWords += oneDigits[temp % 10] + ' hundred ';
            }
            wholeDigitsLength--;
        } else if (wholeDigitsLength <= 2) {
            var temp = wholeDigits % 100;
            debugger;
            console.log(temp);
            temp = temp+'';
            if(temp.indexOf('.') !== false){
                tempArray = temp.split('.');
                temp = tempArray[0];
            }
            var tempLength = temp.length;
            if (tempLength > 1) {
                 temp = parseInt(temp);
                if (temp >= 10 && temp <= 19) {
                  var tempHelper = wholeDigits % 10;
                  console.log(tempHelper);
                  tempHelper=intHelper(tempHelper);

                    currencyInWords += twoDigits[tempHelper] + ' rupees ';
                } else {
                  var tempHelper = wholeDigits /10;
                  console.log(tempHelper);
                  tempHelper=intHelper(tempHelper);
                    currencyInWords += tenths[tempHelper] + ' ';
                    var tempHelper = wholeDigits %  10;
                    console.log(tempHelper);
                    tempHelper=intHelper(tempHelper);
                    currencyInWords += oneDigits[tempHelper] + ' rupees ';
                }
                wholeDigitsLength--;
            } else {
                currencyInWords += oneDigits[temp % 10] + ' rupees';
            }
            wholeDigitsLength--;
        }
    }
    return currencyInWords;
    if (paise != 0) {}
}
function intHelper(temp )
{
  temp = temp+'';
  if(temp.indexOf('.') !== false){
      tempArray = temp.split('.');
      temp = tempArray[0];
  }
  return temp;
}
