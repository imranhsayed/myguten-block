
// src/index.js
const { registerBlockType } = wp.blocks;

registerBlockType( 'myguten-block/test-block', {
	title: 'Basic Example',
	icon: 'smiley',
	category: 'layout',
	edit: ( { className } ) => <div className={ className }>Hello World!</div>,
	save: () => <div>Hello World!</div>
} );
