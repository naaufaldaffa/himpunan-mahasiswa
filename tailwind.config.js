/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    fontFamily: {
      poppins: ["Poppins"],
      montserrat: ["Montserrat"],
    },
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      backgroundImage: {
        "banner-bg": "url('PNG/Banner.png')",
        "banner2-bg": "url('PNG/Wallpaper Adhicakra 2.png')",
        "banner3-bg": "url('PNG/Wallpaper Adhicakra.png')",
        "banner4-bg": "url('PNG/Wallpaper Adhicakra 3.png')",
        "banner5-bg": "url('PNG/Wallpaper Adhicakra 4.png')",
        "banner6-bg": "url('PNG/Wallpaper Adhicakra 5.png')",
      },
      colors: {
        primary: "#78089F",
        warna2: "#F0535A",
        warna3: "#F89E30",
      },
      screens: {
        "2xl": "1320px",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
