import * as React from 'react';
import IElement from 'flmc-data-layer/src/FormController/IElement';
import { GridElement, ColumnDefinitions } from './GridElement';
import MaterialTable, { Column, MTableBodyRow } from 'material-table';
import { resolve } from 'styled-jsx/css';
import { Button, IconButton } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import OkIcon from '@material-ui/icons/ThumbUp';
import NOKIcon from '@material-ui/icons/ThumbDown';
import Barcode from './BarcodeView';
import CustomTableFilterRow from './CustomFilterRow';

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function createFakeData(): any[] {
    let result: any[] = [];
    for (let i = 0; i < 100; i++)
        result.push({
            id: i,
            title: `Title For Item #${i}`,
            subtitle: `Subtitle For Item #${i}`,
            barcode: getRandomIntInclusive(100000000000, 9999999999),
            price: getRandomIntInclusive(10000, 500000),
            type: 'test',
            category: 'test',
            image: 'https://via.placeholder.com/150',
            score: getRandomIntInclusive(0, 100)
        });
    return result;
}

type Props = {
    element: GridElement
};

type StateRaw = {
    columns: Column[],
    data: any[],
}

class Editable extends React.Component<any, StateRaw> {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                {
                    title: 'Id',
                    field: 'id',
                    removable: true,
                    editable: "never",
                    filtering: false,

                },
                {
                    title: 'Image', field: 'image',
                    render: rowData => <img src={rowData.image} style={{ width: 40, borderRadius: '50%' }} />,
                    sorting: false,
                    // editable: "never",
                    editComponent: (props) => (
                        <div style={{ display: 'inline-block', alignContent: 'center' }}>
                            <IconButton aria-label="Upload new image">
                                <CloudUploadIcon />
                            </IconButton>
                            {props.rowData.image && <img src={props.rowData.image} style={{ width: 40, height: 40, borderRadius: '50%', position: 'absolute' }} />}
                        </div>
                    ),
                    filtering: false,
                },
                { title: 'Title', field: 'title' },
                {
                    title: 'Subtitle', field: 'subtitle',

                },
                {
                    title: 'Barcode', field: 'barcode',
                    render: (rowData) => (<Barcode value={rowData.barcode} />)
                },
                { title: 'Price', field: 'price' },
                { title: 'Type', field: 'type' },
                { title: 'Category', field: 'category' },
                {
                    title: 'Score', field: 'score',
                    render: (rowData) => rowData.score > 50 ? <OkIcon /> : <NOKIcon />,
                    filterType: 'range'
                },
            ],
            data: createFakeData()
        }
    }
    render() {
        return (
            <MaterialTable
                title="Item List"
                columns={this.state.columns}
                data={this.state.data}

                components={{
                    FilterRow: props => {
                        return <CustomTableFilterRow {...props} />
                    },
                    Row: props => {
                        console.log(props);
                        return <MTableBodyRow {...props} onRowClick={() => { props.data.tableData.editing = "update"; this.setState({}); }} />
                    }
                }}
                options={{
                    actionsColumnIndex: -1,
                    filtering: true,
                    padding: "dense",
                    selection: true,
                }}
                actions={[
                    {
                        tooltip: 'Remove All Selected Users',
                        icon: 'delete',
                        onClick: (evt, data) => alert('You want to delete ' + data.length + ' rows'),
                    }
                ]}
                editable={{
                    isDeletable: (rowData) => false,
                    isEditable: (rowData) => true,
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                {
                                    const data = this.state.data;
                                    data.push(newData);
                                    this.setState({ data }, () => resolve());
                                }
                                resolve()
                            }, 1000)
                        }),
                    onRowUpdate: (oldData, newData) => new Promise((resolve, reject) => setTimeout(() => resolve(), 1000)),
                }}
            />
        )
    }
}

export default function GridView({ element }: Props) {

    const [columnDefinition, setColumnDefinition] = React.useState<ColumnDefinitions>([]);

    React.useEffect(() => {

        let colDefSub = element.columnDefinitionContainer.subscribe({
            next: v => {
                console.log(v);
                setColumnDefinition(v);
            }
        });

        return () => {
            colDefSub.unsubscribe();
        }
    })

    return (
        <div
            className="ag-theme-balham"
            style={{
                height: '600px',
                width: '100%'
            }}
        >
            <Editable />
        </div>
    )

}