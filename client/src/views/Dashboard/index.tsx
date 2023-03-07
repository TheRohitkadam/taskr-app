import { FC } from "react";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { incrementByAmount } from "../../features/counter/counterSlice";

const Dashboard: FC = () => {
  const dispatch = useDispatch()
  const { value } = useSelector((state: RootState) => state.counter)

  return (
    <>
      Dashboard {value}
      <Button color="primary" variant="contained" onClick={() => dispatch(incrementByAmount(4))}>
        Primary
      </Button>
      <Button color="secondary" variant="contained" onClick={() => dispatch(incrementByAmount(24))}>
        Secondary
      </Button>
    </>
  );
};

export default Dashboard;
