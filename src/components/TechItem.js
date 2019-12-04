import React from 'react';

function TechItem( { tech, onDelete, } ) {
	return (<li>
		{tech}
		<button type="button" onClick={onDelete}>Remover</button>
		< /li>
			) } TechItem.defaultProps= {tech: 'Evil Tecnhology'}

			export default TechItem;