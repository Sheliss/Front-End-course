import React, { Component } from 'react';

var itemsArr = [];


//Хедер
class ListHeader extends Component {
    render() {
        return <h1>Dynamic list</h1>
    }
}


//Форма куда писать и кнопка добавить
class ListForm extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        let newItemValue = this.refs.itemName.value;

        if(newItemValue) {
            this.props.addItem({newItemValue});
            this.refs.form.reset();
        }
    }

    render() {
        return (
            <form className="listform" ref="form" onSubmit={this.onSubmit}>
                <input type="text" ref="itemName" className="listform__input" placeholder="add new entry" />
                <button type="submit" className="buttonClass">Add</button>
            </form>
        )
    }
}


//Рисует строчку
class ListItem extends Component {
    constructor(props) {
        super(props);
        this.onClickClose = this.onClickClose.bind(this);
    }

    onClickClose() {
        let index = parseInt(this.props.index);
        this.props.removeItem(index);
    }

    render() {
        return (
            <li className="listtable__item">
                <div>
                    {this.props.item.value}
                    <button type="button" className="buttonClass" onClick={this.onClickClose}>Remove</button>
                </div>
            </li>
        )
    }
}


//Рисует таблицу из строчек
class ListList extends Component {
    render() {
        let items = this.props.items.map((item, index) => {
            return (
                <ListItem key={index} item={item} index={index} removeItem={this.props.removeItem} />
            );
        });

        return(
            <ul className="listtable">{items}</ul>
        )
    }


}


//Кажется понял бинды
export default class ListApp extends Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.state = {itemsList: itemsArr}
    }

    addItem(item) {
        itemsArr.unshift({
            index: itemsArr.length+1,
            value: item.newItemValue
        });
        this.setState(({itemsList: itemsArr}))
    }

    removeItem(itemIndex) {
        itemsArr.splice(itemIndex, 1);
        this.setState({itemsList: itemsArr});
    }
    

    render() {
        return (
            <div className="formContainer">
                <ListHeader />
                <ListForm addItem={this.addItem} />
                <ListList items={itemsArr} removeItem={this.removeItem} />
            </div>
        )
    }
}