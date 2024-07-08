import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../state/store"
import { decrement, increment } from "../state/Slices/conterSlice"

const Conter = () => {
    const count = useSelector((state: RootState) => state.conter.value);
    const dispatch=useDispatch()
    return (
        <div>
            <h2>{count}</h2>
            <div>
                <button onClick={()=>dispatch(increment())}>Increment</button>
                <button onClick={()=>dispatch(decrement())}>Decrement</button>
            </div>
        </div>
    )
}

export default Conter