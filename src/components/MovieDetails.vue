<template>
  <div class="details">
    <div class="details-valid" v-if="details.title">
      <div class="header">
        <div class="title-year">
          <div class="details-title">{{details.title}}</div>
          <div class="details-year">({{details.year}})</div>
        </div>
      </div>
      <div class="details-grid">
        <div class="details-col not-plot">
          <div class="poster">
              <img :src="details.poster" width="192" />
          </div>
          <div class="lang-runtime-cast">
            <div class="row-lang-runtime">
              <div class="details-cell ">
                <div class="detail-heading">LANGUAGE</div>
                <div class="detail-value" v-for="(lang, index) in details.language">{{lang}}</div>
              </div>
              <div class="details-cell">
                <div class="detail-heading">DURATION</div>
                <div class="detail-value">{{details.runtime}}s</div>
              </div>
            </div>
            <div class="row-cast">
              <div class="details-cell">
                <div class="detail-heading">CAST</div>
                <div class="detail-value" v-for="(actor, index) in details.actors">{{actor}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="details-col plot">
          <div class="synopsis-heading">Synopsis</div>
          <div class="synopsis-value">
            {{details.plot}}
          </div>
        </div>
      </div>
    </div>
    <div class="details-null" v-if="!details.title">
      <div class="call-to-action">Please select a title from the sidebar</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "MovieDetails",
    props: ['details'],
    setup({ details }) {
      return { 
      }
    }
  };
</script>
<style>
  .details {
    position: absolute;
    left: 328px;
    top: 0;
    height: 100%;
  }
  
  .header {
    height: 300px;
    width: 100%;
    background: linear-gradient(0deg, #000000 2.92%, rgba(0, 0, 0, 0.6875) 100%);
    color: rgb(255, 255, 255);
  }

  .title-year {
    position: relative;
    left: 120px;
    top: 160px;
  }
  
  .details-title {
    font-weight: 700;
    font-size: 36px;
    line-height: 43px;
  }
  
  .details-year {
    margin-top: 8px;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
  }
  
  .details-grid {
    display: table-row;
  }
  
  .details-col {
    display: table-cell;
    padding-top: 40px;
    vertical-align: top;
  }

  .details-col.not-plot {
    padding-left: 120px;
  }
  .details-col.plot {
    padding-left: 40px;
  }

  .detail-heading {
    line-height: 14.4px;
    font-size: 12px;
    color: rgb(130, 130, 130);
  }

  .detail-value {
    line-height: 16.8px;
    font-size: 14px;
    color: rgb(0, 0, 0);
  }

  .details-col > .poster {
    margin-top: 0;
    margin-left: 0;
  }

  .lang-runtime-cast {
    position: relative;
    margin-top: 21px;
    width: 192px;
  }

  .row-lang-runtime {
    display: table-row;
  }

  .row-lang-runtime > .details-cell {
    display: table-cell;
    width: 96px;
  }

  .details-cell {
    border: 1px solid rgb(194, 194, 194);
    padding: 8px;
  }

  .synopsis-heading {
    line-height: 28.8px;
    font-size: 24px;
    font-weight: 700;
  }
  .synopsis-value {
    line-height: 19.2px;
    font-size: 16px;
    font-weight: 400;
  }

  .call-to-action {
    position: relative;
    width: 386px;
    height: 29px;
    left: 384px;
    top: 497px;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: rgb(181, 181, 181);
  }
</style>