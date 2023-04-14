import{_ as n,e as s}from"./app.530372a1.js";const a={},e=s(`<h1 id="docker\u642D\u5EFAredis" tabindex="-1"><a class="header-anchor" href="#docker\u642D\u5EFAredis" aria-hidden="true">#</a> docker\u642D\u5EFAredis</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> -p /tian/redis

<span class="token function">touch</span> /tian/redis/redis.conf

<span class="token comment">#\u6DFB\u52A0\u53C2\u6570\uFF1A	</span>
<span class="token comment"># Redis\u914D\u7F6E\u6587\u4EF6</span>
<span class="token comment"># Redis\u9ED8\u8BA4\u4E0D\u662F\u4EE5\u5B88\u62A4\u8FDB\u7A0B\u7684\u65B9\u5F0F\u8FD0\u884C\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BE5\u914D\u7F6E\u9879\u4FEE\u6539\uFF0C\u4F7F\u7528yes\u542F\u7528\u5B88\u62A4\u8FDB\u7A0B</span>
daemonize no

<span class="token comment"># \u6307\u5B9ARedis\u76D1\u542C\u7AEF\u53E3\uFF0C\u9ED8\u8BA4\u7AEF\u53E3\u4E3A6379</span>
port <span class="token number">6379</span>

<span class="token comment"># \u7ED1\u5B9A\u7684\u4E3B\u673A\u5730\u5740\uFF0C\u4E0D\u8981\u7ED1\u5B9A\u5BB9\u5668\u7684\u672C\u5730127.0.0.1\u5730\u5740\uFF0C\u56E0\u4E3A\u8FD9\u6837\u5C31\u65E0\u6CD5\u5728\u5BB9\u5668\u5916\u90E8\u8BBF\u95EE</span>
<span class="token builtin class-name">bind</span> <span class="token number">0.0</span>.0.0

<span class="token comment"># \u6301\u4E45\u5316</span>
appendonly <span class="token function">yes</span>

<span class="token comment"># \u8BBE\u7F6E\u5BC6\u7801</span>
requirepass redispasswd




<span class="token function">docker</span> run -d --name<span class="token operator">=</span>redis -p <span class="token number">6379</span>:6379 -v /tian/redis/conf/redis.conf:/etc/conf/redis.conf -v /tian/redis/data:/data redis:3.2 redis-server /etc/conf/redis.conf



</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,2);function r(p,c){return e}var i=n(a,[["render",r],["__file","redis.html.vue"]]);export{i as default};
