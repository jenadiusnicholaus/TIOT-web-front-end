<template>
  <!-- ============ Body content start ============= -->
  <div class="main-content">
    <breadcumb :page="'v1'" :folder="'Dashboard'" />
    <b-row>
      <!-- ICON BG -->

      <b-col lg="3" md="6" sm="12">
        <b-card
          class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
        >
          <i class="i-Shop"></i>
          <div class="content">
            <p class="text-muted mt-2 mb-0">Properties</p>
            <p class="text-primary text-24 line-height-1 mb-2">205</p>
          </div>
        </b-card>
      </b-col>
      <b-col lg="3" md="6" sm="12">
        <b-card
          class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
        >
          <i class="i-Financial"></i>
          <div class="content">
            <p class="text-muted mt-2 mb-0">units</p>
            <p class="text-primary text-24 line-height-1 mb-2">4021</p>
          </div>
        </b-card>
      </b-col>
      <b-col lg="3" md="6" sm="12">
        <b-card
          class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
        >
          <i class="i-Checkout-Basket"></i>
          <div class="content">
            <p class="text-muted mt-2 mb-0">Tenants</p>
            <p class="text-primary text-24 line-height-1 mb-2">80</p>
          </div>
        </b-card>
      </b-col>
      <b-col lg="3" md="6" sm="12">
        <b-card
          class="card-icon-bg card-icon-bg-primary o-hidden mb-30 text-center"
        >
          <i class="i-Money-2"></i>
          <div class="content">
            <p class="text-muted mt-2 mb-0">Maintainers</p>
            <p class="text-primary text-24 line-height-1 mb-2">1200</p>
          </div>
        </b-card>
      </b-col>
    </b-row>

    <b-row>
      <b-col lg="12" md="12" sm="12">
        <b-card class="mb-30">
          <h4 class="card-title m-0">Rent overview</h4>
          <div class="chart-wrapper">
            <!-- <apexchart
              type="bar"
              height="350"
              :options="dashboardOne.chartOptions"
              :series="dashboardOne.series"
            ></apexchart> -->
            <apexchart
              type="bar"
              height="350"
              :options="distributedColumnChart.chartOptions"
              :series="distributedColumnChart.chartOptions.series"
            />
          </div>
        </b-card>
      </b-col>
    </b-row>

    <div class="row">
      <div class="col-md-6">
        <div class="card mb-30">
          <div class="card-body p-0">
            <h5 class="card-title border-bottom p-3 mb-2">Properties</h5>

            <!-- <vue-good-table
              :columns="columns"
              :line-numbers="false"
              styleClass="order-table vgt-table"
              :rows="rows"
            >
            </vue-good-table> -->

            <vue-good-table
              :columns="columns"
              :line-numbers="true"
              :search-options="{
                enabled: true,
                placeholder: 'Search this table',
              }"
              :pagination-options="{
                enabled: true,
                mode: 'records',
              }"
              styleClass="tableOne vgt-table"
              :selectOptions="{
                enabled: true,
                selectionInfoClass: 'table-alert__box',
              }"
              :rows="rows"
            >
              <div slot="table-actions" class="mb-3">
                <b-button variant="primary" class="btn-rounded">
                  Add Button
                </b-button>
              </div>

              <template slot="table-row" slot-scope="props">
                <span v-if="props.column.field == 'button'">
                  <a href="">
                    <i class="i-Eraser-2 text-25 text-success mr-2"></i>
                    {{ props.row.button }}</a
                  >
                  <a href="">
                    <i class="i-Close-Window text-25 text-danger"></i>
                    {{ props.row.button }}</a
                  >
                </span>
              </template>
            </vue-good-table>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="card mb-30">
          <div class="card-body p-0">
            <h5 class="card-title border-bottom p-3 mb-2">Tickets</h5>
            <!-- 
            <vue-good-table
              :columns="columns"
              :line-numbers="false"
              styleClass="order-table vgt-table"
              :rows="rows"
            >
            </vue-good-table> -->
            <vue-good-table
              :columns="columns"
              :line-numbers="true"
              :search-options="{
                enabled: true,
                placeholder: 'Search this table',
              }"
              :pagination-options="{
                enabled: true,
                mode: 'records',
              }"
              styleClass="tableOne vgt-table"
              :selectOptions="{
                enabled: true,
                selectionInfoClass: 'table-alert__box',
              }"
              :rows="rows"
            >
              <div slot="table-actions" class="mb-3">
                <b-button variant="primary" class="btn-rounded">
                  Add Button
                </b-button>
              </div>

              <template slot="table-row" slot-scope="props">
                <span v-if="props.column.field == 'button'">
                  <a href="">
                    <i class="i-Eraser-2 text-25 text-success mr-2"></i>
                    {{ props.row.button }}</a
                  >
                  <a href="">
                    <i class="i-Close-Window text-25 text-danger"></i>
                    {{ props.row.button }}</a
                  >
                </span>
              </template>
            </vue-good-table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ============ Body content End ============= -->
