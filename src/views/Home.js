import { Button } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import { incremented } from "../store/counter";

function Home() {
  const value = useSelector((state)=> state.counter.value)
  const dispatch = useDispatch();

  const add = () => dispatch(incremented());


  return(
    <div>
      Home
      <h2>{value}</h2>
      <Button onClick={add}>test</Button>
    </div>
  )
}

export default Home;