export const formatCardNumber = (input: string) => {
    // Remove non-numeric characters from the input
    const cardNumber = input.replace(/\D/g, "");
  
    // Split the card number into groups of fours
    const formattedCardNumber = cardNumber.match(/.{1,4}/g)?.join(" ") || "";
  
    return formattedCardNumber;
  };

export  const formatExpiryDate = (input: string) => {
    // Remove non-numeric characters from the input
   // Remove non-numeric characters from the input
   const expiryDate = input.replace(/\D/g, '');

   // Add a "/" between the month and year if there are more than 2 characters
   if (expiryDate.length > 2) {
     return `${expiryDate.slice(0, 2)}/${expiryDate.slice(2)}`;
   }
  
    return expiryDate;
  };

export   function generateRandomCode() {
    const min = Math.pow(10, 12); // Minimum 13-digit number
    const max = Math.pow(10, 13) - 1; // Maximum 13-digit number
  
    const randomCode = Math.floor(Math.random() * (max - min + 1)) + min;
  
    return randomCode.toString(); // Convert to string to ensure leading zeros are preserved
  }