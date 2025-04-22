import { lazy } from "react";

const LazyLayout = lazy(
  () =>
    import(/*webpackChunkName:"LazyPage1" */ "../01-lazyload/pages/LazyPage1")
);
