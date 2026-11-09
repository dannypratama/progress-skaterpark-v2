// All internal links and asset paths go through base() so they work on GitHub Pages (/progress-skaterpark-v2/).
export const base = (path = "/") => {
  const root = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  return `${root}${String(path).replace(/^\//, "")}`;
};
