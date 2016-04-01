function rot13(str) { // LBH QVQ VG!
  var decoded = [];
  var array = str.split("");
  var index = 0;
  var letter = "";
  for(index = 0; index < array.length;index++)
  {
    letter = array[index];
    switch(letter)
    {
      case " ": break;  
      case "A": letter = "N"; break;
      case "B": letter = "O"; break;
      case "C": letter = "P"; break;
      case "D": letter = "Q"; break;
      case "E": letter = "R"; break;
      case "F": letter = "S"; break;
      case "G": letter = "T"; break;
      case "H": letter = "U"; break;
      case "I": letter = "V"; break;  
      case "J": letter = "W"; break;
      case "K": letter = "X"; break;
      case "L": letter = "Y"; break;
      case "M": letter = "Z"; break;
      case "N": letter = "A"; break;
      case "O": letter = "B"; break;
      case "P": letter = "C"; break;
      case "Q": letter = "D"; break;
      case "R": letter = "E"; break;
      case "S": letter = "F"; break;
      case "T": letter = "G"; break;  
      case "U": letter = "H"; break;
      case "V": letter = "I"; break;
      case "W": letter = "J"; break;
      case "X": letter = "K"; break;
      case "Y": letter = "L"; break;
      case "Z": letter = "M"; break;  
    }

    decoded.push(letter);

  }
  var decodedString = decoded.join("");
  return decodedString;
}