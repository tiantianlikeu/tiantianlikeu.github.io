import{_ as s,e as n}from"./app.530372a1.js";const a={},e=n(`<h1 id="docker-\u642D\u5EFAmysql" tabindex="-1"><a class="header-anchor" href="#docker-\u642D\u5EFAmysql" aria-hidden="true">#</a> docker \u642D\u5EFAmysql</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
<span class="token function">docker</span> run -d -p <span class="token number">3306</span>:3306 --name mysql -v /tian/mysql/conf:/etc/mysql/conf.d -v /tian/mysql/logs:/logs -v /tian/mysql/data:/var/lib/mysql -e <span class="token assign-left variable">MYSQL_ROOT_PASSWORD</span><span class="token operator">=</span>admin -d mysql:5.7<span class="token punctuation">;</span>

<span class="token function">touch</span> /tian/mysql/conf/my.cnf

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,2);function l(r,c){return e}var i=s(a,[["render",l],["__file","mysql.html.vue"]]);export{i as default};
