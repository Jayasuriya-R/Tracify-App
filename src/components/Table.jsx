import React from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


const Table = ({data}) => {
  return (
    <div className="p-4">
      <DataTable value={data} showGridlines tableStyle={{ minWidth: '28rem' }}>
        <Column field='id' header="ID" sortable style={{ width: '15%' }}/>
        <Column field='title' header="Name" sortable style={{ width: '20%' }}/>
        <Column field='description' header="Description" sortable style={{ width: '40%' }} />
        <Column field='status' header="Staus" sortable style={{ width: '25%' }}/>
        <Column field='createdDate' header="CreatedDate" sortable style={{ width: '25%' }} />
    
      </DataTable>
    </div>
  );
};

export default Table;
