<template>
    <h1>Some of my work</h1>
    <div class="portfolio-container">
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
        <div class="card"></div>
    </div>
</template>
<script>
</script>
<style lang="less">
.portfolio-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    max-width: 1000px;
    gap: 20px;
    margin: 0 auto;
    gap: 20px;

    .card {
        width: 300px;
        height: 500px;
        border: 1px solid red;
        border-radius: 20px;
    }
}

@media (min-width: 1260px) {
  .portfolio-container {
    grid-template-columns: repeat(4, 300px);
    justify-content: center;
  }
}

/* Sinon 2 × 2 */
@media (max-width: 1259px) {
  .portfolio-container {
    grid-template-columns: repeat(2, 300px);
    justify-content: center;
  }
}
</style>