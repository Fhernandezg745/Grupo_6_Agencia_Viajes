import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAll } from "../services/apiProductsHarbortrip";





const StyledTableCell= withStyles(()=>({
    head:{
        color: 'white',
        background: 'black',
        textAlign: 'center'
    },
   body:{
        fontSize: 14,
    },
    }))(TableCell);

function TableMaterial(props) {

    const [list, setList] = useState([]); //Paso el valor inicial en el parentesis del useState
    const [page, setPage] = useState(1);
    useEffect(() => {
        getAll(page).then((data) => setList(data));
    }, [page]); //esto es asincrono, tengo que agregar el .then
    const next = () => (page < 5 ? setPage(page + 1) : setPage(5));
    const prev = () => (page > 1 ? setPage(page - 1) : setPage(1));


    return (
        <TableContainer>
            <Table>
            <TableHead>
            <TableRow>
                <StyledTableCell>IMAGEN</StyledTableCell> 
               <StyledTableCell>PRODUCTO</StyledTableCell> 
               <StyledTableCell>DESCRIPCION</StyledTableCell> 
               <StyledTableCell>PRECIO</StyledTableCell> 
            </TableRow>
            </TableHead>
            <TableBody>
                <button onClick={prev}>Previous</button>
                <span> {page} </span>
                <button onClick={next}>Next</button>
                {list.map(elemento=>(
                    <TableRow key={elemento.id}>
                        <TableCell><img src={elemento.image} width="250px" height="120px"/></TableCell>
                        <TableCell> {"  "}{elemento.tittle}</TableCell>
                        <TableCell align="center">{elemento.shortDescription}</TableCell>
                        <TableCell align="center">{"$ "}{elemento.price}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
    );
}

export default TableMaterial;