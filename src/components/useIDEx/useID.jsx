import React, { useId } from 'react';

//inspect the console for to see unique IDs in html tags
const UniqueIDs = () => {

    //test single useID for both NOT RECOMMENDED 💥
    const id = useId();

    const singleIdForAllEx = useId();

    //test unique useIDs for each
    const nameId = useId();
    const emailId = useId();

    return (
        <form>

            {/* TEST SINGLE ID FOR BOTH >> NOT RECOMMENDED 💥 */}
            {/* <div>
                <label htmlFor={id}>Name:</label>
                <input type="text" id={id} />
            </div>
            <div>
                <label htmlFor={id}>Email:</label>
                <input type="email" id={id} />
            </div> */}

            {/* IF MULTIPLE THINGS ARE HERE AND THEY NEEDED MORE USEID HOOK CALLS, USE A SINGLE USEID IS GOOD(IMPROVE PERFORMANCES) BUT USE FOLLOWING  METHOD ✅ */}
            <div>
                <label htmlFor={`${singleIdForAllEx}-name`}>Name:</label>
                <input type="text" id={`${singleIdForAllEx}-name`} />
            </div>
            <div>
                <label htmlFor={`${singleIdForAllEx}-email`}>Email:</label>
                <input type="email" id={`${singleIdForAllEx}-email`} />
            </div>


            {/* TEST UNIQUE IDS FOR EACH ✅ */}
            {/* <div>
                <label htmlFor={nameId}>Name:</label>
                <input type="text" id={nameId} />
            </div>
            <div>
                <label htmlFor={emailId}>Email:</label>
                <input type="email" id={emailId} />
            </div>
            <button type="submit">Submit</button> */}
        </form>
    );
};

export default UniqueIDs;