import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "343281902be546bea7248db8f2a3f59e"
    }
})