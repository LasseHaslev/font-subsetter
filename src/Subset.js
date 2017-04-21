var fs = require( 'fs' );
var Font = require( 'fonteditor-core' ).Font;

module.exports = function( path, charCodes ) {

    this.font = Font.create( fs.readFileSync( path ), {
        type: 'ttf',
        subset: charCodes,
    });
    this.toBase64 = function() {
        return this.font.toBase64();
    };
    this.toFile = function( relativePath ) {
        var buffer = this.font.write({
            type: 'ttf', // support ttf,woff,eot,otf,svg
            hinting: true, // save font hinting
            deflate: null, // deflate function for woff
        });
        fs.writeFileSync(relativePath, buffer);
    };
    return this;
}
