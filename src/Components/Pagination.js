import React from "react";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Pagina = (props) => {
    const {charactersPerPage, totalCharacters, paginate} = props;
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalCharacters/charactersPerPage); i++){ 
        //Math.ceil Devuelve el nro entero más proximo al resultado de la division
        pageNumbers.push(i);

    }
    return(
        <>
        <Pagination className="position- absolute end-50">
            {
                pageNumbers.map(page => 
                <PaginationItem key={page}>
                    <PaginationLink onClick={() => paginate(page)} previous href="#">{page}</PaginationLink>
                </PaginationItem>
                )
            }
        </Pagination>
        </>
        
    )
}
export default Pagina;


