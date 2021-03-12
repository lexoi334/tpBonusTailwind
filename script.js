var toCopy  = document.querySelector( '.to-copy' ),
    btnCopy = document.querySelector( '.copy' );

btnCopy.addEventListener( 'click', function(){
	toCopy.select();
	document.execCommand( 'copy' );
	return false;
} );