function generatePassword() {
  var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;':\"<>,.?/~`";
  var password = "";
  for (var i = 0; i < 20; i++) {
    var randomNumber = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomNumber);
  }
  SpreadsheetApp.getActiveSheet().getRange("C4").setValue(password); 'C4 - cells where the created password will be added
}
