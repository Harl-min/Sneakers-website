import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/features/productSlice";
import Card from '@mui/material/Card';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#EEEEEE85',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function FoodCard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const toggleModal = useSelector((state) => state);
  
 
  return (
    <div className="card-container">
    <div className="card-content">
        <div className="card-top">
        <img src={props.foodImage} alt="food" className="card-img" />
      </div>
      <div className="card-bottom">
        <h3>{props.foodName}</h3>
        {/* <p className="shoe-description">{props.foodDescription}</p> */}
        <h4 >₦ {props.foodPrice}</h4>
      </div>
      <p className="addCart-btn" onClick={(e) => {
            dispatch(
              addProduct({
                id: props.meal.id,
                MealName: props.meal.MealName,
                MealDescription: props.meal.MealDescription,
                MealPrice: props.meal.MealPrice,
                MealImage: props.meal.MealImage,
              })
            );
            navigate(`product/${props.id}`);
          }}
        >
          Add to cart
        </p>
      </div>
        </div>
  );
 
}

export default FoodCard;
