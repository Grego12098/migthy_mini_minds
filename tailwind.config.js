/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        skin: {
          base: "var(--color-bg-base)",
          secondary: "var(--color-bg-secondary)",
          input: "var(--color-bg-input)",
        },
      },
      after: {
        skin: {
          content: "var(--emoji)",
        },
      },

      textColor: {
        skin: {
          base: "var(--color-bg-base)",
          secondary: "var(--color-bg-secondary)",
          input: "var(--color-bg-input)",
        },
      },
      theme: {
        extend: {
          scale: {
            "-100": "-1",
          },
        },
      },
    },
    plugins: [],
  },
};
