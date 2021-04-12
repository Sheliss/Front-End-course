import React, { Component } from 'react'

export default class Tableapp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            table: props.list,
            choosedCells: [],
            mainBorderStyle: {border: '1px solid black'}
        }
    }

    
    changeOnTick() {
        const currentCell = this.chooseRandomCell(this.state.table.length);

        if(this.state.choosedCells.indexOf(currentCell) !== -1) {
            console.log(this.state.choosedCells)
            return;
        }

        this.setState(prevState => ({
            choosedCells: [...prevState.choosedCells, currentCell],
        }))

        console.log(this.state.choosedCells)

        if(this.state.choosedCells.length === (this.state.table.length)/2) {
            this.setState({
                mainBorderStyle: {border: '10px solid black'}
            })
        }

        if(this.state.choosedCells.length === this.state.table.length) {
            this.setState({
                mainBorderStyle: {border: '20px solid black'}
            })
            this.componentWillUnmount();
        }


    }

    chooseRandomCell(length) {
        return String(Math.floor(Math.random() * length))
    }

    componentDidMount() {
        this.tickIinterval = setInterval(() => this.changeOnTick(), 2000);
    }

    componentWillUnmount() {
        clearInterval(this.tickIinterval)
    }


    renderTable() {
        return this.state.table.map((cell) => {
            const {id, price, name} = cell

            if(this.state.choosedCells.indexOf(id) !== -1) {
                return (
                    <td key={id} className="productTable_cell choosed">
                        <div>{name}</div>
                        <div>Price: {price}</div>
                    </td>
                )
            }

            return (
                <td key={id} className="productTable_cell">
                    <div>{name}</div>
                    <div>Price: {price}</div>
                </td>
            )
        })
    }



    render() {
        return (
            <div>
                <table className={"productTable"} style={this.state.mainBorderStyle}>
                    <tbody>
                        <tr>
                            {this.renderTable()}
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

