import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";
const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.vue",
    ],

    theme: {
        colors: {
            "company-blue": { default: "#005299", light: "#50abf9" },
            transparent: "transparent",
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            emerald: colors.emerald,
            indigo: colors.indigo,
            yellow: colors.yellow,
            blue: colors.blue,
        },
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            zIndex: {
                999: "999",
            },
        },
    },

    plugins: [forms],
};