</template>
<script>
// import { multipleYxis, basicColumnChart } from "@/data/apexChart";
import {
  dashboardOne,
  dashboardTwo,
  splineAreaWidgetTwo,
  splineAreaWidgetThree,
} from "@/data/dashboard1";

import { distributedColumnChart } from "@/data/apexChart";

export default {
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: "Dashboard v1",
  },
  data() {
    return {
      dashboardOne,
      dashboardTwo,
      splineAreaWidgetTwo,
      splineAreaWidgetThree,
      distributedColumnChart,
      columns: [
        {
          label: "Name",
          field: "name",
        },
        {
          label: "Span",
          field: "span",
          html: true,
        },
        {
          label: "Created On",
          field: "createdAt",
          type: "date",
          dateInputFormat: "yyyy-mm-dd",
          dateOutputFormat: "MMM Do yy",
        },
        {
          label: "Percent",
          field: "score",
          type: "percentage",
        },
        {
          label: "Button",
          field: "button",
          html: true,
          tdClass: "text-right",
          thClass: "text-right",
        },
      ],
      rows: [
        {
          id: 1,
          name: "John",
          span: '<span class="badge badge-primary">Primary</span>',
          createdAt: "2019-10-29",
          score: 0.03343,
        },
        {
          id: 2,
          name: "Jane",
          span: '<span class="badge badge-danger">Primary</span>',
          createdAt: "2011-10-31",
          score: 0.03343,
        },
        {
          id: 3,
          name: "Susan",
          span: '<span class="badge badge-warning">Primary</span>',
          createdAt: "2011-10-30",
          score: 0.03343,
        },
        {
          id: 4,
          name: "Chris",
          span: '<span class="badge badge-primary">Primary</span>',
          createdAt: "2011-10-11",
          score: 0.03343,
        },
        {
          id: 5,
          name: "Dan",
          span: '<span class="badge badge-danger">Primary</span>',
          createdAt: "2011-10-21",
          score: 0.03343,
        },
        {
          id: 6,
          name: "John",
          span: '<span class="badge badge-success">success</span>',
          createdAt: "2011-10-31",
          score: 0.03343,
        },
        {
          id: 1,
          name: "John",
          span: '<span class="badge badge-warning">Warning</span>',
          createdAt: "2019-10-29",
          score: 0.03343,
        },
        {
          id: 2,
          name: "Jane",
          span: '<span class="badge badge-info">Info</span>',
          createdAt: "2011-10-31",
          score: 0.03343,
        },
        {
          id: 3,
          name: "Susan",
          span: '<span class="badge badge-dark">Dark</span>',
          createdAt: "2011-10-30",
          score: 0.03343,
        },
        {
          id: 4,
          name: "Chris",
          span: '<span class="badge badge-warning">Warning</span>',
          createdAt: "2011-10-11",
          score: 0.03343,
        },
        {
          id: 5,
          name: "Dan",
          span: '<span class="badge badge-info">Info</span>',
          createdAt: "2011-10-21",
          score: 0.03343,
        },
        {
          id: 6,
          name: "John",
          span: '<span class="badge badge-primary">Primary</span>',
          createdAt: "2011-10-31",
          score: 0.03343,
        },
      ],
      profile: "",
    };
  },
  methods: {},

  mounted() {
    // this.userProfile();
  },
};
</script>
