import React, { Component } from 'react';
import api from "../../services/api";
import { Link } from 'react-router-dom';

import "./styles.css";

export default class Main extends Component {

    state = { // armazena as informações da api
        products: [],
        productInfo: {},
        page: 1,
    }


    componentDidMount() { // executa uma ação assim que o componente for exibido em tela
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`); // rota da api
        const { docs, ...productInfo } = response.data; // atribui os dados da api nas váriaveis desestruturadas

        this.setState({ products: docs, productInfo, page }); // atribui no estado, os valores da api
    }

    prevPage = () => {
        const { page } = this.state;
        const pageNumber = page - 1;
        this.loadProducts(pageNumber);
    }
    nextPage = () => {
        const { page } = this.state;
        const pageNumber = page + 1;
        this.loadProducts(pageNumber);
    }

    
    render() {
        const {products, page, productInfo} = this.state;
    
        //return <h1>Contagem de produtos: {this.state.products.length}</h1>;
    
        return (<div className="product-list">
            {products.map(product => (
                <article key={product._id}>
                    <strong>{product.title}</strong>
                    <p>{product.description}</p>
                    
                    <Link to={`/products/${product._id}`}>Acessar</Link>
                </article>
            ))}
            <div className="actions">
                <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
            </div>
        </div>
    );
  }
}


// No React, o primeiro elemento dentro do Map precisa da key para definir um valor único para cara iteração 