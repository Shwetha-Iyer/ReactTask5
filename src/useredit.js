export default function Useredit(props){
    return <>
    <h1> User Edit {props.match.params.id}</h1>
    <p>Edit the user details for id : {props.match.params.id}</p>
    </>
}