import React from "react";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import '../Styles/pagination.css'

const Pagina = (props) => {
    const {charactersPerPage, totalCharacters, paginate} = props;
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalCharacters/charactersPerPage); i++){ 
        //Math.ceil Devuelve el nro entero más proximo al resultado de la division
        pageNumbers.push(i);

    }
    return(
        <div className="pagination row mt-2">
        <Pagination>
            {
                pageNumbers.map(page => 
                <PaginationItem key={page} className="item">
                    <PaginationLink onClick={() => paginate(page)} previous href="#">{page}</PaginationLink>
                </PaginationItem>
                )
            }
        </Pagination>
        </div>
        
    )
}
export default Pagina;


