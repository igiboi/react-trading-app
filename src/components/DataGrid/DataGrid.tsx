import React, { useState, useEffect } from "react";
import { ColDef, RowClickedEvent, GridApi } from "ag-grid-community";
import { useTheme, Theme } from "@emotion/react";
import { styled } from "@mui/material";
import { AgGridReact } from "ag-grid-react/lib/agGridReact";

const GridStyledWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100",
  padding: theme.spacing(2, 1),
  justifyContent: "center",
}));

interface DataGridProps<T> {
  showNoRowsOverlay?: Boolean;
  size: { height: number | string; width: number | string };
  gridData: T[];
  colDef: ColDef[];
  rowClickHandler?: (event: RowClickedEvent) => void;
}

export const DataGrid = <T,>({
  showNoRowsOverlay,
  size,
  gridData,
  colDef,
  rowClickHandler = undefined,
}: DataGridProps<T>): JSX.Element => {
  const [gridApi, setGridApi] = useState<GridApi>();
  const [gridColumnApi, SetGridColumnApi] = useState(null);
  const theme: Theme = useTheme();
  const onGridReady = (params: any) => {
    setGridApi(params.api);
    SetGridColumnApi(params.columnApi);
  };

  useEffect(() => {
    if (showNoRowsOverlay) {
      gridApi?.showNoRowsOverlay();
    }
  }, [gridApi, showNoRowsOverlay]);


  return (
    <GridStyledWrapper>
      <div
        className={`${
          theme === "dark" ? "ag-theme-alpine-dark" : "ag-theme-alpine"
        }`}
      >
        <AgGridReact
          rowData={gridData}
          onGridReady={onGridReady}
          rowSelection={"single"}
          columnDefs={colDef}
          defaultColDef={{
            resizable: true,
            filter: true,
          }}
          onRowClicked={rowClickHandler}
        ></AgGridReact>
      </div>
    </GridStyledWrapper>
  );
};
