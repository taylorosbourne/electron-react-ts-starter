import React from 'react';
import { Link } from 'react-router-dom';

import { Header } from './second-styles';
import { Props } from './second-types';

export default function Second({ name }: Props) {
	return (
		<Header name={name}>
			Hi {name}{' '}
			<span role="img" aria-label="waving hand emoji">
				👋
			</span>
			, from a second page. <Link to="/">home</Link>
		</Header>
	);
}
