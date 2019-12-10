import ApiFactory from '../mock';
import './single-product.scss';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';

let idGenerator = 10;
export default class Product extends Component {

    constructor(props) {
        super(props);
        let query = this.props.match.params.productId;
        this.state = { id: query, name: 'a', description: 'aaa', price: 0, images: [], newImage: '', new: false };

    }

    async componentDidMount() {
        let id = this.props.match.params.productId;
        const response = await ApiFactory.getInstance().get(`/api/products/${id}`);
        this.setState({
            id: response.data.id,
            name: response.data.name,
            description: response.data.description,
            price: response.data.price,
            images: response.data.images,
        });
        console.log(response, 'cia data');

    }

    handleValueChange = ({ target }) => {
        // Pakeicia atitinkama prop.
        this.setState({ [target.name]: target.value });
    }

    addNewImageUrl() {
        if (this.state.newImage != '') {
            let temp = this.state.images;
            temp.push({ id: idGenerator, url: this.state.newImage });
            this.setState({ images: temp });
            idGenerator++;
            this.setState({ newImage: '' });
            alert("Image added successfully!");
        }
    }

    removeImage(id) {
        let index = this.state.images.findIndex(x => x.id == id);
        if (index >= 0) {
            let temp = this.state.images;
            temp = temp.filter(x => x.id != id);
            this.setState({ images: temp });
        }
    }

    updateItem() {
        let newProduct = {
            id: this.state.id,
            name: this.state.name,
            price: this.state.price,
            description: this.state.description,
            images: this.state.images
        };
        ApiFactory.getInstance().put(`/api/products/${newProduct.id}`, newProduct);
    }

    render() {
        return (
            <>
                <h4 className="top-title"> Add new Product</h4>
                <div className="container">
                    <form>
                        <ul className="flex-outer">
                            <li>
                                <label>Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleValueChange} />




                            </li>
                            <li>
                                <label>Price:</label>
                                <input
                                    type="number"
                                    name="price"
                                    value={this.state.price}
                                    onChange={this.handleValueChange} />


                            </li>
                            <li>

                                <label>Description:</label>
                                <textarea
                                    rows="10"
                                    type="text"
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.handleValueChange} />
                                {/* <h1>{this.state.description}</h1> */}

                            </li>
                            <li>

                                <label>Image Urls:</label>
                                {this.state.images.map(image => {
                                    return <div className="images">
                                        <img src={image.url} alt="" />
                                        <button onClick={() => this.removeImage(image.id)}>X</button>
                                    </div>
                                })
                                }
                            </li>

                            <li>
                                <label htmlFor="">Add new Url</label>
                                <textarea
                                    name="newImage"
                                    onChange={this.handleValueChange}
                                    value={this.state.newImage}
                                    type="text" />
                            </li>

                            <li>
                                <button onClick={() => this.addNewImageUrl()}>Add</button>
                            </li>

                            <li>
                                <button onClick={() => this.updateItem()}>Save changes</button>
                            </li>

                            <li>
                                <button><Link to="/admin">Return back</Link></button>
                            </li>
                        </ul>

                    </form>
                </div>
            </>
        )
    }
}