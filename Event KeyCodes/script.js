const insert = document.getElementById('insert');
const container = document.getElementById('container');

window.addEventListener('keydown', (event) => {
  
    insert.innerHTML = `
    <div class="container">
    ${event.key == ' ' ? 'Space' : event.key} - ${event.which}
    </div>
    <div class="key">
    ${event.key == ' ' ? 'Space' : event.key}
    <small>event.key</small>
</div>

<div class="key">
    ${event.location}
    <small>event.location</small>
</div>

<div class="key">
    ${event.which}
    <small>event.which</small>
</div>

<div class="key">
    ${event.code}
    <small>event.code</small>
</div>
`
})
