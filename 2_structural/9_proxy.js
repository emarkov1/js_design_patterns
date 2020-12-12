// proxy help to avoid non-nessesary server requests
function networkFetch(url) {
  return `${url} - response from server`;
}
const cache = new Set();
const proxied = new Proxy(networkFetch, {
  apply(target, thisArg, args) {
    const url = args[0];
    if (cache.has(url)) {
      return `${url} - resp from cache`;
    } else {
      cache.add(url);
      return Reflect.apply(target, thisArg, args);
    }
  },
});

console.log(proxied('audi'), proxied('mers'), proxied('audi'));
