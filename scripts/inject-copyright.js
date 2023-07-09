hexo.extend.filter.register('theme_inject', function(injects) {
  injects.postCopyright.raw('reproduce', `
    <div class="additional-copyright">
      <p>未经授权不得转载</p>
    </div>
  `);
});