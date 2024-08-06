import TextItem from "./text";

const text = "Hallo";
 
function Div() {
    return (
      <div>
        <TextItem txt={text}/>
      </div>
    );
}

export default Div;