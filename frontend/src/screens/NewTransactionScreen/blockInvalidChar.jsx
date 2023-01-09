const blockInvalidChar = e => ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault();

export default blockInvalidChar;
