<script lang="ts">
  import { onMount } from "svelte";
  import { default as ReduxCounter } from "../redux/Counter.svelte";

  onMount(() => {
    document.getElementById("defaultOpen").click();
  })

  function openCity(event) {
    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
      (tabcontent[i] as HTMLElement).style.display = "none";
    }

    let tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(this).style.display = "block"; // this <- param passed

    event.currentTarget.className += " active";
  }
</script>

<div class="tab">
  <button class="tablinks active" on:click="{openCity.bind('Redux')}" id="defaultOpen">Redux</button>
  <button class="tablinks" on:click="{openCity.bind('Valtio')}">Valtio</button>
  <button class="tablinks" on:click="{openCity.bind('Redux-2')}">Redux-2</button>
  <button class="tablinks" on:click="{openCity.bind('XState')}">Valtio</button>
  <button class="tablinks" on:click="{openCity.bind('DOM')}">DOM</button>
  <button class="tablinks" on:click="{openCity.bind('Immer')}">Immer</button>
  <button class="tablinks" on:click="{openCity.bind('RxJs')}">RxJs</button>
  <button class="tablinks" on:click="{openCity.bind('Custom')}">Custom</button>
</div>

<div id="Redux" class="tabcontent">
  <h3>Redux</h3>
  <ReduxCounter /> 
</div>

<div id="Valtio" class="tabcontent">
  <h3>Valtio</h3>
  <p>Valtio is the capital of Japan.</p>
</div>

<div id="Redux-2" class="tabcontent">
  <h3>Redux-2</h3>
  <p>Redux-2 is the capital of France.</p> 
</div>

<div id="XState" class="tabcontent">
  <h3>XState</h3>
  <p>XState is the capital of Japan.</p>
</div>

<div id="DOM" class="tabcontent">
  <h3>DOM</h3>
  <p>DOM is the capital of France.</p> 
</div>

<div id="Immer" class="tabcontent">
  <h3>Immer</h3>
  <p>Immer is the capital of Japan.</p>
</div>

<div id="RxJs" class="tabcontent">
  <h3>RxJs</h3>
  <p>RxJs is the capital of France.</p> 
</div>

<div id="Custom" class="tabcontent">
  <h3>Custom</h3>
  <p>Custom is the capital of Japan.</p>
</div>

<style lang="scss">
/* Style the tab */
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  padding: 0.2rem;
  
  /* Style the buttons inside the tab */
  button {
    background-color: inherit;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 0.6rem;
    transition: 0.3s;
    font-size: 1rem;
    
    /* Change background color of buttons on hover */
    &:hover {
      background-color: #ddd;
    }
    
    /* Create an active/current tablink class */
    &.tablinks.active {
      background-color: #ccc;
    }
  }
}


/* Style the tab content */
.tabcontent {
  display: none;
  font-size: 1rem;
  padding: 0.6rem;
  border: 1px solid #ccc;
  border-top: none;
  animation: fadeEffect 1s; /* Fading effect takes 1 second */
}

/* Go from zero to full opacity */
@keyframes fadeEffect {
  from {opacity: 0;}
  to {opacity: 1;}
}
</style>
