function a(cb) { setTimeout(function() { console.log('111'); if(cb) cb(); }, 1000); }
function b(cb) { setTimeout(function() { console.log('222'); if(cb) cb(); }, 500); }
function c(cb) { setTimeout(function() { console.log('333'); if(cb) cb(); }, 1500); }
function d(cb) { setTimeout(function() { console.log('444'); if(cb) cb(); }, 1000); }

/* Async */
function not_good() {
    // not working
    array = [a, b, c, d];
    for (var i = 0; i < array.length; i++) {
        console.log(i);
        array[i]();
    }
}
// not_good()


/* Quiz: Sync */
function series(funcarr, i) {
    if(i < funcarr.length){
        funcarr[i](function () {
            series(funcarr, i + 1);
        });
    }
}
series([a, b, c, d], 0);

