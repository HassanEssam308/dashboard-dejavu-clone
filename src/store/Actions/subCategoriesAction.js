
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../../config/firestore_config";

export default function changeSubCategories() {

    return async (dispatch) => {

        try {
            const subcatRef=collection(db, "subcategory")
            const response = await getDocs(query(subcatRef, orderBy("name")));
            const SubcategoriesOfDB = response.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
            dispatch({ type: "SET_SubCategories", payload: SubcategoriesOfDB });
        } catch (err) {
            console.log(err);
        }

    }
}