const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

 const prettyPrintCupcake = (cupcake) => {
  return `${cupcake.flavor} cupcakes cost ${priceFormatter.format(cupcake.price)} each`;
};

const simplePrintCupcake = (cupcake) => {
  return `${cupcake.flavor}: ${priceFormatter.format(cupcake.price)}`;
};
export default prettyPrintCupcake
export {simplePrintCupcake};
// export { prettyPrintCupcake, simplePrintCupcake};

// common js way (object required for more than one export)
// module.exports = {
//   prettyPrintCupcake: prettyPrintCupcake,
//   simplePrintCupcake: simplePrintCupcake,
// };