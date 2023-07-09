hexo.extend.filter.register('theme_inject', function(injects) {
  injects.postCopyright.raw('default', `
    <div class="license-meta-item">
      <div>未经授权不得转载</div>
    </div>
  `);
});