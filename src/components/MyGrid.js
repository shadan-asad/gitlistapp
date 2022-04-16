import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getData } from '../services/data';

export default function MyGrid() {
  
    const [data, setData] = React.useState([])
    const [pageSize, setPageSize] = React.useState(8);

    React.useEffect( async function() {
        setData(await getData());
      }, []);

    const cols = [
        { field: 'sl_no', headerName: 'Sl No', width: 120 },
        { field: 'name', headerName: 'Repo Name', width: 150 },
        { field: 'owner', headerName: 'Owner', width: 150 },
        { field: 'stargazers_count', headerName: 'Stars Count', width: 150 },
        { field: 'forks_count', headerName: 'Number of Forks', width: 150 },
        { field: 'language', headerName: 'Language', width: 150 },
        { field: 'description', headerName: 'Description', width: 650 }
    ];
  
  return (
    
      <div style={{ display: 'flex', height: '100%'}}>
        <div style={{ flexGrow: 1, padding: '5px' }}>
          <DataGrid 
            columns = { cols }
            rows = { data } 
            pageSize={ pageSize }
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[8, 10, 20]}
            onCellClick = {(e) => { window.open(e.row.url, "_blank") }}
          />
        </div>
      </div>
    
  );
}
