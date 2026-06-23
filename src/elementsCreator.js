function elementsCreate(element, amount) {
  const elementsArray = [];
  for (let i = 0; i < amount; i++) {
    elementsArray[i] = document.createElement(element);
  }
  return elementsArray;
}

export default elementsCreate;
