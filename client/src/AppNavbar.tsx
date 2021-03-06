import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function AppNavbar() {
	return (
		<Navbar bg="light" expand="lg">
			<Container>
				<Navbar.Brand href="#home">Todos App</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="#home">Home</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
