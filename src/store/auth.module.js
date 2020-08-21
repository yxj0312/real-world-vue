import ApiService from "@/common/api.service";
import JwtService from "@/common/jwt.service";

const state = {
    errors: null,
    user: {},
    isAuthenticated: !!JwtService.getToken()
}

const getters = {
    isAuthenticated(state) {
        return state.isAuthenticated;
    }
}

export default {
    state,
    getters
};
