import { useData } from "../../hooks";
import { API } from "../../constants";
import { useParams } from "react-router-dom";
import "./style.css";
import styles from "./style.module.css";

export const IdMeal = () => {
  let { idMeal } = useParams();
  const data = useData(`${API.byId}${idMeal}`);
  if (!data || !data.meals || data.meals.length === 0) {
    return <div>Loading...</div>;
  }
  const { strMeal, strMealThumb } = data?.meals[0];
  let listIng = [];
  let listForImage = [];
  for (let i = 1; i < 21; i++) {
    let item = "strIngredient" + i;
    let measure = "strMeasure" + i;
    let IngredItem = data.meals[0][item];
    let measureItem = data.meals[0][measure];
    if (IngredItem) {
      listIng.push(`${IngredItem} - ${measureItem}`);
    }
    listForImage.push(
      `https://www.themealdb.com/images/ingredients/${IngredItem}-small.png`
    );
  }

  console.log(listIng);
  //   const { strMeal } = data.meals[0];
  console.log(data?.meals[0]);
  const { strInstructions } = data?.meals[0];
  let instructions = strInstructions.split("\n");
  console.log(instructions);

  return (
    <section className='product-section'>
      <div className='block-product'>
        <div className='name-and-image'>
          <img className='imageForProduct' src={strMealThumb} alt={strMeal} />
          <p className={styles.nameProduct}>{strMeal}</p>
        </div>
        <ul className='ingr-list'>
          {listIng.map((item, index) => {
            return (
              <li className='ingr-item'>
                <img
                  className='ingr-Image'
                  src={listForImage[index]}
                  alt={item}
                />
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <p className={styles.title}>Instructions</p>
        {instructions.map((item) => {
          return <p className={styles.text}>{item}</p>;
        })}
      </div>
    </section>
  );
};

// {listForImage.map((itemImga) => {
//     if (!itemImga) {
//       return null;
//     }
//     let ref = `https://www.themealdb.com/images/ingredients/${itemImga}-small.png`;
//     return <img src={ref} alt={strMeal} />;
//   })}
