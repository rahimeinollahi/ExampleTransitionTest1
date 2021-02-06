<template >
    <div class="container mt-3">
  <h3>Input Groups</h3>
  <p>The .input-group class is a container to enhance an input by adding an icon, text or a button in front (.input-group-prepend) or behind (.input-group-append) the input field as a "help text".</p>
  <p>Use the .input-group-text class to style the specified help text.</p>
  
  <form action="/action_page.php">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text">@</span>
      </div>
      <input type="text" class="form-control" placeholder="Username" id="usr" name="username">
    </div>

    <div class="input-group mb-3">
      <input type="text" class="form-control" placeholder="Your Email" id="mail" name="email">
      <div class="input-group-append">
        <span class="input-group-text">@example.com</span>
      </div>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
</template>

<script>
    export default {
        name:'NetworkCtn'
    }
</script>

<style lang="scss" scoped>
.flex-continer
{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.flex-continer> input[type="text"]{
    flex: 4;
}
.flex-continer> label{
    flex: 1;
}
@media(max-width:576){
    .flex-continer{
        flex-direction: column;
        flex: 1;
        
    }
}
</style>