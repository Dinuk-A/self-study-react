// "{children}" is a special react prop that represent any thing(any text, image,another components...etc) that will be written inside this component's start and end tag

//children is a built-in React prop that represents any elements passed between the opening and closing tags of a component. children is a placeholder that can be replaced by any content (like text, HTML, or other components)

//it will insert the children content at the spot where {children} is used in the main component code

//check other files to see how to use this prop

const MainCard =({children})=>{

    return(
        <div className="border rounded-md p-4 shadow-black shadow-md bg-blue-400 ">
            {children}
        </div>
    )

}

export default MainCard;