import React from "react";
import Form from "react-bootstrap/Form";

function Contact() {
  return (
    // <div className="ContactForm">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-12 text-center">
    //         <div className="contactForm">
    //           <form id="contact-form" noValidate>
    //             {/* Row 1 of form */}
    //             <div className="row formRow">
    //               <div className="col-6">
    //                 <input
    //                   type="text"
    //                   name="name"
    //                   className="form-control formInput"
    //                   placeholder="Name"
    //                 ></input>
    //               </div>
    //               <div className="col-6">
    //                 <input
    //                   type="email"
    //                   name="email"
    //                   className="form-control formInput"
    //                   placeholder="Email address"
    //                 ></input>
    //               </div>
    //             </div>

    //             {/* Row 3 of form */}
    //             <div className="row formRow">
    //               <div className="col">
    //                 <textarea
    //                   rows={3}
    //                   name="message"
    //                   className="form-control formInput"
    //                   placeholder="Message"
    //                 ></textarea>
    //               </div>
    //             </div>
    //             <button className="submit-btn" type="submit">
    //               Submit
    //             </button>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    // <Form>
    //   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    //     <Form.Label>Name</Form.Label>
    //     <Form.Control type="name" placeholder="name" />
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control type="email" placeholder="name@example.com" />
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    //     <Form.Label>Message</Form.Label>
    //     <Form.Control as="textarea" rows={3} />
    //   </Form.Group>
    // </Form>

    <>
      <Form.Label htmlFor="inputPassword5">Password</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock" muted>
        Your password must be 8-20 characters long, contain letters and numbers,
        and must not contain spaces, special characters, or emoji.
      </Form.Text>
    </>
  );
}

export default Contact;
