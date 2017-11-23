module.exports = function( object, ...toassign ){
    if( typeof object === 'object' ){
        toassign.forEach( data => {
            if( isPlainObject(data) ){
                mergeInObject( object, data );
            }
        });
    }
    return object;
}

function assign( ref, key, value ){
    if( isPlainObject(value) ){
        if( !isPlainObject(ref[key]) ){
            ref[key] = {};
        }
        mergeInObject( ref[key], value );
    }else{
        ref[key] = value;
    }
}

function mergeInObject( dest, data ){
    Object.keys( data ).forEach( key => {
        assign( dest, key, data[key] );
    });
}

function isPlainObject( o ){
    return o !== undefined && o.constructor !== undefined && o.constructor.prototype === Object.prototype;
}
