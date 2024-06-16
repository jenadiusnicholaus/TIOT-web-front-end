<template>
  <div>
    <header class="vertical-header bg-white d-flex justify-content-between">
      <div style="margin: auto"></div>
      <div class="header-part-right">
        <button type="button" class="btn btn-outline-primary ripple m-1">
          Register
        </button>
        <button type="button" class="btn btn-outline-primary ripple m-1">
          login
        </button>
      </div>
    </header>

    <div class="main container">
      <div class="text-center ul-border__bottom bold">
        <h1 class="text-center">Services</h1>
        <h5 class="card-title text-primary">Inline or block element</h5>
      </div>

      <section class="mt-5">
        <b-row>
          <b-col lg="4" class="mb-30">
            <b-card class="ul-border__bottom">
              <div class="text-center">
                <h5 class="card-title text-primary">Inline or block element</h5>

                <a
                  class="t-font-boldest text-primary ul-cursor--pointer"
                  v-b-toggle.collapse-a
                >
                  Toggle Content
                </a>
              </div>

              <b-collapse id="collapse-a" class="mt-3 text-center">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch.
              </b-collapse>
            </b-card>
          </b-col>

          <b-col lg="4" class="mb-30">
            <b-card class="ul-border__bottom">
              <div class="text-center">
                <h5 class="card-title text-primary">Text and other links</h5>

                <a
                  class="font-weight-semibold typo_link text-primary t-font-boldest text-primary"
                  v-b-toggle.collapse-b
                >
                  Toggle content
                </a>
              </div>
              <b-collapse id="collapse-b" class="mt-3 text-center">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch.
              </b-collapse>
            </b-card>
          </b-col>

          <b-col lg="4" class="mb-30">
            <b-card class="ul-border__bottom">
              <div class="text-center">
                <h5 class="card-title text-primary">
                  Single or multiple icons
                </h5>

                <a class="text-default collapsed" v-b-toggle.collapse-c>
                  <i class="i-Arrow-Down-2 t-font-boldest text-primary"></i>
                </a>
              </div>
              <b-collapse id="collapse-c" class="mt-3 text-center">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch.
              </b-collapse>
            </b-card>
          </b-col>

          <b-col lg="4" class="mb-30">
            <b-card class="ul-border__bottom">
              <div class="text-center">
                <h5 class="card-title text-primary">Link with href</h5>

                <a class="btn btn-primary text-white" v-b-toggle.collapse-d>
                  Toggle content
                </a>
              </div>
              <b-collapse id="collapse-d" class="mt-3 text-center">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch.
              </b-collapse>
            </b-card>
          </b-col>

          <b-col lg="4" class="mb-30">
            <b-card class="ul-border__bottom">
              <div class="text-center">
                <h5 class="card-title text-primary">
                  Button with data attribute
                </h5>

                <button
                  type="button"
                  class="btn btn-primary"
                  v-b-toggle.collapse-e
                >
                  Toggle content
                </button>
              </div>
              <b-collapse id="collapse-e" class="mt-3 text-center">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch.
              </b-collapse>
            </b-card>
          </b-col>
          <b-col lg="4" class="mb-30">
            <b-card class="ul-border__bottom">
              <div class="text-center">
                <h5 class="card-title text-primary">
                  Button with data attribute
                </h5>

                <button
                  type="button"
                  class="btn btn-primary"
                  v-b-toggle.collapse-f
                >
                  Toggle content
                </button>
              </div>
              <b-collapse id="collapse-f" class="mt-3 text-center">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch.
              </b-collapse>
            </b-card>
          </b-col>
          <b-col lg="4" class="mb-30">
            <b-card class="ul-border__bottom">
              <div class="text-center">
                <h5 class="card-title text-primary">
                  Button with data attribute
                </h5>

                <button
                  type="button"
                  class="btn btn-primary"
                  v-b-toggle.collapse-f
                >
                  Toggle content
                </button>
              </div>
              <b-collapse id="collapse-f" class="mt-3 text-center">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch.
              </b-collapse>
            </b-card>
          </b-col>
          <b-col lg="4" class="mb-30">
            <b-card class="ul-border__bottom">
              <div class="text-center">
                <h5 class="card-title text-primary">
                  Button with data attribute
                </h5>

                <button
                  type="button"
                  class="btn btn-primary"
                  v-b-toggle.collapse-f
                >
                  Toggle content
                </button>
              </div>
              <b-collapse id="collapse-f" class="mt-3 text-center">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch.
              </b-collapse>
            </b-card>
          </b-col>
          <b-col lg="4" class="mb-30">
            <b-card class="ul-border__bottom">
              <div class="text-center">
                <h5 class="card-title text-primary">
                  Button with data attribute
                </h5>

                <button
                  type="button"
                  class="btn btn-primary"
                  v-b-toggle.collapse-f
                >
                  Toggle content
                </button>
              </div>
              <b-collapse id="collapse-f" class="mt-3 text-center">
                Anim pariatur cliche reprehenderit, enim eiusmod high life
                accusamus terry richardson ad squid. 3 wolf moon officia aute,
                non cupidatat skateboard dolor brunch.
              </b-collapse>
            </b-card>
          </b-col>
        </b-row>
      </section>

      <section>
        <h1 class="text-center ul-border__bottom bold">Products</h1>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import StarRating from "vue-star-rating";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "List Table",
  },
  components: {
    // StarRating,
  },
  data() {
    return {
      rating: 4,
      search: "",
      isProduct: true,
      filterBrand: "",
      priceValue: 500,
      selectedFilter: "",
      selectPriceRange: "",
      priceRange: 1,
      value: 1,
      items: "",
      paginatedItems: "",
      currentPage: 1,
      perPage: 9,
      // totalRows: '',
      isFirst: false,
      // button
      isListView: true,
      // isGridVIew:false,
      selected: [], // Must be an array reference!
      // options: [
      //   { text: 'Orange', value: 'orange' },
      //   { text: 'Apple', value: 'apple' },
      //   { text: 'Pineapple', value: 'pineapple' },
      //   { text: 'Grape', value: 'grape' }
      // ],
      featured: null,
      featuredOptions: [
        { value: null, text: "Featured" },
        { value: "a", text: "Highest Price" },
        { value: "b", text: "Lowest Price" },
      ],
      // brandsCount: this.$store.getters.brandsCount,
      // brands: this.$store.state.brands
    };
  },
  computed: {
    ...mapGetters([
      "getItems",
      "brandsCount",
      "getBrandsItem",
      "getFilterProducts",
      "getCategoryItem",
      "getAddToCarts",
    ]),
    totalRows() {
      return this.getFilterProducts.length;
    },
    filterItems() {
      return this.getFilterProducts;
    },
    // searchProducts(){
    //   return this.getFilterProducts.filter(item => item.title.toLowerCase().match(this.search.toLowerCase()))
    // }
    filterProducts() {
      // return this.getItems.filter((filterSearch) => {
      //     return filterSearch.toLowerCase().match(this.search.toLowerCase());
      // });

      return this.getFilterProducts.filter((item) =>
        item.title.toLowerCase().match(this.search.toLowerCase())
      );
    },
  },
  created: function () {
    this.items = this.getItems;
  },
  methods: {
    ...mapActions([
      "addCart",
      "addBrandToFilter",
      "addCategoryItem",
      "ascendingOrderCart",
      "descendingOrderCart",
      "changeThemeRtl",
      "changeThemeLayout",
      "changeThemeMode",
      "changecompactLeftSideBarBgColor",
    ]),

    setRating: function (rating) {
      this.rating = rating;
      console.log((this.rating = rating));
    },
    addCartPage(item) {
      this.addCart(item);
      this.$bvToast.toast(`${item.qty} item added to the cart successfully`, {
        title: "Click View Cart",
        variant: "primary",
        solid: true,
        autoHideDelay: 700,
      });
      // this.$swal({

      //   toast: true,
      //   position: "top-end",
      //   showConfirmButton: false,
      //   timer: 1000,
      //   type: "success",
      //   title: `${ item.qty } item added to the cart successfully`
      // });

      // this.$router.push("/app/apps/checkout");
    },
    viewProduct() {
      // this.$router.push("product-detail")
      // console.log(this.getFilterProducts.filter(item => item.title.toLowerCase().match(this.search.toLowerCase())));
      // console.log(this.search);
    },
    addBrandToFilterPage(checkedArray) {
      checkedArray = this.$refs.checkFilter;
      checkedArray = checkedArray
        .filter((element) => element.checked)
        .map((element) => element.value);
      // console.log(checkedArray);
      this.addBrandToFilter(checkedArray);
      this.paginatePerPage();
    },
    paginatePerPage() {
      this.paginate(this.perPage, 0);
    },
    addCategoryItemPage(data) {
      this.addCategoryItem(data);
      this.paginatePerPage();
    },
    ascendingOrderCartPage() {
      this.ascendingOrderCart();
      this.paginatePerPage();
    },
    descendingOrderCartPage() {
      this.descendingOrderCart();
      this.paginatePerPage();
    },

    redirectCheckout() {
      this.$router.push("/app/apps/checkout");
    },
    onRadioButtonChange(data) {
      if (data == "asc") {
        // console.log("Working", this.ascendingOrderCart());
      }
    },

    viewCart() {
      this.$router.push("./product-detail");
    },
    // button
    listView() {
      this.isListView = true;
    },
    gridView() {
      this.isListView = false;
    },

    // end-button
    paginate(pageSize, pageNumber) {
      let itemsToParse = this.filterProducts;
      this.paginatedItems = itemsToParse.slice(
        pageNumber * pageSize,
        (pageNumber + 1) * pageSize
      );
    },
    onPageChanged(page) {
      this.paginate(this.perPage, page - 1);
    },
  },
  mounted() {
    this.paginate(this.perPage, 0);
    this.changeThemeLayout("horizontal-bar");
  },
};
</script>
