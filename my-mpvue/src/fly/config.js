
import config from "../../config/index"


export const ajaxBaseUrl = process.env.NODE_ENV === "production" ? config.build.ajaxBaseUrl : config.dev.ajaxBaseUrl;

export const router = process.env.NODE_ENV === "production" ? config.build.assetsPublicPath : config.dev.assetsPublicPath;
