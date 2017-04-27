// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  var cardSinglePrefix = cardNumber.slice(0, 1);
  var cardPrefix = cardNumber.slice(0, 2);
  var cardFourDigitPrefix = cardNumber.slice(0, 4);
  var cardThreeDigitPrefix = cardNumber.slice(0, 3);
  var cardSixDigitPrefix = cardNumber.slice(0, 6);
  var cardLength = cardNumber.length;
  var dinersClub = 'Diner\'s Club';
  var americanExpress = 'American Express';
  var visa = 'Visa';
  var masterCard = 'MasterCard';
  var discoverCard = 'Discover';
  var maestro = 'Maestro';
  var chinaUnionPay = 'China UnionPay';
  var switchCard = 'Switch';

  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  if (((cardPrefix === '38') || (cardPrefix === '39')) &&
    (cardLength === 14)){
    return dinersClub;
  }

  // The American Express network always starts with a 34 or 37 and is 15 digits long
  if (((cardPrefix === '34') || (cardPrefix === '37')) &&
    (cardLength === 15)) {
    return americanExpress;
  }

  //Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  if (((cardFourDigitPrefix === '4903') || (cardFourDigitPrefix === '4905') ||
    (cardFourDigitPrefix === '4911') || (cardFourDigitPrefix === '4936') ||
    (cardSixDigitPrefix === '564182') || (cardSixDigitPrefix === '633110') ||
    (cardFourDigitPrefix === '6333') || (cardFourDigitPrefix === '6759')) &&
    ((cardLength === 16) || (cardLength === 18) || (cardLength === 19))) {
    return switchCard;
  }

  //Visa always has a prefix of 4 and a length of 13, 16, or 19.
  if ((cardSinglePrefix === '4') && ((cardLength === 13) ||
    (cardLength === 16) || (cardLength === 19))) {
    return visa;
  }

  //MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  if (((cardPrefix === '51') || (cardPrefix === '52') || (cardPrefix === '53') ||
    (cardPrefix === '54') || (cardPrefix === '55')) && (cardLength === 16)) {
    return masterCard;
  }

  //Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  if (((cardFourDigitPrefix === '6011') ||
    (cardThreeDigitPrefix === '644') ||
    (cardThreeDigitPrefix === '645') ||
    (cardThreeDigitPrefix === '646') ||
    (cardThreeDigitPrefix === '647') ||
    (cardThreeDigitPrefix === '648') ||
    (cardThreeDigitPrefix === '649') ||
    (cardPrefix === '65')) &&
    ((cardLength === 16) || (cardLength === 19))) {
    return discoverCard;
  }

  //Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12 to 19.
  if (((cardFourDigitPrefix === '5018') || (cardFourDigitPrefix === '5020') ||
    (cardFourDigitPrefix === '5038') || (cardFourDigitPrefix === '6304')) &&
    (cardLength >= 12) && (cardLength <= 19)) {
    return maestro;
  }

  var parsedSixDigit = parseInt(cardSixDigitPrefix, 10);
  var parsedThreeDigit  = parseInt(cardThreeDigitPrefix, 10);
  var parsedFourDigit = parseInt(cardFourDigitPrefix, 10);

  //China UnionPay always has a prefix of 622126 to 622925, 624 to 626, or 6282 to 6288 and a length of 16 to 19.
  if ((((parsedSixDigit >= 622126) && (parsedSixDigit <= 622925)) || ((parsedThreeDigit >= 624) && (parsedThreeDigit <= 626)) ||
    ((parsedFourDigit >= 6282) && (parsedFourDigit <= 6288))) && (cardLength >= 16) && (cardLength <= 19)) {
    return chinaUnionPay;
  }
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


