// import React from 'react';
// import ReactDOM from 'react-dom';

// import './Stock.css';

// class ProductCard extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       category: props.product.category,
//       name: props.product.name,
//       imageURL: 'http://via.placeholder.com/200x200',
//       checkURL: props.product.imageURL,
//       price: props.product.price,
//     };
//     this.checkImage = this.checkImage.bind(this);
//     this.checkImage();
//   }

//   componentDidUpdate(prevProps) {
//     if (prevProps.product.category !== this.props.product.category) {
//       this.setState({ category: this.props.product.category });
//     }
//     if (prevProps.product.name !== this.props.product.name) {
//       this.setState({ name: this.props.product.name });
//     }
//     if (prevProps.product.price !== this.props.product.price) {
//       this.setState({ price: this.props.product.price });
//     }
//     if (prevProps.product.imageURL !== this.props.product.imageURL) {
//       this.setState({ checkURL: this.props.product.imageURL }, this.checkImage);
//     }
//   }

//   checkImage() {
//     const image = new Image();
//     image.onerror = () => {
//       this.setState({ imageURL: 'http://via.placeholder.com/200x200' });
//     };
//     image.onload = () => {
//       this.setState({ imageURL: this.state.checkURL });
//     };
//     image.src = this.state.checkURL;
//   }

//   render() {
//     return (
//       <div className='ProductCard'>
//         <p className='category'>Products &raquo; {this.state.category}</p>
//         <p className='name'>{this.state.name}</p>
//         <img src={this.state.imageURL} alt={this.state.name} />
//         <p className='price'>from <span>${this.state.price}</span></p>
//       </div>
//     );
//   }
// }

// class NewItemTab extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       formErrors: {
//         category: false,
//         name: false,
//         price: false,
//         imageURL: false,
//       },
//     };
//   }

//   checkForm() {
//     const category = document.getElementById('newItemForm-category').value;
//     const name = document.getElementById('newItemForm-name').value;
//     const price = document.getElementById('newItemForm-price').value;
//     const imageURL = document.getElementById('newItemForm-imageURL').value;
//     const product = { category, name, price, imageURL };
//     const errors = { ...this.state.formErrors };
//     errors.category = category.length === 0;
//     errors.name = name.length === 0;
//     errors.price = price.length === 0;

//     const image = new Image();
//     image.onerror = () => {
//       this.finalizeForm(false, product);
//     };
//     image.onload = () => {
//       this.finalizeForm(true, product);
//     };
//     this.setState({ formErrors: errors });
//     image.src = imageURL;
//   }

//   finalizeForm(isImageURLValid, product) {
//     if (!isImageURLValid) {
//       const errors = { ...this.state.formErrors };
//       errors.imageURL = true;
//       this.setState({ formErrors: errors });
//     } else {
//       this.props.addNewProduct(product);
//     }
//   }

//   renderCategorySelections(inventory) {
//     const categoryKeys = Object.keys(inventory.categories);
//     return categoryKeys.map((category) => (
//       <option key={category}>{category}</option>
//     ));
//   }

//   updateForm() {
//     const category = document.getElementById('newItemForm-category').value;
//     const name = document.getElementById('newItemForm-name').value;
//     const price = document.getElementById('newItemForm-price').value;
//     const imageURL = document.getElementById('newItemForm-imageURL').value;
//     const errors = { ...this.state.formErrors };
//     if (this.props.formData.category !== category) {
//       errors.category = false;
//     }
//     if (this.props.formData.name !== name) {
//       errors.name = false;
//     }
//     if (this.props.formData.price !== price) {
//       errors.price = false;
//     }
//     if (this.props.formData.imageURL !== imageURL) {
//       errors.imageURL = false;
//     }
//     this.setState({ formErrors: errors });

//     this.props.changeForm({ category, name, price, imageURL });
//   }

//   render() {
//     return (
//       <div className='NewItemTab'>
//         <div className='newItem-input'>
//           <h1>Add A New Item</h1>
//           <p>
//             <label>Category</label>
//             <select
//               className={this.state.formErrors.category ? 'formCheck-err' : ''}
//               id='newItemForm-category'
//               value={this.props.formData.category}
//               onChange={this.updateForm.bind(this)}
//             >
//               <option></option>
//               {this.renderCategorySelections(this.props.inventory)}
//             </select>
//           </p>
//           <p>
//             <label>Product Name</label>
//             <input
//               className={this.state.formErrors.name ? 'formCheck-err' : ''}
//               type='text'
//               required
//               id='newItemForm-name'
//               value={this.props.formData.name}
//               onChange={this.updateForm.bind(this)}
//             ></input>
//           </p>
//           <p>
//             <label>Price per Unit</label>
//             <input
//               className={this.state.formErrors.price ? 'formCheck-err' : ''}
//               type='number'
//               required
//               id='newItemForm-price'
//               value={this.props.formData.price}
//               onChange={this.updateForm.bind(this)}
//             ></input>
//           </p>
//           <p>
//             <label>Image URL</label>
//             <input
//               className={this.state.formErrors.imageURL ? 'formCheck-err' : ''}
//               type='text'
//               required
//               id='newItemForm-imageURL'
//               value={this.props.formData.imageURL}
//               onChange={this.updateForm.bind(this)}
//               placeholder='Paste link here'
//             ></input>
//           </p>
//           <button onClick={this.checkForm.bind(this)}>Add Product</button>
//         </div>
//         <div className='newItem-preview'>
//           <h1>Preview</h1>
//           <ProductCard product={this.props.formData} />
//         </div>
//       </div>
//     );
//   }
// }

