/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        // eslint-disable-next-line no-undef
        prependData: `@import "./src/styles/variables/index.scss";`, // O `@use "variables.scss" as *;` si usas SCSS con módulos
      },
};

export default nextConfig;
