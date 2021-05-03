export default function Productsedit(props){
    return <>
    <h1> Product Edit</h1>

    <p> Edit a product here for {props.match.params.id}</p>
    </>
}