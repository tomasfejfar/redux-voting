export function d(...args) {
    args.forEach(function (item) {
        console.log('--------');
        console.log(item);
    });
    console.log('--------');
}

export function dr(msg) {
    return console.log(msg.debug());
}
