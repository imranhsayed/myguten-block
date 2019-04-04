const { registerBlockType } = wp.blocks;
const { withSelect } = wp.data;

registerBlockType( 'myguten-block/test-block', {
	title: 'Basic Example',
	icon: 'megaphone',
	category: 'widgets',

	edit: withSelect( ( select ) => {
		return {
			posts: select( 'core' ).getEntityRecords( 'postType', 'post' )
		};
	} )( ( { posts, className } ) => {

		if ( ! posts ) {
			return "Loading...";
		}

		if ( posts && posts.length === 0 ) {
			return "No posts";
		}

		let post = posts[ 0 ];

		return <a className={ className } href={ post.link }>
			{ post.title.rendered }
		</a>;
	} ),
	save: ( props ) => ( <div></div> )
} );
