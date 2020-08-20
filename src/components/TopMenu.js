import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import {
    Link
  } from "react-router-dom";
import { CartContext } from '../contexts/Cart';

class TopMenu extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {

        return (
            <div>
              <Navbar color="light" light expand="md">
                <NavbarBrand href="/">ReactJs</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="mr-auto" navbar>
                    <NavItem>
                      <NavLink>
                        <Link to="/">Home</Link>
                      </NavLink>
                    </NavItem>
        
                    <NavItem>
                      <NavLink>
                        <Link to="/products">Products</Link>
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink>
                        <CartContext.Consumer>
                          { ({ cartItems }) => <Link to="/products">Cart ({cartItems.length})</Link> }
                        </CartContext.Consumer>
                      </NavLink>
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </div>
          );
    }
 
}

export default TopMenu;