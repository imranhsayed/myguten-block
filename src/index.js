const { registerBlockType } = wp.blocks;
const { RichText, BlockControls, AlignmentToolbar,
	InspectorControls, ColorPalette } = wp.editor;

registerBlockType( 'myguten-block/test-block', {
	title: 'Basic Example',
	icon: 'smiley',
	category: 'layout',
	attributes: {
		content: {
			type: 'array',
			source: 'children',
			selector: 'p',
		},
	},
	edit: ( props ) => {
		console.log( props );
		const { attributes: { content, alignment, newColor }, setAttributes, className } = props;
		const onChangeContent = ( newContent ) => {
			setAttributes( { content: newContent } );
		};

		const onChangeAlignment = ( newAlignment ) => {
			let alignmentValue = ( newAlignment === undefined ) ? 'none' : newAlignment;
				setAttributes( { alignment: alignmentValue } );
		};

		const onChangeTextColor = ( newColor ) => {
			let newColorValue = ( newColor === undefined ) ? 'none' : newColor;
			setAttributes( { newColor: newColorValue } );
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
					style = {{
						textAlign: alignment,
						color: newColor
					}}
					className={ className }
					onChange={ onChangeContent }
					value={ content }
				/>
			</div>
		);
	},
	save: ( props ) => {

		const contentStyle = {
			textAlign: props.attributes.alignment,
			color: props.attributes.newColor
		}

		return (
			<RichText.Content
				style= { contentStyle }
				className={ `myguten-block-align-${ props.attributes.alignment }` }
				tagName="p"
				value={ props.attributes.content }
			/>
		);
	},
} );

