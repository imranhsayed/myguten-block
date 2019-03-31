const { registerBlockType } = wp.blocks;
console.log( 'bl', wp.blocks );

registerBlockType( 'myguten/test-block', {
	title: 'Basic Example',
	icon: 'smiley',
	category: 'layout',
	edit: ( { className } ) => <div className={ className }>Hello World!</div>,
	save: () => <div>Hello World!</div>,
} );
