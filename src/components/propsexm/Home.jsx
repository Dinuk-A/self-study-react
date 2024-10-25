// props is a way pass data from a parent comp to child comp..this is the parent comp
//BlogList is child comp

import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [books, setBooks] = useState([
        { id: 1, name: "Robin Hood", authour: "auth 01" },
        { id: 2, name: "ET", authour: "auth 02" },
        { id: 3, name: "ABC", authour: "auth 03" }
    ])


    return (
        <>
            {/* passing books to the child > its a dynamic value hence stored insdie curly brackets> an value that is not a string is inside a {}*/}
            {/* static values are passed with normal quotes */}
            <BlogList booksProp = {books} title="Static value passing" year={2024} />
        </>
    )
}

export default Home;