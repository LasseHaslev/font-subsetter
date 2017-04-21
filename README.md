# @lassehaslev/font-subsetter

## Install
```bash
npm install @lassehaslev/font-subsetter --save
```

## Usage
```js
// Get font subsetter class
var FontSubseter = require( '@lassehaslev/font-subsetter' );

// Create instance
var subsetter = new FontSubseter( filePath, {
    regex: new RegExp( regex ),
} );


// -- Subset -- //
// To file
subsetter.subset().toFile( path );

// Subset to base64
subsetter.subset().toBase64();

// -- Other functions -- //
// Get all characters matching regex
subsetter.characters();

// Get all charcodes matching regex
subsetter.charCodes();
```
