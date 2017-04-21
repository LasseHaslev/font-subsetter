var fs = require( 'fs' );
var fontkit = require( 'fontkit' );
var extend = require( 'extend' );

var Subset = require( './Subset' );

module.exports = function( fontPath, options ) {

    this.fontPath = fontPath;
    this.font = fontkit.openSync( fontPath );

    this.settings = extend( true, {
        regex: /./,
    }, options );


    this.characterSetMatchingRegex = function() {
        var self = this;
        return this.font.characterSet.filter( function( char ) {
            return self.shouldIncludeGlyph( char );
        } );
    }
    this.characters = function() {
        return this.characterSetMatchingRegex().map( function(char) {
            return String.fromCodePoint( char );
        } ).join('');
    }

    this.charCodes = function() {
        return this.characters()
            .split('')
            .map( function( item ) {
                return item.charCodeAt( 0 );
            } );
    }

    this.subset = function() {
        return new Subset( this.fontPath, this.charCodes() );
    }

    this.shouldIncludeGlyph = function( char ) {
        return String.fromCodePoint( char ).match( this.settings.regex );
    }

};
