import { StaticImageData } from "next/image";
import { Instagram, Tiktok, Twitter, Youtube } from "../../images";

export const capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const getInputType = (field: string) => {
    let type = "text";
    switch(field) {
        case "email":
            type = "email";
            break;
        case "phone":
            type = "tel";
            break;
    }

    return type;
}

export const getSocialMediaIcon = (socialMedia: string) => {
    let img: (StaticImageData | string) = "";

    switch(socialMedia) {
        case "instagram":
            img = Instagram;
            break;
        case "tiktok":
            img = Tiktok;
            break;
        case "twitter":
            img = Twitter;
            break;
        case "youtube":
            img = Youtube;
            break;
    }

    return img;
}