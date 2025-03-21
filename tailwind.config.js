/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        sm: "390px",
        md: "744px",
        lg: "1024px",
        xl: "1440px",
      },
      textColor: {
        skin: {
          base: enableOpacity("--color-text-base"),
          muted: enableOpacity("--color-text-muted"),
          inverted: enableOpacity("--color-text-inverted"),
          accent: enableOpacity("--color-text-accent"),
          "accent-inverted": enableOpacity("--color-text-accent-inverted"),
        },
      },
      backgroundColor: {
        skin: {
          fill: enableOpacity("--color-fill"),
          "button-accent": enableOpacity("--color-button-accent"),
          "button-accent-hover": enableOpacity("--color-button-accent-hover"),
          "button-muted": enableOpacity("--color-button-muted"),
          "button-muted-hover": enableOpacity("--color-button-muted-hover"),
          "card-accent": enableOpacity("--color-card-accent"),
          "card-accent-hover": enableOpacity("--color-card-accent-hover"),
          "card-muted": enableOpacity("--color-card-muted"),
          "card-muted-hover": enableOpacity("--color-card-muted-hover"),
        },
      },
      boxShadowColor: {
        base: enableOpacity("--shadow-base"),
        accent: enableOpacity("--shadow-accent"),
        muted: enableOpacity("--shadow-muted"),
        inverted: enableOpacity("--shadow-inverted"),
      },
      borderColor: {
        base: enableOpacity("--border-base"),
        accent: enableOpacity("--border-accent"),
        muted: enableOpacity("--border-muted"),
        inverted: enableOpacity("--border-inverted"),
      },
      stroke: {
        base: enableOpacity("--border-base"),
        accent: enableOpacity("--border-accent"),
        muted: enableOpacity("--border-muted"),
        inverted: enableOpacity("--border-inverted"),
      },
      ringColor: {
        base: enableOpacity("--border-base"),
        accent: enableOpacity("--border-accent"),
        muted: enableOpacity("--border-muted"),
        inverted: enableOpacity("--border-inverted"),
      },
    },
  },
  plugins: [],
};

function enableOpacity(baseText) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      console.log(baseText);
      return `rgba(var(${baseText}), ${opacityValue})`;
    } else {
      return `rgb(var(${baseText}))`;
    }
  };
}
