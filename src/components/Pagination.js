import React from "react";
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "../commons/Home";
import {useSelector } from "react-redux";

const Pagination = ({ itemsPerPage }) => {
  const user = useSelector((state) => state.user);
 
  const one = `http://www.omdbapi.com/?apikey=cc4627c5&s=superman`;
  const two = `http://www.omdbapi.com/?apikey=cc4627c5&s=marvel`;
  const three = `http://www.omdbapi.com/?apikey=cc4627c5&s=batman`;
  const four = `http://www.omdbapi.com/?apikey=cc4627c5&s=spider-man`;

  const pedidoOne = axios.get(one);
  const pedidoTwo = axios.get(two);
  const pedidoThree = axios.get(three);
  const pedidoFour = axios.get(four);

  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.all([pedidoOne, pedidoTwo, pedidoThree, pedidoFour]).then(
      axios.spread((...responses) => {
        const responseOne = responses[0];
        const responseTwo = responses[1];
        const responseThree = responses[2];
        const responseFour = responses[3];

        // use/access the results
        setItems(
          [
            responseOne.data.Search,
            responseTwo.data.Search,
            responseThree.data.Search,
            responseFour.data.Search,
          ]
            .flat()
            .sort(() => Math.random() - 0.5)
        );
      })
    );
  }, []);

  const [currentItems, setCurrentItems] = useState(null);
  // We start with an empty list of items.
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  
  
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items, user]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="container ">
      <Home currentItems={currentItems} />
     
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={4}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
