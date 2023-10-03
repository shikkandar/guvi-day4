const stringArray = ["hello world", "javascript programming", "title caps example"];

const convertToTitleCase = (inputString) => {
  return inputString
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

const titleCaseArray = stringArray.map(convertToTitleCase);

console.log(titleCaseArray);
