import React from 'react';
import { Switch, Route, NavLink } from "react-router-dom";
import styled from 'styled-components';

import { routes, links } from './routes';

const Layout = () => {
	const linksList = links.map(link => {
		return <NavLink to={`/${link}`} activeClassName='linkActive'>{link}</NavLink>
	});
	const routesList = routes.map(route => <Route path={`/${route.path}`} component={route.component}></Route>);

  return (
    <LayoutWrapper>
			<nav>
				{linksList}
			</nav>
			<div className="mainContent">
				<Switch>
					{routesList}
				</Switch>
			</div>
    </LayoutWrapper>
  )
}

const LayoutWrapper = styled.div`
	nav {
		padding: 20px;
		border-bottom: 2px solid #ddd;
		a {
    	border: 2px solid #46b156;
    	border-radius: 5px;
    	color: #46b156;
			display: inline-block;
    	font-size: 14px;
    	font-weight: bold;
			margin-right: 20px;
    	padding: 6px 10px;
    	text-transform: uppercase;	
  	}
		.linkActive {
    	background-color: #46b156;
    	color: #fff;
    }
	}
	.mainContent {
		padding: 10px 20px 20px 20px;
	}
`

export default Layout;