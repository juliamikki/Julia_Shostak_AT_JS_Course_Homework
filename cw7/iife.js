(function () {
    console.log('IIFE');
    function add(x, y) {
        return x + y;
    }
    console.log(add(20, 30))
    console.log(add(5, 10))
    console.log(add.call(null, 20, 30))
    console.log(add.apply(null, [20, 30]))
    const bindAdd = add.bind(null, 20, 30)
    console.log(bindAdd())
})();

(function() {
    console.log('IIFE with arrow function');
})()