import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firestore_config";

export default function changeCategories() {

    return async (dispatch) => {

        try {
            const response = await getDocs(collection(db, "category"));
            const categoriesOfDB = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            dispatch({ type: "SET_Categories", payload: categoriesOfDB });
        } catch (err) {
            console.log(err);
        }

    }
}