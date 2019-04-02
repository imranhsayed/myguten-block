const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

console.log( this.state );

const result = registerBlockType( 'myguten-block/test-block', {
	title: 'Basic Example',
	icon: 'smiley',
	category: 'layout',
	edit: ( props ) => {
		return (
			<RichText
				tagName="p"
				className={ className }
				onChange={ onChangeContent }
				value={ content }
			/>
		)
	},
	save: () => <div>Hello World!</div>
} );

console.log( result );
