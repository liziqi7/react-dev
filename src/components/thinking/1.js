import React from 'react';
const PRODUCTS = [
    { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
    { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
    { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
    { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
    { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
    { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' },
];
class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            inStockOnly: false,
        };
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }
    handleFilterTextChange(filterText) {
        this.setState({
            filterText: filterText,
        });
    }
    handleInStockChange(inStockOnly) {
        this.setState({
            inStockOnly: inStockOnly,
        });
    }
    render() {
        return (
            <div>
                <SearchBar
                    onInStockChange={this.handleInStockChange}
                    onFilterTextChange={this.handleFilterTextChange}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
                <ProductTable products={this.props.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly} />
            </div>
        );
    }
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleInStockChange = this.handleInStockChange.bind(this);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }
    handleInStockChange(e) {
        this.props.onInStockChange(e.target.checked);
    }
    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }
    render() {
        return (
            <div>
                <label>
                    搜索:
                    <input type="text" placeholder="Search..." value={this.props.filterText} onChange={this.handleFilterTextChange} />
                </label>
                <br />
                <label>
                    <input type="checkbox" checked={this.props.inStockOnly} onChange={this.handleInStockChange} /> Only show products in stock
                </label>
            </div>
        );
    }
}
class ProductTable extends React.Component {
    render() {
        const { filterText, inStockOnly, products } = this.props;
        const rows = [];
        let lastCategory = null;
        products.forEach(product => {
            if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
                return;
            }
            if (inStockOnly && !product.stocked) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
            }
            rows.push(<ProductRow product={product} key={product.name} />);
            lastCategory = product.category;
        });
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>{rows}</tbody>
                </table>
            </>
        );
    }
}
function ProductCategoryRow(props) {
    return (
        <tr>
            <td colSpan="2">{props.category}</td>
        </tr>
    );
}
function ProductRow(props) {
    let { name, price, stocked } = props.product;
    name = stocked ? name : <span style={{ color: 'red' }}>{name}</span>;
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    );
}
export default function () {
    return (
        <>
            <FilterableProductTable products={PRODUCTS} />
        </>
    );
}
