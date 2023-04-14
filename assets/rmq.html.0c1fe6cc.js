import{_ as n,e as a}from"./app.530372a1.js";const s={},e=a(`<h1 id="docker\u642D\u5EFArmq" tabindex="-1"><a class="header-anchor" href="#docker\u642D\u5EFArmq" aria-hidden="true">#</a> docker\u642D\u5EFArmq</h1><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">#\u4E00\uFF1A\u8BBE\u7F6E\u7528\u6237\u540D\u548C\u5BC6\u7801</span>
<span class="token function">docker</span> run -d --hostname my-rabbit --name rabbit -e <span class="token assign-left variable">RABBITMQ_DEFAULT_USER</span><span class="token operator">=</span>user -e <span class="token assign-left variable">RABBITMQ_DEFAULT_PASS</span><span class="token operator">=</span>password -p <span class="token number">15672</span>:15672 -p <span class="token number">5672</span>:5672 rabbitmq:management
<span class="token comment">#\u4E8C\uFF1A\u6620\u5C04\u6587\u4EF6\u76EE\u5F55</span>
<span class="token comment"># \u5148\u542F\u52A8\u4E00\u4E2A\u4E0D\u5E26\u6620\u5C04\u76EE\u5F55\u7684rabbitmq</span>
<span class="token function">docker</span> <span class="token function">cp</span> -a rabbit:/var/lib/rabbitmq /tian/rabbitmq/lib/
<span class="token function">docker</span> <span class="token function">cp</span> -a rabbit:/etc/rabbitmq /tian/rabbitmq/etc/
<span class="token function">docker</span> <span class="token function">cp</span> -a rabbit:/var/log/rabbitmq /tian/rabbitmq/log/

<span class="token comment">#\u4E09\uFF1A\u5220\u9664\u7B2C\u4E00\u6B21\u542F\u52A8\u7684rabbitmq</span>

<span class="token function">docker</span> <span class="token function">rm</span> -f rabbit

<span class="token comment"># \u542F\u52A8rabbit</span>
<span class="token function">docker</span> run -d --hostname rabbit <span class="token punctuation">\\</span>
 --name rabbit --privileged<span class="token operator">=</span>true <span class="token punctuation">\\</span>
 -v /tian/rabbit/rabbitmq/etc:/etc/rabbitmq <span class="token punctuation">\\</span>
 -v /tian/rabbit/rabbitmq/lib:/var/lib/rabbitmq <span class="token punctuation">\\</span>
 -v /tian/rabbit/rabbitmq/log:/var/log/rabbitmq <span class="token punctuation">\\</span>
 -p <span class="token number">15672</span>:15672 -p <span class="token number">5672</span>:5672 rabbitmq:management<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,2);function r(t,p){return e}var c=n(s,[["render",r],["__file","rmq.html.vue"]]);export{c as default};
