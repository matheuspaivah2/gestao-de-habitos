const CardList = ({List}) => {
    return(
        <div>
            {List && List.map((card) => (
                <div></div>
            ))}
        </div>
    ); 
}

export default CardList;