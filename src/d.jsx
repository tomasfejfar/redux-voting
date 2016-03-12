const d = function d(...args) {
  args.forEach((item) => {
    console.log('--------');
    console.log(item);
  });
  console.log('--------');
};

const dr = function dr(msg) {
  return console.log(msg.debug());
};

export {
  d,
  dr,
};
