import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../Redux/features/productSlice";
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#EEEEEE85',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function ShoeCard(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const toggleModal = useSelector((state) => state);
  
 
  return (
    <div className="card-container">
    <div className="card-content">
        <div className="card-top">
        <img src={props.shoeImage} alt="shoe" className="card-img" />
      </div>
      <div className="card-bottom">
        <h3>{props.shoeName}</h3>
        {/* <p className="shoe-description">{props.shoeDescription}</p> */}
        <h4 >₦ {props.shoePrice}</h4>
      </div>
      <p className="addCart-btn" onClick={(e) => {
            dispatch(
              addProduct({
                id: props.meal.id,
                ShoeName: props.meal.ShoeName,
                ShoeDescription: props.meal.ShoeDescription,
                ShoePrice: props.meal.ShoePrice,
                ShoeImage: props.meal.ShoeImage,
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

export default ShoeCard;
