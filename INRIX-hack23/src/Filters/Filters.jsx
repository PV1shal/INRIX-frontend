import "./Filters.css"

import React, { useState } from 'react'
import Collapsible from 'react-collapsible';
import { Dropdown, ButtonGroup, Button, Form, DropdownButton } from 'react-bootstrap';
import DropDownButton from "../DropDownButton/DropDownButton";

              
const Filters = () => {
  
    return (
        <Collapsible className = "collapsible-container"  trigger="Select your preferences ">
          <DropDownButton></DropDownButton>
            {/* <Dropdown.Item> Form
                <Form>
                    <Form.Group controlId="MinBudget">
                      <Form.Label>Min Budget</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Min Budget"
                      />
                      <Form.Text className="text-muted">
                        Enter your minimum budget.
                      </Form.Text>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
              </Dropdown.Item> */}
            {/* </Dropdown.Menu>
          </Dropdown> */}
        </Collapsible>
      );
  };
  
  export default Filters;