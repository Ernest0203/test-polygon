import React, { lazy, Suspense } from 'react';
import { Switch, Route, NavLink } from "react-router-dom";
import styled from 'styled-components';

const routes = [
  {
		exact: true,
    link: 'files',
    path: 'files',
    component: lazy(() => import('./Files'))
  },
  {
    link: 'sockets',
    path: 'sockets',
    component: lazy(() => import('./Sockets'))
  },
  {
    link: 'charts',
    path: 'charts',
    component: lazy(() => import('./Charts'))
  },
  // {
    // link: 'users',
  //   path: 'users',
  //   component: Users
  // },
];

const Layout = () => {
	const linksList = routes.map(route => {
		return <NavLink to={`/${route.link}`} activeClassName='linkActive'>{route.link}</NavLink>
	});
	const routesList = routes.map(route => {
		return <Route path={`/${route.path}`} exact={route.exact} component={route.component}></Route> 
		}
	);

  return (
    <LayoutWrapper>
			<nav>
				{linksList}
			</nav>
			<div className="mainContent">
				<Suspense fallback={() => <p>Loading...</p>}>
					<Switch>
						{routesList}
					</Switch>
				</Suspense>
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
		padding: 20px 20px 20px 20px;
	}
`

export default Layout;