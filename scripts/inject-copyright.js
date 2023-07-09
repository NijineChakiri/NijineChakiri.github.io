hexo.extend.filter.register('theme_inject', function(injects) {
  injects.postCopyright.raw('default', `
    <div class="additional-copyright">
      <p>未经授权不得转载</p>
    </div>
  `);
});