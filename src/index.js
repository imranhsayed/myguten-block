const { registerBlockType } = wp.blocks;
const { RichText, BlockControls, AlignmentToolbar,
	InspectorControls, ColorPalette } = wp.editor;

const result = registerBlockType( 'myguten-block/test-block', {
	title: 'Basic Example',
	icon: 'smiley',
	category: 'layout',
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
		textColor: {
			source: 'attribute',
			selector: 'p',
			attribute: 'style'
		}
	},
	edit: ( props ) => {
		console.log( 'edit-props', props );
		const { attributes: { content, alignment, textColor }, setAttributes, className } = props;

		const onChangeContent = ( newContent ) => {
			setAttributes( { content: newContent } );
		};

		const onChangeAlignment = ( newAlignment ) => {
			let alignmentValue = ( newAlignment === undefined ) ? 'none' : newAlignment;
				setAttributes( { alignment: alignmentValue } );
		};

		const onChangeTextColor = ( newColor ) => {
			let newColorValue = ( newColor === undefined ) ? 'none' : newColor;
			setAttributes( { textColor: newColorValue } );
		};

		return (
			<div>
				{
					<BlockControls>
						<AlignmentToolbar
							value={ alignment }
							onChange={ onChangeAlignment }
						/>
					</BlockControls>
				}
				{
					<InspectorControls>
						<ColorPalette // Element Tag for Gutenberg standard colour selector
							onChange={onChangeTextColor} // onChange event callback
						/>
					</InspectorControls>
				}
				<RichText
					tagName="p"
					style={{ color: textColor }}
					className={ className }
					onChange={ onChangeContent }
					value={ content }
				/>
			</div>
		);
	},
	save: ( props ) => {

		// const textColor = {
		// 	textAlign: props.attributes.alignment,
		// 	color: props.attributes.newColor
		// }
		console.log( 'saves', 		<RichText.Content
			style={ props.attributes.textColor }
			tagName="p"
			value={ props.attributes.content } />
		 );

		return (

		<RichText.Content
			style={ props.attributes.textColor }
			tagName="p"
			value={ props.attributes.content } />
		);
	},
} );

console.log( 'result', result );
