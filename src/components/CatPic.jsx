export function CatPic(props){
    return(
        <img className="rounded-lg h-48" src={props.src}/>
    )
}

export function LoadingIcon(){
    return(
        <div className="spinner"></div>
    )
}