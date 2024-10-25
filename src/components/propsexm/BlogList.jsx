//this is child comp that acepting the props obj

const BlogList = (props) => {

    //method 1 ✅
    //destructure inside the main parameter
    //has to be the same prop name in parent obj
    // BlogList = ({booksProp, title})

    //method 2 BlogList = (props)  ✅
    //recieve and store values from props inside a var
    const booksVar = props.booksProp;
    const titleVar = props.title;

    console.log(props);
    console.log(props.booksProp);
    console.log(titleVar);

    //method 3 ✅
    //directly get the value(date example)

    return (
        <>
            <h2>{titleVar}</h2>
            <h1 style={{fontSize:'28px'}}>{props.year}</h1>
            <hr />
            {booksVar.map((b) => (
                <div key={b.id}>
                    <span style={{ fontSize: '24px' }}>{b.name}</span>  by
                    <span style={{ fontSize: '18px', color: 'red' }}>{b.authour}</span>
                    <hr />
                </div>
            ))}
        </>
    )
}

export default BlogList;