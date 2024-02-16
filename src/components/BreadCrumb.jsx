import React, { Component } from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export class BreadCrumb extends Component {
    render() {
        return (
            <div className="breadcrumb container py-4">
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Men</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Clothing</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Tops</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">Adidas</Breadcrumb.Item>
                    <Breadcrumb.Item active>Adidas Black T-Shirt</Breadcrumb.Item>
                </Breadcrumb>
            </div>
        );
    }
}

export default BreadCrumb