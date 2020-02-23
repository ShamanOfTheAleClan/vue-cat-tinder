<template>
  <div>
    <div class="line"></div>
    <p class="matcher__bio">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae commodi minus maiores eveniet ratione sed repellendus? Qui accusamus itaque molestias culpa pariatur suscipit, adipisci illo fugiat tempore quia laboriosam laborum? <br/>
    In delectus molestias debitis asperiores placeat hic, minus ipsam accusamus neque distinctio eius pariatur corporis veniam quasi fugit amet! Quia placeat fugiat voluptate hic, quis voluptas doloribus corrupti nostrum iusto.</p>
  </div>
</template>

<script>
export default {
  name: 'MathersBio'
}
</script>

<style lang="scss">
  .matcher__bio {
    font-family: "Montserrat";
    font-size: 18px;
    font-weight: 500;
    line-height: 1.5;
    color: #888;
  }

  .line {
    border-bottom: 1px solid #eee;
    // width: 100%;
    margin: 30px -20px;
  }
</style>
