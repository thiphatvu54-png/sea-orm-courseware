document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('pre').forEach((block) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'copy-button';
    button.textContent = '复制代码';
    button.addEventListener('click', async () => {
      const code = block.querySelector('code')?.innerText ?? block.innerText;
      try {
        await navigator.clipboard.writeText(code);
        button.textContent = '已复制';
        setTimeout(() => { button.textContent = '复制代码'; }, 1600);
      } catch (_) {
        button.textContent = '复制失败';
        setTimeout(() => { button.textContent = '复制代码'; }, 1600);
      }
    });
    block.classList.add('code-block');
    block.append(button);
  });
});
