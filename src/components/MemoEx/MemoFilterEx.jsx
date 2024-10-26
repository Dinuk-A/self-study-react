import React, { useState, useMemo } from 'react';

function ListComponent() {
    const [items, setItems] = useState(["Alice", "Bob", "Charlie", "David", "Eve", "Frank"]);
    const [filter, setFilter] = useState("");
    const [newItem, setNewItem] = useState(""); // State for the new item input

    // Memoize the filtered list; it only recomputes when `filter` or `items` changes
    const filteredItems = useMemo(() => {
        console.log("Filtering items...");  // To show when filtering runs
        return items.filter(item => item.toLowerCase().includes(filter.toLowerCase()));
    }, [filter, items]);

    const addItem = () => {
        if (newItem.trim() !== "") { // Ensure the input is not empty
            setItems(prevItems => [...prevItems, newItem]);
            setNewItem(""); // Clear the input after adding
        }
    };

    return (
        <div>
            <h2>Item List</h2>
            <div>
                <input
                    type="text"
                    placeholder="New Item"
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <button onClick={addItem}>Add New Item</button>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Filter names"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                />
            </div>
            <ul>
                {filteredItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

export default ListComponent;
