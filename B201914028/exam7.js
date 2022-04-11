var testInterval = setInterval(function(){
    console.log(new Date());
}, 1000 );
setTimeout(function(){
    clearTimeout(testInterval);
}, 6000 );