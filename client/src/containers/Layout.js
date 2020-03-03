import React from 'react';
import { Switch, Route, Link } from "react-router-dom";
import styled from 'styled-components';

import { routes, links } from './routes';

const Layout = () => {
	const linksList = links.map(link => <Link to={`/${link}`}>Files</Link>);
	const routesList = routes.map(route => <Route path={`/${route.path}`} component={route.component}></Route>);

  return (
    <LayoutWrapper>
			<nav>
				{linksList}
			</nav>
			<div className="content">
				<Switch>
					{routesList}
				</Switch>
			</div>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
	padding: 20px;
	nav {
		margin-bottom: 20px;
	}
`

export default Layout;