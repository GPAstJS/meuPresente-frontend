/** @type {import('tailwindcss').Config} */

module.exports = {
    // JAMAIS FAÇA TROCAS DE ELEMENTOS NOS VALORES PADRÕES DO TAILWIND A MENOS QUE PRECISE!!!
    // Somente troque o comportamento padrão se não houver outra alternativa(bem improvável!)
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px"
        },
        //Use sempre extend pra extender o que já exsite, deixar as cores fora do extend, sobrescreve todas as cores novas e default
        extend: {
            colors: {
                logoSquare: "#E1E0EE",
                logoColor: "#31241E",
                eventFormLeft: "#CFD4DB",
                button: "#5E5B8E",
                logoCardBorder: "#68649D",
                purpleOpacity: "#EFEEFF",
                logoTemplateCasamento: "#3c3a59",
                grayVariation: "#f1f0fc",
                error: "#B71C1C",
                cart: "#6E6BA1",
                grayVariation2: "#ECECEC",
                blueVariation: "#451BAB"
            },
            backgroundImage: {
                casamento: "url('/src/assets/images/tobedefined.jpg')",
            },
            fontFamily: {
                //Adição de novas fontes sempre por @font-face e depois adicionar aqui
                roboto: ["Roboto", "sans-serif"],
                cinzel: ["Cinzel", "sans-serif"],
                roca: ["RocaTwoThin", "sans-serif"],
            },
            fontSize: {
                xs: "8rem",
                sm: "12rem",
                base: "16rem",
                xl: "20rem",
                "2xl": "24rem",
                "3xl": "28rem",
                "4xl": "32rem",
                "5xl": "36rem",
                "6xl": "40rem",
                "7xl": "44rem",
                "8xl": "60rem",
            },
        },
    },
    plugins: [require("tailgrids/plugin"), require("daisyui")],
    daisyui: {
        themes: false,
        darkTheme: "light",
        base: true,
        styled: true,
        utils: true,
        prefix: "",
        logs: true,
        themeRoot: ":root",
    }
};

