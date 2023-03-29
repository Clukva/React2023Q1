export default function validateTextInput(inputValue: string) {
  const lettersRegex = /^[A-ZА-Я][a-zа-я]*$/;
  const isValid = lettersRegex.test(inputValue);
  return isValid;
}
