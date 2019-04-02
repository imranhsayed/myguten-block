const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

const result = registerBlockType( 'myguten-block/test-block', {
	title: 'Basic Example',
	icon: 'smiley',
	category: 'layout',
	edit: ( props ) => {
		return (
			<RichText
				tagName="p"
			/>
		)
	},
	save: () => <div>Hello World!</div>
} );

console.log( result );
