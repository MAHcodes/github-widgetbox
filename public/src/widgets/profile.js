"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const utils_1 = require("../utils");
const error_1 = __importDefault(require("./error"));
function profileWidget(username) {
    try {
        return axios_1.default
            .get('https://api.github.com/users/' + username)
            .then((response) => {
            return utils_1.requestInBase64(response.data.avatar_url).then((avatar) => {
                return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="842" height="165" viewBox="0 0 842 165">
                                    <defs>
                                    <filter id="card" x="0" y="0" width="842" height="165" filterUnits="userSpaceOnUse">
                                        <feOffset dy="3" input="SourceAlpha"/>
                                        <feGaussianBlur stdDeviation="5" result="blur"/>
                                        <feFlood flood-opacity="0.161"/>
                                        <feComposite operator="in" in2="blur"/>
                                        <feComposite in="SourceGraphic"/>
                                    </filter>
                                    <pattern id="pattern" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" viewBox="0 0 200 200">
                                        <image width="200" height="200" xlink:href="data:image/jpeg;base64,${avatar}"/>
                                    </pattern>
                                    </defs>
                                    <g id="profile-card" transform="translate(-1370 -2006)">
                                    <g transform="matrix(1, 0, 0, 1, 1370, 2006)" filter="url(#card)">
                                        <rect id="card-2" data-name="card" width="812" height="135" rx="30" transform="translate(15 12)" fill="#fff"/>
                                    </g>
                                    <rect id="profile-image" width="65" height="65" rx="30" transform="translate(1422 2053)" fill="url(#pattern)"/>
                                    <text id="text-name" data-name="text-name" transform="translate(1515 2084)" font-size="26" font-family="Roboto-Medium, Roboto" font-weight="500"><tspan x="0" y="0">${response.data.name}</tspan></text>
                                    <text id="text-url" data-name="text-url" transform="translate(1515 2108)" fill="#bfbfbf" font-size="16" font-family="Roboto-Regular, Roboto"><tspan x="0" y="0">GitHub.com/${username}</tspan></text>
                                    <g id="stars" transform="translate(41 -6)">
                                        <rect id="stars-box" width="90" height="37" rx="18.5" transform="translate(2019 2073)" fill="#ffefd1"/>
                                        <text id="_24" data-name="24" transform="translate(2067.486 2098)" fill="orange" font-size="16" font-family="Roboto-Regular, Roboto"><tspan x="0" y="0">10</tspan></text>
                                        <path id="stars-icon" d="M9.6.608,7.369,5.131l-4.992.728a1.094,1.094,0,0,0-.6,1.865l3.611,3.519L4.53,16.215a1.093,1.093,0,0,0,1.585,1.151l4.465-2.347,4.465,2.347a1.094,1.094,0,0,0,1.585-1.151l-.854-4.971,3.611-3.519a1.094,1.094,0,0,0-.6-1.865l-4.992-.728L11.561.608A1.094,1.094,0,0,0,9.6.608Z" transform="translate(2041.073 2082.753)" fill="orange"/>
                                    </g>
                                    <g id="followers" transform="translate(1474 1672)">
                                        <rect id="followers-box" width="90" height="37" rx="18.5" transform="translate(358 395)" fill="#d1efff"/>
                                        <text id="_100" data-name="100" transform="translate(406.4 420)" fill="#00c4ff" font-size="16" font-family="Roboto-Regular, Roboto"><tspan x="0" y="0">100</tspan></text>
                                        <path id="followers-icon" d="M3.625,9.5A2.417,2.417,0,1,0,1.208,7.084,2.419,2.419,0,0,0,3.625,9.5Zm16.919,0a2.417,2.417,0,1,0-2.417-2.417A2.419,2.419,0,0,0,20.544,9.5Zm1.208,1.208H19.336a2.41,2.41,0,0,0-1.7.7,5.524,5.524,0,0,1,2.836,4.132h2.493a1.207,1.207,0,0,0,1.208-1.208V13.126A2.419,2.419,0,0,0,21.753,10.709Zm-9.668,0a4.23,4.23,0,1,0-4.23-4.23A4.228,4.228,0,0,0,12.085,10.709Zm2.9,1.208h-.313a5.84,5.84,0,0,1-5.174,0H9.185a4.352,4.352,0,0,0-4.351,4.351v1.088a1.813,1.813,0,0,0,1.813,1.813H17.523a1.813,1.813,0,0,0,1.813-1.813V16.269A4.352,4.352,0,0,0,14.985,11.918Zm-8.448-.506a2.41,2.41,0,0,0-1.7-.7H2.417A2.419,2.419,0,0,0,0,13.126v1.208a1.207,1.207,0,0,0,1.208,1.208H3.7A5.538,5.538,0,0,1,6.537,11.412Z" transform="translate(372.6 403.791)" fill="#00c4ff"/>
                                    </g>
                                    <g id="repositories" transform="translate(1588 1672)">
                                        <rect id="repository-box" width="90" height="37" rx="18.5" transform="translate(358 395)" fill="#ffd1e3"/>
                                        <text id="_100-2" data-name="100" transform="translate(401.2 420)" fill="#fa3a75" font-size="16" font-family="Roboto-Regular, Roboto"><tspan x="0" y="0">100</tspan></text>
                                        <path id="repository-icon" d="M7.106,3A2.106,2.106,0,0,0,5,5.106V17.74a.7.7,0,0,0,.207.5,2.026,2.026,0,0,0,1.9,1.608h.7v-1.4h-.7a.7.7,0,0,1,0-1.4H17.634a1.4,1.4,0,0,0,1.4-1.4V4.4a1.4,1.4,0,0,0-1.4-1.4Zm.7,2.106h.7a.7.7,0,0,1,.7.7v.7a.7.7,0,0,1-.7.7h-.7a.7.7,0,0,1-.7-.7v-.7A.7.7,0,0,1,7.808,5.106Zm0,3.51h.7a.7.7,0,0,1,.7.7v.7a.7.7,0,0,1-.7.7h-.7a.7.7,0,0,1-.7-.7v-.7A.7.7,0,0,1,7.808,8.615Zm0,3.51h.7a.7.7,0,0,1,.7.7v.7a.7.7,0,0,1-.7.7h-.7a.7.7,0,0,1-.7-.7v-.7A.7.7,0,0,1,7.808,12.125Zm1.4,6.317v3.51l2.106-1.4,2.106,1.4v-3.51Zm5.615,0v1.4h3.51a.7.7,0,0,0,0-1.4Z" transform="translate(372.8 402.049)" fill="#fa3a75"/>
                                    </g>
                                    </g>
                                </svg>`;
            });
        });
    }
    catch (error) {
        return new Promise(() => {
            return error_1.default('Profile', '-25%', 'GitHub API-call error!', '-24%');
        });
    }
}
exports.default = profileWidget;
//# sourceMappingURL=profile.js.map