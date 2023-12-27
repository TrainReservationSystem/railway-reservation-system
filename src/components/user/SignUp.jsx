import React, { useState } from "react";
import {
  MDBInput,
  MDBInputGroup,
  MDBBtn,
  MDBCheckbox,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";

function SignUp() {
  const [formValue, setFormValue] = useState({
    fname: "Mark",
    lname: "Otto",
    email: "",
    city: "",
    state: "",
    zip: "",
  });

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-5">
      <MDBValidation className="row g-3" isValidated>
        <MDBValidationItem className="col-md-4">
          <MDBInput
            value={formValue.fname}
            name="fname"
            onChange={onChange}
            id="validationCustom01"
            required
            label="First name"
          />
        </MDBValidationItem>
        <MDBValidationItem className="col-md-4">
          <MDBInput
            value={formValue.lname}
            name="lname"
            onChange={onChange}
            id="validationCustom02"
            required
            label="Last name"
          />
        </MDBValidationItem>
        <MDBValidationItem
          feedback="Please choose a username."
          invalid
          className="col-md-4"
        >
          <MDBInputGroup textBefore="@">
            <input
              type="text"
              className="form-control"
              id="validationCustomUsername"
              placeholder="Username"
              required
            />
          </MDBInputGroup>
        </MDBValidationItem>
        <MDBValidationItem
          className="col-md-6"
          feedback="Please provide a valid city."
          invalid
        >
          <MDBInput
            value={formValue.city}
            name="city"
            onChange={onChange}
            id="validationCustom03"
            required
            label="City"
          />
        </MDBValidationItem>
        <MDBValidationItem
          className="col-md-6"
          feedback="Please provide a valid zip."
          invalid
        >
          <MDBInput
            value={formValue.zip}
            name="zip"
            onChange={onChange}
            id="validationCustom05"
            required
            label="Zip"
          />
        </MDBValidationItem>
        <MDBValidationItem
          className="col-12"
          feedback="You must agree before submitting."
          invalid
        >
          <MDBCheckbox
            label="Agree to terms and conditions"
            id="invalidCheck"
            required
          />
        </MDBValidationItem>
        <div className="col-12">
          <MDBBtn type="submit">Submit form</MDBBtn>
        </div>
      </MDBValidation>
    </div>
  );
}

// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";

// function SignUp() {
//   return (
//     <div className="container mt-5">
//       <Form>
//         <Row className="mb-3">
//           <Form.Group as={Col} controlId="formGridEmail">
//             <Form.Label>Email</Form.Label>
//             <Form.Control type="email" placeholder="Enter email" />
//           </Form.Group>

//           <Form.Group as={Col} controlId="formGridPassword">
//             <Form.Label>Password</Form.Label>
//             <Form.Control type="password" placeholder="Password" />
//           </Form.Group>
//         </Row>

//         <Form.Group className="mb-3" controlId="formGridAddress1">
//           <Form.Label>Address</Form.Label>
//           <Form.Control placeholder="1234 Main St" />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formGridAddress2">
//           <Form.Label>Address 2</Form.Label>
//           <Form.Control placeholder="Apartment, studio, or floor" />
//         </Form.Group>

//         <Row className="mb-3">
//           <Form.Group as={Col} controlId="formGridCity">
//             <Form.Label>City</Form.Label>
//             <Form.Control />
//           </Form.Group>

//           <Form.Group as={Col} controlId="formGridState">
//             <Form.Label>State</Form.Label>
//             <Form.Select defaultValue="Choose...">
//               <option>Choose...</option>
//               <option>...</option>
//             </Form.Select>
//           </Form.Group>

//           <Form.Group as={Col} controlId="formGridZip">
//             <Form.Label>Zip</Form.Label>
//             <Form.Control />
//           </Form.Group>
//         </Row>

//         <Form.Group className="mb-3" id="formGridCheckbox">
//           <Form.Check type="checkbox" label="Check me out" />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </div>
//   );
// }

export default SignUp;
