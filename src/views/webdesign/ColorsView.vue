<template>
  <section class="first-section">
    <div class="container content-holder">
      <div class="row justify-content-center align-items-center header-row">
        <h1 class="text-center">Color palettes</h1>
      </div>
      <div
        class="row justify-content-center align-items-center g-0 quote-row mb-5"
      >
        <div class="col">
          <h3 class="text-center">
            "There are harmonies and contrasts hidden in colors which
            automatically work together"
            <span class="vincent"> – Vincent van Gogh</span>
          </h3>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="row text-center color-row g-0 pt-5 pb-5" v-for="color in colors">
      <div class="col-3">
        <div class="color-first" :style="{ background: color[0] }"></div>
        <p>{{color[0]}}</p>
      </div>
      <div class="col-3">
        <div class="color-second" :style="{ background: color[1] }"></div>
        <p>{{color[1]}}</p>
      </div>
      <div class="col-3">
        <div class="color-third" :style="{ background: color[2] }"></div>
        <p>{{color[2]}}</p>
      </div>
      <div class="col-3">
        <div class="color-last" :style="{ background: color[3] }"></div>
        <p>{{color[3]}}</p>
      </div>
    </div>
    </div>

  </section>
</template>

<script>
export default {
  name: "ColorsView",
  data() {
    return {
      colors: [
        ["#e8505b", "#f9d56e", "#f3ecc2", "#14b1ab"],
  ["#7189bf", "#df7599", "#ffc785", "#72d6c9"],
  ["#8fcfd1", "#df5e88", "#f6ab6c", "#f6efa6"],
  ["#eeeeee", "#393e46", "#76ead7", "#c4fb6d"],
  ["#f7fbe1", "#bac964", "#438a5e", "#436f8a"],
  ["#76977D", "#DC7260", "#7694AB", "#6B6D6C"],
  ["#333652", "#FAD02C", "#E9EAEC", "#90ADC6"],
  ["#184d47", "#96bb7c", "#d6efc7", "#eebb4d"],
  ["#7fe7cc", "#dfe38e", "#efca8c", "#f17e7e"],
  ["#654062", "#ff9c71", "#fbd46d", "#e8ead3"],
  ["#6c5b7c", "#c06c84", "#f67280", "#f8b195"],
  ["#30475e", "#ba6b57", "#f1935c", "#e7b2a5"],
  ["#ef476f", "#ffd166", "#06d6a0", "#118ab2"],
  ["#086972", "#01a9b4", "#87dfd6", "#fbfd8a"],
  ["#38908f", "#b2ebe0", "#5e96ae", "#ffbfa3"],
  ["#ddf3f5", "#a6dcef", "#f2aaaa", "#e36387"],
  ["#eb7070", "#fec771", "#e6e56c", "#64e291"],
  ["#eef9bf", "#a7e9af", "#75b79e", "#6a8caf"],
  ["#efee9d", "#d1eaa3", "#dbc6eb", "#abc2e8"],
  ["#ea907a", "#fbc687", "#f4f7c5", "#aacdbe"],
  ["#f46060", "#f09872", "#f3d179", "#dce8ba"],
  ["#6e5773", "#d45d79", "#ea9085", "#e9e2d0"],
  ["#f6d186", "#fcf7bb", "#cbe2b0", "#f19292"],
  ["#60a9a6", "#caf2d7", "#f5fec0", "#fddede"],
  ["#f5b5fc", "#96f7d2", "#f0f696", "#fcb1b1"],
  ["#fff1ac", "#f9bcdd", "#d5a4cf", "#b689b0"],
  ["#feadb9", "#bc85a3", "#9799ba", "#487ba6"],
  ["#f6a7c1", "#fcf0cf", "#fdcf76", "#b16e4b"],
  ["#70ae98", "#e6b655", "#f0a35e", "#ca7e8d"],
  ["#70ae98", "#ecbe7a", "#e58b88", "#9dabdd"],
  ["#f3ddb3", "#c1cd97", "#e18d96", "#909090"],
  ["#b7e778", "#40dab2", "#be6283", "#ed7575"],
  ["#FFB067", "#FFED86", "#A2DCE7", "#F8CCDC"],
  ["#f9e090", "#ff935c", "#dc5353", "#a72461"],
  ["#c7f0db", "#8bbabb", "#6c7b95", "#464159"],
  ["#2d3561", "#c05c7e", "#f3826f", "#ffb961"],
  ["#f4ff61", "#a8ff3e", "#32ff6a", "#27aa80"],
  ["#EAEAE0", "#1C4670", "#278AB0", "#1DC690"],
  ["#114b5f", "#1a936f", "#88d498", "#c6dabf"],
  ["#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"],
  ["#8cc9ba", "#fd8e7b", "#f3d04e", "#fd6d48"],
  ["#5D6C89", "#36D6E7", "#FEB06A", "#FBF6F3"],
  ["#E43D40", "#F37970", "#F85C70", "#FABEC0"],
  ["#E1C340", "#4CD7D0", "#A4E8E0", "#F8EA8C"],
  ["#FFAEBC", "#A0E7E5", "#B4F8C8", "#FBE7C6"],
  ["#b4dcd1", "#d7e7a9", "#d3c0f9", "#f99a9c"],
  ["#d3f6f3", "#f9fce1", "#fee9b2", "#fbd1b7"],
  ["#c3946c", "#a5d1db", "#f2c2d3", "#e9d1fd"],
  ["#3c9099", "#5fbdb0", "#e3e2c3", "#f0efe2"],
  ["#A06AB4", "#FFD743", "#07BB9C", "#D773A2"],
  ["#66D2D6", "#FBC740", "#BD97CB", "#E56997"],
  ["#EEB5EB", "#C26DBC", "#C8F4F9", "#3CACAE"],
  ["#4E1A3D", "#CFEED1", "#FF2768", "#05E0E9"],
  ["#82A4E3", "#52688F", "#F7CB2D", "#A2C4E0"],
  ["#B6CCD7", "#BC9C22", "#361B28", "#BF8422"],
  ["#0A7029", "#FEDE00", "#C8DF52", "#DBE8D8"],
  ["#43B14B", "#E6D7D5", "#9E6F6D", "#1E3148"],
  ["#DED93E", "#8BCD50", "#1D741B", "#8FA01F"],
  ["#1E2640", "#F3EAC0", "#DC9750", "#922C40"],
  ["#FF8882", "#543855", "#E88D72", "#FBB574"],
  ["#523A28", "#A47551", "#D0B49F", "#E4D4C8"],
  ["#836559", "#F4F8F3", "#CDAC79", "#628474"],
  ["#FFA303", "#A2ABCE", "#F5631A", "#FFE0AE"],
  ["#FF6501", "#B78326", "#BD2514", "#86785C"],
  ["#672901", "#D41E00", "#FEEBA0", "#F76201"],
  ["#9F2B00", "#D37506", "#D3D3CB", "#ADA7A7"],
  ["#953638", "#F5F0DD", "#1C516C", "#FDA649"],
  ["#013A20", "#478C5C", "#BACC81", "#CDD193"],
  ["#B2D2A4", "#1A4314", "#2C5E1A", "#32CD30"],
  ["#4C5270", "#F652A0", "#36EEE0", "#BCECE0"],
  ["#B1D4E0", "#2E8BC0", "#0C2D48", "#145DA0"],
  ["#18A558", "#A3EBB1", "#21B6A8", "#116530"],
  ["#7A871E", "#104210", "#E55B13", "#F6A21E"],
  ["#DAD870", "#FFCD58", "#FF9636", "#FF5C4D"],
  ["#010100", "#FDB750", "#FC2E20", "#FD7F20"],
  ["#F3BC50", "#25C0C0", "#FA53A0", "#FC8BC0"],
  ["#D2B33F", "#836421", "#ECE7CE", "#836F4C"],
  ["#96A1A8", "#00E0EA", "#00BBD1", "#FCF8F6"],
  ["#BED7D8", "#E151AF", "#2BB8B3", "#FED43F"],
  ["#CBCDCB", "#607D86", "#C44B4F", "#4C5355"],
  ["#746C70", "#4E4F50", "#E2DED0", "#647C90"],
  ["#4B443C", "#4D0011", "#53565A", "#E4E5E8"],
  ["#C0C0C0", "#6C6A61", "#EDE4E3", "#6C6A61"],
  ["#EEEDE7", "#868B8E", "#B9B7BD", "#E7D2CC"]
      ],
    };
  },
};

</script>

<style scoped>
.first-section {
  background-color: var(--my_light);
  color: #4b597b;
}

.header-row {
  height: 50vh;
}

.color-first {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  background-color: #ffe3dc;
  height: 100px;
  margin-bottom: 20px;
}

.color-second {
  background-color: #dbb4ad;
  height: 100px;
  margin-bottom: 20px;
}

.color-third {
  background-color: #a2ad91;
  height: 100px;
  margin-bottom: 20px;
}

.color-last {
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: #3a2d32;
  height: 100px;
  margin-bottom: 20px;
}

.quote-row {
  background-color: var(--my_light);
  box-shadow: 4px 12px 40px 6px rgba(0, 0, 0, 0.09);
  padding: 20px;
  border-radius: 10px;
}

.vincent {
  display: inline-block;
  font-size: 1rem;
}
</style>
