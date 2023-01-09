import { TestContext } from "../../context/test.context";
import { useContext } from "react";

export const Test = () => {

    const { addValue, minusValue, currentValue } = useContext(TestContext);

    return(
        <>
            <div className="addminus">
                <button onClick={addValue}>+</button>
                <input type='text' value={currentValue} />
                <button onClick={minusValue}>-</button>
            </div>
        </>
    )
}