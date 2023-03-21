import { collection, getDocs, limit } from "firebase/firestore";
import { db } from "../../config/firestore_config";

export default function ProductsList() {

    return async (dispatch) => {

        try {
            const response = await getDocs(collection(db, "product"));
            const productslist= response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            dispatch({ type: "Set_Products", payload: productslist});
        } catch (err) {
            console.log(err);
        }

    }
}