// const ProductTableRow = (props) => {
//   return (
//     <tr>
//       <td>{props.product.name}</td>
//       <td>${props.product.price}</td>
//       <td>{props.product.category}</td>
//       <td>
//         <a
//           target='_blank'
//           rel='noreferrer'
//           href={props.product.imageURL}
//         >
//           View
//         </a>
//       </td>
//       <td className='editButton'>edit</td>
//     </tr>
//   );
// };

// class ProductsTab extends React.Component {
//   renderTableRows(inventory) {
//     const listOfProducts = Object.values(inventory.categories).flat();

//     if (listOfProducts.length === 0) {
//       return <p>There are currently no items in the inventory</p>;
//     } else {
//       return (
//         <>
//           <tr>
//             <th>Product Name</th>
//             <th>Price</th>
//             <th>Category</th>
//             <th>Image</th>
//           </tr>
//           {listOfProducts.map((product) => (
//             <ProductTableRow key={product.name} product={product} />
//           ))}
//         </>
//       );
//     }
//   }

//   render() {
//     return (
//       <div className='ProductsTab'>
//         <h1>Available Products List</h1>
//         <p>Showing all available products:</p>
//         <table className='productTable'>
//           <tbody>{this.renderTableRows(this.props.inventory)}</tbody>
//         </table>
//       </div>
//     );
//   }
// }

// class MyRouter extends React.Component {
//   route(active) {
//     switch (active) {
//       case 0:
//         return (
//           <NewItemTab
//             inventory={this.props.inventory}
//             formData={this.props.newItemFormData}
//             changeForm={this.props.changeNewItemForm}
//             addNewProduct={this.props.addNewProduct}
//           />
//         );
//       case 1:
//         return <ProductsTab inventory={this.props.inventory} />;
//       default:
//         return null;
//     }
//   }

//   render() {
//     return <div className='MyRouter'>{this.route(this.props.activeTab)}</div>;
//   }
// }

// const Footer = () => {
//   return (
//     <div className='Footer'>
//       <p>Current work-in-progress for an e-commerce dashboard.</p>
//     </div>
//   );
// }

// class InventoryManagementApp extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       activeTab: 1,
//       inventory: {
//         categories: {
//           dresses: [],
//           shirts: [
//             {
//               category: 'shirts',
//               name: 'Blue T-Shirt',
//               price: '16.99',
//               imageURL: 'https://cdn.shopify.com/s/files/1/0797/0169/products/mockup-c6d64730_1024x1024.jpg',
//             },
//           ],
//           pants: [],
//           accessories: [],
//         },
//       },
//       newItemForm: {
//         category: '',
//         name: '',
//         price: '',
//         imageURL: '',
//       },
//     };
//   }

//   changeActiveTab(index) {
//     this.setState({ activeTab: index });
//   }

//   changeNewItemForm(formData) {
//     this.setState({ newItemForm: formData });
//   }

//   addNewProduct(product) {
//     this.setState({ newItemForm: { category: '', name: '', price: '', imageURL: '' } });

//     const decapitalize = (string) => {
//       return string.charAt(0).toLowerCase() + string.slice(1);
//     };

//     product.category = decapitalize(product.category);
//     const inventory = { ...this.state.inventory };
//     inventory.categories[product.category].push(product);

//     this.setState({ inventory });
//   }

//   render() {
//     return (
//       <div className='InventoryManagementApp'>
//         <h2 className='header'>
//           <i className='icon-th-list'></i> Inventory Management Application Demo
//         </h2>
//         <h1 className='title' onClick={() => this.changeActiveTab(1)}>
//           Inventory
//         </h1>
//         <div className='app-body'>
//           <MyRouter
//             activeTab={this.state.activeTab}
//             inventory={this.state.inventory}
//             newItemFormData={this.state.newItemForm}
//             changeNewItemForm={this.changeNewItemForm.bind(this)}
//             addNewProduct={this.addNewProduct.bind(this)}
//           />
//         </div>
//         <Footer />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<InventoryManagementApp />, document.getElementById('app'));
// export default Stock;
