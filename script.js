// optional: add a small keyboard shortcut to open games
document.addEventListener('keydown', (e)=>{
  if (e.key === '1') window.location.href = 'connect4.html';
  if (e.key === '2') window.location.href = 'snake.html';
});

// highlight button if target file missing
function checkFiles(){
  ['connect4.html','snake.html'].forEach(name=>{
    fetch(name, {method:'HEAD'}).then(r=>{
      if (!r.ok) document.querySelectorAll('a[href="'+name+'"]').forEach(a=>{
        a.classList.remove('primary');
        a.style.opacity = '0.5';
        a.title = 'File missing — place ' + name + ' in same folder';
      });
    }).catch(_=>{
      document.querySelectorAll('a[href="'+name+'"]').forEach(a=>{
        a.classList.remove('primary');
        a.style.opacity = '0.5';
        a.title = 'File missing — place ' + name + ' in same folder';
      });
    });
  });
}
if (window.fetch) checkFiles();
