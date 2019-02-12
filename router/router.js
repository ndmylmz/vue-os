import Vue from "vue";
import VueRouter  from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: Store },
    { path: "/cart", component: ShoppingCart },
    { path: "/checkout", component: Checkout},
    { path: "/thanks/:id", component: OrderThanks},
    { path: "/login", component: Authentication },
    { path: "/admin", component: Admin,
      beforeEnter(to, from, next) {
        if (dataStore.state.auth.authenticated) {
          next();
        } else {
          next("/login");
        }
      },
      children: [
        { path: "products/:op(create|edit)/:id(\\d+)?",
          component: ProductEditor },
        { path: "products", component: ProductAdmin },
        { path: "orders", component: OrderAdmin },
        { path: "", redirect: "/admin/products"}
      ]
    },
    { path: "*", redirect: "/"}
  ]
})

