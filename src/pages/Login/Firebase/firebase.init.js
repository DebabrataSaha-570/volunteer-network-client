import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const InitializeAuthentication = () => {
    initializeApp(firebaseConfig)
}
export default InitializeAuthentication;

