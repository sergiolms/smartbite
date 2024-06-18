import "./Card.css";
import Image from "next/image";

/* 
// Sample data
"waffles": {
    "name": "Waffles",
    "kcal": 250,
    "ingredients": ["harina", "huevos", "leche", "azúcar", "mantequilla"],
    "sugars": 14,
    "fiber": 2,
    "fat": 12,
    "protein": 6,
    "carbohydrates": 30,
    "allergies": ["gluten", "huevos", "lácteos"],
    "portion": 100
}
*/
function Card({image, data}) {
    return (
        <li className="link-card">
            <Image src={URL.createObjectURL(image)} alt={data.name} />
            <div>
            <h2>{data.name} <small>(información por {data.portion} gr)</small></h2>
                <ul>
                    <li>{data.kcal} kcal</li>
                    { data.allergies && <li>Alérgenos: {data.allergies.join(", ")}</li> }
                    <li>Ingredientes: {data.ingredients.join(", ")}</li>
                </ul>
                <table>
                    <thead>
                        <tr>
                            <th>Azúcares</th>
                            <th>Fibra</th>
                            <th>Grasas</th>
                            <th>Proteínas</th>
                            <th>Carbohidratos</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.sugars}</td>
                            <td>{data.fiber}</td>
                            <td>{data.fat}</td>
                            <td>{data.protein}</td>
                            <td>{data.carbohydrates}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </li>
    );
  }
  
  export default Card;
  