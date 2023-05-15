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
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 1 }}>
        {Array.from(Array(1)).map((_, index) => (
          <Grid xs={2} sm={4} md={1} key={index}>
            <Item>
              <div className="mui-card" onClick={(e) => {
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
          }}>
             <div className="card-top">
        <img src={props.foodImage} alt="food" className="card-img" />
        <p>{props.foodName}</p>
        <p className="shoe-description">{props.foodDescription}</p>
      </div>
      <div className="card-bottom">
        <p >₦ {props.foodPrice}</p>
        <p
          className="addCart-btn"
        >
          Add to cart
        </p>
      </div>
              </div>
            </Item>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default FoodCard;
