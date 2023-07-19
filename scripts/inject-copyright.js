/*
hexo.extend.filter.register('theme_inject', function(injects) {
  injects.postCopyright.raw('default', `
  <% if (theme.post.copyright.enable && page.copyright !== false) { %>
    <%
      var license = theme.post.copyright.license || ''
      if (typeof page.copyright === 'string') {
        license = page.copyright
      } else if (typeof page.license === 'string') {
        license = page.license
      }
      license = license.toUpperCase()
    %>
  
    <div class="license-box my-3">
      <div class="license-title">
        <div><%= page.title %></div>
        <div><%= decode_url(page.permalink) %></div>
      </div>
      <div class="license-meta">
        <% if (theme.post.copyright.author.enable && (page.author || config.author)) { %>
          <div class="license-meta-item">
            <div><%- __('post.copyright.author') %></div>
            <div><%- page.author || config.author %></div>
          </div>
        <% } %>
        <% if (theme.post.copyright.post_date.enable && page.date) { %>
          <div class="license-meta-item license-meta-date">
            <div><%- __('post.copyright.posted') %></div>
            <div><%= full_date(page.date, theme.post.copyright.post_date.format || 'LL') %></div>
          </div>
        <% } %>
        <% if (theme.post.copyright.update_date.enable && page.updated && compare_date(page.date, page.updated)) { %>
          <div class="license-meta-item license-meta-date">
            <div><%- __('post.copyright.updated') %></div>
            <div><%= full_date(page.updated, theme.post.copyright.update_date.format || 'LL') %></div>
          </div>
        <% } %>
        <% if (license) { %>
          <div class="license-meta-item">
            <div><%- __('post.copyright.licensed') %></div>
            <div>
              <% if (['BY', 'BY-SA', 'BY-ND', 'BY-NC', 'BY-NC-SA', 'BY-NC-ND'].indexOf(license) !== -1) { %>
                <% var items = license.split('-') %>
                <% for (var idx = 0; idx < items.length; idx++) { %>
                  <a class="print-no-link" target="_blank" href="https://creativecommons.org/licenses/<%= license.toLowerCase() %>/4.0/">
                    <span class="hint--top hint--rounded" aria-label="<%- __('post.copyright.' + items[idx]) %>">
                      <i class="iconfont icon-<%= items[idx].toLowerCase() %>"></i>
                    </span>
                  </a>
                <% } %>
              <% } else { %>
                <%- license %>
              <% } %>
            </div>
          </div>
        <% } %>
        <% if (page.reproduce) { %>
          <div class="license-meta-item">
            <div>未经授权不得转载</div>
            <div><%= page.reproduce ? '是' : '否' %></div>
          </div>
        <% } %>
      </div>     
      <div class="license-icon iconfont"></div>     
    </div>
  <% } %>
  
  `);
});
*/

hexo.extend.filter.register('theme_inject', function(injects) {
  injects.postLeft.file('fontSizeCompoent', 'source/ejs/fontSizeCompoent.ejs', { key: 'value' }, -1);
  injects.postLeft.file('cplayer', 'source/ejs/cplayer.ejs', { key: 'value' }, -1);
});