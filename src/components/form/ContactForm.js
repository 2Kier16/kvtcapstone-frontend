// import React from "react";
// import axios from "axios";

// class contactApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       email: "",
//       message: "",
//     };
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     axios({
//       method: "POST",
//       url: "http://127.0.0.1:3000/contacts",
//       data: this.state,
//     }).then((response) => {
//       if (response.data.status === "success") {
//         alert("Message Sent.");
//         this.resetForm();
//       } else if (response.data.status === "fail") {
//         alert("Message failed to send.");
//       }
//     });
//   }

//   resetForm() {
//     this.setState({ name: "", email: "", message: "" });
//   }

//   render() {
//     return (
//       <div className="contact-form-container">
//         <form
//           id="contact-form"
//           onSubmit={this.handleSubmit.bind(this)}
//           method="POST"
//         >
//           <div className="form-group">
//             <label htmlFor="name">Name</label>
//             <input
//               type="text"
//               className="form-control"
//               id="name"
//               value={this.state.name}
//               onChange={this.onNameChange.bind(this)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="exampleInputEmail1">Email address</label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               aria-described="emailHelp"
//               value={this.state.email}
//               onChange={this.onEmailChange.bind(this)}
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="message">Message</label>
//             <textarea
//               className="form-control"
//               rows="5"
//               id="message"
//               value={this.state.message}
//               onChange={this.onMessageChange.bind(this)}
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </form>
//       </div>
//     );
//   }

//   onNameChange(event) {
//     this.setState({ name: event.target.value });
//   }

//   onEmailChange(event) {
//     this.setState({ email: event.target.value });
//   }

//   onMessageChange(event) {
//     this.setState({ message: event.target.value });
//   }
// }

// export default contactApp;
